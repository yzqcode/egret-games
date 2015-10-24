var UIShopItem = (function (_super) {
    __extends(UIShopItem, _super);
    function UIShopItem() {
        _super.call(this);
        this.tab_index = -1;
        this.skinName = "skins.UIShopItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIShopItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.list();
        this.money.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChoose, this);
    };
    __egretProto__.setData = function (parent, index, data1, data2, data3) {
        if (data2 === void 0) { data2 = null; }
        if (data3 === void 0) { data3 = null; }
        this.my_index = index;
        this.item_data1 = data1;
        this.item_data2 = data2;
        this.item_data3 = data3;
        this.ui_parent = parent;
    };
    __egretProto__.list = function () {
        this.x = this.my_index * 212;
        if (this.ui_parent.current_shop_tab == 3 /* TAB_JOBCARD */) {
            this.money_png.visible = false;
            this.recive_png.visible = false;
            this.cards_type.visible = true;
            this.cards_bg.visible = true;
            this.label_money_fee.text = "" + this.item_data1.card_fee;
            this.cards_bg.source = Utils.getJobCardImgName(this.item_data1.card_level);
            this.cards_type.source = Utils.getKnightBigImgName(this.item_data1.card_type);
        }
        else {
            if (this.ui_parent.current_shop_tab == 0 /* TAB_MONEY */) {
                this.money_png.visible = false;
                this.label_money.text = "x" + this.item_data2;
                this.label_money_fee.text = "" + this.item_data1;
                this.recive_png.source = this.item_data3 + "_png";
            }
            else if (this.ui_parent.current_shop_tab == 1 /* TAB_DIAMOND */) {
                this.money_png.visible = false;
                this.diamond_png.visible = false;
                this.label_money.text = "x" + this.item_data2;
                this.label_money_fee.text = this.item_data1 + "元";
                this.label_money_fee.x -= 20;
                this.recive_png.source = this.item_data3 + "_png";
                this.recive_png.x += 20;
                this.recive_png.y += 30;
            }
            else if (this.ui_parent.current_shop_tab == 2 /* TAB_STAMINA */) {
                this.money_png.visible = false;
                this.label_money.text = "x" + this.item_data2;
                this.label_money_fee.text = "" + this.item_data1;
                this.recive_png.source = this.item_data3 + "_png";
                this.recive_png.x += 30;
                this.recive_png.y += 30;
            }
            else if (this.ui_parent.current_shop_tab == 4 /* TAB_TICKET */) {
                this.money_png.visible = false;
                this.label_money.text = "x" + this.item_data2;
                this.label_money_fee.text = "" + this.item_data1;
                this.recive_png.source = this.item_data3 + "_png";
                this.recive_png.x += 10;
                this.recive_png.y += 30;
            }
        }
    };
    __egretProto__.onChoose = function () {
        if (this.ui_parent != null) {
            if (this.ui_parent.money_frame != null) {
                this.ui_parent.money_frame.visible = false;
            }
            this.ui_parent.money_frame = this.money_select_frame;
            this.ui_parent.money_frame.visible = true;
            this.ui_parent.current_index = this.my_index;
        }
    };
    return UIShopItem;
})(egret.gui.Panel);
UIShopItem.prototype.__class__ = "UIShopItem";
