//removeEventListener
class UIDoJobDialog extends egret.gui.Panel{
    public doJob_use_diamond_btn:egret.gui.Button;
    public doJob_use_money_btn:egret.gui.Button;

    public doJob_before_body:egret.gui.UIAsset;
    public doJob_later_body:egret.gui.UIAsset;

    public doJob_before_body_mask:egret.gui.UIAsset;
    public doJob_later_body_mask:egret.gui.UIAsset;

    public close_icon:egret.gui.UIAsset;

    public label_money_fee:egret.gui.Label;
    public label_diamond_fee:egret.gui.Label;

    public guiLayer:egret.gui.UIStage = null;
    public knight_info:Knight_Position_Info = null;
    public card_info:JobCardInfo = null;

    public constructor(){
        super();
        this.skinName = "skins.UIDoJobDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.refreshDoJobInfo();

        this.doJob_use_diamond_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.diamondCallback,this);
        this.doJob_use_money_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.moneyCallback,this);

        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_END,this.onClose,this);
    }

    public setDoJobDatas(guiLayer:egret.gui.UIStage, knight_info:Knight_Position_Info, card_info:JobCardInfo) {
        this.guiLayer = guiLayer;
        this.knight_info = knight_info;
        this.card_info = card_info;
    }

    public refreshDoJobInfo() {
        this.label_money_fee.text = "" + this.card_info.card_use_money;
        this.label_diamond_fee.text = "" + this.card_info.card_use_diamond;

        this.doJob_before_body.source = Utils.getKnightBigImgName(this.knight_info.type, this.knight_info.is_player);
        this.doJob_before_body_mask.source = Utils.getSelfKnightBigImgMaskName(this.knight_info.type, this.knight_info.is_player);
        this.doJob_later_body.source = Utils.getKnightBigImgName(this.card_info.card_type, this.knight_info.is_player);
        this.doJob_later_body_mask.source = Utils.getSelfKnightBigImgMaskName(this.card_info.card_type, this.knight_info.is_player);
    }

    private diamondCallback(){
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIJobHomeView) {
            current_layer.doChangeJobCallback(false);
        }

        this.onClose();
    }
    private moneyCallback(){
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIJobHomeView) {
            current_layer.doChangeJobCallback(true);
        }

        this.onClose();
    }

    private onClose() {
        this.doJob_use_diamond_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.diamondCallback,this);
        this.doJob_use_money_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.moneyCallback,this);
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_END,this.onClose,this);

        this.guiLayer.removeElement(this);
    }
}

