class ItemRank extends egret.gui.Panel{
    
    private iconRankBg:egret.gui.UIAsset;
    private iconHead:egret.gui.UIAsset;
    private labelName:egret.gui.Label;
    private labelRank:egret.gui.Label;

    private labelStep:egret.gui.Label;

    private labelDifficultyNum:egret.gui.Label;
    private iconKill:egret.gui.UIAsset;
    private labelKillNum:egret.gui.Label;

    private m_iRankType:number;
    private m_strUserName:string;
    private m_iRank:number;

    private m_iStepNumber:number;

    private m_iDifficultyId:number;
    private m_iKillNumber:number;

    public constructor(){
        super();
        this.skinName = "skins.base.RankItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public setRankDatas(iRankIndex, rank_data ) {
        this.m_iRankType = iRankIndex;

        if (iRankIndex == 0) {
            // Kill rank
            // [rank_no, kill_number, acount_name]
            this.m_iRank = rank_data[0]
            this.m_iStepNumber = rank_data[1]
            this.m_strUserName = rank_data[2]
        }
        else if (iRankIndex == 1) {
            // Difficulties rank
            // [rank_no, difficulty_number, kill_number, acount_name]
            this.m_iRank = rank_data[0]
            this.m_iDifficultyId = rank_data[1]
            this.m_iKillNumber = rank_data[2]
            this.m_strUserName = rank_data[3]
        }
    }

    public onCreationComplete( evt ) {
        this.y = ( this.height + 4 ) * (this.m_iRank-1);
        this.refresh()
    }

    public refresh() {
        this.labelName.text = this.m_strUserName;
        this.labelRank.text = "" + this.m_iRank

        if (this.m_iRank == 1 || this.m_iRank == 2 || this.m_iRank == 3) {
            this.iconRankBg.source = "rank_bg_" + this.m_iRank + "_png";
        }

        if (this.m_iRankType == 0) {
            this.labelStep.text = "击杀妖王数：" + this.m_iStepNumber
        }
        else if (this.m_iRankType == 1) {
            this.labelStep.visible = false;

            this.labelDifficultyNum.visible = true;
            this.iconKill.visible = true;
            this.labelKillNum.visible = true;

            var name_list = Logic.getDifficultyNameById(this.m_iDifficultyId);
            this.labelDifficultyNum.text = name_list[0]

            this.labelKillNum.text = "x" + this.m_iKillNumber

            
        }
    }
}

