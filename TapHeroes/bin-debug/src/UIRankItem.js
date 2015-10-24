var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemRank = (function (_super) {
    __extends(ItemRank, _super);
    function ItemRank() {
        _super.call(this);
        this.skinName = "skins.base.RankItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemRank.prototype.setRankDatas = function (iRankIndex, rank_data) {
        this.m_iRankType = iRankIndex;
        if (iRankIndex == 0) {
            // Kill rank
            // [rank_no, kill_number, acount_name]
            this.m_iRank = rank_data[0];
            this.m_iStepNumber = rank_data[1];
            this.m_strUserName = rank_data[2];
        }
        else if (iRankIndex == 1) {
            // Difficulties rank
            // [rank_no, difficulty_number, kill_number, acount_name]
            this.m_iRank = rank_data[0];
            this.m_iDifficultyId = rank_data[1];
            this.m_iKillNumber = rank_data[2];
            this.m_strUserName = rank_data[3];
        }
    };
    ItemRank.prototype.onCreationComplete = function (evt) {
        this.y = (this.height + 4) * (this.m_iRank - 1);
        this.refresh();
    };
    ItemRank.prototype.refresh = function () {
        this.labelName.text = this.m_strUserName;
        this.labelRank.text = "" + this.m_iRank;
        if (this.m_iRank == 1 || this.m_iRank == 2 || this.m_iRank == 3) {
            this.iconRankBg.source = "rank_bg_" + this.m_iRank + "_png";
        }
        if (this.m_iRankType == 0) {
            this.labelStep.text = "击杀妖王数：" + this.m_iStepNumber;
        }
        else if (this.m_iRankType == 1) {
            this.labelStep.visible = false;
            this.labelDifficultyNum.visible = true;
            this.iconKill.visible = true;
            this.labelKillNum.visible = true;
            var name_list = Logic.getDifficultyNameById(this.m_iDifficultyId);
            this.labelDifficultyNum.text = name_list[0];
            this.labelKillNum.text = "x" + this.m_iKillNumber;
        }
    };
    return ItemRank;
})(egret.gui.Panel);
ItemRank.prototype.__class__ = "ItemRank";
