class BossGuideDlg extends egret.gui.Panel{
    private gameView:GameView;

    private iconClose:egret.gui.UIAsset;
    private labelFightBoss:egret.gui.Label;

    public constructor(){
        super();
        this.skinName = "skins.BossGuideDlgSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        // Add touch event listener.
        this.iconClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseClicked, this);
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);
    }

    private btnCloseClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            this.gameView.guiLayer.removeElement(this);

            this.gameView.ui_main.showFightBossGuide();
        }
    }
}
