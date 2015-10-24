// HostDoc.h : CHostDoc 类的接口
//


#pragma once


class CHostDoc : public CDocument
{
protected: // 仅从序列化创建
	CHostDoc();
	DECLARE_DYNCREATE(CHostDoc)

// 属性
public:

// 操作
public:

// 重写
public:
	virtual BOOL OnNewDocument();
	virtual void Serialize(CArchive& ar);

// 实现
public:
	virtual ~CHostDoc();
#ifdef _DEBUG
	virtual void AssertValid() const;
	virtual void Dump(CDumpContext& dc) const;
#endif

protected:

// 生成的消息映射函数
protected:
	DECLARE_MESSAGE_MAP()
};


