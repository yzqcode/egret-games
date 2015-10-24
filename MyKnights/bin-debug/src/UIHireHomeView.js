//removeEventListener
var SHOW_HIRE_VIEW;
(function (SHOW_HIRE_VIEW) {
    SHOW_HIRE_VIEW[SHOW_HIRE_VIEW["HIRE_VIEW_HOME"] = 1] = "HIRE_VIEW_HOME";
    SHOW_HIRE_VIEW[SHOW_HIRE_VIEW["HIRE_VIEW_VILLAGE"] = 2] = "HIRE_VIEW_VILLAGE";
    SHOW_HIRE_VIEW[SHOW_HIRE_VIEW["HIRE_VIEW_CITY"] = 3] = "HIRE_VIEW_CITY";
    SHOW_HIRE_VIEW[SHOW_HIRE_VIEW["HIRE_VIEW_HONOR"] = 4] = "HIRE_VIEW_HONOR";
})(SHOW_HIRE_VIEW || (SHOW_HIRE_VIEW = {}));
var Knight_Hire_Data = (function () {
    function Knight_Hire_Data() {
        this.hire_id = 0;
        this.type = 1;
        this.level = 1;
        this.name = "";
        this.attack_factor = 0;
        this.defense_factor = 0;
        this.hp_factor = 0;
        this.hire_money = 0;
        this.has_hired = false;
    }
    var __egretProto__ = Knight_Hire_Data.prototype;
    return Knight_Hire_Data;
})();
Knight_Hire_Data.prototype.__class__ = "Knight_Hire_Data";
var UIHireHomeView = (function (_super) {
    __extends(UIHireHomeView, _super);
    function UIHireHomeView() {
        _super.call(this);
        this.top_info_bar = null;
        this.bottom_info_bar = null;
        this.village_hire_tick = -1;
        this.city_hire_tick = -1;
        this.honer_hire_tick = -1;
        this.village_hire_fee = 0;
        this.city_hire_fee = 0;
        this.honer_hire_fee = 0;
        this.is_village_lock = true;
        this.is_city_lock = true;
        this.is_honer_lock = true;
        this.second_timer = null;
        this.current_show_subview = 1 /* HIRE_VIEW_HOME */;
        this.current_subview = null;
        this.skinName = "skins.UIHireHomeViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIHireHomeView.prototype;
    __egretProto__.showOnMainLayer = function (main_director) {
        this.width = G.win_width;
        this.height = G.win_height;
        this.main_director = main_director;
        this.guiLayer = new egret.gui.UIStage();
        this.main_director.stage.addChildAt(this.guiLayer, 0);
        this.topLayer = new egret.DisplayObjectContainer();
        this.main_director.stage.addChildAt(this.topLayer, 1);
        this.guiLayer.addElementAt(this, 0);
        this.bottom_info_bar = new UIBottomInfoView();
        this.bottom_info_bar.resetBackButtonCallback(this, 3 /* BACK */, this.onBackBtnClicked);
        this.guiLayer.addElementAt(this.bottom_info_bar, 1);
        this.top_info_bar = new UITopInfoView();
        this.guiLayer.addElementAt(this.top_info_bar, 2);
    };
    __egretProto__.removeFromMainLayer = function () {
        this.stopTickTimer();
        this.village_mask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onVillageHire, this);
        this.city_mask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCityHire, this);
        this.honor_mask.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onHonorHire, this);
        this.main_director.stage.removeChild(this.guiLayer);
        this.main_director.stage.removeChild(this.topLayer);
    };
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.main_director.closeGateAnimLayer();
        this.getAllHireStatus();
        this.village_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onVillageHire, this);
        this.city_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCityHire, this);
        this.honor_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHonorHire, this);
    };
    __egretProto__.getAllHireStatus = function () {
        Net.showRecruit();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishShowRecruit = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "进入招募失败，错误码: " + result);
            return;
        }
        this.village_hire_tick = data[0];
        this.village_hire_fee = data[1];
        this.refreshVillageTickStatus();
        this.city_hire_tick = data[2];
        this.city_hire_fee = data[3];
        this.refreshCityTickStatus();
        this.honer_hire_tick = data[4];
        this.honer_hire_fee = data[5];
        this.refreshHonorStatus();
        this.resetTickTimer();
        this.checkIfShowHireGuide();
    };
    __egretProto__.checkIfShowHireGuide = function () {
        if (Logic.guide_flag == 20 /* VILLAGE_HIRE_HOME */) {
            var plot_layer = new PlotLayer();
            plot_layer.startPlot(130020, this.topLayer);
        }
    };
    __egretProto__.refreshVillageTickStatus = function () {
        if (this.village_hire_tick < 0) {
            this.is_village_lock = true;
        }
        else {
            this.is_village_lock = false;
        }
        if (this.is_village_lock) {
        }
        else {
            this.label_village_fee.text = "" + this.village_hire_fee;
            if (this.village_hire_tick > 0) {
                this.icon_village_gold.visible = true;
                this.label_village_fee.visible = true;
                this.label_village_free_hint.visible = false;
                this.icon_village_tick_bg.visible = true;
                this.label_village_free_title.visible = true;
                this.label_village_tick.visible = true;
                this.label_village_tick.text = Utils.getTimeStr(this.village_hire_tick);
            }
            else {
                this.icon_village_gold.visible = false;
                this.label_village_fee.visible = false;
                this.label_village_free_hint.visible = true;
                this.icon_village_tick_bg.visible = false;
                this.label_village_free_title.visible = false;
                this.label_village_tick.visible = false;
            }
        }
    };
    __egretProto__.refreshCityTickStatus = function () {
        if (this.city_hire_tick < 0) {
            this.is_city_lock = true;
        }
        else {
            this.is_city_lock = false;
        }
        if (this.is_city_lock) {
            this.icon_city_gold.visible = false;
            this.label_city_fee.visible = false;
            this.icon_city_tick_bg.visible = false;
            this.label_city_free_title.visible = false;
            this.label_city_tick.visible = false;
            this.icon_diamond.visible = false;
            this.city_mask.visible = false;
            this.icon_city_lock.visible = true;
        }
        else {
            this.city_mask.visible = true;
            this.icon_city_lock.visible = false;
            this.icon_city_gold.visible = true;
            this.label_city_fee.visible = true;
            this.icon_city_tick_bg.visible = true;
            this.label_city_free_title.visible = true;
            this.icon_diamond.visible = true;
            this.label_city_fee.text = "" + this.city_hire_fee;
            if (this.city_hire_tick > 0) {
                this.label_city_tick.visible = true;
                this.label_city_tick.text = Utils.getTimeStr(this.city_hire_tick);
            }
            else {
                this.label_city_tick.visible = false;
            }
        }
    };
    __egretProto__.refreshHonorStatus = function () {
        if (this.honer_hire_tick < 0) {
            this.is_honer_lock = true;
        }
        else {
            this.is_honer_lock = false;
        }
        if (this.is_honer_lock) {
            this.icon_honor.visible = false;
            this.label_honor_fee.visible = false;
            this.honor_mask.visible = false;
            this.icon_honor_lock.visible = true;
        }
        else {
            this.icon_honor.visible = true;
            this.label_honor_fee.visible = true;
            this.honor_mask.visible = true;
            this.icon_honor_lock.visible = false;
            this.label_honor_fee.text = "" + this.honer_hire_fee;
        }
    };
    __egretProto__.stopTickTimer = function () {
        if (this.second_timer != null) {
            this.second_timer.stop();
            this.second_timer = null;
        }
    };
    __egretProto__.resetTickTimer = function () {
        this.stopTickTimer();
        if (this.village_hire_tick > 0 || this.city_hire_tick > 0) {
            this.second_timer = new egret.Timer(1000, -1);
            this.second_timer.addEventListener(egret.TimerEvent.TIMER, this.secondTick, this);
            this.second_timer.start();
        }
    };
    __egretProto__.secondTick = function () {
        if (this.village_hire_tick <= 0 && this.city_hire_tick <= 0) {
            this.stopTickTimer();
            return;
        }
        this.village_hire_tick--;
        if (this.village_hire_tick < 0) {
            this.village_hire_tick = 0;
        }
        this.refreshVillageTickStatus();
        if (this.is_city_lock) {
            return;
        }
        this.city_hire_tick--;
        if (this.city_hire_tick < 0) {
            this.city_hire_tick = 0;
        }
        this.refreshCityTickStatus();
    };
    __egretProto__.onVillageHire = function () {
        Net.refreshVillageRecruit();
        Utils.showWaitAnim(this, null);
    };
    __egretProto__.finishRefreshVillageHire = function (result, data, money) {
        if (money === void 0) { money = -1; }
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "乡村招募刷新失败，错误码: " + result;
            if (result == -4) {
                strErrorMsg = "金币不足~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 0 /* TAB_MONEY */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        if (this.current_show_subview != 1 /* HIRE_VIEW_HOME */) {
            return;
        }
        if (money >= 0) {
            Logic.money = money;
            this.top_info_bar.refreshMoneyText();
        }
        this.visible = false;
        var village_view = new UIVillageHireView();
        village_view.setDatas(this, this.guiLayer, data);
        this.guiLayer.addElementAt(village_view, 1);
        this.current_show_subview = 2 /* HIRE_VIEW_VILLAGE */;
        this.current_subview = village_view;
    };
    __egretProto__.finishVillageHire = function (result, data, money) {
        if (money === void 0) { money = -1; }
        if (this.current_show_subview != 2 /* HIRE_VIEW_VILLAGE */) {
            return;
        }
        if (money >= 0) {
            Logic.money = money;
            this.top_info_bar.refreshMoneyText();
        }
        var deal_data = this.current_subview instanceof UIVillageHireView;
        if (deal_data) {
            this.current_subview.finishVillageHire(result, data);
        }
    };
    __egretProto__.onCityHire = function () {
        Net.refreshCityRecruit();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishRefreshCityHire = function (result, data, money) {
        if (money === void 0) { money = -1; }
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "城市招募刷新失败，错误码: " + result;
            if (result == -4) {
                strErrorMsg = "金币不足~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 0 /* TAB_MONEY */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        if (this.current_show_subview != 1 /* HIRE_VIEW_HOME */) {
            return;
        }
        if (money >= 0) {
            Logic.money = money;
            this.top_info_bar.refreshMoneyText();
        }
        this.visible = false;
        var city_view = new UICityHireView();
        city_view.setDatas(this, this.guiLayer);
        city_view.resetCityHireInfo(data);
        this.guiLayer.addElementAt(city_view, 1);
        this.current_show_subview = 3 /* HIRE_VIEW_CITY */;
        this.current_subview = city_view;
    };
    __egretProto__.finishRefreshCityHireByDiamond = function (result, data, diamond) {
        if (diamond === void 0) { diamond = -1; }
        if (this.current_show_subview != 3 /* HIRE_VIEW_CITY */) {
            return;
        }
        if (diamond >= 0) {
            Logic.diamond = diamond;
            this.top_info_bar.refreshDiamondText();
        }
        var deal_data = this.current_subview instanceof UICityHireView;
        if (deal_data) {
            this.current_subview.finishRefreshCityHireByDiamond(result, data);
        }
    };
    __egretProto__.finishCityHire = function (result, data, money) {
        if (money === void 0) { money = -1; }
        if (this.current_show_subview != 3 /* HIRE_VIEW_CITY */) {
            return;
        }
        if (money >= 0) {
            Logic.money = money;
            this.top_info_bar.refreshMoneyText();
        }
        var deal_data = this.current_subview instanceof UICityHireView;
        if (deal_data) {
            this.current_subview.finishCityHire(result, data);
        }
    };
    __egretProto__.onHonorHire = function () {
        var select_job = new UISelectJobDialog();
        select_job.showOnMainLayer(this, this.selectCallBack);
        this.guiLayer.addElement(select_job);
    };
    __egretProto__.selectCallBack = function (index) {
        this.select_index = index;
        Net.refreshHonorRecruit(index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishRefreshHonorHire = function (result, data, honor) {
        if (honor === void 0) { honor = -1; }
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "荣誉招募刷新失败，错误码: " + result;
            if (result == -4) {
                strErrorMsg = "荣誉不足~";
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        if (this.current_show_subview != 1 /* HIRE_VIEW_HOME */) {
            return;
        }
        if (honor >= 0) {
            Logic.honor = honor;
            this.top_info_bar.refreshHonorText();
        }
        this.visible = false;
        var honor_view = new UIHonorHireView();
        honor_view.setDatas(this, this.guiLayer, this.select_index);
        honor_view.resetHonorHireInfo(data);
        this.guiLayer.addElementAt(honor_view, 1);
        this.current_show_subview = 4 /* HIRE_VIEW_HONOR */;
        this.current_subview = honor_view;
    };
    __egretProto__.finishRefreshHonorHireByDiamond = function (result, data, diamond) {
        if (diamond === void 0) { diamond = -1; }
        if (this.current_show_subview != 4 /* HIRE_VIEW_HONOR */) {
            return;
        }
        if (diamond >= 0) {
            Logic.diamond = diamond;
            this.top_info_bar.refreshDiamondText();
        }
        var deal_data = this.current_subview instanceof UIHonorHireView;
        if (deal_data) {
            this.current_subview.finishRefreshHonorHireByDiamond(result, data);
        }
    };
    __egretProto__.finishHonorHire = function (result, data, money) {
        if (money === void 0) { money = -1; }
        if (this.current_show_subview != 4 /* HIRE_VIEW_HONOR */) {
            return;
        }
        if (money >= 0) {
            Logic.money = money;
            this.top_info_bar.refreshMoneyText();
        }
        var deal_data = this.current_subview instanceof UIHonorHireView;
        if (deal_data) {
            this.current_subview.finishHonorHire(result, data);
        }
    };
    __egretProto__.onBackBtnClicked = function () {
        if (this.current_show_subview != 1 /* HIRE_VIEW_HOME */) {
            this.guiLayer.removeElement(this.current_subview);
            this.current_show_subview = 1 /* HIRE_VIEW_HOME */;
            this.current_subview = null;
            this.visible = true;
            this.getAllHireStatus();
        }
        else {
            this.main_director.enterHomeView();
        }
    };
    __egretProto__.finishIncreaseKnightsPos = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "增加招募位置失败，错误码: " + result;
            if (result == G.NO_ENOUGH_MONEY) {
                strErrorMsg = "金币不足";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 0 /* TAB_MONEY */);
                this.guiLayer.addElement(shop);
            }
            else if (result == G.NO_ENOUGH_DIAMOND) {
                strErrorMsg = "钻石不足";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 1 /* TAB_DIAMOND */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        Utils.showToastInfo(this.guiLayer, "您已成功购买招募位，请重新雇佣。");
        Logic.money = data[0];
        Logic.diamond = data[1];
        this.top_info_bar.refreshMoneyText();
        this.top_info_bar.refreshDiamondText();
    };
    return UIHireHomeView;
})(egret.gui.Panel);
UIHireHomeView.prototype.__class__ = "UIHireHomeView";
