var GUILD_APPLY_STATUS;
(function (GUILD_APPLY_STATUS) {
    GUILD_APPLY_STATUS[GUILD_APPLY_STATUS["NONE"] = 1] = "NONE";
    GUILD_APPLY_STATUS[GUILD_APPLY_STATUS["HAS_APPLY"] = 0] = "HAS_APPLY";
    GUILD_APPLY_STATUS[GUILD_APPLY_STATUS["REJECT"] = -1] = "REJECT";
})(GUILD_APPLY_STATUS || (GUILD_APPLY_STATUS = {}));
var Guild_Info = (function () {
    function Guild_Info() {
        this.guild_id = 0;
        this.guild_flag_id = 0;
        this.guild_name = "";
        this.guild_members = 0;
        this.guild_members_max = 0;
        this.self_apply_status = 0;
        this.reject_tick = 0;
    }
    var __egretProto__ = Guild_Info.prototype;
    return Guild_Info;
})();
Guild_Info.prototype.__class__ = "Guild_Info";
var UIGuildListView = (function (_super) {
    __extends(UIGuildListView, _super);
    function UIGuildListView() {
        _super.call(this);
        this.current_select_guild_index = -1;
        this.all_guilds_list = [];
        this.guild_items_list = [];
        this.has_guilds_left = true;
        this.skinName = "skins.UIGuildListViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIGuildListView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.getGuildList();
        this.guild_create_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateGuild, this);
        this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelGuild, this);
        this.btn_apply.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onApplyGuild, this);
        this.icon_search_guild.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSearchGuild, this);
        this.guild_list.addEventListener(egret.Event.COMPLETE, this.refreshGuildList, this);
    };
    __egretProto__.getGuildList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        Net.getGuildsList(start_index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetGuildsList = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取骑士团列表失败，错误码: " + result);
            return;
        }
        if (data.length < 10) {
            this.has_guilds_left = false;
        }
        else {
            this.has_guilds_left = true;
        }
        var scroller_group = this.guild_list.viewport;
        for (var i = 0; i < data.length; i++) {
            var guild_info = new Guild_Info();
            guild_info.guild_id = data[i][0];
            guild_info.guild_flag_id = data[i][1];
            guild_info.guild_name = data[i][2];
            guild_info.guild_members = data[i][3];
            guild_info.guild_members_max = data[i][4];
            guild_info.self_apply_status = data[i][5];
            guild_info.reject_tick = data[i][6];
            this.all_guilds_list.push(guild_info);
            var guild_item = new UIGuildListItem();
            guild_item.setIndex(this, this.guild_items_list.length);
            guild_item.resetGuildInfo(guild_info);
            scroller_group.addElement(guild_item);
            this.guild_items_list.push(guild_item);
        }
    };
    __egretProto__.onSearchGuild = function (evt) {
        if (this.guild_name_edit.text.length <= 0) {
            Utils.showToastInfo(this.guiLayer, "请输入要查询的骑士团名称~");
            return;
        }
        Net.searchGuild(this.guild_name_edit.text);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishSearchGuild = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "查询骑士团失败，错误码: " + result);
            return;
        }
        this.current_select_guild_index = -1;
        this.all_guilds_list = [];
        this.guild_items_list = [];
        this.has_guilds_left = false;
        var scroller_group = this.guild_list.viewport;
        scroller_group.removeAllElements();
        for (var i = 0; i < data.length; i++) {
            var guild_info = new Guild_Info();
            guild_info.guild_id = data[i][0];
            guild_info.guild_flag_id = data[i][1];
            guild_info.guild_name = data[i][2];
            guild_info.guild_members = data[i][3];
            guild_info.guild_members_max = data[i][4];
            guild_info.self_apply_status = data[i][5];
            guild_info.reject_tick = data[i][6];
            this.all_guilds_list.push(guild_info);
            var guild_item = new UIGuildListItem();
            guild_item.setIndex(this, this.guild_items_list.length);
            guild_item.resetGuildInfo(guild_info);
            scroller_group.addElement(guild_item);
            this.guild_items_list.push(guild_item);
        }
    };
    __egretProto__.finishApplyGuild = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "申请加入骑士团失败，错误码: " + result;
            if (result == -16) {
                strErrorMsg = "骑士团已经解散~";
            }
            else if (result == -12) {
                strErrorMsg = "您已经被该骑士团无情地拒绝了~";
            }
            else if (result == -13) {
                strErrorMsg = "您已经加入骑士团了~";
            }
            else if (result == -14) {
                strErrorMsg = "同时最多只能申请3个骑士团~";
            }
            else if (result == -15) {
                strErrorMsg = "您已经向该骑士团提交过申请了，请耐心等待~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        var guild_item = this.guild_items_list[this.current_select_guild_index];
        guild_item.guild_info.self_apply_status = 0 /* HAS_APPLY */;
        guild_item.refreshInfo();
    };
    __egretProto__.applyGuild = function (guild_id) {
        Net.applyGuild(guild_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.onApplyGuild = function (evt) {
        if (this.current_select_guild_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请先选择一个骑士团!");
            return;
        }
        var guild_info = this.all_guilds_list[this.current_select_guild_index];
        if (guild_info.self_apply_status == 0 /* HAS_APPLY */) {
            Utils.showToastInfo(this.guiLayer, "您已经申请加入该骑士团!");
            return;
        }
        this.applyGuild(guild_info.guild_id);
    };
    __egretProto__.onCancelGuild = function (evt) {
        if (this.current_select_guild_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请先选择一个骑士团!");
            return;
        }
        var guild_info = this.all_guilds_list[this.current_select_guild_index];
        if (guild_info.self_apply_status != 0 /* HAS_APPLY */) {
            Utils.showToastInfo(this.guiLayer, "您未申请加入该骑士团!");
            return;
        }
        this.cancelApplyGuild(guild_info.guild_id);
    };
    __egretProto__.selectGuild = function (index) {
        if (index < 0 || index >= this.all_guilds_list.length) {
            return;
        }
        if (this.current_select_guild_index >= 0) {
            var guild_item = this.guild_items_list[this.current_select_guild_index];
            guild_item.deselect();
        }
        this.current_select_guild_index = index;
    };
    __egretProto__.finishCancelApplyGuild = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "取消申请失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        var guild_item = this.guild_items_list[this.current_select_guild_index];
        guild_item.guild_info.self_apply_status = 1 /* NONE */;
        guild_item.refreshInfo();
    };
    __egretProto__.cancelApplyGuild = function (guild_id) {
        Net.cancelApplyGuild(guild_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.onCreateGuild = function () {
        this.guild_name_layer = new UICreateGuildDialog();
        this.guild_name_layer.showOnMainLayer(this, this.sentGuildName);
        this.guiLayer.addElement(this.guild_name_layer);
    };
    __egretProto__.sentGuildName = function () {
        if (this.create_guild_name.length > 4 || this.create_guild_name.length <= 0) {
            Utils.showToastInfo(this.guiLayer, "名称必须在1至4个字符之间");
            return;
        }
        var ret = U.checkName(this.create_guild_name);
        if (ret == 2) {
            Utils.showToastInfo(this.guiLayer, "名称中不能有空格和特殊字符");
            return;
        }
        if (BadWords.HasAnyBadword(this.create_guild_name)) {
            Utils.showToastInfo(this.guiLayer, "名称中含有屏蔽词!");
            return;
        }
        var sentName = this.create_guild_name + "骑士团";
        Net.sendCreateGuild(sentName, 0);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishCreateGuild = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "建立骑士团失败，错误码: " + result;
            if (result == -111) {
                strErrorMsg = "该骑士团名已经被使用了~";
            }
            else if (result == -12) {
                strErrorMsg = "您还在骑士团中，不能创建新骑士团~";
            }
            else if (result == -14) {
                strErrorMsg = "金币不足，不能创建骑士团~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 0 /* TAB_MONEY */);
                this.guiLayer.addElement(shop);
            }
            else if (result == -13) {
                strErrorMsg = "等级不足，不能创建骑士团~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        G.main_director.enterGuildView();
    };
    __egretProto__.refreshGuildList = function () {
        if (this.has_guilds_left == false) {
            this.guild_list.removeEventListener(egret.Event.COMPLETE, this.refreshGuildList, this);
            return;
        }
        var top = this.guild_list.viewport.verticalScrollPosition;
        var bottom = top + this.guild_list.height;
        if (this.guild_items_list[this.guild_items_list.length - 1].y < bottom) {
            this.getGuildList(this.all_guilds_list.length);
        }
    };
    return UIGuildListView;
})(egret.gui.Panel);
UIGuildListView.prototype.__class__ = "UIGuildListView";
