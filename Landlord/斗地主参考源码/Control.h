#pragma once
#include "Game.h"
#include "Method.h"
class CControl :
	public CGame
	{
	public:
		void LMouseMove(CGame * ,const POINT& );//鼠标移动
		void LButtonDown(CGame * ,const POINT&);//鼠标单击
		void LButtonUp(CGame * ,const POINT&);//鼠标单击
		bool RButtonDown(CGame *);
		
		void CControl::ForceHost(CGame *member);//强地主

		void ComputerSendCard(CGame *member);//电脑玩家出牌

		bool IsHostSend(CGame *);//判断是否是由地主出牌
		bool IsHostDown(CGame *);//判断是否处于地主的下家
		CControl(void);
	public:
		CMethod m_member;
		CARDTYPE  m_cardType;
		~CControl(void);
	};
