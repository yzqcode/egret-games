var skins;
(function (skins) {
    var UIToastViewSkin = (function (_super) {
        __extends(UIToastViewSkin, _super);
        function UIToastViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.labelToast_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIToastViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIToastViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.labelToast_i = function () {
            var t = new egret.gui.Label();
            this.labelToast = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 37, -0.5, 20, "toast", "center", 0xFFFFFF, "middle", -1, 169]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.9, 51, 0, egret.gui.getScale9Grid("13,13,10,10"), "toast_bg_png", 0, 202]);
            return t;
        };
        UIToastViewSkin._skinParts = ["labelToast"];
        return UIToastViewSkin;
    })(egret.gui.Skin);
    skins.UIToastViewSkin = UIToastViewSkin;
    UIToastViewSkin.prototype.__class__ = "skins.UIToastViewSkin";
})(skins || (skins = {}));
