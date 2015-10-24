var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var SpeedUpAwardSkin = (function (_super) {
        __extends(SpeedUpAwardSkin, _super);
        function SpeedUpAwardSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.close_area_i(), this.__5_i(), this.__6_i(), this.btn_confirm_i(), this.__7_i(), this.__8_i(), this.label_diamond_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.label_total_money_i(), this.__21_i(), this.__22_i(), this.__23_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(SpeedUpAwardSkin.prototype, "skinParts", {
            get: function () {
                return SpeedUpAwardSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        SpeedUpAwardSkin.prototype.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [-175.5, "额外9999_png", 382]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__12_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "金币100_png", 306]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "24小时_png", 483]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["24小时_png", 445, 552]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__15_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["9999_png", 80, 553]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__16_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 40, "立即获得：", 0xFFE200, 68, 647]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__17_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 40, "额外赠送：", 0xFFE200, 68, 701]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__18_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 22, "金币掉落加成", 258, 639]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__19_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 22, "全体伤害加成", 258, 671]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__20_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 22, "9999倍金币", 257, 715]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__21_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["Arial", 25, "+100%", 0xFFE200, 407, 636]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__22_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["Arial", 25, "+100%", 0xFFE200, 407, 667]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__23_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["元宝中", 383, 714]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0, 10, 10]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "left", "scale9Grid", "source", "verticalCenter", "width"], [666, 11, egret.Rectangle(84,20,79,217), "difficulties_bg_png", 0, 619]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "height", "horizontalCenter", "source", "width"], [241, 504, 0.5, "difficulties_light_png", 603]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 141, 0, egret.Rectangle(15,14,18,20), "背弹框底", 122.5, 563]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "touchEnabled", "y"], ["黑体", 0, 22, "购买礼包", false, 825]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "touchEnabled", "x", "y"], ["钻石", false, 271, 790]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "成长礼包_png", 269]);
            return t;
        };
        SpeedUpAwardSkin.prototype.btn_confirm_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_confirm = t;
            this.__s(t, ["horizontalCenter", "source", "y"], [0, "按钮红", 790]);
            return t;
        };
        SpeedUpAwardSkin.prototype.close_area_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_area = t;
            this.__s(t, ["height", "right", "source", "top"], [44, 42, "叉", 266]);
            return t;
        };
        SpeedUpAwardSkin.prototype.label_diamond_i = function () {
            var t = new egret.gui.Label();
            this.label_diamond = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "touchEnabled", "width", "x", "y"], ["黑体", 22, "60", "center", false, 57, 304, 795]);
            return t;
        };
        SpeedUpAwardSkin.prototype.label_total_money_i = function () {
            var t = new egret.gui.Label();
            this.label_total_money = t;
            this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["Arial", 25, "1605.66兆", 0xFFE200, 417, 712]);
            return t;
        };
        SpeedUpAwardSkin.prototype.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [175.5, "攻击100_png", 378]);
            return t;
        };
        SpeedUpAwardSkin._skinParts = ["close_area", "btn_confirm", "label_diamond", "label_total_money"];
        return SpeedUpAwardSkin;
    })(egret.gui.Skin);
    skins.SpeedUpAwardSkin = SpeedUpAwardSkin;
    SpeedUpAwardSkin.prototype.__class__ = "skins.SpeedUpAwardSkin";
})(skins || (skins = {}));
