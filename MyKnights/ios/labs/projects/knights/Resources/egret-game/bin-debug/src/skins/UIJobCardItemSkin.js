var skins;
(function (skins) {
    var UIJobCardItemSkin = (function (_super) {
        __extends(UIJobCardItemSkin, _super);
        function UIJobCardItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [300, 240]);
            this.elementsContent = [this.icon_card_frame_i(), this.icon_body_i(), this.label_card_num_i(), this.select_frame_i(), this.pos_mask_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIJobCardItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIJobCardItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.icon_card_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_card_frame = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "job_big_frame_6_png", 15, 2]);
            return t;
        };
        __egretProto__.label_card_num_i = function () {
            var t = new egret.gui.Label();
            this.label_card_num = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "Arial", 57, 50, "??", "left", 0xFFFFFF, "middle", 70, 26, 24]);
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
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [268, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 192, 21, 19]);
            return t;
        };
        __egretProto__.icon_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "knight_1_png", 13, -8]);
            return t;
        };
        UIJobCardItemSkin._skinParts = ["icon_card_frame", "icon_body", "label_card_num", "select_frame", "pos_mask"];
        return UIJobCardItemSkin;
    })(egret.gui.Skin);
    skins.UIJobCardItemSkin = UIJobCardItemSkin;
    UIJobCardItemSkin.prototype.__class__ = "skins.UIJobCardItemSkin";
})(skins || (skins = {}));
