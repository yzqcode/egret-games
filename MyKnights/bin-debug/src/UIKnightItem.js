var UIKnightItem = (function (_super) {
    __extends(UIKnightItem, _super);
    function UIKnightItem() {
        _super.call(this);
        this.is_selected = false;
        this.skinName = "skins.UIKnightItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIKnightItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.x = this.width * this.index;
        this.pos_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight, this);
        this.refreshInfo();
    };
    __egretProto__.setIndex = function (self_knights_dlg, index, knight_info) {
        this.self_knights_dlg = self_knights_dlg;
        this.index = index;
        this.knight_info = knight_info;
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
    __egretProto__.onSelectKnight = function (evt) {
        if (this.is_selected) {
            return;
        }
        this.self_knights_dlg.selectKnight(this.index);
        this.select();
    };
    __egretProto__.refreshInfo = function () {
        if (this.label_name == null) {
            return;
        }
        var knight_info = this.knight_info;
        this.label_name.text = knight_info.name;
        this.label_level.text = "" + knight_info.level;
        this.icon_body_frame.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
        this.icon_body.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
        this.icon_body_mask.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);
        this.icon_name_frame_bg.source = Utils.getKnightFrameImgName(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    };
    return UIKnightItem;
})(egret.gui.Panel);
UIKnightItem.prototype.__class__ = "UIKnightItem";
