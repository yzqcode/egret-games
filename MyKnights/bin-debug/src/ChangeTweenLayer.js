var ChangeTweenLayer = (function (_super) {
    __extends(ChangeTweenLayer, _super);
    function ChangeTweenLayer() {
        _super.call(this);
    }
    var __egretProto__ = ChangeTweenLayer.prototype;
    __egretProto__.showOnMainLayer = function (main_director) {
        this.main_director = main_director;
        var mask_sprite = new egret.Sprite();
        mask_sprite.graphics.beginFill(0x000000, 0);
        mask_sprite.graphics.drawRect(0, 0, G.win_width, G.win_height);
        mask_sprite.graphics.endFill();
        mask_sprite.width = G.win_width;
        mask_sprite.height = G.win_height;
        mask_sprite.touchEnabled = true;
        this.addChild(mask_sprite);
        this.main_left = new egret.Bitmap();
        this.main_left.texture = RES.getRes("gate_left_jpg");
        this.main_left.x = -this.main_left.width;
        this.main_left.y = this.main_director.stage.stageHeight / 2 - this.main_left.height / 2;
        this.addChild(this.main_left);
        var left_x1 = this.main_director.stage.stageWidth / 2 - this.main_left.width;
        var tw1 = egret.Tween.get(this.main_left);
        tw1.to({ x: left_x1 }, 1000, egret.Ease.bounceOut);
        this.main_right = new egret.Bitmap();
        this.main_right.texture = RES.getRes("gate_right_jpg");
        this.main_right.x = this.main_director.stage.stageWidth;
        this.main_right.y = this.main_director.stage.stageHeight / 2 - this.main_right.height / 2;
        this.addChild(this.main_right);
        this.main_director.stage.addChild(this);
        var right_x1 = this.main_director.stage.stageWidth / 2;
        var tw2 = egret.Tween.get(this.main_right);
        tw2.to({ x: right_x1 }, 1000, egret.Ease.bounceOut);
        var timer = new egret.Timer(1300, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.closeCallback, this);
        timer.start();
    };
    __egretProto__.removeFromMainLayer = function () {
        var left_x2 = -this.main_left.width;
        var tw3 = egret.Tween.get(this.main_left);
        tw3.to({ x: left_x2 }, 500);
        var right_x2 = this.main_director.stage.stageWidth;
        var tw4 = egret.Tween.get(this.main_right);
        tw4.to({ x: right_x2 }, 500);
        var timer = new egret.Timer(500, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.OpenCallback, this);
        timer.start();
    };
    __egretProto__.OpenCallback = function () {
        this.main_director.stage.removeChild(this);
    };
    __egretProto__.closeCallback = function () {
        this.main_director.removeCurrentLayer();
        var next_layer = null;
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
    };
    ChangeTweenLayer.BATTLE_VIEW = "battle_view";
    ChangeTweenLayer.BASE_LODING_VIEW = "base_loading";
    ChangeTweenLayer.HOME_VIEW = "home";
    ChangeTweenLayer.QUEST_VIEW = "quest";
    ChangeTweenLayer.SELECT_KNIGHT_VIEW = "select_knight";
    ChangeTweenLayer.CREATE_KNIGHT_VIEW = "create_knight";
    ChangeTweenLayer.HIRE_VIEW = "hire";
    ChangeTweenLayer.KNIGHT_TEAM_SET_VIEW = "team_set";
    ChangeTweenLayer.ARENA_VIEW = "arena_view";
    ChangeTweenLayer.GUILD_VIEW = "guild_view";
    ChangeTweenLayer.JOB_VIEW = "job_view";
    ChangeTweenLayer.SHOP_VIEW = "shop_view";
    return ChangeTweenLayer;
})(egret.DisplayObjectContainer);
ChangeTweenLayer.prototype.__class__ = "ChangeTweenLayer";
