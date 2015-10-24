var skins;
(function (skins) {
    var UIGuildApplyItemSkin = (function (_super) {
        __extends(UIGuildApplyItemSkin, _super);
        function UIGuildApplyItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [60, 470]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.label_name_i(), this.label_level_i(), this.label_type_i(), this.select_frame_i(), this.select_mask_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIGuildApplyItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIGuildApplyItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 110, 238, 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 110, 359, 0]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "Lv.?", "center", 0xFFF4CC, "middle", 79, 375, 4]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "名字", "center", 0xFFF4CC, "middle", 191, 19, 5]);
            return t;
        };
        __egretProto__.label_type_i = function () {
            var t = new egret.gui.Label();
            this.label_type = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "??", "center", 0xFFF4CC, "middle", 77, 254, 4]);
            return t;
        };
        __egretProto__.select_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [54, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 477, -4, -2]);
            return t;
        };
        __egretProto__.select_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_mask = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 55, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 470, 0, 0]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 230, 0, 0]);
            return t;
        };
        UIGuildApplyItemSkin._skinParts = ["label_name", "label_level", "label_type", "select_frame", "select_mask"];
        return UIGuildApplyItemSkin;
    })(egret.gui.Skin);
    skins.UIGuildApplyItemSkin = UIGuildApplyItemSkin;
    UIGuildApplyItemSkin.prototype.__class__ = "skins.UIGuildApplyItemSkin";
})(skins || (skins = {}));
