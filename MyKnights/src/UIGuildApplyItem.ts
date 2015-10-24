class UIGuildApplyItem extends egret.gui.Panel {
    public label_name:egret.gui.Label;
    public label_level:egret.gui.Label;
    public label_type:egret.gui.Label;
    public select_frame:egret.gui.UIAsset;
    public select_mask:egret.gui.UIAsset;

    public guild_home_view:UIGuildHomeView;
    public index:number;
    public apply_info:Guild_Apply_Info;

    public is_selected:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIGuildApplyItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.y = this.height * this.index;

        this.select_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectGuildApply, this);

        this.refreshInfo();
    }

    public setIndex(view:UIGuildHomeView, index:number) {
        this.guild_home_view = view;
        this.index = index;
    }
    public resetApplyInfo(apply_info:Guild_Apply_Info) {
        this.apply_info = apply_info;
    }

    public deselect() {
        this.is_selected = false;
        if (this.select_mask == null) {
            return;
        }

        this.select_mask.visible = true;
        this.select_frame.visible = false;
    }

    public select() {
        this.is_selected = true;
        if (this.select_mask == null) {
            return;
        }

        this.select_mask.visible = false;
        this.select_frame.visible = true;
    }

    private onSelectGuildApply(evt) {
        if (this.is_selected) {
            return;
        }
        
        this.guild_home_view.selectGuildApply(this.index);
        this.select();
    }

    public refreshInfo() {
        if (this.label_name == null) {
            return;
        }

        this.label_name.text = this.apply_info.name;
        this.label_level.text = "" + this.apply_info.level;

        this.label_type.text = Utils.getKnightTypeName(this.apply_info.type);

        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    }

}

