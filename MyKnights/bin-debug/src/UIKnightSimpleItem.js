var UIKnightSimpleItem = (function (_super) {
    __extends(UIKnightSimpleItem, _super);
    function UIKnightSimpleItem() {
        _super.call(this);
        this.is_selected = false;
        this.skinName = "skins.UIKnightSimpleItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIKnightSimpleItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.y = this.height * this.index;
        this.select_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight, this);
        this.refreshInfo();
    };
    __egretProto__.setIndex = function (view, index) {
        this.team_set_view = view;
        this.index = index;
    };
    __egretProto__.resetKnightData = function (knight_info) {
        this.knight_info = knight_info;
    };
    __egretProto__.deselect = function () {
        this.is_selected = false;
        if (this.select_mask == null) {
            return;
        }
        this.select_mask.visible = true;
        this.select_frame.visible = false;
    };
    __egretProto__.select = function () {
        this.is_selected = true;
        if (this.select_mask == null) {
            return;
        }
        this.select_mask.visible = false;
        this.select_frame.visible = true;
    };
    __egretProto__.onSelectKnight = function (evt) {
        this.team_set_view.showKnightDetail(2 /* KNIGHT_ON_DESK */, this.index);
    };
    __egretProto__.refreshInfo = function () {
        if (this.knight_info == null) {
            return;
        }
        var frame_img_name = Utils.getKnightFrameImgName(this.knight_info.attack_factor / 10000, this.knight_info.defense_factor / 10000, this.knight_info.hp_factor / 10000);
        this.icon_name_frame_bg.source = frame_img_name;
        this.label_name.text = this.knight_info.name;
        this.label_level.text = "" + this.knight_info.level;
        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    };
    return UIKnightSimpleItem;
})(egret.gui.Panel);
UIKnightSimpleItem.prototype.__class__ = "UIKnightSimpleItem";
