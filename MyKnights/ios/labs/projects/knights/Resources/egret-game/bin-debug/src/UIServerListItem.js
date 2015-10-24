var UIServerListItem = (function (_super) {
    __extends(UIServerListItem, _super);
    function UIServerListItem() {
        _super.call(this);
        this.skinName = "skins.UIServerListItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIServerListItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.list();
        this.choose_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChoose, this);
    };
    __egretProto__.setData = function (index, data, server_list_dlg) {
        this.my_index = index;
        this.item_data = data;
        this.server_list_dlg = server_list_dlg;
    };
    __egretProto__.list = function () {
        this.y = this.my_index * 67;
        this.server_name.text = this.item_data.name + " : " + this.item_data.status + " : " + this.item_data.account_count;
    };
    __egretProto__.onChoose = function () {
        if (this.server_list_dlg != null) {
            this.server_list_dlg.selectServer(this.my_index);
        }
    };
    return UIServerListItem;
})(egret.gui.Panel);
UIServerListItem.prototype.__class__ = "UIServerListItem";
