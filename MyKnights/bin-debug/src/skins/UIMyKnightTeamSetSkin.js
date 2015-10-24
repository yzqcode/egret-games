var skins;
(function (skins) {
    var UIMyKnightTeamSetSkin = (function (_super) {
        __extends(UIMyKnightTeamSetSkin, _super);
        function UIMyKnightTeamSetSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.pos_bg_0_i(), this.pos_platform_0_i(), this.icon_head_pos_0_i(), this.label_level_pos_0_i(), this.left_color_icon_pos_0_i(), this.right_color_icon_pos_0_i(), this.select_frame_0_i(), this.pos_mask_0_i(), this.pos_bg_1_i(), this.pos_platform_1_i(), this.icon_head_pos_1_i(), this.label_level_pos_1_i(), this.left_color_icon_pos_1_i(), this.right_color_icon_pos_1_i(), this.select_frame_1_i(), this.pos_mask_1_i(), this.pos_bg_2_i(), this.pos_platform_2_i(), this.icon_head_pos_2_i(), this.label_level_pos_2_i(), this.left_color_icon_pos_2_i(), this.right_color_icon_pos_2_i(), this.select_frame_2_i(), this.pos_mask_2_i(), this.pos_bg_3_i(), this.pos_platform_3_i(), this.icon_head_pos_3_i(), this.label_level_pos_3_i(), this.left_color_icon_pos_3_i(), this.right_color_icon_pos_3_i(), this.select_frame_3_i(), this.pos_mask_3_i(), this.pos_bg_4_i(), this.pos_platform_4_i(), this.icon_head_pos_4_i(), this.label_level_pos_4_i(), this.left_color_icon_pos_4_i(), this.right_color_icon_pos_4_i(), this.select_frame_4_i(), this.pos_mask_4_i(), this.btn_enter_team_i(), this.btn_dismiss_i(), this.btn_exit_team_i(), this.icon_name_frame_bg_i(), this.label_name_i(), this.__9_i(), this.__10_i(), this.icon_body_frame_bg_i(), this.icon_body_i(), this.icon_body_mask_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.icon_atk_frame_bg_i(), this.label_atk_num_i(), this.icon_def_frame_bg_i(), this.label_def_num_i(), this.icon_hp_frame_bg_i(), this.label_hp_num_i(), this.__15_i(), this.label_exp_percent_i(), this.icon_exp_bar_i(), this.btn_increase_team_i(), this.skill_list_i(), this.knights_list_i(), this.label_pos_status_i(), this.__18_i(), this.__19_i(), this.label_level_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIMyKnightTeamSetSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIMyKnightTeamSetSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-76, "attack_png", -113.5]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-75.5, "def_png", -54.5]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-73.5, "exp_png", 61.5]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-75, "heart_png", 6.5]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [3, egret.gui.getScale9Grid("10,7,26,1"), "exp_bar_frame_png", 61.5, 100]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [497.5, "add_icon_png", false, 155.5]);
            return t;
        };
        __egretProto__.__19_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-159, "lv_top_png", 161.5]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [874, 0, "home_bg_jpg", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [415, 0, "chat_dialog_panel_2_jpg", 0, 1098, 10, 10]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [450, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [310, -2, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -45, 230]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [400, 222, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 0, 200, 10, 10]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [400, -259.5, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 0, 265]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 1.5, 30, "基本信息", "center", 0xFDD00A, false, "middle", -170, 129, 20, 60]);
            return t;
        };
        __egretProto__.btn_dismiss_i = function () {
            var t = new egret.gui.Button();
            this.btn_dismiss = t;
            this.__s(t, ["enabled", "horizontalCenter", "label", "skinName", "verticalCenter"], [true, -59, "解雇", skins.BtnRedSmallSkin, 155]);
            return t;
        };
        __egretProto__.btn_enter_team_i = function () {
            var t = new egret.gui.Button();
            this.btn_enter_team = t;
            this.__s(t, ["enabled", "horizontalCenter", "label", "skinName", "verticalCenter", "y"], [true, 59, "上阵", skins.BtnYellowSmallSkin, 154, 10]);
            return t;
        };
        __egretProto__.btn_exit_team_i = function () {
            var t = new egret.gui.Button();
            this.btn_exit_team = t;
            this.__s(t, ["enabled", "horizontalCenter", "label", "skinName", "verticalCenter", "y"], [true, 0, "下阵", skins.BtnBlueSmallSkin, 154, 20]);
            return t;
        };
        __egretProto__.btn_increase_team_i = function () {
            var t = new egret.gui.Button();
            this.btn_increase_team = t;
            this.__s(t, ["enabled", "horizontalCenter", "skinName", "verticalCenter", "y"], [true, 433.5, skins.BtnGreenLargeSkin, 157, 30]);
            return t;
        };
        __egretProto__.icon_atk_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_atk_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 18, "color_value_panel_5_png", -116, 132, 10, 10]);
            return t;
        };
        __egretProto__.icon_body_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [485, -259, 0.7, 0.7, "color_big_frame_6_png", 24.5, 341, 10, 10]);
            return t;
        };
        __egretProto__.icon_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-259, 0.7, 0.7, "knight_1_png", 24.5]);
            return t;
        };
        __egretProto__.icon_body_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_mask = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [-259, 0.7, 0.7, "red_mask_1_png", 24.5, 10, 10]);
            return t;
        };
        __egretProto__.icon_def_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_def_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 19, "color_value_panel_5_png", -54.5, 132, 20, 20]);
            return t;
        };
        __egretProto__.icon_exp_bar_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_exp_bar = t;
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [4, egret.gui.getScale9Grid("9,7,29,1"), "exp_bar_png", 61.5, 100]);
            return t;
        };
        __egretProto__.icon_head_pos_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [58, -464.5, "head_nor_1_png", -174, 69]);
            return t;
        };
        __egretProto__.icon_head_pos_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [58, -464.5, "head_nor_1_png", -93, 69, 10, 10]);
            return t;
        };
        __egretProto__.icon_head_pos_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [58, -464.5, "head_nor_1_png", -12, 69, 20, 20]);
            return t;
        };
        __egretProto__.icon_head_pos_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [58, -464.5, "head_nor_1_png", 70, 69, 30, 30]);
            return t;
        };
        __egretProto__.icon_head_pos_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_head_pos_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [58, -464.5, "head_nor_1_png", 152, 69, 40, 40]);
            return t;
        };
        __egretProto__.icon_hp_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_hp_frame_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [40, 19, "color_value_panel_5_png", 7.5, 132, 30, 30]);
            return t;
        };
        __egretProto__.icon_name_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_name_frame_bg = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-262, "color_frame_6_png", -163.5]);
            return t;
        };
        __egretProto__.knights_list_i = function () {
            var t = new egret.gui.Scroller();
            this.knights_list = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x"], [310, 433, -39, 210, 10]);
            t.viewport = this.__17_i();
            return t;
        };
        __egretProto__.label_atk_num_i = function () {
            var t = new egret.gui.Label();
            this.label_atk_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 17.5, 25, "1234", "center", 0x000000, false, "middle", -117, 117, 20, 60]);
            return t;
        };
        __egretProto__.label_def_num_i = function () {
            var t = new egret.gui.Label();
            this.label_def_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 17.5, 25, "1234", "center", 0x000000, false, "middle", -55, 117, 30, 70]);
            return t;
        };
        __egretProto__.label_exp_percent_i = function () {
            var t = new egret.gui.Label();
            this.label_exp_percent = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 18, "99.9%", "center", 0x22FF48, false, "middle", 62, 62, 619, 40]);
            return t;
        };
        __egretProto__.label_hp_num_i = function () {
            var t = new egret.gui.Label();
            this.label_hp_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 17.5, 25, "1234", "center", 0x000000, false, "middle", 7, 117, 40, 80]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 36, -159, 20, "9", "center", 0xF7EDBC, false, "middle", 169, 32, 10, 10]);
            return t;
        };
        __egretProto__.label_level_pos_0_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_0 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width"], [true, "Arial", 14, -464, true, 10, "Lv.9", "center", 0x000000, false, -137, 92]);
            return t;
        };
        __egretProto__.label_level_pos_1_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_1 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width", "x", "y"], [true, "Arial", 14, -464, true, 10, "Lv.9", "center", 0x000000, false, -56, 92, 10, 10]);
            return t;
        };
        __egretProto__.label_level_pos_2_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_2 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width", "x", "y"], [true, "Arial", 14, -464, true, 10, "Lv.9", "center", 0x000000, false, 25, 92, 20, 20]);
            return t;
        };
        __egretProto__.label_level_pos_3_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_3 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width", "x", "y"], [true, "Arial", 14, -464, true, 10, "Lv.9", "center", 0x000000, false, 107, 92, 30, 30]);
            return t;
        };
        __egretProto__.label_level_pos_4_i = function () {
            var t = new egret.gui.Label();
            this.label_level_pos_4 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width", "x", "y"], [true, "Arial", 14, -464, true, 10, "Lv.9", "center", 0x000000, false, 189, 92, 40, 40]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, -260.5, 15, "我是一个大帅哥", "center", 0x000000, false, "middle", -161, 129, 10, 50]);
            return t;
        };
        __egretProto__.label_pos_status_i = function () {
            var t = new egret.gui.Label();
            this.label_pos_status = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 36, 437, 20, "100/123", "center", 0x000000, false, "middle", 156, 94]);
            return t;
        };
        __egretProto__.left_color_icon_pos_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [8, -498, "color_1_png", -137, 8]);
            return t;
        };
        __egretProto__.left_color_icon_pos_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -498, "color_1_png", -56, 8, 10, 10]);
            return t;
        };
        __egretProto__.left_color_icon_pos_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -498, "color_1_png", 25, 8, 20, 20]);
            return t;
        };
        __egretProto__.left_color_icon_pos_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -498, "color_1_png", 107, 8, 30, 30]);
            return t;
        };
        __egretProto__.left_color_icon_pos_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon_pos_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -498, "color_1_png", 189, 8, 40, 40]);
            return t;
        };
        __egretProto__.pos_bg_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_0 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [80, -464, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -162, 120]);
            return t;
        };
        __egretProto__.pos_bg_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_1 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [80, -464, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -81, 120]);
            return t;
        };
        __egretProto__.pos_bg_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [80, -464, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 0, 120, 20, 20]);
            return t;
        };
        __egretProto__.pos_bg_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_3 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [80, -464, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 82, 120, 30, 30]);
            return t;
        };
        __egretProto__.pos_bg_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_bg_4 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [80, -464, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 164, 120, 40, 40]);
            return t;
        };
        __egretProto__.pos_mask_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_0 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0, 79, -464, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -161.5, 120]);
            return t;
        };
        __egretProto__.pos_mask_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_1 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 79, -464, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -80.5, 120, 10, 10]);
            return t;
        };
        __egretProto__.pos_mask_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_2 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 79, -464, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0.5, 120, 20, 20]);
            return t;
        };
        __egretProto__.pos_mask_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_3 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 79, -464, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 82.5, 120, 30, 30]);
            return t;
        };
        __egretProto__.pos_mask_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask_4 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0, 79, -464, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 164.5, 120, 40, 40]);
            return t;
        };
        __egretProto__.pos_platform_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [41, -463.5, "on_position_bg_png", -147.5, 99]);
            return t;
        };
        __egretProto__.pos_platform_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [41, -463.5, "on_position_bg_png", -66.5, 99, 10, 10]);
            return t;
        };
        __egretProto__.pos_platform_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [41, -463.5, "on_position_bg_png", 14.5, 99, 20, 20]);
            return t;
        };
        __egretProto__.pos_platform_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [41, -463.5, "on_position_bg_png", 96.5, 99, 30, 30]);
            return t;
        };
        __egretProto__.pos_platform_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_platform_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [41, -463.5, "on_position_bg_png", 178.5, 99, 40, 40]);
            return t;
        };
        __egretProto__.right_color_icon_pos_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [8, -428, "color_1_png", -137, 8]);
            return t;
        };
        __egretProto__.right_color_icon_pos_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -428, "color_1_png", -56, 8, 10, 10]);
            return t;
        };
        __egretProto__.right_color_icon_pos_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -428, "color_1_png", 25, 8, 20, 20]);
            return t;
        };
        __egretProto__.right_color_icon_pos_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -428, "color_1_png", 107, 8, 30, 30]);
            return t;
        };
        __egretProto__.right_color_icon_pos_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon_pos_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [8, -428, "color_1_png", 189, 8, 40, 40]);
            return t;
        };
        __egretProto__.select_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_0 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [82, -463.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", -162, 123]);
            return t;
        };
        __egretProto__.select_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_1 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [82, -463.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", -81, 123, 10, 10]);
            return t;
        };
        __egretProto__.select_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [82, -463.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 0, 123, 20, 20]);
            return t;
        };
        __egretProto__.select_frame_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_3 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [82, -463.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 82, 123, 30, 30]);
            return t;
        };
        __egretProto__.select_frame_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame_4 = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [82, -463.5, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 164, 123, 40, 40]);
            return t;
        };
        __egretProto__.skill_list_i = function () {
            var t = new egret.gui.Scroller();
            this.skill_list = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [324, 222.5, 17, 185]);
            t.viewport = this.__16_i();
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 34, 221.5, 30, "特殊技能", "center", 0xFDD00A, false, "middle", -170, 129, 30, 70]);
            return t;
        };
        UIMyKnightTeamSetSkin._skinParts = ["pos_bg_0", "pos_platform_0", "icon_head_pos_0", "label_level_pos_0", "left_color_icon_pos_0", "right_color_icon_pos_0", "select_frame_0", "pos_mask_0", "pos_bg_1", "pos_platform_1", "icon_head_pos_1", "label_level_pos_1", "left_color_icon_pos_1", "right_color_icon_pos_1", "select_frame_1", "pos_mask_1", "pos_bg_2", "pos_platform_2", "icon_head_pos_2", "label_level_pos_2", "left_color_icon_pos_2", "right_color_icon_pos_2", "select_frame_2", "pos_mask_2", "pos_bg_3", "pos_platform_3", "icon_head_pos_3", "label_level_pos_3", "left_color_icon_pos_3", "right_color_icon_pos_3", "select_frame_3", "pos_mask_3", "pos_bg_4", "pos_platform_4", "icon_head_pos_4", "label_level_pos_4", "left_color_icon_pos_4", "right_color_icon_pos_4", "select_frame_4", "pos_mask_4", "btn_enter_team", "btn_dismiss", "btn_exit_team", "icon_name_frame_bg", "label_name", "icon_body_frame_bg", "icon_body", "icon_body_mask", "icon_atk_frame_bg", "label_atk_num", "icon_def_frame_bg", "label_def_num", "icon_hp_frame_bg", "label_hp_num", "label_exp_percent", "icon_exp_bar", "btn_increase_team", "skill_list", "knights_list", "label_pos_status", "label_level"];
        return UIMyKnightTeamSetSkin;
    })(egret.gui.Skin);
    skins.UIMyKnightTeamSetSkin = UIMyKnightTeamSetSkin;
    UIMyKnightTeamSetSkin.prototype.__class__ = "skins.UIMyKnightTeamSetSkin";
})(skins || (skins = {}));
