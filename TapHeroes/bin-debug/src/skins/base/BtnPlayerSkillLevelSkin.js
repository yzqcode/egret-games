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
        var BtnPlayerSkillLevelSkin = (function (_super) {
            __extends(BtnPlayerSkillLevelSkin, _super);
            function BtnPlayerSkillLevelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__5_i(), this.__6_i()];
                this.__4_i();
                this.pic_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("pic", "", "before", "__5")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("pic", "", "before", "__5")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__4", "", "before", "__5"),
                        new egret.gui.SetProperty("__6", "text", "升级")
                    ])
                ];
            }
            Object.defineProperty(BtnPlayerSkillLevelSkin.prototype, "skinParts", {
                get: function () {
                    return BtnPlayerSkillLevelSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnPlayerSkillLevelSkin.prototype.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__5 = t;
                this.__s(t, ["height", "scaleX", "scaleY", "source", "touchEnabled", "width", "x", "y"], [36, 0.5, 0.5, "元宝", false, 48, 24, 9]);
                return t;
            };
            BtnPlayerSkillLevelSkin.prototype.__6_i = function () {
                var t = new egret.gui.Label();
                this.__6 = t;
                this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled", "y"], [true, "Arial", 0, 18, "升级", 16777215, false, 35]);
                return t;
            };
            BtnPlayerSkillLevelSkin.prototype.pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.pic = t;
                this.__s(t, ["source", "x", "y"], ["按钮红", 0, 0]);
                return t;
            };
            BtnPlayerSkillLevelSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["按钮灰", 0, 0]);
                return t;
            };
            BtnPlayerSkillLevelSkin._skinParts = ["pic"];
            return BtnPlayerSkillLevelSkin;
        })(egret.gui.Skin);
        base.BtnPlayerSkillLevelSkin = BtnPlayerSkillLevelSkin;
        BtnPlayerSkillLevelSkin.prototype.__class__ = "skins.base.BtnPlayerSkillLevelSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
