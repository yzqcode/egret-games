var UIKnightSkillItem = (function (_super) {
    __extends(UIKnightSkillItem, _super);
    function UIKnightSkillItem() {
        _super.call(this);
        this.skinName = "skins.UIKnightSkillItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIKnightSkillItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.y = this.height * this.index;
        this.refreshSkillInfo();
    };
    __egretProto__.setIndex = function (skill_id, index) {
        this.skill_id = skill_id;
        this.index = index;
    };
    __egretProto__.refreshSkillInfo = function () {
        var skill_line = Utils.getLine("skills_list", this.skill_id);
        if (skill_line == null) {
            return;
        }
        this.icon_skill.source = "skill_" + skill_line[skills_list_pic] + "_png";
        this.label_skill_des.text = skill_line[skills_list_desc];
    };
    return UIKnightSkillItem;
})(egret.gui.Panel);
UIKnightSkillItem.prototype.__class__ = "UIKnightSkillItem";
