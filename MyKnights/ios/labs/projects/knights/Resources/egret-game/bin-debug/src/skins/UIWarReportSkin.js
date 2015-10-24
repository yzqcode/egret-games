var skins;
(function (skins) {
    var UIWarReportSkin = (function (_super) {
        __extends(UIWarReportSkin, _super);
        function UIWarReportSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.war_list_i(), this.close_icon_i(), this.left_arrow_i(), this.right_arrow_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIWarReportSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIWarReportSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [415, 0, "chat_dialog_panel_2_jpg", 0, 1022]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [450, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1060]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "chat_title_png", -210.5]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 40, 0, "军情报告", "center", 0x070606, "middle", -220, 191]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Group();
            t.touchEnabled = true;
            return t;
        };
        __egretProto__.close_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_icon = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [463.5, "close_png", -165.5]);
            return t;
        };
        __egretProto__.left_arrow_i = function () {
            var t = new egret.gui.UIAsset();
            this.left_arrow = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-451.5, "arrow_png", -18.5]);
            return t;
        };
        __egretProto__.right_arrow_i = function () {
            var t = new egret.gui.UIAsset();
            this.right_arrow = t;
            this.__s(t, ["horizontalCenter", "scaleX", "source", "verticalCenter", "x", "y"], [444.5, -1, "arrow_png", -26.5, 10, 10]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.war_list_i = function () {
            var t = new egret.gui.Scroller();
            this.war_list = t;
            this.__s(t, ["height", "horizontalCenter", "touchEnabled", "verticalCenter", "width"], [340, 0, true, 0, 780]);
            t.viewport = this.__8_i();
            return t;
        };
        UIWarReportSkin._skinParts = ["war_list", "close_icon", "left_arrow", "right_arrow"];
        return UIWarReportSkin;
    })(egret.gui.Skin);
    skins.UIWarReportSkin = UIWarReportSkin;
    UIWarReportSkin.prototype.__class__ = "skins.UIWarReportSkin";
})(skins || (skins = {}));
