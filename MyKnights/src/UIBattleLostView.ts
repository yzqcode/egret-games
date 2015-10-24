//removeEventListener
class UIBattleLostView extends egret.gui.Panel {
    public ui_layer:egret.gui.Group;
    public anim_layer:egret.gui.Group;

    public btn_ok:egret.gui.Button;
    public btn_detail:egret.gui.Button;

    public ui_wait:UIWaitView;
    public guiLayer:egret.gui.UIStage;

    public constructor(){
        super();
        this.skinName = "skins.UIBattleLostViewSkin";
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
        this.btn_detail.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDetailBtnClicked, this);

        this.startRunFailAnim();
    }

    private startRunFailAnim() {
        var fail_dragon = Utils.createDragonBone("shibaidonghua");
        var dd = fail_dragon.getDisplay()
        dd.x = 0;
        dd.y = -50;
        this.anim_layer.addElement(dd);
        fail_dragon.animation.gotoAndPlay("shibaizi");

        var xing_dragon = Utils.createDragonBone("shibaixing");
        dd = xing_dragon.getDisplay()
        dd.x = 5;
        dd.y = -47;
        this.anim_layer.addElement(dd);
        xing_dragon.animation.gotoAndPlay("shibaixing");

        this.ui_layer.alpha = 0;
        var posY = this.ui_layer.y;
        this.ui_layer.y -= 50;

        var tw = egret.Tween.get(this.ui_layer);
        tw.wait(500).to({y:posY, alpha:1}, 500);
    }

    private onDetailBtnClicked() {
        var player_datail_dlg = new UIPlayerDetailDialog();
        player_datail_dlg.setEnemyDetailInfo(this.guiLayer);
        this.guiLayer.addElement(player_datail_dlg);
    }

    private onOkBtnClicked() {
        this.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtnClicked, this);
        this.btn_detail.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDetailBtnClicked, this);
        
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
        Net.uploadQuestBattleLose();
        Utils.showWaitAnim(this);
    }
    public finishUploadBattleLoseInfo(result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "上传战斗结果失败，错误码: " + result);
            return;
        }

        this.guiLayer.removeElement(this);

        BattleLayer.ClearAllBattleBaseInfo();
        G.main_director.enterQuestView();
    }

    private onArenaBattleEnd() {
        Net.uploadArenaBattleLose();
        Utils.showWaitAnim(this);
    }
    public finishUploadArenaBattleLoseInfo(result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "上传战斗结果失败，错误码: " + result);
            return;
        }

        this.guiLayer.removeElement(this);

        BattleLayer.ClearAllBattleBaseInfo();
        G.main_director.enterArenaView();
    }

    private onJobTeamBattleEnd() {
        Net.uploadJobBattleLose();
        Utils.showWaitAnim(this);
    }
    public finishUploadJobBattleLoseInfo(result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "上传战斗结果失败，错误码: " + result);
            return;
        }

        this.guiLayer.removeElement(this);

        BattleLayer.ClearAllBattleBaseInfo();
        G.main_director.enterJobView();
    }
}

