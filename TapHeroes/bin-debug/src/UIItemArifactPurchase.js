var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemArifactPurchase = (function (_super) {
    __extends(ItemArifactPurchase, _super);
    function ItemArifactPurchase() {
        _super.call(this);
        this.skinName = "skins.base.ArtifactPurchaseSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemArifactPurchase.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refreshArtifactInfo();
        // Add touch event listener.
        this.btnBuy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBuyArifactClicked, this);
    };
    ItemArifactPurchase.prototype.refreshArtifactInfo = function () {
        var bCanBuy = Logic.canBuyArtifact();
        this.btnBuy.enabled = bCanBuy;
        var iFee = Logic.getBuyArtifactPeach();
        this.m_iBuyFee = 0;
        if (iFee != null) {
            this.m_iBuyFee = iFee;
        }
        this.labePeachFee.text = "" + Utils.bigNumber(this.m_iBuyFee);
    };
    ItemArifactPurchase.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ItemArifactPurchase.prototype.btnBuyArifactClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
        }
    };
    return ItemArifactPurchase;
})(egret.gui.Panel);
ItemArifactPurchase.prototype.__class__ = "ItemArifactPurchase";
