class ItemPlayerReborn extends egret.gui.Panel{
    private gameView:GameView;

    private m_iSkillIndex:number;
	private m_iSkillID:number;
	private m_strSkillName:string;
	private m_strSkillInfo:string;
	private m_iLevelUpMoney:number;
    private m_iUnlockLevel:number;

	private labelSkillName:egret.gui.Label;
	private labelSkillInfo:egret.gui.Label;
	private btnLevelUp:egret.gui.Button;
	private labelLevelUpMoney:egret.gui.Label;
    private iconSkillIcon:egret.gui.UIAsset;
    private iconLockMask:egret.gui.UIAsset;
    private rectDetailArea:egret.gui.Rect;
    private labelLevelUnlockDes:egret.gui.Label;

    private iconNew:egret.gui.UIAsset;

    public constructor(){
        super();
        this.skinName = "skins.base.PlayerRebornItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshSkillInfo();
        this.refreshLockStatus();

        // Add touch event listener.
        this.rectDetailArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnDetailClicked, this);
        this.btnLevelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnLevelUpClicked, this);
    }

    private showNewAnim() {
        this.iconNew.visible = true;

        var tw = egret.Tween.get(this.iconNew, {loop: true});
        tw.to({scaleX:1.1, scaleY:1.1}, 100).to({scaleX:1.0, scaleY:1.0}, 100)
            .to({scaleX:1.1, scaleY:1.1}, 100).to({scaleX:1.0, scaleY:1.0}, 100)
            .wait(700);

        this.gameView.ui_main.m_bShowSkillNewIcon = true;
    }
    private stopNewAnim() {
        egret.Tween.removeTweens(this.iconNew);

        this.iconNew.visible = false;
    }

    public refreshLockStatus() {
        var bLocked = false;
        if (Logic.player.level < this.m_iUnlockLevel
            || Logic.money < this.m_iLevelUpMoney) {
            bLocked = true;
        }
        if (Logic.player.level < this.m_iUnlockLevel) {
            this.labelLevelUnlockDes.visible = true;
            this.labelLevelUnlockDes.text = "" + this.m_iUnlockLevel + "级解锁";
        } else {
            this.labelLevelUnlockDes.visible = false;
        }

        var bLastLocked = this.btnLevelUp.enabled;

        this.btnLevelUp.enabled = !bLocked;
        this.iconLockMask.visible = bLocked;

        if (bLastLocked == false && this.btnLevelUp.enabled == true) {
            if (this.iconNew.visible == false) {
                this.showNewAnim();
            }
        } else {
            this.iconNew.visible = false;
        }
    }

    private refreshSkillInfo() {
        if (this.labelSkillInfo == null) {
            return;
        }

        this.labelSkillInfo.lineSpacing = 6;
        this.labelSkillInfo.text = this.m_strSkillInfo;

        this.labelLevelUpMoney.text = Utils.bigNumber(this.m_iLevelUpMoney);
    }

    public setPlayerRebornInfo() {
        var datas = Logic.player.skills[6];
        this.m_iSkillIndex = 6;

    	this.m_iSkillID = datas.skill_id;

    	this.m_strSkillName = datas.name;
        this.m_iUnlockLevel = datas.unlock_level;

        var datas = Logic.player.skills[this.m_iSkillIndex];
        this.m_iLevelUpMoney = Logic.getPlayerSkillLevelupMoney(this.m_iSkillID, 1);

        var mbLine = Utils.getLine("player_skill", this.m_iSkillID);
        var strSkillInfo = mbLine[player_skill_info];
        this.m_strSkillInfo = strSkillInfo;
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);

        if (instance == this.labelSkillName) {
            this.labelSkillName.text = this.m_strSkillName;
        }
        else if (instance == this.labelLevelUpMoney) {
            this.labelLevelUpMoney.text = Utils.bigNumber(this.m_iLevelUpMoney);
        }
        else if (instance == this.iconSkillIcon) {
            var strSkillIconName = "猴子技能" + this.m_iSkillID;
            this.iconSkillIcon.source = RES.getRes(strSkillIconName);
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

            this.gameView.showRebornDetailDlg();
        }
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
