var skins;
(function (skins) {
    var UILandDialogSkin = (function (_super) {
        __extends(UILandDialogSkin, _super);
        function UILandDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.register_btn_i(), this.ok_btn_i(), this.__11_i(), this.__12_i(), this.input_id_i(), this.input_password_i(), this.close_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UILandDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UILandDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 34, -122, "账号", "center", 0xF7EDBC, "middle", -45]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 34, -124, "密码", "center", 0xF7EDBC, "middle", 35]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [4.5, "dialog_title_bg_png", -152]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [327, 1.5, "chat_dialog_panel_2_jpg", 38.5, 453]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [332, 0, egret.gui.getScale9Grid("17,17,21,20"), "send_msg_frame_png", 39, 456]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [275, 1, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 41.5, 386]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 3, 30, "登录", "center", 0xF7EDBC, "middle", -158.5, 194]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [44, 30.5, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", -44, 229]);
            return t;
        };
        __egretProto__.close_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_btn = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [190.5, "close_png", -88.5]);
            return t;
        };
        __egretProto__.input_id_i = function () {
            var t = new egret.gui.EditableText();
            this.input_id = t;
            this.__s(t, ["displayAsPassword", "height", "horizontalCenter", "textColor", "verticalCenter", "width"], [false, 35, 30, 0x050404, -42.5, 218]);
            return t;
        };
        __egretProto__.input_password_i = function () {
            var t = new egret.gui.EditableText();
            this.input_password = t;
            this.__s(t, ["displayAsPassword", "height", "horizontalCenter", "textColor", "verticalCenter", "width"], [true, 35, 30, 0x050404, 37.5, 218]);
            return t;
        };
        __egretProto__.ok_btn_i = function () {
            var t = new egret.gui.Button();
            this.ok_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [74, "确定", skins.BtnYellowSmallSkin, 120]);
            return t;
        };
        __egretProto__.register_btn_i = function () {
            var t = new egret.gui.Button();
            this.register_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-64, "注册", skins.BtnRedSmallSkin, 120]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [44, 30.5, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", 36, 229]);
            return t;
        };
        UILandDialogSkin._skinParts = ["register_btn", "ok_btn", "input_id", "input_password", "close_btn"];
        return UILandDialogSkin;
    })(egret.gui.Skin);
    skins.UILandDialogSkin = UILandDialogSkin;
    UILandDialogSkin.prototype.__class__ = "skins.UILandDialogSkin";
})(skins || (skins = {}));
