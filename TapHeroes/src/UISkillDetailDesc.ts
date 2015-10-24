class SkillDetailDesc extends egret.gui.Panel{
    private m_bIsPlayer:boolean;
    private m_iHeroID:number;

	private m_iSkillID:number;
    private m_strSkillPic:string;
	private m_strSkillName:string;
	private m_strSkillInfo:string;
    private m_bIsLocked:boolean;
    private m_iUnlockLevel:number;

    private iconSkillPic:egret.gui.UIAsset;
	private labelSkillName:egret.gui.Label;
	private labelSkillDesc:egret.gui.Label;
    private iconLockMask:egret.gui.UIAsset;
    private labelLockTitle:egret.gui.Label;
    private labelLockHeader:egret.gui.Label;
    private labelLockLevel:egret.gui.Label;

    public constructor(){
        super();
        this.skinName = "skins.base.SkillDetailDescSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Set all datas in UI.
        this.iconSkillPic.source = RES.getRes(this.m_strSkillPic);
        this.labelSkillName.text = this.m_strSkillName;
        this.labelSkillDesc.text = this.m_strSkillInfo;

        this.iconLockMask.visible = this.m_bIsLocked;
        this.labelLockTitle.visible = this.m_bIsLocked;
        this.labelLockHeader.visible = this.m_bIsLocked;
        this.labelLockLevel.visible = this.m_bIsLocked;
        if (this.m_bIsLocked) {
            this.labelLockLevel.text = "" + this.m_iUnlockLevel;
        }
    }

    public initPlayerSkillDatas(iSkillIndex : number) {
        this.m_bIsPlayer = true;

        this.m_iSkillID = iSkillIndex + 1;
        this.m_strSkillPic = "猴子技能" + this.m_iSkillID;

        var sMbLine = Utils.getLine("player_skill", this.m_iSkillID);

        this.m_strSkillName = sMbLine[player_skill_name];

        var arraySkillList = Logic.player.skills;

        this.m_bIsLocked = arraySkillList[iSkillIndex].locked;
        this.m_iUnlockLevel = arraySkillList[iSkillIndex].unlock_level;

        var iSkillLevel = arraySkillList[iSkillIndex].level;
        if (iSkillIndex == 0) {
            var iDamagePlus = 140+30*iSkillLevel;
            this.m_strSkillInfo = "3秒后对妖怪造成" + iDamagePlus + "倍点击伤害";
        } else if (iSkillIndex == 1) {
            var iDamagePlus = 10+3*iSkillLevel;
            this.m_strSkillInfo = "召唤一个分身，每秒自动点击" + iDamagePlus + "次";
        } else if (iSkillIndex == 2) {
            var iDamagePlus = 20+3*iSkillLevel;
            this.m_strSkillInfo = "增加" + iDamagePlus + "%的暴击率";
        } else if (iSkillIndex == 3) {
            var iDamagePlus = 200+50*iSkillLevel;
            this.m_strSkillInfo = "所有天将的攻速增加" + iDamagePlus + "%";
        } else if (iSkillIndex == 4) {
            var iDamagePlus = 100+30*iSkillLevel;
            this.m_strSkillInfo = "点击伤害增加" + iDamagePlus + "%";
        } else if (iSkillIndex == 5) {
            var iDamagePlus = 20+5*iSkillLevel;
            this.m_strSkillInfo = "每次点击获得的金钱增加" + iDamagePlus + "%";
        } else {
            this.m_strSkillInfo = sMbLine[player_skill_info];
        }
    }

    public initHeroSkillDatas(heroID : number, iSkillIndex : number) {
        this.m_bIsPlayer = false;
        this.m_iHeroID = heroID;

        this.m_strSkillPic = "天将" + this.m_iHeroID + "_技能" + (iSkillIndex+1);
        
        this.m_iSkillID = this.m_iHeroID * 1000000 + (iSkillIndex+1);
        var sMbLine = Utils.getLine("hero_skill", this.m_iSkillID);
        
        this.m_strSkillName = sMbLine[hero_skill_name];
        this.m_strSkillInfo = sMbLine[hero_skill_info];


        var arraySkillList = Logic.getHeroByID(this.m_iHeroID).skills;

        this.m_bIsLocked = arraySkillList[iSkillIndex].locked;
        this.m_iUnlockLevel = arraySkillList[iSkillIndex].unlock_level;
    }

    public partAdded(partName:string, instance:any):void{
        super.partAdded(partName, instance);
    }
}
