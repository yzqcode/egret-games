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
        var ArtifactItemSkin = (function (_super) {
            __extends(ArtifactItemSkin, _super);
            function ArtifactItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.iconArtifactPic_i(), this.labelArtifactName_i(), this.__4_i(), this.labelArtifactLevel_i(), this.labelArtifactBuf1_i(), this.labelArtifactBuf2_i(), this.btnLevelUp_i(), this.labelArtifactFee_i(), this.rectDetailArea_i()];
                this.states = [
                    new egret.gui.State("normal", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(ArtifactItemSkin.prototype, "skinParts", {
                get: function () {
                    return ArtifactItemSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            ArtifactItemSkin.prototype.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 28, 1, 18, "等级:", "right", 0xFFFFFF, true, "middle", 63, 311, 16]);
                return t;
            };
            ArtifactItemSkin.prototype.btnLevelUp_i = function () {
                var t = new egret.gui.Button();
                this.btnLevelUp = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.base.BtnArtifactYellowSkin, 444, 16]);
                return t;
            };
            ArtifactItemSkin.prototype.iconArtifactPic_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconArtifactPic = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["法宝_1", true, 23, 13]);
                return t;
            };
            ArtifactItemSkin.prototype.labelArtifactBuf1_i = function () {
                var t = new egret.gui.Label();
                this.labelArtifactBuf1 = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 15, "法宝能够使你飘飘欲仙", 10132122, true, 300, 114, 57]);
                return t;
            };
            ArtifactItemSkin.prototype.labelArtifactBuf2_i = function () {
                var t = new egret.gui.Label();
                this.labelArtifactBuf2 = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 1, 15, "法宝能够使你飘飘欲仙", 10132122, true, 300, 114, 78]);
                return t;
            };
            ArtifactItemSkin.prototype.labelArtifactFee_i = function () {
                var t = new egret.gui.Label();
                this.labelArtifactFee = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 22, 1, 18, "100", "center", 16777215, false, 74, 491, 26]);
                return t;
            };
            ArtifactItemSkin.prototype.labelArtifactLevel_i = function () {
                var t = new egret.gui.Label();
                this.labelArtifactLevel = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["Arial", 28, 1, 18, "??", 5173231, true, "middle", 58, 378, 16]);
                return t;
            };
            ArtifactItemSkin.prototype.labelArtifactName_i = function () {
                var t = new egret.gui.Label();
                this.labelArtifactName = t;
                this.__s(t, ["fontFamily", "height", "maxDisplayedLines", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], ["Arial", 30, 1, 22, "法宝", 16777215, true, 173, 114, 21]);
                return t;
            };
            ArtifactItemSkin.prototype.rectDetailArea_i = function () {
                var t = new egret.gui.Rect();
                this.rectDetailArea = t;
                this.__s(t, ["bottom", "fillAlpha", "left", "top", "width"], [6, 0, 12, 10, 428]);
                return t;
            };
            ArtifactItemSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["拉栏框", true, 0, 0]);
                return t;
            };
            ArtifactItemSkin._skinParts = ["iconArtifactPic", "labelArtifactName", "labelArtifactLevel", "labelArtifactBuf1", "labelArtifactBuf2", "btnLevelUp", "labelArtifactFee", "rectDetailArea"];
            return ArtifactItemSkin;
        })(egret.gui.Skin);
        base.ArtifactItemSkin = ArtifactItemSkin;
        ArtifactItemSkin.prototype.__class__ = "skins.base.ArtifactItemSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
