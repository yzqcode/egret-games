var skins;
(function (skins) {
    var UIPurchaseConfirmViewSkin = (function (_super) {
        __extends(UIPurchaseConfirmViewSkin, _super);
        function UIPurchaseConfirmViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.title_lable_i(), this.__8_i(), this.content_lable_i(), this.__9_i(), this.label_fee_num_i(), this.ok_btn_i(), this.cancel_btn_i(), this.icon_money_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIPurchaseConfirmViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIPurchaseConfirmViewSkin._skinParts;
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
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [44, -0.5, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", 27, 229]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 28, -68.5, 20, "需花费:", "center", 0x000000, "middle", 27, 87, 10, 10]);
            return t;
        };
        __egretProto__.cancel_btn_i = function () {
            var t = new egret.gui.Button();
            this.cancel_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-64, "取消", skins.BtnYellowSmallSkin, 101]);
            return t;
        };
        __egretProto__.content_lable_i = function () {
            var t = new egret.gui.Label();
            this.content_lable = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 54, 0.5, 20, "您确定购买一个招募位置吗?", "center", 0xF7EDBC, "middle", -28, 313]);
            return t;
        };
        __egretProto__.icon_money_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_money = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-5.5, "gold_icon_png", 27.5]);
            return t;
        };
        __egretProto__.label_fee_num_i = function () {
            var t = new egret.gui.Label();
            this.label_fee_num = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 28, 60.5, 20, "12345678", "center", 0x000000, "middle", 27, 97, 20, 20]);
            return t;
        };
        __egretProto__.ok_btn_i = function () {
            var t = new egret.gui.Button();
            this.ok_btn = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [74, "确定", skins.BtnRedSmallSkin, 101]);
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
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 3, 30, "标签", "center", 0xF7EDBC, "middle", -122.5, 194]);
            return t;
        };
        UIPurchaseConfirmViewSkin._skinParts = ["title_lable", "content_lable", "label_fee_num", "ok_btn", "cancel_btn", "icon_money"];
        return UIPurchaseConfirmViewSkin;
    })(egret.gui.Skin);
    skins.UIPurchaseConfirmViewSkin = UIPurchaseConfirmViewSkin;
    UIPurchaseConfirmViewSkin.prototype.__class__ = "skins.UIPurchaseConfirmViewSkin";
})(skins || (skins = {}));
