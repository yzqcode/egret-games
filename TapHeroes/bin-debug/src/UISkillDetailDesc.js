var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SkillDetailDesc = (function (_super) {
    __extends(SkillDetailDesc, _super);
    function SkillDetailDesc() {
        _super.call(this);
        this.skinName = "skins.base.SkillDetailDescSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    SkillDetailDesc.prototype.onCreationComplete = function (evt) {
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
    };
    SkillDetailDesc.prototype.initPlayerSkillDatas = function (iSkillIndex) {
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
            var iDamagePlus = 140 + 30 * iSkillLevel;
            this.m_strSkillInfo = "3秒后对妖怪造成" + iDamagePlus + "倍点击伤害";
        }
        else if (iSkillIndex == 1) {
            var iDamagePlus = 10 + 3 * iSkillLevel;
            this.m_strSkillInfo = "召唤一个分身，每秒自动点击" + iDamagePlus + "次";
        }
        else if (iSkillIndex == 2) {
            var iDamagePlus = 20 + 3 * iSkillLevel;
            this.m_strSkillInfo = "增加" + iDamagePlus + "%的暴击率";
        }
        else if (iSkillIndex == 3) {
            var iDamagePlus = 200 + 50 * iSkillLevel;
            this.m_strSkillInfo = "所有天将的攻速增加" + iDamagePlus + "%";
        }
        else if (iSkillIndex == 4) {
            var iDamagePlus = 100 + 30 * iSkillLevel;
            this.m_strSkillInfo = "点击伤害增加" + iDamagePlus + "%";
        }
        else if (iSkillIndex == 5) {
            var iDamagePlus = 20 + 5 * iSkillLevel;
            this.m_strSkillInfo = "每次点击获得的金钱增加" + iDamagePlus + "%";
        }
        else {
            this.m_strSkillInfo = sMbLine[player_skill_info];
        }
    };
    SkillDetailDesc.prototype.initHeroSkillDatas = function (heroID, iSkillIndex) {
        this.m_bIsPlayer = false;
        this.m_iHeroID = heroID;
        this.m_strSkillPic = "天将" + this.m_iHeroID + "_技能" + (iSkillIndex + 1);
        this.m_iSkillID = this.m_iHeroID * 1000000 + (iSkillIndex + 1);
        var sMbLine = Utils.getLine("hero_skill", this.m_iSkillID);
        this.m_strSkillName = sMbLine[hero_skill_name];
        this.m_strSkillInfo = sMbLine[hero_skill_info];
        var arraySkillList = Logic.getHeroByID(this.m_iHeroID).skills;
        this.m_bIsLocked = arraySkillList[iSkillIndex].locked;
        this.m_iUnlockLevel = arraySkillList[iSkillIndex].unlock_level;
    };
    SkillDetailDesc.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    return SkillDetailDesc;
})(egret.gui.Panel);
SkillDetailDesc.prototype.__class__ = "SkillDetailDesc";
