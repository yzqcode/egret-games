#include "StdAfx.h"
#include "Method.h"
#include <stdlib.h>
#include <time.h>
#include <stdio.h>
#include "Game.h"
#include "MainFrm.h"
#define WM_ON_SENDCARD  (WM_USER+103)
CMethod::CMethod(void)
	{
		m_sendArray.max = -1;
		m_noSendNum =2;
	}
//洗牌
void CMethod::Shuffle(int *P)
	{
	int randValue;
	int m;
	int n=0;
	srand( (unsigned)time( NULL ) );
	for(int i=0;i<54;i++)P[i]=55;
	for (int i=0;i<54;)
		{
		randValue=rand()%54;
		n=i;
		for(m=0;m<=n;m++)
			{
			if (P[m]==randValue)
				{
				break;
				}
			if (m==n)
				{
				P[i]=randValue;
				i++;
				}

			}
		}
	}

void CMethod::SortCards(vector<SCARD>& tempVector)// 排序牌的方法
	{
	for(int i=0;i<tempVector.size();i++)
		{
		if (tempVector[i].cx>=2)
			{
			tempVector[i].ID=tempVector[i].cx-2;//3---K
			}else if (tempVector[i].cx==0&&tempVector[i].cy<4)
			{
			tempVector[i].ID=11; //A
			}else if (tempVector[i].cx==1&&tempVector[i].cy<4)
			{
			tempVector[i].ID=12;//2
			}else if (tempVector[i].cx==0&&tempVector[i].cy==4)
			{
			tempVector[i].ID=13;//小鬼
			}else if(tempVector[i].cx==1&&tempVector[i].cy==4)
			{
			tempVector[i].ID=14;//大鬼
			}
		}
	for (int i=0;i<tempVector.size();i++)
		{
		for(int j=0;j<=i;j++)
			{
			if (tempVector[i].ID>tempVector[j].ID)
				{
				int inttemp;
				inttemp =tempVector[i].ID;
				tempVector[i].ID=tempVector[j].ID;
				tempVector[j].ID=inttemp;
				SCARD temp;
				temp.cx=tempVector[i].cx;
				temp.cy=tempVector[i].cy;
				tempVector[i].cx=tempVector[j].cx;
				tempVector[i].cy=tempVector[j].cy;
				tempVector[j].cx=temp.cx;
				tempVector[j].cy=temp.cy;

				}
			}
		}
	if (!m_cardImage.empty())
	{
	 m_cardImage.clear();
	}
	
	for(int i=0;i<tempVector.size();i++)
		{
		IMAGEBUTTON temp;
		temp.s_rcet.SetRect(tempVector[i].coord_x,tempVector[i].coord_y,tempVector[i].coord_x+20,tempVector[i].coord_y+105);

		m_cardImage.push_back(temp);
		if (i==tempVector.size()-1)
		{
		m_cardImage[i].s_rcet.right+=60;
		 
		}
		}
	

	}
//改变图片的色度
void CMethod::CheckImage( vector<IMAGEBUTTON>&button,const POINT &p)
	{
	  for (int i=0;i<button.size();i++)
	  {
	  if (button[i].index!=3)
	  {
	  if (button[i].s_rcet.PtInRect(p))
		  {
		  button[i].index=1;
		  }else
		  {
		  button[i].index=0;
			  }
	  }
	  
	  }
	}

int CMethod::ClickImage(vector<IMAGEBUTTON>& button ,const POINT & p)//单击图片
	{
	
	for (int i=0;i<button.size();i++)
		{
		if (button[i].index!=3)
		{
		if (button[i].s_rcet.PtInRect(p))
			{
			button[i].index=2;
			return i;
			}
		}
		
		}
	 return -1;

	}
void CMethod::CancelImage(vector<IMAGEBUTTON>& button ,const POINT & p)//单击图片
	{
	for (int i=0;i<button.size();i++)
		{
		if (button[i].index!=3)
		{
		if (button[i].s_rcet.PtInRect(p))
			{
			button[i].index=1;
			}
		}
		
		}
	}
void CMethod::DeleteImage(vector<IMAGEBUTTON>& button)//删除图片
	{
	for (vector <IMAGEBUTTON>::iterator temp =button.begin();temp!=button.end();)
	  {
	    if (temp->ID==PREPARE)
	    {
		  temp = button.erase(temp);
		}else
		{
		 temp++;
		}
	  }

	//添加开始游戏按钮图片
	IMAGEBUTTON temp; 
	//1分
	temp.s_rcet.SetRect(230,410,312,450);
	temp.ID=START;
	button.push_back(temp);

	temp.s_rcet.SetRect(340,410,422,450);
	temp.ID=START;
	temp.index=3;
	button.push_back(temp);

	temp.s_rcet.SetRect(450,410,532,450);
	temp.ID=START;
	button.push_back(temp);
	}


void CMethod::ClickCard(vector<SCARD>&  player,const POINT& p)//单击牌
	{
	for (int i=0;i<m_cardImage.size();i++)
		{
		if (m_cardImage[i].s_rcet.PtInRect(p))
			{
			if (player[i].isUp==false)
			{
			player[i].isUp=true;
			player[i].coord_y-=20;
			m_cardImage[i].s_rcet.top-=20;
			m_cardImage[i].s_rcet.bottom-=20;
			}else
			{
			player[i].isUp=false;
			player[i].coord_y+=20;
			m_cardImage[i].s_rcet.top+=20;
			m_cardImage[i].s_rcet.bottom+=20;
			}
			}
		}
	}

CARDTYPE CMethod::SendCards(vector<SCARD>& player,vector<SENDCARDS>& sendCard)//出牌
	{
	SENDCARDS tempSendCard;
	if (!m_send.empty())
	{
	      m_send.clear();
	}
	 for (int i=0;i<player.size();i++)
	 {
	  if (player[i].isUp==true)
	  {
	  tempSendCard.cx=player[i].cx;
	  tempSendCard.cy=player[i].cy;
	  tempSendCard.ID=player[i].ID;
	    m_send.push_back(tempSendCard);
	  }
	 }
      //判断牌型
	 if (!m_send.empty())
	 {
	 //符合出牌规则，删除要出的牌
	 CARDTYPE  tempEnmu=JudgeCardsType(m_send);
	  if(tempEnmu!=ERRORCARDS)
		  {
		  if (((m_maxCard>m_sendArray.max)&&(tempEnmu==m_sendArray.type&&m_send.size()==m_sendArray.cardNum))||(m_noSendNum==2))
		  {
		  vector <SCARD>::iterator tempIter;
		  vector <SCARD>::iterator tempIter1;
		  for (tempIter =player.begin();tempIter!=player.end();)
			  {
			  if (tempIter->isUp)
				  {
				  tempIter=player.erase(tempIter);

				  for (tempIter1=tempIter;tempIter1!=player.end();tempIter1++)
					  tempIter1->coord_x-=20;
				  }else
					  tempIter++;
			  }
		  SortCards(player);//对牌进行排序

		  for (vector<SENDCARDS>::iterator tempIter=sendCard.begin();tempIter!=sendCard.end();)
			  {
			  if (tempIter->ID==PLAYER_B)
				  {
				  tempIter=sendCard.erase(tempIter);
				  }else
					  tempIter++;
			  }
		  SENDCARDS imageTemp;
		  for (int i=0;i<m_send.size();i++)
			  {
			  imageTemp.coord_x=220.0f+i*20.0f;
			  imageTemp.coord_y=300.0f;
			  imageTemp.cx=m_send[i].cx;
			  imageTemp.cy=m_send[i].cy;
			  imageTemp.ID=PLAYER_B;
			  sendCard.push_back(imageTemp);
			  }

		  return  JudgeCardsType(m_send);
			  }
		  }
		  
	 }
	 
	return ERRORCARDS;
	}

CARDTYPE CMethod::JudgeCardsType(vector<SENDCARDS>& sendCard)//判断牌型(参数:出牌的数组，最大值)
	{
	for (int i=0;i<15;i++) m_intArray[i]=0;
	//计算每张牌出现的次数
	for (int i=0;i<m_send.size();i++)
	{
	  m_intArray[m_send[i].ID]+=1;
	}
 int index=0;
	m_card.first=m_card.second=m_card.three=m_card.four=0;
	for (int i=0;i<4;i++) m_maxValue[i]=-1;
	for (int i=0;i<15;i++) 
		{
		switch(m_intArray[i])
			{
			case 1:
				m_card.first+=1;
				m_maxValue[0]=i;
				break;
			case 2:
				m_card.second+=1;
				m_maxValue[1]=i;
				break;
			case 3:
				m_card.three+=1;
				m_maxValue[2]=i;
				m_arrayThree[index]=i;
				index++;
				break;
			case 4:
				m_card.four+=1;
				m_maxValue[3]=i;
				break;
			}
		}
		

	if (m_card.first==1&&m_send.size()==1)//单张
	{
	  m_maxCard = m_send[0].ID;
	  return SINGLECARD;
	}else if(m_send.size()==2)//对子，双鬼
	{
	   if (m_card.second==1)
	   {
	    m_maxCard = m_send[0].ID;
	     return BOTHCARDS;
	   }
	   if (m_send[0].ID==14&&m_send[1].ID==13)
	   {
	    m_maxCard = 15;
	    return BOMBCARDS;
	   }

	}else if (m_send.size()==3&&m_card.three==1)//3不带
	{
	   m_maxCard = m_send[0].ID;
	 return THREECARDS;
	}else if(m_send.size()==4)//炸弹，3带1
	{
	 if (m_card.first==1&&m_card.three==1)
	 {
	 m_maxCard = m_maxValue[2];
	   return THREECARDSOFONE;
	 }
	 if (m_card.four==1)
	 {
	  m_maxCard =m_maxValue[3];
	  return BOMBCARDS;
	 }

	}else  if (m_send.size()>=5)//3带一对，飞机，连队，连牌
	{
    //3带一对
	 if ((m_card.second==1&&m_card.three==1)&&m_send.size()==5)
	 {
	  m_maxCard =m_maxValue[2];
	   return THREECARDSOFTWO;
	 }
	 //连牌
	 m_send[0].index=0;
	 for(int i=0;i<m_send.size()-1;i++)
		 {
		 if (m_send[i].ID<12)
			 {
			 if (m_send[i].ID-1==m_send[i+1].ID)
				 {
				 m_send[0].index+=1;
				 }
			 }
		 }
	 if (m_send[0].index==m_send.size()-1)
		 {
		 m_maxCard =m_maxValue[0];
		 return LINKCARDS;
		 }
	 m_send[0].index=0;
	 //连队
	 if (m_card.second*2==m_send.size())
	 {

	 for(int i=0;i<m_send.size()-2;i+=2)
		 {
		 if (m_send[i].ID<12)
			 {
			 if (m_send[i].ID-1==m_send[i+2].ID)
				 {
				 m_send[0].index+=1;
				 }
			 }
		 }
	 if (m_send[0].index==m_send.size()/2-1)
		 {
		 m_maxCard =m_maxValue[1];
		 return LINKBOTHCARDS;
		 }
	 }
	 //飞机
	 m_send[0].index=0;
	 
	 if (JudeLink(m_arrayThree))
	 {
	 if (m_card.three*3==m_send.size())//飞机不带
		 {
		 m_maxCard = m_maxValue[2];
		 return PLANECARDS;
		 }else if (m_card.three==m_card.second*2+m_card.first)//飞机带单张
		 {
		 m_maxCard = m_maxValue[2];
		 return PLANECARDSOFONE;
		 }else if((m_card.three==m_card.second)&&(m_card.three*3+m_card.second*2==m_send.size()))//飞机带对子
		 {
		 m_maxCard = m_maxValue[2];
		 return PLANECARDSOFTWO;
		}
	  
	 }
	 
	//4个带单张
	 if (m_card.four==1&&m_send.size()==6)
	 {
	 m_maxCard =m_maxValue[3];
	  return BOMBCARDSOFONE;
	 }
	 if ((m_card.four==1&&m_card.second==2)&&m_send.size()==8)
	 {
	  m_maxCard =m_maxValue[3];
	  return BOMBCARDSOFTWO;
	 }

	}
return ERRORCARDS;
	}

	//判断飞机是否连着
	bool  CMethod::JudeLink(int * temp)
		{
		for (int i=0;i<m_card.three-1;i++)
			{

			if (temp[i]+1!=temp[i+1])
				{
				return false;
				}
			if (temp[i+1]==12)
				{
				return false;

				}
			}
		return true;
		}


CARDSTYLE temp;
int arrayTemp[15];
void CMethod::ClassifyCards(vector<SCARD>&  player)//对牌进行分类
{
     m_bomb.clear();
	 m_double.clear();
	 m_doubleLink.clear();
	 m_link.clear();
	 m_plane.clear();
	 m_rocket.clear();
	 m_single.clear();
	 m_three.clear();

		for(int i=0;i<15;i++) m_intArray[i]=0;//对牌数组清零

		for (int i=0;i<player.size();i++)
		{
		 m_intArray[player[i].ID]+=1;
		}	
		for (int i=0;i<15;i++)arrayTemp[i]=m_intArray[i];
		

		//火箭
		if (m_intArray[13]==1&&m_intArray[14]==1)
			{
			temp.max=15;
			temp.m_ISprimary =true;
			m_rocket.push_back(temp);
			}
		// 将所有的牌压入副牌
		for (int i=0;i<13;i++)
		{
		if (m_intArray[i]==4)
		{
		temp.max = i;
		temp.min =i;
		temp.m_ISprimary =false;
		m_bomb.push_back(temp);
		}
		if (m_intArray[i]>=3)
		{
		temp.max = i;
		temp.min =i;
		temp.m_ISprimary =false;
		m_three.push_back(temp);
		}
		if (m_intArray[i]>=2)
		{
		temp.max = i;
		temp.min =i;
		temp.m_ISprimary =false;
		m_double.push_back(temp);
		
		}
		if (m_intArray[i]>=1)
		{
		temp.max = i;
		temp.min =i;
		temp.m_ISprimary =false;
		m_single.push_back(temp);
		}
	}
		JudeFly(m_three,m_plane,false);//判断3条中是否含有飞机
		JudeDoubleLink(m_double,m_doubleLink,false);//判断对子中是否含有双顺
		JudeLink();//判断连牌


		//拆牌计算手数
SplitCards();


		
}

void CMethod::JudeFly(vector<CARDSTYLE> &Three,vector<CARDSTYLE> &plane,bool is)//判断飞机
	{
	if (Three.size()>=2)
		{
		int index=0;
		int j=0;
		for (int i=0;i<Three.size()-1;i++)
			{
			if (Three[i].max+1==Three[i+1].max&&(Three[i+1].max<12))
				{
				index++;
				j=Three[i].max+1;
				}else 
				{
				if (index>=1)
					{
					temp.max=j;
					temp.min=j-index;
					temp.m_ISprimary=is;
					plane.push_back(temp); 
					}
				index =0;
					}
			}
		if (index>=1)
			{
			temp.max=j;
			temp.min=j-index;
			temp.m_ISprimary=is;
			temp.m_value=temp.max-temp.min+5;
			plane.push_back(temp); 
			}
		}
	}
void CMethod::JudeDoubleLink(vector<CARDSTYLE> &Double,vector<CARDSTYLE> &linkDouble,bool is)//判断连队
	{
	 if (Double.size()>=3)
	 {
	 int index=0;
	 int j=0;
	  for (int i=0;i<Double.size()-1;i++)
	  {
	   if (Double[i].max+1==Double[i+1].max&&(Double[i+1].max<12))
	   {
	    index++;
		j=Double[i].max+1;
	   }else 
		{
		if (index>=2)
			{
			 temp.max=j;
			 temp.min=j-index;
			 temp.m_ISprimary=is;
			 linkDouble.push_back(temp); 
			}
              index =0;
		 }
	  }
	  if (index>=2)
		  {
		  temp.max=j;
		  temp.min=j-index;
		  temp.m_ISprimary=is;
		  temp.m_value=temp.max-temp.min+4;
		  linkDouble.push_back(temp); 
		  }
	 }
	}

void CMethod::JudeLink()//判断连牌
	{
	int index=0;
	int j=0;
	for (int i=0;i<11;i++)
	{
	  if (m_intArray[i]>0&&m_intArray[i+1]>0)
	  {
	  
		 index++;
		 j=i+1;
	 }
	  else
		  {
		   if (index>=4)
		   {
		   temp.max=j;
		   temp.min=j-index;
		   temp.m_ISprimary=false;
		   m_link.push_back(temp);
		   }
		   index=0;
		  }
	} 
	if (index>=4)
		{
		temp.max=j;
		temp.min=j-index;
		temp.m_ISprimary=false;
		m_link.push_back(temp);
		}
 }


//从一个向量中删除元素
void CMethod::DeleteElement(vector<CARDSTYLE> &src,vector<CARDSTYLE>& des)
	{
	if (des.size()!=0)
		{
		for (int i=0;i<des.size();i++)
			{
			for (int j=des[i].min;j<=des[i].max;j++)
				{
				for (vector<CARDSTYLE>::iterator  temp=src.begin();temp!=src.end();)
					{
					if (temp->max==j)
						{
						temp=src.erase(temp);
						}else 
						{
						temp++;
							}
					}
				}
			}
		}
	}






void insert(vector<CARDSTYLE> &SRC,vector<CARDSTYLE> &DES)
	{
	for (int i=0;i<DES.size();i++)
		{
		SRC.push_back(DES[i]);
		}
	}
CARDSTYLE tempStyle;

vector <CARDSTYLE>  temp_rocket;//火箭
vector <CARDSTYLE>  temp_bosb;//炸弹
vector <CARDSTYLE>  temp_three;//3条
vector <CARDSTYLE>  temp_plane;//飞机
vector <CARDSTYLE>  temp_link;//连牌
vector <CARDSTYLE>  temp_doubleLink;//双顺
vector <CARDSTYLE>  temp_double;//对子
vector <CARDSTYLE>  temp_single;//单张



int returnValue(vector<CARDSTYLE> vec)
	{
	  int sum=0;
	  for (int i=0;i<vec.size();i++)
	  {
	   sum+=vec[i].m_value;
	  }
	  return sum;
	}
void CMethod::SplitCards()//拆牌
	{

	temp_rocket.clear();
	temp_bosb.clear();
	temp_three.clear();
	temp_plane.clear();
	temp_link.clear();
	temp_doubleLink.clear();
	temp_double.clear();
	temp_single.clear();
	m_handNum.clear();
	
	


	if (m_intArray[13]==1&&m_intArray[14]==1)//火箭
		{
		tempStyle.max=15;
		temp.min =15;
		tempStyle.m_value =8;
		tempStyle.m_ISprimary =true;
		m_intArray[13]=m_intArray[14]=0;
		temp_rocket.push_back(tempStyle);
		}
	for (int i=0;i<13;i++)
	{
	 switch (m_intArray[i])
	 {
		 case 4://炸弹
	      tempStyle.max=i;
		  tempStyle.min =i;
	      tempStyle.m_value = 7;
		  tempStyle.m_ISprimary =true;
		  m_intArray[i]=0;
		  temp_bosb.push_back(tempStyle);
		  break;
		 case 3://3条
			 tempStyle.max =i;
			 tempStyle.min =i;
			 tempStyle.m_value =3;
			 tempStyle.m_ISprimary =true;
			 m_intArray[i]=0;
			 temp_three.push_back(tempStyle);
			 break;
		 case 2://对子
			 tempStyle.max=i;
			 tempStyle.min =i;
			 tempStyle.m_value =2;
			 tempStyle.m_ISprimary =true;
			 m_intArray[i]=0;
			 temp_double.push_back(tempStyle);
			 break;
	 }
	}

	JudeFly(temp_three,temp_plane,true);//判断飞机
	JudeDoubleLink(temp_double,temp_doubleLink,true);//判断连队

	//删除对子中的连队
   DeleteElement(temp_double,temp_doubleLink);
   //删除3条中的飞机
   DeleteElement(temp_three,temp_plane);

   int tempbosb,tempplane,tempLinkdouble,tempthree,tempdouble;

   if (temp_bosb.empty())tempbosb =0;else tempbosb =1;
   if(temp_plane.empty())tempplane=0;else tempplane =1;
   if(temp_doubleLink.empty())tempLinkdouble=0;else tempLinkdouble=1;
   if (temp_three.empty())tempthree=0;else tempthree =1;
   if(temp_double.empty())tempdouble =0;else tempdouble =1;

   for (int i=0;i<=tempbosb;i++)//炸弹
   {
     for (int j=0;j<=tempplane;j++)//飞机
     {
	  for (int k=0;k<=tempLinkdouble;k++)//连队
	  {
	   for (int f=0;f<=tempthree;f++)//3条
	   {
	    for (int h=0;h<=tempdouble;h++)//对子
	    {
		ErgodicCard(i,j,k,f,h);
	    }
	   }
	  }
     }
   }

 int tempQuanzhi=0,tempShoushu=0,tempShoushu1=0,tempQuanzhi1=0;
   for (int i=0;i<m_handNum.size()-1;)
   {
     tempShoushu=m_handNum[i].s_bosb.size()+m_handNum[i].s_double.size()+m_handNum[i].s_doubleLink.size()+
		 m_handNum[i].s_link.size()+m_handNum[i].s_plane.size()+m_handNum[i].s_rocket.size()+
		 m_handNum[i].s_single.size()+m_handNum[i].s_three.size();
	 if(m_handNum[i].s_three.size()==m_handNum[i].s_single.size()||
		m_handNum[i].s_three.size()==m_handNum[i].s_double.size() )tempShoushu-=m_handNum[i].s_three.size();

	 tempShoushu1=m_handNum[i+1].s_bosb.size()+m_handNum[i+1].s_double.size()+m_handNum[i+1].s_doubleLink.size()+
		 m_handNum[i+1].s_link.size()+m_handNum[i+1].s_plane.size()+m_handNum[i+1].s_rocket.size()+
		 m_handNum[i+1].s_single.size()+m_handNum[i+1].s_three.size();
	 if(m_handNum[i+1].s_three.size()==m_handNum[i+1].s_single.size()||
		 m_handNum[i+1].s_three.size()==m_handNum[i+1].s_double.size() )tempShoushu1-=m_handNum[i+1].s_three.size();



	 tempQuanzhi =returnValue(m_handNum[i].s_bosb)+returnValue(m_handNum[i].s_double)+returnValue(m_handNum[i].s_doubleLink)
		 +returnValue(m_handNum[i].s_link)+returnValue(m_handNum[i].s_plane)
		 +returnValue(m_handNum[i].s_rocket)+returnValue(m_handNum[i].s_single)+returnValue(m_handNum[i].s_three);

	 tempQuanzhi1 =returnValue(m_handNum[i+1].s_bosb)+returnValue(m_handNum[i+1].s_double)+returnValue(m_handNum[i+1].s_doubleLink)
		 +returnValue(m_handNum[i+1].s_link)+returnValue(m_handNum[i+1].s_plane)
		 +returnValue(m_handNum[i+1].s_rocket)+returnValue(m_handNum[i+1].s_single)+returnValue(m_handNum[i+1].s_three);
	 vector<ZONGCARDS>::iterator iterTemp;
	 if (tempShoushu>tempShoushu1)
	 {
	  iterTemp= m_handNum.begin()+i; 
	  i=0;
	 }else if(tempShoushu<tempShoushu1)
	{
	  iterTemp= m_handNum.begin()+i+1;
	  i=0;
	}else 
	 {
	  if (tempQuanzhi>tempQuanzhi1)
	  {
	  iterTemp= m_handNum.begin()+i+1;
	  i=0;
	  }else
	  {
	  iterTemp= m_handNum.begin()+i; 
	  i=0;

	  }
	 }
	 m_handNum.erase(iterTemp);
   }
	
  
     insert(m_rocket,m_handNum[0].s_rocket);
	 insert(m_bomb,m_handNum[0].s_bosb);
	 insert(m_three,m_handNum[0].s_three);
     insert(m_plane,m_handNum[0].s_plane);
     insert(m_link,m_handNum[0].s_link);
	 insert(m_doubleLink,m_handNum[0].s_doubleLink);
	 insert(m_double,m_handNum[0].s_double);
	 insert(m_single,m_handNum[0].s_single);


}



ZONGCARDS  zong;

//拆牌，说有能组成的牌型添加进行遍历
//炸弹，飞机，连对，3条，对子
void CMethod::ErgodicCard(bool bosb,bool plane,bool linDouble,bool three,bool Double)
	{
      RegainCard();//恢复原始牌
	  zong.s_bosb.clear();
	  zong.s_double.clear();
	  zong.s_doubleLink.clear();
	  zong.s_link.clear();
	  zong.s_plane.clear();
	  zong.s_rocket.clear();
	  zong.s_single.clear();
	  zong.s_three.clear();
	//炸弹
	if (bosb)
		{
		for (int i=0;i<temp_bosb.size();i++)
			{
				zong.s_bosb.push_back(temp_bosb[i]);
			
			m_intArray[temp_bosb[i].max] =0;
			}
		}
//飞机
		if (plane)
			{
			for (int i=0;i<temp_plane.size();i++)
				{
				
				zong.s_plane.push_back(temp_plane[i]);
				for (int j=zong.s_plane[i].min;j<=zong.s_plane[i].max;j++)
					{
					m_intArray[j] =0;
					}
			

				}
			}
//连队
			if (linDouble)
				{
				for (int i=0;i<temp_doubleLink.size();i++)
					{
							zong.s_doubleLink.push_back(temp_doubleLink[i]);
							for (int j=zong.s_doubleLink[i].min;j<=zong.s_doubleLink[i].max;j++)
							{
							m_intArray[j] =0;
							}
	                         
						
					}
				}
//3条
				if (three)
					{
					for (int i=0;i<temp_three.size();i++)
						{
							zong.s_three.push_back(temp_three[i]);
						    m_intArray[temp_three[i].max] =0;
						}
					}

//对子
					if (Double)
						{
						for (int i=0;i<temp_double.size();i++)
							{
							zong.s_double.push_back(temp_double[i]);
							m_intArray[temp_double[i].max] =0;
							}
						}
//在剩余的牌中提出连牌
						int index=0;
						for (int i=0;i<12;i++)
							{
							if (m_intArray[i]>0)
								{
								index++;
								if (index==5)
									{

									tempStyle.max = i;
									tempStyle.min= tempStyle.max-4;
									tempStyle.m_value = 4;
									tempStyle.m_ISprimary =true;
									zong.s_link.push_back(tempStyle);
									for(int j=tempStyle.min;j<=tempStyle.max;j++)
										{
										m_intArray[j]-=1;
										}
									index=0;
									i=-1;
									}
								}else 
								{
								index=0;
								}
							}

//合并连牌
						if(zong.s_link.size()!=0)
							{
							//单张合并
								for (int i=0;i<12;i++)
									{
									for(int j=0;j<zong.s_link.size();j++)
										{
										if (m_intArray[i]>0)
											{
											if (zong.s_link[j].max+1==i)
												{
												zong.s_link[j].max =i;
												m_intArray[i]-=1;
												}
											}
										}
									}

							//2连牌直接合并
							  for (int i=0;i<zong.s_link.size()-1;i++)
							  {
							    if (zong.s_link[i].max+1==zong.s_link[i+1].min)
							    {
								 zong.s_link[i+1].min = zong.s_link[i].min;
								 vector<CARDSTYLE>::iterator iter = zong.s_link.begin()+i; 
								 zong.s_link.erase(iter);
							    }
							  }
 //将连牌加入手数数组

							
							}

//加入对子
						int a=0;
						for (int i=0;i<15
							;i++)
						{
						 switch(m_intArray[i])
							 {
							 case 4:
								 tempStyle.max =i;
								 tempStyle.min =i;
								 tempStyle.m_value =7;
								 tempStyle.m_ISprimary =true;
								 zong.s_bosb.push_back(tempStyle);
								 break;
							 case 3:
								 tempStyle.max =i;
								 tempStyle.min =i;
								 tempStyle.m_value =3;
								tempStyle.m_ISprimary =true;
								  zong.s_three.push_back(tempStyle);
								 break;
							 case 2:
								  tempStyle.max =i;
								  tempStyle.min =i;
								  tempStyle.m_value =2;
								 tempStyle.m_ISprimary =true;
								  zong.s_double.push_back(tempStyle);
								 break;
							 case 1:
								 tempStyle.max =i;
								 tempStyle.min =i;
								 tempStyle.m_value =1;
								 tempStyle.m_ISprimary =true;
								 zong.s_single.push_back(tempStyle);
								 break;
							 }
						}

						JudeFly(zong.s_three,zong.s_plane,true);//判断飞机
						JudeDoubleLink(zong.s_double,zong.s_doubleLink,true);//判断连队

						//删除对子中的连队
						DeleteElement(zong.s_double,zong.s_doubleLink);
						//删除3条中的飞机
						DeleteElement(zong.s_three,zong.s_plane);

						m_handNum.push_back(zong);
	}

void CMethod::RegainCard()//恢复牌到最开始的牌型
{
//炸弹
   for (int i=0;i<15;i++)
   {
    m_intArray[i]=arrayTemp[i];
   }
}
int returnIndex(vector<SCARD>& playe,int Value)
	{
	  for (int i=0;i<playe.size();i++)
	  {
	    if (playe[i].ID ==Value&&playe[i].isUp==false)
	    {
		  playe[i].isUp =true;
		  return i;
	    }
	  }
	}
void deletePlayer(vector<SCARD>& playe,vector<SENDCARDS>& vec,int ID)
	{
	for (vector<SCARD>::iterator iter=playe.begin();iter!=playe.end();)
      {
	    if (iter->isUp)
	    {
		  iter=playe.erase(iter);
		  for (vector<SCARD>::iterator Iter1=iter;Iter1!=playe.end();Iter1++)
			  Iter1->coord_y-=20;
	    }else iter++;
      }

	

	}

bool CMethod::sendPlane(vector<SCARD>& player,vector<SENDCARDS>& send,int  ID,int x,int y)
	{
	int  Customunsigned;
	if (ID==PLAYER_C)
		{
		Customunsigned =1;
		}else if(ID==PLAYER_A) Customunsigned =0;
	int tempIndex;
	SENDCARDS tempSend;
	if (!m_plane.empty())
		{
		for (int i=0;i<m_plane.size();i++)
			{
			if (m_plane[i].m_ISprimary==true&&((m_plane[i].max>m_sendArray.max&&
				(m_plane[i].max-m_plane[i].min==m_card.three-1))||m_noSendNum==2))
				{
				for (int j=m_plane[i].min,index=0;j<=m_plane[i].max;j++,index++)
					{
					for (int k=0;k<=2;k++)
						{
						tempIndex= returnIndex(player,j);
						tempSend.coord_x=x+index*60+k*20-100*Customunsigned;
						tempSend.coord_y=y;
						tempSend.ID=ID;
						tempSend.cx=player[tempIndex].cx;
						tempSend.cy=player[tempIndex].cy;
						send.push_back(tempSend);
						m_maxCard = m_plane[i].max;
						}
					}
				m_sendArray.type=PLANECARDS;
				m_sendArray.cardNum=(m_plane[i].max-m_plane[i].min+1)*3;
				deletePlayer(player,send,ID);
				return true;
				}
			}

		}

	return  false;
	}
bool CMethod::DeleteComputerCard(vector<SCARD>& player,CARDTYPE type,vector<SENDCARDS>& send,int  ID,int x,int y)//删除电脑的牌
	{
	int  Customunsigned;
	if (ID==PLAYER_C)
	{
	 Customunsigned =1;
	}else if(ID==PLAYER_A) Customunsigned =0;
	int tempIndex;
	SENDCARDS tempSend;
	switch(type)
		{
		case SINGLECARD://单张
			if (!m_single.empty())//单张数组不等于空
			{
			  for (int i=0;i<m_single.size();i++)
			  {
			   if (m_single[i].m_ISprimary==true&&m_single[i].max>m_sendArray.max)
			   {
			        
					 tempIndex= returnIndex(player,m_single[i].max);
					 tempSend.coord_x=x;
					 tempSend.coord_y=y;
					 tempSend.ID=ID;
					 tempSend.cx=player[tempIndex].cx;
					 tempSend.cy=player[tempIndex].cy;
					 send.push_back(tempSend);
					 m_maxCard = m_single[i].max;
					 m_sendArray.cardNum=1;
					 m_sendArray.type=SINGLECARD;
					deletePlayer(player,send,ID);
					 return true;
			   }
			  }
			}
			break;
		case BOTHCARDS://对子
			if (!m_double.empty())//单张数组不等于空
				{
				for (int i=0;i<m_double.size();i++)
			  {
			  if (m_double[i].m_ISprimary==true&&m_double[i].max>m_sendArray.max)
				  {
				  for (int j=m_double[i].min;j<=m_double[i].max;j++)
					  {
					  for (int k=0;k<=1;k++)
					  {
					  tempIndex= returnIndex(player,j);
					  tempSend.coord_x=x+k*20-40*Customunsigned;
					  tempSend.coord_y=y;
					  tempSend.ID=ID;
					  tempSend.cx=player[tempIndex].cx;
					  tempSend.cy=player[tempIndex].cy;
					  send.push_back(tempSend);
					  m_maxCard = m_double[i].max;
					  }
					  }
				   m_sendArray.cardNum=2;
				  m_sendArray.type=BOTHCARDS;
				  deletePlayer(player,send,ID);
				  return true;
				  }
			  }
				}
			break;
		case THREECARDS:
			if (!m_three.empty())//单张数组不等于空
				{
				for (int i=0;i<m_three.size();i++)
			  {
			  if (m_three[i].m_ISprimary==true&&m_three[i].max>m_sendArray.max)
				  {
				  for (int j=m_three[i].min;j<=m_three[i].max;j++)
					  {
					  for (int k=0;k<=2;k++)
						  {
						  tempIndex= returnIndex(player,j);
						  tempSend.coord_x=x+k*20-30*Customunsigned;
						  tempSend.coord_y=y;
						  tempSend.ID=ID;
						  tempSend.cx=player[tempIndex].cx;
						  tempSend.cy=player[tempIndex].cy;
						  send.push_back(tempSend);
						  m_maxCard = m_three[i].max;
						  }
					  }
				   m_sendArray.cardNum=3;
				  m_sendArray.type =THREECARDS;
				  deletePlayer(player,send,ID);
				  return true;
				  }
			  }
				}
			break;
		case THREECARDSOFONE:
			if (!m_three.empty())//单张数组不等于空
				{
				for (int i=0;i<m_three.size();i++)
			  {
			  if (m_three[i].m_ISprimary==true&&m_three[i].max>m_sendArray.max)
				  {
				  
					  for (int k=0;k<=2;k++)
						  {
						  tempIndex= returnIndex(player,m_three[i].max);
						  tempSend.coord_x=x+k*20-60*Customunsigned;
						  tempSend.coord_y=y;
						  tempSend.ID=ID;
						  tempSend.cx=player[tempIndex].cx;
						  tempSend.cy=player[tempIndex].cy;
						  send.push_back(tempSend);
						  m_maxCard = m_three[i].max;
						  }
					  
				  if (!m_single.empty())
					  {
					  for (int i=0;i<m_single.size();i++)
						  {
						  if (m_single[i].m_ISprimary)
							  {
							  tempIndex= returnIndex(player,m_single[i].max);
							  tempSend.coord_x=send[send.size()-1].coord_x+20;
							  tempSend.coord_y=y;
							  tempSend.ID=ID;
							  tempSend.cx=player[tempIndex].cx;
							  tempSend.cy=player[tempIndex].cy;
							  send.push_back(tempSend);
							   m_sendArray.cardNum=4;
							  m_sendArray.type=THREECARDSOFONE;
							  deletePlayer(player,send,ID);
							  return true;
							  }


						  }
					  }
				  }
					}for (vector<SENDCARDS>::iterator iter=send.begin();iter!=send.end();)
					{
					if (iter->ID==ID)
						{
						iter=send.erase(iter);
						}else
							iter ++;
						}

				return false;
				}
			break;
		case THREECARDSOFTWO:
			if (!m_three.empty())//单张数组不等于空
				{
				for (int i=0;i<m_three.size();i++)
			  {
			  if (m_three[i].m_ISprimary==true&&m_three[i].max>m_sendArray.max)
				  {
				  
					  for (int k=0;k<=2;k++)
						  {
						  tempIndex= returnIndex(player,m_three[i].max);
						  tempSend.coord_x=x+k*20-60*Customunsigned;
						  tempSend.coord_y=y;
						  tempSend.ID=ID;
						  tempSend.cx=player[tempIndex].cx;
						  tempSend.cy=player[tempIndex].cy;
						  send.push_back(tempSend);
						  m_maxCard = m_three[i].max;
						  }
					  
				  if (!m_double.empty())//单张数组不等于空
					  {
					  for (int i=0;i<m_double.size();i++)
						  {
						  if (m_double[i].m_ISprimary==true)
							  {
							  
								  for (int k=0;k<=1;k++)
									  {
									  tempIndex= returnIndex(player,m_double[i].max);
									  tempSend.coord_x=send[send.size()-1].coord_x+20;
									  tempSend.coord_y=y;
									  tempSend.ID=ID;
									  tempSend.cx=player[tempIndex].cx;
									  tempSend.cy=player[tempIndex].cy;
									  send.push_back(tempSend);
									  m_maxCard = m_double[i].max;
									  }
								  m_sendArray.type=THREECARDSOFTWO;
								   m_sendArray.cardNum=5;
							  deletePlayer(player,send,ID);
							  return true;
							  }
						  }
					  }
				  }
			  }
				for (vector<SENDCARDS>::iterator iter=send.begin();iter!=send.end();)
					{
					if (iter->ID==ID)
						{
						iter=send.erase(iter);
						}else
							iter ++;
					}
				
				return false;
				}
			break;
		case LINKCARDS:
			if (!m_link.empty())
			{
			 for (int i=0;i<m_link.size();i++)
			 {
			  if (m_link[i].m_ISprimary==true&&((m_link[i].max>m_sendArray.max&&(m_link[i].max-m_link[i].min==m_send.size()-1))||m_noSendNum==2))
			  { 
			    for (int j=m_link[i].min,index=0;j<=m_link[i].max;j++,index++)
			    {
				tempIndex= returnIndex(player,j);
				tempSend.coord_x=x+index*20-(m_link[i].max-m_link[i].min)*20*Customunsigned;
				tempSend.coord_y=y;
				tempSend.ID=ID;
				tempSend.cx=player[tempIndex].cx;
				tempSend.cy=player[tempIndex].cy;
				send.push_back(tempSend);
				m_maxCard = m_link[i].max;
			    }
				 m_sendArray.cardNum=m_link[i].max-m_link[i].min+1;
				m_sendArray.type=LINKCARDS;
				deletePlayer(player,send,ID);
				 return true;
			  }
			 }
			}
			break;
		case LINKBOTHCARDS:
			if (!m_doubleLink.empty())
			{
			for (int i=0;i<m_doubleLink.size();i++)
			{
			 if (((m_doubleLink[i].m_ISprimary==true)
				 &&(m_doubleLink[i].max>m_sendArray.max
				 &&(m_doubleLink[i].max-m_doubleLink[i].min==m_send.size()/2-1))||m_noSendNum==2))
			 {
			  //MessageBox(0,0,0,0);
			   for (int j=m_doubleLink[i].min,index=0;j<=m_doubleLink[i].max;j+=1,index+=1)
			   {
			     for (int k=0;k<=1;k++)
			     {
				 tempIndex= returnIndex(player,j);
				 tempSend.coord_x=x+index*40+k*20-100*Customunsigned;
				 tempSend.coord_y=y;
				 tempSend.ID=ID;
				 tempSend.cx=player[tempIndex].cx;
				 tempSend.cy=player[tempIndex].cy;
				 send.push_back(tempSend);
				 m_maxCard = m_double[i].max;
				   
			     }
			   }
			   m_sendArray.cardNum=(m_doubleLink[i].max-m_doubleLink[i].min+1)*2;
			   	m_sendArray.type=LINKBOTHCARDS;
			   deletePlayer(player,send,ID);
			   return true;
			 }
			}
			}
			break;
		case PLANECARDS:	
			return  sendPlane(player,send,ID,x,y);
			break;
		case PLANECARDSOFONE:
		
			
				if (m_handNum[0].s_single.size()>=2&&sendPlane(player,send,ID,x-60,y))
				 {
				 for (int i=0;i<2;i++)
				  {
				  tempIndex= returnIndex(player,m_handNum[0].s_single[i].max);
				  tempSend.coord_x=send[send.size()-1].coord_x+20;
				  tempSend.coord_y=y;
				  tempSend.ID=ID;
				  tempSend.cx=player[tempIndex].cx;
				  tempSend.cy=player[tempIndex].cy;
				  send.push_back(tempSend);
				  }
				 m_sendArray.cardNum=8;
				 m_sendArray.type=PLANECARDSOFONE;
				 deletePlayer(player,send,ID);
				 return true;
				 }

				 if (m_handNum[0].s_double.size()>=1&&sendPlane(player,send,ID,x-60,y))
				 {
				  for (int i=0;i<=1;i++)
				  {
				  tempIndex= returnIndex(player,m_handNum[0].s_double[0].max);
				  tempSend.coord_x=send[send.size()-1].coord_x+20;
				  tempSend.coord_y=y;
				  tempSend.ID=ID;
				  tempSend.cx=player[tempIndex].cx;
				  tempSend.cy=player[tempIndex].cy;
				  send.push_back(tempSend);
				  }
				   m_sendArray.cardNum=8;
				   m_sendArray.type=PLANECARDSOFONE;
				  deletePlayer(player,send,ID);
				  return true;
				   
				 if (m_handNum[0].s_three.size()>=1&&sendPlane(player,send,ID,x-60,y))
					 {
					 for (int i=0;i<=1;i++)
						 {
						 tempIndex= returnIndex(player,m_handNum[0].s_three[0].max);
						 tempSend.coord_x=send[send.size()-1].coord_x+20;
						 tempSend.coord_y=y;
						 tempSend.ID=ID;
						 tempSend.cx=player[tempIndex].cx;
						 tempSend.cy=player[tempIndex].cy;
						 send.push_back(tempSend);
						 }
					  m_sendArray.cardNum=8;
					  m_sendArray.type=PLANECARDSOFONE;
					 deletePlayer(player,send,ID);
					 return true;

					 }
				}
			
			break;
		case PLANECARDSOFTWO:
			
			if (m_handNum[0].s_double.size()>=2&&sendPlane(player,send,ID,x-90,y))
				{
				for (int i=0;i<m_card.second;i++)
					{
					for (int j=0;j<=1;j++)
					{
					tempIndex= returnIndex(player,m_handNum[0].s_double[i].max);
					tempSend.coord_x=send[send.size()-1].coord_x+20;
					tempSend.coord_y=y;
					tempSend.ID=ID;
					tempSend.cx=player[tempIndex].cx;
					tempSend.cy=player[tempIndex].cy;
					send.push_back(tempSend);
					}
					
					}
				 m_sendArray.cardNum=10;
				 m_sendArray.type=PLANECARDSOFTWO;
				deletePlayer(player,send,ID);
				return true;
				}
			/*for (vector<SENDCARDS>::iterator iter=send.begin();iter!=send.end();)
				{
				if (iter->ID==ID)
					{
					iter=send.erase(iter);
					}else iter++;
				}*/
			
			break;
		case BOMBCARDSOFONE:
			if (!m_bomb.empty())
			{
				for (int j=0;j<4;j++)
					{
					tempIndex= returnIndex(player,m_bomb[0].max);
					tempSend.coord_x=x+20*j-Customunsigned*90;
					tempSend.coord_y=y;
					tempSend.ID=ID;
					tempSend.cx=player[tempIndex].cx;
					tempSend.cy=player[tempIndex].cy;
					send.push_back(tempSend);
					}

				if (m_handNum[0].s_single.size()>=2)
				 {
				 for (int i=0;i<2;i++)
				  {
				  tempIndex= returnIndex(player,m_handNum[0].s_single[i].max);
				  tempSend.coord_x=send[send.size()-1].coord_x+20;
				  tempSend.coord_y=y;
				  tempSend.ID=ID;
				  tempSend.cx=player[tempIndex].cx;
				  tempSend.cy=player[tempIndex].cy;
				  send.push_back(tempSend);
				  }
				 m_sendArray.cardNum=5;
				 m_sendArray.type=BOMBCARDSOFONE;
				 deletePlayer(player,send,ID);
				 return true;
				 }

				if (m_handNum[0].s_double.size()>=1)
				 {
				 for (int i=0;i<=1;i++)
				  {
				  tempIndex= returnIndex(player,m_handNum[0].s_double[0].max);
				  tempSend.coord_x=send[send.size()-1].coord_x+20;
				  tempSend.coord_y=y;
				  tempSend.ID=ID;
				  tempSend.cx=player[tempIndex].cx;
				  tempSend.cy=player[tempIndex].cy;
				  send.push_back(tempSend);
				  }
				 m_sendArray.cardNum=5;
				  m_sendArray.type=BOMBCARDSOFONE;
				 deletePlayer(player,send,ID);
				 return true;

				 }

				}


			break;

		case BOMBCARDSOFTWO:
			if (!m_bomb.empty())
				{
				for (int j=0;j<4;j++)
					{
					tempIndex= returnIndex(player,m_bomb[0].max);
					tempSend.coord_x=x+20*j-Customunsigned*135;
					tempSend.coord_y=y;
					tempSend.ID=ID;
					tempSend.cx=player[tempIndex].cx;
					tempSend.cy=player[tempIndex].cy;
					send.push_back(tempSend);
					}
				if (m_handNum[0].s_double.size()>=2)
				 {
				 for (int i=0;i<=1;i++)
				  {
				  for (int j=0;j<=1;j++)
				  {
				  tempIndex= returnIndex(player,m_handNum[0].s_double[i].max);
				  tempSend.coord_x=send[send.size()-1].coord_x+20;
				  tempSend.coord_y=y;
				  tempSend.ID=ID;
				  tempSend.cx=player[tempIndex].cx;
				  tempSend.cy=player[tempIndex].cy;
				  send.push_back(tempSend);
				  }
				
				  }
				 m_sendArray.cardNum=6;
				  m_sendArray.type=BOMBCARDSOFTWO;
				 deletePlayer(player,send,ID);
				 return true;

				 }
				}

			break;
		}	            
	  return false;
	}
CARDTYPE CMethod::SendStely()//计算当前出牌的类型
	{
	
	if (!m_handNum[0].s_plane.empty())
		{
		if (m_handNum[0].s_double.size()>2)
			{
			if (m_handNum[0].s_double.size()<=m_handNum[0].s_single.size())
				{
				return PLANECARDSOFONE;
				}
			return PLANECARDSOFTWO;
			}

		if (m_handNum[0].s_single.size()>2)
			{
			return PLANECARDSOFONE;
			}
		return PLANECARDS;
		}else if(!m_handNum[0].s_doubleLink.empty())
		{
		//MessageBox(0,0,"fdfdsf",0);
		return LINKBOTHCARDS;
		}else if(!m_handNum[0].s_link.empty())
		{
		return LINKCARDS;
		}else if(!m_handNum[0].s_three.empty())
		{
		    if (m_handNum[0].s_double.size()>0)
		    {
			  if (m_handNum[0].s_double.size()<=m_handNum[0].s_single.size())
			  {
			   return THREECARDSOFONE;
			  }
                return THREECARDSOFTWO;
		    }

			if (m_handNum[0].s_single.size()>0)
			{
			       return THREECARDSOFONE;
			}
		  return THREECARDSOFONE;
		
		return THREECARDS;
		}else 
		{
		if (m_handNum[0].s_single.size()>m_handNum[0].s_double.size())
			{
				return SINGLECARD;
			}else if(m_handNum[0].s_single.size()<=m_handNum[0].s_double.size())
			{
				return BOTHCARDS;
			}

		}
					  
 	}
bool CMethod::PlayerSendCards(int  num,int player,bool down,vector<SENDCARDS>& send,vector<SCARD>& playerSend)//玩家出牌出牌
	{
	int x,y;
if (player==PLAYER_C)
	{x= 530;y=170;}
else if(player==PLAYER_A)
	{x=150,y=170;}
	if (num ==2)
	{
	CGame g;
      m_sendArray.max=-1;
	  m_sendArray.type=SendStely();
		g.SetMessage(true);
	}
	
    

	 if (down)//是否处于地主的下家
	 {
    if (m_sendArray.isHost)//当前出牌是否来自地主
	 {
	
			return  DeleteComputerCard(playerSend,m_sendArray.type,send,player,x,y);
	}else
	{
	   if (((m_sendArray.type==SINGLECARD||m_sendArray.type==BOTHCARDS)&&m_sendArray.max<=10)||num ==2)
	   {
	     return  DeleteComputerCard(playerSend,m_sendArray.type,send,player,x,y);
	   }
	}
	}else
	{
	if (m_sendArray.isHost)//当前出牌是否来自地主
		{

		return  DeleteComputerCard(playerSend,m_sendArray.type,send,player,x,y);
		}else
		{
		if (((m_sendArray.type==SINGLECARD||m_sendArray.type==BOTHCARDS)&&m_sendArray.max<=10)||num ==2)
			{
			return  DeleteComputerCard(playerSend,m_sendArray.type,send,player,x,y);
			}
			}
	}
		   return false;
	}
CMethod::~CMethod(void)
	{
	}
