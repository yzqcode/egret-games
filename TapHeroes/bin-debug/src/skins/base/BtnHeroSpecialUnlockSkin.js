var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var skins;
(function (skins) {
    var base;
    (function (base) {
        var BtnHeroSpecialUnlockSkin = (function (_super) {
            __extends(BtnHeroSpecialUnlockSkin, _super);
            function BtnHeroSpecialUnlockSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.pic_i()];
                this.__4_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("__4", "", "last", "")
                    ]),
                    new egret.gui.State("down", [
                    ]),
                    new egret.gui.State("disabled", [
                    ])
                ];
            }
            Object.defineProperty(BtnHeroSpecialUnlockSkin.prototype, "skinParts", {
                get: function () {
                    return BtnHeroSpecialUnlockSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnHeroSpecialUnlockSkin.prototype.pic_i = function () {
                var t = new egret.gui.UIAsset();
                this.pic = t;
                this.__s(t, ["source", "x", "y"], ["按钮绿", 0, 0]);
                return t;
            };
            BtnHeroSpecialUnlockSkin.prototype.__4_i = function () {
                var t = new egret.gui.Label();
                this.__4 = t;
                this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "text", "y"], [true, "Arial", 0, 23, "首充解锁", 31]);
                return t;
            };
            BtnHeroSpecialUnlockSkin._skinParts = ["pic"];
            return BtnHeroSpecialUnlockSkin;
        })(egret.gui.Skin);
        base.BtnHeroSpecialUnlockSkin = BtnHeroSpecialUnlockSkin;
        BtnHeroSpecialUnlockSkin.prototype.__class__ = "skins.base.BtnHeroSpecialUnlockSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
