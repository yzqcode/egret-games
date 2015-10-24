var UIGuildListItem = (function (_super) {
    __extends(UIGuildListItem, _super);
    function UIGuildListItem() {
        _super.call(this);
        this.is_selected = false;
        this.skinName = "skins.UIGuildListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIGuildListItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.y = this.height * this.index;
        this.select_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectGuild, this);
        this.refreshInfo();
    };
    __egretProto__.setIndex = function (view, index) {
        this.guild_list_view = view;
        this.index = index;
    };
    __egretProto__.resetGuildInfo = function (guild_info) {
        this.guild_info = guild_info;
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
    __egretProto__.onSelectGuild = function (evt) {
        if (this.is_selected) {
            return;
        }
        this.guild_list_view.selectGuild(this.index);
        this.select();
    };
    __egretProto__.refreshInfo = function () {
        if (this.label_guild_name == null) {
            return;
        }
        this.label_guild_index.text = "" + this.index;
        this.label_guild_name.text = this.guild_info.guild_name;
        this.label_members.text = "" + this.guild_info.guild_members + "/" + this.guild_info.guild_members_max;
        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
        this.label_status.text = "";
        if (Logic.isPlayerInGuild()) {
            return;
        }
        if (this.guild_info.self_apply_status == -1 /* REJECT */) {
            this.label_status.text = "被拒绝";
            this.label_status.textColor = 0xFB000A;
        }
        else if (this.guild_info.self_apply_status == 0 /* HAS_APPLY */) {
            this.label_status.text = "已申请";
            this.label_status.textColor = 0xF9BC0B;
        }
        else {
            this.label_status.text = "未申请";
            this.label_status.textColor = 0x78FF14;
        }
    };
    return UIGuildListItem;
})(egret.gui.Panel);
UIGuildListItem.prototype.__class__ = "UIGuildListItem";
