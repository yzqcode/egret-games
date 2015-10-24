class UIGuildListItem extends egret.gui.Panel {
    public label_guild_index:egret.gui.Label;
    public label_guild_name:egret.gui.Label;
    public label_members:egret.gui.Label;
    public label_status:egret.gui.Label;
    public select_frame:egret.gui.UIAsset;
    public select_mask:egret.gui.UIAsset;

    public guild_list_view:UIGuildListView;
    public index:number;
    public guild_info:Guild_Info;

    public is_selected:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIGuildListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.y = this.height * this.index;

        this.select_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectGuild, this);

        this.refreshInfo();
    }

    public setIndex(view:UIGuildListView, index:number) {
        this.guild_list_view = view;
        this.index = index;
    }
    public resetGuildInfo(guild_info:Guild_Info) {
        this.guild_info = guild_info;
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

    private onSelectGuild(evt) {
        
        if (this.is_selected) {
            return;
        }
        
        this.guild_list_view.selectGuild(this.index);
        this.select();
    }

    public refreshInfo() {
        if (this.label_guild_name == null) {
            return;
        }

        this.label_guild_index.text = "" + this.index;
        this.label_guild_name.text = this.guild_info.guild_name;
        this.label_members.text = "" + this.guild_info.guild_members + "/" + this.guild_info.guild_members_max;

        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
        
        this.label_status.text = "";
        if (Logic.isPlayerInGuild()) {
            return;
        }

        if (this.guild_info.self_apply_status == GUILD_APPLY_STATUS.REJECT) {
            this.label_status.text = "被拒绝";
            this.label_status.textColor = 0xFB000A;
        }
        else if (this.guild_info.self_apply_status == GUILD_APPLY_STATUS.HAS_APPLY) {
            this.label_status.text = "已申请";
            this.label_status.textColor = 0xF9BC0B;
        }
        else {
            this.label_status.text = "未申请";
            this.label_status.textColor = 0x78FF14;
        }
    }

}

