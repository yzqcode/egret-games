var UIMainView = (function (_super) {
    __extends(UIMainView, _super);
    function UIMainView() {
        _super.call(this);
        this.btn_chi_list = [];
        this.btn_peng_list = [];
        this.btn_gang_list = [];
        this.btn_hu_list = [];
        this.btn_guo_list = [];
        this.view_load_finish = false;
        this.skinName = "skins.UIMainViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIMainView.prototype;
    __egretProto__.show = function (game_layer, main_director) {
        this.game_layer = game_layer;
        this.main_director = main_director;
        this.width = main_director.stage.stageWidth;
        this.height = main_director.stage.stageHeight;
        this.game_layer.guiLayer.addElement(this);
    };
    __egretProto__.onCreationComplete = function () {
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
    };
    __egretProto__.setPlayerName = function () {
        this.label_player_name_0.text = this.game_layer.player_list[0].name;
        this.label_player_name_1.text = this.game_layer.player_list[1].name;
        this.label_player_name_2.text = this.game_layer.player_list[2].name;
        this.label_player_name_3.text = this.game_layer.player_list[3].name;
    };
    __egretProto__.refreshPlayerMoney = function () {
        this.label_player_money_0.text = this.game_layer.player_list[0].money;
        this.label_player_money_1.text = this.game_layer.player_list[1].money;
        this.label_player_money_2.text = this.game_layer.player_list[2].money;
        this.label_player_money_3.text = this.game_layer.player_list[3].money;
    };
    __egretProto__.hideAllPlayCardsButtons = function () {
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
    };
    __egretProto__.showPlayerWinBtn = function (player_index) {
        this.btn_hu_list[player_index].visible = true;
        this.btn_guo_list[player_index].visible = true;
    };
    __egretProto__.showPlayerGangBtn = function (player_index) {
        this.btn_gang_list[player_index].visible = true;
        this.btn_guo_list[player_index].visible = true;
    };
    __egretProto__.showPlayerChiBtn = function (player_index) {
        this.btn_chi_list[player_index].visible = true;
        this.btn_guo_list[player_index].visible = true;
    };
    __egretProto__.showPlayerPengBtn = function (player_index) {
        this.btn_peng_list[player_index].visible = true;
        this.btn_guo_list[player_index].visible = true;
    };
    __egretProto__.onPlayerChi = function (evt) {
        this.game_layer.onPlayerChi();
    };
    __egretProto__.onPlayerPeng = function (evt) {
        this.game_layer.onPlayerPeng();
    };
    __egretProto__.onPlayerGang = function (evt) {
        this.game_layer.onPlayerGang();
    };
    __egretProto__.onPlayerHu = function (evt) {
        this.game_layer.onPlayerHu();
    };
    __egretProto__.onPlayerPass = function (evt) {
        this.game_layer.onPlayerPass();
    };
    __egretProto__.showStartNewGameBtn = function () {
        this.hideAllPlayCardsButtons();
        this.btn_restart.visible = true;
        this.label_restart.visible = true;
    };
    __egretProto__.onStartNewGame = function () {
        this.btn_restart.visible = false;
        this.label_restart.visible = false;
        this.game_layer.startNewGame();
    };
    return UIMainView;
})(egret.gui.Panel);
UIMainView.prototype.__class__ = "UIMainView";
