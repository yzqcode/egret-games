//removeEventListener
var UIGuildInputDialog = (function (_super) {
    __extends(UIGuildInputDialog, _super);
    function UIGuildInputDialog() {
        _super.call(this);
        this.skinName = "skins.UIGuildInputDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIGuildInputDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
    };
    __egretProto__.showInputLayer = function (parent, call_back) {
        this.ui_parent = parent;
        this.ui_call_back = call_back;
    };
    __egretProto__.onOkClick = function () {
        if (this.ui_parent != null && this.ui_call_back != null) {
            this.ui_parent.last_set_notice = this.input_edit.text;
            if (this.input_edit.text.length > 140) {
                Utils.showToastInfo(this.ui_parent.guiLayer, "不能超过140个字符！");
                return;
            }
            this.ui_call_back.call(this.ui_parent);
        }
    };
    __egretProto__.onCloseClick = function () {
        if (this.ui_parent != null) {
            this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
            this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
            this.ui_parent.guiLayer.removeElement(this);
        }
    };
    return UIGuildInputDialog;
})(egret.gui.Panel);
UIGuildInputDialog.prototype.__class__ = "UIGuildInputDialog";
