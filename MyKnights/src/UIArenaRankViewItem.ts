class UIArenaRankViewItem extends egret.gui.Panel {

    public label_ranking:egret.gui.Label;
    public label_name:egret.gui.Label;
    public label_guild:egret.gui.Label;
    public label_score:egret.gui.Label;
    public btn_look:egret.gui.Button;

    public item_data;

    public my_index:number;
    public ui_parent;

    public constructor(){
        super();
        this.skinName = "skins.UIArenaRankItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.list();
        this.btn_look.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnLook, this);
    }

    public setData(index:number, data:any, parent){
        this.my_index = index;
        this.item_data = data;
        this.ui_parent = parent;
    }

    private list(){
        this.y = (this.my_index - 1)*68;
        this.label_ranking.text = "" + this.my_index;
        this.label_name.text = this.item_data.player_name;
        this.label_guild.text = this.item_data.guild_name;
        this.label_score.text = "" + this.item_data.scores;
    }

    private onBtnLook() {
        if (this.ui_parent.player_datail_dlg != null) {
            return;
        }
        var player_datail_dlg = new UIPlayerDetailDialog();
        player_datail_dlg.setPlayerId(this.ui_parent, this.ui_parent.guiLayer, this.item_data.player_id);
        this.ui_parent.player_datail_dlg = player_datail_dlg
        this.ui_parent.guiLayer.addElement(player_datail_dlg);
    }

}

