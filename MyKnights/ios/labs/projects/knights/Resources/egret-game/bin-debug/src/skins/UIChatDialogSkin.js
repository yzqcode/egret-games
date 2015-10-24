var skins;
(function (skins) {
    var UIChatDialogSkin = (function (_super) {
        __extends(UIChatDialogSkin, _super);
        function UIChatDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.input_edit_i(), this.speak_btn_i(), this.__10_i(), this.chatDialog_scroller_i(), this.close_icon_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIChatDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIChatDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.Group();
            t.width = 641;
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [415, 0, "chat_dialog_panel_2_jpg", 0, 782]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [450, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 820]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            t.setStyle("fontFamily", "Arial");
            t.setStyle("size", 25);
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [353, 0, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 0, 711]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "chat_title_png", -210.5]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [60, 0, egret.gui.getScale9Grid("18,18,19,19"), "send_msg_frame_png", 137, 680]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [45, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 137.5, 663]);
            return t;
        };
        __egretProto__.chatDialog_scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.chatDialog_scroller = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [241, 0, -25.5, 641]);
            t.viewport = this.__11_i();
            return t;
        };
        __egretProto__.close_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_icon = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [351.5, "close_png", -170.5]);
            return t;
        };
        __egretProto__.input_edit_i = function () {
            var t = new egret.gui.EditableText();
            this.input_edit = t;
            this.__s(t, ["height", "horizontalCenter", "textAlign", "verticalAlign", "verticalCenter", "width"], [40, -74.5, "left", "middle", 140, 497]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 40, 0, "骑士团聊天", "center", 0x070606, "middle", -220, 191]);
            return t;
        };
        __egretProto__.speak_btn_i = function () {
            var t = new egret.gui.Button();
            this.speak_btn = t;
            t.setStyle("fontFamily", "Arial");
            t.setStyle("size", 25);
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [256, "发言", skins.BtnSpeakSkin, 137.5]);
            return t;
        };
        UIChatDialogSkin._skinParts = ["input_edit", "speak_btn", "chatDialog_scroller", "close_icon"];
        return UIChatDialogSkin;
    })(egret.gui.Skin);
    skins.UIChatDialogSkin = UIChatDialogSkin;
    UIChatDialogSkin.prototype.__class__ = "skins.UIChatDialogSkin";
})(skins || (skins = {}));
