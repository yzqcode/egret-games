struct tagAnalyseResult  
{  
    BYTE                         cbFourCount;                       //四张数目  
    BYTE                         cbThreeCount;                      //三张数目  
    BYTE                         cbDoubleCount;                     //两张数目  
    BYTE                         cbSignedCount;                    //单张数目  
    BYTE                         cbFourCardData[MAX_COUNT];        //四张克  
    BYTE                         cbThreeCardData[MAX_COUNT];       //三张扑克  
    BYTE                         cbDoubleCardData[MAX_COUNT];      //两张扑克  
    BYTE                         cbSignedCardData[MAX_COUNT];      //单张扑克  
}; 

enum  CARDTYPE
{
    CT_SINGLE=1,                      //单张
    CT_DOUBLE,                         //对子
    CT_SINGLE_LINE,                         //连牌
    CT_DOUBLE_LINE,                     //连队
    CT_THREE,                        //3不带
    CT_THREE_LINE_TAKE_ONE,                   //三带一
    CT_THREE_LINE_TAKE_TWO,                   //3带2
    CT_THREE_LINE,                        //飞机不带
    PLANECARDSOFONE,                   //飞机带单张
    PLANECARDSOFTWO,                   //飞机带2对
    CT_BOMB_CARD,                         //炸弹
    CT_FOUR_LINE_TAKE_ONE,                    //四个带2个;
    CT_FOUR_LINE_TAKE_TWO,                    //4个带1对

    CT_MISSILE_CARD // 大小王

    CT_ERROR                         //错误的牌(牌型不正确)
};

//当我们需要判断牌型的时候，先分析牌把对应的数据存放到上面的结构体。
//然后根据不同牌型的规则来判断即可。主要通过下面2个函数.话不多说直接上源代码：

//1. 分析扑克（参数:1将要出牌的数据，出牌的张数,out存放分析的结构体）
void CGameLogic::AnalysebCardData(constBYTE cbCardData[], BYTE cbCardCount, tagAnalyseResult & AnalyseResult)  
{  
    //设置结果  
    ZeroMemory(&AnalyseResult,sizeof(AnalyseResult));  

    //扑克分析  
    for(BYTE i=0;i<cbCardCount;i++)  
    {  
        //变量定义  
        BYTE cbSameCount=1,cbCardValueTemp=0;  
        BYTE cbLogicValue=GetCardLogicValue(cbCardData[i]);  

        //搜索同牌  
        for(BYTE j=i+1;j<cbCardCount;j++)  
        {  
            //获取扑克  
            if(GetCardLogicValue(cbCardData[j])!=cbLogicValue) break;  

            //设置变量  
            cbSameCount++;  
        }  

        //设置结果  
        switch(cbSameCount)  
        {  
            case 1:               //单张  
            {  
                BYTE cbIndex=AnalyseResult.cbSignedCount++;  
                AnalyseResult.cbSignedCardData[cbIndex*cbSameCount]=cbCardData[i];  
                break;  
            }  
            case 2:               //两张  
            {  
                BYTE cbIndex=AnalyseResult.cbDoubleCount++;  
                AnalyseResult.cbDoubleCardData[cbIndex*cbSameCount]=cbCardData[i];  
                AnalyseResult.cbDoubleCardData[cbIndex*cbSameCount+1]=cbCardData[i+1];  
                break;  
            }  
            case 3:               //三张  
            {  
                BYTE cbIndex=AnalyseResult.cbThreeCount++;  
                AnalyseResult.cbThreeCardData[cbIndex*cbSameCount]=cbCardData[i];  
                AnalyseResult.cbThreeCardData[cbIndex*cbSameCount+1]=cbCardData[i+1];  
                AnalyseResult.cbThreeCardData[cbIndex*cbSameCount+2]=cbCardData[i+2];  
                break;  
            }  
            case 4:               //四张  
            {  
                BYTE cbIndex=AnalyseResult.cbFourCount++;  
                AnalyseResult.cbFourCardData[cbIndex*cbSameCount]=cbCardData[i];  
                AnalyseResult.cbFourCardData[cbIndex*cbSameCount+1]=cbCardData[i+1];  
                AnalyseResult.cbFourCardData[cbIndex*cbSameCount+2]=cbCardData[i+2];  
                AnalyseResult.cbFourCardData[cbIndex*cbSameCount+3]=cbCardData[i+3];  
                break;  
            }  
        }  

        //设置索引  
        i+=cbSameCount-1;  
    }  

    return;  
}  
       
// 2.获取具体牌的类型 （实现原理就是 通过出来的张数 和相同的牌来组合牌型 看是否满足）  
//获取类型  
BYTE CGameLogic::GetCardType(const BYTE cbCardData[], BYTE cbCardCount)  
{  
    //简单牌型  
    switch(cbCardCount)  
    {  
        case 0:      //空牌  
        {  
            return CT_ERROR;  
        }  
        case 1: //单牌  
        {  
            return CT_SINGLE;  
        }  
        case 2:      //对牌火箭  
        {  
            //牌型判断  
            if((cbCardData[0]==0x4F)&&(cbCardData[1]==0x4E))
                return CT_MISSILE_CARD;  

            if(GetCardLogicValue(cbCardData[0])==GetCardLogicValue(cbCardData[1]))
                return CT_DOUBLE;  

            return CT_ERROR;  
        }  
    }  

    //分析扑克  
    tagAnalyseResult AnalyseResult;  
    AnalysebCardData(cbCardData,cbCardCount,AnalyseResult);  

    //四牌判断  
    if(AnalyseResult.cbFourCount > 0)  
    {  
        //牌型判断  
        if((AnalyseResult.cbFourCount==1)&&(cbCardCount==4))
            return CT_BOMB_CARD;  
        // if((AnalyseResult.cbFourCount==1)&&(AnalyseResult.cbSignedCount==2)&&(cbCardCount==6))
        //     return CT_FOUR_LINE_TAKE_ONE;  
        if((AnalyseResult.cbFourCount==1)&&(AnalyseResult.cbSignedCount==2)&&(cbCardCount==6))
            return CT_FOUR_LINE_TAKE_ONE;  
        if((AnalyseResult.cbFourCount==1)&&(AnalyseResult.cbDoubleCount==2)&&(cbCardCount==8))
            return CT_FOUR_LINE_TAKE_TWO;  

        returnCT_ERROR;  
    }  

    //三牌判断  
    if(AnalyseResult.cbThreeCount>0)  
    {  
        //三条类型  
        if(AnalyseResult.cbThreeCount==1&& cbCardCount==3) 
            return CT_THREE;  

        //连牌判断  
        if(AnalyseResult.cbThreeCount>1)  
        {  
            //变量定义  
            BYTE cbCardData=AnalyseResult.cbThreeCardData[0];  
            BYTE cbFirstLogicValue=GetCardLogicValue(cbCardData);  

            //错误过虑  
            if(cbFirstLogicValue>=15) 
                return CT_ERROR;  

            //连牌判断  
            for(BYTE i=1;i<AnalyseResult.cbThreeCount;i++)  
            {  
                BYTE cbCardData=AnalyseResult.cbThreeCardData[i*3];  
                if(cbFirstLogicValue!=(GetCardLogicValue(cbCardData)+i)) 
                    return CT_ERROR;  
            }  
        }  

        //牌形判断  
        if(AnalyseResult.cbThreeCount*3==cbCardCount) 
            return CT_THREE_LINE;  
        if(AnalyseResult.cbThreeCount*4==cbCardCount) 
            return CT_THREE_LINE_TAKE_ONE;  
        if((AnalyseResult.cbThreeCount*5==cbCardCount)&&(AnalyseResult.cbDoubleCount==AnalyseResult.cbThreeCount))
            return CT_THREE_LINE_TAKE_TWO;  

        return CT_ERROR;  
    }  

    //两张类型  
    if(AnalyseResult.cbDoubleCount>=3)  
    {  
        //变量定义  
        BYTE cbCardData=AnalyseResult.cbDoubleCardData[0];  
        BYTE cbFirstLogicValue=GetCardLogicValue(cbCardData);  

        //错误过虑  
        if(cbFirstLogicValue>=15) 
            return CT_ERROR;  

        //连牌判断  
        for(BYTE i=1;i<AnalyseResult.cbDoubleCount;i++)  
        {  
            BYTE cbCardData=AnalyseResult.cbDoubleCardData[i*2];  
            if(cbFirstLogicValue!=(GetCardLogicValue(cbCardData)+i)) 
                return CT_ERROR;  
        }  

        //二连判断  
        if((AnalyseResult.cbDoubleCount*2)==cbCardCount)
            return CT_DOUBLE_LINE;  

        return CT_ERROR;  
    }  

    //单张判断  
    if((AnalyseResult.cbSignedCount>=5)&&(AnalyseResult.cbSignedCount==cbCardCount))  
    {  
        //变量定义  
        BYTE cbCardData=AnalyseResult.cbSignedCardData[0];  
        BYTE cbFirstLogicValue=GetCardLogicValue(cbCardData);  

        //错误过虑  
        if(cbFirstLogicValue>=15) 
            return CT_ERROR;  

        //连牌判断  
        for(BYTE i=1;i<AnalyseResult.cbSignedCount;i++)  
        {  
            BYTE cbCardData=AnalyseResult.cbSignedCardData[i];  
            if(cbFirstLogicValue!=(GetCardLogicValue(cbCardData)+i)) 
                return CT_ERROR;  
        }  

        return CT_SINGLE_LINE;  
    }  

    return CT_ERROR;  
}  

//对比扑克
bool CGameLogic::CompareCard(constBYTE cbFirstCard[], constBYTE cbNextCard[], BYTE cbFirstCount, BYTE cbNextCount)  
{  
    //获取类型  
    BYTE cbNextType=GetCardType(cbNextCard,cbNextCount);  
    BYTE cbFirstType=GetCardType(cbFirstCard,cbFirstCount);  

    //类型判断  
    if(cbNextType==CT_ERROR) 
        return false;  

    if(cbNextType==CT_MISSILE_CARD) 
        return true;  

    //炸弹判断  
    if((cbFirstType!=CT_BOMB_CARD)&&(cbNextType==CT_BOMB_CARD)) 
        return true;  
    if((cbFirstType==CT_BOMB_CARD)&&(cbNextType!=CT_BOMB_CARD)) 
        return false;  

    //规则判断  
    if((cbFirstType!=cbNextType)||(cbFirstCount!=cbNextCount))
        return false;  

    //开始对比  
    switch(cbNextType)  
    {  
        case CT_SINGLE:  
        case CT_DOUBLE:  
        case CT_THREE:  
        case CT_SINGLE_LINE:  
        case CT_DOUBLE_LINE:  
        case CT_THREE_LINE:  
        case CT_BOMB_CARD:  
        {  
            //获取数值  
            BYTE cbNextLogicValue=GetCardLogicValue(cbNextCard[0]);  
            BYTE cbFirstLogicValue=GetCardLogicValue(cbFirstCard[0]);  

            //对比扑克  
            return cbNextLogicValue>cbFirstLogicValue;  
        }  
        case CT_THREE_LINE_TAKE_ONE:  
        case CT_THREE_LINE_TAKE_TWO:  
        {  
            //分析扑克  
            tagAnalyseResult NextResult;  
            tagAnalyseResult FirstResult;  
            AnalysebCardData(cbNextCard,cbNextCount,NextResult);  
            AnalysebCardData(cbFirstCard,cbFirstCount,FirstResult);  

            //获取数值  
            BYTEcbNextLogicValue=GetCardLogicValue(NextResult.cbThreeCardData[0]);  
            BYTEcbFirstLogicValue=GetCardLogicValue(FirstResult.cbThreeCardData[0]);  

            //对比扑克  
            return cbNextLogicValue>cbFirstLogicValue;  
        }  
        case CT_FOUR_LINE_TAKE_ONE:  
        case CT_FOUR_LINE_TAKE_TWO:  
        {  
            //分析扑克  
            tagAnalyseResult NextResult;  
            tagAnalyseResult FirstResult;  
            AnalysebCardData(cbNextCard,cbNextCount,NextResult);  
            AnalysebCardData(cbFirstCard,cbFirstCount,FirstResult);  

            //获取数值  
            BYTEcbNextLogicValue=GetCardLogicValue(NextResult.cbFourCardData[0]);  
            BYTE cbFirstLogicValue=GetCardLogicValue(FirstResult.cbFourCardData[0]);  

            //对比扑克  
            return cbNextLogicValue>cbFirstLogicValue;  
        }  
    }  

    return false;  
}  