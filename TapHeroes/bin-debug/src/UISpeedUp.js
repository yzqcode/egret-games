var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SpeedUpDialog = (function (_super) {
    __extends(SpeedUpDialog, _super);
    function SpeedUpDialog() {
        _super.call(this);
        this.skinName = "skins.SpeedUpAwardSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    SpeedUpDialog.prototype.onCreationComplete = function (evt) {
        this.close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnConfirm, this);
    };
    SpeedUpDialog.prototype.onBtnConfirm = function (evt) {
        console.log("onBtnConfirm");
    };
    SpeedUpDialog.prototype.onClose = function (evt) {
        GameView.instance().guiLayer.removeElement(this);
    };
    return SpeedUpDialog;
})(egret.gui.Panel);
SpeedUpDialog.prototype.__class__ = "SpeedUpDialog";
