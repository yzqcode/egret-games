var skins;
(function (skins) {
    var UIButtonTweenViewSkin = (function (_super) {
        __extends(UIButtonTweenViewSkin, _super);
        function UIButtonTweenViewSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [117, 727]);
            this.elementsContent = [this.B1_i(), this.B2_i(), this.B3_i(), this.B4_i(), this.B5_i(), this.B6_i(), this.B7_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIButtonTweenViewSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIButtonTweenViewSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.B2_i = function () {
            var t = new egret.gui.Button();
            this.B2 = t;
            this.__s(t, ["enabled", "label", "skinName", "x", "y"], [true, "按钮", skins.UIBoxButtonSkin, 127, 0]);
            return t;
        };
        __egretProto__.B3_i = function () {
            var t = new egret.gui.Button();
            this.B3 = t;
            this.__s(t, ["enabled", "label", "skinName", "x", "y"], [true, "按钮", skins.UIBoxButtonSkin, 254, 0]);
            return t;
        };
        __egretProto__.B4_i = function () {
            var t = new egret.gui.Button();
            this.B4 = t;
            this.__s(t, ["enabled", "label", "skinName", "x", "y"], [true, "按钮", skins.UIBoxButtonSkin, 381, 0]);
            return t;
        };
        __egretProto__.B5_i = function () {
            var t = new egret.gui.Button();
            this.B5 = t;
            this.__s(t, ["enabled", "label", "skinName", "x", "y"], [true, "按钮", skins.UIBoxButtonSkin, 508, 0]);
            return t;
        };
        __egretProto__.B6_i = function () {
            var t = new egret.gui.Button();
            this.B6 = t;
            this.__s(t, ["enabled", "label", "skinName", "x", "y"], [true, "按钮", skins.UICircleButtonSkin, 635, 0]);
            return t;
        };
        __egretProto__.B7_i = function () {
            var t = new egret.gui.Button();
            this.B7 = t;
            this.__s(t, ["enabled", "label", "skinName", "x", "y"], [true, "按钮", skins.UICircleButtonSkin, 635, 0]);
            return t;
        };
        __egretProto__.B1_i = function () {
            var t = new egret.gui.Button();
            this.B1 = t;
            this.__s(t, ["enabled", "label", "skinName", "x", "y"], [true, "按钮", skins.UIBoxButtonSkin, 0, 0]);
            return t;
        };
        UIButtonTweenViewSkin._skinParts = ["B1", "B2", "B3", "B4", "B5", "B6", "B7"];
        return UIButtonTweenViewSkin;
    })(egret.gui.Skin);
    skins.UIButtonTweenViewSkin = UIButtonTweenViewSkin;
    UIButtonTweenViewSkin.prototype.__class__ = "skins.UIButtonTweenViewSkin";
})(skins || (skins = {}));
