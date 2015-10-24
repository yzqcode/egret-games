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
        var BtnPlayerRebornReadSkin = (function (_super) {
            __extends(BtnPlayerRebornReadSkin, _super);
            function BtnPlayerRebornReadSkin() {
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
                        new egret.gui.SetProperty("__5", "text", "重生")
                    ])
                ];
            }
            Object.defineProperty(BtnPlayerRebornReadSkin.prototype, "skinParts", {
                get: function () {
                    return BtnPlayerRebornReadSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnPlayerRebornReadSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__5 = t;
                this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "y"], [true, "Arial", 22, 0, 20, "重生", "center", 16777215, false, "middle", 92, 34]);
                return t;
            };
            BtnPlayerRebornReadSkin.prototype.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scaleX", "scaleY", "source", "touchEnabled", "width", "x", "y"], [36, 0.5, 0.5, "元宝", false, 48, 24, 9]);
                return t;
            };
            BtnPlayerRebornReadSkin.prototype.pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.pic = t;
                this.__s(t, ["source", "x", "y"], ["按钮红", 0, 0]);
                return t;
            };
            BtnPlayerRebornReadSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["按钮灰", 0, 0]);
                return t;
            };
            BtnPlayerRebornReadSkin._skinParts = ["pic"];
            return BtnPlayerRebornReadSkin;
        })(egret.gui.Skin);
        base.BtnPlayerRebornReadSkin = BtnPlayerRebornReadSkin;
        BtnPlayerRebornReadSkin.prototype.__class__ = "skins.base.BtnPlayerRebornReadSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
