class WarReportData {
    public report_id:number = 0;

    public area_id:number = 0;
    public city_index:number = 0;
    public city_status:CITY_STATUS = CITY_STATUS.BE_ATTACKING;
    public city_be_attack_end_time:number = 0;
    public is_complete:boolean = false;
}

class QuestLayer extends egret.DisplayObjectContainer {
    public main_director:Main;

    public touch_layer:egret.DisplayObjectContainer;
	public guiLayer:egret.gui.UIStage;
    public top_layer:egret.DisplayObjectContainer;

    public city_detail_view:UICityDetailView = null;
    public special_city_detail_view:UISpecialCityDetailView = null;
    public war_report_view:UIWarReport = null;

    public ui_wait:UIWaitView;
    public chat_dlg:UIChatDialog;
    
    public top_info_bar:UITopInfoView = null;
    public bottom_info_bar:UIBottomInfoView = null;

    public quest_button_view:UIQuestButtonsView = null;

    private first_area_loaded:number = 0;
    private last_area_loaded:number = 0;

    private area_layer_list = [];
    private current_area_index:number = 0;

    public war_report_list = [];

    private refresh_area_timer:egret.Timer;

    public constructor() {
        super();
    }

    public showOnMainLayer(main_director:Main):void {
        this.main_director = main_director;

        this.touch_layer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.touch_layer, 0);
        this.initTouchLayer();

        // Add self layer to stage
        this.main_director.stage.addChildAt(this, 1);

        // Add UIStage.
        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 2);

        // Add top layer
        this.top_layer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.top_layer, 3);

        this.bottom_info_bar = new UIBottomInfoView();
        this.bottom_info_bar.resetBackButtonCallback(this, BOTTOM_BUTTON_TYPE.BACK, this.onBackBtnClicked);
        this.guiLayer.addElement(this.bottom_info_bar);

        this.top_info_bar = new UITopInfoView();
        this.guiLayer.addElement(this.top_info_bar);

        this.main_director.closeGateAnimLayer();

        this.refresh_area_timer = new egret.Timer(1000, -1)
        this.refresh_area_timer.addEventListener(egret.TimerEvent.TIMER, this.refreshAreaLayer, this);
        this.refresh_area_timer.start();

        this.showCityFinishMessageIfNeed();

        this.getWarReportList();
        this.initQuestLayer();

        Net.getSystemStatus();
    }

    public removeFromMainLayer():void {
        this.stopAllTimer();

        this.main_director.stage.removeChild(this.touch_layer);
    	this.main_director.stage.removeChild(this);
        this.main_director.stage.removeChild(this.guiLayer);
        this.main_director.stage.removeChild(this.top_layer);
    }

    public finishGetSystemStatus(data) {
        var system_open_text:string = Utils.getSystemOpenText(data);
        if (system_open_text.length > 0) {
            var notice_layer = new NoticeLayer();
            notice_layer.showNoticeLayer(system_open_text, this.top_layer);
        }

        for (var i = SYSTEM_INDEX.INDEX_JOB; i <= SYSTEM_INDEX.INDEX_HONOR_HIRE; i++) {
            Logic.system_status_list[i] = data[i];
        }
    }

    public getWarReportList() {
        console.log("111111 getWarReportList: ");

        Net.getWarReportList();
        Utils.showWaitAnim(this);
    }
    public finishGetWarReportList(result, data) {
        console.log("111111 finishGetWarReportList: ", data);

        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取军情失败，错误码: " + result);
            return;
        }

        for (var i = 0; i < data.length; i++) {
            var war_data = new WarReportData();
            war_data.report_id = data[i][0];

            war_data.area_id = data[i][1];
            war_data.city_index = data[i][2];

            war_data.city_be_attack_end_time = data[i][3];
            war_data.city_status = data[i][4];
            
            if (data[i][5] > 0) {
                war_data.is_complete = true;
            }
            else {
                war_data.is_complete = false;
            }

            this.war_report_list.push(war_data);
        }

        var quest_button_view = new UIQuestButtonsView();
        quest_button_view.guiLayer = this.guiLayer;
        this.guiLayer.addElement(quest_button_view);

        this.quest_button_view = quest_button_view;
    }

    // 0:反复刷 1：正常打 2：攻击中 3：已被敌人攻占
    public static last_quest_type:number = 0;
    public static last_area_id:number = -1;
    public static last_city_index:number = -1;
    public static last_city_id:number = -1;
    public static show_win_msg:boolean = false;
    public showCityFightMessage(type:number, area_id:number, city_index:number, city_id:number) {
        QuestLayer.last_quest_type = type;
        QuestLayer.last_area_id = area_id;
        QuestLayer.last_city_index = city_index;
        QuestLayer.last_city_id = city_id;

        if (type == 1) {
            var city_line = Utils.getLine("city_list", city_id);
            if (city_line == null) {
                return;
            }

            var plot_id = city_line[city_list_fight_msg];
            var plot_line = Utils.getLine("plot_list", plot_id);
            if (plot_line == null) {
                this.enterQuestBattle();
            }
            else {
                var plot_layer = new PlotLayer();
                plot_layer.startPlot(plot_id, this.top_layer, this, this.enterQuestBattle);
            }
        }
        else {
            this.enterQuestBattle();
        }
    }
    private enterQuestBattle() {
        BattleLayer.InitQuestBattleInfo(QuestLayer.last_city_id);
        G.main_director.enterBattleView();
    }

    public showCityFinishMessageIfNeed() {
        if (QuestLayer.show_win_msg == false) {
            return;
        }

        if (QuestLayer.last_quest_type != 0 && QuestLayer.last_quest_type != 1) {
            return;
        }

        QuestLayer.show_win_msg = false;

        var city_line = Utils.getLine("city_list", QuestLayer.last_city_id);
        if (city_line == null) {
            return;
        }

        var plot_id = city_line[city_list_win_msg];
        var plot_line = Utils.getLine("plot_list", plot_id);
        if (plot_line != null) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(plot_id, this.top_layer, this);
        }
    }

    public onBackBtnClicked() {
        this.main_director.enterHomeView();
    }

    private initTouchLayer() {
        // Load touch layer
        var touch_sprite:egret.Sprite = new egret.Sprite();
        touch_sprite.graphics.beginFill(0x000000, 0);
        touch_sprite.graphics.drawRect(0, 0, G.win_width, G.win_height);
        touch_sprite.graphics.endFill();
        touch_sprite.width = G.win_width;
        touch_sprite.height = G.win_height;
        touch_sprite.touchEnabled = true;
        this.touch_layer.addChild(touch_sprite);

        touch_sprite.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBgBegin, this);
        touch_sprite.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchBgMov, this);
        touch_sprite.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBgEnd, this);

        touch_sprite.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchBgEnd, this);
    }

    private initQuestLayer() {
        for (var i = 0; i <= Logic.area_id; i++) {
            this.area_layer_list[i] = null;
        }

        var current_area_id = Logic.area_id;
        if (QuestLayer.last_area_id >= 0) {
            current_area_id = QuestLayer.last_area_id;
        }

        // Load current area layer.
        if (Logic.isAreaIndexExsit(current_area_id) == false) {
            current_area_id--;
        }

        var area_layer = new AreaLayer();
        area_layer.initAreaLayer(this, current_area_id);
        this.area_layer_list[current_area_id-1] = area_layer;

        this.first_area_loaded = current_area_id;
        this.last_area_loaded = current_area_id;

        this.current_area_index = current_area_id-1;
        this.x = - this.current_area_index * G.win_width;

        // Load next area layer if has.
        if (Logic.isAreaIndexExsit(current_area_id+1)) {
            var next_area_layer = new AreaLayer();
            next_area_layer.initAreaLayer(this, current_area_id+1);

            this.last_area_loaded = current_area_id+1;
            this.area_layer_list[current_area_id] = next_area_layer;
        }

        // Load prev area layer if has.
        if (Logic.isAreaIndexExsit(current_area_id-1)) {
            var next_area_layer = new AreaLayer();
            next_area_layer.initAreaLayer(this, current_area_id-1);

            this.first_area_loaded = current_area_id-1;
            this.area_layer_list[current_area_id-2] = next_area_layer;
        }

        this.checkIfShowGuide();
    }

    private checkIfShowGuide() {
        if (Logic.guide_flag == GUIDE_TYPE.FIRST_QUEST_FLAG) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(110001, this.top_layer);
        }
        else if (Logic.guide_flag == GUIDE_TYPE.FIRST_QUEST_END) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(110020, this.top_layer);
        }
        else if (Logic.guide_flag == GUIDE_TYPE.CITY_2_HIRE) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(120003, this.top_layer);
        }
        else if (Logic.guide_flag == GUIDE_TYPE.CITY_2_FLAG2) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(150001, this.top_layer);
        }
        else if (Logic.guide_flag == GUIDE_TYPE.CITY_2_END) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(160001, this.top_layer);
        }
        else if (Logic.guide_flag == GUIDE_TYPE.TEAM_MGR_SWITCH) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(170001, this.top_layer);
        }
    }

    public showFirstCityDetailDlgForGuide() {
        var quest_layer = this;

        var city_dlg = new UICityDetailView();
        city_dlg.city_id = 1;
        city_dlg.area_id = 1;
        city_dlg.city_index = 0;
        city_dlg.city_status = CITY_STATUS.OPEN;
        city_dlg.guiLayer = quest_layer.guiLayer;
        quest_layer.city_detail_view = city_dlg;
        quest_layer.guiLayer.addElement(city_dlg);
    }
    public showSecondCityDetailDlgForGuide() {
        var quest_layer = this;

        var city_dlg = new UICityDetailView();
        city_dlg.city_id = 2;
        city_dlg.area_id = 1;
        city_dlg.city_index = 1;
        city_dlg.city_status = CITY_STATUS.OPEN;
        city_dlg.guiLayer = quest_layer.guiLayer;
        quest_layer.city_detail_view = city_dlg;
        quest_layer.guiLayer.addElement(city_dlg);
    }
    public showThirdCityDetailDlgForGuide() {
        var quest_layer = this;

        var city_dlg = new UICityDetailView();
        city_dlg.city_id = 3;
        city_dlg.area_id = 1;
        city_dlg.city_index = 2;
        city_dlg.city_status = CITY_STATUS.OPEN;
        city_dlg.guiLayer = quest_layer.guiLayer;
        quest_layer.city_detail_view = city_dlg;
        quest_layer.guiLayer.addElement(city_dlg);
    }

    public finishGetAllCityStatus(result, area_id, data) {
        if (result != 0) {
            var strErrorMsg = "获取城市列表失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        var area_layer = this.area_layer_list[area_id-1];
        if (area_layer == null) {
            Utils.showToastInfo(this.guiLayer, "area layer不存在: " + area_id);
            return;
        }

        area_layer.finishGetAllCityStatus(data);
    }

    public last_collect_area_id:number = 0;
    public last_collect_city_index:number = 0;
    public collectCityMoney(area_id:number, city_index:number) {
        this.last_collect_area_id = area_id;
        this.last_collect_city_index = city_index;

        Net.collectCityMoney(area_id, city_index);
        Utils.showWaitAnim(this);
    }
    public finishCollectCityMoney(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg:string = "收集金钱失败，错误码: " + result;
            if (result == -15) {
                strErrorMsg = "别心急，收集金钱的时间还没到呢~";
            }
            else if (result == -16) {
                strErrorMsg = "该城市已经被敌人攻占~";
            }

            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        var area_layer = this.area_layer_list[this.last_collect_area_id-1];
        if (area_layer == null) {
            return;
        }

        area_layer.finishCollectCityMoney(this.last_collect_city_index, data[0], data[1]);
    }

    private touch_start_x:number = -1;
    private touch_last_x:number = -1;
    private touch_start_time:number = 0;

    private onTouchBgBegin(evt) {
        //console.log("---- onTouchBgBegin", evt.stageX, evt.stageY);

        this.touch_start_x = evt.stageX;
        this.touch_last_x = evt.stageX;

        this.touch_start_time = Utils.time();
    }
    private onTouchBgMov(evt) {
        //console.log("==== onTouchBgMov", evt.stageX, evt.stageY);

        if (this.touch_start_x < 0) {
            return;
        }

        this.x += (evt.stageX - this.touch_last_x);

        this.touch_last_x = evt.stageX;

        this.loadPrevAreaIfNeed();
        this.loadNexAreaIfNeed();
        this.checkIfMoveOut(evt);
    }
    private loadNexAreaIfNeed() {
        if (this.last_area_loaded >= Logic.area_id+1) {
            return;
        }

        var last_area_layer_x = this.x + (this.last_area_loaded-2) * G.win_width;
        if (last_area_layer_x <= 0) {
            var area_index = this.last_area_loaded + 1;
            if (Logic.isAreaIndexExsit(area_index) && this.area_layer_list[area_index-1] == null) {
                var next_area_layer = new AreaLayer();
                next_area_layer.initAreaLayer(this, area_index);
                this.area_layer_list[area_index-1] = next_area_layer;

                this.last_area_loaded++;
            }
        }
    }
    private loadPrevAreaIfNeed() {
        if (this.first_area_loaded <= 1) {
            return;
        }

        var first_area_layer_x = this.x + this.first_area_loaded * G.win_width;
        if (first_area_layer_x >= 0) {
            var area_index = this.first_area_loaded - 1;
            if (Logic.isAreaIndexExsit(area_index) && this.area_layer_list[area_index-1] == null) {
                var next_area_layer = new AreaLayer();
                next_area_layer.initAreaLayer(this, area_index);
                this.area_layer_list[area_index-1] = next_area_layer;

                this.first_area_loaded--;
            }
        }
    }
    private checkIfMoveOut(evt) {
        var min_pos_x = - (this.last_area_loaded - 1) * G.win_width - 50;
        var max_pos_x = 50;

        if (this.x > max_pos_x || this.x < min_pos_x) {
            this.onTouchBgEnd(evt);
        }
        else if (this.touch_last_x < 50 || this.touch_last_x > G.win_width-50) {
            this.onTouchBgEnd(evt);
        }
    }

    private onTouchBgEnd(evt) {
        //console.log("++++ onTouchBgEnd", evt.stageX, evt.stageY);

        if (this.touch_start_x < 0) {
            return;
        }

        this.scrollBackgroundIfNeed(this.touch_start_x, evt.stageX);

        this.touch_start_x = -1;
        this.touch_last_x = -1;

    }
    private scrollBackgroundIfNeed(start_x, end_x) {
        var touch_time = (Utils.time() - this.touch_start_time);
        var mov_dis = end_x - start_x;
        var velocity = mov_dis / touch_time;
        if (velocity > 1000 || mov_dis > G.win_width/3) {
            this.current_area_index--;
        }
        else if (velocity < -1000 || mov_dis < -G.win_width/3) {
            this.current_area_index++;
        }

        var scroll_end_x = - this.current_area_index * G.win_width;

        var min_pos_x = - (this.last_area_loaded - 1) * G.win_width;
        var max_pos_x = 0;

        var tw = egret.Tween.get(this);

        if (scroll_end_x > max_pos_x) {
            // Scroll to 0
            tw.to({x:max_pos_x}, 200, egret.Ease.backIn);
            this.current_area_index = 0;
        }
        else if (scroll_end_x < min_pos_x) {
            tw.to({x:min_pos_x}, 200, egret.Ease.backIn);
            this.current_area_index = this.last_area_loaded - 1;
        }
        else {
            tw.to({x:scroll_end_x}, 400, egret.Ease.sineOut);
        }
    }

    public goToAreaLayer(area_id:number) {
        if (Logic.isAreaIndexExsit(area_id) == false) {
            return;
        }

        if (area_id < this.first_area_loaded && this.area_layer_list[area_id-1] == null) {
            var next_area_layer = new AreaLayer();
            next_area_layer.initAreaLayer(this, area_id);
            this.area_layer_list[area_id-1] = next_area_layer;
        }
        
        this.current_area_index = area_id - 1;
        var scroll_end_x = - this.current_area_index * G.win_width;

        var tw = egret.Tween.get(this);
        tw.to({x:scroll_end_x}, 0);
    }
    
    private refreshAreaLayer() {
        var current_area_layer = this.area_layer_list[this.current_area_index];
        if (current_area_layer == null) {
            return;
        }

        current_area_layer.refreshAllCityStatus();
    }

    private stopAllTimer() {
        if (this.refresh_area_timer != null) {
            this.refresh_area_timer.stop();
            this.refresh_area_timer = null;
        }
    }
}

