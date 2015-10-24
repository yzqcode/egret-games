class ItemArtifactPurchase extends egret.gui.Panel{
    private gameView:GameView;

    private m_iBuyFee:number;

    private iconArtifactPic:egret.gui.UIAsset;
    private labePeachFee:egret.gui.Label;
    private btnBuy:egret.gui.Button;

    public constructor(){
        super();
        this.skinName = "skins.base.ArtifactPurchaseSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshArtifactInfo();

        // Add touch event listener.
        this.btnBuy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnBuyArtifactClicked, this);
    }

    private refreshArtifactInfo() {
        if (this.btnBuy == null) {
            return;
        }
        
        var bCanBuy = Logic.canBuyArtifact();
        this.btnBuy.enabled = bCanBuy;

        var iFee = Logic.getBuyArtifactPeach();
        this.m_iBuyFee = 0;
        if (iFee != null) {
            this.m_iBuyFee = iFee;
        }

        this.labePeachFee.text = "" + Utils.bigNumber(this.m_iBuyFee);
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);
    }

    private btnBuyArtifactClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            var buyResults = Logic.buyArtifact();
            var bBuyRes = buyResults[0];
            if (bBuyRes == false) {
                console.log("========= Buy artifact failed!!!");
                return;
            }

            this.refreshArtifactInfo();

            var viewport = <egret.gui.IViewport>this.gameView.ui_main.main_scroller3.viewport;
            var group = <egret.gui.Group>this.gameView.ui_main.main_scroller3.viewport;
            var top = viewport.verticalScrollPosition
            var child = group.getElementAt( 0 )

            var posX = this.iconArtifactPic.x + this.iconArtifactPic.width/2 + 5;
            var posY = this.gameView.ui_main.main_scroller3.y + child.y - top + this.iconArtifactPic.y + this.iconArtifactPic.height;

            this.gameView.showLevelUpAnim(posX, posY);
            this.gameView.ui_main.refreshPeach();
            this.gameView.ui_main.refreshAllAboutDamage();
            this.gameView.ui_main.refreshArtifactListForNew();
        }
    }
}
