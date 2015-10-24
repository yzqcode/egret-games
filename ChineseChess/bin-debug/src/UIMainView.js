var UIMainView = (function (_super) {
    __extends(UIMainView, _super);
    function UIMainView() {
        _super.call(this);
        this.view_load_finish = false;
        this.skinName = "skins.UIMainViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIMainView.prototype;
    __egretProto__.show = function (game_layer, main_director) {
        this.game_layer = game_layer;
        this.main_director = main_director;
        this.width = main_director.stage.stageWidth;
        this.height = main_director.stage.stageHeight;
        this.game_layer.guiLayer.addElement(this);
    };
    __egretProto__.onCreationComplete = function () {
        this.view_load_finish = true;
        this.btn_new.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNewGame, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
        this.btn_pause.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPauseGame, this);
        this.btn_diffcult.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetDiffulty, this);
        this.btn_close_voice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseMusic, this);
        this.btn_open_voice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOpenMusic, this);
        this.win_img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickWinImg, this);
    };
    __egretProto__.onNewGame = function (evt) {
        if (this.win_img.visible) {
            return;
        }
        this.game_layer.newGame();
    };
    __egretProto__.onStartGame = function (evt) {
        if (this.win_img.visible) {
            return;
        }
        this.game_layer.startGame();
    };
    __egretProto__.onBack = function (evt) {
        if (this.win_img.visible) {
            return;
        }
        this.game_layer.backGame();
    };
    __egretProto__.onPauseGame = function (evt) {
    };
    __egretProto__.onSetDiffulty = function (evt) {
    };
    __egretProto__.onCloseMusic = function (evt) {
        if (this.win_img.visible) {
            return;
        }
        this.game_layer.closeMusic();
        this.btn_close_voice.visible = false;
        this.btn_open_voice.visible = true;
    };
    __egretProto__.onOpenMusic = function (evt) {
        if (this.win_img.visible) {
            return;
        }
        this.game_layer.openMusic();
        this.btn_close_voice.visible = true;
        this.btn_open_voice.visible = false;
    };
    __egretProto__.onClickWinImg = function (evt) {
        this.win_img.visible = false;
    };
    __egretProto__.showWinImg = function () {
        this.win_img.visible = true;
    };
    __egretProto__.showLoseImg = function () {
        this.win_img.visible = true;
    };
    return UIMainView;
})(egret.gui.Panel);
UIMainView.prototype.__class__ = "UIMainView";
