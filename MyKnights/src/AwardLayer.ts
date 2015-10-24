enum AWARD_TYPE
{
    UNKNOWN = 0,
    QUEST = 1,
    WAR_REPORT,
    ARENA,
    JOB_TEAM_BATTLE,
}

enum AWARD_INDEX
{
    MONEY = 1,
    DIAMOND,
    ARENA_SCORES,
    EXP,
    JOB_CARDS,
    ITEMS,
    AWARD_END,
}

class JobCardAwardInfo {
    public card_level:number = 0;
    public card_type:number = 0;
}

class AwardLayer extends egret.DisplayObjectContainer {
	
	private parent_layer = null;

    public award_type:AWARD_TYPE = AWARD_TYPE.UNKNOWN;

    public current_award_index:AWARD_INDEX = AWARD_INDEX.MONEY;

    public money:number = 0;
    public diamond:number = 0;
    public arena_scores:number = 0;
    public exp:number = 0;
    public items:Array<number> = [];
    public job_cards:Array<JobCardAwardInfo> = [];

    private anim_layer:egret.DisplayObjectContainer;
	private talk_label:egret.TextField;

	public constructor() {
        super();
    }

    private clearAllAwards() {
        this.money = 0;
        this.diamond = 0;
        this.arena_scores = 0;
        this.exp = 0;

        this.job_cards = [];
        this.items = [];
    }

    public setQuestAward() {
        this.clearAllAwards();

        this.award_type = AWARD_TYPE.QUEST;

        var type = QuestLayer.last_quest_type;
        var city_id = QuestLayer.last_city_id;

        var city_line = Utils.getLine("city_list", city_id);
        if (city_line != null) {
            // 0:反复刷 1：正常打 2：攻击中 3：已被敌人攻占
            if (type == 0) {
                this.money = city_line[city_list_money_award];
                this.exp = city_line[city_list_exp_award];
            }
            else if (type == 1) {
                this.money = city_line[city_list_money_award];
                this.exp = city_line[city_list_exp_award];
            }
        }
    }

    public setWarReportAward(city_id:number, city_status:CITY_STATUS) {
        this.clearAllAwards();

        this.award_type = AWARD_TYPE.WAR_REPORT;

        var city_line = Utils.getLine("city_list", city_id);
        if (city_line != null) {
            if (city_status == CITY_STATUS.ENEMY_OCCUPIED) {
                this.money = city_line[city_list_enemy_money];
                this.exp = city_line[city_list_enemy_exp];
            }
            else {
                this.money = city_line[city_list_attack_money];
                this.exp = city_line[city_list_attack_exp];
            }
        }
    }

    public setArenaAward(scores:number) {
        this.clearAllAwards();

        this.award_type = AWARD_TYPE.ARENA;
        this.arena_scores = scores;
    }

    public setJobTeamBattleAward() {
        this.clearAllAwards();

        this.award_type = AWARD_TYPE.JOB_TEAM_BATTLE;
    }
    public addJobCard(card_level:number, card_type:number) {
        var card = new JobCardAwardInfo();
        card.card_level = card_level;
        card.card_type = card_type;

        this.job_cards.push(card);
    }

    public test() {
        this.clearAllAwards();

        for (var i = 0; i < 5; i++) {
            var knight_info = new Knight_Position_Info();
            knight_info.level = 3;
            
            knight_info.exp = 1;
            knight_info.exp_max = 100;

            Logic.last_knights_team[i] = knight_info; 
        }

        this.award_type = AWARD_TYPE.UNKNOWN;

        this.money = 10;
        this.diamond = 20;
        this.arena_scores = 30;
        this.exp = 40;

        this.addJobCard(1, 1);
        this.addJobCard(2, 2);
        this.addJobCard(3, 3);
    }

    public showAwardAnim(parent) {
    	this.parent_layer = parent;
        this.parent_layer.addChild(this);

        var mask_sprite:egret.Sprite = new egret.Sprite();
        mask_sprite.graphics.beginFill(0x000000, 0.5);
        mask_sprite.graphics.drawRect(0, 0, G.win_width, G.win_height);
        mask_sprite.graphics.endFill();
        mask_sprite.width = G.win_width;
        mask_sprite.height = G.win_height;
        mask_sprite.touchEnabled = true;
        this.addChild(mask_sprite);

        this.anim_layer = new egret.DisplayObjectContainer();
        this.anim_layer.x = 0;
        this.anim_layer.y = 0;
        this.anim_layer.width = G.win_width;
        this.anim_layer.height = G.win_height;
        this.addChild(this.anim_layer);

        this.current_award_index = AWARD_INDEX.MONEY;
        this.showNextAnim();
    }

    private showMoneyAnim() {
        var money_icon = new egret.Bitmap();
        money_icon.texture = RES.getRes("money_1_png");
        money_icon.anchorX = 0.5;
        money_icon.anchorY = 0.5;
        money_icon.x = G.win_width/2;
        money_icon.y = G.win_height/2;
        this.anim_layer.addChild(money_icon);

        var money_text:egret.TextField = new egret.TextField();
        money_text.width = 200;
        money_text.height = 30;
        money_text.anchorX = 0.5;
        money_text.anchorY = 0;
        money_text.x = G.win_width/2;
        money_text.y = G.win_height/2 + money_icon.height/2;
        money_text.textColor = 0xF7EDBC;
        money_text.size = 30;
        money_text.fontFamily = "Arial";
        money_text.text = "X" + this.money;
        money_text.textAlign = egret.HorizontalAlign.CENTER;
        money_text.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.anim_layer.addChild(money_text);

        this.anim_layer.alpha = 0;

        var tw = egret.Tween.get(this.anim_layer);
        tw.to({alpha:1}, 200).wait(600).to({alpha:0}, 200);

        var anim_end_timer:egret.Timer = new egret.Timer(1000,1);
        anim_end_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.showNextAnim, this);
        anim_end_timer.start();
    }
    private showDiamondAnim() {
        var money_icon = new egret.Bitmap();
        money_icon.texture = RES.getRes("diamond_1_png");
        money_icon.anchorX = 0.5;
        money_icon.anchorY = 0.5;
        money_icon.x = G.win_width/2;
        money_icon.y = G.win_height/2;
        this.anim_layer.addChild(money_icon);

        var money_text:egret.TextField = new egret.TextField();
        money_text.width = 200;
        money_text.height = 30;
        money_text.anchorX = 0.5;
        money_text.anchorY = 0;
        money_text.x = G.win_width/2;
        money_text.y = G.win_height/2 + money_icon.height/2;
        money_text.textColor = 0xF7EDBC;
        money_text.size = 30;
        money_text.fontFamily = "Arial";
        money_text.text = "X" + this.diamond;
        money_text.textAlign = egret.HorizontalAlign.CENTER;
        money_text.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.anim_layer.addChild(money_text);

        this.anim_layer.alpha = 0;

        var tw = egret.Tween.get(this.anim_layer);
        tw.to({alpha:1}, 200).wait(600).to({alpha:0}, 200);

        var anim_end_timer:egret.Timer = new egret.Timer(1000,1);
        anim_end_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.showNextAnim, this);
        anim_end_timer.start();
    }
    private showArenaScoreAnim() {
        var money_icon = new egret.Bitmap();
        money_icon.texture = RES.getRes("honor_icon_png");
        money_icon.anchorX = 0.5;
        money_icon.anchorY = 0.5;
        money_icon.x = G.win_width/2;
        money_icon.y = G.win_height/2;
        this.anim_layer.addChild(money_icon);

        var money_text:egret.TextField = new egret.TextField();
        money_text.width = 200;
        money_text.height = 30;
        money_text.anchorX = 0.5;
        money_text.anchorY = 0;
        money_text.x = G.win_width/2;
        money_text.y = G.win_height/2 + money_icon.height/2;
        money_text.textColor = 0xF7EDBC;
        money_text.size = 30;
        money_text.fontFamily = "Arial";
        money_text.text = "X" + this.arena_scores;
        money_text.textAlign = egret.HorizontalAlign.CENTER;
        money_text.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.anim_layer.addChild(money_text);

        this.anim_layer.alpha = 0;

        var tw = egret.Tween.get(this.anim_layer);
        tw.to({alpha:1}, 200).wait(600).to({alpha:0}, 200);

        var anim_end_timer:egret.Timer = new egret.Timer(1000,1);
        anim_end_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.showNextAnim, this);
        anim_end_timer.start();
    }
    private showExpAnim() {
        var knight_bg_span = (G.win_width - 202*5) / 5;
        
        var knight_head_start:number = 0;
        var knight_head_span:number = 0;

        var knight_exp_start:number = 0;
        var knight_exp_span:number = 0;

        var SELF_KNIGHT_SMALL_EXP_WIDTH:number = 112;

        for (var i = 0; i < 5; i++) {
            var knight_bg = new egret.Bitmap()
            knight_bg.texture = RES.getRes("head_bg_png");
            knight_bg.x = knight_bg_span/2 + i * knight_bg.width + i * knight_bg_span;
            knight_bg.y = G.win_height/2;
            this.anim_layer.addChild(knight_bg);

            if (knight_head_start == 0) {
                knight_head_start = knight_bg.x + knight_bg.width/2;
                knight_head_span = knight_bg.width + knight_bg_span;

                knight_exp_start = knight_bg.x + (knight_bg.width - SELF_KNIGHT_SMALL_EXP_WIDTH)/2;
                knight_exp_span = knight_bg.width + knight_bg_span;
            }
        }

        var max_level:number = 1;
        var player_levelup:boolean = false;

        // Add head icon of knights
        for (var i = 0; i < 5; i++) {
            var knight = Logic.getKnightOnPosition(i);
            if (knight == null) {
                continue;
            }

            var last_knight = Logic.last_knights_team[i];

            // Add head icon of knights
            var knight_head = new egret.Bitmap();
            knight_head.texture = RES.getRes(Utils.getKnightHeadNorName(knight.type, knight.is_player));
            knight_head.anchorX = 0.5;
            knight_head.anchorY = 0.5;
            knight_head.x = knight_head_start + i * knight_head_span;
            knight_head.y = G.win_height/2 - 8;
            this.anim_layer.addChild(knight_head);

            // Add knight point icon
            var point_img_name = Utils.getKnightPointImgName(knight.attack_factor/10000, knight.defense_factor/10000, knight.hp_factor/10000);

            var knight_point1 = new egret.Bitmap();
            knight_point1.texture = RES.getRes(point_img_name);
            knight_point1.x = knight_exp_start - 21 + i * knight_exp_span;
            knight_point1.y = G.win_height/2 - 29 + 114;
            this.anim_layer.addChild(knight_point1);

            var knight_point2 = new egret.Bitmap();
            knight_point2.texture = RES.getRes(point_img_name);
            knight_point2.x = knight_exp_start - 21 + 142 + i * knight_exp_span;
            knight_point2.y = G.win_height/2 - 29 + 114;
            this.anim_layer.addChild(knight_point2);

            // Add exp bar
            var exp_bar:egret.Bitmap = new egret.Bitmap();
            exp_bar.texture = RES.getRes("exp_bar_png");
            exp_bar.scale9Grid = new egret.Rectangle(9,7,29,1);
            exp_bar.width = SELF_KNIGHT_SMALL_EXP_WIDTH;
            exp_bar.height = 15;
            exp_bar.x = knight_exp_start + i * knight_exp_span;
            exp_bar.y = G.win_height/2 - 59 + 114;
            this.anim_layer.addChild(exp_bar);

            // Add level number
            var level_text:egret.TextField = new egret.TextField();
            level_text.anchorX = 0.5;
            level_text.anchorY = 0.5;
            level_text.size = 20;
            level_text.width = 120;
            level_text.height = 30;
            level_text.text = "Lv." + last_knight.level;
            level_text.fontFamily = "Arial";
            level_text.textAlign = egret.HorizontalAlign.CENTER;
            level_text.verticalAlign = egret.VerticalAlign.MIDDLE;
            level_text.textColor = 0x00000;
            level_text.bold = true;
            level_text.italic = true;
            level_text.x = knight_head_start + i * knight_head_span;
            level_text.y = G.win_height/2 - 20 + 114;
            this.anim_layer.addChild(level_text);

            var start_level:number = last_knight.level;
            var end_level:number = knight.level;
            var start_percent:number = last_knight.exp/last_knight.exp_max;
            var end_percent:number = knight.exp/knight.exp_max;

            var mask = new egret.Rectangle(0, 0, start_percent*SELF_KNIGHT_SMALL_EXP_WIDTH, 15);
            exp_bar.mask = mask;

            var level_up = function(level:number) {
                this.text = "Lv." + level;
            }
            var mask_tw = egret.Tween.get(mask).wait(200);
            var text_tw = egret.Tween.get(level_text).wait(200);
            for (var j = start_level; j < end_level; j++) {
                mask_tw = mask_tw.to({width:SELF_KNIGHT_SMALL_EXP_WIDTH}, 200).to({width:0}, 10);
                text_tw = text_tw.wait(210).call(level_up, level_text, [j+1]);
            }
            mask_tw = mask_tw.to({width:end_percent*SELF_KNIGHT_SMALL_EXP_WIDTH}, 200);

            if (end_level - start_level + 1 > max_level) {
                max_level = end_level - start_level + 1
            }

            if (knight.is_player && end_level > start_level) {
                player_levelup = true;
            }
        }

        if (player_levelup) {
            // Add level up money
            var money_icon = new egret.Bitmap();
            money_icon.texture = RES.getRes("money_1_png");
            money_icon.anchorX = 0.5;
            money_icon.anchorY = 0.5;
            money_icon.x = G.win_width/2;
            money_icon.y = G.win_height/2 - 150;
            this.anim_layer.addChild(money_icon);

            var money_text:egret.TextField = new egret.TextField();
            money_text.width = 400;
            money_text.height = 30;
            money_text.anchorX = 0.5;
            money_text.anchorY = 0;
            money_text.x = G.win_width/2;
            money_text.y = G.win_height/2 + money_icon.height/2 - 170;
            money_text.textColor = 0xF7EDBC;
            money_text.size = 30;
            money_text.fontFamily = "Arial";
            money_text.text = "升级奖励: 10000金币";
            money_text.textAlign = egret.HorizontalAlign.CENTER;
            money_text.verticalAlign = egret.VerticalAlign.MIDDLE;
            this.anim_layer.addChild(money_text);
        }

        var anim_time = max_level * 210;
        this.anim_layer.alpha = 0;

        var tw = egret.Tween.get(this.anim_layer);
        tw.to({alpha:1}, 200).wait(600+anim_time).to({alpha:0}, 200);

        var anim_end_timer:egret.Timer = new egret.Timer(1000+anim_time,1);
        anim_end_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.showNextAnim, this);
        anim_end_timer.start();
    }
    private showJobCardsAnim() {
        if (this.job_cards.length == 0) {
            this.showNextAnim();

            return;
        }

        var card = this.job_cards[0];
        this.job_cards.splice(0, 1);

        var card_bg = new egret.Bitmap();
        card_bg.texture = RES.getRes(Utils.getJobCardImgName(card.card_level));
        card_bg.anchorX = 0.5;
        card_bg.anchorY = 0.5;
        card_bg.x = G.win_width/2;
        card_bg.y = G.win_height/2;
        this.anim_layer.addChild(card_bg);

        var card_type = new egret.Bitmap();
        card_type.texture = RES.getRes(Utils.getKnightBigImgName(card.card_type));
        card_type.anchorX = 0.5;
        card_type.anchorY = 0.5;
        card_type.x = G.win_width/2;
        card_type.y = G.win_height/2;
        this.anim_layer.addChild(card_type);

        this.anim_layer.alpha = 0;

        var tw = egret.Tween.get(this.anim_layer);
        tw.to({alpha:1}, 200).wait(600).to({alpha:0}, 200);

        var anim_end_timer:egret.Timer = new egret.Timer(1000,1);
        anim_end_timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.showNextAnim, this);
        anim_end_timer.start();
    }
    private showItemsAnim() {
        if (this.items.length == 0) {
            this.showNextAnim();

            return;
        }

        // TODO: show item anim
    }

    private showNextAnim() {
        this.anim_layer.removeChildren();
        
        if (this.current_award_index == AWARD_INDEX.MONEY) {
            this.current_award_index = AWARD_INDEX.DIAMOND;

            if (this.money == 0) {
                this.showNextAnim();
            }
            else {
                this.showMoneyAnim();
            }
        }
        else if (this.current_award_index == AWARD_INDEX.DIAMOND) {
            this.current_award_index = AWARD_INDEX.ARENA_SCORES;

            if (this.diamond == 0) {
                this.showNextAnim();
            }
            else {
                this.showDiamondAnim();
            }
        }
        else if (this.current_award_index == AWARD_INDEX.ARENA_SCORES) {
            this.current_award_index = AWARD_INDEX.EXP;

            if (this.arena_scores == 0) {
                this.showNextAnim();
            }
            else {
                this.showArenaScoreAnim();
            }
        }
        else if (this.current_award_index == AWARD_INDEX.EXP) {
            this.current_award_index = AWARD_INDEX.JOB_CARDS;

            if (this.exp == 0) {
                this.showNextAnim();
            }
            else {
                this.showExpAnim();
            }
        }
        else if (this.current_award_index == AWARD_INDEX.JOB_CARDS) {
            if (this.job_cards.length == 0) {
                this.current_award_index = AWARD_INDEX.ITEMS;

                this.showNextAnim();
            }
            else {
                this.showJobCardsAnim();
            }
        }
        else if (this.current_award_index == AWARD_INDEX.ITEMS) {
            if (this.items.length == 0) {
                this.current_award_index = AWARD_INDEX.AWARD_END;

                this.showNextAnim();
            }
            else {
                this.showItemsAnim();
            }
        }
        else {
            // this.current_award_index == AWARD_INDEX.AWARD_END
            this.close();
        }
    }

    private close() {
        this.parent_layer.removeChild(this);

        if (this.award_type == AWARD_TYPE.UNKNOWN) {
            // Nothing to do
        }
        else if (this.award_type == AWARD_TYPE.QUEST) {
            G.main_director.enterQuestView();
        }
        else if (this.award_type == AWARD_TYPE.WAR_REPORT) {
            // Nothing to do
        }
        else if (this.award_type == AWARD_TYPE.ARENA) {
            G.main_director.enterArenaView();
        }
        else if (this.award_type == AWARD_TYPE.JOB_TEAM_BATTLE) {
            G.main_director.enterJobView();
        }
    }
}

