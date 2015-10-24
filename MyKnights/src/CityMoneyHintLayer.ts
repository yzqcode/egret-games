class CityMoneyHintLayer extends egret.DisplayObjectContainer {
    public city_layer:CityLayer;

    public money:number;
    public end_time:number = 0;

    private tick_text:egret.TextField;
    private tick_timer:egret.Timer;

    public constructor() {
        super();
    }

    public addCityMoneyHintLayer(city_layer:CityLayer, money:number, end_time:number) {
        this.city_layer = city_layer;
        this.money = money;
        this.end_time = end_time;

        this.width = 180;
        this.height = 90;
        this.anchorX = 0.5;
        this.anchorY = 1.0;
        this.x = 0;
        this.y = 0;
        this.city_layer.addChild(this);

        var hint_bg = new egret.Bitmap();
        hint_bg.texture = RES.getRes("chat_content_bg_png");
        hint_bg.scale9Grid = new egret.Rectangle(15,15,18,17);
        hint_bg.width = 180;
        hint_bg.height = 90;
        hint_bg.x = 0;
        hint_bg.y = 0;
        this.addChild(hint_bg);

        var money_img = new egret.Bitmap();
        money_img.texture = RES.getRes("gold_icon_png");
        money_img.x = 20;
        money_img.y = 10;
        this.addChild(money_img);

        var money_text:egret.TextField = new egret.TextField();
        money_text.size = 20;
        money_text.width = 100;
        money_text.height = 35;
        money_text.text = "" + money;
        money_text.fontFamily = "Arial";
        money_text.textAlign = egret.HorizontalAlign.CENTER;
        money_text.verticalAlign = egret.VerticalAlign.MIDDLE;
        money_text.textColor = 0xF7EDBC;
        money_text.x = 70;
        money_text.y = 10;
        this.addChild(money_text);

        var money_bar_bg_img = new egret.Bitmap();
        money_bar_bg_img.texture = RES.getRes("collect_bar_bg_png");
        money_bar_bg_img.scale9Grid = new egret.Rectangle(7,6,26,1);
        money_bar_bg_img.width = 65;
        money_bar_bg_img.height = 13;
        money_bar_bg_img.x = 15;
        money_bar_bg_img.y = 55;
        this.addChild(money_bar_bg_img);

        var money_bar_img = new egret.Bitmap();
        money_bar_img.texture = RES.getRes("collect_bar_png");
        money_bar_img.scale9Grid = new egret.Rectangle(5,5,23,1);
        money_bar_img.width = 63;
        money_bar_img.height = 11;
        money_bar_img.x = 16;
        money_bar_img.y = 56;
        this.addChild(money_bar_img);

        var current_time = Utils.time();
        var current_mask_width = (1 - (this.end_time - current_time) / 7200)*63;
        money_bar_img.mask = new egret.Rectangle(0, 0, current_mask_width, 11);
        var tw = egret.Tween.get(money_bar_img.mask);
        var time = (this.end_time - current_time) * 1000;
        tw.to({width:63}, time);

        var left_seconds = this.end_time - current_time;

        this.tick_text = new egret.TextField();
        this.tick_text.size = 20;
        this.tick_text.width = 80;
        this.tick_text.height = 35;
        this.tick_text.text = Utils.getTimeStr(left_seconds);
        this.tick_text.fontFamily = "Arial";
        this.tick_text.textAlign = egret.HorizontalAlign.CENTER;
        this.tick_text.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.tick_text.textColor = 0xF7EDBC;
        this.tick_text.x = 85;
        this.tick_text.y = 42;
        this.addChild(this.tick_text);

        var tw = egret.Tween.get(this);
        tw.wait(2000).to({alpha:0}, 200).call(this.onClose, this);

        this.tick_timer = new egret.Timer(1000, 5);
        this.tick_timer.addEventListener(egret.TimerEvent.TIMER, this.refreshTick, this);
        this.tick_timer.start();
    }

    private refreshTick() {
        var current_time = Utils.time();
        var left_seconds = this.end_time - current_time;
        this.tick_text.text = Utils.getTimeStr(left_seconds);
    }

    private onClose() {
        if (this.tick_timer != null) {
            this.tick_timer.stop();
            this.tick_timer = null;
        }

        if (this.city_layer != null) {
            this.city_layer.removeChild(this);
        }
    }
}

