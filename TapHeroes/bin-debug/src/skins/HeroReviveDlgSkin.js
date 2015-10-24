var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var HeroReviveDlgSkin = (function (_super) {
        __extends(HeroReviveDlgSkin, _super);
        function HeroReviveDlgSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.iconClose_i(), this.__7_i(), this.iconHero_i(), this.__8_i(), this.labelHeroDesc_i(), this.labelHeroName_i(), this.__9_i(), this.labelBossName_i(), this.labelTick_i(), this.iconRevive_i(), this.__10_i(), this.labelReviveFee_i(), this.__11_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(HeroReviveDlgSkin.prototype, "skinParts", {
            get: function () {
                return HeroReviveDlgSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        HeroReviveDlgSkin.prototype.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["bold", "fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], [true, "Arial", 26, -11, 23, "复活", "center", 0xFFFFFF, false, "middle", 199, 118]);
            return t;
        };
        HeroReviveDlgSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0]);
            return t;
        };
        HeroReviveDlgSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [532, 0, egret.Rectangle(84,30,77,186), "背弹底", -10, 630]);
            return t;
        };
        HeroReviveDlgSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "width", "x", "y"], [29, "钻石", 29, 256, 722]);
            return t;
        };
        HeroReviveDlgSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 29, -84.5, 20, "英雄复活倒计时:", "right", 0xFFFFFF, "middle", 94.5, 179]);
            return t;
        };
        HeroReviveDlgSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 115, 0, egret.Rectangle(15,14,18,20), "背弹框底", 1.5, 580]);
            return t;
        };
        HeroReviveDlgSkin.prototype.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 29, -65.5, 20, "已被", "center", 0xFFFFFF, "middle", -130.5, 51]);
            return t;
        };
        HeroReviveDlgSkin.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 29, 155.5, 20, "消灭!", 0xFFFFFF, "middle", -130.5, 65]);
            return t;
        };
        HeroReviveDlgSkin.prototype.iconClose_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconClose = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [44, 267, "叉", -231, 44]);
            return t;
        };
        HeroReviveDlgSkin.prototype.iconHero_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconHero = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [82, -15, "天将1", -203, 82]);
            return t;
        };
        HeroReviveDlgSkin.prototype.iconRevive_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconRevive = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [70, -13, "按钮蓝", 186, 162]);
            return t;
        };
        HeroReviveDlgSkin.prototype.labelBossName_i = function () {
            var t = new egret.gui.Label();
            this.labelBossName = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 29, 42, 20, "穆阳宇宙无敌大坑", "center", 16746496, "middle", -130.5, 158]);
            return t;
        };
        HeroReviveDlgSkin.prototype.labelHeroDesc_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroDesc = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 85, 2.5, 3, 20, "失去英雄援助之后，你获得的黄金和攻击力都会大幅减少!", "center", 0xFFFFFF, "middle", -0.5, 537]);
            return t;
        };
        HeroReviveDlgSkin.prototype.labelHeroName_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroName = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 29, -150.5, 20, "周九妹大神", "center", 5173231, "middle", -130.5, 111]);
            return t;
        };
        HeroReviveDlgSkin.prototype.labelReviveFee_i = function () {
            var t = new egret.gui.Label();
            this.labelReviveFee = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width"], ["Arial", 22, -7, 1, 18, "30", "center", 0xFFFFFF, false, 169, 86]);
            return t;
        };
        HeroReviveDlgSkin.prototype.labelTick_i = function () {
            var t = new egret.gui.Label();
            this.labelTick = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 29, 81, 20, "??:??:??", 0xFF8800, "middle", 94.5, 140]);
            return t;
        };
        HeroReviveDlgSkin.prototype.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [29, -57.5, "钻石", 167.5, 29]);
            return t;
        };
        HeroReviveDlgSkin._skinParts = ["iconClose", "iconHero", "labelHeroDesc", "labelHeroName", "labelBossName", "labelTick", "iconRevive", "labelReviveFee"];
        return HeroReviveDlgSkin;
    })(egret.gui.Skin);
    skins.HeroReviveDlgSkin = HeroReviveDlgSkin;
    HeroReviveDlgSkin.prototype.__class__ = "skins.HeroReviveDlgSkin";
})(skins || (skins = {}));
