var skins;
(function (skins) {
    var UIPlayerDetailDialogSkin = (function (_super) {
        __extends(UIPlayerDetailDialogSkin, _super);
        function UIPlayerDetailDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.pos_bg_0_i(), this.pos_platform_0_i(), this.icon_head_pos_0_i(), this.label_level_pos_0_i(), this.left_color_icon_pos_0_i(), this.right_color_icon_pos_0_i(), this.select_frame_0_i(), this.pos_mask_0_i(), this.pos_bg_1_i(), this.pos_platform_1_i(), this.icon_head_pos_1_i(), this.label_level_pos_1_i(), this.left_color_icon_pos_1_i(), this.right_color_icon_pos_1_i(), this.select_frame_1_i(), this.pos_mask_1_i(), this.pos_bg_2_i(), this.pos_platform_2_i(), this.icon_head_pos_2_i(), this.label_level_pos_2_i(), this.left_color_icon_pos_2_i(), this.right_color_icon_pos_2_i(), this.select_frame_2_i(), this.pos_mask_2_i(), this.pos_bg_3_i(), this.pos_platform_3_i(), this.icon_head_pos_3_i(), this.label_level_pos_3_i(), this.left_color_icon_pos_3_i(), this.right_color_icon_pos_3_i(), this.select_frame_3_i(), this.pos_mask_3_i(), this.pos_bg_4_i(), this.pos_platform_4_i(), this.icon_head_pos_4_i(), this.label_level_pos_4_i(), this.left_color_icon_pos_4_i(), this.right_color_icon_pos_4_i(), this.select_frame_4_i(), this.pos_mask_4_i(), this.icon_name_frame_bg_i(), this.label_name_i(), this.__8_i(), this.__9_i(), this.icon_body_frame_bg_i(), this.icon_body_i(), this.icon_body_mask_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.icon_atk_frame_bg_i(), this.label_atk_num_i(), this.icon_def_frame_bg_i(), this.label_def_num_i(), this.icon_hp_frame_bg_i(), this.label_hp_num_i(), this.__14_i(), this.label_exp_percent_i(), this.icon_exp_bar_i(), this.skill_list_i(), this.__16_i(), this.label_level_i(), this.close_icon_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIPlayerDetailDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIPlayerDetailDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [12.5, "def_png", -45.5]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [8.5, "exp_png", 79.5]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [13, "heart_png", 12.5]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [80, egret.gui.getScale9Grid("10,7,26,1"), "exp_bar_frame_png", 79.5, 92]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Group();
            t.height = 320;
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-61, "lv_top_png", 142.5]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 1, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -1, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "scaleX", "scaleY", "source", "verticalCenter", "width"], [340, 15, egret.gui.getScale9Grid("50,53,49,45"), 1.2, 1.4, "special_detail_bg_png", -5.000000000000028, 785]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [336, 84, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -33, 210]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [392, 298, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -5, 200]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [392, -139.5, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -5, 219]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 92.5, 30, "基本信息", "center", 0xFDD00A, false, "middle", -171, 129, 20, 60]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 300.5, 30, "特殊技能", "center", 0xFDD00A, false, "middle", -172, 129, 30, 70]);
            return t;
        };
        __egretProto__.close_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_icon = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [45, 419.5, "close_png", -204.5, 43]);
            return t;
        };
        __egretProto__.icon_atk_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_atk_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 103, "color_value_panel_5_png", -102, 132, 10, 10]);
            return t;
        };
        __egretProto__.icon_body_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width"], [423, -138.8, 0.7, 0.7, "color_big_frame_6_png", 15.049999999999955, 292]);
            return t;
        };
        __egretProto__.icon_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width"], [423, -138.8, 0.7, 0.7, "knight_1_png", 15.049999999999955, 292]);
            return t;
        };
        __egretProto__.icon_body_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_mask = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width"], [423, -138.8, 0.7, 0.7, "red_mask_1_png", 15.049999999999955, 292]);
            return t;
        };
        __egretProto__.icon_def_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_def_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 103, "color_value_panel_5_png", -45, 132, 20, 20]);
            return t;
        };
        __egretProto__.icon_exp_bar_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_exp_bar = t;
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [80, egret.gui.getScale9Grid("9,7,29,1"), "exp_bar_png", 80.5, 92]);
            return t;
        };
        __egretProto__.icon_head_pos_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [58, -321.5, "head_nor_1_png", -176, 69]);
            return t;
        };
        __egretProto__.icon_head_pos_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [58, -321.5, "head_nor_1_png", -95, 69, 10, 10]);
            return t;
        };
        __egretProto__.icon_head_pos_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [58, -321.5, "head_nor_1_png", -14, 69, 20, 20]);
            return t;
        };
        __egretProto__.icon_head_pos_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [58, -321.5, "head_nor_1_png", 68, 69, 30, 30]);
            return t;
        };
        __egretProto__.icon_head_pos_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [58, -321.5, "head_nor_1_png", 150, 69, 40, 40]);
            return t;
        };
        __egretProto__.icon_hp_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_hp_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 103, "color_value_panel_5_png", 11, 132, 30, 30]);
            return t;
        };
        __egretProto__.icon_name_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_name_frame_bg = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-138, "color_frame_6_png", -159.5]);
            return t;
        };
        __egretProto__.label_atk_num_i = function () {
            var t = new egret.gui.Label();
            this.label_atk_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 103.5, 25, "center", 0x000000, false, "middle", -102, 117, 20, 60]);
            return t;
        };
        __egretProto__.label_def_num_i = function () {
            var t = new egret.gui.Label();
            this.label_def_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 102.5, 25, "center", 0x000000, false, "middle", -45, 117, 30, 70]);
            return t;
        };
        __egretProto__.label_exp_percent_i = function () {
            var t = new egret.gui.Label();
            this.label_exp_percent = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "y"], ["Arial", 34, 154, 18, "99.9%", "center", 0x22FF48, false, "middle", 80, 62, 40]);
            return t;
        };
        __egretProto__.label_hp_num_i = function () {
            var t = new egret.gui.Label();
            this.label_hp_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 103.5, 25, "center", 0x000000, false, "middle", 11, 117, 40, 80]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 36, -61, 20, "9", "center", 0xF7EDBC, false, "middle", 150, 32, 10, 10]);
            return t;
        };
        __egretProto__.label_level_pos_0_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_0 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width"], [true, "Arial", 14, -321, true, 10, "Lv.9", "center", 0x000000, false, -139, 92]);
            return t;
        };
        __egretProto__.label_level_pos_1_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_1 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width", "x", "y"], [true, "Arial", 14, -321, true, 10, "Lv.9", "center", 0x000000, false, -58, 92, 10, 10]);
            return t;
        };
        __egretProto__.label_level_pos_2_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_2 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width", "x", "y"], [true, "Arial", 14, -321, true, 10, "Lv.9", "center", 0x000000, false, 23, 92, 20, 20]);
            return t;
        };
        __egretProto__.label_level_pos_3_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_3 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width", "x", "y"], [true, "Arial", 14, -321, true, 10, "Lv.9", "center", 0x000000, false, 105, 92, 30, 30]);
            return t;
        };
        __egretProto__.label_level_pos_4_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_4 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width", "x", "y"], [true, "Arial", 14, -321, true, 10, "Lv.9", "center", 0x000000, false, 187, 92, 40, 40]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, -136.5, 15, "center", 0x000000, false, "middle", -157, 129, 10, 50]);
            return t;
        };
        __egretProto__.left_color_icon_pos_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [8, -355, "color_1_png", -139, 8]);
            return t;
        };
        __egretProto__.left_color_icon_pos_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -355, "color_1_png", -58, 8, 10, 10]);
            return t;
        };
        __egretProto__.left_color_icon_pos_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -355, "color_1_png", 23, 8, 20, 20]);
            return t;
        };
        __egretProto__.left_color_icon_pos_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -355, "color_1_png", 105, 8, 30, 30]);
            return t;
        };
        __egretProto__.left_color_icon_pos_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -355, "color_1_png", 187, 8, 40, 40]);
            return t;
        };
        __egretProto__.pos_bg_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_0 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [80, -321, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -164, 120]);
            return t;
        };
        __egretProto__.pos_bg_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_1 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [80, -321, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -83, 120]);
            return t;
        };
        __egretProto__.pos_bg_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [80, -321, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -2, 120, 20, 20]);
            return t;
        };
        __egretProto__.pos_bg_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_3 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [80, -321, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 80, 120, 30, 30]);
            return t;
        };
        __egretProto__.pos_bg_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_4 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [80, -321, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 162, 120, 40, 40]);
            return t;
        };
        __egretProto__.pos_mask_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_0 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0, 79, -321, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -163.5, 120]);
            return t;
        };
        __egretProto__.pos_mask_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_1 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 79, -321, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -82.5, 120, 10, 10]);
            return t;
        };
        __egretProto__.pos_mask_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_2 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 79, -321, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -1.5, 120, 20, 20]);
            return t;
        };
        __egretProto__.pos_mask_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_3 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 79, -321, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 80.5, 120, 30, 30]);
            return t;
        };
        __egretProto__.pos_mask_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_4 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 79, -321, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 162.5, 120, 40, 40]);
            return t;
        };
        __egretProto__.pos_platform_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [41, -320.5, "on_position_bg_png", -149.5, 99]);
            return t;
        };
        __egretProto__.pos_platform_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [41, -320.5, "on_position_bg_png", -68.5, 99, 10, 10]);
            return t;
        };
        __egretProto__.pos_platform_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [41, -320.5, "on_position_bg_png", 12.5, 99, 20, 20]);
            return t;
        };
        __egretProto__.pos_platform_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [41, -320.5, "on_position_bg_png", 94.5, 99, 30, 30]);
            return t;
        };
        __egretProto__.pos_platform_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [41, -320.5, "on_position_bg_png", 176.5, 99, 40, 40]);
            return t;
        };
        __egretProto__.right_color_icon_pos_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [8, -285, "color_1_png", -139, 8]);
            return t;
        };
        __egretProto__.right_color_icon_pos_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -285, "color_1_png", -58, 8, 10, 10]);
            return t;
        };
        __egretProto__.right_color_icon_pos_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -285, "color_1_png", 23, 8, 20, 20]);
            return t;
        };
        __egretProto__.right_color_icon_pos_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -285, "color_1_png", 105, 8, 30, 30]);
            return t;
        };
        __egretProto__.right_color_icon_pos_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -285, "color_1_png", 187, 8, 40, 40]);
            return t;
        };
        __egretProto__.select_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_0 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [82, -320.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", -164, 123]);
            return t;
        };
        __egretProto__.select_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_1 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [82, -320.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", -83, 123, 10, 10]);
            return t;
        };
        __egretProto__.select_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [82, -320.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", -2, 123, 20, 20]);
            return t;
        };
        __egretProto__.select_frame_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_3 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [82, -320.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 80, 123, 30, 30]);
            return t;
        };
        __egretProto__.select_frame_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_4 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [82, -320.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 162, 123, 40, 40]);
            return t;
        };
        __egretProto__.skill_list_i = function () {
            var t = new egret.gui.Scroller();
            this.skill_list = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [320, 297.5, 12, 185]);
            t.viewport = this.__15_i();
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [11, "attack_png", -101.5]);
            return t;
        };
        UIPlayerDetailDialogSkin._skinParts = ["pos_bg_0", "pos_platform_0", "icon_head_pos_0", "label_level_pos_0", "left_color_icon_pos_0", "right_color_icon_pos_0", "select_frame_0", "pos_mask_0", "pos_bg_1", "pos_platform_1", "icon_head_pos_1", "label_level_pos_1", "left_color_icon_pos_1", "right_color_icon_pos_1", "select_frame_1", "pos_mask_1", "pos_bg_2", "pos_platform_2", "icon_head_pos_2", "label_level_pos_2", "left_color_icon_pos_2", "right_color_icon_pos_2", "select_frame_2", "pos_mask_2", "pos_bg_3", "pos_platform_3", "icon_head_pos_3", "label_level_pos_3", "left_color_icon_pos_3", "right_color_icon_pos_3", "select_frame_3", "pos_mask_3", "pos_bg_4", "pos_platform_4", "icon_head_pos_4", "label_level_pos_4", "left_color_icon_pos_4", "right_color_icon_pos_4", "select_frame_4", "pos_mask_4", "icon_name_frame_bg", "label_name", "icon_body_frame_bg", "icon_body", "icon_body_mask", "icon_atk_frame_bg", "label_atk_num", "icon_def_frame_bg", "label_def_num", "icon_hp_frame_bg", "label_hp_num", "label_exp_percent", "icon_exp_bar", "skill_list", "label_level", "close_icon"];
        return UIPlayerDetailDialogSkin;
    })(egret.gui.Skin);
    skins.UIPlayerDetailDialogSkin = UIPlayerDetailDialogSkin;
    UIPlayerDetailDialogSkin.prototype.__class__ = "skins.UIPlayerDetailDialogSkin";
})(skins || (skins = {}));
