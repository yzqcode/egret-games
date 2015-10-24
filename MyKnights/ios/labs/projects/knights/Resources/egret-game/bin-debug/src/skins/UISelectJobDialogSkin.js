var skins;
(function (skins) {
    var UISelectJobDialogSkin = (function (_super) {
        __extends(UISelectJobDialogSkin, _super);
        function UISelectJobDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.btn_select_0_i(), this.btn_select_1_i(), this.btn_select_2_i(), this.close_btn_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UISelectJobDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UISelectJobDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, 48, 0, 24, "选择要招募的职业", "center", 0x050404, "middle", -267, 211]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", -303, "战士", "center", 0x050404, "middle", -161.5, 188]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", -5, "弓箭手", "center", 0x050404, "middle", -161.5, 188]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 293, "法师", "center", 0x050404, "middle", -161.5, 188]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [874, 0, "home_bg_jpg", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [485, 0, "chat_dialog_panel_2_jpg", 0, 945]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [515, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 975]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, -239.5, -90, "special_detail_bg_png", 299, 379]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, 58.5, -90, "special_detail_bg_png", 299, 379]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, 353.5, -90, "special_detail_bg_png", 299, 379]);
            return t;
        };
        __egretProto__.btn_select_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_0 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-299.7, 0.6, 0.6, "knight_1_png", -26.5]);
            return t;
        };
        __egretProto__.btn_select_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_1 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-1.7000000000000455, 0.6, 0.6, "knight_2_png", -26.5]);
            return t;
        };
        __egretProto__.btn_select_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_select_2 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [294.29999999999995, 0.6, 0.6, "knight_3_png", -26.5]);
            return t;
        };
        __egretProto__.close_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_btn = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [429.5, "close_png", -204.5]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "chat_title_png", -257.5]);
            return t;
        };
        UISelectJobDialogSkin._skinParts = ["btn_select_0", "btn_select_1", "btn_select_2", "close_btn"];
        return UISelectJobDialogSkin;
    })(egret.gui.Skin);
    skins.UISelectJobDialogSkin = UISelectJobDialogSkin;
    UISelectJobDialogSkin.prototype.__class__ = "skins.UISelectJobDialogSkin";
})(skins || (skins = {}));
