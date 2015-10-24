var GlobalData = (function () {
    function GlobalData() {
    }
    GlobalData.isLightBackground = function (step) {
        var l_black = [1];
        var mbLine = Utils.getLine("step_list", step);
        var background = mbLine[step_list_background];
        for (var i = 0; i < l_black.length; ++i) {
            if (l_black[i] == background) {
                return true;
            }
        }
        return false;
    };
    GlobalData.onJavaEvent = function (message) {
        console.log("----------------onJavaEvent " + message);
        if (message == "login$0") {
            G.base_loading_ui.onLoadingEnd();
        }
        else if (message == "resume") {
            if (GameView.instance() != null) {
                Net.getOfflineMoney();
            }
        }
        else if (message.search("pay") == 0) {
            var l = message.split("$");
            if (l[1] != "0") {
                return;
            }
            var diamond_index = G.cur_buying_diamonds_index;
            var diamond = G.buy_diamonds_num[diamond_index];
            if (diamond == null) {
                return;
            }
            Logic.addDiamond(diamond);
            G.cur_buying_diamonds_index = null;
            GameView.instance().refreshAllAboutDiamond();
            GameView.instance().ui_main.showFairyHint("diamond", "+" + U.bigNumber(diamond));
        }
    };
    GlobalData.url = "http://42.62.77.137:8084/tapHeroes";
    //static url = "http://42.121.81.171:8888/tapHeroes";
    //static url = "http://192.168.1.120:8084/tapHeroes";
    GlobalData.width = 0;
    GlobalData.height = 0;
    GlobalData.offset_y = 0;
    GlobalData.player_name = "";
    GlobalData.dragonbones_factory = new dragonBones.EgretFactory();
    GlobalData.base_x = GlobalData.width / 2;
    GlobalData.base_y = 662;
    GlobalData.base_y_offset = 0;
    GlobalData.data_ready = false;
    GlobalData.buy_money_fee = 100;
    GlobalData.shop_hit1_fee = 30;
    GlobalData.shop_hit2_fee = 50;
    GlobalData.holding_tap_fee = 30;
    GlobalData.protect_fee = 100;
    GlobalData.holding_tap_time = 100;
    GlobalData.protect_hero_time = 24 * 3600;
    GlobalData.buy_diamonds_fee = [1, 5, 10, 30];
    GlobalData.buy_diamonds_num = [10, 50, 110, 400];
    GlobalData.cur_buying_diamonds_index = null;
    GlobalData.boss_game_type_sheild = 1;
    GlobalData.max_sheild_num = 4;
    GlobalData.save_counter = 0;
    GlobalData.save_interval = 11;
    GlobalData.save_time_local = 5;
    GlobalData.save_time_net = 60;
    // 水果动画从中心到底部高度差
    GlobalData.fruit_offset_y = 46;
    return GlobalData;
})();
GlobalData.prototype.__class__ = "GlobalData";
var Utils = (function () {
    function Utils() {
    }
    Utils.getUUID = function () {
        if (GlobalData.uuid != null) {
            return GlobalData.uuid;
        }
        var key = "uuid7625";
        var uuid = Utils.loadLocal(key);
        console.log("UUID", GlobalData.uuid, uuid);
        if (uuid) {
            GlobalData.uuid = uuid;
            return GlobalData.uuid;
        }
        var r = function () {
            var s = ((Math.random() * 0xffff) | 0).toString(16);
            var l = ["", "0", "00", "000"];
            return l[4 - s.length] + s;
        };
        GlobalData.uuid = r() + r() + r() + r();
        Utils.saveLocal(key, GlobalData.uuid);
        return GlobalData.uuid;
    };
    Utils.v_in = function (value, l) {
        for (var i = 0; i < l.length; ++i) {
            if (l[i] == value) {
                return true;
            }
        }
        return false;
    };
    Utils.offset = function (y) {
        return y - GlobalData.offset_y;
    };
    Utils.time = function () {
        return (new Date()).valueOf() / 1000;
    };
    Utils.time_micro = function () {
        return (new Date()).valueOf();
    };
    Utils.getLine = function (table_name, line_id) {
        if (table_name == "step_list") {
            var line_num = mb.index[table_name][line_id];
            if (line_num == null) {
                line_id = line_id % 100 + 300;
                line_num = mb.index[table_name][line_id];
            }
        }
        else {
            var line_num = mb.index[table_name][line_id];
            if (line_num == null) {
                return null;
            }
        }
        return mb.data[table_name][line_num];
    };
    Utils.RandInt = function (a, b) {
        var n = Math.floor(b - a);
        return Math.floor(a + Math.random() * (n + 1));
    };
    Utils.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Utils.bigNumber = function (n, simple) {
        if (simple === void 0) { simple = false; }
        var s = n + "";
        var e = s.indexOf("e");
        var p = s.indexOf(".");
        var N = 0;
        var head = '';
        var suffix = '';
        if (e != -1) {
            N = parseInt(s.slice(e + 1));
            var H = Number(s.slice(0, e));
            var i = Math.floor(N / 4);
            suffix = Utils.bigNumber_suffix[i];
            var j = N % 4;
            H *= Math.pow(10, j);
            var h = H + "";
            p = 1 + j;
            if (!simple) {
                head = h.slice(0, p + 3);
            }
            else {
                head = h.slice(0, p);
            }
        }
        else {
            if (p != -1) {
                N = p;
                if (N <= 4) {
                    head = Math.round(n) + "";
                    suffix = "";
                }
                else {
                    var i = Math.floor((N - 1) / 4);
                    suffix = Utils.bigNumber_suffix[i];
                    var j = N - i * 4;
                    if (!simple) {
                        head = s.slice(0, j) + "." + s.slice(j, Math.min(j + 2, p));
                    }
                    else {
                        head = s.slice(0, j);
                    }
                }
            }
            else {
                N = s.length;
                if (N <= 4) {
                    head = n + "";
                    suffix = "";
                }
                else {
                    var i = Math.floor((N - 1) / 4);
                    suffix = Utils.bigNumber_suffix[i];
                    var j = N - i * 4;
                    if (!simple) {
                        head = s.slice(0, j) + "." + s.slice(j, j + 2);
                    }
                    else {
                        head = s.slice(0, j);
                    }
                }
            }
        }
        var ret = head + suffix;
        return ret;
    };
    Utils.bigNumberShort = function (n) {
    };
    Utils.percentNumber = function (n) {
        n *= 100;
        var s = n + "";
        var p = s.indexOf(".");
        if (p == -1) {
            return s + "%";
        }
        return s.slice(0, p + 2) + "%";
    };
    // 将数字n变成字符串，长度len，不足补字符c
    Utils.formatNumber = function (n, len, c) {
        var s = n + "";
        var loop = len - s.length;
        for (var i = 0; i < loop; ++i) {
            s = c + s;
        }
        return s;
    };
    // 把时间秒数转换成 07:17 的形式或者 07:23:23 的形式，section取2或3
    Utils.formatTime = function (time, section) {
        var s = "";
        if (section == 2) {
            s += U.formatNumber(Math.floor(time / 60), 2, "0") + ":" + U.formatNumber(Math.floor(time % 60), 2, "0");
        }
        else if (section == 3) {
            s += U.formatNumber(Math.floor(time / 3600), 2, "0") + U.formatNumber(Math.floor(time % 3600 / 60), 2, "0") + ":" + U.formatNumber(Math.floor(time % 60), 2, "0");
        }
        return s;
    };
    Utils.isWeixin = function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i)[0] == "micromessenger") {
            return true;
        }
        else {
            return false;
        }
    };
    Utils.isPosInObject = function (x, y, obj) {
        if (x >= obj.x && x < obj.x + obj.width && y >= obj.y && y < obj.y + obj.height) {
            return true;
        }
        return false;
    };
    Utils.isPosInRect = function (x, y, xx, width, yy, height) {
        if (x >= xx && x < xx + width && y >= yy && y < yy + height) {
            return true;
        }
        return false;
    };
    Utils.saveLocal = function (key, value) {
        egret.localStorage.setItem(key, value);
    };
    Utils.loadLocal = function (key) {
        return egret.localStorage.getItem(key);
    };
    Utils.loadDragonBone = function (name) {
        var group_name = "db_" + name;
        if (RES.isGroupLoaded(group_name)) {
            console.log("load dragonbone", name, "already loaded");
            return false;
        }
        console.log("load dragonbone 1111", name);
        var skeleton = name + "_skeleton";
        var texture_json = name + "_texture_json";
        var texture_png = name + "_texture_png";
        RES.createGroup(group_name, [skeleton, texture_json, texture_png]);
        RES.loadGroup(group_name);
        return true;
    };
    Utils.onResourceLoadComplete = function (event) {
        /*
        console.log( "===Utils===onResourceLoadComplete", event.groupName )
        if ( event.groupName.search( "db_gw" ) == 0 ) {
        }
        */
    };
    Utils.distance = function (x0, x1, y0, y1) {
        return Math.pow((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0), 0.5);
    };
    Utils.getBackgroundName = function (step) {
        var line = Utils.getLine("step_list", step);
        var strBgPicIndex = line[step_list_background];
        if (strBgPicIndex.length < 2) {
            strBgPicIndex = "0" + strBgPicIndex;
        }
        var ret = "beijing_" + strBgPicIndex;
        return ret;
    };
    Utils.getNextBackgroundName = function (step) {
        var now_line = Utils.getLine("step_list", step);
        var n = now_line[step_list_background];
        for (var i = 1; i < 100; ++i) {
            var line = Utils.getLine("step_list", step + i);
            var m = line[step_list_background];
            if (m != n) {
                break;
            }
        }
        if (m.length < 2) {
            m = "0" + m;
        }
        var ret = "beijing_" + m;
        return ret;
    };
    Utils.createBackgroundTexture = function (step) {
        var bg_name = U.getBackgroundName(step);
        var next_bg_name = U.getNextBackgroundName(step);
        if (!RES.isGroupLoaded("bg_" + bg_name)) {
            // do not replace background
            console.log("createBackgroundTexture null", "bg_" + bg_name);
        }
        var texture = RES.getRes(bg_name);
        var texture_a = RES.getRes(bg_name + "a");
        var next_group_name = "bg_" + next_bg_name;
        if (!RES.isGroupLoaded(next_group_name)) {
            if (RES.createGroup(next_group_name, [next_bg_name, next_bg_name + "a"])) {
                RES.loadGroup(next_group_name);
            }
        }
        return [texture, texture_a];
    };
    Utils.createBackgroundTextureForDifficulty = function (difficultyId) {
        var bg_name = "beijing_12";
        var texture = RES.getRes(bg_name);
        var texture_a = RES.getRes(bg_name + "a");
        return [texture, texture_a];
    };
    Utils.createDragonBone = function (name) {
        var head = name.slice(0, 2);
        if (head == "gw") {
            var group_name = "db_" + name;
            if (!RES.isGroupLoaded(group_name)) {
                console.log("======= default monster", name);
                name = G.default_monster_db;
            }
        }
        var skeletonData = RES.getRes(name + "_skeleton");
        var textureData = RES.getRes(name + "_texture_json");
        var texture = RES.getRes(name + "_texture_png");
        /*
        if ( skeletonData == null) {
            console.log("111111111111111111111");
        }
        if ( textureData == null ) {
            console.log("222222222222222222");
        }
        if ( texture == null ) {
            console.log("33333333333333333333333333Z");
        }
        */
        if (skeletonData == null || textureData == null || texture == null) {
            console.log("dragon bone create error", name);
            return null;
        }
        //console.log( "createDragonBone", G.dragonbones_factory.getSkeletonData( name ) )
        if (G.dragonbones_factory.getSkeletonData(name) == null) {
            G.dragonbones_factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData), name); //解析骨骼数据
            G.dragonbones_factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData), name); //解析纹理数据
        }
        var armature = G.dragonbones_factory.buildArmature(name);
        //console.log( "createDragonBone2", armature )
        dragonBones.WorldClock.clock.add(armature);
        return armature;
    };
    Utils.removeDragonBone = function (name, armature) {
        dragonBones.WorldClock.clock.remove(armature);
        G.dragonbones_factory.removeTextureAtlas(name);
        G.dragonbones_factory.removeSkeletonData(name);
    };
    Utils.registerDragonBonesTimer = function () {
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, null);
    };
    // 创建Texture atlas, 来源是dragonbone工具制作的贴图资源（不是普通的打包贴图）
    Utils.createDragonBoneTextureAtlas = function (json_name, png_name) {
        var clothes = new dragonBones.EgretTextureAtlas(RES.getRes(png_name), RES.getRes(json_name));
        return clothes;
        // 用法：egret_texture = clothes.getTexture( sub_texture_name ) //json里面的图片名称
        // dragonbone换装：
        // var bone = this.dragon.getBone("body")
        // var slots = bone.getSlots()
        // slots[0].setDisplay( bmp )  // bmp:egret.Bitmap
    };
    Utils.changeCloth = function (db, db_name, bone_name, part_name) {
        var clothes = G.dragonbones_factory.getTextureAtlas(db_name);
        if (clothes == null) {
            console.log("change clothes error, clothes null", db_name, bone_name, part_name);
            return false;
        }
        var bone = db.getBone(bone_name);
        if (bone == null) {
            console.log("change cloth bone error, bone_name:", db_name, bone_name, part_name);
            return false;
        }
        if (part_name == "NA") {
            bone.visible = false;
            return true;
        }
        var slots = bone.getSlots();
        var texture = clothes.getTexture("parts/" + part_name);
        if (texture == null) {
            console.log("change cloth texture error, part_name:", db_name, bone_name, part_name);
            return false;
        }
        var bmp = new egret.Bitmap();
        bmp.texture = texture;
        slots[0].setDisplay(bmp);
        bone.visible = true;
        return true;
    };
    Utils.getCirlePosArray = function (c_x, c_y, r, n) {
        var pos_array = [];
        var degree_span = 360 / n;
        for (var i = 0; i < n; i++) {
            var x = c_x + r * egret.NumberUtils.cos(90 + degree_span * i);
            var y = c_y + r * egret.NumberUtils.sin(90 + degree_span * i);
            pos_array.push([x, y]);
        }
        return pos_array;
    };
    // 将大数字变成易于人类识别的字符串
    //private static bigNumber_suffix = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z','Y','D','N', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz']
    Utils.bigNumber_suffix = ['', '万', '亿', '兆', '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    return Utils;
})();
Utils.prototype.__class__ = "Utils";
var G = GlobalData;
var U = Utils;
var Net = (function () {
    function Net() {
    }
    Net.postData = function (data, listener) {
        if (listener === void 0) { listener = null; }
        var url = G.url;
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
    Net.login = function () {
        console.log("login()");
        var s = (G.account_name || Utils.getUUID());
        Net.postData('data=' + '{"uuid":"' + s + '", "command":"LOGIN_GAME"}', Net.onReceiveLogin);
    };
    Net.onReceiveLogin = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        if (m.result != 0) {
            console.log("result", m.result);
            return;
        }
        G.data_ready = true;
        console.log("onReceiveLogin", GameView.instance(), data.toString());
        // print but not load
        /*
        Logic.loadDataShort( m["data"] )
        if ( GameView.instance() != null ) {
            Logic.refreshAll()
            Logic.initStep()
            GameView.instance().init()
        }
        */
    };
    Net.getOfflineMoney = function () {
        var s = (G.account_name || Utils.getUUID());
        Net.postData('data=' + '{"uuid":"' + s + '", "command":"OFFLINE_MONEY"}', Net.onReceiveOfflineMoney);
    };
    Net.onReceiveOfflineMoney = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        if (m.result != 0) {
            console.log("result", m.result);
            return;
        }
        Logic.offline_money = m["offline_money"];
        if (GameView.instance() != null && GameView.instance().ui_main != null) {
            GameView.instance().ui_main.refreshOfflineMoney();
        }
    };
    Net.saveDataLocal = function () {
        var s = (G.account_name || Utils.getUUID());
        Utils.saveLocal(s + ".data", JSON.stringify(Logic.dumpDataShort()));
    };
    Net.loadDataLocal = function () {
        var s = (G.account_name || Utils.getUUID());
        var data = Utils.loadLocal(s + ".data");
        if (data == null) {
            return false;
        }
        console.log("loadDataLocal", data);
        Logic.loadDataShort(JSON.parse(data), false);
        return true;
    };
    Net.saveData = function () {
        var s = (G.account_name || Utils.getUUID());
        var data = 'data=' + '{"uuid":"' + s + '", "command":"SAVE_BEGIN" }';
        Net.postData(data, Net.onReceiveSaveBegin);
    };
    Net.saveData2 = function () {
        var s = (G.account_name || Utils.getUUID());
        var data = 'data=' + '{"uuid":"' + s + '", "command":"SAVE_BEGIN2" }';
        Net.postData(data, Net.onReceiveSaveBegin);
    };
    Net.onReceiveSaveBegin = function (event) {
        var loader = event.target;
        var data = loader.data;
        var m = JSON.parse(data.toString());
        if (m.result != 0) {
            console.log("onReceiveSaveBegin, failed", m.result);
            return;
        }
        if (m.offline_money) {
            var money = Number(m.offline_money);
            Logic.offline_money = money;
            if (GameView.instance() != null) {
                GameView.instance().ui_main.refreshOfflineMoney();
            }
        }
        console.log("onReceiveSaveBegin", m.save_id, m.offline_money);
        Net.save_id = m.save_id;
        Net.save_section = 1;
        var logic_data = Logic.dumpDataShort();
        var s = JSON.stringify(logic_data);
        s = s.replace(/"/g, "@");
        s = s.replace(/\+/g, "$");
        Net.total_save_sections = Math.ceil(s.length / Net.MAX_LENGTH);
        Net.cache_save_data = s;
        Net.sendSaveData();
    };
    Net.sendSaveData = function () {
        var s = Net.cache_save_data.slice(0, Net.MAX_LENGTH);
        Net.cache_save_data = Net.cache_save_data.slice(Net.MAX_LENGTH);
        var uuid = (G.account_name || Utils.getUUID());
        var data = 'data=' + '{"uuid":"' + uuid + '", "command":"SAVE", "save_id":' + Net.save_id + ',"sec":' + Net.save_section + ',"total":' + Net.total_save_sections + ', "data":"' + s + '" }';
        Net.postData(data, Net.onReceiveSaveData);
    };
    Net.onReceiveSaveData = function (event) {
        var loader = event.target;
        var data = loader.data;
        console.log("onReceiveSaveData", data.toString());
        var m = JSON.parse(data.toString());
        if (m.result != 0) {
            console.log("onReceiveSaveData, failed", m.result);
            return;
        }
        if (m.finish == 0) {
        }
        else {
            if (m.save_id != Net.save_id) {
                console.log("onReceiveSaveData, save_id failed", m.save_id, Net.save_id);
                return;
            }
            if (m.sec != Net.save_section) {
                console.log("onReceiveSaveData, save_sec failed", m.sec, Net.save_section);
                return;
            }
            if (Net.save_section == Net.total_save_sections) {
                return;
            }
            Net.save_section += 1;
            console.log("save", Net.save_section, Net.total_save_sections);
            Net.sendSaveData();
        }
    };
    Net.getRank = function (type, start, num) {
        var uuid = (G.account_name || Utils.getUUID());
        var data = 'data=' + '{"uuid":"' + uuid + '", "command":"GET_RANK", "type":' + type + ',"start_index":' + start + ', "num":"' + num + '" }';
        Net.postData(data, Net.onReceiveRank);
    };
    Net.onReceiveRank = function (event) {
        var loader = event.target;
        var data = loader.data;
        // console.log( "onReceiveRank", data.toString() )
        var m = JSON.parse(data.toString());
        if (m.result != 0) {
            console.log("onReceiveRank, failed", m.result);
            return;
        }
        var type = m.type;
        var start = m.start_index;
        var l = m.ranks;
        var self_rank = m.self_rank;
        var rank_dlg = GameView.instance().rank_dialog;
        if (rank_dlg != null) {
            if (m.ranks.length == 0) {
                rank_dlg.setNoNewRankData(type - 1);
            }
            else {
                for (var i = 0; i < m.ranks.length; i++) {
                    rank_dlg.addRankData(type - 1, start + i + 1, l[i]);
                }
                rank_dlg.refreshRankList(type - 1);
            }
            rank_dlg.setSelfRankNO(type - 1, self_rank);
        }
    };
    Net.viewDailyAward = function () {
        var uuid = (G.account_name || Utils.getUUID());
        var data = 'data=' + '{"uuid":"' + uuid + '", "command":"ViewDailyAward"}';
        Net.postData(data, Net.onReceiveViewDailyAward);
    };
    Net.onReceiveViewDailyAward = function (event) {
        var loader = event.target;
        var data = loader.data;
        //console.log( "========== onReceiveViewDailyAward", data.toString() )
        var m = JSON.parse(data.toString());
        if (m.result != 0) {
            console.log("onReceiveViewDailyAward, failed", m.result);
            return;
        }
        var canCollecte = m.canCollecte;
        if (canCollecte == 0) {
            // Daily award is available
            Logic.daily_award_exist = 1;
            GameView.instance().ui_main.showDailyAwardBtn();
        }
        else {
            Logic.daily_award_exist = 0;
        }
    };
    Net.getDailyAward = function () {
        var uuid = (G.account_name || Utils.getUUID());
        var data = 'data=' + '{"uuid":"' + uuid + '", "command":"CollectDailyAward"}';
        Net.postData(data, Net.onReceiveGetDailyAward);
    };
    Net.onReceiveGetDailyAward = function (event) {
        var loader = event.target;
        var data = loader.data;
        //console.log( "========== onReceiveGetDailyAward", data.toString() )
        var m = JSON.parse(data.toString());
        if (m.result != 0) {
            console.log("onReceiveGetDailyAward, failed", m.result);
            return;
        }
        GameView.instance().ui_main.receiveDailyAward();
    };
    Net.save_id = 0;
    Net.save_section = 0;
    Net.total_save_sections = 0;
    Net.cache_save_data = "";
    Net.MAX_LENGTH = 128;
    return Net;
})();
Net.prototype.__class__ = "Net";
