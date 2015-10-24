var skins;
(function (skins) {
    var UICreateKnightViewSkin = (function (_super) {
        __extends(UICreateKnightViewSkin, _super);
        function UICreateKnightViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.loading_bg_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.btn_select_0_i(), this.btn_select_1_i(), this.btn_select_2_i(), this.label_desc_0_i(), this.label_desc_1_i(), this.label_desc_2_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.png_select_0_i(), this.png_select_1_i(), this.png_select_2_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UICreateKnightViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UICreateKnightViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            t.setStyle("bold", true);
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [61, -2, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 100.5, 190]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [61, 293, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 100.5, 190]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, 48, 0.5, "选择职业", "center", 0x050404, "middle", -267, 211]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 53, -302, 20, "强壮的近战士兵,近身击杀勇往直前", "center", 0x060505, "middle", 103.5, 172]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 53, -3, 20, "灵活的远程战士,攻速超凡箭术精准", "center", 0x040303, "middle", 103.5, 172]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 53, 292, 20, "强大的远程法师,暴击伤害无与伦比", "center", 0x040303, "middle", 104.5, 172]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [485, 0, "chat_dialog_panel_2_jpg", 0, 945]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, -239.5, -90, "special_detail_bg_png", 294, 379]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [515, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 975]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, 353.5, -90, "special_detail_bg_png", 294, 379]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "rotation", "source", "verticalCenter", "width"], [258, 58.5, -90, "special_detail_bg_png", 294, 379]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "chat_title_png", -257.5]);
            return t;
        };
        __egretProto__.btn_select_0_i = function () {
            var t = new egret.gui.Button();
            this.btn_select_0 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [-300, "选择", skins.BtnBlueSmallSkin, 191]);
            return t;
        };
        __egretProto__.btn_select_1_i = function () {
            var t = new egret.gui.Button();
            this.btn_select_1 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [0, "选择", skins.BtnBlueSmallSkin, 191]);
            return t;
        };
        __egretProto__.btn_select_2_i = function () {
            var t = new egret.gui.Button();
            this.btn_select_2 = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [289, "选择", skins.BtnBlueSmallSkin, 191]);
            return t;
        };
        __egretProto__.label_desc_0_i = function () {
            var t = new egret.gui.Label();
            this.label_desc_0 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 44, -301, 30, "战士", "center", 0x060505, false, "middle", -165, 222]);
            return t;
        };
        __egretProto__.label_desc_1_i = function () {
            var t = new egret.gui.Label();
            this.label_desc_1 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 36, -5, 30, "弓箭手", "center", 0x050404, false, "middle", -169, 222]);
            return t;
        };
        __egretProto__.label_desc_2_i = function () {
            var t = new egret.gui.Label();
            this.label_desc_2 = t;
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 36, 293, 30, "法师", "center", 0x060505, false, "middle", -169, 222]);
            return t;
        };
        __egretProto__.loading_bg_i = function () {
            var t = new egret.gui.UIAsset();
            this.loading_bg = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [874, 1, "home_bg_jpg", 0, 1136]);
            return t;
        };
        __egretProto__.png_select_0_i = function () {
            var t = new egret.gui.UIAsset();
            this.png_select_0 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-301.225, 0.55, 0.55, "zj_knight_1_png", -48.625]);
            return t;
        };
        __egretProto__.png_select_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.png_select_1 = t;
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [-2.2250000000000227, 0.55, 0.55, "zj_knight_2_png", -48.625]);
            return t;
        };
        __egretProto__.png_select_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.png_select_2 = t;
            this.__s(t, ["height", "horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "width"], [452, 300.29999999999995, 0.6, 0.6, "zj_knight_3_png", -49.39999999999998, 291]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [61, -300, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 100.5, 190]);
            return t;
        };
        UICreateKnightViewSkin._skinParts = ["loading_bg", "btn_select_0", "btn_select_1", "btn_select_2", "label_desc_0", "label_desc_1", "label_desc_2", "png_select_0", "png_select_1", "png_select_2"];
        return UICreateKnightViewSkin;
    })(egret.gui.Skin);
    skins.UICreateKnightViewSkin = UICreateKnightViewSkin;
    UICreateKnightViewSkin.prototype.__class__ = "skins.UICreateKnightViewSkin";
})(skins || (skins = {}));
