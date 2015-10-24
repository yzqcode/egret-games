//removeEventListener
enum SHOW_ARENA_VIEW
{
    ARENA_VIEW_HOME = 1,
    ARENA_VIEW_MATCH,
    ARENA_VIEW_RANK
}

class ArenaRankInfo {
    public player_name:string = "";
    public guild_name:string = "";
    public scores:number = 0;
    public player_id:number;
    public dan_name:string;
}

class UIAreaHomeView extends egret.gui.Panel {
    public view_rank_btn:egret.gui.Button;
    public match_btn:egret.gui.Button;

    public label_world_rank:egret.gui.Label;
    public label_match_times:egret.gui.Label;
    public label_rank_title:egret.gui.Label;
    public label_rank_score:egret.gui.Label;
    public label_honer_award:egret.gui.Label;

    public noMove_group:egret.gui.Group;

    public player_group:egret.gui.Group;

    public bronze_group:egret.gui.Group;
    public bronze_rank_scroller:egret.gui.Scroller;
    public player_btn:egret.gui.Button;
    public ten_btn:egret.gui.Button;

    public ten_group:egret.gui.Group;
    public ten_rank_scroller:egret.gui.Scroller;
    public bronze_btn:egret.gui.Button;

    public player_name_label:egret.gui.Label;
    public icon_body:egret.gui.UIAsset;
    public icon_body_mask:egret.gui.UIAsset;

    public ui_wait:UIWaitView;
    public chat_dlg:UIChatDialog;

    public top_info_bar:UITopInfoView = null;
    public bottom_info_bar:UIBottomInfoView = null;

    public rank_area_label:egret.gui.Label;

    public guiLayer:egret.gui.UIStage;
    public main_director:Main;

    private current_show_subview:number = SHOW_ARENA_VIEW.ARENA_VIEW_HOME;
    private current_subview = null;

    private match_ticket_num:number = 0;

    private noMove_group_x:number = 0;

    public arena_rank_datas_list = [];
    public arena_ten_rank_datas_list = [];

    private has_next:Boolean;

    public player_datail_dlg:UIPlayerDetailDialog;

    public constructor(){
        super();
        this.skinName = "skins.UIAreaHomeViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public showOnMainLayer(main_director:Main):void {
        this.width = G.win_width;
        this.height = G.win_height;

        this.main_director = main_director;

        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);

        this.guiLayer.addElementAt(this, 0);

        this.bottom_info_bar = new UIBottomInfoView();
        this.bottom_info_bar.resetBackButtonCallback(this, BOTTOM_BUTTON_TYPE.BACK, this.onBackBtnClicked);
        this.guiLayer.addElementAt(this.bottom_info_bar, 1);

        this.top_info_bar = new UITopInfoView();
        this.guiLayer.addElementAt(this.top_info_bar, 2);
    }
    public removeFromMainLayer():void {
        this.removeListener();
        this.main_director.stage.removeChild(this.guiLayer);
    }

    private removeListener() {
        this.view_rank_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewRankBtnClicked, this);
        this.match_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onMatchBtnClicked, this);

        this.player_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerBtnClicked, this);
        this.ten_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTenBtnClicked, this);
        this.bronze_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBronzeBtnClicked, this);
        this.bronze_rank_scroller.removeEventListener(egret.Event.COMPLETE, this.moreRankInfo, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.main_director.closeGateAnimLayer();

        this.player_name_label.text = Logic.player_name;
        var my_data = Logic.getPlayerKnight();
        this.icon_body.source = Utils.getKnightBigImgName(my_data.type, true);
        this.icon_body_mask.source = Utils.getSelfKnightBigImgMaskName(my_data.type, true);

        this.bronze_group.visible = false;
        this.ten_group.visible = false;

        this.noMove_group_x = this.noMove_group.x;

        this.player_group.x = this.noMove_group.x;
        this.player_group.y = this.noMove_group.y;
        this.bronze_group.x = this.noMove_group.x;
        this.bronze_group.y = this.noMove_group.y;
        this.ten_group.x = this.noMove_group.x;
        this.ten_group.y = this.noMove_group.y;

        this.view_rank_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewRankBtnClicked, this);
        this.match_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMatchBtnClicked, this);

        this.player_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerBtnClicked, this);
        this.ten_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTenBtnClicked, this);
        this.bronze_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBronzeBtnClicked, this);
        this.bronze_rank_scroller.addEventListener(egret.Event.COMPLETE, this.moreRankInfo, this);

        this.getPlayerAreaBaseInfo();


        this.bronze_rank_scroller.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
    }

    public getArenaRankInfo(startIndex) {
        Net.getArenaRankInfo(startIndex);
        Utils.showWaitAnim(this);
    }

    public getArenaTenRankInfo() {
        Net.getArenaTenRankInfo();
        Utils.showWaitAnim(this);
    }

    private moreRankInfo() {
    	if(this.has_next == false){
    		return;
    	}
    	var top = this.bronze_rank_scroller.viewport.verticalScrollPosition;
        var bottom = top + this.bronze_rank_scroller.height;

	    if (this.arena_rank_datas_list[this.arena_rank_datas_list.length-1].y < bottom) {
	        this.getArenaRankInfo(this.arena_rank_datas_list.length);
	    }
    }

    public getPlayerAreaBaseInfo() {
        Net.getArenaBaseInfo();
        Utils.showWaitAnim(this);
    }

    public finishGetPlayerAreaBaseInfo(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "进入竞技场失败，错误码: " + result);
            return;
        }

        // Refresh info about arena
        if (data[0] == -1) {
            this.label_world_rank.text = "未进入世界排名";
        }
        else {
            this.label_world_rank.text = "" + data[0];
        }
        this.label_rank_title.text = "" + data[1];
        this.label_rank_score.text = "" + data[2];
        this.label_match_times.text = "" + data[3];
        this.label_honer_award.text = "" + data[4];

        this.match_ticket_num = data[3];
    }

    public finishGetArenaRankInfo(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取竞技场排行榜失败，错误码: " + result);
            return;
        }

        // Refresh info about arena
        //console.log("GET_ARENA_RANK_INFO result: ", data);

        if (data.length < 10) {
            this.has_next = false;
        }
        else {
            this.has_next = true;
        }

        this.rank_area_label.text = this.label_rank_title.text + "骑士排名";

        var scroller_group = <egret.gui.Group>this.bronze_rank_scroller.viewport;

        for (var i = 0; i < data.length; i++) {
            var rank_data = new ArenaRankInfo();
            rank_data.player_name = data[i][0];
            rank_data.guild_name = data[i][1];
            rank_data.scores = data[i][2];
            rank_data.player_id = data[i][3];
            this.arena_rank_datas_list.push(rank_data);

            var rank_list_item = new UIArenaRankViewItem();
            rank_list_item.setData(this.arena_rank_datas_list.length, rank_data, this);
            scroller_group.addElement(rank_list_item);
        }
    }

    public finishGetArenaTenRankInfo(result, data, dan_name) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取排行榜失败，错误码: " + result);
            return;
        }

        var scroller_group = <egret.gui.Group>this.ten_rank_scroller.viewport;

        for (var i = 0; i < data.length; i++) {
            var rank_data = new ArenaRankInfo();
            rank_data.player_name = data[i][0];
            rank_data.guild_name = data[i][1];
            rank_data.scores = data[i][2];
            rank_data.player_id = data[i][3];
            rank_data.dan_name = dan_name;
            this.arena_ten_rank_datas_list.push(rank_data);

            var rank_list_item = new UIArenaTenRankItem();
            rank_list_item.setData(this.arena_ten_rank_datas_list.length, rank_data, this);
            scroller_group.addElement(rank_list_item);
        }
    }

    public finishMatchArenaPlayer(result, side, is_npc, data) {
        if (this.current_show_subview != SHOW_ARENA_VIEW.ARENA_VIEW_MATCH) {
            return;
        }

        var deal_data = this.current_subview instanceof UIArenaMatchView;
        if (deal_data) {
            this.current_subview.finishGetMatchPlayerInfo(result, side, is_npc, data);
        }
    }

    public onViewRankBtnClicked() {
    	this.view_rank_btn.visible = false;
    	this.player_btn.visible = false;
    	this.ten_btn.visible = false;

    	var tw1 = egret.Tween.get(this.player_group);
        tw1.to({x:-this.player_group.width}, 500, egret.Ease.cubicInOut);

        this.bronze_group.x = this.noMove_group_x + this.bronze_group.width;
        this.bronze_group.visible = true;
        var tw2 = egret.Tween.get(this.bronze_group);
        tw2.to({x:this.noMove_group_x}, 500, egret.Ease.cubicInOut);

        var timer1:egret.Timer = new egret.Timer(500,1);
        timer1.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCom1,this);
        timer1.start();
    }

    public onPlayerBtnClicked() {
    	this.view_rank_btn.visible = false;
    	this.player_btn.visible = false;
    	this.ten_btn.visible = false;

    	var scroller_group = <egret.gui.Group>this.bronze_rank_scroller.viewport;
    	scroller_group.removeAllElements();
    	this.arena_rank_datas_list = [];

    	var pos = this.noMove_group_x + this.bronze_group.width
    	var tw3 = egret.Tween.get(this.bronze_group);
        tw3.to({x:pos}, 500, egret.Ease.cubicInOut);

        this.player_group.visible = true;
        var tw4 = egret.Tween.get(this.player_group);
        tw4.to({x:this.noMove_group_x}, 500, egret.Ease.cubicInOut);

        var timer2:egret.Timer = new egret.Timer(500,1);
        timer2.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCom2,this);
        timer2.start();
    }

    public onTenBtnClicked() {
    	this.bronze_btn.visible = false;
    	this.player_btn.visible = false;
    	this.ten_btn.visible = false;

    	var scroller_group = <egret.gui.Group>this.bronze_rank_scroller.viewport;
    	scroller_group.removeAllElements();
    	this.arena_rank_datas_list = [];

    	var tw5 = egret.Tween.get(this.bronze_group);
        tw5.to({x:-this.bronze_group.width}, 500, egret.Ease.cubicInOut);

        this.ten_group.x = this.noMove_group_x + this.ten_group.width
        this.ten_group.visible = true;
        var tw6 = egret.Tween.get(this.ten_group);
        tw6.to({x:this.noMove_group_x}, 500, egret.Ease.cubicInOut);

        var timer3:egret.Timer = new egret.Timer(500,1);
        timer3.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCom3,this);
        timer3.start();
    }

    public onBronzeBtnClicked() {
    	this.bronze_btn.visible = false;
    	this.player_btn.visible = false;
    	this.ten_btn.visible = false;//

        var scroller_group = <egret.gui.Group>this.ten_rank_scroller.viewport;
        scroller_group.removeAllElements();
        this.arena_ten_rank_datas_list = [];

    	var pos = this.noMove_group_x + this.ten_group.width
    	var tw7 = egret.Tween.get(this.ten_group);
        tw7.to({x:pos}, 500, egret.Ease.cubicInOut);

        this.bronze_group.x = this.noMove_group_x - this.bronze_group.width;
        this.bronze_group.visible = true;
        var tw8 = egret.Tween.get(this.bronze_group);
        tw8.to({x:this.noMove_group_x}, 500, egret.Ease.cubicInOut);

        var timer4:egret.Timer = new egret.Timer(500,1);
        timer4.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCom4,this);
        timer4.start();
    }

    private timerCom1() {
    	this.player_group.visible = false;
    	this.player_btn.visible = true;
    	this.ten_btn.visible = true;

    	this.getArenaRankInfo(0);
    }

    private timerCom2() {
    	this.bronze_group.visible = false;
    	this.view_rank_btn.visible = true;
    }

    private timerCom3() {
    	this.bronze_group.visible = false;
    	this.bronze_btn.visible = true;

        this.getArenaTenRankInfo();
    }

    private timerCom4() {
    	this.ten_group.visible = false;
    	this.player_btn.visible = true;
    	this.ten_btn.visible = true;

    	this.getArenaRankInfo(0);
    }

    public onMatchBtnClicked() {
        if (this.match_ticket_num <= 0) {
            Utils.showToastInfo(this.guiLayer, "竞技场门票不足!");

            var shop = new UIShopDialog();
            shop.setData(this.guiLayer, SHOP_HOME_TAB.TAB_TICKET);
            this.guiLayer.addElement(shop);
            
            return;
        }

        var arena_match_view = new UIArenaMatchView();
        this.guiLayer.addElementAt(arena_match_view, 1);
        arena_match_view.guiLayer = this.guiLayer;

        this.current_show_subview = SHOW_ARENA_VIEW.ARENA_VIEW_MATCH;
        this.current_subview = arena_match_view;

        this.visible = false;
        this.top_info_bar.visible = false;
        this.bottom_info_bar.visible = false;
    }

    public onBackBtnClicked() {
        if (this.current_show_subview != SHOW_ARENA_VIEW.ARENA_VIEW_HOME) {
            this.guiLayer.removeElement(this.current_subview);

            this.current_show_subview = SHOW_ARENA_VIEW.ARENA_VIEW_HOME;
            this.current_subview = null;

            this.visible = true;
            this.top_info_bar.visible = true;
            this.bottom_info_bar.visible = true;
        }
        else {
            this.main_director.enterHomeView();
        }
    }
}

