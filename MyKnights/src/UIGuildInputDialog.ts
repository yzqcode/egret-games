//removeEventListener
class UIGuildInputDialog extends egret.gui.Panel {
    public ok_btn:egret.gui.Button;
    public close_btn:egret.gui.Button;
    public input_edit:egret.gui.EditableText;

    public ui_parent;
    public ui_call_back;

    public constructor(){
        super();
        this.skinName = "skins.UIGuildInputDialogSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    private onCreationComplete():void {
        this.removeEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );

        this.width = G.win_width;
        this.height = G.win_height;
        
        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
    }

    public showInputLayer(parent, call_back):void {
        this.ui_parent = parent;
        this.ui_call_back = call_back;
    }

    public onOkClick() {
        if(this.ui_parent != null && this.ui_call_back != null){
            this.ui_parent.last_set_notice = this.input_edit.text;
            if(this.input_edit.text.length > 140){
                Utils.showToastInfo(this.ui_parent.guiLayer, "不能超过140个字符！");
                return;
            }

            this.ui_call_back.call(this.ui_parent);
        }
    }

    public onCloseClick() {
        if(this.ui_parent != null){
            this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
            this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);

            this.ui_parent.guiLayer.removeElement(this);
        }
    }
}