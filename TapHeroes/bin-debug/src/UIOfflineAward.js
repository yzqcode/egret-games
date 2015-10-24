var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OfflineAwardDialog = (function (_super) {
    __extends(OfflineAwardDialog, _super);
    function OfflineAwardDialog() {
        _super.call(this);
        this.skinName = "skins.OfflineAwardSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    OfflineAwardDialog.prototype.onCreationComplete = function (evt) {
        this.close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.btn_receive.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnReceive, this);
        this.btn_diamond_receive.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnDiamondReceive, this);
        this.label_multi.text = "挂机4倍奖励";
        this.label_money.text = U.bigNumber(Logic.offline_money);
        this.label_money_multi.text = U.bigNumber(Logic.offline_money * 4);
    };
    OfflineAwardDialog.prototype.onBtnReceive = function (evt) {
        console.log("onBtnReceive");
        var gameView = GameView.instance();
        gameView.receiveOfflineMoney();
        this._close();
    };
    OfflineAwardDialog.prototype.onBtnDiamondReceive = function (evt) {
        console.log("onBtnDiamondReceive");
        var gameView = GameView.instance();
        gameView.receiveOfflineMoney();
        this._close();
    };
    OfflineAwardDialog.prototype._close = function () {
        GameView.instance().guiLayer.removeElement(this);
    };
    OfflineAwardDialog.prototype.onClose = function (evt) {
        this._close();
    };
    return OfflineAwardDialog;
})(egret.gui.Panel);
OfflineAwardDialog.prototype.__class__ = "OfflineAwardDialog";
