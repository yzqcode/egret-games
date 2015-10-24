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
        var BtnHeroUnlockSkillSkin = (function (_super) {
            __extends(BtnHeroUnlockSkillSkin, _super);
            function BtnHeroUnlockSkillSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__5_i()];
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
                        new egret.gui.SetProperty("__5", "text", "解锁技能")
                    ])
                ];
            }
            Object.defineProperty(BtnHeroUnlockSkillSkin.prototype, "skinParts", {
                get: function () {
                    return BtnHeroUnlockSkillSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnHeroUnlockSkillSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__5 = t;
                this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled", "y"], [true, "Arial", 0, 18, "解锁技能", 0, false, 35]);
                return t;
            };
            BtnHeroUnlockSkillSkin.prototype.pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.pic = t;
                this.__s(t, ["source", "x", "y"], ["按钮黄", 0, 0]);
                return t;
            };
            BtnHeroUnlockSkillSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["按钮灰", 0, 0]);
                return t;
            };
            BtnHeroUnlockSkillSkin._skinParts = ["pic"];
            return BtnHeroUnlockSkillSkin;
        })(egret.gui.Skin);
        base.BtnHeroUnlockSkillSkin = BtnHeroUnlockSkillSkin;
        BtnHeroUnlockSkillSkin.prototype.__class__ = "skins.base.BtnHeroUnlockSkillSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
