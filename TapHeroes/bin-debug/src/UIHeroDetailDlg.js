var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroDetailDlg = (function (_super) {
    __extends(HeroDetailDlg, _super);
    function HeroDetailDlg() {
        _super.call(this);
        this.skinName = "skins.HeroDetailDlgSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    HeroDetailDlg.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        // Set all datas in UI.
        this.iconHero.source = RES.getRes(this.m_strHeroIconName);
        this.labelHeroName.text = this.m_strHeroName;
        this.labelHeroLevel.text = "" + this.m_iHeroLevel;
        this.labelHeroDamage.text = Utils.bigNumber(this.m_iDPSValue);
        this.labelHeroDesc.text = this.m_strHeroDesc;
        // Add touch event listener.
        this.iconClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseClicked, this);
        this.scrollSkillList.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scrollSkillList.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.showSkillList();
    };
    HeroDetailDlg.prototype.showSkillList = function () {
        if (this.m_bIsPlayer) {
            var iSkillListSize = Logic.player.skills.length;
            for (var i = 0; i < iSkillListSize; ++i) {
                var uiSkillDetailDesc = new SkillDetailDesc();
                uiSkillDetailDesc.initPlayerSkillDatas(i);
                uiSkillDetailDesc.width = G.width;
                this.groupSkillList.addElement(uiSkillDetailDesc);
            }
        }
        else {
            var iSkillListSize = Logic.getHeroByID(this.m_iHeroID).skills.length;
            for (var i = 0; i < iSkillListSize; ++i) {
                var uiSkillDetailDesc = new SkillDetailDesc();
                uiSkillDetailDesc.initHeroSkillDatas(this.m_iHeroID, i);
                uiSkillDetailDesc.width = G.width;
                this.groupSkillList.addElement(uiSkillDetailDesc);
            }
        }
    };
    HeroDetailDlg.prototype.initPlayerDatas = function () {
        this.m_bIsPlayer = true;
        this.m_strHeroIconName = "猴子";
        this.m_strHeroName = Logic.player.name;
        this.m_iHeroLevel = Logic.player.level;
        this.m_iDPSValue = Logic.player.total_damage;
        this.m_strHeroDesc = "我就是我，是颜色不一样的烟火~~~~~~~~~";
    };
    HeroDetailDlg.prototype.initHeroDatas = function (heroId) {
        this.m_bIsPlayer = false;
        this.m_iHeroID = heroId;
        var datas = Logic.getHeroByID(heroId);
        this.m_strHeroIconName = "天将" + this.m_iHeroID;
        this.m_strHeroName = datas.name;
        this.m_iHeroLevel = datas.level;
        this.m_iDPSValue = datas.total_dps;
        var sMbLine = Utils.getLine("hero_list", this.m_iHeroID);
        var strHeroInfo = sMbLine[hero_list_info];
        this.m_strHeroDesc = strHeroInfo;
    };
    HeroDetailDlg.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    HeroDetailDlg.prototype.btnCloseClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            this.gameView.guiLayer.removeElement(this);
        }
    };
    return HeroDetailDlg;
})(egret.gui.Panel);
HeroDetailDlg.prototype.__class__ = "HeroDetailDlg";
