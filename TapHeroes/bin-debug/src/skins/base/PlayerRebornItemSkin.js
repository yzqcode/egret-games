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
        var PlayerRebornItemSkin = (function (_super) {
            __extends(PlayerRebornItemSkin, _super);
            function PlayerRebornItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.labelSkillInfo_i(), this.iconSkillIcon_i(), this.iconLockMask_i(), this.labelSkillName_i(), this.btnLevelUp_i(), this.labelLevelUnlockDes_i(), this.rectDetailArea_i(), this.labelLevelUpMoney_i(), this.iconNew_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(PlayerRebornItemSkin.prototype, "skinParts", {
                get: function () {
                    return PlayerRebornItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            PlayerRebornItemSkin.prototype.btnLevelUp_i = function () {
                var t = new egret.gui.Button();
                this.btnLevelUp = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.base.BtnPlayerRebornReadSkin, 444, 16]);
                return t;
            };
            PlayerRebornItemSkin.prototype.iconLockMask_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconLockMask = t;
                this.__s(t, ["alpha", "height", "left", "source", "top", "width"], [0.7, 90, 19, "圆形遮挡", 12, 90]);
                return t;
            };
            PlayerRebornItemSkin.prototype.iconNew_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconNew = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [48, "新", false, 56, 422, 10]);
                return t;
            };
            PlayerRebornItemSkin.prototype.iconSkillIcon_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkillIcon = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [87, "猴子技能7", 87, 20, 12]);
                return t;
            };
            PlayerRebornItemSkin.prototype.labelLevelUnlockDes_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUnlockDes = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 20, 1, 15, "600级解锁", "center", 16777215, false, "bottom", 117, 471, 69]);
                return t;
            };
            PlayerRebornItemSkin.prototype.labelLevelUpMoney_i = function () {
                var t = new egret.gui.Label();
                this.labelLevelUpMoney = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 22, 1, 18, "999.00YY", "center", 0xFFFFFF, false, 96, 485, 26]);
                return t;
            };
            PlayerRebornItemSkin.prototype.labelSkillInfo_i = function () {
                var t = new egret.gui.Label();
                this.labelSkillInfo = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 2, 15, "sdfsdfffffffsfsdfsdfsdfasdfsfsafsfsdafsfsdfsdfsdfdfssdfdsfsdfsdds", 16776958, "middle", 321, 112, 54]);
                return t;
            };
            PlayerRebornItemSkin.prototype.labelSkillName_i = function () {
                var t = new egret.gui.Label();
                this.labelSkillName = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "width", "x", "y"], ["Arial", 21, 1, 20, "技能1", 16777215, 327, 110, 25]);
                return t;
            };
            PlayerRebornItemSkin.prototype.rectDetailArea_i = function () {
                var t = new egret.gui.Rect();
                this.rectDetailArea = t;
                this.__s(t, ["bottom", "fillAlpha", "left", "top", "width"], [6, 0, 12, 10, 426]);
                return t;
            };
            PlayerRebornItemSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["拉栏框", 0, 0]);
                return t;
            };
            PlayerRebornItemSkin._skinParts = ["labelSkillInfo", "iconSkillIcon", "iconLockMask", "labelSkillName", "btnLevelUp", "labelLevelUnlockDes", "rectDetailArea", "labelLevelUpMoney", "iconNew"];
            return PlayerRebornItemSkin;
        })(egret.gui.Skin);
        base.PlayerRebornItemSkin = PlayerRebornItemSkin;
        PlayerRebornItemSkin.prototype.__class__ = "skins.base.PlayerRebornItemSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
