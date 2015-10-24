class UIJobMemberListItem extends egret.gui.Panel {

    public member_name:egret.gui.Label;
    public member_job_type:egret.gui.Label;
    public member_level:egret.gui.Label;
    public member_post:egret.gui.Label;
    public select_frame:egret.gui.UIAsset;
    public select_btn:egret.gui.UIAsset;

    public item_data:JobTeamMembers;

    public my_index:number;
    public ui_parent:UIJobHomeView;

    public is_selected:boolean = false;

    public constructor(){
        super();
        this.skinName = "skins.UIJobMemberListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.list();

        this.select_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBtn, this);
    }

    public setData(index:number, data:JobTeamMembers, parent:UIJobHomeView){
        this.my_index = index;
        this.item_data = data;
        this.ui_parent = parent;
    }

    private list(){
        this.y = this.my_index*65;
        this.member_name.text = this.item_data.name;
        this.member_job_type.text = "" + Utils.getKnightTypeName(this.item_data.type);
        this.member_level.text = "" + this.item_data.level;
        if(this.item_data.isLeader) {
            this.member_post.text = "队长";
        }
        else{
            this.member_post.text = "队员";
        }

        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    }

    public refreshList(index:number, data:JobTeamMembers) {
        this.my_index = index;
        this.item_data = data;
        this.list();
    }

    public deselect() {
        this.is_selected = false;
        if (this.select_btn == null) {
            return;
        }

        this.select_btn.visible = true;
        this.select_frame.visible = false;
    }

    public select() {
        this.is_selected = true;
        if (this.select_btn == null) {
            return;
        }

        this.select_btn.visible = false;
        this.select_frame.visible = true;
    }

    private onSelectBtn() {
        if (this.is_selected) {
            return;
        }
        
        this.ui_parent.selectTeamMember(this.my_index);
        this.select();
    }
}

