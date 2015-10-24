var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemShopDiamond = (function (_super) {
    __extends(ItemShopDiamond, _super);
    function ItemShopDiamond() {
        _super.call(this);
        this.skinName = "skins.base.ShopDiamondItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemShopDiamond.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.y = (this.height + 4) * this.m_iDiamondIndex;
        this.refreshDiamondInfo();
        // Add touch event listener.
        this.btnBuy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBuyClicked, this);
    };
    ItemShopDiamond.prototype.refreshDiamondInfo = function () {
        this.iconDiamondPic.source = RES.getRes(this.m_strDiamondIconName);
        this.labelDiamondName.text = this.m_strDiamondName;
        this.labelDiamondDes.text = this.m_strDiamondDesc;
        this.labelDiamondFee.text = "￥" + this.m_iDiamondFee;
    };
    ItemShopDiamond.prototype.setDiamondIndex = function (index) {
        this.m_iDiamondIndex = index;
        if (index == 0) {
            this.m_strDiamondIconName = "钻石1";
            this.m_strDiamondName = G.buy_diamonds_num[index] + " 钻石";
            this.m_strDiamondDesc = "";
            this.m_iDiamondFee = G.buy_diamonds_fee[index];
        }
        else if (index == 1) {
            this.m_strDiamondIconName = "钻石2";
            this.m_strDiamondName = G.buy_diamonds_num[index] + " 钻石";
            this.m_strDiamondDesc = "";
            this.m_iDiamondFee = G.buy_diamonds_fee[index];
        }
        else if (index == 2) {
            this.m_strDiamondIconName = "钻石3";
            this.m_strDiamondName = G.buy_diamonds_num[index] + " 钻石";
            this.m_strDiamondDesc = "优惠 10 钻石";
            this.m_iDiamondFee = G.buy_diamonds_fee[index];
        }
        else if (index == 3) {
            this.m_strDiamondIconName = "钻石4";
            this.m_strDiamondName = G.buy_diamonds_num[index] + " 钻石";
            this.m_strDiamondDesc = "优惠 100 钻石";
            this.m_iDiamondFee = G.buy_diamonds_fee[index];
        }
        else if (index == 4) {
            this.m_strDiamondIconName = "钻石5";
            this.m_strDiamondName = G.buy_diamonds_num[index] + " 钻石";
            this.m_strDiamondDesc = "优惠 1000 钻石";
            this.m_iDiamondFee = G.buy_diamonds_fee[index];
        }
        else if (index == 5) {
            this.m_strDiamondIconName = "钻石5";
            this.m_strDiamondName = G.buy_diamonds_num[index] + " 钻石";
            this.m_strDiamondDesc = "优惠 2500 钻石";
            this.m_iDiamondFee = G.buy_diamonds_fee[index];
        }
    };
    ItemShopDiamond.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ItemShopDiamond.prototype.btnBuyClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            if (sdk_buy) {
                var amount = G.buy_diamonds_fee[this.m_iDiamondIndex];
                var product_name = G.buy_diamonds_num[this.m_iDiamondIndex] + "钻石";
                var product_id = this.m_iDiamondIndex + 1;
                var user_name = Logic.player.name.slice(0, 32);
                var user_id = U.getUUID();
                var ext1 = this.m_iDiamondIndex;
                G.cur_buying_diamonds_index = this.m_iDiamondIndex;
                egret.ExternalInterface.call("jsevent", "buydiamond$" + amount + "$" + product_name + "$" + product_id + "$" + user_name + "$" + user_id + "$" + ext1);
            }
            else {
                Logic.addDiamond(G.buy_diamonds_num[this.m_iDiamondIndex]);
                this.gameView.refreshAllAboutDiamond();
            }
        }
    };
    return ItemShopDiamond;
})(egret.gui.Panel);
ItemShopDiamond.prototype.__class__ = "ItemShopDiamond";
