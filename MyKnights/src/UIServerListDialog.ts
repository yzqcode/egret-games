//removeEventListener
class UIServerListDialog extends egret.gui.Panel{
    public close_btn:egret.gui.Button;
    public server_scroller:egret.gui.Scroller;

    public base_loading_view:UIBaseLoadingView = null;

    public constructor(){
        super();
        this.skinName = "skins.UIServerListDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.refreshList();

        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.closeCallback,this);
    }

    public showDialog(parent:UIBaseLoadingView) {
        this.base_loading_view = parent;
    }

    public refreshList() {
        var group = <egret.gui.Group>this.server_scroller.viewport;
        for(var i=0; i<Net.server_list.length; i++){
            var current_server = Net.server_list[i];

            var item = new UIServerListItem();
            item.setData(i, current_server, this);
            group.addElement(item);
        }
    }

    public selectServer(index:number) {
        if (index < 0 || index >= Net.server_list.length) {
            return;
        }

        Net.current_server_index = index;

        this.base_loading_view.refreshCurrentServerInfo();
        this.closeCallback();
    }
   
    public closeCallback() {
       if(this.base_loading_view != null){
           this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.closeCallback,this);

           this.base_loading_view.guiLayer.removeElement(this);
       }
    }
}

