enum WIN_CARDS_TYPE
{
    NORMAL = 1,          //普通胡牌
    PAIRS  = 2,          //七对
    COLOR_SINGLE  = 3,   //清一色
}

class WinCardsRes {
    public type:WIN_CARDS_TYPE;
    public pairs = [0, 0];
    public sequences = [];

    public seven_pairs = [];

    public getCardName(card_number:number) {
        var card_name = "";
        if (card_number <= 9 && card_number >= 1) {
            // 条1-9
            card_name = "" + card_number + "条";
        }
        else if (card_number <= 19 && card_number >= 11) {
            // 万11-19
            card_name = "" + (card_number - 10) + "万";
        }
        if (card_number <= 29 && card_number >= 21) {
            // 筒21-29
            card_name = "" + (card_number - 20) + "筒";
        }
        return card_name;
    }

    public showWinCard() {
        if (this.type == WIN_CARDS_TYPE.PAIRS) {
            console.log("----------七对---------");
            for (var i = 0; i < this.seven_pairs.length; i++) {
                console.log("== 对子: " + this.getCardName(this.seven_pairs[i][0]) + "+" + this.getCardName(this.seven_pairs[i][1]));
            }

            return;
        }
        else if (this.type == WIN_CARDS_TYPE.COLOR_SINGLE) {
            console.log("----------清一色---------");
        }
        else if (this.type == WIN_CARDS_TYPE.NORMAL) {
            console.log("----------屁胡---------");
        }

        console.log("== 对子: " + this.getCardName(this.pairs[0]) + "+" + this.getCardName(this.pairs[1]));

        for (var i = 0; i < this.sequences.length; i++) {
            var sequence = this.sequences[i];
            var card_name1 = this.getCardName(sequence[0]);
            var card_name2 = this.getCardName(sequence[1]);
            var card_name3 = this.getCardName(sequence[2]);
            if (sequence[0] == sequence[1]) {
                console.log("== 刻子: " + card_name1 + "+" + card_name2 + "+" + card_name3);
            }
            else {
                console.log("== 顺子: " + card_name1 + "+" + card_name2 + "+" + card_name3);
            }
        }

        console.log("----------------------------");
    }
}

class Logic {
    public static cards_sum = 0;
    public static cards_list = [];
    public static win_card_res_list = [];
    public static win_card_res:WinCardsRes = null;

    public static resetCardsArray() {
        Logic.cards_list = [];
        // 条
        Logic.cards_list.push(0);
        for (var i = 0; i < 9; i++) {
            Logic.cards_list.push(0);
        }

        // 万
        Logic.cards_list.push(0);
        for (var i = 0; i < 9; i++) {
            Logic.cards_list.push(0);
        }

        // 筒
        Logic.cards_list.push(0);
        for (var i = 0; i < 9; i++) {
            Logic.cards_list.push(0);
        }
    }
    public static resetCardsDatas() {
        Logic.cards_sum = 0;
        Logic.win_card_res_list = [];
        Logic.win_card_res = new WinCardsRes();

        Logic.resetCardsArray();
    }

    private static saveWinCardRes() {
        var res = new WinCardsRes();
        res.type = WIN_CARDS_TYPE.NORMAL;

        res.pairs[0] = Logic.win_card_res.pairs[0];
        res.pairs[1] = Logic.win_card_res.pairs[1];
        
        for (var i = 0; i < Logic.win_card_res.sequences.length; i++) {
            var sequence = [];
            for (var j = 0; j < 3; j++) {
                sequence.push(Logic.win_card_res.sequences[i][j]);
            }

            res.sequences.push(sequence);
        }

        Logic.win_card_res_list.push(res);
    }
    private static checkThreeCardsList() {
        if (Logic.cards_sum == 0) {
            Logic.saveWinCardRes();
            return;
        }

        // Get the first card
        var cards_len = Logic.cards_list.length;
        var index = 0;
        for (var i = 0; i < cards_len; i++) {
            if (Logic.cards_list[i] > 0) {
                index = i;
                break;
            }
        }

        var card_number = index % 10;
        if (Logic.cards_list[index] == 3) {
            Logic.win_card_res.sequences.push([index, index, index]);
            Logic.cards_list[index] -= 3;
            Logic.cards_sum -= 3;

            Logic.checkThreeCardsList();

            Logic.win_card_res.sequences.pop();
            Logic.cards_list[index] += 3;
            Logic.cards_sum += 3;
        }

        if (card_number >= 8) {
            return;
        }

        if (Logic.cards_list[index+1] < 1 || Logic.cards_list[index+2] < 1) {
            return;
        }

        Logic.win_card_res.sequences.push([index, index+1, index+2]);
        Logic.cards_list[index]--;
        Logic.cards_list[index+1]--;
        Logic.cards_list[index+2]--;
        Logic.cards_sum -= 3;

        Logic.checkThreeCardsList();

        Logic.win_card_res.sequences.pop();
        Logic.cards_list[index]++;
        Logic.cards_list[index+1]++;
        Logic.cards_list[index+2]++;
        Logic.cards_sum += 3;
    }

    private static isWinCard() {
        var cards_len = Logic.cards_list.length;
        for (var i = 0; i < cards_len; i++) {
            if (Logic.cards_list[i] >= 2) {
                // Get pairs
                Logic.win_card_res.pairs[0] = i;
                Logic.win_card_res.pairs[1] = i;

                Logic.cards_list[i] -= 2;
                Logic.cards_sum -= 2;

                Logic.checkThreeCardsList();

                Logic.win_card_res.pairs[0] = 0;
                Logic.win_card_res.pairs[1] = 0;

                Logic.cards_list[i] += 2;
                Logic.cards_sum += 2;
            }
        }
    }

    private static isSevenPairs():boolean {
        var card_sum = 0;
        for (var i = 0; i < 30; i++) {
            if (Logic.cards_list[i] != 0 && Logic.cards_list[i] != 2 && Logic.cards_list[i] != 4) {
                return false;
            }

            card_sum += Logic.cards_list[i];
        }

        if (card_sum == 14) {
            var res = new WinCardsRes();
            res.type = WIN_CARDS_TYPE.PAIRS;

            for (var i = 0; i < 30; i++) {
                if (Logic.cards_list[i] == 2) {
                    var pair = [i, i];
                    res.seven_pairs.push(pair);
                }
                else if (Logic.cards_list[i] == 4) {
                    var pair1 = [i, i];
                    res.seven_pairs.push(pair1);

                    var pair2 = [i, i];
                    res.seven_pairs.push(pair2);
                }

                card_sum += Logic.cards_list[i];
            }

            //res.showWinCard();
            Logic.win_card_res_list.push(res);

            return true;
        }

        return false;
    }

    public static checkIfCardsWin(cards):boolean {
        var cards_len = cards.length;
        if (cards_len % 3 != 2) {
            return false;
        }

        Logic.resetCardsDatas();

        Logic.cards_sum = cards_len;

        for (var i = 0; i < cards_len; i++) {
            var card = cards[i];
            var card_index = (card.type-1)*10 + card.card_number;
            
            Logic.cards_list[card_index]++;
        }

        /*
        console.log("------测试牌型------");
        var str = "条: ";
        for (var i = 0; i < 10; i++) {
            str += Logic.cards_list[i];
            str += " ";
        }
        console.log(str);
        
        str = "万: ";
        for (var i = 10; i < 20; i++) {
            str += Logic.cards_list[i];
            str += " ";
        }
        console.log(str);

        var str = "筒: ";
        for (var i = 20; i < 30; i++) {
            str += Logic.cards_list[i];
            str += " ";
        }
        console.log(str);
        console.log("------------");
        */

        /*
        for (var i = 0; i < Logic.win_card_res_list.length; i++) {
            Logic.win_card_res_list[i].showWinCard();
        }
        */

        Logic.isSevenPairs();
        Logic.isWinCard();

        if (Logic.win_card_res_list.length <= 0) {
            return false;
        }

        return true;
    }

    public static checkIfCardsCanGang(cards):boolean {
        var cards_len = cards.length;
        if (cards_len < 4) {
            return false;
        }

        Logic.resetCardsArray();
        for (var i = 0; i < cards_len; i++) {
            var card = cards[i];
            var card_index = (card.type-1)*10 + card.card_number;
            
            Logic.cards_list[card_index]++;
            if (Logic.cards_list[card_index] == 4) {
                return true;
            }
        }
        
        return false;
    }

    public static checkIfCardsCanGangOrPeng(cards, last_card) {
        var cards_len = cards.length;
        if (cards_len < 2) {
            return [false, false];
        }

        Logic.resetCardsArray();
        for (var i = 0; i < cards_len; i++) {
            var card = cards[i];
            var card_index = (card.type-1)*10 + card.card_number;
            
            Logic.cards_list[card_index]++;
        }

        var last_card_index = (last_card.type-1)*10 + last_card.card_number;

        if (Logic.cards_list[last_card_index] < 2) {
            return [false, false];
        }
        else if (Logic.cards_list[last_card_index] == 2) {
            return [true, false];
        }
        
        //Logic.cards_list[last_card_index] > 2
        return [true, true];
    }

    public static checkIfCardsCanEat(cards, last_card) {
        var cards_len = cards.length;
        if (cards_len < 2) {
            return false;
        }

        var cards_tmp_list = [];
        for (var i = 0; i < 9; i++) {
            cards_tmp_list[i] = 0;
        }

        for (var i = 0; i < cards_len; i++) {
            var card = cards[i];
            if (card.type == last_card.type) {
                cards_tmp_list[card.card_number-1]++;
            }
        }

        var card_number = last_card.card_number-1;
        if (card_number - 2 >= 0 && cards_tmp_list[card_number-1] > 0 
            && cards_tmp_list[card_number-2] > 0) {
            return true;
        }

        if (card_number + 2 < 9 && cards_tmp_list[card_number+1] > 0 
            && cards_tmp_list[card_number+2] > 0) {
            return true;
        }

        if (card_number + 1 < 9 && cards_tmp_list[card_number+1] > 0 
            && card_number - 1 >= 0 && cards_tmp_list[card_number-1] > 0) {
            return true;
        }

        return false;
    }

    public static getGangCardInfo(cards) {
        var cards_len = cards.length;
        if (cards_len < 4) {
            return null;
        }

        Logic.resetCardsArray();
        for (var i = 0; i < cards_len; i++) {
            var card = cards[i];
            var card_index = (card.type-1)*10 + card.card_number;
            
            Logic.cards_list[card_index]++;
            if (Logic.cards_list[card_index] == 4) {
                return [card.type, card.card_number];
            }
        }
        
        return null;
    }

    public static checkIfCardsEquals(cards):boolean {
        var cards_len = cards.length;
        for (var i = 0; i < cards_len-1; i++) {
            var card = cards[i];
            var next_card = cards[i+1];
            if (card.type != next_card.type 
                    || card.card_number != next_card.card_number) {
                return false;
            }
        }
        
        return true;
    }

    public static getLastWinCardMoney() {
        if (Logic.win_card_res_list.length <= 0) {
            return 0;
        }

        if (Logic.win_card_res_list[0].type == WIN_CARDS_TYPE.NORMAL) {
            return 1;
        }
        else if (Logic.win_card_res_list[0].type == WIN_CARDS_TYPE.PAIRS) {
            return 5;
        }
        else if (Logic.win_card_res_list[0].type == WIN_CARDS_TYPE.COLOR_SINGLE) {
            return 3;
        }

        return 0;
    }

}


