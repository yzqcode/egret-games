var UIRegisterDialog = (function (_super) {
    __extends(UIRegisterDialog, _super);
    function UIRegisterDialog() {
        _super.call(this);
        this.skinName = "skins.UIRegisterDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIRegisterDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.input_id.multiline = false;
        this.input_password_1.multiline = false;
        this.input_password_2.multiline = false;
        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.register_fast_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.registerFastCallback, this);
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.onClose, this);
    };
    __egretProto__.showRegisterDialog = function (guiLayer) {
        this.guiLayer = guiLayer;
    };
    __egretProto__.okCallback = function () {
        /*var word_str:string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var first = this.input_id.text.charAt(0);
        var n = word_str.search(first);
        if (n == -1) {
            Utils.showToastInfo(this.guiLayer, "账号首个字符必须为字母！");
            return;
        }*/
        if ((this.input_id.text.length < 6) || (this.input_id.text.length > 16)) {
            Utils.showToastInfo(this.guiLayer, "账号必须在6至16个字符之间!");
            return;
        }
        var l = [" ", '\\"', "\\'", "%", "\\$", "!", ",", "#", "\\*", "\\^", "&", "\/", "\\\\", "\\{", "\\}", "\\[", "\\]", "\\(", "\\)", ":", ";"];
        for (var i = 0; i < l.length; ++i) {
            var n = this.input_id.text.search(l[i]);
            if (n != -1) {
                Utils.showToastInfo(this.guiLayer, "账号中不能有空格等特殊字符!");
                return;
            }
        }
        var name = this.input_id.text;
        var psw_1 = this.input_password_1.text;
        var psw_2 = this.input_password_2.text;
        if (psw_1 != psw_2) {
            Utils.showToastInfo(this.guiLayer, "两次密码输入不一致");
            return;
        }
        if ((psw_1.length < 6) || (psw_1.length > 16)) {
            Utils.showToastInfo(this.guiLayer, "密码必须在6至16个字符之间!");
            return;
        }
        var ret2 = U.checkName(psw_1);
        if (ret2 == 2) {
            Utils.showToastInfo(this.guiLayer, "密码中不能有空格和特殊字符");
            return;
        }
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIBaseLoadingView) {
            current_layer.sendUserRegister(name, psw_1);
        }
        if (current_layer instanceof UIHomeView) {
            current_layer.sendUserRegister(name, psw_1);
        }
    };
    __egretProto__.registerFastCallback = function () {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIBaseLoadingView) {
            current_layer.sendUserQuickRegister();
        }
    };
    __egretProto__.onClose = function () {
        this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.okCallback, this);
        this.register_fast_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.registerFastCallback, this);
        this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.onClose, this);
        if (this.guiLayer != null) {
            this.guiLayer.removeElement(this);
        }
    };
    return UIRegisterDialog;
})(egret.gui.Panel);
UIRegisterDialog.prototype.__class__ = "UIRegisterDialog";
