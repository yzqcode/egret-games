class UIMainView extends egret.gui.Panel {

    public label_player_name_1:egret.gui.Label;
    public label_player_money_1:egret.gui.Label;
    public label_player_name_2:egret.gui.Label;
    public label_player_money_2:egret.gui.Label;
    public label_player_name_3:egret.gui.Label;
    public label_player_money_3:egret.gui.Label;

    public last_card_1:egret.gui.UIAsset;
    public last_card_2:egret.gui.UIAsset;
    public last_card_3:egret.gui.UIAsset;

    public btn_call_one_0:egret.gui.Button;
    public btn_call_two_0:egret.gui.Button;
    public btn_call_three_0:egret.gui.Button;
    public btn_no_call_0:egret.gui.Button;

    public btn_call_one_1:egret.gui.Button;
    public btn_call_two_1:egret.gui.Button;
    public btn_call_three_1:egret.gui.Button;
    public btn_no_call_1:egret.gui.Button;

    public btn_call_one_2:egret.gui.Button;
    public btn_call_two_2:egret.gui.Button;
    public btn_call_three_2:egret.gui.Button;
    public btn_no_call_2:egret.gui.Button;

    public landlord_0:egret.gui.UIAsset;
    public landlord_1:egret.gui.UIAsset;
    public landlord_2:egret.gui.UIAsset;

    public btn_pass_0:egret.gui.Button;
    public btn_help_0:egret.gui.Button;
    public btn_play_0:egret.gui.Button;

    public btn_pass_1:egret.gui.Button;
    public btn_help_1:egret.gui.Button;
    public btn_play_1:egret.gui.Button;

    public btn_pass_2:egret.gui.Button;
    public btn_help_2:egret.gui.Button;
    public btn_play_2:egret.gui.Button;

    public btn_restart:egret.gui.Button;

    public current_pass_btn:egret.gui.Button;
    public current_help_btn:egret.gui.Button;
    public current_play_btn:egret.gui.Button;
    
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
    }

    private setPlayerName() {
        this.label_player_name_1.text = this.game_layer.player_list[0].name;
        this.label_player_name_2.text = this.game_layer.player_list[1].name;
        this.label_player_name_3.text = this.game_layer.player_list[2].name;
    }

    public refreshPlayerMoney() {
        this.label_player_money_1.text = this.game_layer.player_list[0].money;
        this.label_player_money_2.text = this.game_layer.player_list[1].money;
        this.label_player_money_3.text = this.game_layer.player_list[2].money;
    }

    public hideLastThreeCard() {
        if (this.view_load_finish == false) {
            return;
        }

        this.last_card_1.visible = false;
        this.last_card_2.visible = false;
        this.last_card_3.visible = false;
    }

    public showLastThreeCard() {
        if (this.view_load_finish == false) {
            return;
        }

        this.last_card_1.visible = true;
        this.last_card_2.visible = true;
        this.last_card_3.visible = true;

        this.last_card_1.source = this.game_layer.all_cards[0].front_img_name;
        this.last_card_2.source = this.game_layer.all_cards[1].front_img_name;
        this.last_card_3.source = this.game_layer.all_cards[2].front_img_name;
    }

    public hideAllLandLordIcon() {
        if (this.view_load_finish == false) {
            return;
        }

        this.landlord_0.visible = false;
        this.landlord_1.visible = false;
        this.landlord_2.visible = false;
    }

    public showLandLordIcon() {
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
    }

    public hideAllCallButtons() {
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
    }

    public hideAllPlayCardsButtons() {
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
    }

    private onPlayerOneCall(evt) {
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
    }
    private onPlayerTwoCall(evt) {
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
    }
    private onPlayerThreeCall(evt) {
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
    }

    public showNextPlayerCallBtn(player_index:number) {
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
    }

    public showNextPlayerPlayBtns(player_index:number) {
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
    }

    public setCurrentPlayBtnEnable(enbale:boolean) {
        if (this.current_play_btn == null) {
            return;
        }
        this.current_play_btn.enabled = enbale;
    }

    private onPlayerOnePass(evt) {
        this.game_layer.playerPassCard(0);
    }

    private onPlayerTwoPass(evt) {
        this.game_layer.playerPassCard(1);
    }

    private onPlayerThreePass(evt) {
        this.game_layer.playerPassCard(2);
    }

    private onPlayerOnePlay(evt) {
        this.game_layer.playerPlayCards(0);
    }

    private onPlayerTwoPlay(evt) {
        this.game_layer.playerPlayCards(1);
    }

    private onPlayerThreePlay(evt) {
        this.game_layer.playerPlayCards(2);
    }

    private onPlayerOneHelp(evt) {
        
    }
    private onPlayerTwoHelp(evt) {
        
    }
    private onPlayerThreeHelp(evt) {
        
    }

    public showStartNewGameBtn() {
        this.hideLastThreeCard();
        this.hideAllCallButtons();
        this.hideAllLandLordIcon();
        this.hideAllPlayCardsButtons();

        this.btn_restart.visible = true;
    }

    public onStartNewGame() {
        this.btn_restart.visible = false;

        this.game_layer.startNewGame();
    }
}

