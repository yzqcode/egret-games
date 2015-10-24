class UIKnightSkillItem extends egret.gui.Panel {
	public icon_skill:egret.gui.UIAsset;
    public label_skill_des:egret.gui.Label;

    public index:number;
    public skill_id:number;

    public constructor() {
        super();
        this.skinName = "skins.UIKnightSkillItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.y = this.height * this.index;

        this.refreshSkillInfo();
    }

    public setIndex(skill_id:number, index:number) {
        this.skill_id = skill_id;
        this.index = index;
    }

    public refreshSkillInfo() {
        var skill_line = Utils.getLine("skills_list", this.skill_id);
        if (skill_line == null) {
            return;
        }

        this.icon_skill.source = "skill_" + skill_line[skills_list_pic] + "_png";
        this.label_skill_des.text = skill_line[skills_list_desc];
    }

}

