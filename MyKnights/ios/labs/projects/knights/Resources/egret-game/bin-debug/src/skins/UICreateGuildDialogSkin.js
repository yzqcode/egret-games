var skins;
(function (skins) {
    var UICreateGuildDialogSkin = (function (_super) {
        __extends(UICreateGuildDialogSkin, _super);
        function UICreateGuildDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.cancel_btn_i(), this.ok_btn_i(), this.__9_i(), this.guild_name_edit_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UICreateGuildDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UICreateGuildDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "dialog_title_bg_png", -145.5]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [230, 0, "chat_dialog_panel_2_jpg", 0, 530]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [240, 0, egret.gui.getScale9Grid("18,18,19,19"), "send_msg_frame_png", 0, 550]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [106, 0, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -50, 513]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [55, 0, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", -50, 439]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 1, "输入名称", "center", 0xFFF4CC, "middle", -148.5, 166]);
            return t;
        };
        __egretProto__.cancel_btn_i = function () {
            var t = new egret.gui.Button();
            this.cancel_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-92, "取消", skins.BtnRedSmallSkin, 57]);
            return t;
        };
        __egretProto__.guild_name_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.guild_name_edit = t;
            this.__s(t, ["height", "horizontalCenter", "multiline", "size", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [38, 1, false, 24, "center", 0x040303, "middle", -45, 408]);
            return t;
        };
        __egretProto__.ok_btn_i = function () {
            var t = new egret.gui.Button();
            this.ok_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [95, "确定", skins.BtnBlueSmallSkin, 57]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        UICreateGuildDialogSkin._skinParts = ["cancel_btn", "ok_btn", "guild_name_edit"];
        return UICreateGuildDialogSkin;
    })(egret.gui.Skin);
    skins.UICreateGuildDialogSkin = UICreateGuildDialogSkin;
    UICreateGuildDialogSkin.prototype.__class__ = "skins.UICreateGuildDialogSkin";
})(skins || (skins = {}));
