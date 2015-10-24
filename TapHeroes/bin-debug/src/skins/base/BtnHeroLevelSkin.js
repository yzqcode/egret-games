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
        var BtnHeroLevelSkin = (function (_super) {
            __extends(BtnHeroLevelSkin, _super);
            function BtnHeroLevelSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.text_i()];
                this.pic_disabled_i();
                this.pic_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("pic", "", "before", "text")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("pic", "", "before", "text")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("pic_disabled", "", "before", "text"),
                        new egret.gui.SetProperty("text", "text", "升级")
                    ])
                ];
            }
            Object.defineProperty(BtnHeroLevelSkin.prototype, "skinParts", {
                get: function () {
                    return BtnHeroLevelSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnHeroLevelSkin.prototype.pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.pic = t;
                this.__s(t, ["source", "x", "y"], ["按钮蓝", 0, 0]);
                return t;
            };
            BtnHeroLevelSkin.prototype.pic_disabled_i = function () {
                var t = new egret.gui.UIAsset();
                this.pic_disabled = t;
                this.__s(t, ["source", "x", "y"], ["按钮灰", 0, 0]);
                return t;
            };
            BtnHeroLevelSkin.prototype.text_i = function () {
                var t = new egret.gui.Label();
                this.text = t;
                this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled", "y"], [true, "Arial", 0, 18, "升级", 16777215, false, 35]);
                return t;
            };
            BtnHeroLevelSkin._skinParts = ["pic_disabled", "pic", "text"];
            return BtnHeroLevelSkin;
        })(egret.gui.Skin);
        base.BtnHeroLevelSkin = BtnHeroLevelSkin;
        BtnHeroLevelSkin.prototype.__class__ = "skins.base.BtnHeroLevelSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
