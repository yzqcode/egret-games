class HeroReviveDlg extends egret.gui.Panel{
    private gameView:GameView;

    private iconClose:egret.gui.UIAsset;
    private iconHero:egret.gui.UIAsset;
    private labelHeroName:egret.gui.Label;
    private labelBossName:egret.gui.Label;
    private labelTick:egret.gui.Label;
    private labelReviveFee:egret.gui.Label;
    private iconRevive:egret.gui.UIAsset;

    private m_iHeroID:number;
    private m_strHeroIconName:string;
    private m_strHeroName:string;
    private m_strBossName:string;

    public m_SecondTimer:egret.Timer;

    public constructor(){
        super();
        this.skinName = "skins.HeroReviveDlgSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        // Set all datas in UI.
        this.iconHero.source = RES.getRes(this.m_strHeroIconName);
        this.labelHeroName.text = this.m_strHeroName;
        this.labelBossName.text = this.m_strBossName;
        this.labelReviveFee.text = Utils.bigNumber(Logic.getReviveHeroDiamond(this.m_iHeroID));

        // Add touch event listener.
        this.iconClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseClicked, this);
        this.iconRevive.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnReviveClicked, this);

        this.m_SecondTimer = new egret.Timer(1000, -1)
        this.m_SecondTimer.addEventListener(egret.TimerEvent.TIMER, this.refreshTick, this);
        this.m_SecondTimer.start();
    }

    public initHeroDatas(heroId : number, bossName : string) {
        this.m_iHeroID = heroId;
        this.m_strBossName = bossName;

        var datas = Logic.getHeroByID( this.m_iHeroID )
        if ( datas == null ) {
            this.m_strHeroIconName = "天将1"
            this.m_strHeroName = ""
            return
        }
        this.m_strHeroIconName = "天将" + this.m_iHeroID;
        this.m_strHeroName = datas.name;
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
    public refreshTick() {
        var sHeroData = Logic.getHeroByID( this.m_iHeroID )

        var currentTime = Utils.time();
        var iReviveTime = sHeroData.revive_time - currentTime;

        if (iReviveTime > 0) {
            this.labelTick.text = this.getTimeStr(iReviveTime);
        } else {
            this.closeDlg();
        }
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);
    }

    private closeDlg() {
        this.m_SecondTimer.stop();
        this.m_SecondTimer.removeEventListener(egret.TimerEvent.TIMER, this.refreshTick, this);

        this.gameView.guiLayer.removeElement(this);
    }
    private btnCloseClicked( e ) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            this.closeDlg();
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

            this.closeDlg();
            this.gameView.reviveHero(this.m_iHeroID);
        }
    }
}
