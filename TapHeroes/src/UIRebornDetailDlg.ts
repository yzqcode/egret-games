class RebornDetailDlg extends egret.gui.Panel{
    private gameView:GameView;

    private m_iLevelPeachNum:number;
    private m_iStagePeachNum:number;
    private m_iHeroPeachNum:number;
    private m_iTotalPeachNum:number;

    private labelRebornDesc:egret.gui.Label;
    private labelLevelPeach:egret.gui.Label;
    private labelStagePeach:egret.gui.Label;
    private labelHeroPeach:egret.gui.Label;
    private labelTotalPeach:egret.gui.Label;

    private btnConfirm:egret.gui.UIAsset;
    private iconClose:egret.gui.UIAsset;

    public constructor(){
        super();
        this.skinName = "skins.RebornDetailSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshRebornInfo();
        
        // Add touch event listener.
        this.iconClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseClicked, this);
        this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnConfirmClicked, this);
    }

    private refreshRebornInfo() {
        var arrayPeachFee = Logic.getResetPeach();

        this.m_iLevelPeachNum = arrayPeachFee[0];
        this.m_iStagePeachNum = arrayPeachFee[1];
        this.m_iHeroPeachNum = 0;
        if (arrayPeachFee[2] == 1) {
            this.m_iHeroPeachNum = arrayPeachFee[0] + arrayPeachFee[1];
        }
        this.m_iTotalPeachNum = this.m_iLevelPeachNum + this.m_iStagePeachNum + this.m_iHeroPeachNum;

        this.labelLevelPeach.text = "" + this.m_iLevelPeachNum;
        this.labelStagePeach.text = "" + this.m_iStagePeachNum;
        this.labelHeroPeach.text = "" + this.m_iHeroPeachNum;
        this.labelTotalPeach.text = "" + this.m_iTotalPeachNum;

        this.labelRebornDesc.lineSpacing = 8;

        this.btnConfirm.enabled = true;
        //this.btnConfirm.enabled = false;
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);
    }

    private btnConfirmClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            var arrayResList = Logic.triggerSkill(7);

            var bRebornRes = arrayResList[0];
            if (bRebornRes == false) {
                console.log("========= Reborn failed!!!");
                return;
            }

            this.gameView.guiLayer.removeElement(this);
            this.gameView.showRebornAnim();
        }
    }

    private btnCloseClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            this.gameView.guiLayer.removeElement(this);
        }
    }
}
