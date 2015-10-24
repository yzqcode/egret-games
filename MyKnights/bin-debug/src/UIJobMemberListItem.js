var UIJobMemberListItem = (function (_super) {
    __extends(UIJobMemberListItem, _super);
    function UIJobMemberListItem() {
        _super.call(this);
        this.is_selected = false;
        this.skinName = "skins.UIJobMemberListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIJobMemberListItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.list();
        this.select_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectBtn, this);
    };
    __egretProto__.setData = function (index, data, parent) {
        this.my_index = index;
        this.item_data = data;
        this.ui_parent = parent;
    };
    __egretProto__.list = function () {
        this.y = this.my_index * 65;
        this.member_name.text = this.item_data.name;
        this.member_job_type.text = "" + Utils.getKnightTypeName(this.item_data.type);
        this.member_level.text = "" + this.item_data.level;
        if (this.item_data.isLeader) {
            this.member_post.text = "队长";
        }
        else {
            this.member_post.text = "队员";
        }
        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    };
    __egretProto__.refreshList = function (index, data) {
        this.my_index = index;
        this.item_data = data;
        this.list();
    };
    __egretProto__.deselect = function () {
        this.is_selected = false;
        if (this.select_btn == null) {
            return;
        }
        this.select_btn.visible = true;
        this.select_frame.visible = false;
    };
    __egretProto__.select = function () {
        this.is_selected = true;
        if (this.select_btn == null) {
            return;
        }
        this.select_btn.visible = false;
        this.select_frame.visible = true;
    };
    __egretProto__.onSelectBtn = function () {
        if (this.is_selected) {
            return;
        }
        this.ui_parent.selectTeamMember(this.my_index);
        this.select();
    };
    return UIJobMemberListItem;
})(egret.gui.Panel);
UIJobMemberListItem.prototype.__class__ = "UIJobMemberListItem";
