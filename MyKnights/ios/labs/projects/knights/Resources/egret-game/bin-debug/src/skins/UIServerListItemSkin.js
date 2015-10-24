var skins;
(function (skins) {
    var UIServerListItemSkin = (function (_super) {
        __extends(UIServerListItemSkin, _super);
        function UIServerListItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [67, 396]);
            this.elementsContent = [this.__3_i(), this.choose_btn_i(), this.server_name_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIServerListItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIServerListItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.choose_btn_i = function () {
            var t = new egret.gui.Button();
            this.choose_btn = t;
            this.__s(t, ["height", "label", "skinName", "width", "x", "y"], [67, "选择", skins.BtnYellowSmallSkin, 112, 283, -1]);
            return t;
        };
        __egretProto__.server_name_i = function () {
            var t = new egret.gui.Label();
            this.server_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 46, 24, "服务器名称", "center", 0x040303, "middle", 274, 4, 14]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 281, 1, 6]);
            return t;
        };
        UIServerListItemSkin._skinParts = ["choose_btn", "server_name"];
        return UIServerListItemSkin;
    })(egret.gui.Skin);
    skins.UIServerListItemSkin = UIServerListItemSkin;
    UIServerListItemSkin.prototype.__class__ = "skins.UIServerListItemSkin";
})(skins || (skins = {}));
