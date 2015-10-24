var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemDifficulty = (function (_super) {
    __extends(ItemDifficulty, _super);
    function ItemDifficulty() {
        _super.call(this);
        this.skinName = "skins.base.DifficultyItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemDifficulty.prototype.setDifficultyIndex = function (iDifficultyId, iListIndex) {
        this.m_iListIndex = iListIndex;
        this.m_iDifficultyId = iDifficultyId;
    };
    ItemDifficulty.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refresh();
        this.resetPosY(this.m_iListIndex);
    };
    ItemDifficulty.prototype.resetPosY = function (iListIndex) {
        this.m_iListIndex = iListIndex;
        this.y = this.height * this.m_iListIndex;
    };
    ItemDifficulty.prototype.refresh = function () {
        var name_list = Logic.getDifficultyNameById(this.m_iDifficultyId);
        this.difficulty_number_text.text = name_list[0];
        this.difficuty_name_text.text = name_list[1];
        var status = Logic.getDifficultyStatus(this.m_iDifficultyId);
        if (status == 0) {
            // Next difficulty
            this.iconRankBg.source = "rank_bg_1_png";
            this.fight_btn.source = "fight_btn_red_png";
            this.difficulty_number_text.textColor = 0xFFC700;
            this.difficuty_name_text.textColor = 0xFFC700;
            this.fight_text.textColor = 0x000000;
            this.fight_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightClicked, this);
        }
        else if (status == 1) {
            // Passed difficulty
            this.iconRankBg.source = "rank_bg_3_png";
            this.fight_btn.source = "fight_btn_orange_png";
            this.fight_text.text = "刷新记录";
            this.difficulty_number_text.textColor = 0xFFC700;
            this.difficuty_name_text.textColor = 0xFFC700;
            this.fight_text.textColor = 0x000000;
            this.kill_header_text.visible = true;
            this.boss_icon.visible = true;
            this.kill_number_text.visible = true;
            this.award_header_text.visible = false;
            this.award_icon_1.visible = false;
            this.award_text_1.visible = false;
            this.award_icon_2.visible = false;
            this.award_text_2.visible = false;
            this.fight_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightClicked, this);
        }
        var award_list = Logic.getDifficultyAwardById(this.m_iDifficultyId);
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
        this.kill_number_text.text = "" + Logic.getDifficultyRecordById(this.m_iDifficultyId);
    };
    ItemDifficulty.prototype.onFightClicked = function (evt) {
        this.gameView.challengeDifficulty(this.m_iDifficultyId);
    };
    return ItemDifficulty;
})(egret.gui.Panel);
ItemDifficulty.prototype.__class__ = "ItemDifficulty";
