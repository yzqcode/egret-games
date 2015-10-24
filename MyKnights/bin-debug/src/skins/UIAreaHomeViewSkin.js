var skins;
(function (skins) {
    var UIAreaHomeViewSkin = (function (_super) {
        __extends(UIAreaHomeViewSkin, _super);
        function UIAreaHomeViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.noMove_group_i(), this.ten_group_i(), this.bronze_group_i(), this.player_group_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIAreaHomeViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIAreaHomeViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["pin_png", 915, 39]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.8, 40, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 768, 119, 97]);
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["排名", 135, 100]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["名字", 260, 100]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["所在骑士团", 420, 100]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["段位", 617, 100]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["积分", 699, 100]);
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__19_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [392, "special_detail_bg_png", 892, 63, 40]);
            return t;
        };
        __egretProto__.__20_i = function () {
            var t = new egret.gui.UIAsset();
            t.setStyle("bold", true);
            this.__s(t, ["source", "x", "y"], ["chat_title_png", 332, 0]);
            return t;
        };
        __egretProto__.__21_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "source", "x", "y"], [-1, "pin_png", 112, 41]);
            return t;
        };
        __egretProto__.__22_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["pin_png", 915, 39]);
            return t;
        };
        __egretProto__.__23_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.8, 40, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 768, 119, 97]);
            return t;
        };
        __egretProto__.__24_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["排名", 132, 100]);
            return t;
        };
        __egretProto__.__25_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["名字", 291, 100]);
            return t;
        };
        __egretProto__.__26_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["所在骑士团", 489, 100]);
            return t;
        };
        __egretProto__.__27_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "x", "y"], ["积分", 701, 100]);
            return t;
        };
        __egretProto__.__28_i = function () {
            var t = new egret.gui.Group();
            this.__s(t, ["height", "width"], [259, 768]);
            return t;
        };
        __egretProto__.__29_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [392, "special_detail_bg_png", 892, 63, 40]);
            return t;
        };
        __egretProto__.__30_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.8, 40, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 255, 353, 201]);
            return t;
        };
        __egretProto__.__31_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 38, 24, "段位积分", "center", 0xCDC8C8, false, "middle", 217, 374, 204]);
            return t;
        };
        __egretProto__.__32_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 255, 353, 246]);
            return t;
        };
        __egretProto__.__33_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.8, 40, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 255, 353, 307]);
            return t;
        };
        __egretProto__.__34_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 40, 24, "今日奖励荣誉值", "center", 0xDCD5D5, false, "middle", 217, 374, 309]);
            return t;
        };
        __egretProto__.__35_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 255, 353, 350]);
            return t;
        };
        __egretProto__.__36_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.8, 40, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 255, 353, 96]);
            return t;
        };
        __egretProto__.__37_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 38, 24, "世界排名", "center", 0xCDC8C8, false, "middle", 217, 372, 99]);
            return t;
        };
        __egretProto__.__38_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 255, 353, 139]);
            return t;
        };
        __egretProto__.__39_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.8, 40, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 255, 633, 201]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [874, 0, "home_bg_jpg", 0, 1136]);
            return t;
        };
        __egretProto__.__40_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 38, 24, "入场券", "center", 0xDFD8D8, false, "middle", 217, 653, 205]);
            return t;
        };
        __egretProto__.__41_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 255, 633, 246]);
            return t;
        };
        __egretProto__.__42_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "scale9Grid", "source", "width", "x", "y"], [0.8, 40, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 255, 633, 96]);
            return t;
        };
        __egretProto__.__43_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 38, 24, "当前段位", "center", 0xCDC8C8, false, "middle", 217, 653, 99]);
            return t;
        };
        __egretProto__.__44_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 255, 633, 139]);
            return t;
        };
        __egretProto__.__45_i = function () {
            var t = new egret.gui.UIAsset();
            t.setStyle("bold", true);
            this.__s(t, ["source", "x", "y"], ["chat_title_png", 332, 0]);
            return t;
        };
        __egretProto__.__46_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [true, "Arial", 60, 35, "竞技场", "center", 0x000000, false, "middle", 217, 400, 14]);
            return t;
        };
        __egretProto__.__47_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [330, "color_big_frame_6_png", 229, 111, 81]);
            return t;
        };
        __egretProto__.__48_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["color_frame_6_png", 154, 65]);
            return t;
        };
        __egretProto__.__49_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "source", "x", "y"], [-1, "pin_png", 112, 41]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.3, 874, 1, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136]);
            return t;
        };
        __egretProto__.__50_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["pin_png", 915, 39]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [400, 0, "chat_dialog_panel_2_jpg", 0, 1009]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [430, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1039]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [392, "special_detail_bg_png", 892, 63, 40]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            t.setStyle("bold", true);
            this.__s(t, ["source", "x", "y"], ["chat_title_png", 332, 0]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [true, "Arial", 60, 35, "十大骑士排名", "center", 0x000000, false, "middle", 255, 382, 14]);
            return t;
        };
        __egretProto__.bronze_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.bronze_btn = t;
            this.__s(t, ["source", "x", "y"], ["arrow_png", 6, 156]);
            return t;
        };
        __egretProto__.bronze_group_i = function () {
            var t = new egret.gui.Group();
            this.bronze_group = t;
            this.__s(t, ["height", "width", "x", "y"], [472, 1017, 60, 201]);
            t.elementsContent = [this.__19_i(), this.__20_i(), this.rank_area_label_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.__24_i(), this.__25_i(), this.__26_i(), this.__27_i(), this.bronze_rank_scroller_i(), this.player_btn_i(), this.ten_btn_i()];
            return t;
        };
        __egretProto__.bronze_rank_scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.bronze_rank_scroller = t;
            this.__s(t, ["height", "width", "x", "y"], [259, 768, 119, 140]);
            t.viewport = this.__28_i();
            return t;
        };
        __egretProto__.icon_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body = t;
            this.__s(t, ["height", "scaleX", "scaleY", "source", "width", "x", "y"], [423, 0.7, 0.7, "knight_1_png", 292, 123, 97]);
            return t;
        };
        __egretProto__.icon_body_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_body_mask = t;
            this.__s(t, ["height", "scaleX", "scaleY", "source", "width", "x", "y"], [423, 0.7, 0.7, "red_mask_1_png", 292, 123, 97]);
            return t;
        };
        __egretProto__.label_honer_award_i = function () {
            var t = new egret.gui.Label();
            this.label_honer_award = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 52, 30, "???", "center", 0x000000, false, "middle", 217, 373, 357]);
            return t;
        };
        __egretProto__.label_match_times_i = function () {
            var t = new egret.gui.Label();
            this.label_match_times = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 52, 30, "???", "center", 0x000000, false, "middle", 217, 653, 252]);
            return t;
        };
        __egretProto__.label_rank_score_i = function () {
            var t = new egret.gui.Label();
            this.label_rank_score = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 52, 30, "???", "center", 0x000000, false, "middle", 217, 373, 252]);
            return t;
        };
        __egretProto__.label_rank_title_i = function () {
            var t = new egret.gui.Label();
            this.label_rank_title = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 52, 30, "???", "center", 0x000000, false, "middle", 217, 653, 143]);
            return t;
        };
        __egretProto__.label_world_rank_i = function () {
            var t = new egret.gui.Label();
            this.label_world_rank = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 52, 30, "???", "center", 0x000000, false, "middle", 217, 371, 144]);
            return t;
        };
        __egretProto__.match_btn_i = function () {
            var t = new egret.gui.Button();
            this.match_btn = t;
            t.setStyle("bold", true);
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 69, "匹配对手", skins.BtnRedLargeSkin, 664, 328]);
            return t;
        };
        __egretProto__.noMove_group_i = function () {
            var t = new egret.gui.Group();
            this.noMove_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [472, 0, 0, 1017]);
            return t;
        };
        __egretProto__.player_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.player_btn = t;
            this.__s(t, ["source", "x", "y"], ["arrow_png", 6, 156]);
            return t;
        };
        __egretProto__.player_group_i = function () {
            var t = new egret.gui.Group();
            this.player_group = t;
            this.__s(t, ["height", "width", "x", "y"], [472, 1017, 60, 201]);
            t.elementsContent = [this.__29_i(), this.__30_i(), this.__31_i(), this.__32_i(), this.label_rank_score_i(), this.__33_i(), this.__34_i(), this.__35_i(), this.label_honer_award_i(), this.match_btn_i(), this.__36_i(), this.__37_i(), this.__38_i(), this.label_world_rank_i(), this.__39_i(), this.__40_i(), this.__41_i(), this.label_match_times_i(), this.__42_i(), this.__43_i(), this.__44_i(), this.label_rank_title_i(), this.view_rank_btn_i(), this.__45_i(), this.__46_i(), this.__47_i(), this.icon_body_i(), this.icon_body_mask_i(), this.__48_i(), this.player_name_label_i(), this.__49_i(), this.__50_i()];
            return t;
        };
        __egretProto__.player_name_label_i = function () {
            var t = new egret.gui.Label();
            this.player_name_label = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [30, 24, "center", 0x0B0A0A, "middle", 110, 170, 80]);
            return t;
        };
        __egretProto__.rank_area_label_i = function () {
            var t = new egret.gui.Label();
            this.rank_area_label = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [true, "Arial", 60, 35, "center", 0x000000, false, "middle", 255, 382, 14]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "source", "x", "y"], [-1, "pin_png", 112, 41]);
            return t;
        };
        __egretProto__.ten_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.ten_btn = t;
            this.__s(t, ["scaleX", "source", "x", "y"], [-1, "arrow_png", 1007, 156]);
            return t;
        };
        __egretProto__.ten_group_i = function () {
            var t = new egret.gui.Group();
            this.ten_group = t;
            this.__s(t, ["height", "width", "x", "y"], [472, 1017, 60, 201]);
            t.elementsContent = [this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.ten_rank_scroller_i(), this.bronze_btn_i()];
            return t;
        };
        __egretProto__.ten_rank_scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.ten_rank_scroller = t;
            this.__s(t, ["height", "width", "x", "y"], [259, 768, 118, 140]);
            t.viewport = this.__18_i();
            return t;
        };
        __egretProto__.view_rank_btn_i = function () {
            var t = new egret.gui.UIAsset();
            this.view_rank_btn = t;
            this.__s(t, ["scaleX", "source", "x", "y"], [-1, "arrow_png", 1007, 156]);
            return t;
        };
        UIAreaHomeViewSkin._skinParts = ["noMove_group", "ten_rank_scroller", "bronze_btn", "ten_group", "rank_area_label", "bronze_rank_scroller", "player_btn", "ten_btn", "bronze_group", "label_rank_score", "label_honer_award", "match_btn", "label_world_rank", "label_match_times", "label_rank_title", "view_rank_btn", "icon_body", "icon_body_mask", "player_name_label", "player_group"];
        return UIAreaHomeViewSkin;
    })(egret.gui.Skin);
    skins.UIAreaHomeViewSkin = UIAreaHomeViewSkin;
    UIAreaHomeViewSkin.prototype.__class__ = "skins.UIAreaHomeViewSkin";
})(skins || (skins = {}));
