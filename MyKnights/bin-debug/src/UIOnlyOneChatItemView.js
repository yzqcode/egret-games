var UIOnlyOneChatItemView = (function (_super) {
    __extends(UIOnlyOneChatItemView, _super);
    function UIOnlyOneChatItemView() {
        _super.call(this);
        this.skinName = "skins.UIOnlyOneChatItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIOnlyOneChatItemView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.refreshList();
    };
    __egretProto__.setData = function (index, data) {
        this.item_pos = index;
        this.item_data = data;
    };
    __egretProto__.refreshList = function () {
        this.y = (this.item_pos - 1) * 56;
        this.label_say.text = this.item_data;
    };
    return UIOnlyOneChatItemView;
})(egret.gui.Panel);
UIOnlyOneChatItemView.prototype.__class__ = "UIOnlyOneChatItemView";
