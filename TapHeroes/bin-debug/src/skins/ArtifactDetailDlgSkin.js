var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ArtifactDetailDlgSkin = (function (_super) {
        __extends(ArtifactDetailDlgSkin, _super);
        function ArtifactDetailDlgSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.iconClose_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.iconArtifact_i(), this.labelArtifactName_i(), this.__8_i(), this.labelLevelMax_i(), this.labelArtifactDesc_i(), this.labelArtifactLevel_i(), this.labelArtifactLevel0_i(), this.labelCurrentBuf1_i(), this.labelCurrentBuf2_i(), this.labelNextBuf1_i(), this.labelNextBuf2_i(), this.__9_i(), this.btnConfirm_i(), this.labelPeachNum_i(), this.__10_i(), this.labelDiamondFee_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ArtifactDetailDlgSkin.prototype, "skinParts", {
            get: function () {
                return ArtifactDetailDlgSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ArtifactDetailDlgSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "left", "right", "scale9Grid", "source", "verticalCenter"], [490, 5, 5, egret.Rectangle(84,30,77,186), "背弹底", 0]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "left", "right", "scale9Grid", "source", "verticalCenter"], [115, 30, 30, egret.Rectangle(15,14,18,20), "背弹框底", 49.5]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "left", "right", "scale9Grid", "source", "verticalCenter"], [0.2, 89, 30, 30, egret.Rectangle(15,14,18,20), "背弹框底", -67.5]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "left", "right", "scale9Grid", "source", "verticalCenter"], [0.2, 100, 30, 30, egret.Rectangle(15,14,18,20), "背弹框底", 173]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 29, 20, "等级:", 0xFFFFFF, "middle", -172.5, 59, 126]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 61, 20, "毁灭该法宝，返还仙桃", "right", 0xFFFFFF, "middle", 171.5, 214, 46]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.btnConfirm_i = function () {
            var t = new egret.gui.Button();
            this.btnConfirm = t;
            this.__s(t, ["label", "skinName", "verticalCenter", "x"], ["按钮", skins.base.BtnArtifactRedSkin, 172, 423]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.iconArtifact_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconArtifact = t;
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [87, "法宝_1", -169.5, 87, 31]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.iconClose_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconClose = t;
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [44, "叉", -199, 44, 565]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelArtifactDesc_i = function () {
            var t = new egret.gui.Label();
            this.labelArtifactDesc = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 85, 54, 3, 49, 20, "??", 0xFFFFFF, "middle", 49.5]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelArtifactLevel0_i = function () {
            var t = new egret.gui.Label();
            this.labelArtifactLevel0 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 29, 20, "下一等级:", 0x4EEFEF, "middle", -92.5, 169, 48]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelArtifactLevel_i = function () {
            var t = new egret.gui.Label();
            this.labelArtifactLevel = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 29, 20, "????", 5173231, "middle", -172.5, 59, 191]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelArtifactName_i = function () {
            var t = new egret.gui.Label();
            this.labelArtifactName = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 38, 28, "??", 16777215, "middle", -199, 418, 126]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelCurrentBuf1_i = function () {
            var t = new egret.gui.Label();
            this.labelCurrentBuf1 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 22, 15, "buf1", 0xFFFFFF, "middle", -149, 438, 126]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelCurrentBuf2_i = function () {
            var t = new egret.gui.Label();
            this.labelCurrentBuf2 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 22, 15, "buf2", 0xFFFFFF, "middle", -131, 438, 126]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelDiamondFee_i = function () {
            var t = new egret.gui.Label();
            this.labelDiamondFee = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 18, "100", "center", 16777215, "middle", 154, 61, 476]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelLevelMax_i = function () {
            var t = new egret.gui.Label();
            this.labelLevelMax = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 29, 20, "( 满级了 )", 0xFFFFFF, "middle", -172.5, 143, 262]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelNextBuf1_i = function () {
            var t = new egret.gui.Label();
            this.labelNextBuf1 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 22, 15, "buf1", 0xFFFFFF, "middle", -66, 524, 52]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelNextBuf2_i = function () {
            var t = new egret.gui.Label();
            this.labelNextBuf2 = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 22, 15, "buf2", 0xFFFFFF, "middle", -42, 527, 52]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.labelPeachNum_i = function () {
            var t = new egret.gui.Label();
            this.labelPeachNum = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 61, 20, "????", 16355839, "middle", 171.5, 55, 300]);
            return t;
        };
        ArtifactDetailDlgSkin.prototype.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [29, "仙桃", 172.5, 29, 268]);
            return t;
        };
        ArtifactDetailDlgSkin._skinParts = ["iconClose", "iconArtifact", "labelArtifactName", "labelLevelMax", "labelArtifactDesc", "labelArtifactLevel", "labelArtifactLevel0", "labelCurrentBuf1", "labelCurrentBuf2", "labelNextBuf1", "labelNextBuf2", "btnConfirm", "labelPeachNum", "labelDiamondFee"];
        return ArtifactDetailDlgSkin;
    })(egret.gui.Skin);
    skins.ArtifactDetailDlgSkin = ArtifactDetailDlgSkin;
    ArtifactDetailDlgSkin.prototype.__class__ = "skins.ArtifactDetailDlgSkin";
})(skins || (skins = {}));
