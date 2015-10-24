var BATTLE_TYPE;
(function (BATTLE_TYPE) {
    BATTLE_TYPE[BATTLE_TYPE["GUIDE_BATTLE1"] = -1] = "GUIDE_BATTLE1";
    BATTLE_TYPE[BATTLE_TYPE["UNKNOWN_BATTLE"] = 0] = "UNKNOWN_BATTLE";
    BATTLE_TYPE[BATTLE_TYPE["TEST_BATTLE"] = 1] = "TEST_BATTLE";
    BATTLE_TYPE[BATTLE_TYPE["QUEST_BATTLE"] = 2] = "QUEST_BATTLE";
    BATTLE_TYPE[BATTLE_TYPE["ARENA_BATTLE"] = 3] = "ARENA_BATTLE";
    BATTLE_TYPE[BATTLE_TYPE["JOB_TEAM_BATTLE"] = 4] = "JOB_TEAM_BATTLE";
})(BATTLE_TYPE || (BATTLE_TYPE = {}));
/*
 * BATTLE_STATES: 所有骑士的战斗状态
 * MOVE：移动、BE_REMOTE_HIT：被远程打击、BE_HIT：计算受攻击伤害
 * DEAD：死亡、BACKING：击退中、HIT：近战攻击
 *
 * NOTE: 只有MOVE状态下考虑受攻击问题。
 */
var BATTLE_STATUS;
(function (BATTLE_STATUS) {
    BATTLE_STATUS[BATTLE_STATUS["MOVE"] = 0] = "MOVE";
    BATTLE_STATUS[BATTLE_STATUS["BE_REMOTE_HIT"] = 1] = "BE_REMOTE_HIT";
    BATTLE_STATUS[BATTLE_STATUS["BE_HIT"] = 2] = "BE_HIT";
    BATTLE_STATUS[BATTLE_STATUS["DEAD"] = 3] = "DEAD";
    BATTLE_STATUS[BATTLE_STATUS["BACKING"] = 4] = "BACKING";
    BATTLE_STATUS[BATTLE_STATUS["HIT"] = 5] = "HIT";
})(BATTLE_STATUS || (BATTLE_STATUS = {}));
var BULLET_TYPE;
(function (BULLET_TYPE) {
    BULLET_TYPE[BULLET_TYPE["BULLET_BOW"] = 1] = "BULLET_BOW";
    BULLET_TYPE[BULLET_TYPE["BULLET_MAGIC"] = 2] = "BULLET_MAGIC";
    BULLET_TYPE[BULLET_TYPE["BULLET_LONG_BOW"] = 3] = "BULLET_LONG_BOW";
    BULLET_TYPE[BULLET_TYPE["BULLET_CROSS_BOW"] = 4] = "BULLET_CROSS_BOW";
    BULLET_TYPE[BULLET_TYPE["BULLET_FIRE"] = 5] = "BULLET_FIRE";
    BULLET_TYPE[BULLET_TYPE["BULLET_ICE"] = 6] = "BULLET_ICE";
    BULLET_TYPE[BULLET_TYPE["BULLET_SAN"] = 7] = "BULLET_SAN";
})(BULLET_TYPE || (BULLET_TYPE = {}));
var Bullet = (function () {
    function Bullet() {
        // Just for client.
        this.bullet_layer = null;
        this.bullet_dragon = null;
        this.isPlayer = false;
        this.type = 1 /* BULLET_BOW */;
        this.name = "???";
        this.move_direction = 1;
        this.attack = 0;
        this.move_velocity = 1.00;
        this.pos_x = 0.00;
        this.remote_hit_back_distance = 0.00;
        this.self_critical_value = 0; // 暴击比例
        this.self_frozen_value = 0; // 减速比例
        this.self_frozen_time = 0; // 减速持续时间
        this.bullet_layer = null;
        this.bullet_dragon = null;
    }
    var __egretProto__ = Bullet.prototype;
    return Bullet;
})();
Bullet.prototype.__class__ = "Bullet";
var Knight = (function () {
    function Knight() {
        this.knight_layer = null;
        this.knight_dragon = null;
        this.knight_shadow_dragon = null;
        this.fire_dragon = null;
        this.ice_dragon = null;
        this.sunder_dragon = null;
        this.recover_dragon = null;
        this.isPlayer = false;
        this.type = 1 /* KNIGHT_SOLDIER */;
        this.name = "???";
        this.level = 1;
        this.move_velocity = 0.00; //移动速度，取到小数点后两位，单位m/s
        this.pos_x = 0.00; //当前位置，取到小数点后两位
        this.move_direction = 1; //移动方向，1表示从左到右，-1相反
        this.move_frozen_value = 0; //自身被减速比例，0-100，100速度降低为0
        this.move_frozen_end_time = 0; //自身被减速结束时间
        this.hp = 0; //生命值，取整
        this.hp_max = 0;
        this.defense = 0; //防御力，取整
        this.hit_attack = 0; //攻击力，取整
        this.hit_show_time = 0.2; //近程攻击前摇
        this.hit_show_distance = 10.0; //近程开始播放攻击动画的距离
        this.hit_start_time = 0.0; //近程攻击开始时间
        this.hit_back_distance = 0.00; //近程攻击击退敌人距离，取到小数点后两位
        this.hit_delay_damage = 0; //近程攻击结束后自身受到的伤害，取整
        this.remote_hit_warning_distance = 10.0; //远程攻击的警戒距离，低于该距离变成近战
        this.remote_hit_attack = 0; //远程攻击力，取整
        this.remote_hit_show_time = 0.2; //远程攻击前摇
        this.remote_hit_start_time = -100.0; //远程攻击开始时间
        this.remote_hit_combo = 0; //远程攻击连续次数
        this.remote_hit_distance = 0.00; //远程攻击距离，取到小数点后两位
        this.remote_hit_back_distance = 0.00; //远程攻击击退敌人距离，取到小数点后两位	
        this.remote_hit_cd = 0; //远程攻击冷却时间
        this.remote_hit_cd_start_time = -100.0;
        this.remote_hit_move_velocity = 10.0; //远程子弹移动速度
        this.remote_recover_attack = 0; //远程治疗能力值，取整
        this.remote_recover_distance = 0; //远程治疗距离，取到小数点后两位
        this.self_back_velocity = 10.00; //自身击退速度，取到小数点后两位，单位m/s
        this.self_back_distance = 0.00; //自身剩余击退距离，取到小数点后两位
        this.self_back_velocity_a = 0.0; //自身击退加速度，取到小数点后两位
        this.self_back_start_time = 0.0; //自身击退开始时间
        this.self_back_immune_invalid = false;
        this.self_back_immune_percent = 0; //击退免疫概率，0-10000，1000为必触发
        this.self_back_immune_value = 0; //击退免疫比例，0-100，100为全部免疫
        this.self_sunder_armor_percent = 0; //破甲概率，0-10000，1000为必触发
        this.self_sunder_armor_value = 0; //破甲比例，0-100，100为忽视对手护甲
        this.self_critical_percent = 0; //暴击概率，0-10000，1000为必触发
        this.self_critical_value = 100; //暴击比例，200为2倍暴击
        this.self_frozen_percent = 0; //减速概率，0-10000，10000为必触发
        this.self_frozen_value = 0; //减速比例，0-100，100速度降低为0
        this.self_frozen_time = 0; //减速持续时间
        this.status = 0 /* MOVE */;
        this.knight_layer = null;
        this.knight_dragon = null;
        this.knight_shadow_dragon = null;
        this.fire_dragon = null;
        this.ice_dragon = null;
        this.sunder_dragon = null;
        this.recover_dragon = null;
    }
    var __egretProto__ = Knight.prototype;
    return Knight;
})();
Knight.prototype.__class__ = "Knight";
var Knight_BaseInfo = (function () {
    function Knight_BaseInfo() {
        this.isPlayer = false;
        this.type = 1 /* KNIGHT_SOLDIER */;
        this.name = "???";
        this.level = 1;
        this.attack_factor = 1;
        this.defense_factor = 1;
        this.hp_factor = 1;
        this.pos_offset = 0;
        this.move_direction = 1;
        this.left_hp = -1;
    }
    var __egretProto__ = Knight_BaseInfo.prototype;
    return Knight_BaseInfo;
})();
Knight_BaseInfo.prototype.__class__ = "Knight_BaseInfo";
var BattleLayer = (function (_super) {
    __extends(BattleLayer, _super);
    function BattleLayer() {
        _super.call(this);
        this.battle_result_dialog = null;
        this.background = null;
        this.shadow_layer = null;
        this.bottom_bg_layer = null;
        this.bottom_knights_layer = null;
        this.top_hp_layer = null;
        this.SELF_KNIGHT_SMALL_HP_WIDTH = 112;
        this.KNIGHT_TEAM_HP_WIDTH = 240;
        this.battle_end_flag = false;
        this.left_knights_list = [];
        this.right_knights_list = [];
        this.left_bullets_list = [];
        this.right_bullets_list = [];
        this.MAX_TIME = 60; // 战斗最多进行60s，到达60秒以后进行胜负判断
        this.TIME = 0;
        this.TICK_TIME = 0.05; // 0.05s是最小时间间隔，所有的时间相关的数据必须为0.05s的整数倍，比如攻击前摇、攻击冷却等
        this.LEFT_SIDE = 0; //战场左边边缘坐标
        this.RIGHT_SIDE = 20; //战场右边边缘坐标
        this.GROUND_POS_Y = G.win_height / 2 + 110; //战场地面Y坐标
        this.GROUND_POS_MINX = 100; //战场最左X坐标
        this.GROUND_POS_MAX = 1036; //战场最左X坐标
        this.GROUND_POS_X_FACTOR = 46.8; //X坐标像素和米的比例因子
        this.bottom_alive_knight_zorder = -1;
        this.logic_timer = null;
        this.IS_DEBUG_OUTPUT = false;
        this.HP_MASK_ANIM_TIME = 500;
    }
    var __egretProto__ = BattleLayer.prototype;
    BattleLayer.KnightGoToBattle = function (knight_data) {
        BattleLayer.knights_baseinfo_list.push(knight_data);
    };
    BattleLayer.ClearAllBattleBaseInfo = function () {
        BattleLayer.battle_type = 0 /* UNKNOWN_BATTLE */;
        BattleLayer.self_knight_direction = 1;
        BattleLayer.is_server_battle = false;
        BattleLayer.server_battle_result = 0;
        BattleLayer.my_knights_left_hp = [null, null, null, null, null];
        BattleLayer.city_id = 0;
        BattleLayer.city_battle_index = 0;
        BattleLayer.knights_baseinfo_list = [];
    };
    BattleLayer.MyKnightInLeft = function () {
        BattleLayer.self_knight_direction = 1;
    };
    BattleLayer.MyKnightInRight = function () {
        BattleLayer.self_knight_direction = -1;
    };
    BattleLayer.InitQuestBattleInfo = function (city_id) {
        BattleLayer.battle_type = 2 /* QUEST_BATTLE */;
        BattleLayer.self_knight_direction = 1;
        BattleLayer.is_server_battle = false;
        BattleLayer.server_battle_result = 0;
        BattleLayer.my_knights_left_hp = [null, null, null, null, null];
        BattleLayer.city_id = city_id;
        BattleLayer.city_battle_index = 0;
        BattleLayer.knights_baseinfo_list = [];
        BattleLayer.AddPlayerKnightsToBattleForQuest();
        BattleLayer.AddQuestNpcKnightsToBattle();
    };
    BattleLayer.AddPlayerKnightsToBattleForQuest = function () {
        for (var i = 0; i < 5; i++) {
            var knight_info = Logic.knights_team[i];
            if (knight_info != null) {
                var knight_base_info = new Knight_BaseInfo();
                knight_base_info.isPlayer = knight_info.is_player;
                knight_base_info.name = knight_info.name;
                knight_base_info.type = knight_info.type;
                knight_base_info.level = knight_info.level;
                knight_base_info.attack_factor = knight_info.attack_factor / 10000;
                knight_base_info.defense_factor = knight_info.defense_factor / 10000;
                knight_base_info.hp_factor = knight_info.hp_factor / 10000;
                knight_base_info.pos_offset = Logic.getPosXOffsetByPosition(knight_info.position);
                knight_base_info.move_direction = 1;
                if (BattleLayer.my_knights_left_hp[i] != null) {
                    knight_base_info.left_hp = BattleLayer.my_knights_left_hp[i];
                }
                else {
                    knight_base_info.left_hp = -1;
                }
                BattleLayer.knights_baseinfo_list.push(knight_base_info);
            }
        }
    };
    BattleLayer.AddQuestNpcKnightsToBattle = function () {
        var player_knight = Logic.getPlayerKnight();
        var player_knight_type = 1 /* KNIGHT_SOLDIER */;
        if (player_knight != null) {
            player_knight_type = player_knight.type;
        }
        var battle_id = Logic.getCityBattleId(BattleLayer.city_id, BattleLayer.city_battle_index);
        if (battle_id <= 0) {
            return;
        }
        if (BattleLayer.city_id == 2) {
            battle_id = 20001;
            if (player_knight_type == 2 /* KNIGHT_BOWMAN */) {
                battle_id = 20002;
            }
            else if (player_knight_type == 3 /* KNIGHT_ENCHANTER */) {
                battle_id = 20003;
            }
        }
        else if (BattleLayer.city_id == 3) {
            battle_id = 30001;
            if (player_knight_type == 2 /* KNIGHT_BOWMAN */) {
                battle_id = 30002;
            }
            else if (player_knight_type == 3 /* KNIGHT_ENCHANTER */) {
                battle_id = 30003;
            }
        }
        var rand_int = Math.floor(BattleLayer.getBattleRandomInt(1, 100) / 51);
        var npc_data_list = Logic.getCityBattleNpcList(battle_id, rand_int);
        for (var i = npc_data_list.length - 1; i >= 0; i--) {
            var npc_id = npc_data_list[i];
            var npc_data = Utils.getLine("npc_list", npc_id);
            if (npc_data != null) {
                var knight_base_info = new Knight_BaseInfo();
                knight_base_info.name = npc_data[npc_list_name];
                knight_base_info.type = npc_data[npc_list_job];
                knight_base_info.level = npc_data[npc_list_knight_id];
                knight_base_info.attack_factor = npc_data[npc_list_attack_factor] / 10000;
                knight_base_info.defense_factor = npc_data[npc_list_defense_factor] / 10000;
                knight_base_info.hp_factor = npc_data[npc_list_hp_factor] / 10000;
                knight_base_info.pos_offset = Logic.getPosXOffsetByPosition(i);
                knight_base_info.move_direction = -1;
                knight_base_info.left_hp = -1;
                BattleLayer.knights_baseinfo_list.push(knight_base_info);
            }
        }
    };
    BattleLayer.InitArenaBattleInfo = function (self_direction) {
        if (self_direction === void 0) { self_direction = 1; }
        if (self_direction > 0) {
            self_direction = 1;
        }
        else {
            self_direction = -1;
        }
        BattleLayer.battle_type = 3 /* ARENA_BATTLE */;
        BattleLayer.self_knight_direction = self_direction;
        BattleLayer.is_server_battle = false;
        BattleLayer.server_battle_result = 0;
        BattleLayer.knights_baseinfo_list = [];
    };
    BattleLayer.AddPlayerKnightsToBattleForArena = function () {
        var i = 0;
        var span = 1;
        if (BattleLayer.self_knight_direction == -1) {
            i = 4;
            span = -1;
        }
        while (i >= 0 && i < 5) {
            var knight_info = Logic.knights_team[i];
            if (knight_info != null) {
                var knight_base_info = new Knight_BaseInfo();
                knight_base_info.isPlayer = knight_info.is_player;
                knight_base_info.name = knight_info.name;
                knight_base_info.type = knight_info.type;
                knight_base_info.level = knight_info.level;
                knight_base_info.attack_factor = knight_info.attack_factor / 10000;
                knight_base_info.defense_factor = knight_info.defense_factor / 10000;
                knight_base_info.hp_factor = knight_info.hp_factor / 10000;
                knight_base_info.pos_offset = Logic.getPosXOffsetByPosition(knight_info.position);
                knight_base_info.move_direction = BattleLayer.self_knight_direction;
                knight_base_info.left_hp = -1;
                BattleLayer.knights_baseinfo_list.push(knight_base_info);
            }
            i += span;
        }
    };
    BattleLayer.AddEnemyKnightsToBattleForArena = function (enemy_list) {
        var i = 0;
        var span = 1;
        var direction = -1;
        if (BattleLayer.self_knight_direction == -1) {
            i = 4;
            span = -1;
            direction = 1;
        }
        while (i >= 0 && i < 5) {
            var knight_info = enemy_list[i];
            if (knight_info != null) {
                var knight_base_info = new Knight_BaseInfo();
                knight_base_info.isPlayer = knight_info.is_player;
                knight_base_info.name = knight_info.name;
                knight_base_info.type = knight_info.type;
                knight_base_info.level = knight_info.level;
                knight_base_info.attack_factor = knight_info.attack_factor / 10000;
                knight_base_info.defense_factor = knight_info.defense_factor / 10000;
                knight_base_info.hp_factor = knight_info.hp_factor / 10000;
                knight_base_info.pos_offset = Logic.getPosXOffsetByPosition(knight_info.position);
                knight_base_info.move_direction = direction;
                knight_base_info.left_hp = -1;
                BattleLayer.knights_baseinfo_list.push(knight_base_info);
            }
            i += span;
        }
    };
    BattleLayer.AddArenaNpcKnightsToBattle = function (npc_list) {
        var i = 4;
        var span = -1;
        var direction = -1;
        if (BattleLayer.self_knight_direction == -1) {
            i = 0;
            span = 1;
            direction = 1;
        }
        while (i >= 0 && i < 5) {
            var npc_id = npc_list[i];
            var npc_data = Utils.getLine("npc_list", npc_id);
            if (npc_data != null) {
                var knight_base_info = new Knight_BaseInfo();
                knight_base_info.name = npc_data[npc_list_name];
                knight_base_info.type = npc_data[npc_list_job];
                knight_base_info.level = npc_data[npc_list_knight_id];
                knight_base_info.attack_factor = npc_data[npc_list_attack_factor] / 10000;
                knight_base_info.defense_factor = npc_data[npc_list_defense_factor] / 10000;
                knight_base_info.hp_factor = npc_data[npc_list_hp_factor] / 10000;
                knight_base_info.pos_offset = Logic.getPosXOffsetByPosition(i);
                knight_base_info.move_direction = direction;
                knight_base_info.left_hp = -1;
                BattleLayer.knights_baseinfo_list.push(knight_base_info);
            }
            i += span;
        }
    };
    BattleLayer.InitJobTeamBattleInfo = function (self_direction) {
        if (self_direction === void 0) { self_direction = 1; }
        if (self_direction > 0) {
            self_direction = 1;
        }
        else {
            self_direction = -1;
        }
        BattleLayer.battle_type = 4 /* JOB_TEAM_BATTLE */;
        BattleLayer.self_knight_direction = self_direction;
        BattleLayer.is_server_battle = false;
        BattleLayer.server_battle_result = 0;
        BattleLayer.knights_baseinfo_list = [];
    };
    BattleLayer.AddPlayerKnightsToBattleForJobTeam = function (members_list) {
        var i = 0;
        var span = 1;
        if (BattleLayer.self_knight_direction == -1) {
            i = 4;
            span = -1;
        }
        while (i >= 0 && i < 5) {
            var knight_info = members_list[i];
            if (knight_info != null) {
                var knight_base_info = new Knight_BaseInfo();
                knight_base_info.isPlayer = true;
                knight_base_info.name = knight_info.name;
                knight_base_info.type = knight_info.type;
                knight_base_info.level = knight_info.level;
                knight_base_info.attack_factor = 1;
                knight_base_info.defense_factor = 1;
                knight_base_info.hp_factor = 1;
                knight_base_info.pos_offset = Logic.getPosXOffsetByPosition(i);
                knight_base_info.move_direction = BattleLayer.self_knight_direction;
                knight_base_info.left_hp = -1;
                BattleLayer.knights_baseinfo_list.push(knight_base_info);
            }
            i += span;
        }
    };
    BattleLayer.AddJobTeamNpcKnightsToBattle = function (npc_list) {
        var i = 4;
        var span = -1;
        var direction = -1;
        if (BattleLayer.self_knight_direction == -1) {
            i = 0;
            span = 1;
            direction = 1;
        }
        while (i >= 0 && i < 5) {
            var npc_id = npc_list[i];
            var npc_data = Utils.getLine("npc_list", npc_id);
            if (npc_data != null) {
                var knight_base_info = new Knight_BaseInfo();
                knight_base_info.name = npc_data[npc_list_name];
                knight_base_info.type = npc_data[npc_list_job];
                knight_base_info.level = npc_data[npc_list_knight_id];
                knight_base_info.attack_factor = npc_data[npc_list_attack_factor] / 10000;
                knight_base_info.defense_factor = npc_data[npc_list_defense_factor] / 10000;
                knight_base_info.hp_factor = npc_data[npc_list_hp_factor] / 10000;
                knight_base_info.pos_offset = Logic.getPosXOffsetByPosition(i);
                knight_base_info.move_direction = direction;
                knight_base_info.left_hp = -1;
                BattleLayer.knights_baseinfo_list.push(knight_base_info);
            }
            i += span;
        }
    };
    __egretProto__.showOnMainLayer = function (main_director) {
        this.main_director = main_director;
        // Add self layer to stage
        this.main_director.stage.addChildAt(this, 0);
        // Add UIStage.
        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 1);
        this.initBattleLayer();
        this.main_director.closeGateAnimLayer();
    };
    __egretProto__.removeFromMainLayer = function () {
        if (this.logic_timer != null) {
            this.logic_timer.stop();
            this.logic_timer = null;
        }
        this.main_director.stage.removeChild(this);
        this.main_director.stage.removeChild(this.guiLayer);
        this.releaseAllDragonRes();
        dragonBones.WorldClock.clock.clear();
    };
    __egretProto__.releaseKnightDragonRes = function (knight) {
        knight.knight_dragon.animation.stop();
        knight.knight_dragon.animation.dispose();
        knight.knight_shadow_dragon.animation.stop();
        knight.knight_shadow_dragon.animation.dispose();
        if (knight.fire_dragon != null) {
            knight.fire_dragon.animation.stop();
            knight.fire_dragon.animation.dispose();
        }
        if (knight.ice_dragon != null) {
            knight.ice_dragon.animation.stop();
            knight.ice_dragon.animation.dispose();
        }
        if (knight.sunder_dragon != null) {
            knight.sunder_dragon.animation.stop();
            knight.sunder_dragon.animation.dispose();
        }
        if (knight.recover_dragon != null) {
            knight.recover_dragon.animation.stop();
            knight.recover_dragon.animation.dispose();
        }
    };
    __egretProto__.releaseAllDragonRes = function () {
        // Traverse all the knights on the left.
        var iLeftLen = this.left_knights_list.length;
        for (var i = 0; i < iLeftLen; i++) {
            this.releaseKnightDragonRes(this.left_knights_list[i]);
        }
        // Traverse all the knights on the right.
        var iRightLen = this.right_knights_list.length;
        for (var i = 0; i < iRightLen; i++) {
            this.releaseKnightDragonRes(this.right_knights_list[i]);
        }
        // Traverse all the bullets on the left.
        iLeftLen = this.left_bullets_list.length;
        for (var i = 0; i < iLeftLen; i++) {
            this.left_bullets_list[i].bullet_dragon.animation.stop();
            this.left_bullets_list[i].bullet_dragon.animation.dispose();
        }
        // Traverse all the bullets on the right.
        iRightLen = this.right_bullets_list.length;
        for (var i = 0; i < iRightLen; i++) {
            this.right_bullets_list[i].bullet_dragon.animation.stop();
            this.right_bullets_list[i].bullet_dragon.animation.dispose();
        }
    };
    __egretProto__.initBattleLayer = function () {
        var battle_image_bg_name = "battle_bg_2_jpg";
        if (BattleLayer.battle_type == 2 /* QUEST_BATTLE */) {
            var battle_id = Logic.getCityBattleId(BattleLayer.city_id, BattleLayer.city_battle_index);
            var line = Utils.getLine("city_battle_list", battle_id);
            if (line != null) {
                battle_image_bg_name = "battle_bg_" + line[city_battle_list_battle_bg] + "_jpg";
            }
        }
        this.background = new egret.Bitmap();
        this.background.texture = RES.getRes(battle_image_bg_name);
        this.addChild(this.background);
        this.background.x = 0;
        this.background.y = (G.win_height - this.background.height) / 2;
        this.shadow_layer = new egret.DisplayObjectContainer();
        this.shadow_layer.width = G.win_width;
        this.shadow_layer.height = 0;
        this.shadow_layer.x = 0;
        this.shadow_layer.y = this.GROUND_POS_Y - 20;
        this.addChild(this.shadow_layer);
        this.loadAllKnightsInBattle();
        this.initBattleInforLayer();
        this.runStartBattleAnim();
    };
    __egretProto__.runStartBattleAnim = function () {
        var end_pos_y = this.top_hp_layer.y;
        this.top_hp_layer.y -= 200;
        var tw = egret.Tween.get(this.top_hp_layer);
        tw.wait(400).to({ y: end_pos_y }, 500, egret.Ease.sineIn);
        var end_pos_y2 = this.bottom_bg_layer.y;
        this.bottom_bg_layer.y += 100;
        var tw2 = egret.Tween.get(this.bottom_bg_layer);
        tw2.wait(400).to({ y: end_pos_y2 }, 500, egret.Ease.sineIn);
        var end_pos_y3 = this.bottom_knights_layer.y;
        this.bottom_knights_layer.y += 200;
        var tw3 = egret.Tween.get(this.bottom_knights_layer);
        tw3.wait(600).to({ y: end_pos_y3 }, 500, egret.Ease.sineIn).call(this.endStartBattleAnim, this);
    };
    __egretProto__.endStartBattleAnim = function () {
        if (BattleLayer.battle_type == -1 /* GUIDE_BATTLE1 */) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(100001, this, this, this.startBattle);
        }
        else {
            this.startBattle();
        }
    };
    __egretProto__.startBattle = function () {
        // TODO:
        this.battleStart();
        this.runAllHpAnimation();
    };
    __egretProto__.runLeftTeamHpAnim = function () {
        var end_width = this.getLeftSideHpInfo() * this.KNIGHT_TEAM_HP_WIDTH;
        var end_x = this.KNIGHT_TEAM_HP_WIDTH - end_width;
        if (end_width != this.left_team_hp_anim_mask.width) {
            var tw = egret.Tween.get(this.left_team_hp_anim_mask);
            tw.to({ x: end_x, width: end_width }, this.HP_MASK_ANIM_TIME);
        }
    };
    __egretProto__.runRightTeamHpAnim = function () {
        var end_width = this.getRightSideHpInfo() * this.KNIGHT_TEAM_HP_WIDTH;
        if (end_width != this.right_team_hp_anim_mask.width) {
            var tw = egret.Tween.get(this.right_team_hp_anim_mask);
            tw.to({ width: end_width }, this.HP_MASK_ANIM_TIME);
        }
    };
    __egretProto__.runSelfKnightsHpAnim = function () {
        var knight_list = this.left_knights_list;
        if (BattleLayer.self_knight_direction == -1) {
            knight_list = this.right_knights_list;
        }
        var knights_len = knight_list.length;
        for (var i = 0; i < knights_len; i++) {
            if (i == 5) {
                break;
            }
            var knight = knight_list[i];
            if (knight.hp_mask != null) {
                var end_width = (knight.hp / knight.hp_max) * this.SELF_KNIGHT_SMALL_HP_WIDTH;
                if (end_width != knight.hp_mask.width) {
                    var tw = egret.Tween.get(knight.hp_mask);
                    tw.to({ width: end_width }, this.HP_MASK_ANIM_TIME);
                }
            }
        }
    };
    __egretProto__.runAllHpAnimation = function () {
        this.runLeftTeamHpAnim();
        this.runRightTeamHpAnim();
        this.runSelfKnightsHpAnim();
        if (this.battle_end_flag == false) {
            var tw = egret.Tween.get(this);
            tw.wait(this.HP_MASK_ANIM_TIME).call(this.runAllHpAnimation, this);
        }
    };
    __egretProto__.initBattleInforLayer = function () {
        this.bottom_bg_layer = new egret.DisplayObjectContainer();
        this.addChild(this.bottom_bg_layer);
        for (var i = 0; i < 6; i++) {
            var bar_bg = new egret.Bitmap();
            bar_bg.texture = RES.getRes("bottom_bg_png");
            bar_bg.x = i * bar_bg.width;
            bar_bg.y = G.win_height - bar_bg.height + 2;
            this.bottom_bg_layer.addChild(bar_bg);
        }
        this.bottom_knights_layer = new egret.DisplayObjectContainer();
        this.addChild(this.bottom_knights_layer);
        var knight_bg_span = (G.win_width - 202 * 5) / 5;
        var knight_head_start = 0;
        var knight_head_span = 0;
        var knight_hp_start = 0;
        var knight_hp_span = 0;
        for (var i = 0; i < 5; i++) {
            var knight_bg = new egret.Bitmap();
            knight_bg.texture = RES.getRes("head_bg_png");
            knight_bg.x = knight_bg_span / 2 + i * knight_bg.width + i * knight_bg_span;
            knight_bg.y = G.win_height - knight_bg.height;
            this.bottom_knights_layer.addChild(knight_bg);
            if (knight_head_start == 0) {
                knight_head_start = knight_bg.x + knight_bg.width / 2;
                knight_head_span = knight_bg.width + knight_bg_span;
                knight_hp_start = knight_bg.x + (knight_bg.width - this.SELF_KNIGHT_SMALL_HP_WIDTH) / 2;
                knight_hp_span = knight_bg.width + knight_bg_span;
            }
        }
        // Add head icon of knights
        var knight_list = this.left_knights_list;
        var enemy_list = this.right_knights_list;
        if (BattleLayer.self_knight_direction == -1) {
            knight_list = this.right_knights_list;
            enemy_list = this.left_knights_list;
        }
        var player_knight = null;
        var enemy_knight = null;
        for (var i = 0; i < enemy_list.length; i++) {
            var knight = enemy_list[i];
            if (knight.isPlayer) {
                enemy_knight = knight;
                break;
            }
        }
        var knights_len = knight_list.length;
        for (var i = 0; i < knights_len; i++) {
            if (i == 5) {
                break;
            }
            var knight = knight_list[i];
            if (knight.isPlayer && player_knight == null) {
                player_knight = knight;
            }
            // Add head icon of knights
            var knight_head = new egret.Bitmap();
            knight_head.texture = RES.getRes(Utils.getKnightHeadNorName(knight.type, knight.isPlayer));
            knight_head.anchorX = 0.5;
            knight_head.anchorY = 0.5;
            knight_head.x = knight_head_start + i * knight_head_span;
            knight_head.y = G.win_height - 120;
            this.bottom_knights_layer.addChild(knight_head);
            knight.head_icon = knight_head;
            if (knight.move_direction == -1) {
                knight_head.scaleX = -1;
            }
            // Add hp bar
            var hp = new egret.Bitmap();
            hp.texture = RES.getRes("self_hp_small_png");
            hp.scale9Grid = new egret.Rectangle(10, 7, 26, 1);
            hp.width = this.SELF_KNIGHT_SMALL_HP_WIDTH;
            hp.height = 15;
            hp.x = knight_hp_start + i * knight_hp_span;
            hp.y = G.win_height - 59;
            this.bottom_knights_layer.addChild(hp);
            hp.mask = new egret.Rectangle(0, 0, (knight.hp / knight.hp_max) * this.SELF_KNIGHT_SMALL_HP_WIDTH, 15);
            knight.hp_mask = hp.mask;
            // Add knight point icon
            var point_img_name = Utils.getKnightPointImgName(knight.attack_factor, knight.defense_factor, knight.hp_factor);
            var knight_point1 = new egret.Bitmap();
            knight_point1.texture = RES.getRes(point_img_name);
            knight_point1.x = knight_hp_start - 21 + i * knight_hp_span;
            knight_point1.y = G.win_height - 29;
            this.bottom_knights_layer.addChild(knight_point1);
            var knight_point2 = new egret.Bitmap();
            knight_point2.texture = RES.getRes(point_img_name);
            knight_point2.x = knight_hp_start - 21 + 142 + i * knight_hp_span;
            knight_point2.y = G.win_height - 29;
            this.bottom_knights_layer.addChild(knight_point2);
            // Add level number
            var level_text = new egret.TextField();
            level_text.anchorX = 0.5;
            level_text.anchorY = 0.5;
            level_text.size = 20;
            level_text.width = 120;
            level_text.height = 30;
            level_text.text = "Lv." + knight.level;
            level_text.fontFamily = "Arial";
            level_text.textAlign = egret.HorizontalAlign.CENTER;
            level_text.verticalAlign = egret.VerticalAlign.MIDDLE;
            level_text.textColor = 0x00000;
            level_text.bold = true;
            level_text.italic = true;
            level_text.x = knight_head_start + i * knight_head_span;
            level_text.y = G.win_height - 20;
            this.bottom_knights_layer.addChild(level_text);
        }
        this.top_hp_layer = new egret.DisplayObjectContainer();
        this.addChild(this.top_hp_layer);
        var left_player_knight = null;
        var right_player_knight = null;
        if (player_knight != null && player_knight.move_direction == 1) {
            left_player_knight = player_knight;
            right_player_knight = enemy_knight;
        }
        else {
            left_player_knight = enemy_knight;
            right_player_knight = player_knight;
        }
        // Add left player knight info
        if (left_player_knight != null) {
            // head_bg_frame
            var knight_head_bg = new egret.Bitmap();
            knight_head_bg.texture = RES.getRes("head_bg_frame_png");
            knight_head_bg.anchorX = 0;
            knight_head_bg.anchorY = 0;
            knight_head_bg.x = 10;
            knight_head_bg.y = 0;
            this.top_hp_layer.addChild(knight_head_bg);
            var knight_head = new egret.Bitmap();
            knight_head.texture = RES.getRes(Utils.getKnightHeadNorName(left_player_knight.type, true));
            knight_head.anchorX = 0;
            knight_head.anchorY = 0;
            knight_head.x = 22;
            knight_head.y = 12;
            knight_head.scaleX = 0.38;
            knight_head.scaleY = 0.38;
            this.top_hp_layer.addChild(knight_head);
            // name
            var name_text_width = 80;
            if (left_player_knight.name.length <= 3) {
                name_text_width = 80;
            }
            else if (left_player_knight.name.length <= 5) {
                name_text_width = 130;
            }
            else {
                name_text_width = 180;
            }
            var name_bg = new egret.Bitmap();
            name_bg.texture = RES.getRes("black_round_square_png");
            name_bg.scale9Grid = new egret.Rectangle(14, 13, 21, 21);
            name_bg.width = name_text_width + 10;
            name_bg.height = 40;
            name_bg.x = 5;
            name_bg.y = 88;
            this.top_hp_layer.addChild(name_bg);
            var name_text = new egret.TextField();
            name_text.anchorX = 0;
            name_text.anchorY = 0;
            name_text.size = 25;
            name_text.width = name_text_width;
            name_text.height = 28;
            name_text.text = "" + left_player_knight.name;
            name_text.fontFamily = "Arial";
            name_text.textAlign = egret.HorizontalAlign.CENTER;
            name_text.verticalAlign = egret.VerticalAlign.MIDDLE;
            name_text.textColor = 0xF7EDBC;
            name_text.x = 10;
            name_text.y = 95;
            this.top_hp_layer.addChild(name_text);
            // level_bg.png
            var lv_top_img = new egret.Bitmap();
            lv_top_img.texture = RES.getRes("level_bg_png");
            lv_top_img.anchorX = 0;
            lv_top_img.anchorY = 0;
            lv_top_img.x = 20;
            lv_top_img.y = 50;
            this.top_hp_layer.addChild(lv_top_img);
            var level_text = new egret.TextField();
            level_text.anchorX = 0.5;
            level_text.anchorY = 0.5;
            level_text.size = 26;
            level_text.width = 45;
            level_text.height = 28;
            level_text.text = "" + left_player_knight.level;
            level_text.fontFamily = "Arial";
            level_text.textAlign = egret.HorizontalAlign.CENTER;
            level_text.verticalAlign = egret.VerticalAlign.MIDDLE;
            level_text.textColor = 0xF7EDBC;
            level_text.x = 65;
            level_text.y = 73;
            this.top_hp_layer.addChild(level_text);
        }
        // Add right player knight info
        if (right_player_knight != null) {
            // head_bg_frame
            var knight_head_bg = new egret.Bitmap();
            knight_head_bg.texture = RES.getRes("head_bg_frame_png");
            knight_head_bg.anchorX = 1;
            knight_head_bg.anchorY = 0;
            knight_head_bg.x = G.win_width - 10;
            knight_head_bg.y = 0;
            this.top_hp_layer.addChild(knight_head_bg);
            var knight_head = new egret.Bitmap();
            knight_head.texture = RES.getRes(Utils.getKnightHeadNorName(right_player_knight.type, true));
            knight_head.anchorX = 1;
            knight_head.anchorY = 0;
            knight_head.x = G.win_width - 74;
            knight_head.y = 12;
            knight_head.scaleX = -0.38;
            knight_head.scaleY = 0.38;
            this.top_hp_layer.addChild(knight_head);
            // name
            var name_text_width = 80;
            if (right_player_knight.name.length <= 3) {
                name_text_width = 80;
            }
            else if (right_player_knight.name.length <= 5) {
                name_text_width = 130;
            }
            else {
                name_text_width = 180;
            }
            var name_bg = new egret.Bitmap();
            name_bg.texture = RES.getRes("black_round_square_png");
            name_bg.scale9Grid = new egret.Rectangle(14, 13, 21, 21);
            name_bg.width = name_text_width + 10;
            name_bg.height = 40;
            name_bg.anchorX = 1;
            name_bg.anchorY = 0;
            name_bg.x = G.win_width - 5;
            name_bg.y = 88;
            this.top_hp_layer.addChild(name_bg);
            var name_text = new egret.TextField();
            name_text.anchorX = 1;
            name_text.anchorY = 0;
            name_text.size = 25;
            name_text.width = name_text_width;
            name_text.height = 28;
            name_text.text = "" + right_player_knight.name;
            name_text.fontFamily = "Arial";
            name_text.textAlign = egret.HorizontalAlign.CENTER;
            name_text.verticalAlign = egret.VerticalAlign.MIDDLE;
            name_text.textColor = 0xF7EDBC;
            name_text.x = G.win_width - 10;
            name_text.y = 95;
            this.top_hp_layer.addChild(name_text);
            // level_bg.png
            var lv_top_img = new egret.Bitmap();
            lv_top_img.texture = RES.getRes("level_bg_png");
            lv_top_img.anchorX = 1;
            lv_top_img.anchorY = 0;
            lv_top_img.x = G.win_width - 5;
            lv_top_img.y = 50;
            this.top_hp_layer.addChild(lv_top_img);
            var level_text = new egret.TextField();
            level_text.anchorX = 0.5;
            level_text.anchorY = 0.5;
            level_text.size = 26;
            level_text.width = 45;
            level_text.height = 28;
            level_text.text = "" + right_player_knight.level;
            level_text.fontFamily = "Arial";
            level_text.textAlign = egret.HorizontalAlign.CENTER;
            level_text.verticalAlign = egret.VerticalAlign.MIDDLE;
            level_text.textColor = 0xF7EDBC;
            level_text.x = G.win_width - 30;
            level_text.y = 73;
            this.top_hp_layer.addChild(level_text);
        }
        var right_flag_name = "enemy_flag_bg_png";
        var left_flag_name = "self_flag_bg_png";
        if (BattleLayer.self_knight_direction == -1) {
            right_flag_name = "self_flag_bg_png";
            left_flag_name = "enemy_flag_bg_png";
        }
        // Add right flag
        var right_flag = new egret.Bitmap();
        right_flag.texture = RES.getRes(right_flag_name);
        right_flag.x = G.win_width / 2 + 270;
        right_flag.y = 63;
        this.top_hp_layer.addChild(right_flag);
        // Add left flag
        var left_flag = new egret.Bitmap();
        left_flag.texture = RES.getRes(left_flag_name);
        left_flag.x = G.win_width / 2 - 270 - 92;
        left_flag.y = 63;
        this.top_hp_layer.addChild(left_flag);
        // Add hp bg bar
        var hp_bg_bar = new egret.Bitmap();
        hp_bg_bar.texture = RES.getRes("hp_bar_bg_png");
        hp_bg_bar.anchorX = 0.5;
        hp_bg_bar.x = G.win_width / 2;
        hp_bg_bar.y = 30;
        this.top_hp_layer.addChild(hp_bg_bar);
        var right_hp_bar_name = "enemy_hp_large_png";
        var left_hp_bar_name = "self_hp_large_png";
        if (BattleLayer.self_knight_direction == -1) {
            right_hp_bar_name = "self_hp_large_png";
            left_hp_bar_name = "enemy_hp_large_png";
        }
        // Add right hp animation bar
        var right_hp_anim = new egret.Bitmap();
        right_hp_anim.texture = RES.getRes(right_hp_bar_name);
        right_hp_anim.scale9Grid = new egret.Rectangle(13, 11, 46, 3);
        right_hp_anim.width = this.KNIGHT_TEAM_HP_WIDTH;
        right_hp_anim.height = 24;
        right_hp_anim.x = G.win_width / 2 + 40;
        right_hp_anim.y = 44;
        this.top_hp_layer.addChild(right_hp_anim);
        right_hp_anim.mask = new egret.Rectangle(0, 0, this.getRightSideHpInfo() * this.KNIGHT_TEAM_HP_WIDTH, 24);
        this.right_team_hp_anim_mask = right_hp_anim.mask;
        // Add left hp animation bar
        var left_hp_anim = new egret.Bitmap();
        left_hp_anim.texture = RES.getRes(left_hp_bar_name);
        left_hp_anim.scale9Grid = new egret.Rectangle(13, 11, 46, 3);
        left_hp_anim.width = this.KNIGHT_TEAM_HP_WIDTH;
        left_hp_anim.height = 24;
        left_hp_anim.x = G.win_width / 2 - 40 - this.KNIGHT_TEAM_HP_WIDTH;
        left_hp_anim.y = 44;
        this.top_hp_layer.addChild(left_hp_anim);
        var left_hp_width = this.getLeftSideHpInfo() * this.KNIGHT_TEAM_HP_WIDTH;
        var left_hp_bar_x = this.KNIGHT_TEAM_HP_WIDTH - left_hp_width;
        left_hp_anim.mask = new egret.Rectangle(left_hp_bar_x, 0, left_hp_width, 24);
        this.left_team_hp_anim_mask = left_hp_anim.mask;
        // Add right flag bar
        var right_flag_bar = new egret.Bitmap();
        right_flag_bar.texture = RES.getRes("flag_bar_png");
        right_flag_bar.x = G.win_width / 2 + 270;
        right_flag_bar.y = -54;
        this.top_hp_layer.addChild(right_flag_bar);
        // Add left flag bar
        var left_flag_bar = new egret.Bitmap();
        left_flag_bar.texture = RES.getRes("flag_bar_png");
        left_flag_bar.x = G.win_width / 2 - 270;
        left_flag_bar.y = -54;
        left_flag_bar.scaleX = -1;
        this.top_hp_layer.addChild(left_flag_bar);
        // Add vs image
        var vs_img = new egret.Bitmap();
        vs_img.texture = RES.getRes("vs_png");
        vs_img.anchorX = 0.5;
        vs_img.x = G.win_width / 2;
        vs_img.y = 0;
        this.top_hp_layer.addChild(vs_img);
    };
    __egretProto__.loadAllKnightsInBattle = function () {
        for (var i = 0; i < BattleLayer.knights_baseinfo_list.length; i++) {
            var knight_base_info = BattleLayer.knights_baseinfo_list[i];
            var knight_datas = Logic.getKnightDatas(knight_base_info.type, knight_base_info.level, knight_base_info.attack_factor, knight_base_info.defense_factor, knight_base_info.hp_factor);
            var knight = this.initKnightData(knight_datas);
            if (knight != null) {
                knight.isPlayer = knight_base_info.isPlayer;
                knight.name = knight_base_info.name;
                knight.level = knight_base_info.level;
                knight.attack_factor = knight_base_info.attack_factor;
                knight.defense_factor = knight_base_info.defense_factor;
                knight.hp_factor = knight_base_info.hp_factor;
                knight.move_direction = knight_base_info.move_direction;
                this.addKnightLayer(knight);
                if (knight.move_direction == 1) {
                    // In left
                    knight.pos_x = knight_base_info.pos_offset;
                    this.left_knights_list.push(knight);
                }
                else {
                    // In right
                    knight.pos_x = this.RIGHT_SIDE - knight_base_info.pos_offset;
                    this.right_knights_list.push(knight);
                }
                if (knight_base_info.left_hp >= 0) {
                    knight.hp = knight_base_info.left_hp;
                    if (knight.hp <= 0) {
                        knight.hp = 1;
                    }
                    if (knight.hp > knight.hp_max) {
                        knight.hp = knight.hp_max;
                    }
                }
                this.refreshKnightPos(knight);
                this.output_battle_info("knight.name = " + knight.name);
                this.output_battle_info("knight.pos_x = " + knight.pos_x);
            }
        }
        for (var i = 0; i < this.left_knights_list.length; i++) {
            var knight = this.left_knights_list[i];
            this.setChildIndex(knight.knight_layer, this.bottom_alive_knight_zorder);
        }
    };
    __egretProto__.battleStart = function () {
        this.output_battle_info("###################开始战斗###############");
        // 每秒60帧，即每隔0.017秒绘制一帧
        this.logic_timer = new egret.Timer(17, -1);
        this.logic_timer.addEventListener(egret.TimerEvent.TIMER, this.onBattleLogicTimer, this);
        this.logic_timer.start();
    };
    __egretProto__.onBattleLogicTimer = function (event) {
        var battle_end = this.battle_logic_tick();
        this.refreshBattleLayer();
        if (battle_end) {
            // 战斗结束
            if (this.logic_timer != null) {
                this.logic_timer.stop();
                this.logic_timer = null;
            }
            this.battle_end_flag = true;
            this.show_battle_result();
        }
    };
    __egretProto__.refreshBattleLayer = function () {
        var iLeftLen = this.left_knights_list.length;
        for (var i = 0; i < iLeftLen; i++) {
            this.refreshKnightPos(this.left_knights_list[i]);
        }
        var iRightLen = this.right_knights_list.length;
        for (var i = 0; i < iRightLen; i++) {
            this.refreshKnightPos(this.right_knights_list[i]);
        }
        iLeftLen = this.left_bullets_list.length;
        for (var i = 0; i < iLeftLen; i++) {
            this.refreshBulletPos(this.left_bullets_list[i]);
        }
        iRightLen = this.right_bullets_list.length;
        for (var i = 0; i < iRightLen; i++) {
            this.refreshBulletPos(this.right_bullets_list[i]);
        }
    };
    BattleLayer.getBattleRandomInt = function (min, max) {
        if (BattleLayer.is_server_battle) {
            return Utils.ClientRandInt(min, max);
        }
        else {
            return Utils.LogicRandInt(min, max);
        }
    };
    __egretProto__.output_battle_info = function (strMsg) {
        if (this.IS_DEBUG_OUTPUT == false) {
            return;
        }
        console.log(strMsg);
    };
    __egretProto__.refreshKnightPos = function (knight) {
        knight.knight_layer.x = this.GROUND_POS_MINX + this.GROUND_POS_X_FACTOR * knight.pos_x;
        var dd = knight.knight_shadow_dragon.getDisplay();
        var offset_x = -30;
        if (knight.move_direction != 1) {
            offset_x = 30;
        }
        dd.x = this.GROUND_POS_MINX + this.GROUND_POS_X_FACTOR * knight.pos_x + offset_x;
    };
    __egretProto__.addKnightLayer = function (knight) {
        var knight_dragon_name = "zspt";
        var knight_layer_width = 60;
        var knight_layer_height = 80;
        var knight_pos_y = 0;
        switch (knight.type) {
            case 1 /* KNIGHT_SOLDIER */:
                {
                    knight_dragon_name = "zspt";
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjzspt";
                        knight_pos_y -= 12;
                    }
                    break;
                }
            case 2 /* KNIGHT_BOWMAN */:
                {
                    knight_dragon_name = "ycpt";
                    knight_pos_y -= 6;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjycpt";
                        knight_pos_y += 2;
                    }
                    break;
                }
            case 3 /* KNIGHT_ENCHANTER */:
                {
                    knight_dragon_name = "fspt";
                    knight_pos_y -= 9;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjfspt";
                    }
                    break;
                }
            case 4 /* KNIGHT_CHEVALIER */:
                {
                    knight_dragon_name = "zsqs";
                    knight_pos_y -= 0;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjzsqs";
                        knight_pos_y += 18;
                    }
                    break;
                }
            case 5 /* KNIGHT_FIGHTER */:
                {
                    knight_dragon_name = "zscm";
                    knight_pos_y += 4;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjzscm";
                        knight_pos_y -= 4;
                    }
                    break;
                }
            case 6 /* KNIGHT_ASSASSINATOR */:
                {
                    knight_dragon_name = "zsck";
                    knight_pos_y -= 5;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjzsck";
                        knight_pos_y += 26;
                    }
                    break;
                }
            case 7 /* KNIGHT_LONG_BOWMAN */:
                {
                    knight_dragon_name = "yccg";
                    knight_pos_y -= 7;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjyccg";
                        knight_pos_y += 16;
                    }
                    break;
                }
            case 8 /* KNIGHT_CROSS_BOWMAN */:
                {
                    knight_dragon_name = "ycns";
                    knight_pos_y -= 14;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjycns";
                        knight_pos_y += 16;
                    }
                    break;
                }
            case 9 /* KNIGHT_FIRE_ENCHANTER */:
                {
                    knight_dragon_name = "fshf";
                    knight_pos_y -= 30;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjfshf";
                        knight_pos_y += 30;
                    }
                    break;
                }
            case 10 /* KNIGHT_ICE_ENCHANTER */:
                {
                    knight_dragon_name = "fsbf";
                    knight_pos_y -= 13;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjfsbf";
                        knight_pos_y += 40;
                    }
                    break;
                }
            case 11 /* KNIGHT_MINISTER */:
                {
                    knight_dragon_name = "fsms";
                    knight_pos_y -= 1;
                    if (knight.isPlayer) {
                        knight_dragon_name = "zjfsms";
                        knight_pos_y += 20;
                    }
                    break;
                }
        }
        if (knight.move_direction == BattleLayer.self_knight_direction) {
            knight_dragon_name += "001";
        }
        else {
            knight_dragon_name += "002";
            if (knight_dragon_name == "zspt002") {
                knight_dragon_name = "zspt001";
            }
        }
        knight.knight_layer = new egret.DisplayObjectContainer();
        knight.knight_layer.anchorX = 1.0;
        knight.knight_layer.anchorY = 1.0;
        knight.knight_layer.width = knight_layer_width;
        knight.knight_layer.height = knight_layer_height;
        knight.knight_layer.x = 0;
        knight.knight_layer.y = this.GROUND_POS_Y;
        this.addChild(knight.knight_layer);
        if (this.bottom_alive_knight_zorder < 0) {
            this.bottom_alive_knight_zorder = this.getChildIndex(knight.knight_layer);
        }
        /*
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0xff0000 );
        shp.graphics.drawRect( 0,0,knight_layer_width,knight_layer_height);
        shp.graphics.endFill();
        knight.knight_layer.addChild( shp );
        */
        knight.knight_dragon = Utils.createDragonBone(knight_dragon_name);
        var dd = knight.knight_dragon.getDisplay();
        dd.x = knight.knight_layer.width / 2;
        dd.y = knight.knight_layer.height / 2 + knight_pos_y;
        knight.knight_layer.addChild(dd);
        knight.knight_dragon.animation.gotoAndPlay("zhanli");
        if (knight.move_direction == 1) {
            // In left
            knight.knight_layer.anchorY = 1.0;
        }
        else {
            // In right
            knight.knight_layer.anchorX = 0.0;
            var dd = knight.knight_dragon.getDisplay();
            dd.scaleX = -1.0;
        }
        // Add shadow for knight
        knight.knight_shadow_dragon = Utils.createDragonBone("yz");
        var dd = knight.knight_shadow_dragon.getDisplay();
        dd.x = 0;
        dd.y = 0;
        dd.alpha = 0.6;
        this.shadow_layer.addChild(dd);
        knight.knight_shadow_dragon.animation.gotoAndPlay("yingzi");
    };
    __egretProto__.setKnightBaseData = function (knight, data) {
        knight.hp = data[1];
        knight.hp_max = knight.hp;
        knight.defense = data[2];
        knight.hit_attack = data[3];
        knight.move_velocity = data[4];
        knight.hit_show_time = data[5];
        knight.hit_show_distance = data[6];
        knight.hit_back_distance = data[7];
        knight.self_back_velocity = data[8];
    };
    __egretProto__.setRemoteKnightBaseData = function (knight, data) {
        knight.hp = data[1];
        knight.hp_max = knight.hp;
        knight.defense = data[2];
        knight.hit_attack = data[3];
        knight.move_velocity = data[4];
        knight.hit_show_time = data[5];
        knight.hit_show_distance = data[6];
        knight.hit_back_distance = data[7];
        knight.self_back_velocity = data[8];
        knight.remote_hit_warning_distance = data[9];
        knight.remote_hit_attack = data[10];
        knight.remote_hit_show_time = data[11];
        knight.remote_hit_distance = data[12];
        knight.remote_hit_back_distance = data[13];
        knight.remote_hit_cd = data[14];
        knight.remote_hit_move_velocity = data[15];
    };
    __egretProto__.createOneSoldier = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setKnightBaseData(knight, data);
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 战士 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
        }
        return knight;
    };
    __egretProto__.createOneBowman = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setRemoteKnightBaseData(knight, data);
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 弓箭手 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.remote_hit_warning_distance = " + knight.remote_hit_warning_distance);
            this.output_battle_info("knight.remote_hit_attack = " + knight.remote_hit_attack);
            this.output_battle_info("knight.remote_hit_show_time = " + knight.remote_hit_show_time);
            this.output_battle_info("knight.remote_hit_distance = " + knight.remote_hit_distance);
            this.output_battle_info("knight.remote_hit_back_distance = " + knight.remote_hit_back_distance);
            this.output_battle_info("knight.remote_hit_cd = " + knight.remote_hit_cd);
            this.output_battle_info("knight.remote_hit_move_velocity = " + knight.remote_hit_move_velocity);
        }
        return knight;
    };
    __egretProto__.createOneEnchanter = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setRemoteKnightBaseData(knight, data);
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 法师 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.remote_hit_warning_distance = " + knight.remote_hit_warning_distance);
            this.output_battle_info("knight.remote_hit_attack = " + knight.remote_hit_attack);
            this.output_battle_info("knight.remote_hit_show_time = " + knight.remote_hit_show_time);
            this.output_battle_info("knight.remote_hit_distance = " + knight.remote_hit_distance);
            this.output_battle_info("knight.remote_hit_back_distance = " + knight.remote_hit_back_distance);
            this.output_battle_info("knight.remote_hit_cd = " + knight.remote_hit_cd);
            this.output_battle_info("knight.remote_hit_move_velocity = " + knight.remote_hit_move_velocity);
        }
        return knight;
    };
    __egretProto__.createOneChevalier = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setKnightBaseData(knight, data);
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 骑士 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
        }
        return knight;
    };
    __egretProto__.createOneFighter = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setKnightBaseData(knight, data);
        knight.self_back_immune_percent = data[9];
        knight.self_back_immune_value = data[10];
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 斗士 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.self_back_immune_percent = " + knight.self_back_immune_percent);
            this.output_battle_info("knight.self_back_immune_value = " + knight.self_back_immune_value);
        }
        return knight;
    };
    __egretProto__.createOneAssassinator = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setKnightBaseData(knight, data);
        knight.self_sunder_armor_percent = data[9];
        knight.self_sunder_armor_value = data[10];
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 刺客 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.self_sunder_armor_percent = " + knight.self_sunder_armor_percent);
            this.output_battle_info("knight.self_sunder_armor_value = " + knight.self_sunder_armor_value);
        }
        return knight;
    };
    __egretProto__.createOneLongBowman = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setRemoteKnightBaseData(knight, data);
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 长弓手 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.remote_hit_warning_distance = " + knight.remote_hit_warning_distance);
            this.output_battle_info("knight.remote_hit_attack = " + knight.remote_hit_attack);
            this.output_battle_info("knight.remote_hit_show_time = " + knight.remote_hit_show_time);
            this.output_battle_info("knight.remote_hit_distance = " + knight.remote_hit_distance);
            this.output_battle_info("knight.remote_hit_back_distance = " + knight.remote_hit_back_distance);
            this.output_battle_info("knight.remote_hit_cd = " + knight.remote_hit_cd);
            this.output_battle_info("knight.remote_hit_move_velocity = " + knight.remote_hit_move_velocity);
        }
        return knight;
    };
    __egretProto__.createOneCrossBowman = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setRemoteKnightBaseData(knight, data);
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 弩手 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.remote_hit_warning_distance = " + knight.remote_hit_warning_distance);
            this.output_battle_info("knight.remote_hit_attack = " + knight.remote_hit_attack);
            this.output_battle_info("knight.remote_hit_show_time = " + knight.remote_hit_show_time);
            this.output_battle_info("knight.remote_hit_distance = " + knight.remote_hit_distance);
            this.output_battle_info("knight.remote_hit_back_distance = " + knight.remote_hit_back_distance);
            this.output_battle_info("knight.remote_hit_cd = " + knight.remote_hit_cd);
            this.output_battle_info("knight.remote_hit_move_velocity = " + knight.remote_hit_move_velocity);
        }
        return knight;
    };
    __egretProto__.createOneFireEnchanter = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setRemoteKnightBaseData(knight, data);
        knight.self_critical_percent = data[16];
        knight.self_critical_value = data[17];
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 火法师 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.remote_hit_warning_distance = " + knight.remote_hit_warning_distance);
            this.output_battle_info("knight.remote_hit_attack = " + knight.remote_hit_attack);
            this.output_battle_info("knight.remote_hit_show_time = " + knight.remote_hit_show_time);
            this.output_battle_info("knight.remote_hit_distance = " + knight.remote_hit_distance);
            this.output_battle_info("knight.remote_hit_back_distance = " + knight.remote_hit_back_distance);
            this.output_battle_info("knight.remote_hit_cd = " + knight.remote_hit_cd);
            this.output_battle_info("knight.remote_hit_move_velocity = " + knight.remote_hit_move_velocity);
            this.output_battle_info("knight.self_critical_percent = " + knight.self_critical_percent);
            this.output_battle_info("knight.self_critical_value = " + knight.self_critical_value);
        }
        return knight;
    };
    __egretProto__.createOneIceEnchanter = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setRemoteKnightBaseData(knight, data);
        knight.self_frozen_percent = data[16];
        knight.self_frozen_value = data[17];
        knight.self_frozen_time = data[18];
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 冰法师 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.remote_hit_warning_distance = " + knight.remote_hit_warning_distance);
            this.output_battle_info("knight.remote_hit_attack = " + knight.remote_hit_attack);
            this.output_battle_info("knight.remote_hit_show_time = " + knight.remote_hit_show_time);
            this.output_battle_info("knight.remote_hit_distance = " + knight.remote_hit_distance);
            this.output_battle_info("knight.remote_hit_back_distance = " + knight.remote_hit_back_distance);
            this.output_battle_info("knight.remote_hit_cd = " + knight.remote_hit_cd);
            this.output_battle_info("knight.remote_hit_move_velocity = " + knight.remote_hit_move_velocity);
            this.output_battle_info("knight.self_frozen_percent = " + knight.self_frozen_percent);
            this.output_battle_info("knight.self_frozen_value = " + knight.self_frozen_value);
            this.output_battle_info("knight.self_frozen_time = " + knight.self_frozen_time);
        }
        return knight;
    };
    __egretProto__.createOneMinister = function (data) {
        var knight = new Knight();
        knight.type = data[0];
        this.setRemoteKnightBaseData(knight, data);
        knight.remote_recover_attack = data[16];
        knight.remote_recover_distance = data[17];
        if (this.IS_DEBUG_OUTPUT) {
            this.output_battle_info("+++ 牧师 +++");
            this.output_battle_info("knight.hp = " + knight.hp);
            this.output_battle_info("knight.defense = " + knight.defense);
            this.output_battle_info("knight.hit_attack = " + knight.hit_attack);
            this.output_battle_info("knight.move_velocity = " + knight.move_velocity);
            this.output_battle_info("knight.hit_show_time = " + knight.hit_show_time);
            this.output_battle_info("knight.hit_show_distance = " + knight.hit_show_distance);
            this.output_battle_info("knight.hit_back_distance = " + knight.hit_back_distance);
            this.output_battle_info("knight.self_back_velocity = " + knight.self_back_velocity);
            this.output_battle_info("knight.remote_hit_warning_distance = " + knight.remote_hit_warning_distance);
            this.output_battle_info("knight.remote_hit_attack = " + knight.remote_hit_attack);
            this.output_battle_info("knight.remote_hit_show_time = " + knight.remote_hit_show_time);
            this.output_battle_info("knight.remote_hit_distance = " + knight.remote_hit_distance);
            this.output_battle_info("knight.remote_hit_back_distance = " + knight.remote_hit_back_distance);
            this.output_battle_info("knight.remote_hit_cd = " + knight.remote_hit_cd);
            this.output_battle_info("knight.remote_hit_move_velocity = " + knight.remote_hit_move_velocity);
            this.output_battle_info("knight.remote_recover_attack = " + knight.remote_recover_attack);
            this.output_battle_info("knight.remote_recover_distance = " + knight.remote_recover_distance);
        }
        return knight;
    };
    __egretProto__.initKnightData = function (data) {
        var knight = null;
        if (data[0] == 1 /* KNIGHT_SOLDIER */) {
            knight = this.createOneSoldier(data);
        }
        else if (data[0] == 2 /* KNIGHT_BOWMAN */) {
            knight = this.createOneBowman(data);
        }
        else if (data[0] == 3 /* KNIGHT_ENCHANTER */) {
            knight = this.createOneEnchanter(data);
        }
        else if (data[0] == 4 /* KNIGHT_CHEVALIER */) {
            knight = this.createOneChevalier(data);
        }
        else if (data[0] == 5 /* KNIGHT_FIGHTER */) {
            knight = this.createOneFighter(data);
        }
        else if (data[0] == 6 /* KNIGHT_ASSASSINATOR */) {
            knight = this.createOneAssassinator(data);
        }
        else if (data[0] == 7 /* KNIGHT_LONG_BOWMAN */) {
            knight = this.createOneLongBowman(data);
        }
        else if (data[0] == 8 /* KNIGHT_CROSS_BOWMAN */) {
            knight = this.createOneCrossBowman(data);
        }
        else if (data[0] == 9 /* KNIGHT_FIRE_ENCHANTER */) {
            knight = this.createOneFireEnchanter(data);
        }
        else if (data[0] == 10 /* KNIGHT_ICE_ENCHANTER */) {
            knight = this.createOneIceEnchanter(data);
        }
        else if (data[0] == 11 /* KNIGHT_MINISTER */) {
            knight = this.createOneMinister(data);
        }
        return knight;
    };
    // knight1和knight2相遇，进入近战状态
    __egretProto__.knight_start_hit = function (knight1, knight2) {
        // 自己进入近战攻击状态
        knight1.status = 5 /* HIT */;
        knight1.self_back_distance = knight2.hit_back_distance;
        var iDamage = knight2.hit_attack - knight1.defense;
        if (iDamage <= 0) {
            iDamage = 1;
        }
        if (knight2.self_sunder_armor_percent > 0) {
            var rand = BattleLayer.getBattleRandomInt(0, 10000);
            if (rand <= knight2.self_sunder_armor_percent) {
                var armor_percent = (100 - knight2.self_sunder_armor_value) / 100;
                iDamage = Math.round(knight2.hit_attack - knight1.defense * armor_percent);
                this.showSunderArmorAnimation(knight1);
                if (this.IS_DEBUG_OUTPUT) {
                    var strMsg = "^^^^^^ " + knight2.name + " 破甲了，破甲比例：" + knight2.self_sunder_armor_value;
                    this.output_battle_info(strMsg);
                }
            }
        }
        knight1.hit_delay_damage = iDamage;
        knight1.self_back_start_time = this.TIME + knight1.self_back_distance / knight1.self_back_velocity / 2;
        knight1.self_back_velocity_a = knight1.self_back_velocity * knight1.self_back_velocity / knight1.self_back_distance;
        knight1.self_back_velocity_a = Math.round(knight1.self_back_velocity_a * 100) / 100;
        // 目前设定对手必然在MOVE状态，在BACKING状态不可被打击
        knight2.status = 5 /* HIT */;
        knight2.self_back_distance = knight1.hit_back_distance;
        iDamage = knight1.hit_attack - knight2.defense;
        if (iDamage <= 0) {
            iDamage = 1;
        }
        if (knight1.self_sunder_armor_percent > 0) {
            var rand = BattleLayer.getBattleRandomInt(0, 10000);
            if (rand <= knight1.self_sunder_armor_percent) {
                var armor_percent = (100 - knight1.self_sunder_armor_value) / 100;
                iDamage = Math.round(knight1.hit_attack - knight2.defense * armor_percent);
                this.showSunderArmorAnimation(knight2);
                if (this.IS_DEBUG_OUTPUT) {
                    var strMsg = "^^^^^^ " + knight1.name + " 破甲了，破甲比例：" + knight1.self_sunder_armor_value;
                    this.output_battle_info(strMsg);
                }
            }
        }
        knight2.hit_delay_damage = iDamage;
        knight2.self_back_start_time = this.TIME + knight2.self_back_distance / knight2.self_back_velocity / 2;
        knight2.self_back_velocity_a = knight2.self_back_velocity * knight2.self_back_velocity / knight2.self_back_distance;
        knight2.self_back_velocity_a = Math.round(knight2.self_back_velocity_a * 100) / 100;
        if (knight1.type == 5 /* KNIGHT_FIGHTER */ && knight2.type == 5 /* KNIGHT_FIGHTER */) {
            knight1.self_back_immune_invalid = true;
            knight2.self_back_immune_invalid = true;
        }
        if (this.IS_DEBUG_OUTPUT) {
            var strMsg = ">>>>>> " + knight1.name + "(位置" + knight1.pos_x + ")和" + knight2.name + "(位置" + knight2.pos_x + ")相遇，进入HIT(近战攻击状态)";
            this.output_battle_info(strMsg);
        }
    };
    __egretProto__.showSunderArmorAnimation = function (knight) {
        if (knight.sunder_dragon == null) {
            knight.sunder_dragon = Utils.createDragonBone("pj");
            var dd = knight.sunder_dragon.getDisplay();
            dd.x = knight.knight_layer.width / 2;
            dd.y = knight.knight_layer.height / 2;
            knight.knight_layer.addChild(dd);
        }
        knight.sunder_dragon.animation.gotoAndPlay("pojia");
    };
    __egretProto__.bullet_disappear = function (bullet) {
        var bullets_list = null;
        if (bullet.move_direction == 1) {
            bullets_list = this.left_bullets_list;
        }
        else {
            bullets_list = this.right_bullets_list;
        }
        var bullets_len = bullets_list.length;
        for (var i = 0; i < bullets_len; i++) {
            if (bullets_list[i] == bullet) {
                this.removeChild(bullets_list[i].bullet_layer);
                bullets_list[i].bullet_dragon.animation.stop();
                bullets_list[i].bullet_dragon.animation.dispose();
                bullets_list.splice(i, 1);
                break;
            }
        }
    };
    // knight遇到bullet的远程攻击
    __egretProto__.knight_be_remote_hit = function (knight, bullet) {
        knight.status = 1 /* BE_REMOTE_HIT */;
        knight.self_back_distance = bullet.remote_hit_back_distance;
        var iDamage = bullet.attack - knight.defense;
        if (iDamage <= 0) {
            iDamage = 1;
        }
        knight.hit_delay_damage = iDamage;
        knight.self_back_start_time = this.TIME + knight.self_back_distance / knight.self_back_velocity / 2;
        knight.self_back_velocity_a = knight.self_back_velocity * knight.self_back_velocity / knight.self_back_distance;
        knight.self_back_velocity_a = Math.round(knight.self_back_velocity_a * 100) / 100;
        if (bullet.self_frozen_value > 0) {
            knight.move_frozen_value = bullet.self_frozen_value;
            knight.move_frozen_end_time = this.TIME + bullet.self_frozen_time;
            if (knight.ice_dragon == null) {
                knight.ice_dragon = Utils.createDragonBone("js");
                var dd = knight.ice_dragon.getDisplay();
                dd.x = knight.knight_layer.width / 2;
                dd.y = knight.knight_layer.height / 2;
                knight.knight_layer.addChild(dd);
            }
            knight.ice_dragon.animation.gotoAndPlay("jiansu1");
        }
        if (bullet.self_critical_value > 0) {
            if (knight.fire_dragon == null) {
                knight.fire_dragon = Utils.createDragonBone("bj");
                var dd = knight.fire_dragon.getDisplay();
                dd.x = knight.knight_layer.width / 2;
                dd.y = knight.knight_layer.height / 2;
                knight.knight_layer.addChild(dd);
            }
            knight.fire_dragon.animation.gotoAndPlay("baoji");
        }
        if (this.IS_DEBUG_OUTPUT) {
            var strMsg = ">>>>>> " + knight.name + "被" + bullet.name + "射中，进入BE_REMOTE_HIT(被远程打击状态)";
            this.output_battle_info(strMsg);
        }
        this.bullet_disappear(bullet);
    };
    // knight即将死亡
    __egretProto__.knight_be_dying = function (knight) {
        if (this.IS_DEBUG_OUTPUT) {
            var strMsg = ">>>>>> " + knight.name + "进入DEAD(死亡状态)";
            this.output_battle_info(strMsg);
        }
        this.setChildIndex(knight.knight_layer, this.bottom_alive_knight_zorder);
        this.bottom_alive_knight_zorder += 1;
        knight.knight_dragon.animation.gotoAndPlay("siwang");
        knight.knight_shadow_dragon.animation.gotoAndPlay("siwang");
        if (knight.move_frozen_value > 0) {
            knight.move_frozen_value = 0;
            if (knight.ice_dragon != null) {
                knight.ice_dragon.animation.gotoAndPlay("jiansu2");
            }
        }
        if (knight.head_icon != null) {
            knight.head_icon.texture = RES.getRes(Utils.getKnightHeadDeadName(knight.type, knight.isPlayer));
        }
    };
    __egretProto__.refreshBulletPos = function (bullet) {
        bullet.bullet_layer.x = this.GROUND_POS_MINX + this.GROUND_POS_X_FACTOR * bullet.pos_x;
    };
    __egretProto__.addBulletLayer = function (bullet) {
        var bullet_dragon_name = "ycpt001_wuqi";
        var bullet_layer_width = 36;
        var bullet_layer_height = 12;
        var bullet_pos_x_offset = 0;
        var bullet_pos_y = this.GROUND_POS_Y - 50;
        var bullet_scale_factor = 1.0;
        var isSelfBullet = true;
        if (bullet.move_direction != BattleLayer.self_knight_direction) {
            isSelfBullet = false;
        }
        switch (bullet.type) {
            case 1 /* BULLET_BOW */:
                {
                    bullet_dragon_name = "ycpt001_wuqi";
                    if (isSelfBullet == false) {
                        bullet_dragon_name = "ycpt002_wuqi";
                    }
                    bullet_pos_y += 13;
                    break;
                }
            case 2 /* BULLET_MAGIC */:
                {
                    bullet_dragon_name = "fspt001_wuqi";
                    if (isSelfBullet == false) {
                        bullet_dragon_name = "fspt002_wuqi";
                    }
                    if (bullet.isPlayer) {
                        bullet_pos_x_offset = 25;
                        bullet_pos_y = this.GROUND_POS_Y - 70;
                    }
                    break;
                }
            case 3 /* BULLET_LONG_BOW */:
                {
                    bullet_dragon_name = "yccg001_wuqi";
                    bullet_pos_y += 13;
                    break;
                }
            case 4 /* BULLET_CROSS_BOW */:
                {
                    bullet_dragon_name = "ycns001_wuqi";
                    if (isSelfBullet == false) {
                        bullet_dragon_name = "ycns002_wuqi";
                    }
                    bullet_pos_y += 13;
                    break;
                }
            case 5 /* BULLET_FIRE */:
                {
                    bullet_dragon_name = "fshf001_wuqi";
                    bullet_pos_x_offset = 45;
                    bullet_pos_y -= 7;
                    if (bullet.isPlayer) {
                        bullet_pos_x_offset = 0;
                        bullet_pos_y = this.GROUND_POS_Y - 65;
                        if (isSelfBullet == false) {
                            bullet_dragon_name = "zjfshf002_wuqi";
                        }
                        else {
                            bullet_dragon_name = "zjfshf001_wuqi";
                        }
                    }
                    if (bullet.self_critical_value > 0) {
                        bullet_scale_factor = 2.0;
                    }
                    break;
                }
            case 6 /* BULLET_ICE */:
                {
                    bullet_dragon_name = "fsbf001_wuqi";
                    bullet_pos_x_offset = 45;
                    bullet_pos_y -= 35;
                    if (bullet.isPlayer) {
                        bullet_pos_y = this.GROUND_POS_Y - 70;
                    }
                    break;
                }
            case 7 /* BULLET_SAN */:
                {
                    bullet_dragon_name = "fsms001_wuqi";
                    if (isSelfBullet == false) {
                        bullet_dragon_name = "fsms002_wuqi";
                    }
                    bullet_pos_x_offset = 10;
                    bullet_pos_y -= 5;
                    if (bullet.isPlayer) {
                        bullet_pos_y = this.GROUND_POS_Y - 80;
                    }
                    break;
                }
            default:
                return;
        }
        bullet.bullet_layer = new egret.DisplayObjectContainer();
        if (bullet.move_direction == 1) {
            bullet.bullet_layer.anchorX = 1.0;
        }
        else {
            bullet.bullet_layer.anchorX = 0.0;
        }
        bullet.bullet_layer.anchorY = 1.0;
        bullet.bullet_layer.width = bullet_layer_width;
        bullet.bullet_layer.height = bullet_layer_height;
        bullet.bullet_layer.x = this.refreshBulletPos(bullet);
        bullet.bullet_layer.y = bullet_pos_y;
        this.addChild(bullet.bullet_layer);
        /*
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0xff0000 );
        shp.graphics.drawRect( 0,0,bullet_layer_width,bullet_layer_height);
        shp.graphics.endFill();
        bullet.bullet_layer.addChild( shp );
        */
        bullet.bullet_dragon = Utils.createDragonBone(bullet_dragon_name);
        var dd = bullet.bullet_dragon.getDisplay();
        dd.x = bullet.bullet_layer.width / 2 + bullet_pos_x_offset;
        dd.y = bullet.bullet_layer.height / 2;
        dd.scaleX = bullet_scale_factor;
        dd.scaleY = bullet_scale_factor;
        bullet.bullet_layer.addChild(dd);
        if (bullet.move_direction == -1) {
            dd.scaleX = -bullet_scale_factor;
            dd.x = bullet.bullet_layer.width / 2 - bullet_pos_x_offset;
        }
        bullet.bullet_dragon.animation.gotoAndPlay("wuqi");
    };
    // knight进行远程攻击
    __egretProto__.knight_do_remote_hit = function (knight) {
        if (this.IS_DEBUG_OUTPUT) {
            var strMsg = "$$$$$$ " + knight.name + " 在" + knight.pos_x + "位置上远程攻击了";
            this.output_battle_info(strMsg);
        }
        var bullet = new Bullet();
        switch (knight.type) {
            case 2 /* KNIGHT_BOWMAN */:
                bullet.type = 1 /* BULLET_BOW */;
                break;
            case 3 /* KNIGHT_ENCHANTER */:
                bullet.type = 2 /* BULLET_MAGIC */;
                break;
            case 7 /* KNIGHT_LONG_BOWMAN */:
                bullet.type = 3 /* BULLET_LONG_BOW */;
                break;
            case 8 /* KNIGHT_CROSS_BOWMAN */:
                bullet.type = 4 /* BULLET_CROSS_BOW */;
                break;
            case 9 /* KNIGHT_FIRE_ENCHANTER */:
                {
                    bullet.type = 5 /* BULLET_FIRE */;
                    var rand = BattleLayer.getBattleRandomInt(0, 10000);
                    if (rand <= knight.self_critical_percent) {
                        bullet.self_critical_value = knight.self_critical_value; // 暴击比例
                        if (this.IS_DEBUG_OUTPUT) {
                            var strMsg = "^^^^^^ " + knight.name + " 在远程暴击了，暴击比例：" + bullet.self_critical_value;
                            this.output_battle_info(strMsg);
                        }
                    }
                    break;
                }
            case 10 /* KNIGHT_ICE_ENCHANTER */:
                {
                    bullet.type = 6 /* BULLET_ICE */;
                    var rand = BattleLayer.getBattleRandomInt(0, 10000);
                    if (rand <= knight.self_frozen_percent) {
                        bullet.self_frozen_value = knight.self_frozen_value; // 减速比例
                        bullet.self_frozen_time = knight.self_frozen_time; // 减速持续时间
                        if (this.IS_DEBUG_OUTPUT) {
                            var strMsg = "^^^^^^ " + knight.name + " 在远程减速攻击了~~~~~";
                            this.output_battle_info(strMsg);
                        }
                    }
                    break;
                }
            case 11 /* KNIGHT_MINISTER */:
                bullet.type = 7 /* BULLET_SAN */;
                break;
            default:
                var strErrorInfo = "!!!!!!!!!!! ERROR! Knight(" + knight.name + ") type(" + knight.type + ") 进行了远程攻击！";
                console.log(strErrorInfo);
                return;
        }
        bullet.isPlayer = knight.isPlayer;
        bullet.name = knight.name + "的子弹";
        bullet.move_direction = knight.move_direction;
        if (bullet.self_critical_value > 0) {
            bullet.attack = Math.round(knight.remote_hit_attack * bullet.self_critical_value / 100);
        }
        else {
            bullet.attack = knight.remote_hit_attack;
        }
        bullet.move_velocity = knight.remote_hit_move_velocity;
        bullet.pos_x = knight.pos_x;
        bullet.remote_hit_back_distance = knight.remote_hit_back_distance;
        this.addBulletLayer(bullet);
        if (knight.move_direction == 1) {
            this.left_bullets_list.push(bullet);
        }
        else {
            this.right_bullets_list.push(bullet);
        }
    };
    // knight进行远程治疗
    __egretProto__.knight_do_remote_recover = function (knight, knight_tobe_recover) {
        knight_tobe_recover.hp += knight.remote_recover_attack;
        if (knight_tobe_recover.hp > knight_tobe_recover.hp_max) {
            knight_tobe_recover.hp = knight_tobe_recover.hp_max;
        }
        if (knight_tobe_recover.recover_dragon == null) {
            knight_tobe_recover.recover_dragon = Utils.createDragonBone("jx001");
            var dd = knight_tobe_recover.recover_dragon.getDisplay();
            dd.x = knight_tobe_recover.knight_layer.width / 2;
            dd.y = knight_tobe_recover.knight_layer.height / 2;
            knight_tobe_recover.knight_layer.addChild(dd);
        }
        knight_tobe_recover.recover_dragon.animation.gotoAndPlay("jx");
        if (this.IS_DEBUG_OUTPUT) {
            var strMsg = "[[[]]] " + knight.name + " 在" + knight.pos_x + "位置上治疗了 " + knight_tobe_recover.name;
            this.output_battle_info(strMsg);
        }
    };
    // knight进行移动
    __egretProto__.knight_do_move = function (knight) {
        var mov_dis = knight.move_direction * knight.move_velocity * this.TICK_TIME;
        if (knight.move_frozen_value > 0 && knight.move_frozen_end_time >= this.TIME) {
            var frozen_percent = (100 - knight.move_frozen_value) / 100;
            mov_dis *= frozen_percent;
        }
        else {
            if (knight.move_frozen_value > 0) {
                knight.move_frozen_value = 0;
                if (knight.ice_dragon != null) {
                    knight.ice_dragon.animation.gotoAndPlay("jiansu2");
                }
            }
        }
        mov_dis = Math.round(mov_dis * 100) / 100;
        knight.pos_x += mov_dis;
        knight.pos_x = Math.round(knight.pos_x * 100) / 100;
        if (knight.pos_x > this.RIGHT_SIDE) {
            knight.pos_x = this.RIGHT_SIDE;
        }
        else if (knight.pos_x < this.LEFT_SIDE) {
            knight.pos_x = this.LEFT_SIDE;
        }
        if (this.IS_DEBUG_OUTPUT) {
            var strMsg = "====== " + knight.name + "(hp: " + knight.hp + ") MOVE(移动)到位置" + knight.pos_x;
            this.output_battle_info(strMsg);
        }
    };
    // knight击退免疫
    __egretProto__.knight_back_immune = function (knight) {
        if (knight.self_back_immune_percent <= 0) {
            return;
        }
        if (knight.self_back_immune_invalid == true) {
            knight.self_back_immune_invalid = false;
            return;
        }
        var rand = BattleLayer.getBattleRandomInt(0, 10000);
        if (rand <= knight.self_back_immune_percent) {
            var back_percent = 100 - knight.self_back_immune_value;
            knight.self_back_distance = Math.round(knight.self_back_distance * back_percent) / 100;
            if (this.IS_DEBUG_OUTPUT) {
                var strMsg = "^^^^^^ " + knight.name + " 击退减少了，减少比例：" + knight.self_back_immune_value;
                this.output_battle_info(strMsg);
            }
        }
    };
    // 战士(KNIGHT_SOLDIER)的逻辑函数，每调用一次，时间推进TICK_TIME秒
    __egretProto__.soldier_logic_tick = function (knight) {
        while (true) {
            switch (knight.status) {
                case 0 /* MOVE */:
                    {
                        // 1. MOVE --> BE_REMOTE_HIT
                        if (knight.move_direction == 1) {
                            // left --> right
                            var iBulletsLen = this.right_bullets_list.length;
                            for (var i = 0; i < iBulletsLen; i++) {
                                if (knight.pos_x >= this.right_bullets_list[i].pos_x) {
                                    this.knight_be_remote_hit(knight, this.right_bullets_list[i]);
                                    break;
                                }
                            }
                        }
                        else {
                            // right --> left
                            var iBulletsLen = this.left_bullets_list.length;
                            for (var i = 0; i < iBulletsLen; i++) {
                                if (knight.pos_x <= this.left_bullets_list[i].pos_x) {
                                    this.knight_be_remote_hit(knight, this.left_bullets_list[i]);
                                    break;
                                }
                            }
                        }
                        if (knight.status != 0 /* MOVE */)
                            break;
                        // 2. MOVE --> HIT
                        var min_enemy_distance = knight.hit_show_distance + 1;
                        if (knight.move_direction == 1) {
                            // left --> right
                            var iEnemyLen = this.right_knights_list.length;
                            for (var i = 0; i < iEnemyLen; i++) {
                                var distance = this.right_knights_list[i].pos_x - knight.pos_x;
                                if (distance < min_enemy_distance && this.right_knights_list[i].status != 3 /* DEAD */)
                                    min_enemy_distance = distance;
                                if (knight.pos_x >= this.right_knights_list[i].pos_x && this.right_knights_list[i].status == 0 /* MOVE */) {
                                    this.knight_start_hit(knight, this.right_knights_list[i]);
                                    break;
                                }
                            }
                        }
                        else {
                            // right --> left
                            var iEnemyLen = this.left_knights_list.length;
                            for (var i = 0; i < iEnemyLen; i++) {
                                var distance = knight.pos_x - this.left_knights_list[i].pos_x;
                                if (distance < min_enemy_distance && this.left_knights_list[i].status != 3 /* DEAD */)
                                    min_enemy_distance = distance;
                                if (knight.pos_x <= this.left_knights_list[i].pos_x && this.left_knights_list[i].status == 0 /* MOVE */) {
                                    this.knight_start_hit(knight, this.left_knights_list[i]);
                                    break;
                                }
                            }
                        }
                        if (knight.status != 0 /* MOVE */)
                            break;
                        // 3. MOVE中判断是否需要开始近攻动画。NOTE: 该动画不影响MOVE
                        if (min_enemy_distance <= knight.hit_show_distance && knight.hit_start_time + knight.hit_show_time < this.TIME) {
                            // 开始攻击前摇动画
                            knight.hit_start_time = this.TIME;
                            knight.knight_dragon.animation.gotoAndPlay("gongji");
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = "****** " + knight.name + "在" + knight.pos_x + "位置开始攻击前摇动画";
                                this.output_battle_info(strMsg);
                            }
                        }
                        // 4. MOVE --> MOVE (移动完毕以后可以返回)
                        this.knight_do_move(knight);
                        if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "benpao" && knight.knight_dragon.animation.lastAnimationName != "gongji")) {
                            knight.knight_dragon.animation.gotoAndPlay("benpao");
                        }
                        return;
                    }
                case 4 /* BACKING */:
                    {
                        // 1. BACKING --> MOVE
                        if (knight.self_back_distance <= 0 || knight.pos_x >= this.RIGHT_SIDE || knight.pos_x <= this.LEFT_SIDE) {
                            knight.self_back_distance = 0;
                            knight.status = 0 /* MOVE */;
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = ">>>>>> " + knight.name + "击退完毕，进入MOVE(移动状态)";
                                this.output_battle_info(strMsg);
                            }
                        }
                        if (knight.status != 4 /* BACKING */)
                            break;
                        // 2. BACK. BACKING状态下，暂时不受任何攻击。
                        var velocity = knight.self_back_velocity;
                        if (this.TIME >= knight.self_back_start_time) {
                            velocity = knight.self_back_velocity - (this.TIME - knight.self_back_start_time) * knight.self_back_velocity_a;
                        }
                        if (velocity < 0) {
                            velocity = -velocity;
                        }
                        var back_dis = -knight.move_direction * velocity * this.TICK_TIME;
                        back_dis = Math.round(back_dis * 100) / 100;
                        knight.self_back_distance -= (-knight.move_direction * back_dis);
                        if (knight.self_back_distance < 0) {
                            // 保证不会多退
                            back_dis += (-knight.move_direction * knight.self_back_distance);
                            knight.self_back_distance = 0;
                        }
                        knight.pos_x += back_dis;
                        knight.pos_x = Math.round(knight.pos_x * 100) / 100;
                        if (knight.pos_x > this.RIGHT_SIDE) {
                            knight.pos_x = this.RIGHT_SIDE;
                        }
                        else if (knight.pos_x < this.LEFT_SIDE) {
                            knight.pos_x = this.LEFT_SIDE;
                        }
                        if (knight.knight_dragon.animation.isPlaying == true && (knight.knight_dragon.animation.lastAnimationName != "aida" && knight.knight_dragon.animation.lastAnimationName != "gongji")) {
                            knight.knight_dragon.animation.gotoAndPlay("aida");
                        }
                        else if (knight.knight_dragon.animation.isPlaying == false && knight.knight_dragon.animation.lastAnimationName != "aida") {
                            knight.knight_dragon.animation.gotoAndPlay("aida");
                        }
                        if (this.IS_DEBUG_OUTPUT) {
                            var strMsg = "====== " + knight.name + " BACKING(后退)到位置" + knight.pos_x;
                            this.output_battle_info(strMsg);
                        }
                        return;
                    }
                case 5 /* HIT */:
                    {
                        // HIT --> BE_HIT
                        knight.status = 2 /* BE_HIT */;
                        this.knight_back_immune(knight);
                        break;
                    }
                case 1 /* BE_REMOTE_HIT */:
                    {
                        // BE_REMOTE_HIT --> BE_HIT
                        knight.status = 2 /* BE_HIT */;
                        break;
                    }
                case 2 /* BE_HIT */:
                    {
                        knight.hp -= knight.hit_delay_damage;
                        if (knight.hp <= 0) {
                            // 1. BE_HIT --> DEAD
                            knight.hp = 0;
                            knight.status = 3 /* DEAD */;
                        }
                        else {
                            // 2. BE_HIT --> BACKING
                            knight.status = 4 /* BACKING */;
                            //knight.knight_dragon.animation.gotoAndPlay("aida");
                            this.setChildIndex(knight.knight_layer, this.bottom_alive_knight_zorder);
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = ">>>>>> " + knight.name + " 减少hp:" + knight.hit_delay_damage + " 剩余hp:" + knight.hp + ", 进入BACKING(击退状态)";
                                this.output_battle_info(strMsg);
                            }
                        }
                        knight.hit_delay_damage = 0;
                        break;
                    }
                case 3 /* DEAD */:
                    {
                        this.knight_be_dying(knight);
                        return;
                    }
                default:
                    {
                        var strErrorInfo = "!!!!!!!!!!! ERROR! Unkown knight(" + knight.name + ") status: " + knight.status;
                        console.log(strErrorInfo);
                        return;
                    }
            }
        }
    };
    // 弓箭手(KNIGHT_BOWMAN)的逻辑函数，每调用一次，时间推进TICK_TIME秒
    __egretProto__.bowman_logic_tick = function (knight) {
        while (true) {
            switch (knight.status) {
                case 0 /* MOVE */:
                    {
                        // 1. MOVE --> BE_REMOTE_HIT
                        if (knight.move_direction == 1) {
                            // left --> right
                            var iBulletsLen = this.right_bullets_list.length;
                            for (var i = 0; i < iBulletsLen; i++) {
                                if (knight.pos_x >= this.right_bullets_list[i].pos_x) {
                                    this.knight_be_remote_hit(knight, this.right_bullets_list[i]);
                                    break;
                                }
                            }
                        }
                        else {
                            // right --> left
                            var iBulletsLen = this.left_bullets_list.length;
                            for (var i = 0; i < iBulletsLen; i++) {
                                if (knight.pos_x <= this.left_bullets_list[i].pos_x) {
                                    this.knight_be_remote_hit(knight, this.left_bullets_list[i]);
                                    break;
                                }
                            }
                        }
                        if (knight.status != 0 /* MOVE */)
                            break;
                        // 2. MOVE --> HIT
                        var min_enemy_distance = this.RIGHT_SIDE;
                        if (knight.move_direction == 1) {
                            // left --> right
                            var iEnemyLen = this.right_knights_list.length;
                            for (var i = 0; i < iEnemyLen; i++) {
                                var distance = this.right_knights_list[i].pos_x - knight.pos_x;
                                if (distance < min_enemy_distance && this.right_knights_list[i].status != 3 /* DEAD */)
                                    min_enemy_distance = distance;
                                if (knight.pos_x >= this.right_knights_list[i].pos_x && this.right_knights_list[i].status == 0 /* MOVE */) {
                                    this.knight_start_hit(knight, this.right_knights_list[i]);
                                    break;
                                }
                            }
                        }
                        else {
                            // right --> left
                            var iEnemyLen = this.left_knights_list.length;
                            for (var i = 0; i < iEnemyLen; i++) {
                                var distance = knight.pos_x - this.left_knights_list[i].pos_x;
                                if (distance < min_enemy_distance && this.left_knights_list[i].status != 3 /* DEAD */)
                                    min_enemy_distance = distance;
                                if (knight.pos_x <= this.left_knights_list[i].pos_x && this.left_knights_list[i].status == 0 /* MOVE */) {
                                    this.knight_start_hit(knight, this.left_knights_list[i]);
                                    break;
                                }
                            }
                        }
                        if (knight.status != 0 /* MOVE */)
                            break;
                        min_enemy_distance = Math.floor(min_enemy_distance * 100) / 100;
                        // 3. MOVE中判断是否需要开始近攻动画。NOTE: 该动画不影响MOVE
                        if (min_enemy_distance <= knight.hit_show_distance && knight.hit_start_time + knight.hit_show_time < this.TIME) {
                            // 开始攻击前摇动画
                            knight.hit_start_time = this.TIME;
                            if (knight.knight_dragon.animation.isPlaying == false || knight.knight_dragon.animation.lastAnimationName != "jinzhangongji") {
                                knight.knight_dragon.animation.gotoAndPlay("jinzhangongji");
                            }
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = "****** " + knight.name + "在" + knight.pos_x + "位置开始近战攻击前摇动画";
                                this.output_battle_info(strMsg);
                            }
                        }
                        if (min_enemy_distance <= knight.remote_hit_warning_distance) {
                        }
                        else {
                            // 还没有开始远程攻击前摇
                            if (knight.remote_hit_start_time < 0 && knight.remote_hit_cd_start_time < 0) {
                                // 5. Start remote hit showing 1 (攻击距离内有人或者连续攻击中，开始远程攻击前摇1)
                                if (min_enemy_distance <= knight.remote_hit_distance || knight.remote_hit_combo > 0) {
                                    knight.remote_hit_cd_start_time = this.TIME;
                                    knight.knight_dragon.animation.gotoAndPlay("gongjih");
                                    if (this.IS_DEBUG_OUTPUT) {
                                        var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上开始远程攻击前摇1";
                                        this.output_battle_info(strMsg);
                                    }
                                    return;
                                }
                                else {
                                }
                            }
                            else if (knight.remote_hit_cd_start_time + knight.remote_hit_cd > this.TIME) {
                                if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "gongjiq" && knight.knight_dragon.animation.lastAnimationName != "gongjih")) {
                                    knight.knight_dragon.animation.gotoAndPlay("gongjiq");
                                }
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上前摇1中";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else if (knight.remote_hit_cd_start_time > 0 && knight.remote_hit_start_time < 0) {
                                knight.remote_hit_start_time = this.TIME;
                                knight.knight_dragon.animation.gotoAndPlay("gongjiq");
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上开始远程攻击前摇2";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else if (knight.remote_hit_start_time + knight.remote_hit_show_time > this.TIME) {
                                if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "gongjiq" && knight.knight_dragon.animation.lastAnimationName != "gongjih")) {
                                    knight.knight_dragon.animation.gotoAndPlay("gongjiq");
                                }
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上进行远程攻击前摇2";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else {
                                this.knight_do_remote_hit(knight);
                                knight.remote_hit_combo += 1;
                                knight.remote_hit_start_time = -100;
                                knight.remote_hit_cd_start_time = -100;
                                return;
                            }
                        }
                        // 10. MOVE --> MOVE (移动完毕以后可以返回)
                        this.knight_do_move(knight);
                        // 移动后，重置攻击前摇开始时间
                        knight.remote_hit_start_time = -100;
                        knight.remote_hit_cd_start_time = -100;
                        if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "benpao" && knight.knight_dragon.animation.lastAnimationName != "jinzhangongji")) {
                            knight.knight_dragon.animation.gotoAndPlay("benpao");
                        }
                        return;
                    }
                case 4 /* BACKING */:
                    {
                        // 1. BACKING --> MOVE
                        if (knight.self_back_distance <= 0 || knight.pos_x >= this.RIGHT_SIDE || knight.pos_x <= this.LEFT_SIDE) {
                            // 重置连续攻击计数
                            knight.remote_hit_combo = 0;
                            // 重置攻击前摇开始时间
                            knight.remote_hit_start_time = -100;
                            knight.remote_hit_cd_start_time = -100;
                            knight.self_back_distance = 0;
                            knight.status = 0 /* MOVE */;
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = ">>>>>> " + knight.name + "击退完毕，进入MOVE(移动状态)";
                                this.output_battle_info(strMsg);
                            }
                        }
                        if (knight.status != 4 /* BACKING */)
                            break;
                        // 2. BACK. BACKING状态下，暂时不受任何攻击。
                        var velocity = knight.self_back_velocity;
                        if (this.TIME >= knight.self_back_start_time) {
                            velocity = knight.self_back_velocity - (this.TIME - knight.self_back_start_time) * knight.self_back_velocity_a;
                        }
                        if (velocity < 0) {
                            velocity = -velocity;
                        }
                        var back_dis = -knight.move_direction * velocity * this.TICK_TIME;
                        back_dis = Math.round(back_dis * 100) / 100;
                        knight.self_back_distance -= (-knight.move_direction * back_dis);
                        if (knight.self_back_distance < 0) {
                            // 保证不会多退
                            back_dis += (-knight.move_direction * knight.self_back_distance);
                            knight.self_back_distance = 0;
                        }
                        knight.pos_x += back_dis;
                        knight.pos_x = Math.round(knight.pos_x * 100) / 100;
                        if (knight.pos_x > this.RIGHT_SIDE) {
                            knight.pos_x = this.RIGHT_SIDE;
                        }
                        else if (knight.pos_x < this.LEFT_SIDE) {
                            knight.pos_x = this.LEFT_SIDE;
                        }
                        if (knight.knight_dragon.animation.isPlaying == true && (knight.knight_dragon.animation.lastAnimationName != "aida" && knight.knight_dragon.animation.lastAnimationName != "jinzhangongji")) {
                            knight.knight_dragon.animation.gotoAndPlay("aida");
                        }
                        else if (knight.knight_dragon.animation.isPlaying == false && knight.knight_dragon.animation.lastAnimationName != "aida") {
                            knight.knight_dragon.animation.gotoAndPlay("aida");
                        }
                        if (this.IS_DEBUG_OUTPUT) {
                            var strMsg = "====== " + knight.name + " BACKING(后退)到位置" + knight.pos_x;
                            this.output_battle_info(strMsg);
                        }
                        return;
                    }
                case 5 /* HIT */:
                    {
                        // HIT --> BE_HIT
                        knight.status = 2 /* BE_HIT */;
                        break;
                    }
                case 1 /* BE_REMOTE_HIT */:
                    {
                        // BE_REMOTE_HIT --> BE_HIT
                        knight.status = 2 /* BE_HIT */;
                        break;
                    }
                case 2 /* BE_HIT */:
                    {
                        knight.hp -= knight.hit_delay_damage;
                        if (knight.hp <= 0) {
                            // 1. BE_HIT --> DEAD
                            knight.hp = 0;
                            knight.status = 3 /* DEAD */;
                        }
                        else {
                            // 2. BE_HIT --> BACKING
                            knight.status = 4 /* BACKING */;
                            //knight.knight_dragon.animation.gotoAndPlay("aida");
                            this.setChildIndex(knight.knight_layer, this.bottom_alive_knight_zorder);
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = ">>>>>> " + knight.name + " 减少hp:" + knight.hit_delay_damage + " 剩余hp:" + knight.hp + ", 进入BACKING(击退状态)";
                                this.output_battle_info(strMsg);
                            }
                        }
                        knight.hit_delay_damage = 0;
                        break;
                    }
                case 3 /* DEAD */:
                    {
                        this.knight_be_dying(knight);
                        return;
                    }
                default:
                    {
                        var strErrorInfo = "!!!!!!!!!!! ERROR! Unkown knight(" + knight.name + ") status: " + knight.status;
                        console.log(strErrorInfo);
                        return;
                    }
            }
        }
    };
    // 法师(ENCHANTER)的逻辑函数，每调用一次，时间推进TICK_TIME秒
    __egretProto__.enchanter_logic_tick = function (knight) {
        while (true) {
            switch (knight.status) {
                case 0 /* MOVE */:
                    {
                        // 1. MOVE --> BE_REMOTE_HIT
                        if (knight.move_direction == 1) {
                            // left --> right
                            var iBulletsLen = this.right_bullets_list.length;
                            for (var i = 0; i < iBulletsLen; i++) {
                                if (knight.pos_x >= this.right_bullets_list[i].pos_x) {
                                    this.knight_be_remote_hit(knight, this.right_bullets_list[i]);
                                    break;
                                }
                            }
                        }
                        else {
                            // right --> left
                            var iBulletsLen = this.left_bullets_list.length;
                            for (var i = 0; i < iBulletsLen; i++) {
                                if (knight.pos_x <= this.left_bullets_list[i].pos_x) {
                                    this.knight_be_remote_hit(knight, this.left_bullets_list[i]);
                                    break;
                                }
                            }
                        }
                        if (knight.status != 0 /* MOVE */)
                            break;
                        // 2. MOVE --> HIT
                        var min_enemy_distance = this.RIGHT_SIDE;
                        if (knight.move_direction == 1) {
                            // left --> right
                            var iEnemyLen = this.right_knights_list.length;
                            for (var i = 0; i < iEnemyLen; i++) {
                                var distance = this.right_knights_list[i].pos_x - knight.pos_x;
                                if (distance < min_enemy_distance && this.right_knights_list[i].status != 3 /* DEAD */)
                                    min_enemy_distance = distance;
                                if (knight.pos_x >= this.right_knights_list[i].pos_x && this.right_knights_list[i].status == 0 /* MOVE */) {
                                    this.knight_start_hit(knight, this.right_knights_list[i]);
                                    break;
                                }
                            }
                        }
                        else {
                            // right --> left
                            var iEnemyLen = this.left_knights_list.length;
                            for (var i = 0; i < iEnemyLen; i++) {
                                var distance = knight.pos_x - this.left_knights_list[i].pos_x;
                                if (distance < min_enemy_distance && this.left_knights_list[i].status != 3 /* DEAD */)
                                    min_enemy_distance = distance;
                                if (knight.pos_x <= this.left_knights_list[i].pos_x && this.left_knights_list[i].status == 0 /* MOVE */) {
                                    this.knight_start_hit(knight, this.left_knights_list[i]);
                                    break;
                                }
                            }
                        }
                        if (knight.status != 0 /* MOVE */)
                            break;
                        min_enemy_distance = Math.floor(min_enemy_distance * 100) / 100;
                        // 3. MOVE中判断是否需要开始近攻动画。NOTE: 该动画不影响MOVE
                        if (min_enemy_distance <= knight.hit_show_distance && knight.hit_start_time + knight.hit_show_time < this.TIME) {
                            // 开始攻击前摇动画
                            knight.hit_start_time = this.TIME;
                            if (knight.knight_dragon.animation.isPlaying == false || knight.knight_dragon.animation.lastAnimationName != "jinzhangongji") {
                                knight.knight_dragon.animation.gotoAndPlay("jinzhangongji");
                            }
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = "****** " + knight.name + "在" + knight.pos_x + "位置开始近战攻击前摇动画";
                                this.output_battle_info(strMsg);
                            }
                        }
                        if (min_enemy_distance <= knight.remote_hit_warning_distance) {
                        }
                        else {
                            // 还没有开始远程攻击前摇
                            if (knight.remote_hit_start_time < 0 && knight.remote_hit_cd_start_time < 0) {
                                // 5. Start remote hit showing 1 (攻击距离内有人或者连续攻击中，开始远程攻击前摇1)
                                if (min_enemy_distance <= knight.remote_hit_distance || knight.remote_hit_combo > 0) {
                                    knight.remote_hit_cd_start_time = this.TIME;
                                    knight.knight_dragon.animation.gotoAndPlay("gongjiq");
                                    if (this.IS_DEBUG_OUTPUT) {
                                        var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上开始远程攻击前摇1";
                                        this.output_battle_info(strMsg);
                                    }
                                    return;
                                }
                                else {
                                }
                            }
                            else if (knight.remote_hit_cd_start_time + knight.remote_hit_cd > this.TIME) {
                                if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "gongjiq" && knight.knight_dragon.animation.lastAnimationName != "gongjih")) {
                                    knight.knight_dragon.animation.gotoAndPlay("gongjiq");
                                }
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上前摇1中";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else if (knight.remote_hit_cd_start_time > 0 && knight.remote_hit_start_time < 0) {
                                knight.remote_hit_start_time = this.TIME;
                                knight.knight_dragon.animation.gotoAndPlay("gongjih");
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上开始远程攻击前摇2";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else if (knight.remote_hit_start_time + knight.remote_hit_show_time > this.TIME) {
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上进行远程攻击前摇2";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else {
                                this.knight_do_remote_hit(knight);
                                knight.remote_hit_combo += 1;
                                knight.remote_hit_start_time = -100;
                                knight.remote_hit_cd_start_time = -100;
                                return;
                            }
                        }
                        // 10. MOVE --> MOVE (移动完毕以后可以返回)
                        this.knight_do_move(knight);
                        // 移动后，重置攻击前摇开始时间
                        knight.remote_hit_start_time = -100;
                        knight.remote_hit_cd_start_time = -100;
                        if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "benpao" && knight.knight_dragon.animation.lastAnimationName != "jinzhangongji")) {
                            knight.knight_dragon.animation.gotoAndPlay("benpao");
                        }
                        return;
                    }
                case 4 /* BACKING */:
                    {
                        // 1. BACKING --> MOVE
                        if (knight.self_back_distance <= 0 || knight.pos_x >= this.RIGHT_SIDE || knight.pos_x <= this.LEFT_SIDE) {
                            // 重置连续攻击计数
                            knight.remote_hit_combo = 0;
                            // 重置攻击前摇开始时间
                            knight.remote_hit_start_time = -100;
                            knight.remote_hit_cd_start_time = -100;
                            knight.self_back_distance = 0;
                            knight.status = 0 /* MOVE */;
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = ">>>>>> " + knight.name + "击退完毕，进入MOVE(移动状态)";
                                this.output_battle_info(strMsg);
                            }
                        }
                        if (knight.status != 4 /* BACKING */)
                            break;
                        // 2. BACK. BACKING状态下，暂时不受任何攻击。
                        var velocity = knight.self_back_velocity;
                        if (this.TIME >= knight.self_back_start_time) {
                            velocity = knight.self_back_velocity - (this.TIME - knight.self_back_start_time) * knight.self_back_velocity_a;
                        }
                        if (velocity < 0) {
                            velocity = -velocity;
                        }
                        var back_dis = -knight.move_direction * velocity * this.TICK_TIME;
                        back_dis = Math.round(back_dis * 100) / 100;
                        knight.self_back_distance -= (-knight.move_direction * back_dis);
                        if (knight.self_back_distance < 0) {
                            // 保证不会多退
                            back_dis += (-knight.move_direction * knight.self_back_distance);
                            knight.self_back_distance = 0;
                        }
                        knight.pos_x += back_dis;
                        knight.pos_x = Math.round(knight.pos_x * 100) / 100;
                        if (knight.pos_x > this.RIGHT_SIDE) {
                            knight.pos_x = this.RIGHT_SIDE;
                        }
                        else if (knight.pos_x < this.LEFT_SIDE) {
                            knight.pos_x = this.LEFT_SIDE;
                        }
                        if (knight.knight_dragon.animation.isPlaying == true && (knight.knight_dragon.animation.lastAnimationName != "aida" && knight.knight_dragon.animation.lastAnimationName != "jinzhangongji")) {
                            knight.knight_dragon.animation.gotoAndPlay("aida");
                        }
                        else if (knight.knight_dragon.animation.isPlaying == false && knight.knight_dragon.animation.lastAnimationName != "aida") {
                            knight.knight_dragon.animation.gotoAndPlay("aida");
                        }
                        if (this.IS_DEBUG_OUTPUT) {
                            var strMsg = "====== " + knight.name + " BACKING(后退)到位置" + knight.pos_x;
                            this.output_battle_info(strMsg);
                        }
                        return;
                    }
                case 5 /* HIT */:
                    {
                        // HIT --> BE_HIT
                        knight.status = 2 /* BE_HIT */;
                        break;
                    }
                case 1 /* BE_REMOTE_HIT */:
                    {
                        // BE_REMOTE_HIT --> BE_HIT
                        knight.status = 2 /* BE_HIT */;
                        break;
                    }
                case 2 /* BE_HIT */:
                    {
                        knight.hp -= knight.hit_delay_damage;
                        if (knight.hp <= 0) {
                            // 1. BE_HIT --> DEAD
                            knight.hp = 0;
                            knight.status = 3 /* DEAD */;
                        }
                        else {
                            // 2. BE_HIT --> BACKING
                            knight.status = 4 /* BACKING */;
                            //knight.knight_dragon.animation.gotoAndPlay("aida");
                            this.setChildIndex(knight.knight_layer, this.bottom_alive_knight_zorder);
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = ">>>>>> " + knight.name + " 减少hp:" + knight.hit_delay_damage + " 剩余hp:" + knight.hp + ", 进入BACKING(击退状态)";
                                this.output_battle_info(strMsg);
                            }
                        }
                        knight.hit_delay_damage = 0;
                        break;
                    }
                case 3 /* DEAD */:
                    {
                        this.knight_be_dying(knight);
                        return;
                    }
                default:
                    {
                        var strErrorInfo = "!!!!!!!!!!! ERROR! Unkown knight(" + knight.name + ") status: " + knight.status;
                        console.log(strErrorInfo);
                        return;
                    }
            }
        }
    };
    // 牧师(MINISTER)的逻辑函数，每调用一次，时间推进TICK_TIME秒
    __egretProto__.minister_logic_tick = function (knight) {
        while (true) {
            switch (knight.status) {
                case 0 /* MOVE */:
                    {
                        // 1. MOVE --> BE_REMOTE_HIT
                        if (knight.move_direction == 1) {
                            // left --> right
                            var iBulletsLen = this.right_bullets_list.length;
                            for (var i = 0; i < iBulletsLen; i++) {
                                if (knight.pos_x >= this.right_bullets_list[i].pos_x) {
                                    this.knight_be_remote_hit(knight, this.right_bullets_list[i]);
                                    break;
                                }
                            }
                        }
                        else {
                            // right --> left
                            var iBulletsLen = this.left_bullets_list.length;
                            for (var i = 0; i < iBulletsLen; i++) {
                                if (knight.pos_x <= this.left_bullets_list[i].pos_x) {
                                    this.knight_be_remote_hit(knight, this.left_bullets_list[i]);
                                    break;
                                }
                            }
                        }
                        if (knight.status != 0 /* MOVE */)
                            break;
                        // 2. MOVE --> HIT
                        var min_enemy_distance = this.RIGHT_SIDE;
                        if (knight.move_direction == 1) {
                            // left --> right
                            var iEnemyLen = this.right_knights_list.length;
                            for (var i = 0; i < iEnemyLen; i++) {
                                var distance = this.right_knights_list[i].pos_x - knight.pos_x;
                                if (distance < min_enemy_distance && this.right_knights_list[i].status != 3 /* DEAD */)
                                    min_enemy_distance = distance;
                                if (knight.pos_x >= this.right_knights_list[i].pos_x && this.right_knights_list[i].status == 0 /* MOVE */) {
                                    this.knight_start_hit(knight, this.right_knights_list[i]);
                                    break;
                                }
                            }
                        }
                        else {
                            // right --> left
                            var iEnemyLen = this.left_knights_list.length;
                            for (var i = 0; i < iEnemyLen; i++) {
                                var distance = knight.pos_x - this.left_knights_list[i].pos_x;
                                if (distance < min_enemy_distance && this.left_knights_list[i].status != 3 /* DEAD */)
                                    min_enemy_distance = distance;
                                if (knight.pos_x <= this.left_knights_list[i].pos_x && this.left_knights_list[i].status == 0 /* MOVE */) {
                                    this.knight_start_hit(knight, this.left_knights_list[i]);
                                    break;
                                }
                            }
                        }
                        if (knight.status != 0 /* MOVE */)
                            break;
                        min_enemy_distance = Math.floor(min_enemy_distance * 100) / 100;
                        // 3. MOVE中判断是否需要开始近攻动画。NOTE: 该动画不影响MOVE
                        if (min_enemy_distance <= knight.hit_show_distance && knight.hit_start_time + knight.hit_show_time < this.TIME) {
                            // 开始攻击前摇动画
                            knight.hit_start_time = this.TIME;
                            if (knight.knight_dragon.animation.isPlaying == false || knight.knight_dragon.animation.lastAnimationName != "jinzhangongji") {
                                knight.knight_dragon.animation.gotoAndPlay("jinzhangongji");
                            }
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = "****** " + knight.name + "在" + knight.pos_x + "位置开始近战攻击前摇动画";
                                this.output_battle_info(strMsg);
                            }
                        }
                        if (min_enemy_distance <= knight.remote_hit_warning_distance) {
                        }
                        else {
                            // 还没有开始远程攻击前摇
                            if (knight.remote_hit_start_time < 0 && knight.remote_hit_cd_start_time < 0) {
                                var min_hurt_friend_distance = this.RIGHT_SIDE;
                                if (knight.move_direction == 1) {
                                    // left --> right
                                    var iFriendLen = this.left_knights_list.length;
                                    for (var i = 0; i < iFriendLen; i++) {
                                        if (knight == this.left_knights_list[i])
                                            continue;
                                        var distance = Math.abs(this.left_knights_list[i].pos_x - knight.pos_x);
                                        if (distance < min_hurt_friend_distance && this.left_knights_list[i].status != 3 /* DEAD */ && this.left_knights_list[i].hp < this.left_knights_list[i].hp_max)
                                            min_hurt_friend_distance = distance;
                                    }
                                }
                                else {
                                    // right --> left
                                    var iFriendLen = this.right_knights_list.length;
                                    for (var i = 0; i < iFriendLen; i++) {
                                        if (knight == this.right_knights_list[i])
                                            continue;
                                        var distance = Math.abs(knight.pos_x - this.right_knights_list[i].pos_x);
                                        if (distance < min_hurt_friend_distance && this.right_knights_list[i].status != 3 /* DEAD */ && this.right_knights_list[i].hp < this.right_knights_list[i].hp_max)
                                            min_hurt_friend_distance = distance;
                                    }
                                }
                                // 5. Start remote hit showing 1 (治疗距离内有队友、攻击距离内有人、连续攻击中，开始远程攻击前摇1)
                                if (min_hurt_friend_distance <= knight.remote_recover_distance || min_enemy_distance <= knight.remote_hit_distance || knight.remote_hit_combo > 0) {
                                    knight.remote_hit_cd_start_time = this.TIME;
                                    if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "gongjijiaxue" && knight.knight_dragon.animation.lastAnimationName != "gongji")) {
                                        knight.knight_dragon.animation.gotoAndPlay("gongjiq");
                                    }
                                    if (this.IS_DEBUG_OUTPUT) {
                                        var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上开始远程攻击前摇1";
                                        this.output_battle_info(strMsg);
                                    }
                                    return;
                                }
                                else {
                                }
                            }
                            else if (knight.remote_hit_cd_start_time + knight.remote_hit_cd > this.TIME) {
                                if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "gongjiq" && knight.knight_dragon.animation.lastAnimationName != "gongjijiaxue" && knight.knight_dragon.animation.lastAnimationName != "gongji")) {
                                    knight.knight_dragon.animation.gotoAndPlay("gongjiq");
                                }
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上前摇1中";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else if (knight.remote_hit_cd_start_time > 0 && knight.remote_hit_start_time < 0) {
                                knight.remote_hit_start_time = this.TIME;
                                if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "gongjiq" && knight.knight_dragon.animation.lastAnimationName != "gongjijiaxue" && knight.knight_dragon.animation.lastAnimationName != "gongji")) {
                                    knight.knight_dragon.animation.gotoAndPlay("gongjiq");
                                }
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上开始远程攻击前摇2";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else if (knight.remote_hit_start_time + knight.remote_hit_show_time > this.TIME) {
                                if (this.IS_DEBUG_OUTPUT) {
                                    var strMsg = "====== " + knight.name + "在" + knight.pos_x + "位置上进行远程攻击前摇2";
                                    this.output_battle_info(strMsg);
                                }
                                return;
                            }
                            else {
                                var knight_tobe_recover = null;
                                var friends_list = null;
                                var iFriendLen = 0;
                                if (knight.move_direction == 1) {
                                    // left --> right
                                    friends_list = this.left_knights_list;
                                    iFriendLen = this.left_knights_list.length;
                                }
                                else {
                                    // right --> left
                                    friends_list = this.right_knights_list;
                                    iFriendLen = this.right_knights_list.length;
                                }
                                var iMaxLostHp = 0;
                                for (var i = 0; i < iFriendLen; i++) {
                                    if (knight == friends_list[i])
                                        continue;
                                    var lost_hp = friends_list[i].hp_max - friends_list[i].hp;
                                    if (friends_list[i].status != 3 /* DEAD */ && iMaxLostHp < lost_hp) {
                                        iMaxLostHp = lost_hp;
                                        knight_tobe_recover = friends_list[i];
                                    }
                                }
                                if (knight_tobe_recover != null) {
                                    this.knight_do_remote_recover(knight, knight_tobe_recover);
                                    knight.knight_dragon.animation.gotoAndPlay("gongjijiaxue");
                                }
                                else {
                                    this.knight_do_remote_hit(knight);
                                    knight.knight_dragon.animation.gotoAndPlay("gongji");
                                }
                                knight.remote_hit_combo += 1;
                                knight.remote_hit_start_time = -100;
                                knight.remote_hit_cd_start_time = -100;
                                return;
                            }
                        }
                        // 10. MOVE --> MOVE (移动完毕以后可以返回)
                        this.knight_do_move(knight);
                        // 移动后，重置攻击前摇开始时间
                        knight.remote_hit_start_time = -100;
                        knight.remote_hit_cd_start_time = -100;
                        if (knight.knight_dragon.animation.isPlaying == false || (knight.knight_dragon.animation.lastAnimationName != "benpao" && knight.knight_dragon.animation.lastAnimationName != "jinzhangongji")) {
                            knight.knight_dragon.animation.gotoAndPlay("benpao");
                        }
                        return;
                    }
                case 4 /* BACKING */:
                    {
                        // 1. BACKING --> MOVE
                        if (knight.self_back_distance <= 0 || knight.pos_x >= this.RIGHT_SIDE || knight.pos_x <= this.LEFT_SIDE) {
                            // 重置连续攻击计数
                            knight.remote_hit_combo = 0;
                            // 重置攻击前摇开始时间
                            knight.remote_hit_start_time = -100;
                            knight.remote_hit_cd_start_time = -100;
                            knight.self_back_distance = 0;
                            knight.status = 0 /* MOVE */;
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = ">>>>>> " + knight.name + "击退完毕，进入MOVE(移动状态)";
                                this.output_battle_info(strMsg);
                            }
                        }
                        if (knight.status != 4 /* BACKING */)
                            break;
                        // 2. BACK. BACKING状态下，暂时不受任何攻击。
                        var velocity = knight.self_back_velocity;
                        if (this.TIME >= knight.self_back_start_time) {
                            velocity = knight.self_back_velocity - (this.TIME - knight.self_back_start_time) * knight.self_back_velocity_a;
                        }
                        if (velocity < 0) {
                            velocity = -velocity;
                        }
                        var back_dis = -knight.move_direction * velocity * this.TICK_TIME;
                        back_dis = Math.round(back_dis * 100) / 100;
                        knight.self_back_distance -= (-knight.move_direction * back_dis);
                        if (knight.self_back_distance < 0) {
                            // 保证不会多退
                            back_dis += (-knight.move_direction * knight.self_back_distance);
                            knight.self_back_distance = 0;
                        }
                        knight.pos_x += back_dis;
                        knight.pos_x = Math.round(knight.pos_x * 100) / 100;
                        if (knight.pos_x > this.RIGHT_SIDE) {
                            knight.pos_x = this.RIGHT_SIDE;
                        }
                        else if (knight.pos_x < this.LEFT_SIDE) {
                            knight.pos_x = this.LEFT_SIDE;
                        }
                        if (knight.knight_dragon.animation.isPlaying == true && (knight.knight_dragon.animation.lastAnimationName != "aida" && knight.knight_dragon.animation.lastAnimationName != "jinzhangongji")) {
                            knight.knight_dragon.animation.gotoAndPlay("aida");
                        }
                        else if (knight.knight_dragon.animation.isPlaying == false && knight.knight_dragon.animation.lastAnimationName != "aida") {
                            knight.knight_dragon.animation.gotoAndPlay("aida");
                        }
                        if (this.IS_DEBUG_OUTPUT) {
                            var strMsg = "====== " + knight.name + " BACKING(后退)到位置" + knight.pos_x;
                            this.output_battle_info(strMsg);
                        }
                        return;
                    }
                case 5 /* HIT */:
                    {
                        // HIT --> BE_HIT
                        knight.status = 2 /* BE_HIT */;
                        break;
                    }
                case 1 /* BE_REMOTE_HIT */:
                    {
                        // BE_REMOTE_HIT --> BE_HIT
                        knight.status = 2 /* BE_HIT */;
                        break;
                    }
                case 2 /* BE_HIT */:
                    {
                        knight.hp -= knight.hit_delay_damage;
                        if (knight.hp <= 0) {
                            // 1. BE_HIT --> DEAD
                            knight.hp = 0;
                            knight.status = 3 /* DEAD */;
                        }
                        else {
                            // 2. BE_HIT --> BACKING
                            knight.status = 4 /* BACKING */;
                            // knight.knight_dragon.animation.gotoAndPlay("aida");
                            this.setChildIndex(knight.knight_layer, this.bottom_alive_knight_zorder);
                            if (this.IS_DEBUG_OUTPUT) {
                                var strMsg = ">>>>>> " + knight.name + " 减少hp:" + knight.hit_delay_damage + " 剩余hp:" + knight.hp + ", 进入BACKING(击退状态)";
                                this.output_battle_info(strMsg);
                            }
                        }
                        knight.hit_delay_damage = 0;
                        break;
                    }
                case 3 /* DEAD */:
                    {
                        this.knight_be_dying(knight);
                        return;
                    }
                default:
                    {
                        var strErrorInfo = "!!!!!!!!!!! ERROR! Unkown knight(" + knight.name + ") status: " + knight.status;
                        console.log(strErrorInfo);
                        return;
                    }
            }
        }
    };
    /*
     * 单个骑士逻辑函数，每调用一次，时间推进TICK_TIME秒
     */
    __egretProto__.knight_logic_tick = function (knight) {
        switch (knight.type) {
            case 1 /* KNIGHT_SOLDIER */:
            case 4 /* KNIGHT_CHEVALIER */:
            case 5 /* KNIGHT_FIGHTER */:
            case 6 /* KNIGHT_ASSASSINATOR */:
                {
                    this.soldier_logic_tick(knight);
                    break;
                }
            case 2 /* KNIGHT_BOWMAN */:
            case 7 /* KNIGHT_LONG_BOWMAN */:
            case 8 /* KNIGHT_CROSS_BOWMAN */:
                {
                    this.bowman_logic_tick(knight);
                    break;
                }
            case 3 /* KNIGHT_ENCHANTER */:
            case 9 /* KNIGHT_FIRE_ENCHANTER */:
            case 10 /* KNIGHT_ICE_ENCHANTER */:
                {
                    this.enchanter_logic_tick(knight);
                    break;
                }
            case 11 /* KNIGHT_MINISTER */:
                {
                    this.minister_logic_tick(knight);
                    break;
                }
            default:
                {
                    var strErrorInfo = "!!!!!!!!!!! ERROR! Unkown knight(" + knight.name + ") type: " + knight.type;
                    console.log(strErrorInfo);
                    break;
                }
        }
    };
    /*
     * 远程子弹逻辑函数，每调用一次，时间推进TICK_TIME秒
     */
    __egretProto__.bullet_logic_tick = function (bullet) {
        // 子弹只要还存在就继续移动
        var mov_dis = bullet.move_direction * bullet.move_velocity * this.TICK_TIME;
        mov_dis = Math.round(mov_dis * 100) / 100;
        bullet.pos_x += mov_dis;
        if (bullet.pos_x > this.RIGHT_SIDE) {
            bullet.pos_x = this.RIGHT_SIDE;
        }
        else if (bullet.pos_x < this.LEFT_SIDE) {
            bullet.pos_x = this.LEFT_SIDE;
        }
    };
    /*
     * 战斗主要逻辑函数，每调用一次，时间推进TICK_TIME秒
     * 战斗结束返回true，否则返回fasle
     */
    __egretProto__.battle_logic_tick = function () {
        if (this.IS_DEBUG_OUTPUT) {
            var strMsg = "--------------------------时间 " + this.TIME + " : " + Utils.time() + "-------------------------";
            this.output_battle_info(strMsg);
        }
        var iLeftLen = this.left_knights_list.length;
        var left_all_dead = true;
        for (var i = 0; i < iLeftLen; i++) {
            if (this.left_knights_list[i].status != 3 /* DEAD */) {
                left_all_dead = false;
                break;
            }
        }
        if (left_all_dead)
            return true;
        var iRightLen = this.right_knights_list.length;
        var right_all_dead = true;
        for (var i = 0; i < iRightLen; i++) {
            if (this.right_knights_list[i].status != 3 /* DEAD */) {
                right_all_dead = false;
                break;
            }
        }
        if (right_all_dead)
            return true;
        for (var i = 0; i < iLeftLen; i++) {
            if (this.left_knights_list[i].status != 3 /* DEAD */) {
                this.knight_logic_tick(this.left_knights_list[i]);
            }
        }
        for (var i = 0; i < iRightLen; i++) {
            if (this.right_knights_list[i].status != 3 /* DEAD */) {
                this.knight_logic_tick(this.right_knights_list[i]);
            }
        }
        // NOTE: 左边骑士伤害结算在下一帧之前进行
        iLeftLen = this.left_knights_list.length;
        for (var i = 0; i < iLeftLen; i++) {
            if (this.left_knights_list[i].status == 5 /* HIT */) {
                this.knight_logic_tick(this.left_knights_list[i]);
            }
        }
        // Traverse all the bullets on the left.
        iLeftLen = this.left_bullets_list.length;
        for (var i = 0; i < iLeftLen; i++) {
            this.bullet_logic_tick(this.left_bullets_list[i]);
        }
        // Traverse all the bullets on the right.
        iRightLen = this.right_bullets_list.length;
        for (var i = 0; i < iRightLen; i++) {
            this.bullet_logic_tick(this.right_bullets_list[i]);
        }
        this.TIME += this.TICK_TIME;
        this.TIME = Math.round(this.TIME * 100) / 100;
        if (this.TIME >= this.MAX_TIME) {
            return true;
        }
        return false;
    };
    __egretProto__.showBullteMoveOutAnim = function (bullet) {
        var end_pos_x = -50;
        if (bullet.move_direction == 1) {
            end_pos_x = G.win_width + 50;
        }
        var tw = egret.Tween.get(bullet.bullet_layer);
        tw.to({ x: end_pos_x }, 500);
    };
    __egretProto__.showKnightMoveOutAnim = function (knight) {
        knight.knight_dragon.animation.gotoAndPlay("benpao");
        var x = this.RIGHT_SIDE + 5;
        if (knight.move_direction == -1) {
            x = this.LEFT_SIDE - 5;
        }
        var end_pos_x = this.GROUND_POS_MINX + this.GROUND_POS_X_FACTOR * x;
        var move_time = (x - knight.pos_x) / knight.move_velocity;
        if (knight.move_direction == -1) {
            move_time = (knight.pos_x - x) / knight.move_velocity;
        }
        // 每秒60帧，即每隔0.017秒绘制一帧
        move_time *= 0.017 / 0.05 * 1000 * 1.5;
        var tw = egret.Tween.get(knight.knight_layer);
        tw.to({ x: end_pos_x }, move_time);
        var shadow_end_pos_x = end_pos_x - 30;
        if (knight.move_direction == -1) {
            shadow_end_pos_x = end_pos_x + 30;
        }
        var shadow_tw = egret.Tween.get(knight.knight_shadow_dragon.getDisplay());
        shadow_tw.to({ x: shadow_end_pos_x }, move_time);
    };
    /*
     * 显示战斗结果函数
     */
    __egretProto__.show_battle_result = function () {
        if (BattleLayer.battle_type == -1 /* GUIDE_BATTLE1 */) {
            BattleLayer.ClearAllBattleBaseInfo();
            G.main_director.enterQuestView();
            return;
        }
        // Move all the bullets out.
        var iBulletsLen = this.left_bullets_list.length;
        for (var i = 0; i < iBulletsLen; i++) {
            this.showBullteMoveOutAnim(this.left_bullets_list[i]);
        }
        var iBulletsLen = this.right_bullets_list.length;
        for (var i = 0; i < iBulletsLen; i++) {
            this.showBullteMoveOutAnim(this.right_bullets_list[i]);
        }
        var iLeftLen = this.left_knights_list.length;
        var iLeftAliveLen = 0;
        for (var i = 0; i < iLeftLen; i++) {
            if (this.left_knights_list[i].status != 3 /* DEAD */) {
                iLeftAliveLen += 1;
            }
        }
        var iRightLen = this.right_knights_list.length;
        var iRightAliveLen = 0;
        for (var i = 0; i < iRightLen; i++) {
            if (this.right_knights_list[i].status != 3 /* DEAD */) {
                iRightAliveLen += 1;
            }
        }
        // Client battle result
        var client_battle_result = 0;
        if (iLeftAliveLen > 0 && iRightAliveLen > 0) {
            // Time out
            var left_hp = this.getLeftSideHpInfo();
            var right_hp = this.getRightSideHpInfo();
            if (left_hp == right_hp) {
                client_battle_result = 0;
            }
            else if (left_hp > right_hp) {
                client_battle_result = 1;
            }
            else {
                client_battle_result = -1;
            }
            this.output_battle_info("@@@@@@ Time Out");
        }
        else if (iLeftAliveLen == 0 && iRightAliveLen == 0) {
            client_battle_result = 0;
        }
        else if (iRightAliveLen == 0) {
            client_battle_result = 1;
        }
        else {
            client_battle_result = -1;
        }
        var client_server_result_match = true;
        if (BattleLayer.is_server_battle) {
            if (BattleLayer.server_battle_result != client_battle_result) {
                client_server_result_match = false;
            }
        }
        if (client_server_result_match) {
            // Show animation when battle is end
            if (client_battle_result == 1) {
                this.output_battle_info("~~~~~~~ Left win!");
                if (iRightAliveLen > 0) {
                    for (var i = 0; i < iRightLen; i++) {
                        if (this.right_knights_list[i].status != 3 /* DEAD */) {
                            var knight = this.right_knights_list[i];
                            knight.status = 3 /* DEAD */;
                            this.knight_be_dying(knight);
                        }
                    }
                }
                for (var i = 0; i < iLeftLen; i++) {
                    if (this.left_knights_list[i].status != 3 /* DEAD */) {
                        this.showKnightMoveOutAnim(this.left_knights_list[i]);
                    }
                }
            }
            else if (client_battle_result == -1) {
                this.output_battle_info("~~~~~~~ Right win!");
                if (iLeftAliveLen > 0) {
                    for (var i = 0; i < iLeftLen; i++) {
                        if (this.left_knights_list[i].status != 3 /* DEAD */) {
                            var knight = this.left_knights_list[i];
                            knight.status = 3 /* DEAD */;
                            this.knight_be_dying(knight);
                        }
                    }
                }
                for (var i = 0; i < iRightLen; i++) {
                    if (this.right_knights_list[i].status != 3 /* DEAD */) {
                        this.showKnightMoveOutAnim(this.right_knights_list[i]);
                    }
                }
            }
            else {
                this.output_battle_info("~~~~~~~ Draw game!");
                if (iLeftAliveLen > 0) {
                    for (var i = 0; i < iLeftLen; i++) {
                        if (this.left_knights_list[i].status != 3 /* DEAD */) {
                            var knight = this.left_knights_list[i];
                            knight.knight_dragon.animation.gotoAndPlay("zhanli");
                        }
                    }
                }
                if (iRightAliveLen > 0) {
                    for (var i = 0; i < iRightLen; i++) {
                        if (this.right_knights_list[i].status != 3 /* DEAD */) {
                            var knight = this.right_knights_list[i];
                            knight.knight_dragon.animation.gotoAndPlay("zhanli");
                        }
                    }
                }
            }
        }
        else {
            // TODO:
            console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            console.log("战斗结果不一致！");
            console.log("客户端战斗结果: " + client_battle_result);
            console.log("服务器战斗结果: " + BattleLayer.server_battle_result);
            console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
            for (var i = 0; i < iLeftLen; i++) {
                if (this.left_knights_list[i].status != 3 /* DEAD */) {
                    var knight = this.left_knights_list[i];
                    knight.status = 3 /* DEAD */;
                    this.knight_be_dying(knight);
                }
            }
            for (var i = 0; i < iRightLen; i++) {
                if (this.right_knights_list[i].status != 3 /* DEAD */) {
                    var knight = this.right_knights_list[i];
                    knight.status = 3 /* DEAD */;
                    this.knight_be_dying(knight);
                }
            }
            client_battle_result = BattleLayer.server_battle_result;
        }
        if (BattleLayer.battle_type == 1 /* TEST_BATTLE */ || BattleLayer.battle_type == 0 /* UNKNOWN_BATTLE */) {
            if (client_battle_result != 1) {
                // Player lose
                var lose_dlg = new UIBattleLostView();
                lose_dlg.guiLayer = this.guiLayer;
                this.guiLayer.addElement(lose_dlg);
            }
            else {
                // Player win
                var win_dlg = new UIBattleWinView();
                win_dlg.guiLayer = this.guiLayer;
                this.guiLayer.addElement(win_dlg);
            }
        }
        else if (BattleLayer.battle_type == 2 /* QUEST_BATTLE */) {
            if (client_battle_result != 1) {
                // Player lose
                var lose_dlg = new UIBattleLostView();
                lose_dlg.guiLayer = this.guiLayer;
                this.guiLayer.addElement(lose_dlg);
                this.battle_result_dialog = lose_dlg;
            }
            else {
                // Player win
                BattleLayer.city_battle_index++;
                var battle_id = Logic.getCityBattleId(BattleLayer.city_id, BattleLayer.city_battle_index);
                if (battle_id <= 0) {
                    // Battle is end
                    var win_dlg = new UIBattleWinView();
                    win_dlg.guiLayer = this.guiLayer;
                    this.guiLayer.addElement(win_dlg);
                    this.battle_result_dialog = win_dlg;
                }
                else {
                    BattleLayer.my_knights_left_hp = [null, null, null, null, null];
                    var iLeftLen = this.left_knights_list.length;
                    for (var i = 0; i < iLeftLen; i++) {
                        BattleLayer.my_knights_left_hp[i] = this.left_knights_list[i].hp;
                    }
                    BattleLayer.knights_baseinfo_list = [];
                    BattleLayer.AddPlayerKnightsToBattleForQuest();
                    BattleLayer.AddQuestNpcKnightsToBattle();
                    G.main_director.enterBattleView();
                }
            }
        }
        else if (BattleLayer.battle_type == 3 /* ARENA_BATTLE */) {
            if (client_battle_result != BattleLayer.self_knight_direction) {
                // Player lose
                var lose_dlg = new UIBattleLostView();
                lose_dlg.guiLayer = this.guiLayer;
                this.guiLayer.addElement(lose_dlg);
                this.battle_result_dialog = lose_dlg;
            }
            else {
                // Player win
                var win_dlg = new UIBattleWinView();
                win_dlg.guiLayer = this.guiLayer;
                this.guiLayer.addElement(win_dlg);
                this.battle_result_dialog = win_dlg;
            }
        }
        else if (BattleLayer.battle_type == 4 /* JOB_TEAM_BATTLE */) {
            if (client_battle_result != BattleLayer.self_knight_direction) {
                // Player lose
                var lose_dlg = new UIBattleLostView();
                lose_dlg.guiLayer = this.guiLayer;
                this.guiLayer.addElement(lose_dlg);
                this.battle_result_dialog = lose_dlg;
            }
            else {
                // Player win
                var win_dlg = new UIBattleWinView();
                win_dlg.guiLayer = this.guiLayer;
                this.guiLayer.addElement(win_dlg);
                this.battle_result_dialog = win_dlg;
            }
        }
    };
    // 得到队伍剩余血量百分比
    __egretProto__.getLeftSideHpInfo = function () {
        var iLeftLen = this.left_knights_list.length;
        var hp = 0;
        var max_hp = 0;
        for (var i = 0; i < iLeftLen; i++) {
            var knight = this.left_knights_list[i];
            max_hp += knight.hp_max;
            hp += knight.hp;
        }
        return hp / max_hp;
    };
    __egretProto__.getRightSideHpInfo = function () {
        var iRightLen = this.right_knights_list.length;
        var hp = 0;
        var max_hp = 0;
        for (var i = 0; i < iRightLen; i++) {
            var knight = this.right_knights_list[i];
            max_hp += knight.hp_max;
            hp += knight.hp;
        }
        return hp / max_hp;
    };
    BattleLayer.battle_type = 0 /* UNKNOWN_BATTLE */;
    BattleLayer.self_knight_direction = 1; //玩家自己骑士所在方位，1左，-1右
    BattleLayer.is_server_battle = false;
    BattleLayer.server_battle_result = 0; // 1: left win, 0: draw, -1:right win
    // BATTLE_TYPE.QUEST_BATTLE
    BattleLayer.my_knights_left_hp = [null, null, null, null, null];
    BattleLayer.city_id = 0;
    BattleLayer.city_battle_index = 0;
    BattleLayer.knights_baseinfo_list = [];
    return BattleLayer;
})(egret.DisplayObjectContainer);
BattleLayer.prototype.__class__ = "BattleLayer";
