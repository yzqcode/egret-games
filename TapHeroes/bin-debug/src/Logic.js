var Player = (function () {
    function Player() {
        this.dragon_name = "zj001";
        this.skills = [];
    }
    return Player;
})();
Player.prototype.__class__ = "Player";
var EffectType = (function () {
    function EffectType() {
    }
    EffectType.CRITICAL_CHANCE = 1;
    EffectType.CRITICAL_DAMAGE = 2;
    EffectType.ALL_DAMAGE = 3;
    EffectType.ALL_BASE_DAMAGE = 4;
    EffectType.TAP_DAMAGE = 5;
    EffectType.THIS_HERO_DAMAGE = 6;
    EffectType.TAP_DAMAGE_BY_DPS = 7;
    EffectType.BOSS_MONEY = 8;
    EffectType.MONSTER_MONEY = 9;
    EffectType.ALL_DROP = 10;
    EffectType.TAP_MONEY = 11;
    EffectType.ALL_MONEY = 12;
    //public static DOUBLE_MONEY_CHANCE = 13      // not need
    EffectType.CHEST_MONEY = 14;
    EffectType.BOSS_HP = 15;
    EffectType.BOSS_TIME = 16;
    EffectType.HERO_DEATH_CHANCE = 17;
    EffectType.UPGRADE_COST = 18;
    EffectType.RESET_AWARD = 19;
    EffectType.AUTO_TAP = 20; // not
    EffectType.HERO_SPEED = 21; // not
    EffectType.DAMAGE_TO_BOSS = 22;
    EffectType.REDUCE_MONSTER = 23; // not
    EffectType.LEVELUP_COST = 24;
    EffectType.DPS = 25;
    EffectType.CHEST_CHANCE = 26;
    EffectType.TIMES_MONEY_CHANCE = 27;
    EffectType.REVIVE_TIME = 28;
    EffectType.SKILL_TIME_BEGIN = 101;
    EffectType.SKILL_TIME_END = 199;
    EffectType.SKILL_CD_BEGIN = 201;
    EffectType.SKILL_CD_END = 299;
    EffectType.HERO_DAMAGE_BEGIN = 301;
    EffectType.HERO_DAMAGE_END = 399;
    return EffectType;
})();
EffectType.prototype.__class__ = "EffectType";
var EF_TEXT = { 1: "暴击率", 2: "暴击伤害", 3: "总伤害", 4: "所有基础伤害", 5: "点击伤害", 6: "此天将伤害", 7: "按照秒伤增加点击伤害", 8: "妖王金钱掉落", 9: "小妖金钱掉落", 10: "金钱掉落", 11: "点击金钱", 12: "所有金钱", 13: "双倍金钱几率", 14: "宝箱金钱数", 15: "妖王血量", 16: "妖王时间", 17: "天将死亡几率", 18: "升级花费", 19: "月光宝盒奖励", 20: "自动点击", 21: "天将攻速", 22: "对妖王伤害", 23: "小妖数量", 24: "升级消耗", 25: "天将秒伤", 26: "宝箱几率", 27: "10倍金钱几率", 28: "天将复活时间", 101: "定海神针伤害", 102: "救命毫毛持续时间", 103: "火眼金睛持续时间", 104: "藕丝步云履持续时间", 105: "凤翅紫金冠持续时间", 106: "锁子黄金甲持续时间", 201: "定海神针冷却时间", 202: "救命毫毛冷却时间", 203: "火眼金睛冷却时间", 204: "藕丝步云履冷却时间", 205: "凤翅紫金冠冷却时间", 206: "锁子黄金甲冷却时间" };
var EF_PLUS = { 1: "+", 2: "+", 3: "+", 4: "+", 5: "+", 6: "+", 7: "+", 8: "+", 9: "+", 10: "+", 11: "+", 12: "+", 13: "+", 14: "+", 15: "-", 16: "+", 17: "-", 18: "-", 19: "+", 20: "+", 21: "+", 22: "+", 23: "-", 24: "-", 25: "+", 26: "+", 27: "+", 28: "-", 101: "+", 102: "+", 103: "+", 104: "+", 105: "+", 106: "+", 201: "-", 202: "-", 203: "-", 204: "-", 205: "-", 206: "-" };
var ET = EffectType;
var Skill = (function () {
    function Skill() {
        this.lasting_time = 0;
        this.begin_time = 0;
        this.cd_time = 0;
    }
    return Skill;
})();
Skill.prototype.__class__ = "Skill";
var Hero = (function () {
    function Hero() {
        this.skills = [];
        this.type = 0;
        this.dead = false;
        this.hit_fly = false;
        this.revive_time = 0;
        this.total_dps = null;
    }
    return Hero;
})();
Hero.prototype.__class__ = "Hero";
var Artifact = (function () {
    function Artifact() {
    }
    return Artifact;
})();
Artifact.prototype.__class__ = "Artifact";
var Monster = (function () {
    function Monster() {
        this.max_hp = null;
        this.base_money = null;
    }
    return Monster;
})();
Monster.prototype.__class__ = "Monster";
var Sheild = (function () {
    function Sheild() {
        this.hp = 0;
        this.hp_max = 0;
    }
    return Sheild;
})();
Sheild.prototype.__class__ = "Sheild";
var Fruit = (function () {
    function Fruit() {
        this.state = 0;
        this.type = 0;
        this.data = 0;
    }
    return Fruit;
})();
Fruit.prototype.__class__ = "Fruit";
var Baozhu = (function () {
    function Baozhu() {
        this.time = 0;
        this.hp = 0;
        this.hero_id = 0;
    }
    return Baozhu;
})();
Baozhu.prototype.__class__ = "Baozhu";
var Status = (function () {
    function Status() {
        this.type = 0;
        this.data = 0;
        this.time = 0;
        this.end_time = 0;
    }
    return Status;
})();
Status.prototype.__class__ = "Status";
var GlobalEffect = (function () {
    function GlobalEffect() {
    }
    GlobalEffect.setData = function (type, data) {
        GlobalEffect.data[type] = data;
    };
    GlobalEffect.addData = function (type, data) {
        GlobalEffect.data[type] = GlobalEffect.getData(type) + data;
    };
    GlobalEffect.getData = function (type) {
        var temp = GlobalEffect.data[type];
        if (temp == null) {
            return 0;
        }
        return temp;
    };
    GlobalEffect.clearData = function () {
        GlobalEffect.data = [];
    };
    GlobalEffect.data = [];
    return GlobalEffect;
})();
GlobalEffect.prototype.__class__ = "GlobalEffect";
var StatisticType = (function () {
    function StatisticType() {
    }
    StatisticType.KILL = 0;
    StatisticType.MONEY = 1;
    StatisticType.STEP = 2;
    StatisticType.PEACH = 3;
    StatisticType.NUM_ARTIFACT = 4;
    StatisticType.DPS = 5;
    StatisticType.KILL_BOSS = 6;
    StatisticType.TAP = 7;
    StatisticType.RESET = 8;
    StatisticType.LEVELUP_HERO = 9;
    StatisticType.CHEST = 10;
    StatisticType.FAIRY = 11;
    StatisticType.SKILL1 = 12;
    StatisticType.CRITICAL = 13;
    StatisticType.SKILLS = 14; // 成就无关
    StatisticType.PERKS = 15; // 成就无关
    StatisticType.TOTAL_STEP = 16; // 历史过关总数
    return StatisticType;
})();
StatisticType.prototype.__class__ = "StatisticType";
var AchivementDiamonds = [15, 25, 50, 100, 200];
var ST = StatisticType;
var Stat = (function () {
    function Stat() {
    }
    Stat.setData = function (type, data) {
        Stat.data[type] = data;
    };
    Stat.updateData = function (type, data) {
        if (Stat.getData(type) < data) {
            Stat.data[type] = data;
        }
    };
    Stat.addData = function (type, data) {
        Stat.data[type] = Stat.getData(type) + data;
    };
    Stat.getData = function (type) {
        var temp = Stat.data[type];
        if (temp == null) {
            return 0;
        }
        return temp;
    };
    Stat.addListData = function (type, index, data) {
        var temp = Stat.data[type];
        if (temp == null) {
            Stat.data[type] = [];
        }
        for (var i = 0; i <= index; ++i) {
            if (Stat.data[type][i] == null) {
                Stat.data[type][i] = 0;
            }
        }
        Stat.data[type][index] += data;
    };
    Stat.refreshAchieve = function () {
        var l_new = [];
        for (var i = 0; i < Stat.achieve.length; ++i) {
            if (Stat.cur_achieve[i] == 5) {
                continue;
            }
            if (Stat.getData(i) >= Stat.achieve[i][Stat.cur_achieve[i]]) {
                l_new.push(i);
            }
        }
        Stat.new_achieve = l_new;
        return l_new.length > 0;
    };
    Stat.receiveAchieve = function (type) {
        if (!Utils.v_in(type, Stat.new_achieve)) {
            return [false, 0];
        }
        /*
        var ii = Stat.new_achieve.indexOf( type )
        Stat.new_achieve.splice( ii, 1 )
        */
        var diamond = AchivementDiamonds[Stat.cur_achieve[type]];
        Logic.addDiamond(diamond);
        Stat.cur_achieve[type] += 1;
        Stat.refreshAchieve();
        return [true, diamond];
    };
    Stat.data = [];
    Stat.achieve = [];
    Stat.cur_achieve = [];
    Stat.new_achieve = [];
    return Stat;
})();
Stat.prototype.__class__ = "Stat";
var GE = GlobalEffect;
var Logic = (function () {
    function Logic() {
    }
    Logic.clear = function () {
        Logic.player.skills = [];
        Logic.heroes = [];
        Logic.artifacts = [];
        Logic.money = 0;
        Logic.diamond = 0;
        Logic.peach = 0;
        Logic.step = 1;
        Logic.sub_step = 0;
        Logic.boss_hint = 0;
        Stat.data = [];
        Stat.cur_achieve = [];
    };
    Logic.dumpDataShort = function () {
        var data = [];
        data.push(Logic.money);
        data.push(Logic.diamond);
        data.push(Logic.peach);
        data.push(Logic.step);
        data.push(Logic.sub_step);
        data.push(Logic.boss_hint);
        var p = [];
        data.push(p);
        p.push(Logic.player.name);
        p.push(Logic.player.level);
        var ss = [];
        p.push(ss);
        for (var i = 0; i < Logic.player.skills.length; ++i) {
            var skill = Logic.player.skills[i];
            var s = [];
            s.push(skill.begin_time);
            s.push(skill.cd_time);
            s.push(Number(skill.locked));
            s.push(skill.level);
            ss.push(s);
        }
        var hs = [];
        data.push(hs);
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            var h = [];
            hs.push(h);
            h.push(hero.level);
            h.push(Number(hero.locked));
            h.push(Number(hero.dead));
            var n_hsk = -1;
            for (var j = 0; j < hero.skills.length; ++j) {
                var skill = hero.skills[j];
                if (skill.locked == false) {
                    n_hsk = j;
                }
            }
            h.push(n_hsk + 1);
            h.push(hero.hero_id);
            h.push(hero.revive_time);
        }
        var aa = [];
        data.push(aa);
        for (var i = 0; i < Logic.artifacts.length; ++i) {
            var artifact = Logic.artifacts[i];
            var a = [];
            a.push(artifact.artifact_id);
            a.push(artifact.level);
            aa.push(a);
        }
        data.push(Stat.data);
        data.push(Stat.cur_achieve);
        data.push(Logic.difficulties_records);
        data.push(Logic.difficulty_passed_id);
        return data;
    };
    Logic.loadDataShort = function (data, server) {
        if (server === void 0) { server = true; }
        if (server) {
            Logic.offline_money = data.splice(0, 1)[0];
        }
        Logic.money = data.splice(0, 1)[0];
        Logic.diamond = data.splice(0, 1)[0];
        Logic.peach = data.splice(0, 1)[0];
        Logic.step = data.splice(0, 1)[0];
        Logic.sub_step = data.splice(0, 1)[0];
        Logic.boss_hint = data.splice(0, 1)[0];
        var p = data.splice(0, 1)[0];
        Logic.player.name = p.splice(0, 1)[0];
        Logic.player.level = p.splice(0, 1)[0];
        var ss = p.splice(0, 1)[0];
        var n = 0;
        if (ss != null) {
            n = ss.length;
        }
        for (var i = 0; i < n; ++i) {
            var skill = new Skill();
            Logic.player.skills[i] = skill;
            skill.begin_time = ss[i][0];
            skill.cd_time = ss[i][1];
            skill.locked = Boolean(ss[i][2]);
            skill.level = ss[i][3];
        }
        for (var i = 0; i < 7 - n; ++i) {
            var skill = new Skill();
            Logic.player.skills[i] = skill;
            skill.begin_time = 0;
            skill.cd_time = 0;
            skill.locked = true;
            skill.level = 0;
        }
        Logic.initHero();
        var hs = data.splice(0, 1)[0];
        for (var i = 0; i < hs.length; ++i) {
            var hero_id = hs[i][4];
            if (hero_id == null) {
                hero_id = i + 1;
            }
            var hero = Logic.getHeroByID(hero_id);
            if (hero == null) {
                continue;
            }
            hero.level = hs[i][0];
            hero.locked = Boolean(hs[i][1]);
            hero.dead = Boolean(hs[i][2]);
            var n_hsk = hs[i][3];
            for (var j = 0; j < 7; ++j) {
                var skill = new Skill();
                hero.skills[j] = skill;
                skill.locked = (j >= n_hsk);
            }
            hero.revive_time = hs[i][5] || 0;
            if (hero.revive_time <= U.time()) {
                hero.revive_time = 0;
                hero.dead = false;
            }
        }
        var aa = data.splice(0, 1)[0];
        for (var i = 0; i < aa.length; ++i) {
            var artifact = new Artifact();
            Logic.artifacts[i] = artifact;
            artifact.artifact_id = aa[i][0];
            artifact.level = aa[i][1];
        }
        Stat.data = data.splice(0, 1)[0] || [];
        Stat.cur_achieve = data.splice(0, 1)[0] || [];
        var t = mb.data["trophies_list"];
        for (var i = 0; i < t.length; ++i) {
            var line = t[i];
            Stat.achieve[i] = [line[trophies_list_data1], line[trophies_list_data2], line[trophies_list_data3], line[trophies_list_data4], line[trophies_list_data5]];
            if (Stat.cur_achieve[i] == null) {
                Stat.cur_achieve[i] = 0;
            }
            if (Stat.data[i] == null) {
                Stat.data[i] = 0;
            }
        }
        Stat.data[ST.SKILLS] = [];
        Stat.data[ST.PERKS] = [];
        Logic.difficulties_records = data.splice(0, 1)[0] || [];
        Logic.difficulty_passed_id = data.splice(0, 1)[0] || 0;
    };
    Logic.dumpData = function () {
        var data = {};
        data["money"] = Logic.money;
        data["diamond"] = Logic.diamond;
        data["peach"] = Logic.peach;
        data["step"] = Logic.step;
        data["sub_step"] = Logic.sub_step;
        data["player"] = {};
        var p = data["player"];
        p["name"] = Logic.player.name;
        p["level"] = Logic.player.level;
        p["skills"] = [];
        for (var i = 0; i < Logic.player.skills.length; ++i) {
            var skill = Logic.player.skills[i];
            var s = {};
            s["begin_time"] = skill.begin_time;
            s["cd_time"] = skill.cd_time;
            s["locked"] = Number(skill.locked);
            s["level"] = skill.level;
            p["skills"].push(s);
        }
        data["heroes"] = [];
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            var h = {};
            h["level"] = hero.level;
            h["locked"] = Number(hero.locked);
            data["heroes"].push(h);
            h["skills"] = [];
            for (var j = 0; j < hero.skills.length; ++j) {
                var skill = hero.skills[j];
                var s = {};
                s["locked"] = Number(skill.locked);
                h["skills"].push(s);
            }
        }
        data["artifacts"] = [];
        for (var i = 0; i < Logic.artifacts.length; ++i) {
            var artifact = Logic.artifacts[i];
            var a = {};
            a["artifact_id"] = artifact.artifact_id;
            a["level"] = artifact.level;
            data["artifacts"].push(a);
        }
        data["stat"] = Stat.data;
        data["archieve"] = Stat.cur_achieve;
        return data;
    };
    Logic.loadData = function (data) {
        var offline_money = data["offline_money"];
        if (offline_money != null) {
            Logic.offline_money = offline_money;
        }
        Logic.money = data["money"];
        Logic.diamond = data["diamond"];
        Logic.peach = data["peach"];
        Logic.step = data["step"];
        Logic.sub_step = data["sub_step"];
        Logic.player.name = data["player"]["name"];
        Logic.player.level = data["player"]["level"];
        for (var i = 0; i < 7; ++i) {
            var s = data["player"]["skills"][i];
            var skill = new Skill();
            Logic.player.skills[i] = skill;
            if (s != null) {
                skill.begin_time = s["begin_time"];
                skill.cd_time = s["cd_time"];
                skill.locked = Boolean(s["locked"]);
                skill.level = s["level"];
            }
            else {
                skill.begin_time = 0;
                skill.cd_time = 0;
                skill.locked = true;
                skill.level = 0;
            }
        }
        var num_heroes = mb.data["hero_list"].length;
        for (var i = 0; i < num_heroes; ++i) {
            var h = data["heroes"][i];
            var hero = new Hero();
            Logic.heroes[i] = hero;
            if (h != null) {
                hero.level = h["level"];
                hero.locked = Boolean(h["locked"]);
                for (var j = 0; j < 7; ++j) {
                    var skill = new Skill();
                    var s = h["skills"][j];
                    hero.skills[j] = skill;
                    if (s == null) {
                        skill.locked = true;
                        skill.level = 0;
                    }
                    else {
                        skill.locked = Boolean(s["locked"]);
                        skill.level = s["level"];
                    }
                }
            }
            else {
                hero.level = 0;
                hero.locked = true;
                for (var j = 0; j < 7; ++j) {
                    var skill = new Skill();
                    hero.skills[j] = skill;
                    skill.locked = true;
                    skill.level = 0;
                }
            }
        }
        for (var i = 0; i < data["artifacts"].length; ++i) {
            var a = data["artifacts"][i];
            var artifact = new Artifact();
            Logic.artifacts.push(artifact);
            artifact.artifact_id = a["artifact_id"];
            artifact.level = a["level"];
        }
        Stat.data = data["stat"] || [];
        Stat.cur_achieve = data["achieve"] || [];
        var t = mb.data["trophies_list"];
        for (var i = 0; i < t.length; ++i) {
            var line = t[i];
            Stat.achieve[i] = [line[trophies_list_data1], line[trophies_list_data2], line[trophies_list_data3], line[trophies_list_data4], line[trophies_list_data5]];
            if (Stat.cur_achieve[i] == null) {
                Stat.cur_achieve[i] = 0;
            }
            if (Stat.data[i] == null) {
                Stat.data[i] = 0;
            }
        }
    };
    Logic.initPlayer = function () {
        Logic.player.name = "_default_player_name";
        Logic.player.level = 1;
        for (var i = 0; i < 7; ++i) {
            var s = new Skill();
            s.skill_id = i + 1;
            var line = Utils.getLine("player_skill", s.skill_id);
            s.name = line[player_skill_name];
            s.level = 0;
            s.locked = true;
            Logic.player.skills.push(s);
        }
    };
    Logic.getHeroByID = function (hero_id) {
        var index = Logic.getHeroIndexByID(hero_id);
        if (index != null) {
            return Logic.heroes[index];
        }
        return null;
    };
    Logic.getHeroIndexByID = function (hero_id) {
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            if (hero.hero_id == hero_id) {
                return i;
            }
        }
        return null;
    };
    Logic.sortHeroes = function () {
        var compare = function (h1, h2) {
            if (h1.order < h2.order) {
                return -1;
            }
            else if (h1.order > h2.order) {
                return 1;
            }
            return 0;
        };
        Logic.heroes.sort(compare);
    };
    Logic.initHero = function () {
        var n = mb.data.hero_list.length;
        for (var i = 0; i < n; ++i) {
            var hero = new Hero();
            Logic.heroes.push(hero);
            var line = mb.data["hero_list"][i];
            hero.hero_id = line[hero_list_id];
            hero.name = line[hero_list_name];
            hero.level = 0;
            hero.locked = true;
            hero.order = line[hero_list_order];
            hero.type = line[hero_list_type];
            for (var j = 0; j < 7; ++j) {
                var s = new Skill();
                s.skill_id = hero.hero_id * 1000000 + j + 1;
                var line = Utils.getLine("hero_skill", s.skill_id);
                s.name = line[hero_skill_name];
                s.level = 1;
                s.locked = true;
                hero.skills.push(s);
            }
        }
        Logic.sortHeroes();
    };
    Logic.refreshHeroEffect = function (hero) {
        if (hero.dead || hero.locked || hero.hit_fly) {
            return;
        }
        Logic.calcHeroDPS(hero);
        for (var i = 0; i < hero.skills.length; ++i) {
            if (hero.skills[i].locked) {
                break;
            }
            var skill_id = hero.skills[i].skill_id;
            var line = Utils.getLine("hero_skill", skill_id);
            var type = line[hero_skill_effect_id];
            var data = line[hero_skill_effect_data];
            if (type == ET.THIS_HERO_DAMAGE) {
                type = (hero.hero_id - 1) + ET.HERO_DAMAGE_BEGIN;
            }
            GE.addData(type, data);
        }
    };
    Logic.refreshArtifactEffect = function (artifact) {
        var l = [artifact.effect_type1, artifact.effect_type2];
        var ld = [artifact.effect_data1, artifact.effect_data2];
        for (var i = 0; i <= 1; ++i) {
            GE.addData(l[i], ld[i]);
        }
    };
    Logic.refreshAll = function () {
        Logic.refreshBase();
        Logic.refreshFinal();
    };
    Logic.refreshBase = function () {
        for (var i = 0; i < Logic.player.skills.length; ++i) {
            var s = Logic.player.skills[i];
            s.skill_id = i + 1;
            var line = Utils.getLine("player_skill", s.skill_id);
            s.name = line[player_skill_name];
            s.unlock_level = line[player_skill_unlock_level];
            s.lasting_time = line[player_skill_time];
            if (i == 0) {
                s.lasting_time = 1.0;
            }
        }
        Logic.calcPlayerDamage();
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            var line = Utils.getLine("hero_list", hero.hero_id);
            hero.name = line[hero_list_name];
            for (var j = 0; j < hero.skills.length; ++j) {
                var skill = hero.skills[j];
                skill.skill_id = hero.hero_id * 1000000 + j + 1;
                var line = Utils.getLine("hero_skill", skill.skill_id);
                skill.name = line[hero_skill_name];
                skill.unlock_level = line[hero_skill_unlock_level];
            }
            Logic.calcHeroDPS(hero);
        }
        for (var i = 0; i < Logic.artifacts.length; ++i) {
            var artifact = Logic.artifacts[i];
            var line = Utils.getLine("artifact_list", artifact.artifact_id);
            artifact.name = line[artifact_list_name];
            Logic.calcArtifact(artifact);
        }
        var t = mb.data["trophies_list"];
        for (var i = 0; i < t.length; ++i) {
            var line = t[i];
            Stat.achieve[i] = [line[trophies_list_data1], line[trophies_list_data2], line[trophies_list_data3], line[trophies_list_data4], line[trophies_list_data5]];
            if (Stat.cur_achieve[i] == null) {
                Stat.cur_achieve[i] = 0;
            }
            if (Stat.data[i] == null) {
                Stat.data[i] = 0;
            }
        }
    };
    Logic.refreshFinal = function () {
        GE.clearData();
        Logic.expireStatus();
        for (var i = 0; i < Logic.l_status.length; ++i) {
            var s = Logic.l_status[i];
            GE.addData(s.type, s.data);
        }
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            Logic.refreshHeroEffect(hero);
        }
        for (var i = 0; i < Logic.artifacts.length; ++i) {
            var artifact = Logic.artifacts[i];
            Logic.refreshArtifactEffect(artifact);
        }
        for (var i = 0; i < Logic.player.skills.length; ++i) {
            if (Logic.player.skills[i].begin_time == 0) {
                continue;
            }
            var skill_id = i + 1;
            var skill_data = Logic.getPlayerSkillData(skill_id);
            if (skill_id == 3) {
                GE.addData(ET.CRITICAL_CHANCE, skill_data);
            }
            else if (skill_id == 4) {
                GE.addData(ET.DPS, skill_data);
                GE.addData(ET.HERO_SPEED, skill_data);
            }
            else if (skill_id == 5) {
                GE.addData(ET.TAP_DAMAGE, skill_data);
            }
            else if (skill_id == 6) {
                GE.addData(ET.TAP_MONEY, 1 + skill_data);
            }
        }
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            Logic.finalHeroDPS(hero);
        }
        Logic.finalTotalDPS();
        Logic.finalPlayerDamage();
        Stat.updateData(ST.DPS, Logic.dps);
    };
    Logic.calcMonsterMaxHP = function () {
        //29*1.57的N-1次方
        var hp = 29 * Math.pow(1.57, Logic.step - 1);
        if (Logic.monster.type == "boss") {
            var l = [2, 4, 6, 7, 10];
            var n = l[(Logic.step - 1) % 5];
            hp = hp * n;
        }
        Logic.monster.max_hp = hp;
        Logic.monster.hp = hp;
    };
    Logic.calcStepMoney = function () {
        //0.6227×1.5934的N次方
        var money = 0.6227 * Math.pow(1.5934, Logic.step - 1);
        if (money < 1) {
            money = 1;
        }
        Logic.monster.base_money = money;
    };
    Logic.getDropMoney = function () {
        var base_money = Logic.monster.base_money;
        var money = base_money;
        if (Logic.monster.type == "boss") {
            var l = [2, 4, 6, 7, 12];
            var n = l[Logic.step % 5];
            money = base_money * n;
            money = money * (1 + GE.getData(ET.BOSS_MONEY) + GE.getData(ET.ALL_DROP));
        }
        else if (Logic.monster.type == "chest") {
            money = money * (1 + GE.getData(ET.CHEST_MONEY) + GE.getData(ET.ALL_DROP)) * 10;
        }
        else {
            money = money * (1 + GE.getData(ET.MONSTER_MONEY) + GE.getData(ET.ALL_DROP));
        }
        return money;
    };
    Logic._artifactLevelPeach = function (artifact_id, level) {
        var line = Utils.getLine("artifact_list", artifact_id);
        return Math.round(line[artifact_list_peach1] * (level) * (level) + line[artifact_list_peach2] * (level) + line[artifact_list_peach3]);
    };
    Logic.calcArtifact = function (artifact) {
        var line = Utils.getLine("artifact_list", artifact.artifact_id);
        var level = artifact.level;
        artifact.name = line[artifact_list_name];
        artifact.max_level = line[artifact_list_max_level];
        artifact.levelup_peach = Logic._artifactLevelPeach(artifact.artifact_id, level);
        artifact.effect_type1 = line[artifact_list_effect_id1];
        artifact.effect_type2 = line[artifact_list_effect_id2];
        artifact.effect_data1 = line[artifact_list_effect_data1] + line[artifact_list_levelup_par1] * (level - 1);
        artifact.effect_data2 = line[artifact_list_effect_data2] + line[artifact_list_levelup_par2] * (level - 1);
        if (level >= artifact.max_level) {
            artifact.effect_data_next1 = null;
            artifact.effect_data_next2 = null;
        }
        else {
            artifact.effect_data_next1 = line[artifact_list_effect_data1] + line[artifact_list_levelup_par1] * (level - 1 + 1);
            artifact.effect_data_next2 = line[artifact_list_effect_data2] + line[artifact_list_levelup_par2] * (level - 1 + 1);
        }
    };
    Logic.findArtifact = function (artifact_id) {
        for (var i = 0; i < Logic.artifacts.length; ++i) {
            if (Logic.artifacts[i].artifact_id == artifact_id) {
                return Logic.artifacts[i];
            }
        }
        return null;
    };
    Logic.levelupArtifact = function (artifact_id) {
        var artifact = Logic.findArtifact(artifact_id);
        if (artifact.level >= artifact.max_level) {
            return false;
        }
        var need = artifact.levelup_peach;
        if (Logic.peach < need) {
            return false;
        }
        Logic.peach -= need;
        artifact.level += 1;
        Logic.calcArtifact(artifact);
        Logic.refreshFinal();
        return true;
    };
    Logic.buyArtifact = function () {
        if (!Logic.canBuyArtifact()) {
            return [false, null];
        }
        var all_ids = [];
        var max_artifact_id = mb.data["artifact_list"][mb.data["artifact_list"].length - 1][artifact_list_id];
        for (var i = 1; i <= max_artifact_id; ++i) {
            if (Logic.findArtifact(i) == null) {
                all_ids.push(i);
            }
        }
        var r = Utils.RandInt(0, all_ids.length - 1);
        var new_id = all_ids[r];
        Logic.peach -= Logic.getBuyArtifactPeach();
        var line_artifact = Utils.getLine("artifact_list", new_id);
        var artifact = new Artifact();
        Logic.artifacts.push(artifact);
        artifact.artifact_id = new_id;
        artifact.level = 1;
        Logic.calcArtifact(artifact);
        Logic.refreshFinal();
        Stat.updateData(ST.NUM_ARTIFACT, Logic.artifacts.length);
        return [true, artifact];
    };
    Logic.getHeroDPS = function (hero_id, level) {
        if (level == 0) {
            return 0;
        }
        var hero_line = Utils.getLine("hero_list", hero_id);
        var times = hero_line[hero_list_attack_a1];
        var dps = 0;
        if (level <= 100) {
            var line = Utils.getLine("hero_level", level);
            dps = line[hero_level_dps];
        }
        else if (level <= 3999) {
            var level_step = Math.floor(level / 100) * 100;
            var line = Utils.getLine("hero_level", level_step);
            var base = line[hero_level_dps];
            var next_level_step = (Math.floor(level / 100) + 1) * 100;
            var next_line = Utils.getLine("hero_level", next_level_step);
            var next = next_line[hero_level_dps];
            var a = (next - base) / 10000;
            var x = level - level_step;
            dps = base + a * x * x;
        }
        else {
            var line = Utils.getLine("hero_level", 4000);
            var x = level - 4000;
            var base = line[hero_level_dps];
            dps = base * Math.pow(1.005, x);
        }
        return dps * times;
    };
    Logic.calcHeroDPS = function (hero) {
        hero.dps = Logic.getHeroDPS(hero.hero_id, hero.level);
    };
    Logic.finalHeroDPS = function (hero) {
        if (hero.dead || hero.hit_fly) {
            hero.total_dps = 0;
            return;
        }
        hero.total_dps = hero.dps * (1 + GE.getData(hero.hero_id - 1 + ET.HERO_DAMAGE_BEGIN) + GE.getData(ET.ALL_BASE_DAMAGE));
    };
    Logic.getPlayerLevelDamage = function (level) {
        if (level <= 100) {
            var line = Utils.getLine("player_level", level);
            return line[player_level_attack];
        }
        else if (level <= 4900) {
            var level_step = Math.floor((level - 1) / 100) * 100 + 1;
            var line = Utils.getLine("player_level", level_step);
            var base = line[player_level_attack];
            return base * Math.pow(line[player_level_par], level - level_step);
        }
        else {
            var line = (mb.data.player_level[mb.data.player_level.length - 1]);
            var level_step = line[player_level_id];
            var base = line[player_level_attack];
            return base * Math.pow(line[player_level_par], level - level_step);
        }
    };
    Logic.calcPlayerDamage = function () {
        Logic.player.damage = Logic.getPlayerLevelDamage(Logic.player.level);
    };
    Logic.finalPlayerDamage = function () {
        Logic.player.total_damage = Logic.player.damage * (1 + GE.getData(ET.TAP_DAMAGE) + GE.getData(ET.ALL_BASE_DAMAGE)) + Logic.dps * GE.getData(ET.TAP_DAMAGE_BY_DPS);
        Logic.player.total_damage *= 1 + GE.getData(ET.ALL_DAMAGE);
    };
    Logic.finalTotalDPS = function () {
        var dps = 0;
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            if (hero.locked) {
                continue;
            }
            dps += hero.total_dps;
        }
        dps = dps * (1 + GE.getData(ET.ALL_DAMAGE)) * (1 + GE.getData(ET.DPS));
        Logic.dps = dps;
        return Logic.dps;
    };
    Logic.increaseStep = function () {
        var l = Logic.getNextStep(Logic.step, Logic.sub_step);
        if (l[0] > Logic.step) {
            Stat.updateData(ST.STEP, l[0]);
            if (l[0] > Logic.step) {
                Stat.addData(ST.TOTAL_STEP, l[0] - Logic.step);
            }
        }
        Logic.step = l[0];
        Logic.sub_step = l[1];
    };
    Logic.getNextStep = function (step, sub_step) {
        if (sub_step == -1) {
            if (!Logic.next_step_boss) {
                return [step, sub_step];
            }
            return [step, 10];
        }
        if (sub_step < 10) {
            return [step, sub_step + 1];
        }
        return [step + 1, 0];
    };
    Logic.failStep = function () {
        Logic.sub_step = -1;
    };
    Logic.chooseBossStep = function () {
        Logic.next_step_boss = true;
    };
    Logic.getMonsterDataByStep = function (step, sub_step, priority_id) {
        if (priority_id === void 0) { priority_id = 0; }
        var line = Utils.getLine("step_list", step);
        var monster_id = 0;
        var monster_type = "";
        if (sub_step != 10) {
            var r = Math.random() * 100;
            var chest_chance = line[step_list_chest_chance] * (1 + GE.getData(ET.CHEST_CHANCE));
            if (step > 1 && r <= chest_chance) {
                monster_id = 13;
                monster_type = "chest";
            }
            else {
                monster_type = "monster";
                var l = line[step_list_monsters];
                if (priority_id != 0) {
                    for (var i = 0; i < l.length; ++i) {
                        if (l[i] == priority_id) {
                            monster_id = l[i];
                            break;
                        }
                    }
                }
                if (monster_id == 0) {
                    r = Utils.RandInt(0, line[step_list_monsters].length - 1);
                    monster_id = line[step_list_monsters][r];
                }
            }
        }
        else {
            monster_id = line[step_list_boss];
            monster_type = "boss";
        }
        return [monster_id, monster_type];
    };
    Logic.initStep = function () {
        Logic.next_step_boss = false;
        var md = Logic.getMonsterDataByStep(Logic.step, Logic.sub_step, Logic.priority_monster_id);
        Logic.monster.monster_id = (md[0]);
        Logic.monster.type = (md[1]);
        if (Logic.monster.type == "boss") {
            Logic.monster.boss_time = 30 * (1 + GE.getData(ET.BOSS_TIME));
        }
        for (var i = 0; i < G.max_sheild_num; i++) {
            Logic.sheilds[i].hp = 0;
            Logic.sheilds[i].hp_max = 0;
        }
        if (Logic.monster.type == "boss") {
            var line_step = Utils.getLine("step_list", Logic.step);
            if (line_step[step_list_game_type] == G.boss_game_type_sheild) {
                var iSheildNum = line_step[step_list_game_data1];
                var iSheildHpMax = line_step[step_list_game_data2];
                if (iSheildNum > G.max_sheild_num) {
                    iSheildNum = G.max_sheild_num;
                }
                for (var i = 0; i < iSheildNum; i++) {
                    Logic.sheilds[i].hp_max = iSheildHpMax;
                }
            }
        }
        var line_monster = Utils.getLine("npc_list", Logic.monster.monster_id);
        var monster_pic = line_monster[npc_list_pic];
        var dragon_name = monster_pic;
        Logic.monster.dragon_name = dragon_name;
        Logic.monster.name = line_monster[npc_list_name];
        Logic.calcMonsterMaxHP();
        Logic.calcStepMoney();
        // async load
        var l = Logic.getNextStep(Logic.step, Logic.sub_step);
        var next_monster_data = Logic.getMonsterDataByStep(l[0], l[1]);
        var next_line = Utils.getLine("npc_list", next_monster_data[0]);
        var next_dragon_name = next_line[npc_list_pic];
        Utils.loadDragonBone(next_dragon_name);
        Logic.priority_monster_id = next_monster_data[0];
        Logic.kill_hero_flag = false;
    };
    Logic.getFairyAward = function () {
        var r = Utils.RandInt(1, 3);
        if (r == 1) {
            var d = 1;
            if (no_any_pay) {
                if (Logic.step < 50) {
                    d = U.RandInt(1, 5);
                }
                else {
                    d = U.RandInt(5, 20);
                }
            }
            return ["diamond", d];
        }
        else {
            return ["money", Logic.monster.base_money * 10];
        }
    };
    Logic.getShopMoney = function () {
        return Logic.monster.base_money * (4700 + Logic.step * 5);
    };
    Logic.buyShopMoney = function () {
        var money = Logic.getShopMoney();
        if (Logic.diamond < G.buy_money_fee) {
            return [1, 0];
        }
        Logic.diamond -= G.buy_money_fee;
        //Logic.money += money
        return [0, money];
    };
    Logic.shopHit = function (type) {
        var percent = 0.5;
        if (type == 1) {
            percent = 0.5;
        }
        else if (type == 2) {
            percent = 0.9;
        }
        var cost_hp = Math.floor(Logic.monster.max_hp * percent);
        var dead = Logic.costMonsterHP(cost_hp);
        if (dead) {
            Logic.onMonsterDead();
        }
        return [cost_hp, dead];
    };
    Logic.shopHoldingTap = function () {
        if (Logic.holding_tap != 0) {
            return 2;
        }
        if (!Logic.costDiamond(G.holding_tap_fee)) {
            return 1;
        }
        var cur = Utils.time();
        Logic.holding_tap = G.holding_tap_time + cur;
        return 0;
    };
    Logic.isProtectingHero = function () {
        if (Utils.time() < Logic.protect_hero) {
            return true;
        }
        return false;
    };
    Logic.getProtectHeroTime = function () {
        var t = Logic.protect_hero - Utils.time();
        if (t < 0) {
            return 0;
        }
        return t;
    };
    Logic.shopProtectHero = function () {
        var cur = Utils.time();
        if (Logic.protect_hero > cur) {
            return 2;
        }
        if (!Logic.costDiamond(G.protect_fee)) {
            return 1;
        }
        Logic.protect_hero = G.protect_hero_time + cur;
        return 0;
    };
    Logic.costDiamond = function (diamond) {
        if (Logic.diamond < diamond) {
            return false;
        }
        Logic.diamond -= diamond;
        return true;
    };
    Logic.costMonsterHP = function (cost) {
        if (Logic.monster.hp <= 0) {
            return false;
        }
        Logic.monster.hp -= cost;
        if (Logic.monster.hp <= 0) {
            Logic.monster.hp = 0;
            return true;
        }
        return false;
    };
    Logic.onMonsterDead = function () {
        if (Logic.monster.type == "chest") {
            Stat.addData(ST.CHEST, 1);
        }
        else if (Logic.monster.type == "monster") {
            Stat.addData(ST.KILL, 1);
        }
        else if (Logic.monster.type == "boss") {
            Stat.addData(ST.KILL_BOSS, 1);
            if (Logic.step >= 80 && Logic.step % 10 == 0) {
                Logic.addPeach(1);
            }
        }
        if (Utils.RandInt(1, 1000) <= 20) {
            Logic.fairy = true;
        }
        else {
            Logic.fairy = false;
        }
        if (Logic.isInChallengingDifficulty()) {
            Logic.difficulty_kill_number++;
        }
    };
    Logic.getDailyAward = function () {
        Logic.daily_award_exist = 0;
        var award_list = Logic.getDifficultyAwardById(Logic.difficulty_passed_id);
        Logic.money += award_list[0];
        Logic.peach += award_list[1];
        Logic.diamond += award_list[2];
        return 0;
    };
    Logic.isDailyAwardAvailable = function () {
        if (Logic.difficulty_passed_id > 0 && Logic.daily_award_exist == 1) {
            return true;
        }
        return false;
    };
    Logic.getDifficultyMonsterData = function (id, substep, priority_id) {
        if (priority_id === void 0) { priority_id = 0; }
        var line = Utils.getLine("difficulty_list", id);
        var monster_id = 0;
        var monster_type = "";
        if (substep != 4) {
            var r = Math.random() * 100;
            var chest_chance = line[difficulty_list_chest_chance] * (1 + GE.getData(ET.CHEST_CHANCE));
            if (r <= chest_chance) {
                monster_id = 13;
                monster_type = "chest";
            }
            else {
                monster_type = "monster";
                var l = line[step_list_monsters];
                if (priority_id != 0) {
                    for (var i = 0; i < l.length; ++i) {
                        if (l[i] == priority_id) {
                            monster_id = l[i];
                            break;
                        }
                    }
                }
                if (monster_id == 0) {
                    r = Utils.RandInt(0, line[difficulty_list_monsters].length - 1);
                    monster_id = line[difficulty_list_monsters][r];
                }
            }
        }
        else {
            monster_id = line[difficulty_list_boss];
            monster_type = "boss";
        }
        return [monster_id, monster_type];
    };
    Logic.calcDifficultyMoney = function () {
        //0.6227×1.5934的N次方
        /*
        var money = 0.6227 * Math.pow( 1.5934, Logic.difficulty_challenge_id )
        if ( money < 1 ) {
            money = 1
        }
        */
        var money = 0;
        Logic.monster.base_money = money;
    };
    Logic.calcDifficultyMonsterMaxHP = function () {
        //29*1.57的N-1次方
        var hp = 29 * Math.pow(1.57, Logic.difficulty_challenge_id * 20);
        if (Logic.monster.type == "boss") {
            var l = [2, 4, 6, 7, 10];
            var n = l[Logic.difficulty_challenge_id % 5];
            hp = hp * n;
        }
        Logic.monster.max_hp = hp;
        Logic.monster.hp = hp;
    };
    Logic.initDifficultySubStep = function () {
        Logic.next_step_boss = false;
        var md = Logic.getDifficultyMonsterData(Logic.difficulty_challenge_id, Logic.difficulty_sub_step, this.priority_difficulty_monster_id);
        Logic.monster.monster_id = (md[0]);
        Logic.monster.type = (md[1]);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, Utils.onResourceLoadComplete, null);
        for (var i = 0; i < G.max_sheild_num; i++) {
            Logic.sheilds[i].hp = 0;
            Logic.sheilds[i].hp_max = 0;
        }
        if (Logic.monster.type == "boss") {
            var line_step = Utils.getLine("difficulty_list", Logic.difficulty_challenge_id);
            if (line_step[difficulty_list_game_type] == G.boss_game_type_sheild) {
                var iSheildNum = line_step[difficulty_list_game_data1];
                var iSheildHpMax = line_step[difficulty_list_game_data2];
                if (iSheildNum > G.max_sheild_num) {
                    iSheildNum = G.max_sheild_num;
                }
                for (var i = 0; i < iSheildNum; i++) {
                    Logic.sheilds[i].hp_max = iSheildHpMax;
                }
            }
        }
        var line_monster = Utils.getLine("npc_list", Logic.monster.monster_id);
        var monster_pic = line_monster[npc_list_pic];
        var dragon_name = monster_pic;
        Logic.monster.dragon_name = dragon_name;
        Logic.monster.name = line_monster[npc_list_name];
        Logic.calcDifficultyMonsterMaxHP();
        Logic.calcDifficultyMoney();
        Logic.kill_hero_flag = false;
        // async load
        var next_md = Logic.getDifficultyMonsterData(Logic.difficulty_challenge_id, Logic.getNextDifficultySubStep());
        var next_line = Utils.getLine("npc_list", next_md[0]);
        var next_dragon_name = next_line[npc_list_pic];
        Utils.loadDragonBone(next_dragon_name);
        Logic.priority_difficulty_monster_id = next_md[0];
    };
    Logic.getNextDifficultySubStep = function () {
        var next_sub_step = Logic.difficulty_sub_step;
        next_sub_step++;
        if (next_sub_step % 5 == 0) {
            next_sub_step = 0;
        }
        return next_sub_step;
    };
    Logic.increaseDifficultySubStep = function () {
        Logic.difficulty_sub_step = Logic.getNextDifficultySubStep();
    };
    Logic.isFirstChallenge = function () {
        var kill_record = Logic.difficulties_records[Logic.difficulty_challenge_id - 1];
        if (kill_record == null) {
            return true;
        }
        return false;
    };
    Logic.isInChallengingDifficulty = function () {
        if (Logic.difficulty_challenge_id != 0) {
            return true;
        }
        return false;
    };
    Logic.startDifficultyMode = function (id) {
        Logic.difficulty_challenge_id = id;
        Logic.difficulty_duration_time = 40;
        Logic.difficulty_kill_number = 0;
        Logic.difficulty_sub_step = 0;
    };
    Logic.endDifficultyMode = function () {
        var kill_record = Logic.difficulties_records[Logic.difficulty_challenge_id - 1];
        if (kill_record == null) {
            kill_record = 0;
        }
        if (Logic.difficulty_kill_number >= 5 && Logic.difficulty_kill_number > kill_record) {
            Logic.difficulties_records[Logic.difficulty_challenge_id - 1] = Logic.difficulty_kill_number;
            if (Logic.difficulty_challenge_id > Logic.difficulty_passed_id) {
                Logic.difficulty_passed_id = Logic.difficulty_challenge_id;
            }
        }
        Logic.difficulty_challenge_id = 0;
        Logic.difficulty_duration_time = 0;
        Logic.difficulty_kill_number = 0;
        Logic.releaseHeroes();
    };
    Logic.getDifficultyNameById = function (id) {
        var line = Utils.getLine("difficulty_list", id);
        if (line == null) {
            return ["", ""];
        }
        return [line[difficulty_list_comment], line[difficulty_list_name]];
    };
    Logic.getDifficultyAwardById = function (id) {
        var line = Utils.getLine("difficulty_list", id);
        if (line == null) {
            return [0, 0, 0];
        }
        return [line[difficulty_list_money], line[difficulty_list_peach], line[difficulty_list_diamond]];
    };
    Logic.getDifficultyRecordById = function (id) {
        var kill_record = Logic.difficulties_records[id - 1];
        if (kill_record == null) {
            return 0;
        }
        return kill_record;
    };
    Logic.getDifficultyStatus = function (id) {
        if (id == Logic.difficulty_passed_id + 1) {
            // Next difficulty
            return 0;
        }
        else if (id <= Logic.difficulty_passed_id) {
            // Passed
            return 1;
        }
        // Locked
        return -1;
    };
    Logic.getNextDifficultyId = function () {
        var next_id = Logic.difficulty_passed_id + 1;
        if (next_id > 81) {
            next_id = 81;
        }
        return next_id;
    };
    Logic.getSheildLiveNum = function () {
        var num = 0;
        for (var i = 0; i < G.max_sheild_num; i++) {
            if (Logic.sheilds[i].hp > 0) {
                num++;
            }
        }
        return num;
    };
    Logic.triggerSheild = function () {
        if (Logic.monster.type != "boss") {
            return 0;
        }
        var i;
        for (i = 0; i < G.max_sheild_num; i++) {
            if (Logic.sheilds[i].hp_max > 0) {
                Logic.sheilds[i].hp = Logic.sheilds[i].hp_max;
            }
            else {
                break;
            }
        }
        return i;
    };
    Logic.hitSheild = function (index) {
        var sheild = Logic.sheilds[index];
        if (sheild == null || sheild.hp <= 0) {
            return false;
        }
        sheild.hp--;
        return true;
    };
    Logic.sheildExplode = function () {
        if (Logic.sheilds[0].hp_max <= 0) {
            return [0, false];
        }
        var tap_damage = Logic.player.total_damage;
        if (Logic.monster.type == "boss") {
            tap_damage *= 1 + GE.getData(ET.DAMAGE_TO_BOSS);
        }
        var cost_hp = tap_damage * Logic.sheilds[0].hp_max * 1.2;
        var dead = Logic.costMonsterHP(cost_hp);
        if (dead) {
            Logic.onMonsterDead();
        }
        return [cost_hp, dead];
    };
    Logic.triggerFruit = function (force) {
        if (force === void 0) { force = false; }
        if (Logic.l_status.length > 0) {
            return null;
        }
        if (Logic.fruits.length > 0) {
            return null;
        }
        if (U.RandInt(1, 1000) > 30) {
            return null;
        }
        //var types = [ 1,2,3,4,7 ]
        var types = [1, 2, 3, 4];
        if (Logic.step <= 2) {
            return null;
        }
        if (Logic.step <= 10) {
            types = [1, 2, 3];
        }
        var f = new Fruit();
        f.type = types[U.RandInt(0, types.length - 1)];
        f.data = 0;
        Logic.fruits.push(f);
        return f;
    };
    Logic.findFruitIndex = function (f) {
        for (var i = 0; i < Logic.fruits.length; ++i) {
            if (Logic.fruits[i] == f) {
                return i;
            }
        }
        console.log("findFruitIndex failed", f);
        return null;
    };
    Logic.hitFruit = function (f) {
        var index = Logic.findFruitIndex(f);
        if (index == null) {
            return [];
        }
        //1~酒，2~苹果，3~葡萄，4~人参果 5~西瓜 6~仙桃 7~香蕉
        if (f.type == 7) {
            // 分身攻击
            return [-1, 0, 30];
        }
        var m_type2status = { 1: ET.CRITICAL_CHANCE, 2: ET.HERO_SPEED, 3: ET.TAP_DAMAGE, 4: ET.TAP_MONEY };
        var m_type_data = { 1: 0.2, 2: 1, 3: 1, 4: 0.25 };
        var m_type_time = { 1: 30, 2: 30, 3: 30, 4: 30 };
        var status_type = m_type2status[f.type];
        var status_data = m_type_data[f.type];
        var status_time = m_type_time[f.type];
        Logic.addStatus(status_type, status_data, status_time);
        return [status_type, status_data, status_time];
    };
    Logic.removeFruit = function (f) {
        var index = Logic.findFruitIndex(f);
        if (index == null) {
            return;
        }
        Logic.fruits.splice(index, 1);
    };
    Logic.addStatus = function (type, data, time) {
        var s = new Status();
        s.type = type;
        s.data = data;
        s.time = time;
        s.end_time = U.time() + time;
        Logic.l_status.push(s);
        Logic.refreshFinal();
    };
    Logic.expireStatus = function () {
        var l = [];
        for (var i = 0; i < Logic.l_status.length; ++i) {
            var s = Logic.l_status[i];
            if (s.end_time <= U.time()) {
                l.splice(0, 0, i);
            }
        }
        for (var i = 0; i < l.length; ++i) {
            Logic.l_status.splice(l[i], 1);
        }
    };
    Logic.findBaozhuIndex = function (baozhu) {
        for (var i = 0; i < Logic.l_baozhu.length; ++i) {
            if (Logic.l_baozhu[i] == baozhu) {
                return i;
            }
        }
        console.log("findBaozhuIndex failed", baozhu);
        return null;
    };
    Logic.triggerBaozhu = function () {
        if (Logic.l_baozhu.length > 0) {
            console.log("l_baozhu not empty ! ");
            return false;
        }
        var chance = 0;
        var l_hp = 0;
        var l_num = 0;
        if (Logic.isInChallengingDifficulty()) {
            var line = Utils.getLine("difficulty_list", Logic.difficulty_challenge_id);
            chance = line[difficulty_list_baozhu_chance];
            l_hp = line[difficulty_list_baozhu_hp];
            l_num = line[difficulty_list_baozhu_num];
        }
        else {
            var line = Utils.getLine("step_list", Logic.step);
            chance = line[step_list_baozhu_chance];
            l_hp = line[step_list_baozhu_hp];
            l_num = line[step_list_baozhu_num];
        }
        if (Logic.monster.type != "boss") {
            return false;
        }
        if (U.RandInt(1, 100) > chance) {
            return false;
        }
        var n = U.RandInt(l_num[0], l_num[1]);
        var l = [];
        var hero_ids = [];
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            if (hero.locked || hero.dead || hero.hit_fly) {
                continue;
            }
            hero_ids.push(hero.hero_id);
        }
        for (var i = 0; i < n; ++i) {
            if (hero_ids.length == 0) {
                break;
            }
            var r = U.RandInt(0, hero_ids.length - 1);
            l.push(hero_ids.splice(r, 1)[0]);
        }
        for (var i = 0; i < l.length; ++i) {
            var bz = new Baozhu();
            bz.time = 6;
            bz.hp = Utils.RandInt(l_hp[0], l_hp[1]);
            bz.hero_id = l[i];
            Logic.l_baozhu.push(bz);
        }
        return true;
    };
    Logic.explodeBaozhu = function (baozhu) {
        var index = Logic.findBaozhuIndex(baozhu);
        var bz = Logic.l_baozhu[index];
        var hero = Logic.getHeroByID(bz.hero_id);
        hero.hit_fly = true;
        Logic.refreshFinal();
        return true;
    };
    Logic.releaseHeroes = function () {
        for (var i = 0; i < Logic.heroes.length; ++i) {
            Logic.heroes[i].hit_fly = false;
        }
        Logic.refreshFinal();
    };
    Logic.hitBaozhu = function (index) {
        var bz = Logic.l_baozhu[index];
        bz.hp -= 1;
        if (bz.hp <= 0) {
            return true;
        }
        return false;
    };
    Logic.removeAllBaozhu = function () {
        Logic.l_baozhu = [];
    };
    Logic.tapHit = function () {
        var crit = false;
        if (Math.random() < 0.02 + GE.getData(ET.CRITICAL_CHANCE)) {
            crit = true;
        }
        var cost_hp = Logic.player.total_damage;
        if (Logic.monster.type == "boss") {
            cost_hp *= 1 + GE.getData(ET.DAMAGE_TO_BOSS);
        }
        if (crit) {
            var crit_base = U.RandInt(3, 5);
            cost_hp *= crit_base;
            cost_hp *= 1 + GE.getData(ET.CRITICAL_DAMAGE);
        }
        for (var i = 0; i < G.max_sheild_num; i++) {
            if (Logic.sheilds[i].hp > 0) {
                cost_hp *= 0.5;
            }
        }
        var dead = Logic.costMonsterHP(cost_hp);
        if (dead) {
            Logic.onMonsterDead();
        }
        var money = 0;
        money = GE.getData(ET.TAP_MONEY) * Logic.monster.base_money;
        Stat.addData(ST.TAP, 1);
        if (crit) {
            Stat.addData(ST.CRITICAL, 1);
        }
        return [cost_hp, dead, money, crit];
    };
    Logic.killHero = function () {
        if (Logic.isInChallengingDifficulty()) {
            return null;
        }
        if (Logic.monster.type != "boss") {
            return null;
        }
        if (Logic.kill_hero_flag) {
            return null;
        }
        if (Logic.step < 50) {
            return null;
        }
        if (Logic.isProtectingHero()) {
            return null;
        }
        var chance = 0.05 / Logic.monster.boss_time;
        chance *= 1 - GE.getData(ET.HERO_DEATH_CHANCE);
        if (chance < 0) {
            chance = 0;
        }
        chance = 1 - chance;
        var r_kill = Math.random();
        //console.log( "killHero", chance, r_kill, r_kill<chance )
        if (r_kill < chance) {
            return null;
        }
        var l = [];
        for (var i = 0; i < Logic.heroes.length; ++i) {
            var hero = Logic.heroes[i];
            if (!hero.hit_fly && !hero.dead && !hero.locked) {
                l.push(i);
            }
        }
        if (l.length == 0) {
            return null;
        }
        var r = Utils.RandInt(0, l.length - 1);
        var h = Logic.heroes[l[r]];
        h.dead = true;
        Logic.kill_hero_flag = true;
        var cur = Utils.time();
        var n = Math.ceil(Logic.step / 5);
        n = Math.min(n, 30);
        h.revive_time = cur + 3600 * n;
        h.revive_time *= 1 - GE.getData(ET.REVIVE_TIME);
        if (h.revive_time < 0) {
            h.revive_time = 0;
        }
        Logic.refreshFinal();
        return h.hero_id;
    };
    Logic.reviveHero = function (hero_id) {
        var cur = Utils.time();
        var hero = Logic.getHeroByID(hero_id);
        if (cur < hero.revive_time) {
            return false;
        }
        hero.dead = false;
        hero.revive_time = 0;
        Logic.refreshFinal();
        return true;
    };
    Logic.getReviveHeroDiamond = function (hero_id) {
        var cur = Utils.time();
        var hero = Logic.getHeroByID(hero_id);
        if (hero.revive_time == 0 || cur >= hero.revive_time) {
            return 0;
        }
        var remain = hero.revive_time - cur;
        var diamond = Math.ceil(remain / 3600 * 10);
        return diamond;
    };
    Logic.reviveHeroByDiamond = function (hero_id) {
        var cur = Utils.time();
        var hero = Logic.getHeroByID(hero_id);
        if (hero.revive_time == 0 || cur >= hero.revive_time) {
            return 2;
        }
        var need = Logic.getReviveHeroDiamond(hero_id);
        if (!Logic.costDiamond(need)) {
            return 1;
        }
        hero.dead = false;
        hero.revive_time = 0;
        Logic.refreshFinal();
        return 0;
    };
    Logic.shadowHit = function () {
        var cost_hp = Logic.player.total_damage;
        if (Logic.monster.type == "boss") {
            cost_hp *= 1 + GE.getData(ET.DAMAGE_TO_BOSS);
        }
        var dead = Logic.costMonsterHP(cost_hp);
        if (dead) {
            Logic.onMonsterDead();
        }
        return [cost_hp, dead];
    };
    Logic.heroHit = function () {
        var cost_hp = Logic.dps;
        if (Logic.monster.type == "boss") {
            cost_hp *= 1 + GE.getData(ET.DAMAGE_TO_BOSS);
        }
        for (var i = 0; i < G.max_sheild_num; i++) {
            if (Logic.sheilds[i].hp > 0) {
                cost_hp *= 0.4;
            }
        }
        var dead = Logic.costMonsterHP(cost_hp);
        if (dead) {
            Logic.onMonsterDead();
        }
        return [cost_hp, dead];
    };
    Logic._playerLevelMoney = function (level) {
        if (level <= 100) {
            var line = Utils.getLine("player_level", level);
            return line[player_level_money];
        }
        var money = 25.46108 * Math.pow(1.07394, level);
        if (level > 2990) {
            money *= 10;
        }
        if (level > 3500) {
            money *= 10;
        }
        return money;
    };
    Logic.getPlayerLevelupMoney = function (n) {
        var level = Logic.player.level;
        var target_level = level + n;
        var total = 0;
        for (var i = level; i < target_level; ++i) {
            total += Logic._playerLevelMoney(i);
        }
        total *= 1 - GE.getData(ET.UPGRADE_COST);
        if (total < 0) {
            total = 0;
        }
        return Math.floor(total);
    };
    Logic._playerSkillLevelMoney = function (skill_id, level) {
        var line = Utils.getLine("player_skill", skill_id);
        var par1 = line[player_skill_money1];
        var par2 = line[player_skill_money2];
        return par1 * Math.pow(par2, level + 1);
    };
    Logic._playerSkillLevelMoneySum = function (skill_id, start_level, target_level) {
        var line = Utils.getLine("player_skill", skill_id);
        var par1 = line[player_skill_money1];
        var par2 = line[player_skill_money2];
        var n = target_level - start_level + 1 - 1;
        return par1 * Math.pow(par2, start_level) * (1 - Math.pow(par2, n)) / (1 - par2);
    };
    Logic.getPlayerSkillLevelupMoney = function (skill_id, n) {
        var level = Logic.player.skills[skill_id - 1].level;
        var target_level = level + n;
        var total = 0;
        for (var i = level; i < target_level; ++i) {
            total += Logic._playerSkillLevelMoney(skill_id, i);
        }
        //var total = Logic._playerSkillLevelMoneySum( skill_id, level, target_level );
        total *= 1 - GE.getData(ET.UPGRADE_COST);
        if (total < 0) {
            total = 0;
        }
        return total;
    };
    Logic._heroLevelMoney = function (hero_id, level) {
        var line = Utils.getLine("hero_list", hero_id);
        var par_a = line[hero_list_levelup_a1] / line[hero_list_levelup_a2];
        var par_b = line[hero_list_levelup_b1] / line[hero_list_levelup_b2];
        var par_c = line[hero_list_levelup_c];
        var ret = par_a * Math.pow(par_b, level);
        if (level >= 1000) {
            ret *= 10;
        }
        return ret;
    };
    Logic._heroLevelMoneySum = function (hero_id, start_level, target_level) {
        var sum = 0;
        for (var i = start_level; i < target_level; ++i) {
            sum += Logic._heroLevelMoney(hero_id, i);
        }
        return sum;
    };
    Logic.getHeroLevelupMoney = function (hero_id, n) {
        var level = Logic.getHeroByID(hero_id).level;
        var target_level = level + n;
        var total = Logic._heroLevelMoneySum(hero_id, level, target_level);
        total *= 1 - GE.getData(ET.UPGRADE_COST);
        if (total < 0) {
            total = 0;
        }
        return total;
    };
    Logic.getHeroUnlockDiamond = function (hero_id) {
        var line = U.getLine("hero_list", hero_id);
        var diamond = line[hero_list_unlock_diamond];
        return diamond;
    };
    Logic.getPlayerSkillUnlockLevel = function (skill_id) {
        var line = Utils.getLine("player_skill", skill_id);
        return line[player_skill_unlock_level];
    };
    Logic.getHeroSkillUnlockCost = function (skill_id) {
        var line = Utils.getLine("hero_skill", skill_id);
        var diamond = line[hero_skill_unlock_diamond];
        if (diamond > 0) {
            return ["diamond", diamond];
        }
        return ["money", line[hero_skill_unlock_money]];
    };
    Logic.levelupPlayer = function (n) {
        var need = Logic.getPlayerLevelupMoney(n);
        if (Logic.money < need) {
            return false;
        }
        Logic.money -= need;
        Logic.player.level += n;
        Logic.calcPlayerDamage();
        Logic.finalPlayerDamage();
        return true;
    };
    Logic.levelupPlayerSkill = function (skill_id, n) {
        var need = Logic.getPlayerSkillLevelupMoney(skill_id, n);
        if (Logic.money < need) {
            return false;
        }
        Logic.money -= need;
        Logic.player.skills[skill_id - 1].level += n;
        Logic.player.skills[skill_id - 1].locked = false;
        return true;
    };
    Logic.levelupHero = function (hero_id, n) {
        var hero = Logic.getHeroByID(hero_id);
        var diamond = Logic.getHeroUnlockDiamond(hero_id);
        if (hero.locked && diamond > 0) {
            if (Logic.diamond < diamond) {
                return false;
            }
            Logic.diamond -= diamond;
        }
        else {
            var need = Logic.getHeroLevelupMoney(hero_id, n);
            if (Logic.money < need) {
                return false;
            }
            Logic.money -= need;
        }
        hero.level += n;
        hero.locked = false;
        Logic.calcHeroDPS(hero);
        Logic.refreshFinal();
        Stat.addData(ST.LEVELUP_HERO, n);
        return true;
    };
    Logic.levelupHeroPlus = function (hero_id, n) {
        var l = Logic.getHeroLevelupMoneyPlus(hero_id, n);
        var need = l[0];
        var fact_n = l[1];
        if (need == null || Logic.money < need) {
            return false;
        }
        Logic.money -= need;
        var hero = Logic.getHeroByID(hero_id);
        var start_level = hero.level;
        hero.level += fact_n;
        hero.locked = false;
        for (var i = 0; i < hero.skills.length; ++i) {
            var skill = hero.skills[i];
            if (skill.locked && skill.unlock_level >= start_level && skill.unlock_level < start_level + fact_n) {
                skill.locked = false;
                skill.level = 1;
            }
        }
        Logic.calcHeroDPS(hero);
        Logic.refreshFinal();
        Stat.addData(ST.LEVELUP_HERO, fact_n);
        return true;
    };
    Logic._skill_index = function (skill_id) {
        return skill_id % 1000 - 1;
    };
    Logic._hero_id = function (skill_id) {
        return Math.floor(skill_id / 1000000);
    };
    Logic.unlockHeroSkill = function (skill_id) {
        var hero_id = Logic._hero_id(skill_id);
        var skill_index = Logic._skill_index(skill_id);
        var hero = Logic.getHeroByID(hero_id);
        if (hero.skills[skill_index].locked == false) {
            return false;
        }
        var l = Logic.getHeroSkillUnlockCost(skill_id);
        if (l[0] == "money") {
            if (Logic.money < l[1]) {
                return false;
            }
            Logic.money -= l[1];
        }
        else if (l[0] == "diamond") {
            if (Logic.diamond < l[1]) {
                return false;
            }
            Logic.diamond -= l[1];
        }
        hero.skills[skill_index].locked = false;
        hero.skills[skill_index].level = 1;
        Logic.refreshFinal();
        return true;
    };
    Logic.addMoney = function (money) {
        var final_money = money * (1 + GE.getData(ET.ALL_MONEY));
        Logic.money += final_money;
        Stat.updateData(ST.MONEY, Logic.money);
    };
    Logic.addDropMoney = function (money) {
        var final_money = money * (1 + GE.getData(ET.ALL_MONEY));
        if (Math.random() < GE.getData(ET.TIMES_MONEY_CHANCE)) {
            final_money *= 10;
        }
        Logic.money += final_money;
        Stat.updateData(ST.MONEY, Logic.money);
    };
    Logic.addDiamond = function (diamond) {
        Logic.diamond += diamond;
    };
    Logic.addPeach = function (peach) {
        Logic.peach += peach;
        Stat.updateData(ST.PEACH, Logic.peach);
    };
    Logic.getPlayerSkillDataLevel = function (skill_id, level) {
        if (skill_id == 1) {
            // 伤害值
            return 140 + 30 * (level - 1);
        }
        else if (skill_id == 2) {
            // 分身攻击频率
            return 7 + 3 * (level - 1);
        }
        else if (skill_id == 3) {
            // 暴击率增加
            return 0.2 + 0.03 * (level - 1);
        }
        else if (skill_id == 4) {
            // 攻速倍数
            return 1 + 0.3 * (level - 1);
        }
        else if (skill_id == 5) {
            // 点击伤害增加比例
            return 1 + 0.3 * (level - 1);
        }
        else if (skill_id == 6) {
            // 每次点击获得金钱增加比例
            return 0.2 + 0.05 * (level - 1);
        }
        return null;
    };
    Logic.getPlayerSkillData = function (skill_id) {
        var skill_level = Logic.player.skills[skill_id - 1].level;
        return Logic.getPlayerSkillDataLevel(skill_id, skill_level);
    };
    Logic.triggerSkill = function (skill_id) {
        var skill = Logic.player.skills[skill_id - 1];
        if (skill_id != 7 && skill.locked) {
            console.log("skill locked, trigger failed.", skill_id);
            return [false, null];
        }
        var cur = Utils.time();
        if (skill.begin_time != 0) {
            console.log("skill not ended, trigger failed.", skill_id);
            return [false, null];
        }
        if (skill.cd_time > cur) {
            console.log("skill cd, trigger failed.", skill_id);
            return [false, null];
        }
        var skill_line = Utils.getLine("player_skill", skill_id);
        skill.begin_time = cur;
        skill.cd_time = 0;
        var skill_data = Logic.getPlayerSkillData(skill_id);
        if (skill_id == 1) {
            Stat.addData(ST.SKILL1, 1);
        }
        else if (skill_id == 2) {
        }
        else if (skill_id == 3) {
        }
        else if (skill_id == 4) {
        }
        else if (skill_id == 5) {
        }
        else if (skill_id == 6) {
        }
        else if (skill_id == 7) {
            Logic.reset();
        }
        Stat.addListData(ST.SKILLS, skill_id - 1, 1);
        Logic.refreshFinal();
        return [true, skill_data];
    };
    Logic.endSkill = function (skill_id) {
        var skill_line = Utils.getLine("player_skill", skill_id);
        var skill = Logic.player.skills[skill_id - 1];
        var cur = Utils.time();
        skill.begin_time = 0;
        skill.cd_time = cur + skill_line[player_skill_cd];
        if (skill_id == 1) {
            var cost_hp = Logic.getPlayerSkillData(1) * Logic.player.total_damage;
            if (Logic.monster.type == "boss") {
                cost_hp *= 1 + GE.getData(ET.DAMAGE_TO_BOSS);
            }
            var dead = Logic.costMonsterHP(cost_hp);
            if (dead) {
                Logic.onMonsterDead();
            }
            return [cost_hp, dead];
        }
        else {
            Logic.refreshFinal();
        }
        return null;
    };
    Logic.getCleanSkillCDDiamond = function () {
        return 10;
    };
    Logic.cleanSkillCD = function () {
        if (!Logic.costDiamond(Logic.getCleanSkillCDDiamond())) {
            return 1;
        }
        for (var i = 0; i < Logic.player.skills.length; ++i) {
            var skill = Logic.player.skills[i];
            if (skill.begin_time == 0 && skill.cd_time > 0) {
                skill.cd_time = 0;
            }
        }
        return 0;
    };
    Logic.canSkillLevelup = function (skill_id) {
        var money = Logic.getPlayerSkillLevelupMoney(skill_id, 1);
        if (Logic.money < money) {
            return false;
        }
        var skill_line = Utils.getLine("player_skill", skill_id);
        var need_level = skill_line[player_skill_unlock_level];
        if (Logic.player.level < need_level) {
            return false;
        }
        return true;
    };
    Logic.canHeroLevelup = function (hero_id) {
        var money = Logic.getHeroLevelupMoney(hero_id, 1);
        if (Logic.money < money) {
            return false;
        }
        return true;
    };
    Logic.canHeroSkillUnlock = function (hero_id, hero_skill_id) {
        var l = Logic.getHeroSkillUnlockCost(hero_skill_id);
        if (l[0] == "money") {
            if (Logic.money < l[1]) {
                return false;
            }
        }
        else if (l[0] == "diamond") {
            if (Logic.diamond < l[1]) {
                return false;
            }
        }
        return true;
    };
    Logic.getHeroLevelupState = function (hero_id) {
        var hero = Logic.getHeroByID(hero_id);
        if (hero.type == 2) {
            if (hero.locked) {
                return ["charge", true];
            }
        }
        else if (hero.type == 1) {
            if (hero.locked) {
                var diamond = Logic.getHeroUnlockDiamond(hero.hero_id);
                return ["diamond_unlock", Logic.diamond >= diamond, diamond];
            }
        }
        for (var i = 0; i < hero.skills.length; ++i) {
            var skill = hero.skills[i];
            if (skill.unlock_level == hero.level && skill.locked == true) {
                var l = Logic.getHeroSkillUnlockCost(skill.skill_id);
                if (l[0] == "diamond") {
                    var diamond = l[1];
                    var can = Logic.diamond >= diamond;
                    return ["diamond_skill", can, diamond, skill.skill_id];
                }
                else if (l[0] == "money") {
                    var money = l[1];
                    var can = Logic.money >= money;
                    return ["skill", can, money, skill.skill_id];
                }
            }
        }
        var money = Logic.getHeroLevelupMoney(hero_id, 1);
        var can = Logic.money >= money;
        return ["hero", can, money];
    };
    Logic.getHeroLevelupMoneyPlus = function (hero_id, n) {
        var money = 0;
        var fact_n = n;
        var hero = Logic.getHeroByID(hero_id);
        for (var i = 0; i < hero.skills.length; ++i) {
            var skill = hero.skills[i];
            if (skill.locked && skill.unlock_level >= hero.level && skill.unlock_level < hero.level + n) {
                var l = Logic.getHeroSkillUnlockCost(skill.skill_id);
                if (l[0] == "diamond") {
                    //console.log( "getHeroLevelupMoneyPlus need diamond", n, null )
                    fact_n = skill.unlock_level - hero.level;
                    break;
                }
                else if (l[0] == "money") {
                    money += l[1];
                }
            }
        }
        money += Logic.getHeroLevelupMoney(hero_id, fact_n);
        //console.log( "getHeroLevelupMoneyPlus", n, money )
        return [money, fact_n];
    };
    Logic.getBuyArtifactPeach = function (n) {
        if (n === void 0) { n = null; }
        if (n == null) {
            n = Logic.artifacts.length + 1;
        }
        var line_open = Utils.getLine("artifact_open", n);
        if (line_open == null) {
            return null;
        }
        var need = line_open[artifact_open_open_point];
        return need;
    };
    Logic.canArtifactLevelup = function (artifact_id) {
        var artifact = Logic.findArtifact(artifact_id);
        return Logic.peach >= artifact.levelup_peach;
    };
    Logic.canBuyArtifact = function () {
        var need = Logic.getBuyArtifactPeach();
        if (need == null) {
            return false;
        }
        return Logic.peach >= need;
    };
    Logic.getDestroyArtifactPeach = function (artifact_id) {
        var artifact = Logic.findArtifact(artifact_id);
        if (artifact == null) {
            return [0, 0];
        }
        var buy_peach = Logic.getBuyArtifactPeach(Logic.artifacts.length);
        var level_peach = 0;
        for (var i = 1; i < artifact.level; i++) {
            level_peach += Logic._artifactLevelPeach(artifact_id, i);
        }
        var line = Utils.getLine("artifact_open", Logic.artifacts.length);
        var diamond = line[artifact_open_change_diamond];
        return [Math.max(1, Math.floor((buy_peach + level_peach) * 0.9)), diamond];
    };
    Logic.destroyArtifact = function (artifact_id) {
        var l = Logic.getDestroyArtifactPeach(artifact_id);
        var peach = l[0];
        var diamond = l[1];
        if (Logic.diamond < diamond) {
            return false;
        }
        var index = -1;
        for (var i = 0; i < Logic.artifacts.length; ++i) {
            if (Logic.artifacts[i].artifact_id == artifact_id) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            return false;
        }
        Logic.artifacts.splice(index, 1);
        Logic.diamond -= diamond;
        Logic.addPeach(peach);
        Logic.refreshFinal();
        return true;
    };
    Logic.getResetPeach = function () {
        var total_hero_level = 0;
        for (var i = 0; i < Logic.heroes.length; ++i) {
            total_hero_level += Logic.heroes[i].level;
        }
        var peach1 = Math.floor((total_hero_level + 500) / 1000 * (1 + GE.getData(ET.RESET_AWARD)));
        var peach2 = 0;
        if (Logic.step >= 90) {
            var n = (Logic.step - 90) / 15 + 1;
            peach2 = Math.round((1 + n) * n / 2 * (1 + GE.getData(ET.RESET_AWARD)));
        }
        var bonus = 1;
        for (var i = 0; i < Logic.heroes.length; ++i) {
            if (Logic.heroes[i].dead) {
                bonus = 0;
                break;
            }
        }
        return [peach1, peach2, bonus];
    };
    Logic.reset = function () {
        var l = Logic.getResetPeach();
        Logic.money = 0;
        Logic.step = 1;
        Logic.sub_step = 0;
        Logic.player.level = 1;
        for (var i = 0; i < 7; ++i) {
            var skill = Logic.player.skills[i];
            skill.begin_time = 0;
            skill.cd_time = 0;
            skill.locked = true;
            skill.level = 0;
        }
        var num_heroes = mb.data["hero_list"].length;
        for (var i = 0; i < num_heroes; ++i) {
            var hero = Logic.heroes[i];
            hero.level = 0;
            hero.locked = true;
            for (var j = 0; j < 7; ++j) {
                var skill = hero.skills[j];
                skill.locked = true;
                skill.level = 0;
            }
        }
        var peach = l[0];
        peach += l[1];
        if (l[2] == 1) {
            peach *= 2;
        }
        Logic.addPeach(peach);
        Logic.refreshBase();
        Logic.refreshFinal();
        Stat.addData(ST.RESET, 1);
    };
    Logic.money = 0;
    Logic.diamond = 0;
    Logic.peach = 0;
    Logic.heroes = new Array();
    Logic.player = new Player();
    Logic.artifacts = new Array();
    Logic.monster = new Monster();
    Logic.fruits = [];
    Logic.l_status = [];
    Logic.l_baozhu = [];
    Logic.sheild1 = new Sheild();
    Logic.sheild2 = new Sheild();
    Logic.sheild3 = new Sheild();
    Logic.sheild4 = new Sheild();
    Logic.sheilds = [Logic.sheild1, Logic.sheild2, Logic.sheild3, Logic.sheild4];
    Logic.daily_award_exist = 0;
    Logic.difficulties_records = [];
    Logic.difficulty_passed_id = 0;
    Logic.difficulty_challenge_id = 0;
    Logic.difficulty_duration_time = 0;
    Logic.difficulty_kill_number = 0;
    Logic.difficulty_sub_step = 0;
    Logic.sub_step = 0;
    Logic.step = 1;
    Logic.next_step_boss = false;
    Logic.fairy = false;
    Logic.priority_monster_id = 0;
    Logic.priority_difficulty_monster_id = 0;
    Logic.kill_hero_flag = false;
    Logic.dps = 0;
    Logic.offline_money = 0;
    Logic.boss_hint = 0;
    Logic.holding_tap = 0;
    Logic.protect_hero = 0;
    return Logic;
})();
Logic.prototype.__class__ = "Logic";
