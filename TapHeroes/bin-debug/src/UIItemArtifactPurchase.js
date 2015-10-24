var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemArtifactPurchase = (function (_super) {
    __extends(ItemArtifactPurchase, _super);
    function ItemArtifactPurchase() {
        _super.call(this);
        this.skinName = "skins.base.ArtifactPurchaseSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemArtifactPurchase.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refreshArtifactInfo();
        // Add touch event listener.
        this.btnBuy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBuyArtifactClicked, this);
    };
    ItemArtifactPurchase.prototype.refreshArtifactInfo = function () {
        if (this.btnBuy == null) {
            return;
        }
        var bCanBuy = Logic.canBuyArtifact();
        this.btnBuy.enabled = bCanBuy;
        var iFee = Logic.getBuyArtifactPeach();
        this.m_iBuyFee = 0;
        if (iFee != null) {
            this.m_iBuyFee = iFee;
        }
        this.labePeachFee.text = "" + Utils.bigNumber(this.m_iBuyFee);
    };
    ItemArtifactPurchase.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ItemArtifactPurchase.prototype.btnBuyArtifactClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            var buyResults = Logic.buyArtifact();
            var bBuyRes = buyResults[0];
            if (bBuyRes == false) {
                console.log("========= Buy artifact failed!!!");
                return;
            }
            this.refreshArtifactInfo();
            var viewport = this.gameView.ui_main.main_scroller3.viewport;
            var group = this.gameView.ui_main.main_scroller3.viewport;
            var top = viewport.verticalScrollPosition;
            var child = group.getElementAt(0);
            var posX = this.iconArtifactPic.x + this.iconArtifactPic.width / 2 + 5;
            var posY = this.gameView.ui_main.main_scroller3.y + child.y - top + this.iconArtifactPic.y + this.iconArtifactPic.height;
            this.gameView.showLevelUpAnim(posX, posY);
            this.gameView.ui_main.refreshPeach();
            this.gameView.ui_main.refreshDamageInfo();
            this.gameView.ui_main.refreshArtifactListForNew();
        }
    };
    return ItemArtifactPurchase;
})(egret.gui.Panel);
ItemArtifactPurchase.prototype.__class__ = "ItemArtifactPurchase";
