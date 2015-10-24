var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HeroDetailDlgSkin = (function (_super) {
        __extends(HeroDetailDlgSkin, _super);
        function HeroDetailDlgSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.iconClose_i(), this.__5_i(), this.__6_i(), this.iconHero_i(), this.labelHeroName_i(), this.__7_i(), this.labelHeroDesc_i(), this.labelHeroLevel_i(), this.__8_i(), this.labelHeroDamage_i(), this.scrollSkillList_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(HeroDetailDlgSkin.prototype, "skinParts", {
            get: function () {
                return HeroDetailDlgSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HeroDetailDlgSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [100, 5, 5, egret.Rectangle(84,30,77,186), "背弹底", 80]);
            return t;
        };
        HeroDetailDlgSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "left", "right", "scale9Grid", "source", "top"], [115, 30, 30, egret.Rectangle(15,14,18,20), "背弹框底", 217]);
            return t;
        };
        HeroDetailDlgSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top"], [0.2, 120, 30, 30, egret.Rectangle(15,14,18,20), "背弹框底", 354]);
            return t;
        };
        HeroDetailDlgSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "left", "size", "text", "textColor", "top", "verticalAlign", "width"], ["Arial", 29, 126, 20, "等级:", 0xFFFFFF, 144, "middle", 59]);
            return t;
        };
        HeroDetailDlgSkin.prototype.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "left", "size", "text", "textColor", "top", "verticalAlign", "width"], ["Arial", 29, 126, 20, "每秒伤害:", 0xFFFFFF, 173, "middle", 95]);
            return t;
        };
        HeroDetailDlgSkin.prototype.__9_i = function () {
            var t = new egret.gui.VerticalLayout();
            return t;
        };
        HeroDetailDlgSkin.prototype.groupSkillList_i = function () {
            var t = new egret.gui.Group();
            this.groupSkillList = t;
            t.layout = this.__9_i();
            return t;
        };
        HeroDetailDlgSkin.prototype.iconClose_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconClose = t;
            this.__s(t, ["height", "right", "source", "top", "width"], [44, 30, "叉", 102, 44]);
            return t;
        };
        HeroDetailDlgSkin.prototype.iconHero_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconHero = t;
            this.__s(t, ["height", "left", "source", "top", "width"], [82, 31, "天将1", 115, 82]);
            return t;
        };
        HeroDetailDlgSkin.prototype.labelHeroDamage_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroDamage = t;
            this.__s(t, ["fontFamily", "height", "left", "size", "text", "textColor", "top", "verticalAlign", "width"], ["Arial", 29, 224, 20, "????????", 16746496, 173, "middle", 272]);
            return t;
        };
        HeroDetailDlgSkin.prototype.labelHeroDesc_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroDesc = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textColor", "top", "verticalAlign"], ["Arial", 85, 54, 3, 49, 20, "??", 0xFFFFFF, 230, "middle"]);
            return t;
        };
        HeroDetailDlgSkin.prototype.labelHeroLevel_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroLevel = t;
            this.__s(t, ["fontFamily", "height", "left", "size", "text", "textColor", "top", "verticalAlign", "width"], ["Arial", 29, 191, 20, "????", 5173231, 144, "middle", 169]);
            return t;
        };
        HeroDetailDlgSkin.prototype.labelHeroName_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroName = t;
            this.__s(t, ["fontFamily", "height", "left", "size", "text", "textColor", "top", "verticalAlign", "width"], ["Arial", 38, 126, 28, "??", 16777215, 110, "middle", 418]);
            return t;
        };
        HeroDetailDlgSkin.prototype.scrollSkillList_i = function () {
            var t = new egret.gui.Scroller();
            this.scrollSkillList = t;
            this.__s(t, ["bottom", "left", "right", "top"], [135, 45, 45, 371]);
            t.viewport = this.groupSkillList_i();
            return t;
        };
        HeroDetailDlgSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0]);
            return t;
        };
        HeroDetailDlgSkin._skinParts = ["iconClose", "iconHero", "labelHeroName", "labelHeroDesc", "labelHeroLevel", "labelHeroDamage", "groupSkillList", "scrollSkillList"];
        return HeroDetailDlgSkin;
    })(egret.gui.Skin);
    skins.HeroDetailDlgSkin = HeroDetailDlgSkin;
    HeroDetailDlgSkin.prototype.__class__ = "skins.HeroDetailDlgSkin";
})(skins || (skins = {}));
