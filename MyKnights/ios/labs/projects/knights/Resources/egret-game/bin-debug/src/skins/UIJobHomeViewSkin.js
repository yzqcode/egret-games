var skins;
(function (skins) {
    var UIJobHomeViewSkin = (function (_super) {
        __extends(UIJobHomeViewSkin, _super);
        function UIJobHomeViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [874, 1136]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.job_team_group_i(), this.job_dojob_group_i(), this.job_hero_group_i(), this.job_soldier_group_i(), this.job_tab_btn_bg_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIJobHomeViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIJobHomeViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__101_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [41, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 376, 624, 62]);
            return t;
        };
        __egretProto__.__102_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [169, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 371, 626, 118]);
            return t;
        };
        __egretProto__.__103_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [37, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 166, 782, 124]);
            return t;
        };
        __egretProto__.__104_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 34, 24, "特殊技能", "center", 0xF1D106, "middle", 149, 788, 126]);
            return t;
        };
        __egretProto__.__105_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [118, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 208, 781, 162]);
            return t;
        };
        __egretProto__.__106_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__107_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "source", "x", "y"], [-1, "pin_png", 588, 0]);
            return t;
        };
        __egretProto__.__108_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["pin_png", 1033, -1]);
            return t;
        };
        __egretProto__.__109_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [241, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 419, 0, 1]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "等级", "center", 0xFFF4CC, "middle", 84, 525, 20]);
            return t;
        };
        __egretProto__.__110_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [24, 20, "战、弓、法达到5级时可进行转职。", "left", 0x040303, "middle", 349, 40, 9]);
            return t;
        };
        __egretProto__.__111_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [24, 20, "转职需要转职卡。", "left", 0x050404, "middle", 321, 40, 39]);
            return t;
        };
        __egretProto__.__112_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, "转职卡可与骑士团队友组队进入转职副本概率获得，也可以通过商人进行购买。", "left", 0x050404, "middle", 321, 40, 68]);
            return t;
        };
        __egretProto__.__113_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, "转职卡有职业及品质要求，需要满足条件。", "left", 0x060505, "middle", 321, 40, 139]);
            return t;
        };
        __egretProto__.__114_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, "转职副本与组队副本一致，只能由主角进入。", "left", 0x050404, "middle", 321, 40, 190]);
            return t;
        };
        __egretProto__.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "状态", "center", 0xFFF4CC, "middle", 84, 717, 20]);
            return t;
        };
        __egretProto__.__12_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__13_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "名称", "center", 0xFFF4CC, "middle", 149, 275, 20]);
            return t;
        };
        __egretProto__.__14_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "职业", "center", 0xFFF4CC, "middle", 84, 500, 20]);
            return t;
        };
        __egretProto__.__15_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "职位", "center", 0xFFF4CC, "middle", 84, 618, 20]);
            return t;
        };
        __egretProto__.__16_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "等级", "center", 0xFFF4CC, "middle", 84, 727, 20]);
            return t;
        };
        __egretProto__.__17_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [290, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 410, 10, 6]);
            return t;
        };
        __egretProto__.__18_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [290, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 640, 434, 6]);
            return t;
        };
        __egretProto__.__19_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["lv_top_png", 152, 229]);
            return t;
        };
        __egretProto__.__20_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__21_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["转职前", "center", 0xEBF308, "middle", 104, 284, 18]);
            return t;
        };
        __egretProto__.__22_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["attack_png", 203, 69]);
            return t;
        };
        __egretProto__.__23_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["def_png", 199, 137]);
            return t;
        };
        __egretProto__.__24_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["heart_png", 199, 198]);
            return t;
        };
        __egretProto__.__25_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["attack_png", 453, 68]);
            return t;
        };
        __egretProto__.__26_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["def_png", 449, 136]);
            return t;
        };
        __egretProto__.__27_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["heart_png", 449, 197]);
            return t;
        };
        __egretProto__.__28_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [28, 22, "选择士兵", "center", 0x040303, false, "middle", 117, 58, 306]);
            return t;
        };
        __egretProto__.__29_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [28, 22, "转职", "center", 0x040303, false, "middle", 117, 496, 306]);
            return t;
        };
        __egretProto__.__30_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], [28, 22, "选择转职卡", "center", 0x040303, false, "middle", 117, 920, 306]);
            return t;
        };
        __egretProto__.__31_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [100, "job_bg_nor_png", 100, 18, 2]);
            return t;
        };
        __egretProto__.__32_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 18, 111]);
            return t;
        };
        __egretProto__.__33_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 18, 224]);
            return t;
        };
        __egretProto__.__34_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 166, 2]);
            return t;
        };
        __egretProto__.__35_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 290, 2]);
            return t;
        };
        __egretProto__.__36_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 410, 2]);
            return t;
        };
        __egretProto__.__37_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 200, 111]);
            return t;
        };
        __egretProto__.__38_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 380, 111]);
            return t;
        };
        __egretProto__.__39_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 166, 224]);
            return t;
        };
        __egretProto__.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [874, 0, "home_bg_jpg", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__40_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 290, 224]);
            return t;
        };
        __egretProto__.__41_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 410, 224]);
            return t;
        };
        __egretProto__.__42_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 64, -2]);
            return t;
        };
        __egretProto__.__43_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 69, 106]);
            return t;
        };
        __egretProto__.__44_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 63, 218]);
            return t;
        };
        __egretProto__.__45_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 219, -2]);
            return t;
        };
        __egretProto__.__46_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 337, -2]);
            return t;
        };
        __egretProto__.__47_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 462, -2]);
            return t;
        };
        __egretProto__.__48_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 247, 106]);
            return t;
        };
        __egretProto__.__49_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 427, 105]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [0.2, 874, -3, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 0, 1136, 10, 10]);
            return t;
        };
        __egretProto__.__50_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 219, 217]);
            return t;
        };
        __egretProto__.__51_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 339, 219]);
            return t;
        };
        __egretProto__.__52_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 463, 218]);
            return t;
        };
        __egretProto__.__53_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["little_arrow_png", 124, 35]);
            return t;
        };
        __egretProto__.__54_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["little_arrow_png", 124, 141]);
            return t;
        };
        __egretProto__.__55_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["little_arrow_png", 124, 257]);
            return t;
        };
        __egretProto__.__56_i = function () {
            var t = new egret.gui.Group();
            t.elementsContent = [this.__31_i(), this.__32_i(), this.__33_i(), this.__34_i(), this.__35_i(), this.__36_i(), this.__37_i(), this.__38_i(), this.__39_i(), this.__40_i(), this.__41_i(), this.hero_select_1_i(), this.hero_select_2_i(), this.hero_select_3_i(), this.hero_select_4_i(), this.hero_select_5_i(), this.hero_select_6_i(), this.hero_select_7_i(), this.hero_select_8_i(), this.hero_select_9_i(), this.hero_select_10_i(), this.hero_select_11_i(), this.hero_1_i(), this.hero_2_i(), this.hero_3_i(), this.hero_4_i(), this.hero_5_i(), this.hero_6_i(), this.hero_7_i(), this.hero_8_i(), this.hero_9_i(), this.hero_10_i(), this.hero_11_i(), this.__42_i(), this.__43_i(), this.__44_i(), this.__45_i(), this.__46_i(), this.__47_i(), this.__48_i(), this.__49_i(), this.__50_i(), this.__51_i(), this.__52_i(), this.__53_i(), this.__54_i(), this.__55_i()];
            return t;
        };
        __egretProto__.__57_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [333, "special_detail_bg_png", 508, 555, 1]);
            return t;
        };
        __egretProto__.__58_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "chat_title_png", 704, -1]);
            return t;
        };
        __egretProto__.__59_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [41, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 376, 621, 61]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [345, 0, "chat_dialog_panel_2_jpg", 0, 1098, 20, 20]);
            return t;
        };
        __egretProto__.__60_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [169, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 371, 623, 117]);
            return t;
        };
        __egretProto__.__61_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [37, egret.gui.getScale9Grid("14,13,21,21"), "black_round_square_png", 166, 779, 123]);
            return t;
        };
        __egretProto__.__62_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 34, 24, "特殊技能", "center", 0xF1D106, "middle", 149, 785, 125]);
            return t;
        };
        __egretProto__.__63_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [118, egret.gui.getScale9Grid("24,24,28,28"), "chat_dialog_panel_png", 208, 778, 161]);
            return t;
        };
        __egretProto__.__64_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__65_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "source", "x", "y"], [-1, "pin_png", 585, -1]);
            return t;
        };
        __egretProto__.__66_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["pin_png", 1030, -2]);
            return t;
        };
        __egretProto__.__67_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [241, egret.gui.getScale9Grid("11,10,15,16"), "yellow_panel_png", 419, 0, 0]);
            return t;
        };
        __egretProto__.__68_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [24, 20, "战、弓、法达到5级时可进行转职。", "left", 0x040303, "middle", 349, 40, 8]);
            return t;
        };
        __egretProto__.__69_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [24, 20, "转职需要转职卡。", "left", 0x050404, "middle", 321, 40, 38]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [380, 0, egret.gui.getScale9Grid("50,53,49,45"), "chat_dialog_frame_png", 0, 1136, 20, 20]);
            return t;
        };
        __egretProto__.__70_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, "转职卡可与骑士团队友组队进入转职副本概率获得，也可以通过商人进行购买。", "left", 0x050404, "middle", 321, 40, 67]);
            return t;
        };
        __egretProto__.__71_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, "转职卡有职业及品质要求，需要满足条件。", "left", 0x060505, "middle", 321, 40, 138]);
            return t;
        };
        __egretProto__.__72_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [20, "转职副本与组队副本一致，只能由主角进入。", "left", 0x050404, "middle", 321, 40, 189]);
            return t;
        };
        __egretProto__.__73_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [100, "job_bg_nor_png", 100, 18, 2]);
            return t;
        };
        __egretProto__.__74_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 18, 111]);
            return t;
        };
        __egretProto__.__75_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 18, 224]);
            return t;
        };
        __egretProto__.__76_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 166, 2]);
            return t;
        };
        __egretProto__.__77_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 290, 2]);
            return t;
        };
        __egretProto__.__78_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 410, 2]);
            return t;
        };
        __egretProto__.__79_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 200, 111]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.Group();
            return t;
        };
        __egretProto__.__80_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 380, 111]);
            return t;
        };
        __egretProto__.__81_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 166, 224]);
            return t;
        };
        __egretProto__.__82_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 290, 224]);
            return t;
        };
        __egretProto__.__83_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "width", "x", "y"], ["job_bg_nor_png", 100, 410, 224]);
            return t;
        };
        __egretProto__.__84_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 64, -2]);
            return t;
        };
        __egretProto__.__85_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 69, 106]);
            return t;
        };
        __egretProto__.__86_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 63, 218]);
            return t;
        };
        __egretProto__.__87_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 219, -2]);
            return t;
        };
        __egretProto__.__88_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 337, -2]);
            return t;
        };
        __egretProto__.__89_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 462, -2]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "队长名称", "center", 0xFFF4CC, "middle", 149, 145, 20]);
            return t;
        };
        __egretProto__.__90_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 247, 106]);
            return t;
        };
        __egretProto__.__91_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 427, 105]);
            return t;
        };
        __egretProto__.__92_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 219, 217]);
            return t;
        };
        __egretProto__.__93_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "pin_png", 339, 219]);
            return t;
        };
        __egretProto__.__94_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-0.5, 0.5, "pin_png", 463, 218]);
            return t;
        };
        __egretProto__.__95_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["little_arrow_png", 124, 35]);
            return t;
        };
        __egretProto__.__96_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["little_arrow_png", 124, 141]);
            return t;
        };
        __egretProto__.__97_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["little_arrow_png", 124, 257]);
            return t;
        };
        __egretProto__.__98_i = function () {
            var t = new egret.gui.Group();
            t.elementsContent = [this.__73_i(), this.__74_i(), this.__75_i(), this.__76_i(), this.__77_i(), this.__78_i(), this.__79_i(), this.__80_i(), this.__81_i(), this.__82_i(), this.__83_i(), this.soldier_select_1_i(), this.soldier_select_2_i(), this.soldier_select_3_i(), this.soldier_select_4_i(), this.soldier_select_5_i(), this.soldier_select_6_i(), this.soldier_select_7_i(), this.soldier_select_8_i(), this.soldier_select_9_i(), this.soldier_select_10_i(), this.soldier_select_11_i(), this.soldier_1_i(), this.soldier_2_i(), this.soldier_3_i(), this.soldier_4_i(), this.soldier_5_i(), this.soldier_6_i(), this.soldier_7_i(), this.soldier_8_i(), this.soldier_9_i(), this.soldier_10_i(), this.soldier_11_i(), this.__84_i(), this.__85_i(), this.__86_i(), this.__87_i(), this.__88_i(), this.__89_i(), this.__90_i(), this.__91_i(), this.__92_i(), this.__93_i(), this.__94_i(), this.__95_i(), this.__96_i(), this.__97_i()];
            return t;
        };
        __egretProto__.__99_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [333, "special_detail_bg_png", 508, 558, 2]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 41, 30, "职业", "center", 0xFFF4CC, "middle", 84, 388, 20]);
            return t;
        };
        __egretProto__.create_team_btn_i = function () {
            var t = new egret.gui.Button();
            this.create_team_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "创建队伍", skins.BtnGreenLargeSkin, 442, 267]);
            return t;
        };
        __egretProto__.dismiss_btn_i = function () {
            var t = new egret.gui.Button();
            this.dismiss_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "解散队伍", skins.BtnRedLargeSkin, 18, 257]);
            return t;
        };
        __egretProto__.doJob_before_atk_num_i = function () {
            var t = new egret.gui.Label();
            this.doJob_before_atk_num = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "width", "x", "y"], ["Arial", 28, 24, "center", 0x060505, 149, 250, 81]);
            return t;
        };
        __egretProto__.doJob_before_atk_num_panel_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_atk_num_panel = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [36, egret.gui.getScale9Grid("10,11,16,16"), "color_value_panel_1_png", 164, 243, 75]);
            return t;
        };
        __egretProto__.doJob_before_body_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_body_frame = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "color_big_frame_1_png", 21, 38]);
            return t;
        };
        __egretProto__.doJob_before_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_body = t;
            this.__s(t, ["scaleX", "scaleY", "source", "visible", "x", "y"], [0.5, 0.5, "knight_2_png", false, 22, 28]);
            return t;
        };
        __egretProto__.doJob_before_body_mask_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_body_mask = t;
            this.__s(t, ["scaleX", "scaleY", "source", "visible", "x", "y"], [0.5, 0.5, "red_mask_2_png", false, 22, 28]);
            return t;
        };
        __egretProto__.doJob_before_def_num_i = function () {
            var t = new egret.gui.Label();
            this.doJob_before_def_num = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 28, 24, "center", 0x050404, "middle", 149, 250, 144]);
            return t;
        };
        __egretProto__.doJob_before_def_num_panel_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_def_num_panel = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [36, egret.gui.getScale9Grid("10,11,16,16"), "color_value_panel_1_png", 164, 243, 138]);
            return t;
        };
        __egretProto__.doJob_before_hp_num_i = function () {
            var t = new egret.gui.Label();
            this.doJob_before_hp_num = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 28, 24, "center", 0x050404, "middle", 149, 250, 202]);
            return t;
        };
        __egretProto__.doJob_before_hp_num_panel_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_hp_num_panel = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [36, egret.gui.getScale9Grid("10,11,16,16"), "color_value_panel_1_png", 164, 243, 196]);
            return t;
        };
        __egretProto__.doJob_before_level_i = function () {
            var t = new egret.gui.Label();
            this.doJob_before_level = t;
            this.__s(t, ["height", "size", "textAlign", "verticalAlign", "width", "x", "y"], [28, 20, "center", "middle", 32, 159, 253]);
            return t;
        };
        __egretProto__.doJob_before_name_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_before_name_frame = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.9, 0.9, "color_frame_1_png", 40, 22]);
            return t;
        };
        __egretProto__.doJob_before_name_i = function () {
            var t = new egret.gui.Label();
            this.doJob_before_name = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [28, 20, "center", 0x050404, "middle", 103, 53, 36]);
            return t;
        };
        __egretProto__.doJob_btn_i = function () {
            var t = new egret.gui.Button();
            this.doJob_btn = t;
            this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.7, 0.7, skins.BtnRedLargeSkin, 481, 293]);
            return t;
        };
        __egretProto__.doJob_later_atk_num_i = function () {
            var t = new egret.gui.Label();
            this.doJob_later_atk_num = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "width", "x", "y"], ["Arial", 28, 24, "center", 0x060505, 149, 500, 80]);
            return t;
        };
        __egretProto__.doJob_later_atk_num_panel_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_later_atk_num_panel = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [36, egret.gui.getScale9Grid("10,11,16,16"), "color_value_panel_1_png", 164, 493, 74]);
            return t;
        };
        __egretProto__.doJob_later_body_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_later_body_frame = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.5, 0.5, "job_big_frame_1_png", 895, 38]);
            return t;
        };
        __egretProto__.doJob_later_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_later_body = t;
            this.__s(t, ["scaleX", "scaleY", "source", "visible", "x", "y"], [0.5, 0.5, "knight_7_png", false, 898, 32]);
            return t;
        };
        __egretProto__.doJob_later_def_num_i = function () {
            var t = new egret.gui.Label();
            this.doJob_later_def_num = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 28, 24, "center", 0x050404, "middle", 149, 500, 143]);
            return t;
        };
        __egretProto__.doJob_later_def_num_panel_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_later_def_num_panel = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [36, egret.gui.getScale9Grid("10,11,16,16"), "color_value_panel_1_png", 164, 493, 137]);
            return t;
        };
        __egretProto__.doJob_later_hp_num_i = function () {
            var t = new egret.gui.Label();
            this.doJob_later_hp_num = t;
            this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 28, 24, "center", 0x050404, "middle", 149, 500, 201]);
            return t;
        };
        __egretProto__.doJob_later_hp_num_panel_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_later_hp_num_panel = t;
            this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [36, egret.gui.getScale9Grid("10,11,16,16"), "color_value_panel_1_png", 164, 493, 195]);
            return t;
        };
        __egretProto__.doJob_later_name_frame_i = function () {
            var t = new egret.gui.UIAsset();
            this.doJob_later_name_frame = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.4, 0.5, "chat_title_png", 909, 26]);
            return t;
        };
        __egretProto__.doJob_later_name_i = function () {
            var t = new egret.gui.Label();
            this.doJob_later_name = t;
            this.__s(t, ["height", "size", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [28, 20, "center", 0x050404, "middle", 103, 928, 33]);
            return t;
        };
        __egretProto__.doJob_skill_scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.doJob_skill_scroller = t;
            this.__s(t, ["height", "width", "x", "y"], [248, 218, 672, 26]);
            t.viewport = this.__20_i();
            return t;
        };
        __egretProto__.doJob_to_label_i = function () {
            var t = new egret.gui.Label();
            this.doJob_to_label = t;
            this.__s(t, ["height", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [34, "center", 0xF5F508, "middle", 187, 459, 18]);
            return t;
        };
        __egretProto__.exit_btn_i = function () {
            var t = new egret.gui.Button();
            this.exit_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["退出", skins.BtnRedSmallSkin, 64, 182]);
            return t;
        };
        __egretProto__.hero_10_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_10 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_10_png", 302, 215]);
            return t;
        };
        __egretProto__.hero_11_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_11 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_11_png", 421, 216]);
            return t;
        };
        __egretProto__.hero_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_1 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_1_png", 28, -7]);
            return t;
        };
        __egretProto__.hero_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_2 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_2_png", 28, 102]);
            return t;
        };
        __egretProto__.hero_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_3 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_3_png", 30, 216]);
            return t;
        };
        __egretProto__.hero_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_4 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_4_png", 177, -6]);
            return t;
        };
        __egretProto__.hero_5_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_5 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_5_png", 300, -6]);
            return t;
        };
        __egretProto__.hero_6_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_6 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_6_png", 421, -7]);
            return t;
        };
        __egretProto__.hero_7_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_7 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_7_png", 210, 102]);
            return t;
        };
        __egretProto__.hero_8_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_8 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_8_png", 391, 104]);
            return t;
        };
        __egretProto__.hero_9_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_9 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "zj_knight_9_png", 175, 216]);
            return t;
        };
        __egretProto__.hero_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_body = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.65, 0.65, "knight_5_png", 574, 23]);
            return t;
        };
        __egretProto__.hero_introduce_i = function () {
            var t = new egret.gui.Label();
            this.hero_introduce = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 35, 24, "英雄描述", "center", 0xF2E606, "middle", 350, 635, 65]);
            return t;
        };
        __egretProto__.hero_list_i = function () {
            var t = new egret.gui.Scroller();
            this.hero_list = t;
            this.__s(t, ["height", "width", "x", "y"], [333, 541, 9, 1]);
            t.viewport = this.__56_i();
            return t;
        };
        __egretProto__.hero_name_i = function () {
            var t = new egret.gui.Label();
            this.hero_name = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "Arial", 34, 28, "转职介绍", "center", 0x000000, "middle", 145, 737, 6]);
            return t;
        };
        __egretProto__.hero_select_10_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_10 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 290, 224]);
            return t;
        };
        __egretProto__.hero_select_11_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_11 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 410, 224]);
            return t;
        };
        __egretProto__.hero_select_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_1 = t;
            this.__s(t, ["height", "source", "visible", "width", "x", "y"], [100, "job_bg_sel_png", false, 100, 18, 2]);
            return t;
        };
        __egretProto__.hero_select_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_2 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 18, 111]);
            return t;
        };
        __egretProto__.hero_select_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_3 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 18, 224]);
            return t;
        };
        __egretProto__.hero_select_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_4 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 166, 2]);
            return t;
        };
        __egretProto__.hero_select_5_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_5 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 290, 2]);
            return t;
        };
        __egretProto__.hero_select_6_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_6 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 410, 2]);
            return t;
        };
        __egretProto__.hero_select_7_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_7 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 200, 111]);
            return t;
        };
        __egretProto__.hero_select_8_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_8 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 380, 111]);
            return t;
        };
        __egretProto__.hero_select_9_i = function () {
            var t = new egret.gui.UIAsset();
            this.hero_select_9 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 166, 224]);
            return t;
        };
        __egretProto__.hero_skill_scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.hero_skill_scroller = t;
            this.__s(t, ["height", "width", "x", "y"], [108, 193, 785, 165]);
            t.viewport = this.__64_i();
            return t;
        };
        __egretProto__.hint_label_i = function () {
            var t = new egret.gui.Label();
            this.hint_label = t;
            this.__s(t, ["height", "horizontalCenter", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [51, 0, "您不在骑士团中，不能参与转职副本！", "center", 0xFFF4CC, "middle", 0, 550]);
            return t;
        };
        __egretProto__.init_panel_hero_i = function () {
            var t = new egret.gui.Group();
            this.init_panel_hero = t;
            this.__s(t, ["height", "width", "x", "y"], [254, 421, 597, 57]);
            t.elementsContent = [this.__67_i(), this.__68_i(), this.__69_i(), this.__70_i(), this.__71_i(), this.__72_i()];
            return t;
        };
        __egretProto__.init_panel_i = function () {
            var t = new egret.gui.Group();
            this.init_panel = t;
            this.__s(t, ["height", "width", "x", "y"], [254, 421, 600, 57]);
            t.elementsContent = [this.__109_i(), this.__110_i(), this.__111_i(), this.__112_i(), this.__113_i(), this.__114_i()];
            return t;
        };
        __egretProto__.job_dojob_btn_i = function () {
            var t = new egret.gui.Button();
            this.job_dojob_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 62, "转职", skins.BtnGuildTabSkin, 255, 5]);
            return t;
        };
        __egretProto__.job_dojob_group_i = function () {
            var t = new egret.gui.Group();
            this.job_dojob_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width", "x", "y"], [339, 0, -0.5, false, 1088, 10, 10]);
            t.elementsContent = [this.__17_i(), this.__18_i(), this.select_soldier_btn_i(), this.doJob_btn_i(), this.select_jobCard_btn_i(), this.doJob_before_body_frame_i(), this.doJob_before_name_frame_i(), this.__19_i(), this.doJob_later_body_frame_i(), this.doJob_later_name_frame_i(), this.doJob_skill_scroller_i(), this.doJob_before_body_i(), this.doJob_before_body_mask_i(), this.doJob_later_body_i(), this.doJob_before_name_i(), this.doJob_later_name_i(), this.doJob_before_level_i(), this.__21_i(), this.doJob_to_label_i(), this.__22_i(), this.__23_i(), this.__24_i(), this.doJob_before_atk_num_panel_i(), this.doJob_before_def_num_panel_i(), this.doJob_before_hp_num_panel_i(), this.doJob_before_atk_num_i(), this.doJob_before_def_num_i(), this.doJob_before_hp_num_i(), this.__25_i(), this.__26_i(), this.__27_i(), this.doJob_later_atk_num_panel_i(), this.doJob_later_def_num_panel_i(), this.doJob_later_hp_num_panel_i(), this.doJob_later_atk_num_i(), this.doJob_later_def_num_i(), this.doJob_later_hp_num_i(), this.__28_i(), this.__29_i(), this.__30_i()];
            return t;
        };
        __egretProto__.job_hero_btn_i = function () {
            var t = new egret.gui.Button();
            this.job_hero_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 62, "英雄介绍", skins.BtnGuildTabSkin, 475, 5]);
            return t;
        };
        __egretProto__.job_hero_group_i = function () {
            var t = new egret.gui.Group();
            this.job_hero_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width", "x", "y"], [330, 0.5, -3, false, 1091, 20, 20]);
            t.elementsContent = [this.hero_list_i(), this.__57_i(), this.__58_i(), this.hero_name_i(), this.__59_i(), this.hero_introduce_i(), this.__60_i(), this.hero_body_i(), this.__61_i(), this.__62_i(), this.__63_i(), this.hero_skill_scroller_i(), this.__65_i(), this.__66_i(), this.init_panel_hero_i()];
            return t;
        };
        __egretProto__.job_soldier_group_i = function () {
            var t = new egret.gui.Group();
            this.job_soldier_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width", "x", "y"], [339, 0.5, 0.5, false, 1097, 30, 30]);
            t.elementsContent = [this.soldier_list_i(), this.__99_i(), this.__100_i(), this.soldier_name_i(), this.__101_i(), this.__102_i(), this.soldier_body_i(), this.__103_i(), this.__104_i(), this.soldier_introduce_i(), this.__105_i(), this.skill_scroller_i(), this.__107_i(), this.__108_i(), this.init_panel_i()];
            return t;
        };
        __egretProto__.job_soldier_i = function () {
            var t = new egret.gui.Button();
            this.job_soldier = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 62, "士兵介绍", skins.BtnGuildTabSkin, 695, 5]);
            return t;
        };
        __egretProto__.job_tab_btn_bg_i = function () {
            var t = new egret.gui.Group();
            this.job_tab_btn_bg = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [64, 0, -199, 1100, 10, 10]);
            t.elementsContent = [this.job_team_btn_i(), this.job_dojob_btn_i(), this.job_hero_btn_i(), this.job_soldier_i()];
            return t;
        };
        __egretProto__.job_team_btn_i = function () {
            var t = new egret.gui.Button();
            this.job_team_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 62, "转职副本", skins.BtnGuildTabSkin, 35, 5]);
            return t;
        };
        __egretProto__.job_team_group_i = function () {
            var t = new egret.gui.Group();
            this.job_team_group = t;
            this.__s(t, ["height", "horizontalCenter", "verticalCenter", "visible", "width"], [339, 0.5, -2.5, false, 1091]);
            t.elementsContent = [this.hint_label_i(), this.team_list_group_i(), this.member_list_group_i()];
            return t;
        };
        __egretProto__.kick_out_btn_i = function () {
            var t = new egret.gui.Button();
            this.kick_out_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["踢出", skins.BtnRedSmallSkin, 64, 182]);
            return t;
        };
        __egretProto__.look_btn_i = function () {
            var t = new egret.gui.Button();
            this.look_btn = t;
            this.__s(t, ["label", "skinName", "x", "y"], ["查看", skins.BtnBlueSmallSkin, 915, 182]);
            return t;
        };
        __egretProto__.member_list_group_i = function () {
            var t = new egret.gui.Group();
            this.member_list_group = t;
            this.__s(t, ["height", "width", "x", "y"], [339, 1091, 0, 0]);
            t.elementsContent = [this.members_list_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.start_battle_btn_i(), this.dismiss_btn_i(), this.kick_out_btn_i(), this.look_btn_i(), this.exit_btn_i()];
            return t;
        };
        __egretProto__.members_list_i = function () {
            var t = new egret.gui.Scroller();
            this.members_list = t;
            this.__s(t, ["height", "width", "x", "y"], [280, 630, 229, 57]);
            t.viewport = this.__12_i();
            return t;
        };
        __egretProto__.select_jobCard_btn_i = function () {
            var t = new egret.gui.Button();
            this.select_jobCard_btn = t;
            this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.7, 0.7, skins.BtnGreenLargeSkin, 906, 294]);
            return t;
        };
        __egretProto__.select_soldier_btn_i = function () {
            var t = new egret.gui.Button();
            this.select_soldier_btn = t;
            this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.7, 0.7, skins.BtnGreenLargeSkin, 44, 293]);
            return t;
        };
        __egretProto__.skill_scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.skill_scroller = t;
            this.__s(t, ["height", "width", "x", "y"], [108, 193, 788, 166]);
            t.viewport = this.__106_i();
            return t;
        };
        __egretProto__.__100_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.6, 0.6, "chat_title_png", 707, 0]);
            return t;
        };
        __egretProto__.soldier_10_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_10 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_10_png", 302, 215]);
            return t;
        };
        __egretProto__.soldier_11_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_11 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_11_png", 421, 214]);
            return t;
        };
        __egretProto__.soldier_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_1 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_1_png", 28, -7]);
            return t;
        };
        __egretProto__.soldier_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_2 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_2_png", 28, 102]);
            return t;
        };
        __egretProto__.soldier_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_3 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_3_png", 30, 216]);
            return t;
        };
        __egretProto__.soldier_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_4 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_4_png", 177, -6]);
            return t;
        };
        __egretProto__.soldier_5_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_5 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_5_png", 300, -6]);
            return t;
        };
        __egretProto__.soldier_6_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_6 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_6_png", 421, -7]);
            return t;
        };
        __egretProto__.soldier_7_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_7 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_7_png", 210, 102]);
            return t;
        };
        __egretProto__.soldier_8_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_8 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_8_png", 391, 104]);
            return t;
        };
        __egretProto__.soldier_9_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_9 = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.23, 0.23, "knight_9_png", 175, 216]);
            return t;
        };
        __egretProto__.soldier_body_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_body = t;
            this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.65, 0.65, "knight_5_png", 577, 24]);
            return t;
        };
        __egretProto__.soldier_introduce_i = function () {
            var t = new egret.gui.Label();
            this.soldier_introduce = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 35, 24, "士兵描述", "center", 0xF2E606, "middle", 350, 638, 66]);
            return t;
        };
        __egretProto__.soldier_list_i = function () {
            var t = new egret.gui.Scroller();
            this.soldier_list = t;
            this.__s(t, ["height", "width", "x", "y"], [333, 541, 12, 2]);
            t.viewport = this.__98_i();
            return t;
        };
        __egretProto__.soldier_name_i = function () {
            var t = new egret.gui.Label();
            this.soldier_name = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, "Arial", 34, 28, "转职介绍", "center", 0x000000, "middle", 145, 740, 7]);
            return t;
        };
        __egretProto__.soldier_select_10_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_10 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 290, 224]);
            return t;
        };
        __egretProto__.soldier_select_11_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_11 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 410, 224]);
            return t;
        };
        __egretProto__.soldier_select_1_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_1 = t;
            this.__s(t, ["height", "source", "visible", "width", "x", "y"], [100, "job_bg_sel_png", false, 100, 18, 2]);
            return t;
        };
        __egretProto__.soldier_select_2_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_2 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 18, 111]);
            return t;
        };
        __egretProto__.soldier_select_3_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_3 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 18, 224]);
            return t;
        };
        __egretProto__.soldier_select_4_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_4 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 166, 2]);
            return t;
        };
        __egretProto__.soldier_select_5_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_5 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 290, 2]);
            return t;
        };
        __egretProto__.soldier_select_6_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_6 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 410, 2]);
            return t;
        };
        __egretProto__.soldier_select_7_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_7 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 200, 111]);
            return t;
        };
        __egretProto__.soldier_select_8_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_8 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 380, 111]);
            return t;
        };
        __egretProto__.soldier_select_9_i = function () {
            var t = new egret.gui.UIAsset();
            this.soldier_select_9 = t;
            this.__s(t, ["source", "visible", "width", "x", "y"], ["job_bg_sel_png", false, 100, 166, 224]);
            return t;
        };
        __egretProto__.start_battle_btn_i = function () {
            var t = new egret.gui.Button();
            this.start_battle_btn = t;
            this.__s(t, ["enabled", "height", "label", "skinName", "x", "y"], [true, 71, "进入副本", skins.BtnGreenLargeSkin, 865, 257]);
            return t;
        };
        __egretProto__.team_list_group_i = function () {
            var t = new egret.gui.Group();
            this.team_list_group = t;
            this.__s(t, ["height", "visible", "width", "x", "y"], [339, false, 1091, 0, 0]);
            t.elementsContent = [this.team_list_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.create_team_btn_i()];
            return t;
        };
        __egretProto__.team_list_i = function () {
            var t = new egret.gui.Scroller();
            this.team_list = t;
            this.__s(t, ["height", "width", "x", "y"], [205, 900, 90, 61]);
            t.viewport = this.__7_i();
            return t;
        };
        UIJobHomeViewSkin._skinParts = ["hint_label", "team_list", "create_team_btn", "team_list_group", "members_list", "start_battle_btn", "dismiss_btn", "kick_out_btn", "look_btn", "exit_btn", "member_list_group", "job_team_group", "select_soldier_btn", "doJob_btn", "select_jobCard_btn", "doJob_before_body_frame", "doJob_before_name_frame", "doJob_later_body_frame", "doJob_later_name_frame", "doJob_skill_scroller", "doJob_before_body", "doJob_before_body_mask", "doJob_later_body", "doJob_before_name", "doJob_later_name", "doJob_before_level", "doJob_to_label", "doJob_before_atk_num_panel", "doJob_before_def_num_panel", "doJob_before_hp_num_panel", "doJob_before_atk_num", "doJob_before_def_num", "doJob_before_hp_num", "doJob_later_atk_num_panel", "doJob_later_def_num_panel", "doJob_later_hp_num_panel", "doJob_later_atk_num", "doJob_later_def_num", "doJob_later_hp_num", "job_dojob_group", "hero_select_1", "hero_select_2", "hero_select_3", "hero_select_4", "hero_select_5", "hero_select_6", "hero_select_7", "hero_select_8", "hero_select_9", "hero_select_10", "hero_select_11", "hero_1", "hero_2", "hero_3", "hero_4", "hero_5", "hero_6", "hero_7", "hero_8", "hero_9", "hero_10", "hero_11", "hero_list", "hero_name", "hero_introduce", "hero_body", "hero_skill_scroller", "init_panel_hero", "job_hero_group", "soldier_select_1", "soldier_select_2", "soldier_select_3", "soldier_select_4", "soldier_select_5", "soldier_select_6", "soldier_select_7", "soldier_select_8", "soldier_select_9", "soldier_select_10", "soldier_select_11", "soldier_1", "soldier_2", "soldier_3", "soldier_4", "soldier_5", "soldier_6", "soldier_7", "soldier_8", "soldier_9", "soldier_10", "soldier_11", "soldier_list", "soldier_name", "soldier_body", "soldier_introduce", "skill_scroller", "init_panel", "job_soldier_group", "job_team_btn", "job_dojob_btn", "job_hero_btn", "job_soldier", "job_tab_btn_bg"];
        return UIJobHomeViewSkin;
    })(egret.gui.Skin);
    skins.UIJobHomeViewSkin = UIJobHomeViewSkin;
    UIJobHomeViewSkin.prototype.__class__ = "skins.UIJobHomeViewSkin";
})(skins || (skins = {}));
