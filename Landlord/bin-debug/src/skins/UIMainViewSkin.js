var skins;
(function (skins) {
    var UIMainViewSkin = (function (_super) {
        __extends(UIMainViewSkin, _super);
        function UIMainViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [599, 780]);
            this.elementsContent = [this.label_player_name_1_i(), this.label_player_money_1_i(), this.label_player_name_2_i(), this.label_player_money_2_i(), this.label_player_name_3_i(), this.label_player_money_3_i(), this.last_card_1_i(), this.last_card_2_i(), this.btn_call_one_0_i(), this.last_card_3_i(), this.btn_call_two_0_i(), this.btn_call_three_0_i(), this.btn_no_call_0_i(), this.btn_call_one_1_i(), this.btn_call_two_1_i(), this.btn_call_three_1_i(), this.btn_no_call_1_i(), this.btn_call_one_2_i(), this.btn_call_two_2_i(), this.btn_call_three_2_i(), this.btn_no_call_2_i(), this.landlord_0_i(), this.landlord_1_i(), this.landlord_2_i(), this.btn_pass_0_i(), this.btn_help_0_i(), this.btn_play_0_i(), this.btn_pass_1_i(), this.btn_help_1_i(), this.btn_play_1_i(), this.btn_pass_2_i(), this.btn_help_2_i(), this.btn_play_2_i(), this.btn_restart_i()];
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
        __egretProto__.btn_call_one_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_one_1 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall1Skin, 206, 257]);
            return t;
        };
        __egretProto__.btn_call_one_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_one_2 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall1Skin, 206, 425]);
            return t;
        };
        __egretProto__.btn_call_three_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_three_0 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall3Skin, 359, 105]);
            return t;
        };
        __egretProto__.btn_call_three_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_three_1 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall3Skin, 359, 257]);
            return t;
        };
        __egretProto__.btn_call_three_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_three_2 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall3Skin, 359, 425]);
            return t;
        };
        __egretProto__.btn_call_two_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_two_0 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall2Skin, 282, 105]);
            return t;
        };
        __egretProto__.btn_call_two_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_two_1 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall2Skin, 282, 257]);
            return t;
        };
        __egretProto__.btn_call_two_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_two_2 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall2Skin, 282, 425]);
            return t;
        };
        __egretProto__.btn_help_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_help_0 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnHelpSkin, 315, 105]);
            return t;
        };
        __egretProto__.btn_help_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_help_1 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnHelpSkin, 316, 256]);
            return t;
        };
        __egretProto__.btn_help_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_help_2 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnHelpSkin, 316, 424]);
            return t;
        };
        __egretProto__.btn_no_call_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_no_call_0 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall0Skin, 432, 105]);
            return t;
        };
        __egretProto__.btn_no_call_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_no_call_1 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall0Skin, 432, 257]);
            return t;
        };
        __egretProto__.btn_no_call_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_no_call_2 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall0Skin, 432, 425]);
            return t;
        };
        __egretProto__.btn_pass_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_pass_0 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnPassSkin, 230, 105]);
            return t;
        };
        __egretProto__.btn_pass_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_pass_1 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnPassSkin, 231, 256]);
            return t;
        };
        __egretProto__.btn_pass_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_pass_2 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnPassSkin, 231, 424]);
            return t;
        };
        __egretProto__.btn_play_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_play_0 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnPlyaySkin, 400, 105]);
            return t;
        };
        __egretProto__.btn_play_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_play_1 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnPlyaySkin, 401, 256]);
            return t;
        };
        __egretProto__.btn_play_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_play_2 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnPlyaySkin, 401, 424]);
            return t;
        };
        __egretProto__.btn_restart_i = function () {
            var t = new egret.gui.Button();
            this.btn_restart = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnHelpSkin, 331, 34]);
            return t;
        };
        __egretProto__.label_player_money_1_i = function () {
            var t = new egret.gui.Label();
            this.label_player_money_1 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 4, 203]);
            return t;
        };
        __egretProto__.label_player_money_2_i = function () {
            var t = new egret.gui.Label();
            this.label_player_money_2 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 4, 350]);
            return t;
        };
        __egretProto__.label_player_money_3_i = function () {
            var t = new egret.gui.Label();
            this.label_player_money_3 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 4, 514]);
            return t;
        };
        __egretProto__.label_player_name_1_i = function () {
            var t = new egret.gui.Label();
            this.label_player_name_1 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 4, 181]);
            return t;
        };
        __egretProto__.label_player_name_2_i = function () {
            var t = new egret.gui.Label();
            this.label_player_name_2 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 4, 328]);
            return t;
        };
        __egretProto__.label_player_name_3_i = function () {
            var t = new egret.gui.Label();
            this.label_player_name_3 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 4, 492]);
            return t;
        };
        __egretProto__.landlord_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.landlord_0 = t;
            this.__s(t, ["source", "x", "y"], ["landlord_png", 684, 173]);
            return t;
        };
        __egretProto__.landlord_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.landlord_1 = t;
            this.__s(t, ["source", "x", "y"], ["landlord_png", 684, 329]);
            return t;
        };
        __egretProto__.landlord_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.landlord_2 = t;
            this.__s(t, ["source", "x", "y"], ["landlord_png", 688, 496]);
            return t;
        };
        __egretProto__.last_card_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.last_card_1 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.7, 0.7, "card_back_1_png", 266, 11]);
            return t;
        };
        __egretProto__.last_card_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.last_card_2 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.7, 0.7, "card_back_1_png", 337, 11]);
            return t;
        };
        __egretProto__.last_card_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.last_card_3 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.7, 0.7, "card_back_1_png", 407, 11]);
            return t;
        };
        __egretProto__.btn_call_one_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_call_one_0 = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.BtnCall1Skin, 206, 105]);
            return t;
        };
        UIMainViewSkin._skinParts = ["label_player_name_1", "label_player_money_1", "label_player_name_2", "label_player_money_2", "label_player_name_3", "label_player_money_3", "last_card_1", "last_card_2", "btn_call_one_0", "last_card_3", "btn_call_two_0", "btn_call_three_0", "btn_no_call_0", "btn_call_one_1", "btn_call_two_1", "btn_call_three_1", "btn_no_call_1", "btn_call_one_2", "btn_call_two_2", "btn_call_three_2", "btn_no_call_2", "landlord_0", "landlord_1", "landlord_2", "btn_pass_0", "btn_help_0", "btn_play_0", "btn_pass_1", "btn_help_1", "btn_play_1", "btn_pass_2", "btn_help_2", "btn_play_2", "btn_restart"];
        return UIMainViewSkin;
    })(egret.gui.Skin);
    skins.UIMainViewSkin = UIMainViewSkin;
    UIMainViewSkin.prototype.__class__ = "skins.UIMainViewSkin";
})(skins || (skins = {}));
