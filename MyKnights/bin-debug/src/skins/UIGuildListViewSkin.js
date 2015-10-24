var skins;
(function (skins) {
    var UIGuildListViewSkin = (function (_super) {
        __extends(UIGuildListViewSkin, _super);
        function UIGuildListViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.guild_list_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.guild_create_btn_i(), this.btn_apply_i(), this.btn_cancel_i(), this.__14_i(), this.__15_i(), this.guild_name_edit_i(), this.icon_search_guild_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIGuildListViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIGuildListViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 46, -153.5, 30, "骑士团名称", "center", 0xFFF4CC, "middle", -166, 181, 10, 10]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [0, 1, 1, "chat_title_png", -228.5, 20, 20]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 58, 0.5, 40, "骑士团列表", "center", 0x000000, "middle", -236, 241]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [54, 390, egret.gui.getScale9Grid("15,15,18,17"), "chat_content_bg_png", 167, 260]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [389, egret.gui.getScale9Grid("18,18,19,19"), "send_msg_frame_png", 165, 260]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [874, 0, "home_bg_jpg", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0.2, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136, 20, 20]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [415, 0, "chat_dialog_panel_2_jpg", 0, 1098, 20, 20]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [450, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1136, 20, 20]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 46, -339.5, 30, "活跃", "center", 0xFFF4CC, "middle", -166, 81]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 46, 48.5, 30, "人数", "center", 0xFFF4CC, "middle", -166, 81, 10, 10]);
            return t;
        };
        __egretProto__.btn_apply_i = function () {
            var t = new egret.gui.Button();
            this.btn_apply = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "label", "skinName", "verticalCenter"], [true, 71, 171, "申请", skins.BtnYellowSmallSkin, 166.5]);
            return t;
        };
        __egretProto__.btn_cancel_i = function () {
            var t = new egret.gui.Button();
            this.btn_cancel = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "label", "skinName", "verticalCenter", "x", "y"], [true, 71, -170, "取消", skins.BtnRedSmallSkin, 166.5, 10, 10]);
            return t;
        };
        __egretProto__.guild_create_btn_i = function () {
            var t = new egret.gui.Button();
            this.guild_create_btn = t;
            this.__s(t, ["enabled", "height", "horizontalCenter", "label", "skinName", "verticalCenter"], [true, 69, 0, "建立骑士团", skins.BtnGreenLargeSkin, 165.5]);
            return t;
        };
        __egretProto__.guild_list_i = function () {
            var t = new egret.gui.Scroller();
            this.guild_list = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [257, 0, -7.5, 800, 10, 10]);
            t.viewport = this.__7_i();
            return t;
        };
        __egretProto__.guild_name_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.guild_name_edit = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "multiline", "size", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 34, 367.5, false, 20, "left", 0xFFF4CC, "middle", 165, 185, 10]);
            return t;
        };
        __egretProto__.icon_search_guild_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_search_guild = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [488.5, "magnifer_png", 164]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 46, 247, 30, "申请状态", "center", 0xFFF4CC, "middle", -166, 144, 20, 20]);
            return t;
        };
        UIGuildListViewSkin._skinParts = ["guild_list", "guild_create_btn", "btn_apply", "btn_cancel", "guild_name_edit", "icon_search_guild"];
        return UIGuildListViewSkin;
    })(egret.gui.Skin);
    skins.UIGuildListViewSkin = UIGuildListViewSkin;
    UIGuildListViewSkin.prototype.__class__ = "skins.UIGuildListViewSkin";
})(skins || (skins = {}));
