var skins;
(function (skins) {
    var UIKnightSkillItemSkin = (function (_super) {
        __extends(UIKnightSkillItemSkin, _super);
        function UIKnightSkillItemSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.__s(this, ["height", "width"], [70, 185]);
            this.elementsContent = [this.icon_skill_i(), this.label_skill_des_i()];
            this.states = [
                new egret.gui.State("normal", []),
                new egret.gui.State("disabled", [])
            ];
        }
        var __egretProto__ = UIKnightSkillItemSkin.prototype;
        Object.defineProperty(__egretProto__, "skinParts", {
            get: function () {
                return UIKnightSkillItemSkin._skinParts;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.label_skill_des_i = function () {
            var t = new egret.gui.Label();
            this.label_skill_des = t;
            this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["Arial", 67, 15, "我们是共产主义接班人我们是共产主义接班人我们是共产主义接班人", "left", 0xF7EDBC, "middle", 122, 57, 1]);
            return t;
        };
        __egretProto__.icon_skill_i = function () {
            var t = new egret.gui.UIAsset();
            this.icon_skill = t;
            this.__s(t, ["source", "x", "y"], ["skill_1_png", 5, 13]);
            return t;
        };
        UIKnightSkillItemSkin._skinParts = ["icon_skill", "label_skill_des"];
        return UIKnightSkillItemSkin;
    })(egret.gui.Skin);
    skins.UIKnightSkillItemSkin = UIKnightSkillItemSkin;
    UIKnightSkillItemSkin.prototype.__class__ = "skins.UIKnightSkillItemSkin";
})(skins || (skins = {}));
