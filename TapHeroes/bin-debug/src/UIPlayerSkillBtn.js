var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PlayerSkillBtn = (function (_super) {
    __extends(PlayerSkillBtn, _super);
    function PlayerSkillBtn() {
        _super.call(this);
        this.skinName = "skins.base.BtnPlayerSkillLevelSkin";
    }
    PlayerSkillBtn.prototype.setLevelUpMoney = function (money) {
        this.m_iLevelUpMoney = money;
        if (this.labelMoney) {
            this.labelMoney.text = "" + this.m_iLevelUpMoney;
        }
    };
    PlayerSkillBtn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.labelMoney) {
            this.labelMoney.text = "" + this.m_iLevelUpMoney;
            console.log("===========" + this.m_iLevelUpMoney);
        }
    };
    return PlayerSkillBtn;
})(egret.gui.Button);
PlayerSkillBtn.prototype.__class__ = "PlayerSkillBtn";
