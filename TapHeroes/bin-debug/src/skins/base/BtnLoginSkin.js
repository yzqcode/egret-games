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
        var BtnLoginSkin = (function (_super) {
            __extends(BtnLoginSkin, _super);
            function BtnLoginSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [];
                this.__4_i();
                this.__5_i();
                this.__6_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("__5", "", "last", "")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.AddItems("__4", "", "last", "")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__6", "", "last", "")
                    ])
                ];
            }
            BtnLoginSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["queding", 0, 4]);
                return t;
            };
            BtnLoginSkin.prototype.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__5 = t;
                this.__s(t, ["source", "x", "y"], ["queding", 0, 0]);
                return t;
            };
            BtnLoginSkin.prototype.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__6 = t;
                this.__s(t, ["source", "x", "y"], ["queding01", 0, 0]);
                return t;
            };
            return BtnLoginSkin;
        })(egret.gui.Skin);
        base.BtnLoginSkin = BtnLoginSkin;
        BtnLoginSkin.prototype.__class__ = "skins.base.BtnLoginSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
