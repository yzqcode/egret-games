var skins;
(function (skins) {
    var UITopInfoViewSkin = (function (_super) {
        __extends(UITopInfoViewSkin, _super);
        function UITopInfoViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [94, 1136]);
            this.elementsContent = [this.__3_i(), this.head_i(), this.icon_head_i(), this.__4_i(), this.label_level_i(), this.label_name_i(), this.__5_i(), this.label_guild_i(), this.__6_i(), this.__7_i(), this.label_diamond_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.label_money_i(), this.label_honor_i(), this.__11_i(), this.__12_i(), this.label_stamina_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.add_diamond_icon_i(), this.add_money_icon_i(), this.add_stamina_icon_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UITopInfoViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UITopInfoViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["stamina_icon_png", 1013, 7]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["add_icon_png", 1038, 34]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["span_bar_png", 992, -4]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["span_bar_png", 859, -4]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["span_bar_png", 677, -4]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["span_bar_png", 531, -3]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["span_bar_png", 271, -4]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["top_bar_bg_jpg", 0, 0]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["level_bg_png", 5, 47]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["guild_icon_png", 299, 5]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["diamond_icon_png", 554, 12]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["add_icon_png", 576, 32]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["gold_icon_png", 697, 12]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["add_icon_png", 724, 35]);
            return t;
        };
        __egretProto__.add_diamond_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.add_diamond_icon = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 39, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 127, 553, 10]);
            return t;
        };
        __egretProto__.add_money_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.add_money_icon = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 39, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 158, 701, 10]);
            return t;
        };
        __egretProto__.add_stamina_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.add_stamina_icon = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 39, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 112, 1013, 10]);
            return t;
        };
        __egretProto__.head_i = function () {
            var t = new egret.gui.UIAsset();
            this.head = t;
            this.__s(t, ["source", "x", "y"], ["head_bg_frame_png", -1, -6]);
            return t;
        };
        __egretProto__.icon_head_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [49, "head_nor_1_png", 53, 11, 4]);
            return t;
        };
        __egretProto__.label_diamond_i = function () {
            var t = new egret.gui.BitmapLabel();
            this.label_diamond = t;
            t.setStyle("size", 24);
            t.setStyle("textAlign", "center");
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["font", "height", "scaleX", "scaleY", "text", "width", "x", "y"], ["zi1_json", 37, 0.5, 0.8, "0", 169, 594, 14]);
            return t;
        };
        __egretProto__.label_guild_i = function () {
            var t = new egret.gui.Label();
            this.label_guild = t;
            this.__s(t, ["height", "size", "textAlign", "verticalAlign", "width", "x", "y"], [24, 24, "center", "middle", 200, 339, 17]);
            return t;
        };
        __egretProto__.label_honor_i = function () {
            var t = new egret.gui.BitmapLabel();
            this.label_honor = t;
            t.setStyle("size", 24);
            this.__s(t, ["font", "height", "scaleX", "scaleY", "text", "width", "x", "y"], ["zi1_json", 37, 0.5, 0.8, "0", 148, 919, 14]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["height", "text", "textAlign", "verticalAlign", "width", "x", "y"], [28, "0", "center", "middle", 45, 28, 54]);
            return t;
        };
        __egretProto__.label_money_i = function () {
            var t = new egret.gui.BitmapLabel();
            this.label_money = t;
            t.setStyle("size", 24);
            t.setStyle("textAlign", "center");
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["font", "height", "scaleX", "scaleY", "text", "width", "x", "y"], ["zi1_json", 37, 0.5, 0.8, "0", 232, 742, 14]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["height", "size", "textAlign", "verticalAlign", "width", "x", "y"], [24, 24, "center", "middle", 200, 75, 17]);
            return t;
        };
        __egretProto__.label_stamina_i = function () {
            var t = new egret.gui.BitmapLabel();
            this.label_stamina = t;
            t.setStyle("size", 24);
            t.setStyle("textAlign", "center");
            t.setStyle("verticalAlign", "middle");
            this.__s(t, ["font", "height", "scaleX", "scaleY", "text", "width", "x", "y"], ["zi1_json", 32, 0.5, 0.8, "0", 142, 1058, 14]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["honor_icon_png", 884, 10]);
            return t;
        };
        UITopInfoViewSkin._skinParts = ["head", "icon_head", "label_level", "label_name", "label_guild", "label_diamond", "label_money", "label_honor", "label_stamina", "add_diamond_icon", "add_money_icon", "add_stamina_icon"];
        return UITopInfoViewSkin;
    })(egret.gui.Skin);
    skins.UITopInfoViewSkin = UITopInfoViewSkin;
    UITopInfoViewSkin.prototype.__class__ = "skins.UITopInfoViewSkin";
})(skins || (skins = {}));
