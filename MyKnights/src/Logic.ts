enum KNIGHT_TYPE
{
	KNIGHT_SOLDIER = 1, // 战士
    KNIGHT_BOWMAN,      // 弓箭手
    KNIGHT_ENCHANTER,   // 法师
    
    KNIGHT_CHEVALIER, KNIGHT_FIGHTER, KNIGHT_ASSASSINATOR, // 战士的二级职业
    KNIGHT_LONG_BOWMAN, KNIGHT_CROSS_BOWMAN,                             // 弓箭手的二级职业
    KNIGHT_FIRE_ENCHANTER, KNIGHT_ICE_ENCHANTER, KNIGHT_MINISTER, // 法师的二级职业
}

enum KNIGHT_DATA_TYPE
{
    ATK = 1, // 攻击力
    DEF,     // 防御力
    HP       // 生命值
}

enum GUILD_POSITION
{
    NORMAL = -1,
    CHAIRMAN = 0,
}

enum MESSAGE_TYPE
{
    NORMAL_TEXT = 1,
}

enum SYSTEM_STATUS
{
    UNKNOWN = -1,
    LOCKED = 0,
    OPENED = 1,
}
enum SYSTEM_INDEX
{
    INDEX_JOB = 1,
    INDEX_GUILD = 2,
    INDEX_CITY_HIRE = 3,
    INDEX_ARENA = 4,
    INDEX_HONOR_HIRE = 5,
}

class Chat_Message {
    public message_type:MESSAGE_TYPE = MESSAGE_TYPE.NORMAL_TEXT;
    public message_id:number = 0;
    public knight_type:number = 1;
    public knight_level:number = 0;
    public knight_name:string = "";

    public message_content:string = "";
}

class Player_Save_Datas {
    public player_id:number;
    public knight_type:number;
    public knight_level:number;
    public knight_name:string;
}

class Knight_Position_Info {
    public knight_id:number = 0;
    public type:KNIGHT_TYPE = 1;
    public name:string = "";
    public level:number = 1;

    public attack_factor:number = 0;
    public defense_factor:number = 0;
    public hp_factor:number = 0;

    public position:number = 0;
    public is_player:boolean = false;

    public exp:number = 0;
    public exp_max:number = 0;
}

class Logic {
    public static player_datas = new Array<Player_Save_Datas>();

    public static player_name:string = "";
    public static money:number = 0;
    public static diamond:number = 0;
    public static honor:number = 0;
    public static stamina:number = 0;
    public static stamina_max:number = 0;
    public static stamina_recover_left_tick:number = 0;
    public static area_id:number = 1;
    public static city_index:number = 0;

    public static isBind:number;

    public static guide_flag:number = 0;

    public static guild_id:number = 0;
    public static guild_name:string = "";
    public static guild_flag_id:number = 0;
    public static self_guild_positon:number = GUILD_POSITION.NORMAL;

    public static system_status_list:Array<SYSTEM_STATUS> = [-1, -1, -1, -1, -1, -1];

    public static messages_list = [];
    public static current_show_msg_index = 0;

    public static last_knights_team = [null, null, null, null, null];
    public static knights_team = [null, null, null, null, null];

    public static logic_second_timer:egret.Timer = null;
    public static logic_tick_count:number = 0;
    public static restartLogicSecondTimer() {
        if (Logic.logic_second_timer != null) {
            Logic.logic_second_timer.stop();
            Logic.logic_second_timer = null;
        }

        Logic.logic_second_timer = new egret.Timer(1000, -1);
        Logic.logic_second_timer.addEventListener(egret.TimerEvent.TIMER, this.onLogicSecondTick, this);
        Logic.logic_second_timer.start();
    }
    public static onLogicSecondTick() {
        Logic.logic_tick_count++;
        Logic.checkStaminaRecover();

        if (Logic.isPlayerInGuild()) {
            if (Logic.logic_tick_count % 5 == 0) {
                Logic.checkNewMessages();
            }

            Logic.refreshMessageOnBottom();
        }
    }
    public static endLogicSecondTimer() {
        if (Logic.logic_second_timer != null) {
            Logic.logic_second_timer.stop();
            Logic.logic_second_timer = null;
        }
    }

    public static checkNewMessages() {
        if (Logic.messages_list.length <= 0) {
            Net.refreshChatMessage(0);
        }
        else {
            var last_message = Logic.messages_list[Logic.messages_list.length-1];
            Net.refreshChatMessage(last_message.message_id);
        }
    }
    public static getMessageDatas(data) {
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
    }
    public static refreshMessageOnBottom() {
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
    }
    public static getCurrentMessage() {
        if (Logic.current_show_msg_index >= Logic.messages_list.length) {
            if (Logic.messages_list.length > 0) {
                return Logic.messages_list[Logic.messages_list.length-1];
            }

            return null;
        }

        return Logic.messages_list[Logic.current_show_msg_index];
    }
    public static hasShowLastMessage():boolean {
        if (Logic.messages_list.length == 0) {
            return false;
        }

        if (Logic.current_show_msg_index >= Logic.messages_list.length) {
            return true;
        }

        return false
    }

    public static getLastMessage() {
        if (Logic.messages_list.length > 0) {
            return Logic.messages_list[Logic.messages_list.length-1];
        }
        
        return null;
    }

    public static checkStaminaRecover() {
        if (Logic.stamina >= Logic.stamina_max) {
            return;
        }

        Logic.stamina_recover_left_tick--;
        if (Logic.stamina_recover_left_tick <= 0) {
            Logic.stamina_recover_left_tick = 30;
            Net.getPlayerStaminaInfo();
        }
    }
    public static setStaminaInfo(datas) {
        if (datas.length <= 0) {
            return;
        }

        Logic.stamina = datas[0];
        Logic.stamina_max = datas[1];
        Logic.stamina_recover_left_tick = datas[2];
    }

    public static getSystemStatus(index:number) {
        if (index < 0 || index >= Logic.system_status_list.length) {
            return SYSTEM_STATUS.UNKNOWN;
        }

        return Logic.system_status_list[index];
    }
    public static isSystemLocked(index:number) {
        if (index < 0 || index >= Logic.system_status_list.length) {
            return true;
        }

        if (Logic.system_status_list[index] == SYSTEM_STATUS.OPENED) {
            return false;
        }

        return true;
    }

    public static isPlayerInGuild() {
        if (Logic.guild_id <= 0) {
            return false;
        }

        return true;
    }
    public static getGuildName() {
        if (Logic.guild_id <= 0) {
            return "无";
        }

        return Logic.guild_name;
    }
    public static clearGuildInfo() {
        Logic.guild_id = 0;
        Logic.guild_name = "";
        Logic.guild_flag_id = 0;
        Logic.self_guild_positon = GUILD_POSITION.NORMAL;
    }
    public static isGuildChairman() {
        if (Logic.self_guild_positon == GUILD_POSITION.CHAIRMAN) {
            return true;
        }

        return false;
    }

    public static getPlayerKnight() {
        for (var i = 0; i < Logic.knights_team.length; i++) {
            var knight_info = Logic.knights_team[i];
            if (knight_info != null && knight_info.is_player == true) {
                return knight_info;
            }
        }

        return null;
    }

    public static swapKnightsOnPosition(index1:number, index2:number) {
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
    }
    public static getKnightOnPosition(index:number) {
        if (index < 0 || index > 4) {
            return null;
        }

        return Logic.knights_team[index];
    }
    public static getFirstEmptyPosition() {
        for (var i = 0; i < Logic.knights_team.length; i++) {
            if (Logic.knights_team[i] == null) {
                return i;
            }
        }

        return -1;
    }
    public static knightExitPosition(index:number) {
        if (index < 0 || index > 4) {
            return false;
        }

        if (Logic.knights_team[index] == null) {
            return false;
        }

        Logic.knights_team[index] = null;

        return true;
    }
    public static knightEnterPosition(knight_info:Knight_Position_Info) {
        if (knight_info.position < 0 || knight_info.position > 4) {
            return false;
        }


        Logic.knights_team[knight_info.position] = knight_info;

        return true;
    }

    public static getKnightsLevelSum() {
        var level_sum = 0;
        for (var i = 0; i < Logic.knights_team.length; i++) {
            if (Logic.knights_team[i] != null) {
                level_sum += Logic.knights_team[i].level;
            }
        }

        return level_sum;
    }

    public static initPlayerBaseDatas(datas) {
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
    }

    public static refreshKnightsTeam(datas) {
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
    }

    public static getPosXOffsetByPosition(pos_index:number) {
        var offsetX = pos_index;
        return offsetX;
    }

    public static isAreaIndexExsit(area_index) {
        var area_line = Utils.getLine("area_list", area_index);
        if (area_line == null) {
            return false;
        }

        return true;
    }

    public static getCityBattleId(city_id:number, index:number) {
        var line = Utils.getLine("city_list", city_id);
        if (line == null) {
            return 0;
        }

        var battle_list_len = line[city_list_battle_list].length;
        if (index < 0 || index >= battle_list_len) {
            return 0;
        }

        return line[city_list_battle_list][index];
    }

    public static getCityBattleNpcList(city_battle_id:number, index:number = 0) {
        var line = Utils.getLine("city_battle_list", city_battle_id);
        if (line == null) {
            return [];
        }

        if (index == 0) {
            return line[city_battle_list_npc_1];
        }

        return line[city_battle_list_npc_2];
    }

//------------------------------------ 获取骑士的某项数据 -----------------------------------------------------------

    public static getKnightSpecialData(type, level, data_type, factor) {
        switch (type)
        {
            case KNIGHT_TYPE.KNIGHT_SOLDIER:
            {
                return Logic.getSoldierSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_BOWMAN:
            {
                return Logic.getBowmanSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_ENCHANTER:
            {
                return Logic.getEnchanterSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_CHEVALIER:
            {
                return Logic.getChevalierSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_FIGHTER:
            {
                return Logic.getFighterSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_ASSASSINATOR:
            {
                return Logic.getAssassinatorSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_LONG_BOWMAN:
            {
                return Logic.getLongBowmanSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_CROSS_BOWMAN:
            {
                return Logic.getCrossBowmanSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_FIRE_ENCHANTER:
            {
                return Logic.getFireEnchanterSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_ICE_ENCHANTER:
            {
                return Logic.getIceEnchanterSpecialData(level, factor, data_type);
            }

            case KNIGHT_TYPE.KNIGHT_MINISTER:
            {
                return Logic.getMinisterSpecialData(level, factor, data_type);
            }
        }

        return null;
    }

    // 战士
    public static getSoldierSpecialData(level, factor, data_type) {
        var line = Utils.getLine("soldier_level", level);

        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[soldier_level_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[soldier_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[soldier_level_hp] * factor);
        }

        return data;
    }

    // 骑士 
    public static getChevalierSpecialData(level, factor, data_type) {
        var line = Utils.getLine("chevalier_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[chevalier_level_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[chevalier_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[chevalier_level_hp] * factor);
        }

        return data;
    }
    // 斗士 
    public static getFighterSpecialData(level, factor, data_type) {
        var line = Utils.getLine("fighter_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[fighter_level_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[fighter_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[fighter_level_hp] * factor);
        }

        return data;
    }
    // 刺客
    public static getAssassinatorSpecialData(level, factor, data_type) {
        var line = Utils.getLine("assassinator_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[assassinator_level_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[assassinator_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[assassinator_level_hp] * factor);
        }

        return data;
    }

    /********************* 弓箭手类 *********************/
    public static getBowmanSpecialData(level, factor, data_type) {
        var line = Utils.getLine("bowman_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[bowman_level_remote_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[bowman_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[bowman_level_hp] * factor);
        }

        return data;
    }

    public static getLongBowmanSpecialData(level, factor, data_type) {
        var line = Utils.getLine("longbowman_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[longbowman_level_remote_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[longbowman_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[longbowman_level_hp] * factor);
        }

        return data;
    }

    public static getCrossBowmanSpecialData(level, factor, data_type) {
        var line = Utils.getLine("crossbowman_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[crossbowman_level_remote_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[crossbowman_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[crossbowman_level_hp] * factor);
        }

        return data;
    }

    /********************* 法师类 *********************/
    public static getEnchanterSpecialData(level, factor, data_type) {
        var line = Utils.getLine("enchanter_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[enchanter_level_remote_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[enchanter_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[enchanter_level_hp] * factor);
        }

        return data;
    }

    public static getFireEnchanterSpecialData(level, factor, data_type) {
        var line = Utils.getLine("fire_enchanter_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[fire_enchanter_level_remote_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[fire_enchanter_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[fire_enchanter_level_hp] * factor);
        }

        return data;
    }

    public static getIceEnchanterSpecialData(level, factor, data_type) {
        var line = Utils.getLine("ice_enchanter_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[ice_enchanter_level_remote_hit_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[ice_enchanter_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[ice_enchanter_level_hp] * factor);
        }

        return data;
    }

    public static getMinisterSpecialData(level, factor, data_type) {
        var line = Utils.getLine("minister_level", level);
        
        var data:number = 0;
        if (data_type == KNIGHT_DATA_TYPE.ATK) {
            data = Math.floor(line[minister_level_remote_recover_attack] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.DEF) {
            data = Math.floor(line[minister_level_defense] * factor);
        }
        else if (data_type == KNIGHT_DATA_TYPE.HP) {
            data = Math.floor(line[minister_level_hp] * factor);
        }

        return data;
    }

//------------------------------------ 获取骑士所有的数据 -----------------------------------------------------------
	public static getKnightDatas(type, level, attack_factor, defense_factor, hp_factor) {
        switch (type)
        {
            case KNIGHT_TYPE.KNIGHT_SOLDIER:
            {
                return Logic.getSoldierDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_BOWMAN:
            {
                return Logic.getBowmanDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_ENCHANTER:
            {
                return Logic.getEnchanterDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_CHEVALIER:
            {
                return Logic.getChevalierDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_FIGHTER:
            {
                return Logic.getFighterDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_ASSASSINATOR:
            {
                return Logic.getAssassinatorDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_LONG_BOWMAN:
            {
                return Logic.getLongBowmanDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_CROSS_BOWMAN:
            {
                return Logic.getCrossBowmanDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_FIRE_ENCHANTER:
            {
                return Logic.getFireEnchanterDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_ICE_ENCHANTER:
            {
                return Logic.getIceEnchanterDatas(level, attack_factor, defense_factor, hp_factor);
            }

            case KNIGHT_TYPE.KNIGHT_MINISTER:
            {
                return Logic.getMinisterDatas(level, attack_factor, defense_factor, hp_factor);
            }
        }

        return null;
    }

    /********************* 战士类 *********************/
    // 战士
    public static getSoldierDatas(level, attack_factor, defense_factor, hp_factor) {
    	var line = Utils.getLine("soldier_level", level);
    	var datas = [];

    	datas.push(KNIGHT_TYPE.KNIGHT_SOLDIER);

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
    }

    // 骑士 
    public static getChevalierDatas(level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("chevalier_level", level);
        var datas = [];

        datas.push(KNIGHT_TYPE.KNIGHT_CHEVALIER);

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
    }
    // 斗士 
    public static getFighterDatas(level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("fighter_level", level);
        var datas = [];

        datas.push(KNIGHT_TYPE.KNIGHT_FIGHTER);

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
    }
    // 刺客
    public static getAssassinatorDatas(level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("assassinator_level", level);
        var datas = [];

        datas.push(KNIGHT_TYPE.KNIGHT_ASSASSINATOR);

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
    }

    /********************* 弓箭手类 *********************/
    public static getBowmanDatas(level, attack_factor, defense_factor, hp_factor) {
    	var line = Utils.getLine("bowman_level", level);
    	var datas = [];

    	datas.push(KNIGHT_TYPE.KNIGHT_BOWMAN);

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
    }

    public static getLongBowmanDatas(level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("longbowman_level", level);
        var datas = [];

        datas.push(KNIGHT_TYPE.KNIGHT_LONG_BOWMAN);

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
    }

    public static getCrossBowmanDatas(level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("crossbowman_level", level);
        var datas = [];

        datas.push(KNIGHT_TYPE.KNIGHT_CROSS_BOWMAN);

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
    }

    /********************* 法师类 *********************/
    public static getEnchanterDatas(level, attack_factor, defense_factor, hp_factor) {
    	var line = Utils.getLine("enchanter_level", level);
    	var datas = [];

    	datas.push(KNIGHT_TYPE.KNIGHT_ENCHANTER);

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
    }

    public static getFireEnchanterDatas(level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("fire_enchanter_level", level);
        var datas = [];

        datas.push(KNIGHT_TYPE.KNIGHT_FIRE_ENCHANTER);

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
    }

    public static getIceEnchanterDatas(level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("ice_enchanter_level", level);
        var datas = [];

        datas.push(KNIGHT_TYPE.KNIGHT_ICE_ENCHANTER);

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
    }

    public static getMinisterDatas(level, attack_factor, defense_factor, hp_factor) {
        var line = Utils.getLine("minister_level", level);
        var datas = [];

        datas.push(KNIGHT_TYPE.KNIGHT_MINISTER);

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
    }
}

