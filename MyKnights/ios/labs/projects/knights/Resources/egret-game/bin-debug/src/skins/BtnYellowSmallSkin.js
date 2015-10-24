var skins;
(function (skins) {
    var BtnYellowSmallSkin = (function (_super) {
        __extends(BtnYellowSmallSkin, _super);
        function BtnYellowSmallSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.labelDisplay_i()];
            this.__4_i();
            this.__5_i();
            this.__6_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__5", "", "before", "labelDisplay")
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "before", "labelDisplay")
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.AddItems("__6", "", "before", "labelDisplay")
                ])
            ];
        }
        var __egretProto__ = BtnYellowSmallSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return BtnYellowSmallSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["yellow_btn_nor_png", 0, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "x", "y"], ["yellow_btn_nor_png", 0, 0]);
            return t;
        };
        __egretProto__.labelDisplay_i = function () {
            var t = new egret.gui.Label();
            this.labelDisplay = t;
            this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["Arial", 25, "确定", 0x000000, 30, 23]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["yellow_btn_sel_png", 0, 0]);
            return t;
        };
        BtnYellowSmallSkin._skinParts = ["labelDisplay"];
        return BtnYellowSmallSkin;
    })(egret.gui.Skin);
    skins.BtnYellowSmallSkin = BtnYellowSmallSkin;
    BtnYellowSmallSkin.prototype.__class__ = "skins.BtnYellowSmallSkin";
})(skins || (skins = {}));
