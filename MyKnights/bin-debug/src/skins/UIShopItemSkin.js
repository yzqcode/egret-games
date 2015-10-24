var skins;
(function (skins) {
    var UIShopItemSkin = (function (_super) {
        __extends(UIShopItemSkin, _super);
        function UIShopItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.width = 178;
            this.elementsContent = [this.__3_i(), this.recive_png_i(), this.cards_bg_i(), this.cards_type_i(), this.money_select_frame_i(), this.label_money_i(), this.__4_i(), this.diamond_png_i(), this.label_money_fee_i(), this.__5_i(), this.money_i(), this.money_png_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIShopItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIShopItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], [true, "Arial", 20, "花费：", "center", 0x060505, "middle", 24, 204]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["pin_png", 76, 0]);
            return t;
        };
        __egretProto__.cards_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.cards_bg = t;
            this.__s(t, ["scaleX", "scaleY", "source", "visible", "x", "y"], [0.3, 0.3, "job_big_frame_1_png", false, 37, 26]);
            return t;
        };
        __egretProto__.cards_type_i = function () {
            var t = new egret.gui.UIAsset();
            this.cards_type = t;
            this.__s(t, ["scaleX", "scaleY", "source", "visible", "x", "y"], [0.3, 0.3, "knight_1_png", false, 37, 19]);
            return t;
        };
        __egretProto__.diamond_png_i = function () {
            var t = new egret.gui.UIAsset();
            this.diamond_png = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.3, 0.3, "diamond_1_png", 70, 198]);
            return t;
        };
        __egretProto__.label_money_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_money_fee = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "Arial", 24, 18, "left", 0x050404, "middle", 62, 100, 202]);
            return t;
        };
        __egretProto__.label_money_i = function () {
            var t = new egret.gui.Label();
            this.label_money = t;
            this.__s(t, ["bold", "fontFamily", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "Arial", 20, "center", 0x050404, "middle", 140, 17, 166]);
            return t;
        };
        __egretProto__.money_i = function () {
            var t = new egret.gui.UIAsset();
            this.money = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 249, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 170, 0, 13]);
            return t;
        };
        __egretProto__.money_png_i = function () {
            var t = new egret.gui.UIAsset();
            this.money_png = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.8, 0.8, "gold_icon_png", 73, 200]);
            return t;
        };
        __egretProto__.money_select_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.money_select_frame = t;
            this.__s(t, ["height", "scale9Grid", "source", "visible", "width", "x", "y"], [259, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", false, 178, 0, 6]);
            return t;
        };
        __egretProto__.recive_png_i = function () {
            var t = new egret.gui.UIAsset();
            this.recive_png = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.9, 0.9, "money_1_png", 12, 30]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["rotation", "scaleX", "scaleY", "source", "x", "y"], [-90, 0.32, 0.5, "special_detail_bg_png", 3, 263]);
            return t;
        };
        UIShopItemSkin._skinParts = ["recive_png", "cards_bg", "cards_type", "money_select_frame", "label_money", "diamond_png", "label_money_fee", "money", "money_png"];
        return UIShopItemSkin;
    })(egret.gui.Skin);
    skins.UIShopItemSkin = UIShopItemSkin;
    UIShopItemSkin.prototype.__class__ = "skins.UIShopItemSkin";
})(skins || (skins = {}));
