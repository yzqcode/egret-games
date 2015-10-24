//removeEventListener
var UIJobCardsDialog = (function (_super) {
    __extends(UIJobCardsDialog, _super);
    function UIJobCardsDialog() {
        _super.call(this);
        this.has_cards_left = true;
        this.all_cards_list = [];
        this.cards_items_list = [];
        this.current_select_index = -1;
        this.skinName = "skins.UIJobCardsDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIJobCardsDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.getJobCardsList(0);
        this.btn_use.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUseClicked, this);
        this.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellClicked, this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.cards_list.addEventListener(egret.Event.COMPLETE, this.refreshCardsList, this);
    };
    __egretProto__.setDatas = function (ui_parent, guiLayer) {
        this.ui_parent = ui_parent;
        this.guiLayer = guiLayer;
    };
    __egretProto__.getJobCardsList = function (start_index) {
        Net.getJobCardsList(start_index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetJobCardsList = function (result, data) {
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
        var scroller_group = this.cards_list.viewport;
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
    };
    __egretProto__.refreshCardsList = function () {
        if (this.has_cards_left == false) {
            this.cards_list.removeEventListener(egret.Event.COMPLETE, this.refreshCardsList, this);
            return;
        }
        var top = this.cards_list.viewport.horizontalScrollPosition;
        var bottom = top + this.cards_list.width;
        if (this.cards_items_list[this.cards_items_list.length - 1].x < bottom) {
            this.getJobCardsList(this.all_cards_list.length);
        }
    };
    __egretProto__.selectCard = function (index) {
        if (index < 0 || index >= this.cards_items_list.length) {
            return;
        }
        var last_card_item = this.cards_items_list[this.current_select_index];
        if (last_card_item != null) {
            last_card_item.deselect();
        }
        this.current_select_index = index;
        this.cards_items_list[this.current_select_index].select();
    };
    __egretProto__.onUseClicked = function () {
        if (this.current_select_index < 0 || this.current_select_index >= this.all_cards_list.length) {
            Utils.showToastInfo(this.guiLayer, "请先选择一张转职卡~");
            return;
        }
        this.ui_parent.setCardToDoJob(this.all_cards_list[this.current_select_index]);
        this.onClose();
    };
    __egretProto__.onSellClicked = function () {
        if (this.current_select_index < 0 || this.current_select_index >= this.all_cards_list.length) {
            Utils.showToastInfo(this.guiLayer, "请先选择一张转职卡~");
            return;
        }
        var dlg = new UIHintView();
        dlg.setHint(this.guiLayer, "确认贩卖", "您确认贩卖此转职卡？", 2 /* OK_CANCEL */, this, this.SellCard);
        this.guiLayer.addElement(dlg);
    };
    __egretProto__.SellCard = function () {
        var card_info = this.all_cards_list[this.current_select_index];
        Net.sellJobCard(card_info.card_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishSellJobCard = function (result, data) {
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
            var scroller_group = this.cards_list.viewport;
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
    };
    __egretProto__.onClose = function () {
        this.btn_use.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onUseClicked, this);
        this.btn_sell.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSellClicked, this);
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.cards_list.removeEventListener(egret.Event.COMPLETE, this.refreshCardsList, this);
        this.guiLayer.removeElement(this);
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIJobHomeView) {
            current_layer.job_cards_dlg = null;
        }
    };
    return UIJobCardsDialog;
})(egret.gui.Panel);
UIJobCardsDialog.prototype.__class__ = "UIJobCardsDialog";
