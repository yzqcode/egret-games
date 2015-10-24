var skins;
(function (skins) {
    var UIGuildInputDialogSkin = (function (_super) {
        __extends(UIGuildInputDialogSkin, _super);
        function UIGuildInputDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.input_edit_i(), this.ok_btn_i(), this.close_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIGuildInputDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIGuildInputDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0.5, "dialog_title_bg_png", -221]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [376, 0, "chat_dialog_panel_2_jpg", 0, 588]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [392, 0, egret.gui.getScale9Grid("18,18,19,19"), "send_msg_frame_png", 0, 606]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [244, 0, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -23, 513]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [223, 0, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", -23.5, 495]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 0, "修改公告", "center", 0xFFF4CC, "middle", -224.5, 166]);
            return t;
        };
        __egretProto__.close_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_btn = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [258.5, "close_png", -156.5]);
            return t;
        };
        __egretProto__.input_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.input_edit = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "textAlign", "textColor", "verticalCenter", "width"], ["Arial", 206, 0.5, 20, "left", 0x040303, -24, 479]);
            return t;
        };
        __egretProto__.ok_btn_i = function () {
            var t = new egret.gui.Button();
            this.ok_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [0.5, "确定", skins.BtnGreenLargeSkin, 140]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        UIGuildInputDialogSkin._skinParts = ["input_edit", "ok_btn", "close_btn"];
        return UIGuildInputDialogSkin;
    })(egret.gui.Skin);
    skins.UIGuildInputDialogSkin = UIGuildInputDialogSkin;
    UIGuildInputDialogSkin.prototype.__class__ = "skins.UIGuildInputDialogSkin";
})(skins || (skins = {}));
