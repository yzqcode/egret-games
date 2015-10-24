var skins;
(function (skins) {
    var UIKnightItemSkin = (function (_super) {
        __extends(UIKnightItemSkin, _super);
        function UIKnightItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [300, 240]);
            this.elementsContent = [this.icon_body_frame_i(), this.icon_body_i(), this.icon_body_mask_i(), this.icon_name_frame_bg_i(), this.label_name_i(), this.__3_i(), this.label_level_i(), this.select_frame_i(), this.pos_mask_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIKnightItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIKnightItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.icon_body_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_frame = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "color_big_frame_6_png", 15, 12]);
            return t;
        };
        __egretProto__.icon_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "knight_1_png", 13, 5]);
            return t;
        };
        __egretProto__.icon_body_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_mask = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "red_mask_1_png", 13, 5]);
            return t;
        };
        __egretProto__.icon_name_frame_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_name_frame_bg = t;
            this.__s(t, ["source", "x", "y"], ["color_frame_6_png", 48, -1]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 36, 20, "9", "center", 0xF7EDBC, false, "middle", 32, 191, 259]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 34, 15, "我是一个大帅哥", "center", 0x000000, false, "middle", 125, 58, 13]);
            return t;
        };
        __egretProto__.pos_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.pos_mask = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 300, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 239, 0, 0]);
            return t;
        };
        __egretProto__.select_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [294, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 194, 21, 3]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["lv_top_png", 184, 240]);
            return t;
        };
        UIKnightItemSkin._skinParts = ["icon_body_frame", "icon_body", "icon_body_mask", "icon_name_frame_bg", "label_name", "label_level", "select_frame", "pos_mask"];
        return UIKnightItemSkin;
    })(egret.gui.Skin);
    skins.UIKnightItemSkin = UIKnightItemSkin;
    UIKnightItemSkin.prototype.__class__ = "skins.UIKnightItemSkin";
})(skins || (skins = {}));
