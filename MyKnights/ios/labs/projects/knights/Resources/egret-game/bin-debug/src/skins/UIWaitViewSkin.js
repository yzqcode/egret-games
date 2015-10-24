var skins;
(function (skins) {
    var UIWaitViewSkin = (function (_super) {
        __extends(UIWaitViewSkin, _super);
        function UIWaitViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.mask_layer_i(), this.wait_icon_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIWaitViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIWaitViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.mask_layer_i = function () {
            var t = new egret.gui.UIAsset();
            this.mask_layer = t;
            this.__s(t, ["alpha", "enabled", "height", "horizontalCenter", "source", "touchEnabled", "verticalCenter", "width"], [0, true, 874, 0, "black_round_square_png", true, 0, 1136]);
            return t;
        };
        __egretProto__.wait_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.wait_icon = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [72, 0, "cmn_wait_png", 0, 72]);
            return t;
        };
        UIWaitViewSkin._skinParts = ["mask_layer", "wait_icon"];
        return UIWaitViewSkin;
    })(egret.gui.Skin);
    skins.UIWaitViewSkin = UIWaitViewSkin;
    UIWaitViewSkin.prototype.__class__ = "skins.UIWaitViewSkin";
})(skins || (skins = {}));
