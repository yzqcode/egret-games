var skins;
(function (skins) {
    var UIBoxButtonSkin = (function (_super) {
        __extends(UIBoxButtonSkin, _super);
        function UIBoxButtonSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.labelDisplay_i()];
            this.__4_i();
            this.__5_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__5", "", "before", "labelDisplay")
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "before", "labelDisplay")
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.SetProperty("labelDisplay", "x", 11),
                    new egret.gui.SetProperty("labelDisplay", "y", 15)
                ])
            ];
        }
        var __egretProto__ = UIBoxButtonSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIBoxButtonSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["sq_btn_nor_png", 0, 0]);
            return t;
        };
        __egretProto__.labelDisplay_i = function () {
            var t = new egret.gui.Label();
            this.labelDisplay = t;
            this.__s(t, ["textColor", "x", "y"], [0xF70707, 25.5, 41.5]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["sq_btn_sel_png", 0, 0]);
            return t;
        };
        UIBoxButtonSkin._skinParts = ["labelDisplay"];
        return UIBoxButtonSkin;
    })(egret.gui.Skin);
    skins.UIBoxButtonSkin = UIBoxButtonSkin;
    UIBoxButtonSkin.prototype.__class__ = "skins.UIBoxButtonSkin";
})(skins || (skins = {}));
