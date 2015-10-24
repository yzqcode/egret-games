var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.height = 1136;
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.iconPlayerSkill1_i(), this.iconPlayerSkill2_i(), this.iconPlayerSkill4_i(), this.iconPlayerSkill3_i(), this.iconPlayerSkill5_i(), this.iconPlayerSkill6_i(), this.iconSkillRedMask1_i(), this.iconSkillMask1_i(), this.iconSkillRedMask2_i(), this.iconSkillMask2_i(), this.iconSkillRedMask3_i(), this.iconSkillMask3_i(), this.iconSkillRedMask4_i(), this.iconSkillMask4_i(), this.iconSkillRedMask5_i(), this.iconSkillMask5_i(), this.iconSkillRedMask6_i(), this.iconSkillMask6_i(), this.labelSkillTick1_i(), this.labelSkillTick2_i(), this.labelSkillTick3_i(), this.labelSkillTick4_i(), this.labelSkillTick5_i(), this.labelSkillTick6_i(), this.btn_clean_cd_i(), this.rectInfoBg_i(), this.__9_i(), this.labelAllDamage_i(), this.labelTapDamage_i(), this.labelHeroDamage_i(), this.__10_i(), this.__11_i(), this.background_color_line_i(), this.status_group_i(), this.main_frame_title_i(), this.touch_close_area_i(), this.main_frame_back_i(), this.icon_money_i(), this.label_money_i(), this.iconPeach_i(), this.labelPeachNum_i(), this.iconDiamond_i(), this.labelDiamondNum_i(), this.labelHeroDamage2_i(), this.label_dps_1_i(), this.main_scroller1_i(), this.main_scroller2_i(), this.main_scroller3_i(), this.main_scroller4_i(), this.btn_main1_i(), this.btn_main3_i(), this.btn_main2_i(), this.btn_main4_i(), this.labelStepNum_i(), this.labelStepName_i(), this.labelDifficultyNo_i(), this.labelDifficultyName_i(), this.iconSubStep_i(), this.iconMoneyBig_i(), this.time_bar_i(), this.hp_back_i(), this.hp_bar_i(), this.monster_name_i(), this.hp_label_i(), this.iconFightBoss_i(), this.labelFightBoss_i(), this.labelLeaveBoss_i(), this.iconExitDifficulty_i(), this.labelExitDifficulty_i(), this.btn_main_achievement_i(), this.btn_main_shop_i(), this.btn_main_rank_i(), this.btn_main_difficulties_i(), this.btn_main_daily_i(), this.btn_main_offline_money_i(), this.main_achievement_new_i(), this.iconHeroNew_i(), this.iconSkillNew_i(), this.protect_hero_icon_i(), this.protect_hero_tick_i(), this.fairy_group_i(), this.icon_damage100_i(), this.icon_money100_i(), this.label_speedup_time_i(), this.btn_main_speedup_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(Main.prototype, "skinParts", {
            get: function () {
                return Main._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        Main.prototype.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bottom", "size", "text", "textColor", "width", "x"], [90, 20, "天将秒伤", 16777215, 84, 537]);
            return t;
        };
        Main.prototype.__12_i = function () {
            var t = new egret.gui.VerticalLayout();
            return t;
        };
        Main.prototype.__13_i = function () {
            var t = new egret.gui.VerticalLayout();
            return t;
        };
        Main.prototype.__14_i = function () {
            var t = new egret.gui.VerticalLayout();
            return t;
        };
        Main.prototype.__15_i = function () {
            var t = new egret.gui.VerticalLayout();
            return t;
        };
        Main.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source"], [188, -258.5, "技能槽"]);
            return t;
        };
        Main.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source"], [188, -156.5, "技能槽"]);
            return t;
        };
        Main.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source"], [188, -52.5, "技能槽"]);
            return t;
        };
        Main.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source"], [188, 52.5, "技能槽"]);
            return t;
        };
        Main.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source"], [188, 154.5, "技能槽"]);
            return t;
        };
        Main.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "horizontalCenter", "source"], [188, 253.5, "技能槽"]);
            return t;
        };
        Main.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bottom", "fontFamily", "size", "text", "textAlign", "textColor", "width", "x"], [91, "Arial", 20, "当前秒伤", "center", 16777215, 175, 36]);
            return t;
        };
        Main.prototype.background_color_line_i = function () {
            var t = new egret.gui.UIAsset();
            this.background_color_line = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [81, 3, "线"]);
            return t;
        };
        Main.prototype.btn_clean_cd_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_clean_cd = t;
            this.__s(t, ["bottom", "height", "horizontalCenter", "source", "visible"], [284, 31, 1.5, "难_png", false]);
            return t;
        };
        Main.prototype.btn_main1_i = function () {
            var t = new egret.gui.ToggleButton();
            this.btn_main1 = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [3, "切换按钮", skins.base.BtnMainSkin, 1]);
            return t;
        };
        Main.prototype.btn_main2_i = function () {
            var t = new egret.gui.ToggleButton();
            this.btn_main2 = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [3, "切换按钮", skins.base.BtnMainSkin, 160]);
            return t;
        };
        Main.prototype.btn_main3_i = function () {
            var t = new egret.gui.ToggleButton();
            this.btn_main3 = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [3, "切换按钮", skins.base.BtnMainSkin, 320]);
            return t;
        };
        Main.prototype.btn_main4_i = function () {
            var t = new egret.gui.ToggleButton();
            this.btn_main4 = t;
            this.__s(t, ["bottom", "label", "skinName", "x"], [3, "切换按钮", skins.base.BtnMainSkin, 480]);
            return t;
        };
        Main.prototype.btn_main_achievement_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_main_achievement = t;
            this.__s(t, ["left", "source", "top"], [94, "成就小", 7]);
            return t;
        };
        Main.prototype.btn_main_daily_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_main_daily = t;
            this.__s(t, ["right", "source", "top", "visible", "width"], [25, "award_png", 228, false, 77]);
            return t;
        };
        Main.prototype.btn_main_difficulties_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_main_difficulties = t;
            this.__s(t, ["right", "source", "top", "width"], [22, "难_png", 239, 77]);
            return t;
        };
        Main.prototype.btn_main_offline_money_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_main_offline_money = t;
            this.__s(t, ["source", "top", "visible", "x"], ["元宝领取按钮", 150, false, 17]);
            return t;
        };
        Main.prototype.btn_main_rank_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_main_rank = t;
            this.__s(t, ["left", "source", "top"], [20, "rank_title_png", 83]);
            return t;
        };
        Main.prototype.btn_main_shop_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_main_shop = t;
            this.__s(t, ["left", "source", "top", "x", "y"], [20, "商城", 12, 10, 10]);
            return t;
        };
        Main.prototype.btn_main_speedup_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_main_speedup = t;
            this.__s(t, ["right", "source", "top"], [21, "礼_png", 159]);
            return t;
        };
        Main.prototype.fairy_group_i = function () {
            var t = new egret.gui.Group();
            this.fairy_group = t;
            this.__s(t, ["height", "top", "visible", "width", "x"], [133, 160, false, 139, 501]);
            t.elementsContent = [this.fairy_icon_i(), this.fairy_text_i()];
            return t;
        };
        Main.prototype.fairy_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.fairy_icon = t;
            this.__s(t, ["right", "source", "y"], [46, "元宝", 28]);
            return t;
        };
        Main.prototype.fairy_text_i = function () {
            var t = new egret.gui.Label();
            this.fairy_text = t;
            this.__s(t, ["fontFamily", "height", "right", "size", "text", "textAlign", "width", "y"], ["Arial", 38, 0, 24, "+3456.45兆", "center", 140, 74]);
            return t;
        };
        Main.prototype.hp_back_i = function () {
            var t = new egret.gui.UIAsset();
            this.hp_back = t;
            this.__s(t, ["horizontalCenter", "scale9Grid", "source", "top", "touchEnabled"], [0, egret.Rectangle(0,3,298,25), "血条底", 100, false]);
            return t;
        };
        Main.prototype.hp_bar_i = function () {
            var t = new egret.gui.UIAsset();
            this.hp_bar = t;
            this.__s(t, ["autoScale", "left", "scale9Grid", "source", "top", "touchEnabled"], [false, 171, egret.Rectangle(25,3,239,25), "血条", 100, false]);
            return t;
        };
        Main.prototype.hp_label_i = function () {
            var t = new egret.gui.Label();
            this.hp_label = t;
            this.__s(t, ["bold", "fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "top", "touchEnabled", "verticalAlign", "width", "x"], [true, "Arial", 21, 1, 20, "4.37w", "right", 0, 104, false, "middle", 193, 270]);
            return t;
        };
        Main.prototype.iconDiamond_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconDiamond = t;
            this.__s(t, ["bottom", "source", "visible", "x"], [425, "钻石", false, 465]);
            return t;
        };
        Main.prototype.iconExitDifficulty_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconExitDifficulty = t;
            this.__s(t, ["height", "right", "source", "top", "visible", "width"], [56, 493, "挑战妖王按钮", 39, false, 128]);
            return t;
        };
        Main.prototype.iconFightBoss_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconFightBoss = t;
            this.__s(t, ["height", "right", "source", "top", "visible", "width"], [56, 22, "挑战妖王按钮", 23, false, 128]);
            return t;
        };
        Main.prototype.iconHeroNew_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconHeroNew = t;
            this.__s(t, ["height", "source", "visible", "width", "x", "y"], [48, "新", false, 56, 182, 1088]);
            return t;
        };
        Main.prototype.iconMoneyBig_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconMoneyBig = t;
            this.__s(t, ["horizontalCenter", "source", "top", "touchEnabled"], [-93, "元宝", 144, false]);
            return t;
        };
        Main.prototype.iconPeach_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconPeach = t;
            this.__s(t, ["bottom", "source", "visible", "x"], [427, "仙桃", false, 465]);
            return t;
        };
        Main.prototype.iconPlayerSkill1_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconPlayerSkill1 = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [189, -256.5, "猴子技能1"]);
            return t;
        };
        Main.prototype.iconPlayerSkill2_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconPlayerSkill2 = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [190, -154.5, "猴子技能2"]);
            return t;
        };
        Main.prototype.iconPlayerSkill3_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconPlayerSkill3 = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [190, -50.5, "猴子技能3"]);
            return t;
        };
        Main.prototype.iconPlayerSkill4_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconPlayerSkill4 = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [190, 55.5, "猴子技能4"]);
            return t;
        };
        Main.prototype.iconPlayerSkill5_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconPlayerSkill5 = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [189, 155.5, "猴子技能5"]);
            return t;
        };
        Main.prototype.iconPlayerSkill6_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconPlayerSkill6 = t;
            this.__s(t, ["bottom", "horizontalCenter", "source"], [191, 257.5, "猴子技能6"]);
            return t;
        };
        Main.prototype.iconSkillMask1_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillMask1 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, -257.5, "圆形遮挡", false]);
            return t;
        };
        Main.prototype.iconSkillMask2_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillMask2 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, -154.5, "圆形遮挡", false]);
            return t;
        };
        Main.prototype.iconSkillMask3_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillMask3 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, -50.5, "圆形遮挡", false]);
            return t;
        };
        Main.prototype.iconSkillMask4_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillMask4 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, 54.5, "圆形遮挡", false]);
            return t;
        };
        Main.prototype.iconSkillMask5_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillMask5 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, 156.5, "圆形遮挡", false]);
            return t;
        };
        Main.prototype.iconSkillMask6_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillMask6 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, 257.5, "圆形遮挡", false]);
            return t;
        };
        Main.prototype.iconSkillNew_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillNew = t;
            this.__s(t, ["height", "source", "visible", "width", "x", "y"], [48, "新", false, 56, -6, 1088]);
            return t;
        };
        Main.prototype.iconSkillRedMask1_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillRedMask1 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, -257.5, "圆形遮挡红", false]);
            return t;
        };
        Main.prototype.iconSkillRedMask2_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillRedMask2 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, -154.5, "圆形遮挡红", false]);
            return t;
        };
        Main.prototype.iconSkillRedMask3_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillRedMask3 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, -50.5, "圆形遮挡红", false]);
            return t;
        };
        Main.prototype.iconSkillRedMask4_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillRedMask4 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, 54.5, "圆形遮挡红", false]);
            return t;
        };
        Main.prototype.iconSkillRedMask5_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillRedMask5 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, 156.5, "圆形遮挡红", false]);
            return t;
        };
        Main.prototype.iconSkillRedMask6_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSkillRedMask6 = t;
            this.__s(t, ["alpha", "bottom", "horizontalCenter", "source", "touchEnabled"], [0.7, 190, 257.5, "圆形遮挡红", false]);
            return t;
        };
        Main.prototype.iconSubStep_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconSubStep = t;
            this.__s(t, ["right", "source", "top", "touchEnabled"], [127, "妖怪图标", 37, false]);
            return t;
        };
        Main.prototype.icon_damage100_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_damage100 = t;
            this.__s(t, ["height", "right", "source", "top", "visible", "width"], [76, 11, "攻击100_png", 53, false, 87]);
            return t;
        };
        Main.prototype.icon_money100_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_money100 = t;
            this.__s(t, ["height", "right", "source", "top", "visible", "width"], [75, 66, "金币100_png", 54, false, 86]);
            return t;
        };
        Main.prototype.icon_money_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_money = t;
            this.__s(t, ["bottom", "source", "visible", "x"], [429, "元宝小", false, 465]);
            return t;
        };
        Main.prototype.labelAllDamage_i = function () {
            var t = new egret.gui.Label();
            this.labelAllDamage = t;
            this.__s(t, ["bottom", "fontFamily", "text", "textAlign", "width", "x"], [124, "Arial", "2", "center", 249, 2]);
            return t;
        };
        Main.prototype.labelDiamondNum_i = function () {
            var t = new egret.gui.Label();
            this.labelDiamondNum = t;
            this.__s(t, ["bottom", "fontFamily", "maxDisplayedLines", "size", "text", "touchEnabled", "verticalAlign", "visible", "width", "x"], [427, "Arial", 1, 26, "0", false, "middle", false, 118, 505]);
            return t;
        };
        Main.prototype.labelDifficultyName_i = function () {
            var t = new egret.gui.Label();
            this.labelDifficultyName = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "top", "touchEnabled", "verticalAlign", "visible", "width"], ["Arial", 45, -2, 30, 3, 0x000000, "八十一难", "center", 0xFFFFFF, 45, false, "middle", false, 260]);
            return t;
        };
        Main.prototype.labelDifficultyNo_i = function () {
            var t = new egret.gui.Label();
            this.labelDifficultyNo = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "top", "touchEnabled", "verticalAlign", "visible", "width"], ["Arial", 35, -3, 25, 3, 0x000000, "第10难", "center", 0xFFFFFF, 16, false, "middle", false, 152]);
            return t;
        };
        Main.prototype.labelExitDifficulty_i = function () {
            var t = new egret.gui.Label();
            this.labelExitDifficulty = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "top", "touchEnabled", "verticalAlign", "visible"], ["Arial", 29, 33, 1, 506, 22, "退出挑战", "center", 0xFFFFFF, 52, false, "middle", false]);
            return t;
        };
        Main.prototype.labelFightBoss_i = function () {
            var t = new egret.gui.Label();
            this.labelFightBoss = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "top", "touchEnabled", "verticalAlign", "visible"], ["Arial", 29, 504, 1, 35, 22, "挑战妖王", "center", 16777215, 36, false, "middle", false]);
            return t;
        };
        Main.prototype.labelHeroDamage2_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroDamage2 = t;
            this.__s(t, ["bottom", "fontFamily", "size", "text", "textColor", "visible", "width", "x"], [427, "Arial", 24, "4", 16746496, false, 194, 117]);
            return t;
        };
        Main.prototype.labelHeroDamage_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroDamage = t;
            this.__s(t, ["bottom", "fontFamily", "text", "textAlign", "width", "x"], [87, "Arial", "1", "center", 262, 273]);
            return t;
        };
        Main.prototype.labelLeaveBoss_i = function () {
            var t = new egret.gui.Label();
            this.labelLeaveBoss = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "top", "touchEnabled", "verticalAlign", "visible"], ["Arial", 29, 504, 1, 35, 22, "逃跑", "center", 0xFFFFFF, 36, false, "middle", false]);
            return t;
        };
        Main.prototype.labelPeachNum_i = function () {
            var t = new egret.gui.Label();
            this.labelPeachNum = t;
            this.__s(t, ["bottom", "fontFamily", "maxDisplayedLines", "size", "text", "touchEnabled", "verticalAlign", "visible", "width", "x"], [427, "Arial", 1, 26, "0", false, "middle", false, 125, 498]);
            return t;
        };
        Main.prototype.labelSkillTick1_i = function () {
            var t = new egret.gui.Label();
            this.labelSkillTick1 = t;
            this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled"], [222, "Arial", -255.5, 18, "00:00", 16777215, false]);
            return t;
        };
        Main.prototype.labelSkillTick2_i = function () {
            var t = new egret.gui.Label();
            this.labelSkillTick2 = t;
            this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled"], [222, "Arial", -153.5, 18, "00:00", 0xFFFFFF, false]);
            return t;
        };
        Main.prototype.labelSkillTick3_i = function () {
            var t = new egret.gui.Label();
            this.labelSkillTick3 = t;
            this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled"], [222, "Arial", -49.5, 18, "00:00", 0xFFFFFF, false]);
            return t;
        };
        Main.prototype.labelSkillTick4_i = function () {
            var t = new egret.gui.Label();
            this.labelSkillTick4 = t;
            this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled"], [222, "Arial", 56.5, 18, "00:00", 0xFFFFFF, false]);
            return t;
        };
        Main.prototype.labelSkillTick5_i = function () {
            var t = new egret.gui.Label();
            this.labelSkillTick5 = t;
            this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled"], [222, "Arial", 157.5, 18, "00:00", 0xFFFFFF, false]);
            return t;
        };
        Main.prototype.labelSkillTick6_i = function () {
            var t = new egret.gui.Label();
            this.labelSkillTick6 = t;
            this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textColor", "touchEnabled"], [222, "Arial", 257.5, 18, "00:00", 0xFFFFFF, false]);
            return t;
        };
        Main.prototype.labelStepName_i = function () {
            var t = new egret.gui.Label();
            this.labelStepName = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "top", "touchEnabled", "verticalAlign", "width"], ["Arial", 45, -2, 30, 3, 0, "花果山", "center", 16777215, 45, false, "middle", 260]);
            return t;
        };
        Main.prototype.labelStepNum_i = function () {
            var t = new egret.gui.Label();
            this.labelStepNum = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "top", "touchEnabled", "verticalAlign", "width"], ["Arial", 35, -3, 25, 3, 0, "第10回", "center", 16777215, 16, false, "middle", 152]);
            return t;
        };
        Main.prototype.labelTapDamage_i = function () {
            var t = new egret.gui.Label();
            this.labelTapDamage = t;
            this.__s(t, ["bottom", "fontFamily", "text", "textAlign", "width", "x"], [137, "Arial", "2", "center", 262, 273]);
            return t;
        };
        Main.prototype.label_dps_1_i = function () {
            var t = new egret.gui.Label();
            this.label_dps_1 = t;
            this.__s(t, ["bottom", "fontFamily", "size", "text", "visible", "width", "x"], [430, "Arial", 20, "每秒伤害:", false, 103, 16]);
            return t;
        };
        Main.prototype.label_money_i = function () {
            var t = new egret.gui.Label();
            this.label_money = t;
            this.__s(t, ["bottom", "fontFamily", "maxDisplayedLines", "size", "text", "touchEnabled", "verticalAlign", "visible", "width", "x"], [427, "Arial", 1, 26, "0", false, "middle", false, 118, 505]);
            return t;
        };
        Main.prototype.label_speedup_time_i = function () {
            var t = new egret.gui.Label();
            this.label_speedup_time = t;
            this.__s(t, ["fontFamily", "right", "size", "text", "textAlign", "top", "visible", "width"], ["Arial", 34, 20, "24:32", "center", 124, false, 93]);
            return t;
        };
        Main.prototype.main_achievement_new_i = function () {
            var t = new egret.gui.UIAsset();
            this.main_achievement_new = t;
            this.__s(t, ["left", "source", "top", "visible"], [126, "叹号", 6, false]);
            return t;
        };
        Main.prototype.main_frame_back_i = function () {
            var t = new egret.gui.UIAsset();
            this.main_frame_back = t;
            this.__s(t, ["bottom", "height", "scale9Grid", "source", "visible", "width", "x"], [0, 418, egret.Rectangle(6,6,6,12), "框底", false, 640, 0]);
            return t;
        };
        Main.prototype.main_frame_title_i = function () {
            var t = new egret.gui.UIAsset();
            this.main_frame_title = t;
            this.__s(t, ["bottom", "source", "visible", "x"], [407, "拉栏顶框", false, 0]);
            return t;
        };
        Main.prototype.main_scroller1_i = function () {
            var t = new egret.gui.Scroller();
            this.main_scroller1 = t;
            this.__s(t, ["bottom", "height", "visible", "width", "x"], [65, 347, false, 628, 5]);
            t.viewport = this.main_scroller_group_i();
            return t;
        };
        Main.prototype.main_scroller2_i = function () {
            var t = new egret.gui.Scroller();
            this.main_scroller2 = t;
            this.__s(t, ["bottom", "height", "visible", "width", "x"], [65, 347, false, 628, 5]);
            t.viewport = this.main_scroller_group1_i();
            return t;
        };
        Main.prototype.main_scroller3_i = function () {
            var t = new egret.gui.Scroller();
            this.main_scroller3 = t;
            this.__s(t, ["bottom", "height", "visible", "width", "x"], [65, 347, false, 628, 5]);
            t.viewport = this.main_scroller_group2_i();
            return t;
        };
        Main.prototype.main_scroller4_i = function () {
            var t = new egret.gui.Scroller();
            this.main_scroller4 = t;
            this.__s(t, ["bottom", "height", "visible", "width", "x"], [65, 347, false, 628, 5]);
            t.viewport = this.main_scroller_group0_i();
            return t;
        };
        Main.prototype.main_scroller_group0_i = function () {
            var t = new egret.gui.Group();
            this.main_scroller_group0 = t;
            t.height = 364;
            t.layout = this.__15_i();
            return t;
        };
        Main.prototype.main_scroller_group1_i = function () {
            var t = new egret.gui.Group();
            this.main_scroller_group1 = t;
            t.height = 364;
            t.layout = this.__13_i();
            return t;
        };
        Main.prototype.main_scroller_group2_i = function () {
            var t = new egret.gui.Group();
            this.main_scroller_group2 = t;
            t.height = 364;
            t.layout = this.__14_i();
            return t;
        };
        Main.prototype.main_scroller_group_i = function () {
            var t = new egret.gui.Group();
            this.main_scroller_group = t;
            t.height = 364;
            t.layout = this.__12_i();
            return t;
        };
        Main.prototype.monster_name_i = function () {
            var t = new egret.gui.Label();
            this.monster_name = t;
            this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textColor", "top", "touchEnabled", "verticalAlign", "width", "x"], [true, "Arial", 21, 20, "方指导", 0, 104, false, "middle", 133, 180]);
            return t;
        };
        Main.prototype.protect_hero_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.protect_hero_icon = t;
            this.__s(t, ["height", "right", "source", "top", "visible", "width"], [33, 128, "钻石购买_八卦阵", 98, false, 32]);
            return t;
        };
        Main.prototype.protect_hero_tick_i = function () {
            var t = new egret.gui.Label();
            this.protect_hero_tick = t;
            this.__s(t, ["fontFamily", "height", "right", "size", "text", "top", "visible", "width"], ["Arial", 26, 28, 20, "00:00:00", 102, false, 88]);
            return t;
        };
        Main.prototype.rectInfoBg_i = function () {
            var t = new egret.gui.Rect();
            this.rectInfoBg = t;
            this.__s(t, ["alpha", "bottom", "fillColor", "height", "left", "right", "strokeColor", "strokeWeight"], [0.1, 66, 0x000000, 107, 0, 0, 0x010101, 0]);
            return t;
        };
        Main.prototype.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bottom", "size", "text", "textAlign", "textColor", "width", "x"], [142, 20, "点击伤害", "right", 16777215, 84, 534]);
            return t;
        };
        Main.prototype.status_group_i = function () {
            var t = new egret.gui.Group();
            this.status_group = t;
            this.__s(t, ["bottom", "height", "visible", "width", "x"], [347, 60, false, 640, 0]);
            t.elementsContent = [this.status_icon_i(), this.status_label_i()];
            return t;
        };
        Main.prototype.status_icon_i = function () {
            var t = new egret.gui.UIAsset();
            this.status_icon = t;
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [58, "猴子技能3", 0, 58, 210]);
            return t;
        };
        Main.prototype.status_label_i = function () {
            var t = new egret.gui.Label();
            this.status_label = t;
            this.__s(t, ["fontFamily", "maxDisplayedLines", "text", "verticalCenter", "x"], ["Arial", 1, "标签", 0, 280]);
            return t;
        };
        Main.prototype.time_bar_i = function () {
            var t = new egret.gui.UIAsset();
            this.time_bar = t;
            this.__s(t, ["left", "source", "top", "visible", "width"], [175, "妖王时间条", 127, false, 291]);
            return t;
        };
        Main.prototype.touch_close_area_i = function () {
            var t = new egret.gui.Rect();
            this.touch_close_area = t;
            this.__s(t, ["bottom", "fillAlpha", "height", "strokeWeight", "visible", "width", "x"], [433, 0, 73, 0, false, 84, 555]);
            return t;
        };
        Main._skinParts = ["iconPlayerSkill1", "iconPlayerSkill2", "iconPlayerSkill4", "iconPlayerSkill3", "iconPlayerSkill5", "iconPlayerSkill6", "iconSkillRedMask1", "iconSkillMask1", "iconSkillRedMask2", "iconSkillMask2", "iconSkillRedMask3", "iconSkillMask3", "iconSkillRedMask4", "iconSkillMask4", "iconSkillRedMask5", "iconSkillMask5", "iconSkillRedMask6", "iconSkillMask6", "labelSkillTick1", "labelSkillTick2", "labelSkillTick3", "labelSkillTick4", "labelSkillTick5", "labelSkillTick6", "btn_clean_cd", "rectInfoBg", "labelAllDamage", "labelTapDamage", "labelHeroDamage", "background_color_line", "status_icon", "status_label", "status_group", "main_frame_title", "touch_close_area", "main_frame_back", "icon_money", "label_money", "iconPeach", "labelPeachNum", "iconDiamond", "labelDiamondNum", "labelHeroDamage2", "label_dps_1", "main_scroller_group", "main_scroller1", "main_scroller_group1", "main_scroller2", "main_scroller_group2", "main_scroller3", "main_scroller_group0", "main_scroller4", "btn_main1", "btn_main3", "btn_main2", "btn_main4", "labelStepNum", "labelStepName", "labelDifficultyNo", "labelDifficultyName", "iconSubStep", "iconMoneyBig", "time_bar", "hp_back", "hp_bar", "monster_name", "hp_label", "iconFightBoss", "labelFightBoss", "labelLeaveBoss", "iconExitDifficulty", "labelExitDifficulty", "btn_main_achievement", "btn_main_shop", "btn_main_rank", "btn_main_difficulties", "btn_main_daily", "btn_main_offline_money", "main_achievement_new", "iconHeroNew", "iconSkillNew", "protect_hero_icon", "protect_hero_tick", "fairy_icon", "fairy_text", "fairy_group", "icon_damage100", "icon_money100", "label_speedup_time", "btn_main_speedup"];
        return Main;
    })(egret.gui.Skin);
    skins.Main = Main;
    Main.prototype.__class__ = "skins.Main";
})(skins || (skins = {}));
