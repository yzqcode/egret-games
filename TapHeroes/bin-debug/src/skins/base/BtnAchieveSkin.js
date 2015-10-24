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
        var BtnAchieveSkin = (function (_super) {
            __extends(BtnAchieveSkin, _super);
            function BtnAchieveSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btnachieve_diamond_i(), this.btnachieve_label_i()];
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.SetProperty("__3", "visible", false)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "visible", false)
                    ])
                ];
            }
            Object.defineProperty(BtnAchieveSkin.prototype, "skinParts", {
                get: function () {
                    return BtnAchieveSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            BtnAchieveSkin.prototype.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "x", "y"], ["按钮黄", 0, 0]);
                return t;
            };
            BtnAchieveSkin.prototype.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [29, "钻石", 29, 33, 3]);
                return t;
            };
            BtnAchieveSkin.prototype.btnachieve_diamond_i = function () {
                var t = new egret.gui.Label();
                this.btnachieve_diamond = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width"], ["Arial", 6, 20, "100", "center", 16777215, 8, "middle", 68]);
                return t;
            };
            BtnAchieveSkin.prototype.btnachieve_label_i = function () {
                var t = new egret.gui.Label();
                this.btnachieve_label = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "verticalAlign", "width", "y"], [0, 20, "领取奖励", "center", "middle", 102, 42]);
                return t;
            };
            BtnAchieveSkin.prototype.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__3 = t;
                this.__s(t, ["source", "y"], ["按钮灰", 0]);
                return t;
            };
            BtnAchieveSkin._skinParts = ["btnachieve_diamond", "btnachieve_label"];
            return BtnAchieveSkin;
        })(egret.gui.Skin);
        base.BtnAchieveSkin = BtnAchieveSkin;
        BtnAchieveSkin.prototype.__class__ = "skins.base.BtnAchieveSkin";
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
