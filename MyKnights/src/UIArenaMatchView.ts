//removeEventListener
class UIArenaMatchView extends egret.gui.Panel {
    public knight_anim_layer:egret.gui.Group;
    public label_match_title:egret.gui.Label;
    public label_tick_num:egret.gui.Label;

    public label_self_name:egret.gui.Label;
    public label_enemy_name:egret.gui.Label;
    public label_hint:egret.gui.Label;
    public back_btn:egret.gui.Button;

    // Self knights
    public self_frame_0:egret.gui.UIAsset;
    public self_body_0:egret.gui.UIAsset;
    public self_body_mask_0:egret.gui.UIAsset;
    public self_frame_1:egret.gui.UIAsset;
    public self_body_1:egret.gui.UIAsset;
    public self_body_mask_1:egret.gui.UIAsset;
    public self_frame_2:egret.gui.UIAsset;
    public self_body_2:egret.gui.UIAsset;
    public self_body_mask_2:egret.gui.UIAsset;
    public self_frame_3:egret.gui.UIAsset;
    public self_body_3:egret.gui.UIAsset;
    public self_body_mask_3:egret.gui.UIAsset;
    public self_frame_4:egret.gui.UIAsset;
    public self_body_4:egret.gui.UIAsset;
    public self_body_mask_4:egret.gui.UIAsset;

    // Enemy knights
    public enemy_frame_0:egret.gui.UIAsset;
    public enemy_body_0:egret.gui.UIAsset;
    public enemy_body_mask_0:egret.gui.UIAsset;
    public enemy_frame_1:egret.gui.UIAsset;
    public enemy_body_1:egret.gui.UIAsset;
    public enemy_body_mask_1:egret.gui.UIAsset;
    public enemy_frame_2:egret.gui.UIAsset;
    public enemy_body_2:egret.gui.UIAsset;
    public enemy_body_mask_2:egret.gui.UIAsset;
    public enemy_frame_3:egret.gui.UIAsset;
    public enemy_body_3:egret.gui.UIAsset;
    public enemy_body_mask_3:egret.gui.UIAsset;
    public enemy_frame_4:egret.gui.UIAsset;
    public enemy_body_4:egret.gui.UIAsset;
    public enemy_body_mask_4:egret.gui.UIAsset;
    
    public ui_wait:UIWaitView;

    public guiLayer:egret.gui.UIStage;

    public tick_count:number = 0;
    public waiting_tick_timer:egret.Timer = null;

    public has_get_enemy:boolean = false;

    public constructor(){
        super();
        this.skinName = "skins.UIArenaMatchViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.getMatchPlayerInfo();
        this.initMatchView();

        this.back_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitView, this);

        this.waiting_tick_timer = new egret.Timer(1000, 1);
        this.waiting_tick_timer.addEventListener(egret.TimerEvent.TIMER, this.onWaitingTick, this);
        this.waiting_tick_timer.start();
    }

    private initMatchView() {
        this.label_tick_num.text = "";
        this.label_self_name.text = Logic.player_name;

        this.refreshHintText();
        this.setEnemyTeamVisible(false);

        var knight_info = Logic.getPlayerKnight();
        var knight_dragon = Utils.createDragonBone(Utils.getKnightDragonName(knight_info.type, true));
        var dd = knight_dragon.getDisplay()
        dd.x = 0;
        dd.y = 0;
        this.knight_anim_layer.addElement(dd);
        knight_dragon.animation.gotoAndPlay("benpao");

        this.initSelfKnightView();
    }

    private initSelfKnightView() {
        var knight_info = Logic.getKnightOnPosition(0);
        if (knight_info != null) {
            this.self_frame_0.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.self_body_0.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.self_body_mask_0.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.self_body_0.visible = false;
            this.self_body_mask_0.visible = false;
        }

        knight_info = Logic.getKnightOnPosition(1);
        if (knight_info != null) {
            this.self_frame_1.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.self_body_1.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.self_body_mask_1.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.self_body_1.visible = false;
            this.self_body_mask_1.visible = false;
        }

        knight_info = Logic.getKnightOnPosition(2);
        if (knight_info != null) {
            this.self_frame_2.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.self_body_2.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.self_body_mask_2.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.self_body_2.visible = false;
            this.self_body_mask_2.visible = false;
        }

        knight_info = Logic.getKnightOnPosition(3);
        if (knight_info != null) {
            this.self_frame_3.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.self_body_3.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.self_body_mask_3.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.self_body_3.visible = false;
            this.self_body_mask_3.visible = false;
        }

        knight_info = Logic.getKnightOnPosition(4);
        if (knight_info != null) {
            this.self_frame_4.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.self_body_4.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.self_body_mask_4.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.self_body_4.visible = false;
            this.self_body_mask_4.visible = false;
        }
    }

    private setEnemyTeamVisible(bVisible) {
        this.enemy_frame_0.visible = bVisible;
        this.enemy_body_0.visible = bVisible;
        this.enemy_body_mask_0.visible = bVisible;

        this.enemy_frame_1.visible = bVisible;
        this.enemy_body_1.visible = bVisible;
        this.enemy_body_mask_1.visible = bVisible;

        this.enemy_frame_2.visible = bVisible;
        this.enemy_body_2.visible = bVisible;
        this.enemy_body_mask_2.visible = bVisible;

        this.enemy_frame_3.visible = bVisible;
        this.enemy_body_3.visible = bVisible;
        this.enemy_body_mask_3.visible = bVisible;

        this.enemy_frame_4.visible = bVisible;
        this.enemy_body_4.visible = bVisible;
        this.enemy_body_mask_4.visible = bVisible;
    }

    private showEnemyKnights() {
        this.has_get_enemy = true;

        this.setEnemyTeamVisible(true);

        this.knight_anim_layer.visible = false;
        this.label_match_title.visible = false;
        this.label_tick_num.visible = false;

        this.back_btn.visible = false;
    }

    private getNpcData(npc_id) {
        var npc_data = Utils.getLine("npc_list", npc_id);
        if (npc_data == null) {
            return null;
        }

        var knight_info = new Knight_Position_Info();
        knight_info.type = npc_data[npc_list_job];
        knight_info.name = npc_data[npc_list_name];
        knight_info.level = npc_data[npc_list_level];

        knight_info.attack_factor = npc_data[npc_list_attack_factor];
        knight_info.defense_factor = npc_data[npc_list_defense_factor];
        knight_info.hp_factor = npc_data[npc_list_hp_factor];

        return knight_info;
    }
    private initNpcEnemyKnights(npc_list) {
        var knight_info = this.getNpcData(npc_list[0]);
        if (knight_info != null) {
            this.enemy_frame_0.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_0.source = Utils.getKnightBigImgName(knight_info.type);
            this.enemy_body_mask_0.source = Utils.getOtherKnightBigImgMaskName(knight_info.type);
        }
        else {
            this.enemy_body_0.visible = false;
            this.enemy_body_mask_0.visible = false;
        }

        knight_info = this.getNpcData(npc_list[1]);
        if (knight_info != null) {
            this.enemy_frame_1.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_1.source = Utils.getKnightBigImgName(knight_info.type);
            this.enemy_body_mask_1.source = Utils.getOtherKnightBigImgMaskName(knight_info.type);
        }
        else {
            this.enemy_body_1.visible = false;
            this.enemy_body_mask_1.visible = false;
        }

        knight_info = this.getNpcData(npc_list[2]);
        if (knight_info != null) {
            this.enemy_frame_2.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_2.source = Utils.getKnightBigImgName(knight_info.type);
            this.enemy_body_mask_2.source = Utils.getOtherKnightBigImgMaskName(knight_info.type);
        }
        else {
            this.enemy_body_2.visible = false;
            this.enemy_body_mask_2.visible = false;
        }

        knight_info = this.getNpcData(npc_list[3]);
        if (knight_info != null) {
            this.enemy_frame_3.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_3.source = Utils.getKnightBigImgName(knight_info.type);
            this.enemy_body_mask_3.source = Utils.getOtherKnightBigImgMaskName(knight_info.type);
        }
        else {
            this.enemy_body_3.visible = false;
            this.enemy_body_mask_3.visible = false;
        }

        knight_info = this.getNpcData(npc_list[4]);
        if (knight_info != null) {
            this.enemy_frame_4.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_4.source = Utils.getKnightBigImgName(knight_info.type);
            this.enemy_body_mask_4.source = Utils.getOtherKnightBigImgMaskName(knight_info.type);
        }
        else {
            this.enemy_body_4.visible = false;
            this.enemy_body_mask_4.visible = false;
        }
    }
    private initEnemyKnights(enemy_list) {
        var knight_info = enemy_list[0];
        if (knight_info != null) {
            this.enemy_frame_0.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_0.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.enemy_body_mask_0.source = Utils.getOtherKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.enemy_body_0.visible = false;
            this.enemy_body_mask_0.visible = false;
        }

        knight_info = enemy_list[1];
        if (knight_info != null) {
            this.enemy_frame_1.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_1.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.enemy_body_mask_1.source = Utils.getOtherKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.enemy_body_1.visible = false;
            this.enemy_body_mask_1.visible = false;
        }

        knight_info = enemy_list[2];
        if (knight_info != null) {
            this.enemy_frame_2.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_2.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.enemy_body_mask_2.source = Utils.getOtherKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.enemy_body_2.visible = false;
            this.enemy_body_mask_2.visible = false;
        }

        knight_info = enemy_list[3];
        if (knight_info != null) {
            this.enemy_frame_3.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_3.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.enemy_body_mask_3.source = Utils.getOtherKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.enemy_body_3.visible = false;
            this.enemy_body_mask_3.visible = false;
        }

        knight_info = enemy_list[4];
        if (knight_info != null) {
            this.enemy_frame_4.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.enemy_body_4.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
            this.enemy_body_mask_4.source = Utils.getOtherKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        }
        else {
            this.enemy_body_4.visible = false;
            this.enemy_body_mask_4.visible = false;
        }
    }

    private refreshHintText() {
        this.label_hint.text = Utils.getRandomHintText();
    }

    public onWaitingTick() {
        if (this.has_get_enemy) {
            return;
        }
        
        this.tick_count++;

        var strText = "";
        var iDotNum = this.tick_count % 6;
        for (var i = 0; i <= iDotNum; i++) {
            strText = strText + ".";
        }
        this.label_tick_num.text = strText;

        if (this.tick_count % 5 == 0) {
            this.getMatchPlayerInfo();

            this.refreshHintText();
        }

        this.waiting_tick_timer = new egret.Timer(1000, 1);
        this.waiting_tick_timer.addEventListener(egret.TimerEvent.TIMER, this.onWaitingTick, this);
        this.waiting_tick_timer.start();
    }

    public getMatchPlayerInfo() {
        Net.matchArenaPlayer();
    }

    public finishGetMatchPlayerInfo(result, side, is_npc, datas) {
        if (result != 0) {
            if (result == -2) {
                // 继续等待匹配
                return;
            }

            var strErrorMsg = "匹配对手失败，错误码: " + result;
            if (result == -12) {
                strErrorMsg = "竞技场门票不足!";
                this.onExitView();
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        //console.log("finishMatchArenaPlayer data: ", datas);

        this.showEnemyKnights();

        // Set enemy name
        this.label_enemy_name.text = "";

        BattleLayer.InitArenaBattleInfo(side);
        BattleLayer.AddPlayerKnightsToBattleForArena();

        if (is_npc) {
            var npc_list = [0, 0, 0, 0, 0];

            // Get npc id list
            for (var i = 0; i < datas.length; i++) {
                // datas[i];
                npc_list[i] = datas[i];
            }
            BattleLayer.AddArenaNpcKnightsToBattle(npc_list);

            this.initNpcEnemyKnights(npc_list);
        }
        else {
            var enemy_list = [null, null, null, null, null];

            for (var i = 0; i < datas.length; i++) {
                var knight_info = new Knight_Position_Info();
                knight_info.knight_id = datas[i][0];

                knight_info.type = datas[i][1];
                knight_info.name = datas[i][2];
                knight_info.level = datas[i][3];

                knight_info.attack_factor = datas[i][4];
                knight_info.defense_factor = datas[i][5];
                knight_info.hp_factor = datas[i][6];

                knight_info.position = datas[i][7];

                knight_info.is_player = datas[i][8];

                if (knight_info.is_player) {
                    this.label_enemy_name.text = knight_info.name;
                }

                if (knight_info.position >= 0 && knight_info.position < 5) {
                   enemy_list[knight_info.position] = knight_info; 
                }
            }

            BattleLayer.AddEnemyKnightsToBattleForArena(enemy_list);

            this.initEnemyKnights(enemy_list);
        }

        var enter_battle_timer = new egret.Timer(5000, 1);
        enter_battle_timer.addEventListener(egret.TimerEvent.TIMER, this.enterBattleView, this);
        enter_battle_timer.start();
    }

    public enterBattleView() {
        G.main_director.enterBattleView();
    }

    public onExitView() {
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIAreaHomeView;
        if (deal_data) {
            this.removeListener();
            current_layer.onBackBtnClicked();
        }
    }

    private removeListener() {
        this.back_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitView, this);
    }
}

