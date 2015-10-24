class DifficultiesInfoDlg extends egret.gui.Panel{
    private gameView:GameView;

    private award_icon_1:egret.gui.UIAsset;
    private award_icon_2:egret.gui.UIAsset;
    private award_text_1:egret.gui.Label;
    private award_text_2:egret.gui.Label;
    private difficulty_number_text:egret.gui.Label;
    private difficuty_name_text:egret.gui.Label;
    private fight_btn:egret.gui.UIAsset;
    private close_area:egret.gui.UIAsset;
    
    public constructor() {
        super();
        this.skinName = "skins.DifficultiesInfoSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshDifficultiesInfo();

        this.close_area.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClose, this );
        this.fight_btn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onFightClicked, this );
    }

    private refreshDifficultiesInfo() {
        var next_id = Logic.getNextDifficultyId();
        var name_list = Logic.getDifficultyNameById(next_id);
        this.difficulty_number_text.text = name_list[0];
        this.difficuty_name_text.text = name_list[1];

        var award_list = Logic.getDifficultyAwardById(next_id);

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
    }

    private onFightClicked( evt ) {
        this.gameView.guiLayer.removeElement(this);
        this.gameView.showDifficultiesDlg();
    }

    public onClose( evt ) {
        this.gameView.guiLayer.removeElement(this);
    }
}

