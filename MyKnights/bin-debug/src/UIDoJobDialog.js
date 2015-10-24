//removeEventListener
var UIDoJobDialog = (function (_super) {
    __extends(UIDoJobDialog, _super);
    function UIDoJobDialog() {
        _super.call(this);
        this.guiLayer = null;
        this.knight_info = null;
        this.card_info = null;
        this.skinName = "skins.UIDoJobDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIDoJobDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.refreshDoJobInfo();
        this.doJob_use_diamond_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.diamondCallback, this);
        this.doJob_use_money_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.moneyCallback, this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_END, this.onClose, this);
    };
    __egretProto__.setDoJobDatas = function (guiLayer, knight_info, card_info) {
        this.guiLayer = guiLayer;
        this.knight_info = knight_info;
        this.card_info = card_info;
    };
    __egretProto__.refreshDoJobInfo = function () {
        this.label_money_fee.text = "" + this.card_info.card_use_money;
        this.label_diamond_fee.text = "" + this.card_info.card_use_diamond;
        this.doJob_before_body.source = Utils.getKnightBigImgName(this.knight_info.type, this.knight_info.is_player);
        this.doJob_before_body_mask.source = Utils.getSelfKnightBigImgMaskName(this.knight_info.type, this.knight_info.is_player);
        this.doJob_later_body.source = Utils.getKnightBigImgName(this.card_info.card_type, this.knight_info.is_player);
        this.doJob_later_body_mask.source = Utils.getSelfKnightBigImgMaskName(this.card_info.card_type, this.knight_info.is_player);
    };
    __egretProto__.diamondCallback = function () {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIJobHomeView) {
            current_layer.doChangeJobCallback(false);
        }
        this.onClose();
    };
    __egretProto__.moneyCallback = function () {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIJobHomeView) {
            current_layer.doChangeJobCallback(true);
        }
        this.onClose();
    };
    __egretProto__.onClose = function () {
        this.doJob_use_diamond_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.diamondCallback, this);
        this.doJob_use_money_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.moneyCallback, this);
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClose, this);
        this.guiLayer.removeElement(this);
    };
    return UIDoJobDialog;
})(egret.gui.Panel);
UIDoJobDialog.prototype.__class__ = "UIDoJobDialog";
