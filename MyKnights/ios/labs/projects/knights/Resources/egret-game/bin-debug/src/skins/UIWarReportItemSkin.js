var skins;
(function (skins) {
    var UIWarReportItemSkin = (function (_super) {
        __extends(UIWarReportItemSkin, _super);
        function UIWarReportItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [340, 780]);
            this.elementsContent = [this.__3_i(), this.btn_goto_i(), this.btn_get_award_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.label_difficulty_des_i(), this.label_money_award_i(), this.label_exp_award_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.label_city_name_i(), this.label_city_desc_i(), this.label_status_i(), this.__12_i(), this.label_index_i(), this.label_stamina_fee_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.icon_city_i(), this.icon_finish_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIWarReportItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIWarReportItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["gold_icon_png", 596, 196]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 25, "消耗", "center", 0xFA000A, "middle", 60, 69, 264]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["stamina_icon_png", 133, 257]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["pin_png", 748, 0]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "source", "x", "y"], [-1, "pin_png", 31, -2]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["special_detail_bg_png", -2, 0]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            t.setStyle("bold", true);
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [100, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 660, 60, 83]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [50, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 660, 60, 190]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 25, "难度:", "center", 0xF7EDBC, "middle", 70, 70, 198]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 25, "经验:", "center", 0xF7EDBC, "middle", 70, 292, 198]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 25, "金钱:", "center", 0xF7EDBC, "middle", 70, 523, 198]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["battle_png", 139, 192]);
            return t;
        };
        __egretProto__.btn_get_award_i = function () {
            var t = new egret.gui.Button();
            this.btn_get_award = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["领取奖励", skins.BtnGreenLargeSkin, 286, 245]);
            return t;
        };
        __egretProto__.btn_goto_i = function () {
            var t = new egret.gui.Button();
            this.btn_goto = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["前往", skins.BtnGreenLargeSkin, 286, 245]);
            return t;
        };
        __egretProto__.icon_city_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_city = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.8, 0.8, "rand_building_1_png", 72, 91]);
            return t;
        };
        __egretProto__.icon_finish_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_finish = t;
            this.__s(t, ["rotation", "source", "x", "y"], [-15, "mission_complete_png", -7, 63]);
            return t;
        };
        __egretProto__.label_city_desc_i = function () {
            var t = new egret.gui.Label();
            this.label_city_desc = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 84, 25, "龙德广场是宇宙中心，对不？", "left", 0x000000, "middle", 513, 191, 91]);
            return t;
        };
        __egretProto__.label_city_name_i = function () {
            var t = new egret.gui.Label();
            this.label_city_name = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 47, 30, "龙德广场", "center", 0x000000, "middle", 284, 242, 31]);
            return t;
        };
        __egretProto__.label_difficulty_des_i = function () {
            var t = new egret.gui.Label();
            this.label_difficulty_des = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 25, "危险", "left", 0xF7EDBC, "middle", 70, 192, 198]);
            return t;
        };
        __egretProto__.label_exp_award_i = function () {
            var t = new egret.gui.Label();
            this.label_exp_award = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 25, "0", "left", 0xF7EDBC, "middle", 80, 414, 198]);
            return t;
        };
        __egretProto__.label_index_i = function () {
            var t = new egret.gui.Label();
            this.label_index = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 20, "20/20", "right", 0x000000, "middle", 72, 669, 287]);
            return t;
        };
        __egretProto__.label_money_award_i = function () {
            var t = new egret.gui.Label();
            this.label_money_award = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 25, "0", "left", 0xF7EDBC, "middle", 72, 637, 198]);
            return t;
        };
        __egretProto__.label_stamina_fee_i = function () {
            var t = new egret.gui.Label();
            this.label_stamina_fee = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 29, 25, "0", "center", 0xFA000A, "middle", 48, 174, 263]);
            return t;
        };
        __egretProto__.label_status_i = function () {
            var t = new egret.gui.Label();
            this.label_status = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 47, 25, "被攻打中", "center", 0xFA000A, "middle", 191, 531, 31]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["exp_png", 363, 198]);
            return t;
        };
        UIWarReportItemSkin._skinParts = ["btn_goto", "btn_get_award", "label_difficulty_des", "label_money_award", "label_exp_award", "label_city_name", "label_city_desc", "label_status", "label_index", "label_stamina_fee", "icon_city", "icon_finish"];
        return UIWarReportItemSkin;
    })(egret.gui.Skin);
    skins.UIWarReportItemSkin = UIWarReportItemSkin;
    UIWarReportItemSkin.prototype.__class__ = "skins.UIWarReportItemSkin";
})(skins || (skins = {}));
