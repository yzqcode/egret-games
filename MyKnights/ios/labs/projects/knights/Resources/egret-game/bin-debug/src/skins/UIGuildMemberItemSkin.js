var skins;
(function (skins) {
    var UIGuildMemberItemSkin = (function (_super) {
        __extends(UIGuildMemberItemSkin, _super);
        function UIGuildMemberItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [55, 1021]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.label_name_i(), this.label_status_i(), this.label_level_i(), this.label_type_i(), this.label_position_i(), this.__8_i(), this.select_frame_i(), this.select_mask_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIGuildMemberItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIGuildMemberItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 110, 257, 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 110, 379, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 110, 512, 0]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 230, 637, 0]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["chat_title_bg_png", 874, 4]);
            return t;
        };
        __egretProto__.label_level_i = function () {
            var t = new egret.gui.Label();
            this.label_level = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "Lv.?", "center", 0xFFF4CC, "middle", 80, 528, 5]);
            return t;
        };
        __egretProto__.label_name_i = function () {
            var t = new egret.gui.Label();
            this.label_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "名字", "center", 0xFFF4CC, "middle", 204, 12, 5]);
            return t;
        };
        __egretProto__.label_position_i = function () {
            var t = new egret.gui.Label();
            this.label_position = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "职位", "center", 0xFFF4CC, "middle", 84, 393, 5]);
            return t;
        };
        __egretProto__.label_status_i = function () {
            var t = new egret.gui.Label();
            this.label_status = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "副本中", "center", 0xFFF4CC, "middle", 204, 651, 5]);
            return t;
        };
        __egretProto__.label_type_i = function () {
            var t = new egret.gui.Label();
            this.label_type = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "职业", "center", 0xFFF4CC, "middle", 84, 270, 5]);
            return t;
        };
        __egretProto__.select_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [54, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 872, -2, -2]);
            return t;
        };
        __egretProto__.select_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_mask = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 49, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 872, -2, -1]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 235, 0, 0]);
            return t;
        };
        UIGuildMemberItemSkin._skinParts = ["label_name", "label_status", "label_level", "label_type", "label_position", "select_frame", "select_mask"];
        return UIGuildMemberItemSkin;
    })(egret.gui.Skin);
    skins.UIGuildMemberItemSkin = UIGuildMemberItemSkin;
    UIGuildMemberItemSkin.prototype.__class__ = "skins.UIGuildMemberItemSkin";
})(skins || (skins = {}));
