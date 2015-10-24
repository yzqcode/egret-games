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
        var BtnShopGreenSkin = (function (_super) {
            __extends(BtnShopGreenSkin, _super);
            function BtnShopGreenSkin() {
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
                        new egret.gui.SetProperty("__5", "text", "使用特技")
                    ])
                ];
            }
            Object.defineProperty(BtnShopGreenSkin.prototype, "skinParts", {
                get: function () {
                    return BtnShopGreenSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnShopGreenSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__5 = t;
                this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "y"], [true, "Arial", 26, 1, 23, "使用特技", "center", 16777215, false, "middle", 118, 37]);
                return t;
            };
            BtnShopGreenSkin.prototype.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [29, "钻石", 29, 27, 3]);
                return t;
            };
            BtnShopGreenSkin.prototype.pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.pic = t;
                this.__s(t, ["source", "x", "y"], ["按钮绿", 0, 0]);
                return t;
            };
            BtnShopGreenSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["按钮灰", 0, 0]);
                return t;
            };
            BtnShopGreenSkin._skinParts = ["pic"];
            return BtnShopGreenSkin;
        })(egret.gui.Skin);
        base.BtnShopGreenSkin = BtnShopGreenSkin;
        BtnShopGreenSkin.prototype.__class__ = "skins.base.BtnShopGreenSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
