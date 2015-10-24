class UIMainView extends egret.gui.Panel {
    public btn_new:egret.gui.Button;
    public btn_start:egret.gui.Button;
    public btn_back:egret.gui.Button;
    public btn_pause:egret.gui.Button;
    public btn_diffcult:egret.gui.Button;
    public btn_close_voice:egret.gui.Button;
    public btn_open_voice:egret.gui.Button;

    public win_img:egret.gui.Button;

    public game_layer:GameLayer;
    public main_director:Main;

    public view_load_finish:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIMainViewSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    public show(game_layer:GameLayer, main_director:Main):void {
        this.game_layer = game_layer;
        this.main_director = main_director;

        this.width = main_director.stage.stageWidth;
        this.height = main_director.stage.stageHeight;

        this.game_layer.guiLayer.addElement(this);
    }

    private onCreationComplete():void {
        this.view_load_finish = true;

        this.btn_new.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNewGame, this);
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
        this.btn_pause.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPauseGame, this);
        this.btn_diffcult.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSetDiffulty, this);
        this.btn_close_voice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseMusic, this);
        this.btn_open_voice.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOpenMusic, this);

        this.win_img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickWinImg, this);
    }

    private onNewGame(evt) {
        if (this.win_img.visible) {
            return;
        }

        this.game_layer.newGame();
    }
    private onStartGame(evt) {
        if (this.win_img.visible) {
            return;
        }

        this.game_layer.startGame();
    }
    private onBack(evt) {
        if (this.win_img.visible) {
            return;
        }

        this.game_layer.backGame();
    }
    private onPauseGame(evt) {
    }
    private onSetDiffulty(evt) {
    }
    private onCloseMusic(evt) {
        if (this.win_img.visible) {
            return;
        }

        this.game_layer.closeMusic();

        this.btn_close_voice.visible = false;
        this.btn_open_voice.visible = true;
    }
    private onOpenMusic(evt) {
        if (this.win_img.visible) {
            return;
        }
        
        this.game_layer.openMusic();

        this.btn_close_voice.visible = true;
        this.btn_open_voice.visible = false;
    }

    private onClickWinImg(evt) {
        this.win_img.visible = false;
    }

    public showWinImg() {
        this.win_img.visible = true;
    }
    public showLoseImg() {
        this.win_img.visible = true;
    }
}

