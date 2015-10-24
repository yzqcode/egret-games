var UIJobTeamListItem = (function (_super) {
    __extends(UIJobTeamListItem, _super);
    function UIJobTeamListItem() {
        _super.call(this);
        this.skinName = "skins.UIJobTeamListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIJobTeamListItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.list();
        this.join_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnJoin, this);
    };
    __egretProto__.setData = function (index, data, parent) {
        this.my_index = index;
        this.item_data = data;
        this.ui_parent = parent;
    };
    __egretProto__.list = function () {
        this.y = this.my_index * 65;
        this.captain_name.text = this.item_data.name;
        this.captain_job_type.text = "" + Utils.getKnightTypeName(this.item_data.type);
        this.captain_level.text = "" + this.item_data.level;
        this.team_number.text = "等待加入 " + this.item_data.members_num + "/5";
        this.team_number.textColor = 0xF9BC0B;
        if (this.item_data.members_num == 5) {
            this.team_number.text = "满员";
            this.team_number.textColor = 0xFB000A;
        }
    };
    __egretProto__.refreshList = function (index, data) {
        this.my_index = index;
        this.item_data = data;
        this.list();
    };
    __egretProto__.onBtnJoin = function () {
        this.ui_parent.joinJobTeam(this.item_data.team_id);
    };
    return UIJobTeamListItem;
})(egret.gui.Panel);
UIJobTeamListItem.prototype.__class__ = "UIJobTeamListItem";
