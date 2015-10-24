class CleanCdDlg extends egret.gui.Panel{
    private gameView:GameView;

    private diamond_text:egret.gui.Label;
    private clean_btn:egret.gui.UIAsset;
    private close_area:egret.gui.UIAsset;
    
    private m_iDiamondNum:number;

    public constructor() {
        super();
        this.skinName = "skins.CleanCdDlgSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.m_iDiamondNum = Logic.getCleanSkillCDDiamond();
        this.diamond_text.text = "x" + Utils.bigNumber(this.m_iDiamondNum);

        this.close_area.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClose, this );
        this.clean_btn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onCleanClicked, this );
    }

    private onCleanClicked( evt ) {
        this.gameView.guiLayer.removeElement(this);

        
        var ret = Logic.cleanSkillCD();
        if ( ret == 0 ) {
            // TODO:
        }
        else if (ret == 1) {
            this.gameView.showLowDiamondHint();
        }
    }

    public onClose( evt ) {
        this.gameView.guiLayer.removeElement(this);
    }
}

