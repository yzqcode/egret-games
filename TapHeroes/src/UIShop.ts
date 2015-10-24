class PanelShop extends egret.gui.Panel{
    private scroller_view:egret.gui.Scroller;
    private scroller_back:egret.gui.UIAsset;
    private close_area:egret.gui.UIAsset;
    private label_diamond:egret.gui.Label;
    private label_money:egret.gui.Label;

    public constructor(){
        super();
        this.skinName = "skins.ShopSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private addOneShopItem(index:number) {
        var uiShopItem = new ItemShopDiamond();
        uiShopItem.setDiamondIndex(index);

        var main_scroller_group = <egret.gui.Group>this.scroller_view.viewport;
        main_scroller_group.addElement( uiShopItem )
    }

    public onCreationComplete( evt ) {
        this.scroller_view.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scroller_view.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.close_area.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClose, this );
        var iShopLen = G.buy_diamonds_fee.length;
        for ( var i = 0; i < iShopLen; ++i ) {
            this.addOneShopItem(i);
        }
        this.scroller_back.height = ( 107+4 ) * iShopLen + 10
        this.refreshDiamond()
        this.refreshMoney()
    }

    public refreshDiamond() {
        this.label_diamond.text = U.bigNumber(Logic.diamond)
    }

    public refreshMoney() {
        this.label_money.text = U.bigNumber(Logic.money)
    }

    public onClose( evt ) {
        this.visible = false
    }
}

