var skins;
(function (skins) {
    var UISelfKnightsDialogSkin = (function (_super) {
        __extends(UISelfKnightsDialogSkin, _super);
        function UISelfKnightsDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.knights_list_i(), this.close_icon_i(), this.__7_i(), this.__8_i(), this.btn_confirm_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UISelfKnightsDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UISelfKnightsDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [0, 1.4, 1.4, "special_detail_bg_png", 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [300, 0, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", -24, 914]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.Group();
            t.touchEnabled = true;
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "chat_title_png", -232.5]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 40, 0.5, "选择转职骑士", "center", 0x070606, "middle", -238, 191]);
            return t;
        };
        __egretProto__.btn_confirm_i = function () {
            var t = new egret.gui.Button();
            this.btn_confirm = t;
            this.__s(t, ["enabled", "horizontalCenter", "label", "skinName", "verticalCenter"], [true, -12, "确认", skins.BtnRedSmallSkin, 166]);
            return t;
        };
        __egretProto__.close_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_icon = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [471.5, "close_png", -187.5]);
            return t;
        };
        __egretProto__.knights_list_i = function () {
            var t = new egret.gui.Scroller();
            this.knights_list = t;
            this.__s(t, ["height", "horizontalCenter", "touchEnabled", "verticalCenter", "width"], [300, 0, true, -24, 914]);
            t.viewport = this.__6_i();
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        UISelfKnightsDialogSkin._skinParts = ["knights_list", "close_icon", "btn_confirm"];
        return UISelfKnightsDialogSkin;
    })(egret.gui.Skin);
    skins.UISelfKnightsDialogSkin = UISelfKnightsDialogSkin;
    UISelfKnightsDialogSkin.prototype.__class__ = "skins.UISelfKnightsDialogSkin";
})(skins || (skins = {}));
