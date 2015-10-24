class UIHomeView extends egret.gui.Panel {

    public guild_btn:egret.gui.Button;
    public hire_btn:egret.gui.Button;
    public job_btn:egret.gui.Button;
    public setting_btn:egret.gui.Button;
    public fight_btn:egret.gui.Button;
    public arena_btn:egret.gui.Button;
    public shop_btn:egret.gui.Button;
    public bang_ID:egret.gui.Button;

    public ui_wait:UIWaitView;
    public chat_dlg:UIChatDialog;
    public shop_dlg:UIShopDialog;

    public top_info_bar:UITopInfoView = null;
    public bottom_info_bar:UIBottomInfoView = null;
    
    public guiLayer:egret.gui.UIStage;
    public topLayer:egret.DisplayObjectContainer;

    public main_director:Main;

    public timerRefresh:egret.Timer = null;

    public messageID:number = 0;

    public constructor() {
        super();
        this.skinName = "skins.UIHomeViewSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    public showOnMainLayer(main_director:Main):void {
        this.width = G.win_width;
        this.height = G.win_height;

        this.main_director = main_director;

        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);

        this.guiLayer.addElementAt(this, 0);

        this.bottom_info_bar = new UIBottomInfoView();
        if (Logic.isPlayerInGuild() == false) {
            this.bottom_info_bar.resetBackButtonCallback(this, BOTTOM_BUTTON_TYPE.JOIN_GUILD, this.onJoinGuildBtnClick);
        }
        else {
            this.bottom_info_bar.resetBackButtonCallback(this, BOTTOM_BUTTON_TYPE.CHECK_GUILD, this.onBottomGuildBtnClick);
        }
        this.guiLayer.addElementAt(this.bottom_info_bar, 1);

        this.top_info_bar = new UITopInfoView();
        this.guiLayer.addElementAt(this.top_info_bar, 2);

        /*var floating_buttons = new UIButtonTweenView();
        floating_buttons.x = G.win_width - floating_buttons.width;
        floating_buttons.y = 100;
        this.guiLayer.addElementAt(floating_buttons, 3);*/

        this.topLayer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.topLayer, 1);
    }
    public removeFromMainLayer():void {
        this.timerRefresh.stop();
        this.timerRefresh = null;

        this.main_director.stage.removeChild(this.guiLayer);
        this.main_director.stage.removeChild(this.topLayer);

        this.onRemoveAllEventListener();
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.main_director.closeGateAnimLayer();

        this.guild_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGuildBtnClick, this);
        this.hire_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHireBtnClick, this);
        this.job_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJobBtnClick, this);
        this.setting_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSettingBtnClick, this);
        this.fight_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightBtnClick, this);
        this.arena_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onArenaBtnClick, this);
        this.shop_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopBtnClick, this);
        this.bang_ID.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onIDClick, this);
        if (Logic.isBind == 1) {
            this.bang_ID.visible = true;
        }
        else {
            this.bang_ID.visible = false;
        }

        this.checkIfShowGuide();

        Net.getSystemStatus();
        Net.getSelfGuildInfo();

        this.timerRefresh = new egret.Timer(20000, -1);
        this.timerRefresh.addEventListener(egret.TimerEvent.TIMER, this.getFirst, this);
        this.timerRefresh.start();
    }

    public getFirst() {
        Net.getFirstMag(this.messageID);
    }

    public finishGetFirst(result, data) {
        if(result != 0){
            return;
        }
        if(data == null){
            return;
        }

        this.messageID = data[0]
        var str = data[1];
        var notice_layer = new NoticeLayer();
        notice_layer.showNoticeLayer(str, this.topLayer);
    }


    private onRemoveAllEventListener() {
        this.guild_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGuildBtnClick, this);
        this.hire_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onHireBtnClick, this);
        this.job_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onJobBtnClick, this);
        this.setting_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSettingBtnClick, this);
        this.fight_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightBtnClick, this);
        this.arena_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onArenaBtnClick, this);
        this.shop_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopBtnClick, this);
    }

    public onIDClick() {
        var register_dlg = new UIRegisterDialog();
        register_dlg.showRegisterDialog(this.guiLayer);
        this.guiLayer.addElement(register_dlg);

        register_dlg.register_fast_btn.visible = false;
        register_dlg.register_fast_label.visible = false;

        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHomeView) {
            current_layer.register_dlg = register_dlg;
        }
    }

    public register_dlg:UIRegisterDialog = null;
    public sendUserRegister(name:string, psw:string) {
        Net.registerUserID(name, psw);
        Utils.showWaitAnim(this);
    }
    public finishUserRegister(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var str_error_hint = "注册失败，错误码:" + result;
            if (result == -1) {
                str_error_hint = "该用户名已经被使用，请重新输入！";
            }
            Utils.showToastInfo(this.guiLayer, str_error_hint);
            return;
        }

        this.bang_ID.visible = false;

        if (this.register_dlg != null) {
            this.register_dlg.onClose();
            this.register_dlg = null;
        }
    }

    public finishGetSystemStatus(data) {
        var system_open_text:string = Utils.getSystemOpenText(data);
        if (system_open_text.length > 0) {
            var notice_layer = new NoticeLayer();
            notice_layer.showNoticeLayer(system_open_text, this.topLayer);
        }

        for (var i = SYSTEM_INDEX.INDEX_JOB; i <= SYSTEM_INDEX.INDEX_HONOR_HIRE; i++) {
            Logic.system_status_list[i] = data[i];
        }
    }

    public finishGetSelfGuildInfo(result, data) {
        if (result != 0) {
            Logic.guild_id = -1;
            Logic.guild_name = "";
            return;
        }

        var last_guild_id:number = Logic.guild_id;

        Logic.guild_id = data[0];
        Logic.guild_name = data[1];
        Logic.guild_flag_id = data[2];
        Logic.self_guild_positon = data[4];

        if (last_guild_id == -1 && Logic.guild_id >= 0) {
            Utils.showToastInfo(this.guiLayer, "恭喜你加入"+Logic.guild_name);
        }
        
        this.top_info_bar.initPlayer();
    }

    private checkIfShowGuide() {
        if (Logic.guide_flag == GUIDE_TYPE.TEAM_MGR_HOME) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(130030, this.topLayer);
        }
        else if (Logic.guide_flag == GUIDE_TYPE.CLICK_QUEST_HOME) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(140040, this.topLayer);
        }
    }

    private onGuildBtnClick():void {
        if (Logic.isSystemLocked(SYSTEM_INDEX.INDEX_GUILD)) {
            Utils.showToastInfo(this.guiLayer, "骑士团需要通过30关才能开启!");
            return;
        }

        this.main_director.enterGuildView();
    }
    private onJoinGuildBtnClick():void {
        this.main_director.enterQuestView();
    }
    private onBottomGuildBtnClick():void {
        this.main_director.enterQuestView();
    }

    private onHireBtnClick():void {
        this.main_director.enterHireView();
    }

    private onJobBtnClick():void {
        if (Logic.isSystemLocked(SYSTEM_INDEX.INDEX_JOB)) {
            Utils.showToastInfo(this.guiLayer, "转职系统需要达到5级才能开启!");
            return;
        }

        this.main_director.enterJobView()
    }

    private onSettingBtnClick():void {
        this.main_director.enterMyTeamSetView();
    }

    private onFightBtnClick():void {
        this.main_director.enterQuestView();
    }

    private onArenaBtnClick():void {
        /*
        var anim_layer = new AwardLayer();
        anim_layer.test();
        anim_layer.showAwardAnim(this.topLayer);
        return;
        */

        if (Logic.isSystemLocked(SYSTEM_INDEX.INDEX_ARENA)) {
            Utils.showToastInfo(this.guiLayer, "竞技场需要达到10级才能进入!");
            return;
        }

        this.main_director.enterArenaView();
    }

    private onShopBtnClick():void {

        var shop = new UIShopDialog();
        shop.setData(this.guiLayer, SHOP_HOME_TAB.TAB_MONEY);
        this.guiLayer.addElement(shop);
        
        //var test_battle_view = new UITestBattleSetView();
        //test_battle_view.show(this.guiLayer);
    }
}

