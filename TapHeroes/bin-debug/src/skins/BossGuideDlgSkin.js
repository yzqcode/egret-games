var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var BossGuideDlgSkin = (function (_super) {
        __extends(BossGuideDlgSkin, _super);
        function BossGuideDlgSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.labelFightBoss_i(), this.iconClose_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(BossGuideDlgSkin.prototype, "skinParts", {
            get: function () {
                return BossGuideDlgSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        BossGuideDlgSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [236, -4, egret.Rectangle(84,30,77,186), "背弹底", -139, 392]);
            return t;
        };
        BossGuideDlgSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 172, -7, egret.Rectangle(15,14,18,20), "背弹框底", -127, 326]);
            return t;
        };
        BossGuideDlgSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 36, 113, 23, "按钮", 0xFFFFFF, "middle", -118, 58]);
            return t;
        };
        BossGuideDlgSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 36, -75, 23, "可重新挑战。", 0xFFFFFF, "middle", -85, 168]);
            return t;
        };
        BossGuideDlgSkin.prototype.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "maxDisplayedLines", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 38, -3, 2, 18, "妖王逃跑了，现在进入无限刷怪模式。", 0xFFFFFF, "middle", -168, 312]);
            return t;
        };
        BossGuideDlgSkin.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["Arial", 36, -99, 23, "点击右上角", "right", 0xFFFFFF, "middle", -119, 120]);
            return t;
        };
        BossGuideDlgSkin.prototype.iconClose_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconClose = t;
            this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [30, 160, "叉", -226, 30]);
            return t;
        };
        BossGuideDlgSkin.prototype.labelFightBoss_i = function () {
            var t = new egret.gui.Label();
            this.labelFightBoss = t;
            this.__s(t, ["fontFamily", "height", "horizontalCenter", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width"], ["Arial", 32, 22, 1, 28, "挑战妖王", "center", 16723759, false, "middle", -120, 118]);
            return t;
        };
        BossGuideDlgSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0]);
            return t;
        };
        BossGuideDlgSkin._skinParts = ["labelFightBoss", "iconClose"];
        return BossGuideDlgSkin;
    })(egret.gui.Skin);
    skins.BossGuideDlgSkin = BossGuideDlgSkin;
    BossGuideDlgSkin.prototype.__class__ = "skins.BossGuideDlgSkin";
})(skins || (skins = {}));
