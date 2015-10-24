var skins;
(function (skins) {
    var UIKnightSimpleItemSkin = (function (_super) {
        __extends(UIKnightSimpleItemSkin, _super);
        function UIKnightSimpleItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [82, 210]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.label_level_i(), this.icon_name_frame_bg_i(), this.label_name_i(), this.select_frame_i(), this.select_mask_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIKnightSimpleItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIKnightSimpleItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["lv_top_png", 7, 11]);
            return t;
        };
        __egretProto__.icon_name_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_name_frame_bg = t;
            this.__s(t, ["scale9Grid", "source", "x", "y"], [egret.gui.getScale9Grid("35,18,77,23"), "color_frame_6_png", 50, 12]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 36, 20, "9", "center", 0xF7EDBC, false, "middle", 32, 14, 28]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 34, 15, "我是一个大帅哥", "center", 0x000000, false, "middle", 129, 60, 26]);
            return t;
        };
        __egretProto__.select_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [84, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 214, -2, -1]);
            return t;
        };
        __egretProto__.select_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_mask = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 81, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 207, 2, 2]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [80, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 210, 0, 2]);
            return t;
        };
        UIKnightSimpleItemSkin._skinParts = ["label_level", "icon_name_frame_bg", "label_name", "select_frame", "select_mask"];
        return UIKnightSimpleItemSkin;
    })(egret.gui.Skin);
    skins.UIKnightSimpleItemSkin = UIKnightSimpleItemSkin;
    UIKnightSimpleItemSkin.prototype.__class__ = "skins.UIKnightSimpleItemSkin";
})(skins || (skins = {}));
