var skins;
(function (skins) {
    var UIServerListDialogSkin = (function (_super) {
        __extends(UIServerListDialogSkin, _super);
        function UIServerListDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.server_scroller_i(), this.close_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIServerListDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIServerListDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [4.5, "dialog_title_bg_png", -165]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [343, -0.5, "chat_dialog_panel_2_jpg", 38.5, 495]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [360, 0, "send_msg_frame_png", 39, 512]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [267, 1, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 38.5, 426]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 3, 30, "服务器列表", "center", 0xF7EDBC, "middle", -171.5, 194]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.close_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_btn = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [217.5, "close_png", -103.5]);
            return t;
        };
        __egretProto__.server_scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.server_scroller = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [239, 1, 37.5, 396]);
            t.viewport = this.__9_i();
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        UIServerListDialogSkin._skinParts = ["server_scroller", "close_btn"];
        return UIServerListDialogSkin;
    })(egret.gui.Skin);
    skins.UIServerListDialogSkin = UIServerListDialogSkin;
    UIServerListDialogSkin.prototype.__class__ = "skins.UIServerListDialogSkin";
})(skins || (skins = {}));
