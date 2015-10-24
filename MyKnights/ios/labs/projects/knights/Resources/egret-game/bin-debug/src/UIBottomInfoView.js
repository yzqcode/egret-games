var BOTTOM_BUTTON_TYPE;
(function (BOTTOM_BUTTON_TYPE) {
    BOTTOM_BUTTON_TYPE[BOTTOM_BUTTON_TYPE["JOIN_GUILD"] = 1] = "JOIN_GUILD";
    BOTTOM_BUTTON_TYPE[BOTTOM_BUTTON_TYPE["CHECK_GUILD"] = 2] = "CHECK_GUILD";
    BOTTOM_BUTTON_TYPE[BOTTOM_BUTTON_TYPE["BACK"] = 3] = "BACK";
})(BOTTOM_BUTTON_TYPE || (BOTTOM_BUTTON_TYPE = {}));
var UIBottomInfoView = (function (_super) {
    __extends(UIBottomInfoView, _super);
    function UIBottomInfoView() {
        _super.call(this);
        this.button_type = 1 /* JOIN_GUILD */;
        this.ui_parent = null;
        this.callback_func = null;
        this.is_loading_finish = false;
        this.knights_item_list = [];
        this.start_hit_position = -1;
        this.end_hit_position = -1;
        this.isMovingHead = false;
        this.chat_onlyOne_item_list = [];
        this.Last_id = -1;
        this.skinName = "skins.UIBottomInfoViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIBottomInfoView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.is_loading_finish = true;
        this.knight_head.visible = false;
        this.width = G.win_width;
        this.y = G.win_height - this.height;
        this.setBottomButtonStatus();
        this.sendRefreshKnightTeam();
        this.scroller_group = this.scroller_view.viewport;
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClicked, this);
        this.chat_mask_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showChatDialog, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchOut, this);
        this.initChatMessage();
    };
    __egretProto__.resetBackButtonCallback = function (ui_parent, button_type, callback_func) {
        if (callback_func === void 0) { callback_func = null; }
        this.ui_parent = ui_parent;
        this.callback_func = callback_func;
        this.button_type = button_type;
        this.setBottomButtonStatus();
    };
    __egretProto__.setBottomButtonStatus = function () {
        if (this.is_loading_finish) {
            this.label_join_guild.visible = false;
            this.label_check_guild.visible = false;
            this.label_back.visible = false;
            if (this.button_type == 1 /* JOIN_GUILD */) {
                this.label_join_guild.visible = true;
            }
            else if (this.button_type == 2 /* CHECK_GUILD */) {
                this.label_check_guild.visible = true;
            }
            else if (this.button_type == 3 /* BACK */) {
                this.label_back.visible = true;
            }
        }
    };
    __egretProto__.initKnightsItemList = function () {
        this.knights_item_list = [];
        for (var i = 0; i < 5; i++) {
            var knight_pos_item = new UIKnightPosItem();
            knight_pos_item.knight_position_index = i;
            this.knight_team_group.addElement(knight_pos_item);
            this.knights_item_list.push(knight_pos_item);
            knight_pos_item.knight_head_icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        }
    };
    __egretProto__.sendRefreshKnightTeam = function () {
        Net.getOnPositionKnightsList();
    };
    __egretProto__.refreshMyKnightTeam = function () {
        if (this.is_loading_finish == false) {
            return;
        }
        if (this.knights_item_list.length <= 0) {
            this.initKnightsItemList();
        }
        for (var i = 0; i < this.knights_item_list.length; i++) {
            this.knights_item_list[i].refreshInfo();
        }
    };
    __egretProto__.onBackClicked = function (evt) {
        if (this.ui_parent != null && this.callback_func != null) {
            this.callback_func.call(this.ui_parent);
        }
    };
    __egretProto__.showChatDialog = function (evt) {
        if (Logic.isPlayerInGuild()) {
            var chat_dlg = new UIChatDialog();
            chat_dlg.setChatDialogDatas(this.ui_parent, this.ui_parent.guiLayer);
            this.ui_parent.guiLayer.addElement(chat_dlg);
        }
        else {
            Utils.showToastInfo(this.ui_parent.guiLayer, "请先加入骑士团!");
        }
    };
    __egretProto__.touchBegin = function (evt) {
        this.knight_head.visible = true;
        for (var i = 0; i < this.knights_item_list.length; i++) {
            if (evt.target == this.knights_item_list[i].knight_head_icon) {
                this.start_hit_position = i;
                var knight_info = Logic.getKnightOnPosition(this.start_hit_position);
                this.knight_head.source = Utils.getKnightHeadNorName(knight_info.type, knight_info.is_player);
                this.knight_head.x = this.knights_item_list[this.start_hit_position].x + 204;
                this.isMovingHead = true;
                break;
            }
        }
    };
    __egretProto__.touchMove = function (evt) {
        if (this.isMovingHead != true) {
            return;
        }
        this.knight_head.x = evt.stageX - this.knight_head.width / 2;
    };
    __egretProto__.touchEnd = function (evt) {
        if (this.isMovingHead != true) {
            return;
        }
        for (var i = 0; i < this.knights_item_list.length; i++) {
            var rect1 = this.knights_item_list[i].getBounds();
            rect1.x = this.knights_item_list[i].x;
            rect1.y = this.knights_item_list[i].y;
            var is_contains = rect1.contains((this.knight_head.x - 204 + this.knight_head.width / 2), (this.knight_head.y + this.knight_head.height / 2));
            if (is_contains) {
                this.end_hit_position = i;
                if (this.start_hit_position != this.end_hit_position) {
                    this.sendKnightSwitchPosition(this.start_hit_position, this.end_hit_position);
                }
                break;
            }
        }
        this.knight_head.visible = false;
        this.isMovingHead = false;
    };
    __egretProto__.touchOut = function (evt) {
        this.touchEnd(evt);
    };
    __egretProto__.sendKnightSwitchPosition = function (index1, index2) {
        var start_index = Logic.getKnightOnPosition(index1);
        Net.knightSwitchPosition(start_index.knight_id, index2);
        this.start_hit_position = index1;
        this.end_hit_position = index2;
    };
    __egretProto__.finishKnightSwitchPosition = function (result) {
        if (result != 0) {
            Utils.showToastInfo(this.ui_parent.guiLayer, "骑士交换位置失败，错误码: " + result);
            return;
        }
        Logic.swapKnightsOnPosition(this.start_hit_position, this.end_hit_position);
        var n1_x = this.knights_item_list[this.start_hit_position].x;
        var n2_x = this.knights_item_list[this.end_hit_position].x;
        this.knights_item_list[this.start_hit_position].x = n2_x;
        this.knights_item_list[this.end_hit_position].x = n1_x;
        this.knights_item_list[this.start_hit_position].knight_position_index = this.end_hit_position;
        this.knights_item_list[this.end_hit_position].knight_position_index = this.start_hit_position;
        var temp = this.knights_item_list[this.start_hit_position];
        this.knights_item_list[this.start_hit_position] = this.knights_item_list[this.end_hit_position];
        this.knights_item_list[this.end_hit_position] = temp;
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIMyKnightTeamSetView) {
            current_layer.reloadKnightsList();
        }
    };
    __egretProto__.initChatMessage = function () {
        //var messages_list_item = null;
        var isLast = Logic.hasShowLastMessage();
        if (isLast == true) {
            var messages_list_item = Logic.getLastMessage();
            var name = messages_list_item.knight_name;
            var say = messages_list_item.message_content;
            var str = name + ":" + say;
            this.chat_onlyOne_item_list.push(str);
            var onlyOne = new UIOnlyOneChatItemView();
            onlyOne.setData(this.chat_onlyOne_item_list.length, str);
            this.scroller_group.addElement(onlyOne);
        }
    };
    __egretProto__.refreshChatMessage = function () {
        var messages_list_item = null;
        messages_list_item = Logic.getCurrentMessage();
        if (messages_list_item == null) {
            return;
        }
        if (this.Last_id == messages_list_item.message_id) {
            return;
        }
        this.Last_id = messages_list_item.message_id;
        var name = messages_list_item.knight_name;
        var say = messages_list_item.message_content;
        var str = name + ":" + say;
        this.chat_onlyOne_item_list.push(str);
        var onlyOne = new UIOnlyOneChatItemView();
        onlyOne.setData(this.chat_onlyOne_item_list.length, str);
        this.scroller_group.addElement(onlyOne);
        var timer = new egret.Timer(100, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimer, this);
        timer.start();
    };
    __egretProto__.onTimer = function () {
        var n = this.chat_onlyOne_item_list.length - 1;
        this.scroller_view.throwVertically(n * 56, 500);
    };
    return UIBottomInfoView;
})(egret.gui.Panel);
UIBottomInfoView.prototype.__class__ = "UIBottomInfoView";
