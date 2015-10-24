enum PLAY_CARDS_TYPE
{
    CT_SINGLE = 1,          //单张
    CT_DOUBLE,              //对子
    CT_THREE,               //3不带
    CT_THREE_LINE,          //飞机不带
    CT_THREE_LINE_TAKE_ONE, //飞机带单牌
    CT_THREE_LINE_TAKE_TWO, //飞机带对
    CT_SINGLE_LINE,         //连牌
    CT_DOUBLE_LINE,         //连队
    CT_BOMB_CARD,           //炸弹
    CT_FOUR_LINE_TAKE_ONE,  //4个带2单
    CT_FOUR_LINE_TAKE_TWO,  //4个带2对
    CT_MISSILE_CARD,        //大小王

    CT_ERROR                //错误的牌(牌型不正确)
}

class CardAnalysisResult  
{  
    public cbFourCount:number = 0;    //四张数目
    public cbThreeCount:number = 0;   //三张数目
    public cbDoubleCount:number = 0;  //二张数目
    public cbSingledCount:number = 0; //单张数目
    public cbFourCardData = [];        //四张扑克
    public cbThreeCardData = [];       //三张扑克  
    public cbDoubleCardData = [];      //两张扑克  
    public cbSingledCardData = [];     //单张扑克  
}; 

//class Card {
//    public type:CARD_TYPE;
//    public card_number:number;
//}

class Logic {

    // 分析扑克
    public static AnalyseCards(cards) {
        var analysis_res = new CardAnalysisResult();

        for (var i = 0; i < cards.length; i++) {
            var card_same_count:number = 1;
            var card_value_temp:number = 0;

            //搜索同牌
            for (var j = i+1; j < cards.length; j++) {
                if (cards[i].card_number != cards[j].card_number) {
                    break;
                }

                card_same_count++;
            }

            switch (card_same_count)
            {
                case 1: //单张
                {
                    analysis_res.cbSingledCount++;
                    analysis_res.cbSingledCardData.push(cards[i]);
                    break; 
                }

                case 2: //两张
                {
                    analysis_res.cbDoubleCount++;
                    analysis_res.cbDoubleCardData.push(cards[i]);
                    analysis_res.cbDoubleCardData.push(cards[i+1]);
                    break;
                }

                case 3: //三张
                {
                    analysis_res.cbThreeCount++;

                    analysis_res.cbThreeCardData.push(cards[i]);
                    analysis_res.cbThreeCardData.push(cards[i+1]);
                    analysis_res.cbThreeCardData.push(cards[i+2]);
                    break; 
                }

                case 4: //四张
                {
                    analysis_res.cbFourCount++;

                    analysis_res.cbFourCardData.push(cards[i]);
                    analysis_res.cbFourCardData.push(cards[i+1]);
                    analysis_res.cbFourCardData.push(cards[i+2]);
                    analysis_res.cbFourCardData.push(cards[i+3]);
                    break; 
                }
            }

            i += card_same_count;
            i--;
        }

        return analysis_res;
    }

    // 判断card1和card2是否是连牌, 注意，card1 <= card2
    public static CheckIfTwoCardsJoin(card2, card1) {
        // Joker跟任何牌不相连
        if (card1.type == CARD_TYPE.CARD_TYPE_JOKER 
            || card2.type == CARD_TYPE.CARD_TYPE_JOKER) {
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

        if (card1.card_number < 13 && card2.card_number == card1.card_number+1) {
            return true;
        }

        if (card1.card_number == 13 && card2.card_number == 1) {
            return true;
        }

        return false;
    }

    // 通过出来的张数和相同的牌来组合牌型, 获取牌的类型
    public static GetCardsType(cards) {
        var cards_count = cards.length;
        // 少于三张的简单牌型
        switch (cards_count)
        {
            case 0:
            {
                //空牌
                return PLAY_CARDS_TYPE.CT_ERROR;
            }

            case 1: 
            {  
                //单牌
                return PLAY_CARDS_TYPE.CT_SINGLE;  
            }  
            case 2:
            {  
                // 火箭(大小王)
                if (cards[0].type == CARD_TYPE.CARD_TYPE_JOKER
                        && cards[1].type == CARD_TYPE.CARD_TYPE_JOKER) {
                    return PLAY_CARDS_TYPE.CT_MISSILE_CARD;
                }

                // 对牌
                if (cards[0].card_number == cards[0].card_number) {
                    return PLAY_CARDS_TYPE.CT_DOUBLE;
                }

                return PLAY_CARDS_TYPE.CT_ERROR;  
            } 
        }

        var analysis_res = Logic.AnalyseCards(cards);

        //四牌判断
        if (analysis_res.cbFourCount > 0) {
            if (analysis_res.cbFourCount == 1 && cards_count == 4) {
                return PLAY_CARDS_TYPE.CT_BOMB_CARD;
            }
            if (analysis_res.cbFourCount == 1 && analysis_res.cbSingledCount == 2 
                    && cards_count == 6) {
                return PLAY_CARDS_TYPE.CT_FOUR_LINE_TAKE_ONE;
            }
            if (analysis_res.cbFourCount == 1 && analysis_res.cbDoubleCount == 2 
                    && cards_count == 8) {
                return PLAY_CARDS_TYPE.CT_FOUR_LINE_TAKE_TWO;
            }

            return PLAY_CARDS_TYPE.CT_ERROR;
        }
        
        //三牌判断
        if (analysis_res.cbThreeCount > 0) {
            //三张不带
            if(analysis_res.cbThreeCount == 1 && cards_count == 3) 
                return PLAY_CARDS_TYPE.CT_THREE;  

            //连牌判断  
            if(analysis_res.cbThreeCount > 1)  
            {  
                //连牌判断 
                for (var i = 1; i < analysis_res.cbThreeCount; i++) {  
                    var prev_card = analysis_res.cbThreeCardData[(i-1)*3];
                    var card = analysis_res.cbThreeCardData[i*3];
                    if (Logic.CheckIfTwoCardsJoin(prev_card, card) == false) {
                        return PLAY_CARDS_TYPE.CT_ERROR;
                    } 
                }  
            }  

            //牌形判断  
            if (analysis_res.cbThreeCount*3 == cards_count) {
                return PLAY_CARDS_TYPE.CT_THREE_LINE;
            }

            if (analysis_res.cbThreeCount*4 == cards_count 
                && analysis_res.cbThreeCount == analysis_res.cbSingledCount) {
                return PLAY_CARDS_TYPE.CT_THREE_LINE_TAKE_ONE;
            }

            if (analysis_res.cbThreeCount*5 == cards_count 
                && analysis_res.cbDoubleCount == analysis_res.cbThreeCount) {
                return PLAY_CARDS_TYPE.CT_THREE_LINE_TAKE_TWO;  
            }

            return PLAY_CARDS_TYPE.CT_ERROR; 
        }

        //两牌判断
        if(analysis_res.cbDoubleCount >= 3) {  
            //连牌判断 
            for (var i = 1; i < analysis_res.cbDoubleCount; i++) {  
                var prev_card = analysis_res.cbDoubleCardData[(i-1)*2];
                var card = analysis_res.cbDoubleCardData[i*2];
                if (Logic.CheckIfTwoCardsJoin(prev_card, card) == false) {
                    return PLAY_CARDS_TYPE.CT_ERROR;
                } 
            }

            if(analysis_res.cbDoubleCount*2 == cards_count) {
                return PLAY_CARDS_TYPE.CT_DOUBLE_LINE;
            }

            return PLAY_CARDS_TYPE.CT_ERROR;  
        }

        //单张判断  
        if(analysis_res.cbSingledCount >= 5
            && analysis_res.cbSingledCount == cards_count) {
            //连牌判断 
            for (var i = 1; i < analysis_res.cbSingledCount; i++) {  
                var prev_card = analysis_res.cbSingledCardData[(i-1)];
                var card = analysis_res.cbSingledCardData[i];
                if (Logic.CheckIfTwoCardsJoin(prev_card, card) == false) {
                    return PLAY_CARDS_TYPE.CT_ERROR;
                } 
            }

            return PLAY_CARDS_TYPE.CT_SINGLE_LINE;  
        }

        return PLAY_CARDS_TYPE.CT_ERROR;
    }

    // 判断card1和card2大小, card1 > card2 return true, else false.
    public static CompTwoCard(card1, card2) {
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

        if (card1.type == CARD_TYPE.CARD_TYPE_JOKER) {
            card_value1 += 100;
        }
        if (card2.type == CARD_TYPE.CARD_TYPE_JOKER) {
            card_value2 += 100;
        }

        if (card_value1 > card_value2) {
            return true;
        }

        return false;
    }

    // 对比扑克大小
    public static current_cards_type = 0;
    public static CompareCard(prev_cards, current_cards) {
        //获取类型  
        var prev_type = Logic.GetCardsType(prev_cards);
        var current_type = Logic.GetCardsType(current_cards);

        Logic.current_cards_type = current_type;

        //类型判断  
        if (current_type == PLAY_CARDS_TYPE.CT_ERROR) {
            return false;
        }

        if (current_type == PLAY_CARDS_TYPE.CT_MISSILE_CARD) {
            return true;
        }

        //炸弹判断  
        if (prev_type != PLAY_CARDS_TYPE.CT_BOMB_CARD && current_type == PLAY_CARDS_TYPE.CT_BOMB_CARD) {
            return true;
        }
        if (prev_type == PLAY_CARDS_TYPE.CT_BOMB_CARD && current_type != PLAY_CARDS_TYPE.CT_BOMB_CARD) {
            return false;
        }
        
        //规则判断  
        if (prev_type != current_type 
            || prev_cards.length != current_cards.length) {
            return false;
        }

        //开始对比  
        switch (current_type)  
        {  
            case PLAY_CARDS_TYPE.CT_SINGLE:  
            case PLAY_CARDS_TYPE.CT_DOUBLE:  
            case PLAY_CARDS_TYPE.CT_THREE:  
            case PLAY_CARDS_TYPE.CT_SINGLE_LINE:  
            case PLAY_CARDS_TYPE.CT_DOUBLE_LINE:  
            case PLAY_CARDS_TYPE.CT_THREE_LINE:  
            case PLAY_CARDS_TYPE.CT_BOMB_CARD:  
            {
                //对比扑克  
                return Logic.CompTwoCard(current_cards[0], prev_cards[0]);
            }  
            case PLAY_CARDS_TYPE.CT_THREE_LINE_TAKE_ONE:  
            case PLAY_CARDS_TYPE.CT_THREE_LINE_TAKE_TWO:  
            {  
                //分析扑克  
                var prev_result = Logic.AnalyseCards(prev_cards);
                var current_result = Logic.AnalyseCards(current_cards);

                //对比扑克  
                return Logic.CompTwoCard(current_result.cbThreeCardData[0], prev_result.cbThreeCardData[0]); 
            }  
            case PLAY_CARDS_TYPE.CT_FOUR_LINE_TAKE_ONE:  
            case PLAY_CARDS_TYPE.CT_FOUR_LINE_TAKE_TWO:  
            {  
                //分析扑克  
                var prev_result = Logic.AnalyseCards(prev_cards);
                var current_result = Logic.AnalyseCards(current_cards);

                //对比扑克  
                return Logic.CompTwoCard(current_result.cbFourCardData[0], prev_result.cbFourCardData[0]); 
            }  
        }  

        return false;
    }
}


