//removeEventListener
class UIJobCardsDialog extends egret.gui.Panel {
    public close_icon:egret.gui.UIAsset;

    public btn_use:egret.gui.Button;
    public btn_sell:egret.gui.Button;

    public cards_list:egret.gui.Scroller;

    public ui_wait:UIWaitView;
    public guiLayer:egret.gui.UIStage;
    public ui_parent:UIJobHomeView;

    private has_cards_left:Boolean =  true;
    public all_cards_list = [];
    public cards_items_list = [];

    public current_select_index:number = -1;

    public constructor() {
        super();
        this.skinName = "skins.UIJobCardsDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.getJobCardsList(0);

        this.btn_use.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUseClicked, this);
        this.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellClicked, this);

        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);

        this.cards_list.addEventListener(egret.Event.COMPLETE, this.refreshCardsList, this);
    }

    public setDatas(ui_parent:UIJobHomeView, guiLayer:egret.gui.UIStage) {
        this.ui_parent = ui_parent;
        this.guiLayer = guiLayer;
    }

    private getJobCardsList(start_index:number):void {
        Net.getJobCardsList(start_index);
        Utils.showWaitAnim(this);
    }
    public finishGetJobCardsList(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取转职卡列表失败，错误码: " + result);
            return;
        }

        if (data.length < 10) {
            this.has_cards_left = false;
        }
        else {
            this.has_cards_left = true;
        }

        var scroller_group = <egret.gui.Group>this.cards_list.viewport;
        for (var i = 0; i < data.length; i++) {
            var card_info = new JobCardInfo();
            card_info.card_id = data[i][0];
            card_info.card_num = data[i][1];
            card_info.card_level = data[i][2];
            card_info.card_type = data[i][3];
            card_info.card_sell_money = data[i][4];
            card_info.card_use_diamond = data[i][5];
            card_info.card_use_money = data[i][6];

            this.all_cards_list.push(card_info);

            var card_item = new UIJobCardItem();
            card_item.setIndex(this, this.cards_items_list.length, card_info);

            scroller_group.addElement(card_item);
            this.cards_items_list.push(card_item);
        }
    }

    private refreshCardsList() {
        if (this.has_cards_left == false) {
            this.cards_list.removeEventListener(egret.Event.COMPLETE, this.refreshCardsList, this);
            return;
        }

        var top = this.cards_list.viewport.horizontalScrollPosition;
        var bottom = top + this.cards_list.width;

        if (this.cards_items_list[this.cards_items_list.length-1].x < bottom) {
            this.getJobCardsList(this.all_cards_list.length);
        }
    }

    public selectCard(index:number) {
        if (index < 0 || index >= this.cards_items_list.length) {
            return;
        }

        var last_card_item = this.cards_items_list[this.current_select_index];
        if (last_card_item != null) {
            last_card_item.deselect();
        }

        this.current_select_index = index;
        this.cards_items_list[this.current_select_index].select();
    }

    public onUseClicked() {
        if (this.current_select_index < 0 || this.current_select_index >= this.all_cards_list.length) {
            Utils.showToastInfo(this.guiLayer, "请先选择一张转职卡~");
            return;
        }

        this.ui_parent.setCardToDoJob(this.all_cards_list[this.current_select_index]);

        this.onClose();
    }

    public onSellClicked() {
        if (this.current_select_index < 0 || this.current_select_index >= this.all_cards_list.length) {
            Utils.showToastInfo(this.guiLayer, "请先选择一张转职卡~");
            return;
        }

        var dlg = new UIHintView();
        dlg.setHint(this.guiLayer, "确认贩卖", "您确认贩卖此转职卡？", CHOOSE_TYPE.OK_CANCEL, this, this.SellCard);
        this.guiLayer.addElement(dlg);
   
    }

    public SellCard() {
        var card_info = this.all_cards_list[this.current_select_index];
        Net.sellJobCard(card_info.card_id);
        Utils.showWaitAnim(this);
    }
    public finishSellJobCard(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "贩卖转职卡失败，错误码: " + result);
            return;
        }

        var money = data[0];
        var card_id = data[1];

        Logic.money = money;
        var current_layer = G.main_director.current_layer;
        if (current_layer.top_info_bar != null) {
            current_layer.top_info_bar.refreshMoneyText();
        }

        var bNeedReloadAllCards = false;
        for (var i = 0; i < this.all_cards_list.length; i++) {
            var card_info = this.all_cards_list[i];
            if (card_info.card_id == card_id) {
                card_info.card_num--;

                if (card_info.card_num > 0) {
                    var delete_card_item = this.cards_items_list[i];
                    delete_card_item.refreshInfo();
                }
                else {
                    this.all_cards_list.splice(i, 1);
                    bNeedReloadAllCards = true;
                }

                break;
            }
        }

        if (bNeedReloadAllCards) {
            var scroller_group = <egret.gui.Group>this.cards_list.viewport;
            scroller_group.removeAllElements();

            this.cards_items_list = [];
            this.current_select_index = -1;
            
            for (var i = 0; i < this.all_cards_list.length; i++) {
                var card_info = this.all_cards_list[i];

                var card_item = new UIJobCardItem();
                card_item.setIndex(this, this.cards_items_list.length, card_info);

                scroller_group.addElement(card_item);
                this.cards_items_list.push(card_item);
            }
        }
    }

    public onClose() {
        this.btn_use.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onUseClicked, this);
        this.btn_sell.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellClicked, this);
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.cards_list.removeEventListener(egret.Event.COMPLETE, this.refreshCardsList, this);

        this.guiLayer.removeElement(this);

        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIJobHomeView) {
            current_layer.job_cards_dlg = null;
        }
    }
}

