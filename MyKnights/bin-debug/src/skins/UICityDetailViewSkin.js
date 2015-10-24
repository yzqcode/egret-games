var skins;
(function (skins) {
    var UICityDetailViewSkin = (function (_super) {
        __extends(UICityDetailViewSkin, _super);
        function UICityDetailViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.close_icon_i(), this.label_city_name_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.label_difficulty_des_i(), this.label_money_award_i(), this.label_exp_award_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.label_stamina_fee_i(), this.btn_fight_i(), this.__16_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UICityDetailViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UICityDetailViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-117, "battle_png", -69.5]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-116.5, "exp_png", -31.5]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-118.5, "gold_icon_png", 7.5]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [44, 5, egret.gui.getScale9Grid("10,8,10,13"), "chat_content_panel_png", 58, 278]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 29, -74, 20, "消耗:", "center", 0x030303, "middle", 58.5, 60, 40, 30]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-20.5, "stamina_icon_png", 58.5]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.2, 874, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 1136, 0, 0]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [4.5, "dialog_title_bg_png", -143, 10, 10]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [271, 1.5, "chat_dialog_panel_2_jpg", 23.5, 363, 10, 10]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [280, 0, "send_msg_frame_png", 23, 374, 10, 10]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [201, 1, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", -1.5, 348, 10, 10]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 29, -54, 25, "难度:", "center", 0xF7EDBC, "middle", -73.5, 70, 50, 40]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 29, -54, 25, "经验:", "center", 0xF7EDBC, "middle", -33.5, 70, 60, 50]);
            return t;
        };
        __egretProto__.btn_fight_i = function () {
            var t = new egret.gui.Button();
            this.btn_fight = t;
            this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter", "x", "y"], [1, "攻打", skins.BtnSpeakSkin, 127.5, 20, 20]);
            return t;
        };
        __egretProto__.close_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_icon = t;
            this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [139.5, "close_png", -67.5, 10, 10]);
            return t;
        };
        __egretProto__.label_city_name_i = function () {
            var t = new egret.gui.Label();
            this.label_city_name = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 47, 3, 25, "龙德广场", "center", 0xF7EDBC, "middle", -150.5, 184, 20, 10]);
            return t;
        };
        __egretProto__.label_difficulty_des_i = function () {
            var t = new egret.gui.Label();
            this.label_difficulty_des = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 29, 21, 25, "危险", "left", 0xF7EDBC, "middle", -73.5, 70, 60, 50]);
            return t;
        };
        __egretProto__.label_exp_award_i = function () {
            var t = new egret.gui.Label();
            this.label_exp_award = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 29, 62, 25, "0", "left", 0xF7EDBC, "middle", -33.5, 148, 70, 60]);
            return t;
        };
        __egretProto__.label_money_award_i = function () {
            var t = new egret.gui.Label();
            this.label_money_award = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 29, 62, 25, "0", "left", 0xF7EDBC, "middle", 4.5, 148, 60, 50]);
            return t;
        };
        __egretProto__.label_stamina_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_stamina_fee = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 29, 32, 20, "0", "center", 0x000000, "middle", 58.5, 48, 50, 40]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["Arial", 29, -54, 25, "金钱:", "center", 0xF7EDBC, "middle", 4.5, 70, 70, 60]);
            return t;
        };
        UICityDetailViewSkin._skinParts = ["close_icon", "label_city_name", "label_difficulty_des", "label_money_award", "label_exp_award", "label_stamina_fee", "btn_fight"];
        return UICityDetailViewSkin;
    })(egret.gui.Skin);
    skins.UICityDetailViewSkin = UICityDetailViewSkin;
    UICityDetailViewSkin.prototype.__class__ = "skins.UICityDetailViewSkin";
})(skins || (skins = {}));
