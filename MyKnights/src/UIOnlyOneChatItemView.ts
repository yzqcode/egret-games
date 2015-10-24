class UIOnlyOneChatItemView extends egret.gui.Panel {
    public label_say:egret.gui.Label;

    public item_data:string;

    public item_pos:number;

    public constructor(){
        super();
        this.skinName = "skins.UIOnlyOneChatItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.refreshList();
    }

    public setData(index:number, data:any){
        this.item_pos = index;
        this.item_data = data;
    }

    private refreshList(){
        this.y = (this.item_pos - 1)*56;
        this.label_say.text = this.item_data;
    }

}

