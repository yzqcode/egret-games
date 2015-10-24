var skins;
(function (skins) {
    var UIKnightPosItemSkin = (function (_super) {
        __extends(UIKnightPosItemSkin, _super);
        function UIKnightPosItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [120, 165]);
            this.elementsContent = [this.head_bg_icon_i(), this.knight_head_icon_i(), this.label_level_i(), this.left_color_icon_i(), this.right_color_icon_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIKnightPosItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIKnightPosItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.knight_head_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.knight_head_icon = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [96, "head_nor_1_png", 115, 29, -7]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["bold", "fontFamily", "height", "italic", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], [true, "Arial", 27, true, 20, "Lv.9", "center", 0x000000, false, 150, 8, 93]);
            return t;
        };
        __egretProto__.left_color_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_color_icon = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [14, "color_1_png", 14, 18, 96]);
            return t;
        };
        __egretProto__.right_color_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_color_icon = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [14, "color_1_png", 14, 134, 96]);
            return t;
        };
        __egretProto__.head_bg_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.head_bg_icon = t;
            this.__s(t, ["height", "source", "width", "x", "y"], [69, "on_position_bg_png", 165, 0, 51]);
            return t;
        };
        UIKnightPosItemSkin._skinParts = ["head_bg_icon", "knight_head_icon", "label_level", "left_color_icon", "right_color_icon"];
        return UIKnightPosItemSkin;
    })(egret.gui.Skin);
    skins.UIKnightPosItemSkin = UIKnightPosItemSkin;
    UIKnightPosItemSkin.prototype.__class__ = "skins.UIKnightPosItemSkin";
})(skins || (skins = {}));
