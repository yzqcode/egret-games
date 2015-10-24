//removeEventListener
class UICreateKnightNameDialog extends egret.gui.Panel {
    public ok_btn:egret.gui.Button;
    public cancel_btn:egret.gui.Button;
    public name_edit:egret.gui.EditableText;

    public ui_parent;
    public ui_call_back;

    public constructor(){
        super();
        this.skinName = "skins.UICreateKnightNameDialogSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    private onCreationComplete():void {
        this.removeEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );

        this.width = G.win_width;
        this.height = G.win_height;
        
        this.ok_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
        this.cancel_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelClick, this);
    }

    public showOnMainLayer(parent, call_back):void {
        this.ui_parent = parent;
        this.ui_call_back = call_back;
    }

    public onOkClick() {
        if(this.ui_parent != null && this.ui_call_back != null){
            this.ui_parent.my_name = this.name_edit.text;
            this.ui_call_back.call(this.ui_parent);
        }
    }

    public onCancelClick() {
        if(this.ui_parent != null){
            this.ok_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
            this.cancel_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelClick, this);

            this.ui_parent.guiLayer.removeElement(this);
        }
    }
}