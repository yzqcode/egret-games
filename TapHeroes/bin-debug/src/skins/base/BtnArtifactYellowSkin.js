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
        var BtnArtifactYellowSkin = (function (_super) {
            __extends(BtnArtifactYellowSkin, _super);
            function BtnArtifactYellowSkin() {
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
                        new egret.gui.SetProperty("__5", "text", "升级")
                    ])
                ];
            }
            Object.defineProperty(BtnArtifactYellowSkin.prototype, "skinParts", {
                get: function () {
                    return BtnArtifactYellowSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnArtifactYellowSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__5 = t;
                this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "y"], [true, "Arial", 26, 1, 23, "升级", "center", 16777215, false, "middle", 118, 38]);
                return t;
            };
            BtnArtifactYellowSkin.prototype.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [20, "仙桃", 20, 36, 10]);
                return t;
            };
            BtnArtifactYellowSkin.prototype.pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.pic = t;
                this.__s(t, ["source", "x", "y"], ["按钮黄", 0, 0]);
                return t;
            };
            BtnArtifactYellowSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["按钮灰", 0, 0]);
                return t;
            };
            BtnArtifactYellowSkin._skinParts = ["pic"];
            return BtnArtifactYellowSkin;
        })(egret.gui.Skin);
        base.BtnArtifactYellowSkin = BtnArtifactYellowSkin;
        BtnArtifactYellowSkin.prototype.__class__ = "skins.base.BtnArtifactYellowSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
