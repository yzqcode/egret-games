var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var DifficultiesListSkin = (function (_super) {
        __extends(DifficultiesListSkin, _super);
        function DifficultiesListSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.close_area_i(), this.scroller_view_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(DifficultiesListSkin.prototype, "skinParts", {
            get: function () {
                return DifficultiesListSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        DifficultiesListSkin.prototype.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top", "y"], [118, 11, 10, egret.Rectangle(84,20,79,217), "difficulties_bg_png", 116, 10]);
            return t;
        };
        DifficultiesListSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "height", "horizontalCenter", "source", "width"], [497, 504, -0.5, "difficulties_light_png", 603]);
            return t;
        };
        DifficultiesListSkin.prototype.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["height", "horizontalCenter", "source", "top", "width"], [83, 0.5, "difficulties_title_png", 142, 255]);
            return t;
        };
        DifficultiesListSkin.prototype.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [156, 30, 30, egret.Rectangle(15,14,18,20), "背弹框底", 228]);
            return t;
        };
        DifficultiesListSkin.prototype.__8_i = function () {
            var t = new egret.gui.BasicLayout();
            return t;
        };
        DifficultiesListSkin.prototype.__9_i = function () {
            var t = new egret.gui.Group();
            t.layout = this.__8_i();
            t.elementsContent = [this.scroller_back_i()];
            return t;
        };
        DifficultiesListSkin.prototype.close_area_i = function () {
            var t = new egret.gui.UIAsset();
            this.close_area = t;
            this.__s(t, ["height", "right", "source", "top"], [44, 38, "叉", 142]);
            return t;
        };
        DifficultiesListSkin.prototype.scroller_back_i = function () {
            var t = new egret.gui.Rect();
            this.scroller_back = t;
            this.__s(t, ["alpha", "bottom", "fillColor", "left", "right", "strokeWeight", "top"], [0, 0, 0x000000, 0, 0, 0, 0]);
            return t;
        };
        DifficultiesListSkin.prototype.scroller_view_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller_view = t;
            this.__s(t, ["bottom", "horizontalCenter", "top", "width", "x", "y"], [174, 0, 245, 554, 10, 10]);
            t.viewport = this.__9_i();
            return t;
        };
        DifficultiesListSkin.prototype.__3_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["alpha", "bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [0.8, 0, 0, 0, egret.Rectangle(2,2,12,12), "black_square", 0, 10, 10]);
            return t;
        };
        DifficultiesListSkin._skinParts = ["close_area", "scroller_back", "scroller_view"];
        return DifficultiesListSkin;
    })(egret.gui.Skin);
    skins.DifficultiesListSkin = DifficultiesListSkin;
    DifficultiesListSkin.prototype.__class__ = "skins.DifficultiesListSkin";
})(skins || (skins = {}));
