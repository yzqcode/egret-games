#pragma once
#include "afxwin.h"


// CDengLu 对话框

class CDengLu : public CDialog
{
	DECLARE_DYNAMIC(CDengLu)

public:
	CDengLu(CWnd* pParent = NULL);   // 标准构造函数
	virtual ~CDengLu();

// 对话框数据
	enum { IDD = IDD_DIALOG1 };

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV 支持

	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnPaint();
public:
	CStatic m_pic;
	int m_bitmapIndex;
	CRect   m_picRect;
public:
	afx_msg void OnBnClickedOk();
	afx_msg void OnNMThemeChangedScrollbar1(NMHDR *pNMHDR, LRESULT *pResult);
	afx_msg void OnHScroll(UINT nSBCode, UINT nPos, CScrollBar* pScrollBar);
public:
	CScrollBar m_sll;
public:
	virtual BOOL OnInitDialog();
public:
	afx_msg void OnTimer(UINT_PTR nIDEvent);
public:
	afx_msg void OnStnClickedStatic1();
public:
	CString m_editStr;
public:
	virtual BOOL Create(LPCTSTR lpszTemplateName, CWnd* pParentWnd = NULL);
	};
