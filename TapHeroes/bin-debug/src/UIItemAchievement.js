var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AchieveButton = (function (_super) {
    __extends(AchieveButton, _super);
    function AchieveButton() {
        _super.call(this);
        this.skinName = "skins.base.BtnAchieveSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    AchieveButton.prototype.onCreationComplete = function (evt) {
    };
    return AchieveButton;
})(egret.gui.Button);
AchieveButton.prototype.__class__ = "AchieveButton";
var ItemAchievement = (function (_super) {
    __extends(ItemAchievement, _super);
    function ItemAchievement() {
        _super.call(this);
        this.achieve_id = 0;
        this.index = 0;
        this.achieveitem_stars = [];
        this.skinName = "skins.base.AchieveItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemAchievement.prototype.refresh = function () {
        var line = Utils.getLine("trophies_list", this.achieve_id);
        var type = this.achieve_id - 1;
        var cur = Stat.cur_achieve[type];
        for (var i = 0; i < cur; ++i) {
            this.achieveitem_stars[i].source = "金星";
        }
        if (Utils.v_in(type, Stat.new_achieve)) {
            this.btn_receive.enabled = true;
        }
        else {
            this.btn_receive.enabled = false;
        }
        this.btn_receive.btnachieve_diamond.text = Utils.bigNumber(AchivementDiamonds[cur]);
        var s = line[trophies_list_info].replace("%", Utils.bigNumber(Stat.achieve[type][cur]));
        this.achieveitem_title.text = s;
        console.log(Utils.bigNumber(Stat.getData(type), true), Utils.bigNumber(Stat.achieve[type][cur], true));
        this.label_progress.text = Utils.bigNumber(Stat.getData(type), true) + "/" + Utils.bigNumber(Stat.achieve[type][cur], true);
        this.achieveitem_icon.source = "chengjiu" + Utils.formatNumber(this.achieve_id, 3, "0");
    };
    ItemAchievement.prototype.setParent = function (p) {
        this.ui_achievement = p;
    };
    ItemAchievement.prototype.onCreationComplete = function (evt) {
        if (this.achieve_id == 0) {
            return;
        }
        this.achieveitem_stars = [this.achieveitem_star1, this.achieveitem_star2, this.achieveitem_star3, this.achieveitem_star4, this.achieveitem_star5];
        this.y = (this.height + 4) * this.index;
        this.refresh();
        this.btn_receive.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapReceive, this);
    };
    ItemAchievement.prototype.onTapReceive = function (evt) {
        var type = this.achieve_id - 1;
        var l = Stat.receiveAchieve(type);
        if (l[0]) {
            this.refresh();
            this.ui_achievement.refreshSelf();
            GameView.instance().refreshAllAboutDiamond();
        }
    };
    return ItemAchievement;
})(egret.gui.Panel);
ItemAchievement.prototype.__class__ = "ItemAchievement";
