var skins;
(function (skins) {
    var UIOnlyOneChatItemSkin = (function (_super) {
        __extends(UIOnlyOneChatItemSkin, _super);
        function UIOnlyOneChatItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [56, 150]);
            this.elementsContent = [this.__3_i(), this.label_say_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIOnlyOneChatItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIOnlyOneChatItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.label_say_i = function () {
            var t = new egret.gui.Label();
            this.label_say = t;
            this.__s(t, ["height", "size", "text", "textAlign", "width", "x", "y"], [48, 18, "标签", "left", 142, 3, 3]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "visible", "width", "x", "y"], [56, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", false, 150, 0, 0]);
            return t;
        };
        UIOnlyOneChatItemSkin._skinParts = ["label_say"];
        return UIOnlyOneChatItemSkin;
    })(egret.gui.Skin);
    skins.UIOnlyOneChatItemSkin = UIOnlyOneChatItemSkin;
    UIOnlyOneChatItemSkin.prototype.__class__ = "skins.UIOnlyOneChatItemSkin";
})(skins || (skins = {}));
