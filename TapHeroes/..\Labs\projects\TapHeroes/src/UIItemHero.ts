class ItemHero extends egret.gui.Panel{
    private gameView:GameView;

	private m_iHeroID:number;
    private m_iSkillID:number;
	private m_strHeroName:string;
	private m_iHeroLevel:number;
	private m_bIsLocked:boolean;
	private m_iLevelUpMoney:number;
	private m_iDPSValue:number;
    private m_iNextDPSValue:number;

	private labelHeroName:egret.gui.Label;
	private labelHeroLevel:egret.gui.Label;
	private btnLevelUp:BtnHeroLevelup;
    private btnUnlockSkill:egret.gui.Button;
    private btnSpecialUnlock:egret.gui.Button;
	private labelLevelUpMoney:egret.gui.Label;
    private iconHeroIcon:egret.gui.UIAsset;
    private labelDamageValue:egret.gui.Label;
    private labelLevelUpDes:egret.gui.Label;
    private iconLockMask:egret.gui.UIAsset;
    private rectDetailArea:egret.gui.Rect;
    
    private iconNew:egret.gui.UIAsset;

    private iconSkill0:egret.gui.UIAsset;
    private iconSkill1:egret.gui.UIAsset;
    private iconSkill2:egret.gui.UIAsset;
    private iconSkill3:egret.gui.UIAsset;
    private iconSkill4:egret.gui.UIAsset;
    private iconSkill5:egret.gui.UIAsset;
    private iconSkill6:egret.gui.UIAsset;
    private arraySkillIconList = [];

    private iconNextSkillMask:egret.gui.UIAsset;
    private labelLockLevel:egret.gui.Label;

    private rectReviveMask:egret.gui.Rect;
    private iconDead:egret.gui.UIAsset;
    private labelReviveDia:egret.gui.Label;
    private btnRevive:egret.gui.Button;
    private labelReviveHead:egret.gui.Label;
    private labelReviveTick:egret.gui.Label;

    private picPlus10:egret.gui.UIAsset;
    private picPlus100:egret.gui.UIAsset;
    private labelPlus10:egret.gui.Label;
    private labelPlus100:egret.gui.Label;
    private labelLevelUpMoney2:egret.gui.Label;
    private labelLevelUpMoney3:egret.gui.Label;
    private iconPlus10:egret.gui.UIAsset;
    private iconPlus100:egret.gui.UIAsset;
    private iconButtonMoney:egret.gui.UIAsset;

    public constructor(){
        super();
        this.skinName = "skins.base.HeroSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.arraySkillIconList = [this.iconSkill0, this.iconSkill1, this.iconSkill2, this.iconSkill3, this.iconSkill4,
                                    this.iconSkill5, this.iconSkill6];

        this.initSkillList();

        this.refreshUIStatus();

        // Add touch event listener.
        this.rectDetailArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnDetailClicked, this);
        this.btnLevelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnLevelUpClicked, this);
        this.btnUnlockSkill.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnUnlockSkillClicked, this);
        this.btnSpecialUnlock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnSpecialUnlockClicked, this);
        this.btnRevive.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnReviveClicked, this);     
        this.picPlus10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnPlus10Clicked, this);
        this.picPlus100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnPlus100Clicked, this);
    }

    private showNewAnim() {
        this.iconNew.visible = true;

        var tw = egret.Tween.get(this.iconNew, {loop: true});
        tw.to({scaleX:1.1, scaleY:1.1}, 100).to({scaleX:1.0, scaleY:1.0}, 100)
            .to({scaleX:1.1, scaleY:1.1}, 100).to({scaleX:1.0, scaleY:1.0}, 100)
            .wait(700);

        this.gameView.ui_main.m_bShowHeroNewIcon = true;
    }
    private stopNewAnim() {
        egret.Tween.removeTweens(this.iconNew);

        this.iconNew.visible = false;
    }

    private btnPlus10Clicked( e ) {
        var ret = Logic.levelupHeroPlus( this.m_iHeroID, 10 )
        if ( ret ) {
            this.onHeroLevelUp()
        }
    }
    private btnPlus100Clicked( e ) {
        var ret = Logic.levelupHeroPlus( this.m_iHeroID, 100 )
        if ( ret ) {
            this.onHeroLevelUp()
        }
    }

    private refreshUIStatus() {
        var sHeroData = Logic.getHeroByID( this.m_iHeroID )
        if (sHeroData.dead == true) {
            this.refreshDeadStatus();
            this.refreshDeadTick();
        } else {
            this.refreshLockStatus();
            this.refreshSkillList();
        }
    }

    public refreshDeadStatus() {
        var sHeroData = Logic.getHeroByID( this.m_iHeroID )
        if (sHeroData.dead == false) {
            return;
        }

        if (this.btnRevive == null) {
            return;
        }

        var arraySkillList = Logic.getHeroByID( this.m_iHeroID ).skills;
        var iSkillListLen = arraySkillList.length;
        for (var i = 0; i < iSkillListLen; i++) {
            this.arraySkillIconList[i].visible = false;
        }

        this.btnLevelUp.visible = false;
        this.btnUnlockSkill.visible = false;
        this.labelLevelUpDes.visible = false;
        this.labelLevelUpMoney.visible = false;

        this.rectReviveMask.visible = true;
        this.iconDead.visible = true;
        this.labelReviveDia.visible = true;
        this.btnRevive.visible = true;
        this.labelReviveHead.visible = true;
        this.labelReviveTick.visible = true;

        this.labelReviveDia.text = Utils.bigNumber(Logic.getReviveHeroDiamond(this.m_iHeroID));
    }
    private getTimeStr(iSeconds:number) {
        var strTime = "";

        var iHours = Math.floor(iSeconds / 3600);
        if (iHours <= 0) {
            strTime = "00";
        } else if (iHours < 10) {
            strTime = "0" + iHours;
        } else {
            strTime = "" + iHours;
        }

        strTime += ":";

        var iMinutes = Math.floor((iSeconds - iHours * 3600) / 60);
        if (iMinutes <= 0) {
            strTime += "00";
        } else if (iMinutes < 10) {
            strTime += "0" + iMinutes;
        } else {
            strTime += "" + iMinutes;
        }

        strTime += ":";

        var iSeconds = Math.floor(iSeconds % 60);
        if (iSeconds <= 0) {
            strTime += "00";
        } else if (iSeconds < 10) {
            strTime += "0" + iSeconds;
        } else {
            strTime += ("" + iSeconds);
        }

        return strTime;
    }
    public refreshDeadTick() {
        var sHeroData = Logic.getHeroByID( this.m_iHeroID )
        if (sHeroData.dead == false) {
            return;
        }
        var currentTime = Utils.time();
        var iReviveTime = sHeroData.revive_time - currentTime;

        if (iReviveTime > 0) {
            this.labelReviveTick.text = this.getTimeStr(iReviveTime);
        } else {
            this.reviveHero();
        }
    }
    private reviveHero() {
        var bReviveRes = Logic.reviveHero(this.m_iHeroID);
        if (bReviveRes == false) {
            console.log("========= Hero revive failed!!!");
            return;
        }

        this.rectReviveMask.visible = false;
        this.iconDead.visible = false;
        this.labelReviveDia.visible = false;
        this.btnRevive.visible = false;
        this.labelReviveHead.visible = false;
        this.labelReviveTick.visible = false;

        this.refreshLockStatus();
        this.refreshSkillList();

        this.gameView.reviveHero(this.m_iHeroID);
    }

    public refreshLockStatus() {
        if (this.btnLevelUp == null) {
            return;
        }

        if (Logic.getHeroByID(this.m_iHeroID).dead == true) {
            return;
        }
        
        var levelUpStatus = Logic.getHeroLevelupState(this.m_iHeroID);
        var strLevelUpType = levelUpStatus[0];
        var bCanLevelUp = levelUpStatus[1];
        this.m_iLevelUpMoney = levelUpStatus[2];

        var btnVisibleNow = null;
        if (strLevelUpType == "skill") {
            this.btnLevelUp.visible = false;
            this.labelLevelUpDes.visible = false;
            this.btnUnlockSkill.visible = true;

            btnVisibleNow = this.btnUnlockSkill;
            this.m_iSkillID = levelUpStatus[3];
            this.iconButtonMoney.source = "元宝小"
        }
        else if ( strLevelUpType == "charge" ) {
            this.btnLevelUp.visible = false;
            this.labelLevelUpDes.visible = false;
            this.btnUnlockSkill.visible = false;
            this.btnSpecialUnlock.visible = true;

            btnVisibleNow = this.btnSpecialUnlock;
        }
        else if ( strLevelUpType == "diamond_skill" ) {
            this.btnLevelUp.visible = false;
            this.labelLevelUpDes.visible = true;
            this.btnUnlockSkill.visible = true;

            btnVisibleNow = this.btnUnlockSkill;
            this.m_iSkillID = levelUpStatus[3];
            this.iconButtonMoney.source = "钻石"
        }
        else if ( strLevelUpType == "diamond_unlock" ) {
            this.btnLevelUp.visible = true;
            this.labelLevelUpDes.visible = true;
            this.btnUnlockSkill.visible = false;

            btnVisibleNow = this.btnLevelUp;
            this.iconButtonMoney.source = "钻石"
        }
        else {
            this.btnLevelUp.visible = true;
            this.labelLevelUpDes.visible = true;
            this.btnUnlockSkill.visible = false;

            btnVisibleNow = this.btnLevelUp;
            this.iconButtonMoney.source = "元宝小"
        }

        btnVisibleNow.enabled = bCanLevelUp;

        if (this.m_iHeroLevel == 0) {
            this.iconLockMask.visible = true;
        } else {
            this.iconLockMask.visible = false;
        }

        if (this.m_iHeroLevel == 0 && this.btnLevelUp.enabled == true) {
            if (this.iconNew.visible == false) {
                this.showNewAnim();
            }
        } else {
            this.iconNew.visible = false;
        }

        if ( strLevelUpType != "charge" ) {
            this.labelLevelUpMoney.visible = true;
            this.labelLevelUpMoney.text = Utils.bigNumber(this.m_iLevelUpMoney);
        }
        else {
            this.labelLevelUpMoney.visible = false;
        }
    }

    private refreshHeroInfo() {
        var sHeroData = Logic.getHeroByID( this.m_iHeroID )

        this.m_iHeroLevel = sHeroData.level;
        this.m_iDPSValue = sHeroData.total_dps;
        this.m_iNextDPSValue = Logic.getHeroDPS(this.m_iHeroID, this.m_iHeroLevel+1) - Logic.getHeroDPS(this.m_iHeroID, this.m_iHeroLevel);

        this.labelHeroLevel.text = "" + this.m_iHeroLevel;
        this.labelDamageValue.text = Utils.bigNumber(this.m_iDPSValue);
        this.labelLevelUpDes.text = "秒伤+ " + Utils.bigNumber(this.m_iNextDPSValue);
    }
    private refreshSkillList() {
        var arraySkillList = Logic.getHeroByID( this.m_iHeroID ).skills;
        var iSkillListLen = arraySkillList.length;
        for (var i = 0; i < iSkillListLen; i++) {
            this.arraySkillIconList[i].visible = true;

            if (arraySkillList[i].locked == true) {
                this.iconNextSkillMask.visible = true;
                this.labelLockLevel.visible = true;

                this.iconNextSkillMask.x = this.arraySkillIconList[i].x;
                this.labelLockLevel.x = this.arraySkillIconList[i].x;

                this.labelLockLevel.text = "" + arraySkillList[i].unlock_level;

                break;
            } else if (i == iSkillListLen-1) {
                this.iconNextSkillMask.visible = false;
                this.labelLockLevel.visible = false;
            }
        }
    }
    private initSkillList() {
        var arraySkillList = Logic.getHeroByID( this.m_iHeroID ).skills;
        var iSkillListLen = arraySkillList.length;
        for (var i = 0; i < iSkillListLen; i++) {
            this.arraySkillIconList[i].source = "天将" + this.m_iHeroID + "_技能" + (i+1);
            this.arraySkillIconList[i].visible = false;
        }

        this.iconNextSkillMask.visible = false;
        this.labelLockLevel.visible = false;
    }

    public setHeroDatas(datas) {
    	this.m_iHeroID = datas.hero_id;

    	this.m_strHeroName = datas.name;
    	this.m_iHeroLevel = datas.level;
    	this.m_bIsLocked = datas.locked;
    	this.m_iDPSValue = datas.total_dps;
        this.m_iNextDPSValue = Logic.getHeroDPS(this.m_iHeroID, this.m_iHeroLevel+1) - Logic.getHeroDPS(this.m_iHeroID, this.m_iHeroLevel);
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);

        if (instance == this.labelHeroName) {
            this.labelHeroName.text = this.m_strHeroName;
        }
        else if (instance == this.labelHeroLevel) {
            this.labelHeroLevel.text = "" + this.m_iHeroLevel;
        }
        else if (instance == this.iconHeroIcon) {
            var strHeroIconName = "天将" + this.m_iHeroID;
            this.iconHeroIcon.source = RES.getRes(strHeroIconName);
        }
        else if (instance == this.labelDamageValue) {
            this.labelDamageValue.text = Utils.bigNumber(this.m_iDPSValue);
        }
        else if (instance == this.labelLevelUpDes) {
            this.labelLevelUpDes.text = "秒伤+ " + Utils.bigNumber(this.m_iNextDPSValue);
        }
        else if (instance == this.iconNew) {
            this.iconNew.anchorX = 0.5;
            this.iconNew.anchorY = 0.5;

            this.iconNew.x += this.iconNew.width/2;
            this.iconNew.y += this.iconNew.height/2;
        }
    }

    private btnLevelUpClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            var bLevelUpRes = Logic.levelupHero(this.m_iHeroID, 1);
            if (bLevelUpRes == false) {
                console.log("========= Hero level up failed!!!");
                return;
            }
            this.onHeroLevelUp()
        }
    }

    private onHeroLevelUp() {
        this.stopNewAnim();

        this.refreshHeroInfo();
        this.refreshLockStatus();
        this.refreshSkillList();

        var viewport = <egret.gui.IViewport>this.gameView.ui_main.main_scroller2.viewport;
        var group = <egret.gui.Group>this.gameView.ui_main.main_scroller2.viewport;
        var top = viewport.verticalScrollPosition
        var child = group.getElementAt( Logic.getHeroIndexByID(this.m_iHeroID) )

        var posX = this.iconHeroIcon.x + this.iconHeroIcon.width/2 + 5;
        var posY = this.gameView.ui_main.main_scroller2.y + child.y - top + this.iconHeroIcon.y + this.iconHeroIcon.height;

        this.gameView.showLevelUpAnim(posX, posY);
        this.gameView.refreshAllAboutMoney();
        this.gameView.refreshAllAboutDiamond();
        this.gameView.ui_main.refreshDamageInfo();

        if (this.m_iHeroLevel == 1) {
            this.gameView.refreshNewHeroes();
            this.gameView.ui_main.refreshHeroListForNew();
        } else if (this.m_iHeroLevel > 1) {
            this.gameView.showHeroLevelUpAnim(Logic.getHeroIndexByID(this.m_iHeroID));
        }

        if (this.gameView.ui_main.m_iHeroGuide == 2) {
            this.gameView.ui_main.m_iHeroGuide = 3;
            this.gameView.stopHandAnim();
        }
        this.refreshLevelUpButtons()
    }

    private timerLevelUpPlus:egret.Timer;

    public refreshLevelUpButtons() {
        var l10 = Logic.getHeroLevelupMoneyPlus(this.m_iHeroID, 10 )
        var money10 = l10[0]
        var n10 = l10[1]
        if ( n10>0 && money10 != null && money10 <= Logic.money ) {
            this.picPlus10.visible = true
            this.labelPlus10.visible = true
            this.labelLevelUpMoney2.visible = true
            this.iconPlus10.visible = true

            this.labelLevelUpMoney2.text = U.bigNumber( money10 )
            this.labelPlus10.text = "+" + n10
        }
        else {
            this.picPlus10.visible = false
            this.labelPlus10.visible = false
            this.labelLevelUpMoney2.visible = false
            this.iconPlus10.visible = false
        }
        var l100 = Logic.getHeroLevelupMoneyPlus(this.m_iHeroID, 100 )
        var money100 = l100[0]
        var n100 = l100[1]
        if ( n100>0 && money100!=null && money100<=Logic.money ) {
            this.picPlus100.visible = true
            this.labelPlus100.visible = true
            this.labelLevelUpMoney3.visible = true
            this.iconPlus100.visible = true
            this.labelLevelUpMoney3.text = U.bigNumber( money100 )
            this.labelPlus100.text = "+" + n100
        }
        else {
            this.picPlus100.visible = false
            this.labelPlus100.visible = false
            this.labelLevelUpMoney3.visible = false
            this.iconPlus100.visible = false
        }

        var _hide = function(e) {
            this.picPlus10.visible = false
            this.labelPlus10.visible = false
            this.labelLevelUpMoney2.visible = false
            this.iconPlus10.visible = false
            this.picPlus100.visible = false
            this.labelPlus100.visible = false
            this.labelLevelUpMoney3.visible = false
            this.iconPlus100.visible = false
        }
        if ( this.timerLevelUpPlus == null ) {
            this.timerLevelUpPlus = new egret.Timer( 1500, 1 )
            this.timerLevelUpPlus.addEventListener(egret.TimerEvent.TIMER, _hide, this )
            this.timerLevelUpPlus.start()
        }
        else {
            this.timerLevelUpPlus.reset()
            this.timerLevelUpPlus.start()
        }
    }

    private btnSpecialUnlockClicked( e ) {
        GameView.instance().showToast( "充值就能解锁哦" )
    }

    private btnUnlockSkillClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            var bLevelUnLockRes = Logic.unlockHeroSkill(this.m_iSkillID);
            if (bLevelUnLockRes == false) {
                console.log("========= Hero unlock skill failed!!!", this.m_iSkillID);
                return;
            }

            this.refreshHeroInfo();
            this.refreshSkillList();
            this.refreshLockStatus();

            var viewport = <egret.gui.IViewport>this.gameView.ui_main.main_scroller2.viewport;
            var group = <egret.gui.Group>this.gameView.ui_main.main_scroller2.viewport;
            var top = viewport.verticalScrollPosition
            var child = group.getElementAt( Logic.getHeroIndexByID(this.m_iHeroID) )

            var posX = this.iconHeroIcon.x + this.iconHeroIcon.width/2 + 5;
            var posY = this.gameView.ui_main.main_scroller2.y + child.y - top + this.iconHeroIcon.y + this.iconHeroIcon.height;

            this.gameView.showLevelUpAnim(posX, posY);
            this.gameView.refreshAllAboutMoney();
            this.gameView.ui_main.refreshDamageInfo();
        }
    }

    private btnDetailClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            
            this.gameView.showHeroDetailDlg(this.m_iHeroID);
        }
    }

    private btnReviveClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            var iReviveRes = Logic.reviveHeroByDiamond(this.m_iHeroID);
            if (iReviveRes == 1) {
                // Diamond is not enough
                this.gameView.showLowDiamondHint();
                return;
            }
            if (iReviveRes != 0) {
                console.log("========= Hero revive failed! Error code: " + iReviveRes);
                return;
            }

            this.rectReviveMask.visible = false;
            this.iconDead.visible = false;
            this.labelReviveDia.visible = false;
            this.btnRevive.visible = false;
            this.labelReviveHead.visible = false;
            this.labelReviveTick.visible = false;

            this.refreshLockStatus();
            this.refreshSkillList();

            this.gameView.reviveHero(this.m_iHeroID);
        }
    }

}
