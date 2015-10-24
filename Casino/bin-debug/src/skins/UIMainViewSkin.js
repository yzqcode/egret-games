var skins;
(function (skins) {
    var UIMainViewSkin = (function (_super) {
        __extends(UIMainViewSkin, _super);
        function UIMainViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [800, 480]);
            this.elementsContent = [this.__3_i(), this.btn_1_i(), this.btn_2_i(), this.btn_3_i(), this.btn_4_i(), this.btn_5_i(), this.btn_6_i(), this.btn_7_i(), this.btn_8_i(), this.left_arrow_btn_i(), this.right_arrow_btn_i(), this.bet_small_btn_i(), this.bet_big_btn_i(), this.start_btn_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.bet_coin_1_i(), this.bet_coin_6_i(), this.bet_coin_5_i(), this.bet_coin_8_i(), this.bet_coin_7_i(), this.bet_coin_4_i(), this.bet_coin_2_i(), this.bet_coin_3_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.__24_i(), this.__25_i(), this.__26_i(), this.__27_i(), this.__28_i(), this.__29_i(), this.__30_i(), this.__31_i(), this.__32_i(), this.__33_i(), this.light_1_i(), this.light_24_i(), this.light_23_i(), this.light_22_i(), this.light_21_i(), this.light_20_i(), this.light_8_i(), this.light_9_i(), this.light_10_i(), this.light_11_i(), this.light_12_i(), this.light_2_i(), this.light_3_i(), this.light_4_i(), this.light_5_i(), this.light_6_i(), this.light_7_i(), this.light_19_i(), this.light_18_i(), this.light_17_i(), this.light_16_i(), this.light_15_i(), this.light_14_i(), this.light_13_i(), this.label_bet_number_i(), this.__34_i(), this.label_win_coin_i(), this.__35_i(), this.label_current_coins_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIMainViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIMainViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["8_b_png", 30, 205]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["big_award_png", 30, 265]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["3_b_png", 30, 325]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["3_s_png", 30, 385]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["4_b_png", 390, 145]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["4_s_png", 390, 205]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["small_award_png", 390, 265]);
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["8_b_png", 390, 325]);
            return t;
        };
        __egretProto__.__19_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["7_s_png", 390, 385]);
            return t;
        };
        __egretProto__.__20_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["6_b_png", 30, 445]);
            return t;
        };
        __egretProto__.__21_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["5_b_png", 90, 85]);
            return t;
        };
        __egretProto__.__22_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["1_s_png", 150, 85]);
            return t;
        };
        __egretProto__.__23_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["8_b_png", 270, 85]);
            return t;
        };
        __egretProto__.__24_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["8_s_png", 330, 85]);
            return t;
        };
        __egretProto__.__25_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["6_b_png", 390, 85]);
            return t;
        };
        __egretProto__.__26_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["1_b_png", 210, 85]);
            return t;
        };
        __egretProto__.__27_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["6_s_png", 90, 445]);
            return t;
        };
        __egretProto__.__28_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["8_b_png", 149, 445]);
            return t;
        };
        __egretProto__.__29_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["2_s_png", 270, 445]);
            return t;
        };
        __egretProto__.__30_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["5_b_png", 330, 445]);
            return t;
        };
        __egretProto__.__31_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["7_b_png", 390, 444]);
            return t;
        };
        __egretProto__.__32_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["2_b_png", 210, 445]);
            return t;
        };
        __egretProto__.__33_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.7, 103, egret.Rectangle(15,13,19,21), "number_bg_png", 109, 185, 245]);
            return t;
        };
        __egretProto__.__34_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.7, 35, egret.Rectangle(15,13,19,21), "number_bg_png", 128, 78, 23]);
            return t;
        };
        __egretProto__.__35_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.7, 35, egret.Rectangle(15,13,19,21), "number_bg_png", 128, 281, 23]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["main_bg_jpg", 0, 0]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 53, 25, "开始", "center", 0xE9E5E5, false, "middle", 56, 398, 581]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 24, 15, "1-7", "center", 0xB31D1D, false, "middle", 46, 246, 581]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 35, 20, "小", "center", 0xB31D1D, false, "middle", 49, 245, 595]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 35, 20, "大", "center", 0xB31D1D, false, "middle", 49, 312, 595]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 24, 15, "8-14", "center", 0xB31D1D, false, "middle", 46, 313, 581]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["7_b_png", 30, 85]);
            return t;
        };
        __egretProto__.bet_big_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.bet_big_btn = t;
            this.__s(t, ["source", "x", "y"], ["bet_btn_png", 307, 579]);
            return t;
        };
        __egretProto__.bet_coin_1_i = function () {
            var t = new egret.gui.Label();
            this.bet_coin_1 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 25, 15, "00", "center", false, "middle", 33, 27, 681]);
            return t;
        };
        __egretProto__.bet_coin_2_i = function () {
            var t = new egret.gui.Label();
            this.bet_coin_2 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 25, 15, "00", "center", false, "middle", 33, 78, 680]);
            return t;
        };
        __egretProto__.bet_coin_3_i = function () {
            var t = new egret.gui.Label();
            this.bet_coin_3 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 25, 15, "00", "center", false, "middle", 33, 128, 680]);
            return t;
        };
        __egretProto__.bet_coin_4_i = function () {
            var t = new egret.gui.Label();
            this.bet_coin_4 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 25, 15, "00", "center", false, "middle", 33, 178, 680]);
            return t;
        };
        __egretProto__.bet_coin_5_i = function () {
            var t = new egret.gui.Label();
            this.bet_coin_5 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 25, 15, "00", "center", false, "middle", 33, 264, 681]);
            return t;
        };
        __egretProto__.bet_coin_6_i = function () {
            var t = new egret.gui.Label();
            this.bet_coin_6 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 25, 15, "00", "center", false, "middle", 33, 313, 680]);
            return t;
        };
        __egretProto__.bet_coin_7_i = function () {
            var t = new egret.gui.Label();
            this.bet_coin_7 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 25, 15, "00", "center", false, "middle", 33, 363, 680]);
            return t;
        };
        __egretProto__.bet_coin_8_i = function () {
            var t = new egret.gui.Label();
            this.bet_coin_8 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 25, 15, "00", "center", false, "middle", 33, 413, 681]);
            return t;
        };
        __egretProto__.bet_small_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.bet_small_btn = t;
            this.__s(t, ["source", "x", "y"], ["bet_btn_png", 240, 579]);
            return t;
        };
        __egretProto__.btn_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_1 = t;
            this.__s(t, ["source", "x", "y"], ["btn_1_png", 25, 677]);
            return t;
        };
        __egretProto__.btn_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_2 = t;
            this.__s(t, ["source", "x", "y"], ["btn_2_png", 75, 677]);
            return t;
        };
        __egretProto__.btn_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_3 = t;
            this.__s(t, ["source", "x", "y"], ["btn_3_png", 125, 677]);
            return t;
        };
        __egretProto__.btn_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_4 = t;
            this.__s(t, ["source", "x", "y"], ["btn_4_png", 175, 677]);
            return t;
        };
        __egretProto__.btn_5_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_5 = t;
            this.__s(t, ["source", "x", "y"], ["btn_5_png", 260, 677]);
            return t;
        };
        __egretProto__.btn_6_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_6 = t;
            this.__s(t, ["source", "x", "y"], ["btn_6_png", 310, 677]);
            return t;
        };
        __egretProto__.btn_7_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_7 = t;
            this.__s(t, ["source", "x", "y"], ["btn_7_png", 360, 677]);
            return t;
        };
        __egretProto__.btn_8_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_8 = t;
            this.__s(t, ["source", "x", "y"], ["btn_8_png", 410, 677]);
            return t;
        };
        __egretProto__.label_bet_number_i = function () {
            var t = new egret.gui.Label();
            this.label_bet_number = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 83, 50, "00", "center", 0xFF0000, false, "middle", 101, 190, 255]);
            return t;
        };
        __egretProto__.label_current_coins_i = function () {
            var t = new egret.gui.Label();
            this.label_current_coins = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 31, 20, "0", "center", 0xFF0000, false, "middle", 103, 295, 26]);
            return t;
        };
        __egretProto__.label_win_coin_i = function () {
            var t = new egret.gui.Label();
            this.label_win_coin = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 31, 20, "0", "center", 0xFF0000, false, "middle", 103, 90, 25]);
            return t;
        };
        __egretProto__.left_arrow_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_arrow_btn = t;
            this.__s(t, ["source", "x", "y"], ["left_png", 12, 578]);
            return t;
        };
        __egretProto__.light_10_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_10 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 385, 260]);
            return t;
        };
        __egretProto__.light_11_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_11 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 385, 320]);
            return t;
        };
        __egretProto__.light_12_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_12 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 385, 380]);
            return t;
        };
        __egretProto__.light_13_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_13 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 385, 440]);
            return t;
        };
        __egretProto__.light_14_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_14 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 325, 440]);
            return t;
        };
        __egretProto__.light_15_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_15 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 265, 440]);
            return t;
        };
        __egretProto__.light_16_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_16 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 205, 440]);
            return t;
        };
        __egretProto__.light_17_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_17 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 145, 440]);
            return t;
        };
        __egretProto__.light_18_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_18 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 85, 440]);
            return t;
        };
        __egretProto__.light_19_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_19 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 25, 440]);
            return t;
        };
        __egretProto__.light_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_1 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 25, 80]);
            return t;
        };
        __egretProto__.light_20_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_20 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 25, 380]);
            return t;
        };
        __egretProto__.light_21_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_21 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 25, 320]);
            return t;
        };
        __egretProto__.light_22_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_22 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 25, 260]);
            return t;
        };
        __egretProto__.light_23_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_23 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 25, 200]);
            return t;
        };
        __egretProto__.light_24_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_24 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 25, 140]);
            return t;
        };
        __egretProto__.light_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_2 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 85, 80]);
            return t;
        };
        __egretProto__.light_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_3 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 145, 80]);
            return t;
        };
        __egretProto__.light_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_4 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 205, 80]);
            return t;
        };
        __egretProto__.light_5_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_5 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 265, 80]);
            return t;
        };
        __egretProto__.light_6_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_6 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 325, 80]);
            return t;
        };
        __egretProto__.light_7_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_7 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 385, 80]);
            return t;
        };
        __egretProto__.light_8_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_8 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 385, 140]);
            return t;
        };
        __egretProto__.light_9_i = function () {
            var t = new egret.gui.UIAsset();
            this.light_9 = t;
            this.__s(t, ["source", "x", "y"], ["mask_png", 385, 200]);
            return t;
        };
        __egretProto__.right_arrow_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_arrow_btn = t;
            this.__s(t, ["source", "x", "y"], ["right_png", 123, 579]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["5_s_png", 30, 145]);
            return t;
        };
        __egretProto__.start_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.start_btn = t;
            this.__s(t, ["source", "x", "y"], ["start_btn_png", 392, 573]);
            return t;
        };
        UIMainViewSkin._skinParts = ["btn_1", "btn_2", "btn_3", "btn_4", "btn_5", "btn_6", "btn_7", "btn_8", "left_arrow_btn", "right_arrow_btn", "bet_small_btn", "bet_big_btn", "start_btn", "bet_coin_1", "bet_coin_6", "bet_coin_5", "bet_coin_8", "bet_coin_7", "bet_coin_4", "bet_coin_2", "bet_coin_3", "light_1", "light_24", "light_23", "light_22", "light_21", "light_20", "light_8", "light_9", "light_10", "light_11", "light_12", "light_2", "light_3", "light_4", "light_5", "light_6", "light_7", "light_19", "light_18", "light_17", "light_16", "light_15", "light_14", "light_13", "label_bet_number", "label_win_coin", "label_current_coins"];
        return UIMainViewSkin;
    })(egret.gui.Skin);
    skins.UIMainViewSkin = UIMainViewSkin;
    UIMainViewSkin.prototype.__class__ = "skins.UIMainViewSkin";
})(skins || (skins = {}));
