var PLAY_CARDS_TYPE;
(function (PLAY_CARDS_TYPE) {
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_SINGLE"] = 1] = "CT_SINGLE";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_DOUBLE"] = 2] = "CT_DOUBLE";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_THREE"] = 3] = "CT_THREE";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_THREE_LINE"] = 4] = "CT_THREE_LINE";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_THREE_LINE_TAKE_ONE"] = 5] = "CT_THREE_LINE_TAKE_ONE";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_THREE_LINE_TAKE_TWO"] = 6] = "CT_THREE_LINE_TAKE_TWO";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_SINGLE_LINE"] = 7] = "CT_SINGLE_LINE";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_DOUBLE_LINE"] = 8] = "CT_DOUBLE_LINE";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_BOMB_CARD"] = 9] = "CT_BOMB_CARD";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_FOUR_LINE_TAKE_ONE"] = 10] = "CT_FOUR_LINE_TAKE_ONE";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_FOUR_LINE_TAKE_TWO"] = 11] = "CT_FOUR_LINE_TAKE_TWO";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_MISSILE_CARD"] = 12] = "CT_MISSILE_CARD";
    PLAY_CARDS_TYPE[PLAY_CARDS_TYPE["CT_ERROR"] = 13] = "CT_ERROR"; //错误的牌(牌型不正确)
})(PLAY_CARDS_TYPE || (PLAY_CARDS_TYPE = {}));
var CardAnalysisResult = (function () {
    function CardAnalysisResult() {
        this.cbFourCount = 0; //四张数目
        this.cbThreeCount = 0; //三张数目
        this.cbDoubleCount = 0; //二张数目
        this.cbSingledCount = 0; //单张数目
        this.cbFourCardData = []; //四张扑克
        this.cbThreeCardData = []; //三张扑克  
        this.cbDoubleCardData = []; //两张扑克  
        this.cbSingledCardData = []; //单张扑克  
    }
    var __egretProto__ = CardAnalysisResult.prototype;
    return CardAnalysisResult;
})();
CardAnalysisResult.prototype.__class__ = "CardAnalysisResult";
;
//class Card {
//    public type:CARD_TYPE;
//    public card_number:number;
//}
var Logic = (function () {
    function Logic() {
    }
    var __egretProto__ = Logic.prototype;
    // 分析扑克
    Logic.AnalyseCards = function (cards) {
        var analysis_res = new CardAnalysisResult();
        for (var i = 0; i < cards.length; i++) {
            var card_same_count = 1;
            var card_value_temp = 0;
            for (var j = i + 1; j < cards.length; j++) {
                if (cards[i].card_number != cards[j].card_number) {
                    break;
                }
                card_same_count++;
            }
            switch (card_same_count) {
                case 1:
                    {
                        analysis_res.cbSingledCount++;
                        analysis_res.cbSingledCardData.push(cards[i]);
                        break;
                    }
                case 2:
                    {
                        analysis_res.cbDoubleCount++;
                        analysis_res.cbDoubleCardData.push(cards[i]);
                        analysis_res.cbDoubleCardData.push(cards[i + 1]);
                        break;
                    }
                case 3:
                    {
                        analysis_res.cbThreeCount++;
                        analysis_res.cbThreeCardData.push(cards[i]);
                        analysis_res.cbThreeCardData.push(cards[i + 1]);
                        analysis_res.cbThreeCardData.push(cards[i + 2]);
                        break;
                    }
                case 4:
                    {
                        analysis_res.cbFourCount++;
                        analysis_res.cbFourCardData.push(cards[i]);
                        analysis_res.cbFourCardData.push(cards[i + 1]);
                        analysis_res.cbFourCardData.push(cards[i + 2]);
                        analysis_res.cbFourCardData.push(cards[i + 3]);
                        break;
                    }
            }
            i += card_same_count;
            i--;
        }
        return analysis_res;
    };
    // 判断card1和card2是否是连牌, 注意，card1 <= card2
    Logic.CheckIfTwoCardsJoin = function (card2, card1) {
        // Joker跟任何牌不相连
        if (card1.type == 5 /* CARD_TYPE_JOKER */ || card2.type == 5 /* CARD_TYPE_JOKER */) {
            return false;
        }
        // 2跟任何牌不相连
        if (card1.card_number == 2 || card2.card_number == 2) {
            return false;
        }
        // A是连牌中的上限
        if (card1.card_number == 1) {
            return false;
        }
        if (card1.card_number < 13 && card2.card_number == card1.card_number + 1) {
            return true;
        }
        if (card1.card_number == 13 && card2.card_number == 1) {
            return true;
        }
        return false;
    };
    // 通过出来的张数和相同的牌来组合牌型, 获取牌的类型
    Logic.GetCardsType = function (cards) {
        var cards_count = cards.length;
        switch (cards_count) {
            case 0:
                {
                    //空牌
                    return 13 /* CT_ERROR */;
                }
            case 1:
                {
                    //单牌
                    return 1 /* CT_SINGLE */;
                }
            case 2:
                {
                    // 火箭(大小王)
                    if (cards[0].type == 5 /* CARD_TYPE_JOKER */ && cards[1].type == 5 /* CARD_TYPE_JOKER */) {
                        return 12 /* CT_MISSILE_CARD */;
                    }
                    // 对牌
                    if (cards[0].card_number == cards[0].card_number) {
                        return 2 /* CT_DOUBLE */;
                    }
                    return 13 /* CT_ERROR */;
                }
        }
        var analysis_res = Logic.AnalyseCards(cards);
        //四牌判断
        if (analysis_res.cbFourCount > 0) {
            if (analysis_res.cbFourCount == 1 && cards_count == 4) {
                return 9 /* CT_BOMB_CARD */;
            }
            if (analysis_res.cbFourCount == 1 && analysis_res.cbSingledCount == 2 && cards_count == 6) {
                return 10 /* CT_FOUR_LINE_TAKE_ONE */;
            }
            if (analysis_res.cbFourCount == 1 && analysis_res.cbDoubleCount == 2 && cards_count == 8) {
                return 11 /* CT_FOUR_LINE_TAKE_TWO */;
            }
            return 13 /* CT_ERROR */;
        }
        //三牌判断
        if (analysis_res.cbThreeCount > 0) {
            //三张不带
            if (analysis_res.cbThreeCount == 1 && cards_count == 3)
                return 3 /* CT_THREE */;
            //连牌判断  
            if (analysis_res.cbThreeCount > 1) {
                for (var i = 1; i < analysis_res.cbThreeCount; i++) {
                    var prev_card = analysis_res.cbThreeCardData[(i - 1) * 3];
                    var card = analysis_res.cbThreeCardData[i * 3];
                    if (Logic.CheckIfTwoCardsJoin(prev_card, card) == false) {
                        return 13 /* CT_ERROR */;
                    }
                }
            }
            //牌形判断  
            if (analysis_res.cbThreeCount * 3 == cards_count) {
                return 4 /* CT_THREE_LINE */;
            }
            if (analysis_res.cbThreeCount * 4 == cards_count && analysis_res.cbThreeCount == analysis_res.cbSingledCount) {
                return 5 /* CT_THREE_LINE_TAKE_ONE */;
            }
            if (analysis_res.cbThreeCount * 5 == cards_count && analysis_res.cbDoubleCount == analysis_res.cbThreeCount) {
                return 6 /* CT_THREE_LINE_TAKE_TWO */;
            }
            return 13 /* CT_ERROR */;
        }
        //两牌判断
        if (analysis_res.cbDoubleCount >= 3) {
            for (var i = 1; i < analysis_res.cbDoubleCount; i++) {
                var prev_card = analysis_res.cbDoubleCardData[(i - 1) * 2];
                var card = analysis_res.cbDoubleCardData[i * 2];
                if (Logic.CheckIfTwoCardsJoin(prev_card, card) == false) {
                    return 13 /* CT_ERROR */;
                }
            }
            if (analysis_res.cbDoubleCount * 2 == cards_count) {
                return 8 /* CT_DOUBLE_LINE */;
            }
            return 13 /* CT_ERROR */;
        }
        //单张判断  
        if (analysis_res.cbSingledCount >= 5 && analysis_res.cbSingledCount == cards_count) {
            for (var i = 1; i < analysis_res.cbSingledCount; i++) {
                var prev_card = analysis_res.cbSingledCardData[(i - 1)];
                var card = analysis_res.cbSingledCardData[i];
                if (Logic.CheckIfTwoCardsJoin(prev_card, card) == false) {
                    return 13 /* CT_ERROR */;
                }
            }
            return 7 /* CT_SINGLE_LINE */;
        }
        return 13 /* CT_ERROR */;
    };
    // 判断card1和card2大小, card1 > card2 return true, else false.
    Logic.CompTwoCard = function (card1, card2) {
        var card_value1 = card1.card_number;
        var card_value2 = card2.card_number;
        if (card_value1 == 1) {
            card_value1 += 50;
        }
        else if (card_value1 == 2) {
            card_value1 += 60;
        }
        if (card_value2 == 1) {
            card_value2 += 50;
        }
        else if (card_value2 == 2) {
            card_value2 += 60;
        }
        if (card1.type == 5 /* CARD_TYPE_JOKER */) {
            card_value1 += 100;
        }
        if (card2.type == 5 /* CARD_TYPE_JOKER */) {
            card_value2 += 100;
        }
        if (card_value1 > card_value2) {
            return true;
        }
        return false;
    };
    Logic.CompareCard = function (prev_cards, current_cards) {
        //获取类型  
        var prev_type = Logic.GetCardsType(prev_cards);
        var current_type = Logic.GetCardsType(current_cards);
        Logic.current_cards_type = current_type;
        //类型判断  
        if (current_type == 13 /* CT_ERROR */) {
            return false;
        }
        if (current_type == 12 /* CT_MISSILE_CARD */) {
            return true;
        }
        //炸弹判断  
        if (prev_type != 9 /* CT_BOMB_CARD */ && current_type == 9 /* CT_BOMB_CARD */) {
            return true;
        }
        if (prev_type == 9 /* CT_BOMB_CARD */ && current_type != 9 /* CT_BOMB_CARD */) {
            return false;
        }
        //规则判断  
        if (prev_type != current_type || prev_cards.length != current_cards.length) {
            return false;
        }
        switch (current_type) {
            case 1 /* CT_SINGLE */:
            case 2 /* CT_DOUBLE */:
            case 3 /* CT_THREE */:
            case 7 /* CT_SINGLE_LINE */:
            case 8 /* CT_DOUBLE_LINE */:
            case 4 /* CT_THREE_LINE */:
            case 9 /* CT_BOMB_CARD */:
                {
                    //对比扑克  
                    return Logic.CompTwoCard(current_cards[0], prev_cards[0]);
                }
            case 5 /* CT_THREE_LINE_TAKE_ONE */:
            case 6 /* CT_THREE_LINE_TAKE_TWO */:
                {
                    //分析扑克  
                    var prev_result = Logic.AnalyseCards(prev_cards);
                    var current_result = Logic.AnalyseCards(current_cards);
                    //对比扑克  
                    return Logic.CompTwoCard(current_result.cbThreeCardData[0], prev_result.cbThreeCardData[0]);
                }
            case 10 /* CT_FOUR_LINE_TAKE_ONE */:
            case 11 /* CT_FOUR_LINE_TAKE_TWO */:
                {
                    //分析扑克  
                    var prev_result = Logic.AnalyseCards(prev_cards);
                    var current_result = Logic.AnalyseCards(current_cards);
                    //对比扑克  
                    return Logic.CompTwoCard(current_result.cbFourCardData[0], prev_result.cbFourCardData[0]);
                }
        }
        return false;
    };
    // 对比扑克大小
    Logic.current_cards_type = 0;
    return Logic;
})();
Logic.prototype.__class__ = "Logic";
