var SERVER_STATUS;
(function (SERVER_STATUS) {
    SERVER_STATUS[SERVER_STATUS["NORMAL"] = 0] = "NORMAL";
    SERVER_STATUS[SERVER_STATUS["ERROR"] = 1] = "ERROR"; // 异常
})(SERVER_STATUS || (SERVER_STATUS = {}));
var Sever_Info = (function () {
    function Sever_Info() {
    }
    var __egretProto__ = Sever_Info.prototype;
    return Sever_Info;
})();
Sever_Info.prototype.__class__ = "Sever_Info";
var Net = (function () {
    //public static WAS_URL:string = "http://192.168.1.101:8100/";
    function Net() {
    }
    var __egretProto__ = Net.prototype;
    // ----------------------- Http -----------------------------
    Net.postData = function (data, listener) {
        if (listener === void 0) { listener = null; }
        var url = Net.WAS_URL;
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        if (listener) {
            loader.addEventListener(egret.Event.COMPLETE, listener, this);
        }
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(data);
        loader.load(request);
    };
    Net.userLogin = function (name, psw) {
        // {"command":"LOGIN_GAME"}
        var data = 'data=' + '{"command":"LOGIN_GAME", "user_name":"' + name + '", "password":"' + psw + '"}';
        Net.postData(data, Net.onReceiveUserLogin);
    };
    Net.onReceiveUserLogin = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log( "onReceiveUserLogin", data.toString() )
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIBaseLoadingView;
        if (deal_data) {
            current_layer.finishPlayerLogin(m.result, m.data);
        }
    };
    Net.registerUserID = function (name, psw) {
        var uuid = Utils.getUUID();
        // {"command":"REGISTERBIND"}
        var data = 'data=' + '{"command":"REGISTERBIND", "uuid":"' + uuid + '", "user_name":"' + name + '", "password":"' + psw + '"}';
        Net.postData(data, Net.onReceiveRegisterUserID);
    };
    Net.onReceiveRegisterUserID = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log( "onReceiveRegisterUserID", data.toString() )
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHomeView;
        if (deal_data) {
            current_layer.finishUserRegister(m.result, m.data);
        }
    };
    Net.registerUser = function (name, psw) {
        // {"command":"REGISTER"}
        var data = 'data=' + '{"command":"REGISTER", "user_name":"' + name + '", "password":"' + psw + '"}';
        Net.postData(data, Net.onReceiveRegisterUser);
    };
    Net.onReceiveRegisterUser = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log( "onReceiveRegisterUser", data.toString() )
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIBaseLoadingView;
        if (deal_data) {
            current_layer.finishUserRegister(m.result, m.data);
        }
    };
    Net.quickRegisterUser = function () {
        // {"command":"QUICK_REGISTER"}
        var data = 'data=' + '{"command":"QUICK_REGISTER"}';
        Net.postData(data, Net.onReceiveQuickRegisterUser);
    };
    Net.onReceiveQuickRegisterUser = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log( "onReceiveQuickRegisterUser", data.toString() )
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIBaseLoadingView;
        if (deal_data) {
            current_layer.finishUserQuickRegister(m.result, m.data);
        }
    };
    Net.getServerList = function () {
        //console.log("getServerList()");
        var s = Utils.getUUID();
        Net.postData('data=' + '{"uuid":"' + s + '", "command":"GET_SERVER_LIST"}', Net.onReceiveServerList);
    };
    Net.onReceiveServerList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log( "onReceiveServerList", data.toString() )
        if (m.result != 0) {
            var current_layer = G.main_director.current_layer;
            var deal_data = current_layer instanceof UIBaseLoadingView;
            if (deal_data) {
                current_layer.finishGetServerList(m.result);
            }
            return;
        }
        //                           id        ip          port  status         a_id num
        //{"data": {"server_list": {"34": ["42.62.77.137", 8101, 0, "145CMB_APP", 0, 0]}}, "result": 0}
        //console.log( "onReceiveServerList", data.toString() )
        // Load server list.
        Net.server_list = [];
        Net.current_server_index = 0;
        Logic.isBind = m.is_quick_player;
        var server_list_datas = m.data.server_list;
        for (var i in server_list_datas) {
            var server_data = new Sever_Info();
            server_data.id = i;
            server_data.ip = server_list_datas[i][0];
            server_data.port = server_list_datas[i][1];
            server_data.status = server_list_datas[i][2];
            server_data.name = server_list_datas[i][3];
            server_data.account_id = server_list_datas[i][4];
            server_data.account_count = server_list_datas[i][5];
            Net.server_list.push(server_data);
        }
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIBaseLoadingView;
        if (deal_data) {
            current_layer.finishGetServerList(m.result);
        }
    };
    // ----------------------- Post datas to logic server -----------------------------
    Net.postDataToLogicServer = function (data, listener) {
        if (listener === void 0) { listener = null; }
        if (Net.current_server_index >= Net.server_list.length) {
            console.log("尚未连接WAS!!!");
            return;
        }
        var server_datas = Net.server_list[Net.current_server_index];
        var url = "http://" + server_datas.ip + ":" + server_datas.port + "/";
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        if (listener) {
            loader.addEventListener(egret.Event.COMPLETE, listener, this);
        }
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(data);
        loader.load(request);
    };
    Net.getPlayerIdList = function () {
        var uuid = Utils.getUUID();
        // {"command":"LOGIN_GAME", "uuid":"uuid123456"}
        var data = 'data=' + '{"command":"LOGIN_GAME", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.receiveGetPlayerIdList);
    };
    Net.receiveGetPlayerIdList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var msg = JSON.parse(data.toString());
        //console.log("LOGIN_GAME result:", msg);
        if (msg.result != 0) {
            console.log("LOGIN_GAME result:" + msg.result + " ERROR!");
            return;
        }
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIBaseLoadingView;
        if (deal_data) {
            current_layer.onInitPlayerSaveDatas(msg.data);
        }
    };
    Net.createPlayer = function (name, knight_type) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl1234567","command":"CREATE_PLAYER","knight_type":1,"knight_name":"ypl"}
        var data = 'data=' + '{"command":"CREATE_PLAYER", "uuid":"' + uuid + '", "knight_type":' + knight_type + ', "knight_name":"' + name + '"}';
        Net.postDataToLogicServer(data, Net.receiveCreatePlayer);
    };
    Net.receiveCreatePlayer = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("CREATE_PLAYER result:", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UICreateKnightView;
        if (deal_data) {
            current_layer.finishCreateKnight(m.result, m.data);
        }
    };
    Net.choosePlayer = function (index) {
        var uuid = Utils.getUUID();
        var player_data = Logic.player_datas[index];
        // {"uuid":"ypl1234567","command":"CHOOSE_PLAYER","player_id":1}
        var data = 'data=' + '{"command":"CHOOSE_PLAYER", "uuid":"' + uuid + '", "player_id":' + player_data.player_id + '}';
        Net.postDataToLogicServer(data, Net.receiveChoosePlayer);
    };
    Net.receiveChoosePlayer = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("CHOOSE_PLAYER result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UISelectKnightView;
        if (deal_data) {
            current_layer.finishChooseKnight(m.result, m.data, m.guild_id, m.guild_name);
        }
    };
    Net.saveGuideFlag = function () {
        var uuid = Utils.getUUID();
        var flag = Logic.guide_flag;
        // {"uuid":"ypl1234567","command":"SAVE_GUIDE_FLAG","guide_flag":1}
        var data = 'data=' + '{"command":"SAVE_GUIDE_FLAG", "uuid":"' + uuid + '", "guide_flag":' + flag + '}';
        Net.postDataToLogicServer(data, Net.receiveSaveGuideFlag);
    };
    Net.receiveSaveGuideFlag = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SAVE_GUIDE_FLAG result: ", m);
        if (m.result != 0) {
            console.log("Save guide flag error! Error code: " + m.result);
        }
    };
    Net.showRecruit = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl1234567","command":"SHOW_RECRUIT"}
        var data = 'data=' + '{"command":"SHOW_RECRUIT", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieShowRecruit);
    };
    Net.recevieShowRecruit = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SHOW_RECRUIT result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishShowRecruit(m.result, m.data);
        }
    };
    Net.refreshVillageRecruit = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl1234567","command":"REFRESH_VILLAGE_RECRUIT_INFO"}
        var data = 'data=' + '{"command":"REFRESH_VILLAGE_RECRUIT_INFO", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieRefreshVillageRecruit);
    };
    Net.recevieRefreshVillageRecruit = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("REFRESH_VILLAGE_RECRUIT_INFO result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishRefreshVillageHire(m.result, m.data, m.money);
        }
    };
    Net.hireVillageKnight = function (hire_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VILLAGE_RECRUIT","recruit_id":0}
        var data = 'data=' + '{"command":"VILLAGE_RECRUIT", "uuid":"' + uuid + '", "recruit_id":' + hire_id + '}';
        Net.postDataToLogicServer(data, Net.recevieHireVillageKnight);
    };
    Net.recevieHireVillageKnight = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VILLAGE_RECRUIT result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishVillageHire(m.result, m.data, m.money);
        }
    };
    Net.refreshCityRecruit = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl1234567","command":"SHOW_CITY_RECRUIT_INFO"}
        var data = 'data=' + '{"command":"SHOW_CITY_RECRUIT_INFO", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieRefreshCityRecruit);
    };
    Net.recevieRefreshCityRecruit = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SHOW_CITY_RECRUIT_INFO result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishRefreshCityHire(m.result, m.data, m.money);
        }
    };
    Net.refreshCityRecruitByDiamond = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl1234567","command":"REFRESH_CITY_RECRUIT_LUCK"}
        var data = 'data=' + '{"command":"REFRESH_CITY_RECRUIT_LUCK", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieRefreshCityRecruitByDiamond);
    };
    Net.recevieRefreshCityRecruitByDiamond = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("REFRESH_CITY_RECRUIT_LUCK result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishRefreshCityHireByDiamond(m.result, m.data, m.diamond);
        }
    };
    Net.hireCityKnight = function (hire_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"CITY_RECRUIT","recruit_id":0}
        var data = 'data=' + '{"command":"CITY_RECRUIT", "uuid":"' + uuid + '", "recruit_id":' + hire_id + '}';
        Net.postDataToLogicServer(data, Net.recevieHireCityKnight);
    };
    Net.recevieHireCityKnight = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("CITY_RECRUIT result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishCityHire(m.result, m.data, m.money);
        }
    };
    Net.refreshHonorRecruit = function (index) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl1234567","command":"SHOW_CITY_RECRUIT_INFO"}
        var data = 'data=' + '{"command":"SHOW_HONOR_RECRUIT_INFO", "uuid":"' + uuid + '", "knight_type":' + index + '}';
        Net.postDataToLogicServer(data, Net.recevieRefreshHonorRecruit);
    };
    Net.recevieRefreshHonorRecruit = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SHOW_HONOR_RECRUIT_INFO result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishRefreshHonorHire(m.result, m.data, m.honor);
        }
    };
    Net.refreshHonorRecruitByDiamond = function (index) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl1234567","command":"REFRESH_CITY_RECRUIT_LUCK"}
        var data = 'data=' + '{"command":"REFRESH_HONOR_RECRUIT_LUCK", "uuid":"' + uuid + '", "knight_type":' + index + '}';
        Net.postDataToLogicServer(data, Net.recevieRefreshHonorRecruitByDiamond);
    };
    Net.recevieRefreshHonorRecruitByDiamond = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("REFRESH_HONOR_RECRUIT_LUCK result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishRefreshHonorHireByDiamond(m.result, m.data, m.diamond);
        }
    };
    Net.hireHonorKnight = function (hire_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"HONOR_RECRUIT","recruit_id":0}
        var data = 'data=' + '{"command":"HONOR_RECRUIT", "uuid":"' + uuid + '", "recruit_id":' + hire_id + '}';
        Net.postDataToLogicServer(data, Net.recevieHireHonorKnight);
    };
    Net.recevieHireHonorKnight = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("HONOR_RECRUIT result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishHonorHire(m.result, m.data, m.money);
        }
    };
    Net.getMyKnightsList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"KNIGHT_MANAGE","start_index":0}
        var data = 'data=' + '{"command":"KNIGHT_MANAGE", "uuid":"' + uuid + '", "start_index":' + start_index + '}';
        Net.postDataToLogicServer(data, Net.recevieGetMyKnightsList);
    };
    Net.recevieGetMyKnightsList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("KNIGHT_MANAGE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIMyKnightTeamSetView;
        if (deal_data) {
            current_layer.finishGetMyKnightsList(m.result, m.data, m.count, m.max_count, m.money, m.diamond);
        }
    };
    Net.getMyKnightsListForJob = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"KNIGHT_MANAGE","start_index":0}
        var data = 'data=' + '{"command":"KNIGHT_MANAGE", "uuid":"' + uuid + '", "start_index":' + start_index + '}';
        Net.postDataToLogicServer(data, Net.recevieGetMyKnightsListForJob);
    };
    Net.recevieGetMyKnightsListForJob = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("KNIGHT_MANAGE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            if (current_layer.self_knights_dlg != null) {
                current_layer.self_knights_dlg.finishGetMyKnightsList(m.result, m.data);
            }
        }
    };
    Net.dismissKnight = function (knight_id) {
        if (knight_id === void 0) { knight_id = 0; }
        var uuid = Utils.getUUID();
        //{"uuid":"ypl123456","command":"DISMISS","knight_id":0}
        var data = 'data=' + '{"command":"DISMISS", "uuid":"' + uuid + '", "knight_id":' + knight_id + '}';
        Net.postDataToLogicServer(data, Net.recevieDismissKnight);
    };
    Net.recevieDismissKnight = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("DISMISS result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIMyKnightTeamSetView;
        if (deal_data) {
            current_layer.finishDismissKnight(m.result);
        }
    };
    Net.knightEnterPosition = function (knight_id, position) {
        var uuid = Utils.getUUID();
        //{"uuid":"ypl123456","command":"ON_POSITION","knight_id":2,"position":0}
        var data = 'data=' + '{"command":"ON_POSITION", "uuid":"' + uuid + '", "knight_id":' + knight_id + ', "position":' + position + '}';
        Net.postDataToLogicServer(data, Net.recevieKnightEnterPosition);
    };
    Net.recevieKnightEnterPosition = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("ON_POSITION result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIMyKnightTeamSetView;
        if (deal_data) {
            current_layer.finishKnightEnterPosition(m.result);
        }
    };
    Net.knightExitPosition = function (knight_id) {
        var uuid = Utils.getUUID();
        //{"uuid":"ypl123456","command":"OFF_POSITION","knight_id":2}
        var data = 'data=' + '{"command":"OFF_POSITION", "uuid":"' + uuid + '", "knight_id":' + knight_id + '}';
        Net.postDataToLogicServer(data, Net.recevieKnightExitPosition);
    };
    Net.recevieKnightExitPosition = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("OFF_POSITION result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIMyKnightTeamSetView;
        if (deal_data) {
            current_layer.finishKnightExitPosition(m.result);
        }
    };
    Net.knightSwitchPosition = function (knight_id, position) {
        var uuid = Utils.getUUID();
        //{"uuid":"ypl123456","command":"ON_POSITION","knight_id":2,"position":0}
        var data = 'data=' + '{"command":"ON_POSITION", "uuid":"' + uuid + '", "knight_id":' + knight_id + ', "position":' + position + '}';
        Net.postDataToLogicServer(data, Net.recevieKnightSwitchPosition);
    };
    Net.recevieKnightSwitchPosition = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("ON_POSITION result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.bottom_info_bar != null) {
            var deal_data = current_layer.bottom_info_bar instanceof UIBottomInfoView;
            if (deal_data) {
                current_layer.bottom_info_bar.finishKnightSwitchPosition(m.result);
            }
        }
        if (current_layer instanceof UIMyKnightTeamSetView) {
            current_layer.refreshLeftKnightList();
        }
    };
    Net.getOnPositionKnightsList = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GET_ON_POSITIONS"}
        var data = 'data=' + '{"command":"GET_ON_POSITIONS", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetOnPositionKnightsList);
    };
    Net.recevieGetOnPositionKnightsList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GET_ON_POSITIONS result: ", m);
        if (m.result != 0) {
            console.log("GET_ON_POSITIONS Error: " + m.result);
            return;
        }
        Logic.refreshKnightsTeam(m.data);
        var current_layer = G.main_director.current_layer;
        if (current_layer.bottom_info_bar != null) {
            var deal_data = current_layer.bottom_info_bar instanceof UIBottomInfoView;
            if (deal_data) {
                current_layer.bottom_info_bar.refreshMyKnightTeam();
            }
        }
        if (current_layer.top_info_bar != null) {
            var deal_data = current_layer.top_info_bar instanceof UITopInfoView;
            if (deal_data) {
                current_layer.top_info_bar.initPlayer();
            }
        }
    };
    Net.getPlayerStaminaInfo = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"REFRESH_STAMINA"}
        var data = 'data=' + '{"command":"REFRESH_STAMINA", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetPlayerStaminaInfo);
    };
    Net.recevieGetPlayerStaminaInfo = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("REFRESH_STAMINA result: ", m);
        if (m.result != 0) {
            console.log("REFRESH_STAMINA Error: " + m.result);
            return;
        }
        Logic.setStaminaInfo(m.data);
        var current_layer = G.main_director.current_layer;
        if (current_layer.top_info_bar != null) {
            var deal_data = current_layer.top_info_bar instanceof UITopInfoView;
            if (deal_data) {
                current_layer.top_info_bar.refreshStaminaText();
            }
        }
    };
    Net.challengeCity = function (area_id, city_index) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"EXPEDITION", "expedition_type":1, "area_id":1, "city_index":1}
        var data = 'data=' + '{"command":"EXPEDITION", "uuid":"' + uuid + '", "expedition_type":1, "area_id":' + area_id + ', "city_index":' + city_index + '}';
        Net.postDataToLogicServer(data, Net.recevieChallengeCity);
    };
    Net.recevieChallengeCity = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("EXPEDITION result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof QuestLayer;
        if (deal_data && current_layer.city_detail_view != null) {
            current_layer.city_detail_view.finishChallengeCity(m.result, m.data);
        }
    };
    Net.challengeSpecialCity = function (area_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"EXPEDITION", "expedition_type":0, "area_id":1, "city_index":-1}
        var data = 'data=' + '{"command":"EXPEDITION", "uuid":"' + uuid + '", "expedition_type":0, "area_id":' + area_id + ', "city_index":' + -1 + '}';
        Net.postDataToLogicServer(data, Net.recevieChallengeSpecialCity);
    };
    Net.recevieChallengeSpecialCity = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("EXPEDITION result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof QuestLayer;
        if (deal_data && current_layer.special_city_detail_view != null) {
            current_layer.special_city_detail_view.finishChallengeSpecialCity(m.result, m.data);
        }
    };
    Net.collectCityMoney = function (area_id, city_index) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"EXPEDITION_COLLECT_MONEY", "area_id":1, "city_index":1}
        var data = 'data=' + '{"command":"EXPEDITION_COLLECT_MONEY", "uuid":"' + uuid + '", "area_id":' + area_id + ', "city_index":' + city_index + '}';
        Net.postDataToLogicServer(data, Net.recevieCollectCityMoney);
    };
    Net.recevieCollectCityMoney = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("EXPEDITION_COLLECT_MONEY result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof QuestLayer;
        if (deal_data) {
            current_layer.finishCollectCityMoney(m.result, m.data);
        }
    };
    Net.getWarReportList = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_MILITARIES"}
        var data = 'data=' + '{"command":"VIEW_MILITARIES", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetWarReportList);
    };
    Net.recevieGetWarReportList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_MILITARIES result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof QuestLayer;
        if (deal_data) {
            current_layer.finishGetWarReportList(m.result, m.data);
        }
    };
    Net.getMilitaryAward = function (report_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"COMPLETE_MILITARIES", "military_id":1}
        var data = 'data=' + '{"command":"COMPLETE_MILITARIES", "uuid":"' + uuid + '", "military_id":' + report_id + '}';
        Net.postDataToLogicServer(data, Net.recevieGetMilitaryAward);
    };
    Net.recevieGetMilitaryAward = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("COMPLETE_MILITARIES result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof QuestLayer;
        if (deal_data) {
            if (current_layer.war_report_view != null) {
                current_layer.war_report_view.finishGetWarReportAward(m.result, m.data);
            }
        }
    };
    Net.uploadQuestBattleLose = function () {
        var uuid = Utils.getUUID();
        var type = QuestLayer.last_quest_type;
        var area_id = QuestLayer.last_area_id;
        var city_index = QuestLayer.last_city_index;
        // {"uuid":"ypl123456","command":"EXPEDITION_SETTLEMENT", "expedition_type":1, "area_id":1, "city_index":1,"result":-1}
        var data = 'data=' + '{"command":"EXPEDITION_SETTLEMENT", "uuid":"' + uuid + '", "expedition_type":' + type + ', "area_id":' + area_id + ', "city_index":' + city_index + ', "result":-1}';
        Net.postDataToLogicServer(data, Net.recevieUploadQuestBattleLose);
    };
    Net.recevieUploadQuestBattleLose = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("EXPEDITION_SETTLEMENT result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof BattleLayer;
        if (deal_data && current_layer.battle_result_dialog != null) {
            current_layer.battle_result_dialog.finishUploadBattleLoseInfo(m.result);
        }
    };
    Net.uploadQuestBattleWin = function () {
        var uuid = Utils.getUUID();
        var type = QuestLayer.last_quest_type;
        var area_id = QuestLayer.last_area_id;
        var city_index = QuestLayer.last_city_index;
        // {"uuid":"ypl123456","command":"EXPEDITION_SETTLEMENT", "expedition_type":1, "area_id":1, "city_index":1,"result":1}
        var data = 'data=' + '{"command":"EXPEDITION_SETTLEMENT", "uuid":"' + uuid + '", "expedition_type":' + type + ', "area_id":' + area_id + ', "city_index":' + city_index + ', "result":1}';
        Net.postDataToLogicServer(data, Net.recevieUploadQuestBattleWin);
    };
    Net.recevieUploadQuestBattleWin = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("EXPEDITION_SETTLEMENT result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof BattleLayer;
        if (deal_data && current_layer.battle_result_dialog != null) {
            current_layer.battle_result_dialog.finishUploadBattleWinInfo(m.result, m.data);
        }
    };
    Net.getArenaBaseInfo = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GET_ARENA_INFO"}
        var data = 'data=' + '{"command":"GET_ARENA_INFO", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetArenaBaseInfo);
    };
    Net.recevieGetArenaBaseInfo = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GET_ARENA_INFO result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIAreaHomeView;
        if (deal_data) {
            current_layer.finishGetPlayerAreaBaseInfo(m.result, m.data);
        }
    };
    Net.getArenaRankInfo = function (rank_index) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GET_ARENA_RANK_INFO","rank_index":0}
        var data = 'data=' + '{"command":"GET_ARENA_RANK_INFO", "uuid":"' + uuid + '", "rank_index":' + rank_index + '}';
        Net.postDataToLogicServer(data, Net.recevieGetArenaRankInfo);
    };
    Net.recevieGetArenaRankInfo = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GET_ARENA_RANK_INFO result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIAreaHomeView;
        if (deal_data) {
            current_layer.finishGetArenaRankInfo(m.result, m.data);
        }
    };
    Net.getArenaTenRankInfo = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GET_ARENA_RANK_INFO","rank_index":0}
        var data = 'data=' + '{"command":"GET_ARENA_CHALLENGER", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetArenaTenRankInfo);
    };
    Net.recevieGetArenaTenRankInfo = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GET_ARENA_RANK_INFO result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIAreaHomeView;
        if (deal_data) {
            current_layer.finishGetArenaTenRankInfo(m.result, m.data, m.dan_name);
        }
    };
    Net.matchArenaPlayer = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"ARENA_MATCH"}
        var data = 'data=' + '{"command":"ARENA_MATCH", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieMatchArenaPlayer);
    };
    Net.recevieMatchArenaPlayer = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("ARENA_MATCH result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIAreaHomeView;
        if (deal_data) {
            current_layer.finishMatchArenaPlayer(m.result, m.side, m.isNpc, m.data);
        }
    };
    Net.uploadArenaBattleLose = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"ARENA_FIGHT","result":-1}
        var data = 'data=' + '{"command":"ARENA_FIGHT", "uuid":"' + uuid + '", "result":-1}';
        Net.postDataToLogicServer(data, Net.recevieUploadArenaBattleLose);
    };
    Net.recevieUploadArenaBattleLose = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("ARENA_FIGHT result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof BattleLayer;
        if (deal_data && current_layer.battle_result_dialog != null) {
            current_layer.battle_result_dialog.finishUploadArenaBattleLoseInfo(m.result);
        }
    };
    Net.uploadArenaBattleWin = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"ARENA_FIGHT","result":1}
        var data = 'data=' + '{"command":"ARENA_FIGHT", "uuid":"' + uuid + '", "result":1}';
        Net.postDataToLogicServer(data, Net.recevieUploadArenaBattleWin);
    };
    Net.recevieUploadArenaBattleWin = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("ARENA_FIGHT result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof BattleLayer;
        if (deal_data && current_layer.battle_result_dialog != null) {
            current_layer.battle_result_dialog.finishUploadArenaBattleWinInfo(m.result, m.data);
        }
    };
    Net.uploadJobBattleWin = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"SETTLEMENT_TRANSFER_INSTANCE","result":1}
        var data = 'data=' + '{"command":"SETTLEMENT_TRANSFER_INSTANCE", "uuid":"' + uuid + '", "result":1}';
        Net.postDataToLogicServer(data, Net.recevieUploadJobBattleWin);
    };
    Net.recevieUploadJobBattleWin = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SETTLEMENT_TRANSFER_INSTANCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof BattleLayer;
        if (deal_data && current_layer.battle_result_dialog != null) {
            current_layer.battle_result_dialog.finishUploadJobBattleWinInfo(m.result, m.data);
        }
    };
    Net.uploadJobBattleLose = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"SETTLEMENT_TRANSFER_INSTANCE","result":-1}
        var data = 'data=' + '{"command":"SETTLEMENT_TRANSFER_INSTANCE", "uuid":"' + uuid + '", "result":-1}';
        Net.postDataToLogicServer(data, Net.recevieUploadJobBattleLose);
    };
    Net.recevieUploadJobBattleLose = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SETTLEMENT_TRANSFER_INSTANCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof BattleLayer;
        if (deal_data && current_layer.battle_result_dialog != null) {
            current_layer.battle_result_dialog.finishUploadJobBattleLoseInfo(m.result, m.data);
        }
    };
    Net.sendCreateGuild = function (guild_name, flag_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"CREATE_GUILD","guild_name":"123"}
        var data = 'data=' + '{"command":"CREATE_GUILD", "uuid":"' + uuid + '", "guild_name":"' + guild_name + '", "flag_id":' + flag_id + '}';
        Net.postDataToLogicServer(data, Net.recevieSendCreateGuild);
    };
    Net.recevieSendCreateGuild = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("CREATE_GUILD result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishCreateGuild(m.result);
        }
    };
    Net.increaseKnightsPosition = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"BUY_POSITION"}
        var data = 'data=' + '{"command":"BUY_POSITION", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieIncreaseKnightsPosition);
    };
    Net.recevieIncreaseKnightsPosition = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("BUY_POSITION result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIMyKnightTeamSetView;
        if (deal_data) {
            current_layer.finishIncreaseKnightsPos(m.result, m.data);
        }
        deal_data = current_layer instanceof UIHireHomeView;
        if (deal_data) {
            current_layer.finishIncreaseKnightsPos(m.result, m.data);
        }
    };
    Net.getGuildsList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_GUILDS","start_index":0}
        var data = 'data=' + '{"command":"VIEW_GUILDS", "uuid":"' + uuid + '", "start_index":' + start_index + '}';
        Net.postDataToLogicServer(data, Net.recevieGetGuildsList);
    };
    Net.recevieGetGuildsList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_GUILDS result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishGetGuildsList(m.result, m.data);
        }
    };
    Net.searchGuild = function (name) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"SEARCH_GUILDS","guild_name":"0"}
        var data = 'data=' + '{"command":"SEARCH_GUILDS", "uuid":"' + uuid + '", "guild_name":"' + name + '"}';
        Net.postDataToLogicServer(data, Net.recevieSearchGuild);
    };
    Net.recevieSearchGuild = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SEARCH_GUILDS result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishSearchGuild(m.result, m.data);
        }
    };
    Net.applyGuild = function (guild_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"APPLY_GUILD","guild_id":0}
        var data = 'data=' + '{"command":"APPLY_GUILD", "uuid":"' + uuid + '", "guild_id":' + guild_id + '}';
        Net.postDataToLogicServer(data, Net.recevieApplyGuild);
    };
    Net.recevieApplyGuild = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("APPLY_GUILD result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishApplyGuild(m.result);
        }
    };
    Net.cancelApplyGuild = function (guild_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"CANCEL_APPLY_GUILD","guild_id":0}
        var data = 'data=' + '{"command":"CANCEL_APPLY_GUILD", "uuid":"' + uuid + '", "guild_id":' + guild_id + '}';
        Net.postDataToLogicServer(data, Net.recevieCancelApplyGuild);
    };
    Net.recevieCancelApplyGuild = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("CANCEL_APPLY_GUILD result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishCancelApplyGuild(m.result);
        }
    };
    Net.getSelfGuildInfo = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_GUILD_INFO"}
        var data = 'data=' + '{"command":"VIEW_GUILD_INFO", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetSelfGuildInfo);
    };
    Net.recevieGetSelfGuildInfo = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_GUILD_INFO result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIGuildHomeView) {
            current_layer.finishGetSelfGuildInfo(m.result, m.data);
        }
        else if (current_layer instanceof UIHomeView) {
            current_layer.finishGetSelfGuildInfo(m.result, m.data);
        }
    };
    Net.setGuildNotice = function (notice) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"CHANGE_GUILD_ANNOUNCE","new_announce":"0"}
        var data = 'data=' + '{"command":"CHANGE_GUILD_ANNOUNCE", "uuid":"' + uuid + '", "new_announce":"' + notice + '"}';
        Net.postDataToLogicServer(data, Net.recevieSetGuildNotice);
    };
    Net.recevieSetGuildNotice = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("CHANGE_GUILD_ANNOUNCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishSetGuildNotice(m.result);
        }
    };
    Net.getAppliesList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_APPLIES","start_index":0}
        var data = 'data=' + '{"command":"VIEW_APPLIES", "uuid":"' + uuid + '", "start_index":' + start_index + '}';
        Net.postDataToLogicServer(data, Net.recevieGetAppliesList);
    };
    Net.recevieGetAppliesList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_APPLIES result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishGetAppliesList(m.result, m.data);
        }
    };
    Net.acceptApply = function (player_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"ACCEPT_APPLY","apply_player_id":0}
        var data = 'data=' + '{"command":"ACCEPT_APPLY", "uuid":"' + uuid + '", "apply_player_id":' + player_id + '}';
        Net.postDataToLogicServer(data, Net.recevieAcceptApply);
    };
    Net.recevieAcceptApply = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("ACCEPT_APPLY result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishAcceptApply(m.result);
        }
    };
    Net.rejectApply = function (player_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"REJECT_APPLY","apply_player_id":0}
        var data = 'data=' + '{"command":"REJECT_APPLY", "uuid":"' + uuid + '", "apply_player_id":' + player_id + '}';
        Net.postDataToLogicServer(data, Net.recevieRejectApply);
    };
    Net.recevieRejectApply = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("REJECT_APPLY result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishRejectApply(m.result);
        }
    };
    Net.quitGuild = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"QUIT_GUILD"}
        var data = 'data=' + '{"command":"QUIT_GUILD", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieQuitGuild);
    };
    Net.recevieQuitGuild = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("QUIT_GUILD result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishQuitGuild(m.result);
        }
    };
    Net.dismissGuild = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"DISMISS_GUILD"}
        var data = 'data=' + '{"command":"DISMISS_GUILD", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieDismissGuild);
    };
    Net.recevieDismissGuild = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("DISMISS_GUILD result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishDismissGuild(m.result);
        }
    };
    Net.getSelfGuildManagerInfo = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GUILD_MANAGE"}
        var data = 'data=' + '{"command":"GUILD_MANAGE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetSelfGuildManagerInfo);
    };
    Net.recevieGetSelfGuildManagerInfo = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GUILD_MANAGE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishGetGuildCreateInfo(m.result, m.data);
        }
    };
    Net.getGuildMembersList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_GUILD_MEMBERS","start_index":0}
        var data = 'data=' + '{"command":"VIEW_GUILD_MEMBERS", "uuid":"' + uuid + '", "start_index":' + start_index + '}';
        Net.postDataToLogicServer(data, Net.recevieGetGuildMembersList);
    };
    Net.recevieGetGuildMembersList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_GUILD_MEMBERS result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishGetGuildMembersList(m.result, m.data);
        }
    };
    Net.kickGuildMember = function (player_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"KICK_GUILD_MEMBER","kick_player_id":0}
        var data = 'data=' + '{"command":"KICK_GUILD_MEMBER", "uuid":"' + uuid + '", "kick_player_id":' + player_id + '}';
        Net.postDataToLogicServer(data, Net.recevieKickGuildMember);
    };
    Net.recevieKickGuildMember = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("KICK_GUILD_MEMBER result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishKickGuildMember(m.result);
        }
    };
    Net.getGuildDonationList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_GUILD_DONATES","start_index":0}
        var data = 'data=' + '{"command":"VIEW_GUILD_DONATES", "uuid":"' + uuid + '", "start_index":' + start_index + '}';
        Net.postDataToLogicServer(data, Net.recevieGetGuildDonationList);
    };
    Net.recevieGetGuildDonationList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_GUILD_DONATES result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishGetGuildDonationList(m.result, m.data, m.extra_data);
        }
    };
    Net.donateForGuild = function (money) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GUILD_DONATE"}
        var data = 'data=' + '{"command":"GUILD_DONATE", "uuid":"' + uuid + '", "money":' + money + '}';
        Net.postDataToLogicServer(data, Net.recevieDonateForGuild);
    };
    Net.recevieDonateForGuild = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GUILD_DONATE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishDonateForGuild(m.result, m.data, m.extra_data, m.money);
        }
    };
    Net.setGuildChairman = function (player_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"TRANSFER_GUILD","accept_player_id":0}
        var data = 'data=' + '{"command":"TRANSFER_GUILD", "uuid":"' + uuid + '", "accept_player_id":' + player_id + '}';
        Net.postDataToLogicServer(data, Net.recevieSetGuildChairman);
    };
    Net.recevieSetGuildChairman = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("TRANSFER_GUILD result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIGuildHomeView;
        if (deal_data) {
            current_layer.finishSetGuildChairman(m.result);
        }
    };
    Net.getAllCityStatus = function (area_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_EXPEDITIONS","area_id":0}
        var data = 'data=' + '{"command":"VIEW_EXPEDITIONS", "uuid":"' + uuid + '", "area_id":' + area_id + '}';
        Net.postDataToLogicServer(data, Net.recevieGetAllCityStatus);
    };
    Net.recevieGetAllCityStatus = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_EXPEDITIONS result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof QuestLayer;
        if (deal_data) {
            current_layer.finishGetAllCityStatus(m.result, m.area_id, m.data);
        }
    };
    Net.getPlayerKnightsList = function (player_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GET_OTHER_ON_POSITIONS", "other_id":player_id}
        var data = 'data=' + '{"command":"GET_OTHER_ON_POSITIONS", "uuid":"' + uuid + '", "other_id":' + player_id + '}';
        Net.postDataToLogicServer(data, Net.recevieGetPlayerKnightsList);
    };
    Net.recevieGetPlayerKnightsList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GET_OTHER_ON_POSITIONS result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.player_datail_dlg != null) {
            var deal_data = current_layer.player_datail_dlg instanceof UIPlayerDetailDialog;
            if (deal_data) {
                current_layer.player_datail_dlg.finishGetPlayerKnightsList(m.result, m.data);
            }
        }
    };
    Net.getShopMoneyList = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VISIT_SHOP", "shop_type":2}
        var data = 'data=' + '{"command":"VISIT_SHOP", "uuid":"' + uuid + '", "shop_type":' + 2 + '}';
        Net.postDataToLogicServer(data, Net.recevieGetShopMoneyList);
    };
    Net.recevieGetShopMoneyList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VISIT_SHOP result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishGetShopMoneyList(m.result, m.data);
            }
        }
    };
    Net.getShopDiamondList = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VISIT_SHOP", "shop_type":3}
        var data = 'data=' + '{"command":"VISIT_SHOP", "uuid":"' + uuid + '", "shop_type":' + 3 + '}';
        Net.postDataToLogicServer(data, Net.recevieGetShopDiamondList);
    };
    Net.recevieGetShopDiamondList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VISIT_SHOP result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishGetShopDiamondList(m.result, m.data);
            }
        }
    };
    Net.getShopStaminaList = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VISIT_SHOP", "shop_type":1}
        var data = 'data=' + '{"command":"VISIT_SHOP", "uuid":"' + uuid + '", "shop_type":' + 1 + '}';
        Net.postDataToLogicServer(data, Net.recevieGetShopStaminaList);
    };
    Net.recevieGetShopStaminaList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VISIT_SHOP result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishGetShopStaminaList(m.result, m.data);
            }
        }
    };
    Net.getShopCardsList = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VISIT_JOB_CARD_SHOP"}
        var data = 'data=' + '{"command":"VISIT_JOB_CARD_SHOP", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetShopCardsList);
    };
    Net.recevieGetShopCardsList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VISIT_JOB_CARD_SHOP result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishGetShopCardsList(m.result, m.data);
            }
        }
    };
    Net.getShopTicketsList = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VISIT_SHOP", "shop_type":4}
        var data = 'data=' + '{"command":"VISIT_SHOP", "uuid":"' + uuid + '", "shop_type":' + 4 + '}';
        Net.postDataToLogicServer(data, Net.recevieGetShopTicketsList);
    };
    Net.recevieGetShopTicketsList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VISIT_SHOP result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishGetShopTicketsList(m.result, m.data);
            }
        }
    };
    Net.buyShopMoney = function (index) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"SHOP_BUY", "shop_type":2, "shop_index":index}
        var data = 'data=' + '{"command":"SHOP_BUY", "uuid":"' + uuid + '", "shop_type":2, "shop_index":' + index + '}';
        Net.postDataToLogicServer(data, Net.recevieBuyShopMoney);
    };
    Net.recevieBuyShopMoney = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SHOP_BUY result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishBuyShopMoney(m.result, m.data);
            }
        }
    };
    Net.buyShopStamina = function (index) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"SHOP_BUY", "shop_type":1, "shop_index":index}
        var data = 'data=' + '{"command":"SHOP_BUY", "uuid":"' + uuid + '", "shop_type":1, "shop_index":' + index + '}';
        Net.postDataToLogicServer(data, Net.recevieBuyShopStamina);
    };
    Net.recevieBuyShopStamina = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SHOP_BUY result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishBuyShopStamina(m.result, m.data);
            }
        }
    };
    Net.buyShopTicket = function (index) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"SHOP_BUY", "shop_type":4, "shop_index":index}
        var data = 'data=' + '{"command":"SHOP_BUY", "uuid":"' + uuid + '", "shop_type":4, "shop_index":' + index + '}';
        Net.postDataToLogicServer(data, Net.recevieBuyShopTicket);
    };
    Net.recevieBuyShopTicket = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SHOP_BUY result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishBuyShopTicket(m.result, m.data);
            }
        }
    };
    Net.buyShopCard = function (card_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"BUY_JOB_CARD", "card_id":card_id}
        var data = 'data=' + '{"command":"BUY_JOB_CARD", "uuid":"' + uuid + '", "card_id":' + card_id + '}';
        Net.postDataToLogicServer(data, Net.recevieBuyShopCard);
    };
    Net.recevieBuyShopCard = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("BUY_JOB_CARD result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishBuyShopCard(m.result, m.data);
            }
        }
    };
    Net.refreshShopCard = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"REFRES_JOB_CARD"}
        var data = 'data=' + '{"command":"REFRES_JOB_CARD", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieRefreshShopCard);
    };
    Net.recevieRefreshShopCard = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("REFRES_JOB_CARD result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
            var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
                current_layer.shop_dlg.finishRefreshShopCard(m.result, m.data);
            }
        }
    };
    Net.getJobCardsList = function (start_index) {
        if (start_index === void 0) { start_index = 0; }
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_JOB_CARDS","start_index":0}
        var data = 'data=' + '{"command":"VIEW_JOB_CARDS", "uuid":"' + uuid + '", "start_index":' + start_index + '}';
        Net.postDataToLogicServer(data, Net.recevieGetJobCardsList);
    };
    Net.recevieGetJobCardsList = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_JOB_CARDS result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            if (current_layer.job_cards_dlg != null) {
                current_layer.job_cards_dlg.finishGetJobCardsList(m.result, m.data);
            }
        }
    };
    Net.sellJobCard = function (card_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"SELL_JOB_CARD","start_index":0}
        var data = 'data=' + '{"command":"SELL_JOB_CARD", "uuid":"' + uuid + '", "card_id":' + card_id + '}';
        Net.postDataToLogicServer(data, Net.recevieSellJobCard);
    };
    Net.recevieSellJobCard = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("SELL_JOB_CARD result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            if (current_layer.job_cards_dlg != null) {
                current_layer.job_cards_dlg.finishSellJobCard(m.result, m.data);
            }
        }
    };
    Net.doChangeKnightJob = function (knight_id, card_id, use_type) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"CHANGE_JOB","knight_id":0,"card_id":0,"use_type":0}
        var data = 'data=' + '{"command":"CHANGE_JOB", "uuid":"' + uuid + '", "knight_id":' + knight_id + ', "card_id":' + card_id + ', "use_type":' + use_type + '}';
        Net.postDataToLogicServer(data, Net.recevieDoChangeJobCallback);
    };
    Net.recevieDoChangeJobCallback = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("CHANGE_JOB result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            current_layer.finishDoChangeJob(m.result, m.data);
        }
    };
    Net.refreshChatMessage = function (message_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_GUILD_CHAT","index":0}
        var data = 'data=' + '{"command":"VIEW_GUILD_CHAT", "uuid":"' + uuid + '", "message_id":' + message_id + '}';
        Net.postDataToLogicServer(data, Net.recevieRefreshChatMessage);
    };
    Net.recevieRefreshChatMessage = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_GUILD_CHAT result: ", m);
        if (m.result == 0) {
            Logic.getMessageDatas(m.data);
        }
    };
    Net.getFirstMag = function (messageID) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"VIEW_GUILD_CHAT","index":0}
        var data = 'data=' + '{"command":"WORLD_NOTICE", "uuid":"' + uuid + '", "messageID":"' + messageID + '"}';
        Net.postDataToLogicServer(data, Net.recevieFirstMag);
    };
    Net.recevieFirstMag = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("VIEW_GUILD_CHAT result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHomeView) {
            current_layer.finishGetFirst(m.result, m.data);
        }
    };
    Net.sendChatMessage = function (message) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GUILD_CHAT","message":"message"}
        var data = 'data=' + '{"command":"GUILD_CHAT", "uuid":"' + uuid + '", "message":"' + message + '"}';
        Net.postDataToLogicServer(data, Net.recevieSendChatMessage);
    };
    Net.recevieSendChatMessage = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GUILD_CHAT result: ", m);
        var current_layer = G.main_director.current_layer;
        if (current_layer.chat_dlg != null) {
            current_layer.chat_dlg.finishSendMessage(m.result);
        }
    };
    Net.refreshJobTeamStatus = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"UPDATE_TRANSFER_INSTANCE_STATUS"}
        var data = 'data=' + '{"command":"UPDATE_TRANSFER_INSTANCE_STATUS", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieRefreshJobTeamStatus);
    };
    Net.recevieRefreshJobTeamStatus = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("UPDATE_TRANSFER_INSTANCE_STATUS result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            current_layer.finishRefreshJobTeamStatus(m.result, m.data, m.status);
        }
    };
    Net.createJobTeam = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"CREATE_TRANSFER_INSTANCE"}
        var data = 'data=' + '{"command":"CREATE_TRANSFER_INSTANCE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieCreateJobTeam);
    };
    Net.recevieCreateJobTeam = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("CREATE_TRANSFER_INSTANCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            current_layer.finishCreateJobTeam(m.result);
        }
    };
    Net.dismissJobTeam = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"DISMISS_TRANSFER_INSTANCE"}
        var data = 'data=' + '{"command":"DISMISS_TRANSFER_INSTANCE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieDismissJobTeam);
    };
    Net.recevieDismissJobTeam = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("DISMISS_TRANSFER_INSTANCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            current_layer.finishDismissJobTeam(m.result);
        }
    };
    Net.exitJobTeam = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"EXIT_TRANSFER_INSTANCE"}
        var data = 'data=' + '{"command":"EXIT_TRANSFER_INSTANCE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieExitJobTeam);
    };
    Net.recevieExitJobTeam = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("EXIT_TRANSFER_INSTANCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            current_layer.finishExitJobTeam(m.result);
        }
    };
    Net.kickJobTeamMember = function (member_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"KICK_TRANSFER_INSTANCE"}
        var data = 'data=' + '{"command":"KICK_TRANSFER_INSTANCE", "uuid":"' + uuid + '", "member_id":' + member_id + '}';
        Net.postDataToLogicServer(data, Net.recevieKickJobTeamMember);
    };
    Net.recevieKickJobTeamMember = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("KICK_TRANSFER_INSTANCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            current_layer.finishKickTeamMember(m.result);
        }
    };
    Net.joinJobTeam = function (transfer_id) {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"JOIN_TRANSFER_INSTANCE"}
        var data = 'data=' + '{"command":"JOIN_TRANSFER_INSTANCE", "uuid":"' + uuid + '", "transfer_id":' + transfer_id + '}';
        Net.postDataToLogicServer(data, Net.recevieJoinJobTeam);
    };
    Net.recevieJoinJobTeam = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("JOIN_TRANSFER_INSTANCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            current_layer.finishJoinJobTeam(m.result);
        }
    };
    Net.startJobTeamBattle = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"START_TRANSFER_INSTANCE"}
        var data = 'data=' + '{"command":"START_TRANSFER_INSTANCE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieStartJobTeamBattle);
    };
    Net.recevieStartJobTeamBattle = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("START_TRANSFER_INSTANCE result: ", m);
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof UIJobHomeView;
        if (deal_data) {
            current_layer.finishStartJobBattle(m.result);
        }
    };
    Net.getSystemStatus = function () {
        var uuid = Utils.getUUID();
        // {"uuid":"ypl123456","command":"GET_OPEN_LIMIT"}
        var data = 'data=' + '{"command":"GET_OPEN_LIMIT", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieGetSystemStatus);
    };
    Net.recevieGetSystemStatus = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        //console.log("GET_OPEN_LIMIT result: ", m);
        if (m.result != 0) {
            console.log("GET_OPEN_LIMIT ERROR: ", m.result);
            return;
        }
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIHomeView) {
            current_layer.finishGetSystemStatus(m.data);
        }
        else if (current_layer instanceof QuestLayer) {
            current_layer.finishGetSystemStatus(m.data);
        }
    };
    Net.server_list = [];
    Net.current_server_index = 0;
    Net.WAS_URL = "http://42.62.77.137:7100/";
    return Net;
})();
Net.prototype.__class__ = "Net";
