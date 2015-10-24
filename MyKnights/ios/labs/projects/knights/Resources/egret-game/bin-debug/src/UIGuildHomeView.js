var SHOW_GUILD_VIEW;
(function (SHOW_GUILD_VIEW) {
    SHOW_GUILD_VIEW[SHOW_GUILD_VIEW["GUILD_VIEW_HOME"] = 1] = "GUILD_VIEW_HOME";
    SHOW_GUILD_VIEW[SHOW_GUILD_VIEW["GUILD_VIEW_LIST"] = 2] = "GUILD_VIEW_LIST";
    SHOW_GUILD_VIEW[SHOW_GUILD_VIEW["GUILD_APPLY_LIST"] = 3] = "GUILD_APPLY_LIST";
})(SHOW_GUILD_VIEW || (SHOW_GUILD_VIEW = {}));
var GUILD_HOME_TAB;
(function (GUILD_HOME_TAB) {
    GUILD_HOME_TAB[GUILD_HOME_TAB["TAB_NONE"] = -1] = "TAB_NONE";
    GUILD_HOME_TAB[GUILD_HOME_TAB["TAB_NOTICE"] = 0] = "TAB_NOTICE";
    GUILD_HOME_TAB[GUILD_HOME_TAB["TAB_MEMBERS"] = 1] = "TAB_MEMBERS";
    GUILD_HOME_TAB[GUILD_HOME_TAB["TAB_DONATION"] = 2] = "TAB_DONATION";
    GUILD_HOME_TAB[GUILD_HOME_TAB["TAB_MANAGER"] = 3] = "TAB_MANAGER";
})(GUILD_HOME_TAB || (GUILD_HOME_TAB = {}));
var Guild_Member_Info = (function () {
    function Guild_Member_Info() {
        this.player_id = 0;
        this.name = "";
        this.type = 0;
        this.level = 0;
        this.position = 0;
        this.player_status = 0;
        this.status_data = 0;
    }
    var __egretProto__ = Guild_Member_Info.prototype;
    return Guild_Member_Info;
})();
Guild_Member_Info.prototype.__class__ = "Guild_Member_Info";
var Guild_Donate_Info = (function () {
    function Guild_Donate_Info() {
        this.player_id = 0;
        this.name = "";
        this.type = 0;
        this.level = 0;
        this.position = 0;
        this.donate_value = 0;
    }
    var __egretProto__ = Guild_Donate_Info.prototype;
    return Guild_Donate_Info;
})();
Guild_Donate_Info.prototype.__class__ = "Guild_Donate_Info";
var Guild_Apply_Info = (function () {
    function Guild_Apply_Info() {
        this.player_id = 0;
        this.name = "";
        this.level = 0;
        this.type = 0;
    }
    var __egretProto__ = Guild_Apply_Info.prototype;
    return Guild_Apply_Info;
})();
Guild_Apply_Info.prototype.__class__ = "Guild_Apply_Info";
var UIGuildHomeView = (function (_super) {
    __extends(UIGuildHomeView, _super);
    function UIGuildHomeView() {
        _super.call(this);
        this.top_info_bar = null;
        this.bottom_info_bar = null;
        this.current_guild_tab = -1 /* TAB_NONE */;
        this.guild_tab_btn_list = [];
        this.guild_group_list = [];
        this.current_show_subview = 1 /* GUILD_VIEW_HOME */;
        this.current_subview = null;
        this.current_select_member_index = -1;
        this.all_members_list = [];
        this.member_items_list = [];
        this.has_members_left = true;
        this.all_donate_info_list = [];
        this.donate_items_list = [];
        this.has_donate_info_left = true;
        this.currrent_donate_money = 0;
        this.current_select_apply_index = -1;
        this.all_apply_list = [];
        this.apply_items_list = [];
        this.has_apply_left = true;
        this.last_set_notice = "";
        this.delay_scroll_index = 0;
        this.skinName = "skins.UIGuildHomeViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIGuildHomeView.prototype;
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
        this.current_guild_tab = -1 /* TAB_NONE */;
        this.guild_tab_btn_list = [this.guild_notice_btn, this.guild_member_btn, this.guild_donate_btn, this.guild_set_btn];
        this.guild_group_list = [this.guild_notice_group, this.guild_members_group, this.guild_donation_group, this.guild_manager_group];
        this.onSetGuildTabStatus(0 /* TAB_NOTICE */);
        this.guild_notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNoticeTab, this);
        this.guild_member_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMemberTab, this);
        this.guild_donate_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDonateTab, this);
        this.guild_set_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetTab, this);
        // Notice area
        this.set_notice_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetNotice, this);
        // Member tab
        this.btn_kick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKickMember, this);
        this.btn_memeber_detail.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewMember, this);
        this.btn_change_chairman.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeChairman, this);
        // Donate tab
        this.btn_donate.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDonate, this);
        // Set tab
        this.btn_exit_guild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitGuild, this);
        this.btn_dismiss_guild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDismissGuild, this);
        this.btn_accept_apply.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAcceptApply, this);
        this.btn_reject_apply.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRejectApply, this);
        this.btn_apply_detail.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onApplyDetail, this);
        this.members_list.addEventListener(egret.Event.COMPLETE, this.refreshMemberList, this);
        this.donate_list.addEventListener(egret.Event.COMPLETE, this.refreshDonationList, this);
        this.apply_list.addEventListener(egret.Event.COMPLETE, this.refreshApplyList, this);
    };
    __egretProto__.onRemoveAllEventListener = function () {
        this.guild_notice_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onNoticeTab, this);
        this.guild_member_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMemberTab, this);
        this.guild_donate_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDonateTab, this);
        this.guild_set_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetTab, this);
        // Notice area
        this.set_notice_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetNotice, this);
        // Member tab
        this.btn_kick.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onKickMember, this);
        this.btn_memeber_detail.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewMember, this);
        this.btn_change_chairman.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeChairman, this);
        // Donate tab
        this.btn_donate.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDonate, this);
        // Set tab
        this.btn_exit_guild.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitGuild, this);
        this.btn_dismiss_guild.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDismissGuild, this);
        this.btn_accept_apply.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onAcceptApply, this);
        this.btn_reject_apply.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRejectApply, this);
        this.btn_apply_detail.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onApplyDetail, this);
        this.members_list.removeEventListener(egret.Event.COMPLETE, this.refreshMemberList, this);
        this.donate_list.removeEventListener(egret.Event.COMPLETE, this.refreshDonationList, this);
        this.apply_list.removeEventListener(egret.Event.COMPLETE, this.refreshApplyList, this);
    };
    __egretProto__.onNoticeTab = function (evt) {
        this.onSetGuildTabStatus(0 /* TAB_NOTICE */);
    };
    __egretProto__.onMemberTab = function (evt) {
        this.onSetGuildTabStatus(1 /* TAB_MEMBERS */);
    };
    __egretProto__.onDonateTab = function (evt) {
        this.onSetGuildTabStatus(2 /* TAB_DONATION */);
    };
    __egretProto__.onSetTab = function (evt) {
        this.onSetGuildTabStatus(3 /* TAB_MANAGER */);
    };
    __egretProto__.onSetGuildTabStatus = function (next_tab) {
        if (this.current_guild_tab == next_tab) {
            return;
        }
        if (this.current_guild_tab != -1 /* TAB_NONE */) {
            this.guild_group_list[this.current_guild_tab].visible = false;
            this.guild_tab_btn_list[this.current_guild_tab].enabled = true;
            this.guild_tab_btn_list[this.current_guild_tab].y += 33;
        }
        this.current_guild_tab = next_tab;
        this.guild_group_list[this.current_guild_tab].visible = true;
        this.guild_tab_btn_list[this.current_guild_tab].enabled = false;
        this.guild_tab_btn_list[this.current_guild_tab].y -= 33;
        if (this.current_guild_tab == 0 /* TAB_NOTICE */) {
            this.getGuildBaseInfo();
        }
        else if (this.current_guild_tab == 1 /* TAB_MEMBERS */) {
            var scroller_group = this.members_list.viewport;
            scroller_group.removeAllElements();
            this.current_select_member_index = -1;
            this.all_members_list = [];
            this.member_items_list = [];
            this.has_members_left = true;
            this.getGuildMembersList();
        }
        else if (this.current_guild_tab == 2 /* TAB_DONATION */) {
            var scroller_group = this.donate_list.viewport;
            scroller_group.removeAllElements();
            this.all_donate_info_list = [];
            this.donate_items_list = [];
            this.has_donate_info_left = true;
            this.getGuildDonationList();
        }
        else if (this.current_guild_tab == 3 /* TAB_MANAGER */) {
            var scroller_group = this.apply_list.viewport;
            scroller_group.removeAllElements();
            this.current_select_apply_index = -1;
            this.all_apply_list = [];
            this.apply_items_list = [];
            this.has_apply_left = true;
            this.getGuildAppliesList();
            this.getGuildCreateInfo();
        }
    };
    __egretProto__.onDonate = function (evt) {
        Net.donateForGuild(this.currrent_donate_money);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishDonateForGuild = function (result, data, extra_data, money) {
        if (money === void 0) { money = -1; }
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result != 0) {
            var strErrorMsg = "捐献失败，错误码: " + result;
            if (result == -3) {
                strErrorMsg = "金币不足！";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 0 /* TAB_MONEY */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        /*var dlg = new UIHintView();
        dlg.setHint(this.guiLayer, "确认购买", "您的金钱不足！是否去商店购买？", CHOOSE_TYPE.OK_CANCEL, this,  this.onShop);
        this.guiLayer.addElement(dlg);*/
        if (money >= 0) {
            Logic.money = money;
            this.top_info_bar.refreshMoneyText();
        }
        this.label_donate_exp.text = "" + extra_data[0];
        this.label_donate_exp_max.text = "" + extra_data[1];
        this.label_current_max.text = "" + extra_data[2];
        this.label_donate_money.text = "" + extra_data[3];
        this.label_next_max.text = "" + extra_data[4];
        this.icon_donate_exp_bar.mask = new egret.Rectangle(0, 0, extra_data[0] / extra_data[1] * 488, 25);
        this.currrent_donate_money = extra_data[3];
        var scroller_group = this.donate_list.viewport;
        scroller_group.removeAllElements();
        this.all_donate_info_list = [];
        this.donate_items_list = [];
        this.has_donate_info_left = true;
        if (data.length < 10) {
            this.has_donate_info_left = false;
        }
        else {
            this.has_donate_info_left = true;
        }
        for (var i = 0; i < data.length; i++) {
            var guild_donate_info = new Guild_Donate_Info();
            guild_donate_info.name = data[i][0];
            guild_donate_info.donate_value = data[i][1];
            this.all_donate_info_list.push(guild_donate_info);
            var guild_donate_item = new UIGuildDonateItem();
            guild_donate_item.setIndex(this, this.donate_items_list.length);
            guild_donate_item.resetMemberInfo(guild_donate_info);
            scroller_group.addElement(guild_donate_item);
            this.donate_items_list.push(guild_donate_item);
        }
    };
    __egretProto__.getGuildDonationList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        Net.getGuildDonationList(start_index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetGuildDonationList = function (result, data, extra_data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取捐献列表失败，错误码: " + result);
            return;
        }
        this.label_donate_exp.text = "" + extra_data[0];
        this.label_donate_exp_max.text = "" + extra_data[1];
        this.label_current_max.text = "" + extra_data[2];
        this.label_donate_money.text = "" + extra_data[3];
        this.label_next_max.text = "" + extra_data[4];
        this.icon_donate_exp_bar.mask = new egret.Rectangle(0, 0, extra_data[0] / extra_data[1] * 488, 25);
        this.currrent_donate_money = extra_data[3];
        if (data.length < 10) {
            this.has_donate_info_left = false;
        }
        else {
            this.has_donate_info_left = true;
        }
        var scroller_group = this.donate_list.viewport;
        for (var i = 0; i < data.length; i++) {
            var guild_donate_info = new Guild_Donate_Info();
            guild_donate_info.name = data[i][0];
            guild_donate_info.donate_value = data[i][1];
            this.all_donate_info_list.push(guild_donate_info);
            var guild_donate_item = new UIGuildDonateItem();
            guild_donate_item.setIndex(this, this.donate_items_list.length);
            guild_donate_item.resetMemberInfo(guild_donate_info);
            scroller_group.addElement(guild_donate_item);
            this.donate_items_list.push(guild_donate_item);
        }
    };
    __egretProto__.refreshDonationList = function () {
        if (this.has_donate_info_left == false) {
            this.donate_list.removeEventListener(egret.Event.COMPLETE, this.refreshDonationList, this);
            return;
        }
        var top = this.donate_list.viewport.verticalScrollPosition;
        var bottom = top + this.donate_list.height;
        if (this.donate_items_list[this.donate_items_list.length - 1].y < bottom) {
            this.getGuildDonationList(this.all_donate_info_list.length);
        }
    };
    __egretProto__.getGuildMembersList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        Net.getGuildMembersList(start_index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetGuildMembersList = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取骑士团成员列表失败，错误码: " + result);
            return;
        }
        if (data.length < 10) {
            this.has_members_left = false;
        }
        else {
            this.has_members_left = true;
        }
        var scroller_group = this.members_list.viewport;
        for (var i = 0; i < data.length; i++) {
            var guild_member_info = new Guild_Member_Info();
            guild_member_info.player_id = data[i][0];
            guild_member_info.name = data[i][1];
            guild_member_info.type = data[i][2];
            guild_member_info.position = data[i][3];
            guild_member_info.level = data[i][4];
            guild_member_info.player_status = data[i][5];
            guild_member_info.status_data = data[i][6];
            this.all_members_list.push(guild_member_info);
            var guild_member_item = new UIGuildMemberItem();
            guild_member_item.setIndex(this, this.member_items_list.length);
            guild_member_item.resetMemberInfo(guild_member_info);
            scroller_group.addElement(guild_member_item);
            this.member_items_list.push(guild_member_item);
        }
    };
    __egretProto__.refreshMemberList = function () {
        if (this.has_members_left == false) {
            this.members_list.removeEventListener(egret.Event.COMPLETE, this.refreshMemberList, this);
            return;
        }
        if (this.member_items_list.length <= 0) {
            return;
        }
        var top = this.members_list.viewport.verticalScrollPosition;
        var bottom = top + this.members_list.height;
        if (this.member_items_list[this.member_items_list.length - 1].y < bottom) {
            this.getGuildMembersList(this.all_members_list.length);
        }
    };
    __egretProto__.finishGetAppliesList = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取申请列表失败，错误码: " + result);
            return;
        }
        if (data.length < 10) {
            this.has_apply_left = false;
        }
        else {
            this.has_apply_left = true;
        }
        var scroller_group = this.apply_list.viewport;
        for (var i = 0; i < data.length; i++) {
            var apply_info = new Guild_Apply_Info();
            apply_info.player_id = data[i][0];
            apply_info.level = data[i][1];
            apply_info.name = data[i][2];
            apply_info.type = data[i][3];
            this.all_apply_list.push(apply_info);
            var apply_item = new UIGuildApplyItem();
            apply_item.setIndex(this, this.apply_items_list.length);
            apply_item.resetApplyInfo(apply_info);
            scroller_group.addElement(apply_item);
            this.apply_items_list.push(apply_item);
        }
    };
    __egretProto__.getGuildAppliesList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        Net.getAppliesList(start_index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.refreshApplyList = function () {
        if (this.has_apply_left == false) {
            this.apply_list.removeEventListener(egret.Event.COMPLETE, this.refreshApplyList, this);
            return;
        }
        if (this.apply_items_list.length <= 0) {
            return;
        }
        var top = this.apply_list.viewport.verticalScrollPosition;
        var bottom = top + this.apply_list.height;
        if (this.apply_items_list[this.apply_items_list.length - 1].y < bottom) {
            this.getGuildAppliesList(this.all_apply_list.length);
        }
    };
    __egretProto__.getGuildBaseInfo = function () {
        Net.getSelfGuildInfo();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetSelfGuildInfo = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            if (result == G.GUILD_NOT_EXIST) {
                // 没有加入骑士团
                Logic.guild_id = -1;
                Logic.guild_name = "";
                this.onShowGuildList();
                return;
            }
            else {
                var strErrorMsg = "获取骑士团信息失败，错误码: " + result;
                Utils.showToastInfo(this.guiLayer, strErrorMsg);
            }
            return;
        }
        Logic.guild_id = data[0];
        Logic.guild_name = data[1];
        Logic.guild_flag_id = data[2];
        this.label_guild_notice.text = data[3];
        Logic.self_guild_positon = data[4];
        this.refreshButtonBySelfPosition();
        this.top_info_bar.initPlayer();
    };
    __egretProto__.getGuildCreateInfo = function () {
        Net.getSelfGuildManagerInfo();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetGuildCreateInfo = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result != 0) {
            var strErrorMsg = "获取骑士团管理信息失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.label_creator.text = data[0];
        this.label_create_time.text = Utils.getTimeStrForTick(data[1] * 1000);
        ;
        this.label_guild_rank.text = "" + data[2];
        this.label_guild_members.text = "" + data[3] + "/" + data[4];
        this.top_info_bar.initPlayer();
    };
    __egretProto__.onSetNotice = function (evt) {
        this.input_notice = new UIGuildInputDialog();
        this.input_notice.showInputLayer(this, this.sentNotice);
        this.guiLayer.addElement(this.input_notice);
        this.input_notice.input_edit.text = this.label_guild_notice.text;
    };
    __egretProto__.sentNotice = function () {
        if (BadWords.HasAnyBadword(this.last_set_notice)) {
            Utils.showToastInfo(this.guiLayer, "名字中含有屏蔽词!");
            return;
        }
        Net.setGuildNotice(this.last_set_notice);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishSetGuildNotice = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result != 0) {
            var strErrorMsg = "修改骑士团通知失败，错误码: " + result;
            if (result == -12) {
                strErrorMsg = "权限不足，不能修改公告";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.input_notice.onCloseClick();
        this.label_guild_notice.text = this.last_set_notice;
    };
    __egretProto__.finishQuitGuild = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result != 0) {
            var strErrorMsg = "退出骑士团失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.reCheckGuildInfo();
    };
    __egretProto__.onExitGuild = function (evt) {
        var dlg = new UIHintView();
        dlg.setHint(this.guiLayer, "退出", "您确认要退出骑士团吗？", 2 /* OK_CANCEL */, this, this.onExitGuildConfirm);
        this.guiLayer.addElement(dlg);
    };
    __egretProto__.onExitGuildConfirm = function () {
        Net.quitGuild();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishDismissGuild = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result == -12) {
            var strErrorMsg = "权限不足，不能解散骑士团!";
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.reCheckGuildInfo();
    };
    __egretProto__.onDismissGuild = function (evt) {
        var dlg = new UIHintView();
        dlg.setHint(this.guiLayer, "解散", "您确认要解散骑士团吗？", 2 /* OK_CANCEL */, this, this.onDismissGuildConfirm);
        this.guiLayer.addElement(dlg);
    };
    __egretProto__.onDismissGuildConfirm = function (evt) {
        Net.dismissGuild();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishKickGuildMember = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result != 0) {
            var strErrorMsg = "开除骑士团成员失败，错误码: " + result;
            if (result == -12) {
                strErrorMsg = "权限不足!";
            }
            else if (result == -13) {
                strErrorMsg = "该骑士是工作人员，不能开除!";
            }
            else if (result == -14) {
                strErrorMsg = "该骑士已经被开除!";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.deleteLastKickMemeber();
    };
    __egretProto__.onKickGuildMemberConfirm = function () {
        var player_id = this.all_members_list[this.current_select_member_index].player_id;
        Net.kickGuildMember(player_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.onKickMember = function (evt) {
        if (this.current_select_member_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请先选择一位成员!");
            return;
        }
        var dlg = new UIHintView();
        dlg.setHint(this.guiLayer, "开除", "您确认要将他踢出骑士团吗？", 2 /* OK_CANCEL */, this, this.onKickGuildMemberConfirm);
        this.guiLayer.addElement(dlg);
    };
    __egretProto__.deleteLastKickMemeber = function () {
        var deleteIndex = this.current_select_member_index;
        this.all_members_list.splice(deleteIndex, 1);
        var scroller_group = this.members_list.viewport;
        scroller_group.removeAllElements();
        this.member_items_list = [];
        for (var i = 0; i < this.all_members_list.length; i++) {
            var member_info = this.all_members_list[i];
            var member_item = new UIGuildMemberItem();
            member_item.setIndex(this, this.member_items_list.length);
            member_item.resetMemberInfo(member_info);
            scroller_group.addElement(member_item);
            this.member_items_list.push(member_item);
        }
        this.current_select_member_index = -1;
        this.scrollAfterKickMember(deleteIndex);
    };
    __egretProto__.scrollAfterKickMember = function (scroll_index) {
        if (scroll_index >= this.member_items_list.length) {
            scroll_index = this.member_items_list.length - 1;
        }
        this.delay_scroll_index = scroll_index;
        var delay_scroll_timer = new egret.Timer(100, 1);
        delay_scroll_timer.addEventListener(egret.TimerEvent.TIMER, this.onDelayScrollTimer, this);
        delay_scroll_timer.start();
    };
    __egretProto__.onDelayScrollTimer = function () {
        var posY = (this.delay_scroll_index - 1) * 55 - this.members_list.height;
        if (posY > 0) {
            this.members_list.throwVertically(posY, 0);
        }
    };
    __egretProto__.onViewMember = function (evt) {
        if (this.current_select_member_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请先选择一位成员!");
            return;
        }
        var player_id = this.all_members_list[this.current_select_member_index].player_id;
        ;
        this.showPlayerDetailDlg(player_id);
    };
    __egretProto__.finishSetGuildChairman = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == G.GUILD_NOT_EXIST) {
            // 骑士团异常
            this.reCheckGuildInfo();
            return;
        }
        if (result != 0) {
            var strErrorMsg = "任命团长失败，错误码: " + result;
            if (result == -12) {
                strErrorMsg = "权限不足!";
            }
            else if (result == -14) {
                strErrorMsg = "该骑士已经被开除!";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.reCheckGuildInfo();
    };
    __egretProto__.onChageChairmanConfirm = function () {
        var player_id = this.all_members_list[this.current_select_member_index].player_id;
        Net.setGuildChairman(player_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.onChangeChairman = function (evt) {
        if (this.current_select_member_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请先选择一位成员!");
            return;
        }
        var position = this.all_members_list[this.current_select_member_index].position;
        if (position == 0 /* CHAIRMAN */) {
            Utils.showToastInfo(this.guiLayer, "别闹了~");
            return;
        }
        var dlg = new UIHintView();
        dlg.setHint(this.guiLayer, "新团长", "您确认要将他任命为新团长吗？", 2 /* OK_CANCEL */, this, this.onChageChairmanConfirm);
        this.guiLayer.addElement(dlg);
    };
    __egretProto__.selectGuildMember = function (index) {
        if (index < 0 || index >= this.all_members_list.length) {
            return;
        }
        if (this.current_select_member_index >= 0) {
            var member_item = this.member_items_list[this.current_select_member_index];
            member_item.deselect();
        }
        this.current_select_member_index = index;
    };
    __egretProto__.refreshButtonBySelfPosition = function () {
        if (Logic.isGuildChairman()) {
            this.set_notice_btn.visible = true;
            this.btn_kick.visible = true;
            this.btn_change_chairman.visible = true;
            this.btn_dismiss_guild.visible = true;
            this.btn_exit_guild.visible = false;
            this.btn_accept_apply.visible = true;
            this.btn_reject_apply.visible = true;
        }
        else {
            this.set_notice_btn.visible = false;
            this.btn_kick.visible = false;
            this.btn_change_chairman.visible = false;
            this.btn_dismiss_guild.visible = false;
            this.btn_exit_guild.visible = true;
            this.btn_accept_apply.visible = false;
            this.btn_reject_apply.visible = false;
        }
    };
    __egretProto__.selectGuildApply = function (index) {
        if (index < 0 || index >= this.all_apply_list.length) {
            return;
        }
        if (this.current_select_apply_index >= 0) {
            var apply_item = this.apply_items_list[this.current_select_apply_index];
            apply_item.deselect();
        }
        this.current_select_apply_index = index;
    };
    __egretProto__.finishAcceptApply = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == -13 || result == -14) {
            var strErrorMsg = "骑士团人数已满~";
            if (result == -14) {
                strErrorMsg = "权限不足~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        if (result != 0) {
            var strErrorMsg = "同意申请失败，错误码: " + result;
            if (result == -12 || result == -15) {
                strErrorMsg = "申请已经过期~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
        }
        this.deleteLastApplyInfo();
    };
    __egretProto__.onAcceptApply = function (evt) {
        if (this.current_select_apply_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请先选择一位申请者!");
            return;
        }
        var player_id = this.all_apply_list[this.current_select_apply_index].player_id;
        Net.acceptApply(player_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishRejectApply = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result == -14) {
            var strErrorMsg = "权限不足~";
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        if (result != 0) {
            var strErrorMsg = "拒绝申请失败，错误码: " + result;
            if (result == -12 || result == -15) {
                strErrorMsg = "申请已经过期~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
        }
        this.deleteLastApplyInfo();
    };
    __egretProto__.onRejectApply = function (evt) {
        if (this.current_select_apply_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请先选择一位申请者!");
            return;
        }
        var player_id = this.all_apply_list[this.current_select_apply_index].player_id;
        Net.rejectApply(player_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.deleteLastApplyInfo = function () {
        var deletApplyIndex = this.current_select_apply_index;
        this.all_apply_list.splice(deletApplyIndex, 1);
        var scroller_group = this.apply_list.viewport;
        scroller_group.removeAllElements();
        this.apply_items_list = [];
        for (var i = 0; i < this.all_apply_list.length; i++) {
            var apply_info = this.all_apply_list[i];
            var apply_item = new UIGuildApplyItem();
            apply_item.setIndex(this, this.apply_items_list.length);
            apply_item.resetApplyInfo(apply_info);
            scroller_group.addElement(apply_item);
            this.apply_items_list.push(apply_item);
        }
        this.current_select_apply_index = -1;
        this.scrollAfterDeleteApply(deletApplyIndex);
    };
    __egretProto__.scrollAfterDeleteApply = function (scroll_index) {
        if (scroll_index >= this.apply_items_list.length) {
            scroll_index = this.apply_items_list.length - 1;
        }
        this.delay_scroll_index = scroll_index;
        var delay_scroll_timer = new egret.Timer(100, 1);
        delay_scroll_timer.addEventListener(egret.TimerEvent.TIMER, this.onDelayApplyScrollTimer, this);
        delay_scroll_timer.start();
    };
    __egretProto__.onDelayApplyScrollTimer = function () {
        var posY = (this.delay_scroll_index - 1) * 80 - this.apply_list.height;
        if (posY > 0) {
            this.apply_list.throwVertically(posY, 0);
        }
    };
    __egretProto__.onApplyDetail = function (evt) {
        if (this.current_select_apply_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请先选择一位申请者!");
            return;
        }
        var player_id = this.all_apply_list[this.current_select_apply_index].player_id;
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
    __egretProto__.finishGetGuildsList = function (result, data) {
        if (this.current_show_subview != 2 /* GUILD_VIEW_LIST */) {
            return;
        }
        this.current_subview.finishGetGuildsList(result, data);
    };
    __egretProto__.finishSearchGuild = function (result, data) {
        if (this.current_show_subview != 2 /* GUILD_VIEW_LIST */) {
            return;
        }
        this.current_subview.finishSearchGuild(result, data);
    };
    __egretProto__.finishApplyGuild = function (result) {
        if (this.current_show_subview != 2 /* GUILD_VIEW_LIST */) {
            return;
        }
        this.current_subview.finishApplyGuild(result);
    };
    __egretProto__.finishCancelApplyGuild = function (result) {
        if (this.current_show_subview != 2 /* GUILD_VIEW_LIST */) {
            return;
        }
        this.current_subview.finishCancelApplyGuild(result);
    };
    __egretProto__.finishCreateGuild = function (result) {
        if (this.current_show_subview != 2 /* GUILD_VIEW_LIST */) {
            return;
        }
        this.current_subview.finishCreateGuild(result);
    };
    __egretProto__.onShowGuildList = function () {
        var guild_list_view = new UIGuildListView();
        this.guiLayer.addElementAt(guild_list_view, 1);
        guild_list_view.guiLayer = this.guiLayer;
        this.current_show_subview = 2 /* GUILD_VIEW_LIST */;
        this.current_subview = guild_list_view;
        this.visible = false;
    };
    __egretProto__.onBackBtnClicked = function () {
        if (this.current_show_subview == 2 /* GUILD_VIEW_LIST */) {
            if (Logic.isPlayerInGuild()) {
                this.hideGuildSubview();
            }
            else {
                this.exitGuildHomeView();
            }
        }
        else if (this.current_show_subview != 1 /* ARENA_VIEW_HOME */) {
            this.hideGuildSubview();
        }
        else {
            this.exitGuildHomeView();
        }
    };
    __egretProto__.hideGuildSubview = function () {
        this.getGuildBaseInfo();
        this.guiLayer.removeElement(this.current_subview);
        this.current_show_subview = 1 /* GUILD_VIEW_HOME */;
        this.current_subview = null;
        this.visible = true;
    };
    __egretProto__.reCheckGuildInfo = function () {
        Logic.clearGuildInfo();
        this.top_info_bar.initPlayer();
        this.exitGuildHomeView();
    };
    __egretProto__.exitGuildHomeView = function () {
        this.main_director.enterHomeView();
    };
    return UIGuildHomeView;
})(egret.gui.Panel);
UIGuildHomeView.prototype.__class__ = "UIGuildHomeView";
