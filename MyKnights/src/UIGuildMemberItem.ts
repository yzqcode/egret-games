class UIGuildMemberItem extends egret.gui.Panel {
    public label_name:egret.gui.Label;
    public label_level:egret.gui.Label;
    public label_type:egret.gui.Label;
    public label_position:egret.gui.Label;
    public label_status:egret.gui.Label;
    public select_frame:egret.gui.UIAsset;
    public select_mask:egret.gui.UIAsset;
    
    //public btn_kick:egret.gui.Button;

    public guild_home_view:UIGuildHomeView;
    public index:number;
    public member_info:Guild_Member_Info;

    public is_selected:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIGuildMemberItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.y = this.height * this.index;

        this.select_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectGuildMember, this);
        // this.btn_kick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKick, this);

        this.refreshInfo();
    }

    public setIndex(view:UIGuildHomeView, index:number) {
        this.guild_home_view = view;
        this.index = index;
    }
    public resetMemberInfo(member_info:Guild_Member_Info) {
        this.member_info = member_info;
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

    private onSelectGuildMember(evt) {
        
        if (this.is_selected) {
            return;
        }
        
        this.guild_home_view.selectGuildMember(this.index);
        this.select();
    }

    //public onKick() {
    //    this.guild_home_view.onKickGuildMember(this.member_info.player_id);
    //}

    public refreshInfo() {
        if (this.label_name == null) {
            return;
        }

        this.label_name.text = this.member_info.name;
        this.label_level.text = "" + this.member_info.level;

        this.label_type.text = Utils.getKnightTypeName(this.member_info.type);
        this.label_position.text = Utils.getPlayerGuildPositionName(this.member_info.position);

        //this.label_status.text = "status: " + this.member_info.player_status;
        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    }

}

