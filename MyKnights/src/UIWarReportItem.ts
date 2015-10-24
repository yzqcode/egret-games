class UIWarReportItem extends egret.gui.Panel {
	public label_city_name:egret.gui.Label;
    public label_status:egret.gui.Label;
    public label_city_desc:egret.gui.Label;

    public icon_city:egret.gui.UIAsset;
    public icon_finish:egret.gui.UIAsset;

    public label_difficulty_des:egret.gui.Label;
    public label_exp_award:egret.gui.Label;
    public label_money_award:egret.gui.Label;

    public label_stamina_fee:egret.gui.Label;
    public label_index:egret.gui.Label;

    public btn_goto:egret.gui.Button;
    public btn_get_award:egret.gui.Button;
    
    public index:number;
    public index_max:number;
    public war_report_info:WarReportData;

    public ui_war_report:UIWarReport = null;

    public constructor() {
        super();
        this.skinName = "skins.UIWarReportItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.x = this.width * this.index;

        this.btn_goto.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGotoWarLayer, this);
        this.btn_get_award.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetWarAward, this);

        this.refreshWarReportInfo();
    }

    public setIndex(war_report_info:WarReportData, index:number, index_max:number) {
        this.index = index;
        this.index_max = index_max;
        this.war_report_info = war_report_info;
    }

    public refreshWarReportInfo() {
        this.label_index.text = "" + (this.index+1) + "/" + this.index_max;

        var area_id = this.war_report_info.area_id;
        var city_index = this.war_report_info.city_index;
        var city_status = this.war_report_info.city_status;

        var area_line = Utils.getLine("area_list", area_id);
        if (area_line == null) {
            return;
        }

        var city_id = area_line[area_list_cities][city_index];
        var city_line = Utils.getLine("city_list", city_id);
        if (city_line == null) {
            return;
        }

        this.label_city_name.text = "" + city_line[city_list_name];
        this.label_city_desc.text = "" + city_line[city_list_desc];

        this.icon_city.source = "rand_building_" + city_line[city_list_pic] + "_png";

        this.label_stamina_fee.text = "" + city_line[city_list_stamina_fee];

        var enemy_city_id = 0;
        if (this.war_report_info.city_status == CITY_STATUS.ENEMY_OCCUPIED) {
            this.label_status.text = "已被敌人攻占";

            this.label_money_award.text = "" + city_line[city_list_enemy_money];
            this.label_exp_award.text = "" + city_line[city_list_enemy_exp];

            var area_line = Utils.getLine("area_list", Logic.area_id);
            if (area_line == null) {
                return;
            }
            enemy_city_id = area_line[area_list_cities][Logic.city_index];
        }
        else {
            this.label_status.text = "被占领中......";

            this.label_money_award.text = "" + city_line[city_list_attack_money];
            this.label_exp_award.text = "" + city_line[city_list_attack_exp];

            var area_id = Logic.area_id;
            var city_index = Logic.city_index-1;
            if (city_index < 0) {
                area_id = Logic.area_id-1;
                city_index = 10;
            }

            var area_line = Utils.getLine("area_list", area_id);
            if (area_line == null) {
                return;
            }
            enemy_city_id = area_line[area_list_cities][city_index];
        }

        city_line = Utils.getLine("city_list", enemy_city_id);
        if (city_line == null) {
            return;
        }

        var min_level_hint = city_line[city_list_level_hint];
        var strDifficultyDes = "困难";
        if (Logic.getKnightsLevelSum() >= min_level_hint) {
            strDifficultyDes = "简单";
        }
        this.label_difficulty_des.text = strDifficultyDes;

        if (this.war_report_info.is_complete) {
            this.label_status.text = "";

            this.btn_get_award.visible = true;
            this.icon_finish.visible = true;

            this.btn_goto.visible = false;
        }
        else {
            this.btn_get_award.visible = false;
            this.icon_finish.visible = false;

            this.btn_goto.visible = true;
        }
    }

    public refreshReportStatus() {
        if (this.war_report_info.is_complete == true 
                || this.war_report_info.city_status != CITY_STATUS.BE_ATTACKING) {
            return;
        }

        var current_time = Utils.time();
        var left_time = this.war_report_info.city_be_attack_end_time - current_time;
        if (left_time <= 0) {
            this.war_report_info.city_status = CITY_STATUS.ENEMY_OCCUPIED;
            this.war_report_info.city_be_attack_end_time = 0;
            this.label_status.text = "已被敌人攻占";

            return;
        }

        this.label_status.text = "被占领中 " + Utils.getTimeStr(left_time);
    }

    public onGetWarAward() {
        this.ui_war_report.getWarReportAward(this.war_report_info.report_id);
    }

    public onGotoWarLayer() {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.goToAreaLayer(this.war_report_info.area_id);
        }

        this.ui_war_report.onClose(null);
    }
}

