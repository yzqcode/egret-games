var skins;
(function (skins) {
    var BtnPassSkin = (function (_super) {
        __extends(BtnPassSkin, _super);
        function BtnPassSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [37, 67]);
            this.elementsContent = [];
            this.__4_i();
            this.__5_i();
            this.__6_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__6", "", "last", ""),
                    new egret.gui.SetProperty("", "width", 67),
                    new egret.gui.SetProperty("", "height", 37)
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__5", "", "last", ""),
                    new egret.gui.SetProperty("", "width", 67),
                    new egret.gui.SetProperty("", "height", 37)
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.AddItems("__4", "", "last", "")
                ])
            ];
        }
        var __egretProto__ = BtnPassSkin.prototype;
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "y"], ["pass_dis_png", 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["pass_sel_png", 0, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "x", "y"], ["pass_nor_png", 0, 0]);
            return t;
        };
        return BtnPassSkin;
    })(egret.gui.Skin);
    skins.BtnPassSkin = BtnPassSkin;
    BtnPassSkin.prototype.__class__ = "skins.BtnPassSkin";
})(skins || (skins = {}));
