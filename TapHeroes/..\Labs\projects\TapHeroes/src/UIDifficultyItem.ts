class ItemDifficulty extends egret.gui.Panel{
    private gameView:GameView;

    private iconRankBg:egret.gui.UIAsset;
    private difficulty_number_text:egret.gui.Label;
    private difficuty_name_text:egret.gui.Label;
    private fight_btn:egret.gui.UIAsset;
    private fight_text:egret.gui.Label;

    private award_header_text:egret.gui.Label;
    private award_icon_1:egret.gui.UIAsset;
    private award_text_1:egret.gui.Label;
    private award_icon_2:egret.gui.UIAsset;
    private award_text_2:egret.gui.Label;

    private kill_header_text:egret.gui.Label;
    private boss_icon:egret.gui.UIAsset;
    private kill_number_text:egret.gui.Label;

    private m_iListIndex:number;
    public m_iDifficultyId:number;

    public constructor(){
        super();
        this.skinName = "skins.base.DifficultyItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public setDifficultyIndex( iDifficultyId:number, iListIndex:number ) {
        this.m_iListIndex = iListIndex;
        this.m_iDifficultyId = iDifficultyId;
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refresh();
        this.resetPosY(this.m_iListIndex);
    }

    public resetPosY(iListIndex:number) {
        this.m_iListIndex = iListIndex;
        this.y = this.height * this.m_iListIndex;
    }

    public refresh() {
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

            this.fight_btn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onFightClicked, this );
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

            this.fight_btn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onFightClicked, this );
        }

        var award_list = Logic.getDifficultyAwardById(this.m_iDifficultyId);
        var award1 = award1 = award_list[1];;
        var award2 = award1 = award_list[2];;
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
    }

    private onFightClicked( evt ) {
        this.gameView.challengeDifficulty(this.m_iDifficultyId);
    }
}

