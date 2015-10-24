var skins;
(function (skins) {
    var UIHintViewSkin = (function (_super) {
        __extends(UIHintViewSkin, _super);
        function UIHintViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.title_lable_i(), this.content_lable_i(), this.oneOK_btn_i(), this.ok_btn_i(), this.cancel_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIHintViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIHintViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [4.5, "dialog_title_bg_png", -116]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [249, 1.5, "chat_dialog_panel_2_jpg", 38.5, 363]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [258, 0, "send_msg_frame_png", 39, 374]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [231, 1, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 41.5, 348]);
            return t;
        };
        __egretProto__.cancel_btn_i = function () {
            var t = new egret.gui.Button();
            this.cancel_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-62, "取消", skins.BtnYellowSmallSkin, 107]);
            return t;
        };
        __egretProto__.content_lable_i = function () {
            var t = new egret.gui.Label();
            this.content_lable = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 116, 0.5, 25, "内容", "center", 0xF7EDBC, "middle", -3, 313]);
            return t;
        };
        __egretProto__.ok_btn_i = function () {
            var t = new egret.gui.Button();
            this.ok_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [76, "确定", skins.BtnRedSmallSkin, 107]);
            return t;
        };
        __egretProto__.oneOK_btn_i = function () {
            var t = new egret.gui.Button();
            this.oneOK_btn = t;
            this.__s(t, ["enabled", "horizontalCenter", "label", "skinName", "verticalCenter"], [true, 0, "确定", skins.BtnBlueSmallSkin, 106]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.title_lable_i = function () {
            var t = new egret.gui.Label();
            this.title_lable = t;
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 0, 30, "标题", "center", 0xF7EDBC, "middle", -120.5, 194]);
            return t;
        };
        UIHintViewSkin._skinParts = ["title_lable", "content_lable", "oneOK_btn", "ok_btn", "cancel_btn"];
        return UIHintViewSkin;
    })(egret.gui.Skin);
    skins.UIHintViewSkin = UIHintViewSkin;
    UIHintViewSkin.prototype.__class__ = "skins.UIHintViewSkin";
})(skins || (skins = {}));
