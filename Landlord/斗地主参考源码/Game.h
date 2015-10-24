#pragma once
#include "GameData.h"
#include <vector>
using namespace  std;
#include "cards.h"
#include "Method.h"


class CGame :
	public CCards
	{
	public:
		CGame(void);
		void InitGameData();                                         //游戏初始化
		void GameStart();                                            //游戏开始
		void GameDraw(CDC *);                                         //游戏的绘制
		
		int GetGameState(){ return m_gameState;}//获得游戏状态
		int GetWhoCallHost(){return m_whoCallHost;}//获得当前谁叫地主
		int GetWhoSendCard(){return m_whoSendCard;}//获得当前该谁出牌
		int getWhoIsHost(){return m_whoIsHost;} //获得谁是地主
		int GetIndex(){return m_imageIndex;}//获得图片的索引
		bool GetShuffle(){return  m_isShuffle;}//获得当前是否正在洗牌
		bool GetSendCard(){return  m_isSendCard;}//获得当前是否正在fapai
		int GetCardsNum(){return  m_cardNums;}//获得当前是否正在fapai
		float GetY(){return m_coor_y;}

        void SetShow();
		void  SetY(float  i){m_coor_y =i;} 
		void SetCardsNum(int i){ m_cardNums =i;}//设置fapai
		void SetSendCard(bool is){ m_isSendCard =is;}//设置fapai
		void SetShuffle(bool is){m_isShuffle =is;}//设置洗牌
		void SetIndex(int i){m_imageIndex =i;}//设置图片索引
		void SetGameState(int state){  m_gameState=state;}//设置游戏状态
		void SetWhoCallHost(int player){ m_whoCallHost=player;}//设置当前谁叫地主
		void SetWhoSendCard(int whoSend){ m_whoSendCard=whoSend;}//设置当前该谁出牌
		void SetWhoIsHost(int player){m_whoIsHost=player;}
		void setPass(PASS p){m_pass =p;}
		void SetMessage(bool IS){m_isMessage =IS;}//设置手动发送消息
		bool GetMessage(){return m_isMessage;}//判断是否手动发送消息

		void calculateTwoPoint(float,float,float,float);//计算两点间的线段
	private:
        void LoadImage();           //载入图片
		void DrawPlayer(vector<SCARD> &);//绘制玩家
		void DrawHost();//绘制地主
		void DrawImageButton();//绘制按钮图片
		void DrawSendCard();//绘制出的牌
		void DrawPass();//绘制不出


		int m_cardNums;
	    int  m_imageIndex;       //图片索引
		int  m_gameState;       //游戏状态(发牌，叫地主，开始游戏，游戏结束)
		int  m_whoCallHost;     //谁叫地主
		int m_whoSendCard;      //谁出牌
		int m_whoIsHost;       //谁是地主;

		bool m_isMessage;  //是否手动发送消息
		bool m_isShuffle;// 判断是否正在洗牌
		bool m_isSendCard;
		PASS m_pass;//pass
		/* DC*/
		CMethod m_meth;
		HBITMAP m_bit[30];         //绘图数组
		CDC m_dcBuffer;//双缓冲背景DC
		CDC m_dcImage;//牌DC
		CDC m_dcMask;//掩码图DC
		SCARD m_card[54]; //54张图片
     public:	


         SCARD  m_intArray[54];
		
		 float m_k;/*y=kx+b;*/
		 float m_b;
		 float m_coor_y;


		vector<SCARD> m_playA;      //玩家A
		vector<SCARD> m_playB;      //玩家B
		vector<SCARD> m_playC;     //玩家C
		vector<SCARD> m_dizhu;     //地主
		vector<SENDCARDS> m_sendCard;
		vector<IMAGEBUTTON> m_imageButton; //图片按钮图片数组

		

		//vector<IMAGEBUTTON> m_cardImageButton;//玩家牌的数组，用于判断用户单击
		

	






		~CGame(void);
	};
