var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var AchievementSkin = (function (_super) {
        __extends(AchievementSkin, _super);
        function AchievementSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [1136, 640]);
            this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.btn_close_i(), this.__8_i(), this.total_diamond_i(), this.__9_i(), this.scroller_i(), this.touch_close_area_i()];
            this.states = [
                new egret.gui.State("normal", [
                ]),
                new egret.gui.State("disabled", [
                ])
            ];
        }
        Object.defineProperty(AchievementSkin.prototype, "skinParts", {
            get: function () {
                return AchievementSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        AchievementSkin.prototype.__11_i = function () {
            var t = new egret.gui.Group();
            t.layout = this.__10_i();
            t.elementsContent = [this.scroller_back_i()];
            return t;
        };
        AchievementSkin.prototype.__3_i = function () {
            var t = new egret.gui.Rect();
            this.__s(t, ["fillColor", "height", "left", "right", "strokeColor", "touchEnabled", "y"], [0x595959, 138, 0, 0, 0x595959, true, 0]);
            return t;
        };
        AchievementSkin.prototype.__4_i = function () {
            var t = new egret.gui.Rect();
            this.__s(t, ["fillColor", "height", "left", "right", "strokeWeight", "touchEnabled", "y"], [0x222222, 22, 0, 0, 0, true, 138]);
            return t;
        };
        AchievementSkin.prototype.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["left", "source", "top"], [27, "成就大", 19]);
            return t;
        };
        AchievementSkin.prototype.__6_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "left", "size", "text", "textColor", "top"], ["Arial", 155, 38, "成就", 0xffcf02, 42]);
            return t;
        };
        AchievementSkin.prototype.__7_i = function () {
            var t = new egret.gui.Label();
            this.__s(t, ["fontFamily", "left", "size", "text", "textColor", "top"], ["Arial", 155, 26, "完成成就获得奖励", 0xffcf02, 89]);
            return t;
        };
        AchievementSkin.prototype.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__s(t, ["right", "source", "top"], [26, "钻石大", 90]);
            return t;
        };
        AchievementSkin.prototype.__9_i = function () {
            var t = new egret.gui.Rect();
            this.__s(t, ["bottom", "fillColor", "left", "right", "strokeWeight", "top"], [0, 0x909090, 0, 0, 0, 160]);
            return t;
        };
        AchievementSkin.prototype.btn_close_i = function () {
            var t = new egret.gui.UIAsset();
            this.btn_close = t;
            this.__s(t, ["right", "source", "top"], [26, "叉", 27]);
            return t;
        };
        AchievementSkin.prototype.scroller_back_i = function () {
            var t = new egret.gui.Rect();
            this.scroller_back = t;
            this.__s(t, ["fillColor", "height", "strokeWeight", "width", "x", "y"], [0x909090, 976, 0, 640, 0, 0]);
            return t;
        };
        AchievementSkin.prototype.scroller_i = function () {
            var t = new egret.gui.Scroller();
            this.scroller = t;
            this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 160]);
            t.viewport = this.__11_i();
            return t;
        };
        AchievementSkin.prototype.__10_i = function () {
            var t = new egret.gui.BasicLayout();
            return t;
        };
        AchievementSkin.prototype.total_diamond_i = function () {
            var t = new egret.gui.Label();
            this.total_diamond = t;
            this.__s(t, ["focusEnabled", "fontFamily", "height", "right", "size", "text", "textAlign", "textColor", "top", "width"], [false, "Arial", 33, 81, 26, "26", "right", 16777215, 91, 169]);
            return t;
        };
        AchievementSkin.prototype.touch_close_area_i = function () {
            var t = new egret.gui.Rect();
            this.touch_close_area = t;
            this.__s(t, ["fillAlpha", "height", "strokeWeight", "width", "x", "y"], [0, 73, 0, 84, 548, 8]);
            return t;
        };
        AchievementSkin._skinParts = ["btn_close", "total_diamond", "scroller_back", "scroller", "touch_close_area"];
        return AchievementSkin;
    })(egret.gui.Skin);
    skins.AchievementSkin = AchievementSkin;
    AchievementSkin.prototype.__class__ = "skins.AchievementSkin";
})(skins || (skins = {}));
