//removeEventListener
var UICityDetailView = (function (_super) {
    __extends(UICityDetailView, _super);
    function UICityDetailView() {
        _super.call(this);
        this.city_status = 4 /* OPEN */;
        this.area_id = 0;
        this.city_index = 0;
        this.city_id = 0;
        this.enemy_city_id = 0;
        this.skinName = "skins.UICityDetailViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UICityDetailView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.setCityInfo();
        this.btn_fight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightBtnClicked, this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    __egretProto__.setCityInfo = function () {
        this.enemy_city_id = this.city_id;
        if (this.city_status == 3 /* ENEMY_OCCUPIED */) {
            var area_line = Utils.getLine("area_list", Logic.area_id);
            if (area_line != null) {
                this.enemy_city_id = area_line[area_list_cities][Logic.city_index];
            }
        }
        else if (this.city_status == 2 /* BE_ATTACKING */) {
            var area_id = Logic.area_id;
            var city_index = Logic.city_index - 1;
            if (city_index < 0) {
                area_id = Logic.area_id - 1;
                city_index = 10;
            }
            var area_line = Utils.getLine("area_list", area_id);
            if (area_line != null) {
                this.enemy_city_id = area_line[area_list_cities][city_index];
            }
        }
        var city_line = Utils.getLine("city_list", this.city_id);
        if (city_line != null) {
            this.label_city_name.text = "" + city_line[city_list_name];
            this.label_stamina_fee.text = "" + city_line[city_list_stamina_fee];
            this.label_money_award.text = "" + city_line[city_list_money_award];
            this.label_exp_award.text = "" + city_line[city_list_exp_award];
            if (this.city_status == 3 /* ENEMY_OCCUPIED */) {
                this.label_money_award.text = "" + city_line[city_list_enemy_money];
                this.label_exp_award.text = "" + city_line[city_list_enemy_exp];
            }
            else if (this.city_status == 2 /* BE_ATTACKING */) {
                this.label_money_award.text = "" + city_line[city_list_attack_money];
                this.label_exp_award.text = "" + city_line[city_list_attack_exp];
            }
            var min_level_hint = city_line[city_list_level_hint];
            if (this.city_id != this.enemy_city_id) {
                city_line = Utils.getLine("city_list", this.enemy_city_id);
                if (city_line != null) {
                    min_level_hint = city_line[city_list_level_hint];
                }
            }
            var strDifficultyDes = "困难";
            if (Logic.getKnightsLevelSum() >= min_level_hint) {
                strDifficultyDes = "简单";
            }
            this.label_difficulty_des.text = strDifficultyDes;
        }
    };
    __egretProto__.onFightBtnClicked = function () {
        Net.challengeCity(this.area_id, this.city_index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishChallengeCity = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            if (result == -12) {
                Utils.showToastInfo(this.guiLayer, "体力不足！");
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 2 /* TAB_STAMINA */);
                this.guiLayer.addElement(shop);
            }
            return;
        }
        Logic.setStaminaInfo(data);
        var current_layer = G.main_director.current_layer;
        if (current_layer.top_info_bar != null) {
            var deal_data = current_layer.top_info_bar instanceof UITopInfoView;
            if (deal_data) {
                current_layer.top_info_bar.refreshStaminaText();
            }
        }
        this.enterBattle();
    };
    __egretProto__.enterBattle = function () {
        var type = 1;
        if (this.city_status == 2 /* BE_ATTACKING */) {
            type = 2;
        }
        else if (this.city_status == 3 /* ENEMY_OCCUPIED */) {
            type = 3;
        }
        this.guiLayer.removeElement(this);
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.showCityFightMessage(type, this.area_id, this.city_index, this.enemy_city_id);
        }
    };
    __egretProto__.onClose = function (evt) {
        this.btn_fight.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightBtnClicked, this);
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.guiLayer.removeElement(this);
    };
    return UICityDetailView;
})(egret.gui.Panel);
UICityDetailView.prototype.__class__ = "UICityDetailView";
