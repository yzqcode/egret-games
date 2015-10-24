//removeEventListener
var UISelectJobDialog = (function (_super) {
    __extends(UISelectJobDialog, _super);
    function UISelectJobDialog() {
        _super.call(this);
        this.skinName = "skins.UISelectJobDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UISelectJobDialog.prototype;
    __egretProto__.showOnMainLayer = function (parent, callBack) {
        this.ui_parent = parent;
        this.callBack = callBack;
    };
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.btn_select_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.btn_select_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.btn_select_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    };
    __egretProto__.onSelectKnigth1 = function () {
        if (this.ui_parent != null) {
            this.removeListener();
            this.ui_parent.guiLayer.removeElement(this);
            if (this.callBack != null) {
                this.callBack.call(this.ui_parent, 1);
            }
        }
    };
    __egretProto__.onSelectKnigth2 = function () {
        if (this.ui_parent != null) {
            this.removeListener();
            this.ui_parent.guiLayer.removeElement(this);
            if (this.callBack != null) {
                this.callBack.call(this.ui_parent, 2);
            }
        }
    };
    __egretProto__.onSelectKnigth3 = function () {
        if (this.ui_parent != null) {
            this.removeListener();
            this.ui_parent.guiLayer.removeElement(this);
            if (this.callBack != null) {
                this.callBack.call(this.ui_parent, 3);
            }
        }
    };
    __egretProto__.close = function () {
        if (this.ui_parent != null) {
            this.removeListener();
            this.ui_parent.guiLayer.removeElement(this);
        }
    };
    __egretProto__.removeListener = function () {
        this.btn_select_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.btn_select_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.btn_select_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);
        this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    };
    return UISelectJobDialog;
})(egret.gui.Panel);
UISelectJobDialog.prototype.__class__ = "UISelectJobDialog";
