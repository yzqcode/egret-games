var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BaseLoadingUI = (function (_super) {
    __extends(BaseLoadingUI, _super);
    function BaseLoadingUI() {
        _super.call(this);
        this.max_name_length = 16;
        this.skinName = "skins.Loading";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    BaseLoadingUI.prototype.onCreationComplete = function () {
        this.input.multiline = false;
        if (account_type == 0) {
            this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onInputAccount, this);
        }
        else if (account_type = 1) {
            this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onInputName, this);
        }
    };
    BaseLoadingUI.prototype.onInputAccount = function () {
        if (G.data_ready) {
            return;
        }
        console.log("onInputAccount", this.input.text);
        if (this.input.text.length < 1 || this.input.text.length > this.max_name_length) {
            this.showBaseToast("测试帐号必须在1至" + this.max_name_length + "个字符之间");
            return;
        }
        var sound = RES.getRes("money");
        sound.play();
        console.log("onLogin", this.btn_login.skin.currentState);
        G.account_name = this.input.text;
        Net.login();
        this.btn_login.enabled = false;
        var resetBtn = function () {
            //this.btn_login.currentState = ""
            console.log("resetBtn");
            this.enabled = true;
        };
        var timer = new egret.Timer(2000, 1);
        timer.addEventListener(egret.TimerEvent.TIMER, resetBtn, this.btn_login);
        timer.start();
        if (Net.loadDataLocal()) {
        }
        else {
            console.log("load data local false");
            Logic.clear();
            Logic.initPlayer();
            Logic.initHero();
            Logic.player.name = G.account_name;
        }
        if (GameView.instance() != null) {
            Logic.refreshAll();
            Logic.initStep();
            GameView.instance().init();
        }
    };
    BaseLoadingUI.prototype.showBaseToast = function (s) {
        var toast = new Toast();
        toast.m_strToastInfo = s;
        toast.ui_parent = G.ui_stage;
        toast.x = G.width / 2 - 92.5;
        toast.y = G.height - 250;
        G.ui_stage.addElement(toast);
    };
    BaseLoadingUI.prototype.onInputName = function () {
        if (G.data_ready) {
            return;
        }
        if (this.input.text.length < 1 || this.input.text.length > this.max_name_length) {
            this.showBaseToast("名字必须在1至" + this.max_name_length + "个字符之间");
            return;
        }
        var sound = RES.getRes("money");
        sound.play();
        console.log("onLogin", this.btn_login.skin.currentState);
        this.btn_login.enabled = false;
        var resetBtn = function () {
            //this.btn_login.currentState = ""
            console.log("resetBtn");
            this.enabled = true;
        };
        var timer = new egret.Timer(2000, 1);
        timer.addEventListener(egret.TimerEvent.TIMER, resetBtn, this.btn_login);
        timer.start();
        Logic.clear();
        Logic.initPlayer();
        Logic.initHero();
        Logic.player.name = this.input.text;
        if (GameView.instance() != null) {
            Logic.refreshAll();
            Logic.initStep();
            GameView.instance().init();
        }
        Net.login();
    };
    BaseLoadingUI.prototype.showDialog = function () {
        this.dialog.visible = true;
        this.input.visible = true;
        this.btn_login.visible = true;
    };
    BaseLoadingUI.prototype.onLoadingEnd = function () {
        if (account_type == 0) {
            this.showDialog();
        }
        else if (account_type == 1) {
            if (Net.loadDataLocal()) {
                Net.login();
                //Net.getOfflineMoney()
                if (GameView.instance() != null) {
                    Logic.refreshAll();
                    Logic.initStep();
                    GameView.instance().init();
                }
            }
            else {
                this.showDialog();
            }
        }
    };
    BaseLoadingUI.prototype.setProgress = function (current, total) {
        if (this.label_progress == null) {
            return;
        }
        //this.label_progress.text = "资源加载中..." + current + "/" + total;
        var percent = Math.floor(current / total * 100);
        this.label_progress.text = "资源加载中..." + percent + "%";
    };
    return BaseLoadingUI;
})(egret.gui.Panel);
BaseLoadingUI.prototype.__class__ = "BaseLoadingUI";
