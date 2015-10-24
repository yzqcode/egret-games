var UIKnightPosItem = (function (_super) {
    __extends(UIKnightPosItem, _super);
    function UIKnightPosItem() {
        _super.call(this);
        this.is_loading_finish = false;
        this.knight_position_index = 0;
        this.FIRST_KNIGHT_START_POS_X = 0;
        this.FIRST_KNIGHT_START_POS_Y = 0;
        this.KNIGHT_POS_SPAN = 156;
        this.skinName = "skins.UIKnightPosItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIKnightPosItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.is_loading_finish = true;
        this.knight_head_icon.visible = false;
        this.refreshInfo();
    };
    __egretProto__.refreshInfo = function () {
        if (this.is_loading_finish == false) {
            return;
        }
        this.x = this.FIRST_KNIGHT_START_POS_X + this.KNIGHT_POS_SPAN * this.knight_position_index;
        this.y = this.FIRST_KNIGHT_START_POS_Y;
        var knight_info = Logic.getKnightOnPosition(this.knight_position_index);
        if (knight_info != null) {
            this.knight_head_icon.visible = true;
            this.left_color_icon.visible = true;
            this.right_color_icon.visible = true;
            this.label_level.visible = true;
            this.knight_head_icon.source = Utils.getKnightHeadNorName(knight_info.type, knight_info.is_player);
            var point_img_name = Utils.getKnightPointImgName(knight_info.attack_factor / 10000, knight_info.defense_factor / 10000, knight_info.hp_factor / 10000);
            this.left_color_icon.source = point_img_name;
            this.right_color_icon.source = point_img_name;
            this.label_level.text = "Lv." + knight_info.level;
        }
        else {
            this.knight_head_icon.visible = false;
            this.left_color_icon.visible = false;
            this.right_color_icon.visible = false;
            this.label_level.visible = false;
        }
    };
    return UIKnightPosItem;
})(egret.gui.Panel);
UIKnightPosItem.prototype.__class__ = "UIKnightPosItem";
