//removeEventListener
var FEE_TYPE;
(function (FEE_TYPE) {
    FEE_TYPE[FEE_TYPE["MONEY"] = 1] = "MONEY";
    FEE_TYPE[FEE_TYPE["DIAMOND"] = 2] = "DIAMOND";
})(FEE_TYPE || (FEE_TYPE = {}));
var UIPurchaseConfirmView = (function (_super) {
    __extends(UIPurchaseConfirmView, _super);
    function UIPurchaseConfirmView() {
        _super.call(this);
        this.ui_parent = null;
        this.callback_obj = null;
        this.ok_callback_fun = null;
        this.cancel_callback_fun = null;
        this.my_title = null;
        this.my_content = null;
        this.fee_type = 1 /* MONEY */;
        this.fee_number = 0;
        this.skinName = "skins.UIPurchaseConfirmViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIPurchaseConfirmView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.cancel_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.cancelCallback, this);
        this.refreshInfo();
    };
    __egretProto__.setPurchaseInfo = function (parent, fee_number, title, content, callback_obj, ok_callback, cancel_callback, fee_type) {
        if (title === void 0) { title = ""; }
        if (content === void 0) { content = ""; }
        if (callback_obj === void 0) { callback_obj = null; }
        if (ok_callback === void 0) { ok_callback = null; }
        if (cancel_callback === void 0) { cancel_callback = null; }
        if (fee_type === void 0) { fee_type = 1 /* MONEY */; }
        this.ui_parent = parent;
        this.callback_obj = callback_obj;
        this.ok_callback_fun = ok_callback;
        this.cancel_callback_fun = cancel_callback;
        this.my_title = title;
        this.my_content = content;
        this.fee_type = fee_type;
        this.fee_number = fee_number;
    };
    __egretProto__.refreshInfo = function () {
        this.title_lable.text = this.my_title;
        this.content_lable.text = this.my_content;
        this.label_fee_num.text = "" + this.fee_number;
        if (this.fee_type == 1 /* MONEY */) {
            this.icon_money.source = "gold_icon_png";
        }
        else if (this.fee_type == 2 /* DIAMOND */) {
            this.icon_money.source = "diamond_icon_png";
        }
    };
    __egretProto__.okCallback = function () {
        this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.cancel_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.cancelCallback, this);
        this.ui_parent.removeElement(this);
        if (this.ok_callback_fun != null) {
            this.ok_callback_fun.call(this.callback_obj);
        }
    };
    __egretProto__.cancelCallback = function () {
        this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.cancel_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.cancelCallback, this);
        this.ui_parent.removeElement(this);
        if (this.cancel_callback_fun != null) {
            this.cancel_callback_fun.call(this.callback_obj);
        }
    };
    return UIPurchaseConfirmView;
})(egret.gui.Panel);
UIPurchaseConfirmView.prototype.__class__ = "UIPurchaseConfirmView";
