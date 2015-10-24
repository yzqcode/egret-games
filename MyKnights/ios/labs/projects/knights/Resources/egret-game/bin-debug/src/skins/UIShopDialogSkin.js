var skins;
(function (skins) {
    var UIShopDialogSkin = (function (_super) {
        __extends(UIShopDialogSkin, _super);
        function UIShopDialogSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.shop_money_group_i(), this.shop_diamond_group_i(), this.shop_stamina_group_i(), this.shop_jobCard_group_i(), this.shop_ticket_group_i(), this.shop_tab_btn_bg_i(), this.close_btn_i(), this.__20_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIShopDialogSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIShopDialogSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "visible", "width", "x", "y"], [egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", false, 172, 237, 274]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "visible", "width", "x", "y"], ["Arial", 20, "恢复时间：", "left", 0xB61904, "middle", false, 152, 247, 287]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 587, 450, 278]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 587, 450, 278]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["enabled", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "x", "y"], [false, 24, "刷新", "center", 0x060505, false, "middle", 260, 289]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["enabled", "scaleX", "scaleY", "source", "touchEnabled", "x", "y"], [false, 0.5, 0.5, "diamond_1_png", false, 302, 275]);
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__19_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 587, 450, 278]);
            return t;
        };
        __egretProto__.__20_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "bottom", "fontFamily", "height", "right", "size", "text", "textAlign", "textColor", "touchEnabled", "width"], [true, 28, "Arial", 36, 14, 28, "返回", "center", 0x000000, false, 150]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.2, 874, 1, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [345, 0, "chat_dialog_panel_2_jpg", 0.5, 1098]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [380, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1136]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 587, 450, 278]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 587, 450, 278]);
            return t;
        };
        __egretProto__.buy_diamond_btn_i = function () {
            var t = new egret.gui.Button();
            this.buy_diamond_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购买", skins.BtnGreenLargeSkin, 15, 266]);
            return t;
        };
        __egretProto__.buy_jobCard_btn_i = function () {
            var t = new egret.gui.Button();
            this.buy_jobCard_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购买", skins.BtnGreenLargeSkin, 15, 266]);
            return t;
        };
        __egretProto__.buy_money_btn_i = function () {
            var t = new egret.gui.Button();
            this.buy_money_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购买", skins.BtnGreenLargeSkin, 15, 266]);
            return t;
        };
        __egretProto__.buy_stamina_btn_i = function () {
            var t = new egret.gui.Button();
            this.buy_stamina_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购买", skins.BtnGreenLargeSkin, 15, 266]);
            return t;
        };
        __egretProto__.buy_ticket_btn_i = function () {
            var t = new egret.gui.Button();
            this.buy_ticket_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["购买", skins.BtnGreenLargeSkin, 15, 266]);
            return t;
        };
        __egretProto__.close_btn_i = function () {
            var t = new egret.gui.Button();
            this.close_btn = t;
            this.__s(t, ["bottom", "label", "right", "skinName"], [5, "按钮", -1, skins.BtnBackHomeSkin]);
            return t;
        };
        __egretProto__.label_diamond_hint_i = function () {
            var t = new egret.gui.Label();
            this.label_diamond_hint = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, "?????", "center", 0xD39C04, "middle", 561, 464, 290]);
            return t;
        };
        __egretProto__.label_jobcrad_hint_i = function () {
            var t = new egret.gui.Label();
            this.label_jobcrad_hint = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, "??????", "center", 0xD39C04, "middle", 561, 464, 290]);
            return t;
        };
        __egretProto__.label_money_hint_i = function () {
            var t = new egret.gui.Label();
            this.label_money_hint = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, "????", "center", 0xD39C04, "middle", 561, 464, 290]);
            return t;
        };
        __egretProto__.label_refresh_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_refresh_fee = t;
            this.__s(t, ["enabled", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [false, 31, 24, "???", "left", 0x070606, false, "middle", 62, 355, 285]);
            return t;
        };
        __egretProto__.label_stamina_hint_i = function () {
            var t = new egret.gui.Label();
            this.label_stamina_hint = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, "?????", "center", 0xD39C04, "middle", 561, 464, 290]);
            return t;
        };
        __egretProto__.label_ticket_hint_i = function () {
            var t = new egret.gui.Label();
            this.label_ticket_hint = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 24, "???", "center", 0xD39C04, "middle", 559, 464, 290]);
            return t;
        };
        __egretProto__.refresh_jobCard_btn_i = function () {
            var t = new egret.gui.Button();
            this.refresh_jobCard_btn = t;
            this.__s(t, ["skinName", "x", "y"], [skins.BtnGreenLargeSkin, 228, 266]);
            return t;
        };
        __egretProto__.scroller_diamond_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_diamond = t;
            this.__s(t, ["height", "width", "x", "y"], [260, 1061, 14, 8]);
            t.viewport = this.__8_i();
            return t;
        };
        __egretProto__.scroller_jobCard_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_jobCard = t;
            this.__s(t, ["height", "width", "x", "y"], [260, 1061, 14, 8]);
            t.viewport = this.__14_i();
            return t;
        };
        __egretProto__.scroller_money_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_money = t;
            this.__s(t, ["height", "width", "x", "y"], [260, 1061, 14, 8]);
            t.viewport = this.__6_i();
            return t;
        };
        __egretProto__.scroller_stamina_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_stamina = t;
            this.__s(t, ["height", "width", "x", "y"], [260, 1061, 14, 8]);
            t.viewport = this.__10_i();
            return t;
        };
        __egretProto__.scroller_ticket_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_ticket = t;
            this.__s(t, ["height", "width", "x", "y"], [260, 1061, 14, 8]);
            t.viewport = this.__18_i();
            return t;
        };
        __egretProto__.shop_diamond_btn_i = function () {
            var t = new egret.gui.Button();
            this.shop_diamond_btn = t;
            this.__s(t, ["enabled", "height", "skinName", "x", "y"], [true, 62, skins.BtnGuildTabSkin, 229, 4]);
            return t;
        };
        __egretProto__.shop_diamond_group_i = function () {
            var t = new egret.gui.Group();
            this.shop_diamond_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width"], [339, 0.5, -2.5, false, 1091]);
            t.elementsContent = [this.scroller_diamond_i(), this.buy_diamond_btn_i(), this.__9_i(), this.label_diamond_hint_i()];
            return t;
        };
        __egretProto__.shop_diamond_label_i = function () {
            var t = new egret.gui.Label();
            this.shop_diamond_label = t;
            this.__s(t, ["enabled", "fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [false, "Arial", 28, "钻石", "center", 0x00F0FF, false, "middle", 152, 254, 7]);
            return t;
        };
        __egretProto__.shop_jobCard_btn_i = function () {
            var t = new egret.gui.Button();
            this.shop_jobCard_btn = t;
            this.__s(t, ["enabled", "height", "skinName", "x", "y"], [true, 62, skins.BtnGuildTabSkin, 662, 4]);
            return t;
        };
        __egretProto__.shop_jobCard_group_i = function () {
            var t = new egret.gui.Group();
            this.shop_jobCard_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width"], [339, 0.5, -2.5, false, 1091]);
            t.elementsContent = [this.scroller_jobCard_i(), this.buy_jobCard_btn_i(), this.__15_i(), this.label_jobcrad_hint_i(), this.refresh_jobCard_btn_i(), this.__16_i(), this.__17_i(), this.label_refresh_fee_i()];
            return t;
        };
        __egretProto__.shop_jobCard_label_i = function () {
            var t = new egret.gui.Label();
            this.shop_jobCard_label = t;
            this.__s(t, ["enabled", "fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [false, "Arial", 28, "转职卡", "center", 0xE372FF, false, "middle", 152, 687, 7]);
            return t;
        };
        __egretProto__.shop_money_btn_i = function () {
            var t = new egret.gui.Button();
            this.shop_money_btn = t;
            this.__s(t, ["enabled", "height", "skinName", "x", "y"], [true, 62, skins.BtnGuildTabSkin, 16, 3]);
            return t;
        };
        __egretProto__.shop_money_group_i = function () {
            var t = new egret.gui.Group();
            this.shop_money_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width"], [339, 0.5, -2.5, false, 1091]);
            t.elementsContent = [this.scroller_money_i(), this.buy_money_btn_i(), this.__7_i(), this.label_money_hint_i()];
            return t;
        };
        __egretProto__.shop_money_label_i = function () {
            var t = new egret.gui.Label();
            this.shop_money_label = t;
            this.__s(t, ["enabled", "fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [false, "Arial", 28, "金钱", "center", 0xFFD800, false, "middle", 152, 38, 7]);
            return t;
        };
        __egretProto__.shop_stamina_btn_i = function () {
            var t = new egret.gui.Button();
            this.shop_stamina_btn = t;
            this.__s(t, ["enabled", "height", "skinName", "x", "y"], [true, 62, skins.BtnGuildTabSkin, 444, 4]);
            return t;
        };
        __egretProto__.shop_stamina_group_i = function () {
            var t = new egret.gui.Group();
            this.shop_stamina_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width"], [339, 0.5, -2.5, false, 1091]);
            t.elementsContent = [this.scroller_stamina_i(), this.buy_stamina_btn_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.label_stamina_hint_i()];
            return t;
        };
        __egretProto__.shop_stamina_label_i = function () {
            var t = new egret.gui.Label();
            this.shop_stamina_label = t;
            this.__s(t, ["enabled", "fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [false, "Arial", 28, "体力", "center", 0xFF6F48, false, "middle", 152, 469, 7]);
            return t;
        };
        __egretProto__.shop_tab_btn_bg_i = function () {
            var t = new egret.gui.Group();
            this.shop_tab_btn_bg = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [64, 0, -199, 1100, 10, 10]);
            t.elementsContent = [this.shop_money_btn_i(), this.shop_money_label_i(), this.shop_diamond_btn_i(), this.shop_diamond_label_i(), this.shop_stamina_btn_i(), this.shop_stamina_label_i(), this.shop_jobCard_btn_i(), this.shop_jobCard_label_i(), this.shop_ticket_btn_i(), this.shop_ticket_label_i()];
            return t;
        };
        __egretProto__.shop_ticket_btn_i = function () {
            var t = new egret.gui.Button();
            this.shop_ticket_btn = t;
            this.__s(t, ["enabled", "height", "skinName", "x", "y"], [true, 62, skins.BtnGuildTabSkin, 878, 4]);
            return t;
        };
        __egretProto__.shop_ticket_group_i = function () {
            var t = new egret.gui.Group();
            this.shop_ticket_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width"], [339, 0.5, -2.5, false, 1091]);
            t.elementsContent = [this.scroller_ticket_i(), this.buy_ticket_btn_i(), this.__19_i(), this.label_ticket_hint_i()];
            return t;
        };
        __egretProto__.shop_ticket_label_i = function () {
            var t = new egret.gui.Label();
            this.shop_ticket_label = t;
            this.__s(t, ["enabled", "fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [false, "Arial", 28, "入场券", "center", 0x43F00A, false, "middle", 152, 906, 7]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        UIShopDialogSkin._skinParts = ["scroller_money", "buy_money_btn", "label_money_hint", "shop_money_group", "scroller_diamond", "buy_diamond_btn", "label_diamond_hint", "shop_diamond_group", "scroller_stamina", "buy_stamina_btn", "label_stamina_hint", "shop_stamina_group", "scroller_jobCard", "buy_jobCard_btn", "label_jobcrad_hint", "refresh_jobCard_btn", "label_refresh_fee", "shop_jobCard_group", "scroller_ticket", "buy_ticket_btn", "label_ticket_hint", "shop_ticket_group", "shop_money_btn", "shop_money_label", "shop_diamond_btn", "shop_diamond_label", "shop_stamina_btn", "shop_stamina_label", "shop_jobCard_btn", "shop_jobCard_label", "shop_ticket_btn", "shop_ticket_label", "shop_tab_btn_bg", "close_btn"];
        return UIShopDialogSkin;
    })(egret.gui.Skin);
    skins.UIShopDialogSkin = UIShopDialogSkin;
    UIShopDialogSkin.prototype.__class__ = "skins.UIShopDialogSkin";
})(skins || (skins = {}));
