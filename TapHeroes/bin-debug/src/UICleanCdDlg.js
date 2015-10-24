var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CleanCdDlg = (function (_super) {
    __extends(CleanCdDlg, _super);
    function CleanCdDlg() {
        _super.call(this);
        this.skinName = "skins.CleanCdDlgSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    CleanCdDlg.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.m_iDiamondNum = Logic.getCleanSkillCDDiamond();
        this.diamond_text.text = "x" + Utils.bigNumber(this.m_iDiamondNum);
        this.close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.clean_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCleanClicked, this);
    };
    CleanCdDlg.prototype.onCleanClicked = function (evt) {
        this.gameView.guiLayer.removeElement(this);
        var ret = Logic.cleanSkillCD();
        if (ret == 0) {
        }
        else if (ret == 1) {
            this.gameView.showLowDiamondHint();
        }
    };
    CleanCdDlg.prototype.onClose = function (evt) {
        this.gameView.guiLayer.removeElement(this);
    };
    return CleanCdDlg;
})(egret.gui.Panel);
CleanCdDlg.prototype.__class__ = "CleanCdDlg";
