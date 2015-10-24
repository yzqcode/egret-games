var skins;
(function (skins) {
    var BtnCall0Skin = (function (_super) {
        __extends(BtnCall0Skin, _super);
        function BtnCall0Skin() {
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
        var __egretProto__ = BtnCall0Skin.prototype;
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "y"], ["call_0_nor_png", 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["call_0_down_png", 0, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "x", "y"], ["call_0_nor_png", 0, 0]);
            return t;
        };
        return BtnCall0Skin;
    })(egret.gui.Skin);
    skins.BtnCall0Skin = BtnCall0Skin;
    BtnCall0Skin.prototype.__class__ = "skins.BtnCall0Skin";
})(skins || (skins = {}));
