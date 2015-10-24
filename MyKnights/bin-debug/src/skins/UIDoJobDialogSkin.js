var skins;
(function (skins) {
    var UIDoJobDialogSkin = (function (_super) {
        __extends(UIDoJobDialogSkin, _super);
        function UIDoJobDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.doJob_use_diamond_btn_i(), this.doJob_use_money_btn_i(), this.label_diamond_fee_i(), this.label_money_fee_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.doJob_before_body_i(), this.doJob_later_body_i(), this.__11_i(), this.doJob_before_body_mask_i(), this.doJob_later_body_mask_i(), this.close_icon_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIDoJobDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIDoJobDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [0, -0.5, 0.5, "arrow_png", 0]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [4.5, "dialog_title_bg_png", -116]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [280, 1.5, "chat_dialog_panel_2_jpg", 38.5, 540]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [290, 0, "send_msg_frame_png", 39, 550]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [190, 0, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 6, 510]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [-178.5, "gold_icon_png", false, 140.5]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "touchEnabled", "verticalCenter"], [81, "diamond_icon_png", false, 139]);
            return t;
        };
        __egretProto__.close_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_icon = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [228.5, "close_png", -57.5, 10, 10]);
            return t;
        };
        __egretProto__.doJob_before_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_body = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-152.75, 0.5, 0.5, "knight_2_png", -5.75]);
            return t;
        };
        __egretProto__.doJob_before_body_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_body_mask = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-151.75, 0.5, 0.5, "red_mask_2_png", -5.75]);
            return t;
        };
        __egretProto__.doJob_later_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_later_body = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [149.25, 0.5, 0.5, "knight_7_png", -5.75]);
            return t;
        };
        __egretProto__.doJob_later_body_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_later_body_mask = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [149.25, 0.5, 0.5, "red_mask_7_png", -4.75]);
            return t;
        };
        __egretProto__.doJob_use_diamond_btn_i = function () {
            var t = new egret.gui.Button();
            this.doJob_use_diamond_btn = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [129.5, skins.BtnRedLargeSkin, 137]);
            return t;
        };
        __egretProto__.doJob_use_money_btn_i = function () {
            var t = new egret.gui.Button();
            this.doJob_use_money_btn = t;
            this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [-125.5, skins.BtnGreenLargeSkin, 140]);
            return t;
        };
        __egretProto__.label_diamond_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_diamond_fee = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 28, 158, 24, "300", "center", 0x040303, false, "middle", 138, 106]);
            return t;
        };
        __egretProto__.label_money_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_money_fee = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 28, -101, 24, "66666", "center", 0x040303, false, "middle", 142, 106]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 0, 30, "转职", "center", 0xF7EDBC, "middle", -127.5, 194]);
            return t;
        };
        UIDoJobDialogSkin._skinParts = ["doJob_use_diamond_btn", "doJob_use_money_btn", "label_diamond_fee", "label_money_fee", "doJob_before_body", "doJob_later_body", "doJob_before_body_mask", "doJob_later_body_mask", "close_icon"];
        return UIDoJobDialogSkin;
    })(egret.gui.Skin);
    skins.UIDoJobDialogSkin = UIDoJobDialogSkin;
    UIDoJobDialogSkin.prototype.__class__ = "skins.UIDoJobDialogSkin";
})(skins || (skins = {}));
