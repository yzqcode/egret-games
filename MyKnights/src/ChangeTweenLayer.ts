class ChangeTweenLayer extends egret.DisplayObjectContainer {

    private main_left:egret.Bitmap;
    private main_right:egret.Bitmap;

    public next_view_name:string;
    public main_director:Main;

    public constructor(){
        super();
    }

    public showOnMainLayer(main_director:Main):void {
        this.main_director = main_director;

        var mask_sprite:egret.Sprite = new egret.Sprite();
        mask_sprite.graphics.beginFill(0x000000, 0);
        mask_sprite.graphics.drawRect(0, 0, G.win_width, G.win_height);
        mask_sprite.graphics.endFill();
        mask_sprite.width = G.win_width;
        mask_sprite.height = G.win_height;
        mask_sprite.touchEnabled = true;
        this.addChild( mask_sprite );

        this.main_left = new egret.Bitmap();
        this.main_left.texture = RES.getRes("gate_left_jpg");
        this.main_left.x = -this.main_left.width;
        this.main_left.y =  this.main_director.stage.stageHeight/2 - this.main_left.height/2;
        this.addChild(this.main_left);

        var left_x1:number = this.main_director.stage.stageWidth/2 -this.main_left.width;
        var tw1 = egret.Tween.get(this.main_left);
        tw1.to( {x:left_x1}, 1000, egret.Ease.bounceOut);

        this.main_right = new egret.Bitmap();
        this.main_right.texture = RES.getRes("gate_right_jpg");
        this.main_right.x = this.main_director.stage.stageWidth;
        this.main_right.y = this.main_director.stage.stageHeight/2 - this.main_right.height/2;
        this.addChild(this.main_right);

        this.main_director.stage.addChild(this);

        var right_x1:number = this.main_director.stage.stageWidth/2;
        var tw2 = egret.Tween.get(this.main_right);
        tw2.to( {x:right_x1}, 1000, egret.Ease.bounceOut );

        var timer:egret.Timer = new egret.Timer(1300,1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.closeCallback,this);
        timer.start();
    }
    public removeFromMainLayer():void {
        var left_x2:number = -this.main_left.width;
        var tw3 = egret.Tween.get(this.main_left);
        tw3.to( {x:left_x2}, 500 );

        var right_x2:number = this.main_director.stage.stageWidth;
        var tw4 = egret.Tween.get(this.main_right);
        tw4.to( {x:right_x2}, 500 );

        var timer:egret.Timer = new egret.Timer(500,1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.OpenCallback,this);
        timer.start();
    }

    private OpenCallback():void{
        this.main_director.stage.removeChild(this);
    }

    public static BATTLE_VIEW:string = "battle_view";
    public static BASE_LODING_VIEW:string = "base_loading"
    public static HOME_VIEW:string = "home";
    public static QUEST_VIEW:string = "quest";
    public static SELECT_KNIGHT_VIEW:string = "select_knight";
    public static CREATE_KNIGHT_VIEW:string = "create_knight";
    public static HIRE_VIEW:string = "hire";
    public static KNIGHT_TEAM_SET_VIEW:string = "team_set";
    public static ARENA_VIEW:string = "arena_view";
    public static GUILD_VIEW:string = "guild_view";
    public static JOB_VIEW:string = "job_view";
    public static SHOP_VIEW:string = "shop_view";

    private closeCallback():void{
        this.main_director.removeCurrentLayer();

        var next_layer = null
        if (this.next_view_name == ChangeTweenLayer.BATTLE_VIEW) {
            next_layer = new BattleLayer();
        }
        else if (this.next_view_name == ChangeTweenLayer.BASE_LODING_VIEW) {
            next_layer = new UIBaseLoadingView();
        }
        else if (this.next_view_name == ChangeTweenLayer.HOME_VIEW) {
            next_layer = new UIHomeView();
        }
        else if (this.next_view_name == ChangeTweenLayer.QUEST_VIEW) {
            next_layer = new QuestLayer();
        }
        else if (this.next_view_name == ChangeTweenLayer.SELECT_KNIGHT_VIEW) {
            next_layer = new UISelectKnightView();
        }
        else if (this.next_view_name == ChangeTweenLayer.CREATE_KNIGHT_VIEW) {
            next_layer = new UICreateKnightView();
        }
        else if (this.next_view_name == ChangeTweenLayer.HIRE_VIEW) {
            next_layer = new UIHireHomeView();
        }
        else if (this.next_view_name == ChangeTweenLayer.KNIGHT_TEAM_SET_VIEW) {
            next_layer = new UIMyKnightTeamSetView();
        }
        else if (this.next_view_name == ChangeTweenLayer.ARENA_VIEW) {
            next_layer = new UIAreaHomeView();
        }
        else if (this.next_view_name == ChangeTweenLayer.GUILD_VIEW) {
            next_layer = new UIGuildHomeView();
        }
        else if (this.next_view_name == ChangeTweenLayer.JOB_VIEW) {
            next_layer = new UIJobHomeView();
        }

        if (next_layer != null) {
            next_layer.showOnMainLayer(this.main_director);

            this.main_director.current_layer = next_layer;
        }
    }
}