// HostView.h : CHostView 类的接口
//


#pragma once

#define WM_ON_SENDCARD  (WM_USER+103)

class CHostView : public CView
{
protected: // 仅从序列化创建
	CHostView();
	DECLARE_DYNCREATE(CHostView)

// 属性
public:
	CHostDoc* GetDocument() const;

// 操作
public:
 int m_cardNum;
// 重写
public:
	virtual void OnDraw(CDC* pDC);  // 重写以绘制该视图
	virtual BOOL PreCreateWindow(CREATESTRUCT& cs);
protected:
//	virtual BOOL OnPreparePrinting(CPrintInfo* pInfo);
//	virtual void OnBeginPrinting(CDC* pDC, CPrintInfo* pInfo);
//	virtual void OnEndPrinting(CDC* pDC, CPrintInfo* pInfo);

// 实现
public:
	  RECT m_clientRect;
	virtual ~CHostView();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:
  
// 生成的消息映射函数
protected:
	DECLARE_MESSAGE_MAP()
public:
	afx_msg void OnLButtonDown(UINT nFlags, CPoint point);
	afx_msg void OnMouseMove(UINT nFlags, CPoint point);
	afx_msg void OnLButtonUp(UINT nFlags, CPoint point);
	afx_msg void OnRButtonDown(UINT nFlags, CPoint point);
	afx_msg LRESULT OnSendMessage(WPARAM wParam, LPARAM lParam); 
public:
	afx_msg void OnTimer(UINT_PTR nIDEvent);
public:
	afx_msg int OnCreate(LPCREATESTRUCT lpCreateStruct);
public:
	afx_msg void OnChar(UINT nChar, UINT nRepCnt, UINT nFlags);
	};

#ifndef _DEBUG  // HostView.cpp 中的调试版本
inline CHostDoc* CHostView::GetDocument() const
   { return reinterpret_cast<CHostDoc*>(m_pDocument); }
#endif

