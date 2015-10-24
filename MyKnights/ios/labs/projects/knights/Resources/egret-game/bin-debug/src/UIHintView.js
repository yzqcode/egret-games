//removeEventListener
var CHOOSE_TYPE;
(function (CHOOSE_TYPE) {
    CHOOSE_TYPE[CHOOSE_TYPE["OK"] = 1] = "OK";
    CHOOSE_TYPE[CHOOSE_TYPE["OK_CANCEL"] = 2] = "OK_CANCEL";
})(CHOOSE_TYPE || (CHOOSE_TYPE = {}));
var UIHintView = (function (_super) {
    __extends(UIHintView, _super);
    function UIHintView() {
        _super.call(this);
        this.ui_parent = null;
        this.callback_obj = null;
        this.ok_callback_fun = null;
        this.cancel_callback_fun = null;
        this.ok_cancel = null;
        this.my_title = null;
        this.my_content = null;
        this.skinName = "skins.UIHintViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIHintView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.cancel_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.cancelCallback, this);
        this.oneOK_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.refreshInfo();
    };
    __egretProto__.setHint = function (parent, title, content, ok_cancel, callback_obj, ok_callback, cancel_callback) {
        if (title === void 0) { title = ""; }
        if (content === void 0) { content = ""; }
        if (ok_cancel === void 0) { ok_cancel = 1 /* OK */; }
        if (callback_obj === void 0) { callback_obj = null; }
        if (ok_callback === void 0) { ok_callback = null; }
        if (cancel_callback === void 0) { cancel_callback = null; }
        this.ui_parent = parent;
        this.callback_obj = callback_obj;
        this.ok_callback_fun = ok_callback;
        this.cancel_callback_fun = cancel_callback;
        this.my_title = title;
        this.my_content = content;
        this.ok_cancel = ok_cancel;
    };
    __egretProto__.refreshInfo = function () {
        this.title_lable.text = this.my_title;
        this.content_lable.text = this.my_content;
        if (this.ok_cancel == 1 /* OK */) {
            this.ok_btn.visible = false;
            this.cancel_btn.visible = false;
            this.oneOK_btn.visible = true;
        }
        if (this.ok_cancel == 2 /* OK_CANCEL */) {
            this.ok_btn.visible = true;
            this.cancel_btn.visible = true;
            this.oneOK_btn.visible = false;
        }
    };
    __egretProto__.okCallback = function () {
        this.removeListener();
        this.ui_parent.removeElement(this);
        if (this.ok_callback_fun != null) {
            this.ok_callback_fun.call(this.callback_obj);
        }
    };
    __egretProto__.cancelCallback = function () {
        this.removeListener();
        this.ui_parent.removeElement(this);
        if (this.cancel_callback_fun != null) {
            this.cancel_callback_fun.call(this.callback_obj);
        }
    };
    __egretProto__.removeListener = function () {
        this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.cancel_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.cancelCallback, this);
        this.oneOK_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
    };
    return UIHintView;
})(egret.gui.Panel);
UIHintView.prototype.__class__ = "UIHintView";
