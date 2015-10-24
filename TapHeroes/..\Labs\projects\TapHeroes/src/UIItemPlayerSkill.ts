class ItemPlayerSkill extends egret.gui.Panel{
    private gameView:GameView;

    private m_iSkillIndex:number;
	private m_iSkillID:number;
	private m_strSkillName:string;
	private m_iSkillLevel:number;
	private m_strSkillInfo:string;
	private m_iLevelUpMoney:number;
    private m_iUnlockLevel:number;
    private m_iNextDPSValue:number;

	private labelSkillName:egret.gui.Label;
	private labelLevelNum:egret.gui.Label;
	private labelSkillInfo:egret.gui.Label;
	private btnLevelUp:egret.gui.Button;
	private labelLevelUpMoney:egret.gui.Label;
    private iconSkillIcon:egret.gui.UIAsset;
    private iconLockMask:egret.gui.UIAsset;
    private rectDetailArea:egret.gui.Rect;
    private labelLevelUnlockDes:egret.gui.Label;
    private labelLevelUpDes:egret.gui.Label;

    private iconNew:egret.gui.UIAsset;

    public constructor(){
        super();
        this.skinName = "skins.base.PlayerSkillSkin";
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
        if (this.btnLevelUp == null) {
            return;
        }
        
        var bLocked = false;
        if (Logic.player.level < this.m_iUnlockLevel
            || Logic.money < this.m_iLevelUpMoney) {
            bLocked = true;
        }
        if (Logic.player.level < this.m_iUnlockLevel) {
            this.labelLevelUnlockDes.visible = true;
            this.labelLevelUnlockDes.text = "" + this.m_iUnlockLevel + "级解锁";

            this.labelLevelUpDes.visible = false;
        } else {
            this.labelLevelUnlockDes.visible = false;
            this.labelLevelUpDes.visible = true;
        }

        this.btnLevelUp.enabled = !bLocked;

        if (this.m_iSkillLevel == 0) {
            this.iconLockMask.visible = true;
            this.labelLevelUpDes.visible = false;
        } else {
            this.iconLockMask.visible = false;
        }

        if (this.m_iSkillLevel == 0 && this.btnLevelUp.enabled == true) {
            if (this.iconNew.visible == false) {
                this.showNewAnim();
            }
        } else {
            this.iconNew.visible = false;
        }
    }

    private refreshSkillInfo() {
        var datas = Logic.player.skills[this.m_iSkillIndex];

        this.m_iLevelUpMoney = Logic.getPlayerSkillLevelupMoney(this.m_iSkillID, 1);
        this.m_iSkillLevel = datas.level;

        this.labelLevelNum.text = "" + this.m_iSkillLevel;
        this.labelLevelUpMoney.text = Utils.bigNumber(this.m_iLevelUpMoney);

        var iDamagePlus = Logic.getPlayerSkillData( this.m_iSkillIndex + 1 )
        var next = Logic.getPlayerSkillDataLevel(this.m_iSkillID, this.m_iSkillLevel+1) - Logic.getPlayerSkillDataLevel(this.m_iSkillID, this.m_iSkillLevel);
        if (this.m_iSkillIndex == 0) {
            this.m_strSkillInfo = "3秒后对妖怪造成" + iDamagePlus + "倍点击伤害";
            this.labelLevelUpDes.text = "+" + Utils.bigNumber( next )
        } else if (this.m_iSkillIndex == 1) {
            this.m_strSkillInfo = "召唤一个分身，每秒自动点击" + iDamagePlus + "次";
            this.labelLevelUpDes.text = "+" + Utils.bigNumber( next )
        } else if (this.m_iSkillIndex == 2) {
            iDamagePlus = Math.floor(iDamagePlus * 100 )
            this.m_strSkillInfo = "增加" + iDamagePlus + "%的暴击率";
            next = Math.floor( next*100 )
            this.labelLevelUpDes.text = "+" + next + "%"
        } else if (this.m_iSkillIndex == 3) {
            iDamagePlus = Math.floor(iDamagePlus * 100 )
            this.m_strSkillInfo = "所有天将的攻速增加" + iDamagePlus + "%";
            next = Math.floor( next*100 )
            this.labelLevelUpDes.text = "+" + next + "%"
        } else if (this.m_iSkillIndex == 4) {
            iDamagePlus = Math.floor(iDamagePlus * 100 )
            this.m_strSkillInfo = "点击伤害增加" + iDamagePlus + "%";
            next = Math.floor( next*100 )
            this.labelLevelUpDes.text = "+" + next + "%"
        } else if (this.m_iSkillIndex == 5) {
            iDamagePlus = Math.floor(iDamagePlus * 100 )
            this.m_strSkillInfo = "每次点击获得的金钱增加" + iDamagePlus + "%";
            next = Math.floor( next*100 )
            this.labelLevelUpDes.text = "+" + next + "%"
        }

        this.labelSkillInfo.text = this.m_strSkillInfo;
    }

    public setPlayerSkillIndex(index:number) {
        var datas = Logic.player.skills[index];
        this.m_iSkillIndex = index;

    	this.m_iSkillID = datas.skill_id;

    	this.m_strSkillName = datas.name;
        this.m_iUnlockLevel = datas.unlock_level;
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);

        if (instance == this.labelSkillName) {
            this.labelSkillName.text = this.m_strSkillName;
        }
        else if (instance == this.labelLevelNum) {
            this.labelLevelNum.text = "" + this.m_iSkillLevel;
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

            var bLevelUpRes = Logic.levelupPlayerSkill(this.m_iSkillID, 1);
            if (bLevelUpRes == false) {
                console.log("========= Player skill level up failed!!!");
                return;
            }

            this.gameView.onLevelupPlayerSkill( this.m_iSkillID )

            this.refreshSkillInfo();
            this.refreshLockStatus();

            var viewport = <egret.gui.IViewport>this.gameView.ui_main.main_scroller1.viewport;
            var group = <egret.gui.Group>this.gameView.ui_main.main_scroller1.viewport;
            var top = viewport.verticalScrollPosition
            var child = group.getElementAt( this.m_iSkillID )

            var posX = this.iconSkillIcon.x + this.iconSkillIcon.width/2 + 5;
            var posY = this.gameView.ui_main.main_scroller1.y + child.y - top + this.iconSkillIcon.y + this.iconSkillIcon.height;

            this.gameView.showLevelUpAnim(posX, posY);
            this.gameView.refreshAllAboutMoney();

            if (this.m_iSkillLevel == 1) {
                this.gameView.ui_main.refreshSkillOnMain();
            }
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
