var skins;
(function (skins) {
    var UIVillageHireViewSkin = (function (_super) {
        __extends(UIVillageHireViewSkin, _super);
        function UIVillageHireViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.corner_0_left_i(), this.corner_0_right_i(), this.corner_1_left_i(), this.corner_1_right_i(), this.corner_2_left_i(), this.corner_2_right_i(), this.body_frame_0_i(), this.icon_body_0_i(), this.name_frame_0_i(), this.label_name_0_i(), this.gold_frame_0_i(), this.label_gold_0_i(), this.circle_0_attack_i(), this.circle_0_defense_i(), this.circle_0_blood_i(), this.body_frame_1_i(), this.icon_body_1_i(), this.name_frame_1_i(), this.label_name_1_i(), this.gold_frame_1_i(), this.label_gold_1_i(), this.circle_1_attack_i(), this.circle_1_defense_i(), this.circle_1_blood_i(), this.body_frame_2_i(), this.icon_body_2_i(), this.name_frame_2_i(), this.label_name_2_i(), this.gold_frame_2_i(), this.label_gold_2_i(), this.circle_2_attack_i(), this.circle_2_defense_i(), this.circle_2_blood_i(), this.icon_gold_0_i(), this.icon_gold_1_i(), this.icon_gold_2_i(), this.btn_select_0_i(), this.btn_select_1_i(), this.btn_select_2_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIVillageHireViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIVillageHireViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [326, 346, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 4, 200]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [874, 0, "home_bg_jpg", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.2, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [400, 0, "chat_dialog_panel_2_jpg", 0, 1100]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [435, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1120]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "chat_title_png", -191.5]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 48, -0.5, 30, "村庄招募", "center", 0x121111, false, "middle", -201, 217]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [326, -345, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 4, 200]);
            return t;
        };
        __egretProto__.body_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.body_frame_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [242, -344, "color_big_frame_1_png", -14, 172]);
            return t;
        };
        __egretProto__.body_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.body_frame_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [242, -2, "color_big_frame_1_png", -14, 172]);
            return t;
        };
        __egretProto__.body_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.body_frame_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [242, 347, "color_big_frame_1_png", -14, 172]);
            return t;
        };
        __egretProto__.btn_select_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_0 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [0, 326, -345, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", true, 4, 200]);
            return t;
        };
        __egretProto__.btn_select_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_1 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [0, 326, -3, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", true, 4, 200]);
            return t;
        };
        __egretProto__.btn_select_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_2 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [0, 326, 346, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", true, 4, 200]);
            return t;
        };
        __egretProto__.circle_0_attack_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_0_attack = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-398.5, "color_1_png", 27.5]);
            return t;
        };
        __egretProto__.circle_0_blood_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_0_blood = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-398.5, "color_1_png", 70.5]);
            return t;
        };
        __egretProto__.circle_0_defense_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_0_defense = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-398.5, "color_1_png", 48.5]);
            return t;
        };
        __egretProto__.circle_1_attack_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_1_attack = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-57.5, "color_1_png", 27.5]);
            return t;
        };
        __egretProto__.circle_1_blood_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_1_blood = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-57.5, "color_1_png", 70.5]);
            return t;
        };
        __egretProto__.circle_1_defense_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_1_defense = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-57.5, "color_1_png", 48.5]);
            return t;
        };
        __egretProto__.circle_2_attack_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_2_attack = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [291.5, "color_1_png", 27.5]);
            return t;
        };
        __egretProto__.circle_2_blood_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_2_blood = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [291.5, "color_1_png", 70.5]);
            return t;
        };
        __egretProto__.circle_2_defense_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_2_defense = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [291.5, "color_1_png", 48.5]);
            return t;
        };
        __egretProto__.corner_0_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_0_left = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-412, "color_special_1_png", 114]);
            return t;
        };
        __egretProto__.corner_0_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_0_right = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter"], [-276, -1, "color_special_1_png", 114]);
            return t;
        };
        __egretProto__.corner_1_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_1_left = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-69, "color_special_1_png", 114]);
            return t;
        };
        __egretProto__.corner_1_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_1_right = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter", "x", "y"], [67, -1, "color_special_1_png", 114, 10, 10]);
            return t;
        };
        __egretProto__.corner_2_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_2_left = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [279, "color_special_1_png", 114]);
            return t;
        };
        __egretProto__.corner_2_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_2_right = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter"], [417, -1, "color_special_1_png", 114]);
            return t;
        };
        __egretProto__.gold_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.gold_frame_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [57, -344, "color_frame_1_png", 122.5, 126]);
            return t;
        };
        __egretProto__.gold_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.gold_frame_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [57, 0, "color_frame_1_png", 122.5, 126]);
            return t;
        };
        __egretProto__.gold_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.gold_frame_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [57, 347, "color_frame_1_png", 122.5, 126]);
            return t;
        };
        __egretProto__.icon_body_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [254, -344.5, "knight_1_png", -19, 165]);
            return t;
        };
        __egretProto__.icon_body_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [254, -2.5, "knight_1_png", -19, 165]);
            return t;
        };
        __egretProto__.icon_body_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [254, 345.5, "knight_1_png", -19, 165]);
            return t;
        };
        __egretProto__.icon_gold_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gold_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [27, -374.5, "gold_icon_png", 123.5, 29]);
            return t;
        };
        __egretProto__.icon_gold_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gold_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [27, -29.5, "gold_icon_png", 123.5, 29]);
            return t;
        };
        __egretProto__.icon_gold_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gold_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [27, 317.5, "gold_icon_png", 123.5, 27]);
            return t;
        };
        __egretProto__.label_gold_0_i = function () {
            var t = new egret.gui.Label();
            this.label_gold_0 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [26, -327, 20, "0", "center", 0x030202, "middle", 123, 66]);
            return t;
        };
        __egretProto__.label_gold_1_i = function () {
            var t = new egret.gui.Label();
            this.label_gold_1 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [26, 17, 20, "0", "center", 0x010000, "middle", 123, 66]);
            return t;
        };
        __egretProto__.label_gold_2_i = function () {
            var t = new egret.gui.Label();
            this.label_gold_2 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [26, 363, 20, "0", "center", 0x010000, "middle", 123, 68]);
            return t;
        };
        __egretProto__.label_name_0_i = function () {
            var t = new egret.gui.Label();
            this.label_name_0 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [28, -345.5, 24, "名字", "center", 0x040303, "middle", -116, 117]);
            return t;
        };
        __egretProto__.label_name_1_i = function () {
            var t = new egret.gui.Label();
            this.label_name_1 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [28, -3.5, 24, "名字", "center", 0x040303, "middle", -116, 117]);
            return t;
        };
        __egretProto__.label_name_2_i = function () {
            var t = new egret.gui.Label();
            this.label_name_2 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [28, 345.5, 24, "名字", "center", 0x040303, "middle", -116, 117]);
            return t;
        };
        __egretProto__.name_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame_0 = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-344, "color_frame_1_png", -117.5]);
            return t;
        };
        __egretProto__.name_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame_1 = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-2, "color_frame_1_png", -117.5]);
            return t;
        };
        __egretProto__.name_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame_2 = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [347, "color_frame_1_png", -117.5]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [326, -2, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 4, 200]);
            return t;
        };
        UIVillageHireViewSkin._skinParts = ["corner_0_left", "corner_0_right", "corner_1_left", "corner_1_right", "corner_2_left", "corner_2_right", "body_frame_0", "icon_body_0", "name_frame_0", "label_name_0", "gold_frame_0", "label_gold_0", "circle_0_attack", "circle_0_defense", "circle_0_blood", "body_frame_1", "icon_body_1", "name_frame_1", "label_name_1", "gold_frame_1", "label_gold_1", "circle_1_attack", "circle_1_defense", "circle_1_blood", "body_frame_2", "icon_body_2", "name_frame_2", "label_name_2", "gold_frame_2", "label_gold_2", "circle_2_attack", "circle_2_defense", "circle_2_blood", "icon_gold_0", "icon_gold_1", "icon_gold_2", "btn_select_0", "btn_select_1", "btn_select_2"];
        return UIVillageHireViewSkin;
    })(egret.gui.Skin);
    skins.UIVillageHireViewSkin = UIVillageHireViewSkin;
    UIVillageHireViewSkin.prototype.__class__ = "skins.UIVillageHireViewSkin";
})(skins || (skins = {}));
