var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var base;
    (function (base) {
        var AchieveItemSkin = (function (_super) {
            __extends(AchieveItemSkin, _super);
            function AchieveItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.achieveitem_icon_i(), this.achieveitem_title_i(), this.achieveitem_star2_i(), this.achieveitem_star1_i(), this.achieveitem_star3_i(), this.achieveitem_star4_i(), this.achieveitem_star5_i(), this.label_progress_i(), this.btn_receive_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(AchieveItemSkin.prototype, "skinParts", {
                get: function () {
                    return AchieveItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            AchieveItemSkin.prototype.achieveitem_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.achieveitem_icon = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [79, 20, "天将4_技能3", 18, 79]);
                return t;
            };
            AchieveItemSkin.prototype.achieveitem_star1_i = function () {
                var t = new egret.gui.UIAsset();
                this.achieveitem_star1 = t;
                this.__s(t, ["left", "source", "top"], [114, "黑底", 64]);
                return t;
            };
            AchieveItemSkin.prototype.achieveitem_star2_i = function () {
                var t = new egret.gui.UIAsset();
                this.achieveitem_star2 = t;
                this.__s(t, ["left", "source", "top"], [148, "黑底", 64]);
                return t;
            };
            AchieveItemSkin.prototype.achieveitem_star3_i = function () {
                var t = new egret.gui.UIAsset();
                this.achieveitem_star3 = t;
                this.__s(t, ["left", "source", "top"], [182, "黑底", 64]);
                return t;
            };
            AchieveItemSkin.prototype.achieveitem_star4_i = function () {
                var t = new egret.gui.UIAsset();
                this.achieveitem_star4 = t;
                this.__s(t, ["left", "source", "top"], [216, "黑底", 64]);
                return t;
            };
            AchieveItemSkin.prototype.achieveitem_star5_i = function () {
                var t = new egret.gui.UIAsset();
                this.achieveitem_star5 = t;
                this.__s(t, ["left", "source", "top"], [250, "黑底", 64]);
                return t;
            };
            AchieveItemSkin.prototype.achieveitem_title_i = function () {
                var t = new egret.gui.Label();
                this.achieveitem_title = t;
                this.__s(t, ["fontFamily", "left", "size", "text", "textColor", "top"], ["Arial", 114, 20, "杀掉10.00K妖怪", 16777215, 28]);
                return t;
            };
            AchieveItemSkin.prototype.btn_receive_i = function () {
                var t = new egret.gui.Button();
                this.btn_receive = t;
                this.__s(t, ["label", "right", "skinName", "top"], ["按钮", 23, skins.base.BtnAchieveSkin, 17]);
                return t;
            };
            AchieveItemSkin.prototype.label_progress_i = function () {
                var t = new egret.gui.Label();
                this.label_progress = t;
                this.__s(t, ["fontFamily", "left", "size", "text", "textAlign", "textColor", "top", "width"], ["Arial", 296, 20, "1/30k", "center", 16777215, 70, 150]);
                return t;
            };
            AchieveItemSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["拉栏框", 0, 0]);
                return t;
            };
            AchieveItemSkin._skinParts = ["achieveitem_icon", "achieveitem_title", "achieveitem_star2", "achieveitem_star1", "achieveitem_star3", "achieveitem_star4", "achieveitem_star5", "label_progress", "btn_receive"];
            return AchieveItemSkin;
        })(egret.gui.Skin);
        base.AchieveItemSkin = AchieveItemSkin;
        AchieveItemSkin.prototype.__class__ = "skins.base.AchieveItemSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
