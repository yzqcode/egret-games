var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var DifficultiesInfoSkin = (function (_super) {
        __extends(DifficultiesInfoSkin, _super);
        function DifficultiesInfoSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.close_area_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.fight_btn_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.difficulty_number_text_i(), this.award_text_1_i(), this.award_text_2_i(), this.difficuty_name_text_i(), this.__14_i(), this.award_icon_1_i(), this.award_icon_2_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(DifficultiesInfoSkin.prototype, "skinParts", {
            get: function () {
                return DifficultiesInfoSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        DifficultiesInfoSkin.prototype.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "top", "touchEnabled"], ["Arial", 0, 40, "挑战", 0, 492, false]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__12_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "left", "size", "text", "textAlign", "textColor", "top", "width"], ["Arial", 96, 20, "每日奖励", "center", 16762624, 338, 169]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "right", "size", "text", "textAlign", "textColor", "top", "width"], ["Arial", 97, 20, "当前关卡", "center", 0xFFC700, 339, 169]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__14_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "left", "right", "size", "text", "textColor", "top"], ["Arial", 74, 41, 38, 20, "在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方在那遥远的地方", 16777215, 235]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0, 10, 10]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top", "y"], [118, 11, 10, egret.Rectangle(84,20,79,217), "difficulties_bg_png", 116, 10]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "top", "width"], [83, 0.5, "difficulties_title_png", 142, 255]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "height", "horizontalCenter", "source", "width"], [124, 504, 0.5, "difficulties_light_png", 603]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "height", "horizontalCenter", "source", "width"], [125, 400, 0.5, "loading1", 603]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "left", "right", "scale9Grid", "source", "top"], [0.5, 89, 30, 30, egret.Rectangle(15,14,18,20), "背弹框底", 228]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "left", "scale9Grid", "source", "top", "width"], [0.5, 96, 80, egret.Rectangle(15,14,18,20), "背弹框底", 332, 200]);
            return t;
        };
        DifficultiesInfoSkin.prototype.award_icon_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.award_icon_1 = t;
            this.__s(t, ["height", "left", "source", "top", "width"], [29, 134, "仙桃", 364, 29]);
            return t;
        };
        DifficultiesInfoSkin.prototype.award_icon_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.award_icon_2 = t;
            this.__s(t, ["height", "left", "source", "top", "width"], [29, 134, "钻石", 394, 29]);
            return t;
        };
        DifficultiesInfoSkin.prototype.award_text_1_i = function () {
            var t = new egret.gui.Label();
            this.award_text_1 = t;
            this.__s(t, ["fontFamily", "height", "left", "size", "text", "textColor", "top", "verticalAlign", "width"], ["Arial", 24, 164, 18, "x??????", 0xFFFFFF, 366, "middle", 102]);
            return t;
        };
        DifficultiesInfoSkin.prototype.award_text_2_i = function () {
            var t = new egret.gui.Label();
            this.award_text_2 = t;
            this.__s(t, ["fontFamily", "height", "left", "size", "text", "textColor", "top", "verticalAlign", "width"], ["Arial", 24, 164, 18, "x??????", 0xFFFFFF, 397, "middle", 102]);
            return t;
        };
        DifficultiesInfoSkin.prototype.close_area_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_area = t;
            this.__s(t, ["height", "right", "source", "top"], [44, 38, "叉", 142]);
            return t;
        };
        DifficultiesInfoSkin.prototype.difficulty_number_text_i = function () {
            var t = new egret.gui.Label();
            this.difficulty_number_text = t;
            this.__s(t, ["fontFamily", "height", "right", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], ["Arial", 33, 97, 25, "第七难", "center", 16777215, 364, "middle", 169]);
            return t;
        };
        DifficultiesInfoSkin.prototype.difficuty_name_text_i = function () {
            var t = new egret.gui.Label();
            this.difficuty_name_text = t;
            this.__s(t, ["fontFamily", "height", "right", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], ["Arial", 33, 97, 25, "双叉林上", "center", 0xFFFFFF, 392, "middle", 169]);
            return t;
        };
        DifficultiesInfoSkin.prototype.fight_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.fight_btn = t;
            this.__s(t, ["height", "horizontalCenter", "source", "top", "width"], [102, 0, "fight_btn_big_png", 461, 122]);
            return t;
        };
        DifficultiesInfoSkin.prototype.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "right", "scale9Grid", "source", "top", "width"], [0.5, 96, 80, egret.Rectangle(15,14,18,20), "背弹框底", 332, 200]);
            return t;
        };
        DifficultiesInfoSkin._skinParts = ["close_area", "fight_btn", "difficulty_number_text", "award_text_1", "award_text_2", "difficuty_name_text", "award_icon_1", "award_icon_2"];
        return DifficultiesInfoSkin;
    })(egret.gui.Skin);
    skins.DifficultiesInfoSkin = DifficultiesInfoSkin;
    DifficultiesInfoSkin.prototype.__class__ = "skins.DifficultiesInfoSkin";
})(skins || (skins = {}));
