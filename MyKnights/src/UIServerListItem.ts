class UIServerListItem extends egret.gui.Panel {
    public server_name:egret.gui.Label;
    public choose_btn:egret.gui.Button;

    public item_data;
    public my_index:number;

    public server_list_dlg:UIServerListDialog;

    public constructor(){
        super();
        this.skinName = "skins.UIServerListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.list();
        this.choose_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChoose, this);
    }

    public setData(index:number, data:any, server_list_dlg:UIServerListDialog){
        this.my_index = index;
        this.item_data = data;

        this.server_list_dlg = server_list_dlg;
    }

    private list(){
        this.y = this.my_index*67;
        this.server_name.text = this.item_data.name + " : " + this.item_data.status + " : " + this.item_data.account_count;
    }

    private onChoose() {
        if(this.server_list_dlg != null){
            this.server_list_dlg.selectServer(this.my_index);
        }
    }
}

