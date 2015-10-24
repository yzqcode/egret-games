var KNIGHT_TYPE;
(function (KNIGHT_TYPE) {
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_SOLDIER"] = 1] = "KNIGHT_SOLDIER";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_BOWMAN"] = 2] = "KNIGHT_BOWMAN";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_ENCHANTER"] = 3] = "KNIGHT_ENCHANTER";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_CHEVALIER"] = 4] = "KNIGHT_CHEVALIER";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_FIGHTER"] = 5] = "KNIGHT_FIGHTER";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_ASSASSINATOR"] = 6] = "KNIGHT_ASSASSINATOR";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_LONG_BOWMAN"] = 7] = "KNIGHT_LONG_BOWMAN";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_CROSS_BOWMAN"] = 8] = "KNIGHT_CROSS_BOWMAN";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_FIRE_ENCHANTER"] = 9] = "KNIGHT_FIRE_ENCHANTER";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_ICE_ENCHANTER"] = 10] = "KNIGHT_ICE_ENCHANTER";
    KNIGHT_TYPE[KNIGHT_TYPE["KNIGHT_MINISTER"] = 11] = "KNIGHT_MINISTER";
})(KNIGHT_TYPE || (KNIGHT_TYPE = {}));
var KNIGHT_DATA_TYPE;
(function (KNIGHT_DATA_TYPE) {
    KNIGHT_DATA_TYPE[KNIGHT_DATA_TYPE["ATK"] = 1] = "ATK";
    KNIGHT_DATA_TYPE[KNIGHT_DATA_TYPE["DEF"] = 2] = "DEF";
    KNIGHT_DATA_TYPE[KNIGHT_DATA_TYPE["HP"] = 3] = "HP"; // 生命值
})(KNIGHT_DATA_TYPE || (KNIGHT_DATA_TYPE = {}));
var GUILD_POSITION;
(function (GUILD_POSITION) {
    GUILD_POSITION[GUILD_POSITION["NORMAL"] = -1] = "NORMAL";
    GUILD_POSITION[GUILD_POSITION["CHAIRMAN"] = 0] = "CHAIRMAN";
})(GUILD_POSITION || (GUILD_POSITION = {}));
var MESSAGE_TYPE;
(function (MESSAGE_TYPE) {
    MESSAGE_TYPE[MESSAGE_TYPE["NORMAL_TEXT"] = 1] = "NORMAL_TEXT";
})(MESSAGE_TYPE || (MESSAGE_TYPE = {}));
var SYSTEM_STATUS;
(function (SYSTEM_STATUS) {
    SYSTEM_STATUS[SYSTEM_STATUS["UNKNOWN"] = -1] = "UNKNOWN";
    SYSTEM_STATUS[SYSTEM_STATUS["LOCKED"] = 0] = "LOCKED";
    SYSTEM_STATUS[SYSTEM_STATUS["OPENED"] = 1] = "OPENED";
})(SYSTEM_STATUS || (SYSTEM_STATUS = {}));
var SYSTEM_INDEX;
(function (SYSTEM_INDEX) {
    SYSTEM_INDEX[SYSTEM_INDEX["INDEX_JOB"] = 1] = "INDEX_JOB";
    SYSTEM_INDEX[SYSTEM_INDEX["INDEX_GUILD"] = 2] = "INDEX_GUILD";
    SYSTEM_INDEX[SYSTEM_INDEX["INDEX_CITY_HIRE"] = 3] = "INDEX_CITY_HIRE";
    SYSTEM_INDEX[SYSTEM_INDEX["INDEX_ARENA"] = 4] = "INDEX_ARENA";
    SYSTEM_INDEX[SYSTEM_INDEX["INDEX_HONOR_HIRE"] = 5] = "INDEX_HONOR_HIRE";
})(SYSTEM_INDEX || (SYSTEM_INDEX = {}));
var Chat_Message = (function () {
    function Chat_Message() {
        this.message_type = 1 /* NORMAL_TEXT */;
        this.message_id = 0;
        this.knight_type = 1;
        this.knight_level = 0;
        this.knight_name = "";
        this.message_content = "";
    }
    var __egretProto__ = Chat_Message.prototype;
    return Chat_Message;
})();
Chat_Message.prototype.__class__ = "Chat_Message";
var Player_Save_Datas = (function () {
    function Player_Save_Datas() {
    }
    var __egretProto__ = Player_Save_Datas.prototype;
    return Player_Save_Datas;
})();
Player_Save_Datas.prototype.__class__ = "Player_Save_Datas";
var Knight_Position_Info = (function () {
    function Knight_Position_Info() {
        this.knight_id = 0;
        this.type = 1;
        this.name = "";
        this.level = 1;
        this.attack_factor = 0;
        this.defense_factor = 0;
        this.hp_factor = 0;
        this.position = 0;
        this.is_player = false;
        this.exp = 0;
        this.exp_max = 0;
    }
    var __egretProto__ = Knight_Position_Info.prototype;
    return Knight_Position_Info;
})();
Knight_Position_Info.prototype.__class__ = "Knight_Position_Info";
var Logic = (function () {
    function Logic() {
    }
    var __egretProto__ = Logic.prototype;
    Logic.restartLogicSecondTimer = function () {
        if (Logic.logic_second_timer != null) {
            Logic.logic_second_timer.stop();
            Logic.logic_second_timer = null;
        }
        Logic.logic_second_timer = new egret.Timer(1000, -1);
        Logic.logic_second_timer.addEventListener(egret.TimerEvent.TIMER, this.onLogicSecondTick, this);
        Logic.logic_second_timer.start();
    };
    Logic.onLogicSecondTick = function () {
        Logic.logic_tick_count++;
        Logic.checkStaminaRecover();
        if (Logic.isPlayerInGuild()) {
            if (Logic.logic_tick_count % 5 == 0) {
                Logic.checkNewMessages();
            }
            Logic.refreshMessageOnBottom();
        }
    };
    Logic.endLogicSecondTimer = function () {
        if (Logic.logic_second_timer != null) {
            Logic.logic_second_timer.stop();
            Logic.logic_second_timer = null;
        }
    };
    Logic.checkNewMessages = function () {
        if (Logic.messages_list.length <= 0) {
            Net.refreshChatMessage(0);
        }
        else {
            var last_message = Logic.messages_list[Logic.messages_list.length - 1];
            Net.refreshChatMessage(last_message.message_id);
        }
    };
    Logic.getMessageDatas = function (data) {
        if (data.length <= 0) {
            return;
        }
        var message_id = data[0][0];
        for (var i = 0; i < Logic.messages_list.length; i++) {
            if (Logic.messages_list[i].message_id == message_id) {
                return;
            }
        }
        for (var i = 0; i < data.length; i++) {
            var msg = new Chat_Message();
            msg.message_id = data[i][0];
            msg.knight_type = data[i][1];
            msg.knight_level = data[i][2];
            msg.knight_name = data[i][3];
            msg.message_content = data[i][4];
            Logic.messages_list.push(msg);
        }
        if (Logic.messages_list.length > 30) {
            var delete_len = Logic.messages_list.length - 30;
            Logic.messages_list.splice(0, delete_len);
        }
    };
    Logic.refreshMessageOnBottom = function () {
        if (Logic.current_show_msg_index >= Logic.messages_list.length) {
            return;
        }
        var current_layer = G.main_director.current_layer;
        if (current_layer.bottom_info_bar != null) {
            var deal_data = current_layer.bottom_info_bar instanceof UIBottomInfoView;
            if (deal_data) {
                current_layer.bottom_info_bar.refreshChatMessage();
                Logic.current_show_msg_index++;
            }
        }
    };
    Logic.getCurrentMessage = function () {
        if (Logic.current_show_msg_index >= Logic.messages_list.length) {
            if (Logic.messages_list.length > 0) {
                return Logic.messages_list[Logic.messages_list.length - 1];
            }
            return null;
        }
        return Logic.messages_list[Logic.current_show_msg_index];
    };
    Logic.hasShowLastMessage = function () {
        if (Logic.messages_list.length == 0) {
            return false;
        }
        if (Logic.current_show_msg_index >= Logic.messages_list.length) {
            return true;
        }
        return false;
    };
    Logic.getLastMessage = function () {
        if (Logic.messages_list.length > 0) {
            return Logic.messages_list[Logic.messages_list.length - 1];
        }
        return null;
    };
    Logic.checkStaminaRecover = function () {
        if (Logic.stamina >= Logic.stamina_max) {
            return;
        }
        Logic.stamina_recover_left_tick--;
        if (Logic.stamina_recover_left_tick <= 0) {
            Logic.stamina_recover_left_tick = 30;
            Net.getPlayerStaminaInfo();
        }
    };
    Logic.setStaminaInfo = function (datas) {
        if (datas.length <= 0) {
            return;
        }
        Logic.stamina = datas[0];
        Logic.stamina_max = datas[1];
        Logic.stamina_recover_left_tick = datas[2];
    };
    Logic.getSystemStatus = function (index) {
        if (index < 0 || index >= Logic.system_status_list.length) {
            return -1 /* UNKNOWN */;
        }
        return Logic.system_status_list[index];
    };
    Logic.isSystemLocked = function (index) {
        if (index < 0 || index >= Logic.system_status_list.length) {
            return true;
        }
        if (Logic.system_status_list[index] == 1 /* OPENED */) {
            return false;
        }
        return true;
    };
    Logic.isPlayerInGuild = function () {
        if (Logic.guild_id <= 0) {
            return false;
        }
        return true;
    };
    Logic.getGuildName = function () {
        if (Logic.guild_id <= 0) {
            return "无";
        }
        return Logic.guild_name;
    };
    Logic.clearGuildInfo = function () {
        Logic.guild_id = 0;
        Logic.guild_name = "";
        Logic.guild_flag_id = 0;
        Logic.self_guild_positon = -1 /* NORMAL */;
    };
    Logic.isGuildChairman = function () {
        if (Logic.self_guild_positon == 0 /* CHAIRMAN */) {
            return true;
        }
        return false;
    };
    Logic.getPlayerKnight = function () {
        for (var i = 0; i < Logic.knights_team.length; i++) {
            var knight_info = Logic.knights_team[i];
            if (knight_info != null && knight_info.is_player == true) {
                return knight_info;
            }
        }
        return null;
    };
    Logic.swapKnightsOnPosition = function (index1, index2) {
        if (index1 < 0 || index1 > 4) {
            return false;
        }
        if (index2 < 0 || index2 > 4) {
            return false;
        }
        var tmp = Logic.knights_team[index1];
        Logic.knights_team[index1] = Logic.knights_team[index2];
        Logic.knights_team[index2] = tmp;
        if (Logic.knights_team[index1] != null) {
            Logic.knights_team[index1].position = index1;
        }
        if (Logic.knights_team[index2] != null) {
            Logic.knights_team[index2].position = index2;
        }
    };
    Logic.getKnightOnPosition = function (index) {
        if (index < 0 || index > 4) {
            return null;
        }
        return Logic.knights_team[index];
    };
    Logic.getFirstEmptyPosition = function () {
        for (var i = 0; i < Logic.knights_team.length; i++) {
            if (Logic.knights_team[i] == null) {
                return i;
            }
        }
        return -1;
    };
    Logic.knightExitPosition = function (index) {
        if (index < 0 || index > 4) {
            return false;
        }
        if (Logic.knights_team[index] == null) {
            return false;
        }
        Logic.knights_team[index] = null;
        return true;
    };
    Logic.knightEnterPosition = function (knight_info) {
        if (knight_info.position < 0 || knight_info.position > 4) {
            return false;
        }
        Logic.knights_team[knight_info.position] = knight_info;
        return true;
    };
    Logic.getKnightsLevelSum = function () {
        var level_sum = 0;
        for (var i = 0; i < Logic.knights_team.length; i++) {
            if (Logic.knights_team[i] != null) {
                level_sum += Logic.knights_team[i].level;
            }
        }
        return level_sum;
    };
    Logic.initPlayerBaseDatas = function (datas) {
        Logic.money = datas[0];
        Logic.diamond = datas[1];
        Logic.stamina = datas[2];
        Logic.stamina_max = datas[3];
        Logic.stamina_recover_left_tick = datas[4];
        Logic.area_id = datas[5];
        Logic.city_index = datas[6];
        Logic.honor = datas[7];
        Logic.guide_flag = datas[8];
        Logic.restartLogicSecondTimer();
    };
    Logic.refreshKnightsTeam = function (datas) {
        for (var i = 0; i < 5; i++) {
            Logic.last_knights_team[i] = Logic.knights_team[i];
        }
        Logic.knights_team = [null, null, null, null, null];
        for (var i = 0; i < datas.length; i++) {
            var knight_info = new Knight_Position_Info();
            knight_info.knight_id = datas[i][0];
            knight_info.type = datas[i][1];
            knight_info.name = datas[i][2];
            knight_info.level = datas[i][3];
            knight_info.attack_factor = datas[i][4];
            knight_info.defense_factor = datas[i][5];
            knight_info.hp_factor = datas[i][6];
            knight_info.position = datas[i][7];
            knight_info.is_player = datas[i][8];
            knight_info.exp = datas[i][9];
            knight_info.exp_max = datas[i][10];
            if (knight_info.position >= 0 && knight_info.position < 5) {
                Logic.knights_team[knight_info.position] = knight_info;
            }
            if (knight_info.is_player == true) {
                Logic.player_name = knight_info.name;
            }
        }
    };
    Logic.getPosXOffsetByPosition = function (pos_index) {
        var offsetX = pos_index;
        return offsetX;
    };
    Logic.isAreaIndexExsit = function (area_index) {
        var area_line = Utils.getLine("area_list", area_index);
        if (area_line == null) {
            return false;
        }
        return true;
    };
    Logic.getCityBattleId = function (city_id, index) {
        var line = Utils.getLine("city_list", city_id);
        if (line == null) {
            return 0;
        }
        var battle_list_len = line[city_list_battle_list].length;
        if (index < 0 || index >= battle_list_len) {
            return 0;
        }
        return line[city_list_battle_list][index];
    };
    Logic.getCityBattleNpcList = function (city_battle_id, index) {
        if (index === void 0) { index = 0; }
        var line = Utils.getLine("city_battle_list", city_battle_id);
        if (line == null) {
            return [];
        }
        if (index == 0) {
            return line[city_battle_list_npc_1];
        }
        return line[city_battle_list_npc_2];
    };
    //------------------------------------ 获取骑士的某项数据 -----------------------------------------------------------
    Logic.getKnightSpecialData = function (type, level, data_type, factor) {
        switch (type) {
            case 1 /* KNIGHT_SOLDIER */:
                {
                    return Logic.getSoldierSpecialData(level, factor, data_type);
                }
            case 2 /* KNIGHT_BOWMAN */:
                {
                    return Logic.getBowmanSpecialData(level, factor, data_type);
                }
            case 3 /* KNIGHT_ENCHANTER */:
                {
                    return Logic.getEnchanterSpecialData(level, factor, data_type);
                }
            case 4 /* KNIGHT_CHEVALIER */:
                {
                    return Logic.getChevalierSpecialData(level, factor, data_type);
                }
            case 5 /* KNIGHT_FIGHTER */:
                {
                    return Logic.getFighterSpecialData(level, factor, data_type);
                }
            case 6 /* KNIGHT_ASSASSINATOR */:
                {
                    return Logic.getAssassinatorSpecialData(level, factor, data_type);
                }
            case 7 /* KNIGHT_LONG_BOWMAN */:
                {
                    return Logic.getLongBowmanSpecialData(level, factor, data_type);
                }
            case 8 /* KNIGHT_CROSS_BOWMAN */:
                {
                    return Logic.getCrossBowmanSpecialData(level, factor, data_type);
                }
            case 9 /* KNIGHT_FIRE_ENCHANTER */:
                {
                    return Logic.getFireEnchanterSpecialData(level, factor, data_type);
                }
            case 10 /* KNIGHT_ICE_ENCHANTER */:
                {
                    return Logic.getIceEnchanterSpecialData(level, factor, data_type);
                }
            case 11 /* KNIGHT_MINISTER */:
                {
                    return Logic.getMinisterSpecialData(level, factor, data_type);
                }
        }
        return null;
    };
    // 战士
    Logic.getSoldierSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("soldier_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[soldier_level_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[soldier_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[soldier_level_hp] * factor);
        }
        return data;
    };
    // 骑士 
    Logic.getChevalierSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("chevalier_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[chevalier_level_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[chevalier_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[chevalier_level_hp] * factor);
        }
        return data;
    };
    // 斗士 
    Logic.getFighterSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("fighter_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[fighter_level_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[fighter_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[fighter_level_hp] * factor);
        }
        return data;
    };
    // 刺客
    Logic.getAssassinatorSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("assassinator_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[assassinator_level_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[assassinator_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[assassinator_level_hp] * factor);
        }
        return data;
    };
    /********************* 弓箭手类 *********************/
    Logic.getBowmanSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("bowman_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[bowman_level_remote_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[bowman_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[bowman_level_hp] * factor);
        }
        return data;
    };
    Logic.getLongBowmanSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("longbowman_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[longbowman_level_remote_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[longbowman_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[longbowman_level_hp] * factor);
        }
        return data;
    };
    Logic.getCrossBowmanSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("crossbowman_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[crossbowman_level_remote_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[crossbowman_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[crossbowman_level_hp] * factor);
        }
        return data;
    };
    /********************* 法师类 *********************/
    Logic.getEnchanterSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("enchanter_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[enchanter_level_remote_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[enchanter_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[enchanter_level_hp] * factor);
        }
        return data;
    };
    Logic.getFireEnchanterSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("fire_enchanter_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[fire_enchanter_level_remote_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[fire_enchanter_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[fire_enchanter_level_hp] * factor);
        }
        return data;
    };
    Logic.getIceEnchanterSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("ice_enchanter_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[ice_enchanter_level_remote_hit_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[ice_enchanter_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[ice_enchanter_level_hp] * factor);
        }
        return data;
    };
    Logic.getMinisterSpecialData = function (level, factor, data_type) {
        var line = Utils.getLine("minister_level", level);
        var data = 0;
        if (data_type == 1 /* ATK */) {
            data = Math.floor(line[minister_level_remote_recover_attack] * factor);
        }
        else if (data_type == 2 /* DEF */) {
            data = Math.floor(line[minister_level_defense] * factor);
        }
        else if (data_type == 3 /* HP */) {
            data = Math.floor(line[minister_level_hp] * factor);
        }
        return data;
    };
    //------------------------------------ 获取骑士所有的数据 -----------------------------------------------------------
    Logic.getKnightDatas = function (type, level, attack_factor, defense_factor, hp_factor) {
        switch (type) {
            case 1 /* KNIGHT_SOLDIER */:
                {
                    return Logic.getSoldierDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 2 /* KNIGHT_BOWMAN */:
                {
                    return Logic.getBowmanDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 3 /* KNIGHT_ENCHANTER */:
                {
                    return Logic.getEnchanterDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 4 /* KNIGHT_CHEVALIER */:
                {
                    return Logic.getChevalierDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 5 /* KNIGHT_FIGHTER */:
                {
                    return Logic.getFighterDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 6 /* KNIGHT_ASSASSINATOR */:
                {
                    return Logic.getAssassinatorDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 7 /* KNIGHT_LONG_BOWMAN */:
                {
                    return Logic.getLongBowmanDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 8 /* KNIGHT_CROSS_BOWMAN */:
                {
                    return Logic.getCrossBowmanDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 9 /* KNIGHT_FIRE_ENCHANTER */:
                {
                    return Logic.getFireEnchanterDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 10 /* KNIGHT_ICE_ENCHANTER */:
                {
                    return Logic.getIceEnchanterDatas(level, attack_factor, defense_factor, hp_factor);
                }
            case 11 /* KNIGHT_MINISTER */:
                {
                    return Logic.getMinisterDatas(level, attack_factor, defense_factor, hp_factor);
                }
        }
        return null;
    };
    /********************* 战士类 *********************/
    // 战士
    Logic.getSoldierDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("soldier_level", level);
        var datas = [];
        datas.push(1 /* KNIGHT_SOLDIER */);
        var hp = Math.floor(line[soldier_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[soldier_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[soldier_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[soldier_level_move_velocity]);
        datas.push(line[soldier_level_hit_show_time]);
        datas.push(line[soldier_level_hit_show_distance]);
        datas.push(line[soldier_level_hit_back_distance]);
        datas.push(line[soldier_level_self_back_velocity]);
        return datas;
    };
    // 骑士 
    Logic.getChevalierDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("chevalier_level", level);
        var datas = [];
        datas.push(4 /* KNIGHT_CHEVALIER */);
        var hp = Math.floor(line[chevalier_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[chevalier_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[chevalier_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[chevalier_level_move_velocity]);
        datas.push(line[chevalier_level_hit_show_time]);
        datas.push(line[chevalier_level_hit_show_distance]);
        datas.push(line[chevalier_level_hit_back_distance]);
        datas.push(line[chevalier_level_self_back_velocity]);
        return datas;
    };
    // 斗士 
    Logic.getFighterDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("fighter_level", level);
        var datas = [];
        datas.push(5 /* KNIGHT_FIGHTER */);
        var hp = Math.floor(line[fighter_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[fighter_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[fighter_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[fighter_level_move_velocity]);
        datas.push(line[fighter_level_hit_show_time]);
        datas.push(line[fighter_level_hit_show_distance]);
        datas.push(line[fighter_level_hit_back_distance]);
        datas.push(line[fighter_level_self_back_velocity]);
        datas.push(line[fighter_level_self_back_immune_percent]);
        datas.push(line[fighter_level_self_back_immune_value]);
        return datas;
    };
    // 刺客
    Logic.getAssassinatorDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("assassinator_level", level);
        var datas = [];
        datas.push(6 /* KNIGHT_ASSASSINATOR */);
        var hp = Math.floor(line[assassinator_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[assassinator_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[assassinator_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[assassinator_level_move_velocity]);
        datas.push(line[assassinator_level_hit_show_time]);
        datas.push(line[assassinator_level_hit_show_distance]);
        datas.push(line[assassinator_level_hit_back_distance]);
        datas.push(line[assassinator_level_self_back_velocity]);
        datas.push(line[assassinator_level_self_sunder_armor_percent]);
        datas.push(line[assassinator_level_self_sunder_armor_value]);
        return datas;
    };
    /********************* 弓箭手类 *********************/
    Logic.getBowmanDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("bowman_level", level);
        var datas = [];
        datas.push(2 /* KNIGHT_BOWMAN */);
        var hp = Math.floor(line[bowman_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[bowman_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[bowman_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[bowman_level_move_velocity]);
        datas.push(line[bowman_level_hit_show_time]);
        datas.push(line[bowman_level_hit_show_distance]);
        datas.push(line[bowman_level_hit_back_distance]);
        datas.push(line[bowman_level_self_back_velocity]);
        datas.push(line[bowman_level_remote_hit_warning_distance]);
        atk = Math.floor(line[bowman_level_remote_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[bowman_level_remote_hit_show_time]);
        datas.push(line[bowman_level_remote_hit_distance]);
        datas.push(line[bowman_level_remote_hit_back_distance]);
        datas.push(line[bowman_level_remote_hit_cd]);
        datas.push(line[bowman_level_remote_hit_move_velocity]);
        return datas;
    };
    Logic.getLongBowmanDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("longbowman_level", level);
        var datas = [];
        datas.push(7 /* KNIGHT_LONG_BOWMAN */);
        var hp = Math.floor(line[longbowman_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[longbowman_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[longbowman_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[longbowman_level_move_velocity]);
        datas.push(line[longbowman_level_hit_show_time]);
        datas.push(line[longbowman_level_hit_show_distance]);
        datas.push(line[longbowman_level_hit_back_distance]);
        datas.push(line[longbowman_level_self_back_velocity]);
        datas.push(line[longbowman_level_remote_hit_warning_distance]);
        atk = Math.floor(line[longbowman_level_remote_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[longbowman_level_remote_hit_show_time]);
        datas.push(line[longbowman_level_remote_hit_distance]);
        datas.push(line[longbowman_level_remote_hit_back_distance]);
        datas.push(line[longbowman_level_remote_hit_cd]);
        datas.push(line[longbowman_level_remote_hit_move_velocity]);
        return datas;
    };
    Logic.getCrossBowmanDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("crossbowman_level", level);
        var datas = [];
        datas.push(8 /* KNIGHT_CROSS_BOWMAN */);
        var hp = Math.floor(line[crossbowman_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[crossbowman_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[crossbowman_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[crossbowman_level_move_velocity]);
        datas.push(line[crossbowman_level_hit_show_time]);
        datas.push(line[crossbowman_level_hit_show_distance]);
        datas.push(line[crossbowman_level_hit_back_distance]);
        datas.push(line[crossbowman_level_self_back_velocity]);
        datas.push(line[crossbowman_level_remote_hit_warning_distance]);
        atk = Math.floor(line[crossbowman_level_remote_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[crossbowman_level_remote_hit_show_time]);
        datas.push(line[crossbowman_level_remote_hit_distance]);
        datas.push(line[crossbowman_level_remote_hit_back_distance]);
        datas.push(line[crossbowman_level_remote_hit_cd]);
        datas.push(line[crossbowman_level_remote_hit_move_velocity]);
        return datas;
    };
    /********************* 法师类 *********************/
    Logic.getEnchanterDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("enchanter_level", level);
        var datas = [];
        datas.push(3 /* KNIGHT_ENCHANTER */);
        var hp = Math.floor(line[enchanter_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[enchanter_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[enchanter_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[enchanter_level_move_velocity]);
        datas.push(line[enchanter_level_hit_show_time]);
        datas.push(line[enchanter_level_hit_show_distance]);
        datas.push(line[enchanter_level_hit_back_distance]);
        datas.push(line[enchanter_level_self_back_velocity]);
        datas.push(line[enchanter_level_remote_hit_warning_distance]);
        atk = Math.floor(line[enchanter_level_remote_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[enchanter_level_remote_hit_show_time]);
        datas.push(line[enchanter_level_remote_hit_distance]);
        datas.push(line[enchanter_level_remote_hit_back_distance]);
        datas.push(line[enchanter_level_remote_hit_cd]);
        datas.push(line[enchanter_level_remote_hit_move_velocity]);
        return datas;
    };
    Logic.getFireEnchanterDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("fire_enchanter_level", level);
        var datas = [];
        datas.push(9 /* KNIGHT_FIRE_ENCHANTER */);
        var hp = Math.floor(line[fire_enchanter_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[fire_enchanter_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[fire_enchanter_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[fire_enchanter_level_move_velocity]);
        datas.push(line[fire_enchanter_level_hit_show_time]);
        datas.push(line[fire_enchanter_level_hit_show_distance]);
        datas.push(line[fire_enchanter_level_hit_back_distance]);
        datas.push(line[fire_enchanter_level_self_back_velocity]);
        datas.push(line[fire_enchanter_level_remote_hit_warning_distance]);
        atk = Math.floor(line[fire_enchanter_level_remote_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[fire_enchanter_level_remote_hit_show_time]);
        datas.push(line[fire_enchanter_level_remote_hit_distance]);
        datas.push(line[fire_enchanter_level_remote_hit_back_distance]);
        datas.push(line[fire_enchanter_level_remote_hit_cd]);
        datas.push(line[fire_enchanter_level_remote_hit_move_velocity]);
        datas.push(line[fire_enchanter_level_self_critical_percent]);
        datas.push(line[fire_enchanter_level_self_critical_value]);
        return datas;
    };
    Logic.getIceEnchanterDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("ice_enchanter_level", level);
        var datas = [];
        datas.push(10 /* KNIGHT_ICE_ENCHANTER */);
        var hp = Math.floor(line[ice_enchanter_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[ice_enchanter_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[ice_enchanter_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[ice_enchanter_level_move_velocity]);
        datas.push(line[ice_enchanter_level_hit_show_time]);
        datas.push(line[ice_enchanter_level_hit_show_distance]);
        datas.push(line[ice_enchanter_level_hit_back_distance]);
        datas.push(line[ice_enchanter_level_self_back_velocity]);
        datas.push(line[ice_enchanter_level_remote_hit_warning_distance]);
        atk = Math.floor(line[ice_enchanter_level_remote_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[ice_enchanter_level_remote_hit_show_time]);
        datas.push(line[ice_enchanter_level_remote_hit_distance]);
        datas.push(line[ice_enchanter_level_remote_hit_back_distance]);
        datas.push(line[ice_enchanter_level_remote_hit_cd]);
        datas.push(line[ice_enchanter_level_remote_hit_move_velocity]);
        datas.push(line[ice_enchanter_level_self_frozen_percent]);
        datas.push(line[ice_enchanter_level_self_frozen_value]);
        datas.push(line[ice_enchanter_level_self_frozen_time]);
        return datas;
    };
    Logic.getMinisterDatas = function (level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("minister_level", level);
        var datas = [];
        datas.push(11 /* KNIGHT_MINISTER */);
        var hp = Math.floor(line[minister_level_hp] * hp_factor);
        datas.push(hp);
        var defense = Math.floor(line[minister_level_defense] * defense_factor);
        datas.push(defense);
        var atk = Math.floor(line[minister_level_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[minister_level_move_velocity]);
        datas.push(line[minister_level_hit_show_time]);
        datas.push(line[minister_level_hit_show_distance]);
        datas.push(line[minister_level_hit_back_distance]);
        datas.push(line[minister_level_self_back_velocity]);
        datas.push(line[minister_level_remote_hit_warning_distance]);
        atk = Math.floor(line[minister_level_remote_hit_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[minister_level_remote_hit_show_time]);
        datas.push(line[minister_level_remote_hit_distance]);
        datas.push(line[minister_level_remote_hit_back_distance]);
        datas.push(line[minister_level_remote_hit_cd]);
        datas.push(line[minister_level_remote_hit_move_velocity]);
        atk = Math.floor(line[minister_level_remote_recover_attack] * attack_factor);
        datas.push(atk);
        datas.push(line[minister_level_remote_recover_distance]);
        return datas;
    };
    Logic.player_datas = new Array();
    Logic.player_name = "";
    Logic.money = 0;
    Logic.diamond = 0;
    Logic.honor = 0;
    Logic.stamina = 0;
    Logic.stamina_max = 0;
    Logic.stamina_recover_left_tick = 0;
    Logic.area_id = 1;
    Logic.city_index = 0;
    Logic.guide_flag = 0;
    Logic.guild_id = 0;
    Logic.guild_name = "";
    Logic.guild_flag_id = 0;
    Logic.self_guild_positon = -1 /* NORMAL */;
    Logic.system_status_list = [-1, -1, -1, -1, -1, -1];
    Logic.messages_list = [];
    Logic.current_show_msg_index = 0;
    Logic.last_knights_team = [null, null, null, null, null];
    Logic.knights_team = [null, null, null, null, null];
    Logic.logic_second_timer = null;
    Logic.logic_tick_count = 0;
    return Logic;
})();
Logic.prototype.__class__ = "Logic";
