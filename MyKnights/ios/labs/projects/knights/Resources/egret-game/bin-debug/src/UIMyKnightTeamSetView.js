var SHOW_KNIGHT_DETAIL_TYPE;
(function (SHOW_KNIGHT_DETAIL_TYPE) {
    SHOW_KNIGHT_DETAIL_TYPE[SHOW_KNIGHT_DETAIL_TYPE["KNIGHT_ON_POSITION"] = 1] = "KNIGHT_ON_POSITION";
    SHOW_KNIGHT_DETAIL_TYPE[SHOW_KNIGHT_DETAIL_TYPE["KNIGHT_ON_DESK"] = 2] = "KNIGHT_ON_DESK";
})(SHOW_KNIGHT_DETAIL_TYPE || (SHOW_KNIGHT_DETAIL_TYPE = {}));
var UIKnightOnPosition = (function () {
    function UIKnightOnPosition() {
        this.icon_head = null;
        this.label_level = null;
        this.left_color_icon = null;
        this.right_color_icon = null;
        this.select_frame = null;
        this.pos_mask = null;
        this.pos_index = -1;
    }
    var __egretProto__ = UIKnightOnPosition.prototype;
    __egretProto__.deselect = function () {
        this.pos_mask.visible = true;
        this.select_frame.visible = false;
    };
    __egretProto__.select = function () {
        this.pos_mask.visible = false;
        this.select_frame.visible = true;
    };
    __egretProto__.resetKnightInfo = function () {
        var knight_info = Logic.getKnightOnPosition(this.pos_index);
        if (knight_info != null) {
            this.icon_head.visible = true;
            this.left_color_icon.visible = true;
            this.right_color_icon.visible = true;
            this.label_level.visible = true;
            this.pos_mask.visible = true;
            this.icon_head.source = Utils.getKnightHeadNorName(knight_info.type, knight_info.is_player);
            var point_img_name = Utils.getKnightPointImgName(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
            this.left_color_icon.source = point_img_name;
            this.right_color_icon.source = point_img_name;
            this.label_level.text = "Lv." + knight_info.level;
        }
        else {
            this.icon_head.visible = false;
            this.left_color_icon.visible = false;
            this.right_color_icon.visible = false;
            this.label_level.visible = false;
            this.pos_mask.visible = false;
        }
        this.select_frame.visible = false;
    };
    return UIKnightOnPosition;
})();
UIKnightOnPosition.prototype.__class__ = "UIKnightOnPosition";
var UIMyKnightTeamSetView = (function (_super) {
    __extends(UIMyKnightTeamSetView, _super);
    function UIMyKnightTeamSetView() {
        _super.call(this);
        this.left_knights_list = [];
        this.top_info_bar = null;
        this.bottom_info_bar = null;
        this.show_knight_type = 0;
        this.show_knight_index = 0;
        this.has_knights_left = true;
        this.all_knights_list = [];
        this.knights_items_list = [];
        this.increase_diamond_fee = 0;
        this.increase_money_fee = 0;
        this.current_knights_sum = 0;
        this.max_knight_number = 0;
        this.last_enter_position = -1;
        this.delay_scroll_index = 0;
        this.skinName = "skins.UIMyKnightTeamSetSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIMyKnightTeamSetView.prototype;
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
        this.topLayer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.topLayer, 1);
    };
    __egretProto__.removeFromMainLayer = function () {
        this.main_director.stage.removeChild(this.guiLayer);
        this.main_director.stage.removeChild(this.topLayer);
        this.onRemoveAllEventListener();
    };
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.main_director.closeGateAnimLayer();
        this.initLeftKnightList();
        this.refreshLeftKnightList();
        this.selectPlayerKnight();
        this.all_knights_list = [];
        this.getMyKnightsList(0);
        this.pos_mask_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.btn_exit_team.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitTeamClicked, this);
        this.btn_enter_team.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterTeamClicked, this);
        this.btn_dismiss.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDismissClicked, this);
        this.btn_increase_team.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onIncreaseClicked, this);
        this.knights_list.addEventListener(egret.Event.COMPLETE, this.refreshKnightsList, this);
        this.checkIfShowGuide();
    };
    __egretProto__.onRemoveAllEventListener = function () {
        this.pos_mask_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.btn_exit_team.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitTeamClicked, this);
        this.btn_enter_team.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterTeamClicked, this);
        this.btn_dismiss.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDismissClicked, this);
        this.btn_increase_team.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onIncreaseClicked, this);
        this.knights_list.removeEventListener(egret.Event.COMPLETE, this.refreshKnightsList, this);
    };
    __egretProto__.checkIfShowGuide = function () {
        if (Logic.guide_flag == 31 /* TEAM_MGR_SOLDIER */) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(130031, this.topLayer);
        }
    };
    __egretProto__.reloadKnightsList = function () {
        this.initLeftKnightList();
        this.refreshLeftKnightList();
        this.selectPlayerKnight();
        var scroller_group = this.knights_list.viewport;
        scroller_group.removeAllElements();
        this.knights_items_list = [];
        this.all_knights_list = [];
        this.getMyKnightsList(0);
    };
    __egretProto__.initLeftKnightList = function () {
        this.left_knights_list = [];
        var knight = new UIKnightOnPosition();
        knight.icon_head = this.icon_head_pos_0;
        knight.label_level = this.label_level_pos_0;
        knight.left_color_icon = this.left_color_icon_pos_0;
        knight.right_color_icon = this.right_color_icon_pos_0;
        knight.select_frame = this.select_frame_0;
        knight.pos_mask = this.pos_mask_0;
        knight.pos_index = 0;
        this.left_knights_list.push(knight);
        knight = new UIKnightOnPosition();
        knight.icon_head = this.icon_head_pos_1;
        knight.label_level = this.label_level_pos_1;
        knight.left_color_icon = this.left_color_icon_pos_1;
        knight.right_color_icon = this.right_color_icon_pos_1;
        knight.select_frame = this.select_frame_1;
        knight.pos_mask = this.pos_mask_1;
        knight.pos_index = 1;
        this.left_knights_list.push(knight);
        knight = new UIKnightOnPosition();
        knight.icon_head = this.icon_head_pos_2;
        knight.label_level = this.label_level_pos_2;
        knight.left_color_icon = this.left_color_icon_pos_2;
        knight.right_color_icon = this.right_color_icon_pos_2;
        knight.select_frame = this.select_frame_2;
        knight.pos_mask = this.pos_mask_2;
        knight.pos_index = 2;
        this.left_knights_list.push(knight);
        knight = new UIKnightOnPosition();
        knight.icon_head = this.icon_head_pos_3;
        knight.label_level = this.label_level_pos_3;
        knight.left_color_icon = this.left_color_icon_pos_3;
        knight.right_color_icon = this.right_color_icon_pos_3;
        knight.select_frame = this.select_frame_3;
        knight.pos_mask = this.pos_mask_3;
        knight.pos_index = 3;
        this.left_knights_list.push(knight);
        knight = new UIKnightOnPosition();
        knight.icon_head = this.icon_head_pos_4;
        knight.label_level = this.label_level_pos_4;
        knight.left_color_icon = this.left_color_icon_pos_4;
        knight.right_color_icon = this.right_color_icon_pos_4;
        knight.select_frame = this.select_frame_4;
        knight.pos_mask = this.pos_mask_4;
        knight.pos_index = 4;
        this.left_knights_list.push(knight);
    };
    __egretProto__.refreshLeftKnightList = function () {
        var len = this.left_knights_list.length;
        for (var i = 0; i < len; i++) {
            this.left_knights_list[i].resetKnightInfo();
        }
        if (this.show_knight_type == 1 /* KNIGHT_ON_POSITION */) {
            this.selectPlayerKnight();
        }
    };
    __egretProto__.onSelectKnightPos = function (evt) {
        var select_index = -1;
        for (var i = 0; i < this.left_knights_list.length; i++) {
            if (evt.target == this.left_knights_list[i].pos_mask) {
                select_index = i;
                break;
            }
        }
        if (this.show_knight_type == 1 /* KNIGHT_ON_POSITION */ && this.show_knight_index == select_index) {
            return;
        }
        if (Logic.getKnightOnPosition(select_index) != null) {
            this.showKnightDetail(1 /* KNIGHT_ON_POSITION */, select_index);
        }
    };
    __egretProto__.selectPlayerKnight = function () {
        var select_index = -1;
        for (var i = 0; i < 5; i++) {
            if (Logic.getKnightOnPosition(i) != null) {
                select_index = i;
                break;
            }
        }
        this.showKnightDetail(1 /* KNIGHT_ON_POSITION */, select_index);
    };
    __egretProto__.showKnightDetail = function (type, index) {
        if (this.show_knight_type == 1 /* KNIGHT_ON_POSITION */) {
            if (this.left_knights_list[this.show_knight_index] != null) {
                this.left_knights_list[this.show_knight_index].deselect();
            }
        }
        else {
            if (this.knights_items_list[this.show_knight_index] != null) {
                this.knights_items_list[this.show_knight_index].deselect();
            }
        }
        this.show_knight_type = type;
        this.show_knight_index = index;
        var knight_info = null;
        if (this.show_knight_type == 1 /* KNIGHT_ON_POSITION */) {
            this.left_knights_list[this.show_knight_index].select();
            knight_info = Logic.getKnightOnPosition(this.show_knight_index);
        }
        else {
            this.knights_items_list[this.show_knight_index].select();
            knight_info = this.knights_items_list[this.show_knight_index].knight_info;
        }
        if (knight_info == null) {
            return;
        }
        var frame_img_name = Utils.getKnightFrameImgName(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
        this.icon_name_frame_bg.source = frame_img_name;
        this.label_name.text = knight_info.name;
        this.icon_body_frame_bg.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
        this.icon_body.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
        this.icon_body_mask.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        this.label_level.text = "" + knight_info.level;
        this.icon_atk_frame_bg.source = Utils.getValuePanelImgName(knight_info.attack_factor / 10000);
        this.label_atk_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, 1 /* ATK */, knight_info.attack_factor / 10000);
        if (knight_info.attack_factor >= 10000) {
            this.label_atk_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_atk_num.textColor = 0x000000;
        }
        this.icon_def_frame_bg.source = Utils.getValuePanelImgName(knight_info.defense_factor / 10000);
        this.label_def_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, 2 /* DEF */, knight_info.defense_factor / 10000);
        if (knight_info.defense_factor >= 10000) {
            this.label_def_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_def_num.textColor = 0x000000;
        }
        this.icon_hp_frame_bg.source = Utils.getValuePanelImgName(knight_info.hp_factor / 10000);
        this.label_hp_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, 3 /* HP */, knight_info.hp_factor / 10000);
        if (knight_info.hp_factor >= 10000) {
            this.label_hp_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_hp_num.textColor = 0x000000;
        }
        this.icon_exp_bar.mask = new egret.Rectangle(0, 0, knight_info.exp / knight_info.exp_max * 100, 15);
        var exp_percent = Math.floor(knight_info.exp / knight_info.exp_max * 100);
        var exp_percent_left = Math.floor(knight_info.exp / knight_info.exp_max * 1000) % 10;
        this.label_exp_percent.text = "" + exp_percent + "." + exp_percent_left + "%";
        if (this.show_knight_type == 1 /* KNIGHT_ON_POSITION */) {
            this.btn_exit_team.visible = true;
            this.btn_dismiss.visible = false;
            this.btn_enter_team.visible = false;
        }
        else {
            this.btn_exit_team.visible = false;
            this.btn_dismiss.visible = true;
            this.btn_enter_team.visible = true;
        }
        var scroller_group = this.skill_list.viewport;
        scroller_group.removeAllElements();
        var knight_line = Utils.getLine("knights_list", knight_info.type);
        if (knight_line != null) {
            var skills_len = knight_line[knights_list_skill_list].length;
            for (var i = 0; i < skills_len; i++) {
                var skill_item = new UIKnightSkillItem();
                skill_item.setIndex(knight_line[knights_list_skill_list][i], i);
                scroller_group.addElement(skill_item);
            }
        }
    };
    __egretProto__.sendKnightExitPosition = function (knight_id) {
        Net.knightExitPosition(knight_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishKnightExitPosition = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "骑士下阵失败，错误码: " + result;
            if (result == -12) {
                strErrorMsg = "主角必须参战~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        for (var i = 0; i < this.all_knights_list.length; i++) {
            var knight_info = this.all_knights_list[i];
            if (knight_info.position == this.show_knight_index) {
                knight_info.position = -1;
                break;
            }
        }
        Logic.knightExitPosition(this.show_knight_index);
        this.refreshLeftKnightList();
        this.refreshAllKnightsOnDesk();
        this.bottom_info_bar.refreshMyKnightTeam();
    };
    __egretProto__.onExitTeamClicked = function (evt) {
        if (this.show_knight_type != 1 /* KNIGHT_ON_POSITION */) {
            return;
        }
        var knight_info = Logic.getKnightOnPosition(this.show_knight_index);
        this.sendKnightExitPosition(knight_info.knight_id);
    };
    __egretProto__.getMyKnightsList = function (start_index) {
        Net.getMyKnightsList(start_index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetMyKnightsList = function (result, data, count, max_count, money_fee, diamond_fee) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取骑士列表失败，错误码: " + result);
            return;
        }
        this.label_pos_status.text = "" + count + "/" + max_count;
        this.current_knights_sum = count;
        this.max_knight_number = max_count;
        this.increase_diamond_fee = diamond_fee;
        this.increase_money_fee = money_fee;
        if (data.length < 10) {
            this.has_knights_left = false;
        }
        else {
            this.has_knights_left = true;
        }
        var scroller_group = this.knights_list.viewport;
        for (var i = 0; i < data.length; i++) {
            var knight_info = new Knight_Position_Info();
            knight_info.knight_id = data[i][0];
            knight_info.type = data[i][1];
            knight_info.name = data[i][2];
            knight_info.level = data[i][3];
            knight_info.attack_factor = data[i][4];
            knight_info.defense_factor = data[i][5];
            knight_info.hp_factor = data[i][6];
            knight_info.position = data[i][7];
            knight_info.is_player = data[i][8];
            knight_info.exp = data[i][9];
            knight_info.exp_max = data[i][10];
            this.all_knights_list.push(knight_info);
            if (knight_info.position < 0) {
                var knight_item = new UIKnightSimpleItem();
                knight_item.setIndex(this, this.knights_items_list.length);
                knight_item.resetKnightData(knight_info);
                scroller_group.addElement(knight_item);
                this.knights_items_list.push(knight_item);
            }
        }
    };
    __egretProto__.refreshAllKnightsOnDesk = function () {
        var scroller_group = this.knights_list.viewport;
        scroller_group.removeAllElements();
        this.knights_items_list = [];
        for (var i = 0; i < this.all_knights_list.length; i++) {
            var knight_info = this.all_knights_list[i];
            if (knight_info.position < 0) {
                var knight_item = new UIKnightSimpleItem();
                knight_item.setIndex(this, this.knights_items_list.length);
                knight_item.resetKnightData(knight_info);
                scroller_group.addElement(knight_item);
                this.knights_items_list.push(knight_item);
            }
        }
    };
    __egretProto__.finishKnightEnterPosition = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "骑士上阵失败，错误码: " + result);
            return;
        }
        var knight_info = this.knights_items_list[this.show_knight_index].knight_info;
        knight_info.position = this.last_enter_position;
        Logic.knightEnterPosition(knight_info);
        this.refreshLeftKnightList();
        this.refreshAllKnightsOnDesk();
        this.bottom_info_bar.refreshMyKnightTeam();
        this.showKnightDetail(1 /* KNIGHT_ON_POSITION */, knight_info.position);
    };
    __egretProto__.sendKnightEnterPosition = function (knight_id, position) {
        this.last_enter_position = position;
        Net.knightEnterPosition(knight_id, position);
        Utils.showWaitAnim(this);
    };
    __egretProto__.onEnterTeamClicked = function (evt) {
        if (this.show_knight_type != 2 /* KNIGHT_ON_DESK */) {
            return;
        }
        var enter_position = Logic.getFirstEmptyPosition();
        ;
        if (enter_position < 0) {
            Utils.showToastInfo(this.guiLayer, "没有空位置了~");
            return;
        }
        var knight_info = this.knights_items_list[this.show_knight_index].knight_info;
        var knight_id = knight_info.knight_id;
        this.sendKnightEnterPosition(knight_id, enter_position);
    };
    __egretProto__.finishDismissKnight = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "解雇骑士失败，错误码: " + result);
            return;
        }
        var knight_info = this.knights_items_list[this.show_knight_index].knight_info;
        var knight_dismissed_index = -1;
        for (var i = 0; i < this.all_knights_list.length; i++) {
            if (knight_info.knight_id == this.all_knights_list[i].knight_id) {
                knight_dismissed_index = i;
                break;
            }
        }
        if (knight_dismissed_index >= 0) {
            this.all_knights_list.splice(knight_dismissed_index, 1);
            this.refreshAllKnightsOnDesk();
            if (this.knights_items_list.length <= 0) {
                this.selectPlayerKnight();
            }
            else {
                this.scrollAfterDismissKnight(knight_dismissed_index);
            }
            this.current_knights_sum--;
            this.label_pos_status.text = "" + this.current_knights_sum + "/" + this.max_knight_number;
        }
    };
    __egretProto__.onDismissClicked = function (evt) {
        var dlg = new UIHintView();
        dlg.setHint(this.guiLayer, "解雇", "您确认要解雇该骑士吗？", 2 /* OK_CANCEL */, this, this.onDismissConfirmCallback);
        this.guiLayer.addElement(dlg);
    };
    __egretProto__.onDismissConfirmCallback = function () {
        var knight_info = this.knights_items_list[this.show_knight_index].knight_info;
        var knight_id = knight_info.knight_id;
        Net.dismissKnight(knight_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishIncreaseKnightsPos = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "增加招募位置失败，错误码: " + result;
            if (result == G.NO_ENOUGH_MONEY) {
                strErrorMsg = "金币不足";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 0 /* TAB_MONEY */);
                this.guiLayer.addElement(shop);
            }
            else if (result == G.NO_ENOUGH_DIAMOND) {
                strErrorMsg = "钻石不足";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 1 /* TAB_DIAMOND */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        Logic.money = data[0];
        Logic.diamond = data[1];
        this.increase_money_fee = data[2];
        this.increase_diamond_fee = data[3];
        this.top_info_bar.refreshMoneyText();
        this.top_info_bar.refreshDiamondText();
        this.max_knight_number++;
        this.label_pos_status.text = "" + this.current_knights_sum + "/" + this.max_knight_number;
    };
    __egretProto__.onIncreaseClicked = function (evt) {
        var fee_type = 1 /* MONEY */;
        var fee_number = this.increase_money_fee;
        if (this.increase_diamond_fee > 0) {
            fee_type = 2 /* DIAMOND */;
            fee_number = this.increase_diamond_fee;
        }
        var dlg = new UIPurchaseConfirmView();
        dlg.setPurchaseInfo(this.guiLayer, fee_number, "人数上限", "您确定增加队伍人数上限吗?", this, this.onIncreaseConfirmCallback, null, fee_type);
        this.guiLayer.addElement(dlg);
    };
    __egretProto__.onIncreaseConfirmCallback = function () {
        Net.increaseKnightsPosition();
        Utils.showWaitAnim(this);
    };
    __egretProto__.scrollAfterDismissKnight = function (scroll_index) {
        if (scroll_index >= this.knights_items_list.length - 4) {
            scroll_index = this.knights_items_list.length - 4;
        }
        if (scroll_index < 3) {
            if (scroll_index < 0) {
                scroll_index = 0;
            }
            if (scroll_index >= this.knights_items_list.length) {
                scroll_index = this.knights_items_list.length - 1;
            }
            this.showKnightDetail(2 /* KNIGHT_ON_DESK */, scroll_index);
            return;
        }
        else {
            this.delay_scroll_index = scroll_index;
            var delay_scroll_timer = new egret.Timer(100, 1);
            delay_scroll_timer.addEventListener(egret.TimerEvent.TIMER, this.onDelayScrollTimer, this);
            delay_scroll_timer.start();
        }
    };
    __egretProto__.onDelayScrollTimer = function () {
        this.knights_list.throwVertically(this.delay_scroll_index * 90, 0);
        this.showKnightDetail(2 /* KNIGHT_ON_DESK */, this.delay_scroll_index);
    };
    __egretProto__.refreshKnightsList = function () {
        if (this.has_knights_left == false) {
            this.knights_list.removeEventListener(egret.Event.COMPLETE, this.refreshKnightsList, this);
            return;
        }
        var top = this.knights_list.viewport.verticalScrollPosition;
        var bottom = top + this.knights_list.height;
        if (this.knights_items_list[this.knights_items_list.length - 1].y < bottom) {
            this.getMyKnightsList(this.all_knights_list.length);
        }
    };
    __egretProto__.onBackBtnClicked = function () {
        this.bottom_info_bar.sendRefreshKnightTeam();
        this.main_director.enterHomeView();
    };
    return UIMyKnightTeamSetView;
})(egret.gui.Panel);
UIMyKnightTeamSetView.prototype.__class__ = "UIMyKnightTeamSetView";
