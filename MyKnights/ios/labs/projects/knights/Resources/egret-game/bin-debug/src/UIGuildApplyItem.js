var UIGuildApplyItem = (function (_super) {
    __extends(UIGuildApplyItem, _super);
    function UIGuildApplyItem() {
        _super.call(this);
        this.is_selected = false;
        this.skinName = "skins.UIGuildApplyItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIGuildApplyItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.y = this.height * this.index;
        this.select_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectGuildApply, this);
        this.refreshInfo();
    };
    __egretProto__.setIndex = function (view, index) {
        this.guild_home_view = view;
        this.index = index;
    };
    __egretProto__.resetApplyInfo = function (apply_info) {
        this.apply_info = apply_info;
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
    __egretProto__.onSelectGuildApply = function (evt) {
        if (this.is_selected) {
            return;
        }
        this.guild_home_view.selectGuildApply(this.index);
        this.select();
    };
    __egretProto__.refreshInfo = function () {
        if (this.label_name == null) {
            return;
        }
        this.label_name.text = this.apply_info.name;
        this.label_level.text = "" + this.apply_info.level;
        this.label_type.text = Utils.getKnightTypeName(this.apply_info.type);
        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    };
    return UIGuildApplyItem;
})(egret.gui.Panel);
UIGuildApplyItem.prototype.__class__ = "UIGuildApplyItem";
