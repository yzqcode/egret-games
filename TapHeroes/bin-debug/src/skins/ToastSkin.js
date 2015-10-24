var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ToastSkin = (function (_super) {
        __extends(ToastSkin, _super);
        function ToastSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.labelToast_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ToastSkin.prototype, "skinParts", {
            get: function () {
                return ToastSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ToastSkin.prototype.labelToast_i = function () {
            var t = new egret.gui.Label();
            this.labelToast = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 39, 20, "toast", "center", 16777215, "middle", 165, 10, 4]);
            return t;
        };
        ToastSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "source", "width", "x", "y"], [0.9, 48, "背弹框底", 184, 1, -1]);
            return t;
        };
        ToastSkin._skinParts = ["labelToast"];
        return ToastSkin;
    })(egret.gui.Skin);
    skins.ToastSkin = ToastSkin;
    ToastSkin.prototype.__class__ = "skins.ToastSkin";
})(skins || (skins = {}));
