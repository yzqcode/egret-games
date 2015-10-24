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
        var PlayerSkillSkin = (function (_super) {
            __extends(PlayerSkillSkin, _super);
            function PlayerSkillSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i(), this.labelLevelNum_i(), this.labelSkillInfo_i(), this.iconSkillIcon_i(), this.iconLockMask_i(), this.labelSkillName_i(), this.btnLevelUp_i(), this.labelLevelUpMoney_i(), this.labelLevelUpDes_i(), this.labelLevelUnlockDes_i(), this.rectDetailArea_i(), this.iconNew_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(PlayerSkillSkin.prototype, "skinParts", {
                get: function () {
                    return PlayerSkillSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            PlayerSkillSkin.prototype.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "width", "x", "y"], ["Arial", 1, 18, "等级:", 16777215, 56, 110, 50]);
                return t;
            };
            PlayerSkillSkin.prototype.btnLevelUp_i = function () {
                var t = new egret.gui.Button();
                this.btnLevelUp = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.base.BtnPlayerSkillLevelSkin, 444, 16]);
                return t;
            };
            PlayerSkillSkin.prototype.iconLockMask_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconLockMask = t;
                this.__s(t, ["alpha", "height", "source", "width", "x", "y"], [0.7, 90, "圆形遮挡", 90, 18, 12]);
                return t;
            };
            PlayerSkillSkin.prototype.iconNew_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconNew = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [48, "新", false, 56, 422, 10]);
                return t;
            };
            PlayerSkillSkin.prototype.iconSkillIcon_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkillIcon = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [87, "猴子技能1", 87, 20, 12]);
                return t;
            };
            PlayerSkillSkin.prototype.labelLevelNum_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelNum = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "width", "x", "y"], ["Arial", 1, 18, "??", 5173231, 69, 164, 50]);
                return t;
            };
            PlayerSkillSkin.prototype.labelLevelUnlockDes_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUnlockDes = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 20, 1, 15, "?级解锁", "center", 16777215, false, "bottom", 117, 471, 67]);
                return t;
            };
            PlayerSkillSkin.prototype.labelLevelUpDes_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpDes = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 16, 1, 15, "???", "center", 16777215, false, "bottom", 129, 463, 72]);
                return t;
            };
            PlayerSkillSkin.prototype.labelLevelUpMoney_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpMoney = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 22, 1, 18, "999.00YY", "center", 16777215, false, 96, 485, 26]);
                return t;
            };
            PlayerSkillSkin.prototype.labelSkillInfo_i = function () {
                var t = new egret.gui.Label();
                this.labelSkillInfo = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 1, 15, "sdfsdfffffffsfsdfsdfsdfasdfsfsafsfsdafsfsdfsdfsdfdfssdfdsfsdfsdds", 16776958, "middle", 321, 111, 69]);
                return t;
            };
            PlayerSkillSkin.prototype.labelSkillName_i = function () {
                var t = new egret.gui.Label();
                this.labelSkillName = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "width", "x", "y"], ["Arial", 21, 1, 20, "技能1", 16777215, 327, 110, 19]);
                return t;
            };
            PlayerSkillSkin.prototype.rectDetailArea_i = function () {
                var t = new egret.gui.Rect();
                this.rectDetailArea = t;
                this.__s(t, ["bottom", "fillAlpha", "left", "top", "width"], [6, 0, 12, 10, 426]);
                return t;
            };
            PlayerSkillSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["拉栏框", 0, 0]);
                return t;
            };
            PlayerSkillSkin._skinParts = ["labelLevelNum", "labelSkillInfo", "iconSkillIcon", "iconLockMask", "labelSkillName", "btnLevelUp", "labelLevelUpMoney", "labelLevelUpDes", "labelLevelUnlockDes", "rectDetailArea", "iconNew"];
            return PlayerSkillSkin;
        })(egret.gui.Skin);
        base.PlayerSkillSkin = PlayerSkillSkin;
        PlayerSkillSkin.prototype.__class__ = "skins.base.PlayerSkillSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
