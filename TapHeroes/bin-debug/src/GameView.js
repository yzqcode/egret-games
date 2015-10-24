var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DropCoin = (function () {
    function DropCoin(type, money) {
        if (type === void 0) { type = "monster_money"; }
        if (money === void 0) { money = 0; }
        this.time = 0;
        this.vx = Utils.RandInt(-80, 80) / 10;
        this.vy = Utils.RandInt(-240, -100) / 10;
        if (type == "monster_money" || type == "fairy_money" || type == "tap_money") {
            this.coin = Utils.createBitmapByName("元宝中");
        }
        else if (type == "offline_money") {
            this.coin = Utils.createBitmapByName("元宝");
            this.vx = Utils.RandInt(30, 100) / 10;
            this.vy = Utils.RandInt(-240, -100) / 10;
        }
        else if (type == "diamond_money") {
            this.coin = Utils.createBitmapByName("元宝");
            this.vx = 0;
            this.vy = Utils.RandInt(-240, -100) / 10;
        }
        else {
            this.coin = Utils.createBitmapByName("钻石");
        }
        this.coin.anchorY = 1;
        this.coin.anchorX = 0.5;
        this.coin.x = G.width / 2;
        this.coin.y = Utils.offset(G.height / 2);
        this.type = type;
        this.money = money;
    }
    DropCoin.prototype.addCoinMoney = function () {
        if (this.type == "fairy_money" || this.type == "tap_money" || this.type == "offline_money" || this.type == "diamond_money") {
            Logic.addMoney(this.money);
        }
        else if (this.type == "monster_money") {
            Logic.addDropMoney(this.money);
        }
    };
    DropCoin.prototype.tick = function () {
        if (this.coin.y + this.vy - 5 >= G.base_y_offset && this.vy > 0) {
            this.vy = -this.vy * 0.3;
        }
        if (this.coin.y >= G.base_y_offset - 5 && this.vy <= 2 && this.vy >= -2) {
            this.coin.y = G.base_y_offset;
            return false;
        }
        this.coin.y += this.vy;
        this.coin.x += this.vx;
        this.vy += 3;
        return true;
    };
    return DropCoin;
})();
DropCoin.prototype.__class__ = "DropCoin";
var DropFruit = (function () {
    function DropFruit() {
        this.eaten = false;
    }
    return DropFruit;
})();
DropFruit.prototype.__class__ = "DropFruit";
var DropBaozhu = (function () {
    function DropBaozhu() {
    }
    return DropBaozhu;
})();
DropBaozhu.prototype.__class__ = "DropBaozhu";
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        _super.call(this);
        this.background = null;
        this.hero_monuments = [];
        this.heroes = [];
        this.fArrayHeroPosX = [180, 470, 125, 520, 110, 535, 135, 510, 80, 560, 60, 570, 80, 560, 25, 600, 20, 620, 30, 620, 120];
        this.fArrayHeroPosY = [-4, -3, -120, -120, -220, -220, -4, -3, -120, -120, -220, -220, -4, -3, -120, -120, -220, -220, -4, -4, -320];
        this.hero_platforms = [];
        this.fArrayPlatformPosX = [-142, 498, -170, 526];
        this.fArrayPlatformPosY = [-120, -120, -220, -220];
        this.player_act_index = 0;
        this.player_actions = ["huxi", "gj01", "gj02", "gj03", "gj04"];
        this.fairy_pos = [[87, 355], [321, 404], [539, 320], [534, 206], [364, 251], [251, 188], [48, 216], [400, 281]];
        this.fairy_status = 0;
        this.fairy_move_times = 0;
        this.bMonsterDeadAnim = false;
        this.smoke_dragon = null;
        this.hero_comeout_dragon = null;
        this.drop_coins = [];
        this.fruits = [];
        this.drop_baozhu = [];
        this.player_skill_buff_anim = [null, null, null, null, null, null];
        this.player_skill_anim = [null, null, null, null, null, null];
        this.player_touch_anim = null;
        this.player_fake_dragon = null;
        this.player_fake_dragon2 = null;
        this.player_fake_counter = 0;
        this.skill2_timer = null;
        this.next_step_anim = null;
        this.labelNextStepName = null;
        this.guide_hand_anim = null;
        this.level_up_anim = null;
        this.hero_levelup_anim = null;
        this.mini_boss_anim = null;
        this.boss_anim = null;
        this.touch_holding = false;
        this.last_touch_time = 0;
        this.last_touch_counter = 0;
        this.last_kill_hero_id = 0;
        this.sayLogo = null;
        this.MonsterSayLabel = null;
        this.timerRemoveMonsterSay = null;
        this.z_order = {};
        this.sheild_hp_max_imgs = [];
        this.sheild_hp_imgs = [];
        this.sheild_anims = [];
        this.sheild_layers = [];
        this.sheild_max_num = 0;
        this.mBossComingBmp = null;
        this.mHoldingHintBmp = null;
        this.mIsRemoveHolding = false;
        this.shop_hit_anim = null;
        this.protect_hero_anim = null;
        this.rank_dialog = null;
        this.m_bHasShowInfo = false;
        this.difficulties_list_dlg = null;
        this.sec_counter = 0;
        this.damage_counter = [];
        this.period_damage = 0;
        this.period_damage_average = 0;
    }
    GameView.prototype.refreshNewPlatform = function () {
        var iCurrentPlatformLen = this.hero_platforms.length;
        if (iCurrentPlatformLen >= 4) {
            return;
        }
        var iHeroLen = Logic.heroes.length;
        var iHeroUnlockLen = 0;
        for (var i = 0; i < iHeroLen; ++i, ++iHeroUnlockLen) {
            var blocked = Logic.heroes[i].locked && Logic.heroes[i].type == 0;
            if (blocked) {
                break;
            }
        }
        var iCurrentHerosLen = this.heroes.length;
        var iPlatformSize = 0;
        if (iCurrentHerosLen <= 2) {
            iPlatformSize = 0;
        }
        else if (iCurrentHerosLen >= 3 && iCurrentHerosLen <= 5) {
            iPlatformSize = iCurrentHerosLen - 2;
        }
        else if (iCurrentHerosLen >= 6) {
            iPlatformSize = 4;
        }
        for (var i = 0; i < 4; ++i) {
            this.hero_platforms[i].visible = i < iPlatformSize;
        }
        /*
        var line = Utils.getLine("step_list", Logic.step);
        var strBgPicIndex = line[step_list_background];
        if (strBgPicIndex.length < 2) {
            strBgPicIndex = "0" + strBgPicIndex;
        }
        var strSmallBgPic = "beijing_" + strBgPicIndex + "a";

        var iBgZorder = this.gameLayer.getChildIndex(this.background);
        for ( var i = iCurrentPlatformLen; i < iPlatformSize; ++i ) {
            // Create platfrom
            var plat = Utils.createBitmapByName(strSmallBgPic);
            plat.x = this.fArrayPlatformPosX[i];
            plat.y = Utils.offset(G.base_y + this.fArrayPlatformPosY[i]);
            this.gameLayer.addChildAt(plat, iBgZorder+1);

            this.hero_platforms[i] = plat;
        }
        */
    };
    GameView.prototype.refreshAllPlatforms = function () {
        var ret = null;
        if (Logic.isInChallengingDifficulty()) {
            ret = U.createBackgroundTextureForDifficulty(Logic.difficulty_challenge_id);
        }
        else {
            ret = U.createBackgroundTexture(Logic.step);
        }
        if (ret[0] == null) {
            return;
        }
        var tex = ret[1];
        for (var i = 0; i < 4; ++i) {
            if (this.hero_platforms[i] != null) {
                this.hero_platforms[i].texture = tex;
            }
        }
    };
    GameView.prototype.refreshScene = function () {
        var ret = null;
        if (Logic.isInChallengingDifficulty()) {
            ret = U.createBackgroundTextureForDifficulty(Logic.difficulty_challenge_id);
        }
        else {
            ret = U.createBackgroundTexture(Logic.step);
        }
        console.log("refreshScene", ret);
        if (ret[0] == null && this.background != null) {
            return;
        }
        var tex;
        var tex_a;
        if (ret[0] == null) {
            tex = RES.getRes(G.default_bg_name);
            tex_a = RES.getRes(G.default_bg_name + "a");
        }
        else {
            tex = ret[0];
            tex_a = ret[1];
        }
        if (this.background == null) {
            // Create new backgroud
            this.background = new egret.Bitmap();
            this.background.y = U.offset(0);
            this.gameLayer.addChild(this.background);
            this.z_order["background"] = this.gameLayer.getChildIndex(this.background);
            this.background.touchEnabled = true;
            this.background.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBackground, this);
            this.background.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackgroundEnd, this);
        }
        this.background.texture = tex;
        var iBgZorder = this.gameLayer.getChildIndex(this.background);
        for (var i = 0; i < 4; ++i) {
            // Create platfrom
            var plat = new egret.Bitmap();
            plat.texture = tex_a;
            plat.x = this.fArrayPlatformPosX[i];
            plat.y = Utils.offset(G.base_y + this.fArrayPlatformPosY[i]);
            this.gameLayer.addChildAt(plat, iBgZorder + 1);
            this.hero_platforms[i] = plat;
        }
    };
    GameView.prototype.tryTriggerSheild = function () {
        this.sheild_max_num = Logic.triggerSheild();
        if (this.sheild_max_num > 0) {
            this.showSheilds();
        }
        else {
            this.fadeOutSheilds();
        }
    };
    GameView.prototype.removeAllBaozhu = function () {
        for (var i = 0; i < this.drop_baozhu.length; ++i) {
            var bz = this.drop_baozhu[i];
            egret.Tween.removeTweens(bz.sprite);
            this.gameLayer.removeChild(bz.sprite);
            dragonBones.WorldClock.clock.remove(bz.dragon);
        }
        this.drop_baozhu = [];
        Logic.removeAllBaozhu();
    };
    GameView.prototype.tryTriggerFruit = function () {
        var f = Logic.triggerFruit();
        if (f != null) {
            var fruit = this.createFruit(f);
            this.gameLayer.addChild(fruit.sprite);
            this.fruits.push(fruit);
            this.moveFruit(fruit, this.fruits.length - 1);
        }
    };
    GameView.prototype.tryTriggerBaozhu = function () {
        var baozhu_explode = function () {
            this.dragon.animation.gotoAndPlay("zha");
            var hero_index = Logic.getHeroIndexByID(this.baozhu_data.hero_id);
            var h = GameView.instance().heroes[hero_index];
            if (h == null) {
                return;
            }
            if (Logic.explodeBaozhu(this.baozhu_data)) {
                GameView.instance().ui_main.refreshDamageInfo();
                //var tw = egret.Tween.get( h.getDisplay(), {loop:true} )
                //tw.to( { rotation:360 }, 400 )
                var rotate = -60;
                var dest_x = 0;
                if (h.getDisplay().x > G.width / 2) {
                    rotate = 60;
                    dest_x = G.width;
                }
                var tw = egret.Tween.get(h.getDisplay());
                tw.to({ rotation: rotate }, 500);
                var tw2 = egret.Tween.get(h.getDisplay());
                tw2.to({ x: dest_x, y: -40 }, 600);
            }
        };
        var baozhu_2 = function () {
            this.dragon.animation.gotoAndPlay("huxi2");
        };
        var baozhu_3 = function () {
            this.dragon.animation.gotoAndPlay("huxi1");
        };
        var baozhu_start = function () {
            this.dragon.animation.gotoAndPlay("huxi3");
            var tw = egret.Tween.get(this.sprite);
            var time = this.baozhu_data.time * 1000;
            tw.wait(time).call(baozhu_explode, this);
            var tw2 = egret.Tween.get(this.sprite);
            tw2.wait(time / 3).call(baozhu_2, this).wait(time / 3).call(baozhu_3, this);
        };
        var ret = Logic.triggerBaozhu();
        if (ret) {
            for (var i = 0; i < Logic.l_baozhu.length; ++i) {
                var bz = new DropBaozhu();
                bz.baozhu_data = Logic.l_baozhu[i];
                bz.sprite = new egret.Sprite();
                bz.dragon = U.createDragonBone("bao2");
                bz.dragon.animation.gotoAndPlay("huxi");
                bz.sprite.addChild(bz.dragon.getDisplay());
                this.gameLayer.addChild(bz.sprite);
                bz.sprite.x = G.width / 2;
                bz.sprite.y = G.base_y_offset - bz.dragon.getDisplay().height;
                this.drop_baozhu.push(bz);
            }
            for (var i = 0; i < this.drop_baozhu.length; ++i) {
                var b = this.drop_baozhu[i];
                var tw = egret.Tween.get(b.sprite);
                var hero_id = b.baozhu_data.hero_id;
                var x = this.fArrayHeroPosX[hero_id - 1];
                var y = G.base_y_offset + this.fArrayHeroPosY[hero_id - 1] - 20;
                tw.to({ x: x, y: y }, 1000).call(baozhu_start, b);
            }
        }
    };
    GameView.prototype.onTouchBaozhu = function (index) {
        var bz = this.drop_baozhu[index];
        var _xiaoshi = function (evt) {
            var bz_dragon = evt.target;
            if (bz_dragon == null) {
                return;
            }
            var bz;
            var index = -1;
            var l = GameView.instance().drop_baozhu;
            for (var i = 0; i < l.length; ++i) {
                if (l[i].dragon == bz_dragon) {
                    bz = l[i];
                    index = i;
                    break;
                }
            }
            if (bz == null) {
                return;
            }
            bz.dragon.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
            GameView.instance().gameLayer.removeChild(bz.sprite);
            dragonBones.WorldClock.clock.remove(bz.dragon);
            l.splice(index, 1);
        };
        var bad = Logic.hitBaozhu(index);
        if (bad) {
            bz.dragon.animation.gotoAndPlay("xiaoshi");
            bz.dragon.addEventListener(dragonBones.AnimationEvent.COMPLETE, _xiaoshi);
            egret.Tween.removeTweens(bz.sprite);
        }
        var cost_hp = new egret.BitmapText();
        cost_hp.spriteSheet = RES.getRes("zi2_json");
        cost_hp.text = Utils.bigNumber(1);
        cost_hp.x = bz.sprite.x;
        cost_hp.y = bz.sprite.y;
        cost_hp.alpha = 1.0;
        this.gameTopLayer.addChild(cost_hp);
        var tw_hp = egret.Tween.get(cost_hp);
        var _clear = function () {
            GameView.instance().gameTopLayer.removeChild(this);
        };
        tw_hp.to({ y: cost_hp.y - 150, alpha: 0.2 }, 700).call(_clear, cost_hp);
        var tw = egret.Tween.get(bz.dragon.getDisplay());
        tw.to({ scaleX: 1.5, scaleY: 1.5 }, 50).to({ scaleX: 1.0, scaleY: 1.0 }, 60);
    };
    GameView.prototype.createFruit = function (fruit_data) {
        var fruit = new DropFruit();
        fruit.fruit_data = fruit_data;
        fruit.sprite = new egret.Sprite();
        fruit.dragon = U.createDragonBone("shuiguo");
        fruit.sprite.addChild(fruit.dragon.getDisplay());
        return fruit;
    };
    GameView.prototype.moveFruit = function (fruit, index) {
        var delete_fruit = function () {
            GameView.instance().removeFruit(index);
        };
        var fruit_disappear = function () {
            fruit.eaten = true;
            var tw = egret.Tween.get(fruit.sprite);
            tw.to({ alpha: 0 }, 600).call(delete_fruit, this);
        };
        var on_fruit_landed = function () {
            fruit.dragon.animation.gotoAndPlay("aida" + fruit.fruit_data.type);
            var tw = egret.Tween.get(fruit.sprite);
            tw.wait(3000).call(fruit_disappear);
        };
        fruit.sprite.x = U.RandInt(0 + fruit.dragon.getDisplay().width, G.width - fruit.dragon.getDisplay().width);
        fruit.sprite.y = 0;
        fruit.dragon.animation.gotoAndPlay("huxi" + fruit.fruit_data.type);
        var tw = egret.Tween.get(fruit.sprite);
        tw.to({ y: G.base_y_offset - G.fruit_offset_y }, 4800).call(on_fruit_landed, this);
    };
    GameView.prototype.onTouchFruit = function (index) {
        var fruit = this.fruits[index];
        egret.Tween.removeTweens(fruit.sprite);
        fruit.dragon.animation.gotoAndPlay("dianji" + fruit.fruit_data.type);
        fruit.dragon.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onFruitAnimationComplete);
        var ret = Logic.hitFruit(fruit.fruit_data);
        if (ret[0] == -1) {
        }
        else if (ret[0] == null) {
        }
        else if (ret[0] > 0) {
            var icons = {};
            icons[ET.CRITICAL_CHANCE] = "猴子技能3";
            icons[ET.HERO_SPEED] = "猴子技能4";
            icons[ET.TAP_DAMAGE] = "猴子技能5";
            icons[ET.TAP_MONEY] = "猴子技能6";
            this.ui_main.showStatusBar(icons[ret[0]], "", ret[2]);
            var timer = new egret.Timer((ret[2]) * 1000, 1);
            console.log("_end timer", ret[2]);
            var _end = function () {
                console.log("_end refreshfinal");
                Logic.refreshFinal();
            };
            timer.addEventListener(egret.TimerEvent.TIMER, _end, this);
            timer.start();
        }
    };
    GameView.prototype.removeFruit = function (index) {
        if (this.fruits[index] == null) {
            return;
        }
        this.gameLayer.removeChild(this.fruits[index].sprite);
        dragonBones.WorldClock.clock.remove(this.fruits[index].dragon);
        Logic.removeFruit(this.fruits[index].fruit_data);
        this.fruits.splice(index, 1);
    };
    GameView.prototype.onFruitAnimationComplete = function (evt) {
        var index = null;
        var fruits = GameView.instance().fruits;
        for (var i = 0; i < fruits.length; ++i) {
            if (fruits[i].dragon == evt.target) {
                index = i;
                break;
            }
        }
        if (index == null) {
            return;
        }
        GameView.instance().removeFruit(index);
    };
    GameView.prototype.onSheildAnimationComplete = function (evt) {
        evt.target.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.initSheilds = function () {
        if (this.sheild_layers.length > 0) {
            return;
        }
        for (var i = 0; i < G.max_sheild_num; i++) {
            var sheildLayer = new egret.DisplayObjectContainer();
            sheildLayer.name = "sheild" + (i + 1);
            sheildLayer.anchorX = 0.5;
            sheildLayer.anchorY = 0.5;
            sheildLayer.width = 100;
            sheildLayer.height = 150;
            sheildLayer.visible = false;
            this.gameLayer.addChild(sheildLayer);
            var sheild_hp_max_img = Utils.createBitmapByName("血条底");
            sheild_hp_max_img.x = (sheildLayer.width - 0.3 * sheild_hp_max_img.width) / 2;
            sheild_hp_max_img.y = 0;
            sheild_hp_max_img.scaleX = 0.3;
            sheild_hp_max_img.scaleY = 0.2;
            sheildLayer.addChild(sheild_hp_max_img);
            var sheild_hp_img = Utils.createBitmapByName("血条");
            sheild_hp_img.x = sheild_hp_max_img.x;
            sheild_hp_img.y = sheild_hp_max_img.y;
            sheild_hp_img.scaleX = 0.3;
            sheild_hp_img.scaleY = 0.2;
            sheildLayer.addChild(sheild_hp_img);
            var sheild_anim = Utils.createDragonBone("dun");
            var dd = sheild_anim.getDisplay();
            dd.x = 50;
            dd.y = 75;
            sheildLayer.addChild(dd);
            this.sheild_hp_max_imgs.push(sheild_hp_max_img);
            this.sheild_hp_imgs.push(sheild_hp_img);
            this.sheild_anims.push(sheild_anim);
            this.sheild_layers.push(sheildLayer);
        }
    };
    GameView.prototype.showSheilds = function () {
        this.initSheilds();
        for (var i = 0; i < this.sheild_max_num; i++) {
            this.sheild_anims[i].addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onSheildAnimationComplete);
            this.sheild_anims[i].animation.gotoAndPlay("huxi");
            this.sheild_hp_imgs[i].scaleX = 0.3;
            this.sheild_hp_max_imgs[i].visible = true;
            this.sheild_layers[i].visible = true;
            this.sheild_layers[i].alpha = 1;
            var randX = Utils.RandInt(-100, 100);
            var randY = Utils.RandInt(-100, 100);
            this.sheild_layers[i].x = G.width / 2 + randX;
            this.sheild_layers[i].y = G.height / 2 + randY;
            this.moveSheild(i);
        }
    };
    GameView.prototype.moveSheild = function (index) {
        if (!this.sheild_layers[index].visible) {
            return;
        }
        var poses = [[164, 382], [187, 486], [214, 591], [423, 590], [458, 470], [466, 369], [313, 435], [291, 294]];
        var dd = this.sheild_anims[index].getDisplay();
        var r = Utils.RandInt(0, poses.length - 1);
        if (poses[r][0] == this.sheild_layers[index].posX) {
            r--;
            if (r == 0) {
                r = 3;
            }
        }
        var next_pos = poses[r];
        var distance = Utils.distance(dd.x, next_pos[0], dd.y, next_pos[1]);
        var time = distance / 80 * 800;
        var tw = egret.Tween.get(this.sheild_layers[index]);
        tw.to({ "x": next_pos[0], "y": next_pos[1] }, time, egret.Ease.sineInOut).call(this.moveSheild, this, [index]);
    };
    GameView.prototype.fadeOutSheilds = function () {
        for (var i = 0; i < G.max_sheild_num; i++) {
            if (this.sheild_layers[i] != null && this.sheild_layers[i].visible) {
                var tw = egret.Tween.get(this.sheild_layers[i]);
                tw.to({ "alpha": 0 }, 500).call(this.hideSheild, this, [i]);
            }
        }
    };
    GameView.prototype.onSheildExplode = function (index) {
        this.makeDamageToMonster("sheild_explode");
        this.hideSheild(index);
        RES.getRes("dunsui").play();
    };
    GameView.prototype.hideSheild = function (index) {
        if (this.sheild_layers[index] != null) {
            this.sheild_anims[index].animation.stop();
            this.sheild_layers[index].visible = false;
            egret.Tween.removeTweens(this.sheild_layers[index]);
        }
    };
    GameView.prototype.showSheildsProtectAnim = function () {
        for (var i = 0; i < this.sheild_max_num; i++) {
            if (this.sheild_anims[i] != null && Logic.sheilds[i].hp > 0) {
                this.sheild_anims[i].animation.gotoAndPlay("baohu");
            }
        }
    };
    GameView.prototype.onTouchSheild = function (index) {
        if (Logic.sheilds[index].hp <= 0) {
            return;
        }
        Logic.hitSheild(index);
        this.sheild_hp_imgs[index].scaleX = Logic.sheilds[index].hp / Logic.sheilds[index].hp_max * 0.3;
        var sound = RES.getRes("sheild");
        sound.play();
        if (Logic.sheilds[index].hp <= 0) {
            this.sheild_hp_max_imgs[index].visible = false;
            this.sheild_anims[index].removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
            this.sheild_anims[index].animation.gotoAndPlay("siwang");
            var tw = egret.Tween.get(this.sheild_layers[index]);
            tw.wait(1000).call(this.onSheildExplode, this, [index]);
        }
        else {
            this.sheild_anims[index].animation.gotoAndPlay("dianji");
        }
    };
    GameView.prototype.initFairy = function () {
        if (this.fairy_status != 0) {
            return;
        }
        if (this.fairy_dragon == null) {
            this.fairy_dragon = Utils.createDragonBone("jl");
            this.gameLayer.addChild(this.fairy_dragon.getDisplay());
            this.fairy_dragon.animation.gotoAndPlay("huxi");
        }
        var dd = this.fairy_dragon.getDisplay();
        dd.visible = true;
        dd.x = G.width + 60;
        dd.y = 0;
        this.fairy_status = 1;
        this.fairy_move_times = 0;
        this.moveFairy();
    };
    GameView.prototype.clearFairy = function () {
        this.fairy_status = 0;
        this.fairy_dragon.getDisplay().visible = false;
    };
    GameView.prototype.moveOutFairy = function () {
        this.fairy_status = 2;
        var dd = this.fairy_dragon.getDisplay();
        var next_pos = [dd.x, -20];
        var distance = Utils.distance(dd.x, next_pos[0], dd.y, next_pos[1]);
        var time = distance / 200 * 1000;
        egret.Tween.removeTweens(dd);
        var tw = egret.Tween.get(dd);
        tw.to({ "y": next_pos[1] }, time).call(this.clearFairy, this);
    };
    GameView.prototype.moveFairy = function () {
        if (this.fairy_status != 1) {
            return;
        }
        this.fairy_move_times += 1;
        if (this.fairy_move_times >= 10) {
            this.moveOutFairy();
        }
        var dd = this.fairy_dragon.getDisplay();
        var r = Utils.RandInt(0, this.fairy_pos.length - 1);
        var next_pos = this.fairy_pos[r];
        var distance = Utils.distance(dd.x, next_pos[0], dd.y, next_pos[1]);
        var time = distance / 80 * 1000;
        var tw = egret.Tween.get(dd);
        tw.to({ "x": next_pos[0], "y": next_pos[1] }, time, egret.Ease.backOut).call(this.moveFairy, this);
    };
    GameView.prototype.onTouchFairy = function () {
        this.moveOutFairy();
        var dd = this.fairy_dragon.getDisplay();
        var award = Logic.getFairyAward();
        var cx = dd.x;
        var cy = dd.y;
        if (award[0] == "money") {
            var money = award[1];
            var num_coins = Utils.RandInt(5, 10);
            for (var i = 0; i < num_coins; ++i) {
                var dc = new DropCoin("fairy_money", money / num_coins);
                this.drop_coins.push(dc);
                this.gameLayer.addChild(dc.coin);
                dc.coin.x = cx;
                dc.coin.y = cy;
            }
            this.ui_main.showFairyHint(award[0], "+" + U.bigNumber(money));
        }
        else if (award[0] == "diamond") {
            var dc = new DropCoin("diamond");
            var diamond = award[1];
            dc.coin.x = cx;
            dc.coin.y = cy;
            this.drop_coins.push(dc);
            this.gameLayer.addChild(dc.coin);
            Logic.addDiamond(diamond);
            this.refreshAllAboutDiamond();
            this.ui_main.showFairyHint(award[0], "+" + U.bigNumber(diamond));
        }
        Stat.addData(ST.FAIRY, 1);
    };
    GameView.prototype.refreshAllAboutDiamond = function () {
        this.ui_main.refreshDiamond();
        if (this.ui_shop) {
            this.ui_shop.refreshDiamond();
        }
    };
    GameView.prototype.removeBossComing = function () {
        this.gameTopLayer.removeChild(this.mBossComingBmp);
        this.mBossComingBmp = null;
    };
    GameView.prototype.showBossComingAmin = function () {
        if (this.mBossComingBmp != null) {
            return;
        }
        var posY = this.ui_main.hp_bar.y + 80;
        var arrayPos = [G.width + 500, G.width / 2, 100, -500];
        this.mBossComingBmp = Utils.createBitmapByName("boss_coming");
        this.mBossComingBmp.x = arrayPos[0];
        this.mBossComingBmp.y = posY;
        this.gameTopLayer.addChild(this.mBossComingBmp);
        var tw = egret.Tween.get(this.mBossComingBmp);
        tw.to({ "x": arrayPos[1] }, 800, egret.Ease.sineIn).to({ "x": arrayPos[2] }, 2000).to({ "x": arrayPos[3] }, 500, egret.Ease.sineOut).call(this.removeBossComing, this);
    };
    GameView.prototype.removeHoldingHint = function () {
        this.gameTopLayer.removeChild(this.mHoldingHintBmp);
        this.mHoldingHintBmp = null;
        this.mIsRemoveHolding = false;
    };
    GameView.prototype.stopHoldingHintAnim = function () {
        if (this.mIsRemoveHolding || this.mHoldingHintBmp == null) {
            return;
        }
        this.mIsRemoveHolding = true;
        egret.Tween.removeTweens(this.mHoldingHintBmp);
        var tw = egret.Tween.get(this.mHoldingHintBmp);
        tw.to({ scaleX: 0.0, scaleY: 0.0, alpha: 0.0 }, 500).call(this.removeHoldingHint, this);
    };
    GameView.prototype.showHoldingHintAmin = function () {
        if (this.mHoldingHintBmp != null) {
            return;
        }
        this.mHoldingHintBmp = Utils.createBitmapByName("holding_hint");
        this.mHoldingHintBmp.anchorX = 0.5;
        this.mHoldingHintBmp.anchorY = 0.5;
        this.mHoldingHintBmp.x = G.width / 2;
        this.mHoldingHintBmp.y = this.ui_main.hp_bar.y + 80;
        this.gameTopLayer.addChild(this.mHoldingHintBmp);
        var tw = egret.Tween.get(this.mHoldingHintBmp, { loop: true });
        tw.to({ scaleX: 1.1, scaleY: 1.1 }, 100).to({ scaleX: 1.0, scaleY: 1.0 }, 100).to({ scaleX: 1.1, scaleY: 1.1 }, 100).to({ scaleX: 1.0, scaleY: 1.0 }, 100);
    };
    GameView.prototype.showMiniBossAnim = function () {
        var bCreate = false;
        if (this.mini_boss_anim == null) {
            this.mini_boss_anim = Utils.createDragonBone("tx007");
            bCreate = true;
        }
        else {
            this.gameTopLayer.removeChild(this.mini_boss_anim.getDisplay());
        }
        var dd = this.mini_boss_anim.getDisplay();
        dd.x = G.width / 2;
        dd.y = 240;
        this.gameTopLayer.addChild(dd);
        var comeout = function () {
            this.visible = true;
        };
        this.mini_boss_anim.animation.gotoAndPlay("huxi");
        if (bCreate) {
            dd.visible = false;
            var tw = egret.Tween.get(dd);
            tw.wait(100).call(comeout, dd);
        }
    };
    GameView.prototype.showBossAnim = function () {
        var bCreate = false;
        if (this.boss_anim == null) {
            this.boss_anim = Utils.createDragonBone("tx006");
            bCreate = true;
        }
        else {
            this.gameTopLayer.removeChild(this.boss_anim.getDisplay());
        }
        var dd = this.boss_anim.getDisplay();
        dd.x = G.width / 2;
        dd.y = 240;
        this.gameTopLayer.addChild(dd);
        var comeout = function () {
            this.visible = true;
        };
        this.boss_anim.animation.gotoAndPlay("huxi");
        if (bCreate) {
            dd.visible = false;
            var tw = egret.Tween.get(dd);
            tw.wait(100).call(comeout, dd);
        }
    };
    GameView.prototype.showBossHintAnim = function () {
        if (Logic.monster.type != "boss") {
            return;
        }
        var mbLine = Utils.getLine("step_list", Logic.step);
        var iChangeScene = mbLine[step_list_change_scene];
        if (iChangeScene == 1) {
            this.showBossAnim();
        }
        else {
            this.showMiniBossAnim();
        }
    };
    GameView.prototype.refreshNextStepUI = function () {
        // Refresh the ui for next step.
        this.showNextMonster();
        this.refreshScene();
        this.refreshAllPlatforms();
    };
    GameView.prototype.removeYunAnim = function () {
        this.gameTopLayer.removeChild(this.next_step_anim.getDisplay());
        Utils.removeDragonBone("yun", this.next_step_anim);
        this.next_step_anim = null;
    };
    GameView.prototype.showNextStepAnim = function () {
        // Disable all buttons when entering next scene.
        this.background.touchEnabled = false;
        // Run animation for current step completed.
        this.next_step_anim = Utils.createDragonBone("yun");
        var dd = this.next_step_anim.getDisplay();
        dd.x = G.width / 2;
        dd.y = G.height / 2;
        this.gameTopLayer.addChildAt(dd, 0);
        this.next_step_anim.animation.gotoAndPlay("huxi");
        var tw = egret.Tween.get(this.gameLayer);
        tw.wait(3000).call(this.removeYunAnim, this);
        var hideNextStepName = function () {
            this.labelNextStepName.visible = false;
            this.refreshNextStepUI();
            this.background.touchEnabled = true;
        };
        var nextLine = Utils.getLine("step_list", Logic.step + 1);
        var strNextStepName = "";
        if (nextLine != null) {
            strNextStepName = nextLine[step_list_name];
        }
        var iMinusIndex = strNextStepName.indexOf("-");
        if (iMinusIndex >= 0) {
            strNextStepName = strNextStepName.substring(0, iMinusIndex);
        }
        this.labelNextStepName.text = strNextStepName;
        this.labelNextStepName.alpha = 0.0;
        this.labelNextStepName.visible = true;
        var tw2 = egret.Tween.get(this.labelNextStepName);
        tw2.wait(600).to({ alpha: 1 }, 200).wait(1500).call(hideNextStepName, this);
    };
    GameView.prototype.showKilledHeroDlg = function () {
        if (Logic.kill_hero_flag == false) {
            return;
        }
        var uiHeroReviveDlg = new HeroReviveDlg();
        uiHeroReviveDlg.initHeroDatas(this.last_kill_hero_id, Logic.monster.name);
        uiHeroReviveDlg.width = G.width;
        uiHeroReviveDlg.height = G.height;
        this.guiLayer.addElement(uiHeroReviveDlg);
    };
    GameView.prototype.showNextMonster = function () {
        if (Logic.isInChallengingDifficulty()) {
            Logic.increaseDifficultySubStep();
            Logic.initDifficultySubStep();
            this.ui_main.refreshAllPerk();
            if (Logic.isFirstChallenge() == false || Logic.difficulty_kill_number < 5) {
                this.createMonster();
            }
            else {
                this.ui_main.refreshMonsterType();
            }
        }
        else {
            this.showKilledHeroDlg();
            Logic.increaseStep();
            Logic.initStep();
            Stat.refreshAchieve();
            this.ui_main.refreshAchieveNew();
            this.ui_main.refreshAllPerk();
            this.createMonster();
            this.showBossHintAnim();
            this.ui_main.refreshStepInfo();
            if (Stat.getData(ST.RESET) == 0) {
                if (Logic.step == 1 && Logic.player.level == 1 && Logic.sub_step == 5) {
                    this.showPlayerLevelUpGuide();
                }
                else if (Logic.step == 1 && Logic.sub_step >= 9) {
                    this.ui_main.btn_main1.visible = true;
                    this.ui_main.btn_main2.visible = true;
                    this.ui_main.btn_main3.visible = true;
                    this.ui_main.btn_main4.visible = true;
                    this.ui_main.btn_main_achievement.visible = true;
                }
            }
        }
        if (Logic.fairy) {
            this.initFairy();
        }
        this.tryTriggerFruit();
        this.tryTriggerBaozhu();
    };
    GameView.prototype.showPlayerLevelUpGuide = function () {
        if (this.ui_main.m_iMonkeyGuideStep != 0) {
            return;
        }
        this.ui_main.m_iMonkeyGuideStep = 1;
        this.ui_main.btn_main1.visible = true;
        var posX = this.ui_main.btn_main1.x + 80;
        var posY = this.ui_main.btn_main1.y + 30;
        this.showHandAnim(posX, posY);
    };
    GameView.prototype.showBossGuideDlg = function () {
        if (Logic.boss_hint != 0) {
            return;
        }
        Logic.boss_hint = 1;
        var uiBossGuideDlg = new BossGuideDlg();
        uiBossGuideDlg.width = G.width;
        uiBossGuideDlg.height = G.height;
        this.guiLayer.addElement(uiBossGuideDlg);
    };
    GameView.prototype.onMonsterAnimationComplete = function (evt) {
        if (GameView.instance().bMonsterDeadAnim == false)
            evt.target.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.createMonster = function () {
        if (Logic.monster.dragon != null) {
            this.gameLayer.removeChild(Logic.monster.dragon.getDisplay());
            Utils.removeDragonBone(Logic.monster.dragon_name, Logic.monster.dragon);
            Logic.monster.dragon.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        }
        var d = Utils.createDragonBone(Logic.monster.dragon_name);
        var dd = d.getDisplay();
        Logic.monster.dragon = d;
        if (this.z_order["monster"] == null) {
            this.gameLayer.addChild(dd);
            this.z_order["monster"] = this.gameLayer.getChildIndex(dd);
        }
        else {
            this.gameLayer.addChildAt(dd, this.z_order["monster"]);
        }
        d.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onMonsterAnimationComplete);
        dd.x = G.width / 2;
        dd.y = U.offset(G.base_y);
        dd.visible = false;
        this.removeMonsterSay();
        var showMonster = function () {
            Logic.monster.dragon.getDisplay().visible = true;
            this.monsterSay();
        };
        var tw = egret.Tween.get(dd);
        tw.wait(100).call(showMonster, this);
        // Scale monster if need.
        var line_monster = Utils.getLine("npc_list", Logic.monster.monster_id);
        var fScaleSize = line_monster[npc_list_scale];
        dd.scaleX = fScaleSize / 100.0;
        dd.scaleY = fScaleSize / 100.0;
        d.animation.gotoAndPlay("huxi");
        // Replace bone 
        var bone_list = line_monster[npc_list_bone];
        var part_list = line_monster[npc_list_part_name];
        var iBoneLen = 0;
        if (bone_list != null) {
            iBoneLen = bone_list.length;
        }
        var clothes = G.dragonbones_factory.getTextureAtlas(Logic.monster.dragon_name);
        if (clothes != null) {
            for (var i = 0; i < iBoneLen; i++) {
                var strBoneName = bone_list[i];
                var strPartName = part_list[i];
                var ret = U.changeCloth(Logic.monster.dragon, Logic.monster.dragon_name, strBoneName, strPartName);
                if (!ret) {
                    break;
                }
            }
        }
        else {
            console.log("change cloth texture error, clothes null", Logic.monster.monster_id);
        }
        // Refresh next monster's information.
        this.ui_main.refreshMonsterType();
        this.ui_main.setMonster(Logic.monster.name);
        this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
        this.tryTriggerSheild();
        this.bMonsterDeadAnim = false;
    };
    GameView.prototype.monsterSay = function () {
        var sDialog = "";
        if (Logic.isInChallengingDifficulty()) {
            // 由于81难模式下玩法多样，对话泡遮挡的问题比较严重
            return;
        }
        else {
            var mbLine = Utils.getLine("step_list", Logic.step);
            sDialog = mbLine[step_list_dialog];
        }
        if (sDialog != "") {
            if (Logic.monster.type == "boss") {
                this.sayLogo = new egret.Bitmap();
                this.sayLogo.texture = RES.getRes("monster_say");
                this.sayLogo.scaleX = 1.2;
                //this.sayLogo.x =  Logic.monster.dragon.getDisplay().x + Logic.monster.dragon.getDisplay().width/6;
                //this.sayLogo.y =  Logic.monster.dragon.getDisplay().y - Logic.monster.dragon.getDisplay().height - this.sayLogo.height/2;
                //}
                //else if(Logic.monster.type == "boss"){
                this.sayLogo.x = Logic.monster.dragon.getDisplay().x + Logic.monster.dragon.getDisplay().width / 4;
                this.sayLogo.y = Logic.monster.dragon.getDisplay().y - Logic.monster.dragon.getDisplay().height * 1.6; //- this.sayLogo.height/2;
                if (this.sayLogo.y < 110) {
                    this.sayLogo.y = 110;
                }
                this.gameLayer.addChild(this.sayLogo);
                this.MonsterSayLabel = new egret.TextField(); //创建TextField实例
                this.MonsterSayLabel.textColor = 0x000000; //设置颜色，和Flash一样，设置16进制的数值
                this.MonsterSayLabel.textAlign = "left"; //设置文本对齐，可选:left,center,right
                this.MonsterSayLabel.text = sDialog;
                this.MonsterSayLabel.size = 20; //设置字号
                this.MonsterSayLabel.width = 140; //如果设置宽度，则文本自动换行
                this.MonsterSayLabel.x = this.sayLogo.x + this.sayLogo.width * 0.6 - this.MonsterSayLabel.width / 2;
                this.MonsterSayLabel.y = this.sayLogo.y + this.sayLogo.height / 2 - this.MonsterSayLabel.height * 0.6 - 5;
                this.gameLayer.addChild(this.MonsterSayLabel);
                this.timerRemoveMonsterSay = new egret.Timer(20000, 1);
                this.timerRemoveMonsterSay.addEventListener(egret.TimerEvent.TIMER, this.removeMonsterSay, this);
                this.timerRemoveMonsterSay.start();
            }
        }
    };
    GameView.prototype.removeMonsterSay = function () {
        if (this.sayLogo == null) {
            return;
        }
        this.gameLayer.removeChild(this.sayLogo);
        this.gameLayer.removeChild(this.MonsterSayLabel);
        this.sayLogo = null;
        this.MonsterSayLabel = null;
        this.timerRemoveMonsterSay.stop();
    };
    GameView.prototype.createOneHero = function (index, name, posX, posY, bDead) {
        if (bDead === void 0) { bDead = false; }
        var d = Utils.createDragonBone(name);
        if (d == null) {
            return;
        }
        d.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onHeroAnimationComplete);
        var dd = d.getDisplay();
        dd.visible = false;
        dd.x = posX;
        posY = G.base_y + posY;
        dd.y = Utils.offset(posY);
        dd.scaleX = 0.8;
        dd.scaleY = 0.8;
        this.gameLayer.addChild(dd);
        this.z_order["hero"] = this.gameLayer.numChildren;
        d.animation.gotoAndPlay("huxi");
        this.heroes[index] = d;
        var comeout = function () {
            this.visible = true;
        };
        if (bDead == false) {
            var tw = egret.Tween.get(dd);
            tw.wait(500).call(comeout, dd);
        }
    };
    GameView.prototype.refreshNewHeroes = function () {
        var iHeroLen = Logic.heroes.length;
        var iHeroUnlockLen = 0;
        for (var i = 0; i < iHeroLen; ++i, ++iHeroUnlockLen) {
            var blocked = Logic.heroes[i].locked && Logic.heroes[i].type == 0;
            if (blocked) {
                break;
            }
        }
        var iCurrentHeroLen = this.heroes.length;
        for (var i = iCurrentHeroLen; i < iHeroUnlockLen; ++i) {
            if (Logic.heroes[i].locked) {
                continue;
            }
            var iHeroID = Logic.heroes[i].hero_id;
            var strHeroName = "yx" + Utils.formatNumber(iHeroID, 3, '0');
            this.createOneHero(i, strHeroName, this.fArrayHeroPosX[iHeroID - 1], this.fArrayHeroPosY[iHeroID - 1]);
            if (i == iHeroUnlockLen - 1) {
                // Show smoke for new hero.
                this.initHeroComeoutAnim();
                var clear = function () {
                    this.hero_comeout_dragon.animation.stop();
                    this.hero_comeout_dragon.getDisplay().visible = false;
                };
                var dd = this.hero_comeout_dragon.getDisplay();
                dd.visible = true;
                dd.scaleX = 1.0;
                dd.scaleY = 1.0;
                dd.x = this.fArrayHeroPosX[iHeroID - 1];
                dd.y = Utils.offset(G.base_y + this.fArrayHeroPosY[iHeroID - 1]);
                this.hero_comeout_dragon.animation.gotoAndPlay("huxi");
                var tw_stop = egret.Tween.get(dd);
            }
        }
        this.refreshNewPlatform();
    };
    GameView.prototype.addAllHeroes = function () {
        var iHeroLen = Logic.heroes.length;
        var iHeroUnlockLen = 0;
        for (var i = 0; i < iHeroLen; ++i, ++iHeroUnlockLen) {
            var blocked = Logic.heroes[i].locked && Logic.heroes[i].type == 0;
            if (blocked) {
                break;
            }
        }
        for (var i = 0; i < iHeroUnlockLen; ++i) {
            var iHeroID = Logic.heroes[i].hero_id;
            var strHeroName = "yx" + Utils.formatNumber(iHeroID, 3, '0');
            this.createOneHero(i, strHeroName, this.fArrayHeroPosX[iHeroID - 1], this.fArrayHeroPosY[iHeroID - 1], Logic.heroes[i].dead);
            if (Logic.heroes[i].dead == true) {
                this.showHeroMonumentAnim(i);
            }
        }
    };
    GameView.prototype.createPlayer = function () {
        if (Logic.player.dragon != null) {
            this.gameLayer.removeChild(Logic.player.dragon.getDisplay());
            Logic.player.dragon.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        }
        var d = Utils.createDragonBone(Logic.player.dragon_name);
        var dd = d.getDisplay();
        Logic.player.dragon = d;
        if (this.z_order["player"] == null) {
            this.gameLayer.addChild(dd);
            this.z_order["player"] = this.gameLayer.getChildIndex(dd);
        }
        else {
            this.gameLayer.addChildAt(dd, this.z_order["player"]);
        }
        d.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onPlayerAnimationComplete);
        dd.x = G.width / 2;
        dd.y = U.offset(G.base_y);
        d.animation.gotoAndPlay("huxi");
        this.refreshPlayerClothes();
    };
    GameView.prototype.onPlayerAnimationComplete = function (evt) {
        if (evt.target == Logic.player.dragon) {
            if (GameView.instance().player_act_index > 0) {
                GameView.instance().player_act_index = 0;
            }
        }
        evt.target.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.triggerSkillStatus = function (index) {
    };
    GameView.prototype.endSkillStatus = function (index) {
        if (index == 0) {
        }
        else if (index == 1) {
            this.stopSecondSkill();
            Logic.endSkill(2);
        }
        else {
            this.stopOtherSkillBuffAnim(index);
            Logic.endSkill(index + 1);
        }
    };
    GameView.prototype.onFirstSkillEnd = function (evt) {
        evt.target.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        var p = evt.target.getDisplay().parent;
        if (p != null) {
            p.removeChild(evt.target.getDisplay());
        }
    };
    GameView.prototype.showFirstSkillAnim = function () {
        var strSkillAnimName = "jineng01";
        if (this.player_skill_anim[0] == null) {
            // Create skill animation first.
            this.player_skill_anim[0] = Utils.createDragonBone(strSkillAnimName);
        }
        else {
            var iLastAnimIndex = this.gameLayer.getChildIndex(this.player_skill_anim[0].getDisplay());
            if (iLastAnimIndex > 0) {
                this.gameLayer.removeChild(this.player_skill_anim[0].getDisplay());
                this.player_skill_anim[0].removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
            }
        }
        this.player_skill_anim[0].addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onFirstSkillEnd);
        var dd = this.player_skill_anim[0].getDisplay();
        dd.x = G.width / 2;
        dd.y = U.offset(G.base_y);
        dd.scaleX = 2.0;
        dd.scaleY = 2.0;
        var iPlayerIndex = this.gameLayer.getChildIndex(Logic.player.dragon.getDisplay());
        this.gameLayer.addChildAt(dd, iPlayerIndex);
        this.player_skill_anim[0].animation.gotoAndPlay("huxi");
        var make_damage = function () {
            this.makeDamageToMonster("Skill_1_Damage");
            this.ui_main.endSkillBuff(0);
            //this.ui_main.startSkillCD(0);
        };
        var tw = egret.Tween.get(dd);
        tw.wait(100).call(make_damage, this);
    };
    GameView.prototype.stopSecondSkill = function () {
        if (this.skill2_timer != null) {
            this.skill2_timer.stop();
            this.skill2_timer = null;
        }
        if (this.player_skill_anim[1] == null) {
            return;
        }
        this.player_skill_anim[1].removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        this.gameLayer.removeChild(this.player_skill_anim[1].getDisplay());
    };
    GameView.prototype.singleHitForSecondSkill = function () {
        this.makeDamageToMonster("Shadow_Hit");
    };
    GameView.prototype.startSecondSkill = function () {
        if (this.skill2_timer != null) {
            this.skill2_timer.stop();
            this.skill2_timer = null;
        }
        var iDamageTimes = Logic.getPlayerSkillData(2);
        var iTimeSpan = Math.floor(1000 / iDamageTimes);
        this.skill2_timer = new egret.Timer(iTimeSpan, -1);
        this.skill2_timer.addEventListener(egret.TimerEvent.TIMER, this.singleHitForSecondSkill, this);
        this.skill2_timer.start();
    };
    GameView.prototype.startHoldingTap = function () {
        var dragon = G.dragonbones_factory.buildArmature(Logic.player.dragon_name);
        dragonBones.WorldClock.clock.add(dragon);
        var dd = dragon.getDisplay();
        var pd = Logic.player.dragon.getDisplay();
        dd.x = pd.x;
        dd.y = pd.y;
        dd.scaleX = 1;
        dd.scaleY = 1;
        this.gameLayer.addChildAt(dd, this.z_order["player"] + 1);
        dragon.animation.gotoAndPlay("huxi");
        this.player_fake_dragon = dragon;
        this.player_fake_counter = 0;
        var dragon2 = G.dragonbones_factory.buildArmature(Logic.player.dragon_name);
        dragonBones.WorldClock.clock.add(dragon2);
        var dd2 = dragon2.getDisplay();
        dd2.x = pd.x;
        dd2.y = pd.y;
        dd2.scaleX = 1;
        dd2.scaleY = 1;
        this.gameLayer.addChildAt(dd2, this.z_order["player"] + 1);
        dragon2.animation.gotoAndPlay("huxi");
        this.player_fake_dragon2 = dragon2;
        var timer = new egret.Timer(G.holding_tap_time * 1000, 1);
        timer.addEventListener(egret.TimerEvent.TIMER, this.endHoldingTap, this);
        timer.start();
    };
    GameView.prototype.endHoldingTap = function () {
        Logic.holding_tap = 0;
        this.gameLayer.removeChild(this.player_fake_dragon.getDisplay());
        dragonBones.WorldClock.clock.remove(this.player_fake_dragon);
        this.player_fake_dragon = null;
        this.gameLayer.removeChild(this.player_fake_dragon2.getDisplay());
        dragonBones.WorldClock.clock.remove(this.player_fake_dragon2);
        this.player_fake_dragon2 = null;
    };
    GameView.prototype.onSecondSkillEnd = function (evt) {
        evt.target.animation.gotoAndPlay("gj01");
    };
    GameView.prototype.showSecondSkillAnim = function () {
        var strSkillAnimName = "jineng02";
        if (this.player_skill_anim[1] == null) {
            // Create skill animation first.
            this.player_skill_anim[1] = Utils.createDragonBone(strSkillAnimName);
        }
        else {
            var iLastAnimIndex = this.gameLayer.getChildIndex(this.player_skill_anim[1].getDisplay());
            if (iLastAnimIndex > 0) {
                this.gameLayer.removeChild(this.player_skill_anim[1].getDisplay());
                this.player_skill_anim[1].removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
            }
        }
        this.player_skill_anim[1].addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onSecondSkillEnd);
        var dd = this.player_skill_anim[1].getDisplay();
        dd.x = G.width / 2;
        dd.y = U.offset(G.base_y);
        dd.scaleX = 1.0;
        dd.scaleY = 1.0;
        var iPlayerIndex = this.gameLayer.getChildIndex(Logic.player.dragon.getDisplay());
        this.gameLayer.addChildAt(dd, iPlayerIndex);
        this.player_skill_anim[1].animation.gotoAndPlay("huxi");
        this.startSecondSkill();
    };
    GameView.prototype.stopOtherSkillBuffAnim = function (index) {
        var buff_anim = this.player_skill_buff_anim[index];
        if (buff_anim == null) {
            return;
        }
        buff_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        buff_anim.animation.stop();
        buff_anim.getDisplay().visible = false;
    };
    GameView.prototype.onSkillBuffAnimComplete = function (evt) {
        evt.target.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.startOtherSkillBuffAnim = function (index) {
        var buff_anim = this.player_skill_buff_anim[index];
        var yOffset = -40;
        if (buff_anim == null) {
            var strAnimName = "tx004";
            if (index == 2) {
                strAnimName = "tx009";
            }
            else if (index == 3) {
                strAnimName = "tx004";
            }
            else if (index == 4) {
                strAnimName = "tx010";
            }
            else if (index == 5) {
                strAnimName = "tx011";
                yOffset = 0;
            }
            buff_anim = Utils.createDragonBone(strAnimName);
            this.player_skill_buff_anim[index] = buff_anim;
        }
        else {
            this.gameLayer.removeChild(buff_anim.getDisplay());
            buff_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        }
        var dd = buff_anim.getDisplay();
        dd.x = G.width / 2 + 10;
        dd.y = U.offset(G.base_y + yOffset);
        dd.visible = true;
        this.gameLayer.addChild(dd);
        buff_anim.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onSkillBuffAnimComplete);
        buff_anim.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.showPlayerSkillAnim = function (index) {
        if (index == 0) {
            this.showFirstSkillAnim();
        }
        else if (index == 1) {
            this.showSecondSkillAnim();
        }
        else {
            var strSkillAnimName = "jineng0" + (index + 1);
            if (this.player_skill_anim[index] == null) {
                // Create skill animation first.
                this.player_skill_anim[index] = Utils.createDragonBone(strSkillAnimName);
            }
            else {
                var iLastAnimIndex = this.gameLayer.getChildIndex(this.player_skill_anim[index].getDisplay());
                if (iLastAnimIndex > 0) {
                    this.gameLayer.removeChild(this.player_skill_anim[index].getDisplay());
                    this.player_skill_anim[index].removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
                }
            }
            this.player_skill_anim[index].addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onSkillAnimationEnd);
            var dd = this.player_skill_anim[index].getDisplay();
            dd.x = G.width / 2;
            dd.y = U.offset(G.base_y);
            if (index == 2) {
                dd.scaleX = 2.0;
                dd.scaleY = 2.0;
            }
            var iPlayerIndex = this.gameLayer.getChildIndex(Logic.player.dragon.getDisplay());
            this.gameLayer.addChildAt(dd, iPlayerIndex);
            this.player_skill_anim[index].animation.gotoAndPlay("huxi");
            this.startOtherSkillBuffAnim(index);
        }
    };
    GameView.prototype.onSkillAnimationEnd = function (evt) {
        evt.target.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        var p = evt.target.getDisplay().parent;
        if (p != null) {
            p.removeChild(evt.target.getDisplay());
        }
    };
    GameView.prototype.showTouchAnim = function (posX, posY) {
        if (this.player_touch_anim == null) {
            // Create touch animation first.
            this.player_touch_anim = Utils.createDragonBone("dianji");
        }
        else {
            var iLastAnimIndex = this.gameLayer.getChildIndex(this.player_touch_anim.getDisplay());
            if (iLastAnimIndex > 0) {
                this.gameLayer.removeChild(this.player_touch_anim.getDisplay());
                this.player_touch_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
            }
        }
        this.player_touch_anim.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.removeEndAnimation);
        var dd = this.player_touch_anim.getDisplay();
        dd.x = posX;
        dd.y = U.offset(posY);
        this.gameLayer.addChild(dd);
        this.player_touch_anim.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.removeEndAnimation = function (evt) {
        evt.target.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        var p = evt.target.getDisplay().parent;
        if (p != null) {
            p.removeChild(evt.target.getDisplay());
        }
    };
    GameView.prototype.showShopHitAnim = function () {
        if (this.shop_hit_anim == null) {
            this.shop_hit_anim = Utils.createDragonBone("jineng010");
        }
        else {
            var iLastAnimIndex = this.gameLayer.getChildIndex(this.shop_hit_anim.getDisplay());
            if (iLastAnimIndex > 0) {
                this.gameLayer.removeChild(this.shop_hit_anim.getDisplay());
                this.shop_hit_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
            }
        }
        this.shop_hit_anim.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.removeShopHitAnim);
        var dd = this.shop_hit_anim.getDisplay();
        dd.x = G.width / 2;
        dd.y = U.offset(G.base_y);
        this.gameLayer.addChild(dd);
        this.shop_hit_anim.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.removeShopHitAnim = function (evt) {
        evt.target.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        var p = evt.target.getDisplay().parent;
        if (p != null) {
            p.removeChild(evt.target.getDisplay());
        }
    };
    GameView.prototype.showProtectHeroAnim = function () {
        if (this.protect_hero_anim == null) {
            this.protect_hero_anim = Utils.createDragonBone("jineng011");
        }
        else {
            var iLastAnimIndex = this.gameLayer.getChildIndex(this.protect_hero_anim.getDisplay());
            if (iLastAnimIndex > 0) {
                this.gameLayer.removeChild(this.protect_hero_anim.getDisplay());
                this.protect_hero_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
            }
        }
        this.protect_hero_anim.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.removeProtectHeroAnim);
        var dd = this.protect_hero_anim.getDisplay();
        dd.x = G.width / 2;
        dd.y = U.offset(G.base_y);
        this.gameLayer.addChild(dd);
        this.protect_hero_anim.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.removeProtectHeroAnim = function (evt) {
        evt.target.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        var p = evt.target.getDisplay().parent;
        if (p != null) {
            p.removeChild(evt.target.getDisplay());
        }
    };
    GameView.prototype.showRebornDetailDlg = function () {
        var uiRebornDlg = new RebornDetailDlg();
        uiRebornDlg.width = G.width;
        uiRebornDlg.height = G.height;
        this.guiLayer.addElement(uiRebornDlg);
    };
    GameView.prototype.showHeroDetailDlg = function (heroId) {
        var uiDetailDlg = new HeroDetailDlg();
        uiDetailDlg.initHeroDatas(heroId);
        uiDetailDlg.width = G.width;
        uiDetailDlg.height = G.height;
        this.guiLayer.addElement(uiDetailDlg);
    };
    GameView.prototype.showPlayerDetailDlg = function () {
        var uiDetailDlg = new HeroDetailDlg();
        uiDetailDlg.initPlayerDatas();
        uiDetailDlg.width = G.width;
        uiDetailDlg.height = G.height;
        this.guiLayer.addElement(uiDetailDlg);
    };
    GameView.prototype.showArtifactDetailDlg = function (index) {
        var uiArtifactDlg = new ArtifactDetailDlg();
        uiArtifactDlg.initArtifactIndex(index);
        uiArtifactDlg.width = G.width;
        uiArtifactDlg.height = G.height;
        this.guiLayer.addElement(uiArtifactDlg);
    };
    GameView.prototype.showRebornAnim = function () {
        Logic.player.dragon.animation.gotoAndPlay("zhuansheng");
        this.background.touchEnabled = false;
        //this.gameTopLayer.removeChildren();
        var white_mask_img = Utils.createBitmapByName("white_square");
        white_mask_img.x = 0;
        white_mask_img.y = 0;
        white_mask_img.width = G.width;
        white_mask_img.height = G.height;
        white_mask_img.alpha = 0.0;
        this.gameTopLayer.addChild(white_mask_img);
        function removeMask() {
            this.gameTopLayer.removeChild(white_mask_img);
        }
        var tw = egret.Tween.get(white_mask_img);
        tw.wait(600).to({ alpha: 1.0 }, 500).wait(1000).call(this.rebornInit, this).to({ alpha: 0.0 }, 1000).call(removeMask, this);
    };
    GameView.prototype.rebornInit = function () {
        var l = [this.logic_timer, this.skill2_timer, this.timerRemoveMonsterSay, this.second_timer];
        for (var i = 0; i < l.length; ++i) {
            if (l[i] != null) {
                l[i].stop();
            }
        }
        //egret.Tween.removeAllTweens()
        Logic.monster.dragon = null;
        Logic.player.dragon = null;
        this.main_director.reCreateScene();
    };
    GameView.prototype.init = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, Utils.onResourceLoadComplete, null); // 异步加载资源用的
        Utils.loadDragonBone("gw006"); // 宝箱怪
        RES.getRes("main").play(true);
        //游戏场景层，游戏场景相关内容可以放在这里面。
        this.gameLayer = new egret.DisplayObjectContainer();
        this.addChild(this.gameLayer);
        //GUI的组件必须都在这个容器内部,UIStage会始终自动保持跟舞台一样大小。
        this.guiLayer = G.ui_stage;
        this.gameTopLayer = G.top_layer;
        if (this.first_init) {
            Utils.registerDragonBonesTimer();
        }
        this.labelNextStepName = new egret.TextField();
        this.labelNextStepName.textColor = 0xffffff;
        this.labelNextStepName.size = 50;
        this.labelNextStepName.textAlign = egret.HorizontalAlign.CENTER;
        this.labelNextStepName.width = 250;
        this.labelNextStepName.height = 40;
        this.labelNextStepName.visible = false;
        this.labelNextStepName.x = G.width / 2 - 125;
        this.labelNextStepName.y = G.height / 2 - 225;
        this.gameTopLayer.addChild(this.labelNextStepName);
        //在GUI范围内一律使用addElement等方法替代addChild等方法。
        this.ui_main = new PanelMain();
        this.guiLayer.addElement(this.ui_main);
        this.ui_main.width = G.width;
        this.ui_main.height = G.height;
        this.refreshScene();
        this.createMonster();
        this.addAllHeroes();
        this.refreshNewPlatform();
        this.createPlayer();
        this.tryTriggerFruit();
        this.tryTriggerBaozhu();
        this.logic_timer = new egret.Timer(34, -1);
        this.logic_timer.addEventListener(egret.TimerEvent.TIMER, this.tick, this);
        this.logic_timer.start();
        this.second_timer = new egret.Timer(1000, -1);
        this.second_timer.addEventListener(egret.TimerEvent.TIMER, this.secTick, this);
        this.second_timer.start();
        Net.getOfflineMoney();
    };
    GameView.prototype.playPlayerAction = function () {
        if (this.player_act_index == 0) {
            var r = Utils.RandInt(0, 1);
            if (r == 1) {
                r = 2;
            }
            this.player_act_index = r;
        }
        else {
            this.player_act_index += 1;
        }
        var n = this.player_act_index % (this.player_actions.length - 1) + 1;
        var act_name = this.player_actions[n];
        Logic.player.dragon.animation.gotoAndPlay(act_name);
        var strSoundName = "money_hit" + n;
        var sound = RES.getRes(strSoundName);
        sound.play();
    };
    GameView.prototype.playHoldingTapAction = function () {
        if (this.player_fake_dragon == null) {
            return;
        }
        //Logic.player.dragon.getDisplay().visible = false
        //this.player_fake_dragon.getDisplay().visible = false
        var n = (this.player_act_index + 1) % (this.player_actions.length - 1) + 1;
        var act_name = this.player_actions[n];
        this.player_fake_dragon.animation.gotoAndPlay(act_name);
        var n2 = (this.player_act_index + 2) % (this.player_actions.length - 1) + 1;
        var act_name2 = this.player_actions[n2];
        this.player_fake_dragon2.animation.gotoAndPlay(act_name2);
    };
    GameView.prototype.initHeroComeoutAnim = function () {
        if (this.hero_comeout_dragon != null) {
            this.gameLayer.setChildIndex(this.hero_comeout_dragon.getDisplay(), this.gameLayer.numChildren - 1);
            return;
        }
        this.hero_comeout_dragon = Utils.createDragonBone("tx001");
        var dd = this.hero_comeout_dragon.getDisplay();
        this.gameLayer.addChild(dd);
        this.z_order["comeout"] = this.gameLayer.numChildren;
        var sound = RES.getRes("show_hero");
        sound.play();
    };
    GameView.prototype.initSmokeAnim = function () {
        if (this.smoke_dragon != null) {
            return;
        }
        this.smoke_dragon = Utils.createDragonBone("yanwu");
        var dd = this.smoke_dragon.getDisplay();
        dd.x = G.width / 2;
        dd.y = G.base_y_offset;
        this.gameLayer.addChild(dd);
    };
    GameView.prototype.clearSmokeAnim = function () {
        this.fairy_status = 0;
        this.fairy_dragon.getDisplay().visible = false;
    };
    GameView.prototype.nextStep = function () {
        var mbLine = Utils.getLine("step_list", Logic.step);
        var iChangeScene = mbLine[step_list_change_scene];
        if (Logic.sub_step >= 10 && iChangeScene == 1) {
            this.showNextStepAnim();
        }
        else {
            this.showNextMonster();
        }
    };
    GameView.prototype.onSmokeAnimEndInDifficulty = function () {
        this.smoke_dragon.animation.stop();
        this.smoke_dragon.getDisplay().visible = false;
        if (Logic.isInChallengingDifficulty() == false) {
            return;
        }
        this.showNextMonster();
    };
    GameView.prototype.onSmokeAnimEndNormal = function () {
        this.smoke_dragon.animation.stop();
        this.smoke_dragon.getDisplay().visible = false;
        if (Logic.isInChallengingDifficulty() == true) {
            return;
        }
        this.nextStep();
    };
    GameView.prototype.playMonsterAction = function (t) {
        var d = Logic.monster.dragon;
        if (t == "behit") {
            d.animation.gotoAndPlay("aida");
        }
        else if (t == "dead") {
            //d.animation.stop()
            Net.saveDataLocal();
            if (Logic.monster.type != "boss") {
                G.save_counter += 1;
            }
            else {
                G.save_counter = G.save_interval;
            }
            if (G.save_counter == G.save_interval) {
                Net.saveData2();
                G.save_counter = 0;
            }
            d.animation.gotoAndPlay("aida");
            var play_smoke = function () {
                var line_monster = Utils.getLine("npc_list", Logic.monster.monster_id);
                var fScaleSize = line_monster[npc_list_scale] / 100.0 * 1.5;
                this.initSmokeAnim();
                this.smoke_dragon.getDisplay().visible = true;
                this.smoke_dragon.getDisplay().scaleX = fScaleSize;
                this.smoke_dragon.getDisplay().scaleY = fScaleSize;
                this.smoke_dragon.getDisplay().x = G.width / 2;
                this.smoke_dragon.getDisplay().y = G.base_y_offset;
                this.smoke_dragon.animation.gotoAndPlay("huxi");
                var tw_stop = egret.Tween.get(this.smoke_dragon.getDisplay());
                if (Logic.isInChallengingDifficulty() == false) {
                    tw_stop.wait(600).call(this.onSmokeAnimEndNormal, this);
                }
                else {
                    tw_stop.wait(600).call(this.onSmokeAnimEndInDifficulty, this);
                }
            };
            var tw = egret.Tween.get(d.getDisplay());
            tw.wait(500).to({ alpha: 0 }, 250);
            var tw2 = egret.Tween.get(d.getDisplay());
            tw2.wait(300).call(play_smoke, this);
        }
    };
    GameView.prototype.shake = function (type) {
        var tw = egret.Tween.get(this.background);
        var o = U.offset(0);
        //tw.to( {x:-30, y:o-20}, 60 ).to( {x:30, y:o+20}, 60 ).to( {x:+30, y:o-20}, 60 ).to( {x:-30, y:o+20}, 60 ).to( {x:-30, y:o-20}, 60 ).to( {x:30, y:o+20}, 60 ).to( {x:0, y:o}, 30 )
        if (type == "hit") {
            //tw.to( {x:-11, y:o-8}, 35 ).to( {x:11, y:o+8}, 35 ).to( {x:11, y:o-8}, 35 ).to( {x:-11, y:o+8}, 35 ).to( {x:-11, y:o-8}, 35 ).to( {x:11, y:o+8}, 35 ).to( {x:0, y:o}, 15 )
            tw.to({ x: -11, y: o - 8 }, 30).to({ x: 11, y: o + 8 }, 30).to({ x: 11, y: o - 8 }, 30).to({ x: -11, y: o + 8 }, 30).to({ x: -11, y: o - 8 }, 30).to({ x: 11, y: o + 8 }, 30).to({ x: 11, y: o - 8 }, 30).to({ x: -11, y: o + 8 }, 30).to({ x: 0, y: o }, 12);
        }
        else if (type == "skill1") {
            tw.to({ x: -30, y: o - 20 }, 50).to({ x: 30, y: o + 20 }, 50).to({ x: +30, y: o - 20 }, 50).to({ x: -30, y: o + 20 }, 50).to({ x: -30, y: o - 20 }, 50).to({ x: 30, y: o + 20 }, 50).to({ x: 0, y: o }, 20);
        }
    };
    GameView.prototype.displayCostHP = function (n, crit) {
        if (crit === void 0) { crit = false; }
        var cost_hp = new egret.BitmapText();
        cost_hp.spriteSheet = RES.getRes("zi2_json");
        cost_hp.text = "" + Utils.bigNumber(n);
        cost_hp.x = (G.width - cost_hp.width) / 2 + U.RandInt(-20, 20);
        cost_hp.y = Utils.offset(G.base_y - 250);
        cost_hp.alpha = 1.0;
        this.gameTopLayer.addChild(cost_hp);
        if (crit) {
            cost_hp.scaleX = 2.0;
            cost_hp.scaleY = 2.0;
            cost_hp.x = (G.width - cost_hp.width * 2) / 2;
        }
        var iSheildNum = Logic.getSheildLiveNum();
        if (iSheildNum > 0) {
            cost_hp.scaleX /= 2.0;
            cost_hp.scaleY /= 2.0;
            cost_hp.x = (G.width - cost_hp.width * cost_hp.scaleX) / 2;
        }
        var tw = egret.Tween.get(cost_hp);
        var _clear = function () {
            this.gameTopLayer.removeChild(cost_hp);
        };
        tw.to({ y: cost_hp.y - 150, alpha: 0.2 }, 700).call(_clear, this);
    };
    GameView.prototype.onTouchBackground = function (evt) {
        if (this.ui_main.m_iTapGuideStep == 1) {
            this.ui_main.m_iTapGuideStep++;
            this.stopHandAnim();
        }
        this.touch_holding = true;
        //console.log( "onTouchBackground", evt.stageX, evt.stageY )
        if (this.fairy_status == 1 && this.fairy_dragon != null) {
            var fd = this.fairy_dragon.getDisplay();
            if (Utils.isPosInRect(evt.stageX, evt.stageY, fd.x - fd.width / 2, fd.width, fd.y - fd.height, fd.height)) {
                this.onTouchFairy();
                return;
            }
        }
        for (var i = 0; i < this.drop_baozhu.length; ++i) {
            var bz = this.drop_baozhu[i];
            if (bz.baozhu_data.hp == 0) {
                continue;
            }
            var w = bz.dragon.getDisplay().width;
            var h = bz.dragon.getDisplay().height;
            var x = bz.sprite.x - w / 2;
            var y = bz.sprite.y - h / 2;
            if (Utils.isPosInRect(evt.stageX, evt.stageY, x, w, y, h)) {
                this.onTouchBaozhu(i);
                return;
            }
        }
        for (var i = 0; i < this.fruits.length; ++i) {
            var fruit = this.fruits[i];
            if (fruit.eaten) {
                continue;
            }
            var fs = fruit.sprite;
            var fd = fruit.dragon.getDisplay();
            if (Utils.isPosInRect(evt.stageX, evt.stageY, fs.x - fd.width / 2, fd.width, fs.y - fd.height + G.fruit_offset_y, fd.height)) {
                this.onTouchFruit(i);
                fruit.eaten = true;
                return;
            }
        }
        this.playPlayerAction();
        this.showTouchAnim(evt.localX, evt.localY);
        for (var i = this.sheild_max_num - 1; i >= 0; i--) {
            if (this.sheild_layers[i] != null && Logic.sheilds[i].hp > 0) {
                if (Utils.isPosInRect(evt.stageX, evt.stageY, this.sheild_layers[i].x - this.sheild_layers[i].width / 2, this.sheild_layers[i].width, this.sheild_layers[i].y - this.sheild_layers[i].height / 2, this.sheild_layers[i].height)) {
                    this.onTouchSheild(i);
                    return;
                }
            }
        }
        this.showSheildsProtectAnim();
        if (this.bMonsterDeadAnim == true) {
            return;
        }
        this.last_touch_counter += 1;
        if (this.last_touch_counter >= 12) {
            var tt = U.time_micro();
            if (tt >= this.last_touch_time + 1000) {
                this.last_touch_counter = 0;
                this.last_touch_time = tt;
                this.makeDamageToMonster("Tap_Damage");
            }
        }
        else {
            this.makeDamageToMonster("Tap_Damage");
        }
        this.ui_main.refreshPeach();
    };
    GameView.prototype.onTouchBackgroundEnd = function (evt) {
        //console.log( "onTouchBackground---end" )
        this.touch_holding = false;
    };
    GameView.prototype.openAchievePanel = function () {
        if (this.ui_achieve == null) {
            this.ui_achieve = new PanelAchievement();
            this.ui_achieve.height = G.height;
            this.guiLayer.addElement(this.ui_achieve);
            Stat.refreshAchieve();
            this.ui_main.refreshAchieveNew();
        }
        else {
            this.ui_achieve.visible = true;
            Stat.refreshAchieve();
            this.ui_achieve.refresh();
            this.ui_main.refreshAchieveNew();
        }
    };
    GameView.prototype.openShopPanel = function () {
        if (this.ui_shop == null) {
            this.ui_shop = new PanelShop();
            this.ui_shop.height = G.height;
            this.guiLayer.addElement(this.ui_shop);
        }
        else {
            this.ui_shop.visible = true;
            this.ui_shop.refreshDiamond();
            this.ui_shop.refreshMoney();
        }
    };
    GameView.prototype.showRankDialog = function () {
        Net.getRank(1, 0, 10);
        var uiRankDlg = new PanelRank();
        uiRankDlg.width = G.width;
        uiRankDlg.height = G.height;
        this.guiLayer.addElement(uiRankDlg);
        this.rank_dialog = uiRankDlg;
    };
    GameView.prototype.showCleanCdDlg = function () {
        var uiCleanCdDlg = new CleanCdDlg();
        this.guiLayer.addElement(uiCleanCdDlg);
    };
    GameView.prototype.showDailyAwardDlg = function () {
        var uiDailyAwardDlg = new DailyAwardDlg();
        this.guiLayer.addElement(uiDailyAwardDlg);
    };
    GameView.prototype.showDifficultiesDlg = function () {
        if (this.m_bHasShowInfo) {
            var uiDifficultiesListDlg = new DifficultiesListDlg();
            this.guiLayer.addElement(uiDifficultiesListDlg);
            this.difficulties_list_dlg = uiDifficultiesListDlg;
        }
        else {
            var uiDifficultiesInfoDlg = new DifficultiesInfoDlg();
            this.guiLayer.addElement(uiDifficultiesInfoDlg);
        }
        this.m_bHasShowInfo = true;
    };
    GameView.prototype.challengeDifficulty = function (id) {
        this.difficulties_list_dlg.onClose(null);
        this.showEnterChallengeAnim(id);
    };
    GameView.prototype.enterDifficultyMode = function (id) {
        Logic.startDifficultyMode(id);
        this.ui_main.enterDifficultyMode();
        Logic.initDifficultySubStep();
        this.refreshScene();
        this.createMonster();
        this.refreshAllPlatforms();
    };
    GameView.prototype.showEnterChallengeAnim = function (id) {
        var white_mask_img = Utils.createBitmapByName("white_square");
        white_mask_img.x = 0;
        white_mask_img.y = 0;
        white_mask_img.width = G.width;
        white_mask_img.height = G.height;
        white_mask_img.alpha = 0.0;
        white_mask_img.touchEnabled = true;
        this.gameTopLayer.addChild(white_mask_img);
        function removeMask() {
            this.gameTopLayer.removeChild(white_mask_img);
        }
        var tw = egret.Tween.get(white_mask_img);
        tw.to({ alpha: 1.0 }, 500).call(this.enterDifficultyMode, this, [id]).to({ alpha: 0.0 }, 500).call(removeMask, this);
    };
    GameView.prototype.showExitChallengeAnim = function () {
        var white_mask_img = Utils.createBitmapByName("white_square");
        white_mask_img.x = 0;
        white_mask_img.y = 0;
        white_mask_img.width = G.width;
        white_mask_img.height = G.height;
        white_mask_img.alpha = 0.0;
        white_mask_img.touchEnabled = true;
        this.gameTopLayer.addChild(white_mask_img);
        function removeMask() {
            this.gameTopLayer.removeChild(white_mask_img);
        }
        var tw = egret.Tween.get(white_mask_img);
        tw.to({ alpha: 1.0 }, 500).call(this.exitChallengeMode, this).to({ alpha: 0.0 }, 500).call(removeMask, this);
        for (var i = 0; i < this.heroes.length; ++i) {
            var db = this.heroes[i];
            if (db == null) {
                continue;
            }
            var dd = db.getDisplay();
            if (dd.y < 0) {
                var hero = Logic.heroes[i];
                dd.x = this.fArrayHeroPosX[hero.hero_id - 1];
                dd.y = Utils.offset(G.base_y + this.fArrayHeroPosY[hero.hero_id - 1]);
                dd.rotation = 0;
                dd.alpha = 0;
                var tw = egret.Tween.get(dd);
                tw.to({ alpha: 1 }, 1000);
            }
        }
    };
    GameView.prototype.exitChallengeMode = function () {
        Logic.endDifficultyMode();
        this.ui_main.exitDifficultyMode();
        this.ui_main.refreshDamageInfo();
        Logic.initStep();
        this.refreshScene();
        this.createMonster();
        this.refreshAllPlatforms();
    };
    GameView.prototype.receiveDiamondMoney = function (money) {
        this.ui_main.showFairyHint("money", "+" + U.bigNumber(money));
        var num_coins = 20;
        for (var i = 0; i < num_coins; ++i) {
            var dc = new DropCoin("diamond_money", money / num_coins);
            this.drop_coins.push(dc);
            this.gameLayer.addChild(dc.coin);
            dc.coin.x = Utils.RandInt(30, 600);
            dc.coin.y = Utils.RandInt(-20, -10);
        }
    };
    GameView.prototype.receiveOfflineMoney = function () {
        if (Logic.offline_money <= 0) {
            return;
        }
        var money = Logic.offline_money;
        Logic.offline_money = 0;
        this.ui_main.showFairyHint("money", "+" + U.bigNumber(money));
        var num_coins = Utils.RandInt(3, 5);
        for (var i = 0; i < num_coins; ++i) {
            var dc = new DropCoin("offline_money", money / num_coins);
            this.drop_coins.push(dc);
            this.gameLayer.addChild(dc.coin);
            dc.coin.x = this.ui_main.btn_main_offline_money.x + 100;
            dc.coin.y = this.ui_main.btn_main_offline_money.y;
        }
        return;
    };
    GameView.prototype.showTapCoins = function (money) {
        if (money <= 0) {
            return;
        }
        var num_coins = Utils.RandInt(1, 2);
        for (var i = 0; i < num_coins; ++i) {
            var dc = new DropCoin("tap_money", money / num_coins);
            this.drop_coins.push(dc);
            this.gameLayer.addChild(dc.coin);
        }
    };
    GameView.prototype.makeDamageToMonster = function (strDamageType) {
        // The monster is dieing
        if (this.bMonsterDeadAnim) {
            if (strDamageType == "Skill_1_Damage") {
                Logic.endSkill(1);
                this.shake("skill1");
            }
            return;
        }
        var cost_hp;
        var bIsMonsterDead;
        if (strDamageType == "Tap_Damage") {
            this.playMonsterAction("behit");
            // Tap damage
            var l = Logic.tapHit();
            //return [ cost_hp, dead, money, crit ]
            cost_hp = l[0];
            var dead = l[1];
            var money = l[2];
            var crit = l[3];
            this.displayCostHP(cost_hp, crit);
            if (crit) {
                this.shake("hit");
            }
            this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
            this.showTapCoins(money);
            //var beHitSound:egret.Sound = RES.getRes("be_hit");
            //beHitSound.play();
            bIsMonsterDead = dead;
        }
        if (strDamageType == "HoldingHit") {
            // Tap damage
            var l = Logic.tapHit();
            //return [ cost_hp, dead, money, crit ]
            cost_hp = l[0];
            var dead = l[1];
            var money = l[2];
            var crit = l[3];
            this.displayCostHP(cost_hp, crit);
            if (crit) {
                this.shake("hit");
            }
            this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
            this.showTapCoins(money);
            bIsMonsterDead = dead;
        }
        else if (strDamageType == "Hero_Damage") {
            // Hero damage
            var l = Logic.heroHit();
            cost_hp = l[0];
            var dead = l[1];
            this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
            bIsMonsterDead = dead;
        }
        else if (strDamageType == "Skill_1_Damage") {
            this.playMonsterAction("behit");
            var l = Logic.endSkill(1);
            cost_hp = l[0];
            var dead = l[1];
            this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
            this.displayCostHP(cost_hp, true);
            this.shake("skill1");
            bIsMonsterDead = dead;
        }
        else if (strDamageType == "Shadow_Hit") {
            // Tap damage
            var l = Logic.shadowHit();
            cost_hp = l[0];
            var dead = l[1];
            this.displayCostHP(cost_hp);
            this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
            bIsMonsterDead = dead;
        }
        else if (strDamageType == "Shop_Hit1") {
            this.playMonsterAction("behit");
            var l = Logic.shopHit(1);
            cost_hp = l[0];
            var dead = l[1];
            this.displayCostHP(cost_hp, true);
            this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
            this.shake("hit");
            bIsMonsterDead = dead;
        }
        else if (strDamageType == "Shop_Hit2") {
            this.playMonsterAction("behit");
            var l = Logic.shopHit(2);
            cost_hp = l[0];
            var dead = l[1];
            this.displayCostHP(cost_hp, true);
            this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
            this.shake("skill1");
            bIsMonsterDead = dead;
        }
        else if (strDamageType == "sheild_explode") {
            this.playMonsterAction("behit");
            var l = Logic.sheildExplode();
            cost_hp = l[0];
            var dead = l[1];
            this.ui_main.refreshHP(Logic.monster.hp, Logic.monster.max_hp);
            this.displayCostHP(cost_hp, true);
            this.shake("skill1");
            bIsMonsterDead = dead;
        }
        if (bIsMonsterDead) {
            this.bMonsterDeadAnim = true;
            this.onMonsterDead();
        }
        this.period_damage += cost_hp;
        return bIsMonsterDead;
    };
    GameView.prototype.onMonsterDead = function () {
        this.playMonsterAction("dead");
        var iMoney = Logic.getDropMoney();
        var num_coins = 0;
        if (Logic.monster.type == "chest") {
            num_coins = Utils.RandInt(7, 10);
        }
        else {
            if (iMoney >= 5) {
                num_coins = Utils.RandInt(3, 5);
            }
            else if (iMoney == 0) {
                num_coins = 0;
            }
            else {
                num_coins = 1;
            }
        }
        for (var i = 0; i < num_coins; ++i) {
            var dc = new DropCoin("monster_money", iMoney / num_coins);
            this.drop_coins.push(dc);
            this.gameLayer.addChild(dc.coin);
        }
        if (this.sayLogo != null) {
            this.removeMonsterSay();
        }
        this.removeAllBaozhu();
    };
    GameView.prototype.refreshPlayerClothes = function () {
        var index = 0;
        for (var i = 5; i >= 0; --i) {
            if (Logic.player.skills[i].level > 0) {
                index = i + 1;
                break;
            }
        }
        var line = U.getLine("player_change_clothes", 100 + index);
        if (line == null) {
            return;
        }
        var bone_list = line[player_change_clothes_bone];
        var part_list = line[player_change_clothes_part_name];
        for (var i = 0; i < bone_list.length; ++i) {
            var ret = U.changeCloth(Logic.player.dragon, Logic.player.dragon_name, bone_list[i], part_list[i]);
            if (!ret) {
                break;
            }
        }
    };
    GameView.prototype.onLevelupPlayerSkill = function (skill_id) {
        if (Logic.player.skills[skill_id - 1].level == 1) {
            this.refreshPlayerClothes();
        }
    };
    GameView.prototype.refreshAllAboutMoney = function () {
        this.ui_main.refreshMoney();
        if (this.ui_shop) {
            this.ui_shop.refreshMoney();
        }
    };
    GameView.prototype.refreshAllAboutPeach = function () {
        this.ui_main.refreshPeach();
    };
    GameView.prototype.runGetCoinAnim = function (dropCoinObj) {
        var removeCoinFunc = function (dropCoinObj) {
            this.gameLayer.removeChild(dropCoinObj.coin);
            dropCoinObj.addCoinMoney();
            this.refreshAllAboutMoney();
        };
        var iRandMoveDelay = Utils.RandInt(10, 500);
        var posX = this.ui_main.iconMoneyBig.x + 15;
        var posY = this.ui_main.iconMoneyBig.y + 35;
        var coin = dropCoinObj.coin;
        var tw = egret.Tween.get(coin);
        tw.wait(iRandMoveDelay).to({ x: posX, y: posY }, 300).call(removeCoinFunc, this, [dropCoinObj]);
        if (dropCoinObj.money < 1) {
            return;
        }
        var _clear = function () {
            this.gameTopLayer.removeChild(coin_text);
        };
        var coin_text = new egret.BitmapText();
        coin_text.spriteSheet = RES.getRes("zi3_json");
        coin_text.text = Utils.bigNumber(dropCoinObj.money);
        coin_text.x = dropCoinObj.coin.x - coin_text.width / 2;
        coin_text.y = dropCoinObj.coin.y - 60;
        coin_text.alpha = 1.0;
        this.gameTopLayer.addChild(coin_text);
        var tw = egret.Tween.get(coin_text);
        tw.to({ y: coin_text.y - 150, alpha: 0.2 }, 700).call(_clear, this);
    };
    GameView.prototype.tick = function () {
        for (var i = 0; i < this.drop_coins.length;) {
            var alive = this.drop_coins[i].tick();
            if (!alive) {
                var dp = this.drop_coins.splice(i, 1)[0];
                this.runGetCoinAnim(dp);
            }
            if (alive) {
                ++i;
            }
        }
        if (this.touch_holding && Logic.holding_tap > 0) {
            this.player_fake_counter += 1;
            if (this.player_fake_counter == 2 || this.player_fake_counter == 4) {
                this.makeDamageToMonster("HoldingHit");
            }
            if (this.player_fake_counter == 4) {
                this.player_fake_counter = 0;
                this.playPlayerAction();
                this.playHoldingTapAction();
                this.stopHoldingHintAnim();
            }
        }
    };
    GameView.prototype.showLevelUpAnim = function (posX, posY) {
        if (this.level_up_anim == null) {
            this.level_up_anim = Utils.createDragonBone("tx003");
        }
        else {
            this.gameTopLayer.removeChild(this.level_up_anim.getDisplay());
        }
        //this.level_up_anim.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onLevelUpAnimEnd);
        var dd = this.level_up_anim.getDisplay();
        dd.x = posX;
        dd.y = posY;
        this.gameTopLayer.addChild(dd);
        var upSound = RES.getRes("upgrade");
        upSound.play();
        this.level_up_anim.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.showHeroLevelUpAnim = function (index) {
        if (this.hero_levelup_anim == null) {
            this.hero_levelup_anim = Utils.createDragonBone("tx002");
        }
        else {
            this.gameLayer.removeChild(this.hero_levelup_anim.getDisplay());
        }
        var hero_id = Logic.heroes[index].hero_id;
        var posX = this.fArrayHeroPosX[hero_id - 1];
        var posY = Utils.offset(G.base_y + this.fArrayHeroPosY[hero_id - 1]);
        var dd = this.hero_levelup_anim.getDisplay();
        dd.x = posX;
        dd.y = posY;
        this.gameLayer.addChild(dd);
        this.hero_levelup_anim.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.onMonumentAnimComplete = function (evt) {
        evt.target.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.stopHeroMonumentAnim = function (index) {
        var monument_anim = this.hero_monuments[index];
        if (monument_anim == null) {
            return;
        }
        monument_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        monument_anim.animation.stop();
        monument_anim.getDisplay().visible = false;
    };
    GameView.prototype.showHeroMonumentAnim = function (index) {
        var monument_anim = this.hero_monuments[index];
        if (monument_anim == null) {
            monument_anim = Utils.createDragonBone("tx008");
            this.hero_monuments[index] = monument_anim;
        }
        else {
            this.gameLayer.removeChild(monument_anim.getDisplay());
            if (this.guide_hand_anim != null) {
                this.guide_hand_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
            }
        }
        var hero_id = Logic.heroes[index].hero_id;
        var posX = this.fArrayHeroPosX[hero_id - 1];
        var posY = Utils.offset(G.base_y + this.fArrayHeroPosY[hero_id - 1]);
        var dd = monument_anim.getDisplay();
        dd.x = posX;
        dd.y = posY;
        dd.visible = true;
        this.gameLayer.addChild(dd);
        monument_anim.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onMonumentAnimComplete);
        monument_anim.animation.gotoAndPlay("sw");
    };
    GameView.prototype.showHeroComeOutAnim = function (index) {
        this.initHeroComeoutAnim();
        var dd = this.hero_comeout_dragon.getDisplay();
        dd.visible = true;
        var hero_id = Logic.heroes[index].hero_id;
        dd.x = this.fArrayHeroPosX[hero_id - 1];
        dd.y = Utils.offset(G.base_y + this.fArrayHeroPosY[hero_id - 1]);
        this.hero_comeout_dragon.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.reviveHero = function (hero_id) {
        var index = Logic.getHeroIndexByID(hero_id);
        this.stopHeroMonumentAnim(index);
        this.showHeroComeOutAnim(index);
        var comeout = function () {
            this.visible = true;
        };
        this.heroes[index].animation.gotoAndPlay("huxi");
        var dd = this.heroes[index].getDisplay();
        var tw = egret.Tween.get(dd);
        tw.wait(500).call(comeout, dd);
    };
    GameView.prototype.bossHitHero = function () {
        var iKilledHeroId = Logic.killHero();
        if (iKilledHeroId == null) {
            return;
        }
        var index = Logic.getHeroIndexByID(iKilledHeroId);
        this.heroes[index].getDisplay().visible = false;
        this.heroes[index].animation.stop();
        this.showHeroMonumentAnim(index);
        this.ui_main.killOneHero(index);
        this.last_kill_hero_id = iKilledHeroId;
    };
    GameView.prototype.secTick = function () {
        // Tick proctect hero time.
        this.ui_main.protectHeroTick();
        // Tick skill CD.
        this.ui_main.skillTick();
        // Tick boss time.
        this.ui_main.bossTick();
        // Tick difficulty time.
        this.ui_main.difficultyTick();
        this.bossHitHero();
        // Make hero damage.
        if (this.heroes.length > 0) {
            this.makeDamageToMonster("Hero_Damage");
        }
        var currentTime = Utils.time();
        for (var i = 0; i < this.heroes.length; ++i) {
            var d = this.heroes[i];
            if (d == null) {
                continue;
            }
            if (Logic.heroes[i].dead == false) {
                var span = 6;
                if (Logic.player.skills[3].begin_time > 0) {
                    // Hero attack buff is lasting.
                    span = Math.floor(span / (1 + GE.getData(ET.HERO_SPEED)));
                    if (span < 1) {
                        span = 1;
                    }
                }
                var tmp = (Math.floor(currentTime) + i) % span;
                if (tmp == 0) {
                    d.animation.gotoAndPlay("gj01");
                }
            }
            else {
                this.ui_main.refreshHeroReviveTick(i);
            }
        }
        this.sec_counter += 1;
        var period_time = 1;
        if (this.sec_counter % period_time == 0) {
            this.damage_counter.push(this.period_damage);
            if (this.damage_counter.length > 3) {
                this.damage_counter.splice(0, this.damage_counter.length - 3);
            }
            this.period_damage = 0;
            var sum = 0;
            for (var i = 0; i < this.damage_counter.length; ++i) {
                sum += this.damage_counter[i];
            }
            this.period_damage_average = sum / this.damage_counter.length / period_time;
            this.ui_main.refreshLabelAllDamage();
        }
        if (this.sec_counter % G.save_time_local == 0) {
            Net.saveDataLocal();
        }
        if (this.sec_counter % G.save_time_net == 0) {
            Net.saveData2();
        }
    };
    GameView.prototype.onHeroAnimationComplete = function (evt) {
        //evt.target.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        evt.target.animation.gotoAndPlay("huxi");
    };
    GameView.prototype.onGuideHandComplete = function (evt) {
        evt.target.animation.gotoAndPlay("dj");
    };
    GameView.prototype.showHandAnim = function (posX, posY) {
        if (this.guide_hand_anim == null) {
            this.guide_hand_anim = Utils.createDragonBone("tx005");
        }
        else {
            this.gameTopLayer.removeChild(this.guide_hand_anim.getDisplay());
            this.guide_hand_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        }
        var dd = this.guide_hand_anim.getDisplay();
        dd.x = posX;
        dd.y = posY;
        dd.visible = true;
        this.gameTopLayer.addChild(dd);
        this.guide_hand_anim.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onGuideHandComplete);
        this.guide_hand_anim.animation.gotoAndPlay("dj");
    };
    GameView.prototype.stopHandAnim = function () {
        if (this.guide_hand_anim == null) {
            return;
        }
        this.guide_hand_anim.removeAllEventListeners(dragonBones.AnimationEvent.COMPLETE);
        this.guide_hand_anim.animation.stop();
        this.guide_hand_anim.getDisplay().visible = false;
    };
    GameView.prototype.showLowDiamondHint = function () {
        if (!no_any_pay) {
            this.openShopPanel();
        }
        this.showToast("钻石不足!");
    };
    GameView.prototype.showToast = function (strInfo) {
        var uiToast = new Toast();
        uiToast.m_strToastInfo = strInfo;
        uiToast.ui_parent = this.guiLayer;
        uiToast.x = G.width / 2 - 92.5;
        uiToast.y = G.height - 250;
        this.guiLayer.addElement(uiToast);
    };
    GameView.newInstance = function () {
        if (GameView.gameView != null) {
        }
        GameView.gameView = new GameView();
        /*
        if ( G.data_ready ) {
            Logic.refreshAll()
            Logic.initStep()
            GameView.gameView.init()
        }
        */
        return GameView.gameView;
    };
    GameView.instance = function () {
        if (GameView.gameView == null) {
        }
        return GameView.gameView;
    };
    GameView.prototype.setProgress = function (current, total) {
    };
    return GameView;
})(egret.Sprite);
GameView.prototype.__class__ = "GameView";
