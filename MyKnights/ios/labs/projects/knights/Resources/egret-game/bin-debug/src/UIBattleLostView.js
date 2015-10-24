//removeEventListener
var UIBattleLostView = (function (_super) {
    __extends(UIBattleLostView, _super);
    function UIBattleLostView() {
        _super.call(this);
        this.skinName = "skins.UIBattleLostViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIBattleLostView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.ui_layer.anchorX = 0.5;
        this.ui_layer.anchorY = 0.5;
        this.ui_layer.x = this.width / 2;
        this.ui_layer.y = this.height / 2;
        this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtnClicked, this);
        this.btn_detail.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDetailBtnClicked, this);
        this.startRunFailAnim();
    };
    __egretProto__.startRunFailAnim = function () {
        var fail_dragon = Utils.createDragonBone("shibaidonghua");
        var dd = fail_dragon.getDisplay();
        dd.x = 0;
        dd.y = -50;
        this.anim_layer.addElement(dd);
        fail_dragon.animation.gotoAndPlay("shibaizi");
        var xing_dragon = Utils.createDragonBone("shibaixing");
        dd = xing_dragon.getDisplay();
        dd.x = 5;
        dd.y = -47;
        this.anim_layer.addElement(dd);
        xing_dragon.animation.gotoAndPlay("shibaixing");
        this.ui_layer.alpha = 0;
        var posY = this.ui_layer.y;
        this.ui_layer.y -= 50;
        var tw = egret.Tween.get(this.ui_layer);
        tw.wait(500).to({ y: posY, alpha: 1 }, 500);
    };
    __egretProto__.onDetailBtnClicked = function () {
        var player_datail_dlg = new UIPlayerDetailDialog();
        player_datail_dlg.setEnemyDetailInfo(this.guiLayer);
        this.guiLayer.addElement(player_datail_dlg);
    };
    __egretProto__.onOkBtnClicked = function () {
        this.btn_ok.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkBtnClicked, this);
        this.btn_detail.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDetailBtnClicked, this);
        if (BattleLayer.battle_type == 1 /* TEST_BATTLE */ || BattleLayer.battle_type == 0 /* UNKNOWN_BATTLE */) {
            this.onTestBattleEnd();
        }
        else if (BattleLayer.battle_type == 2 /* QUEST_BATTLE */) {
            this.onQuestBattleEnd();
        }
        else if (BattleLayer.battle_type == 3 /* ARENA_BATTLE */) {
            this.onArenaBattleEnd();
        }
        else if (BattleLayer.battle_type == 4 /* JOB_TEAM_BATTLE */) {
            this.onJobTeamBattleEnd();
        }
    };
    __egretProto__.onTestBattleEnd = function () {
        this.guiLayer.removeElement(this);
        BattleLayer.ClearAllBattleBaseInfo();
        G.main_director.enterHomeView();
    };
    __egretProto__.onQuestBattleEnd = function () {
        Net.uploadQuestBattleLose();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishUploadBattleLoseInfo = function (result) {
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
    };
    __egretProto__.onArenaBattleEnd = function () {
        Net.uploadArenaBattleLose();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishUploadArenaBattleLoseInfo = function (result) {
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
    };
    __egretProto__.onJobTeamBattleEnd = function () {
        Net.uploadJobBattleLose();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishUploadJobBattleLoseInfo = function (result) {
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
    };
    return UIBattleLostView;
})(egret.gui.Panel);
UIBattleLostView.prototype.__class__ = "UIBattleLostView";
