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
        var BtnMainSkin = (function (_super) {
            __extends(BtnMainSkin, _super);
            function BtnMainSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [];
                this.down_pic_i();
                this.up_pic_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("down_pic", "", "last", "")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("up_pic", "", "last", ""),
                        new egret.gui.SetProperty("", "height", 79)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("down_pic", "", "last", "")
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.AddItems("up_pic", "", "last", ""),
                        new egret.gui.SetProperty("", "height", 79)
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.AddItems("up_pic", "", "last", ""),
                        new egret.gui.SetProperty("up_pic", "height", 63),
                        new egret.gui.SetProperty("", "height", 79)
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.AddItems("up_pic", "", "last", ""),
                        new egret.gui.SetProperty("", "height", 79)
                    ])
                ];
            }
            Object.defineProperty(BtnMainSkin.prototype, "skinParts", {
                get: function () {
                    return BtnMainSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnMainSkin.prototype.down_pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.down_pic = t;
                this.__s(t, ["source", "x", "y"], ["菜单按钮1", 0, 16]);
                return t;
            };
            BtnMainSkin.prototype.up_pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.up_pic = t;
                this.__s(t, ["source", "x", "y"], ["菜单按钮1点击", 0, 0]);
                return t;
            };
            BtnMainSkin._skinParts = ["down_pic", "up_pic"];
            return BtnMainSkin;
        })(egret.gui.Skin);
        base.BtnMainSkin = BtnMainSkin;
        BtnMainSkin.prototype.__class__ = "skins.base.BtnMainSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
