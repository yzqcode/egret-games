class ItemPlayer extends egret.gui.Panel{
    private gameView:GameView;

    private m_strHeroIconName:string;
	private m_strHeroName:string;
	private m_iHeroLevel:number;
	private m_iLevelUpMoney:number;
	private m_strDPSValue:string;
    private m_iNextDPSValue:number;

    private iconHeroIcon:egret.gui.UIAsset;
	private labelHeroName:egret.gui.Label;
	private labelHeroLevel:egret.gui.Label;
    private labelDamageValue:egret.gui.Label;
	private btnLevelUp:egret.gui.Button;
	private labelLevelUpMoney:egret.gui.Label;
    private rectDetailArea:egret.gui.Rect;

    private picPlus10:egret.gui.UIAsset;
    private picPlus100:egret.gui.UIAsset;
    private labelPlus10:egret.gui.Label;
    private labelPlus100:egret.gui.Label;
    private labelLevelUpMoney2:egret.gui.Label;
    private labelLevelUpMoney3:egret.gui.Label;
    private iconPlus10:egret.gui.UIAsset;
    private iconPlus100:egret.gui.UIAsset;
    private labelLevelUpDes:egret.gui.Label;

    public constructor(){
        super();
        this.skinName = "skins.base.PlayerItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshLockStatus();

        // Add touch event listener.
        this.rectDetailArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnDetailClicked, this);
        this.btnLevelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnLevelUpClicked, this);
        this.picPlus10.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnPlus10Clicked, this);
        this.picPlus100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnPlus100Clicked, this);

    }

    public refreshLockStatus() {
        if (this.btnLevelUp == null) {
            return;
        }
        
        var bLocked = false;
        if (Logic.money < this.m_iLevelUpMoney) {
            bLocked = true;
        }

        if (bLocked) {
            this.btnLevelUp.enabled = false;
        } else {
            this.btnLevelUp.enabled = true;
        }
    }

    public refreshPlayerInfo() {
        this.m_iHeroLevel = Logic.player.level;
        this.m_strDPSValue = Utils.bigNumber(Logic.player.total_damage);
        this.m_iLevelUpMoney = Logic.getPlayerLevelupMoney(1);
        this.m_iNextDPSValue = Logic.getPlayerLevelDamage(this.m_iHeroLevel+1) - Logic.getPlayerLevelDamage(this.m_iHeroLevel);

        this.labelHeroLevel.text = "" + this.m_iHeroLevel;
        this.labelLevelUpMoney.text = Utils.bigNumber(this.m_iLevelUpMoney);
        this.labelDamageValue.text = this.m_strDPSValue;
        this.labelLevelUpDes.text = "伤害+ " + Utils.bigNumber(this.m_iNextDPSValue);
    }

    public setPlayerDatas() {
        this.m_strHeroIconName = "猴子";
    	this.m_strHeroName = Logic.player.name;
    	this.m_iHeroLevel = Logic.player.level;
    	this.m_strDPSValue = Utils.bigNumber(Logic.player.total_damage);
        this.m_iLevelUpMoney = Logic.getPlayerLevelupMoney(1);
        this.m_iNextDPSValue = Logic.getPlayerLevelDamage(this.m_iHeroLevel+1) - Logic.getPlayerLevelDamage(this.m_iHeroLevel);
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);

        if (instance == this.labelHeroName) {
            this.labelHeroName.text = this.m_strHeroName;
        }
        else if (instance == this.labelHeroLevel) {
            this.labelHeroLevel.text = "" + this.m_iHeroLevel;
        }
        else if (instance == this.labelLevelUpMoney) {
            this.labelLevelUpMoney.text = Utils.bigNumber(this.m_iLevelUpMoney);
        }
        else if (instance == this.iconHeroIcon) {
            this.iconHeroIcon.source = RES.getRes(this.m_strHeroIconName);
        }
        else if (instance == this.labelDamageValue) {
            this.labelDamageValue.text = this.m_strDPSValue;
        }
        else if (instance == this.labelLevelUpDes) {
            this.labelLevelUpDes.text = "伤害+ " + Utils.bigNumber(this.m_iNextDPSValue);
        }
    }

    private btnPlus10Clicked( e ) {
        var ret = Logic.levelupPlayer( 10 )
        if ( ret ) {
            this.onPlayerLevelUp()
        }
    }
    private btnPlus100Clicked( e ) {
        var ret = Logic.levelupPlayer( 100 )
        if ( ret ) {
            this.onPlayerLevelUp()
        }
    }

    private timerLevelUpPlus:egret.Timer;

    private refreshLevelUpButtons() {
        var money10 = Logic.getPlayerLevelupMoney( 10 )
        if ( money10 <= Logic.money ) {
            this.picPlus10.visible = true
            this.labelPlus10.visible = true
            this.labelLevelUpMoney2.visible = true
            this.iconPlus10.visible = true
            this.labelLevelUpMoney2.text = U.bigNumber( money10 )
        }
        else {
            this.picPlus10.visible = false
            this.labelPlus10.visible = false
            this.labelLevelUpMoney2.visible = false
            this.iconPlus10.visible = false
        }
        var money100 = Logic.getPlayerLevelupMoney( 100 )
        if ( money100 <= Logic.money ) {
            this.picPlus100.visible = true
            this.labelPlus100.visible = true
            this.labelLevelUpMoney3.visible = true
            this.iconPlus100.visible = true
            this.labelLevelUpMoney3.text = U.bigNumber( money100 )
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

    private btnLevelUpClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            var bLevelUpRes = Logic.levelupPlayer(1);
            if (bLevelUpRes == false) {
                console.log("========= Player level up failed!!!");
                return;
            }
            this.onPlayerLevelUp()
        }
    }

    private onPlayerLevelUp() {
        this.refreshPlayerInfo();
        this.refreshLockStatus();

        var viewport = <egret.gui.IViewport>this.gameView.ui_main.main_scroller1.viewport;
        var group = <egret.gui.Group>this.gameView.ui_main.main_scroller1.viewport;
        var top = viewport.verticalScrollPosition
        var child = group.getElementAt( 0 )

        var posX = this.iconHeroIcon.x + this.iconHeroIcon.width/2 + 5;
        var posY = this.gameView.ui_main.main_scroller1.y + child.y - top + this.iconHeroIcon.y + this.iconHeroIcon.height;

        this.gameView.showLevelUpAnim(posX, posY);
        this.gameView.refreshAllAboutMoney();
        this.gameView.ui_main.refreshAllAboutDamage();

        if (this.gameView.ui_main.m_iMonkeyGuideStep == 2) {
            this.gameView.ui_main.m_iMonkeyGuideStep = 3;
            this.gameView.stopHandAnim();
        }
        this.refreshLevelUpButtons()
    }

    private btnDetailClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }

            this.gameView.showPlayerDetailDlg();
        }
    }
}
