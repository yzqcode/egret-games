// HostDoc.cpp : CHostDoc 类的实现
//

#include "stdafx.h"
#include "Host.h"

#include "HostDoc.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif


// CHostDoc

IMPLEMENT_DYNCREATE(CHostDoc, CDocument)

BEGIN_MESSAGE_MAP(CHostDoc, CDocument)
END_MESSAGE_MAP()


// CHostDoc 构造/析构

CHostDoc::CHostDoc()
{
	// TODO: 在此添加一次性构造代码

}

CHostDoc::~CHostDoc()
{
}

BOOL CHostDoc::OnNewDocument()
{
	if (!CDocument::OnNewDocument())
		return FALSE;

	// TODO: 在此添加重新初始化代码
	// (SDI 文档将重用该文档)

	return TRUE;
}




// CHostDoc 序列化

void CHostDoc::Serialize(CArchive& ar)
{
	if (ar.IsStoring())
	{
		// TODO: 在此添加存储代码
	}
	else
	{
		// TODO: 在此添加加载代码
	}
}


// CHostDoc 诊断

#ifdef _DEBUG
void CHostDoc::AssertValid() const
{
	CDocument::AssertValid();
}

void CHostDoc::Dump(CDumpContext& dc) const
{
	CDocument::Dump(dc);
}
#endif //_DEBUG


// CHostDoc 命令
