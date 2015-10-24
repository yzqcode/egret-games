//removeEventListener
var UIGuildDonateItem = (function (_super) {
    __extends(UIGuildDonateItem, _super);
    function UIGuildDonateItem() {
        _super.call(this);
        this.skinName = "skins.UIGuildDonateItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIGuildDonateItem.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.y = this.height * this.index;
        this.refreshInfo();
    };
    __egretProto__.setIndex = function (view, index) {
        this.guild_home_view = view;
        this.index = index;
    };
    __egretProto__.resetMemberInfo = function (donate_info) {
        this.donate_info = donate_info;
    };
    __egretProto__.refreshInfo = function () {
        if (this.label_name == null) {
            return;
        }
        this.label_name.text = this.donate_info.name;
        this.label_donate_value.text = "" + this.donate_info.donate_value;
    };
    return UIGuildDonateItem;
})(egret.gui.Panel);
UIGuildDonateItem.prototype.__class__ = "UIGuildDonateItem";
