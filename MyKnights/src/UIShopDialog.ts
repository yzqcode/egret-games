//removeEventListener
enum SHOP_HOME_TAB
{
    TAB_NONE = -1,
    TAB_MONEY = 0,
    TAB_DIAMOND,
    TAB_STAMINA,
    TAB_JOBCARD,
    TAB_TICKET,
}

class JobCardInfo {
    public card_id:number = 0;
    public card_level:number = 0;
    public card_type:number = 0;
    public card_fee:number = 0;

    public card_num:number = 0;
    public card_sell_money:number = 0;
    public card_use_money:number = 0;
    public card_use_diamond:number = 0;
}

class UIShopDialog extends egret.gui.Panel {
    public shop_money_group:egret.gui.Group;
    public shop_diamond_group:egret.gui.Group;
    public shop_stamina_group:egret.gui.Group;
    public shop_jobCard_group:egret.gui.Group;
    public shop_ticket_group:egret.gui.Group;

    public close_btn:egret.gui.Group;

    public shop_money_btn:egret.gui.Button;
    public shop_diamond_btn:egret.gui.Button;
    public shop_stamina_btn:egret.gui.Button;
    public shop_jobCard_btn:egret.gui.Button;
    public shop_ticket_btn:egret.gui.Button;

    public shop_money_label:egret.gui.Label;
    public shop_diamond_label:egret.gui.Label;
    public shop_stamina_label:egret.gui.Label;
    public shop_jobCard_label:egret.gui.Label;
    public shop_ticket_label:egret.gui.Label;

    // money group
    public scroller_money:egret.gui.Scroller;

    public label_money_hint:egret.gui.Label;

    public buy_money_btn:egret.gui.Button;

    // diamond group
    public scroller_diamond:egret.gui.Scroller;

    public label_diamond_hint:egret.gui.Label;

    public buy_diamond_btn:egret.gui.Button;

    // stamina group
    public scroller_stamina:egret.gui.Scroller;

    public label_stamina_hint:egret.gui.Label;

    public buy_stamina_btn:egret.gui.Button;

    // jobCard group
    public scroller_jobCard:egret.gui.Scroller;

    public label_jobcrad_hint:egret.gui.Label;
    public label_refresh_fee:egret.gui.Label;

    public current_index:number = -1;

    public buy_jobCard_btn:egret.gui.Button;
    public refresh_jobCard_btn:egret.gui.Button;
    public all_cards_list = [];

    // ticket group
    public scroller_ticket:egret.gui.Scroller;

    public buy_ticket_btn:egret.gui.Button;
    public label_ticket_hint:egret.gui.Label;

    public ui_wait:UIWaitView;

    public guiLayer;

    public first_shop_tab:number = SHOP_HOME_TAB.TAB_NONE;

    public current_shop_tab:number = SHOP_HOME_TAB.TAB_NONE;
    public shop_tab_btn_list = [];
    public shop_group_list = [];
    public shop_label_list = [];

    public money_frame:egret.gui.UIAsset = null;

    public constructor(){
        super();
        this.skinName = "skins.UIShopDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;
        
        this.shop_tab_btn_list = [this.shop_money_btn, this.shop_diamond_btn, this.shop_stamina_btn, this.shop_jobCard_btn, this.shop_ticket_btn];
        this.shop_group_list = [this.shop_money_group, this.shop_diamond_group, this.shop_stamina_group, this.shop_jobCard_group, this.shop_ticket_group];
        this.shop_label_list = [this.shop_money_label, this.shop_diamond_label, this.shop_stamina_label, this.shop_jobCard_label, this.shop_ticket_label];


        this.onSetShopTabStatus(this.first_shop_tab);

        this.shop_money_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoneyTab, this);
        this.shop_diamond_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDiamondTab, this);
        this.shop_stamina_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStaminaTab, this);
        this.shop_jobCard_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJobCardTab, this);
        this.shop_ticket_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTicketTab, this);

        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);

        // money group
        this.buy_money_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyMoney, this);

        // diamond group
        this.buy_diamond_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyDiamond, this);

        // stamina group
        this.buy_stamina_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyStamina, this);

        // jobCard group
        this.buy_jobCard_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyJobCard, this);
        this.refresh_jobCard_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.refreshJobCars, this);

        //Ticket group
        this.buy_ticket_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.buyTicket, this);

        this.scroller_money.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.scroller_diamond.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.scroller_stamina.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.scroller_jobCard.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.scroller_ticket.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;

    }

    public setData(guiLayer, tab = -1):void {
        this.guiLayer = guiLayer;
        this.first_shop_tab = tab;

        var current_layer = G.main_director.current_layer;
        current_layer.shop_dlg = this;
    }

    private onMoneyTab(evt) {
        this.onSetShopTabStatus(SHOP_HOME_TAB.TAB_MONEY);

        var group = <egret.gui.Group>this.scroller_diamond.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_stamina.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_jobCard.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_ticket.viewport;
        group.removeAllElements();

        this.money_frame = null;
        this.current_index = -1;
    }
    private onDiamondTab(evt) {
        this.onSetShopTabStatus(SHOP_HOME_TAB.TAB_DIAMOND);

        var group = <egret.gui.Group>this.scroller_money.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_stamina.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_jobCard.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_ticket.viewport;
        group.removeAllElements();

        this.money_frame = null;
        this.current_index = -1;
    }
    private onStaminaTab(evt) {
        this.onSetShopTabStatus(SHOP_HOME_TAB.TAB_STAMINA);

        var group = <egret.gui.Group>this.scroller_money.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_diamond.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_jobCard.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_ticket.viewport;
        group.removeAllElements();

        this.money_frame = null;
        this.current_index = -1;
    }
    private onJobCardTab(evt) {
        this.onSetShopTabStatus(SHOP_HOME_TAB.TAB_JOBCARD);

        var group = <egret.gui.Group>this.scroller_money.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_diamond.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_stamina.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_ticket.viewport;
        group.removeAllElements();

        this.money_frame = null;
        this.current_index = -1;
    }
    private onTicketTab(evt) {
        this.onSetShopTabStatus(SHOP_HOME_TAB.TAB_TICKET);

        var group = <egret.gui.Group>this.scroller_money.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_diamond.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_stamina.viewport;
        group.removeAllElements();

        var group = <egret.gui.Group>this.scroller_jobCard.viewport;
        group.removeAllElements();

        this.money_frame = null;
        this.current_index = -1;
    }
    public onSetShopTabStatus(next_tab:SHOP_HOME_TAB) {

        if (this.current_shop_tab == next_tab) {
            return;
        }

        if (this.current_shop_tab != SHOP_HOME_TAB.TAB_NONE) {
            this.shop_group_list[this.current_shop_tab].visible = false;

            this.shop_tab_btn_list[this.current_shop_tab].enabled = true;
            this.shop_tab_btn_list[this.current_shop_tab].y += 33;
            this.shop_label_list[this.current_shop_tab].enabled = true;
            this.shop_label_list[this.current_shop_tab].y += 23;
        }

        this.current_shop_tab = next_tab;

        this.shop_group_list[this.current_shop_tab].visible = true;
        this.shop_tab_btn_list[this.current_shop_tab].enabled = false;
        this.shop_tab_btn_list[this.current_shop_tab].y -= 33;
        this.shop_label_list[this.current_shop_tab].enabled = false;
        this.shop_label_list[this.current_shop_tab].y -= 23;


        if (this.current_shop_tab == SHOP_HOME_TAB.TAB_MONEY) {
            this.getShopMoneyInfo();
        }
        else if (this.current_shop_tab == SHOP_HOME_TAB.TAB_DIAMOND) {
            this.getShopDiamondInfo();
        }
        else if (this.current_shop_tab == SHOP_HOME_TAB.TAB_STAMINA) {
            this.getShopStaminaInfo();
        }
        else if (this.current_shop_tab == SHOP_HOME_TAB.TAB_JOBCARD) {
            this.getShopCardsInfo();
        }
        else if (this.current_shop_tab == SHOP_HOME_TAB.TAB_TICKET) {
            this.getShopTicketsInfo();
        }
    }

    public getShopMoneyInfo() {
        Net.getShopMoneyList();
        Utils.showWaitAnim(this);
    }
    public finishGetShopMoneyList(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "获取商店信息失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        var group = <egret.gui.Group>this.scroller_money.viewport;

        var diamond_fee_list = data[0];
        var money_list = data[1];
        var hint_text = data[2];
        var icon_name_list = data[3];

        for (var i=0; i<diamond_fee_list.length; i++) {
            var shop_item = new UIShopItem();
            shop_item.setData(this, i, diamond_fee_list[i], money_list[i], icon_name_list[i]);
            group.addElement(shop_item);
        }

        this.label_money_hint.text = "" + hint_text;
    }

    private diamonds_productid_list = [];
    public getShopDiamondInfo() {
        Net.getShopDiamondList();
        Utils.showWaitAnim(this);
    }
    public finishGetShopDiamondList(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "获取商店信息失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        var group = <egret.gui.Group>this.scroller_diamond.viewport;

        var fee_list = data[0];
        var diamond_list = data[1];
        var hint_text = data[2];
        this.diamonds_productid_list = data[3];
        var icon_name_list = data[4];

        for (var i=0; i<fee_list.length; i++) {
            var shop_item = new UIShopItem();
            shop_item.setData(this, i, fee_list[i], diamond_list[i], icon_name_list[i]);
            group.addElement(shop_item);
        }

        this.label_diamond_hint.text = "" + hint_text;
    }

    public getShopStaminaInfo() {
        Net.getShopStaminaList();
        Utils.showWaitAnim(this);
    }
    public finishGetShopStaminaList(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "获取商店信息失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        var group = <egret.gui.Group>this.scroller_stamina.viewport;

        var fee_list = data[0];
        var diamond_list = data[1];
        var hint_text = data[2];
        var icon_name_list = data[3];

        for (var i=0; i<fee_list.length; i++) {
            var shop_item = new UIShopItem();
            shop_item.setData(this, i, fee_list[i], diamond_list[i], icon_name_list[i]);
            group.addElement(shop_item);
        }

        this.label_stamina_hint.text = "" + hint_text;
    }

    public getShopCardsInfo() {
        Net.getShopCardsList();
        Utils.showWaitAnim(this);
    }
    public finishGetShopCardsList(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "获取转职卡失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        var group = <egret.gui.Group>this.scroller_jobCard.viewport;

        var cards_list = data[0];
        var refresh_fee = data[1];
        var hint_text = data[2];

        this.label_refresh_fee.text = "" + refresh_fee;
        this.label_jobcrad_hint.text = "" + hint_text;

        for (var i = 0; i < cards_list.length; i++) {
            var card_info = new JobCardInfo();
            card_info.card_id = cards_list[i][0];
            card_info.card_level = cards_list[i][1];
            card_info.card_type = cards_list[i][2];
            card_info.card_fee = cards_list[i][3];
            this.all_cards_list.push(card_info);

            var shop_item = new UIShopItem();
            shop_item.setData(this, i, card_info);
            group.addElement(shop_item);
        }
    }

    public getShopTicketsInfo() {
        Net.getShopTicketsList();
        Utils.showWaitAnim(this);
    }
    public finishGetShopTicketsList(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "获取门票失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        var group = <egret.gui.Group>this.scroller_ticket.viewport;

        var fee_list = data[0];
        var tickets_list = data[1];
        var hint_text = data[2];
        var icon_name_list = data[3];

        for (var i=0; i<fee_list.length; i++) {
            var shop_item = new UIShopItem();
            shop_item.setData(this, i, fee_list[i], tickets_list[i], icon_name_list[i]);
            group.addElement(shop_item);
        }

        this.label_ticket_hint.text = "" + hint_text;
    }

    public buyDiamond() {
        if (this.current_index < 0 
            || this.diamonds_productid_list[this.current_index] == null) {
            Utils.showToastInfo(this.guiLayer, "请选择要购买的钻石数量~");
            return;
        }

        Utils.showWaitAnim(this);

        //var product_id:string = "knights_diamond_100";
        var product_id:string = this.diamonds_productid_list[this.current_index];
        var uuid = Utils.getUUID();

        var server_datas = Net.server_list[Net.current_server_index];
        var url:string = "http://" + server_datas.ip + ":" + server_datas.port + "/";

        egret.ExternalInterface.call("Shop_buy", "buydiamond$" + url + "$" + uuid + "$" + product_id);
    }
    public static finishBuyShopDiamond(message) {
        console.log( "----------------finishBuyShopDiamond: " + message );

        var bBuyResult = true;
        if ( message != "OK" ) {
            bBuyResult = false;
            
        }

        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishBuyShopDiamond(bBuyResult);
            }
        }
    }
    public finishBuyShopDiamond(success:boolean) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (success == false) {
            Utils.showToastInfo(this.guiLayer, "购买失败~");
            return;
        }
        
        Utils.showToastInfo(this.guiLayer, "购买成功~");
        
        // TODO: check diamond again
    }

    public buyMoney() {
        if (this.current_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请选择要兑换的金币数量~");
            return;
        }

        Net.buyShopMoney(this.current_index);
        Utils.showWaitAnim(this);
    }
    public finishBuyShopMoney(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "兑换金钱失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        Utils.showToastInfo(this.guiLayer, "兑换成功~");

        var diamond = data[0];
        var money = data[1];
        var stamina = data[2];

        Logic.money = money;
        Logic.diamond = diamond;

        var current_layer = G.main_director.current_layer;
        if (current_layer.top_info_bar != null) {
            var deal_data = current_layer.top_info_bar instanceof UITopInfoView;
            if (deal_data) {
                current_layer.top_info_bar.refreshMoneyText();
                current_layer.top_info_bar.refreshDiamondText();
            }
        }
    }

    public buyStamina() {
        if (this.current_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请选择要购买的体力数量~");
            return;
        }

        Net.buyShopStamina(this.current_index);
        Utils.showWaitAnim(this);
    }
    public finishBuyShopStamina(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "购买体力失败，错误码: " + result;
            if (result == -15) {
                strErrorMsg = "钻石不足~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        Utils.showToastInfo(this.guiLayer, "购买成功~");

        var diamond = data[0];
        var money = data[1];
        var stamina = data[2];

        Logic.stamina = stamina;
        Logic.diamond = diamond;

        var current_layer = G.main_director.current_layer;
        if (current_layer.top_info_bar != null) {
            var deal_data = current_layer.top_info_bar instanceof UITopInfoView;
            if (deal_data) {
                current_layer.top_info_bar.refreshStaminaText();
                current_layer.top_info_bar.refreshDiamondText();
            }
        }
    }

    public buyTicket() {
        if (this.current_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请选择要购买的门票数量~");
            return;
        }

        Net.buyShopTicket(this.current_index);
        Utils.showWaitAnim(this);
    }
    public finishBuyShopTicket(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "购买门票失败，错误码: " + result;
            if (result == -15) {
                strErrorMsg = "钻石不足~";
            }
            else if (result == -16) {
                strErrorMsg = "竞技场门票数已经达到上限~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        Utils.showToastInfo(this.guiLayer, "购买成功~");

        var diamond = data[0];
        var money = data[1];
        var stamina = data[2];

        Logic.diamond = diamond;

        var current_layer = G.main_director.current_layer;

        if(current_layer instanceof UIAreaHomeView){
            current_layer.getPlayerAreaBaseInfo();
        }

        if (current_layer.top_info_bar != null) {
            var deal_data = current_layer.top_info_bar instanceof UITopInfoView;
            if (deal_data) {
                current_layer.top_info_bar.refreshDiamondText();
            }
        }
    }

    public buyJobCard() {
        if (this.current_index < 0) {
            Utils.showToastInfo(this.guiLayer, "请选择要购买的转职卡~");
            return;
        }

        Net.buyShopCard(this.all_cards_list[this.current_index].card_id);
        Utils.showWaitAnim(this);
    }
    public finishBuyShopCard(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "购买转职卡失败，错误码: " + result;
            if (result == -15) {
                strErrorMsg = "钻石不足~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);

            if (result != -15) {
                this.getShopCardsInfo();
            }
            return;
        }

        Utils.showToastInfo(this.guiLayer, "购买成功~");

        var diamond = data[0];
        Logic.diamond = diamond;

        var current_layer = G.main_director.current_layer;
        if (current_layer.top_info_bar != null) {
            var deal_data = current_layer.top_info_bar instanceof UITopInfoView;
            if (deal_data) {
                current_layer.top_info_bar.refreshDiamondText();
            }
        }
    }

    public refreshJobCars() {
        Net.refreshShopCard();
        Utils.showWaitAnim(this);
    }
    public finishRefreshShopCard(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "刷新转职卡失败，错误码: " + result;
            if (result == -15) {
                strErrorMsg = "钻石不足~";
            }

            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        var group = <egret.gui.Group>this.scroller_jobCard.viewport;
        group.removeAllElements();

        this.money_frame = null;
        this.current_index = -1;

        var cards_list = data[0];
        var refresh_fee = data[1];
        var hint_text = data[2];

        var diamond = data[3];
        Logic.diamond = diamond;

        this.label_refresh_fee.text = "" + refresh_fee;
        this.label_jobcrad_hint.text = "" + hint_text;

        this.all_cards_list = [];

        for (var i = 0; i < cards_list.length; i++) {

            var card_info = new JobCardInfo();
            card_info.card_id = cards_list[i][0];
            card_info.card_level = cards_list[i][1];
            card_info.card_type = cards_list[i][2];
            card_info.card_fee = cards_list[i][3];
            this.all_cards_list.push(card_info);

            var shop_item = new UIShopItem();
            shop_item.setData(this, i, card_info);
            group.addElement(shop_item);
        }

        var current_layer = G.main_director.current_layer;
        if (current_layer.top_info_bar != null) {
            var deal_data = current_layer.top_info_bar instanceof UITopInfoView;
            if (deal_data) {
                current_layer.top_info_bar.refreshDiamondText();
            }
        }
    }

    public close() {
        this.guiLayer.removeElement(this);

        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            current_layer.shop_dlg = null;
        }
    }

    private removeListener() {
        this.shop_money_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMoneyTab, this);
        this.shop_diamond_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onDiamondTab, this);
        this.shop_stamina_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStaminaTab, this);
        this.shop_jobCard_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onJobCardTab, this);
        this.shop_ticket_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTicketTab, this);

        this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);

        // money group
        this.buy_money_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buyMoney, this);

        // diamond group
        this.buy_diamond_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buyDiamond, this);

        // stamina group
        this.buy_stamina_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buyStamina, this);

        // jobCard group
        this.buy_jobCard_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buyJobCard, this);
        this.refresh_jobCard_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.refreshJobCars, this);

        //Ticket group
        this.buy_ticket_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.buyTicket, this);
    }
}

