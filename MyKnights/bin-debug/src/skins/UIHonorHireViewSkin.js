var skins;
(function (skins) {
    var UIHonorHireViewSkin = (function (_super) {
        __extends(UIHonorHireViewSkin, _super);
        function UIHonorHireViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.quality_label_i(), this.__7_i(), this.corner_4_left_i(), this.corner_4_right_i(), this.body_frame_4_i(), this.icon_body_4_i(), this.name_frame_4_i(), this.label_name_4_i(), this.gold_frame_4_i(), this.label_gold_4_i(), this.circle_4_attack_i(), this.circle_4_defense_i(), this.circle_4_blood_i(), this.icon_gold_4_i(), this.btn_select_4_i(), this.__8_i(), this.corner_3_left_i(), this.corner_3_right_i(), this.body_frame_3_i(), this.icon_body_3_i(), this.name_frame_3_i(), this.label_name_3_i(), this.gold_frame_3_i(), this.label_gold_3_i(), this.circle_3_attack_i(), this.circle_3_defense_i(), this.circle_3_blood_i(), this.icon_gold_3_i(), this.btn_select_3_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.corner_0_left_i(), this.corner_0_right_i(), this.corner_1_left_i(), this.corner_1_right_i(), this.corner_2_left_i(), this.corner_2_right_i(), this.body_frame_0_i(), this.icon_body_0_i(), this.name_frame_0_i(), this.label_name_0_i(), this.gold_frame_0_i(), this.label_gold_0_i(), this.circle_0_attack_i(), this.circle_0_defense_i(), this.circle_0_blood_i(), this.body_frame_1_i(), this.icon_body_1_i(), this.name_frame_1_i(), this.label_name_1_i(), this.gold_frame_1_i(), this.label_gold_1_i(), this.circle_1_attack_i(), this.circle_1_defense_i(), this.circle_1_blood_i(), this.body_frame_2_i(), this.icon_body_2_i(), this.name_frame_2_i(), this.label_name_2_i(), this.gold_frame_2_i(), this.label_gold_2_i(), this.circle_2_attack_i(), this.circle_2_defense_i(), this.circle_2_blood_i(), this.icon_gold_0_i(), this.icon_gold_1_i(), this.icon_gold_2_i(), this.btn_select_0_i(), this.btn_select_1_i(), this.btn_select_2_i(), this.__12_i(), this.__13_i(), this.refresh_btn_i(), this.__14_i(), this.__15_i(), this.refresh_cost_i(), this.__16_i(), this.quality_later_i(), this.quality_before_i(), this.level_up_label_i(), this.__17_i(), this.refresh_bar_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIHonorHireViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIHonorHireViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [310, 0, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -8, 182]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "chat_title_png", -191.5]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 48, -0.5, 30, "荣誉招募", "center", 0x121111, false, "middle", -201, 217]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter"], ["Arial", -468, 22, "刷新", "center", 0x050404, false, "middle", 175.5]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [-425, "diamond_icon_png", false, 174]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "visible", "width"], [46, 89.5, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 172, false, 831]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [35, -66.5, egret.gui.getScale9Grid("20,16,66,2"), "blue_bar_bg_png", 173.5, 421]);
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
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [310, 419, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -8, 182]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [310, 210, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -8, 182]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [310, -421, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -8, 182]);
            return t;
        };
        __egretProto__.body_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.body_frame_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [242, -420, "color_big_frame_1_png", -26, 172]);
            return t;
        };
        __egretProto__.body_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.body_frame_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [242, -211, "color_big_frame_1_png", -26, 172]);
            return t;
        };
        __egretProto__.body_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.body_frame_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [242, 1, "color_big_frame_1_png", -26, 172]);
            return t;
        };
        __egretProto__.body_frame_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.body_frame_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [242, 209, "color_big_frame_1_png", -27, 172, 10, 10]);
            return t;
        };
        __egretProto__.body_frame_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.body_frame_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [242, 418, "color_big_frame_1_png", -26, 172, 20, 20]);
            return t;
        };
        __egretProto__.btn_select_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_0 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [0, 326, -421, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", true, -8, 200]);
            return t;
        };
        __egretProto__.btn_select_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_1 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [0, 326, -212, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", true, -8, 200]);
            return t;
        };
        __egretProto__.btn_select_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_2 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [0, 326, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", true, -8, 200]);
            return t;
        };
        __egretProto__.btn_select_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_3 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [0, 326, 208, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", true, -9, 200]);
            return t;
        };
        __egretProto__.btn_select_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_4 = t;
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "verticalCenter", "visible", "width"], [0, 326, 417, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", true, -8, false, 200]);
            return t;
        };
        __egretProto__.circle_0_attack_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_0_attack = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-474.5, "color_1_png", 15.5]);
            return t;
        };
        __egretProto__.circle_0_blood_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_0_blood = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-474.5, "color_1_png", 58.5]);
            return t;
        };
        __egretProto__.circle_0_defense_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_0_defense = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-474.5, "color_1_png", 36.5]);
            return t;
        };
        __egretProto__.circle_1_attack_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_1_attack = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-266.5, "color_1_png", 15.5]);
            return t;
        };
        __egretProto__.circle_1_blood_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_1_blood = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-266.5, "color_1_png", 58.5]);
            return t;
        };
        __egretProto__.circle_1_defense_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_1_defense = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-266.5, "color_1_png", 36.5]);
            return t;
        };
        __egretProto__.circle_2_attack_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_2_attack = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-54.5, "color_1_png", 15.5]);
            return t;
        };
        __egretProto__.circle_2_blood_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_2_blood = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-54.5, "color_1_png", 58.5]);
            return t;
        };
        __egretProto__.circle_2_defense_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_2_defense = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-54.5, "color_1_png", 36.5]);
            return t;
        };
        __egretProto__.circle_3_attack_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_3_attack = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [154.5, "color_1_png", 14.5, 10, 10]);
            return t;
        };
        __egretProto__.circle_3_blood_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_3_blood = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [154.5, "color_1_png", 57.5, 10, 10]);
            return t;
        };
        __egretProto__.circle_3_defense_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_3_defense = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [154.5, "color_1_png", 35.5, 10, 10]);
            return t;
        };
        __egretProto__.circle_4_attack_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_4_attack = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [363.5, "color_1_png", 15.5, 20, 20]);
            return t;
        };
        __egretProto__.circle_4_blood_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_4_blood = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [363.5, "color_1_png", 58.5, 20, 20]);
            return t;
        };
        __egretProto__.circle_4_defense_i = function () {
            var t = new egret.gui.UIAsset();
            this.circle_4_defense = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [363.5, "color_1_png", 36.5, 20, 20]);
            return t;
        };
        __egretProto__.corner_0_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_0_left = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-488, "color_special_1_png", 102]);
            return t;
        };
        __egretProto__.corner_0_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_0_right = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter"], [-352, -1, "color_special_1_png", 102]);
            return t;
        };
        __egretProto__.corner_1_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_1_left = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-278, "color_special_1_png", 102]);
            return t;
        };
        __egretProto__.corner_1_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_1_right = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter", "x", "y"], [-142, -1, "color_special_1_png", 102, 10, 10]);
            return t;
        };
        __egretProto__.corner_2_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_2_left = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-67, "color_special_1_png", 102]);
            return t;
        };
        __egretProto__.corner_2_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_2_right = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter"], [71, -1, "color_special_1_png", 102]);
            return t;
        };
        __egretProto__.corner_3_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_3_left = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [141, "color_special_1_png", 101, 10, 10]);
            return t;
        };
        __egretProto__.corner_3_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_3_right = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter", "x", "y"], [277, -1, "color_special_1_png", 101, 10, 10]);
            return t;
        };
        __egretProto__.corner_4_left_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_4_left = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [350, "color_special_1_png", 102, 20, 20]);
            return t;
        };
        __egretProto__.corner_4_right_i = function () {
            var t = new egret.gui.UIAsset();
            this.corner_4_right = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter", "x", "y"], [486, -1, "color_special_1_png", 102, 20, 20]);
            return t;
        };
        __egretProto__.gold_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.gold_frame_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [57, -420, "color_frame_1_png", 110.5, 126]);
            return t;
        };
        __egretProto__.gold_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.gold_frame_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [57, -209, "color_frame_1_png", 110.5, 126]);
            return t;
        };
        __egretProto__.gold_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.gold_frame_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [57, 1, "color_frame_1_png", 110.5, 126]);
            return t;
        };
        __egretProto__.gold_frame_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.gold_frame_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [57, 209, "color_frame_1_png", 109.5, 126, 10, 10]);
            return t;
        };
        __egretProto__.gold_frame_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.gold_frame_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [57, 418, "color_frame_1_png", 110.5, 126, 20, 20]);
            return t;
        };
        __egretProto__.icon_body_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [254, -420.5, "knight_1_png", -31, 165]);
            return t;
        };
        __egretProto__.icon_body_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [254, -211.5, "knight_1_png", -31, 165]);
            return t;
        };
        __egretProto__.icon_body_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [254, -0.5, "knight_1_png", -31, 165]);
            return t;
        };
        __egretProto__.icon_body_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [254, 208.5, "knight_1_png", -32, 165, 10, 10]);
            return t;
        };
        __egretProto__.icon_body_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [254, 417.5, "knight_1_png", -31, 165, 20, 20]);
            return t;
        };
        __egretProto__.icon_gold_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gold_0 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [27, -450.5, "gold_icon_png", 111.5, 29]);
            return t;
        };
        __egretProto__.icon_gold_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gold_1 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [27, -238.5, "gold_icon_png", 111.5, 29]);
            return t;
        };
        __egretProto__.icon_gold_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gold_2 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [27, -28.5, "gold_icon_png", 111.5, 27]);
            return t;
        };
        __egretProto__.icon_gold_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gold_3 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [27, 178.5, "gold_icon_png", 110.5, 29, 10, 10]);
            return t;
        };
        __egretProto__.icon_gold_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_gold_4 = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [27, 387.5, "gold_icon_png", 111.5, 29, 20, 20]);
            return t;
        };
        __egretProto__.label_gold_0_i = function () {
            var t = new egret.gui.Label();
            this.label_gold_0 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [26, -403, 20, "0", "center", 0x030202, "middle", 111, 66]);
            return t;
        };
        __egretProto__.label_gold_1_i = function () {
            var t = new egret.gui.Label();
            this.label_gold_1 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [26, -192, 20, "0", "center", 0x010000, "middle", 111, 66]);
            return t;
        };
        __egretProto__.label_gold_2_i = function () {
            var t = new egret.gui.Label();
            this.label_gold_2 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [26, 17, 20, "0", "center", 0x010000, "middle", 111, 68]);
            return t;
        };
        __egretProto__.label_gold_3_i = function () {
            var t = new egret.gui.Label();
            this.label_gold_3 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], [26, 226, 20, "0", "center", 0x030202, "middle", 110, 66, 10, 10]);
            return t;
        };
        __egretProto__.label_gold_4_i = function () {
            var t = new egret.gui.Label();
            this.label_gold_4 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], [26, 435, 20, "0", "center", 0x030202, "middle", 111, 66, 20, 20]);
            return t;
        };
        __egretProto__.label_name_0_i = function () {
            var t = new egret.gui.Label();
            this.label_name_0 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [28, -421.5, 24, "名字", "center", 0x040303, "middle", -128, 117]);
            return t;
        };
        __egretProto__.label_name_1_i = function () {
            var t = new egret.gui.Label();
            this.label_name_1 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [28, -212.5, 24, "名字", "center", 0x040303, "middle", -128, 117]);
            return t;
        };
        __egretProto__.label_name_2_i = function () {
            var t = new egret.gui.Label();
            this.label_name_2 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [28, -0.5, 24, "名字", "center", 0x040303, "middle", -128, 117]);
            return t;
        };
        __egretProto__.label_name_3_i = function () {
            var t = new egret.gui.Label();
            this.label_name_3 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], [28, 207.5, 24, "名字", "center", 0x040303, "middle", -129, 117, 10, 10]);
            return t;
        };
        __egretProto__.label_name_4_i = function () {
            var t = new egret.gui.Label();
            this.label_name_4 = t;
            this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], [28, 416.5, 24, "名字", "center", 0x040303, "middle", -128, 117, 20, 20]);
            return t;
        };
        __egretProto__.level_up_label_i = function () {
            var t = new egret.gui.Label();
            this.level_up_label = t;
            this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "verticalAlign", "verticalCenter", "width"], [307, 24, "升级后最低品质为", "center", "middle", 173, 202]);
            return t;
        };
        __egretProto__.name_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame_0 = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-420, "color_frame_1_png", -129.5]);
            return t;
        };
        __egretProto__.name_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame_1 = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-211, "color_frame_1_png", -129.5]);
            return t;
        };
        __egretProto__.name_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame_2 = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [1, "color_frame_1_png", -129.5]);
            return t;
        };
        __egretProto__.name_frame_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame_3 = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [209, "color_frame_1_png", -130.5, 10, 10]);
            return t;
        };
        __egretProto__.name_frame_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.name_frame_4 = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [418, "color_frame_1_png", -129.5, 20, 20]);
            return t;
        };
        __egretProto__.quality_before_i = function () {
            var t = new egret.gui.UIAsset();
            this.quality_before = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-295.5, "color_1_png", 171.5]);
            return t;
        };
        __egretProto__.quality_label_i = function () {
            var t = new egret.gui.Label();
            this.quality_label = t;
            this.__s(t, ["horizontalCenter", "text", "textAlign", "verticalAlign", "verticalCenter"], [444, "蓝", "center", "middle", 173]);
            return t;
        };
        __egretProto__.quality_later_i = function () {
            var t = new egret.gui.UIAsset();
            this.quality_later = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [163.5, "color_1_png", 171.5]);
            return t;
        };
        __egretProto__.refresh_bar_i = function () {
            var t = new egret.gui.UIAsset();
            this.refresh_bar = t;
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [30, -66.5, egret.gui.getScale9Grid("16,13,56,2"), "blue_bar_png", 173, 417]);
            return t;
        };
        __egretProto__.refresh_btn_i = function () {
            var t = new egret.gui.Button();
            this.refresh_btn = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "skinName", "verticalCenter"], [-423.4, 0.8, 0.8, skins.BtnGreenLargeSkin, 173]);
            return t;
        };
        __egretProto__.refresh_cost_i = function () {
            var t = new egret.gui.Label();
            this.refresh_cost = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 26, -385, 22, "500", "center", 0x070606, false, "middle", 174, 60]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [310, -211, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -8, 182]);
            return t;
        };
        UIHonorHireViewSkin._skinParts = ["quality_label", "corner_4_left", "corner_4_right", "body_frame_4", "icon_body_4", "name_frame_4", "label_name_4", "gold_frame_4", "label_gold_4", "circle_4_attack", "circle_4_defense", "circle_4_blood", "icon_gold_4", "btn_select_4", "corner_3_left", "corner_3_right", "body_frame_3", "icon_body_3", "name_frame_3", "label_name_3", "gold_frame_3", "label_gold_3", "circle_3_attack", "circle_3_defense", "circle_3_blood", "icon_gold_3", "btn_select_3", "corner_0_left", "corner_0_right", "corner_1_left", "corner_1_right", "corner_2_left", "corner_2_right", "body_frame_0", "icon_body_0", "name_frame_0", "label_name_0", "gold_frame_0", "label_gold_0", "circle_0_attack", "circle_0_defense", "circle_0_blood", "body_frame_1", "icon_body_1", "name_frame_1", "label_name_1", "gold_frame_1", "label_gold_1", "circle_1_attack", "circle_1_defense", "circle_1_blood", "body_frame_2", "icon_body_2", "name_frame_2", "label_name_2", "gold_frame_2", "label_gold_2", "circle_2_attack", "circle_2_defense", "circle_2_blood", "icon_gold_0", "icon_gold_1", "icon_gold_2", "btn_select_0", "btn_select_1", "btn_select_2", "refresh_btn", "refresh_cost", "quality_later", "quality_before", "level_up_label", "refresh_bar"];
        return UIHonorHireViewSkin;
    })(egret.gui.Skin);
    skins.UIHonorHireViewSkin = UIHonorHireViewSkin;
    UIHonorHireViewSkin.prototype.__class__ = "skins.UIHonorHireViewSkin";
})(skins || (skins = {}));
