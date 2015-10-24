#include "StdAfx.h"
#include "Control.h"
#include <stdio.h>
CControl::CControl(void)
	{
	}
void CControl::LMouseMove(CGame *  member,const POINT& p)//鼠标移动
	{
	
	  m_member.CheckImage(member->m_imageButton,p);
	
	}
//强地主
void CControl::ForceHost(CGame *member)
	{
	switch(member->GetWhoCallHost())
		{
		case PLAYER_A:
			for (int i=0;i<member->m_dizhu.size();i++)
				{
				SCARD temp1;
				temp1.coord_x=60;
				temp1.coord_y=50+(i+17)*20;
				temp1.cx=member->m_dizhu[i].cx;
				temp1.cy=member->m_dizhu[i].cy;
				temp1.isHave=true;
				member->m_playA.push_back(temp1);
				}
			m_member.SortCards(member->m_playA);
			break;
		case PLAYER_B:
			for (int i=0;i<member->m_dizhu.size();i++)
				{

				SCARD temp1;
				temp1.coord_x=180+(i+17)*20;
				temp1.coord_y=470;
				temp1.cx=member->m_dizhu[i].cx;
				temp1.cy=member->m_dizhu[i].cy;
				temp1.isBack=false;
			    temp1.isHave=true;
				member->m_playB.push_back(temp1);
				}
			m_member.SortCards(member->m_playB);
			break;
		case PLAYER_C:
			for (int i=0;i<member->m_dizhu.size();i++)
				{
				SCARD temp1;
				temp1.coord_x=630;
				temp1.coord_y=50+(i+17)*20;
				temp1.cx=member->m_dizhu[i].cx;
				temp1.cy=member->m_dizhu[i].cy;
				member->m_playC.push_back(temp1);
				temp1.isHave=true;
				}
			m_member.SortCards(member->m_playC);
			break;
		}
	}
void CControl::LButtonDown(CGame *  member,const POINT& p)//鼠标单击
	{
	static int  i=0;
	switch(member->GetGameState())
	{
			case PREPARE:
				switch(m_member.ClickImage(member->m_imageButton,p))
					{

					case  0://1分
						break;
					case 1://2分
						break;
					case 2://3分
						ForceHost(member);//强地主
						member->SetGameState(START);//设置状态为开始游戏
						member->SetWhoIsHost(PLAYER_B);
						member->SetWhoSendCard(PLAYER_B);//设置当前出牌为玩家B
						m_member.DeleteImage(member->m_imageButton);//输出准备游戏的按钮图片
						break;
					case 3://不叫
						break;
					}
				break;
			case START:
				m_member.ClickCard(member->m_playB,p);//单击牌
				if (member->GetWhoSendCard()==PLAYER_B)
				{
				switch(m_member.ClickImage(member->m_imageButton,p))//单击图片按钮
					{
					case  0://出牌
						RButtonDown(member);
						break;
					case 1://提示
						break;
					case 2://不出
						m_member.m_noSendNum+=1;
						PASS  temp;
						temp.isShow=true;
						temp.x=350;
						temp.y=370;
						member->setPass(temp);
						for (vector<SENDCARDS>::iterator iter=member->m_sendCard.begin();iter!=member->m_sendCard.end();)
							{
							if (iter->ID==PLAYER_B)
								{
								iter=member->m_sendCard.erase(iter);
								}else
									iter ++;
							}
						member->SetWhoSendCard(PLAYER_C);//设置当前出牌为玩家B
						member->SetMessage(true);
						break;
					}

				}
				
				break;
	}
	
	}

void CControl::LButtonUp(CGame * member,const POINT& p)//鼠标单击
	{
	
	 m_member.CancelImage(member->m_imageButton,p);
	
	
	}
bool CControl::IsHostSend(CGame *member)//判断是否是由地主出牌
	{
	 if (m_member.m_sendArray.whoHost==member->getWhoIsHost())
	 {
	     return  true;
	 }
	 return false;
	}
bool CControl::IsHostDown(CGame *member)//判断是否处于地主的下家
	{
	
	switch(member->GetWhoSendCard())
		{
		case PLAYER_A:
			if (member->getWhoIsHost()==PLAYER_C)
			 {
			 return true;
			 }
			return false;
			break;
		case PLAYER_B:
			if (member->getWhoIsHost()==PLAYER_A)
				{
				return true;
				}
			return false;
			break;
		case PLAYER_C:
			if (member->getWhoIsHost()==PLAYER_B)
				{
				return true;
				}
			return false;
			break;
		}
	
	
	}
bool CControl::RButtonDown(CGame *member)//鼠标右键出牌
	{
	char  str[100]={0};
	
	    if(member->GetGameState()==START)
		{
		      if (member->GetWhoSendCard()==PLAYER_B)
		      {
			    m_cardType=m_member.SendCards(member->m_playB,member->m_sendCard);
			    if( m_cardType!=ERRORCARDS)
					{ 
					if (member->m_playB.size()==0)
					{
					 
					 
					  member->SetShow();
					  MessageBox(0,0,"游戏结束",0);
					 member->SetGameState(END);
					}
                      m_member.m_sendArray.whoHost=PLAYER_B;
					 m_member.m_sendArray.isHost=IsHostSend(member);
					 m_member.m_sendArray.max =m_member.m_maxCard;
					 m_member.m_sendArray.type =m_cardType;
					 member->SetWhoSendCard(PLAYER_C);
					 member->SetMessage(true);
					 m_member.m_noSendNum =0;
					 for (int i=0;i<member->m_imageButton.size();i++)
					 {
					  if (member->m_imageButton[i].index==3)
					  {
					  member->m_imageButton[i].index=0;
					   
					  }
					 }
					 return true;
					}else 
					{
                         return false;
					}
					
		      }
		

	}
}


void CControl::ComputerSendCard(CGame *member)//电脑玩家出牌
	{

	switch(member->GetWhoSendCard())
		{
		case PLAYER_A://玩家A
			for (vector<SENDCARDS>::iterator iter=member->m_sendCard.begin();iter!=member->m_sendCard.end();)
				{
				if (iter->ID==PLAYER_A)
					{
					iter=member->m_sendCard.erase(iter);
					}else
						iter ++;
				}
			m_member.ClassifyCards(member->m_playA);
			if(m_member.PlayerSendCards(m_member.m_noSendNum,PLAYER_A,IsHostDown(member),member->m_sendCard,member->m_playA))
				{
				if (member->m_playA.size()==0)
				{
					member->SetShow();
				  MessageBox(0,0,"游戏结束!",0); 
				  member->SetGameState(END);
				}
				m_member.m_sendArray.whoHost=PLAYER_A;
				m_member.m_sendArray.isHost=IsHostSend(member);
				m_member.m_sendArray.max =m_member.m_maxCard;
				m_member.m_noSendNum=0;
				PASS temp;
				temp.isShow=false;
				member->setPass(temp);
				}else
				{
				m_member.m_noSendNum+=1;
				PASS  temp;
				temp.isShow=true;
				temp.x=150;
				temp.y=170;
				member->setPass(temp);
					}
				member->SetWhoSendCard(PLAYER_B);
				if (member->GetWhoSendCard()==PLAYER_B&&m_member.m_noSendNum==2)
					{
					member->m_imageButton[1].index=3;
					member->m_imageButton[2].index=3;

					}
			member->SetMessage(true);
			break;
		case PLAYER_C://玩家B
			for (vector<SENDCARDS>::iterator iter=member->m_sendCard.begin();iter!=member->m_sendCard.end();)
				{
				if (iter->ID==PLAYER_C)
					{
					
					iter=member->m_sendCard.erase(iter);
					}else
						iter ++;
				}
			m_member.ClassifyCards(member->m_playC);
			if(m_member.PlayerSendCards(m_member.m_noSendNum,PLAYER_C,IsHostDown(member),member->m_sendCard,member->m_playC))
				{
				if (member->m_playC.size()==0)
					{
					member->SetShow();
					MessageBox(0,0,"游戏结束!",0);  
					member->SetGameState(END);
					}
				m_member.m_sendArray.whoHost=PLAYER_C;
				m_member.m_sendArray.max =m_member.m_maxCard;
			   m_member.m_sendArray.isHost=IsHostSend(member);
				m_member.m_noSendNum=0;
				PASS temp;
				temp.isShow=false;
				member->setPass(temp);
				}else
				{ 
				   m_member.m_noSendNum+=1;
				    PASS  temp;
                    temp.isShow=true;
					temp.x=530;
					temp.y=170;
					member->setPass(temp);
				}
			member->SetWhoSendCard(PLAYER_A);
			member->SetMessage(true);
			//m_member.m_sendArray.isHost=IsHostSend(member);
		
			break;
		}
	}
CControl::~CControl(void)
	{
	}
