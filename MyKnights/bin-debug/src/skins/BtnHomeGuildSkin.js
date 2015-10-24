var skins;
(function (skins) {
    var BtnHomeGuildSkin = (function (_super) {
        __extends(BtnHomeGuildSkin, _super);
        function BtnHomeGuildSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [];
            this.__4_i();
            this.__5_i();
            this.__6_i();
            this.__7_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__6", "", "last", "")
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "last", ""),
                    new egret.gui.AddItems("__5", "", "last", "")
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.AddItems("__7", "", "last", "")
                ])
            ];
        }
        var __egretProto__ = BtnHomeGuildSkin.prototype;
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["guild_light_png", 23, -18]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["guild_png", 0, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "x", "y"], ["guild_png", 0, 0]);
            return t;
        };
        __egretProto__.__7_i = function () {
            var t = new egret.gui.UIAsset();
            this.__7 = t;
            this.__s(t, ["source", "x", "y"], ["guild_png", 0, 0]);
            return t;
        };
        return BtnHomeGuildSkin;
    })(egret.gui.Skin);
    skins.BtnHomeGuildSkin = BtnHomeGuildSkin;
    BtnHomeGuildSkin.prototype.__class__ = "skins.BtnHomeGuildSkin";
})(skins || (skins = {}));
