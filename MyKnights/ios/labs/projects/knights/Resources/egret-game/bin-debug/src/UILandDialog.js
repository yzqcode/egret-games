//removeEventListener
var UILandDialog = (function (_super) {
    __extends(UILandDialog, _super);
    function UILandDialog() {
        _super.call(this);
        this.skinName = "skins.UILandDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UILandDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.input_id.multiline = false;
        this.input_password.multiline = false;
        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.register_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.registerCallback, this);
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.onClose, this);
    };
    __egretProto__.showLandDialog = function (guiLayer) {
        this.guiLayer = guiLayer;
    };
    __egretProto__.okCallback = function () {
        /*var n = -1;
        var m = -1;
        n = this.input_id.text.indexOf("@");
        m = this.input_id.text.indexOf(".");
        if((n > m) || (n == -1) || (m == -1)){
            Utils.showToastInfo(this.guiLayer, "请输入正确的邮箱!");
            return;
        }
        if((this.input_id.text.length < 5) ||(this.input_id.text.length > 30)){
            Utils.showToastInfo(this.guiLayer, "邮箱地址长度不合法!");
            return;
        }*/
        if ((this.input_id.text.length < 6) || (this.input_id.text.length > 16)) {
            Utils.showToastInfo(this.guiLayer, "账号必须在6至16个字符之间!");
            return;
        }
        if ((this.input_password.text.length < 6) || (this.input_password.text.length > 16)) {
            Utils.showToastInfo(this.guiLayer, "密码必须在6至16个字符之间!");
            return;
        }
        var name = this.input_id.text;
        var psw = this.input_password.text;
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIBaseLoadingView) {
            current_layer.sendLogin(name, psw);
        }
    };
    __egretProto__.registerCallback = function () {
        var register_dlg = new UIRegisterDialog();
        register_dlg.showRegisterDialog(this.guiLayer);
        this.guiLayer.addElement(register_dlg);
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIBaseLoadingView) {
            current_layer.register_dlg = register_dlg;
        }
        this.onClose();
    };
    __egretProto__.onClose = function () {
        if (this.guiLayer != null) {
            this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
            this.register_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.registerCallback, this);
            this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClose, this);
            this.guiLayer.removeElement(this);
        }
    };
    return UILandDialog;
})(egret.gui.Panel);
UILandDialog.prototype.__class__ = "UILandDialog";
