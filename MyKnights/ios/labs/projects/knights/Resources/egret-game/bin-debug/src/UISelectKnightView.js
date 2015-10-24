var UISelectKnightView = (function (_super) {
    __extends(UISelectKnightView, _super);
    function UISelectKnightView() {
        _super.call(this);
        this.player_desc_list = [];
        this.player_select_btn_list = [];
        this.btn_add_list = [];
        this.new_label_list = [];
        this.name_list = [];
        this.player_data_list = [];
        this.player_data_event_list = [];
        this.skinName = "skins.UISelectKnightViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UISelectKnightView.prototype;
    __egretProto__.showOnMainLayer = function (main_director) {
        this.width = G.win_width;
        this.height = G.win_height;
        this.main_director = main_director;
        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);
        this.guiLayer.addElement(this);
        this.topLayer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.topLayer, 1);
    };
    __egretProto__.removeFromMainLayer = function () {
        this.main_director.stage.removeChild(this.guiLayer);
        this.main_director.stage.removeChild(this.topLayer);
        this.removeListener();
    };
    __egretProto__.removeListener = function () {
        this.player_data_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.player_data_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.player_data_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);
        this.btn_select_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.btn_select_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.btn_select_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);
        this.btn_add_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
        this.btn_add_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
        this.btn_add_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
    };
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.main_director.closeGateAnimLayer();
        this.player_desc_list = [this.label_desc_0, this.label_desc_1, this.label_desc_2];
        this.player_select_btn_list = [this.btn_select_0, this.btn_select_1, this.btn_select_2];
        this.btn_add_list = [this.btn_add_0, this.btn_add_1, this.btn_add_2];
        this.new_label_list = [this.new_label_0, this.new_label_1, this.new_label_2];
        this.name_list = [this.name_0, this.name_1, this.name_2];
        this.player_data_list = [this.player_data_0, this.player_data_1, this.player_data_2];
        this.player_data_event_list = [this.onSelectKnigth1, this.onSelectKnigth2, this.onSelectKnigth3];
        this.hideAllPlayerDesc();
        this.initKnightList();
        this.btn_select_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.btn_select_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.btn_select_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);
        this.btn_add_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
        this.btn_add_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
        this.btn_add_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
    };
    __egretProto__.hideAllPlayerDesc = function () {
        this.label_desc_0.visible = false;
        this.label_desc_1.visible = false;
        this.label_desc_2.visible = false;
        this.btn_select_0.visible = false;
        this.btn_select_1.visible = false;
        this.btn_select_2.visible = false;
        this.name_0.visible = false;
        this.name_1.visible = false;
        this.name_2.visible = false;
    };
    __egretProto__.showPlayerData = function (index) {
        if (index >= 3) {
            return;
        }
        if (Logic.player_datas[index] == null) {
            return;
        }
        this.player_desc_list[index].visible = true;
        this.player_select_btn_list[index].visible = true;
        this.player_data_list[index].addEventListener(egret.TouchEvent.TOUCH_TAP, this.player_data_event_list[index], this);
        this.btn_add_list[index].visible = false;
        this.new_label_list[index].visible = false;
        this.name_list[index].visible = true;
        var player_data = Logic.player_datas[index];
        this.player_desc_list[index].text = " level:" + player_data.knight_level;
        this.name_list[index].text = player_data.knight_name;
        var data_icon = this.player_data_0;
        if (index == 1) {
            data_icon = this.player_data_1;
        }
        else if (index == 2) {
            data_icon = this.player_data_2;
        }
        /*var knight_dragon = Utils.createDragonBone(Utils.getKnightDragonName(player_data.knight_type));
        var dd = knight_dragon.getDisplay()
        dd.x = btn.x + dd.width/2;
        dd.y = btn.y - dd.height;
        this.guiLayer.addElement(dd);
        knight_dragon.animation.gotoAndPlay("zhanli");*/
        data_icon.source = Utils.getKnightBigImgName(player_data.knight_type, true);
    };
    __egretProto__.initKnightList = function () {
        for (var i = 0; i < Logic.player_datas.length; i++) {
            this.showPlayerData(i);
        }
        if (Logic.player_datas.length == 0) {
            this.btn_add_1.visible = false;
            this.btn_add_2.visible = false;
            this.new_label_1.visible = false;
            this.new_label_2.visible = false;
        }
        if (Logic.player_datas.length == 1) {
            this.btn_add_2.visible = false;
            this.new_label_2.visible = false;
        }
    };
    __egretProto__.disableAllBtns = function () {
        this.btn_select_0.touchEnabled = false;
        this.btn_select_1.touchEnabled = false;
        this.btn_select_2.touchEnabled = false;
    };
    __egretProto__.enableAllBtns = function () {
        this.btn_select_0.touchEnabled = true;
        this.btn_select_1.touchEnabled = true;
        this.btn_select_2.touchEnabled = true;
    };
    __egretProto__.onSelectKnigth1 = function () {
        Net.choosePlayer(0);
        Utils.showWaitAnim(this, this.onConnectServerTimeOut);
        this.disableAllBtns();
    };
    __egretProto__.onSelectKnigth2 = function () {
        Net.choosePlayer(1);
        Utils.showWaitAnim(this, this.onConnectServerTimeOut);
        this.disableAllBtns();
    };
    __egretProto__.onSelectKnigth3 = function () {
        Net.choosePlayer(2);
        Utils.showWaitAnim(this, this.onConnectServerTimeOut);
        this.disableAllBtns();
    };
    __egretProto__.onCreateNewKnight = function () {
        // Enter create knight view.
        this.main_director.enterCreateKnightView();
    };
    __egretProto__.onConnectServerTimeOut = function () {
        this.enableAllBtns();
    };
    __egretProto__.finishChooseKnight = function (result, data, guild_id, guild_name) {
        if (guild_id === void 0) { guild_id = 0; }
        if (guild_name === void 0) { guild_name = ""; }
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "选择人物失败，错误码: " + result);
            this.enableAllBtns();
            return;
        }
        Logic.initPlayerBaseDatas(data);
        Logic.guild_id = guild_id;
        Logic.guild_name = guild_name;
        if (Logic.guide_flag < 20 /* VILLAGE_HIRE_HOME */) {
            G.main_director.enterQuestView();
        }
        else if (Logic.guide_flag < 30 /* TEAM_MGR_HOME */) {
            G.main_director.enterHireView();
        }
        else if (Logic.guide_flag == 30 /* TEAM_MGR_HOME */) {
            G.main_director.enterHomeView();
        }
        else if (Logic.guide_flag < 40 /* CLICK_QUEST_HOME */) {
            G.main_director.enterMyTeamSetView();
        }
        else if (Logic.guide_flag == 40 /* CLICK_QUEST_HOME */) {
            G.main_director.enterHomeView();
        }
        else if (Logic.guide_flag < 9999 /* GUIDE_END */) {
            G.main_director.enterQuestView();
        }
        else {
            G.main_director.enterHomeView();
        }
    };
    return UISelectKnightView;
})(egret.gui.Panel);
UISelectKnightView.prototype.__class__ = "UISelectKnightView";
