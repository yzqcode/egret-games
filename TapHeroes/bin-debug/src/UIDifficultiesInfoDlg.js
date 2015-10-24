var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DifficultiesInfoDlg = (function (_super) {
    __extends(DifficultiesInfoDlg, _super);
    function DifficultiesInfoDlg() {
        _super.call(this);
        this.skinName = "skins.DifficultiesInfoSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    DifficultiesInfoDlg.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refreshDifficultiesInfo();
        this.close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.fight_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightClicked, this);
    };
    DifficultiesInfoDlg.prototype.refreshDifficultiesInfo = function () {
        var next_id = Logic.getNextDifficultyId();
        var name_list = Logic.getDifficultyNameById(next_id);
        this.difficulty_number_text.text = name_list[0];
        this.difficuty_name_text.text = name_list[1];
        var award_list = Logic.getDifficultyAwardById(next_id);
        var award1 = award1 = award_list[1];
        ;
        var award2 = award1 = award_list[2];
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
    };
    DifficultiesInfoDlg.prototype.onFightClicked = function (evt) {
        this.gameView.guiLayer.removeElement(this);
        this.gameView.showDifficultiesDlg();
    };
    DifficultiesInfoDlg.prototype.onClose = function (evt) {
        this.gameView.guiLayer.removeElement(this);
    };
    return DifficultiesInfoDlg;
})(egret.gui.Panel);
DifficultiesInfoDlg.prototype.__class__ = "DifficultiesInfoDlg";
