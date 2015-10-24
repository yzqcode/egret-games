class DailyAwardDlg extends egret.gui.Panel{
    private gameView:GameView;

    private difficuty_number:egret.gui.Label;
    private award_title:egret.gui.Label;
    private award_title_bg:egret.gui.UIAsset;
    private award_icon_1:egret.gui.UIAsset;
    private award_icon_2:egret.gui.UIAsset;
    private award_text_1:egret.gui.Label;
    private award_text_2:egret.gui.Label;
    private get_btn:egret.gui.UIAsset;
    private close_area:egret.gui.UIAsset;
    
    private m_iAward1:number;
    private m_iAward2:number;
    private m_iDifficultyNumber:string;
    private m_iDifficultyName:string;

    public constructor() {
        super();
        this.skinName = "skins.DailyAwardSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.refreshAwardInfo();

        this.close_area.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClose, this );
        this.get_btn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onGetAward, this );
    }

    private refreshAwardInfo() {
        var id = Logic.difficulty_passed_id;
        var name_list = Logic.getDifficultyNameById(id);
        this.difficuty_number.text = "您已经闯到" + name_list[0];

        var award_list = Logic.getDifficultyAwardById(id);

        var award1 = award_list[1];
        var award2 = award_list[2];;
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
    }

    private onGetAward( evt ) {
        Net.getDailyAward();
        
        this.gameView.guiLayer.removeElement(this);
        this.gameView.ui_main.hideDailyAwardBtn();
    }

    public onClose( evt ) {
        this.gameView.guiLayer.removeElement(this);
    }
}

