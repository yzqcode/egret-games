class UICreateKnightView extends egret.gui.Panel {

    public btn_select_0:egret.gui.Button;
    public btn_select_1:egret.gui.Button;
    public btn_select_2:egret.gui.Button;
    
    public png_select_0:egret.gui.UIAsset;
    public png_select_1:egret.gui.UIAsset;
    public png_select_2:egret.gui.UIAsset;
            
    public my_name:string;
    public inputName:UICreateKnightNameDialog;

    public ui_wait:UIWaitView;
    
    public topLayer:egret.DisplayObjectContainer;
    public guiLayer:egret.gui.UIStage;
    public main_director:Main;

    public select_knight_type:number = 1;

    public constructor(){
        super();
        this.skinName = "skins.UICreateKnightViewSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    public showOnMainLayer(main_director:Main):void {
        this.width = G.win_width;
        this.height = G.win_height;

        this.main_director = main_director;

        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);

        this.guiLayer.addElement(this);

        this.topLayer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.topLayer, 1);
    }
    public removeFromMainLayer():void {
        this.main_director.stage.removeChild(this.guiLayer);
        this.main_director.stage.removeChild(this.topLayer);
    }

    private onCreationComplete():void {
        this.removeEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );

        this.main_director.closeGateAnimLayer();

        /*var knight_dragon_zs = Utils.createDragonBone("zspt001");
        var zs = knight_dragon_zs.getDisplay()
        zs.x = this.btn_select_0.x + zs.width/2;
        zs.y = this.btn_select_0.y - zs.height;
        this.guiLayer.addElement(zs);
        knight_dragon_zs.animation.gotoAndPlay("zhanli");

        var knight_dragon_yc = Utils.createDragonBone("ycpt001");
        var yc = knight_dragon_yc.getDisplay()
        yc.x = this.btn_select_1.x + yc.width/2;
        yc.y = this.btn_select_1.y - yc.height;
        this.guiLayer.addElement(yc);
        knight_dragon_yc.animation.gotoAndPlay("zhanli");

        var knight_dragon_fs = Utils.createDragonBone("fspt001");
        var fs = knight_dragon_fs.getDisplay()
        fs.x = this.btn_select_2.x + fs.width/2;
        fs.y = this.btn_select_2.y - fs.height;
        this.guiLayer.addElement(fs);
        knight_dragon_fs.animation.gotoAndPlay("zhanli");*/

        this.btn_select_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectSoldier, this);
        this.png_select_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectSoldier, this);
        this.btn_select_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBowman, this);
        this.png_select_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBowman, this);
        this.btn_select_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectEnchanter, this);
        this.png_select_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectEnchanter, this);
    }
    private removeAllEventListeners() {
        this.btn_select_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectSoldier, this);
        this.png_select_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectSoldier, this);
        this.btn_select_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBowman, this);
        this.png_select_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBowman, this);
        this.btn_select_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectEnchanter, this);
        this.png_select_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectEnchanter, this);
    }

    public onSelectSoldier() {
        this.select_knight_type = 1;

        this.inputName = new UICreateKnightNameDialog();
        this.inputName.showOnMainLayer(this, this.onCreateKnight);
        this.guiLayer.addElement(this.inputName);
    }

    public onSelectBowman() {
        this.select_knight_type = 2;

        this.inputName = new UICreateKnightNameDialog();
        this.inputName.showOnMainLayer(this, this.onCreateKnight);
        this.guiLayer.addElement(this.inputName);
    }

    public onSelectEnchanter() {
        this.select_knight_type = 3;

        this.inputName = new UICreateKnightNameDialog();
        this.inputName.showOnMainLayer(this, this.onCreateKnight);
        this.guiLayer.addElement(this.inputName);
    }


    public onCreateKnight() {
        if (this.my_name.length <= 0) {
            Utils.showToastInfo(this.guiLayer, "请输入骑士大名~");
            return;
        }

        var ret = U.checkName( this.my_name );
        if ( ret == 1 ) {
           Utils.showToastInfo(this.guiLayer, "名字必须在1至16个字符之间");
           return;
        }
        else if ( ret == 2 ) {
           Utils.showToastInfo(this.guiLayer, "名字中不能有空格和特殊字符");
           return;
        }

        if (BadWords.HasAnyBadword(this.my_name)) {
            Utils.showToastInfo(this.guiLayer, "名字中含有屏蔽词!");
            return;
        }

        Net.createPlayer(this.my_name, this.select_knight_type);

        Utils.showWaitAnim(this);
    }

    public finishCreateKnight(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {

            var str_error_hint = "新建人物失败，错误码:" + result;
            if (result == -1) {
                str_error_hint = "该名字已经有人使用了，请重新输入！";
            }
            Utils.showToastInfo(this.guiLayer, str_error_hint);
            return;
        }

        this.removeAllEventListeners();
        this.inputName.onCancelClick();

        Logic.initPlayerBaseDatas(data);

        Logic.player_name = this.my_name;
        Logic.guild_id = -1;

        Net.getOnPositionKnightsList();
        
        this.showGameStartPlot();
    }

    public showGameStartPlot() {
        Logic.guide_flag = GUIDE_TYPE.FIRST_QUEST_FLAG;

        BattleLayer.ClearAllBattleBaseInfo();
        BattleLayer.battle_type = BATTLE_TYPE.GUIDE_BATTLE1;

        this.AddOneKnightBaseInfo("4", 0);
        this.AddOneKnightBaseInfo("4", 1);
        this.AddOneKnightBaseInfo("7", 2);
        this.AddOneKnightBaseInfo("8", 3);
        this.AddOneKnightBaseInfo("9", 4);

        this.AddOneKnightBaseInfo("a", 0, false);
        this.AddOneKnightBaseInfo("b", 1, false);
        this.AddOneKnightBaseInfo("7", 2, false);
        this.AddOneKnightBaseInfo("5", 3, false);
        this.AddOneKnightBaseInfo("5", 4, false);

        G.main_director.enterBattleView();
    }

    private AddOneKnightBaseInfo(s, offset = 0, left = true) {
        var type = KNIGHT_TYPE.KNIGHT_SOLDIER;
        var str_type = "战士";
        if (s == "1") {
            type = KNIGHT_TYPE.KNIGHT_SOLDIER;
        }
        else if (s == "2") {
            type = KNIGHT_TYPE.KNIGHT_BOWMAN;
            str_type = "弓箭手";
        }
        else if (s == "3") {
            type = KNIGHT_TYPE.KNIGHT_ENCHANTER;
            str_type = "法师";
        }
        else if (s == "4") {
            type = KNIGHT_TYPE.KNIGHT_CHEVALIER;
            str_type = "骑士";
        }
        else if (s == "5") {
            type = KNIGHT_TYPE.KNIGHT_FIGHTER;
            str_type = "斗士";
        }
        else if (s == "6") {
            type = KNIGHT_TYPE.KNIGHT_ASSASSINATOR;
            str_type = "刺客";
        }
        else if (s == "7") {
            type = KNIGHT_TYPE.KNIGHT_LONG_BOWMAN;
            str_type = "长弓";
        }
        else if (s == "8") {
            type = KNIGHT_TYPE.KNIGHT_CROSS_BOWMAN;
            str_type = "弩手";
        }
        else if (s == "9") {
            type = KNIGHT_TYPE.KNIGHT_FIRE_ENCHANTER;
            str_type = "火法";
        }
        else if (s == "a") {
            type = KNIGHT_TYPE.KNIGHT_ICE_ENCHANTER;
            str_type = "冰法";
        }
        else if (s == "b") {
            type = KNIGHT_TYPE.KNIGHT_MINISTER;
            str_type = "牧师";
        }
        else {
            return;
        }

        var knight_base_info = new Knight_BaseInfo();

        knight_base_info.type = type;
        knight_base_info.level = 30;

        knight_base_info.attack_factor = 1;
        knight_base_info.defense_factor = 1;
        knight_base_info.hp_factor = 1;

        if (left) {
            knight_base_info.move_direction = 1;
        }
        else {
            knight_base_info.move_direction = -1;
        }
        knight_base_info.pos_offset = offset;

        BattleLayer.KnightGoToBattle(knight_base_info);
    }
}

