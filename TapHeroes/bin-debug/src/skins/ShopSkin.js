var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var ShopSkin = (function (_super) {
        __extends(ShopSkin, _super);
        function ShopSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.scroller_back0_i(), this.scroller_view_i(), this.close_area_i(), this.__7_i(), this.__8_i(), this.label_diamond_i(), this.label_money_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(ShopSkin.prototype, "skinParts", {
            get: function () {
                return ShopSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        ShopSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [262, 0, 0, egret.Rectangle(84,20,79,217), "背弹底", 217]);
            return t;
        };
        ShopSkin.prototype.__5_i = function () {
            var t = new egret.gui.BasicLayout();
            return t;
        };
        ShopSkin.prototype.__6_i = function () {
            var t = new egret.gui.Group();
            t.layout = this.__5_i();
            t.elementsContent = [this.scroller_back_i()];
            return t;
        };
        ShopSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["钻石", 42, 245]);
            return t;
        };
        ShopSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["source", "x", "y"], ["元宝", 334, 245]);
            return t;
        };
        ShopSkin.prototype.close_area_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_area = t;
            this.__s(t, ["source", "x", "y"], ["叉", 573, 236]);
            return t;
        };
        ShopSkin.prototype.label_diamond_i = function () {
            var t = new egret.gui.Label();
            this.label_diamond = t;
            this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["Arial", 26, "1.03k", 149, 88, 250]);
            return t;
        };
        ShopSkin.prototype.label_money_i = function () {
            var t = new egret.gui.Label();
            this.label_money = t;
            this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["Arial", 26, "323.22aa", 149, 390, 250]);
            return t;
        };
        ShopSkin.prototype.scroller_back0_i = function () {
            var t = new egret.gui.Rect();
            this.scroller_back0 = t;
            this.__s(t, ["bottom", "fillColor", "horizontalCenter", "left", "strokeWeight", "top", "width"], [294, 0x000000, 0, 0, 0, 299, 604]);
            return t;
        };
        ShopSkin.prototype.scroller_back_i = function () {
            var t = new egret.gui.Rect();
            this.scroller_back = t;
            this.__s(t, ["fillColor", "height", "left", "right", "strokeWeight", "y"], [0x000000, 543, 0, 0, 0, 0]);
            return t;
        };
        ShopSkin.prototype.scroller_view_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_view = t;
            this.__s(t, ["bottom", "horizontalCenter", "top", "width"], [294, 0, 299, 604]);
            t.viewport = this.__6_i();
            return t;
        };
        ShopSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0]);
            return t;
        };
        ShopSkin._skinParts = ["scroller_back0", "scroller_back", "scroller_view", "close_area", "label_diamond", "label_money"];
        return ShopSkin;
    })(egret.gui.Skin);
    skins.ShopSkin = ShopSkin;
    ShopSkin.prototype.__class__ = "skins.ShopSkin";
})(skins || (skins = {}));
