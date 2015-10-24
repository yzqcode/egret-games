//removeEventListener
class UISelectJobDialog extends egret.gui.Panel {
    public btn_select_0:egret.gui.Button;
    public btn_select_1:egret.gui.Button;
    public btn_select_2:egret.gui.Button;
    public close_btn:egret.gui.Button;

    public ui_parent;
    public callBack;
   
    public constructor(){
        super();
        this.skinName = "skins.UISelectJobDialogSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    public showOnMainLayer(parent, callBack):void {
        this.ui_parent = parent;
        this.callBack = callBack;
    }

    private onCreationComplete():void {
        this.removeEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
        
        this.width = G.win_width;
        this.height = G.win_height;

        this.btn_select_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.btn_select_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.btn_select_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);
        this.close_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    }

    private onSelectKnigth1() {
        if(this.ui_parent != null ){
            this.removeListener();
            this.ui_parent.guiLayer.removeElement(this);
            if(this.callBack != null){
                this.callBack.call(this.ui_parent, 1);
            }
        }
    }
    private onSelectKnigth2() {
        if(this.ui_parent != null ){
            this.removeListener();
            this.ui_parent.guiLayer.removeElement(this);
            if(this.callBack != null){
                this.callBack.call(this.ui_parent, 2);
            }
        }
    }
    private onSelectKnigth3() {
        if(this.ui_parent != null ){
            this.removeListener();
            this.ui_parent.guiLayer.removeElement(this);
            if(this.callBack != null){
                this.callBack.call(this.ui_parent, 3);
            }
        }
    }
    private close() {
        if(this.ui_parent != null){
            this.removeListener();
            this.ui_parent.guiLayer.removeElement(this);
        }
    }

    private removeListener() {
        this.btn_select_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth1, this);
        this.btn_select_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth2, this);
        this.btn_select_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnigth3, this);
        this.close_btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    }
}

