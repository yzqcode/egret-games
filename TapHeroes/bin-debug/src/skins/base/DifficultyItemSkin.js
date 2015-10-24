var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var base;
    (function (base) {
        var DifficultyItemSkin = (function (_super) {
            __extends(DifficultyItemSkin, _super);
            function DifficultyItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.iconRankBg_i(), this.__3_i(), this.difficulty_number_text_i(), this.difficuty_name_text_i(), this.kill_header_text_i(), this.boss_icon_i(), this.kill_number_text_i(), this.fight_btn_i(), this.fight_text_i(), this.award_header_text_i(), this.award_icon_2_i(), this.award_icon_1_i(), this.award_text_1_i(), this.award_text_2_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(DifficultyItemSkin.prototype, "skinParts", {
                get: function () {
                    return DifficultyItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            DifficultyItemSkin.prototype.award_header_text_i = function () {
                var t = new egret.gui.Label();
                this.award_header_text = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["Arial", 20, "奖励", "center", 0xFFFFFF, 55, 142, 50]);
                return t;
            };
            DifficultyItemSkin.prototype.award_icon_1_i = function () {
                var t = new egret.gui.UIAsset();
                this.award_icon_1 = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [29, 199, "仙桃", 46, 29]);
                return t;
            };
            DifficultyItemSkin.prototype.award_icon_2_i = function () {
                var t = new egret.gui.UIAsset();
                this.award_icon_2 = t;
                this.__s(t, ["height", "left", "source", "top", "width"], [29, 295, "钻石", 46, 29]);
                return t;
            };
            DifficultyItemSkin.prototype.award_text_1_i = function () {
                var t = new egret.gui.Label();
                this.award_text_1 = t;
                this.__s(t, ["fontFamily", "height", "left", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], ["Arial", 24, 227, 18, "x????", "center", 0xFFFFFF, 50, "middle", 65]);
                return t;
            };
            DifficultyItemSkin.prototype.award_text_2_i = function () {
                var t = new egret.gui.Label();
                this.award_text_2 = t;
                this.__s(t, ["fontFamily", "height", "left", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], ["Arial", 24, 328, 18, "x????", "center", 0xFFFFFF, 50, "middle", 63]);
                return t;
            };
            DifficultyItemSkin.prototype.boss_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.boss_icon = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [32, "妖怪图标", false, 40, 232, 44]);
                return t;
            };
            DifficultyItemSkin.prototype.difficulty_number_text_i = function () {
                var t = new egret.gui.Label();
                this.difficulty_number_text = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["Arial", 20, "第八十一难", "center", 5263440, 105, 17, 33]);
                return t;
            };
            DifficultyItemSkin.prototype.difficuty_name_text_i = function () {
                var t = new egret.gui.Label();
                this.difficuty_name_text = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["Arial", 20, "金蝉遭难", "center", 5263440, 105, 17, 64]);
                return t;
            };
            DifficultyItemSkin.prototype.fight_btn_i = function () {
                var t = new egret.gui.UIAsset();
                this.fight_btn = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [52, "fight_btn_gray_png", 122, 410, 32]);
                return t;
            };
            DifficultyItemSkin.prototype.fight_text_i = function () {
                var t = new egret.gui.Label();
                this.fight_text = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 25, "挑战", "center", 5263440, false, 105, 419, 45]);
                return t;
            };
            DifficultyItemSkin.prototype.iconRankBg_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconRankBg = t;
                this.__s(t, ["height", "scale9Grid", "source", "touchEnabled", "width", "x", "y"], [110, egret.Rectangle(90,20,120,65), "rank_bg_2_png", true, 554, 0, 2]);
                return t;
            };
            DifficultyItemSkin.prototype.kill_header_text_i = function () {
                var t = new egret.gui.Label();
                this.kill_header_text = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "visible", "width", "x", "y"], ["Arial", 20, "杀妖", "center", 16777215, false, 55, 166, 49]);
                return t;
            };
            DifficultyItemSkin.prototype.kill_number_text_i = function () {
                var t = new egret.gui.Label();
                this.kill_number_text = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "visible", "width", "x", "y"], ["Arial", 20, "x999", "center", 0xFFFFFF, false, 82, 282, 49]);
                return t;
            };
            DifficultyItemSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "height", "right", "scale9Grid", "source", "top", "width"], [0.5, 47, 151, egret.Rectangle(15,14,18,20), "背弹框底", 36, 272]);
                return t;
            };
            DifficultyItemSkin._skinParts = ["iconRankBg", "difficulty_number_text", "difficuty_name_text", "kill_header_text", "boss_icon", "kill_number_text", "fight_btn", "fight_text", "award_header_text", "award_icon_2", "award_icon_1", "award_text_1", "award_text_2"];
            return DifficultyItemSkin;
        })(egret.gui.Skin);
        base.DifficultyItemSkin = DifficultyItemSkin;
        DifficultyItemSkin.prototype.__class__ = "skins.base.DifficultyItemSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
