var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        /**
         * 配置文件加载完成,开始预加载preload资源组。
         */
        this.group_counter = 0;
        this.res_item_counter = 0;
        this.total_res_items = 0;
        this.all_group_names = ["preload1", "preload2", "preload3", "preload4", "partical", "skill", "cha", "sound"];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    Main.prototype.onAddToStage = function (event) {
        //Net.login()
        G.width = this.stage.stageWidth;
        G.height = this.stage.stageHeight;
        G.offset_y = (1136 - this.stage.stageHeight) / 2;
        G.base_y_offset = Utils.offset(G.base_y);
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        //egret.gui.Theme.load("resource/theme.thm");
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig(resource_root + "resource.json", resource_root);
    };
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onBaseLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onBaseProgress, this);
        RES.loadGroup("loading");
    };
    Main.prototype.onBaseProgress = function (event) {
    };
    Main.prototype.onBaseLoadComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onBaseLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onBaseProgress, this);
        this.stage.removeChild(this.loadingView);
        this.guiLayer = new egret.gui.UIStage();
        this.stage.addChild(this.guiLayer);
        G.ui_stage = this.guiLayer;
        this.baseLoadingView = new BaseLoadingUI();
        this.baseLoadingView.width = G.width;
        this.baseLoadingView.height = G.height;
        this.guiLayer.addElement(this.baseLoadingView);
        G.base_loading_ui = this.baseLoadingView;
        G.top_layer = new egret.DisplayObjectContainer();
        this.stage.addChild(G.top_layer);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        var next_bg_name = "beijing_01";
        if (account_type == 0 || !Net.loadDataLocal()) {
            G.default_monster_db = "gw001";
        }
        else {
            //var l = Logic.getNextStep(Logic.step, Logic.sub_step)
            var l = Logic.getMonsterDataByStep(Logic.step, Logic.sub_step);
            var next_line = Utils.getLine("npc_list", l[0]);
            G.default_monster_db = next_line[npc_list_pic];
            if (!G.default_monster_db) {
                G.default_monster_db = "gw001";
            }
            next_bg_name = U.getBackgroundName(Logic.step);
            // 只是预测，在这里不真正读取存档
            Logic.clear();
        }
        Utils.loadDragonBone(G.default_monster_db);
        this.total_res_items += RES.getGroupByName("db_" + G.default_monster_db).length;
        var next_bg_group_name = "bg_" + next_bg_name;
        G.default_bg_name = next_bg_name;
        console.log("next_bg_group_name", next_bg_group_name);
        RES.createGroup(next_bg_group_name, [next_bg_name, next_bg_name + "a"]);
        RES.loadGroup(next_bg_group_name);
        this.total_res_items += RES.getGroupByName(next_bg_group_name).length;
        for (var i = 0; i < this.all_group_names.length; ++i) {
            RES.loadGroup(this.all_group_names[i]);
            this.total_res_items += RES.getGroupByName(this.all_group_names[i]).length;
        }
        // TODO
        RES.createGroup("difficulty_bg", ["beijing_10", "beijing_10a"]);
        RES.loadGroup("difficulty_bg");
    };
    /**
     * preload资源组加载完成
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        this.group_counter += 1;
        console.log("---onResourceLoadComplete " + event.groupName + " " + this.group_counter + "/" + this.all_group_names.length);
        if (this.group_counter == this.all_group_names.length + 3) {
            egret.ExternalInterface.addCallback("javaevent", G.onJavaEvent);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createScene();
            this.baseLoadingView.setProgress(this.total_res_items, this.total_res_items);
            if (sdk_login) {
                egret.ExternalInterface.call("jsevent", "login");
            }
            else {
                this.baseLoadingView.onLoadingEnd();
            }
        }
    };
    /**
     * preload资源组加载进度
     */
    Main.prototype.onResourceProgress = function (event) {
        this.res_item_counter += 1;
        this.baseLoadingView.setProgress(this.res_item_counter, this.total_res_items);
    };
    Main.prototype.createScene = function () {
        this.gameView = GameView.newInstance();
        this.gameView.first_init = true;
        this.gameView.main_director = this;
        this.stage.addChildAt(this.gameView, 0);
        //egret.Profiler.getInstance().run();
    };
    Main.prototype.reCreateScene = function () {
        this.stage.removeChild(this.guiLayer);
        this.guiLayer = new egret.gui.UIStage();
        this.stage.addChild(this.guiLayer);
        G.ui_stage = this.guiLayer;
        this.stage.removeChild(this.gameView);
        this.gameView = GameView.newInstance();
        this.gameView.first_init = false;
        this.gameView.main_director = this;
        this.stage.removeChild(G.top_layer);
        G.top_layer = new egret.DisplayObjectContainer();
        this.stage.addChild(G.top_layer);
        Logic.refreshAll();
        Logic.initStep();
        this.gameView.init();
        this.stage.addChildAt(this.gameView, 0);
    };
    return Main;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
