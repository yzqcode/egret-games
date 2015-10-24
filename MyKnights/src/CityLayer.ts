enum CITY_STATUS
{
    LOCKED = 0,
    SELF_OCCUPIED = 1,
    BE_ATTACKING = 2,
    ENEMY_OCCUPIED = 3,
    OPEN = 4,
}

class CityStatusInfo {
    public city_status:CITY_STATUS = CITY_STATUS.LOCKED;
    
    // BE_ATTACKING
    public city_be_attack_end_time:number = 0;
    
    // SELF_OCCUPIED
    public city_collect_money_end_time:number = 0;
}

class CityLayer extends egret.DisplayObjectContainer {
    public area_layer:AreaLayer;
    public area_id:number;
    public city_index:number;

    private city_id:number;
    private city_type:number;
    private city_money:number;

    private city_status_info:CityStatusInfo = null;

    private city_img:egret.Bitmap = null;
    private city_light_img:egret.Bitmap = null;
    private money_img:egret.Bitmap = null;
    private battle_img:egret.Bitmap = null;
    private money_bar_img:egret.Bitmap = null;
    private money_bar_bg_img:egret.Bitmap = null;


    public constructor() {
        super();
    }

    public initCityLayer(area_layer:AreaLayer, area_id:number, city_index:number, city_id:number, city_status_info:CityStatusInfo) {
        this.area_layer = area_layer;
        this.area_id = area_id;
        this.city_index = city_index;
        this.city_id = city_id;
        this.city_status_info = city_status_info;

        var city_line = Utils.getLine("city_list", city_id);
        if (city_line == null) {
            return;
        }

        this.width = 0;
        this.height = 0;
        this.x = city_line[city_list_pos_x] * G.win_width;
        this.y = city_line[city_list_pos_y] * G.win_height;
        this.area_layer.addChild(this);

        this.city_type = city_line[city_list_pic];
        this.city_money = city_line[city_list_money_collect];

        this.city_light_img = new egret.Bitmap();
        this.city_light_img.texture = RES.getRes(this.getCityLightImgName());
        this.city_light_img.anchorX = 0.5;
        this.city_light_img.anchorY = 0;
        this.city_light_img.x = 0;
        this.city_light_img.y = 0;
        this.city_light_img.visible = false;
        this.addChild(this.city_light_img);

        this.battle_img = new egret.Bitmap();
        this.battle_img.texture = RES.getRes("battle_png");
        this.battle_img.anchorX = 0.5;
        this.battle_img.anchorY = 1.0;
        this.battle_img.x = 0;
        this.battle_img.y = 10;
        this.battle_img.visible = false;
        this.addChild(this.battle_img);

        this.money_bar_bg_img = new egret.Bitmap();
        this.money_bar_bg_img.texture = RES.getRes("collect_bar_bg_png");
        this.money_bar_bg_img.scale9Grid = new egret.Rectangle(7,6,26,1);
        this.money_bar_bg_img.anchorX = 0.5;
        this.money_bar_bg_img.anchorY = 1.0;
        this.money_bar_bg_img.width = 65;
        this.money_bar_bg_img.height = 13;
        this.money_bar_bg_img.x = 0;
        this.money_bar_bg_img.y = 10;
        this.money_bar_bg_img.visible = false;
        this.addChild(this.money_bar_bg_img);

        this.money_bar_img = new egret.Bitmap();
        this.money_bar_img.texture = RES.getRes("collect_bar_png");
        this.money_bar_img.scale9Grid = new egret.Rectangle(5,5,23,1);
        this.money_bar_img.anchorX = 0.5;
        this.money_bar_img.anchorY = 1.0;
        this.money_bar_img.width = 63;
        this.money_bar_img.height = 11;
        this.money_bar_img.x = 0;
        this.money_bar_img.y = 9;
        this.money_bar_img.visible = false;
        this.addChild(this.money_bar_img);

        this.money_img = new egret.Bitmap();
        this.money_img.texture = RES.getRes("gold_icon_png");
        this.money_img.anchorX = 0.5;
        this.money_img.anchorY = 1.0;
        this.money_img.x = 0;
        this.money_img.y = 10;
        this.money_img.visible = false;
        this.addChild(this.money_img);
        this.money_img.touchEnabled = true;
        this.money_img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchCity, this);

        this.city_img = new egret.Bitmap();
        this.city_img.texture = RES.getRes(this.getCityLockedImgName());
        this.city_img.anchorX = 0.5;
        this.city_img.anchorY = 0;
        this.city_img.x = 0;
        this.city_img.y = 0;
        this.city_img.touchEnabled = false;
        this.addChild(this.city_img);
        this.city_img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchCity, this);

        this.initCityStatus();
    }

    private initCityStatus() {
        this.city_img.touchEnabled = true;

        if (this.city_status_info.city_status == CITY_STATUS.ENEMY_OCCUPIED) {
            this.city_status_info.city_be_attack_end_time = 0;
        }
        else if (this.city_status_info.city_status == CITY_STATUS.BE_ATTACKING) {
            this.battle_img.visible = true;
        }
        else if (this.city_status_info.city_status == CITY_STATUS.SELF_OCCUPIED) {
            var current_time = Utils.time();
            if (current_time >= this.city_status_info.city_collect_money_end_time) {
                this.money_img.visible = true;
                this.city_status_info.city_collect_money_end_time = 0;
            }
            else {
                this.money_bar_bg_img.visible = true;
                this.money_bar_img.visible = true;

                var current_mask_width = (1 - (this.city_status_info.city_collect_money_end_time - current_time) / 7200)*63;
                this.money_bar_img.mask = new egret.Rectangle(0, 0, current_mask_width, 11);

                var tw = egret.Tween.get(this.money_bar_img.mask);
                var time = (this.city_status_info.city_collect_money_end_time - current_time) * 1000;
                tw.to({width:63}, time);
            }
        }
        else if (this.city_status_info.city_status == CITY_STATUS.LOCKED) {
            if (this.area_id == Logic.area_id && this.city_index == Logic.city_index) {
                this.city_status_info.city_status = CITY_STATUS.OPEN;
                this.city_light_img.visible = true;
            }
            else {
                this.city_img.touchEnabled = false;
            }
        }

        this.city_img.texture = RES.getRes(this.getCityImgName());
    }

    public refreshCityStatus() {
        if (this.city_status_info.city_status == CITY_STATUS.ENEMY_OCCUPIED
                || this.city_status_info.city_status == CITY_STATUS.LOCKED
                || this.city_status_info.city_status == CITY_STATUS.OPEN) {
            return;
        }

        if (this.city_status_info.city_status == CITY_STATUS.BE_ATTACKING) {
            var current_time = Utils.time();
            if (current_time >= this.city_status_info.city_be_attack_end_time
                    && this.city_status_info.city_be_attack_end_time > 0) {

                this.battle_img.visible = false;

                this.city_status_info.city_be_attack_end_time = 0;
            }
        }
        else if (this.city_status_info.city_status == CITY_STATUS.SELF_OCCUPIED) {
            var current_time = Utils.time();
            if (current_time >= this.city_status_info.city_collect_money_end_time
                    && this.city_status_info.city_collect_money_end_time > 0) {
                this.money_img.visible = true;

                this.money_bar_bg_img.visible = false;
                this.money_bar_img.visible = false;

                this.city_status_info.city_collect_money_end_time = 0;
            }
        }
    }

    private onTouchCity(evt) {
        if (this.city_status_info.city_status == CITY_STATUS.LOCKED) {
            return;
        }

        if (this.city_status_info.city_status == CITY_STATUS.BE_ATTACKING) {
            this.showCityDetailDlg();
        }
        else if (this.city_status_info.city_status == CITY_STATUS.ENEMY_OCCUPIED) {
            this.showCityDetailDlg();
        }
        else if (this.city_status_info.city_status == CITY_STATUS.SELF_OCCUPIED) {
            if (this.city_status_info.city_collect_money_end_time > 0) {
                this.showMoneyHintDlg();
            }
            else {
                this.startCollectMoney();
            }
        }
        else if (this.city_status_info.city_status == CITY_STATUS.OPEN) {
            this.showCityDetailDlg();
        }
    }

    public showMoneyHintDlg() {
        var hint_layer = new CityMoneyHintLayer();
        hint_layer.addCityMoneyHintLayer(this, this.city_money, this.city_status_info.city_collect_money_end_time);

        this.area_layer.setChildIndex(this, this.area_layer.city_top_index);
    }

    private showCityDetailDlg() {
        var quest_layer = G.main_director.current_layer;

        var city_dlg = new UICityDetailView();
        city_dlg.city_id = this.city_id;
        city_dlg.area_id = this.area_id;
        city_dlg.city_index = this.city_index;
        city_dlg.city_status = this.city_status_info.city_status;
        city_dlg.guiLayer = quest_layer.guiLayer;
        quest_layer.city_detail_view = city_dlg;
        quest_layer.guiLayer.addElement(city_dlg);
    }

    public startCollectMoney() {
        var quest_layer = G.main_director.current_layer;
        quest_layer.collectCityMoney(this.area_id, this.city_index);
    }
    public finishCollectCityMoney(money, next_time) {
        Logic.money = money;

        var quest_layer = G.main_director.current_layer;
        quest_layer.top_info_bar.refreshMoneyText();

        this.city_status_info.city_collect_money_end_time = next_time;
        
        this.money_img.visible = false;
        this.initCityStatus();
    }

    private getCityImgName() {
        if (this.city_status_info.city_status == CITY_STATUS.BE_ATTACKING) {
            return "enemy_city_" + this.city_type + "_png"
        }
        else if (this.city_status_info.city_status == CITY_STATUS.ENEMY_OCCUPIED) {
            return "enemy_city_" + this.city_type + "_png"
        }
        else if (this.city_status_info.city_status == CITY_STATUS.SELF_OCCUPIED) {
            return "self_city_" + this.city_type + "_png"
        }
        else if (this.city_status_info.city_status == CITY_STATUS.OPEN) {
            return "enemy_city_" + this.city_type + "_png"
        }
        
        return "locked_city_" + this.city_type + "_png"
    }

    private getCityLockedImgName() {
        return "locked_city_" + this.city_type + "_png"
    }
    private getCityLightImgName() {
        return "city_light_" + this.city_type + "_png"
    }
}

