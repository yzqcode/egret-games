var UIGuildMemberItem = (function (_super) {
    __extends(UIGuildMemberItem, _super);
    function UIGuildMemberItem() {
        _super.call(this);
        this.is_selected = false;
        this.skinName = "skins.UIGuildMemberItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIGuildMemberItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.y = this.height * this.index;
        this.select_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectGuildMember, this);
        // this.btn_kick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onKick, this);
        this.refreshInfo();
    };
    __egretProto__.setIndex = function (view, index) {
        this.guild_home_view = view;
        this.index = index;
    };
    __egretProto__.resetMemberInfo = function (member_info) {
        this.member_info = member_info;
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
    __egretProto__.onSelectGuildMember = function (evt) {
        if (this.is_selected) {
            return;
        }
        this.guild_home_view.selectGuildMember(this.index);
        this.select();
    };
    //public onKick() {
    //    this.guild_home_view.onKickGuildMember(this.member_info.player_id);
    //}
    __egretProto__.refreshInfo = function () {
        if (this.label_name == null) {
            return;
        }
        this.label_name.text = this.member_info.name;
        this.label_level.text = "" + this.member_info.level;
        this.label_type.text = Utils.getKnightTypeName(this.member_info.type);
        this.label_position.text = Utils.getPlayerGuildPositionName(this.member_info.position);
        //this.label_status.text = "status: " + this.member_info.player_status;
        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    };
    return UIGuildMemberItem;
})(egret.gui.Panel);
UIGuildMemberItem.prototype.__class__ = "UIGuildMemberItem";
