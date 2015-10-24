var CARD_TYPE;
(function (CARD_TYPE) {
    CARD_TYPE[CARD_TYPE["CARD_TYPE_TIAO"] = 1] = "CARD_TYPE_TIAO";
    CARD_TYPE[CARD_TYPE["CARD_TYPE_WAN"] = 2] = "CARD_TYPE_WAN";
    CARD_TYPE[CARD_TYPE["CARD_TYPE_BING"] = 3] = "CARD_TYPE_BING";
})(CARD_TYPE || (CARD_TYPE = {}));
var GAME_STATUS;
(function (GAME_STATUS) {
    GAME_STATUS[GAME_STATUS["INITING_CARDS"] = 0] = "INITING_CARDS";
    GAME_STATUS[GAME_STATUS["DEALING_CARDS"] = 1] = "DEALING_CARDS";
    GAME_STATUS[GAME_STATUS["DRAWING_CARDS"] = 2] = "DRAWING_CARDS";
    GAME_STATUS[GAME_STATUS["CHOOSING_CARDS"] = 3] = "CHOOSING_CARDS";
    GAME_STATUS[GAME_STATUS["CHECK_OTHER_WIN"] = 4] = "CHECK_OTHER_WIN";
    GAME_STATUS[GAME_STATUS["CHECK_OTHER_PENG_GANG"] = 5] = "CHECK_OTHER_PENG_GANG";
    GAME_STATUS[GAME_STATUS["CHECK_NEXT_EAT"] = 6] = "CHECK_NEXT_EAT";
    GAME_STATUS[GAME_STATUS["GAME_END"] = 7] = "GAME_END";
})(GAME_STATUS || (GAME_STATUS = {}));
var GAME_RESULT;
(function (GAME_RESULT) {
    GAME_RESULT[GAME_RESULT["WIN_BY_SELF"] = 1] = "WIN_BY_SELF";
    GAME_RESULT[GAME_RESULT["WIN_BY_OTHER"] = 2] = "WIN_BY_OTHER";
    GAME_RESULT[GAME_RESULT["DRAW_GAME"] = 3] = "DRAW_GAME";
})(GAME_RESULT || (GAME_RESULT = {}));
var Card = (function () {
    function Card() {
        this.base_layer = null;
        this.front_img = null;
        this.back_img = null;
    }
    var __egretProto__ = Card.prototype;
    return Card;
})();
Card.prototype.__class__ = "Card";
var Player = (function () {
    function Player() {
    }
    var __egretProto__ = Player.prototype;
    return Player;
})();
Player.prototype.__class__ = "Player";
var GameLayer = (function (_super) {
    __extends(GameLayer, _super);
    function GameLayer() {
        _super.call(this);
        this.background = null;
        this.CARD_START_POS_X = 60;
        this.CARD_START_POS_Y = 60;
        this.all_cards = [];
        this.player_list = [];
        this.card_index_bottom = 0;
        this.card_index_top = 0;
        this.first_player_index = -1;
        this.base_money = 10;
        this.current_play_player_index = 0;
        this.current_check_player_index = 0;
        this.game_result = 0;
        this.game_status = 0;
        this.player_cards_list = [];
        this.player_top_cards_list = [];
        this.last_play_card = null;
        this.DEAL_ONE_CARD_TIME = 100;
        this.MAX_DEAL_CARDS_SUM = 13 * 4;
        this.CARD_SPAN_DIS = 45;
        this.DRAWED_CARD_EXTRA_SPAN = 20;
        this.player_cards_start_pos = [[150, 150], [150, 295], [150, 440], [150, 585]];
        this.player_top_cards_start_pos = [[150, 75], [150, 220], [150, 365], [150, 510]];
        this.PLAY_CARD_START_POS_X = 450;
        this.PLAY_CARD_START_POS_Y = 35.5;
        this.PLAY_CARD_TIME = 200;
        this.CARD_SELECT_POS_OFFSET_Y = 20;
        this.last_select_card = null;
    }
    var __egretProto__ = GameLayer.prototype;
    __egretProto__.showOnMainLayer = function (main_director) {
        this.main_director = main_director;
        // Add self layer to stage
        this.main_director.stage.addChildAt(this, 0);
        // Add UIStage.
        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 1);
        this.main_view = new UIMainView();
        this.main_view.show(this, main_director);
        this.initGameLayer();
        this.startNewGame();
    };
    __egretProto__.removeFromMainLayer = function () {
        this.main_director.stage.removeChild(this);
        this.main_director.stage.removeChild(this.guiLayer);
    };
    __egretProto__.initGameLayer = function () {
        this.background = new egret.Bitmap();
        this.background.texture = RES.getRes("desk_top_bmp");
        this.addChild(this.background);
        this.background.x = 0;
        this.background.y = 0;
        this.initAllPlayers();
        this.initAllCards();
    };
    __egretProto__.initAllPlayers = function () {
        var player1 = new Player();
        player1.name = "周方";
        player1.money = 100;
        this.player_list.push(player1);
        var player2 = new Player();
        player2.name = "王雪";
        player2.money = 100;
        this.player_list.push(player2);
        var player3 = new Player();
        player3.name = "赵虹";
        player3.money = 100;
        this.player_list.push(player3);
        var player4 = new Player();
        player4.name = "马文玲";
        player4.money = 100;
        this.player_list.push(player4);
    };
    __egretProto__.initOneCard = function (type, card_number) {
        var card = new Card();
        card.type = type;
        card.card_number = card_number;
        card.base_layer = new egret.DisplayObjectContainer();
        card.base_layer.anchorX = 0.5;
        card.base_layer.anchorY = 0.5;
        card.base_layer.width = 45;
        card.base_layer.height = 71;
        card.base_layer.x = this.CARD_START_POS_X;
        card.base_layer.y = this.CARD_START_POS_Y;
        this.addChild(card.base_layer);
        card.back_img = new egret.Bitmap();
        card.back_img.texture = RES.getRes("back_png");
        card.back_img.x = 0;
        card.back_img.y = 0;
        card.base_layer.addChild(card.back_img);
        card.player_index = -1;
        card.is_selected = false;
        var front_img_name = "";
        switch (type) {
            case 1 /* CARD_TYPE_TIAO */:
                front_img_name = "tiao";
                break;
            case 2 /* CARD_TYPE_WAN */:
                front_img_name = "wan";
                break;
            case 3 /* CARD_TYPE_BING */:
                front_img_name = "bing";
                break;
            default:
                console.log("====== error card type: " + type);
                return;
        }
        front_img_name = front_img_name + "_" + card_number + "_png";
        card.front_img_name = front_img_name;
        card.front_img = new egret.Bitmap();
        card.front_img.texture = RES.getRes(front_img_name);
        card.front_img.x = 0;
        card.front_img.y = 0;
        card.front_img.touchEnabled = true;
        card.base_layer.addChild(card.front_img);
        card.front_img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchCard, this);
        this.all_cards.push(card);
    };
    __egretProto__.initAllCards = function () {
        this.all_cards = [];
        for (var i = 1; i < 10; i++) {
            for (var j = 0; j < 4; j++) {
                this.initOneCard(1 /* CARD_TYPE_TIAO */, i);
                this.initOneCard(2 /* CARD_TYPE_WAN */, i);
                this.initOneCard(3 /* CARD_TYPE_BING */, i);
            }
        }
        this.card_index_bottom = this.getChildIndex(this.all_cards[0].base_layer);
        this.card_index_top = this.getChildIndex(this.all_cards[this.all_cards.length - 1].base_layer);
    };
    __egretProto__.startNewGame = function () {
        this.resetAllCards();
        this.resetGameDatas();
        this.shuffleCards();
        this.dealCards();
    };
    __egretProto__.resetAllCards = function () {
        for (var i = 0; i < this.all_cards.length; i++) {
            var card = this.all_cards[i];
            card.base_layer.x = this.CARD_START_POS_X;
            card.base_layer.y = this.CARD_START_POS_Y;
            card.base_layer.visible = true;
            card.back_img.visible = true;
            card.front_img.visible = false;
            card.player_index = -1;
            card.is_selected = false;
        }
    };
    __egretProto__.resetGameDatas = function () {
        this.player_cards_list = [[], [], [], []];
        this.player_top_cards_list = [[], [], [], []];
        this.game_status = 0 /* INITING_CARDS */;
        this.first_player_index++;
        this.current_play_player_index = -1;
        this.last_play_card = null;
    };
    __egretProto__.shuffleCards = function () {
        var cards_len = this.all_cards.length;
        for (var i = 0; i < cards_len; i++) {
            var n = this.randInt(0, cards_len - 1);
            var card = this.all_cards[i];
            this.all_cards[i] = this.all_cards[n];
            this.all_cards[n] = card;
        }
        for (var i = 0; i < cards_len; i++) {
            this.setChildIndex(this.all_cards[i].base_layer, this.card_index_bottom + i);
        }
    };
    __egretProto__.randInt = function (a, b) {
        var n = Math.floor(b - a);
        return Math.floor(a + Math.random() * (n + 1));
    };
    __egretProto__.dealCards = function () {
        this.game_status = 1 /* DEALING_CARDS */;
        this.next_card_index = this.all_cards.length;
        this.last_card_index = 0;
        this.deal_cards_sum = 0;
        this.dealOneCard();
    };
    __egretProto__.dealOneCard = function () {
        this.next_card_index--;
        this.deal_cards_sum++;
        if (this.deal_cards_sum <= this.MAX_DEAL_CARDS_SUM) {
            // Deal next card
            var player_index = (this.first_player_index + this.deal_cards_sum - 1) % 4;
            var card = this.all_cards[this.all_cards.length - this.deal_cards_sum];
            card.player_index = player_index;
            var show_card = function (card) {
                card.back_img.visible = false;
                card.front_img.visible = true;
            };
            this.setChildIndex(card.base_layer, this.card_index_top);
            var pos_x = this.player_cards_list[player_index].length * this.CARD_SPAN_DIS + this.player_cards_start_pos[player_index][0];
            var pos_y = this.player_cards_start_pos[player_index][1];
            var tw = egret.Tween.get(card.base_layer);
            tw.to({ x: pos_x, y: pos_y }, this.DEAL_ONE_CARD_TIME, egret.Ease.sineInOut).call(show_card, this, [card]);
            this.player_cards_list[player_index].push(card);
            this.deal_cards_timer = new egret.Timer(this.DEAL_ONE_CARD_TIME, 1);
            this.deal_cards_timer.addEventListener(egret.TimerEvent.TIMER, this.dealOneCard, this);
            this.deal_cards_timer.start();
        }
        else {
            // Finish dealing cards
            this.finishDealCards();
        }
    };
    // card1 > card2 return true, else false.
    __egretProto__.compare_single_card = function (card1, card2) {
        if (card1.type > card2.type) {
            return true;
        }
        else if (card1.type < card2.type) {
            return false;
        }
        // card1.type == card2.type
        var card_value1 = card1.card_number;
        var card_value2 = card2.card_number;
        if (card_value1 > card_value2) {
            return true;
        }
        return false;
    };
    __egretProto__.swapTwoCards = function (card1, card2) {
        var card1_pos_x = card1.base_layer.x;
        var card1_pos_y = card1.base_layer.y;
        var card1_zorder = this.getChildIndex(card1.base_layer);
        var card2_zorder = this.getChildIndex(card2.base_layer);
        card1.base_layer.x = card2.base_layer.x;
        card1.base_layer.y = card2.base_layer.y;
        this.setChildIndex(card1.base_layer, card2_zorder);
        card2.base_layer.x = card1_pos_x;
        card2.base_layer.y = card1_pos_y;
        this.setChildIndex(card2.base_layer, card1_zorder);
    };
    __egretProto__.sortCards = function (cards) {
        // Bubble sort
        var card_len = cards.length;
        for (var i = 0; i < card_len; i++) {
            var any_move = false;
            for (var j = 0; j < card_len - i - 1; j++) {
                if (this.compare_single_card(cards[j], cards[j + 1]) == true) {
                    this.swapTwoCards(cards[j], cards[j + 1]);
                    var tmp_card = cards[j];
                    cards[j] = cards[j + 1];
                    cards[j + 1] = tmp_card;
                    any_move = true;
                }
            }
            if (any_move == false) {
                break;
            }
        }
    };
    __egretProto__.sortAllPlayerCards = function () {
        for (var i = 0; i < 4; i++) {
            this.sortCards(this.player_cards_list[i]);
        }
    };
    __egretProto__.finishDealCards = function () {
        this.sortAllPlayerCards();
        this.current_play_player_index = this.first_player_index;
        this.dealNextCard();
    };
    __egretProto__.dealNextCard = function () {
        this.game_status = 2 /* DRAWING_CARDS */;
        this.next_card_index--;
        if (this.next_card_index < this.last_card_index) {
            this.game_status = 7 /* GAME_END */;
            this.game_result = 3 /* DRAW_GAME */;
            this.showGameResult();
        }
        else {
            // Deal next card
            var player_index = this.current_play_player_index;
            var card = this.all_cards[this.next_card_index];
            card.player_index = player_index;
            var show_card = function (card) {
                card.back_img.visible = false;
                card.front_img.visible = true;
            };
            this.setChildIndex(card.base_layer, this.card_index_top);
            var pos_x = this.player_cards_list[player_index].length * this.CARD_SPAN_DIS + this.DRAWED_CARD_EXTRA_SPAN + this.player_cards_start_pos[player_index][0];
            var pos_y = this.player_cards_start_pos[player_index][1];
            var tw = egret.Tween.get(card.base_layer);
            tw.to({ x: pos_x, y: pos_y }, this.DEAL_ONE_CARD_TIME, egret.Ease.sineInOut).call(show_card, this, [card]);
            this.player_cards_list[player_index].push(card);
            this.checkCurrentPlayerWinOrGang();
        }
    };
    __egretProto__.addCardsToTopList = function (cards) {
        var player_index = this.current_play_player_index;
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i];
            card.player_index = -player_index;
            this.setChildIndex(card.base_layer, this.card_index_bottom);
            var pos_x = this.player_top_cards_list[player_index].length * this.CARD_SPAN_DIS + this.player_top_cards_start_pos[player_index][0];
            var pos_y = this.player_top_cards_start_pos[player_index][1];
            var tw = egret.Tween.get(card.base_layer);
            tw.to({ x: pos_x, y: pos_y }, this.DEAL_ONE_CARD_TIME, egret.Ease.sineInOut);
            this.player_top_cards_list[player_index].push(card);
        }
        var current_play_new_cards_list = [];
        var current_cards_list = this.player_cards_list[player_index];
        for (var i = 0; i < current_cards_list.length; i++) {
            var card = current_cards_list[i];
            var found = false;
            for (var j = 0; j < cards.length; j++) {
                if (card == cards[j]) {
                    found = true;
                    break;
                }
            }
            if (found == false) {
                current_play_new_cards_list.push(card);
            }
        }
        this.player_cards_list[player_index] = current_play_new_cards_list;
        this.rearrangeCurrentPlayerCards();
    };
    __egretProto__.rearrangeCurrentPlayerCards = function () {
        var cards = this.player_cards_list[this.current_play_player_index];
        var card_len = cards.length;
        for (var i = 0; i < card_len; i++) {
            cards[i].base_layer.x = i * this.CARD_SPAN_DIS + this.player_cards_start_pos[this.current_play_player_index][0];
        }
        this.sortCards(cards);
    };
    __egretProto__.playerPengCards = function () {
        if (this.game_status != 5 /* CHECK_OTHER_PENG_GANG */) {
            console.log("ERROR!!!! playerPengCards error status: " + this.game_status);
            return;
        }
        this.current_play_player_index = this.current_check_player_index;
        var player_index = this.current_play_player_index;
        if (this.last_play_card == null) {
            console.log("ERROR!!!! last_play_card == null!");
            return;
        }
        var peng_cards = [];
        var card_info = [this.last_play_card.type, this.last_play_card.card_number];
        for (var i = 0; i < this.player_cards_list[player_index].length; i++) {
            var card = this.player_cards_list[player_index][i];
            if (card.type == card_info[0] && card.card_number == card_info[1]) {
                peng_cards.push(card);
                if (peng_cards.length == 2) {
                    break;
                }
            }
        }
        peng_cards.push(this.last_play_card);
        this.addCardsToTopList(peng_cards);
        this.startPlayerChooseCard();
    };
    __egretProto__.playerGangCards = function () {
        var gang_cards = [];
        if (this.game_status == 2 /* DRAWING_CARDS */) {
            var player_index = this.current_play_player_index;
            var card_info = Logic.getGangCardInfo(this.player_cards_list[player_index]);
            if (card_info == null) {
                console.log("ERROR!!!! No gang cards!");
                return;
            }
            for (var i = 0; i < this.player_cards_list[player_index].length; i++) {
                var card = this.player_cards_list[player_index][i];
                if (card.type == card_info[0] && card.card_number == card_info[1]) {
                    gang_cards.push(card);
                }
            }
        }
        else if (this.game_status == 5 /* CHECK_OTHER_PENG_GANG */) {
            this.current_play_player_index = this.current_check_player_index;
            var player_index = this.current_play_player_index;
            if (this.last_play_card == null) {
                console.log("ERROR!!!! last_play_card == null!");
                return;
            }
            var card_info = [this.last_play_card.type, this.last_play_card.card_number];
            for (var i = 0; i < this.player_cards_list[player_index].length; i++) {
                var card = this.player_cards_list[player_index][i];
                if (card.type == card_info[0] && card.card_number == card_info[1]) {
                    gang_cards.push(card);
                }
            }
            gang_cards.push(this.last_play_card);
        }
        else {
            console.log("ERROR!!!! playerGangCards error status!");
            return;
        }
        this.addCardsToTopList(gang_cards);
        this.dealGangCard();
    };
    __egretProto__.dealGangCard = function () {
        this.game_status = 2 /* DRAWING_CARDS */;
        if (this.next_card_index < this.last_card_index) {
            this.game_status = 7 /* GAME_END */;
            this.game_result = 3 /* DRAW_GAME */;
            this.showGameResult();
        }
        else {
            // Deal next card
            var player_index = this.current_play_player_index;
            var card = this.all_cards[this.last_card_index];
            card.player_index = player_index;
            this.last_card_index++;
            var show_card = function (card) {
                card.back_img.visible = false;
                card.front_img.visible = true;
            };
            this.setChildIndex(card.base_layer, this.card_index_top);
            var pos_x = this.player_cards_list[player_index].length * this.CARD_SPAN_DIS + this.DRAWED_CARD_EXTRA_SPAN + this.player_cards_start_pos[player_index][0];
            var pos_y = this.player_cards_start_pos[player_index][1];
            var tw = egret.Tween.get(card.base_layer);
            tw.to({ x: pos_x, y: pos_y }, this.DEAL_ONE_CARD_TIME, egret.Ease.sineInOut).call(show_card, this, [card]);
            this.player_cards_list[player_index].push(card);
            this.checkCurrentPlayerWinOrGang();
        }
    };
    __egretProto__.checkCurrentPlayerWinOrGang = function () {
        var player_index = this.current_play_player_index;
        var can_win = Logic.checkIfCardsWin(this.player_cards_list[player_index]);
        var can_gang = Logic.checkIfCardsCanGang(this.player_cards_list[player_index]);
        if (can_win) {
            this.main_view.showPlayerWinBtn(this.current_play_player_index);
        }
        if (can_gang) {
            this.main_view.showPlayerGangBtn(this.current_play_player_index);
        }
        if (can_gang == false && can_win == false) {
            this.startPlayerChooseCard();
        }
    };
    __egretProto__.startPlayerChooseCard = function () {
        this.game_status = 3 /* CHOOSING_CARDS */;
        this.last_select_card = null;
    };
    __egretProto__.playerEatCards = function () {
        if (this.game_status != 6 /* CHECK_NEXT_EAT */) {
            console.log("ERROR!!!! playerEatCards error status: " + this.game_status);
            return;
        }
        var player_index = this.current_play_player_index;
        if (this.last_play_card == null) {
            console.log("ERROR!!!! last_play_card == null!");
            return;
        }
        var eat_cards = [];
        var card_type = this.last_play_card.type;
        var cards_tmp_list = [];
        for (var i = 0; i < 9; i++) {
            cards_tmp_list[i] = null;
        }
        for (var i = 0; i < this.player_cards_list[player_index].length; i++) {
            var card = this.player_cards_list[player_index][i];
            if (card.type == card_type) {
                cards_tmp_list[card.card_number - 1] = card;
            }
        }
        var card_number = this.last_play_card.card_number - 1;
        if (card_number - 2 >= 0 && cards_tmp_list[card_number - 1] != null && cards_tmp_list[card_number - 2] != null) {
            eat_cards.push(cards_tmp_list[card_number - 2]);
            eat_cards.push(cards_tmp_list[card_number - 1]);
            eat_cards.push(this.last_play_card);
        }
        else if (card_number + 2 < 9 && cards_tmp_list[card_number + 1] != null && cards_tmp_list[card_number + 2] != null) {
            eat_cards.push(this.last_play_card);
            eat_cards.push(cards_tmp_list[card_number + 1]);
            eat_cards.push(cards_tmp_list[card_number + 2]);
        }
        else if (card_number + 1 < 9 && cards_tmp_list[card_number + 1] != null && card_number - 1 >= 0 && cards_tmp_list[card_number - 1] != null) {
            eat_cards.push(cards_tmp_list[card_number - 1]);
            eat_cards.push(this.last_play_card);
            eat_cards.push(cards_tmp_list[card_number + 1]);
        }
        this.addCardsToTopList(eat_cards);
        this.startPlayerChooseCard();
    };
    __egretProto__.onPlayerChi = function () {
        this.main_view.hideAllPlayCardsButtons();
        if (this.game_status == 6 /* CHECK_NEXT_EAT */) {
            this.playerEatCards();
        }
        else {
            console.log("===== onPlayerChi ERROR!!!!");
        }
    };
    __egretProto__.onPlayerPeng = function () {
        this.main_view.hideAllPlayCardsButtons();
        if (this.game_status == 5 /* CHECK_OTHER_PENG_GANG */) {
            this.playerPengCards();
        }
        else {
            console.log("===== onPlayerPeng ERROR!!!!");
        }
    };
    __egretProto__.onPlayerGang = function () {
        this.main_view.hideAllPlayCardsButtons();
        if (this.game_status == 2 /* DRAWING_CARDS */) {
            this.playerGangCards();
        }
        else if (this.game_status == 5 /* CHECK_OTHER_PENG_GANG */) {
            this.playerGangCards();
        }
        else {
            console.log("===== onPlayerGang ERROR!!!!");
        }
    };
    __egretProto__.onPlayerHu = function () {
        this.main_view.hideAllPlayCardsButtons();
        if (this.game_status == 2 /* DRAWING_CARDS */) {
            this.game_status = 7 /* GAME_END */;
            this.game_result = 1 /* WIN_BY_SELF */;
            this.showGameResult();
        }
        else if (this.game_status == 4 /* CHECK_OTHER_WIN */) {
            this.game_status = 7 /* GAME_END */;
            this.game_result = 2 /* WIN_BY_OTHER */;
            this.showGameResult();
        }
        else {
            console.log("===== onPlayerHu ERROR!!!!");
        }
    };
    __egretProto__.onPlayerPass = function () {
        this.main_view.hideAllPlayCardsButtons();
        if (this.game_status == 2 /* DRAWING_CARDS */) {
            this.startPlayerChooseCard();
        }
        else if (this.game_status == 4 /* CHECK_OTHER_WIN */) {
            this.checkIfNextPlayerCanWin();
        }
        else if (this.game_status == 5 /* CHECK_OTHER_PENG_GANG */) {
            this.checkIfNextPlayerCanGangOrPeng();
        }
        else if (this.game_status == 6 /* CHECK_NEXT_EAT */) {
            this.dealNextCard();
        }
        else {
            console.log("===== onPlayerHu ERROR!!!!");
        }
    };
    __egretProto__.showGameResult = function () {
        var base_times = Logic.getLastWinCardMoney();
        if (this.game_result == 1 /* WIN_BY_SELF */) {
            var win_money = this.base_money * base_times * 2;
            this.player_list[this.current_play_player_index].money += win_money;
            var lose_player_index = (this.current_play_player_index + 1) % 4;
            this.player_list[lose_player_index].money -= win_money;
            lose_player_index = (this.current_play_player_index + 2) % 4;
            this.player_list[lose_player_index].money -= win_money;
            lose_player_index = (this.current_play_player_index + 3) % 4;
            this.player_list[lose_player_index].money -= win_money;
        }
        else if (this.game_result == 2 /* WIN_BY_OTHER */) {
            var win_money = this.base_money * base_times;
            this.player_list[this.current_play_player_index].money -= win_money;
            this.player_list[this.current_check_player_index].money += win_money;
        }
        this.main_view.refreshPlayerMoney();
        this.main_view.showStartNewGameBtn();
    };
    __egretProto__.startPlayCardsAnim = function () {
        this.game_status = 4 /* CHECK_OTHER_WIN */;
        this.last_play_card = this.last_select_card;
        var current_cards_list = this.player_cards_list[this.current_play_player_index];
        for (var i = 0; i < current_cards_list.length; i++) {
            var card = current_cards_list[i];
            if (card == this.last_play_card) {
                current_cards_list.splice(i, 1);
                card.is_selected = false;
                break;
            }
        }
        this.rearrangeCurrentPlayerCards();
        var card = this.last_play_card;
        this.setChildIndex(card.base_layer, this.card_index_top);
        var pos_x = this.PLAY_CARD_START_POS_X;
        var pos_y = this.PLAY_CARD_START_POS_Y;
        var tw = egret.Tween.get(card.base_layer);
        tw.to({ x: pos_x, y: pos_y }, this.PLAY_CARD_TIME, egret.Ease.sineInOut);
        var tw = egret.Tween.get(this);
        tw.wait(this.PLAY_CARD_TIME).call(this.endPlayCardsAnim, this);
    };
    __egretProto__.endPlayCardsAnim = function () {
        this.game_status = 4 /* CHECK_OTHER_WIN */;
        this.current_check_player_index = this.current_play_player_index;
        this.checkIfNextPlayerCanWin();
    };
    __egretProto__.checkIfNextPlayerCanWin = function () {
        this.current_check_player_index++;
        this.current_check_player_index = this.current_check_player_index % 4;
        if (this.current_check_player_index == this.current_play_player_index) {
            this.game_status = 5 /* CHECK_OTHER_PENG_GANG */;
            this.current_check_player_index = this.current_play_player_index;
            this.checkIfNextPlayerCanGangOrPeng();
            return;
        }
        var cards = [];
        cards.push(this.last_play_card);
        var current_cards_list = this.player_cards_list[this.current_check_player_index];
        for (var i = 0; i < current_cards_list.length; i++) {
            cards.push(current_cards_list[i]);
        }
        var can_win = Logic.checkIfCardsWin(cards);
        if (can_win) {
            this.main_view.showPlayerWinBtn(this.current_check_player_index);
        }
        else {
            this.checkIfNextPlayerCanWin();
        }
    };
    __egretProto__.checkIfNextPlayerCanGangOrPeng = function () {
        this.current_check_player_index++;
        this.current_check_player_index = this.current_check_player_index % 4;
        if (this.current_check_player_index == this.current_play_player_index) {
            this.game_status = 6 /* CHECK_NEXT_EAT */;
            this.current_check_player_index = this.current_play_player_index;
            this.checkIfNextPlayerCanEat();
            return;
        }
        var current_cards_list = this.player_cards_list[this.current_check_player_index];
        var bRes = Logic.checkIfCardsCanGangOrPeng(current_cards_list, this.last_play_card);
        var can_peng = bRes[0];
        var can_gang = bRes[1];
        if (can_peng) {
            this.main_view.showPlayerPengBtn(this.current_check_player_index);
        }
        if (can_gang) {
            this.main_view.showPlayerGangBtn(this.current_check_player_index);
        }
        if (can_peng == false && can_gang == false) {
            this.checkIfNextPlayerCanGangOrPeng();
        }
    };
    __egretProto__.checkIfNextPlayerCanEat = function () {
        this.current_play_player_index++;
        this.current_play_player_index = this.current_play_player_index % 4;
        var current_cards_list = this.player_cards_list[this.current_play_player_index];
        var bRes = Logic.checkIfCardsCanEat(current_cards_list, this.last_play_card);
        if (bRes == true) {
            this.main_view.showPlayerChiBtn(this.current_play_player_index);
        }
        else {
            this.dealNextCard();
        }
    };
    __egretProto__.selectCard = function (card) {
        if (card.is_selected) {
            return;
        }
        card.is_selected = true;
        card.base_layer.y -= this.CARD_SELECT_POS_OFFSET_Y;
    };
    __egretProto__.deselectCard = function (card) {
        if (!card.is_selected) {
            return;
        }
        card.is_selected = false;
        card.base_layer.y += this.CARD_SELECT_POS_OFFSET_Y;
    };
    __egretProto__.onTouchCard = function (evt) {
        //console.log(evt.target);
        if (this.game_status != 3 /* CHOOSING_CARDS */) {
            return;
        }
        var cards_len = this.all_cards.length;
        var card = null;
        for (var i = 0; i < cards_len; i++) {
            if (evt.target == this.all_cards[i].front_img) {
                if (this.all_cards[i].player_index != this.current_play_player_index) {
                    return;
                }
                card = this.all_cards[i];
                break;
            }
        }
        if (card != null) {
            if (card == this.last_select_card) {
                this.startPlayCardsAnim();
            }
            else {
                if (this.last_select_card != null) {
                    this.deselectCard(this.last_select_card);
                }
                this.last_select_card = card;
                this.selectCard(card);
            }
        }
    };
    return GameLayer;
})(egret.DisplayObjectContainer);
GameLayer.prototype.__class__ = "GameLayer";
