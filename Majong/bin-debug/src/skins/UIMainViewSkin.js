var skins;
(function (skins) {
    var UIMainViewSkin = (function (_super) {
        __extends(UIMainViewSkin, _super);
        function UIMainViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [620, 900]);
            this.elementsContent = [this.label_player_name_0_i(), this.label_player_money_0_i(), this.label_player_name_1_i(), this.label_player_money_1_i(), this.label_player_name_2_i(), this.label_player_money_2_i(), this.label_player_name_3_i(), this.label_player_money_3_i(), this.btn_chi_0_i(), this.btn_peng_0_i(), this.btn_gang_0_i(), this.btn_hu_0_i(), this.btn_guo_0_i(), this.btn_chi_1_i(), this.btn_peng_1_i(), this.btn_gang_1_i(), this.btn_hu_1_i(), this.btn_guo_1_i(), this.btn_chi_2_i(), this.btn_peng_2_i(), this.btn_gang_2_i(), this.btn_hu_2_i(), this.btn_guo_2_i(), this.btn_chi_3_i(), this.btn_peng_3_i(), this.btn_gang_3_i(), this.btn_hu_3_i(), this.btn_guo_3_i(), this.btn_restart_i(), this.label_restart_i()];
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
        __egretProto__.btn_chi_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_chi_1 = t;
            this.__s(t, ["source", "x", "y"], ["chi_png", 778, 282]);
            return t;
        };
        __egretProto__.btn_chi_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_chi_2 = t;
            this.__s(t, ["source", "x", "y"], ["chi_png", 778, 440]);
            return t;
        };
        __egretProto__.btn_chi_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_chi_3 = t;
            this.__s(t, ["source", "x", "y"], ["chi_png", 780, 582]);
            return t;
        };
        __egretProto__.btn_gang_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_gang_0 = t;
            this.__s(t, ["source", "x", "y"], ["gang_png", 818, 154]);
            return t;
        };
        __egretProto__.btn_gang_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_gang_1 = t;
            this.__s(t, ["source", "x", "y"], ["gang_png", 818, 282]);
            return t;
        };
        __egretProto__.btn_gang_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_gang_2 = t;
            this.__s(t, ["source", "x", "y"], ["gang_png", 818, 440]);
            return t;
        };
        __egretProto__.btn_gang_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_gang_3 = t;
            this.__s(t, ["source", "x", "y"], ["gang_png", 820, 582]);
            return t;
        };
        __egretProto__.btn_guo_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_guo_0 = t;
            this.__s(t, ["source", "x", "y"], ["gup_png", 858, 154]);
            return t;
        };
        __egretProto__.btn_guo_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_guo_1 = t;
            this.__s(t, ["source", "x", "y"], ["gup_png", 858, 282]);
            return t;
        };
        __egretProto__.btn_guo_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_guo_2 = t;
            this.__s(t, ["source", "x", "y"], ["gup_png", 858, 440]);
            return t;
        };
        __egretProto__.btn_guo_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_guo_3 = t;
            this.__s(t, ["source", "x", "y"], ["gup_png", 860, 582]);
            return t;
        };
        __egretProto__.btn_hu_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_hu_0 = t;
            this.__s(t, ["source", "x", "y"], ["hu_png", 857, 115]);
            return t;
        };
        __egretProto__.btn_hu_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_hu_1 = t;
            this.__s(t, ["source", "x", "y"], ["hu_png", 857, 243]);
            return t;
        };
        __egretProto__.btn_hu_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_hu_2 = t;
            this.__s(t, ["source", "x", "y"], ["hu_png", 857, 401]);
            return t;
        };
        __egretProto__.btn_hu_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_hu_3 = t;
            this.__s(t, ["source", "x", "y"], ["hu_png", 859, 543]);
            return t;
        };
        __egretProto__.btn_peng_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_peng_0 = t;
            this.__s(t, ["source", "x", "y"], ["peng_png", 817, 115]);
            return t;
        };
        __egretProto__.btn_peng_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_peng_1 = t;
            this.__s(t, ["source", "x", "y"], ["peng_png", 817, 243]);
            return t;
        };
        __egretProto__.btn_peng_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_peng_2 = t;
            this.__s(t, ["source", "x", "y"], ["peng_png", 817, 401]);
            return t;
        };
        __egretProto__.btn_peng_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_peng_3 = t;
            this.__s(t, ["source", "x", "y"], ["peng_png", 819, 543]);
            return t;
        };
        __egretProto__.btn_restart_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_restart = t;
            this.__s(t, ["source", "x", "y"], ["sq_btn_nor_png", 357, 7]);
            return t;
        };
        __egretProto__.label_player_money_0_i = function () {
            var t = new egret.gui.Label();
            this.label_player_money_0 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 13, 148]);
            return t;
        };
        __egretProto__.label_player_money_1_i = function () {
            var t = new egret.gui.Label();
            this.label_player_money_1 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 14, 286]);
            return t;
        };
        __egretProto__.label_player_money_2_i = function () {
            var t = new egret.gui.Label();
            this.label_player_money_2 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 14, 434]);
            return t;
        };
        __egretProto__.label_player_money_3_i = function () {
            var t = new egret.gui.Label();
            this.label_player_money_3 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 14, 582]);
            return t;
        };
        __egretProto__.label_player_name_0_i = function () {
            var t = new egret.gui.Label();
            this.label_player_name_0 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 13, 126]);
            return t;
        };
        __egretProto__.label_player_name_1_i = function () {
            var t = new egret.gui.Label();
            this.label_player_name_1 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 14, 264]);
            return t;
        };
        __egretProto__.label_player_name_2_i = function () {
            var t = new egret.gui.Label();
            this.label_player_name_2 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 14, 412]);
            return t;
        };
        __egretProto__.label_player_name_3_i = function () {
            var t = new egret.gui.Label();
            this.label_player_name_3 = t;
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [28, 20, "???", "center", 0x000000, 94, 14, 560]);
            return t;
        };
        __egretProto__.label_restart_i = function () {
            var t = new egret.gui.Label();
            this.label_restart = t;
            this.__s(t, ["height", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [87, "重新开始", "center", 0x000000, false, "middle", 88, 371, 20]);
            return t;
        };
        __egretProto__.btn_chi_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_chi_0 = t;
            this.__s(t, ["source", "x", "y"], ["chi_png", 778, 154]);
            return t;
        };
        UIMainViewSkin._skinParts = ["label_player_name_0", "label_player_money_0", "label_player_name_1", "label_player_money_1", "label_player_name_2", "label_player_money_2", "label_player_name_3", "label_player_money_3", "btn_chi_0", "btn_peng_0", "btn_gang_0", "btn_hu_0", "btn_guo_0", "btn_chi_1", "btn_peng_1", "btn_gang_1", "btn_hu_1", "btn_guo_1", "btn_chi_2", "btn_peng_2", "btn_gang_2", "btn_hu_2", "btn_guo_2", "btn_chi_3", "btn_peng_3", "btn_gang_3", "btn_hu_3", "btn_guo_3", "btn_restart", "label_restart"];
        return UIMainViewSkin;
    })(egret.gui.Skin);
    skins.UIMainViewSkin = UIMainViewSkin;
    UIMainViewSkin.prototype.__class__ = "skins.UIMainViewSkin";
})(skins || (skins = {}));
