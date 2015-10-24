var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var RebornDetailSkin = (function (_super) {
        __extends(RebornDetailSkin, _super);
        function RebornDetailSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.iconClose_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.labelLevelPeach_i(), this.labelStagePeach_i(), this.labelHeroPeach_i(), this.labelTotalPeach_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.labelRebornDesc_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.btnConfirm_i(), this.__17_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(RebornDetailSkin.prototype, "skinParts", {
            get: function () {
                return RebornDetailSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        RebornDetailSkin.prototype.__11_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 31, 61, 3, 307, 20, "全英雄生存奖励奖励：", "right", 0xFFFFFF, "middle", 33.5]);
            return t;
        };
        RebornDetailSkin.prototype.__12_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 31, 61, 3, 307, 20, "总共：", "right", 0xFFFFFF, "middle", 98.5]);
            return t;
        };
        RebornDetailSkin.prototype.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [29, "仙桃", -38.5, 29, 460]);
            return t;
        };
        RebornDetailSkin.prototype.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [29, "仙桃", -2.5, 29, 460]);
            return t;
        };
        RebornDetailSkin.prototype.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [29, "仙桃", 33.5, 29, 460]);
            return t;
        };
        RebornDetailSkin.prototype.__16_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [29, "仙桃", 98.5, 29, 460]);
            return t;
        };
        RebornDetailSkin.prototype.__17_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter"], ["Arial", 31, 285, 3, 253, 20, "重生", "center", 0xFFFFFF, false, "middle", 167.5]);
            return t;
        };
        RebornDetailSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0]);
            return t;
        };
        RebornDetailSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "left", "right", "scale9Grid", "source", "verticalCenter"], [506, 5, 5, egret.Rectangle(84,30,77,186), "背弹底", -21]);
            return t;
        };
        RebornDetailSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "left", "right", "scale9Grid", "source", "verticalCenter"], [0.2, 89, 29, 31, egret.Rectangle(15,14,18,20), "背弹框底", -131.5]);
            return t;
        };
        RebornDetailSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [40, "猴子技能7", -220, 40, 63]);
            return t;
        };
        RebornDetailSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [87, "猴子", -132.5, 87, 30]);
            return t;
        };
        RebornDetailSkin.prototype.__8_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 38, 28, "重生", 16777215, "middle", -221, 103, 117]);
            return t;
        };
        RebornDetailSkin.prototype.__9_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 31, 61, 3, 307, 20, "英雄等级奖励：", "right", 0xFFFFFF, "middle", -38.5]);
            return t;
        };
        RebornDetailSkin.prototype.btnConfirm_i = function () {
            var t = new egret.gui.UIAsset();
            this.btnConfirm = t;
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [56, "重生按钮", 168, 128, 274]);
            return t;
        };
        RebornDetailSkin.prototype.iconClose_i = function () {
            var t = new egret.gui.UIAsset();
            this.iconClose = t;
            this.__s(t, ["height", "source", "verticalCenter", "width", "x"], [44, "叉", -225, 44, 564]);
            return t;
        };
        RebornDetailSkin.prototype.labelHeroPeach_i = function () {
            var t = new egret.gui.Label();
            this.labelHeroPeach = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 31, 331, 3, 194, 20, "???", "center", 16355839, "middle", 33.5]);
            return t;
        };
        RebornDetailSkin.prototype.labelLevelPeach_i = function () {
            var t = new egret.gui.Label();
            this.labelLevelPeach = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 31, 331, 3, 194, 20, "???", "center", 16355839, "middle", -38.5]);
            return t;
        };
        RebornDetailSkin.prototype.labelRebornDesc_i = function () {
            var t = new egret.gui.Label();
            this.labelRebornDesc = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["Arial", 76, 18, "你能够带着你的所有法宝回到最初的混沌状态。同时还能带着从王母身体里偷来的仙桃。相信我，选择重生，你就是选择了风骚。", 0xFFFFFF, "middle", -130, 469, 118]);
            return t;
        };
        RebornDetailSkin.prototype.labelStagePeach_i = function () {
            var t = new egret.gui.Label();
            this.labelStagePeach = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 31, 331, 3, 194, 20, "???", "center", 16355839, "middle", -2.5]);
            return t;
        };
        RebornDetailSkin.prototype.labelTotalPeach_i = function () {
            var t = new egret.gui.Label();
            this.labelTotalPeach = t;
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 31, 331, 3, 194, 20, "???", "center", 16355839, "middle", 98.5]);
            return t;
        };
        RebornDetailSkin.prototype.__10_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "height", "left", "maxDisplayedLines", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter"], ["Arial", 31, 61, 3, 307, 20, "过关奖励：", "right", 0xFFFFFF, "middle", -2.5]);
            return t;
        };
        RebornDetailSkin._skinParts = ["iconClose", "labelLevelPeach", "labelStagePeach", "labelHeroPeach", "labelTotalPeach", "labelRebornDesc", "btnConfirm"];
        return RebornDetailSkin;
    })(egret.gui.Skin);
    skins.RebornDetailSkin = RebornDetailSkin;
    RebornDetailSkin.prototype.__class__ = "skins.RebornDetailSkin";
})(skins || (skins = {}));
