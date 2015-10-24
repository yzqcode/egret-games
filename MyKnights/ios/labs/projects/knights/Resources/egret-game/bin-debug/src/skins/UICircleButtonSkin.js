var skins;
(function (skins) {
    var UICircleButtonSkin = (function (_super) {
        __extends(UICircleButtonSkin, _super);
        function UICircleButtonSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [];
            this.__4_i();
            this.__5_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__5", "", "last", ""),
                    new egret.gui.SetProperty("", "height", 92)
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "last", "")
                ]),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UICircleButtonSkin.prototype;
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["add_btn_sel_png", 0, 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "y"], ["add_btn_nor_png", 0]);
            return t;
        };
        return UICircleButtonSkin;
    })(egret.gui.Skin);
    skins.UICircleButtonSkin = UICircleButtonSkin;
    UICircleButtonSkin.prototype.__class__ = "skins.UICircleButtonSkin";
})(skins || (skins = {}));
