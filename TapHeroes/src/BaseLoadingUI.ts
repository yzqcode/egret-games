class BaseLoadingUI extends egret.gui.Panel {

    public input:egret.gui.EditableText;
    public btn_login:egret.gui.Button;
    public label_progress:egret.gui.Label;
    public dialog:egret.gui.UIAsset;
    private max_name_length = 16

    public constructor(){
        super();
        this.skinName = "skins.Loading";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    private onCreationComplete():void {
        this.input.multiline = false
        if ( account_type == 0 ) {
            this.btn_login.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onInputAccount, this )
        }
        else if (  account_type = 1 ) {
            this.btn_login.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onInputName, this )
        }
    }

    private onInputAccount() {
        if ( G.data_ready ) {
            return
        }
        console.log( "onInputAccount", this.input.text )
        if ( this.input.text.length < 1 || this.input.text.length > this.max_name_length ) {
            this.showBaseToast("测试帐号必须在1至" +this.max_name_length + "个字符之间")
            return
        }

        var sound:egret.Sound = RES.getRes("money");
        sound.play();

        console.log( "onLogin", this.btn_login.skin.currentState )
        G.account_name = this.input.text
        Net.login()

        this.btn_login.enabled = false

        var resetBtn = function() {
            //this.btn_login.currentState = ""
            console.log( "resetBtn" )
            this.enabled = true
        }
        var timer = new egret.Timer( 2000, 1 )
        timer.addEventListener(egret.TimerEvent.TIMER, resetBtn, this.btn_login);
        timer.start()

        if ( Net.loadDataLocal() ) {
            //Net.getOfflineMoney()
        }
        else {
            console.log( "load data local false" )
            Logic.clear()
            Logic.initPlayer()
            Logic.initHero()
            Logic.player.name = G.account_name
        }
        if ( GameView.instance() != null ) {
            Logic.refreshAll()
            Logic.initStep()
            GameView.instance().init()
        }
    }

    public showBaseToast( s ) {
        var toast = new Toast();
        toast.m_strToastInfo = s;
        toast.ui_parent = G.ui_stage;

        toast.x = G.width / 2 - 92.5;
        toast.y = G.height - 250;

        G.ui_stage.addElement(toast);
    }

    public onInputName() {
        if ( G.data_ready ) {
            return
        }

        if ( this.input.text.length < 1 || this.input.text.length > this.max_name_length ) {
            this.showBaseToast("名字必须在1至" +this.max_name_length + "个字符之间")
            return
        }

        var sound:egret.Sound = RES.getRes("money");
        sound.play();

        console.log( "onLogin", this.btn_login.skin.currentState )

        this.btn_login.enabled = false

        var resetBtn = function() {
            //this.btn_login.currentState = ""
            console.log( "resetBtn" )
            this.enabled = true
        }
        var timer = new egret.Timer( 2000, 1 )
        timer.addEventListener(egret.TimerEvent.TIMER, resetBtn, this.btn_login);
        timer.start()

        Logic.clear()
        Logic.initPlayer()
        Logic.initHero()
        Logic.player.name = this.input.text
        if ( GameView.instance() != null ) {
            Logic.refreshAll()
            Logic.initStep()
            GameView.instance().init()
        }
        Net.login()
    }

    public showDialog() {
        this.dialog.visible = true
        this.input.visible = true
        this.btn_login.visible = true
    }

    public onLoadingEnd() {
        if ( account_type == 0 ) {
            this.showDialog()
        }
        else if ( account_type == 1 ) {
            if ( Net.loadDataLocal() ) {
                Net.login()
                //Net.getOfflineMoney()
                if ( GameView.instance() != null ) {
                    Logic.refreshAll()
                    Logic.initStep()
                    GameView.instance().init()
                }
            }
            else {
                this.showDialog()
            }
        }
    }

    public setProgress(current, total):void {
        if ( this.label_progress == null ) {
            return
        }
        //this.label_progress.text = "资源加载中..." + current + "/" + total;
        var percent = Math.floor( current / total * 100 )
        this.label_progress.text = "资源加载中..." + percent + "%"
    }
}

