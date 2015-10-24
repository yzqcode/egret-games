class UIJobCardItem extends egret.gui.Panel {
    public icon_card_frame:egret.gui.UIAsset;
    public icon_body:egret.gui.UIAsset;

    public label_card_num:egret.gui.Label;

    public select_frame:egret.gui.UIAsset;
    public pos_mask:egret.gui.UIAsset;

    public job_cards_dlg:UIJobCardsDialog;
    public index:number;
    public card_info:JobCardInfo;

    public is_selected:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIJobCardItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.x = this.width * this.index;

        this.pos_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectCard, this);

        this.refreshInfo();
    }

    public setIndex(job_cards_dlg:UIJobCardsDialog, index:number, card_info:JobCardInfo) {
        this.job_cards_dlg = job_cards_dlg;
        this.index = index;
        this.card_info = card_info;
    }

    public deselect() {
        this.is_selected = false;
        if (this.pos_mask == null) {
            return;
        }

        this.pos_mask.visible = true;
        this.select_frame.visible = false;
    }

    public select() {
        this.is_selected = true;
        if (this.pos_mask == null) {
            return;
        }

        this.pos_mask.visible = false;
        this.select_frame.visible = true;
    }

    private onSelectCard(evt) {
        if (this.is_selected) {
            return;
        }
        
        this.job_cards_dlg.selectCard(this.index);
        this.select();
    }

    public refreshInfo() {
        if (this.label_card_num == null) {
            return;
        }
        
        this.label_card_num.text = "" + this.card_info.card_num;

        this.icon_card_frame.source = Utils.getJobCardImgName(this.card_info.card_level);
        this.icon_body.source = Utils.getKnightBigImgName(this.card_info.card_type);

        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    }

}

