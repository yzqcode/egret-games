//removeEventListener
class UISpecialCityDetailView extends egret.gui.Panel {
    public label_difficulty_des:egret.gui.Label;
    public label_city_name:egret.gui.Label;
    public label_stamina_fee:egret.gui.Label;
    public label_money_award:egret.gui.Label;
    public label_exp_award:egret.gui.Label;
    public close_icon:egret.gui.UIAsset;
    public btn_fight:egret.gui.Button;

    public ui_wait:UIWaitView;

    public guiLayer:egret.gui.UIStage;

    public special_city_id:number = 0;
    public area_id:number = 0;

    public constructor(){
        super();
        this.skinName = "skins.UICityDetailViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        this.setSpecialCityInfo();

        this.btn_fight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightBtnClicked, this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    }

    public setSpecialCityInfo() {
        var special_city_line = Utils.getLine("city_list", this.special_city_id);
        if (special_city_line == null) {
            return;
        }

        this.label_city_name.text = "" + special_city_line[city_list_name];
        this.label_stamina_fee.text = "" + special_city_line[city_list_stamina_fee];
        this.label_money_award.text = "" + special_city_line[city_list_money_award];
        this.label_exp_award.text = "" + special_city_line[city_list_exp_award];

        var min_level_hint = special_city_line[city_list_level_hint];
        var strDifficultyDes = "困难";
        if (Logic.getKnightsLevelSum() >= min_level_hint) {
            strDifficultyDes = "简单";
        }
        this.label_difficulty_des.text = strDifficultyDes;
    }

    private onFightBtnClicked() {
        Net.challengeSpecialCity(this.area_id);

        Utils.showWaitAnim(this);
    }

    public finishChallengeSpecialCity(result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            if(result == -12){
                Utils.showToastInfo(this.guiLayer, "体力不足！");

                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, SHOP_HOME_TAB.TAB_STAMINA);
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
    }

    private enterBattle() {
        this.onClose(null);

        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.showCityFightMessage(0, this.area_id, -1, this.special_city_id);
        }
    }

    private onClose(evt) {
        this.btn_fight.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onFightBtnClicked, this);
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);

        this.guiLayer.removeElement(this);
    }
}

