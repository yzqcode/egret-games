var Utils = (function () {
    function Utils() {
    }
    var __egretProto__ = Utils.prototype;
    Utils.loadLocal = function (key) {
        return egret.localStorage.getItem(key);
    };
    Utils.saveLocal = function (key, value) {
        egret.localStorage.setItem(key, value);
    };
    Utils.isExistUUID = function () {
        var uuid = Utils.loadLocal(Utils.UUID_KEY);
        if (uuid != null) {
            GlobalData.uuid = uuid;
            return true;
        }
        return false;
    };
    Utils.saveUUID = function (uuid) {
        GlobalData.uuid = uuid;
        Utils.saveLocal(Utils.UUID_KEY, GlobalData.uuid);
    };
    Utils.getUUID = function () {
        if (GlobalData.uuid != null) {
            return GlobalData.uuid;
        }
        var uuid = Utils.loadLocal(Utils.UUID_KEY);
        if (uuid != null) {
            GlobalData.uuid = uuid;
            return GlobalData.uuid;
        }
        console.log("============= ERROR! UUID is undefined.");
        GlobalData.uuid = null;
        return GlobalData.uuid;
    };
    /*
    public static getUUID(){
        if ( GlobalData.uuid != null ) {
            return GlobalData.uuid;
        }
        var key = "uuid369"
        var uuid = Utils.loadLocal( key )
        console.log( "UUID", GlobalData.uuid, uuid )
        if ( uuid ) {
            GlobalData.uuid = uuid
            return GlobalData.uuid
        }
        var r = function() {
            var s = ((Math.random()*0xffff)|0).toString(16);
            var l = ["", "0", "00", "000"]
            return l[4-s.length] + s
        }
        GlobalData.uuid = r() + r() + r() + r()
        Utils.saveLocal( key, GlobalData.uuid )
        return GlobalData.uuid
    }
    */
    Utils.getLine = function (table_name, line_id) {
        var line_num = mb.index[table_name][line_id];
        if (line_num == null) {
            return null;
        }
        return mb.data[table_name][line_num];
    };
    Utils.registerDragonBonesTimer = function () {
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, null);
    };
    Utils.createDragonBone = function (name) {
        var skeletonData = RES.getRes(name + "_skeleton_json");
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
        //console.log( "createDragonBone", G.dragonbones_factory.getDragonBonesData( name ) )
        if (G.dragonbones_factory.getDragonBonesData(name) == null) {
            G.dragonbones_factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData), name); //解析骨骼数据
            G.dragonbones_factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData), name); //解析纹理数据
        }
        var armature = G.dragonbones_factory.buildArmature(name);
        //console.log( "createDragonBone2", armature )
        dragonBones.WorldClock.clock.add(armature);
        return armature;
    };
    Utils.initLogicRandSeed = function (seed) {
        Utils.iLogicRandSeed = seed;
    };
    Utils.initClientRandSeed = function (seed) {
        Utils.iClientRandSeed = seed;
    };
    Utils.inner_rand = function (seed) {
        seed ^= 123459876;
        seed *= 16807;
        seed %= Math.pow(2, 31) - 1;
        seed ^= 123459876;
        return seed;
    };
    Utils.LogicRandInt = function (a, b) {
        var d = b - a + 1;
        Utils.iLogicRandSeed = Utils.inner_rand(Utils.iLogicRandSeed);
        var r = Math.floor(Utils.iLogicRandSeed / (Math.pow(2, 31) - 1) * d + a);
        return r;
    };
    Utils.ClientRandInt = function (a, b) {
        var d = b - a + 1;
        Utils.iClientRandSeed = Utils.inner_rand(Utils.iClientRandSeed);
        var r = Math.floor(Utils.iClientRandSeed / (Math.pow(2, 31) - 1) * d + a);
        return r;
    };
    Utils.time_micro = function () {
        return (new Date()).valueOf();
    };
    Utils.time = function () {
        return (new Date()).valueOf() / 1000;
    };
    Utils.getRandomHintText = function () {
        var len = mb.data["hint_list"].length;
        var iRandId = Utils.ClientRandInt(1, len);
        var hint_line = Utils.getLine("hint_list", iRandId);
        if (hint_line == null) {
            return "";
        }
        return hint_line[hint_list_desc];
    };
    // return "00:00:00"
    Utils.getTimeStr = function (seconds_sum) {
        var time_string = "";
        if (seconds_sum > 3600) {
            var hours = Math.floor(seconds_sum / 3600);
            if (hours > 9) {
                time_string = "" + hours;
            }
            else {
                time_string = "0" + hours;
            }
            time_string += ":";
            seconds_sum = seconds_sum - hours * 3600;
        }
        var minutes = Math.floor(seconds_sum / 60);
        if (minutes > 9) {
            time_string += minutes;
        }
        else {
            time_string += ("0" + minutes);
        }
        time_string += ":";
        var seconds = Math.floor(seconds_sum % 60);
        if (seconds > 9) {
            time_string += seconds;
        }
        else {
            time_string += ("0" + seconds);
        }
        return time_string;
    };
    Utils.showWaitAnim = function (top_view, callback) {
        if (callback === void 0) { callback = null; }
        if (top_view.ui_wait != null) {
            return;
        }
        var wait = new UIWaitView();
        wait.ui_parent = top_view;
        wait.timeout_callback = callback;
        top_view.guiLayer.addElement(wait);
        top_view.ui_wait = wait;
    };
    Utils.showToastInfo = function (guiLayer, strInfo, time) {
        if (strInfo === void 0) { strInfo = "???"; }
        if (time === void 0) { time = 0; }
        var toast = new UIToastView();
        toast.m_strToastInfo = strInfo;
        toast.ui_parent = guiLayer;
        if (time > 0) {
            toast.m_last_time = time;
        }
        guiLayer.addElement(toast);
    };
    Utils.getKnightHeadNorName = function (type, isPlayer) {
        if (isPlayer === void 0) { isPlayer = false; }
        if (isPlayer) {
            return "zj_head_nor_" + type + "_png";
        }
        return "head_nor_" + type + "_png";
    };
    Utils.getKnightHeadDeadName = function (type, isPlayer) {
        if (isPlayer === void 0) { isPlayer = false; }
        if (isPlayer) {
            return "zj_head_dis_" + type + "_png";
        }
        return "head_dis_" + type + "_png";
    };
    Utils.getKnightBigImgName = function (type, isPlayer) {
        if (isPlayer === void 0) { isPlayer = false; }
        if (isPlayer) {
            return "zj_knight_" + type + "_png";
        }
        return "knight_" + type + "_png";
    };
    Utils.getSelfKnightBigImgMaskName = function (type, isPlayer) {
        if (isPlayer === void 0) { isPlayer = false; }
        if (isPlayer) {
            return "zj_red_mask_" + type + "_png";
        }
        return "red_mask_" + type + "_png";
    };
    Utils.getOtherKnightBigImgMaskName = function (type, isPlayer) {
        if (isPlayer === void 0) { isPlayer = false; }
        if (isPlayer) {
            return "zj_blue_mask_" + type + "_png";
        }
        return "blue_mask_" + type + "_png";
    };
    Utils.getColorIndex = function (factor) {
        if (factor < 0.5) {
            // white: [0%, 50%)
            return 1;
        }
        else if (factor < 0.7) {
            // green: [50%, 70%)
            return 2;
        }
        else if (factor < 0.85) {
            // blue: [70%, 85%)
            return 3;
        }
        else if (factor < 0.95) {
            // purple: [85%, 95%)
            return 4;
        }
        else if (factor < 1) {
            // gold: [95%, 100%)
            return 5;
        }
        else {
            // black: 100%
            return 6;
        }
    };
    Utils.getKnightColorIndex = function (attack_factor, defense_factor, hp_factor) {
        var max_factor = attack_factor;
        if (max_factor < defense_factor) {
            max_factor = defense_factor;
        }
        if (max_factor < hp_factor) {
            max_factor = hp_factor;
        }
        return Utils.getColorIndex(max_factor);
    };
    Utils.getKnightPointImgName = function (attack_factor, defense_factor, hp_factor) {
        var index = Utils.getKnightColorIndex(attack_factor, defense_factor, hp_factor);
        return "color_" + index + "_png";
    };
    Utils.getOnePointImgName = function (factor) {
        var index = Utils.getColorIndex(factor);
        return "color_" + index + "_png";
    };
    Utils.getOnePointImgNameByIndex = function (index) {
        if (index < 1) {
            index = 1;
        }
        if (index > 6) {
            index = 6;
        }
        return "color_" + index + "_png";
    };
    Utils.getKnightFrameImgName = function (attack_factor, defense_factor, hp_factor) {
        var index = Utils.getKnightColorIndex(attack_factor, defense_factor, hp_factor);
        return "color_frame_" + index + "_png";
    };
    Utils.getKnightBigFrameImgName = function (attack_factor, defense_factor, hp_factor) {
        var index = Utils.getKnightColorIndex(attack_factor, defense_factor, hp_factor);
        return "color_big_frame_" + index + "_png";
    };
    Utils.getKnightSpecialImgName = function (attack_factor, defense_factor, hp_factor) {
        var index = Utils.getKnightColorIndex(attack_factor, defense_factor, hp_factor);
        return "color_special_" + index + "_png";
    };
    Utils.getFrameImgName = function (factor) {
        var index = Utils.getColorIndex(factor);
        return "color_frame_" + index + "_png";
    };
    Utils.getValuePanelImgName = function (factor) {
        var index = Utils.getColorIndex(factor);
        return "color_value_panel_" + index + "_png";
    };
    Utils.getJobCardImgName = function (level) {
        return "job_big_frame_" + level + "_png";
    };
    Utils.getKnightTypeName = function (type) {
        var knight_line = Utils.getLine("knights_list", type);
        if (knight_line == null) {
            return "????";
        }
        var knight_type_name = knight_line[knights_list_name];
        return knight_type_name;
    };
    Utils.getKnightDragonName = function (type, isPlayer) {
        if (isPlayer === void 0) { isPlayer = false; }
        var knight_dragon_name = "zspt";
        switch (type) {
            case 1 /* KNIGHT_SOLDIER */:
                {
                    knight_dragon_name = "zspt";
                    if (isPlayer) {
                        knight_dragon_name = "zjzspt";
                    }
                    break;
                }
            case 2 /* KNIGHT_BOWMAN */:
                {
                    knight_dragon_name = "ycpt";
                    if (isPlayer) {
                        knight_dragon_name = "zjycpt";
                    }
                    break;
                }
            case 3 /* KNIGHT_ENCHANTER */:
                {
                    knight_dragon_name = "fspt";
                    if (isPlayer) {
                        knight_dragon_name = "zjfspt";
                    }
                    break;
                }
            case 4 /* KNIGHT_CHEVALIER */:
                {
                    knight_dragon_name = "zsqs";
                    if (isPlayer) {
                        knight_dragon_name = "zjzsqs";
                    }
                    break;
                }
            case 5 /* KNIGHT_FIGHTER */:
                {
                    knight_dragon_name = "zscm";
                    if (isPlayer) {
                        knight_dragon_name = "zjzscm";
                    }
                    break;
                }
            case 6 /* KNIGHT_ASSASSINATOR */:
                {
                    knight_dragon_name = "zsck";
                    if (isPlayer) {
                        knight_dragon_name = "zjzsck";
                    }
                    break;
                }
            case 7 /* KNIGHT_LONG_BOWMAN */:
                {
                    knight_dragon_name = "yccg";
                    if (isPlayer) {
                        knight_dragon_name = "zjyccg";
                    }
                    break;
                }
            case 8 /* KNIGHT_CROSS_BOWMAN */:
                {
                    knight_dragon_name = "ycns";
                    if (isPlayer) {
                        knight_dragon_name = "zjycns";
                    }
                    break;
                }
            case 9 /* KNIGHT_FIRE_ENCHANTER */:
                {
                    knight_dragon_name = "fshf";
                    if (isPlayer) {
                        knight_dragon_name = "zjfshf";
                    }
                    break;
                }
            case 10 /* KNIGHT_ICE_ENCHANTER */:
                {
                    knight_dragon_name = "fsbf";
                    if (isPlayer) {
                        knight_dragon_name = "zjfsbf";
                    }
                    break;
                }
            case 11 /* KNIGHT_MINISTER */:
                {
                    knight_dragon_name = "fsms";
                    if (isPlayer) {
                        knight_dragon_name = "zjfsms";
                    }
                    break;
                }
        }
        knight_dragon_name += "001";
        return knight_dragon_name;
    };
    Utils.getPlayerGuildPositionName = function (position) {
        var position_name = "成员";
        if (position == 0 /* CHAIRMAN */) {
            position_name = "大团长";
        }
        return position_name;
    };
    Utils.checkName = function (s) {
        if (s.length < 1 || s.length > 16) {
            return 1;
        }
        var l = [" ", '\\"', "\\'", "@", "%", "\\$", "!", ",", "\\.", "#", "\\*", "\\^", "&", "\/", "\\\\", "\\{", "\\}", "\\[", "\\]", "\\(", "\\)", ":", ";"];
        for (var i = 0; i < l.length; ++i) {
            if (s.search(l[i]) != -1) {
                return 2;
            }
        }
        return 0;
    };
    Utils.getTimeStrForTick = function (tick_count) {
        var myDate = new Date();
        myDate.setTime(tick_count);
        var strDate = "";
        strDate += myDate.getFullYear() + "/"; //获取完整的年份(4位,1970-????) 
        strDate += (myDate.getMonth() + 1) + "/"; //获取当前月份(0-11,0代表1月) 
        strDate += myDate.getDate(); //获取当前日(1-31) 
        return strDate;
    };
    Utils.getSystemOpenText = function (data) {
        var system_open_texts = ["", "转职系统已开启~   ", "骑士团已开启~   ", "城市招募已开启~   ", "竞技场已开启~   ", "荣誉招募已开启~   "];
        var open_text = "";
        for (var i = 1 /* INDEX_JOB */; i <= 5 /* INDEX_HONOR_HIRE */; i++) {
            if (Logic.system_status_list[i] == 0 /* LOCKED */ && data[i] == 1 /* OPENED */) {
                open_text += system_open_texts[i];
            }
        }
        return open_text;
    };
    Utils.getColorLabel = function (index) {
        if (index < 0) {
            return Utils.color_label[0];
        }
        if (index > 5) {
            return Utils.color_label[5];
        }
        return Utils.color_label[index];
    };
    Utils.getColor = function (index) {
        if (index < 0) {
            return Utils.color_quality[0];
        }
        if (index > 5) {
            return Utils.color_quality[5];
        }
        return Utils.color_quality[index];
    };
    Utils.UUID_KEY = "user_uuid_key";
    Utils.iLogicRandSeed = 0;
    Utils.iClientRandSeed = 0;
    Utils.color_label = ["白", "绿", "蓝", "紫", "金", "黑"];
    Utils.color_quality = [0xe0e0e0, 0x00bf49, 0x0089ff, 0xa757cd, 0xbab01b, 0x000000];
    return Utils;
})();
Utils.prototype.__class__ = "Utils";
var U = Utils;
