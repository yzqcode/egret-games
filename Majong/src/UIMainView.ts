class UIMainView extends egret.gui.Panel {
    public label_player_name_0:egret.gui.Label;
    public label_player_money_0:egret.gui.Label;
    public label_player_name_1:egret.gui.Label;
    public label_player_money_1:egret.gui.Label;
    public label_player_name_2:egret.gui.Label;
    public label_player_money_2:egret.gui.Label;
    public label_player_name_3:egret.gui.Label;
    public label_player_money_3:egret.gui.Label;

    public btn_chi_0:egret.gui.Button;
    public btn_peng_0:egret.gui.Button;
    public btn_gang_0:egret.gui.Button;
    public btn_hu_0:egret.gui.Button;
    public btn_guo_0:egret.gui.Button;

    public btn_chi_1:egret.gui.Button;
    public btn_peng_1:egret.gui.Button;
    public btn_gang_1:egret.gui.Button;
    public btn_hu_1:egret.gui.Button;
    public btn_guo_1:egret.gui.Button;

    public btn_chi_2:egret.gui.Button;
    public btn_peng_2:egret.gui.Button;
    public btn_gang_2:egret.gui.Button;
    public btn_hu_2:egret.gui.Button;
    public btn_guo_2:egret.gui.Button;

    public btn_chi_3:egret.gui.Button;
    public btn_peng_3:egret.gui.Button;
    public btn_gang_3:egret.gui.Button;
    public btn_hu_3:egret.gui.Button;
    public btn_guo_3:egret.gui.Button;

    public btn_restart:egret.gui.Button;
    public label_restart:egret.gui.Label;

    public btn_chi_list = [];
    public btn_peng_list = [];
    public btn_gang_list = [];
    public btn_hu_list = [];
    public btn_guo_list = [];

    /*
    public current_pass_btn:egret.gui.Button;
    public current_help_btn:egret.gui.Button;
    public current_play_btn:egret.gui.Button;
    */
    
    public game_layer:GameLayer;
    public main_director:Main;

    public view_load_finish:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIMainViewSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    public show(game_layer:GameLayer, main_director:Main):void {
        this.game_layer = game_layer;
        this.main_director = main_director;

        this.width = main_director.stage.stageWidth;
        this.height = main_director.stage.stageHeight;

        this.game_layer.guiLayer.addElement(this);
    }

    private onCreationComplete():void {
        this.view_load_finish = true;

        this.btn_chi_list = [this.btn_chi_0, this.btn_chi_1, this.btn_chi_2, this.btn_chi_3];
        this.btn_peng_list = [this.btn_peng_0, this.btn_peng_1, this.btn_peng_2, this.btn_peng_3];
        this.btn_gang_list = [this.btn_gang_0, this.btn_gang_1, this.btn_gang_2, this.btn_gang_3];
        this.btn_hu_list = [this.btn_hu_0, this.btn_hu_1, this.btn_hu_2, this.btn_hu_3];
        this.btn_guo_list = [this.btn_guo_0, this.btn_guo_1, this.btn_guo_2, this.btn_guo_3];

        this.label_restart.visible = false;
        this.btn_restart.visible = false;

        this.setPlayerName();
        this.refreshPlayerMoney();

        this.hideAllPlayCardsButtons();

        for (var i = 0; i < 4; i++) {
            this.btn_chi_list[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerChi, this);
            this.btn_peng_list[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerPeng, this);
            this.btn_gang_list[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerGang, this);
            this.btn_hu_list[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerHu, this);
            this.btn_guo_list[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerPass, this);
        }

        this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartNewGame, this);
    }

    private setPlayerName() {
        this.label_player_name_0.text = this.game_layer.player_list[0].name;
        this.label_player_name_1.text = this.game_layer.player_list[1].name;
        this.label_player_name_2.text = this.game_layer.player_list[2].name;
        this.label_player_name_3.text = this.game_layer.player_list[3].name;
    }

    public refreshPlayerMoney() {
        this.label_player_money_0.text = this.game_layer.player_list[0].money;
        this.label_player_money_1.text = this.game_layer.player_list[1].money;
        this.label_player_money_2.text = this.game_layer.player_list[2].money;
        this.label_player_money_3.text = this.game_layer.player_list[3].money;
    }

    public hideAllPlayCardsButtons() {
        if (this.view_load_finish == false) {
            return;
        }

        for (var i = 0; i < 4; i++) {
            this.btn_chi_list[i].visible = false;
            this.btn_peng_list[i].visible = false;
            this.btn_gang_list[i].visible = false;
            this.btn_hu_list[i].visible = false;
            this.btn_guo_list[i].visible = false;
        }
    }

    public showPlayerWinBtn(player_index:number) {
        this.btn_hu_list[player_index].visible = true;
        this.btn_guo_list[player_index].visible = true;
    }

    public showPlayerGangBtn(player_index:number) {
        this.btn_gang_list[player_index].visible = true;
        this.btn_guo_list[player_index].visible = true;
    }

    public showPlayerChiBtn(player_index:number) {
        this.btn_chi_list[player_index].visible = true;
        this.btn_guo_list[player_index].visible = true;
    }

    public showPlayerPengBtn(player_index:number) {
        this.btn_peng_list[player_index].visible = true;
        this.btn_guo_list[player_index].visible = true;
    }

    private onPlayerChi(evt) {
        this.game_layer.onPlayerChi();
    }
    private onPlayerPeng(evt) {
        this.game_layer.onPlayerPeng();
    }
    private onPlayerGang(evt) {
        this.game_layer.onPlayerGang();
    }
    private onPlayerHu(evt) {
        this.game_layer.onPlayerHu();
    }
    private onPlayerPass(evt) {
        this.game_layer.onPlayerPass();
    }

    public showStartNewGameBtn() {
        this.hideAllPlayCardsButtons();

        this.btn_restart.visible = true;
        this.label_restart.visible = true;
    }

    public onStartNewGame() {
        this.btn_restart.visible = false;
        this.label_restart.visible = false;

        this.game_layer.startNewGame();
    }
}

