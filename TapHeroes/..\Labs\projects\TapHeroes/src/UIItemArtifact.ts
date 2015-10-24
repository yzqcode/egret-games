class ItemArtifact extends egret.gui.Panel{
    private gameView:GameView;

    private m_iArtifactIndex:number;
    private m_iArtifactId:number;

    private m_strArtifactPic:string;
    private m_strArtifactName:string;
    private m_iArtifactLevel:number;
    private m_iArtifactLevelMax:number;
    private m_strArtifactBuf1:string;
    private m_strArtifactBuf2:string;
    private m_iLevelupFee:number;

    private iconArtifactPic:egret.gui.UIAsset;
    private labelArtifactName:egret.gui.Label;
    private labelArtifactLevel:egret.gui.Label;
    private labelArtifactBuf1:egret.gui.Label;
    private labelArtifactBuf2:egret.gui.Label;
    private labelArtifactFee:egret.gui.Label;
    private btnLevelUp:egret.gui.Button;
    private rectDetailArea:egret.gui.Rect;

    public constructor(){
        super();
        this.skinName = "skins.base.ArtifactItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshArtifactInfo();
        this.refreshLockStatus();

        // Add touch event listener.
        this.rectDetailArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnDetailClicked, this);
        this.btnLevelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnLevelUpClicked, this);
    }

    public refreshLockStatus() {
        if (this.btnLevelUp == null) {
            return;
        }

        if (Logic.peach >= this.m_iLevelupFee 
            && this.m_iArtifactLevel < this.m_iArtifactLevelMax) {
            this.btnLevelUp.enabled = true;
        } else {
            this.btnLevelUp.enabled = false;
        }
    }

    private refreshArtifactInfo() {
        this.m_iArtifactLevel = Logic.artifacts[this.m_iArtifactIndex].level;
        this.m_iLevelupFee = Logic.artifacts[this.m_iArtifactIndex].levelup_peach;

        var iCurrentBufIndex = Logic.artifacts[this.m_iArtifactIndex].effect_type1;
        var iCurrentBufData = Utils.percentNumber(Logic.artifacts[this.m_iArtifactIndex].effect_data1);
        this.m_strArtifactBuf1 = EF_TEXT[iCurrentBufIndex] + EF_PLUS[iCurrentBufIndex] + iCurrentBufData;

        iCurrentBufIndex = Logic.artifacts[this.m_iArtifactIndex].effect_type2;
        iCurrentBufData = Utils.percentNumber(Logic.artifacts[this.m_iArtifactIndex].effect_data2);
        this.m_strArtifactBuf2 = EF_TEXT[iCurrentBufIndex] + EF_PLUS[iCurrentBufIndex] + iCurrentBufData;

        this.iconArtifactPic.source = RES.getRes(this.m_strArtifactPic);
        this.labelArtifactName.text = this.m_strArtifactName;
        this.labelArtifactLevel.text = "" + this.m_iArtifactLevel;
        this.labelArtifactBuf1.text = this.m_strArtifactBuf1;
        this.labelArtifactBuf2.text = this.m_strArtifactBuf2;
        this.labelArtifactFee.text = U.bigNumber( this.m_iLevelupFee );
    }

    public setArtifactIndex(index:number) {
        this.m_iArtifactIndex = index;
        this.m_iArtifactId = Logic.artifacts[index].artifact_id;

        this.m_strArtifactPic = "法宝_" + this.m_iArtifactId;
        this.m_strArtifactName = Logic.artifacts[index].name;

        this.m_iArtifactLevelMax = Logic.artifacts[this.m_iArtifactIndex].max_level;
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);
    }

    private btnLevelUpClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            var bLevelUpRes = Logic.levelupArtifact(this.m_iArtifactId);
            if (bLevelUpRes == false) {
                console.log("========= Artifact level up failed!!!");
                return;
            }

            this.refreshArtifactInfo();
            this.refreshLockStatus();

            var viewport = <egret.gui.IViewport>this.gameView.ui_main.main_scroller3.viewport;
            var group = <egret.gui.Group>this.gameView.ui_main.main_scroller3.viewport;
            var top = viewport.verticalScrollPosition
            var child = group.getElementAt( this.m_iArtifactIndex + 1 )

            var posX = this.iconArtifactPic.x + this.iconArtifactPic.width/2 + 5;
            var posY = this.gameView.ui_main.main_scroller3.y + child.y + top + this.iconArtifactPic.y + this.iconArtifactPic.height;

            this.gameView.showLevelUpAnim(posX, posY);
            this.gameView.ui_main.refreshPeach();
            this.gameView.ui_main.refreshDamageInfo();
        }
    }

    private btnDetailClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            
            this.gameView.showArtifactDetailDlg(this.m_iArtifactIndex);
        }
    }
}
