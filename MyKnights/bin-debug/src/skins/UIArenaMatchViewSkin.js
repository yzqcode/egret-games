var skins;
(function (skins) {
    var UIArenaMatchViewSkin = (function (_super) {
        __extends(UIArenaMatchViewSkin, _super);
        function UIArenaMatchViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.enemy_frame_0_i(), this.enemy_body_0_i(), this.enemy_body_mask_0_i(), this.enemy_frame_1_i(), this.enemy_body_1_i(), this.enemy_body_mask_1_i(), this.enemy_frame_2_i(), this.enemy_body_2_i(), this.enemy_body_mask_2_i(), this.enemy_frame_3_i(), this.enemy_body_3_i(), this.enemy_body_mask_3_i(), this.enemy_frame_4_i(), this.enemy_body_4_i(), this.enemy_body_mask_4_i(), this.self_frame_0_i(), this.self_body_0_i(), this.self_body_mask_0_i(), this.self_frame_1_i(), this.self_body_1_i(), this.self_body_mask_1_i(), this.self_frame_2_i(), this.self_body_2_i(), this.self_body_mask_2_i(), this.self_frame_3_i(), this.self_body_3_i(), this.self_body_mask_3_i(), this.self_frame_4_i(), this.self_body_4_i(), this.self_body_mask_4_i(), this.label_match_title_i(), this.label_tick_num_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.label_hint_i(), this.label_self_name_i(), this.label_enemy_name_i(), this.knight_anim_layer_i(), this.back_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIArenaMatchViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIArenaMatchViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [17, "vs_2_png", -4]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "y"], [46, 207.5, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -5, 275, 20]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "y"], [46, -169.5, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -5, 275, 30]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [70, -432.5, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", -4, 227, 10, 40]);
            return t;
        };
        __egretProto__.back_btn_i = function () {
            var t = new egret.gui.Button();
            this.back_btn = t;
            t.setStyle("bold", true);
            this.__s(t, ["enabled", "height", "horizontalCenter", "label", "skinName", "verticalCenter"], [true, 69, 452.5, "退出匹配", skins.BtnRedLargeSkin, -6.5]);
            return t;
        };
        __egretProto__.enemy_body_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_0 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, -390.24, 0.56, 0.56, "knight_1_png", -171.56, 292, 10, 10]);
            return t;
        };
        __egretProto__.enemy_body_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_1 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, -190.24, 0.56, 0.56, "knight_1_png", -171.56, 292, 20, 20]);
            return t;
        };
        __egretProto__.enemy_body_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 9.759999999999991, 0.56, 0.56, "knight_1_png", -171.56, 292, 30, 30]);
            return t;
        };
        __egretProto__.enemy_body_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_3 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 209.76, 0.56, 0.56, "knight_1_png", -171.56, 292, 40, 40]);
            return t;
        };
        __egretProto__.enemy_body_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_4 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 409.76, 0.56, 0.56, "knight_1_png", -171.56, 292, 50, 50]);
            return t;
        };
        __egretProto__.enemy_body_mask_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_mask_0 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, -390.24, 0.56, 0.56, "blue_mask_1_png", -171.56, 292, 10, 10]);
            return t;
        };
        __egretProto__.enemy_body_mask_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_mask_1 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, -190.24, 0.56, 0.56, "blue_mask_1_png", -171.56, 292, 20, 20]);
            return t;
        };
        __egretProto__.enemy_body_mask_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_mask_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 9.759999999999991, 0.56, 0.56, "blue_mask_1_png", -171.56, 292, 30, 30]);
            return t;
        };
        __egretProto__.enemy_body_mask_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_mask_3 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 209.76, 0.56, 0.56, "blue_mask_1_png", -171.56, 292, 40, 40]);
            return t;
        };
        __egretProto__.enemy_body_mask_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_body_mask_4 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 409.76, 0.56, 0.56, "blue_mask_1_png", -171.56, 292, 50, 50]);
            return t;
        };
        __egretProto__.enemy_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_frame_0 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [-389.52, 0.56, 0.56, "color_big_frame_1_png", -172.2, 10, 10]);
            return t;
        };
        __egretProto__.enemy_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_frame_1 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [-189.51999999999998, 0.56, 0.56, "color_big_frame_1_png", -172.2, 20, 20]);
            return t;
        };
        __egretProto__.enemy_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_frame_2 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [10.480000000000018, 0.56, 0.56, "color_big_frame_1_png", -172.2, 30, 30]);
            return t;
        };
        __egretProto__.enemy_frame_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_frame_3 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [210.48000000000002, 0.56, 0.56, "color_big_frame_1_png", -172.2, 40, 40]);
            return t;
        };
        __egretProto__.enemy_frame_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.enemy_frame_4 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [410.48, 0.56, 0.56, "color_big_frame_1_png", -172.2, 50, 50]);
            return t;
        };
        __egretProto__.knight_anim_layer_i = function () {
            var t = new egret.gui.Group();
            this.knight_anim_layer = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [0, 0, -137, 0]);
            return t;
        };
        __egretProto__.label_enemy_name_i = function () {
            var t = new egret.gui.Label();
            this.label_enemy_name = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 38, 208, 25, "????????", "center", 0x56BEFF, false, "middle", -5, 244, 40, 30]);
            return t;
        };
        __egretProto__.label_hint_i = function () {
            var t = new egret.gui.Label();
            this.label_hint = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 56, -432, 20, "???????????????", "center", 0xFECA0B, false, "middle", -6, 208, 20, 10]);
            return t;
        };
        __egretProto__.label_match_title_i = function () {
            var t = new egret.gui.Label();
            this.label_match_title = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 83, 5.5, 50, "努力匹配中", "center", 0xFECA0B, false, "middle", -82.5, 269, 10]);
            return t;
        };
        __egretProto__.label_self_name_i = function () {
            var t = new egret.gui.Label();
            this.label_self_name = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 38, -172, 25, "zf369", "center", 0xF7474D, false, "middle", -5, 244, 30, 20]);
            return t;
        };
        __egretProto__.label_tick_num_i = function () {
            var t = new egret.gui.Label();
            this.label_tick_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 83, 267, 50, "......", "left", 0xFECA0B, false, "middle", -82.5, 272, 20, 10]);
            return t;
        };
        __egretProto__.self_body_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_0 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width"], [423, -390.24, 0.56, 0.56, "knight_1_png", 158.44, 292]);
            return t;
        };
        __egretProto__.self_body_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_1 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, -190.24, 0.56, 0.56, "knight_1_png", 158.44, 292, 10, 10]);
            return t;
        };
        __egretProto__.self_body_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 9.759999999999991, 0.56, 0.56, "knight_1_png", 158.44, 292, 20, 20]);
            return t;
        };
        __egretProto__.self_body_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_3 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 209.76, 0.56, 0.56, "knight_1_png", 158.44, 292, 30, 30]);
            return t;
        };
        __egretProto__.self_body_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_4 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 409.76, 0.56, 0.56, "knight_1_png", 158.44, 292, 40, 40]);
            return t;
        };
        __egretProto__.self_body_mask_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_mask_0 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width"], [423, -390.24, 0.56, 0.56, "red_mask_1_png", 158.44, 292]);
            return t;
        };
        __egretProto__.self_body_mask_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_mask_1 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, -190.24, 0.56, 0.56, "red_mask_1_png", 158.44, 292, 10, 10]);
            return t;
        };
        __egretProto__.self_body_mask_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_mask_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 9.759999999999991, 0.56, 0.56, "red_mask_1_png", 158.44, 292, 20, 20]);
            return t;
        };
        __egretProto__.self_body_mask_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_mask_3 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 209.76, 0.56, 0.56, "red_mask_1_png", 158.44, 292, 30, 30]);
            return t;
        };
        __egretProto__.self_body_mask_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_body_mask_4 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width", "x", "y"], [423, 409.76, 0.56, 0.56, "red_mask_1_png", 158.44, 292, 40, 40]);
            return t;
        };
        __egretProto__.self_frame_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_frame_0 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-389.52, 0.56, 0.56, "color_big_frame_1_png", 157.8]);
            return t;
        };
        __egretProto__.self_frame_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_frame_1 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [-189.51999999999998, 0.56, 0.56, "color_big_frame_1_png", 157.8, 10, 10]);
            return t;
        };
        __egretProto__.self_frame_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_frame_2 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [10.480000000000018, 0.56, 0.56, "color_big_frame_1_png", 157.8, 20, 20]);
            return t;
        };
        __egretProto__.self_frame_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_frame_3 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [210.48000000000002, 0.56, 0.56, "color_big_frame_1_png", 157.8, 30, 30]);
            return t;
        };
        __egretProto__.self_frame_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.self_frame_4 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [410.48, 0.56, 0.56, "color_big_frame_1_png", 157.8, 40, 40]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [874, 0, "battle_bg_2_jpg", 0, 1136, 10, 10]);
            return t;
        };
        UIArenaMatchViewSkin._skinParts = ["enemy_frame_0", "enemy_body_0", "enemy_body_mask_0", "enemy_frame_1", "enemy_body_1", "enemy_body_mask_1", "enemy_frame_2", "enemy_body_2", "enemy_body_mask_2", "enemy_frame_3", "enemy_body_3", "enemy_body_mask_3", "enemy_frame_4", "enemy_body_4", "enemy_body_mask_4", "self_frame_0", "self_body_0", "self_body_mask_0", "self_frame_1", "self_body_1", "self_body_mask_1", "self_frame_2", "self_body_2", "self_body_mask_2", "self_frame_3", "self_body_3", "self_body_mask_3", "self_frame_4", "self_body_4", "self_body_mask_4", "label_match_title", "label_tick_num", "label_hint", "label_self_name", "label_enemy_name", "knight_anim_layer", "back_btn"];
        return UIArenaMatchViewSkin;
    })(egret.gui.Skin);
    skins.UIArenaMatchViewSkin = UIArenaMatchViewSkin;
    UIArenaMatchViewSkin.prototype.__class__ = "skins.UIArenaMatchViewSkin";
})(skins || (skins = {}));
