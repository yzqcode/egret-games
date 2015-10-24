var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PanelMain = (function (_super) {
    __extends(PanelMain, _super);
    function PanelMain() {
        _super.call(this);
        this.uiScrollList = [];
        this.mMoneyText = null;
        this.mBossTickText = null;
        this.mSubStepText = null;
        this.uiSkillMainList = [];
        this.uiSkillMaskList = [];
        this.uiSkillRedMaskList = [];
        this.uiSkillTickList = [];
        this.m_arrayCurrentList1 = [];
        this.m_arrayCurrentList2 = [];
        this.m_arrayCurrentList3 = [];
        this.m_arrayCurrentList4 = [];
        this.m_arrayAllLists = [];
        this.m_bIsInDifficulty = false;
        this.m_iDifficultyLeftTime = 0;
        this.m_bIsBoss = false;
        this.m_iBossLeftTime = 0;
        this.m_iLastStep = -1;
        this.m_iLastMoney = -1;
        this.m_iLastDiamond = -1;
        this.m_iLastPeach = -1;
        this.l_btn_main = [];
        this.m_iTapGuideStep = 0;
        this.m_iMonkeyGuideStep = 0;
        this.m_iHeroGuide = 0;
        this.m_bShowSkillNewIcon = false;
        this.m_bShowHeroNewIcon = false;
        this.skinName = "skins.Main";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    PanelMain.prototype.onCreationComplete = function (evt) {
        this.l_btn_main = [this.btn_main1, this.btn_main2, this.btn_main3, this.btn_main4];
        this.m_iCurrentTabIndex = -1;
        this.uiScrollList = [this.main_scroller1, this.main_scroller2, this.main_scroller3, this.main_scroller4];
        this.main_scroller1.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.main_scroller2.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.main_scroller3.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.main_scroller4.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.m_arrayAllLists = [this.m_arrayCurrentList1, this.m_arrayCurrentList2, this.m_arrayCurrentList3, this.m_arrayCurrentList4];
        this.uiSkillMainList = [this.iconPlayerSkill1, this.iconPlayerSkill2, this.iconPlayerSkill3, this.iconPlayerSkill4, this.iconPlayerSkill5, this.iconPlayerSkill6];
        this.uiSkillMaskList = [this.iconSkillMask1, this.iconSkillMask2, this.iconSkillMask3, this.iconSkillMask4, this.iconSkillMask5, this.iconSkillMask6];
        this.uiSkillRedMaskList = [this.iconSkillRedMask1, this.iconSkillRedMask2, this.iconSkillRedMask3, this.iconSkillRedMask4, this.iconSkillRedMask5, this.iconSkillRedMask6];
        this.uiSkillTickList = [this.labelSkillTick1, this.labelSkillTick2, this.labelSkillTick3, this.labelSkillTick4, this.labelSkillTick5, this.labelSkillTick6];
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.addAllSpecialText();
        this.refreshSkillOnMain();
        this.refreshMoney();
        this.refreshPeach();
        this.refreshDiamond();
        this.refreshDamageInfo();
        this.refreshStepInfo();
        this.refreshMonsterType();
        this.optimize_timer = new egret.Timer(200, -1);
        this.optimize_timer.addEventListener(egret.TimerEvent.TIMER, this.onOptimizeTimer, this);
        this.iconFightBoss.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnFightBossClicked, this);
        this.btn_main_achievement.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnAchievement, this);
        if (no_any_pay) {
            this.btn_main_shop.visible = false;
        }
        else {
            this.btn_main_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnShop, this);
        }
        this.btn_main_rank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnRank, this);
        this.btn_main_offline_money.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnOfflineMoney, this);
        this.refreshOfflineMoney();
        this.btn_main_difficulties.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnDifficulty, this);
        this.iconExitDifficulty.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitDifficulty, this);
        this.checkDailyAward();
        this.btn_main_daily.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDailyAward, this);
        this.btn_clean_cd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCleanCd, this);
        if (G.ui_stage != null && G.base_loading_ui != null) {
            G.ui_stage.removeElement(G.base_loading_ui);
            G.base_loading_ui = null;
        }
        this.iconSkillNew.anchorX = 0.5;
        this.iconSkillNew.anchorY = 0.5;
        this.iconSkillNew.x = this.btn_main1.x + this.iconSkillNew.width / 2 - 5;
        this.iconSkillNew.y = this.btn_main1.y + this.iconSkillNew.height / 2 + 10;
        this.iconHeroNew.anchorX = 0.5;
        this.iconHeroNew.anchorY = 0.5;
        this.iconHeroNew.x = this.btn_main2.x + this.iconHeroNew.width / 2 - 5;
        this.iconHeroNew.y = this.btn_main2.y + this.iconHeroNew.height / 2 + 10;
        this.checkGuideStatus();
        this.btn_main_speedup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnSpeedUp, this);
    };
    PanelMain.prototype.onBtnSpeedUp = function (evt) {
        var dialog = new SpeedUpDialog();
        GameView.instance().guiLayer.addElement(dialog);
    };
    PanelMain.prototype.enterDifficultyMode = function () {
        this.btn_main_achievement.visible = false;
        this.main_achievement_new.visible = false;
        egret.Tween.removeTweens(this.main_achievement_new);
        this.btn_main_shop.visible = false;
        this.btn_main_rank.visible = false;
        this.btn_main_difficulties.visible = false;
        this.labelStepNum.visible = false;
        this.labelStepName.visible = false;
        this.labelDifficultyNo.visible = true;
        this.labelDifficultyName.visible = true;
        this.iconExitDifficulty.visible = true;
        this.labelExitDifficulty.visible = true;
        var name_list = Logic.getDifficultyNameById(Logic.difficulty_challenge_id);
        this.labelDifficultyName.text = name_list[1];
        this.labelDifficultyNo.text = name_list[0];
    };
    PanelMain.prototype.exitDifficultyMode = function () {
        this.btn_main_achievement.visible = true;
        this.btn_main_shop.visible = true;
        this.btn_main_rank.visible = true;
        this.btn_main_difficulties.visible = true;
        this.labelStepNum.visible = true;
        this.labelStepName.visible = true;
        this.labelDifficultyNo.visible = false;
        this.labelDifficultyName.visible = false;
        this.iconExitDifficulty.visible = false;
        this.labelExitDifficulty.visible = false;
        this.m_bIsInDifficulty = false;
    };
    PanelMain.prototype.checkDailyAward = function () {
        Net.viewDailyAward();
    };
    PanelMain.prototype.showDailyAwardBtn = function () {
        if (Logic.isDailyAwardAvailable()) {
            this.btn_main_daily.visible = true;
        }
    };
    PanelMain.prototype.hideDailyAwardBtn = function () {
        this.btn_main_daily.visible = false;
    };
    PanelMain.prototype.receiveDailyAward = function () {
        var ret = Logic.getDailyAward();
        if (ret == 0) {
            this.gameView.refreshAllAboutMoney();
            this.gameView.refreshAllAboutDiamond();
            this.gameView.refreshAllAboutPeach();
        }
    };
    PanelMain.prototype.checkGuideStatus = function () {
        if (Stat.getData(ST.RESET) > 0) {
            return;
        }
        if (Logic.money == 0 && Logic.player.level == 1 && Logic.step == 1 && Logic.sub_step == 0) {
            this.showPlayerTapGuide();
        }
        if (Logic.step == 1 && Logic.sub_step < 6) {
            this.btn_main1.visible = false;
            this.btn_main2.visible = false;
            this.btn_main3.visible = false;
            this.btn_main4.visible = false;
            this.btn_main_achievement.visible = false;
        }
        else if (Logic.step == 1 && Logic.sub_step < 9) {
            this.btn_main1.visible = true;
            this.btn_main2.visible = true;
            this.btn_main3.visible = false;
            this.btn_main4.visible = false;
            this.btn_main_achievement.visible = false;
        }
        else if (Logic.step > 1 || (Logic.step == 1 && Logic.sub_step >= 9)) {
            this.btn_main1.visible = true;
            this.btn_main2.visible = true;
            this.btn_main3.visible = true;
            this.btn_main4.visible = true;
            this.btn_main_achievement.visible = true;
        }
    };
    PanelMain.prototype.showPlayerTapGuide = function () {
        this.m_iTapGuideStep = 1;
        var posX = G.width / 2;
        var posY = U.offset(G.base_y - 150);
        this.gameView.showHandAnim(posX, posY);
    };
    PanelMain.prototype.showMonkeyLevelUpGuide = function () {
        if (this.m_iMonkeyGuideStep != 1) {
            return;
        }
        this.m_iMonkeyGuideStep++;
        var posX = this.touch_close_area.x - 20;
        var posY = this.touch_close_area.y + 130;
        this.gameView.showHandAnim(posX, posY);
    };
    PanelMain.prototype.showHeroBtnGuide = function () {
        if (this.m_iHeroGuide != 0) {
            return;
        }
        this.m_iHeroGuide++;
        this.btn_main2.visible = true;
        var posX = this.btn_main2.x + 80;
        var posY = this.btn_main2.y + 30;
        this.gameView.showHandAnim(posX, posY);
    };
    PanelMain.prototype.showHeroLevelUpGuide = function () {
        if (this.m_iHeroGuide != 1) {
            return;
        }
        this.m_iHeroGuide++;
        var posX = this.touch_close_area.x - 20;
        var posY = this.touch_close_area.y + 130;
        this.gameView.showHandAnim(posX, posY);
    };
    PanelMain.prototype.showFightBossGuide = function () {
        if (Logic.boss_hint != 1) {
            return;
        }
        Logic.boss_hint = 2;
        var posX = this.iconFightBoss.x + 82;
        var posY = this.iconFightBoss.y + 38;
        this.gameView.showHandAnim(posX, posY);
    };
    PanelMain.prototype.addAllSpecialText = function () {
        this.mMoneyText = new egret.BitmapText();
        this.mMoneyText.spriteSheet = RES.getRes("zi3_json");
        this.mMoneyText.text = "" + Utils.bigNumber(Logic.money);
        this.mMoneyText.x = this.iconMoneyBig.x + this.iconMoneyBig.width + 15;
        this.mMoneyText.y = this.iconMoneyBig.y - 3; //- this.iconMoneyBig.height/2 + 2;
        this.gameView.gameLayer.addChild(this.mMoneyText);
        this.mBossTickText = new egret.BitmapText();
        this.mBossTickText.anchorX = 1;
        this.mBossTickText.spriteSheet = RES.getRes("zi2_json");
        this.mBossTickText.text = "30";
        this.mBossTickText.x = this.hp_bar.x - 5;
        this.mBossTickText.y = this.monster_name.y - 2;
        this.gameView.gameLayer.addChild(this.mBossTickText);
        this.mSubStepText = new egret.BitmapText();
        this.mSubStepText.spriteSheet = RES.getRes("zi1_json");
        this.mSubStepText.text = "0/10";
        this.mSubStepText.x = this.iconSubStep.x + this.iconSubStep.width + 2;
        this.mSubStepText.y = this.iconSubStep.y - 5;
        this.gameView.gameLayer.addChild(this.mSubStepText);
    };
    PanelMain.prototype.onBtnAchievement = function (evt) {
        this.gameView.openAchievePanel();
    };
    PanelMain.prototype.onBtnShop = function (evt) {
        this.gameView.openShopPanel();
    };
    PanelMain.prototype.onBtnRank = function (evt) {
        this.gameView.showRankDialog();
    };
    PanelMain.prototype.onBtnDifficulty = function (evt) {
        this.gameView.showDifficultiesDlg();
    };
    PanelMain.prototype.onExitDifficulty = function (evt) {
        this.gameView.showExitChallengeAnim();
    };
    PanelMain.prototype.onCleanCd = function (evt) {
        this.gameView.showCleanCdDlg();
    };
    PanelMain.prototype.onDailyAward = function (evt) {
        this.gameView.showDailyAwardDlg();
    };
    PanelMain.prototype.refreshAchieveNew = function () {
        if (Stat.new_achieve.length > 0 && this.btn_main_achievement.visible) {
            this.main_achievement_new.visible = true;
            var tw = egret.Tween.get(this.main_achievement_new, { loop: true });
            tw.to({ alpha: 0 }, 1).wait(400).to({ alpha: 1 }, 1).wait(600);
        }
        else {
            this.main_achievement_new.visible = false;
            egret.Tween.removeTweens(this.main_achievement_new);
        }
    };
    PanelMain.prototype.onBtnOfflineMoney = function (evt) {
        this.btn_main_offline_money.visible = false;
        //this.gameView.receiveOfflineMoney()
        var dialog = new OfflineAwardDialog();
        GameView.instance().guiLayer.addElement(dialog);
    };
    PanelMain.prototype.refreshOfflineMoney = function () {
        if (Logic.offline_money > 0) {
            this.btn_main_offline_money.visible = true;
        }
        else {
            this.btn_main_offline_money.visible = false;
        }
    };
    PanelMain.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        var temp_l_btn_main = [this.btn_main1, this.btn_main2, this.btn_main3, this.btn_main4];
        for (var i = 0; i < temp_l_btn_main.length; ++i) {
            if (temp_l_btn_main[i] == instance) {
                instance.down_pic.source = "菜单按钮" + (i + 1);
                instance.up_pic.source = "菜单按钮" + (i + 1) + "点击";
                instance.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.buttonTouchEventHandler, this);
                instance.addEventListener(egret.TouchEvent.TOUCH_END, this.buttonTouchEventHandler, this);
                instance.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buttonTouchEventHandler, this);
                instance.addEventListener(egret.gui.UIEvent.VALUE_COMMIT, this.mainButtonChanged, this);
                return;
            }
        }
        if (this.main_scroller1 == instance) {
        }
        else if (this.main_frame_back == instance) {
        }
        else if (this.background_color_line == instance) {
            this.background_color_line.y += G.offset_y;
        }
        else if (this.touch_close_area == instance) {
            this.touch_close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeTouchEventHandler, this);
        }
        else if (instance == this.iconPlayerSkill1 || instance == this.iconPlayerSkill2 || instance == this.iconPlayerSkill3 || instance == this.iconPlayerSkill4 || instance == this.iconPlayerSkill5 || instance == this.iconPlayerSkill6) {
            instance.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnPlayerSkillClicked, this);
        }
        else if (this.labelStepName == instance) {
            this.labelStepName.strokeColor = 0x000000;
            this.labelStepName.stroke = 2;
        }
        else if (this.labelStepNum == instance) {
            this.labelStepNum.strokeColor = 0x000000;
            this.labelStepNum.stroke = 2;
        }
        else if (this.fairy_group == instance) {
            console.log("fairy_group", this.fairy_group.x, this.fairy_group.y);
        }
        else if (this.fairy_text == instance) {
            console.log("fairy_text", this.fairy_text.x, this.fairy_text.y, this.fairy_text.parent);
        }
    };
    PanelMain.prototype.onOptimizeTimer = function (event) {
        if (this.m_iCurrentTabIndex == -1) {
            return;
        }
        //console.log( "onOptimizeTimer", event )
        var viewport = this.uiScrollList[this.m_iCurrentTabIndex].viewport;
        var group = this.uiScrollList[this.m_iCurrentTabIndex].viewport;
        if (group.numChildren <= 2) {
            return;
        }
        //console.log( "--------", viewport.verticalScrollPosition )
        var top = viewport.verticalScrollPosition;
        var bottom = top + this.main_scroller1.height;
        for (var i = 0; i < group.numElements; ++i) {
            var child = group.getElementAt(i);
            if (child.y + child.height <= top) {
                child.visible = false;
                continue;
            }
            if (child.y >= bottom) {
                child.visible = false;
                continue;
            }
            child.visible = true;
        }
    };
    PanelMain.prototype.refreshMoney = function () {
        if (this.label_money == null) {
            return;
        }
        this.m_iLastMoney = Logic.money;
        this.label_money.text = "" + Utils.bigNumber(this.m_iLastMoney);
        this.mMoneyText.text = "" + Utils.bigNumber(this.m_iLastMoney);
        this.refreshListAboutMoney();
    };
    PanelMain.prototype.refreshPeach = function () {
        if (this.labelPeachNum == null) {
            return;
        }
        if (Logic.peach == this.m_iLastPeach) {
            return;
        }
        this.m_iLastPeach = Logic.peach;
        this.labelPeachNum.text = "" + Utils.bigNumber(Logic.peach);
        this.refreshListAboutPeach();
    };
    PanelMain.prototype.refreshDiamond = function () {
        if (this.labelDiamondNum == null) {
            return;
        }
        if (Logic.diamond == this.m_iLastDiamond) {
            return;
        }
        this.m_iLastDiamond = Logic.diamond;
        this.labelDiamondNum.text = "" + Utils.bigNumber(Logic.diamond);
        this.refreshListAboutDiamond();
    };
    PanelMain.prototype.refreshDamageInfo = function () {
        if (this.labelAllDamage == null) {
            return;
        }
        this.labelHeroDamage.text = Utils.bigNumber(Logic.dps);
        this.labelTapDamage.text = Utils.bigNumber(Logic.player.total_damage);
        this.labelAllDamage.text = Utils.bigNumber(this.gameView.period_damage_average);
        if (this.m_iCurrentTabIndex == 0) {
            this.labelHeroDamage2.text = "" + Utils.bigNumber(Logic.player.total_damage);
        }
        else if (this.m_iCurrentTabIndex == 1) {
            this.labelHeroDamage2.text = "" + Utils.bigNumber(Logic.dps);
        }
        else if (this.m_iCurrentTabIndex == 2) {
            this.labelHeroDamage2.text = "+" + Utils.percentNumber(GE.getData(ET.ALL_DAMAGE));
        }
    };
    PanelMain.prototype.refreshLabelAllDamage = function () {
        if (this.gameView == null || this.labelAllDamage == null) {
            return;
        }
        this.labelAllDamage.text = Utils.bigNumber(this.gameView.period_damage_average);
    };
    PanelMain.prototype.refreshStepInfo = function () {
        if (this.labelStepNum == null) {
            return;
        }
        if (this.m_iLastStep == Logic.step) {
            return;
        }
        this.m_iLastStep = Logic.step;
        // Init current step informations.
        this.labelStepNum.text = "第" + Logic.step + "回";
        var mbLine = Utils.getLine("step_list", Logic.step);
        var strStepName = mbLine[step_list_name];
        this.labelStepName.text = strStepName;
        if (android) {
            if (G.isLightBackground(Logic.step)) {
                this.labelStepNum.textColor = 0x000000;
                this.labelStepName.textColor = 0x000000;
            }
        }
    };
    PanelMain.prototype.btnFightBossClicked = function () {
        if (this.iconFightBoss == null) {
            return;
        }
        this.iconFightBoss.visible = false;
        this.labelFightBoss.visible = false;
        this.labelLeaveBoss.visible = false;
        if (Logic.monster.type == "boss") {
            // leave boss
            Logic.failStep();
            this.gameView.showNextMonster();
            return;
        }
        Logic.chooseBossStep();
        this.gameView.showBossComingAmin();
        if (Logic.boss_hint == 2) {
            Logic.boss_hint = 3;
            this.gameView.stopHandAnim();
        }
    };
    PanelMain.prototype.bossTick = function () {
        if (this.m_bIsBoss == false) {
            return true;
        }
        if (Logic.monster.hp == 0) {
            return true;
        }
        this.m_iBossLeftTime--;
        this.mBossTickText.text = "" + this.m_iBossLeftTime;
        if (this.m_iBossLeftTime == 0) {
            // Fight boss failed!
            Logic.failStep();
            this.gameView.showNextMonster();
        }
    };
    PanelMain.prototype.difficultyTick = function () {
        if (this.m_bIsInDifficulty == false) {
            return true;
        }
        this.m_iDifficultyLeftTime--;
        this.mBossTickText.text = "" + this.m_iDifficultyLeftTime;
        if (this.m_iDifficultyLeftTime == 0) {
            // Difficulty ends!
            this.gameView.showExitChallengeAnim();
        }
    };
    PanelMain.prototype.getProtectHeroTimeStr = function (iSeconds) {
        var strTime = "";
        var iHours = Math.floor(iSeconds / 3600);
        if (iHours <= 0) {
            strTime = "00";
        }
        else if (iHours < 10) {
            strTime = "0" + iHours;
        }
        else {
            strTime = "" + iHours;
        }
        strTime += ":";
        var iMinutes = Math.floor((iSeconds - iHours * 3600) / 60);
        if (iMinutes <= 0) {
            strTime += "00";
        }
        else if (iMinutes < 10) {
            strTime += "0" + iMinutes;
        }
        else {
            strTime += "" + iMinutes;
        }
        strTime += ":";
        var iSeconds = Math.floor(iSeconds % 60);
        if (iSeconds <= 0) {
            strTime += "00";
        }
        else if (iSeconds < 10) {
            strTime += "0" + iSeconds;
        }
        else {
            strTime += ("" + iSeconds);
        }
        return strTime;
    };
    PanelMain.prototype.protectHeroTick = function () {
        if (Logic.protect_hero == 0 || Utils.time() > Logic.protect_hero + 2) {
            return;
        }
        var iLeftTime = Logic.protect_hero - Utils.time();
        if (iLeftTime > 0) {
            this.protect_hero_icon.visible = true;
            this.protect_hero_tick.visible = true;
            this.protect_hero_tick.text = this.getProtectHeroTimeStr(iLeftTime);
        }
        else {
            this.protect_hero_icon.visible = false;
            this.protect_hero_tick.visible = false;
            // refresh
            var uiShopItem = this.m_arrayCurrentList4[4];
            if (uiShopItem != null) {
                uiShopItem.refreshPerkInfo();
            }
        }
    };
    PanelMain.prototype.refreshMonsterType = function () {
        if (this.iconSubStep == null || this.mBossTickText == null) {
            return;
        }
        if (Logic.isInChallengingDifficulty()) {
            if (Logic.isFirstChallenge()) {
                // First challenge
                if (Logic.difficulty_kill_number >= 5) {
                    this.gameView.showExitChallengeAnim();
                }
                else {
                    this.mSubStepText.text = "" + (Logic.difficulty_kill_number + 1) + "/5";
                }
            }
            else {
                this.mSubStepText.text = "" + Logic.difficulty_kill_number;
            }
            if (this.m_bIsInDifficulty) {
                return;
            }
            // The next monster is boss?
            this.m_bIsInDifficulty = true;
            this.m_bIsBoss = false;
            this.time_bar.visible = true;
            this.mBossTickText.visible = true;
            this.mSubStepText.visible = true;
            this.iconSubStep.visible = true;
            this.iconFightBoss.visible = false;
            this.labelFightBoss.visible = false;
            this.labelLeaveBoss.visible = false;
            this.m_iDifficultyLeftTime = Math.floor(Logic.difficulty_duration_time);
            this.mBossTickText.text = "" + this.m_iDifficultyLeftTime;
            var iLeftTime = this.m_iDifficultyLeftTime * 1000;
            egret.Tween.removeTweens(this.time_bar);
            this.time_bar.scaleX = 1.0;
            var tw = egret.Tween.get(this.time_bar);
            tw.to({ scaleX: 0 }, iLeftTime);
        }
        else if (Logic.monster.type == "boss") {
            // The next monster is boss?
            this.m_bIsBoss = true;
            this.time_bar.visible = true;
            this.mBossTickText.visible = true;
            this.mSubStepText.visible = false;
            this.iconSubStep.visible = false;
            this.iconFightBoss.visible = true;
            this.labelFightBoss.visible = false;
            this.labelLeaveBoss.visible = true;
            this.m_iBossLeftTime = Math.floor(Logic.monster.boss_time);
            this.mBossTickText.text = "" + this.m_iBossLeftTime;
            var iLeftTime = this.m_iBossLeftTime * 1000;
            egret.Tween.removeTweens(this.time_bar);
            this.time_bar.scaleX = 1.0;
            var tw = egret.Tween.get(this.time_bar);
            tw.to({ scaleX: 0 }, iLeftTime);
        }
        else {
            this.m_bIsBoss = false;
            this.time_bar.visible = false;
            this.mBossTickText.visible = false;
            if (Logic.sub_step == -1) {
                // Last boss is alive.
                this.iconFightBoss.visible = true;
                this.labelFightBoss.visible = true;
                this.labelLeaveBoss.visible = false;
                this.mSubStepText.visible = false;
                this.iconSubStep.visible = false;
                if (Stat.getData(ST.RESET) == 0 && Logic.boss_hint == 0) {
                    this.gameView.showBossGuideDlg();
                }
            }
            else {
                this.iconFightBoss.visible = false;
                this.labelFightBoss.visible = false;
                this.labelLeaveBoss.visible = false;
                this.mSubStepText.visible = true;
                this.iconSubStep.visible = true;
                this.mSubStepText.text = "" + Logic.sub_step + "/10";
            }
        }
    };
    PanelMain.prototype.refreshHP = function (hp, max_hp) {
        if (this.hp_label == null) {
            return;
        }
        this.hp_label.text = Utils.bigNumber(hp);
        this.hp_bar.scaleX = hp / max_hp;
    };
    PanelMain.prototype.setMonster = function (name) {
        if (this.monster_name == null) {
            return;
        }
        this.monster_name.text = name;
    };
    PanelMain.prototype.showNewSkillAnim = function () {
        if (this.iconSkillNew.visible == true) {
            return;
        }
        this.iconSkillNew.visible = true;
        var tw = egret.Tween.get(this.iconSkillNew, { loop: true });
        tw.to({ scaleX: 1.1, scaleY: 1.1 }, 100).to({ scaleX: 1.0, scaleY: 1.0 }, 100).to({ scaleX: 1.1, scaleY: 1.1 }, 100).to({ scaleX: 1.0, scaleY: 1.0 }, 100).wait(700);
    };
    PanelMain.prototype.stopNewSkillAnim = function () {
        egret.Tween.removeTweens(this.iconSkillNew);
        this.iconSkillNew.visible = false;
    };
    PanelMain.prototype.showNewHeroAnim = function () {
        if (this.iconHeroNew.visible == true) {
            return;
        }
        this.iconHeroNew.visible = true;
        var tw = egret.Tween.get(this.iconHeroNew, { loop: true });
        tw.to({ scaleX: 1.1, scaleY: 1.1 }, 100).to({ scaleX: 1.0, scaleY: 1.0 }, 100).to({ scaleX: 1.1, scaleY: 1.1 }, 100).to({ scaleX: 1.0, scaleY: 1.0 }, 100).wait(700);
    };
    PanelMain.prototype.stopNewHeroAnim = function () {
        egret.Tween.removeTweens(this.iconHeroNew);
        this.iconHeroNew.visible = false;
    };
    PanelMain.prototype.refreshScoller = function (index) {
        if (this.m_iCurrentTabIndex == -1) {
            this.openScroller();
        }
        if (this.m_iHeroGuide == 2) {
            this.m_iHeroGuide = 3;
            this.gameView.stopHandAnim();
        }
        if (this.m_iMonkeyGuideStep == 2) {
            this.m_iMonkeyGuideStep = 3;
            this.gameView.stopHandAnim();
        }
        this.icon_money.visible = false;
        this.label_money.visible = false;
        this.iconPeach.visible = false;
        this.labelPeachNum.visible = false;
        this.iconDiamond.visible = false;
        this.labelDiamondNum.visible = false;
        this.label_dps_1.visible = true;
        this.labelHeroDamage2.visible = true;
        if (index == 0) {
            if (this.m_iMonkeyGuideStep == 1) {
                this.showMonkeyLevelUpGuide();
            }
            this.stopNewSkillAnim();
            this.initSkillList();
            this.icon_money.visible = true;
            this.label_money.visible = true;
            this.label_dps_1.text = "点击伤害";
            this.labelHeroDamage2.text = "" + Utils.bigNumber(Logic.player.total_damage);
        }
        else if (index == 1) {
            if (Logic.heroes[0].level == 0 && this.m_iHeroGuide == 1) {
                this.showHeroLevelUpGuide();
            }
            this.stopNewHeroAnim();
            this.initHeroList();
            this.icon_money.visible = true;
            this.label_money.visible = true;
            this.label_dps_1.text = "天将秒伤";
            this.labelHeroDamage2.text = "" + Utils.bigNumber(Logic.dps);
        }
        else if (index == 2) {
            this.initArtifactList();
            this.iconPeach.visible = true;
            this.labelPeachNum.visible = true;
            this.label_dps_1.text = "伤害加成: ";
            this.labelHeroDamage2.text = "+" + Utils.percentNumber(GE.getData(ET.ALL_DAMAGE));
        }
        else if (index == 3) {
            this.initShopList();
            this.iconDiamond.visible = true;
            this.labelDiamondNum.visible = true;
            this.label_dps_1.visible = false;
            this.labelHeroDamage2.visible = false;
        }
        if (this.m_iCurrentTabIndex != -1) {
            this.uiScrollList[this.m_iCurrentTabIndex].visible = false;
        }
        this.m_iCurrentTabIndex = index;
        this.uiScrollList[this.m_iCurrentTabIndex].visible = true;
    };
    PanelMain.prototype.addOneSkillItem = function (index) {
        var uiSkillItem = new ItemPlayerSkill();
        uiSkillItem.setPlayerSkillIndex(index);
        var main_scroller_group = this.main_scroller1.viewport;
        main_scroller_group.addElement(uiSkillItem);
        this.m_arrayCurrentList1.push(uiSkillItem);
    };
    PanelMain.prototype.addPlayerItem = function () {
        var uiPlayerItem = new ItemPlayer();
        uiPlayerItem.setPlayerDatas();
        var main_scroller_group = this.main_scroller1.viewport;
        main_scroller_group.addElement(uiPlayerItem);
        this.m_arrayCurrentList1.push(uiPlayerItem);
    };
    PanelMain.prototype.addRebornItem = function () {
        var uiRebornItem = new ItemPlayerReborn();
        uiRebornItem.setPlayerRebornInfo();
        var main_scroller_group = this.main_scroller1.viewport;
        main_scroller_group.addElement(uiRebornItem);
        this.m_arrayCurrentList1.push(uiRebornItem);
    };
    PanelMain.prototype.initSkillList = function () {
        if (this.m_arrayCurrentList1.length > 0) {
            return;
        }
        this.addPlayerItem();
        var iSkillLen = Logic.player.skills.length;
        for (var i = 0; i < iSkillLen - 1; ++i) {
            this.addOneSkillItem(i);
        }
        this.addRebornItem();
    };
    PanelMain.prototype.addOneHeroItem = function (index) {
        var sHeroData = Logic.heroes[index];
        var uiHeroItem = new ItemHero();
        uiHeroItem.setHeroDatas(sHeroData);
        var main_scroller_group = this.main_scroller2.viewport;
        main_scroller_group.addElement(uiHeroItem);
        this.m_arrayCurrentList2.push(uiHeroItem);
        return sHeroData.locked && sHeroData.type == 0;
    };
    PanelMain.prototype.initHeroList = function () {
        if (this.m_arrayCurrentList2.length > 0) {
            return;
        }
        var iHeroLen = Logic.heroes.length;
        for (var i = 0; i < iHeroLen; ++i) {
            var blocked = this.addOneHeroItem(i);
            if (blocked) {
                break;
            }
        }
    };
    PanelMain.prototype.refreshHeroListForNew = function () {
        var iHeroLen = Logic.heroes.length;
        var iCellSize = this.m_arrayCurrentList2.length;
        if (Logic.heroes[iCellSize - 1].locked && Logic.heroes[iCellSize - 1].type == 0) {
            return;
        }
        for (var i = iCellSize; i < iHeroLen; ++i) {
            var blocked = this.addOneHeroItem(i);
            if (blocked) {
                break;
            }
        }
    };
    PanelMain.prototype.refreshHeroReviveTick = function (index) {
        var iCellSize = this.m_arrayCurrentList2.length;
        if (iCellSize <= 0) {
            return;
        }
        var uiHeroItem = this.m_arrayCurrentList2[index];
        uiHeroItem.refreshDeadTick();
    };
    PanelMain.prototype.killOneHero = function (index) {
        var iCellSize = this.m_arrayCurrentList2.length;
        if (iCellSize <= 0) {
            return;
        }
        var uiHeroItem = this.m_arrayCurrentList2[index];
        uiHeroItem.refreshDeadStatus();
    };
    PanelMain.prototype.refreshListAboutMoney = function () {
        this.m_bShowSkillNewIcon = false;
        var iSkillLen = this.m_arrayCurrentList1.length;
        if (iSkillLen > 0) {
            // Refresh player info
            var uiPlayerItem = this.m_arrayCurrentList1[0];
            uiPlayerItem.refreshLockStatus();
            for (var i = 1; i < iSkillLen - 1; i++) {
                var uiSkillItem = this.m_arrayCurrentList1[i];
                uiSkillItem.refreshLockStatus();
            }
            var uiRebornItem = this.m_arrayCurrentList1[iSkillLen - 1];
            uiRebornItem.refreshLockStatus();
        }
        if (this.m_bShowSkillNewIcon == true) {
            this.m_bShowSkillNewIcon = false;
            if (this.m_iCurrentTabIndex != 0)
                this.showNewSkillAnim();
        }
        this.m_bShowHeroNewIcon = false;
        var iHeroLen = this.m_arrayCurrentList2.length;
        if (iHeroLen > 0) {
            for (var i = 0; i < iHeroLen; i++) {
                var uiHeroItem = this.m_arrayCurrentList2[i];
                uiHeroItem.refreshLockStatus();
            }
        }
        if (this.m_bShowHeroNewIcon == true) {
            this.m_bShowHeroNewIcon = false;
            if (this.m_iCurrentTabIndex != 1)
                this.showNewHeroAnim();
        }
        if (Stat.getData(ST.RESET) == 0 && Logic.player.level > 1 && Logic.heroes[0].level == 0 && Logic.money > 54) {
            this.showHeroBtnGuide();
        }
    };
    PanelMain.prototype.addArtifactPurchaseItem = function () {
        var uiArtifactPurchaseItem = new ItemArtifactPurchase();
        var main_scroller_group = this.main_scroller3.viewport;
        main_scroller_group.addElement(uiArtifactPurchaseItem);
        this.m_arrayCurrentList3.push(uiArtifactPurchaseItem);
    };
    PanelMain.prototype.addOneArtifactItem = function (index) {
        var uiArtifactItem = new ItemArtifact();
        uiArtifactItem.setArtifactIndex(index);
        var main_scroller_group = this.main_scroller3.viewport;
        main_scroller_group.addElement(uiArtifactItem);
        this.m_arrayCurrentList3.push(uiArtifactItem);
    };
    PanelMain.prototype.initArtifactList = function () {
        if (this.m_arrayCurrentList3.length > 0) {
            return;
        }
        this.addArtifactPurchaseItem();
        var iArtifactLen = Logic.artifacts.length;
        for (var i = 0; i < iArtifactLen; ++i) {
            this.addOneArtifactItem(i);
        }
    };
    PanelMain.prototype.reloadArtifactList = function () {
        this.m_arrayCurrentList3 = [];
        var group = this.gameView.ui_main.main_scroller3.viewport;
        group.removeAllElements();
        this.initArtifactList();
    };
    PanelMain.prototype.refreshArtifactListForNew = function () {
        var iArtifactLen = Logic.artifacts.length;
        var iCurrentArtifactLen = this.m_arrayCurrentList3.length - 1;
        for (var i = iCurrentArtifactLen; i < iArtifactLen; ++i) {
            this.addOneArtifactItem(i);
        }
    };
    PanelMain.prototype.refreshListAboutPeach = function () {
        var iLen = this.m_arrayCurrentList3.length;
        if (iLen <= 0) {
            return;
        }
        var uiArtifactPurchaseItem = this.m_arrayCurrentList3[0];
        uiArtifactPurchaseItem.refreshArtifactInfo();
        var iArtifactLen = this.m_arrayCurrentList3.length;
        if (iArtifactLen > 1) {
            for (var i = 1; i < iArtifactLen; i++) {
                var uiArtifactItem = this.m_arrayCurrentList3[i];
                uiArtifactItem.refreshLockStatus();
            }
        }
    };
    PanelMain.prototype.addOnePerkItem = function (index) {
        var uiPerkItem = new ItemShopPerk();
        uiPerkItem.setPerkIndex(index);
        var main_scroller_group = this.main_scroller4.viewport;
        main_scroller_group.addElement(uiPerkItem);
        this.m_arrayCurrentList4.push(uiPerkItem);
    };
    PanelMain.prototype.initShopList = function () {
        if (this.m_arrayCurrentList4.length > 0) {
            return;
        }
        var iPerkLen = 5;
        for (var i = 0; i < iPerkLen; ++i) {
            this.addOnePerkItem(i);
        }
    };
    PanelMain.prototype.refreshListAboutDiamond = function () {
    };
    PanelMain.prototype.refreshAllPerk = function () {
        for (var i = 0; i < this.m_arrayCurrentList4.length; ++i) {
            this.m_arrayCurrentList4[i].refresh();
            this.m_arrayCurrentList4[i].refreshPerkInfo();
        }
    };
    PanelMain.prototype.refreshSkillOnMain = function () {
        for (var i = 0; i < 6; i++) {
            var iconSkillBtn = this.uiSkillMainList[i];
            var iconSkillMask = this.uiSkillMaskList[i];
            var iconSkillRedMask = this.uiSkillRedMaskList[i];
            var iconSkillTick = this.uiSkillTickList[i];
            if (Logic.player.skills[i].locked) {
                iconSkillBtn.visible = false;
                iconSkillMask.visible = false;
                iconSkillRedMask.visible = false;
                iconSkillTick.visible = false;
            }
            else {
                iconSkillBtn.visible = true;
                iconSkillMask.visible = true;
                iconSkillRedMask.visible = false;
                iconSkillTick.visible = true;
            }
        }
    };
    PanelMain.prototype.skillTick = function () {
        for (var i = 0; i < 6; i++) {
            //var iconSkillMask = this.uiSkillMaskList[i];
            if (Logic.player.skills[i].locked == false) {
                var currentTime = Utils.time();
                if (Logic.player.skills[i].begin_time == 0 && Logic.player.skills[i].cd_time == 0) {
                    // This skill can trigger
                    this.endSkillCD(i);
                }
                else if (Logic.player.skills[i].begin_time > 0) {
                    // Buff lasting.
                    if (currentTime >= Logic.player.skills[i].begin_time + Logic.player.skills[i].lasting_time) {
                        this.endSkillBuff(i);
                    }
                    else {
                        this.setSkillBuffTime(i);
                    }
                }
                else if (Logic.player.skills[i].cd_time > 0) {
                    // Skill in cd.
                    if (currentTime >= Logic.player.skills[i].cd_time) {
                        this.endSkillCD(i);
                    }
                    else {
                        var iconSkillMask = this.uiSkillMaskList[i];
                        if (iconSkillMask.mask == null) {
                            this.startSkillCD(i);
                        }
                        else {
                            this.setSkillCdTime(i);
                        }
                    }
                }
            }
        }
    };
    PanelMain.prototype.startSkillBuff = function (index) {
        var iconSkillRedMask = this.uiSkillRedMaskList[index];
        iconSkillRedMask.visible = true;
        var currentTime = Utils.time();
        var iLeftBuffTime = Logic.player.skills[index].begin_time + Logic.player.skills[index].lasting_time - currentTime;
        iLeftBuffTime *= 1000;
        var rect = new egret.Rectangle(0, 87, 87, 0);
        iconSkillRedMask.mask = rect;
        var tw = egret.Tween.get(rect);
        tw.to({ y: 0, height: 87 }, iLeftBuffTime);
        var labelSkillTick = this.uiSkillTickList[index];
        labelSkillTick.visible = true;
        this.setSkillBuffTime(index);
    };
    PanelMain.prototype.endSkillBuff = function (index) {
        this.gameView.endSkillStatus(index);
        var iconSkillRedMask = this.uiSkillRedMaskList[index];
        iconSkillRedMask.visible = false;
        iconSkillRedMask.mask = null;
    };
    PanelMain.prototype.startSkillCD = function (index) {
        var iconSkillMask = this.uiSkillMaskList[index];
        iconSkillMask.visible = true;
        var currentTime = Utils.time();
        var iLeftCdTime = Logic.player.skills[index].cd_time - currentTime;
        iLeftCdTime *= 1000;
        var rect = new egret.Rectangle(0, 0, 87, 87);
        iconSkillMask.mask = rect;
        var tw = egret.Tween.get(rect);
        tw.to({ y: 87, height: 0 }, iLeftCdTime);
        var labelSkillTick = this.uiSkillTickList[index];
        labelSkillTick.visible = true;
        this.setSkillCdTime(index);
    };
    PanelMain.prototype.endSkillCD = function (index) {
        var iconSkillMask = this.uiSkillMaskList[index];
        iconSkillMask.visible = false;
        var labelSkillTick = this.uiSkillTickList[index];
        labelSkillTick.visible = false;
    };
    PanelMain.prototype.getTimeStr = function (iSeconds) {
        var iMinutes = Math.floor(iSeconds / 60);
        var strTime = "";
        if (iMinutes <= 0) {
            strTime = "00";
        }
        else if (iMinutes < 10) {
            strTime = "0" + iMinutes;
        }
        else {
            strTime = "" + iMinutes;
        }
        strTime += ":";
        var iSeconds = Math.floor(iSeconds % 60);
        if (iSeconds <= 0) {
            strTime += "00";
        }
        else if (iSeconds < 10) {
            strTime += "0" + iSeconds;
        }
        else {
            strTime += ("" + iSeconds);
        }
        return strTime;
    };
    PanelMain.prototype.setSkillCdTime = function (index) {
        var currentTime = Utils.time();
        var iLeftCdTime = Logic.player.skills[index].cd_time - currentTime;
        var labelSkillTick = this.uiSkillTickList[index];
        labelSkillTick.text = this.getTimeStr(iLeftCdTime);
    };
    PanelMain.prototype.setSkillBuffTime = function (index) {
        var currentTime = Utils.time();
        var iLeftBuffTime = Logic.player.skills[index].begin_time + Logic.player.skills[index].lasting_time - currentTime;
        var labelSkillTick = this.uiSkillTickList[index];
        labelSkillTick.text = this.getTimeStr(iLeftBuffTime);
    };
    PanelMain.prototype.showFairyHint = function (type, text) {
        var label = this.fairy_text;
        if (type == "money") {
            this.fairy_icon.source = "元宝";
            label.text = text;
        }
        else if (type == "diamond") {
            this.fairy_icon.source = "钻石大";
            label.text = text;
        }
        if (G.isLightBackground(Logic.step)) {
            label.textColor = 0x000000;
        }
        else {
            label.textColor = 0xFFFFFF;
        }
        label.measure();
        /*
        label.y = this.fairy_icon.y
        label.x =  ( G.width - label.width ) / 2 + this.fairy_icon.width / 2
        this.fairy_icon.x = label.x - this.fairy_icon.width - 8
        */
        var clear = function () {
            this.fairy_group.visible = false;
        };
        egret.Tween.removeTweens(this.fairy_group);
        this.fairy_group.visible = true;
        this.fairy_group.x = 0 - this.fairy_group.width;
        var tw = egret.Tween.get(this.fairy_group);
        tw.to({ x: 0 }, 400).wait(1600).call(clear, this);
    };
    PanelMain.prototype.showStatusBar = function (icon_name, text, time) {
        this.status_group.visible = true;
        var label = this.status_label;
        this.status_icon.source = icon_name;
        var finish_time = time + U.time();
        var time_text = U.formatTime(time, 2);
        label.text = text + time_text;
        label.measure();
        label.x = (G.width - label.width) / 2 + this.status_icon.width / 2;
        this.status_icon.x = label.x - this.status_icon.width - 8;
        var refresh_status = function () {
            var t = finish_time - U.time();
            if (Math.floor(t) <= 0) {
                this.status_bar_timer.stop();
                this.status_bar_timer = null;
                this.status_group.visible = false;
            }
            var time_text = U.formatTime(finish_time - U.time(), 2);
            label.text = text + time_text;
        };
        if (this.status_bar_timer != null) {
            this.status_bar_timer.stop();
            this.status_bar_timer = null;
        }
        this.status_bar_timer = new egret.Timer(1000, -1);
        this.status_bar_timer.addEventListener(egret.TimerEvent.TIMER, refresh_status, this);
        this.status_bar_timer.start();
    };
    PanelMain.prototype.openScroller = function () {
        this.touch_close_area.visible = true;
        this.main_frame_title.visible = true;
        this.main_frame_back.visible = true;
        this.optimize_timer.start();
    };
    PanelMain.prototype.closeScroller = function () {
        this.touch_close_area.visible = false;
        this.main_frame_title.visible = false;
        this.main_frame_back.visible = false;
        this.label_dps_1.visible = false;
        this.labelHeroDamage2.visible = false;
        this.icon_money.visible = false;
        this.label_money.visible = false;
        this.iconPeach.visible = false;
        this.labelPeachNum.visible = false;
        this.iconDiamond.visible = false;
        this.labelDiamondNum.visible = false;
        this.optimize_timer.stop();
        this.main_scroller1.visible = false;
        this.main_scroller2.visible = false;
        this.main_scroller3.visible = false;
        this.main_scroller4.visible = false;
        this.m_iCurrentTabIndex = -1;
        if (this.m_iHeroGuide == 2) {
            this.m_iHeroGuide = 3;
            this.gameView.stopHandAnim();
        }
        if (this.m_iMonkeyGuideStep == 2) {
            this.m_iMonkeyGuideStep = 3;
            this.gameView.stopHandAnim();
        }
    };
    PanelMain.prototype.showPlayerSkillByIndex = function (index) {
        var ret = Logic.triggerSkill(index + 1);
        if (ret[0] == false) {
            return;
        }
        // Show the animation of skill.
        this.gameView.showPlayerSkillAnim(index);
        this.startSkillBuff(index);
    };
    PanelMain.prototype.btnPlayerSkillClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            var iSkilledIndex = 0;
            if (e.target == this.iconPlayerSkill1) {
                iSkilledIndex = 0;
            }
            else if (e.target == this.iconPlayerSkill2) {
                iSkilledIndex = 1;
            }
            else if (e.target == this.iconPlayerSkill3) {
                iSkilledIndex = 2;
            }
            else if (e.target == this.iconPlayerSkill4) {
                iSkilledIndex = 3;
            }
            else if (e.target == this.iconPlayerSkill5) {
                iSkilledIndex = 4;
            }
            else if (e.target == this.iconPlayerSkill6) {
                iSkilledIndex = 5;
            }
            var currentTime = Utils.time();
            if (Logic.player.skills[iSkilledIndex].begin_time == 0 && Logic.player.skills[iSkilledIndex].cd_time == 0) {
                // This skill can trigger
                this.showPlayerSkillByIndex(iSkilledIndex);
            }
            else if (Logic.player.skills[iSkilledIndex].cd_time > 0) {
                // Skill in cd.
                if (currentTime >= Logic.player.skills[iSkilledIndex].cd_time) {
                    this.showPlayerSkillByIndex(iSkilledIndex);
                }
                else {
                    this.gameView.showCleanCdDlg();
                }
            }
        }
    };
    PanelMain.prototype.buttonTouchEventHandler = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_BEGIN) {
        }
        else if (e.type == egret.TouchEvent.TOUCH_END) {
        }
        else if (e.type == egret.TouchEvent.TOUCH_TAP) {
            for (var i = 0; i < this.l_btn_main.length; ++i) {
                if (this.l_btn_main[i] == e.target) {
                    continue;
                }
                this.l_btn_main[i].selected = false;
            }
        }
    };
    PanelMain.prototype.mainButtonChanged = function (e) {
        var btn = e.target;
        if (btn.selected == false) {
            for (var i = 0; i < this.l_btn_main.length; ++i) {
                if (this.l_btn_main[i].selected == true) {
                    return;
                }
            }
            this.closeScroller();
            return;
        }
        for (var i = 0; i < this.l_btn_main.length; ++i) {
            if (this.l_btn_main[i] == btn) {
                this.refreshScoller(i);
                return;
            }
        }
    };
    PanelMain.prototype.closeTouchEventHandler = function (e) {
        for (var i = 0; i < this.l_btn_main.length; ++i) {
            if (this.l_btn_main[i].selected == true) {
                this.l_btn_main[i].selected = false;
                return;
            }
        }
    };
    return PanelMain;
})(egret.gui.Panel);
PanelMain.prototype.__class__ = "PanelMain";
