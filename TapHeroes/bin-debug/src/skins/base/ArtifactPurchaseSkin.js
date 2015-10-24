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
        var ArtifactPurchaseSkin = (function (_super) {
            __extends(ArtifactPurchaseSkin, _super);
            function ArtifactPurchaseSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.iconArtifactPic_i(), this.__4_i(), this.__5_i(), this.btnBuy_i(), this.labePeachFee_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(ArtifactPurchaseSkin.prototype, "skinParts", {
                get: function () {
                    return ArtifactPurchaseSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ArtifactPurchaseSkin.prototype.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 30, 1, 27, "购买法宝", 16777215, true, 317, 114, 23]);
                return t;
            };
            ArtifactPurchaseSkin.prototype.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 20, "法宝能够使你飘飘欲仙", 10395294, true, 318, 117, 69]);
                return t;
            };
            ArtifactPurchaseSkin.prototype.btnBuy_i = function () {
                var t = new egret.gui.Button();
                this.btnBuy = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.base.BtnArtifactBlueSkin, 444, 16]);
                return t;
            };
            ArtifactPurchaseSkin.prototype.iconArtifactPic_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconArtifactPic = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["法宝_购买", true, 23, 13]);
                return t;
            };
            ArtifactPurchaseSkin.prototype.labePeachFee_i = function () {
                var t = new egret.gui.Label();
                this.labePeachFee = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 22, 1, 18, "100", "center", 16777215, false, 74, 491, 25]);
                return t;
            };
            ArtifactPurchaseSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["拉栏框", true, 0, 0]);
                return t;
            };
            ArtifactPurchaseSkin._skinParts = ["iconArtifactPic", "btnBuy", "labePeachFee"];
            return ArtifactPurchaseSkin;
        })(egret.gui.Skin);
        base.ArtifactPurchaseSkin = ArtifactPurchaseSkin;
        ArtifactPurchaseSkin.prototype.__class__ = "skins.base.ArtifactPurchaseSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
