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
        var SkillDetailDescSkin = (function (_super) {
            __extends(SkillDetailDescSkin, _super);
            function SkillDetailDescSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [90, 560]);
                this.elementsContent = [this.iconSkillPic_i(), this.labelSkillName_i(), this.labelSkillDesc_i(), this.iconLockMask_i(), this.labelLockTitle_i(), this.labelLockHeader_i(), this.labelLockLevel_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(SkillDetailDescSkin.prototype, "skinParts", {
                get: function () {
                    return SkillDetailDescSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            SkillDetailDescSkin.prototype.iconSkillPic_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconSkillPic = t;
                this.__s(t, ["height", "left", "source", "verticalCenter", "width"], [87, 10, "天将1_技能1", -0.5, 87]);
                return t;
            };
            SkillDetailDescSkin.prototype.labelLockHeader_i = function () {
                var t = new egret.gui.Label();
                this.labelLockHeader = t;
                this.__s(t, ["fontFamily", "left", "size", "text", "textColor", "verticalCenter"], ["Arial", 23, 15, "等级", 0xFFFFFF, 12]);
                return t;
            };
            SkillDetailDescSkin.prototype.labelLockLevel_i = function () {
                var t = new egret.gui.Label();
                this.labelLockLevel = t;
                this.__s(t, ["fontFamily", "left", "size", "text", "textColor", "verticalCenter"], ["Arial", 60, 20, "??", 54527, 11.5]);
                return t;
            };
            SkillDetailDescSkin.prototype.labelLockTitle_i = function () {
                var t = new egret.gui.Label();
                this.labelLockTitle = t;
                this.__s(t, ["fontFamily", "left", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 10, 1, 24, "解锁", "center", 16777215, "middle", -19.5, 85]);
                return t;
            };
            SkillDetailDescSkin.prototype.labelSkillDesc_i = function () {
                var t = new egret.gui.Label();
                this.labelSkillDesc = t;
                this.__s(t, ["fontFamily", "height", "left", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 34, 108, 20, "???", 54527, "middle", 17, 440]);
                return t;
            };
            SkillDetailDescSkin.prototype.labelSkillName_i = function () {
                var t = new egret.gui.Label();
                this.labelSkillName = t;
                this.__s(t, ["fontFamily", "height", "left", "text", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 38, 108, "???", 16777215, "middle", -21, 448]);
                return t;
            };
            SkillDetailDescSkin.prototype.iconLockMask_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconLockMask = t;
                this.__s(t, ["alpha", "height", "left", "source", "verticalCenter", "width"], [0.7, 87, 9, "black_square", -0.5, 88]);
                return t;
            };
            SkillDetailDescSkin._skinParts = ["iconSkillPic", "labelSkillName", "labelSkillDesc", "iconLockMask", "labelLockTitle", "labelLockHeader", "labelLockLevel"];
            return SkillDetailDescSkin;
        })(egret.gui.Skin);
        base.SkillDetailDescSkin = SkillDetailDescSkin;
        SkillDetailDescSkin.prototype.__class__ = "skins.base.SkillDetailDescSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
