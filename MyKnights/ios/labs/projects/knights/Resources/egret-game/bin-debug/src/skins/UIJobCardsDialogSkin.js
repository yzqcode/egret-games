var skins;
(function (skins) {
    var UIJobCardsDialogSkin = (function (_super) {
        __extends(UIJobCardsDialogSkin, _super);
        function UIJobCardsDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.cards_list_i(), this.close_icon_i(), this.__7_i(), this.__8_i(), this.btn_sell_i(), this.btn_use_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIJobCardsDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIJobCardsDialogSkin._skinParts;
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
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 40, 0.5, "选择转职卡", "center", 0x070606, "middle", -238, 191]);
            return t;
        };
        __egretProto__.btn_sell_i = function () {
            var t = new egret.gui.Button();
            this.btn_sell = t;
            this.__s(t, ["enabled", "horizontalCenter", "label", "skinName", "verticalCenter"], [true, 80, "贩卖", skins.BtnRedSmallSkin, 166]);
            return t;
        };
        __egretProto__.btn_use_i = function () {
            var t = new egret.gui.Button();
            this.btn_use = t;
            this.__s(t, ["enabled", "horizontalCenter", "label", "skinName", "verticalCenter", "x", "y"], [true, -80, "使用", skins.BtnBlueSmallSkin, 166, 10, 10]);
            return t;
        };
        __egretProto__.cards_list_i = function () {
            var t = new egret.gui.Scroller();
            this.cards_list = t;
            this.__s(t, ["height", "horizontalCenter", "touchEnabled", "verticalCenter", "width"], [300, 0, true, -24, 914]);
            t.viewport = this.__6_i();
            return t;
        };
        __egretProto__.close_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_icon = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [471.5, "close_png", -187.5]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 0, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        UIJobCardsDialogSkin._skinParts = ["cards_list", "close_icon", "btn_sell", "btn_use"];
        return UIJobCardsDialogSkin;
    })(egret.gui.Skin);
    skins.UIJobCardsDialogSkin = UIJobCardsDialogSkin;
    UIJobCardsDialogSkin.prototype.__class__ = "skins.UIJobCardsDialogSkin";
})(skins || (skins = {}));
