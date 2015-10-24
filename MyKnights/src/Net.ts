enum SERVER_STATUS
{
	NORMAL = 0, // 正常
	ERROR       // 异常
}

class Sever_Info {
	public id:number;
	public ip:string;
	public port:number;
	public name:string;
	public status:number;
	public account_id:number;
	public account_count:number;
}

class Net {
	public static server_list = [];
	public static current_server_index:number = 0;

	public static WAS_URL:string = "http://42.62.77.137:7100/";
	//public static WAS_URL:string = "http://192.168.1.101:8100/";

	public constructor() {
    }

    // ----------------------- Http -----------------------------
    public static postData( data, listener=null ) {
        var url:string = Net.WAS_URL;
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        if ( listener ) {
            loader.addEventListener(egret.Event.COMPLETE, listener, this);
        }
        var request:egret.URLRequest = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables( data )
        loader.load(request);
    }

    public static userLogin(name:string, psw:string) {
        // {"command":"LOGIN_GAME"}
		var data = 'data=' + '{"command":"LOGIN_GAME", "user_name":"' + name + '", "password":"' + psw + '"}';
        Net.postData(data, Net.onReceiveUserLogin);	
    }
    public static onReceiveUserLogin(event:egret.Event) {
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse( data.toString() )

        //console.log( "onReceiveUserLogin", data.toString() )

        var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIBaseLoadingView;
		if (deal_data) {
			current_layer.finishPlayerLogin(m.result, m.data);
		}
    }

    public static registerUserID(name:string, psw:string) {
    	var uuid = Utils.getUUID();
        // {"command":"REGISTERBIND"}
		var data = 'data=' + '{"command":"REGISTERBIND", "uuid":"' + uuid + '", "user_name":"' + name + '", "password":"' + psw + '"}';
        Net.postData(data, Net.onReceiveRegisterUserID);	
    }
    public static onReceiveRegisterUserID(event:egret.Event) {
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse( data.toString() )

        //console.log( "onReceiveRegisterUserID", data.toString() )

        var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHomeView;
		if (deal_data) {
			current_layer.finishUserRegister(m.result, m.data);
		}
    }

    public static registerUser(name:string, psw:string) {
        // {"command":"REGISTER"}
		var data = 'data=' + '{"command":"REGISTER", "user_name":"' + name + '", "password":"' + psw + '"}';
        Net.postData(data, Net.onReceiveRegisterUser);	
    }
    public static onReceiveRegisterUser(event:egret.Event) {
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse( data.toString() )

        //console.log( "onReceiveRegisterUser", data.toString() )

        var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIBaseLoadingView;
		if (deal_data) {
			current_layer.finishUserRegister(m.result, m.data);
		}
    }

    public static quickRegisterUser() {
        // {"command":"QUICK_REGISTER"}
		var data = 'data=' + '{"command":"QUICK_REGISTER"}';
        Net.postData(data, Net.onReceiveQuickRegisterUser);	
    }
    public static onReceiveQuickRegisterUser(event:egret.Event) {
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse( data.toString() )

        //console.log( "onReceiveQuickRegisterUser", data.toString() )

        var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIBaseLoadingView;
		if (deal_data) {
			current_layer.finishUserQuickRegister(m.result, m.data);
		}
    }

    public static getServerList() {
        //console.log("getServerList()");

        var s = Utils.getUUID();
        Net.postData('data=' + '{"uuid":"' + s + '", "command":"GET_SERVER_LIST"}', Net.onReceiveServerList);	
    }
    private static onReceiveServerList(event:egret.Event) {
        var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse( data.toString() )

        //console.log( "onReceiveServerList", data.toString() )

        if ( m.result != 0 ) {
            var current_layer = G.main_director.current_layer;
			var deal_data = current_layer instanceof UIBaseLoadingView;
			if (deal_data) {
				current_layer.finishGetServerList(m.result);
			}

            return
        }
        
        //                           id        ip          port  status         a_id num
        //{"data": {"server_list": {"34": ["42.62.77.137", 8101, 0, "145CMB_APP", 0, 0]}}, "result": 0}
        //console.log( "onReceiveServerList", data.toString() )

        // Load server list.
        Net.server_list = [];
        Net.current_server_index = 0;
        Logic.isBind = m.is_quick_player;
        var server_list_datas = m.data.server_list
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

			//console.log("server_data: ", server_data);
		}
        
        var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIBaseLoadingView;
		if (deal_data) {
			current_layer.finishGetServerList(m.result);
		}
    }

    // ----------------------- Post datas to logic server -----------------------------
    public static postDataToLogicServer( data, listener=null ) {
    	if (Net.current_server_index >= Net.server_list.length) {
    		console.log("尚未连接WAS!!!");
    		return;
    	}

    	var server_datas = Net.server_list[Net.current_server_index];

        var url:string = "http://" + server_datas.ip + ":" + server_datas.port + "/";
        var loader:egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        if ( listener ) {
            loader.addEventListener(egret.Event.COMPLETE, listener, this);
        }
        var request:egret.URLRequest = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;

        request.data = new egret.URLVariables( data )
        loader.load(request);
    }

	public static getPlayerIdList() {
		var uuid = Utils.getUUID();

		// {"command":"LOGIN_GAME", "uuid":"uuid123456"}
		var data = 'data=' + '{"command":"LOGIN_GAME", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.receiveGetPlayerIdList);
	}
	public static receiveGetPlayerIdList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var msg = JSON.parse(data.toString())

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
	}

	public static createPlayer(name:string, knight_type:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl1234567","command":"CREATE_PLAYER","knight_type":1,"knight_name":"ypl"}
		var data = 'data=' + '{"command":"CREATE_PLAYER", "uuid":"' + uuid + '", "knight_type":' + knight_type + ', "knight_name":"' + name + '"}'
        Net.postDataToLogicServer(data, Net.receiveCreatePlayer);
	}
	public static receiveCreatePlayer(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("CREATE_PLAYER result:", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UICreateKnightView;
		if (deal_data) {
			current_layer.finishCreateKnight(m.result, m.data);
		}
	}

	public static choosePlayer(index:number) {
		var uuid = Utils.getUUID();
		var player_data = Logic.player_datas[index];

		// {"uuid":"ypl1234567","command":"CHOOSE_PLAYER","player_id":1}
		var data = 'data=' + '{"command":"CHOOSE_PLAYER", "uuid":"' + uuid + '", "player_id":' + player_data.player_id + '}'
        Net.postDataToLogicServer(data, Net.receiveChoosePlayer);
	}
	public static receiveChoosePlayer(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("CHOOSE_PLAYER result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UISelectKnightView;
		if (deal_data) {
			current_layer.finishChooseKnight(m.result, m.data, m.guild_id, m.guild_name);
		}
	}

	public static saveGuideFlag() {
		var uuid = Utils.getUUID();
		var flag = Logic.guide_flag;

		// {"uuid":"ypl1234567","command":"SAVE_GUIDE_FLAG","guide_flag":1}
		var data = 'data=' + '{"command":"SAVE_GUIDE_FLAG", "uuid":"' + uuid + '", "guide_flag":' + flag + '}'
        Net.postDataToLogicServer(data, Net.receiveSaveGuideFlag);
	}
	public static receiveSaveGuideFlag(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("SAVE_GUIDE_FLAG result: ", m);
		
		if (m.result != 0) {
			console.log("Save guide flag error! Error code: " + m.result);
		}
	}

	public static showRecruit() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl1234567","command":"SHOW_RECRUIT"}
		var data = 'data=' + '{"command":"SHOW_RECRUIT", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieShowRecruit);
	}
	public static recevieShowRecruit(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("SHOW_RECRUIT result: ", m);
		
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishShowRecruit(m.result, m.data);
		}
	}

	public static refreshVillageRecruit() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl1234567","command":"REFRESH_VILLAGE_RECRUIT_INFO"}
		var data = 'data=' + '{"command":"REFRESH_VILLAGE_RECRUIT_INFO", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieRefreshVillageRecruit);
	}
	public static recevieRefreshVillageRecruit(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("REFRESH_VILLAGE_RECRUIT_INFO result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishRefreshVillageHire(m.result, m.data, m.money);
		}
	}

	public static hireVillageKnight(hire_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VILLAGE_RECRUIT","recruit_id":0}
		var data = 'data=' + '{"command":"VILLAGE_RECRUIT", "uuid":"' + uuid + '", "recruit_id":' + hire_id + '}'
        Net.postDataToLogicServer(data, Net.recevieHireVillageKnight);
	}
	public static recevieHireVillageKnight(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("VILLAGE_RECRUIT result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishVillageHire(m.result, m.data, m.money);
		}
	}

	public static refreshCityRecruit() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl1234567","command":"SHOW_CITY_RECRUIT_INFO"}
		var data = 'data=' + '{"command":"SHOW_CITY_RECRUIT_INFO", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieRefreshCityRecruit);
	}
	public static recevieRefreshCityRecruit(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("SHOW_CITY_RECRUIT_INFO result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishRefreshCityHire(m.result, m.data, m.money);
		}
	}

	public static refreshCityRecruitByDiamond() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl1234567","command":"REFRESH_CITY_RECRUIT_LUCK"}
		var data = 'data=' + '{"command":"REFRESH_CITY_RECRUIT_LUCK", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieRefreshCityRecruitByDiamond);
	}
	public static recevieRefreshCityRecruitByDiamond(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("REFRESH_CITY_RECRUIT_LUCK result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishRefreshCityHireByDiamond(m.result, m.data, m.diamond);
		}
	}

	public static hireCityKnight(hire_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"CITY_RECRUIT","recruit_id":0}
		var data = 'data=' + '{"command":"CITY_RECRUIT", "uuid":"' + uuid + '", "recruit_id":' + hire_id + '}'
        Net.postDataToLogicServer(data, Net.recevieHireCityKnight);
	}
	public static recevieHireCityKnight(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("CITY_RECRUIT result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishCityHire(m.result, m.data, m.money);
		}
	}

	public static refreshHonorRecruit(index) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl1234567","command":"SHOW_CITY_RECRUIT_INFO"}
		var data = 'data=' + '{"command":"SHOW_HONOR_RECRUIT_INFO", "uuid":"' + uuid + '", "knight_type":' + index + '}'
        Net.postDataToLogicServer(data, Net.recevieRefreshHonorRecruit);
	}
	public static recevieRefreshHonorRecruit(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("SHOW_HONOR_RECRUIT_INFO result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishRefreshHonorHire(m.result, m.data, m.honor);
		}
	}

	public static refreshHonorRecruitByDiamond(index) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl1234567","command":"REFRESH_CITY_RECRUIT_LUCK"}
		var data = 'data=' + '{"command":"REFRESH_HONOR_RECRUIT_LUCK", "uuid":"' + uuid + '", "knight_type":' + index + '}'
        Net.postDataToLogicServer(data, Net.recevieRefreshHonorRecruitByDiamond);
	}
	public static recevieRefreshHonorRecruitByDiamond(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("REFRESH_HONOR_RECRUIT_LUCK result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishRefreshHonorHireByDiamond(m.result, m.data, m.diamond);
		}
	}

	public static hireHonorKnight(hire_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"HONOR_RECRUIT","recruit_id":0}
		var data = 'data=' + '{"command":"HONOR_RECRUIT", "uuid":"' + uuid + '", "recruit_id":' + hire_id + '}'
        Net.postDataToLogicServer(data, Net.recevieHireHonorKnight);
	}
	public static recevieHireHonorKnight(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("HONOR_RECRUIT result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIHireHomeView;
		if (deal_data) {
			current_layer.finishHonorHire(m.result, m.data, m.money);
		}
	}


	public static getMyKnightsList(start_index:number = 0) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"KNIGHT_MANAGE","start_index":0}
		var data = 'data=' + '{"command":"KNIGHT_MANAGE", "uuid":"' + uuid + '", "start_index":' + start_index + '}'
        Net.postDataToLogicServer(data, Net.recevieGetMyKnightsList);
	}
	public static recevieGetMyKnightsList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("KNIGHT_MANAGE result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIMyKnightTeamSetView;
		if (deal_data) {
			current_layer.finishGetMyKnightsList(m.result, m.data, m.count, m.max_count, m.money, m.diamond);
		}
	}

	public static getMyKnightsListForJob(start_index:number = 0) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"KNIGHT_MANAGE","start_index":0}
		var data = 'data=' + '{"command":"KNIGHT_MANAGE", "uuid":"' + uuid + '", "start_index":' + start_index + '}'
        Net.postDataToLogicServer(data, Net.recevieGetMyKnightsListForJob);
	}
	public static recevieGetMyKnightsListForJob(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("KNIGHT_MANAGE result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			if (current_layer.self_knights_dlg != null) {
				current_layer.self_knights_dlg.finishGetMyKnightsList(m.result, m.data);
			}
		}
	}

	public static dismissKnight(knight_id:number = 0) {
		var uuid = Utils.getUUID();

		//{"uuid":"ypl123456","command":"DISMISS","knight_id":0}
		var data = 'data=' + '{"command":"DISMISS", "uuid":"' + uuid + '", "knight_id":' + knight_id + '}'
        Net.postDataToLogicServer(data, Net.recevieDismissKnight);
	}
	public static recevieDismissKnight(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("DISMISS result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIMyKnightTeamSetView;
		if (deal_data) {
			current_layer.finishDismissKnight(m.result);
		}
	}

	public static knightEnterPosition(knight_id:number, position:number) {
		var uuid = Utils.getUUID();

		//{"uuid":"ypl123456","command":"ON_POSITION","knight_id":2,"position":0}
		var data = 'data=' + '{"command":"ON_POSITION", "uuid":"' + uuid + '", "knight_id":' + knight_id + ', "position":' + position + '}'
        Net.postDataToLogicServer(data, Net.recevieKnightEnterPosition);
	}
	public static recevieKnightEnterPosition(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("ON_POSITION result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIMyKnightTeamSetView;
		if (deal_data) {
			current_layer.finishKnightEnterPosition(m.result);
		}
	}

	public static knightExitPosition(knight_id:number) {
		var uuid = Utils.getUUID();

		//{"uuid":"ypl123456","command":"OFF_POSITION","knight_id":2}
		var data = 'data=' + '{"command":"OFF_POSITION", "uuid":"' + uuid + '", "knight_id":' + knight_id + '}'
        Net.postDataToLogicServer(data, Net.recevieKnightExitPosition);
	}
	public static recevieKnightExitPosition(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("OFF_POSITION result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIMyKnightTeamSetView;
		if (deal_data) {
			current_layer.finishKnightExitPosition(m.result);
		}
	}

	public static knightSwitchPosition(knight_id:number, position:number) {
		var uuid = Utils.getUUID();

		//{"uuid":"ypl123456","command":"ON_POSITION","knight_id":2,"position":0}
		var data = 'data=' + '{"command":"ON_POSITION", "uuid":"' + uuid + '", "knight_id":' + knight_id + ', "position":' + position + '}'
        Net.postDataToLogicServer(data, Net.recevieKnightSwitchPosition);
	}
	public static recevieKnightSwitchPosition(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

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
	}

	public static getOnPositionKnightsList() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GET_ON_POSITIONS"}
		var data = 'data=' + '{"command":"GET_ON_POSITIONS", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetOnPositionKnightsList);
	}
	public static recevieGetOnPositionKnightsList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
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
	}

	public static getPlayerStaminaInfo() {
		var uuid = Utils.getUUID();
		
		// {"uuid":"ypl123456","command":"REFRESH_STAMINA"}
		var data = 'data=' + '{"command":"REFRESH_STAMINA", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetPlayerStaminaInfo);
	}
	public static recevieGetPlayerStaminaInfo(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
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
	}

	public static challengeCity(area_id:number, city_index:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"EXPEDITION", "expedition_type":1, "area_id":1, "city_index":1}
		var data = 'data=' + '{"command":"EXPEDITION", "uuid":"' + uuid + '", "expedition_type":1, "area_id":' + area_id + ', "city_index":' + city_index + '}'
        Net.postDataToLogicServer(data, Net.recevieChallengeCity);
	}
	public static recevieChallengeCity(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("EXPEDITION result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof QuestLayer;
		if (deal_data && current_layer.city_detail_view != null) {
			current_layer.city_detail_view.finishChallengeCity(m.result, m.data);
		}
	}

	public static challengeSpecialCity(area_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"EXPEDITION", "expedition_type":0, "area_id":1, "city_index":-1}
		var data = 'data=' + '{"command":"EXPEDITION", "uuid":"' + uuid + '", "expedition_type":0, "area_id":' + area_id + ', "city_index":' + -1 + '}'
        Net.postDataToLogicServer(data, Net.recevieChallengeSpecialCity);
	}
	public static recevieChallengeSpecialCity(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("EXPEDITION result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof QuestLayer;
		if (deal_data && current_layer.special_city_detail_view != null) {
			current_layer.special_city_detail_view.finishChallengeSpecialCity(m.result, m.data);
		}
	}

	public static collectCityMoney(area_id:number, city_index:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"EXPEDITION_COLLECT_MONEY", "area_id":1, "city_index":1}
		var data = 'data=' + '{"command":"EXPEDITION_COLLECT_MONEY", "uuid":"' + uuid + '", "area_id":' + area_id + ', "city_index":' + city_index + '}'
        Net.postDataToLogicServer(data, Net.recevieCollectCityMoney);
	}
	public static recevieCollectCityMoney(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("EXPEDITION_COLLECT_MONEY result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof QuestLayer;
		if (deal_data) {
			current_layer.finishCollectCityMoney(m.result, m.data);
		}
	}

	public static getWarReportList() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_MILITARIES"}
		var data = 'data=' + '{"command":"VIEW_MILITARIES", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetWarReportList);
	}
	public static recevieGetWarReportList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VIEW_MILITARIES result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof QuestLayer;
		if (deal_data) {
			current_layer.finishGetWarReportList(m.result, m.data);
		}
	}

	public static getMilitaryAward(report_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"COMPLETE_MILITARIES", "military_id":1}
		var data = 'data=' + '{"command":"COMPLETE_MILITARIES", "uuid":"' + uuid + '", "military_id":' + report_id + '}'
        Net.postDataToLogicServer(data, Net.recevieGetMilitaryAward);
	}
	public static recevieGetMilitaryAward(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("COMPLETE_MILITARIES result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof QuestLayer;
		if (deal_data) {
			if (current_layer.war_report_view != null) {
				current_layer.war_report_view.finishGetWarReportAward(m.result, m.data);
			}
		}
	}

	public static uploadQuestBattleLose() {
		var uuid = Utils.getUUID();

		var type = QuestLayer.last_quest_type;
		var area_id = QuestLayer.last_area_id;
		var city_index = QuestLayer.last_city_index;

		// {"uuid":"ypl123456","command":"EXPEDITION_SETTLEMENT", "expedition_type":1, "area_id":1, "city_index":1,"result":-1}
		var data = 'data=' + '{"command":"EXPEDITION_SETTLEMENT", "uuid":"' + uuid + '", "expedition_type":' + type + ', "area_id":' + area_id + ', "city_index":' + city_index + ', "result":-1}'
        Net.postDataToLogicServer(data, Net.recevieUploadQuestBattleLose);
	}
	public static recevieUploadQuestBattleLose(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("EXPEDITION_SETTLEMENT result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof BattleLayer;
		if (deal_data && current_layer.battle_result_dialog != null) {
			current_layer.battle_result_dialog.finishUploadBattleLoseInfo(m.result);
		}
	}

	public static uploadQuestBattleWin() {
		var uuid = Utils.getUUID();

		var type = QuestLayer.last_quest_type;
		var area_id = QuestLayer.last_area_id;
		var city_index = QuestLayer.last_city_index;

		// {"uuid":"ypl123456","command":"EXPEDITION_SETTLEMENT", "expedition_type":1, "area_id":1, "city_index":1,"result":1}
		var data = 'data=' + '{"command":"EXPEDITION_SETTLEMENT", "uuid":"' + uuid + '", "expedition_type":' + type + ', "area_id":' + area_id + ', "city_index":' + city_index + ', "result":1}'
        Net.postDataToLogicServer(data, Net.recevieUploadQuestBattleWin);
	}
	public static recevieUploadQuestBattleWin(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("EXPEDITION_SETTLEMENT result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof BattleLayer;
		if (deal_data && current_layer.battle_result_dialog != null) {
			current_layer.battle_result_dialog.finishUploadBattleWinInfo(m.result, m.data);
		}
	}

	public static getArenaBaseInfo() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GET_ARENA_INFO"}
		var data = 'data=' + '{"command":"GET_ARENA_INFO", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetArenaBaseInfo);
	}
	public static recevieGetArenaBaseInfo(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("GET_ARENA_INFO result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIAreaHomeView;
		if (deal_data) {
			current_layer.finishGetPlayerAreaBaseInfo(m.result, m.data);
		}
	}

	public static getArenaRankInfo(rank_index:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GET_ARENA_RANK_INFO","rank_index":0}
		var data = 'data=' + '{"command":"GET_ARENA_RANK_INFO", "uuid":"' + uuid + '", "rank_index":' + rank_index + '}'
        Net.postDataToLogicServer(data, Net.recevieGetArenaRankInfo);
	}
	public static recevieGetArenaRankInfo(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("GET_ARENA_RANK_INFO result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIAreaHomeView;
		if (deal_data) {
			current_layer.finishGetArenaRankInfo(m.result, m.data);
		}
	}

	public static getArenaTenRankInfo() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GET_ARENA_RANK_INFO","rank_index":0}
		var data = 'data=' + '{"command":"GET_ARENA_CHALLENGER", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetArenaTenRankInfo);
	}
	public static recevieGetArenaTenRankInfo(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("GET_ARENA_RANK_INFO result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIAreaHomeView;
		if (deal_data) {
			current_layer.finishGetArenaTenRankInfo(m.result, m.data, m.dan_name);
		}
	}

	public static matchArenaPlayer() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"ARENA_MATCH"}
		var data = 'data=' + '{"command":"ARENA_MATCH", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieMatchArenaPlayer);
	}
	public static recevieMatchArenaPlayer(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("ARENA_MATCH result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIAreaHomeView;
		if (deal_data) {
			current_layer.finishMatchArenaPlayer(m.result, m.side, m.isNpc, m.data);
		}
	}

	public static uploadArenaBattleLose() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"ARENA_FIGHT","result":-1}
		var data = 'data=' + '{"command":"ARENA_FIGHT", "uuid":"' + uuid + '", "result":-1}'
        Net.postDataToLogicServer(data, Net.recevieUploadArenaBattleLose);
	}
	public static recevieUploadArenaBattleLose(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("ARENA_FIGHT result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof BattleLayer;
		if (deal_data && current_layer.battle_result_dialog != null) {
			current_layer.battle_result_dialog.finishUploadArenaBattleLoseInfo(m.result);
		}
	}

	public static uploadArenaBattleWin() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"ARENA_FIGHT","result":1}
		var data = 'data=' + '{"command":"ARENA_FIGHT", "uuid":"' + uuid + '", "result":1}'
        Net.postDataToLogicServer(data, Net.recevieUploadArenaBattleWin);
	}
	public static recevieUploadArenaBattleWin(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("ARENA_FIGHT result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof BattleLayer;
		if (deal_data && current_layer.battle_result_dialog != null) {
			current_layer.battle_result_dialog.finishUploadArenaBattleWinInfo(m.result, m.data);
		}
	}

	public static uploadJobBattleWin() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"SETTLEMENT_TRANSFER_INSTANCE","result":1}
		var data = 'data=' + '{"command":"SETTLEMENT_TRANSFER_INSTANCE", "uuid":"' + uuid + '", "result":1}'
        Net.postDataToLogicServer(data, Net.recevieUploadJobBattleWin);
	}
	public static recevieUploadJobBattleWin(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("SETTLEMENT_TRANSFER_INSTANCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof BattleLayer;
		if (deal_data && current_layer.battle_result_dialog != null) {
			current_layer.battle_result_dialog.finishUploadJobBattleWinInfo(m.result, m.data);
		}
	}

	public static uploadJobBattleLose() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"SETTLEMENT_TRANSFER_INSTANCE","result":-1}
		var data = 'data=' + '{"command":"SETTLEMENT_TRANSFER_INSTANCE", "uuid":"' + uuid + '", "result":-1}'
        Net.postDataToLogicServer(data, Net.recevieUploadJobBattleLose);
	}
	public static recevieUploadJobBattleLose(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("SETTLEMENT_TRANSFER_INSTANCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof BattleLayer;
		if (deal_data && current_layer.battle_result_dialog != null) {
			current_layer.battle_result_dialog.finishUploadJobBattleLoseInfo(m.result, m.data);
		}
	}


	public static sendCreateGuild(guild_name:string, flag_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"CREATE_GUILD","guild_name":"123"}
		var data = 'data=' + '{"command":"CREATE_GUILD", "uuid":"' + uuid + '", "guild_name":"' + guild_name + '", "flag_id":' + flag_id + '}'
        Net.postDataToLogicServer(data, Net.recevieSendCreateGuild);
	}
	public static recevieSendCreateGuild(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("CREATE_GUILD result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishCreateGuild(m.result);
		}
	}

	public static increaseKnightsPosition() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"BUY_POSITION"}
		var data = 'data=' + '{"command":"BUY_POSITION", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieIncreaseKnightsPosition);
	}
	public static recevieIncreaseKnightsPosition(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
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
	}

	public static getGuildsList(start_index:number = 0) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_GUILDS","start_index":0}
		var data = 'data=' + '{"command":"VIEW_GUILDS", "uuid":"' + uuid + '", "start_index":' + start_index + '}'
        Net.postDataToLogicServer(data, Net.recevieGetGuildsList);
	}
	public static recevieGetGuildsList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("VIEW_GUILDS result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishGetGuildsList(m.result, m.data);
		}
	}

	public static searchGuild(name:string) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"SEARCH_GUILDS","guild_name":"0"}
		var data = 'data=' + '{"command":"SEARCH_GUILDS", "uuid":"' + uuid + '", "guild_name":"' + name + '"}'
        Net.postDataToLogicServer(data, Net.recevieSearchGuild);
	}
	public static recevieSearchGuild(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("SEARCH_GUILDS result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishSearchGuild(m.result, m.data);
		}
	}

	public static applyGuild(guild_id) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"APPLY_GUILD","guild_id":0}
		var data = 'data=' + '{"command":"APPLY_GUILD", "uuid":"' + uuid + '", "guild_id":' + guild_id + '}'
        Net.postDataToLogicServer(data, Net.recevieApplyGuild);
	}
	public static recevieApplyGuild(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("APPLY_GUILD result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishApplyGuild(m.result);
		}
	}

	public static cancelApplyGuild(guild_id) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"CANCEL_APPLY_GUILD","guild_id":0}
		var data = 'data=' + '{"command":"CANCEL_APPLY_GUILD", "uuid":"' + uuid + '", "guild_id":' + guild_id + '}'
        Net.postDataToLogicServer(data, Net.recevieCancelApplyGuild);
	}
	public static recevieCancelApplyGuild(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("CANCEL_APPLY_GUILD result: ", m);
		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishCancelApplyGuild(m.result);
		}
	}

	public static getSelfGuildInfo() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_GUILD_INFO"}
		var data = 'data=' + '{"command":"VIEW_GUILD_INFO", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetSelfGuildInfo);
	}
	public static recevieGetSelfGuildInfo(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VIEW_GUILD_INFO result: ", m);

		var current_layer = G.main_director.current_layer;
		if (current_layer instanceof UIGuildHomeView) {
			current_layer.finishGetSelfGuildInfo(m.result, m.data);
		}
		else if (current_layer instanceof UIHomeView) {
			current_layer.finishGetSelfGuildInfo(m.result, m.data);
		}
	}

	public static setGuildNotice(notice:string) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"CHANGE_GUILD_ANNOUNCE","new_announce":"0"}
		var data = 'data=' + '{"command":"CHANGE_GUILD_ANNOUNCE", "uuid":"' + uuid + '", "new_announce":"' + notice + '"}'
        Net.postDataToLogicServer(data, Net.recevieSetGuildNotice);
	}
	public static recevieSetGuildNotice(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("CHANGE_GUILD_ANNOUNCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishSetGuildNotice(m.result);
		}
	}

	public static getAppliesList(start_index:number = 0) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_APPLIES","start_index":0}
		var data = 'data=' + '{"command":"VIEW_APPLIES", "uuid":"' + uuid + '", "start_index":' + start_index + '}'
        Net.postDataToLogicServer(data, Net.recevieGetAppliesList);
	}
	public static recevieGetAppliesList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("VIEW_APPLIES result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishGetAppliesList(m.result, m.data);
		}
	}

	public static acceptApply(player_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"ACCEPT_APPLY","apply_player_id":0}
		var data = 'data=' + '{"command":"ACCEPT_APPLY", "uuid":"' + uuid + '", "apply_player_id":' + player_id + '}'
        Net.postDataToLogicServer(data, Net.recevieAcceptApply);
	}
	public static recevieAcceptApply(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("ACCEPT_APPLY result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishAcceptApply(m.result);
		}
	}

	public static rejectApply(player_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"REJECT_APPLY","apply_player_id":0}
		var data = 'data=' + '{"command":"REJECT_APPLY", "uuid":"' + uuid + '", "apply_player_id":' + player_id + '}'
        Net.postDataToLogicServer(data, Net.recevieRejectApply);
	}
	public static recevieRejectApply(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("REJECT_APPLY result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishRejectApply(m.result);
		}
	}

	public static quitGuild() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"QUIT_GUILD"}
		var data = 'data=' + '{"command":"QUIT_GUILD", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieQuitGuild);
	}
	public static recevieQuitGuild(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("QUIT_GUILD result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishQuitGuild(m.result);
		}
	}

	public static dismissGuild() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"DISMISS_GUILD"}
		var data = 'data=' + '{"command":"DISMISS_GUILD", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieDismissGuild);
	}
	public static recevieDismissGuild(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("DISMISS_GUILD result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishDismissGuild(m.result);
		}
	}

	public static getSelfGuildManagerInfo() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GUILD_MANAGE"}
		var data = 'data=' + '{"command":"GUILD_MANAGE", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetSelfGuildManagerInfo);
	}
	public static recevieGetSelfGuildManagerInfo(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("GUILD_MANAGE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishGetGuildCreateInfo(m.result, m.data);
		}
	}

	public static getGuildMembersList(start_index:number = 0) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_GUILD_MEMBERS","start_index":0}
		var data = 'data=' + '{"command":"VIEW_GUILD_MEMBERS", "uuid":"' + uuid + '", "start_index":' + start_index + '}'
        Net.postDataToLogicServer(data, Net.recevieGetGuildMembersList);
	}
	public static recevieGetGuildMembersList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VIEW_GUILD_MEMBERS result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishGetGuildMembersList(m.result, m.data);
		}
	}

	public static kickGuildMember(player_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"KICK_GUILD_MEMBER","kick_player_id":0}
		var data = 'data=' + '{"command":"KICK_GUILD_MEMBER", "uuid":"' + uuid + '", "kick_player_id":' + player_id + '}'
        Net.postDataToLogicServer(data, Net.recevieKickGuildMember);
	}
	public static recevieKickGuildMember(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("KICK_GUILD_MEMBER result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishKickGuildMember(m.result);
		}
	}

	public static getGuildDonationList(start_index:number = 0) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_GUILD_DONATES","start_index":0}
		var data = 'data=' + '{"command":"VIEW_GUILD_DONATES", "uuid":"' + uuid + '", "start_index":' + start_index + '}'
        Net.postDataToLogicServer(data, Net.recevieGetGuildDonationList);
	}
	public static recevieGetGuildDonationList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VIEW_GUILD_DONATES result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishGetGuildDonationList(m.result, m.data, m.extra_data);
		}
	}

	public static donateForGuild(money:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GUILD_DONATE"}
		var data = 'data=' + '{"command":"GUILD_DONATE", "uuid":"' + uuid + '", "money":' + money + '}'
        Net.postDataToLogicServer(data, Net.recevieDonateForGuild);
	}
	public static recevieDonateForGuild(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("GUILD_DONATE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishDonateForGuild(m.result, m.data, m.extra_data, m.money);
		}
	}

	public static setGuildChairman(player_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"TRANSFER_GUILD","accept_player_id":0}
		var data = 'data=' + '{"command":"TRANSFER_GUILD", "uuid":"' + uuid + '", "accept_player_id":' + player_id + '}'
        Net.postDataToLogicServer(data, Net.recevieSetGuildChairman);
	}
	public static recevieSetGuildChairman(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("TRANSFER_GUILD result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIGuildHomeView;
		if (deal_data) {
			current_layer.finishSetGuildChairman(m.result);
		}
	}

	public static getAllCityStatus(area_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_EXPEDITIONS","area_id":0}
		var data = 'data=' + '{"command":"VIEW_EXPEDITIONS", "uuid":"' + uuid + '", "area_id":' + area_id + '}'
        Net.postDataToLogicServer(data, Net.recevieGetAllCityStatus);
	}
	public static recevieGetAllCityStatus(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VIEW_EXPEDITIONS result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof QuestLayer;
		if (deal_data) {
			current_layer.finishGetAllCityStatus(m.result, m.area_id, m.data);
		}
	}

	public static getPlayerKnightsList(player_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GET_OTHER_ON_POSITIONS", "other_id":player_id}
		var data = 'data=' + '{"command":"GET_OTHER_ON_POSITIONS", "uuid":"' + uuid + '", "other_id":' + player_id + '}'
        Net.postDataToLogicServer(data, Net.recevieGetPlayerKnightsList);
	}
	public static recevieGetPlayerKnightsList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("GET_OTHER_ON_POSITIONS result: ", m);

		var current_layer = G.main_director.current_layer;
		if (current_layer.player_datail_dlg != null) {
			var deal_data = current_layer.player_datail_dlg instanceof UIPlayerDetailDialog;
			if (deal_data) {
				current_layer.player_datail_dlg.finishGetPlayerKnightsList(m.result, m.data);
			}
		}
	}

	public static getShopMoneyList() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VISIT_SHOP", "shop_type":2}
		var data = 'data=' + '{"command":"VISIT_SHOP", "uuid":"' + uuid + '", "shop_type":' + 2 + '}'
        Net.postDataToLogicServer(data, Net.recevieGetShopMoneyList);
	}
	public static recevieGetShopMoneyList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VISIT_SHOP result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishGetShopMoneyList(m.result, m.data);
            }
        }
	}

	public static getShopDiamondList() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VISIT_SHOP", "shop_type":3}
		var data = 'data=' + '{"command":"VISIT_SHOP", "uuid":"' + uuid + '", "shop_type":' + 3 + '}'
        Net.postDataToLogicServer(data, Net.recevieGetShopDiamondList);
	}
	public static recevieGetShopDiamondList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VISIT_SHOP result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishGetShopDiamondList(m.result, m.data);
            }
        }
	}

	public static getShopStaminaList() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VISIT_SHOP", "shop_type":1}
		var data = 'data=' + '{"command":"VISIT_SHOP", "uuid":"' + uuid + '", "shop_type":' + 1 + '}'
        Net.postDataToLogicServer(data, Net.recevieGetShopStaminaList);
	}
	public static recevieGetShopStaminaList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VISIT_SHOP result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishGetShopStaminaList(m.result, m.data);
            }
        }
	}

	public static getShopCardsList() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VISIT_JOB_CARD_SHOP"}
		var data = 'data=' + '{"command":"VISIT_JOB_CARD_SHOP", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetShopCardsList);
	}
	public static recevieGetShopCardsList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VISIT_JOB_CARD_SHOP result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishGetShopCardsList(m.result, m.data);
            }
        }
	}

	public static getShopTicketsList() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VISIT_SHOP", "shop_type":4}
		var data = 'data=' + '{"command":"VISIT_SHOP", "uuid":"' + uuid + '", "shop_type":' + 4 + '}'
        Net.postDataToLogicServer(data, Net.recevieGetShopTicketsList);
	}
	public static recevieGetShopTicketsList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("VISIT_SHOP result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishGetShopTicketsList(m.result, m.data);
            }
        }
	}

	public static buyShopMoney(index:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"SHOP_BUY", "shop_type":2, "shop_index":index}
		var data = 'data=' + '{"command":"SHOP_BUY", "uuid":"' + uuid + '", "shop_type":2, "shop_index":' + index + '}'
        Net.postDataToLogicServer(data, Net.recevieBuyShopMoney);
	}
	public static recevieBuyShopMoney(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("SHOP_BUY result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishBuyShopMoney(m.result, m.data);
            }
        }
	}

	public static buyShopStamina(index:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"SHOP_BUY", "shop_type":1, "shop_index":index}
		var data = 'data=' + '{"command":"SHOP_BUY", "uuid":"' + uuid + '", "shop_type":1, "shop_index":' + index + '}'
        Net.postDataToLogicServer(data, Net.recevieBuyShopStamina);
	}
	public static recevieBuyShopStamina(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("SHOP_BUY result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishBuyShopStamina(m.result, m.data);
            }
        }
	}

	public static buyShopTicket(index:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"SHOP_BUY", "shop_type":4, "shop_index":index}
		var data = 'data=' + '{"command":"SHOP_BUY", "uuid":"' + uuid + '", "shop_type":4, "shop_index":' + index + '}'
        Net.postDataToLogicServer(data, Net.recevieBuyShopTicket);
	}
	public static recevieBuyShopTicket(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("SHOP_BUY result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishBuyShopTicket(m.result, m.data);
            }
        }
	}

	public static buyShopCard(card_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"BUY_JOB_CARD", "card_id":card_id}
		var data = 'data=' + '{"command":"BUY_JOB_CARD", "uuid":"' + uuid + '", "card_id":' + card_id + '}'
        Net.postDataToLogicServer(data, Net.recevieBuyShopCard);
	}
	public static recevieBuyShopCard(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("BUY_JOB_CARD result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishBuyShopCard(m.result, m.data);
            }
        }
	}

	public static refreshShopCard() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"REFRES_JOB_CARD"}
		var data = 'data=' + '{"command":"REFRES_JOB_CARD", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieRefreshShopCard);
	}
	public static recevieRefreshShopCard(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString());

		//console.log("REFRES_JOB_CARD result: ", m);

		var current_layer = G.main_director.current_layer;
        if (current_layer.shop_dlg != null) {
        	var deal_data = current_layer.shop_dlg instanceof UIShopDialog;
            if (deal_data) {
            	current_layer.shop_dlg.finishRefreshShopCard(m.result, m.data);
            }
        }
	}

	public static getJobCardsList(start_index:number = 0) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_JOB_CARDS","start_index":0}
		var data = 'data=' + '{"command":"VIEW_JOB_CARDS", "uuid":"' + uuid + '", "start_index":' + start_index + '}'
        Net.postDataToLogicServer(data, Net.recevieGetJobCardsList);
	}
	public static recevieGetJobCardsList(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("VIEW_JOB_CARDS result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			if (current_layer.job_cards_dlg != null) {
				current_layer.job_cards_dlg.finishGetJobCardsList(m.result, m.data);
			}
		}
	}

	public static sellJobCard(card_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"SELL_JOB_CARD","start_index":0}
		var data = 'data=' + '{"command":"SELL_JOB_CARD", "uuid":"' + uuid + '", "card_id":' + card_id + '}'
        Net.postDataToLogicServer(data, Net.recevieSellJobCard);
	}
	public static recevieSellJobCard(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("SELL_JOB_CARD result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			if (current_layer.job_cards_dlg != null) {
				current_layer.job_cards_dlg.finishSellJobCard(m.result, m.data);
			}
		}
	}

	public static doChangeKnightJob(knight_id:number, card_id:number, use_type:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"CHANGE_JOB","knight_id":0,"card_id":0,"use_type":0}
		var data = 'data=' + '{"command":"CHANGE_JOB", "uuid":"' + uuid + '", "knight_id":' + knight_id + ', "card_id":' + card_id + ', "use_type":' + use_type + '}'
        Net.postDataToLogicServer(data, Net.recevieDoChangeJobCallback);
	}
	public static recevieDoChangeJobCallback(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("CHANGE_JOB result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			current_layer.finishDoChangeJob(m.result, m.data);
		}
	}

	public static refreshChatMessage(message_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_GUILD_CHAT","index":0}
		var data = 'data=' + '{"command":"VIEW_GUILD_CHAT", "uuid":"' + uuid + '", "message_id":' + message_id + '}';
        Net.postDataToLogicServer(data, Net.recevieRefreshChatMessage);
	}
	public static recevieRefreshChatMessage(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("VIEW_GUILD_CHAT result: ", m);

		if (m.result == 0) {
			Logic.getMessageDatas(m.data);
		}
	}

	public static getFirstMag(messageID) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"VIEW_GUILD_CHAT","index":0}
		var data = 'data=' + '{"command":"WORLD_NOTICE", "uuid":"' + uuid + '", "messageID":"' + messageID + '"}'
        Net.postDataToLogicServer(data, Net.recevieFirstMag);
	}
	public static recevieFirstMag(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("VIEW_GUILD_CHAT result: ", m);
		var current_layer = G.main_director.current_layer;
		if (current_layer instanceof UIHomeView) {
			current_layer.finishGetFirst(m.result, m.data);
		}
	}

	public static sendChatMessage(message:string) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GUILD_CHAT","message":"message"}
		var data = 'data=' + '{"command":"GUILD_CHAT", "uuid":"' + uuid + '", "message":"' + message + '"}';
        Net.postDataToLogicServer(data, Net.recevieSendChatMessage);
	}
	public static recevieSendChatMessage(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("GUILD_CHAT result: ", m);

		var current_layer = G.main_director.current_layer;
		if (current_layer.chat_dlg != null) {
			current_layer.chat_dlg.finishSendMessage(m.result);
		}
	}

	public static refreshJobTeamStatus() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"UPDATE_TRANSFER_INSTANCE_STATUS"}
		var data = 'data=' + '{"command":"UPDATE_TRANSFER_INSTANCE_STATUS", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieRefreshJobTeamStatus);
	}
	public static recevieRefreshJobTeamStatus(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("UPDATE_TRANSFER_INSTANCE_STATUS result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			current_layer.finishRefreshJobTeamStatus(m.result, m.data, m.status);
		}
	}

	public static createJobTeam() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"CREATE_TRANSFER_INSTANCE"}
		var data = 'data=' + '{"command":"CREATE_TRANSFER_INSTANCE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieCreateJobTeam);
	}
	public static recevieCreateJobTeam(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("CREATE_TRANSFER_INSTANCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			current_layer.finishCreateJobTeam(m.result);
		}
	}

	public static dismissJobTeam() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"DISMISS_TRANSFER_INSTANCE"}
		var data = 'data=' + '{"command":"DISMISS_TRANSFER_INSTANCE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieDismissJobTeam);
	}
	public static recevieDismissJobTeam(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("DISMISS_TRANSFER_INSTANCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			current_layer.finishDismissJobTeam(m.result);
		}
	}

	public static exitJobTeam() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"EXIT_TRANSFER_INSTANCE"}
		var data = 'data=' + '{"command":"EXIT_TRANSFER_INSTANCE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieExitJobTeam);
	}
	public static recevieExitJobTeam(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("EXIT_TRANSFER_INSTANCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			current_layer.finishExitJobTeam(m.result);
		}
	}

	public static kickJobTeamMember(member_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"KICK_TRANSFER_INSTANCE"}
		var data = 'data=' + '{"command":"KICK_TRANSFER_INSTANCE", "uuid":"' + uuid + '", "member_id":' + member_id + '}';
        Net.postDataToLogicServer(data, Net.recevieKickJobTeamMember);
	}
	public static recevieKickJobTeamMember(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("KICK_TRANSFER_INSTANCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			current_layer.finishKickTeamMember(m.result);
		}
	}

	public static joinJobTeam(transfer_id:number) {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"JOIN_TRANSFER_INSTANCE"}
		var data = 'data=' + '{"command":"JOIN_TRANSFER_INSTANCE", "uuid":"' + uuid + '", "transfer_id":' + transfer_id + '}';
        Net.postDataToLogicServer(data, Net.recevieJoinJobTeam);
	}
	public static recevieJoinJobTeam(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("JOIN_TRANSFER_INSTANCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			current_layer.finishJoinJobTeam(m.result);
		}
	}

	public static startJobTeamBattle() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"START_TRANSFER_INSTANCE"}
		var data = 'data=' + '{"command":"START_TRANSFER_INSTANCE", "uuid":"' + uuid + '"}';
        Net.postDataToLogicServer(data, Net.recevieStartJobTeamBattle);
	}
	public static recevieStartJobTeamBattle(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
        var m = JSON.parse(data.toString())

		//console.log("START_TRANSFER_INSTANCE result: ", m);

		var current_layer = G.main_director.current_layer;
		var deal_data = current_layer instanceof UIJobHomeView;
		if (deal_data) {
			current_layer.finishStartJobBattle(m.result);
		}
	}

	public static getSystemStatus() {
		var uuid = Utils.getUUID();

		// {"uuid":"ypl123456","command":"GET_OPEN_LIMIT"}
		var data = 'data=' + '{"command":"GET_OPEN_LIMIT", "uuid":"' + uuid + '"}'
        Net.postDataToLogicServer(data, Net.recevieGetSystemStatus);
	}
	public static recevieGetSystemStatus(event:egret.Event) {
		var loader:egret.URLLoader = <egret.URLLoader> event.target;
        var data:egret.URLVariables = loader.data;
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
	}


}

