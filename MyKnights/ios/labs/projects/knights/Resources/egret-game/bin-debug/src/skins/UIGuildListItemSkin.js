var skins;
(function (skins) {
    var UIGuildListItemSkin = (function (_super) {
        __extends(UIGuildListItemSkin, _super);
        function UIGuildListItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [60, 800]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.label_guild_name_i(), this.label_guild_index_i(), this.label_members_i(), this.label_status_i(), this.select_frame_i(), this.select_mask_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIGuildListItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIGuildListItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 230, 129, 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 140, 379, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 199, 552, 0]);
            return t;
        };
        __egretProto__.label_guild_index_i = function () {
            var t = new egret.gui.Label();
            this.label_guild_index = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "排名", "center", 0xFFF4CC, "middle", 89, 13, 5]);
            return t;
        };
        __egretProto__.label_guild_name_i = function () {
            var t = new egret.gui.Label();
            this.label_guild_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "名字", "center", 0xFFF4CC, "middle", 195, 144, 5]);
            return t;
        };
        __egretProto__.label_members_i = function () {
            var t = new egret.gui.Label();
            this.label_members = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "???/???", "center", 0xFFF4CC, "middle", 116, 390, 5]);
            return t;
        };
        __egretProto__.label_status_i = function () {
            var t = new egret.gui.Label();
            this.label_status = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 25, "已申请", "center", 0xF9BC0B, "middle", 159, 574, 5]);
            return t;
        };
        __egretProto__.select_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_frame = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [54, egret.gui.getScale9Grid("23,21,28,31"), "select_frame_png", 761, -4, -2]);
            return t;
        };
        __egretProto__.select_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.select_mask = t;
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0, 58, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 799, 0, 0]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [50, "chat_dialog_panel_png", 115, 0, 0]);
            return t;
        };
        UIGuildListItemSkin._skinParts = ["label_guild_name", "label_guild_index", "label_members", "label_status", "select_frame", "select_mask"];
        return UIGuildListItemSkin;
    })(egret.gui.Skin);
    skins.UIGuildListItemSkin = UIGuildListItemSkin;
    UIGuildListItemSkin.prototype.__class__ = "skins.UIGuildListItemSkin";
})(skins || (skins = {}));
