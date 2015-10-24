var skins;
(function (skins) {
    var BtnGuildTabSkin = (function (_super) {
        __extends(BtnGuildTabSkin, _super);
        function BtnGuildTabSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [this.labelDisplay_i()];
            this.__4_i();
            this.__5_i();
            this.__6_i();
            this.__7_i();
            this.__8_i();
            this.__9_i();
            this.__10_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__5", "", "before", "labelDisplay"),
                    new egret.gui.SetProperty("labelDisplay", "x", 14),
                    new egret.gui.SetProperty("labelDisplay", "width", 175),
                    new egret.gui.SetProperty("labelDisplay", "height", 49),
                    new egret.gui.SetProperty("labelDisplay", "textAlign", "center"),
                    new egret.gui.SetProperty("labelDisplay", "verticalAlign", "middle"),
                    new egret.gui.SetProperty("labelDisplay", "textColor", 0xFFF4CC),
                    new egret.gui.SetProperty("labelDisplay", "size", 30),
                    new egret.gui.SetProperty("labelDisplay", "y", -9)
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "before", "labelDisplay"),
                    new egret.gui.SetProperty("labelDisplay", "width", 175),
                    new egret.gui.SetProperty("labelDisplay", "height", 49),
                    new egret.gui.SetProperty("labelDisplay", "x", 14),
                    new egret.gui.SetProperty("labelDisplay", "textAlign", "center"),
                    new egret.gui.SetProperty("labelDisplay", "verticalAlign", "middle"),
                    new egret.gui.SetProperty("labelDisplay", "textColor", 0xFFF4CC),
                    new egret.gui.SetProperty("labelDisplay", "size", 30),
                    new egret.gui.SetProperty("labelDisplay", "y", -9)
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.AddItems("__6", "", "before", "labelDisplay"),
                    new egret.gui.AddItems("__7", "", "last", ""),
                    new egret.gui.AddItems("__8", "", "last", ""),
                    new egret.gui.AddItems("__9", "", "last", ""),
                    new egret.gui.AddItems("__10", "", "last", ""),
                    new egret.gui.SetProperty("labelDisplay", "width", 175),
                    new egret.gui.SetProperty("labelDisplay", "height", 49),
                    new egret.gui.SetProperty("labelDisplay", "x", 14),
                    new egret.gui.SetProperty("labelDisplay", "y", 6),
                    new egret.gui.SetProperty("labelDisplay", "textAlign", "center"),
                    new egret.gui.SetProperty("labelDisplay", "verticalAlign", "middle"),
                    new egret.gui.SetProperty("labelDisplay", "textColor", 0xFFF4CC),
                    new egret.gui.SetProperty("labelDisplay", "size", 30)
                ])
            ];
        }
        var __egretProto__ = BtnGuildTabSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return BtnGuildTabSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["guild_tab_bg_png", 0, -15]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["guild_tab_bg_png", 0, -15]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "x", "y"], ["guild_tab_bg_png", 0, 0]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__7 = t;
            this.__s(t, ["source", "x", "y"], ["span_bar_png", 17, -3]);
            return t;
        };
        __egretProto__.__8_i = function () {
            var t = new egret.gui.UIAsset();
            this.__8 = t;
            this.__s(t, ["source", "x", "y"], ["span_bar_png", 159, -3]);
            return t;
        };
        __egretProto__.__9_i = function () {
            var t = new egret.gui.UIAsset();
            this.__9 = t;
            this.__s(t, ["source", "x", "y"], ["callipers_png", 15, 58]);
            return t;
        };
        __egretProto__.labelDisplay_i = function () {
            var t = new egret.gui.Label();
            this.labelDisplay = t;
            this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["Arial", 25, "确定", 0x000000, 14, 7]);
            return t;
        };
        __egretProto__.__10_i = function () {
            var t = new egret.gui.UIAsset();
            this.__10 = t;
            this.__s(t, ["source", "x", "y"], ["callipers_png", 157, 58]);
            return t;
        };
        BtnGuildTabSkin._skinParts = ["labelDisplay"];
        return BtnGuildTabSkin;
    })(egret.gui.Skin);
    skins.BtnGuildTabSkin = BtnGuildTabSkin;
    BtnGuildTabSkin.prototype.__class__ = "skins.BtnGuildTabSkin";
})(skins || (skins = {}));
