//removeEventListener
class UIWaitView extends egret.gui.Panel{
    public ui_parent = null;
    public timeout_callback = null;

    private wait_icon:egret.gui.Label;

    public time_out:number = 20000;
    public time:number = 0;
    public anim_time:number = 500;
    public current_rotation:number = 0;
    public has_closed:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIWaitViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.wait_icon.rotation = 0;
        this.wait_icon.anchorX = 0.5;
        this.wait_icon.anchorY = 0.5;

        this.time = -this.anim_time;

        this.rotateWaitIcon();
    }

    private rotateWaitIcon() {
        if (this.has_closed) {
            return;
        }

        this.current_rotation += 180;
        this.time += this.anim_time;

        if (this.time >= this.time_out) {
            Utils.showToastInfo(this.ui_parent.guiLayer, "连接服务器失败，请稍候重试!");

            if (this.ui_parent != null && this.timeout_callback != null) {
                this.timeout_callback.call(this.ui_parent);
            }

            this.close();
            return;
        }

        var tw = egret.Tween.get(this.wait_icon);
        tw.to({"rotation":this.current_rotation}, this.anim_time).call(this.rotateWaitIcon, this);
    }

    public close() {
        this.has_closed = true;

        if ( this.ui_parent != null ) {
            this.ui_parent.guiLayer.removeElement(this);
            this.ui_parent.ui_wait = null;

            this.ui_parent = null;
        }
    }

}

