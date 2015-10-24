class UISelectKnightView extends egret.gui.Panel {

    public label_desc_0:egret.gui.Label;
    public label_desc_1:egret.gui.Label;
    public label_desc_2:egret.gui.Label;
    public btn_select_0:egret.gui.Button;
    public btn_select_1:egret.gui.Button;
    public btn_select_2:egret.gui.Button;
    public player_data_0:egret.gui.UIAsset;
    public player_data_1:egret.gui.UIAsset;
    public player_data_2:egret.gui.UIAsset;
    public btn_add_0:egret.gui.Button;
    public btn_add_1:egret.gui.Button;
    public btn_add_2:egret.gui.Button;
    public new_label_0:egret.gui.Label;
    public new_label_1:egret.gui.Label;
    public new_label_2:egret.gui.Label;
    public name_0:egret.gui.Label;
    public name_1:egret.gui.Label;
    public name_2:egret.gui.Label;

    public player_desc_list = [];
    public player_select_btn_list = [];
    public btn_add_list = [];
    public new_label_list = [];
    public name_list = [];
    public player_data_list = [];
    public player_data_event_list = [];

    public label_new:egret.gui.Label;

    public ui_wait:UIWaitView;
    
    public topLayer:egret.DisplayObjectContainer;
    public guiLayer:egret.gui.UIStage;
    public main_director:Main;

    public constructor(){
        super();
        this.skinName = "skins.UISelectKnightViewSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    public showOnMainLayer(main_director:Main):void {
        this.width = G.win_width;
        this.height = G.win_height;

        this.main_director = main_director;

        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);

        this.guiLayer.addElement(this);

        this.topLayer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.topLayer, 1);
    }
    public removeFromMainLayer():void {
        this.main_director.stage.removeChild(this.guiLayer);
        this.main_director.stage.removeChild(this.topLayer);

        this.removeListener();
    }

    private removeListener() {
        this.player_data_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.player_data_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.player_data_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);

        this.btn_select_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.btn_select_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.btn_select_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);

        this.btn_add_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
        this.btn_add_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
        this.btn_add_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
    }

    private onCreationComplete():void {
        this.removeEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
        
        this.main_director.closeGateAnimLayer();

        this.player_desc_list = [this.label_desc_0, this.label_desc_1, this.label_desc_2];
        this.player_select_btn_list = [this.btn_select_0, this.btn_select_1, this.btn_select_2];
        this.btn_add_list = [this.btn_add_0, this.btn_add_1,this.btn_add_2];
        this.new_label_list = [this.new_label_0, this.new_label_1, this.new_label_2];
        this.name_list = [this.name_0, this.name_1, this.name_2];

        this.player_data_list = [this.player_data_0, this.player_data_1, this.player_data_2];
        this.player_data_event_list = [this.onSelectKnigth1, this.onSelectKnigth2, this.onSelectKnigth3];
        
        this.hideAllPlayerDesc();
        this.initKnightList();

        this.btn_select_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.btn_select_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.btn_select_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);

        this.btn_add_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
        this.btn_add_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
        this.btn_add_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCreateNewKnight, this);
    }

    private hideAllPlayerDesc() {
        this.label_desc_0.visible = false;
        this.label_desc_1.visible = false;
        this.label_desc_2.visible = false;
        this.btn_select_0.visible = false;
        this.btn_select_1.visible = false;
        this.btn_select_2.visible = false;
        this.name_0.visible = false;
        this.name_1.visible = false;
        this.name_2.visible = false;
    }

    private showPlayerData(index) {
        if (index >= 3) {
            return;
        }
        
        if (Logic.player_datas[index] == null) {
            return;
        }

        this.player_desc_list[index].visible = true;
        this.player_select_btn_list[index].visible = true;

        this.player_data_list[index].addEventListener(egret.TouchEvent.TOUCH_TAP, this.player_data_event_list[index], this);
        
        this.btn_add_list[index].visible = false;
        this.new_label_list[index].visible = false;
        this.name_list[index].visible = true;

        var player_data = Logic.player_datas[index];
        this.player_desc_list[index].text = " level:" + player_data.knight_level;
        this.name_list[index].text = player_data.knight_name;

        var data_icon = this.player_data_0;
        if (index == 1) {
            data_icon = this.player_data_1;
        }
        else if (index == 2) {
            data_icon = this.player_data_2;
        }

        /*var knight_dragon = Utils.createDragonBone(Utils.getKnightDragonName(player_data.knight_type));
        var dd = knight_dragon.getDisplay()
        dd.x = btn.x + dd.width/2;
        dd.y = btn.y - dd.height;
        this.guiLayer.addElement(dd);
        knight_dragon.animation.gotoAndPlay("zhanli");*/

        data_icon.source = Utils.getKnightBigImgName(player_data.knight_type, true);
    }
    private initKnightList() {
        for (var i = 0; i < Logic.player_datas.length; i++)
        {
            this.showPlayerData(i);
        }

        if (Logic.player_datas.length == 0) {
            this.btn_add_1.visible = false;
            this.btn_add_2.visible = false;

            this.new_label_1.visible = false;
            this.new_label_2 .visible = false;
        }
        if (Logic.player_datas.length == 1) {
            this.btn_add_2.visible = false;
            this.new_label_2.visible = false;
        }
    }

    private disableAllBtns() {
        this.btn_select_0.touchEnabled = false;
        this.btn_select_1.touchEnabled = false;
        this.btn_select_2.touchEnabled = false;
    }
    private enableAllBtns() {
        this.btn_select_0.touchEnabled = true;
        this.btn_select_1.touchEnabled = true;
        this.btn_select_2.touchEnabled = true;
    }

    private onSelectKnigth1():void {
        Net.choosePlayer(0);

        Utils.showWaitAnim(this, this.onConnectServerTimeOut);
        this.disableAllBtns();
    }

    private onSelectKnigth2():void {
        Net.choosePlayer(1);

        Utils.showWaitAnim(this, this.onConnectServerTimeOut);
        this.disableAllBtns();
    }

    private onSelectKnigth3():void {
        Net.choosePlayer(2);

        Utils.showWaitAnim(this, this.onConnectServerTimeOut);
        this.disableAllBtns();
    }

    private onCreateNewKnight():void {
        // Enter create knight view.
        this.main_director.enterCreateKnightView();
    }

    public onConnectServerTimeOut() {
        this.enableAllBtns();
    }

    public finishChooseKnight(result, data, guild_id=0, guild_name="") {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "选择人物失败，错误码: " + result);

            this.enableAllBtns();
            return;
        }

        Logic.initPlayerBaseDatas(data);
        Logic.guild_id = guild_id;
        Logic.guild_name = guild_name;

        if (Logic.guide_flag < GUIDE_TYPE.VILLAGE_HIRE_HOME) {
            G.main_director.enterQuestView();
        }
        else if (Logic.guide_flag < GUIDE_TYPE.TEAM_MGR_HOME) {
            G.main_director.enterHireView();
        }
        else if (Logic.guide_flag == GUIDE_TYPE.TEAM_MGR_HOME) {
            G.main_director.enterHomeView();
        }
        else if (Logic.guide_flag < GUIDE_TYPE.CLICK_QUEST_HOME) {
            G.main_director.enterMyTeamSetView();
        }
        else if (Logic.guide_flag == GUIDE_TYPE.CLICK_QUEST_HOME) {
            G.main_director.enterHomeView();
        }
        else if (Logic.guide_flag < GUIDE_TYPE.GUIDE_END) {
            G.main_director.enterQuestView();
        }
        else {
            G.main_director.enterHomeView();
        }
    }
}

