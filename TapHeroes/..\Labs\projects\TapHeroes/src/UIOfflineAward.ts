class OfflineAwardDialog extends egret.gui.Panel{
    public label_multi:egret.gui.Label;
    public label_money:egret.gui.Label;
    public label_money_multi:egret.gui.Label;
    public label_diamond:egret.gui.Label;
    public btn_receive:egret.gui.UIAsset;
    public btn_diamond_receive:egret.gui.UIAsset;
    public close_area:egret.gui.UIAsset;

    public constructor() {
        super();
        this.skinName = "skins.OfflineAwardSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
        this.close_area.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClose, this );
        this.btn_receive.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onBtnReceive, this );
        this.btn_diamond_receive.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onBtnDiamondReceive, this );

        this.label_multi.text = "挂机4倍奖励"
        this.label_money.text = U.bigNumber( Logic.getOfflineMoney() )
        this.label_money_multi.text = U.bigNumber( Logic.getOfflineMoneyMulti() )
    }

    public onBtnReceive( evt ) {
        console.log( "onBtnReceive" )
        var gameView = GameView.instance()
        gameView.receiveOfflineMoney()
        this._close()
    }

    public onBtnDiamondReceive( evt ) {
        console.log( "onBtnDiamondReceive" )
        var gameView = GameView.instance()
        gameView.receiveOfflineMoney()
        this._close()
    }

    public _close() {
        GameView.instance().guiLayer.removeElement(this);
    }

    public onClose( evt ) {
        this._close()
    }
}

