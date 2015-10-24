#pragma once
#include "GameData.h"
#include <vector>
using namespace std;

struct CARDSTYLE
	{
	
	 int max;//最大值
	 int min;//最小值
	 int m_value;//权值
	 int m_ID;
	 bool m_ISprimary;//主次之分,true为主牌,false为次牌 
	 CARDSTYLE()
		 {
		 m_ISprimary =false;
		 }
	};

struct ARRAYSENDCARD 
{
   int max;  //当前出牌的最大值
   CARDTYPE type;//当前出牌的类型
   int whoHost;//是否是地主出的牌
   bool isHost;
   int cardNum;
};
struct ZONGCARDS
	{
	vector <CARDSTYLE>  s_rocket;//火箭
	vector <CARDSTYLE>  s_bosb;//炸弹
	vector <CARDSTYLE>  s_three;//3条
	vector <CARDSTYLE>  s_plane;//飞机
	vector <CARDSTYLE>  s_link;//连牌
	vector <CARDSTYLE>  s_doubleLink;//双顺
	vector <CARDSTYLE>  s_double;//对子
	vector <CARDSTYLE>  s_single;//单张
	
	 
	};
class CMethod
	{
	public:
		CMethod(void);
		void Shuffle(int * );//洗牌
		 void SortCards(vector<SCARD>&);// 排序牌的方法
		 void CheckImage( vector<IMAGEBUTTON>& ,const POINT &);//判断图片的色度
		 int ClickImage(vector<IMAGEBUTTON>& ,const POINT &);//单击图片
		 void CancelImage(vector<IMAGEBUTTON>& ,const POINT &);//取消图片
		 void DeleteImage(vector<IMAGEBUTTON>&);//删除图片
		 void ForceHost();//强制当地主
         
		 void ClickCard(vector<SCARD>&,const POINT&);//单击牌
         CARDTYPE SendCards(vector<SCARD>&,vector<SENDCARDS>&);//出牌
		 CARDTYPE JudgeCardsType(vector<SENDCARDS>&);//判断牌型(参数:出牌的数组，最大值)
		 bool  JudeLink(int * temp);//判断3张是否连着
        
		void ClassifyCards(vector<SCARD>&);//对牌进行分类

		void JudeDoubleLink(vector<CARDSTYLE> &,vector<CARDSTYLE> &,bool);//判断连队
		void JudeFly(vector<CARDSTYLE> &,vector<CARDSTYLE>&,bool);//判断飞机
		void DeleteElement(vector<CARDSTYLE> &,vector<CARDSTYLE>& );//从一个向量里面删除元素
		bool DeleteComputerCard(vector<SCARD>&,CARDTYPE,vector<SENDCARDS>& ,int,int ,int);//删除电脑的牌

		bool sendPlane(vector<SCARD>& player,vector<SENDCARDS>& send,int  ID,int x,int y);
		void JudeLink();//判断连牌
		void SplitCards();//拆牌
		int GetCardNum();//计算牌的手数

		void RegainCard();//恢复最开始的牌

		void ErgodicCard(bool ,bool ,bool ,bool ,bool );//遍历牌型

		bool PlayerSendCards(int ,int,bool,vector<SENDCARDS>&,vector<SCARD>& );//另外2家有几次没有出牌，当前是谁出的牌，是否处于地主的下家,出牌数组,玩家出牌
		CARDTYPE SendStely();//计算当前出牌的类型

		
	public:
		~CMethod(void);
		ARRAYSENDCARD     m_sendArray;
		int     m_maxCard;//牌的最大值
		int m_noSendNum;//2家不要得次数

	private:
		vector<IMAGEBUTTON> m_cardImage; //玩家点击牌时的结构体，用来判断
		int m_intArray[15];          //记录每张牌出现的次数3----大鬼
		vector<SENDCARDS> m_send;//出牌临时数组
		NUMBER  m_card;//单张，对子，3张，4张出现的次数
		int     m_maxValue[4];//记录最大值
		int     m_arrayThree[6];//记录3张出现的shihou
		

		vector <CARDSTYLE>  m_rocket;//火箭
		vector <CARDSTYLE>  m_bomb;//炸弹
		vector <CARDSTYLE>  m_three;//3条
		vector <CARDSTYLE>  m_plane;//飞机
		vector <CARDSTYLE>  m_link;//连牌
		vector <CARDSTYLE>  m_doubleLink;//双顺
		vector <CARDSTYLE>  m_double;//对子
		vector <CARDSTYLE>  m_single;//单张
	    vector<ZONGCARDS>   m_handNum;//牌的手数

		
	};
