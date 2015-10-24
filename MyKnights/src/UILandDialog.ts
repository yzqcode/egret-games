//removeEventListener
class UILandDialog extends egret.gui.Panel{
    public ok_btn:egret.gui.Button;
    public register_btn:egret.gui.Button;
    public input_id:egret.gui.EditableText;
    public input_password:egret.gui.EditableText;
    public close_btn:egret.gui.Button;

    public guiLayer:egret.gui.UIStage;

    public constructor(){
        super();
        this.skinName = "skins.UILandDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.input_id.multiline = false;
        this.input_password.multiline = false;

        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);
        this.register_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.registerCallback,this);
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.onClose,this);

    }

    public showLandDialog(guiLayer:egret.gui.UIStage) {
        this.guiLayer = guiLayer;
    }
   
    public okCallback(){
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

        var name:string = this.input_id.text;
        var psw:string = this.input_password.text;

        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIBaseLoadingView) {
            current_layer.sendLogin(name, psw);
        }
    }

    public registerCallback() {
        var register_dlg = new UIRegisterDialog();
        register_dlg.showRegisterDialog(this.guiLayer);
        this.guiLayer.addElement(register_dlg);

        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIBaseLoadingView) {
            current_layer.register_dlg = register_dlg;
        }

        this.onClose();
    }

    public onClose() {
        if(this.guiLayer != null){
            this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);
            this.register_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.registerCallback,this);
            this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.onClose,this);

            this.guiLayer.removeElement(this);
        }
    }
}

