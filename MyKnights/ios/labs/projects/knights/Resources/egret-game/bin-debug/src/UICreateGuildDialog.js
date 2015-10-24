//removeEventListener
var UICreateGuildDialog = (function (_super) {
    __extends(UICreateGuildDialog, _super);
    function UICreateGuildDialog() {
        _super.call(this);
        this.skinName = "skins.UICreateGuildDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UICreateGuildDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
        this.cancel_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelClick, this);
    };
    __egretProto__.showOnMainLayer = function (parent, call_back) {
        this.ui_parent = parent;
        this.ui_call_back = call_back;
    };
    __egretProto__.onOkClick = function () {
        if (this.ui_parent != null && this.ui_call_back != null) {
            this.ui_parent.create_guild_name = this.guild_name_edit.text;
            this.ui_call_back.call(this.ui_parent);
        }
    };
    __egretProto__.onCancelClick = function () {
        if (this.ui_parent != null) {
            this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
            this.cancel_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelClick, this);
            this.ui_parent.guiLayer.removeElement(this);
        }
    };
    return UICreateGuildDialog;
})(egret.gui.Panel);
UICreateGuildDialog.prototype.__class__ = "UICreateGuildDialog";
