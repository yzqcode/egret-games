class SpeedUpDialog extends egret.gui.Panel{
    public label_diamond:egret.gui.Label;
    public label_total_money:egret.gui.Label;
    public btn_confirm:egret.gui.UIAsset;
    public close_area:egret.gui.UIAsset;

    public constructor() {
        super();
        this.skinName = "skins.SpeedUpAwardSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        this.close_area.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClose, this );
        this.btn_confirm.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onBtnConfirm, this );
    }

    public onBtnConfirm( evt ) {
        console.log( "onBtnConfirm" )
        var ret = Logic.speedUp()
        var gameView = GameView.instance()
        if ( ret == 0 ) {
            this._close()
            gameView.showToast( "获得成长奖励状态" )
            gameView.ui_main.refreshDamageInfo();
        }
        else if ( ret == 1 ) {
            this._close()
            gameView.showLowDiamondHint();
        }
    }

    public _close() {
        GameView.instance().guiLayer.removeElement(this);
    }

    public onClose( evt ) {
        this._close()
    }
}

