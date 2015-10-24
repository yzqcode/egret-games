#include "StdAfx.h"
#include "Game.h"

CGame::CGame(void)
	{
	 m_gameState =FAIPAI;
	 m_whoCallHost= PLAYER_B;
	 m_pass.isShow =false;
	 m_isShuffle =true;
	 m_isSendCard =false;
	 m_coor_y=20.0f;
m_cardNums =54;
m_imageIndex=0;
	 m_isMessage =false;
	}
void CGame::LoadImage()
	{
	m_bit[0]=(HBITMAP)::LoadImage(NULL,"Image\\ReviewBk.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//背景
	m_bit[1]=(HBITMAP)::LoadImage(NULL,"Image\\ReviewBk.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//背景
	m_bit[2]=(HBITMAP)::LoadImage(NULL,"Image\\lCardBig.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//牌的动画
	m_bit[3]=(HBITMAP)::LoadImage(NULL,"Image\\lshuff0.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//洗牌动画
	m_bit[4]=(HBITMAP)::LoadImage(NULL,"Image\\touxiang1.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//touxiang1
	m_bit[5]=(HBITMAP)::LoadImage(NULL,"Image\\touxiang3.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//touxiang2
	m_bit[6]=(HBITMAP)::LoadImage(NULL,"Image\\touxiang2.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//touxiang3
	m_bit[7]=(HBITMAP)::LoadImage(NULL,"Image\\touxiang0.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//touxiangback
	m_bit[8]=(HBITMAP)::LoadImage(NULL,"Image\\ltime0.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//时间
	m_bit[9]=(HBITMAP)::LoadImage(NULL,"Image\\time1.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//时间
	m_bit[10]=(HBITMAP)::LoadImage(NULL,"Image\\Call1.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//call1
	m_bit[11]=(HBITMAP)::LoadImage(NULL,"Image\\mask.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//call1
	m_bit[12]=(HBITMAP)::LoadImage(NULL,"Image\\Call2.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//call2
	m_bit[14]=(HBITMAP)::LoadImage(NULL,"Image\\Call3.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//call3
	m_bit[16]=(HBITMAP)::LoadImage(NULL,"Image\\NOCall.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//call3
	m_bit[17]=(HBITMAP)::LoadImage(NULL,"Image\\sendCard.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//sendCards;
	m_bit[18]=(HBITMAP)::LoadImage(NULL,"Image\\Help.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//sendCards;
	m_bit[19]=(HBITMAP)::LoadImage(NULL,"Image\\Pass.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//sendCards;
	m_bit[20]=(HBITMAP)::LoadImage(NULL,"Image\\nosend.bmp",IMAGE_BITMAP,0,0,LR_LOADFROMFILE);//NOsendCards;
	}
void CGame::InitGameData()
	{
	int intArray[54]={-1};
	m_meth.Shuffle(intArray);//洗牌
	for (int i=0;i<51;i++)
		{
		if (i%3==0)
			{
			m_card[i].coord_x=60.0f;
			m_card[i].coord_y=50+i/3*20.0f;
			m_card[i].cx =intArray[i]%13;
			m_card[i].cy =intArray[i]/13;
			m_playA.push_back(m_card[i]);
			}else if(i%3==1)
			{
			m_card[i].coord_x=180.0f+i/3*20.0f;
			m_card[i].coord_y=470.0f;
			m_card[i].cx =intArray[i]%13;
			m_card[i].cy =intArray[i]/13;
			m_card[i].isBack=false;
			m_playB.push_back(m_card[i]);
				}else if(i%3==2)
				{
				m_card[i].coord_x=630.0f;
				m_card[i].coord_y=50.0f+i/3*20;
				m_card[i].cx =intArray[i]%13;
				m_card[i].cy =intArray[i]/13;
				m_playC.push_back(m_card[i]);
					}
		}
	for (int i=51;i<54;i++)
		{
		m_card[i].coord_x=200.0f+(i-51)*150;
		m_card[i].coord_y=20.0f;
		m_card[i].cx =intArray[i]%13;
		m_card[i].cy =intArray[i]/13;
		m_dizhu.push_back(m_card[i]);

		}
	
	


	
LoadImage();//加载图片

m_meth.SortCards(m_playA); //排序
m_meth.SortCards(m_playB);
m_meth.SortCards(m_playC);


//设置图片按钮
IMAGEBUTTON temp; 
//1分
temp.s_rcet.SetRect(200,410,282,450);
temp.ID=PREPARE;
m_imageButton.push_back(temp);
//2fen
temp.s_rcet.SetRect(290,410,372,450);
m_imageButton.push_back(temp);

//3fen
temp.s_rcet.SetRect(380,410,462,450);
m_imageButton.push_back(temp);
// NO call

temp.s_rcet.SetRect(470,410,552,450);
m_imageButton.push_back(temp);
	}
void CGame::GameStart()
	{
	}

void CGame::DrawPlayer(vector<SCARD> & tempVector)//绘制玩家
	{
	m_dcImage.SelectObject(m_bit[2]);
	for (int i=0;i<tempVector.size();i++)
		{
		if (tempVector[i].isBack==false)
		{
		if (tempVector[i].isHave)
		 {
		// m_dcBuffer.BitBlt((int)tempVector[i].coord_x,(int)tempVector[i].coord_y,80,105,&m_dcImage,tempVector[i].cx*80,tempVector[i].cy*105,SRCCOPY);
		 m_dcBuffer.TransparentBlt((int)tempVector[i].coord_x,(int)tempVector[i].coord_y,80,105,&m_dcImage,tempVector[i].cx*80,tempVector[i].cy*105,80,105,RGB(255,0,255));
			}
		 }
		else
		{
		if (tempVector[i].isHave)
			{
			m_dcBuffer.TransparentBlt((int)tempVector[i].coord_x,(int)tempVector[i].coord_y,80,105,&m_dcImage,80*2,105*4,80,105,RGB(255,0,255));
			}

		}
		 
		}
	}

void CGame::DrawHost()//绘制地主
	{
	switch(m_gameState)//游戏状态
		{
		case FAIPAI:
		case PREPARE:
			for(int i=0;i<(unsigned)m_dizhu.size();i++)
				{
				if (m_dizhu[i].isHave)
				{
			//	m_dcBuffer.BitBlt((int)m_dizhu[i].coord_x,(int)m_dizhu[i].coord_y,80,105,&m_dcImage,80*2,105*4,SRCCOPY);
				m_dcBuffer.TransparentBlt((int)m_dizhu[i].coord_x,(int)m_dizhu[i].coord_y,80,105,&m_dcImage,80*2,105*4,80,105,RGB(255,0,255));
				}
				}
			break;
		case START:
		case END:
			for(int i=0;i<m_dizhu.size();i++)
				{
				//m_dcBuffer.BitBlt((int)m_dizhu[i].coord_x,(int)m_dizhu[i].coord_y,80,105,&m_dcImage,80*m_dizhu[i].cx,m_dizhu[i].cy*105,SRCCOPY);
				m_dcBuffer.TransparentBlt((int)m_dizhu[i].coord_x,(int)m_dizhu[i].coord_y,80,105,&m_dcImage,80*m_dizhu[i].cx,105*m_dizhu[i].cy,80,105,RGB(255,0,255));
				}
			break;
		}

	}
void CGame::DrawImageButton()
	{

	  for (int i=0;i<m_imageButton.size();i++)
	  {
	  switch (GetGameState())
	  {
		  case PREPARE:
			  m_dcImage.SelectObject(m_bit[10+i*2]);
			 
			  break;
		  case START:
			  m_dcImage.SelectObject(m_bit[17+i]);
			 
			  break;
	   
	  }
	  
	  if ((m_whoCallHost==PLAYER_B&&m_gameState==PREPARE)||(m_whoSendCard==PLAYER_B&&m_gameState==START))
	  {
	  m_dcMask.SelectObject(m_bit[11]);
	  m_dcBuffer.BitBlt(m_imageButton[i].s_rcet.left,m_imageButton[i].s_rcet.top,82,40,&m_dcMask,0,0,SRCAND);
	  m_dcBuffer.BitBlt(m_imageButton[i].s_rcet.left,m_imageButton[i].s_rcet.top,82,40,&m_dcImage,82*m_imageButton[i].index,0,SRCPAINT);
	  }
	 
	  }
	}

void CGame::DrawSendCard()//绘制出的牌
	{
	m_dcImage.SelectObject(m_bit[2]);
	 for (int i=0;i<m_sendCard.size();i++)
	 {
	 // m_dcBuffer.BitBlt(m_sendCard[i].coord_x,m_sendCard[i].coord_y,80,105,&m_dcImage,m_sendCard[i].cx*80,m_sendCard[i].cy*105,SRCCOPY);
	  m_dcBuffer.TransparentBlt((int)m_sendCard[i].coord_x,(int)m_sendCard[i].coord_y,80,105,&m_dcImage,80*m_sendCard[i].cx,105*m_sendCard[i].cy,80,105,RGB(255,0,255));
	 }
	  
	}

void CGame::DrawPass()
	{

	 if (m_pass.isShow)
	 {
	   m_dcImage.SelectObject(m_bit[20]);
	  // m_dcBuffer.BitBlt(m_pass.x,m_pass.y,63,27,&m_dcImage,0,0,SRCCOPY);
	   m_dcBuffer.TransparentBlt(m_pass.x,m_pass.y,63,27,&m_dcImage,0,0,63,27,RGB(3,134,210));

	 }
	   
	}
void CGame::GameDraw(CDC * pDC)
	{
	m_dcBuffer.CreateCompatibleDC( pDC);
	m_dcImage.CreateCompatibleDC(pDC);
	m_dcMask.CreateCompatibleDC(pDC);

	m_dcBuffer.SelectObject(m_bit[0]);

	//绘制背景
	m_dcImage.SelectObject(m_bit[1]);
	m_dcBuffer.BitBlt(0,0,780,600,&m_dcImage,0,0,SRCCOPY);


	if (m_gameState==FAIPAI)
	{
	 if (m_isShuffle)
	 {
	 m_dcImage.SelectObject(m_bit[3]);
	// m_dcBuffer.BitBlt(250,50,255,164,&m_dcImage,m_imageIndex*255,0,SRCCOPY);
	 m_dcBuffer.TransparentBlt(250,50,255,164,&m_dcImage,m_imageIndex*255,0,255,164,RGB(16,101,148));
	}
	 if (m_isSendCard)
	 {
	 m_dcImage.SelectObject(m_bit[2]);
	 for (int i=0;i<m_cardNums;i++)
		 {
		 m_dcBuffer.BitBlt(150+8*i,20,80-4,105-3,&m_dcImage,80*2+2,105*4+2,SRCCOPY);
		 }
	 }
	 calculateTwoPoint(150+8*m_cardNums,20,m_card[54-m_cardNums].coord_x,m_card[54-m_cardNums].coord_y);
	// m_dcBuffer.BitBlt((m_coor_y-m_b)/m_k,m_coor_y,80,105,&m_dcImage,80*2,4*105,SRCCOPY);
	 m_dcBuffer.TransparentBlt((m_coor_y-m_b)/m_k,m_coor_y,80,105,&m_dcImage,80*2,4*105,80,105,RGB(255,0,255));
	}
//绘制玩家
	DrawPlayer(m_playA);
	DrawPlayer(m_playB);
	DrawPlayer(m_playC);

	

//绘制地主
	DrawHost();
	
//绘制按钮图片
	DrawImageButton();

    DrawSendCard();

	DrawPass();//绘制pass
	pDC->BitBlt(0,0,780,600,&m_dcBuffer,0,0,SRCCOPY);



	m_dcBuffer.DeleteDC();
	m_dcImage.DeleteDC();
	m_dcMask.DeleteDC();
	}


void CGame::calculateTwoPoint(float  x1,float  y1,float  x2,float  y2)//计算两点间的线段
	{

	m_k=(y1-y2)/(x1-x2);
	m_b=y1-x1*m_k;
	}

void CGame::SetShow()
	{
	  for (int i=0;i<m_playA.size();i++)
	  {
	   if (m_playA[i].isBack==true)
	   {
	     m_playA[i].isBack=false;
		}else
		 {
          m_playA[i].isBack=true;
	     }
	  }
	  for (int i=0;i<m_playC.size();i++)
		  {
		  if (m_playC[i].isBack==true)
			  {
			  m_playC[i].isBack=false;
			  }else
			  {
			  m_playC[i].isBack=true;
				  }
		  }
	}
CGame::~CGame(void)
	{
	}
