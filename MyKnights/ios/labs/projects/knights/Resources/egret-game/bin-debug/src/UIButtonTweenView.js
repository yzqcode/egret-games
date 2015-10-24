var UIButtonTweenView = (function (_super) {
    __extends(UIButtonTweenView, _super);
    function UIButtonTweenView() {
        _super.call(this);
        this.skinName = "skins.UIButtonTweenViewSkin"; //自己通过egretwing拼的皮肤
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = 117;
        this.height = 117;
    }
    var __egretProto__ = UIButtonTweenView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.B1.label = "公告";
        this.B2.label = "活动";
        this.B3.label = "排行";
        this.B4.label = "系统";
        this.B5.label = "充值";
        this.B1.x = 0;
        this.B1.y = -12.5;
        this.B2.x = 0;
        this.B2.y = -12.5;
        this.B3.x = 0;
        this.B3.y = -12.5;
        this.B4.x = 0;
        this.B4.y = -12.5;
        this.B5.x = 0;
        this.B5.y = -12.5;
        this.B6.x = 0;
        this.B6.y = 0;
        this.B7.x = 0;
        this.B7.y = 0;
        this.B1.visible = false;
        this.B2.visible = false;
        this.B3.visible = false;
        this.B4.visible = false;
        this.B5.visible = false;
        this.B7.visible = false;
        this.B1.alpha = 0;
        this.B2.alpha = 0;
        this.B3.alpha = 0;
        this.B4.alpha = 0;
        this.B5.alpha = 0;
        this.B1.addEventListener(egret.TouchEvent.TOUCH_END, this.noticeCallback, this);
        this.B2.addEventListener(egret.TouchEvent.TOUCH_END, this.activitiesCallback, this);
        this.B3.addEventListener(egret.TouchEvent.TOUCH_END, this.rankCallback, this);
        this.B4.addEventListener(egret.TouchEvent.TOUCH_END, this.systemCallback, this);
        this.B5.addEventListener(egret.TouchEvent.TOUCH_END, this.chargeCallback, this);
        this.B6.addEventListener(egret.TouchEvent.TOUCH_END, this.openCallback, this);
        this.B7.addEventListener(egret.TouchEvent.TOUCH_END, this.closeCallback, this);
    };
    __egretProto__.openCallback = function (evt) {
        this.B1.visible = true;
        this.B2.visible = true;
        this.B3.visible = true;
        this.B4.visible = true;
        this.B5.visible = true;
        this.B6.visible = false;
        this.B7.visible = true;
        this.B1.touchEnabled = false;
        this.B2.touchEnabled = false;
        this.B3.touchEnabled = false;
        this.B4.touchEnabled = false;
        this.B5.touchEnabled = false;
        this.B7.touchEnabled = false;
        var tw1 = egret.Tween.get(this.B1);
        tw1.to({ x: -635, alpha: 1 }, 100, egret.Ease.quartIn);
        var tw2 = egret.Tween.get(this.B2);
        tw2.to({ x: -508, alpha: 1 }, 100, egret.Ease.quartIn);
        var tw3 = egret.Tween.get(this.B3);
        tw3.to({ x: -381, alpha: 1 }, 100, egret.Ease.quartIn);
        var tw4 = egret.Tween.get(this.B4);
        tw4.to({ x: -254, alpha: 1 }, 100, egret.Ease.quartIn);
        var tw5 = egret.Tween.get(this.B5);
        tw5.to({ x: -127, alpha: 1 }, 100, egret.Ease.quartIn);
        var timer = new egret.Timer(100, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerCom, this);
        timer.start();
    };
    __egretProto__.timerCom = function () {
        this.B1.touchEnabled = true;
        this.B2.touchEnabled = true;
        this.B3.touchEnabled = true;
        this.B4.touchEnabled = true;
        this.B5.touchEnabled = true;
        this.B7.touchEnabled = true;
    };
    __egretProto__.closeCallback = function (evt) {
        this.B1.touchEnabled = false;
        this.B2.touchEnabled = false;
        this.B3.touchEnabled = false;
        this.B4.touchEnabled = false;
        this.B5.touchEnabled = false;
        this.B7.touchEnabled = false;
        var move_x = this.B6.width / 2 - this.B1.width / 2;
        var tw1 = egret.Tween.get(this.B1);
        tw1.to({ x: move_x, alpha: 0 }, 100, egret.Ease.quartOut);
        var tw2 = egret.Tween.get(this.B2);
        tw2.to({ x: move_x, alpha: 0 }, 100, egret.Ease.quartOut);
        var tw3 = egret.Tween.get(this.B3);
        tw3.to({ x: move_x, alpha: 0 }, 100, egret.Ease.quartOut);
        var tw4 = egret.Tween.get(this.B4);
        tw4.to({ x: move_x, alpha: 0 }, 100, egret.Ease.quartOut);
        var tw5 = egret.Tween.get(this.B5);
        tw5.to({ x: move_x, alpha: 0 }, 100, egret.Ease.quartOut);
        var timer = new egret.Timer(100, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
    };
    __egretProto__.timerComFunc = function () {
        this.B1.visible = false;
        this.B2.visible = false;
        this.B3.visible = false;
        this.B4.visible = false;
        this.B5.visible = false;
        this.B6.visible = true;
        this.B7.visible = false;
    };
    __egretProto__.noticeCallback = function (evt) {
        console.log("公告");
        this.closeCallback(evt);
    };
    __egretProto__.activitiesCallback = function (evt) {
        console.log("活动");
        this.closeCallback(evt);
    };
    __egretProto__.rankCallback = function (evt) {
        console.log("排行");
        this.closeCallback(evt);
    };
    __egretProto__.systemCallback = function (evt) {
        console.log("系统");
        this.closeCallback(evt);
    };
    __egretProto__.chargeCallback = function (evt) {
        console.log("充值");
        this.closeCallback(evt);
    };
    return UIButtonTweenView;
})(egret.gui.Panel);
UIButtonTweenView.prototype.__class__ = "UIButtonTweenView";
