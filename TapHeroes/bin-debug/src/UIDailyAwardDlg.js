var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DailyAwardDlg = (function (_super) {
    __extends(DailyAwardDlg, _super);
    function DailyAwardDlg() {
        _super.call(this);
        this.skinName = "skins.DailyAwardSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    DailyAwardDlg.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refreshAwardInfo();
        this.close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.get_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetAward, this);
    };
    DailyAwardDlg.prototype.refreshAwardInfo = function () {
        var id = Logic.difficulty_passed_id;
        var name_list = Logic.getDifficultyNameById(id);
        this.difficuty_number.text = "您已经闯到" + name_list[0];
        var award_list = Logic.getDifficultyAwardById(id);
        var award1 = award_list[1];
        var award2 = award_list[2];
        ;
        if (award_list[1] <= 0) {
            this.award_icon_1.source = "元宝";
            award1 = award_list[0];
        }
        else if (award_list[2] <= 0) {
            this.award_icon_1.source = "元宝";
            this.award_icon_2.source = "仙桃";
            award1 = award_list[0];
            award2 = award_list[1];
        }
        this.award_text_1.text = "x" + Utils.bigNumber(award1);
        this.award_text_2.text = "x" + Utils.bigNumber(award2);
        // TODO:
        //award_title:egret.gui.Label;
        //award_title_bg:egret.gui.UIAsset;
    };
    DailyAwardDlg.prototype.onGetAward = function (evt) {
        Net.getDailyAward();
        this.gameView.guiLayer.removeElement(this);
        this.gameView.ui_main.hideDailyAwardBtn();
    };
    DailyAwardDlg.prototype.onClose = function (evt) {
        this.gameView.guiLayer.removeElement(this);
    };
    return DailyAwardDlg;
})(egret.gui.Panel);
DailyAwardDlg.prototype.__class__ = "DailyAwardDlg";
