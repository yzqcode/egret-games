class AwardItem {
    public bet_type:number;
    public bet_award_factor:number;
    public bet_possible_number:number;

    public light:egret.gui.UIAsset;
}

enum BET_STATUS
{
    BET_COIN_PREV = 1, BET_COIN_ING, BET_BIG_SMALL,
    BETING_ANIM, BETING_BIG_SMALL_ANIM
}

class UIMainView extends egret.gui.Panel {

    public label_win_coin:egret.gui.Label;
    public label_current_coins:egret.gui.Label;
    public label_bet_number:egret.gui.Label;

    public btn_1:egret.gui.UIAsset;
    public btn_2:egret.gui.UIAsset;
    public btn_3:egret.gui.UIAsset;
    public btn_4:egret.gui.UIAsset;
    public btn_5:egret.gui.UIAsset;
    public btn_6:egret.gui.UIAsset;
    public btn_7:egret.gui.UIAsset;
    public btn_8:egret.gui.UIAsset;
    public bet_coin_1:egret.gui.Label;
    public bet_coin_2:egret.gui.Label;
    public bet_coin_3:egret.gui.Label;
    public bet_coin_4:egret.gui.Label;
    public bet_coin_5:egret.gui.Label;
    public bet_coin_6:egret.gui.Label;
    public bet_coin_7:egret.gui.Label;
    public bet_coin_8:egret.gui.Label;

    public left_arrow_btn:egret.gui.UIAsset;
    public right_arrow_btn:egret.gui.UIAsset;
    public bet_small_btn:egret.gui.UIAsset;
    public bet_big_btn:egret.gui.UIAsset;
    public start_btn:egret.gui.UIAsset;

    public light_1:egret.gui.UIAsset;
    public light_2:egret.gui.UIAsset;
    public light_3:egret.gui.UIAsset;
    public light_4:egret.gui.UIAsset;
    public light_5:egret.gui.UIAsset;
    public light_6:egret.gui.UIAsset;
    public light_7:egret.gui.UIAsset;
    public light_8:egret.gui.UIAsset;
    public light_9:egret.gui.UIAsset;
    public light_10:egret.gui.UIAsset;
    public light_11:egret.gui.UIAsset;
    public light_12:egret.gui.UIAsset;
    public light_13:egret.gui.UIAsset;
    public light_14:egret.gui.UIAsset;
    public light_15:egret.gui.UIAsset;
    public light_16:egret.gui.UIAsset;
    public light_17:egret.gui.UIAsset;
    public light_18:egret.gui.UIAsset;
    public light_19:egret.gui.UIAsset;
    public light_20:egret.gui.UIAsset;
    public light_21:egret.gui.UIAsset;
    public light_22:egret.gui.UIAsset;
    public light_23:egret.gui.UIAsset;
    public light_24:egret.gui.UIAsset;
    
    public guiLayer:egret.gui.UIStage;
    public main_director:Main;

    public bet_status:BET_STATUS;

    private current_coins:number = 0;
    private last_win_coin:number = 0;
    private curent_win_coin:number = 0;
    private bet_big:boolean = false;

    private last_bet_index:number = 0;
    private next_bet_index:number = 0;

    private bet_coin_list = [0, 0, 0, 0, 0, 0, 0, 0];
    private bet_award_item_list = [];

    public constructor() {
        super();
        this.skinName = "skins.UIMainViewSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    public showOnMainLayer(main_director:Main):void {
        this.main_director = main_director;

        this.width = main_director.stage.stageWidth;
        this.height = main_director.stage.stageHeight;

        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);

        this.guiLayer.addElement(this);
    }
    public removeFromMainLayer():void {
        this.main_director.stage.removeChild(this.guiLayer);
    }

    private onCreationComplete():void {
        this.hideAllBetLight();
        this.initBetAwardItemList();
        this.initBetBaseDatas();
        this.registerBtnListeners();            
    }

    private onLeftBtnClick() {
        if (this.bet_status != BET_STATUS.BET_BIG_SMALL) {
            return;
        }

        if (this.current_coins == 0) {
            return;
        }

        if (this.curent_win_coin >= 2*this.last_win_coin) {
            return;
        }

        var last_coin = this.curent_win_coin;
        this.curent_win_coin *= 2;
        if (this.curent_win_coin >= 2*this.last_win_coin) {
            this.curent_win_coin = 2*this.last_win_coin;
        }

        var add_coin = this.curent_win_coin - last_coin;
        this.current_coins -= add_coin;
        if (this.current_coins < 0) {
            this.curent_win_coin += this.current_coins;
            this.current_coins = 0;
        }

        this.label_win_coin.text = "" + this.curent_win_coin;
        this.label_current_coins.text = "" + this.current_coins;
    }
    private onRightBtnClick() {
        if (this.bet_status != BET_STATUS.BET_BIG_SMALL) {
            return;
        }

        if (this.curent_win_coin <= 0) {
            return;
        }

        var last_coin = this.curent_win_coin;
        this.curent_win_coin = Math.round(this.curent_win_coin/2);
        if (this.curent_win_coin <= 0) {
            this.curent_win_coin = 0;
        }
        this.label_win_coin.text = "" + this.curent_win_coin;

        var add_coin = last_coin - this.curent_win_coin;
        this.current_coins += add_coin;
        this.label_current_coins.text = "" + this.current_coins;
    }
    private onSmallBtnClick() {
        if (this.bet_status != BET_STATUS.BET_BIG_SMALL) {
            return;
        }

        if (this.curent_win_coin <= 0) {
            return;
        }

        // Bet small
        this.bet_big = false;
        this.startBetBigSmall();
    }
    private onBigBtnClick() {
        if (this.bet_status != BET_STATUS.BET_BIG_SMALL) {
            return;
        }

        if (this.curent_win_coin <= 0) {
            return;
        }

        // Bet big
        this.bet_big = true;
        this.startBetBigSmall();
    }

    public big_small_timer:egret.Timer;
    private big_small_anim_times:number;
    private endBetBigSmall() {
        this.big_small_anim_times--;
        if (this.big_small_anim_times == 0) {
            // End
            var bet_num = this.randInt(1, 14);
            if (bet_num >= 10) {
                this.label_bet_number.text = "" + bet_num;
            }
            else {
                this.label_bet_number.text = "0" + bet_num;
            }

            var is_big = false;
            if (bet_num > 7) {
                is_big = true;
            }

            if (this.bet_big == is_big) {
                // Win
                this.last_win_coin *= 2;
                this.curent_win_coin = this.last_win_coin;
                this.label_win_coin.text = "" + this.curent_win_coin;

                this.bet_status = BET_STATUS.BET_BIG_SMALL;
            }
            else {
                // Lose
                this.last_win_coin = 0;
                this.curent_win_coin = 0;
                this.label_win_coin.text = "0";

                this.bet_status = BET_STATUS.BET_COIN_PREV;
            }
        }
        else {
            var bet_num = this.randInt(1, 14);
            if (bet_num >= 10) {
                this.label_bet_number.text = "" + bet_num;
            }
            else {
                this.label_bet_number.text = "0" + bet_num;
            }
        }
    }
    private startBetBigSmall() {
        // Start to bet big small animation
        this.bet_status = BET_STATUS.BETING_BIG_SMALL_ANIM;

        this.big_small_anim_times = 40;

        this.big_small_timer = new egret.Timer(20, this.big_small_anim_times);
        this.big_small_timer.addEventListener(egret.TimerEvent.TIMER, this.endBetBigSmall, this);
        this.big_small_timer.start()
    }

    private onStartBtnClick() {
        if (this.bet_status == BET_STATUS.BETING_BIG_SMALL_ANIM
                || this.bet_status == BET_STATUS.BETING_ANIM) {
            return;
        }
        
        if (this.bet_status == BET_STATUS.BET_BIG_SMALL) {
            this.bet_status = BET_STATUS.BET_COIN_PREV;

            this.current_coins += this.curent_win_coin;
            this.label_current_coins.text = "" + this.current_coins;

            this.last_win_coin = 0;
            this.curent_win_coin = 0;
            this.label_win_coin.text = "0";

            return;
        }

        if (this.bet_status == BET_STATUS.BET_COIN_PREV
                || this.bet_status == BET_STATUS.BET_COIN_ING) {
            var bet_coin_sum = 0;
            for (var i = 0; i < 8; i++) {
                bet_coin_sum += this.bet_coin_list[i];
            }

            if (bet_coin_sum == 0) {
                return;
            }

            if (this.bet_status == BET_STATUS.BET_COIN_PREV) {
                if (this.current_coins < bet_coin_sum) {
                    console.log("---- 需要充值了");
                    return;
                }

                this.current_coins -= bet_coin_sum;
                this.label_current_coins.text = "" + this.current_coins;
            }
        }

        // Start to bet
        var bet_num = this.randInt(1, 10000);
        this.next_bet_index = 0;
        console.log("============ start bet_num: ", bet_num);
        for (var i = 0; i < this.bet_award_item_list.length; i++) {
            bet_num -= this.bet_award_item_list[i].bet_possible_number;
            console.log(" " + i + " : " + bet_num);

            if (bet_num <= 0) {
                this.next_bet_index = i;
                console.log("   ****   this.next_bet_index: " + this.next_bet_index);
                break;
            }
        }

        // TODO:Modify for test
        //this.next_bet_index = 21;

        if (this.last_bet_index == 9 || this.last_bet_index == 21) {
            this.hideAllBetLight();
        }

        this.startBetingAnim();
    }

    private onBetBtnClick(evt) {
        if (this.bet_status == BET_STATUS.BETING_BIG_SMALL_ANIM
                || this.bet_status == BET_STATUS.BETING_ANIM) {
            return;
        }

        if (this.bet_status == BET_STATUS.BET_BIG_SMALL
                || this.bet_status == BET_STATUS.BET_COIN_PREV) {
            this.clearAllBetCoins();
        }

        if (this.current_coins <= 0) {
            console.log("---- 需要充值了");
            return;
        }

        this.bet_status = BET_STATUS.BET_COIN_ING;
        
        var bet_coin_index = 0;
        var bet_coin_label = this.bet_coin_1;
        if (evt.target == this.btn_1) {
            bet_coin_index = 0;
            bet_coin_label = this.bet_coin_1;
        }
        else if (evt.target == this.btn_2) {
            bet_coin_index = 1;
            bet_coin_label = this.bet_coin_2;
        }
        else if (evt.target == this.btn_3) {
            bet_coin_index = 2;
            bet_coin_label = this.bet_coin_3;
        }
        else if (evt.target == this.btn_4) {
            bet_coin_index = 3;
            bet_coin_label = this.bet_coin_4;
        }
        else if (evt.target == this.btn_5) {
            bet_coin_index = 4;
            bet_coin_label = this.bet_coin_5;
        }
        else if (evt.target == this.btn_6) {
            bet_coin_index = 5;
            bet_coin_label = this.bet_coin_6;
        }
        else if (evt.target == this.btn_7) {
            bet_coin_index = 6;
            bet_coin_label = this.bet_coin_7;
        }
        else if (evt.target == this.btn_8) {
            bet_coin_index = 7;
            bet_coin_label = this.bet_coin_8;
        }

        this.bet_coin_list[bet_coin_index]++;
        if (this.bet_coin_list[bet_coin_index] < 10) {
            bet_coin_label.text = "0" + this.bet_coin_list[bet_coin_index];
        }
        else {
            bet_coin_label.text = "" + this.bet_coin_list[bet_coin_index];
        }

        this.current_coins--;
        this.label_current_coins.text = "" + this.current_coins;
    }
    private clearAllBetCoins() {
        this.bet_coin_list = [0, 0, 0, 0, 0, 0, 0, 0];

        this.bet_coin_1.text = "00";
        this.bet_coin_2.text = "00";
        this.bet_coin_3.text = "00";
        this.bet_coin_4.text = "00";
        this.bet_coin_5.text = "00";
        this.bet_coin_6.text = "00";
        this.bet_coin_7.text = "00";
        this.bet_coin_8.text = "00";
    }

    private hideAllBetLight() {
        this.light_1.alpha = 0.0;
        this.light_2.alpha = 0.0;
        this.light_3.alpha = 0.0;
        this.light_4.alpha = 0.0;
        this.light_5.alpha = 0.0;
        this.light_6.alpha = 0.0;
        this.light_7.alpha = 0.0;
        this.light_8.alpha = 0.0;
        this.light_9.alpha = 0.0;
        this.light_10.alpha = 0.0;
        this.light_11.alpha = 0.0;
        this.light_12.alpha = 0.0;
        this.light_13.alpha = 0.0;
        this.light_14.alpha = 0.0;
        this.light_15.alpha = 0.0;
        this.light_16.alpha = 0.0;
        this.light_17.alpha = 0.0;
        this.light_18.alpha = 0.0;
        this.light_19.alpha = 0.0;
        this.light_20.alpha = 0.0;
        this.light_21.alpha = 0.0;
        this.light_22.alpha = 0.0;
        this.light_23.alpha = 0.0;
        this.light_24.alpha = 0.0;
    }

    public move_light_timer:egret.Timer;

    private hit_next_index_times = 0;
    private current_light_index = 0;
    private light_anim_span = 0;
    private light_anim_span_factor = 0;
    private quickLight() {
        this.light_anim_span -= this.light_anim_span_factor;
        this.light_anim_span_factor *= 2;

        if (this.light_anim_span <= 20) {
            this.light_anim_span = 20;
            this.hit_next_index_times = 0;

            this.moveLight();
        }
        else {
            this.current_light_index++;
            if (this.current_light_index >= this.bet_award_item_list.length) {
                this.current_light_index = 0;
            }

            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;
            var tw = egret.Tween.get(this.bet_award_item_list[this.current_light_index].light);
            tw.to({alpha:0}, this.light_anim_span+1200);

            this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
            this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.quickLight, this);
            this.move_light_timer.start()
        }
    }
    private moveLight() {
        this.current_light_index++;
        if (this.current_light_index >= this.bet_award_item_list.length) {
            this.current_light_index = 0;
        }

        if (this.current_light_index == this.next_bet_index) {
            this.hit_next_index_times++;
        }

        var slow_start_index = this.next_bet_index - 6;
        if (slow_start_index < 0) {
            slow_start_index += this.bet_award_item_list.length;
        }

        if (this.hit_next_index_times >= 3 && slow_start_index == this.current_light_index) {
            // Slow down
            this.light_anim_span_factor = 130;
            this.current_light_index--;
            if (this.current_light_index < 0) {
                this.current_light_index = 23;
            }

            this.slowLight();
        }
        else {
            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;
            var tw = egret.Tween.get(this.bet_award_item_list[this.current_light_index].light);
            tw.to({alpha:0}, this.light_anim_span+300);

            this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
            this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.moveLight, this);
            this.move_light_timer.start()
        }
    }
    private slowLight() {
        this.light_anim_span += this.light_anim_span_factor;
        this.light_anim_span_factor += 2;

        this.bet_award_item_list[this.current_light_index].light.alpha = 0.0;
        this.current_light_index++;

        if (this.current_light_index >= this.bet_award_item_list.length) {
            this.current_light_index = 0;
        }

        if (this.current_light_index == this.next_bet_index) {
            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

            this.endBetingAnim();
        }
        else {
            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

            this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
            this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.slowLight, this);
            this.move_light_timer.start()
        }
    }

    private startBetingAnim() {
        this.bet_status = BET_STATUS.BETING_ANIM;

        this.light_anim_span = 300;
        this.light_anim_span_factor = 10;

        this.current_light_index = this.last_bet_index;
        this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;
        var tw = egret.Tween.get(this.bet_award_item_list[this.current_light_index].light);
        tw.to({alpha:0}, this.light_anim_span+1200);

        this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
        this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.quickLight, this);
        this.move_light_timer.start()
    }

    private endBetingAnim() {
        if (this.bet_award_item_list[this.next_bet_index].bet_type == -1) {
            this.startRandomTwoBetNumber();
        }
        else if (this.bet_award_item_list[this.next_bet_index].bet_type == -2) {
            this.startRandomThreeBetNumber();
        }
        else {
            this.last_bet_index = this.next_bet_index;

            var type = this.bet_award_item_list[this.next_bet_index].bet_type;
            if (this.bet_coin_list[type] > 0) {
                // Win
                this.last_win_coin = this.bet_coin_list[type] * this.bet_award_item_list[this.next_bet_index].bet_award_factor;
                this.curent_win_coin = this.last_win_coin;
                this.label_win_coin.text = "" + this.curent_win_coin;

                this.bet_status = BET_STATUS.BET_BIG_SMALL;
            }
            else {
                // Lost
                this.last_win_coin = 0;
                this.curent_win_coin = 0;
                this.label_win_coin.text = "0";

                this.bet_status = BET_STATUS.BET_COIN_PREV;
            }
        }
    }

    private random_bet_index_1:number = 0;
    private bet_index_list_1 = [23, 0, 4, 5, 6, 8];
    private random_bet_index_2:number = 0;
    private bet_index_list_2 = [11, 14, 16, 17, 19, 22];
    private is_random_anim_end = true;
    private startRandomTwoBetNumber() {
        // Random 2 bet num again
        var random_1 = this.randInt(0, 5);
        this.random_bet_index_1 = this.bet_index_list_1[random_1];
        var random_2 = this.randInt(0, 5);
        this.random_bet_index_2 = this.bet_index_list_2[random_2];

        this.is_random_anim_end = false;

        var tw = egret.Tween.get(this.bet_award_item_list[9].light);
        tw.to({alpha:0.3}, 600).to({alpha:1}, 600).call(this.stop_blink_light_9, this);

        this.current_light_index = 9;
        this.light_anim_span = 30;
        this.randomLight1();
    }

    private stop_blink_light_9() {
        if (this.is_random_anim_end) {
            return;
        }

        var tw = egret.Tween.get(this.bet_award_item_list[9].light);
        tw.to({alpha:0.3}, 600).to({alpha:1}, 600).call(this.stop_blink_light_9, this);
    }

    private randomLight1() {
        if (this.current_light_index != 9) {
            this.bet_award_item_list[this.current_light_index].light.alpha = 0.0;    
        }
        this.current_light_index++;

        if (this.current_light_index >= this.bet_award_item_list.length) {
            this.current_light_index = 0;
        }

        if (this.current_light_index == this.random_bet_index_1) {
            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

            this.current_light_index = 9;
            this.randomLight2();
        }
        else {
            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

            this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
            this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.randomLight1, this);
            this.move_light_timer.start()
        }
    }
    private randomLight2() {
        if (this.current_light_index != 9 && this.current_light_index != this.random_bet_index_1) {
            this.bet_award_item_list[this.current_light_index].light.alpha = 0.0;    
        }

        this.current_light_index--;
        if (this.current_light_index < 0) {
            this.current_light_index = 23;
        }

        if (this.current_light_index == this.random_bet_index_2) {
            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

            this.endRandomTwoBetNumber();
        }
        else {
            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

            this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
            this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.randomLight2, this);
            this.move_light_timer.start()
        }
    }
    private endRandomTwoBetNumber() {
        this.last_bet_index = this.next_bet_index;

        var type1 = this.bet_award_item_list[this.random_bet_index_1].bet_type;
        var type2 = this.bet_award_item_list[this.random_bet_index_2].bet_type;
        if (this.bet_coin_list[type1] > 0 || this.bet_coin_list[type2] > 0) {
            // Win
            var award1 = this.bet_coin_list[type1] * this.bet_award_item_list[this.random_bet_index_1].bet_award_factor;
            var award2 = this.bet_coin_list[type2] * this.bet_award_item_list[this.random_bet_index_2].bet_award_factor;
            this.last_win_coin = award1 + award2;
            this.curent_win_coin = this.last_win_coin;
            this.label_win_coin.text = "" + this.curent_win_coin;

            this.bet_status = BET_STATUS.BET_BIG_SMALL;
        }
        else {
            // Lost
            this.last_win_coin = 0;
            this.curent_win_coin = 0;
            this.label_win_coin.text = "0";

            this.bet_status = BET_STATUS.BET_COIN_PREV;
        }

        this.is_random_anim_end = true;
    }

    private random_bet_index_3:number = 0;
    private bet_index_list_3 = [0, 1, 6, 7, 8, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    private startRandomThreeBetNumber() {
        // Random 3 bet num again
        var random_num = this.randInt(0, 13);
        this.random_bet_index_3 = this.bet_index_list_3[random_num];

        this.is_random_anim_end = false;

        var tw = egret.Tween.get(this.bet_award_item_list[21].light);
        tw.to({alpha:0.3}, 600).to({alpha:1}, 600).call(this.stop_blink_light_21, this);

        this.current_light_index = 21;
        this.light_anim_span = 300;
        this.light_anim_span_factor = 10;

        this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
        this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.quickLight3, this);
        this.move_light_timer.start()
    }
    private stop_blink_light_21() {
        if (this.is_random_anim_end) {
            return;
        }

        var tw = egret.Tween.get(this.bet_award_item_list[21].light);
        tw.to({alpha:0.3}, 600).to({alpha:1}, 600).call(this.stop_blink_light_21, this);
    }
    private quickLight3() {
        this.light_anim_span -= this.light_anim_span_factor;
        this.light_anim_span_factor *= 2;

        if (this.light_anim_span <= 20) {
            this.light_anim_span = 20;
            this.hit_next_index_times = 0;

            this.moveLight3();
        }
        else {
            this.current_light_index++;
            if (this.current_light_index >= this.bet_award_item_list.length) {
                this.current_light_index = 0;
            }

            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

            var hide_light_index = this.current_light_index - 3;
            if (hide_light_index < 0) {
                hide_light_index += 24;
            }
            if (hide_light_index != 21) {
                this.bet_award_item_list[hide_light_index].light.alpha = 0.0;
            }

            this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
            this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.quickLight3, this);
            this.move_light_timer.start()
        }
    }
    private moveLight3() {
        this.current_light_index++;
        if (this.current_light_index >= this.bet_award_item_list.length) {
            this.current_light_index = 0;
        }

        if (this.current_light_index == this.random_bet_index_3) {
            this.hit_next_index_times++;
        }

        var slow_start_index = this.random_bet_index_3 - 6;
        if (slow_start_index < 0) {
            slow_start_index += this.bet_award_item_list.length;
        }

        if (this.hit_next_index_times >= 2 && slow_start_index == this.current_light_index) {
            // Slow down
            this.light_anim_span_factor = 130;
            this.current_light_index--;
            if (this.current_light_index < 0) {
                this.current_light_index = 23;
            }

            this.slowLight3();
        }
        else {
            this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

            var hide_light_index = this.current_light_index - 3;
            if (hide_light_index < 0) {
                hide_light_index += 24;
            }
            if (hide_light_index != 21) {
                this.bet_award_item_list[hide_light_index].light.alpha = 0.0;
            }

            this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
            this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.moveLight3, this);
            this.move_light_timer.start()
        }
    }
    private slowLight3() {
        this.light_anim_span += this.light_anim_span_factor;
        this.light_anim_span_factor += 2;

        this.current_light_index++;
        if (this.current_light_index >= this.bet_award_item_list.length) {
            this.current_light_index = 0;
        }

        this.bet_award_item_list[this.current_light_index].light.alpha = 1.0;

        var hide_light_index = this.current_light_index - 3;
        if (hide_light_index < 0) {
            hide_light_index += 24;
        }
        if (hide_light_index != 21) {
            this.bet_award_item_list[hide_light_index].light.alpha = 0.0;
        }

        if (this.current_light_index == this.random_bet_index_3) {
            this.endRandomThreeBetNumber();
        }
        else {
            this.move_light_timer = new egret.Timer(this.light_anim_span, 1);
            this.move_light_timer.addEventListener(egret.TimerEvent.TIMER, this.slowLight3, this);
            this.move_light_timer.start()
        }
    }
    private endRandomThreeBetNumber() {
        this.last_bet_index = this.next_bet_index;

        var index1 = this.random_bet_index_3;
        var type1 = this.bet_award_item_list[index1].bet_type;

        var index2 = this.random_bet_index_3 - 1;
        if (index2 < 0) {
            index2 += 24;
        }
        var type2 = this.bet_award_item_list[index2].bet_type;

        var index3 = this.random_bet_index_3 - 2;
        if (index3 < 0) {
            index3 += 24;
        }
        var type3 = this.bet_award_item_list[index3].bet_type;

        if (this.bet_coin_list[type1] > 0 || this.bet_coin_list[type2] > 0 || this.bet_coin_list[type3] > 0) {
            // Win
            var award1 = this.bet_coin_list[type1] * this.bet_award_item_list[index1].bet_award_factor;
            var award2 = this.bet_coin_list[type2] * this.bet_award_item_list[index2].bet_award_factor;
            var award3 = this.bet_coin_list[type3] * this.bet_award_item_list[index3].bet_award_factor;
            this.last_win_coin = award1 + award2 + award3;
            this.curent_win_coin = this.last_win_coin;
            this.label_win_coin.text = "" + this.curent_win_coin;

            this.bet_status = BET_STATUS.BET_BIG_SMALL;
        }
        else {
            // Lost
            this.last_win_coin = 0;
            this.curent_win_coin = 0;
            this.label_win_coin.text = "0";

            this.bet_status = BET_STATUS.BET_COIN_PREV;
        }

        this.is_random_anim_end = true;
    }

    private randInt(a:number, b:number):number {
        var n = Math.floor(b-a)
        return Math.floor(a + Math.random() * ( n + 1));
    }

    private registerBtnListeners() {
        this.left_arrow_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeftBtnClick, this);
        this.right_arrow_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRightBtnClick, this);
        this.bet_small_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSmallBtnClick, this);
        this.bet_big_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBigBtnClick, this);
        this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtnClick, this);

        this.btn_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetBtnClick, this);
        this.btn_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetBtnClick, this);
        this.btn_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetBtnClick, this);
        this.btn_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetBtnClick, this);
        this.btn_5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetBtnClick, this);
        this.btn_6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetBtnClick, this);
        this.btn_7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetBtnClick, this);
        this.btn_8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBetBtnClick, this);
    }

    private initBetBaseDatas() {
        this.bet_status = BET_STATUS.BET_COIN_PREV;
        
        this.current_coins = 10;
        this.label_current_coins.text = "" + this.current_coins;

        this.last_win_coin = 0;
        this.curent_win_coin = 0;
        this.label_win_coin.text = "" + this.curent_win_coin;
    }

    private initBetAwardItemList() {
        var item1 = new AwardItem();
        item1.bet_type = 6;
        item1.bet_award_factor = 10;
        item1.bet_possible_number = 200;
        item1.light = this.light_1;
        this.bet_award_item_list.push(item1);

        var item2 = new AwardItem();
        item2.bet_type = 4;
        item2.bet_award_factor = 10;
        item2.bet_possible_number = 200;
        item2.light = this.light_2;
        this.bet_award_item_list.push(item2);

        var item3 = new AwardItem();
        item3.bet_type = 0;
        item3.bet_award_factor = 50;
        item3.bet_possible_number = 100;
        item3.light = this.light_3;
        this.bet_award_item_list.push(item3);

        var item4 = new AwardItem();
        item4.bet_type = 0;
        item4.bet_award_factor = 100;
        item4.bet_possible_number = 50;
        item4.light = this.light_4;
        this.bet_award_item_list.push(item4);

        var item5 = new AwardItem();
        item5.bet_type = 7;
        item5.bet_award_factor = 5;
        item5.bet_possible_number = 320;
        item5.light = this.light_5;
        this.bet_award_item_list.push(item5);

        var item6 = new AwardItem();
        item6.bet_type = 7;
        item6.bet_award_factor = 3;
        item6.bet_possible_number = 700;
        item6.light = this.light_6;
        this.bet_award_item_list.push(item6);

        var item7 = new AwardItem();
        item7.bet_type = 5;
        item7.bet_award_factor = 10;
        item7.bet_possible_number = 200;
        item7.light = this.light_7;
        this.bet_award_item_list.push(item7);

        var item8 = new AwardItem();
        item8.bet_type = 3;
        item8.bet_award_factor = 20;
        item8.bet_possible_number = 500;
        item8.light = this.light_8;
        this.bet_award_item_list.push(item8);

        var item9 = new AwardItem();
        item9.bet_type = 3;
        item9.bet_award_factor = 3;
        item9.bet_possible_number = 700;
        item9.light = this.light_9;
        this.bet_award_item_list.push(item9);

        var item10 = new AwardItem();
        item10.bet_type = -1;
        item10.bet_award_factor = 0;
        item10.bet_possible_number = 850;
        item10.light = this.light_10;
        this.bet_award_item_list.push(item10);

        var item11 = new AwardItem();
        item11.bet_type = 7;
        item11.bet_award_factor = 5;
        item11.bet_possible_number = 320;
        item11.light = this.light_11;
        this.bet_award_item_list.push(item11);

        var item12 = new AwardItem();
        item12.bet_type = 6;
        item12.bet_award_factor = 3;
        item12.bet_possible_number = 700;
        item12.light = this.light_12;
        this.bet_award_item_list.push(item12);

        var item13 = new AwardItem();
        item13.bet_type = 6;
        item13.bet_award_factor = 10;
        item13.bet_possible_number = 200;
        item13.light = this.light_13;
        this.bet_award_item_list.push(item13);

        var item14 = new AwardItem();
        item14.bet_type = 4;
        item14.bet_award_factor = 10;
        item14.bet_possible_number = 200;
        item14.light = this.light_14;
        this.bet_award_item_list.push(item14);

        var item15 = new AwardItem();
        item15.bet_type = 1;
        item15.bet_award_factor = 3;
        item15.bet_possible_number = 700;
        item15.light = this.light_15;
        this.bet_award_item_list.push(item15);

        var item16 = new AwardItem();
        item16.bet_type = 1;
        item16.bet_award_factor = 40;
        item16.bet_possible_number = 200;
        item16.light = this.light_16;
        this.bet_award_item_list.push(item16);

        var item17 = new AwardItem();
        item17.bet_type = 7;
        item17.bet_award_factor = 5;
        item17.bet_possible_number = 320;
        item17.light = this.light_17;
        this.bet_award_item_list.push(item17);

        var item18 = new AwardItem();
        item18.bet_type = 5;
        item18.bet_award_factor = 3;
        item18.bet_possible_number = 700;
        item18.light = this.light_18;
        this.bet_award_item_list.push(item18);

        var item19 = new AwardItem();
        item19.bet_type = 5;
        item19.bet_award_factor = 10;
        item19.bet_possible_number = 200;
        item19.light = this.light_19;
        this.bet_award_item_list.push(item19);

        var item20 = new AwardItem();
        item20.bet_type = 2;
        item20.bet_award_factor = 3;
        item20.bet_possible_number = 700;
        item20.light = this.light_20;
        this.bet_award_item_list.push(item20);

        var item21 = new AwardItem();
        item21.bet_type = 2;
        item21.bet_award_factor = 30;
        item21.bet_possible_number = 400;
        item21.light = this.light_21;
        this.bet_award_item_list.push(item21);

        var item22 = new AwardItem();
        item22.bet_type = -2;
        item22.bet_award_factor = 0;
        item22.bet_possible_number = 200;
        item22.light = this.light_22;
        this.bet_award_item_list.push(item22);

        var item23 = new AwardItem();
        item23.bet_type = 7;
        item23.bet_award_factor = 5;
        item23.bet_possible_number = 320;
        item23.light = this.light_23;
        this.bet_award_item_list.push(item23);

        var item24 = new AwardItem();
        item24.bet_type = 4;
        item24.bet_award_factor = 3;
        item24.bet_possible_number = 700;
        item24.light = this.light_24;
        this.bet_award_item_list.push(item24);
    }
}

