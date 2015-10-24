var skins;
(function (skins) {
    var UIHireHomeViewSkin = (function (_super) {
        __extends(UIHireHomeViewSkin, _super);
        function UIHireHomeViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.icon_village_gold_i(), this.label_village_fee_i(), this.icon_city_gold_i(), this.label_city_fee_i(), this.label_honor_fee_i(), this.icon_honor_i(), this.icon_village_tick_bg_i(), this.label_village_tick_i(), this.label_village_free_title_i(), this.label_village_free_hint_i(), this.village_mask_i(), this.icon_city_tick_bg_i(), this.label_city_free_title_i(), this.label_city_tick_i(), this.icon_diamond_i(), this.city_mask_i(), this.icon_city_lock_i(), this.honor_mask_i(), this.icon_honor_lock_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIHireHomeViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIHireHomeViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter", "x", "y"], [79, -1, "color_special_4_png", 135, 10, 10]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [0.2999999999999545, 0.65, 0.65, "color_big_frame_4_png", -24.5]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [214, "color_special_5_png", 135, 20, 20]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter", "x", "y"], [372, -1, "color_special_5_png", 135, 20, 20]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [295.29999999999995, 0.65, 0.65, "color_big_frame_5_png", -24.5, 10, 10]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [4, 1, 1, "chat_title_png", -191.5, 354, 20, 20]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 46, 5.5, 40, "招募雇佣兵", "center", 0x201A13, "middle", -199, 229]);
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0.5, "city_hire_png", -24.5]);
            return t;
        };
        __egretProto__.__19_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-300.5, "village_hire_png", -24.5]);
            return t;
        };
        __egretProto__.__20_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [294.5, "honor_hire_png", -24.5]);
            return t;
        };
        __egretProto__.__21_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-299, "color_frame_1_png", 147.5]);
            return t;
        };
        __egretProto__.__22_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [1, "color_frame_4_png", 147.5, 10, 10]);
            return t;
        };
        __egretProto__.__23_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [294, "color_frame_5_png", 147.5, 20, 20]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [874, 0, "home_bg_jpg", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0.2, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136, 20, 20]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [405, 0, "chat_dialog_panel_2_jpg", 0, 998, 30, 30]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [440, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1036, 30, 30]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-379, "color_special_1_png", 135]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter"], [-221, -1, "color_special_1_png", 135]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-299.7, 0.65, 0.65, "color_big_frame_1_png", -24.5]);
            return t;
        };
        __egretProto__.city_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.city_mask = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 328, -0.5, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 6, 207, 20, 20]);
            return t;
        };
        __egretProto__.honor_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.honor_mask = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 328, 294.5, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 6, 207, 10, 10]);
            return t;
        };
        __egretProto__.icon_city_gold_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_city_gold = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [-34.200000000000045, 0.8, 0.8, "gold_icon_png", 148, 10, 10]);
            return t;
        };
        __egretProto__.icon_city_lock_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_city_lock = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [2.5, "lock_png", -25]);
            return t;
        };
        __egretProto__.icon_city_tick_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_city_tick_bg = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [51, 1.5, egret.gui.getScale9Grid("11,10,15,16"), "color_value_panel_4_png", 25.5, 147, 10, 10]);
            return t;
        };
        __egretProto__.icon_diamond_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_diamond = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-2, "diamond_icon_png", 15]);
            return t;
        };
        __egretProto__.icon_honor_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_honor = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [267.4, 0.8, 0.8, "honor_icon_png", 148]);
            return t;
        };
        __egretProto__.icon_honor_lock_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_honor_lock = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [304.5, "lock_png", -25, 10, 10]);
            return t;
        };
        __egretProto__.icon_village_gold_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_village_gold = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-328.2, 0.8, 0.8, "gold_icon_png", 148]);
            return t;
        };
        __egretProto__.icon_village_tick_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_village_tick_bg = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [51, -299.5, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 25.5, 147]);
            return t;
        };
        __egretProto__.label_city_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_city_fee = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 30, 22, 23, "6000", "left", 0x000000, false, "middle", 148, 74, 20, 20]);
            return t;
        };
        __egretProto__.label_city_free_title_i = function () {
            var t = new egret.gui.Label();
            this.label_city_free_title = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 30, -1, 25, "免费    刷新", "center", 0xFFFFFF, false, "middle", 15, 148, 20, 20]);
            return t;
        };
        __egretProto__.label_city_tick_i = function () {
            var t = new egret.gui.Label();
            this.label_city_tick = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 30, 1, 25, "00:00:00", "center", 0xFFFFFF, false, "middle", 38, 138]);
            return t;
        };
        __egretProto__.label_honor_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_honor_fee = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 30, 316, 23, "6000", "left", 0x000000, false, "middle", 148, 66, 30, 30]);
            return t;
        };
        __egretProto__.label_village_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_village_fee = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 30, -276, 23, "500", "left", 0x000000, false, "middle", 148, 70, 10, 10]);
            return t;
        };
        __egretProto__.label_village_free_hint_i = function () {
            var t = new egret.gui.Label();
            this.label_village_free_hint = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 30, -300, 25, "免费招募", "center", 0x452B16, false, "middle", 147, 124, 20, 20]);
            return t;
        };
        __egretProto__.label_village_free_title_i = function () {
            var t = new egret.gui.Label();
            this.label_village_free_title = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 30, -297, 25, "免费招募", "center", 0x452B16, false, "middle", 15, 134, 10, 10]);
            return t;
        };
        __egretProto__.label_village_tick_i = function () {
            var t = new egret.gui.Label();
            this.label_village_tick = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 30, -297, 25, "00:00:00", "center", 0x452B16, false, "middle", 38, 134]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [-79, "color_special_4_png", 135, 10, 10]);
            return t;
        };
        __egretProto__.village_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.village_mask = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0, 328, -300.5, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 6, 207]);
            return t;
        };
        UIHireHomeViewSkin._skinParts = ["icon_village_gold", "label_village_fee", "icon_city_gold", "label_city_fee", "label_honor_fee", "icon_honor", "icon_village_tick_bg", "label_village_tick", "label_village_free_title", "label_village_free_hint", "village_mask", "icon_city_tick_bg", "label_city_free_title", "label_city_tick", "icon_diamond", "city_mask", "icon_city_lock", "honor_mask", "icon_honor_lock"];
        return UIHireHomeViewSkin;
    })(egret.gui.Skin);
    skins.UIHireHomeViewSkin = UIHireHomeViewSkin;
    UIHireHomeViewSkin.prototype.__class__ = "skins.UIHireHomeViewSkin";
})(skins || (skins = {}));
