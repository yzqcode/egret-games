var UIJobCardItem = (function (_super) {
    __extends(UIJobCardItem, _super);
    function UIJobCardItem() {
        _super.call(this);
        this.is_selected = false;
        this.skinName = "skins.UIJobCardItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIJobCardItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.x = this.width * this.index;
        this.pos_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectCard, this);
        this.refreshInfo();
    };
    __egretProto__.setIndex = function (job_cards_dlg, index, card_info) {
        this.job_cards_dlg = job_cards_dlg;
        this.index = index;
        this.card_info = card_info;
    };
    __egretProto__.deselect = function () {
        this.is_selected = false;
        if (this.pos_mask == null) {
            return;
        }
        this.pos_mask.visible = true;
        this.select_frame.visible = false;
    };
    __egretProto__.select = function () {
        this.is_selected = true;
        if (this.pos_mask == null) {
            return;
        }
        this.pos_mask.visible = false;
        this.select_frame.visible = true;
    };
    __egretProto__.onSelectCard = function (evt) {
        if (this.is_selected) {
            return;
        }
        this.job_cards_dlg.selectCard(this.index);
        this.select();
    };
    __egretProto__.refreshInfo = function () {
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
    };
    return UIJobCardItem;
})(egret.gui.Panel);
UIJobCardItem.prototype.__class__ = "UIJobCardItem";
