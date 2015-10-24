class UIJobTeamListItem extends egret.gui.Panel {

    public captain_name:egret.gui.Label;
    public captain_job_type:egret.gui.Label;
    public captain_level:egret.gui.Label;
    public team_number:egret.gui.Label;
    public join_btn:egret.gui.Button;

    public item_data:JobTeamInfo;

    public my_index:number;
    public ui_parent:UIJobHomeView;

    public constructor(){
        super();
        this.skinName = "skins.UIJobTeamListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.list();
        this.join_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnJoin, this);
    }

    public setData(index:number, data:JobTeamInfo, parent:UIJobHomeView){
        this.my_index = index;
        this.item_data = data;
        this.ui_parent = parent;
    }

    private list(){
        this.y = this.my_index*65;
        this.captain_name.text = this.item_data.name;
        this.captain_job_type.text = "" + Utils.getKnightTypeName(this.item_data.type);
        this.captain_level.text = "" + this.item_data.level;

        this.team_number.text = "等待加入 " + this.item_data.members_num + "/5";
        this.team_number.textColor = 0xF9BC0B;
        
        if (this.item_data.members_num == 5) {
            this.team_number.text = "满员";
            this.team_number.textColor = 0xFB000A;
        }
    }

    public refreshList(index:number, data:JobTeamInfo) {
        this.my_index = index;
        this.item_data = data;
        this.list();
    }

    private onBtnJoin() {
        this.ui_parent.joinJobTeam(this.item_data.team_id);
    }

}

