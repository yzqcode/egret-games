class PlotLayer extends egret.DisplayObjectContainer{
    public ui_parent = null;
    public ui_topLayer = null;
    public parent_callback = null;
    public plot_id = 0;
    public line = null;
    private back_ground = null;
    private npc = null;
    private fade_out = null;

    public constructor() {
        super();
    }

    public startPlot(plot_id:number, topLayer:any, parent:any = null, callback:any = null) {
        this.plot_id = plot_id;
        this.line = Utils.getLine("plot_list", this.plot_id);
        if (this.line == null) {
            return;
        }

        //遮罩层
        var mask_sprite:egret.Sprite = new egret.Sprite();
        mask_sprite.graphics.beginFill(0x000000, 0);
        mask_sprite.graphics.drawRect(0, 0, G.win_width, G.win_height);
        mask_sprite.graphics.endFill();
        mask_sprite.width = G.win_width;
        mask_sprite.height = G.win_height;
        mask_sprite.touchEnabled = true;
        this.addChild( mask_sprite );

        this.ui_parent = parent;
        this.ui_topLayer = topLayer;
        this.parent_callback = callback;

        //添加背景
        this.back_ground = new egret.Bitmap();
        var bg_name = this.line[plot_list_bg_name];
        if(bg_name){
            this.back_ground.texture = RES.getRes(bg_name);
            this.back_ground.visible = true;
        }
        else{
            this.back_ground.texture = RES.getRes("battle_bg_2_jpg");
            this.back_ground.visible = false;
        }
        this.back_ground.x = G.win_width/2 - this.back_ground.width/2;
        this.back_ground.y = G.win_height/2 - this.back_ground.height/2;
        this.addChild(this.back_ground);

        //屏幕晃动
        var shock = this.line[plot_list_shock];
        if(shock){
            if(bg_name){
                 var tw_b = egret.Tween.get(this.back_ground);
                 tw_b.to({x:this.back_ground.x-11, y:this.back_ground.y-8}, 30 ).to( {x:this.back_ground.x+11, y:this.back_ground.y+8}, 30 ).to( {x:this.back_ground.x+11, y:this.back_ground.y-8}, 30 ).to( {x:this.back_ground.x-11, y:this.back_ground.y+8}, 30 ).to( {x:this.back_ground.x-11, y:this.back_ground.y-8}, 30 ).to( {x:this.back_ground.x+11, y:this.back_ground.y+8}, 30 ).to( {x:this.back_ground.x+11, y:this.back_ground.y-8}, 30 ).to( {x:this.back_ground.x-11, y:this.back_ground.y+8}, 30 ).to( {x:this.back_ground.x, y:this.back_ground.y}, 12)
            }
            else{
                if(this.ui_parent != null){
                    var tw_p = egret.Tween.get(this.ui_parent);
                    tw_p.to({x:this.ui_parent.x-11, y:this.ui_parent.y-8}, 30 ).to( {x:this.ui_parent.x+11, y:this.ui_parent.y+8}, 30 ).to( {x:this.ui_parent.x+11, y:this.ui_parent.y-8}, 30 ).to( {x:this.ui_parent.x-11, y:this.ui_parent.y+8}, 30 ).to( {x:this.ui_parent.x-11, y:this.ui_parent.y-8}, 30 ).to( {x:this.ui_parent.x+11, y:this.ui_parent.y+8}, 30 ).to( {x:this.ui_parent.x+11, y:this.ui_parent.y-8}, 30 ).to( {x:this.ui_parent.x-11, y:this.ui_parent.y+8}, 30 ).to( {x:this.ui_parent.x, y:this.ui_parent.y}, 12)
                }
            }
        }

        //添加npc
        this.npc = new egret.Bitmap();
        var npc_name = this.line[plot_list_npc_name];
        var npc_position = this.line[plot_list_npc_pos];
        if(npc_name){
            var knight_info = Logic.getPlayerKnight();
            var self_type = 1;
            
            if(knight_info != null) {
                self_type = knight_info.type;
	        }
            else {
                var current_layer = G.main_director.current_layer;
                if (current_layer instanceof UICreateKnightView) {
                    self_type = current_layer.select_knight_type;
                }
            }

            var player_head = Utils.getKnightHeadNorName(self_type, true);
            this.npc.texture = RES.getRes(npc_name.replace(/%%/g, player_head));
        }
        else{
            this.npc.texture = RES.getRes("");
        }

        if(npc_position == 1){
            this.npc.x = 30;
        }
        if(npc_position == 2){
            this.npc.x = G.win_width/2 - this.npc.width/2;
        }
        if(npc_position == 3){
            this.npc.scaleX = -1;
            this.npc.x = G.win_width - 30;
        }
        this.npc.y = G.win_height - 130 - this.npc.height;
        this.addChild(this.npc);

        this.npc.alpha = 0;
        var fade_in = this.line[plot_list_fade_in];
        this.fade_out = this.line[plot_list_fade_out];
        if(fade_in){
            var tw_in = egret.Tween.get(this.npc);
            tw_in.to({alpha:1},1000);

            var timer_in:egret.Timer = new egret.Timer(1000,1);
            timer_in.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerIn,this);
            timer_in.start();
        }
        else{
            this.npc.alpha = 1;
            this.timerIn();
        }

        this.ui_topLayer.addChild(this);
    }
    private timerIn():void{
        //添加对话
        var talk = this.line[plot_list_text];
        var talk_layer = new TalkLayer();

        talk_layer.talk_text = talk.replace(/@@/g, Logic.player_name)//.fontcolor("Red"));

		//talk_layer.talk_label.textFlow = <Array<egret.ITextElement>>[
        //{text: Logic.player_name, style: {"textColor": 0xff0000}}
		//];

        talk_layer.plot_id = this.plot_id;

        talk_layer.showTalkLayer(this, this.nextPlot);
    }

    private timerOut():void{
        this.plot_id = this.line[plot_list_next_id];
        if(this.plot_id == 0){
            this.close();
        }
        else{
            this.line = Utils.getLine("plot_list", this.plot_id);

            var bg_name = this.line[plot_list_bg_name];
            if(bg_name){
                this.back_ground.texture = RES.getRes(bg_name);
                this.back_ground.visible = true;
            }else{
                this.back_ground.texture = RES.getRes("battle_bg_2_jpg");
                this.back_ground.visible = false;
            }

            var shock = this.line[plot_list_shock];
            if(shock){
                if(bg_name){
                     var tw_b1 = egret.Tween.get(this.back_ground);
                     tw_b1.to({x:this.back_ground.x-11, y:this.back_ground.y-8}, 30 ).to( {x:this.back_ground.x+11, y:this.back_ground.y+8}, 30 ).to( {x:this.back_ground.x+11, y:this.back_ground.y-8}, 30 ).to( {x:this.back_ground.x-11, y:this.back_ground.y+8}, 30 ).to( {x:this.back_ground.x-11, y:this.back_ground.y-8}, 30 ).to( {x:this.back_ground.x+11, y:this.back_ground.y+8}, 30 ).to( {x:this.back_ground.x+11, y:this.back_ground.y-8}, 30 ).to( {x:this.back_ground.x-11, y:this.back_ground.y+8}, 30 ).to( {x:this.back_ground.x, y:this.back_ground.y}, 12)
                }
                else{
                    var tw_p1 = egret.Tween.get(this.ui_parent);
                    tw_p1.to({x:this.ui_parent.x-11, y:this.ui_parent.y-8}, 30 ).to( {x:this.ui_parent.x+11, y:this.ui_parent.y+8}, 30 ).to( {x:this.ui_parent.x+11, y:this.ui_parent.y-8}, 30 ).to( {x:this.ui_parent.x-11, y:this.ui_parent.y+8}, 30 ).to( {x:this.ui_parent.x-11, y:this.ui_parent.y-8}, 30 ).to( {x:this.ui_parent.x+11, y:this.ui_parent.y+8}, 30 ).to( {x:this.ui_parent.x+11, y:this.ui_parent.y-8}, 30 ).to( {x:this.ui_parent.x-11, y:this.ui_parent.y+8}, 30 ).to( {x:this.ui_parent.x, y:this.ui_parent.y}, 12)
                }
            }

            this.removeChild(this.npc);
            var npc = new egret.Bitmap();
            this.npc = npc;
            var npc_name = this.line[plot_list_npc_name];
            var npc_position = this.line[plot_list_npc_pos];
            if(npc_name){
            	var knight_info = Logic.getPlayerKnight();
	            var self_type = 1;
	            
	            if(knight_info != null) {
	                self_type = knight_info.type;
		        }
	            else {
	                var current_layer = G.main_director.current_layer;
	                if (current_layer instanceof UICreateKnightView) {
	                    self_type = current_layer.select_knight_type;
	                }
	            }

	            var player_head = Utils.getKnightHeadNorName(self_type, true);
	            this.npc.texture = RES.getRes(npc_name.replace(/%%/g, player_head));
            }
            else{
                this.npc.texture = RES.getRes("");
            }
            if(npc_position == 1){
                this.npc.x = 30;
            }
            if(npc_position == 2){
                this.npc.x = G.win_width/2 - this.npc.width/2 ;
            }
            if(npc_position == 3){
                this.npc.scaleX = -1;
                this.npc.x = G.win_width - 30;
            }
            this.npc.y = G.win_height - 130 - this.npc.height;
            this.addChild(this.npc);

            this.npc.alpha = 0;
            var fade_in = this.line[plot_list_fade_in];
            this.fade_out = this.line[plot_list_fade_out];
            if(fade_in){
                var tw_in = egret.Tween.get(this.npc);
                tw_in.to({alpha:1},1000);

                var timer_in:egret.Timer = new egret.Timer(1000,1);
                timer_in.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerIn,this);
                timer_in.start();
            }
            else{
                this.npc.alpha = 1;
                this.timerIn();
            }
        }
    }
    public nextPlot(){
        if(this.fade_out){
            var tw_out = egret.Tween.get(this.npc);
            tw_out.to({alpha:0},1000);

            var timer_out:egret.Timer = new egret.Timer(1000,1);
            timer_out.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerOut,this);
            timer_out.start();
        }
        else{
            this.npc.alpha = 0;
            this.timerOut();
        }
    }

    public close() {
        if (this.ui_topLayer != null) {
            this.ui_topLayer.removeChild(this);
        }
        if (this.ui_parent != null && this.parent_callback != null) {
            this.parent_callback.call(this.ui_parent);
        }
    }
}