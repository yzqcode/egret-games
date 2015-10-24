var skins;
(function (skins) {
    var UIRegisterDialogSkin = (function (_super) {
        __extends(UIRegisterDialogSkin, _super);
        function UIRegisterDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.input_password_2_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.register_fast_btn_i(), this.ok_btn_i(), this.__13_i(), this.__14_i(), this.input_id_i(), this.input_password_1_i(), this.register_fast_label_i(), this.close_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIRegisterDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIRegisterDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [44, 49.5, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", -68, 229]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [44, 49.5, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", -1, 229]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 34, -135, "账号", "center", 0xF7EDBC, "middle", -69]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 34, -135, "密码", "center", 0xF7EDBC, "middle", -2]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [4.5, "dialog_title_bg_png", -177]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [369, 0.5, "chat_dialog_panel_2_jpg", 38.5, 509]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [382, 0, egret.gui.getScale9Grid("17,17,21,20"), "send_msg_frame_png", 39, 528]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [315, 1, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 38.5, 452]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [44, 49.5, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", 63, 229]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 34, -135, "确认密码", "center", 0xF7EDBC, "middle", 62]);
            return t;
        };
        __egretProto__.close_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_btn = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [221.5, "close_png", -111.5]);
            return t;
        };
        __egretProto__.input_id_i = function () {
            var t = new egret.gui.EditableText();
            this.input_id = t;
            this.__s(t, ["height", "horizontalCenter", "textColor", "verticalCenter", "width"], [35, 49, 0x040303, -66.5, 218]);
            return t;
        };
        __egretProto__.input_password_1_i = function () {
            var t = new egret.gui.EditableText();
            this.input_password_1 = t;
            this.__s(t, ["displayAsPassword", "height", "horizontalCenter", "textColor", "verticalCenter", "width"], [true, 35, 49, 0x040303, 0.5, 218]);
            return t;
        };
        __egretProto__.input_password_2_i = function () {
            var t = new egret.gui.EditableText();
            this.input_password_2 = t;
            this.__s(t, ["displayAsPassword", "height", "horizontalCenter", "textColor", "verticalCenter", "width"], [true, 35, 49, 0x050404, 64.5, 218]);
            return t;
        };
        __egretProto__.ok_btn_i = function () {
            var t = new egret.gui.Button();
            this.ok_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [95, "确定", skins.BtnYellowSmallSkin, 138]);
            return t;
        };
        __egretProto__.register_fast_btn_i = function () {
            var t = new egret.gui.Button();
            this.register_fast_btn = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [-90, skins.BtnRedSmallSkin, 138]);
            return t;
        };
        __egretProto__.register_fast_label_i = function () {
            var t = new egret.gui.Label();
            this.register_fast_label = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 31, -89.5, 20, "快速注册", "center", 0x050404, false, "middle", 139.5, 85]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 3, 30, "注册", "center", 0xF7EDBC, "middle", -183.5, 194]);
            return t;
        };
        UIRegisterDialogSkin._skinParts = ["input_password_2", "register_fast_btn", "ok_btn", "input_id", "input_password_1", "register_fast_label", "close_btn"];
        return UIRegisterDialogSkin;
    })(egret.gui.Skin);
    skins.UIRegisterDialogSkin = UIRegisterDialogSkin;
    UIRegisterDialogSkin.prototype.__class__ = "skins.UIRegisterDialogSkin";
})(skins || (skins = {}));
