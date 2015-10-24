var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var DailyAwardSkin = (function (_super) {
        __extends(DailyAwardSkin, _super);
        function DailyAwardSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.close_area_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.get_btn_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.award_text_1_i(), this.award_text_2_i(), this.difficuty_number_i(), this.award_icon_1_i(), this.award_icon_2_i(), this.award_title_bg_i(), this.award_title_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(DailyAwardSkin.prototype, "skinParts", {
            get: function () {
                return DailyAwardSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        DailyAwardSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0, 10, 10]);
            return t;
        };
        DailyAwardSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [569, egret.Rectangle(84,20,79,217), "背弹底", 465, 88, 176]);
            return t;
        };
        DailyAwardSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [47, "daily_award_title_png", 170, 235, 204]);
            return t;
        };
        DailyAwardSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.5, 96, egret.Rectangle(15,14,18,20), "背弹框底", 398, 121, 511]);
            return t;
        };
        DailyAwardSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [0.5, 96, 0, egret.Rectangle(15,14,18,20), "背弹框底", 398, 352]);
            return t;
        };
        DailyAwardSkin.prototype.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled", "y"], ["Arial", 0, 25, "领取奖励", 16777215, false, 672]);
            return t;
        };
        DailyAwardSkin.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "textColor", "width", "x", "y"], ["Arial", 20, "今日奖励", 16762624, 169, 134, 479]);
            return t;
        };
        DailyAwardSkin.prototype.award_icon_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.award_icon_1 = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [29, "仙桃", 29, 147, 526]);
            return t;
        };
        DailyAwardSkin.prototype.award_icon_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.award_icon_2 = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [29, "钻石", 29, 147, 560]);
            return t;
        };
        DailyAwardSkin.prototype.award_text_1_i = function () {
            var t = new egret.gui.Label();
            this.award_text_1 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, 18, "x??????", 0xFFFFFF, "middle", 306, 177, 528]);
            return t;
        };
        DailyAwardSkin.prototype.award_text_2_i = function () {
            var t = new egret.gui.Label();
            this.award_text_2 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, 18, "x??????", 0xFFFFFF, "middle", 318, 177, 563]);
            return t;
        };
        DailyAwardSkin.prototype.award_title_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.award_title_bg = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [77, egret.Rectangle(84,20,79,217), "difficulties_bg_png", 358, 141, 358]);
            return t;
        };
        DailyAwardSkin.prototype.award_title_i = function () {
            var t = new egret.gui.Label();
            this.award_title = t;
            this.__s(t, ["fontFamily", "height", "right", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], ["Arial", 53, 158, 50, "斗战胜佛", "center", 16762624, 373, "middle", 321]);
            return t;
        };
        DailyAwardSkin.prototype.close_area_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_area = t;
            this.__s(t, ["height", "source", "x", "y"], [44, "叉", 483, 205]);
            return t;
        };
        DailyAwardSkin.prototype.difficuty_number_i = function () {
            var t = new egret.gui.Label();
            this.difficuty_number = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], ["Arial", 33, 0.5, 25, "您已经闯到八十一难", "center", 0xFFFFFF, "middle", 399, 276]);
            return t;
        };
        DailyAwardSkin.prototype.get_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.get_btn = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [52, "fight_btn_orange_png", 122, 259, 662]);
            return t;
        };
        DailyAwardSkin.prototype.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "right", "size", "text", "textColor", "top", "width"], ["Arial", 337, 20, "称号", 0xFFC700, 322, 169]);
            return t;
        };
        DailyAwardSkin._skinParts = ["close_area", "get_btn", "award_text_1", "award_text_2", "difficuty_number", "award_icon_1", "award_icon_2", "award_title_bg", "award_title"];
        return DailyAwardSkin;
    })(egret.gui.Skin);
    skins.DailyAwardSkin = DailyAwardSkin;
    DailyAwardSkin.prototype.__class__ = "skins.DailyAwardSkin";
})(skins || (skins = {}));
