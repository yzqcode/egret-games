var skins;
(function (skins) {
    var UIGuildDonateItemSkin = (function (_super) {
        __extends(UIGuildDonateItemSkin, _super);
        function UIGuildDonateItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [55, 380]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.label_name_i(), this.label_donate_value_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIGuildDonateItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIGuildDonateItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 137, 241, 0]);
            return t;
        };
        __egretProto__.label_donate_value_i = function () {
            var t = new egret.gui.Label();
            this.label_donate_value = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 33, 25, "1234567", "center", 0xFFF4CC, "middle", 104, 257, 7]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "名字", "center", 0xFFF4CC, "middle", 187, 19, 5]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 225, 0, 0]);
            return t;
        };
        UIGuildDonateItemSkin._skinParts = ["label_name", "label_donate_value"];
        return UIGuildDonateItemSkin;
    })(egret.gui.Skin);
    skins.UIGuildDonateItemSkin = UIGuildDonateItemSkin;
    UIGuildDonateItemSkin.prototype.__class__ = "skins.UIGuildDonateItemSkin";
})(skins || (skins = {}));
