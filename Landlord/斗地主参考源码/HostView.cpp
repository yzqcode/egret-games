// HostView.cpp : CHostView 类的实现
//

#include "stdafx.h"
#include "Host.h"

#include "HostDoc.h"
#include "HostView.h"
#include "Game.h"
#include "Control.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif

CControl  g_kz;
CGame *g_game=new CControl;
// CHostView

IMPLEMENT_DYNCREATE(CHostView, CView)

BEGIN_MESSAGE_MAP(CHostView, CView)
	// 标准打印命令
	ON_COMMAND(ID_FILE_PRINT, &CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_DIRECT, &CView::OnFilePrint)
	ON_COMMAND(ID_FILE_PRINT_PREVIEW, &CView::OnFilePrintPreview)

	ON_MESSAGE(WM_ON_SENDCARD, OnSendMessage)
	ON_WM_LBUTTONDOWN()
	ON_WM_MOUSEMOVE()
	ON_WM_LBUTTONUP()
	ON_WM_RBUTTONDOWN()
	ON_WM_TIMER()
	ON_WM_CREATE()
	ON_WM_CHAR()
END_MESSAGE_MAP()

// CHostView 构造/析构

CHostView::CHostView()
{
m_cardNum =54;
}

CHostView::~CHostView()
{
}

BOOL CHostView::PreCreateWindow(CREATESTRUCT& cs)
{
	// TODO: 在此处通过修改
	//  CREATESTRUCT cs 来修改窗口类或样式
g_game->InitGameData();
 
	return CView::PreCreateWindow(cs);
}

// CHostView 绘制

void CHostView::OnDraw(CDC* pDC)
{
	CHostDoc* pDoc = GetDocument();
	ASSERT_VALID(pDoc);
	if (!pDoc)
		return;
	g_game->GameDraw(pDC);

	if ( g_game->GetMessage())
		{
		g_game->SetMessage(false);
		SetTimer(7,1000,0);
		
		}
	switch(g_game->GetGameState())
		{
		case FAIPAI:
			if (g_game->GetShuffle())
				{
				SetTimer(1,150,NULL);
				}
			break;
		}
	
}



#ifdef _DEBUG
void CHostView::AssertValid() const
{
	CView::AssertValid();
}

void CHostView::Dump(CDumpContext& dc) const
{
	CView::Dump(dc);
}

CHostDoc* CHostView::GetDocument() const // 非调试版本是内联的
{
	ASSERT(m_pDocument->IsKindOf(RUNTIME_CLASS(CHostDoc)));
	return (CHostDoc*)m_pDocument;
}
#endif //_DEBUG

//鼠标单击
void CHostView::OnLButtonDown(UINT nFlags, CPoint point)
	{
	
	if (g_game->GetGameState()==PREPARE||g_game->GetGameState()==START)
		{
	g_kz.LButtonDown(g_game,point);


	m_clientRect.left=0;
	m_clientRect.top=0;
	m_clientRect.right=780;
	m_clientRect.bottom=620;
	InvalidateRect(&m_clientRect,false);
		}
	CView::OnLButtonDown(nFlags, point);
	}
//鼠标移动
void CHostView::OnMouseMove(UINT nFlags, CPoint point)
	{

	if (g_game->GetGameState()==PREPARE||g_game->GetGameState()==START)
	{
	  g_kz.LMouseMove(g_game,point);
	  m_clientRect.left=0;
	  m_clientRect.top=0;
	  m_clientRect.right=780;
	  m_clientRect.bottom=620;
	  InvalidateRect(&m_clientRect,false);
	}
 


 
	CView::OnMouseMove(nFlags, point);
	}

void CHostView::OnLButtonUp(UINT nFlags, CPoint point)
	{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	if (g_game->GetGameState()==PREPARE||g_game->GetGameState()==START)
	{
	g_kz.LButtonUp(g_game,point);
	m_clientRect.left=0;
	m_clientRect.top=0;
	m_clientRect.right=780;
	m_clientRect.bottom=620;
	InvalidateRect(&m_clientRect,false);
	}
 
	CView::OnLButtonUp(nFlags, point);
	}

void CHostView::OnRButtonDown(UINT nFlags, CPoint point)
	{
	if (g_game->GetGameState()==PREPARE||g_game->GetGameState()==START)
		{
   g_kz.RButtonDown(g_game);
   m_clientRect.left=0;
   m_clientRect.top=0;
   m_clientRect.right=780;
   m_clientRect.bottom=620;
   InvalidateRect(&m_clientRect,false);
		}
	CView::OnRButtonDown(nFlags, point);
	}
//出牌
LRESULT CHostView::OnSendMessage(WPARAM wParam, LPARAM lParam)
	{

	switch(g_game->GetGameState())
		{
		case PREPARE:
		case START:
			switch(g_game->GetWhoSendCard())
				{
				case PLAYER_A:
				case PLAYER_C:
					g_kz.ComputerSendCard(g_game);
					break;
				}
			break;
		}
	
	m_clientRect.left=0;
	m_clientRect.top=0;
	m_clientRect.right=780;
	m_clientRect.bottom=620;
	InvalidateRect(&m_clientRect,false);
	return 0;

	}
int index=0;
int a;
bool dong=true;
int y=50;
void CHostView::OnTimer(UINT_PTR nIDEvent)
	{
	// TODO: 在此添加消息处理程序代码和/或调用默认值
	
	switch(nIDEvent)
		{
		case  1:
         index++;
		 if (index>=19)
		 {
		  index =55;
		  a=54;
		  g_game->SetShuffle(false);
		  g_game->SetSendCard(true);
		  KillTimer(1);
		  SetTimer(2,200,NULL);
		 }
		 g_game->SetIndex(index);
			break;
		case 2:
			index--;
			KillTimer(2);
			SetTimer(3,1,0);
			g_game->SetCardsNum(index);
			y=20;
			break;
		case 3:
		//	
			y+=100;
			g_game->SetY(y);
			if (index>3)
				{
				switch((a-index)%3)
					{
					case 0:
						if (y>=g_game->m_playA[(a-index)/3].coord_y)
						{
						      y=g_game->m_playA[(a-index)/3].coord_y;
                              g_game->m_playA[(a-index)/3].isHave =true;
							   KillTimer(3);
							  SetTimer(2,1,0);	 
						}	
						break;
					case 1:
						if (y>=g_game->m_playB[(a-index)/3].coord_y)
							{
							y=g_game->m_playB[(a-index)/3].coord_y;
							g_game->m_playB[(a-index)/3].isHave =true;
							KillTimer(3);
							SetTimer(2,1,0);
							}
						break;
					case 2:
						if (y>=g_game->m_playC[(a-index)/3].coord_y)
							{
							y=g_game->m_playC[(a-index)/3].coord_y;
							g_game->m_playC[(a-index)/3].isHave =true;
							 KillTimer(3);
							SetTimer(2,1,0);
							}
						break;
					}
				}else  if(index>=1&&index<=3)
				{
				if (y>=g_game->m_dizhu[3-index].coord_y)
					{
					y=g_game->m_dizhu[3-index].coord_y;
				    g_game->m_dizhu[3-index].isHave =true;
				     SetTimer(2,1,0);
				  
					}
				}else  if(index ==0)
				{
				KillTimer(3);
				 g_game->SetGameState(PREPARE);
				}

			break;
		case 7:
			KillTimer(7);
             SendMessage(WM_ON_SENDCARD);
			 break;
			 
		}
	m_clientRect.left=0;
	m_clientRect.top=0;
	m_clientRect.right=780;
	m_clientRect.bottom=620;
	InvalidateRect(&m_clientRect,false);
	CView::OnTimer(nIDEvent);
	}

int CHostView::OnCreate(LPCREATESTRUCT lpCreateStruct)
	{
	if (CView::OnCreate(lpCreateStruct) == -1)
		return -1;
	
	// TODO:  在此添加您专用的创建代码

	return 0;
	}

void CHostView::OnChar(UINT nChar, UINT nRepCnt, UINT nFlags)
	{
	if (g_game->GetGameState()==START)
	{
	switch(nChar)
		{
		case 'a':
		case 'A':
			g_game->SetShow();
			break;
		}
	}
	
	m_clientRect.left=0;
	m_clientRect.top=0;
	m_clientRect.right=780;
	m_clientRect.bottom=620;
	InvalidateRect(&m_clientRect,false);
	CView::OnChar(nChar, nRepCnt, nFlags);
	}
