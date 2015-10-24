#pragma once

class CCards
	{
	public:
		virtual void InitGameData()=0;
		virtual void GameStart()=0;
		virtual void GameDraw(CDC *)=0;
		CCards(void);
		~CCards(void);

	};
