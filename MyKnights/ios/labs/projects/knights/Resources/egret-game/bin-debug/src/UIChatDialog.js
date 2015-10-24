var UIChatDialog = (function (_super) {
    __extends(UIChatDialog, _super);
    function UIChatDialog() {
        _super.call(this);
        this.ui_parent = null;
        this.last_id = -1;
        this.n = 0;
        this.chat_item_list = [];
        this.timerRefresh = null;
        this.itemPos = 0;
        this.skinName = "skins.UIChatDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIChatDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.chatDialog_scroller.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.initChatDialog();
        this.speak_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.onSpeak, this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.timerRefresh = new egret.Timer(1000, -1);
        this.timerRefresh.addEventListener(egret.TimerEvent.TIMER, this.refreshChatDialog, this);
        this.timerRefresh.start();
    };
    __egretProto__.setChatDialogDatas = function (ui_parent, guiLayer) {
        this.ui_parent = ui_parent;
        this.guiLayer = guiLayer;
        this.ui_parent.chat_dlg = this;
    };
    __egretProto__.onClose = function (evt) {
        if (this.timerRefresh != null) {
            this.timerRefresh.stop();
        }
        this.timerRefresh = null;
        if (this.ui_parent != null) {
            this.speak_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onSpeak, this);
            this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
            this.ui_parent.guiLayer.removeElement(this);
            this.ui_parent.chat_dlg = null;
            this.ui_parent = null;
        }
    };
    __egretProto__.onSpeak = function (evt) {
        if (this.input_edit.text.length > 72) {
            Utils.showToastInfo(this.ui_parent.guiLayer, "不能超过72个字符！");
            return;
        }
        if (this.input_edit.text.length == 0) {
            Utils.showToastInfo(this.ui_parent.guiLayer, "发送内容不能为空！");
            return;
        }
        Net.sendChatMessage(this.input_edit.text);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishSendMessage = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "发送聊天失败，错误码: " + result;
            if (result == G.GUILD_NOT_EXIST) {
                strErrorMsg = "你已经不在该骑士团了~";
                Logic.clearGuildInfo();
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        Utils.showToastInfo(this.guiLayer, "发送成功");
        this.input_edit.text = null;
        Logic.checkNewMessages();
    };
    __egretProto__.initChatDialog = function () {
        if (Logic.messages_list.length <= 0) {
            return;
        }
        var scroller_group = this.chatDialog_scroller.viewport;
        for (var i = 0; i < Logic.messages_list.length; i++) {
            var chatDialog_item = new UIChatDialogListItemView();
            this.itemPos += chatDialog_item.setData(this.itemPos, Logic.messages_list[i], this);
            scroller_group.addElement(chatDialog_item);
            this.chat_item_list.push(chatDialog_item);
        }
        var timerInit = new egret.Timer(100, 1);
        timerInit.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerInit, this);
        timerInit.start();
        this.last_id = Logic.messages_list[Logic.messages_list.length - 1].message_id;
    };
    __egretProto__.refreshChatDialog = function () {
        var start_index = 0;
        for (var i = 0; i < Logic.messages_list.length; i++) {
            if (this.last_id == Logic.messages_list[i].message_id) {
                start_index = i + 1;
                break;
            }
        }
        if (start_index >= Logic.messages_list.length) {
            return;
        }
        var scroller_group = this.chatDialog_scroller.viewport;
        for (var i = start_index; i < Logic.messages_list.length; i++) {
            var chatDialog_item = new UIChatDialogListItemView();
            this.itemPos += chatDialog_item.setData(this.itemPos, Logic.messages_list[i], this);
            scroller_group.addElement(chatDialog_item);
            this.chat_item_list.push(chatDialog_item);
        }
        var timerMove = new egret.Timer(100, 1);
        timerMove.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerMove, this);
        timerMove.start();
        this.last_id = Logic.messages_list[Logic.messages_list.length - 1].message_id;
    };
    __egretProto__.onTimerInit = function () {
        if (Logic.messages_list.length <= 2) {
            return;
        }
        this.chatDialog_scroller.throwVertically(this.itemPos - this.chatDialog_scroller.height, 10);
    };
    __egretProto__.onTimerMove = function () {
        if (this.chat_item_list.length <= 2) {
            return;
        }
        this.chatDialog_scroller.throwVertically(this.itemPos - this.chatDialog_scroller.height, 500);
    };
    return UIChatDialog;
})(egret.gui.Panel);
UIChatDialog.prototype.__class__ = "UIChatDialog";
