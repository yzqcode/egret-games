class UIButtonTweenView extends egret.gui.Panel{
    public constructor(){
        super();
        this.skinName = "skins.UIButtonTweenViewSkin";//自己通过egretwing拼的皮肤
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );

        this.width = 117;
        this.height = 117;
    }

    public guiLayer:egret.gui.UIStage;
    public main_director:Main;

    public B1:egret.gui.Button;
    public B2:egret.gui.Button;
    public B3:egret.gui.Button;
    public B4:egret.gui.Button;
    public B5:egret.gui.Button;
    public B6:egret.gui.UIAsset;
    public B7:egret.gui.UIAsset;
    public back_png:egret.gui.UIAsset;

    private onCreationComplete():void{
        this.removeEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
        this.B1.x = 0;
        this.B1.y = 15;
        this.B2.x = 0;
        this.B2.y = 15;
        this.B3.x = 0;
        this.B3.y = 15;
        this.B4.x = 0;
        this.B4.y = 15;
        this.B5.x = 0;
        this.B5.y = 15;
        this.B6.x = 0;
        this.B6.y = 0;
        this.B7.x = 0;
        this.B7.y = 0;
        this.back_png.x = -386;
        this.B1.visible = false;
        this.B2.visible = false;
        this.B3.visible = false;
        this.B4.visible = false;
        this.B5.visible = false;
        this.B7.visible = false;
        this.back_png.visible = false;

        this.B1.alpha = 0;
        this.B2.alpha = 0;
        this.B3.alpha = 0;
        this.B4.alpha = 0;
        this.B5.alpha = 0;

        this.B1.addEventListener(egret.TouchEvent.TOUCH_END,this.noticeCallback,this);
        this.B2.addEventListener(egret.TouchEvent.TOUCH_END,this.activitiesCallback,this);
        this.B3.addEventListener(egret.TouchEvent.TOUCH_END,this.rankCallback,this);
        this.B4.addEventListener(egret.TouchEvent.TOUCH_END,this.systemCallback,this);
        this.B5.addEventListener(egret.TouchEvent.TOUCH_END,this.chargeCallback,this);
        this.B6.addEventListener(egret.TouchEvent.TOUCH_END,this.openCallback,this);
        this.B7.addEventListener(egret.TouchEvent.TOUCH_END,this.closeCallback,this);


    }
    private openCallback(evt:egret.TouchEvent):void{

        this.B1.visible = true;
        this.B2.visible = true;
        this.B3.visible = true;
        this.B4.visible = true;
        this.B5.visible = true;
        this.B6.visible = false;
        this.B7.visible = true;
        this.back_png.visible = true;

        this.B1.touchEnabled = false;
        this.B2.touchEnabled = false;
        this.B3.touchEnabled = false;
        this.B4.touchEnabled = false;
        this.B5.touchEnabled = false;
        this.B7.touchEnabled = false;
        
        var tw1 = egret.Tween.get(this.B1);
        tw1.to({x:-370,alpha:1},100,egret.Ease.quartIn);
        var tw2 = egret.Tween.get(this.B2);
        tw2.to({x:-290,alpha:1},100,egret.Ease.quartIn);
        var tw3 = egret.Tween.get(this.B3);
        tw3.to({x:-210,alpha:1},100,egret.Ease.quartIn);
        var tw4 = egret.Tween.get(this.B4);
        tw4.to({x:-130,alpha:1},100,egret.Ease.quartIn);
        var tw5 = egret.Tween.get(this.B5);
        tw5.to({x:-50,alpha:1},100,egret.Ease.quartIn);

        var timer:egret.Timer = new egret.Timer(100,1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerCom,this);
        timer.start();             

    }
    private timerCom():void{
        this.B1.touchEnabled = true;
        this.B2.touchEnabled = true;
        this.B3.touchEnabled = true;
        this.B4.touchEnabled = true;
        this.B5.touchEnabled = true;
        this.B7.touchEnabled = true;
    }

    private closeCallback(evt:egret.TouchEvent):void{

        this.B1.touchEnabled = false;
        this.B2.touchEnabled = false;
        this.B3.touchEnabled = false;
        this.B4.touchEnabled = false;
        this.B5.touchEnabled = false;
        this.B7.touchEnabled = false;
        var move_x:number = this.B6.width/2 - this.B1.width/2

        var tw1 = egret.Tween.get(this.B1);
        tw1.to({x:move_x,alpha:0},100,egret.Ease.quartOut);
        var tw2 = egret.Tween.get(this.B2);
        tw2.to({x:move_x,alpha:0},100,egret.Ease.quartOut);
        var tw3 = egret.Tween.get(this.B3);
        tw3.to({x:move_x,alpha:0},100,egret.Ease.quartOut);
        var tw4 = egret.Tween.get(this.B4);
        tw4.to({x:move_x,alpha:0},100,egret.Ease.quartOut);
        var tw5 = egret.Tween.get(this.B5);
        tw5.to({x:move_x,alpha:0},100,egret.Ease.quartOut);

        var timer:egret.Timer = new egret.Timer(100,1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        timer.start();

    }
    private timerComFunc():void{

        this.B1.visible = false;
        this.B2.visible = false;
        this.B3.visible = false;
        this.B4.visible = false;
        this.B5.visible = false;
        this.B6.visible = true;
        this.B7.visible = false;
        this.back_png.visible = false;
    }
    private noticeCallback(evt:egret.TouchEvent):void{
        console.log("公告");
        this.closeCallback(evt);
    }
    private activitiesCallback(evt:egret.TouchEvent):void{
        console.log("活动");
        this.closeCallback(evt);
    }
    private rankCallback(evt:egret.TouchEvent):void{
        console.log("排行");
        this.closeCallback(evt);
    }
    private systemCallback(evt:egret.TouchEvent):void{
        console.log("系统");
        this.closeCallback(evt);
    }
    private chargeCallback(evt:egret.TouchEvent):void{
        console.log("充值");
        this.closeCallback(evt);
    }
}