class ArtifactDetailDlg extends egret.gui.Panel{
    private gameView:GameView;

    private m_iArtifactIndex:number;
    private m_iArtifactId:number;

    private m_strArtifactPic:string;
    private m_strArtifactName:string;
    private m_iArtifactLevel:number;
    private m_iArtifactLevelMax:number;
    private m_strArtifactCurrentBuf1:string;
    private m_strArtifactCurrentBuf2:string;
    private m_strArtifactNextBuf1:string;
    private m_strArtifactNextBuf2:string;
    private m_strArtifactDesc:string;
    private m_iReturnPeachNum:number;
    private m_iDiamondFee:number;

    private iconArtifact:egret.gui.UIAsset;
    private labelArtifactName:egret.gui.Label;
    private labelArtifactLevel:egret.gui.Label;
    private labelLevelMax:egret.gui.Label;
    private labelCurrentBuf1:egret.gui.Label;
    private labelCurrentBuf2:egret.gui.Label;
    private labelNextBuf1:egret.gui.Label;
    private labelNextBuf2:egret.gui.Label;
    private labelArtifactDesc:egret.gui.Label;
    private labelPeachNum:egret.gui.Label;
    private labelDiamondFee:egret.gui.Label;

    private btnConfirm:egret.gui.Button;
    private iconClose:egret.gui.UIAsset;

    public constructor(){
        super();
        this.skinName = "skins.ArtifactDetailDlgSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshArtifactInfo();
        
        // Add touch event listener.
        this.iconClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseClicked, this);
        this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnConfirmClicked, this);
    }

    private refreshArtifactInfo() {
        this.iconArtifact.source = RES.getRes(this.m_strArtifactPic);
        this.labelArtifactName.text = this.m_strArtifactName;
        this.labelArtifactLevel.text = "" + this.m_iArtifactLevel;

        this.labelCurrentBuf1.text = this.m_strArtifactCurrentBuf1;
        this.labelCurrentBuf2.text = this.m_strArtifactCurrentBuf2;
        this.labelNextBuf1.text = this.m_strArtifactNextBuf1;
        this.labelNextBuf2.text = this.m_strArtifactNextBuf2;

        this.labelArtifactDesc.text = this.m_strArtifactDesc;
        this.labelPeachNum.text = "" + this.m_iReturnPeachNum;
        this.labelDiamondFee.text = "" + this.m_iDiamondFee;

        if (this.m_iArtifactLevel == this.m_iArtifactLevelMax) {
            this.labelLevelMax.visible = true;
        } else {
            this.labelLevelMax.visible = false;
        }

        if (Logic.diamond < this.m_iDiamondFee) {
            this.btnConfirm.enabled = false;
        } else {
            this.btnConfirm.enabled = true;
        }
    }

    public initArtifactIndex(index:number) {
        this.m_iArtifactIndex = index;
        this.m_iArtifactId = Logic.artifacts[index].artifact_id;

        this.m_strArtifactPic = "法宝_" + this.m_iArtifactId;
        this.m_strArtifactName = Logic.artifacts[index].name;
        this.m_iArtifactLevel = Logic.artifacts[this.m_iArtifactIndex].level;
        this.m_iArtifactLevelMax = Logic.artifacts[this.m_iArtifactIndex].max_level;

        var iCurrentBufIndex = Logic.artifacts[index].effect_type1;
        var iCurrentBufData = Utils.percentNumber(Logic.artifacts[index].effect_data1);
        this.m_strArtifactCurrentBuf1 = EF_TEXT[iCurrentBufIndex] + EF_PLUS[iCurrentBufIndex] + iCurrentBufData;

        iCurrentBufIndex = Logic.artifacts[index].effect_type2;
        iCurrentBufData = Utils.percentNumber(Logic.artifacts[index].effect_data2);
        this.m_strArtifactCurrentBuf2 = EF_TEXT[iCurrentBufIndex] + EF_PLUS[iCurrentBufIndex] + iCurrentBufData;

        iCurrentBufIndex = Logic.artifacts[index].effect_type1;
        iCurrentBufData = Utils.percentNumber(Logic.artifacts[index].effect_data_next1);
        this.m_strArtifactNextBuf1 = EF_TEXT[iCurrentBufIndex] + EF_PLUS[iCurrentBufIndex] + iCurrentBufData;

        iCurrentBufIndex = Logic.artifacts[index].effect_type2;
        iCurrentBufData = Utils.percentNumber(Logic.artifacts[index].effect_data_next2);
        this.m_strArtifactNextBuf2 = EF_TEXT[iCurrentBufIndex] + EF_PLUS[iCurrentBufIndex] + iCurrentBufData;

        var mbLine = Utils.getLine("artifact_list", this.m_iArtifactId);
        this.m_strArtifactDesc = mbLine[artifact_list_info];
             
        var arrayFeeList = Logic.getDestroyArtifactPeach(this.m_iArtifactId);
        this.m_iReturnPeachNum = arrayFeeList[0];
        this.m_iDiamondFee = arrayFeeList[1];
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);
    }

    private btnConfirmClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            var bDestroyRes = Logic.destroyArtifact(this.m_iArtifactId);
            if (bDestroyRes == false) {
                console.log("========= Artifact destroy failed!!!");
                return;
            }

            this.gameView.guiLayer.removeElement(this);

            this.gameView.ui_main.reloadArtifactList();
            
            this.gameView.ui_main.refreshPeach();
            this.gameView.ui_main.refreshDiamond();
            this.gameView.ui_main.refreshAllAboutDamage();
        }
    }

    private btnCloseClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            this.gameView.guiLayer.removeElement(this);
        }
    }
}
