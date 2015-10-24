var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var OfflineAwardSkin = (function (_super) {
        __extends(OfflineAwardSkin, _super);
        function OfflineAwardSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.close_area_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.label_multi_i(), this.__13_i(), this.__14_i(), this.label_money_i(), this.label_money_multi_i(), this.btn_receive_i(), this.btn_diamond_receive_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.label_diamond_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(OfflineAwardSkin.prototype, "skinParts", {
            get: function () {
                return OfflineAwardSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        OfflineAwardSkin.prototype.__11_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["元宝领取按钮", 455, 384]);
            return t;
        };
        OfflineAwardSkin.prototype.__12_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "text", "x", "y"], ["黑体", "挂机奖励", 117, 520]);
            return t;
        };
        OfflineAwardSkin.prototype.__13_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["元宝中", 92, 586]);
            return t;
        };
        OfflineAwardSkin.prototype.__14_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["元宝", 359, 584]);
            return t;
        };
        OfflineAwardSkin.prototype.__15_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "text", "touchEnabled", "x", "y"], ["黑体", "领取", false, 149, 713]);
            return t;
        };
        OfflineAwardSkin.prototype.__16_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "text", "touchEnabled", "x", "y"], ["黑体", "领取", false, 430, 713]);
            return t;
        };
        OfflineAwardSkin.prototype.__17_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "touchEnabled", "x", "y"], ["钻石", false, 417, 676]);
            return t;
        };
        OfflineAwardSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0, 10, 10]);
            return t;
        };
        OfflineAwardSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "left", "scale9Grid", "source", "verticalCenter", "width"], [666, 11, egret.Rectangle(84,20,79,217), "difficulties_bg_png", 0, 619]);
            return t;
        };
        OfflineAwardSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "height", "horizontalCenter", "source", "width"], [241, 504, 0.5, "difficulties_light_png", 603]);
            return t;
        };
        OfflineAwardSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 425, -139.5, egret.Rectangle(15,14,18,20), "背弹框底", 0, 241]);
            return t;
        };
        OfflineAwardSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width"], [0.5, 425, 140, egret.Rectangle(15,14,18,20), "背弹框底", 0, 241]);
            return t;
        };
        OfflineAwardSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["horizontalCenter", "source", "y"], [7.5, "挂机有礼_png", 279]);
            return t;
        };
        OfflineAwardSkin.prototype.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["元宝领取按钮", 122, 384]);
            return t;
        };
        OfflineAwardSkin.prototype.btn_diamond_receive_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_diamond_receive = t;
            this.__s(t, ["source", "x", "y"], ["按钮红", 379, 677]);
            return t;
        };
        OfflineAwardSkin.prototype.btn_receive_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_receive = t;
            this.__s(t, ["source", "x", "y"], ["按钮黄", 96, 677]);
            return t;
        };
        OfflineAwardSkin.prototype.close_area_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_area = t;
            this.__s(t, ["height", "right", "source", "top"], [44, 42, "叉", 266]);
            return t;
        };
        OfflineAwardSkin.prototype.label_diamond_i = function () {
            var t = new egret.gui.Label();
            this.label_diamond = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "touchEnabled", "width", "x", "y"], ["黑体", 25, "60", "center", false, 57, 449, 680]);
            return t;
        };
        OfflineAwardSkin.prototype.label_money_i = function () {
            var t = new egret.gui.Label();
            this.label_money = t;
            this.__s(t, ["fontFamily", "text", "width", "x", "y"], ["黑体", "1233.45万", 167, 125, 582]);
            return t;
        };
        OfflineAwardSkin.prototype.label_money_multi_i = function () {
            var t = new egret.gui.Label();
            this.label_money_multi = t;
            this.__s(t, ["fontFamily", "text", "width", "x", "y"], ["黑体", "1233.45万", 161, 409, 582]);
            return t;
        };
        OfflineAwardSkin.prototype.label_multi_i = function () {
            var t = new egret.gui.Label();
            this.label_multi = t;
            this.__s(t, ["fontFamily", "text", "textColor", "x", "y"], ["黑体", "挂机双倍奖励", 0xFFF100, 373, 520]);
            return t;
        };
        OfflineAwardSkin.prototype.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["元宝领取按钮", 360, 384]);
            return t;
        };
        OfflineAwardSkin._skinParts = ["close_area", "label_multi", "label_money", "label_money_multi", "btn_receive", "btn_diamond_receive", "label_diamond"];
        return OfflineAwardSkin;
    })(egret.gui.Skin);
    skins.OfflineAwardSkin = OfflineAwardSkin;
    OfflineAwardSkin.prototype.__class__ = "skins.OfflineAwardSkin";
})(skins || (skins = {}));
