class DailyAwardDlg extends egret.gui.Panel{
    private gameView:GameView;

    private difficuty_number:egret.gui.Label;
    private award_title:egret.gui.Label;
    private award_title_bg:egret.gui.UIAsset;
    private award_icon_peach:egret.gui.UIAsset;
    private award_icon_money:egret.gui.UIAsset;
    private award_icon_diamond:egret.gui.UIAsset;
    private money_num_text:egret.gui.Label;
    private peach_num_text:egret.gui.Label;
    private diamond_num_text:egret.gui.Label;
    private get_btn:egret.gui.UIAsset;

    public constructor() {
        super();
        this.skinName = "skins.DailyAwardSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshAwardInfo();

        this.get_btn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onGetAward, this );
    }

    private refreshAwardInfo() {
        var id = Logic.difficulty_passed_id;
        var name_list = Logic.getDifficultyNameById(id);
        this.difficuty_number.text = "您已经闯到" + name_list[0];

        var l = Logic.getDifficultyAward();
        this.award_title.text = Logic.getPlayerTitle()

        this.money_num_text.text = "x " + Utils.bigNumber(l[0]);
        this.peach_num_text.text = "x " + Utils.bigNumber(l[1]);
        this.diamond_num_text.text = "x " + Utils.bigNumber(l[2]);
    }

    private onGetAward( evt ) {
        Logic.collectDifficultyAward()
        this.gameView.refreshAllAboutMoney()
        this.gameView.refreshAllAboutPeach()
        this.gameView.refreshAllAboutDiamond()
        this.gameView.guiLayer.removeElement(this);
        this.gameView.ui_main.refreshDifficultyAward()

        this.gameView.m_bHasShowInfo = true
        this.gameView.showDifficultiesDlg()
    }

    public onClose( evt ) {
        this.gameView.guiLayer.removeElement(this);
    }
}

