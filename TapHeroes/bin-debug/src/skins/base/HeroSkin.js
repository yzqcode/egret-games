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
        var HeroSkin = (function (_super) {
            __extends(HeroSkin, _super);
            function HeroSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.iconHeroIcon_i(), this.iconSkill0_i(), this.iconSkill1_i(), this.iconSkill2_i(), this.iconSkill3_i(), this.iconSkill4_i(), this.iconSkill5_i(), this.iconSkill6_i(), this.labelHeroName_i(), this.__4_i(), this.labelHeroLevel_i(), this.__5_i(), this.labelDamageValue_i(), this.iconLockMask_i(), this.rectDetailArea_i(), this.iconNextSkillMask_i(), this.labelLockLevel_i(), this.picPlus100_i(), this.picPlus10_i(), this.btnLevelUp_i(), this.btnUnlockSkill_i(), this.btnSpecialUnlock_i(), this.iconButtonMoney_i(), this.labelLevelUpMoney_i(), this.labelLevelUpMoney3_i(), this.labelLevelUpMoney2_i(), this.iconPlus10_i(), this.iconPlus100_i(), this.labelPlus10_i(), this.labelPlus100_i(), this.labelLevelUpDes_i(), this.iconNew_i(), this.labelReviveTick_i(), this.labelReviveHead_i(), this.rectReviveMask_i(), this.btnRevive_i(), this.labelReviveDia_i(), this.iconDead_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(HeroSkin.prototype, "skinParts", {
                get: function () {
                    return HeroSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            HeroSkin.prototype.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 20, "等级:", 16777215, false, 49, 110, 41]);
                return t;
            };
            HeroSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 20, "每秒伤害:", 16777215, false, 95, 247, 41]);
                return t;
            };
            HeroSkin.prototype.btnLevelUp_i = function () {
                var t = new egret.gui.Button();
                this.btnLevelUp = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.base.BtnHeroLevelSkin, 444, 16]);
                return t;
            };
            HeroSkin.prototype.btnRevive_i = function () {
                var t = new egret.gui.Button();
                this.btnRevive = t;
                this.__s(t, ["label", "skinName", "visible", "x", "y"], ["按钮", skins.base.BtnHeroReviveSkin, false, 445, 17]);
                return t;
            };
            HeroSkin.prototype.btnSpecialUnlock_i = function () {
                var t = new egret.gui.Button();
                this.btnSpecialUnlock = t;
                this.__s(t, ["label", "skinName", "visible", "x", "y"], ["按钮", skins.base.BtnHeroSpecialUnlockSkin, false, 444, 16]);
                return t;
            };
            HeroSkin.prototype.btnUnlockSkill_i = function () {
                var t = new egret.gui.Button();
                this.btnUnlockSkill = t;
                this.__s(t, ["label", "skinName", "visible", "x", "y"], ["按钮", skins.base.BtnHeroUnlockSkillSkin, false, 444, 16]);
                return t;
            };
            HeroSkin.prototype.iconButtonMoney_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconButtonMoney = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [24, "元宝小", 24, 468, 25]);
                return t;
            };
            HeroSkin.prototype.iconDead_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDead = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [60, "xianglu", false, 59, 34, 27]);
                return t;
            };
            HeroSkin.prototype.iconHeroIcon_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconHeroIcon = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["天将1", false, 23, 15]);
                return t;
            };
            HeroSkin.prototype.iconLockMask_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconLockMask = t;
                this.__s(t, ["alpha", "height", "left", "source", "top", "touchEnabled", "visible", "width"], [0.7, 90, 19, "圆形遮挡", 12, false, false, 90]);
                return t;
            };
            HeroSkin.prototype.iconNew_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconNew = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [48, "新", false, 56, 422, 10]);
                return t;
            };
            HeroSkin.prototype.iconNextSkillMask_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconNextSkillMask = t;
                this.__s(t, ["alpha", "height", "source", "width", "x", "y"], [0.7, 25, "black_square", 25, 112, 70]);
                return t;
            };
            HeroSkin.prototype.iconPlus100_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconPlus100 = t;
                this.__s(t, ["source", "visible", "x", "y"], ["元宝小", false, 199, 27]);
                return t;
            };
            HeroSkin.prototype.iconPlus10_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconPlus10 = t;
                this.__s(t, ["source", "visible", "x", "y"], ["元宝小", false, 323, 27]);
                return t;
            };
            HeroSkin.prototype.iconSkill0_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkill0 = t;
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [25, "天将1_技能1", false, 25, 112, 70]);
                return t;
            };
            HeroSkin.prototype.iconSkill1_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkill1 = t;
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [25, "天将1_技能1", false, 25, 147, 70]);
                return t;
            };
            HeroSkin.prototype.iconSkill2_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkill2 = t;
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [25, "天将1_技能1", false, 25, 182, 70]);
                return t;
            };
            HeroSkin.prototype.iconSkill3_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkill3 = t;
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [25, "天将1_技能1", false, 25, 217, 70]);
                return t;
            };
            HeroSkin.prototype.iconSkill4_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkill4 = t;
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [25, "天将1_技能1", false, 25, 252, 70]);
                return t;
            };
            HeroSkin.prototype.iconSkill5_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkill5 = t;
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [25, "天将1_技能1", false, 25, 287, 70]);
                return t;
            };
            HeroSkin.prototype.iconSkill6_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkill6 = t;
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [25, "天将1_技能1", false, 25, 322, 70]);
                return t;
            };
            HeroSkin.prototype.labelDamageValue_i = function () {
                var t = new egret.gui.Label();
                this.labelDamageValue = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 20, "999WWY", 16746496, false, 102, 336, 41]);
                return t;
            };
            HeroSkin.prototype.labelHeroLevel_i = function () {
                var t = new egret.gui.Label();
                this.labelHeroLevel = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 20, "??", 5173231, false, 78, 160, 41]);
                return t;
            };
            HeroSkin.prototype.labelHeroName_i = function () {
                var t = new egret.gui.Label();
                this.labelHeroName = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 23, 1, 20, "二郎显圣真君", 16777215, false, 327, 110, 16]);
                return t;
            };
            HeroSkin.prototype.labelLevelUpDes_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpDes = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 15, 1, 15, "???", "center", 16777215, false, "bottom", 121, 465, 72]);
                return t;
            };
            HeroSkin.prototype.labelLevelUpMoney2_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpMoney2 = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 22, 1, 18, "1999.88万", "center", 0xFFFFFF, false, false, 96, 342, 26]);
                return t;
            };
            HeroSkin.prototype.labelLevelUpMoney3_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpMoney3 = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 22, 1, 18, "1999.88万", "center", 0xFFFFFF, false, false, 96, 217, 26]);
                return t;
            };
            HeroSkin.prototype.labelLevelUpMoney_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpMoney = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 22, 1, 18, "999.00YY", "center", 16777215, false, 96, 485, 26]);
                return t;
            };
            HeroSkin.prototype.labelLockLevel_i = function () {
                var t = new egret.gui.Label();
                this.labelLockLevel = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 14, 10, "??", "center", 5173231, "middle", 25, 112, 75]);
                return t;
            };
            HeroSkin.prototype.labelPlus100_i = function () {
                var t = new egret.gui.Label();
                this.labelPlus100 = t;
                this.__s(t, ["bold", "fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], [true, "Arial", 38, 1, 38, "+100", "center", 0xFFFFFF, false, false, 96, 211, 44]);
                return t;
            };
            HeroSkin.prototype.labelPlus10_i = function () {
                var t = new egret.gui.Label();
                this.labelPlus10 = t;
                this.__s(t, ["bold", "fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], [true, "Arial", 38, 1, 38, "+10", "center", 0xFFFFFF, false, false, 96, 338, 44]);
                return t;
            };
            HeroSkin.prototype.labelReviveDia_i = function () {
                var t = new egret.gui.Label();
                this.labelReviveDia = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "width", "x", "y"], ["Arial", 22, 1, 18, "???", "center", 0xFFFFFF, false, false, 96, 485, 26]);
                return t;
            };
            HeroSkin.prototype.labelReviveHead_i = function () {
                var t = new egret.gui.Label();
                this.labelReviveHead = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "verticalAlign", "visible", "width", "x", "y"], ["Arial", 1, 20, "复活倒计时:", 0xFFFFFF, false, "middle", false, 112, 109, 71]);
                return t;
            };
            HeroSkin.prototype.labelReviveTick_i = function () {
                var t = new egret.gui.Label();
                this.labelReviveTick = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "verticalAlign", "visible", "width", "x", "y"], ["Arial", 1, 20, "??:??:??", 0x4EEFEF, false, "middle", false, 89, 220, 71]);
                return t;
            };
            HeroSkin.prototype.picPlus100_i = function () {
                var t = new egret.gui.UIAsset();
                this.picPlus100 = t;
                this.__s(t, ["source", "visible", "x", "y"], ["连续升级按钮", false, 188, 18]);
                return t;
            };
            HeroSkin.prototype.picPlus10_i = function () {
                var t = new egret.gui.UIAsset();
                this.picPlus10 = t;
                this.__s(t, ["source", "visible", "x", "y"], ["连续升级按钮", false, 315, 18]);
                return t;
            };
            HeroSkin.prototype.rectDetailArea_i = function () {
                var t = new egret.gui.Rect();
                this.rectDetailArea = t;
                this.__s(t, ["bottom", "fillAlpha", "left", "top", "width"], [6, 0, 12, 10, 425]);
                return t;
            };
            HeroSkin.prototype.rectReviveMask_i = function () {
                var t = new egret.gui.Rect();
                this.rectReviveMask = t;
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top", "visible"], [6, 0.2, 0xff0000, 12, 13, 10, false]);
                return t;
            };
            HeroSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["拉栏框", false, 0, 0]);
                return t;
            };
            HeroSkin._skinParts = ["iconHeroIcon", "iconSkill0", "iconSkill1", "iconSkill2", "iconSkill3", "iconSkill4", "iconSkill5", "iconSkill6", "labelHeroName", "labelHeroLevel", "labelDamageValue", "iconLockMask", "rectDetailArea", "iconNextSkillMask", "labelLockLevel", "picPlus100", "picPlus10", "btnLevelUp", "btnUnlockSkill", "btnSpecialUnlock", "iconButtonMoney", "labelLevelUpMoney", "labelLevelUpMoney3", "labelLevelUpMoney2", "iconPlus10", "iconPlus100", "labelPlus10", "labelPlus100", "labelLevelUpDes", "iconNew", "labelReviveTick", "labelReviveHead", "rectReviveMask", "btnRevive", "labelReviveDia", "iconDead"];
            return HeroSkin;
        })(egret.gui.Skin);
        base.HeroSkin = HeroSkin;
        HeroSkin.prototype.__class__ = "skins.base.HeroSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
