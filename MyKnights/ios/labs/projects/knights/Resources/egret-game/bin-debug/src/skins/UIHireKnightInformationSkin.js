var skins;
(function (skins) {
    var UIHireKnightInformationSkin = (function (_super) {
        __extends(UIHireKnightInformationSkin, _super);
        function UIHireKnightInformationSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.icon_name_frame_bg_i(), this.label_name_i(), this.__8_i(), this.__9_i(), this.icon_body_frame_bg_i(), this.icon_body_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.icon_atk_frame_bg_i(), this.label_atk_num_i(), this.icon_def_frame_bg_i(), this.label_def_num_i(), this.icon_hp_frame_bg_i(), this.label_hp_num_i(), this.__14_i(), this.label_exp_percent_i(), this.icon_exp_bar_i(), this.skill_list_i(), this.__16_i(), this.label_level_i(), this.close_icon_i(), this.hire_btn_i(), this.__17_i(), this.cost_label_i(), this.__18_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIHireKnightInformationSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIHireKnightInformationSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-86.5, "def_png", -43.5]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-85.5, "exp_png", 81.5]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-85, "heart_png", 14.5]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [-8, egret.gui.getScale9Grid("10,7,26,1"), "exp_bar_frame_png", 81.5, 98]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Group();
            t.height = 320;
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-202, "lv_top_png", 147.5]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter"], [true, -64, 28, "雇佣", "center", 0x040303, false, "middle", 162]);
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "touchEnabled", "verticalCenter", "width"], [29, -19, "gold_icon_png", false, 163.5, 26]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "scaleX", "scaleY", "source", "verticalCenter", "width"], [340, 0, egret.gui.getScale9Grid("50,53,49,45"), 1.2, 1.4, "special_detail_bg_png", 0, 785]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [328, -7, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -36, 258]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [392, 271, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -4, 242]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [392, -280.5, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -4, 227]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 1.5, 30, "基本信息", "center", 0xFDD00A, false, "middle", -169, 129, 20, 60]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 273.5, 30, "特殊技能", "center", 0xFDD00A, false, "middle", -172, 129, 30, 70]);
            return t;
        };
        __egretProto__.close_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_icon = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [63, 420, "close_png", -198.5, 60]);
            return t;
        };
        __egretProto__.cost_label_i = function () {
            var t = new egret.gui.Label();
            this.cost_label = t;
            this.__s(t, ["bold", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], [true, 35.5, 28, "0", "center", 0x030202, false, "middle", 163, 93]);
            return t;
        };
        __egretProto__.hire_btn_i = function () {
            var t = new egret.gui.Button();
            this.hire_btn = t;
            this.__s(t, ["horizontalCenter", "skinName", "touchEnabled", "verticalCenter"], [-4.5, skins.BtnGreenLargeSkin, true, 162]);
            return t;
        };
        __egretProto__.icon_atk_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_atk_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 12, "color_value_panel_5_png", -100, 146, 10, 10]);
            return t;
        };
        __egretProto__.icon_body_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width"], [423, -279.8, 0.7, 0.7, "color_big_frame_6_png", 16.049999999999955, 292]);
            return t;
        };
        __egretProto__.icon_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width"], [423, -279.8, 0.7, 0.7, "knight_1_png", 6.0499999999999545, 292]);
            return t;
        };
        __egretProto__.icon_def_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_def_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 12, "color_value_panel_5_png", -43, 146, 20, 20]);
            return t;
        };
        __egretProto__.icon_exp_bar_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_exp_bar = t;
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [-8, egret.gui.getScale9Grid("9,7,29,1"), "exp_bar_png", 81.5, 98]);
            return t;
        };
        __egretProto__.icon_hp_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_hp_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 12, "color_value_panel_5_png", 13, 146, 30, 30]);
            return t;
        };
        __egretProto__.icon_name_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_name_frame_bg = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-279, "color_frame_6_png", -150.5]);
            return t;
        };
        __egretProto__.label_atk_num_i = function () {
            var t = new egret.gui.Label();
            this.label_atk_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 12.5, 25, "center", 0x000000, false, "middle", -100, 135, 20, 60]);
            return t;
        };
        __egretProto__.label_def_num_i = function () {
            var t = new egret.gui.Label();
            this.label_def_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 11.5, 25, "center", 0x000000, false, "middle", -43, 133, 30, 70]);
            return t;
        };
        __egretProto__.label_exp_percent_i = function () {
            var t = new egret.gui.Label();
            this.label_exp_percent = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "y"], ["Arial", 34, 75, 18, "99.9%", "center", 0x22FF48, false, "middle", 81, 62, 40]);
            return t;
        };
        __egretProto__.label_hp_num_i = function () {
            var t = new egret.gui.Label();
            this.label_hp_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 12.5, 25, "center", 0x000000, false, "middle", 13, 135, 40, 80]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 36, -202, 20, "9", "center", 0xF7EDBC, false, "middle", 155, 32, 10, 10]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, -277.5, 15, "center", 0x000000, false, "middle", -148, 129, 10, 50]);
            return t;
        };
        __egretProto__.skill_list_i = function () {
            var t = new egret.gui.Scroller();
            this.skill_list = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [320, 270.5, 12, 211]);
            t.viewport = this.__15_i();
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-88, "attack_png", -99.5]);
            return t;
        };
        UIHireKnightInformationSkin._skinParts = ["icon_name_frame_bg", "label_name", "icon_body_frame_bg", "icon_body", "icon_atk_frame_bg", "label_atk_num", "icon_def_frame_bg", "label_def_num", "icon_hp_frame_bg", "label_hp_num", "label_exp_percent", "icon_exp_bar", "skill_list", "label_level", "close_icon", "hire_btn", "cost_label"];
        return UIHireKnightInformationSkin;
    })(egret.gui.Skin);
    skins.UIHireKnightInformationSkin = UIHireKnightInformationSkin;
    UIHireKnightInformationSkin.prototype.__class__ = "skins.UIHireKnightInformationSkin";
})(skins || (skins = {}));
