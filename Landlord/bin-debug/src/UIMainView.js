var UIMainView = (function (_super) {
    __extends(UIMainView, _super);
    function UIMainView() {
        _super.call(this);
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
        this.btn_restart.visible = false;
        this.setPlayerName();
        this.refreshPlayerMoney();
        this.hideLastThreeCard();
        this.hideAllCallButtons();
        this.hideAllLandLordIcon();
        this.hideAllPlayCardsButtons();
        this.btn_call_one_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerOneCall, this);
        this.btn_call_two_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerOneCall, this);
        this.btn_call_three_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerOneCall, this);
        this.btn_no_call_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerOneCall, this);
        this.btn_call_one_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerTwoCall, this);
        this.btn_call_two_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerTwoCall, this);
        this.btn_call_three_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerTwoCall, this);
        this.btn_no_call_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerTwoCall, this);
        this.btn_call_one_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerThreeCall, this);
        this.btn_call_two_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerThreeCall, this);
        this.btn_call_three_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerThreeCall, this);
        this.btn_no_call_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerThreeCall, this);
        this.btn_pass_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerOnePass, this);
        this.btn_help_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerOneHelp, this);
        this.btn_play_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerOnePlay, this);
        this.btn_pass_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerTwoPass, this);
        this.btn_help_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerTwoHelp, this);
        this.btn_play_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerTwoPlay, this);
        this.btn_pass_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerThreePass, this);
        this.btn_help_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerThreeHelp, this);
        this.btn_play_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayerThreePlay, this);
        this.btn_restart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartNewGame, this);
    };
    __egretProto__.setPlayerName = function () {
        this.label_player_name_1.text = this.game_layer.player_list[0].name;
        this.label_player_name_2.text = this.game_layer.player_list[1].name;
        this.label_player_name_3.text = this.game_layer.player_list[2].name;
    };
    __egretProto__.refreshPlayerMoney = function () {
        this.label_player_money_1.text = this.game_layer.player_list[0].money;
        this.label_player_money_2.text = this.game_layer.player_list[1].money;
        this.label_player_money_3.text = this.game_layer.player_list[2].money;
    };
    __egretProto__.hideLastThreeCard = function () {
        if (this.view_load_finish == false) {
            return;
        }
        this.last_card_1.visible = false;
        this.last_card_2.visible = false;
        this.last_card_3.visible = false;
    };
    __egretProto__.showLastThreeCard = function () {
        if (this.view_load_finish == false) {
            return;
        }
        this.last_card_1.visible = true;
        this.last_card_2.visible = true;
        this.last_card_3.visible = true;
        this.last_card_1.source = this.game_layer.all_cards[0].front_img_name;
        this.last_card_2.source = this.game_layer.all_cards[1].front_img_name;
        this.last_card_3.source = this.game_layer.all_cards[2].front_img_name;
    };
    __egretProto__.hideAllLandLordIcon = function () {
        if (this.view_load_finish == false) {
            return;
        }
        this.landlord_0.visible = false;
        this.landlord_1.visible = false;
        this.landlord_2.visible = false;
    };
    __egretProto__.showLandLordIcon = function () {
        if (this.view_load_finish == false) {
            return;
        }
        if (this.game_layer.landlord_player_index < 0) {
            return;
        }
        if (this.game_layer.landlord_player_index == 0) {
            this.landlord_0.visible = true;
        }
        else if (this.game_layer.landlord_player_index == 0) {
            this.landlord_1.visible = true;
        }
        else {
            this.landlord_2.visible = true;
        }
    };
    __egretProto__.hideAllCallButtons = function () {
        if (this.view_load_finish == false) {
            return;
        }
        this.btn_call_one_0.visible = false;
        this.btn_call_two_0.visible = false;
        this.btn_call_three_0.visible = false;
        this.btn_no_call_0.visible = false;
        this.btn_call_one_1.visible = false;
        this.btn_call_two_1.visible = false;
        this.btn_call_three_1.visible = false;
        this.btn_no_call_1.visible = false;
        this.btn_call_one_2.visible = false;
        this.btn_call_two_2.visible = false;
        this.btn_call_three_2.visible = false;
        this.btn_no_call_2.visible = false;
    };
    __egretProto__.hideAllPlayCardsButtons = function () {
        if (this.view_load_finish == false) {
            return;
        }
        this.btn_pass_0.visible = false;
        this.btn_help_0.visible = false;
        this.btn_play_0.visible = false;
        this.btn_pass_1.visible = false;
        this.btn_help_1.visible = false;
        this.btn_play_1.visible = false;
        this.btn_pass_2.visible = false;
        this.btn_help_2.visible = false;
        this.btn_play_2.visible = false;
    };
    __egretProto__.onPlayerOneCall = function (evt) {
        var call_num = 0;
        if (evt.target == this.btn_call_one_0) {
            call_num = 1;
        }
        else if (evt.target == this.btn_call_two_0) {
            call_num = 2;
        }
        else if (evt.target == this.btn_call_three_0) {
            call_num = 3;
        }
        else if (evt.target == this.btn_no_call_0) {
            call_num = 0;
        }
        this.game_layer.playerCallLandlord(0, call_num);
    };
    __egretProto__.onPlayerTwoCall = function (evt) {
        var call_num = 0;
        if (evt.target == this.btn_call_one_1) {
            call_num = 1;
        }
        else if (evt.target == this.btn_call_two_1) {
            call_num = 2;
        }
        else if (evt.target == this.btn_call_three_1) {
            call_num = 3;
        }
        else if (evt.target == this.btn_no_call_1) {
            call_num = 0;
        }
        this.game_layer.playerCallLandlord(1, call_num);
    };
    __egretProto__.onPlayerThreeCall = function (evt) {
        var call_num = 0;
        if (evt.target == this.btn_call_one_2) {
            call_num = 1;
        }
        else if (evt.target == this.btn_call_two_2) {
            call_num = 2;
        }
        else if (evt.target == this.btn_call_three_2) {
            call_num = 3;
        }
        else if (evt.target == this.btn_no_call_2) {
            call_num = 0;
        }
        this.game_layer.playerCallLandlord(2, call_num);
    };
    __egretProto__.showNextPlayerCallBtn = function (player_index) {
        this.hideAllCallButtons();
        if (player_index == 0) {
            if (this.game_layer.base_money <= 0) {
                this.btn_call_one_0.visible = true;
                this.btn_call_two_0.visible = true;
                this.btn_call_three_0.visible = true;
                this.btn_no_call_0.visible = true;
            }
            else if (this.game_layer.base_money == 1) {
                this.btn_call_two_0.visible = true;
                this.btn_call_three_0.visible = true;
                this.btn_no_call_0.visible = true;
            }
            else {
                this.btn_call_three_0.visible = true;
                this.btn_no_call_0.visible = true;
            }
        }
        else if (player_index == 1) {
            if (this.game_layer.base_money <= 0) {
                this.btn_call_one_1.visible = true;
                this.btn_call_two_1.visible = true;
                this.btn_call_three_1.visible = true;
                this.btn_no_call_1.visible = true;
            }
            else if (this.game_layer.base_money == 1) {
                this.btn_call_two_1.visible = true;
                this.btn_call_three_1.visible = true;
                this.btn_no_call_1.visible = true;
            }
            else {
                this.btn_call_three_1.visible = true;
                this.btn_no_call_1.visible = true;
            }
        }
        else {
            if (this.game_layer.base_money <= 0) {
                this.btn_call_one_2.visible = true;
                this.btn_call_two_2.visible = true;
                this.btn_call_three_2.visible = true;
                this.btn_no_call_2.visible = true;
            }
            else if (this.game_layer.base_money == 1) {
                this.btn_call_two_2.visible = true;
                this.btn_call_three_2.visible = true;
                this.btn_no_call_2.visible = true;
            }
            else {
                this.btn_call_three_2.visible = true;
                this.btn_no_call_2.visible = true;
            }
        }
    };
    __egretProto__.showNextPlayerPlayBtns = function (player_index) {
        this.hideAllPlayCardsButtons();
        if (player_index == 0) {
            this.current_pass_btn = this.btn_pass_0;
            this.current_help_btn = this.btn_help_0;
            this.current_play_btn = this.btn_play_0;
        }
        else if (player_index == 1) {
            this.current_pass_btn = this.btn_pass_1;
            this.current_help_btn = this.btn_help_1;
            this.current_play_btn = this.btn_play_1;
        }
        else {
            this.current_pass_btn = this.btn_pass_2;
            this.current_help_btn = this.btn_help_2;
            this.current_play_btn = this.btn_play_2;
        }
        this.current_pass_btn.visible = true;
        this.current_help_btn.visible = true;
        this.current_play_btn.visible = true;
        this.current_help_btn.enabled = true;
        this.current_play_btn.enabled = false;
        if (this.game_layer.currentPlayerCanPass()) {
            this.current_pass_btn.enabled = true;
        }
        else {
            this.current_pass_btn.enabled = false;
        }
    };
    __egretProto__.setCurrentPlayBtnEnable = function (enbale) {
        if (this.current_play_btn == null) {
            return;
        }
        this.current_play_btn.enabled = enbale;
    };
    __egretProto__.onPlayerOnePass = function (evt) {
        this.game_layer.playerPassCard(0);
    };
    __egretProto__.onPlayerTwoPass = function (evt) {
        this.game_layer.playerPassCard(1);
    };
    __egretProto__.onPlayerThreePass = function (evt) {
        this.game_layer.playerPassCard(2);
    };
    __egretProto__.onPlayerOnePlay = function (evt) {
        this.game_layer.playerPlayCards(0);
    };
    __egretProto__.onPlayerTwoPlay = function (evt) {
        this.game_layer.playerPlayCards(1);
    };
    __egretProto__.onPlayerThreePlay = function (evt) {
        this.game_layer.playerPlayCards(2);
    };
    __egretProto__.onPlayerOneHelp = function (evt) {
    };
    __egretProto__.onPlayerTwoHelp = function (evt) {
    };
    __egretProto__.onPlayerThreeHelp = function (evt) {
    };
    __egretProto__.showStartNewGameBtn = function () {
        this.hideLastThreeCard();
        this.hideAllCallButtons();
        this.hideAllLandLordIcon();
        this.hideAllPlayCardsButtons();
        this.btn_restart.visible = true;
    };
    __egretProto__.onStartNewGame = function () {
        this.btn_restart.visible = false;
        this.game_layer.startNewGame();
    };
    return UIMainView;
})(egret.gui.Panel);
UIMainView.prototype.__class__ = "UIMainView";
