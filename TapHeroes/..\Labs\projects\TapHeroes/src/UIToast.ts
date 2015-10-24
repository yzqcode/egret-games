class Toast extends egret.gui.Panel{
    public ui_parent:egret.gui.UIStage;

    public m_strToastInfo:string;

    private labelToast:egret.gui.Label;

    public constructor(){
        super();
        this.skinName = "skins.ToastSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.labelToast.text = this.m_strToastInfo;

        var close = function() {
            if ( this.ui_parent != null ) {
                this.ui_parent.removeElement(this);
            }
        }

        var posY = this.y - 50;
        var tw = egret.Tween.get(this);
        tw.wait(800).to({y:posY, alpha:0}, 400).call(close, this);
    }

}

