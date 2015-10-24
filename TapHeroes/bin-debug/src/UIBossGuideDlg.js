var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BossGuideDlg = (function (_super) {
    __extends(BossGuideDlg, _super);
    function BossGuideDlg() {
        _super.call(this);
        this.skinName = "skins.BossGuideDlgSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    BossGuideDlg.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        // Add touch event listener.
        this.iconClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseClicked, this);
    };
    BossGuideDlg.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    BossGuideDlg.prototype.btnCloseClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            this.gameView.guiLayer.removeElement(this);
            this.gameView.ui_main.showFightBossGuide();
        }
    };
    return BossGuideDlg;
})(egret.gui.Panel);
BossGuideDlg.prototype.__class__ = "BossGuideDlg";
