var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PanelShop = (function (_super) {
    __extends(PanelShop, _super);
    function PanelShop() {
        _super.call(this);
        this.skinName = "skins.ShopSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    PanelShop.prototype.addOneShopItem = function (index) {
        var uiShopItem = new ItemShopDiamond();
        uiShopItem.setDiamondIndex(index);
        var main_scroller_group = this.scroller_view.viewport;
        main_scroller_group.addElement(uiShopItem);
    };
    PanelShop.prototype.onCreationComplete = function (evt) {
        this.scroller_view.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scroller_view.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        var iShopLen = G.buy_diamonds_fee.length;
        for (var i = 0; i < iShopLen; ++i) {
            this.addOneShopItem(i);
        }
        this.scroller_back.height = (107 + 4) * iShopLen + 10;
        this.refreshDiamond();
        this.refreshMoney();
    };
    PanelShop.prototype.refreshDiamond = function () {
        this.label_diamond.text = U.bigNumber(Logic.diamond);
    };
    PanelShop.prototype.refreshMoney = function () {
        this.label_money.text = U.bigNumber(Logic.money);
    };
    PanelShop.prototype.onClose = function (evt) {
        this.visible = false;
    };
    return PanelShop;
})(egret.gui.Panel);
PanelShop.prototype.__class__ = "PanelShop";
