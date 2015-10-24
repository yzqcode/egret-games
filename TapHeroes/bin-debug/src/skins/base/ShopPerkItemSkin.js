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
        var ShopPerkItemSkin = (function (_super) {
            __extends(ShopPerkItemSkin, _super);
            function ShopPerkItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.iconPerkPic_i(), this.labelPerkName_i(), this.labelPerkDes_i(), this.btnUsePerk_i(), this.labelPerkFee_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(ShopPerkItemSkin.prototype, "skinParts", {
                get: function () {
                    return ShopPerkItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ShopPerkItemSkin.prototype.btnUsePerk_i = function () {
                var t = new egret.gui.Button();
                this.btnUsePerk = t;
                this.__s(t, ["label", "skinName", "verticalCenter", "x"], ["按钮", skins.base.BtnShopGreenSkin, 0.5, 444]);
                return t;
            };
            ShopPerkItemSkin.prototype.iconPerkPic_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconPerkPic = t;
                this.__s(t, ["source", "touchEnabled", "verticalCenter", "x"], ["钻石购买_钱雨", true, 3, 23]);
                return t;
            };
            ShopPerkItemSkin.prototype.labelPerkDes_i = function () {
                var t = new egret.gui.Label();
                this.labelPerkDes = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "top", "touchEnabled", "width", "x"], ["Arial", 1, 20, "钻石换元宝", 10855588, 68, true, 318, 117]);
                return t;
            };
            ShopPerkItemSkin.prototype.labelPerkFee_i = function () {
                var t = new egret.gui.Label();
                this.labelPerkFee = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "top", "touchEnabled", "width", "x"], ["Arial", 22, 1, 18, "100", "center", 16777215, 26, false, 74, 491]);
                return t;
            };
            ShopPerkItemSkin.prototype.labelPerkName_i = function () {
                var t = new egret.gui.Label();
                this.labelPerkName = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "top", "touchEnabled", "width", "x"], ["Arial", 30, 1, 27, "用元宝砸死你", 16777215, 22, true, 317, 114]);
                return t;
            };
            ShopPerkItemSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["拉栏框", true, 0, 0]);
                return t;
            };
            ShopPerkItemSkin._skinParts = ["iconPerkPic", "labelPerkName", "labelPerkDes", "btnUsePerk", "labelPerkFee"];
            return ShopPerkItemSkin;
        })(egret.gui.Skin);
        base.ShopPerkItemSkin = ShopPerkItemSkin;
        ShopPerkItemSkin.prototype.__class__ = "skins.base.ShopPerkItemSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
