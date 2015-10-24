// DengLu.cpp : 实现文件
//

#include "stdafx.h"
#include "Host.h"
#include "DengLu.h"


// CDengLu 对话框

IMPLEMENT_DYNAMIC(CDengLu, CDialog)

CDengLu::CDengLu(CWnd* pParent /*=NULL*/)
	: CDialog(CDengLu::IDD, pParent)
	, m_editStr(_T(""))
	{
      m_bitmapIndex =134;
}

CDengLu::~CDengLu()
{
}

void CDengLu::DoDataExchange(CDataExchange* pDX)
{
CDialog::DoDataExchange(pDX);
DDX_Control(pDX, IDC_PIC, m_pic);
DDX_Control(pDX, IDC_SCROLLBAR1, m_sll);

DDX_Text(pDX, IDC_EDIT1, m_editStr);
	}


BEGIN_MESSAGE_MAP(CDengLu, CDialog)
	ON_WM_PAINT()
	ON_BN_CLICKED(IDOK, &CDengLu::OnBnClickedOk)
	ON_NOTIFY(NM_THEMECHANGED, IDC_SCROLLBAR1, &CDengLu::OnNMThemeChangedScrollbar1)
	ON_WM_HSCROLL()
	ON_WM_TIMER()
	ON_STN_CLICKED(IDC_STATIC1, &CDengLu::OnStnClickedStatic1)
END_MESSAGE_MAP()


// CDengLu 消息处理程序

void CDengLu::OnPaint()
	{
	CPaintDC dc(this); // device context for painting
	CBitmap bmp; 
	bmp.LoadBitmap(m_bitmapIndex); 
	m_pic.SetBitmap((HBITMAP)bmp);
	
	bmp.Detach(); 
	//InvalidateRect( rcPic ); // 重绘Pic控件区域 
	}
BOOL CDengLu::OnInitDialog()
	{
	CDialog::OnInitDialog();

	CTime cTime = CTime::GetCurrentTime();
	CString strTime;
	//字符串格式化时间
	strTime.Format("%d-%d-%d  %d:%d:%d",cTime.GetYear(),cTime.GetMonth(),cTime.GetDay(),cTime.GetHour(),cTime.GetMinute(),cTime.GetSecond());
	//设置当前窗口标题
	CWnd * pWnd=GetDlgItem(IDC_STATIC1);
	pWnd->SetWindowText(strTime);
	
	GetDlgItem(IDC_PIC)->GetWindowRect(&m_picRect);//获取控件相对于屏幕的位置
	ScreenToClient(m_picRect);//转化为对话框上的相对位置
	
SetTimer(1,1000,NULL);//设置时钟

 m_sll.SetScrollRange(0,3);

	return TRUE;  // return TRUE unless you set the focus to a control
	// 异常: OCX 属性页应返回 FALSE
	}

void CDengLu::OnBnClickedOk()
	{

	  GetDlgItemText(IDC_EDIT1,m_editStr);
	  if (m_editStr.GetLength()>=4&&m_editStr.GetLength()<=12)
	  {
	  OnOK();
	  
	 }else
	 {
	   AfxMessageBox("对不起，昵称必须在4-12个字符之间！");
	   m_bitmapIndex;
	}
	//
	}

void CDengLu::OnNMThemeChangedScrollbar1(NMHDR *pNMHDR, LRESULT *pResult)
	{
	//AfxMessageBox("dsdsd");
	
	*pResult = 0;
	}

void CDengLu::OnHScroll(UINT nSBCode, UINT nPos, CScrollBar* pScrollBar)
	{
	
	int currpos,minpos,maxpos;
	currpos=m_sll.GetScrollPos();
	m_sll.GetScrollRange(&minpos,&maxpos);
	
	switch(nSBCode)
		{
			break;
		case SB_LINELEFT:
			if (currpos>minpos)
			{
			currpos--;
			m_bitmapIndex--;
			
			}
			break;
		case SB_LINERIGHT:
			if (currpos<maxpos)
			{
			currpos++;
			m_bitmapIndex++;
			}
			break;
		}
 m_sll.SetScrollPos(currpos);
 InvalidateRect(m_picRect,0);
	CDialog::OnHScroll(nSBCode, nPos, pScrollBar);
	}


void CDengLu::OnTimer(UINT_PTR nIDEvent)
	{

	CTime cTime = CTime::GetCurrentTime();
	CString strTime;
	//字符串格式化时间
	strTime.Format("%d-%d-%d  %d:%d:%d",cTime.GetYear(),cTime.GetMonth(),cTime.GetDay(),cTime.GetHour(),cTime.GetMinute(),cTime.GetSecond());
	//设置当前窗口标题
	CWnd * pWnd=GetDlgItem(IDC_STATIC1);
	pWnd->SetWindowText(strTime);
	

	CDialog::OnTimer(nIDEvent);
	}

void CDengLu::OnStnClickedStatic1()
	{
	// TODO: 在此添加控件通知处理程序代码
	}

BOOL CDengLu::Create(LPCTSTR lpszTemplateName, CWnd* pParentWnd)
	{
	// TODO: 在此添加专用代码和/或调用基类
	

	return CDialog::Create(lpszTemplateName, pParentWnd);
	}
