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
        var ArifactPurchaseSkin = (function (_super) {
            __extends(ArifactPurchaseSkin, _super);
            function ArifactPurchaseSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.btnBuy_i(), this.labePeachFee_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(ArifactPurchaseSkin.prototype, "skinParts", {
                get: function () {
                    return ArifactPurchaseSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ArifactPurchaseSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["法宝_购买", true, 23, 13]);
                return t;
            };
            ArifactPurchaseSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], [30, 1, 27, "购买法宝", 16777215, true, 317, 114, 16]);
                return t;
            };
            ArifactPurchaseSkin.prototype.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 20, "法宝能够使你飘飘欲仙", 8421504, true, 318, 117, 57]);
                return t;
            };
            ArifactPurchaseSkin.prototype.btnBuy_i = function () {
                var t = new egret.gui.Button();
                this.btnBuy = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.base.BtnArifactBlueSkin, 444, 16]);
                return t;
            };
            ArifactPurchaseSkin.prototype.labePeachFee_i = function () {
                var t = new egret.gui.Label();
                this.labePeachFee = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 22, 1, 18, "100", "center", 16777215, false, 74, 491, 23]);
                return t;
            };
            ArifactPurchaseSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["拉栏框", true, 0, 0]);
                return t;
            };
            ArifactPurchaseSkin._skinParts = ["btnBuy", "labePeachFee"];
            return ArifactPurchaseSkin;
        })(egret.gui.Skin);
        base.ArifactPurchaseSkin = ArifactPurchaseSkin;
        ArifactPurchaseSkin.prototype.__class__ = "skins.base.ArifactPurchaseSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
