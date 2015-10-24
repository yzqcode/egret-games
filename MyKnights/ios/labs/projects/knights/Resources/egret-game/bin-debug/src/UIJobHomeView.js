var JOB_HOME_TAB;
(function (JOB_HOME_TAB) {
    JOB_HOME_TAB[JOB_HOME_TAB["TAB_NONE"] = -1] = "TAB_NONE";
    JOB_HOME_TAB[JOB_HOME_TAB["TAB_TEAM"] = 0] = "TAB_TEAM";
    JOB_HOME_TAB[JOB_HOME_TAB["TAB_DOJOB"] = 1] = "TAB_DOJOB";
    JOB_HOME_TAB[JOB_HOME_TAB["TAB_HERO"] = 2] = "TAB_HERO";
    JOB_HOME_TAB[JOB_HOME_TAB["TAB_SOLDIER"] = 3] = "TAB_SOLDIER";
})(JOB_HOME_TAB || (JOB_HOME_TAB = {}));
var JobTeamInfo = (function () {
    function JobTeamInfo() {
        this.team_id = 0;
        this.name = "";
        this.type = 1;
        this.level = 1;
        this.members_num = 1;
    }
    var __egretProto__ = JobTeamInfo.prototype;
    return JobTeamInfo;
})();
JobTeamInfo.prototype.__class__ = "JobTeamInfo";
var JobTeamMembers = (function () {
    function JobTeamMembers() {
        this.player_id = 0;
        this.name = "";
        this.type = 1;
        this.level = 1;
        this.isLeader = false;
    }
    var __egretProto__ = JobTeamMembers.prototype;
    return JobTeamMembers;
})();
JobTeamMembers.prototype.__class__ = "JobTeamMembers";
var UIJobHomeView = (function (_super) {
    __extends(UIJobHomeView, _super);
    function UIJobHomeView() {
        _super.call(this);
        this.select_hero_icon = null;
        this.select_hero_list = [];
        this.select_soldier_icon = null;
        this.select_soldier_list = [];
        this.top_info_bar = null;
        this.bottom_info_bar = null;
        this.current_job_tab = -1 /* TAB_NONE */;
        this.job_tab_btn_list = [];
        this.job_group_list = [];
        this.tick_count = 0;
        this.second_tick_timer = null;
        this.self_is_in_team = false;
        this.self_is_team_leader = false;
        this.knight_dojod_info = null;
        this.card_dojod_info = null;
        this.job_team_list = [];
        this.job_team_items = [];
        this.job_team_members_list = [];
        this.job_team_members_items = [];
        this.current_select_member_index = -1;
        this.skinName = "skins.UIJobHomeViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIJobHomeView.prototype;
    __egretProto__.showOnMainLayer = function (main_director) {
        this.width = G.win_width;
        this.height = G.win_height;
        this.main_director = main_director;
        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);
        this.guiLayer.addElementAt(this, 0);
        this.bottom_info_bar = new UIBottomInfoView();
        this.bottom_info_bar.resetBackButtonCallback(this, 3 /* BACK */, this.onBackBtnClicked);
        this.guiLayer.addElementAt(this.bottom_info_bar, 1);
        this.top_info_bar = new UITopInfoView();
        this.guiLayer.addElementAt(this.top_info_bar, 2);
    };
    __egretProto__.removeFromMainLayer = function () {
        this.main_director.stage.removeChild(this.guiLayer);
        this.onRemoveAllEventListener();
    };
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.main_director.closeGateAnimLayer();
        this.select_soldier_list = [this.soldier_select_1, this.soldier_select_2, this.soldier_select_3, this.soldier_select_4, this.soldier_select_5, this.soldier_select_6, this.soldier_select_7, this.soldier_select_8, this.soldier_select_9, this.soldier_select_10, this.soldier_select_11];
        this.select_hero_list = [this.hero_select_1, this.hero_select_2, this.hero_select_3, this.hero_select_4, this.hero_select_5, this.hero_select_6, this.hero_select_7, this.hero_select_8, this.hero_select_9, this.hero_select_10, this.hero_select_11];
        this.current_job_tab = -1 /* TAB_NONE */;
        this.job_tab_btn_list = [this.job_team_btn, this.job_dojob_btn, this.job_hero_btn, this.job_soldier];
        this.job_group_list = [this.job_team_group, this.job_dojob_group, this.job_hero_group, this.job_soldier_group];
        this.onSetJobTabStatus(0 /* TAB_TEAM */);
        this.job_team_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTeamTab, this);
        this.job_dojob_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoJobTab, this);
        this.job_hero_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHeroTab, this);
        this.job_soldier.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoldierTab, this);
        // Team group
        if (Logic.isPlayerInGuild() == false) {
            this.showNoGuildHint();
        }
        else {
            this.hint_label.visible = false;
            this.second_tick_timer = new egret.Timer(1000, -1);
            this.second_tick_timer.addEventListener(egret.TimerEvent.TIMER, this.refreshJobTeamInfo, this);
            this.second_tick_timer.start();
        }
        this.create_team_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createJobTeam, this);
        this.dismiss_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.dismissJobTeam, this);
        this.start_battle_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startJobBattle, this);
        this.look_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewMember, this);
        this.kick_out_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKickTeamMember, this);
        this.exit_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitTeam, this);
        // DoJob group
        this.select_soldier_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectSelfKnightToDoJob, this);
        this.select_jobCard_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.selectCardToDoJob, this);
        this.doJob_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doChangeJob, this);
        // Hero group
        this.hero_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroOne, this);
        this.hero_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroTwo, this);
        this.hero_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroThree, this);
        this.hero_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroFour, this);
        this.hero_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroFive, this);
        this.hero_6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroSix, this);
        this.hero_7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroSeven, this);
        this.hero_8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroEight, this);
        this.hero_9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroNine, this);
        this.hero_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroTen, this);
        this.hero_11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroEleven, this);
        // Soldier group
        this.soldier_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierOne, this);
        this.soldier_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierTwo, this);
        this.soldier_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierThree, this);
        this.soldier_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierFour, this);
        this.soldier_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierFive, this);
        this.soldier_6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierSix, this);
        this.soldier_7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierSeven, this);
        this.soldier_8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierEight, this);
        this.soldier_9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierNine, this);
        this.soldier_10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierTen, this);
        this.soldier_11.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierEleven, this);
    };
    __egretProto__.onRemoveAllEventListener = function () {
        this.job_team_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTeamTab, this);
        this.job_dojob_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoJobTab, this);
        this.job_hero_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onHeroTab, this);
        this.job_soldier.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoldierTab, this);
        // Team group
        this.create_team_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.createJobTeam, this);
        this.dismiss_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.dismissJobTeam, this);
        this.start_battle_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startJobBattle, this);
        this.look_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewMember, this);
        this.kick_out_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onKickTeamMember, this);
        this.exit_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitTeam, this);
        // DoJob group
        this.select_soldier_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.selectSelfKnightToDoJob, this);
        this.select_jobCard_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.selectCardToDoJob, this);
        this.doJob_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.doChangeJob, this);
        // Hero group
        this.hero_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroOne, this);
        this.hero_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroTwo, this);
        this.hero_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroThree, this);
        this.hero_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroFour, this);
        this.hero_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroFive, this);
        this.hero_6.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroSix, this);
        this.hero_7.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroSeven, this);
        this.hero_8.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroEight, this);
        this.hero_9.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroNine, this);
        this.hero_10.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroTen, this);
        this.hero_11.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.heroEleven, this);
        // Soldier group
        this.soldier_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierOne, this);
        this.soldier_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierTwo, this);
        this.soldier_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierThree, this);
        this.soldier_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierFour, this);
        this.soldier_5.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierFive, this);
        this.soldier_6.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierSix, this);
        this.soldier_7.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierSeven, this);
        this.soldier_8.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierEight, this);
        this.soldier_9.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierNine, this);
        this.soldier_10.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierTen, this);
        this.soldier_11.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.soldierEleven, this);
    };
    __egretProto__.onTeamTab = function (evt) {
        this.onSetJobTabStatus(0 /* TAB_TEAM */);
    };
    __egretProto__.onDoJobTab = function (evt) {
        this.onSetJobTabStatus(1 /* TAB_DOJOB */);
    };
    __egretProto__.onHeroTab = function (evt) {
        this.onSetJobTabStatus(2 /* TAB_HERO */);
    };
    __egretProto__.onSoldierTab = function (evt) {
        this.onSetJobTabStatus(3 /* TAB_SOLDIER */);
    };
    __egretProto__.onSetJobTabStatus = function (next_tab) {
        if (this.current_job_tab == next_tab) {
            return;
        }
        if (this.current_job_tab != -1 /* TAB_NONE */) {
            this.job_group_list[this.current_job_tab].visible = false;
            this.job_tab_btn_list[this.current_job_tab].enabled = true;
            this.job_tab_btn_list[this.current_job_tab].y += 33;
        }
        this.current_job_tab = next_tab;
        this.job_group_list[this.current_job_tab].visible = true;
        this.job_tab_btn_list[this.current_job_tab].enabled = false;
        this.job_tab_btn_list[this.current_job_tab].y -= 33;
        if (this.current_job_tab == 0 /* TAB_TEAM */) {
            this.resetTeamGroupStatus();
        }
        else if (this.current_job_tab == 1 /* TAB_DOJOB */) {
        }
        else if (this.current_job_tab == 2 /* TAB_HERO */) {
        }
        else if (this.current_job_tab == 3 /* TAB_SOLDIER */) {
        }
    };
    __egretProto__.heroOne = function () {
        this.selectHero(1);
    };
    __egretProto__.heroTwo = function () {
        this.selectHero(2);
    };
    __egretProto__.heroThree = function () {
        this.selectHero(3);
    };
    __egretProto__.heroFour = function () {
        this.selectHero(4);
    };
    __egretProto__.heroFive = function () {
        this.selectHero(5);
    };
    __egretProto__.heroSix = function () {
        this.selectHero(6);
    };
    __egretProto__.heroSeven = function () {
        this.selectHero(7);
    };
    __egretProto__.heroEight = function () {
        this.selectHero(8);
    };
    __egretProto__.heroNine = function () {
        this.selectHero(9);
    };
    __egretProto__.heroTen = function () {
        this.selectHero(10);
    };
    __egretProto__.heroEleven = function () {
        this.selectHero(11);
    };
    __egretProto__.selectHero = function (index) {
        if (this.select_hero_icon != null) {
            this.select_hero_icon.visible = false;
        }
        this.select_hero_icon = this.select_hero_list[index - 1];
        this.select_hero_icon.visible = true;
        var line = Utils.getLine("knights_list", index);
        if (line == null) {
            return;
        }
        this.init_panel_hero.visible = false;
        this.hero_name.text = line[knights_list_name];
        this.hero_introduce.text = line[knights_list_desc];
        this.hero_body.source = Utils.getKnightBigImgName(index, true);
        var scroller_group = this.hero_skill_scroller.viewport;
        scroller_group.removeAllElements();
        var skills_len = line[knights_list_skill_list].length;
        for (var i = 0; i < skills_len; i++) {
            var skill_item = new UIKnightSkillItem();
            skill_item.setIndex(line[knights_list_skill_list][i], i);
            scroller_group.addElement(skill_item);
        }
        if (index == 5) {
            var skill_item1 = new UIKnightSkillItem();
            skill_item1.setIndex(2, skills_len);
            scroller_group.addElement(skill_item1);
            var skill_item2 = new UIKnightSkillItem();
            skill_item2.setIndex(11, skills_len + 1);
            scroller_group.addElement(skill_item2);
        }
        if (index == 8) {
            var skill_item1 = new UIKnightSkillItem();
            skill_item1.setIndex(15, skills_len);
            scroller_group.addElement(skill_item1);
        }
        if (index == 11) {
            var skill_item1 = new UIKnightSkillItem();
            skill_item1.setIndex(2, skills_len);
            scroller_group.addElement(skill_item1);
        }
    };
    __egretProto__.soldierOne = function () {
        this.selectSoldier(1);
    };
    __egretProto__.soldierTwo = function () {
        this.selectSoldier(2);
    };
    __egretProto__.soldierThree = function () {
        this.selectSoldier(3);
    };
    __egretProto__.soldierFour = function () {
        this.selectSoldier(4);
    };
    __egretProto__.soldierFive = function () {
        this.selectSoldier(5);
    };
    __egretProto__.soldierSix = function () {
        this.selectSoldier(6);
    };
    __egretProto__.soldierSeven = function () {
        this.selectSoldier(7);
    };
    __egretProto__.soldierEight = function () {
        this.selectSoldier(8);
    };
    __egretProto__.soldierNine = function () {
        this.selectSoldier(9);
    };
    __egretProto__.soldierTen = function () {
        this.selectSoldier(10);
    };
    __egretProto__.soldierEleven = function () {
        this.selectSoldier(11);
    };
    __egretProto__.selectSoldier = function (index) {
        if (this.select_soldier_icon != null) {
            this.select_soldier_icon.visible = false;
        }
        this.select_soldier_icon = this.select_soldier_list[index - 1];
        this.select_soldier_icon.visible = true;
        var line = Utils.getLine("knights_list", index);
        if (line == null) {
            return;
        }
        this.init_panel.visible = false;
        this.soldier_name.text = line[knights_list_name];
        this.soldier_introduce.text = line[knights_list_desc];
        this.soldier_body.source = Utils.getKnightBigImgName(index);
        var scroller_group = this.skill_scroller.viewport;
        scroller_group.removeAllElements();
        var skills_len = line[knights_list_skill_list].length;
        for (var i = 0; i < skills_len; i++) {
            var skill_item = new UIKnightSkillItem();
            skill_item.setIndex(line[knights_list_skill_list][i], i);
            scroller_group.addElement(skill_item);
        }
        if (index == 5) {
            var skill_item1 = new UIKnightSkillItem();
            skill_item1.setIndex(2, skills_len);
            scroller_group.addElement(skill_item1);
            var skill_item2 = new UIKnightSkillItem();
            skill_item2.setIndex(11, skills_len + 1);
            scroller_group.addElement(skill_item2);
        }
        if (index == 8) {
            var skill_item1 = new UIKnightSkillItem();
            skill_item1.setIndex(15, skills_len);
            scroller_group.addElement(skill_item1);
        }
        if (index == 11) {
            var skill_item1 = new UIKnightSkillItem();
            skill_item1.setIndex(2, skills_len);
            scroller_group.addElement(skill_item1);
        }
    };
    __egretProto__.selectSelfKnightToDoJob = function () {
        var self_knights_dlg = new UISelfKnightsDialog();
        self_knights_dlg.setDatas(this, this.guiLayer);
        this.guiLayer.addElement(self_knights_dlg);
        this.self_knights_dlg = self_knights_dlg;
    };
    __egretProto__.setKnightToDoJob = function (knight_info) {
        this.knight_dojod_info = knight_info;
        this.doJob_before_name_frame.source = Utils.getKnightFrameImgName(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
        this.doJob_before_name.text = knight_info.name;
        this.doJob_before_level.text = "" + knight_info.level;
        this.doJob_before_body_frame.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
        this.doJob_before_body.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
        this.doJob_before_body.visible = true;
        this.doJob_before_body_mask.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        this.doJob_before_body_mask.visible = true;
        this.doJob_before_atk_num_panel.source = Utils.getValuePanelImgName(knight_info.attack_factor / 10000);
        this.doJob_later_atk_num_panel.source = Utils.getValuePanelImgName(knight_info.attack_factor / 10000);
        this.doJob_before_atk_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, 1 /* ATK */, knight_info.attack_factor / 10000);
        if (knight_info.attack_factor == 10000) {
            this.doJob_before_atk_num.textColor = 0xFFFFFF;
            this.doJob_later_atk_num.textColor = 0xFFFFFF;
        }
        else {
            this.doJob_before_atk_num.textColor = 0x000000;
            this.doJob_later_atk_num.textColor = 0x000000;
        }
        this.doJob_before_def_num_panel.source = Utils.getValuePanelImgName(knight_info.defense_factor / 10000);
        this.doJob_later_def_num_panel.source = Utils.getValuePanelImgName(knight_info.defense_factor / 10000);
        this.doJob_before_def_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, 2 /* DEF */, knight_info.defense_factor / 10000);
        if (knight_info.defense_factor == 10000) {
            this.doJob_before_def_num.textColor = 0xFFFFFF;
            this.doJob_later_def_num.textColor = 0xFFFFFF;
        }
        else {
            this.doJob_before_def_num.textColor = 0x000000;
            this.doJob_later_def_num.textColor = 0x000000;
        }
        this.doJob_before_hp_num_panel.source = Utils.getValuePanelImgName(knight_info.hp_factor / 10000);
        this.doJob_later_hp_num_panel.source = Utils.getValuePanelImgName(knight_info.hp_factor / 10000);
        this.doJob_before_hp_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, 3 /* HP */, knight_info.hp_factor / 10000);
        if (knight_info.hp_factor == 10000) {
            this.doJob_before_hp_num.textColor = 0xFFFFFF;
            this.doJob_later_hp_num.textColor = 0xFFFFFF;
        }
        else {
            this.doJob_before_hp_num.textColor = 0x000000;
            this.doJob_later_hp_num.textColor = 0x000000;
        }
        if (this.card_dojod_info != null) {
            this.doJob_later_atk_num.text = "" + Logic.getKnightSpecialData(this.card_dojod_info.card_type, this.knight_dojod_info.level, 1 /* ATK */, this.knight_dojod_info.attack_factor / 10000);
            this.doJob_later_def_num.text = "" + Logic.getKnightSpecialData(this.card_dojod_info.card_type, this.knight_dojod_info.level, 2 /* DEF */, this.knight_dojod_info.defense_factor / 10000);
            this.doJob_later_hp_num.text = "" + Logic.getKnightSpecialData(this.card_dojod_info.card_type, this.knight_dojod_info.level, 3 /* HP */, this.knight_dojod_info.hp_factor / 10000);
        }
    };
    __egretProto__.selectCardToDoJob = function () {
        var job_cards_dlg = new UIJobCardsDialog();
        job_cards_dlg.setDatas(this, this.guiLayer);
        this.guiLayer.addElement(job_cards_dlg);
        this.job_cards_dlg = job_cards_dlg;
    };
    __egretProto__.setCardToDoJob = function (card_info) {
        this.card_dojod_info = card_info;
        this.doJob_later_body_frame.source = Utils.getJobCardImgName(card_info.card_level);
        this.doJob_later_body.source = Utils.getKnightBigImgName(card_info.card_type);
        this.doJob_later_body.visible = true;
        var job_name = Utils.getKnightTypeName(card_info.card_type);
        this.doJob_later_name.text = job_name;
        this.doJob_to_label.text = "转职为" + job_name;
        if (this.knight_dojod_info != null) {
            this.doJob_later_atk_num.text = "" + Logic.getKnightSpecialData(this.card_dojod_info.card_type, this.knight_dojod_info.level, 1 /* ATK */, this.knight_dojod_info.attack_factor / 10000);
            this.doJob_later_def_num.text = "" + Logic.getKnightSpecialData(this.card_dojod_info.card_type, this.knight_dojod_info.level, 2 /* DEF */, this.knight_dojod_info.defense_factor / 10000);
            this.doJob_later_hp_num.text = "" + Logic.getKnightSpecialData(this.card_dojod_info.card_type, this.knight_dojod_info.level, 3 /* HP */, this.knight_dojod_info.hp_factor / 10000);
        }
        var scroller_group = this.doJob_skill_scroller.viewport;
        scroller_group.removeAllElements();
        var knight_line = Utils.getLine("knights_list", card_info.card_type);
        if (knight_line != null) {
            var skills_len = knight_line[knights_list_skill_list].length;
            for (var i = 0; i < skills_len; i++) {
                var skill_item = new UIKnightSkillItem();
                skill_item.setIndex(knight_line[knights_list_skill_list][i], i);
                scroller_group.addElement(skill_item);
            }
        }
    };
    __egretProto__.doChangeJob = function () {
        if (this.knight_dojod_info == null) {
            Utils.showToastInfo(this.guiLayer, "请选择一位骑士进行转职~");
            return;
        }
        if (this.card_dojod_info == null) {
            Utils.showToastInfo(this.guiLayer, "请选择转职卡~");
            return;
        }
        var knight_info = this.knight_dojod_info;
        // "转职卡品质与骑士不一致~";
        var knight_color_index = Utils.getKnightColorIndex(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
        if (knight_color_index != this.card_dojod_info.card_level) {
            Utils.showToastInfo(this.guiLayer, "转职卡品质与骑士不一致~");
            return;
        }
        // "该骑士没有此种转职路线~";
        var knight_line = Utils.getLine("knights_list", knight_info.type);
        if (knight_line == null) {
            return;
        }
        var job_list = knight_line[knights_list_change_list];
        var can_dojob = false;
        for (var i = 0; i < job_list.length; i++) {
            if (knight_line[knights_list_change_list][i] == this.card_dojod_info.card_type) {
                can_dojob = true;
                break;
            }
        }
        if (can_dojob == false) {
            Utils.showToastInfo(this.guiLayer, "该骑士没有此种转职路线~");
            return;
        }
        var dojob_dlg = new UIDoJobDialog();
        dojob_dlg.setDoJobDatas(this.guiLayer, this.knight_dojod_info, this.card_dojod_info);
        this.guiLayer.addElement(dojob_dlg);
    };
    __egretProto__.doChangeJobCallback = function (use_money) {
        if (use_money === void 0) { use_money = true; }
        var use_type = 1;
        if (use_money) {
            use_type = 2;
        }
        Net.doChangeKnightJob(this.knight_dojod_info.knight_id, this.card_dojod_info.card_id, use_type);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishDoChangeJob = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "转职失败，错误码: " + result;
            if (result == -20) {
                strErrorMsg = "钻石不足~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 1 /* TAB_DIAMOND */);
                this.guiLayer.addElement(shop);
            }
            else if (result == -21) {
                strErrorMsg = "金币不足~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 0 /* TAB_MONEY */);
                this.guiLayer.addElement(shop);
            }
            else if (result == -14) {
                strErrorMsg = "该骑士尚未达到转职的等级要求~";
            }
            else if (result == -18) {
                strErrorMsg = "转职卡品质与骑士不一致~";
            }
            else if (result == -19) {
                strErrorMsg = "该骑士没有此种转职路线~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        Utils.showToastInfo(this.guiLayer, "转职成功!");
        var diamond = data[0];
        var money = data[1];
        Logic.diamond = diamond;
        Logic.money = money;
        this.top_info_bar.refreshMoneyText();
        this.top_info_bar.refreshDiamondText();
        this.doJob_before_name.text = "";
        this.doJob_before_level.text = "";
        this.doJob_before_body.visible = false;
        this.doJob_before_body_mask.visible = false;
        this.doJob_before_atk_num.text = "";
        this.doJob_before_def_num.text = "";
        this.doJob_before_hp_num.text = "";
        this.doJob_later_body.visible = false;
        this.doJob_later_name.text = "";
        this.doJob_to_label.text = "";
        this.doJob_later_atk_num.text = "";
        this.doJob_later_def_num.text = "";
        this.doJob_later_hp_num.text = "";
        var scroller_group = this.doJob_skill_scroller.viewport;
        scroller_group.removeAllElements();
        this.knight_dojod_info = null;
        this.card_dojod_info = null;
        Net.getOnPositionKnightsList();
    };
    __egretProto__.refreshJobTeamInfo = function () {
        if (this.self_is_in_team) {
            if (this.tick_count % 3 == 0) {
                Net.refreshJobTeamStatus();
            }
        }
        else {
            if (this.tick_count % 6 == 0) {
                Net.refreshJobTeamStatus();
            }
        }
        this.tick_count++;
    };
    __egretProto__.showNoGuildHint = function () {
        this.hint_label.visible = true;
        this.resetTeamGroupStatus();
    };
    __egretProto__.finishRefreshJobTeamStatus = function (result, data, room_id) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            Logic.clearGuildInfo();
            this.showNoGuildHint();
            return;
        }
        if (result != 0) {
            var strErrorMsg = "刷新转职副本失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.hint_label.visible = false;
        if (room_id <= 0) {
            this.self_is_in_team = false;
        }
        else {
            this.self_is_in_team = true;
        }
        this.job_team_list = [];
        this.job_team_members_list = [];
        if (this.self_is_in_team == false) {
            var scroller_group = this.team_list.viewport;
            for (var i = 0; i < data.length; i++) {
                var info = new JobTeamInfo();
                info.team_id = data[i][0];
                info.name = data[i][1];
                info.type = data[i][2];
                info.level = data[i][3];
                info.members_num = data[i][4];
                this.job_team_list.push(info);
                if (this.job_team_items[i] != null) {
                    this.job_team_items[i].refreshList(i, info);
                }
                else {
                    var team_list_item = new UIJobTeamListItem();
                    team_list_item.setData(i, info, this);
                    scroller_group.addElement(team_list_item);
                    this.job_team_items.push(team_list_item);
                }
            }
            for (var i = this.job_team_items.length - 1; i >= data.length; i--) {
                scroller_group.removeElement(this.job_team_items[i]);
                this.job_team_items.pop();
            }
        }
        else {
            var members_scroller_group = this.members_list.viewport;
            var job_battle_id = data[0];
            var team_members = data[1];
            for (var i = 0; i < team_members.length; i++) {
                var member = new JobTeamMembers();
                member.player_id = team_members[i][0];
                member.name = team_members[i][1];
                member.type = team_members[i][2];
                member.level = team_members[i][3];
                member.isLeader = false;
                if (i == 0) {
                    member.isLeader = true;
                    if (Logic.player_name == member.name) {
                        this.self_is_team_leader = true;
                    }
                    else {
                        this.self_is_team_leader = false;
                    }
                }
                this.job_team_members_list.push(member);
                if (this.job_team_members_items[i] != null) {
                    this.job_team_members_items[i].refreshList(i, member);
                }
                else {
                    var member_list_item = new UIJobMemberListItem();
                    member_list_item.setData(i, member, this);
                    if (i == this.current_select_member_index) {
                        member_list_item.is_selected = true;
                    }
                    members_scroller_group.addElement(member_list_item);
                    this.job_team_members_items.push(member_list_item);
                }
            }
            for (var i = this.job_team_members_items.length - 1; i >= team_members.length; i--) {
                members_scroller_group.removeElement(this.job_team_members_items[i]);
                this.job_team_members_items.pop();
            }
            if (job_battle_id > 0) {
                this.enterJobTeamBattle(job_battle_id);
            }
        }
        this.resetTeamGroupStatus();
    };
    __egretProto__.startJobBattle = function () {
        Net.startJobTeamBattle();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishStartJobBattle = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "进入副本失败，错误码: " + result;
            if (result == -12) {
                strErrorMsg = "体力不足~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 2 /* TAB_STAMINA */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        Net.refreshJobTeamStatus();
    };
    __egretProto__.enterJobTeamBattle = function (job_battle_id) {
        if (this.second_tick_timer != null) {
            this.second_tick_timer.stop();
            this.second_tick_timer = null;
        }
        BattleLayer.InitJobTeamBattleInfo();
        BattleLayer.AddPlayerKnightsToBattleForJobTeam(this.job_team_members_list);
        var npc_list = [0, 0, 0, 0, 0];
        var transfer_id = job_battle_id;
        var transfer_line = Utils.getLine("transfer_instance_list", transfer_id);
        if (transfer_line != null) {
            var datas = transfer_line[transfer_instance_list_npc_list];
            for (var i = 0; i < datas.length; i++) {
                npc_list[i] = datas[i];
            }
        }
        BattleLayer.AddJobTeamNpcKnightsToBattle(npc_list);
        G.main_director.enterBattleView();
    };
    __egretProto__.joinJobTeam = function (team_id) {
        Net.joinJobTeam(team_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishJoinJobTeam = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "加入队伍失败，错误码: " + result;
            if (result == -12) {
                strErrorMsg = "体力不足~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 2 /* TAB_STAMINA */);
                this.guiLayer.addElement(shop);
            }
            else if (result == -14) {
                strErrorMsg = "队伍已经满员~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.self_is_in_team = true;
        this.resetTeamGroupStatus();
        Net.refreshJobTeamStatus();
    };
    __egretProto__.createJobTeam = function () {
        Net.createJobTeam();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishCreateJobTeam = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "创建队伍失败，错误码: " + result;
            if (result == -12) {
                strErrorMsg = "体力不足~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 2 /* TAB_STAMINA */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.self_is_in_team = true;
        this.resetTeamGroupStatus();
        Net.refreshJobTeamStatus();
    };
    __egretProto__.selectTeamMember = function (index) {
        if (index < 0 || index >= this.job_team_members_list.length) {
            return;
        }
        var member_item = this.job_team_members_items[this.current_select_member_index];
        if (member_item != null) {
            member_item.deselect();
        }
        this.current_select_member_index = index;
    };
    __egretProto__.onViewMember = function (evt) {
        var member = this.job_team_members_list[this.current_select_member_index];
        if (member == null) {
            Utils.showToastInfo(this.guiLayer, "请先选择一位队员!");
            return;
        }
        var player_id = member.player_id;
        this.showPlayerDetailDlg(player_id);
    };
    __egretProto__.showPlayerDetailDlg = function (player_id) {
        if (this.player_datail_dlg != null) {
            return;
        }
        var player_datail_dlg = new UIPlayerDetailDialog();
        player_datail_dlg.setPlayerId(this, this.guiLayer, player_id);
        this.player_datail_dlg = player_datail_dlg;
        this.guiLayer.addElement(player_datail_dlg);
    };
    __egretProto__.onKickTeamMember = function (evt) {
        var member = this.job_team_members_list[this.current_select_member_index];
        if (member == null) {
            Utils.showToastInfo(this.guiLayer, "请先选择一位队员!");
            return;
        }
        if (Logic.player_name == member.name) {
            Utils.showToastInfo(this.guiLayer, "不能踢出队长!");
            return;
        }
        var player_id = member.player_id;
        Net.kickJobTeamMember(player_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishKickTeamMember = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "踢出队员失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        Net.refreshJobTeamStatus();
    };
    __egretProto__.dismissJobTeam = function () {
        Net.dismissJobTeam();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishDismissJobTeam = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "解散队伍失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.self_is_in_team = false;
        this.resetTeamGroupStatus();
        Net.refreshJobTeamStatus();
    };
    __egretProto__.onExitTeam = function () {
        Net.exitJobTeam();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishExitJobTeam = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "退出队伍失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.self_is_in_team = false;
        this.resetTeamGroupStatus();
        Net.refreshJobTeamStatus();
    };
    __egretProto__.resetTeamGroupStatus = function () {
        if (Logic.isPlayerInGuild() == false) {
            this.team_list_group.visible = false;
            this.member_list_group.visible = false;
            return;
        }
        if (this.self_is_in_team) {
            this.team_list_group.visible = false;
            this.member_list_group.visible = true;
            if (this.self_is_team_leader) {
                this.exit_btn.visible = false;
                this.kick_out_btn.visible = true;
                this.start_battle_btn.visible = true;
                this.dismiss_btn.visible = true;
            }
            else {
                this.exit_btn.visible = true;
                this.kick_out_btn.visible = false;
                this.start_battle_btn.visible = false;
                this.dismiss_btn.visible = false;
            }
        }
        else {
            this.team_list_group.visible = true;
            this.member_list_group.visible = false;
        }
    };
    __egretProto__.onBackBtnClicked = function () {
        if (this.self_is_in_team) {
            Utils.showToastInfo(this.guiLayer, "您在转职副本队伍中，请先退出队伍~");
            return;
        }
        if (this.second_tick_timer != null) {
            this.second_tick_timer.stop();
            this.second_tick_timer = null;
        }
        this.main_director.enterHomeView();
    };
    return UIJobHomeView;
})(egret.gui.Panel);
UIJobHomeView.prototype.__class__ = "UIJobHomeView";
