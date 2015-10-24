//removeEventListener
var UIServerListDialog = (function (_super) {
    __extends(UIServerListDialog, _super);
    function UIServerListDialog() {
        _super.call(this);
        this.base_loading_view = null;
        this.skinName = "skins.UIServerListDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIServerListDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.refreshList();
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.closeCallback, this);
    };
    __egretProto__.showDialog = function (parent) {
        this.base_loading_view = parent;
    };
    __egretProto__.refreshList = function () {
        var group = this.server_scroller.viewport;
        for (var i = 0; i < Net.server_list.length; i++) {
            var current_server = Net.server_list[i];
            var item = new UIServerListItem();
            item.setData(i, current_server, this);
            group.addElement(item);
        }
    };
    __egretProto__.selectServer = function (index) {
        if (index < 0 || index >= Net.server_list.length) {
            return;
        }
        Net.current_server_index = index;
        this.base_loading_view.refreshCurrentServerInfo();
        this.closeCallback();
    };
    __egretProto__.closeCallback = function () {
        if (this.base_loading_view != null) {
            this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.closeCallback, this);
            this.base_loading_view.guiLayer.removeElement(this);
        }
    };
    return UIServerListDialog;
})(egret.gui.Panel);
UIServerListDialog.prototype.__class__ = "UIServerListDialog";
