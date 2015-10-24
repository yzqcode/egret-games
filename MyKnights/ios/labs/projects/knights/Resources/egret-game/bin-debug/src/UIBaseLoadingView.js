//removeEventListener
var UIBaseLoadingView = (function (_super) {
    __extends(UIBaseLoadingView, _super);
    function UIBaseLoadingView() {
        _super.call(this);
        this.login_dlg = null;
        this.register_dlg = null;
        this.skinName = "skins.UIBaseLoadingViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIBaseLoadingView.prototype;
    __egretProto__.showOnMainLayer = function (main_director) {
        this.width = G.win_width;
        this.height = G.win_height;
        this.main_director = main_director;
        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);
        // Add top layer
        this.top_layer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.top_layer, 1);
        this.guiLayer.addElement(this);
    };
    __egretProto__.removeFromMainLayer = function () {
        this.removeListener();
        this.main_director.stage.removeChild(this.guiLayer);
        this.main_director.stage.removeChild(this.top_layer);
    };
    __egretProto__.removeListener = function () {
        this.btn_start_game.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
        this.btn_show_server_list.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowServerList, this);
        this.btn_switch_user.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
    };
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.label_progress.visible = true;
        this.btn_start_game.visible = false;
        this.btn_show_server_list.visible = false;
        this.label_server_desc.visible = false;
        this.btn_switch_user.visible = false;
        this.btn_start_game.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this);
        this.btn_show_server_list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowServerList, this);
        this.btn_switch_user.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
    };
    __egretProto__.onLoadingLoginResEnd = function () {
        if (Utils.isExistUUID()) {
            Net.getServerList();
        }
        else {
            this.onLogin();
        }
    };
    __egretProto__.onLoadingResourcesEnd = function () {
        this.label_progress.visible = false;
        this.btn_start_game.visible = true;
        this.btn_switch_user.visible = true;
        RES.getRes("main_mp3").play(true);
    };
    __egretProto__.onLogin = function () {
        var login_dlg = new UILandDialog();
        login_dlg.showLandDialog(this.guiLayer);
        this.guiLayer.addElement(login_dlg);
        this.login_dlg = login_dlg;
    };
    __egretProto__.sendLogin = function (name, psw) {
        Net.userLogin(name, psw);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishPlayerLogin = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var str_error_hint = "登录失败，错误码:" + result;
            if (result == -3) {
                str_error_hint = "用户名或密码错误，请重新输入！";
            }
            Utils.showToastInfo(this.guiLayer, str_error_hint);
            return;
        }
        if (this.login_dlg != null) {
            this.login_dlg.onClose();
            this.login_dlg = null;
        }
        var uuid = data.uuid;
        Utils.saveUUID(uuid);
        Net.getServerList();
    };
    __egretProto__.sendUserRegister = function (name, psw) {
        Net.registerUser(name, psw);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishUserRegister = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var str_error_hint = "注册失败，错误码:" + result;
            if (result == -1) {
                str_error_hint = "该用户名已经被使用，请重新输入！";
            }
            Utils.showToastInfo(this.guiLayer, str_error_hint);
            return;
        }
        if (this.register_dlg != null) {
            this.register_dlg.onClose();
            this.register_dlg = null;
        }
        var uuid = data.uuid;
        Utils.saveUUID(uuid);
        Net.getServerList();
    };
    __egretProto__.sendUserQuickRegister = function () {
        Net.quickRegisterUser();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishUserQuickRegister = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var str_error_hint = "快速注册失败，错误码:" + result;
            Utils.showToastInfo(this.guiLayer, str_error_hint);
            return;
        }
        if (this.register_dlg != null) {
            this.register_dlg.onClose();
            this.register_dlg = null;
        }
        var uuid = data.uuid;
        Utils.saveUUID(uuid);
        Net.getServerList();
    };
    __egretProto__.finishGetServerList = function (result) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var str_error_hint = "连接服务器失败，错误码:" + result;
            Utils.showToastInfo(this.guiLayer, str_error_hint);
            return;
        }
        this.btn_show_server_list.visible = true;
        this.label_server_desc.visible = true;
        this.refreshCurrentServerInfo();
    };
    __egretProto__.refreshCurrentServerInfo = function () {
        var current_server = Net.server_list[Net.current_server_index];
        if (current_server == null) {
            this.label_server_desc.text = "";
        }
        else {
            this.label_server_desc.text = current_server.name;
        }
    };
    __egretProto__.onStartGame = function () {
        // User needs login
        if (Utils.isExistUUID() == false) {
            this.onLogin();
            return;
        }
        // Need get server list
        if (Net.server_list.length <= 0) {
            Net.getServerList();
            Utils.showWaitAnim(this);
            return;
        }
        /*
        G.win_width = this.main_director.stage.stageWidth;
        G.win_height = this.main_director.stage.stageHeight;

        if (G.win_width <= G.win_height) {
            Utils.showToastInfo(this.guiLayer, "请先将手机置于横屏状态~");
            return;
        }
        */
        G.window_resize = false;
        Net.getPlayerIdList();
        Utils.showWaitAnim(this);
    };
    __egretProto__.onInitPlayerSaveDatas = function (datas_list) {
        // "data": []
        //console.log("==== data len: " + datas_list.length);
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        for (var i = 0; i < datas_list.length; i++) {
            var data = new Player_Save_Datas();
            data.player_id = datas_list[i][0];
            data.knight_type = datas_list[i][1];
            data.knight_level = datas_list[i][2];
            data.knight_name = datas_list[i][3];
            //console.log("==== data: ", data);
            Logic.player_datas.push(data);
        }
        this.onEnterGameView();
    };
    __egretProto__.onEnterGameView = function () {
        if (Logic.player_datas.length <= 0) {
            // Enter create knight view.
            this.main_director.enterCreateKnightView();
        }
        else {
            // Enter select view.
            this.main_director.enterSelectKnightView();
        }
    };
    __egretProto__.onShowServerList = function () {
        // Show server list
        var server_list = new UIServerListDialog();
        server_list.showDialog(this);
        this.guiLayer.addElement(server_list);
    };
    __egretProto__.setProgress = function (group_name, current, total) {
        if (this.label_progress == null) {
            return;
        }
        var strPercent = Math.floor(current / total * 100);
        // "login", "partical", "main", "cha", "sound", "battle", "home", "quest"
        var strLoadingRes = "";
        if (group_name == "partical") {
            strLoadingRes = "特效资源加载中...";
        }
        else if (group_name == "login") {
            strLoadingRes = "登录资源加载中...";
        }
        else if (group_name == "main") {
            strLoadingRes = "主场景资源加载中...";
        }
        else if (group_name == "cha") {
            strLoadingRes = "角色资源加载中...";
        }
        else if (group_name == "sound") {
            strLoadingRes = "声音资源加载中...";
        }
        else if (group_name == "battle") {
            strLoadingRes = "战斗场景资源加载中...";
        }
        else if (group_name == "home") {
            strLoadingRes = "营地资源加载中...";
        }
        else if (group_name == "quest") {
            strLoadingRes = "任务资源加载中...";
        }
        this.label_progress.text = strLoadingRes + strPercent + "%";
    };
    return UIBaseLoadingView;
})(egret.gui.Panel);
UIBaseLoadingView.prototype.__class__ = "UIBaseLoadingView";
