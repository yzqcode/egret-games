var UIArenaRankViewItem = (function (_super) {
    __extends(UIArenaRankViewItem, _super);
    function UIArenaRankViewItem() {
        _super.call(this);
        this.skinName = "skins.UIArenaRankItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIArenaRankViewItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.list();
        this.btn_look.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnLook, this);
    };
    __egretProto__.setData = function (index, data, parent) {
        this.my_index = index;
        this.item_data = data;
        this.ui_parent = parent;
    };
    __egretProto__.list = function () {
        this.y = (this.my_index - 1) * 68;
        this.label_ranking.text = "" + this.my_index;
        this.label_name.text = this.item_data.player_name;
        this.label_guild.text = this.item_data.guild_name;
        this.label_score.text = "" + this.item_data.scores;
    };
    __egretProto__.onBtnLook = function () {
        if (this.ui_parent.player_datail_dlg != null) {
            return;
        }
        var player_datail_dlg = new UIPlayerDetailDialog();
        player_datail_dlg.setPlayerId(this.ui_parent, this.ui_parent.guiLayer, this.item_data.player_id);
        this.ui_parent.player_datail_dlg = player_datail_dlg;
        this.ui_parent.guiLayer.addElement(player_datail_dlg);
    };
    return UIArenaRankViewItem;
})(egret.gui.Panel);
UIArenaRankViewItem.prototype.__class__ = "UIArenaRankViewItem";
