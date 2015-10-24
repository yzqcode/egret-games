//removeEventListener
enum FEE_TYPE
{
    MONEY = 1,
    DIAMOND,
}

class UIPurchaseConfirmView extends egret.gui.Panel{
    public title_lable:egret.gui.Label;
    public content_lable:egret.gui.Label;
    public icon_money:egret.gui.UIAsset;
    public label_fee_num:egret.gui.Label;
    public ok_btn:egret.gui.Button;
    public cancel_btn:egret.gui.Button;
    

    public ui_parent = null;

    public callback_obj = null;
    public ok_callback_fun = null;
    public cancel_callback_fun = null;
    
    public my_title:string = null;
    public my_content:string = null;
    public fee_type:number = FEE_TYPE.MONEY;
    public fee_number:number = 0;

    public constructor(){
        super();
        this.skinName = "skins.UIPurchaseConfirmViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);
        this.cancel_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.cancelCallback,this);

        this.refreshInfo();
    }

    public setPurchaseInfo(parent, fee_number, title = "", content = "", callback_obj=null,  ok_callback=null, cancel_callback=null, fee_type=FEE_TYPE.MONEY) {
        this.ui_parent = parent;

        this.callback_obj = callback_obj;
        this.ok_callback_fun = ok_callback;
        this.cancel_callback_fun = cancel_callback;

        this.my_title = title;
        this.my_content = content;

        this.fee_type = fee_type;
        this.fee_number = fee_number;
    }
    private refreshInfo() {
        this.title_lable.text = this.my_title;
        this.content_lable.text = this.my_content;

        this.label_fee_num.text = "" + this.fee_number;

        if(this.fee_type == FEE_TYPE.MONEY){
            this.icon_money.source = "gold_icon_png";
        }
        else if(this.fee_type == FEE_TYPE.DIAMOND){
            this.icon_money.source = "diamond_icon_png";
        }
    }

    public okCallback(){
        this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);
        this.cancel_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.cancelCallback,this);

        this.ui_parent.removeElement(this);
        if(this.ok_callback_fun != null){
            this.ok_callback_fun.call(this.callback_obj);
        }
    }
    private cancelCallback(){
        this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.okCallback,this);
        this.cancel_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.cancelCallback,this);

        this.ui_parent.removeElement(this);
        if(this.cancel_callback_fun != null){
            this.cancel_callback_fun.call(this.callback_obj);
        }
    }
}

