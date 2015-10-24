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
        var ShopDiamondItemSkin = (function (_super) {
            __extends(ShopDiamondItemSkin, _super);
            function ShopDiamondItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 604;
                this.elementsContent = [this.__3_i(), this.iconDiamondPic_i(), this.labelDiamondName_i(), this.labelDiamondDes_i(), this.btnBuy_i(), this.labelDiamondFee_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(ShopDiamondItemSkin.prototype, "skinParts", {
                get: function () {
                    return ShopDiamondItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ShopDiamondItemSkin.prototype.btnBuy_i = function () {
                var t = new egret.gui.Button();
                this.btnBuy = t;
                this.__s(t, ["label", "right", "skinName", "y"], ["按钮", 23, skins.base.BtnShopBlueSkin, 16]);
                return t;
            };
            ShopDiamondItemSkin.prototype.iconDiamondPic_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDiamondPic = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["钻石1", true, 23, 13]);
                return t;
            };
            ShopDiamondItemSkin.prototype.labelDiamondDes_i = function () {
                var t = new egret.gui.Label();
                this.labelDiamondDes = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 20, "额外赠送 ?? 钻石", 10461087, true, 318, 117, 67]);
                return t;
            };
            ShopDiamondItemSkin.prototype.labelDiamondFee_i = function () {
                var t = new egret.gui.Label();
                this.labelDiamondFee = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "y"], ["Arial", 22, 1, 66, 18, "￥100", "center", 16777215, false, 74, 26]);
                return t;
            };
            ShopDiamondItemSkin.prototype.labelDiamondName_i = function () {
                var t = new egret.gui.Label();
                this.labelDiamondName = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 30, 1, 27, "?? 钻石", 16777215, true, 317, 114, 22]);
                return t;
            };
            ShopDiamondItemSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "width", "x", "y"], ["拉栏框", true, 600, 0, 0]);
                return t;
            };
            ShopDiamondItemSkin._skinParts = ["iconDiamondPic", "labelDiamondName", "labelDiamondDes", "btnBuy", "labelDiamondFee"];
            return ShopDiamondItemSkin;
        })(egret.gui.Skin);
        base.ShopDiamondItemSkin = ShopDiamondItemSkin;
        ShopDiamondItemSkin.prototype.__class__ = "skins.base.ShopDiamondItemSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
