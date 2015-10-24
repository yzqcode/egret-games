class UIShopItem extends egret.gui.Panel {
    public label_money_fee:egret.gui.Label;
    public label_money:egret.gui.Label;
    public money_select_frame:egret.gui.UIAsset;
    public money:egret.gui.UIAsset;
    public diamond_png:egret.gui.UIAsset;
    public money_png:egret.gui.UIAsset;
    public recive_png:egret.gui.UIAsset;
    public cards_bg:egret.gui.UIAsset;
    public cards_type:egret.gui.UIAsset;


    public my_index:number;
    public item_data1;
    public item_data2;
    public item_data3;

    public tab_index:number = -1;

    public ui_parent;

    public constructor(){
        super();
        this.skinName = "skins.UIShopItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.list();
        this.money.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChoose, this);
    }

    public setData(parent, index:number, data1, data2 = null, data3 = null){
        this.my_index = index;
        this.item_data1 = data1;
        this.item_data2 = data2;
        this.item_data3 = data3;
        this.ui_parent = parent;
    }

    private list(){
        this.x = this.my_index*212;

        if (this.ui_parent.current_shop_tab == SHOP_HOME_TAB.TAB_JOBCARD) {
            this.money_png.visible = false;
            this.recive_png.visible = false;
            this.cards_type.visible = true;
            this.cards_bg.visible = true;

            this.label_money_fee.text = "" + this.item_data1.card_fee;
            this.cards_bg.source = Utils.getJobCardImgName(this.item_data1.card_level);
            this.cards_type.source = Utils.getKnightBigImgName(this.item_data1.card_type);
        }
        else {
            if (this.ui_parent.current_shop_tab == SHOP_HOME_TAB.TAB_MONEY) {
                this.money_png.visible = false;

                this.label_money.text = "x" + this.item_data2;
                this.label_money_fee.text = "" + this.item_data1;
                this.recive_png.source = this.item_data3 + "_png";
            }
            else if (this.ui_parent.current_shop_tab == SHOP_HOME_TAB.TAB_DIAMOND) {
                this.money_png.visible = false;
                this.diamond_png.visible = false;

                this.label_money.text = "x" + this.item_data2;
                this.label_money_fee.text = this.item_data1 + "元";
                this.label_money_fee.x -= 20;

                this.recive_png.source = this.item_data3 + "_png";
                this.recive_png.x += 20;
                this.recive_png.y += 30;
            }
            else if (this.ui_parent.current_shop_tab == SHOP_HOME_TAB.TAB_STAMINA) {
                this.money_png.visible = false;

                this.label_money.text = "x" + this.item_data2;
                this.label_money_fee.text = "" + this.item_data1;

                this.recive_png.source = this.item_data3 + "_png";
                this.recive_png.x += 30;
                this.recive_png.y += 30;
            }
            else if (this.ui_parent.current_shop_tab == SHOP_HOME_TAB.TAB_TICKET) {
                this.money_png.visible = false;

                this.label_money.text = "x" + this.item_data2;
                this.label_money_fee.text = "" + this.item_data1;

                this.recive_png.source = this.item_data3 + "_png";
                this.recive_png.x += 10;
                this.recive_png.y += 30;
            }
        }
    }

    private onChoose() {
        if(this.ui_parent != null){
            if (this.ui_parent.money_frame != null) {
                this.ui_parent.money_frame.visible = false;
            }
            this.ui_parent.money_frame = this.money_select_frame;
            this.ui_parent.money_frame.visible = true;
            
            this.ui_parent.current_index = this.my_index;
        }
    }
}

