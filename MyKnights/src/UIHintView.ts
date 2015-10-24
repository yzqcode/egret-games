//removeEventListener
enum CHOOSE_TYPE
{
    OK = 1,
    OK_CANCEL,
}

class UIHintView extends egret.gui.Panel{
    public ui_parent = null;

    public callback_obj = null;
    public ok_callback_fun = null;
    public cancel_callback_fun = null;
    
    public ok_cancel = null;
    public my_title:string = null;
    public my_content:string = null;

    public title_lable:egret.gui.Label;
    public content_lable:egret.gui.Label;
    public ok_btn:egret.gui.Button;
    public cancel_btn:egret.gui.Button;
    public oneOK_btn:egret.gui.Button;

    public constructor(){
        super();
        this.skinName = "skins.UIHintViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);
        this.cancel_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.cancelCallback,this);
        this.oneOK_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);

        this.refreshInfo();
    }

    public setHint(parent, title = "", content = "", ok_cancel = CHOOSE_TYPE.OK, callback_obj = null,  ok_callback = null, cancel_callback = null) {
        this.ui_parent = parent;

        this.callback_obj = callback_obj;
        this.ok_callback_fun = ok_callback;
        this.cancel_callback_fun = cancel_callback;

        this.my_title = title;
        this.my_content = content;

        this.ok_cancel = ok_cancel;
    }
    private refreshInfo(){
        this.title_lable.text = this.my_title;
        this.content_lable.text = this.my_content;

        if(this.ok_cancel == CHOOSE_TYPE.OK){
            this.ok_btn.visible = false;
            this.cancel_btn.visible = false;
            this.oneOK_btn.visible = true;
        }
        if(this.ok_cancel == CHOOSE_TYPE.OK_CANCEL){
            this.ok_btn.visible = true;
            this.cancel_btn.visible = true;
            this.oneOK_btn.visible = false;
        }
    }

    private okCallback(){
        this.removeListener();
        this.ui_parent.removeElement(this);

        if(this.ok_callback_fun != null){
            this.ok_callback_fun.call(this.callback_obj);
        }
    }
    private cancelCallback(){
        this.removeListener();
        this.ui_parent.removeElement(this);
        
        if(this.cancel_callback_fun != null){
            this.cancel_callback_fun.call(this.callback_obj);
        }
    }

    private removeListener() {
        this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);
        this.cancel_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.cancelCallback,this);
        this.oneOK_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);
    }
}

