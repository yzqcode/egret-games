var skins;
(function (skins) {
    var BtnSpeakSkin = (function (_super) {
        __extends(BtnSpeakSkin, _super);
        function BtnSpeakSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.labelDisplay_i()];
            this.__4_i();
            this.__5_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__5", "", "before", "labelDisplay")
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "before", "labelDisplay")
                ]),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = BtnSpeakSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return BtnSpeakSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["chat_title_bg_png", 0, 0]);
            return t;
        };
        __egretProto__.labelDisplay_i = function () {
            var t = new egret.gui.Label();
            this.labelDisplay = t;
            this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 20, "标签", "center", 0x030202, "middle", 129, 5, 12]);
            return t;
        };
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["chat_title_sel_png", 0, 0]);
            return t;
        };
        BtnSpeakSkin._skinParts = ["labelDisplay"];
        return BtnSpeakSkin;
    })(egret.gui.Skin);
    skins.BtnSpeakSkin = BtnSpeakSkin;
    BtnSpeakSkin.prototype.__class__ = "skins.BtnSpeakSkin";
})(skins || (skins = {}));
