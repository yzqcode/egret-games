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
        var PlayerItemSkin = (function (_super) {
            __extends(PlayerItemSkin, _super);
            function PlayerItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.iconHeroIcon_i(), this.labelHeroName_i(), this.__4_i(), this.labelHeroLevel_i(), this.__5_i(), this.labelDamageValue_i(), this.rectDetailArea_i(), this.picPlus100_i(), this.picPlus10_i(), this.btnLevelUp_i(), this.labelLevelUpMoney_i(), this.labelLevelUpDes_i(), this.labelLevelUpMoney3_i(), this.labelLevelUpMoney2_i(), this.iconPlus10_i(), this.iconPlus100_i(), this.labelPlus10_i(), this.labelPlus100_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(PlayerItemSkin.prototype, "skinParts", {
                get: function () {
                    return PlayerItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            PlayerItemSkin.prototype.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "width", "x", "y"], ["Arial", 1, 18, "等级:", 16777215, 49, 110, 50]);
                return t;
            };
            PlayerItemSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "width", "x", "y"], ["Arial", 18, "点击伤害:", 16777215, 95, 109, 73]);
                return t;
            };
            PlayerItemSkin.prototype.btnLevelUp_i = function () {
                var t = new egret.gui.Button();
                this.btnLevelUp = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.base.BtnPlayerSkillLevelSkin, 444, 16]);
                return t;
            };
            PlayerItemSkin.prototype.iconHeroIcon_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconHeroIcon = t;
                this.__s(t, ["source", "x", "y"], ["猴子", 20, 12]);
                return t;
            };
            PlayerItemSkin.prototype.iconPlus100_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconPlus100 = t;
                this.__s(t, ["source", "visible", "x", "y"], ["元宝小", false, 199, 25]);
                return t;
            };
            PlayerItemSkin.prototype.iconPlus10_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconPlus10 = t;
                this.__s(t, ["source", "visible", "x", "y"], ["元宝小", false, 323, 25]);
                return t;
            };
            PlayerItemSkin.prototype.labelDamageValue_i = function () {
                var t = new egret.gui.Label();
                this.labelDamageValue = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "width", "x", "y"], ["Arial", 1, 18, "999WWY", 16746496, 102, 200, 73]);
                return t;
            };
            PlayerItemSkin.prototype.labelHeroLevel_i = function () {
                var t = new egret.gui.Label();
                this.labelHeroLevel = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "width", "x", "y"], ["Arial", 1, 18, "??", 5173231, 78, 160, 50]);
                return t;
            };
            PlayerItemSkin.prototype.labelHeroName_i = function () {
                var t = new egret.gui.Label();
                this.labelHeroName = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "width", "x", "y"], ["Arial", 23, 1, 20, "齐天大圣", 16777215, 327, 109, 23]);
                return t;
            };
            PlayerItemSkin.prototype.labelLevelUpDes_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpDes = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 16, 1, 15, "???", "center", 16777215, false, 118, 466, 72]);
                return t;
            };
            PlayerItemSkin.prototype.labelLevelUpMoney2_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpMoney2 = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 22, 1, 18, "1999.88万", "center", 0xFFFFFF, false, false, 96, 345, 24]);
                return t;
            };
            PlayerItemSkin.prototype.labelLevelUpMoney3_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpMoney3 = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 22, 1, 18, "1999.88万", "center", 0xFFFFFF, false, false, 96, 217, 24]);
                return t;
            };
            PlayerItemSkin.prototype.labelLevelUpMoney_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpMoney = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 22, 1, 18, "999.00YY", "center", 16777215, false, 96, 485, 26]);
                return t;
            };
            PlayerItemSkin.prototype.labelPlus100_i = function () {
                var t = new egret.gui.Label();
                this.labelPlus100 = t;
                this.__s(t, ["bold", "fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], [true, "Arial", 38, 1, 38, "+100", "center", 0xFFFFFF, false, false, 96, 211, 44]);
                return t;
            };
            PlayerItemSkin.prototype.labelPlus10_i = function () {
                var t = new egret.gui.Label();
                this.labelPlus10 = t;
                this.__s(t, ["bold", "fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], [true, "Arial", 38, 1, 38, "+10", "center", 0xFFFFFF, false, false, 96, 338, 44]);
                return t;
            };
            PlayerItemSkin.prototype.picPlus100_i = function () {
                var t = new egret.gui.UIAsset();
                this.picPlus100 = t;
                this.__s(t, ["source", "visible", "x", "y"], ["连续升级按钮红", false, 188, 16]);
                return t;
            };
            PlayerItemSkin.prototype.picPlus10_i = function () {
                var t = new egret.gui.UIAsset();
                this.picPlus10 = t;
                this.__s(t, ["source", "visible", "x", "y"], ["连续升级按钮红", false, 315, 18]);
                return t;
            };
            PlayerItemSkin.prototype.rectDetailArea_i = function () {
                var t = new egret.gui.Rect();
                this.rectDetailArea = t;
                this.__s(t, ["bottom", "fillAlpha", "left", "top", "width"], [6, 0, 12, 10, 426]);
                return t;
            };
            PlayerItemSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["拉栏框", 0, 0]);
                return t;
            };
            PlayerItemSkin._skinParts = ["iconHeroIcon", "labelHeroName", "labelHeroLevel", "labelDamageValue", "rectDetailArea", "picPlus100", "picPlus10", "btnLevelUp", "labelLevelUpMoney", "labelLevelUpDes", "labelLevelUpMoney3", "labelLevelUpMoney2", "iconPlus10", "iconPlus100", "labelPlus10", "labelPlus100"];
            return PlayerItemSkin;
        })(egret.gui.Skin);
        base.PlayerItemSkin = PlayerItemSkin;
        PlayerItemSkin.prototype.__class__ = "skins.base.PlayerItemSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
