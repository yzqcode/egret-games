//removeEventListener
class UIBattleWinView extends egret.gui.Panel {
    public ui_layer:egret.gui.Group;
    public anim_layer:egret.gui.Group;

    public btn_ok:egret.gui.Button;

    public ui_wait:UIWaitView;
    public guiLayer:egret.gui.UIStage;

    public constructor(){
        super();
        this.skinName = "skins.UIBattleWinViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.ui_layer.anchorX = 0.5;
        this.ui_layer.anchorY = 0.5;
        this.ui_layer.x = this.width/2;
        this.ui_layer.y = this.height/2;

        this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtnClicked, this);

        this.startRunWinAnim();
    }

    private startRunWinAnim() {
        var win_dragon = Utils.createDragonBone("shenglidonghua");
        var dd = win_dragon.getDisplay()
        dd.x = 0;
        dd.y = -50;
        this.anim_layer.addElement(dd);
        win_dragon.animation.gotoAndPlay("shengli");

        this.ui_layer.alpha = 0;
        var posY = this.ui_layer.y;
        this.ui_layer.y -= 50;

        var tw = egret.Tween.get(this.ui_layer);
        tw.wait(500).to({y:posY, alpha:1}, 500);
    }

    private onOkBtnClicked() {
        this.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtnClicked, this);
        
        if (BattleLayer.battle_type == BATTLE_TYPE.TEST_BATTLE 
                || BattleLayer.battle_type == BATTLE_TYPE.UNKNOWN_BATTLE) {
            this.onTestBattleEnd();
        }
        else if (BattleLayer.battle_type == BATTLE_TYPE.QUEST_BATTLE) {
            this.onQuestBattleEnd();
        }
        else if (BattleLayer.battle_type == BATTLE_TYPE.ARENA_BATTLE) {
            this.onArenaBattleEnd();
        }
        else if (BattleLayer.battle_type == BATTLE_TYPE.JOB_TEAM_BATTLE) {
            this.onJobTeamBattleEnd();
        }
    }

    private onTestBattleEnd() {
        this.guiLayer.removeElement(this);

        BattleLayer.ClearAllBattleBaseInfo();
        G.main_director.enterHomeView();
    }

    private onQuestBattleEnd() {
        Net.uploadQuestBattleWin();
        Utils.showWaitAnim(this);
    }
    public finishUploadBattleWinInfo(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "上传战斗结果失败，错误码: " + result);
            return;
        }

        Logic.money = data[0];
        Logic.area_id = data[1];
        Logic.city_index = data[2];

        Logic.refreshKnightsTeam(data[3]);

        this.guiLayer.removeElement(this);

        QuestLayer.show_win_msg = true;

        BattleLayer.ClearAllBattleBaseInfo();
        
        // Show quest award list
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof BattleLayer) {
            var anim_layer = new AwardLayer();
            anim_layer.setQuestAward();
            anim_layer.showAwardAnim(current_layer);
        }
    }

    private onArenaBattleEnd() {
        Net.uploadArenaBattleWin();
        Utils.showWaitAnim(this);
    }
    public finishUploadArenaBattleWinInfo(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "上传战斗结果失败，错误码: " + result);
            return;
        }
        
        this.guiLayer.removeElement(this);

        BattleLayer.ClearAllBattleBaseInfo();

        var honor_add = data[0];
        Logic.honor += honor_add;
        
        // Show arena award list
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof BattleLayer) {
            var anim_layer = new AwardLayer();
            anim_layer.setArenaAward(honor_add);
            anim_layer.showAwardAnim(current_layer);
        }
    }

    private onJobTeamBattleEnd() {
        Net.uploadJobBattleWin();
        Utils.showWaitAnim(this);
    }
    public finishUploadJobBattleWinInfo(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "上传战斗结果失败，错误码: " + result);
            return;
        }
        
        this.guiLayer.removeElement(this);

        BattleLayer.ClearAllBattleBaseInfo();

        var card_level = data[0];
        var card_type = data[1];
        
        // Show arena award list
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof BattleLayer) {
            var anim_layer = new AwardLayer();
            anim_layer.setJobTeamBattleAward();
            
            if (card_level > 0 && card_type > 0) {
                anim_layer.addJobCard(card_level, card_type);
            }

            anim_layer.showAwardAnim(current_layer);
        }
    }
}

