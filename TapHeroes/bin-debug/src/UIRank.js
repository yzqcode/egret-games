var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PanelRank = (function (_super) {
    __extends(PanelRank, _super);
    function PanelRank() {
        _super.call(this);
        this.m_bIsWaitingData = true;
        this.m_iWaitingTick = 0;
        this.m_iCurrentRankIndex = 0;
        this.uiScrollList = [];
        this.uiScrollBackList = [];
        this.uiTabBgList = [];
        this.uiTabTitleList = [];
        this.rank_datas_1 = [];
        this.rank_datas_2 = [];
        this.m_iSelfRankNO = [0, 0];
        this.m_bHasNewDataList = [true, true];
        this.m_iLastAddNumList = [0, 0];
        this.m_iRankNumList = [0, 0];
        this.m_arrayRankDatasList = [];
        this.skinName = "skins.RankSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    PanelRank.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.labelSelfName.text = Logic.player.name;
        this.scroller_view_1.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scroller_view_1.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.scroller_back_1.touchEnabled = true;
        this.scroller_view_2.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scroller_view_2.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.scroller_back_2.touchEnabled = true;
        this.uiScrollList = [this.scroller_view_1, this.scroller_view_2];
        this.uiScrollBackList = [this.scroller_back_1, this.scroller_back_2];
        this.uiTabBgList = [this.tab_bg_1, this.tab_bg_2];
        this.uiTabTitleList = [this.tab_title_1, this.tab_title_2];
        this.m_arrayRankDatasList = [this.rank_datas_1, this.rank_datas_2];
        this.tab_bg_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapTab1, this);
        this.tab_bg_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapTab2, this);
        this.close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.refreshRankList(this.m_iCurrentRankIndex);
        this.refresh_timer = new egret.Timer(1000, -1);
        this.refresh_timer.addEventListener(egret.TimerEvent.TIMER, this.onRefreshTimer, this);
        this.refresh_timer.start();
    };
    PanelRank.prototype.onTapTab1 = function () {
        this.showNewRankTab(0);
    };
    PanelRank.prototype.onTapTab2 = function () {
        this.showNewRankTab(1);
    };
    PanelRank.prototype.showNewRankTab = function (index) {
        if (this.m_iCurrentRankIndex == index) {
            return;
        }
        this.uiScrollList[this.m_iCurrentRankIndex].visible = false;
        var tw_bg1 = egret.Tween.get(this.uiTabBgList[this.m_iCurrentRankIndex]);
        tw_bg1.to({ y: this.uiTabBgList[this.m_iCurrentRankIndex].y + 10, alpha: 0.3 }, 100);
        var tw_title1 = egret.Tween.get(this.uiTabTitleList[this.m_iCurrentRankIndex]);
        this.uiTabTitleList[this.m_iCurrentRankIndex].textColor = 0x9A9A9A;
        tw_title1.to({ y: this.uiTabTitleList[this.m_iCurrentRankIndex].y + 10, size: 30 }, 100);
        this.uiScrollList[index].visible = true;
        var tw_bg2 = egret.Tween.get(this.uiTabBgList[index]);
        tw_bg2.to({ y: this.uiTabBgList[index].y - 10, alpha: 1.0 }, 100);
        var tw_title2 = egret.Tween.get(this.uiTabTitleList[index]);
        this.uiTabTitleList[index].textColor = 0xFFC700;
        tw_title2.to({ y: this.uiTabTitleList[index].y - 10, size: 35 }, 100);
        this.m_iCurrentRankIndex = index;
        if (this.m_iSelfRankNO[this.m_iCurrentRankIndex] <= 0) {
            this.labelSelfRank.text = "999+";
        }
        else {
            this.labelSelfRank.text = "" + this.m_iSelfRankNO[this.m_iCurrentRankIndex];
        }
        if (this.m_iCurrentRankIndex == 0) {
            this.labelSelfStep.visible = true;
            this.labelSelfDifficultyNum.visible = false;
            this.iconSelfKill.visible = false;
            this.labelSelfKillNum.visible = false;
        }
        else if (this.m_iCurrentRankIndex == 1) {
            this.labelSelfStep.visible = false;
            this.labelSelfDifficultyNum.visible = true;
            this.iconSelfKill.visible = true;
            this.labelSelfKillNum.visible = true;
        }
    };
    PanelRank.prototype.setSelfRankNO = function (iRankIndex, iSelfRankNO) {
        if (this.m_iSelfRankNO[iRankIndex] == iSelfRankNO) {
            return;
        }
        this.m_iSelfRankNO[iRankIndex] == iSelfRankNO;
        if (this.m_iSelfRankNO[this.m_iCurrentRankIndex] <= 0) {
            this.labelSelfRank.text = "999+";
        }
        else {
            this.labelSelfRank.text = "" + this.m_iSelfRankNO[this.m_iCurrentRankIndex];
        }
        this.labelSelfStep.text = "" + Logic.step;
        var name_list = Logic.getDifficultyNameById(Logic.difficulty_passed_id);
        this.labelSelfDifficultyNum.text = name_list[0];
        var iKillSum = 0;
        for (var i = 0; i < Logic.difficulties_records.length; i++) {
            iKillSum += Logic.difficulties_records[i];
        }
        this.labelSelfKillNum.text = "" + iKillSum;
    };
    PanelRank.prototype.addOneRankItem = function (iRankIndex) {
        var rank_item = new ItemRank();
        var rank_data = this.m_arrayRankDatasList[iRankIndex][this.m_iRankNumList[iRankIndex]];
        rank_item.setRankDatas(iRankIndex, rank_data);
        var main_scroller_group = this.uiScrollList[iRankIndex].viewport;
        main_scroller_group.addElement(rank_item);
        this.m_iRankNumList[iRankIndex]++;
    };
    PanelRank.prototype.addRankData = function (iRankIndex, iRankNO, data) {
        var rank_data = [];
        if (iRankIndex == 0) {
            // Kill rank
            // [kill_number, acount_name]
            rank_data.push(iRankNO);
            rank_data.push(data[0]);
            rank_data.push(data[1]);
        }
        else if (iRankIndex == 1) {
            // Difficulties rank
            // [difficulty_number, kill_number, acount_name]
            rank_data.push(iRankNO);
            rank_data.push(data[0]);
            rank_data.push(data[1]);
            rank_data.push(data[2]);
        }
        else {
            return;
        }
        this.m_arrayRankDatasList[iRankIndex].push(rank_data);
        this.m_iLastAddNumList[iRankIndex]++;
    };
    PanelRank.prototype.refreshRankList = function (iRankIndex) {
        if (this.scroller_view_1 == null) {
            return;
        }
        if (this.m_iLastAddNumList[iRankIndex] <= 0) {
            return;
        }
        for (; this.m_iRankNumList[iRankIndex] < this.m_arrayRankDatasList[iRankIndex].length;) {
            this.addOneRankItem(iRankIndex);
        }
        this.uiScrollBackList[iRankIndex].height = (107 + 4) * this.m_iRankNumList[iRankIndex] + 10;
        if (this.m_iLastAddNumList[iRankIndex] < 10) {
            this.m_bHasNewDataList[iRankIndex] = false;
        }
        this.m_iLastAddNumList[iRankIndex] = 0;
        this.m_bIsWaitingData = false;
        if (this.waiting_text.visible == true) {
            this.waiting_text.visible = false;
        }
    };
    PanelRank.prototype.setNoNewRankData = function (iRankIndex) {
        this.m_bIsWaitingData = false;
        this.m_bHasNewDataList[iRankIndex] = false;
        if (this.waiting_text.visible == true) {
            this.waiting_text.visible = false;
        }
    };
    PanelRank.prototype.onRefreshTimer = function (event) {
        if (this.m_bIsWaitingData) {
            this.m_iWaitingTick++;
            if (this.waiting_text.visible == true) {
                var strText = "努力加载中，请稍候";
                var iDotNum = this.m_iWaitingTick % 6;
                for (var i = 0; i <= iDotNum; i++) {
                    strText = strText + ".";
                }
                this.waiting_text.text = strText;
            }
            return;
        }
        if (this.m_bHasNewDataList[this.m_iCurrentRankIndex] == false) {
            if (this.m_bHasNewDataList[0] == false && this.m_bHasNewDataList[1] == false) {
                this.refresh_timer.stop();
                this.refresh_timer = null;
            }
            return;
        }
        // Refresh rank list when the last item is visible
        var viewport = this.uiScrollList[this.m_iCurrentRankIndex].viewport;
        var group = this.uiScrollList[this.m_iCurrentRankIndex].viewport;
        var top = viewport.verticalScrollPosition;
        var bottom = top + this.scroller_view_1.height;
        var last_child = group.getElementAt(group.numElements - 1);
        if (last_child.y < bottom) {
            Net.getRank(this.m_iCurrentRankIndex + 1, this.m_iRankNumList[this.m_iCurrentRankIndex], 10);
            this.m_bIsWaitingData = true;
        }
    };
    PanelRank.prototype.onClose = function (evt) {
        if (this.refresh_timer != null) {
            this.refresh_timer.stop();
            this.refresh_timer = null;
        }
        this.gameView.rank_dialog = null;
        this.gameView.guiLayer.removeElement(this);
    };
    return PanelRank;
})(egret.gui.Panel);
PanelRank.prototype.__class__ = "PanelRank";
