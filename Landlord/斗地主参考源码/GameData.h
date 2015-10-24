#ifndef  _GAMEDATA_FILE_H
#define  _GAMEDATA_FILE_H

#define  ONE_SCORE       0
#define  TWO_SCORE       1
#define  STREE_SCORE     2
#define  NOCALL          3
#define  SENDCARD        4
#define  HELP            5
#define  NOSENDCARD      6

#define  PLAYER_A    7  //玩家A
#define  PLAYER_B    8 //玩家B
#define  PLAYER_C    9 //玩家C

#define  FAIPAI      10
#define  PREPARE     11 //准备游戏（叫牌）
#define  START       12 //开始游戏
#define  END         13 //游戏结束



//牌的结构体
struct  SCARD
	{
	 int ID;//牌的实际大小
	 int cx;//图片的X起始坐标
	 int cy; //图片的Y起始坐标
	 float coord_x;//图片在屏幕中的X坐标
	 float coord_y;//图片在屏幕中的Y坐标
	 bool show;//判断显示牌的正面还是背面 false 显示正面 true显示正面
	 bool isUp;//判断该牌是否被玩家点击；false 没点击 true点击
	 int index;
	 bool isHave;
	 bool isBack;
	 SCARD()
		 {
		   ID=-1;
		   cx=-1;
		   cy=-1;
		   index =0;
		   coord_x=0.0f;
		   coord_y=0.0f;
		   show=false;
		   isUp=false;
		   isBack =true;
		   isHave =false;
		 }

	};
struct  SENDCARDS
	{
	int ID;//哪家出的牌
	int cx;//图片的X起始坐标
	int cy; //图片的Y起始坐标
	float coord_x;//图片在屏幕中的X坐标
	float coord_y;//图片在屏幕中的Y坐标
	int index;//图片的索引
	};

struct PASS
	{
	int x;//X坐标
	int y;//y坐标
	bool isShow;//是否显示
	};
//图片按钮结构体
struct IMAGEBUTTON
	{
	CRect  s_rcet; //rect 对象，用于判断玩家单击
	int ID;      //图片属于什么时候
	int index;//图片索引，决定绘制哪一张

	bool s_isShow; //判断是否显示
	bool s_isChicl;//判断该图片是否可以点击
	IMAGEBUTTON()
		{
		s_rcet.SetRect(0,0,0,0);
		s_isShow =true;
		ID=0;
		s_isChicl =false;
		index =0;
		}
	};

struct NUMBER//计算单张，对子，3张，炸弹出现的次数
	{
	int first;
	int second;
	int three;
	int four;
	int max;
	};
enum  CARDTYPE
	{
	SINGLECARD=1,                      //单张
	BOTHCARDS,                         //对子
	LINKCARDS,                         //连牌
	LINKBOTHCARDS,                     //连队
	THREECARDS,                        //3不带
	THREECARDSOFONE,                   //三带一
	THREECARDSOFTWO,                   //3带2
	PLANECARDS,                        //飞机不带
	PLANECARDSOFONE,                   //飞机带单张
	PLANECARDSOFTWO,                   //飞机带2对
	BOMBCARDS,                         //炸弹
	BOMBCARDSOFONE,                    //四个带2个;
	BOMBCARDSOFTWO,                    //4个带1对
	ERRORCARDS                         //错误的牌(牌型不正确)
	};
#endif