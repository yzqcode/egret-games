//removeEventListener
var UIChatDialogListItemView = (function (_super) {
    __extends(UIChatDialogListItemView, _super);
    function UIChatDialogListItemView() {
        _super.call(this);
        this.skinName = "skins.UIChatDialogListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIChatDialogListItemView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.refreshList();
    };
    __egretProto__.setData = function (pos, data, parent) {
        this.myPos = pos;
        this.item_data = data;
        this.ui_parent = parent;
        var item_pos;
        if (this.item_data.message_content.length > 50) {
            item_pos = 120.5;
        }
        else {
            item_pos = 97;
        }
        return item_pos;
    };
    __egretProto__.refreshList = function () {
        this.y = this.myPos;
        this.chat_player_head.source = Utils.getKnightHeadNorName(this.item_data.knight_type);
        this.chat_player_level.text = this.item_data.knight_level;
        this.chat_player_name.text = this.item_data.knight_name;
        this.chat_player_say.text = this.item_data.message_content;
        if (this.item_data.knight_name == Logic.player_name) {
            this.chat_player_head.x += 565;
            this.chat_player_name.x += 316;
            this.chat_player_level.x += 565;
            this.name_frame.x += 316;
            this.icon_head_frame.x += 565;
            this.level_frame.x += 565;
        }
        if (this.item_data.message_content.length > 50) {
            this.chat_player_say.height += 23.5;
            this.say_back.height += 23.5;
            this.height += 23.5;
        }
    };
    return UIChatDialogListItemView;
})(egret.gui.Panel);
UIChatDialogListItemView.prototype.__class__ = "UIChatDialogListItemView";
