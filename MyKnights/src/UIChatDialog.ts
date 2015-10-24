class UIChatDialog extends egret.gui.Panel {
    public close_icon:egret.gui.UIAsset;
    public input_edit:egret.gui.EditableText;
    public speak_btn:egret.gui.Button;
    public chatDialog_scroller:egret.gui.Scroller;

    public ui_parent = null;
    public guiLayer:egret.gui.UIStage;
    public ui_wait:UIWaitView;

    public last_id:number = -1;
    private n:number = 0;
    public chat_item_list = [];

    private timerRefresh:egret.Timer = null;
    public itemPos:number = 0;

    public constructor(){
        super();
        this.skinName = "skins.UIChatDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
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
    }

    public setChatDialogDatas(ui_parent, guiLayer:egret.gui.UIStage) {
        this.ui_parent = ui_parent;
        this.guiLayer = guiLayer;

        this.ui_parent.chat_dlg = this;
    }

    private onClose(evt) {
        if(this.timerRefresh != null){
            this.timerRefresh.stop();
        }
        this.timerRefresh = null;

        if ( this.ui_parent != null ) {
            this.speak_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onSpeak, this);
            this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);

            this.ui_parent.guiLayer.removeElement(this);
            this.ui_parent.chat_dlg = null;

            this.ui_parent = null;
        }
    }

    private onSpeak(evt) {
        if(this.input_edit.text.length > 72){
            Utils.showToastInfo(this.ui_parent.guiLayer, "不能超过72个字符！");
            return;
        }
        if(this.input_edit.text.length == 0){
            Utils.showToastInfo(this.ui_parent.guiLayer, "发送内容不能为空！");
            return;
        }

        Net.sendChatMessage(this.input_edit.text);
        Utils.showWaitAnim(this);
    }
    public finishSendMessage(result) {
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
    }

    private initChatDialog(){
        if(Logic.messages_list.length <= 0){
            return;      
        }

        var scroller_group = <egret.gui.Group>this.chatDialog_scroller.viewport;
        for(var i=0; i<Logic.messages_list.length; i++){
            var chatDialog_item = new UIChatDialogListItemView();
            this.itemPos += chatDialog_item.setData(this.itemPos, Logic.messages_list[i], this);
            scroller_group.addElement(chatDialog_item);
            this.chat_item_list.push(chatDialog_item);
        }

        var timerInit = new egret.Timer(100, 1);
        timerInit.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerInit, this);
        timerInit.start();

        this.last_id = Logic.messages_list[Logic.messages_list.length - 1].message_id;
    }

    public refreshChatDialog(){
        var start_index = 0;

        for(var i=0; i<Logic.messages_list.length; i++){
            if(this.last_id == Logic.messages_list[i].message_id){
                start_index = i + 1;
                break;
            }
        }

        if(start_index >= Logic.messages_list.length){
            return;
        }

        var scroller_group = <egret.gui.Group>this.chatDialog_scroller.viewport;

        for(var i=start_index; i<Logic.messages_list.length; i++){
            var chatDialog_item = new UIChatDialogListItemView();
            this.itemPos += chatDialog_item.setData(this.itemPos, Logic.messages_list[i], this);
            scroller_group.addElement(chatDialog_item);
            this.chat_item_list.push(chatDialog_item);
        }

        var timerMove = new egret.Timer(100, 1);
        timerMove.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerMove, this);
        timerMove.start();

        this.last_id = Logic.messages_list[Logic.messages_list.length - 1].message_id;

    }

    private onTimerInit(){
        if(Logic.messages_list.length <=2){
            return;
        }
        this.chatDialog_scroller.throwVertically(this.itemPos - this.chatDialog_scroller.height, 10);
    }

    private onTimerMove(){
        if(this.chat_item_list.length <=2){
            return;
        }
        this.chatDialog_scroller.throwVertically(this.itemPos - this.chatDialog_scroller.height, 500);
    }
}

