var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemPlayerReborn = (function (_super) {
    __extends(ItemPlayerReborn, _super);
    function ItemPlayerReborn() {
        _super.call(this);
        this.skinName = "skins.base.PlayerRebornItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemPlayerReborn.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refreshSkillInfo();
        this.refreshLockStatus();
        // Add touch event listener.
        this.rectDetailArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnDetailClicked, this);
        this.btnLevelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnLevelUpClicked, this);
    };
    ItemPlayerReborn.prototype.showNewAnim = function () {
        this.iconNew.visible = true;
        var tw = egret.Tween.get(this.iconNew, { loop: true });
        tw.to({ scaleX: 1.1, scaleY: 1.1 }, 100).to({ scaleX: 1.0, scaleY: 1.0 }, 100).to({ scaleX: 1.1, scaleY: 1.1 }, 100).to({ scaleX: 1.0, scaleY: 1.0 }, 100).wait(700);
        this.gameView.ui_main.m_bShowSkillNewIcon = true;
    };
    ItemPlayerReborn.prototype.stopNewAnim = function () {
        egret.Tween.removeTweens(this.iconNew);
        this.iconNew.visible = false;
    };
    ItemPlayerReborn.prototype.refreshLockStatus = function () {
        var bLocked = false;
        if (Logic.player.level < this.m_iUnlockLevel || Logic.money < this.m_iLevelUpMoney) {
            bLocked = true;
        }
        if (Logic.player.level < this.m_iUnlockLevel) {
            this.labelLevelUnlockDes.visible = true;
            this.labelLevelUnlockDes.text = "" + this.m_iUnlockLevel + "级解锁";
        }
        else {
            this.labelLevelUnlockDes.visible = false;
        }
        var bLastLocked = this.btnLevelUp.enabled;
        this.btnLevelUp.enabled = !bLocked;
        this.iconLockMask.visible = bLocked;
        if (bLastLocked == false && this.btnLevelUp.enabled == true) {
            if (this.iconNew.visible == false) {
                this.showNewAnim();
            }
        }
        else {
            this.iconNew.visible = false;
        }
    };
    ItemPlayerReborn.prototype.refreshSkillInfo = function () {
        if (this.labelSkillInfo == null) {
            return;
        }
        this.labelSkillInfo.lineSpacing = 6;
        this.labelSkillInfo.text = this.m_strSkillInfo;
        this.labelLevelUpMoney.text = Utils.bigNumber(this.m_iLevelUpMoney);
    };
    ItemPlayerReborn.prototype.setPlayerRebornInfo = function () {
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
    };
    ItemPlayerReborn.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
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
            this.iconNew.x += this.iconNew.width / 2;
            this.iconNew.y += this.iconNew.height / 2;
        }
    };
    ItemPlayerReborn.prototype.btnLevelUpClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            this.gameView.showRebornDetailDlg();
        }
    };
    ItemPlayerReborn.prototype.btnDetailClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            this.gameView.showPlayerDetailDlg();
        }
    };
    return ItemPlayerReborn;
})(egret.gui.Panel);
ItemPlayerReborn.prototype.__class__ = "ItemPlayerReborn";
