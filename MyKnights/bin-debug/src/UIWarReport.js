var UIWarReport = (function (_super) {
    __extends(UIWarReport, _super);
    function UIWarReport() {
        _super.call(this);
        this.war_report_list = [];
        this.war_report_items = [];
        this.current_report_index = 0;
        this.is_moving_animation = false;
        this.skinName = "skins.UIWarReportSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIWarReport.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.refreshWarReportList();
        this.left_arrow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeftClicked, this);
        this.right_arrow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRightClicked, this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.refresh_report_timer = new egret.Timer(1000, -1);
        this.refresh_report_timer.addEventListener(egret.TimerEvent.TIMER, this.refreshReportItem, this);
        this.refresh_report_timer.start();
    };
    __egretProto__.setWarReportDatas = function (guiLayer, war_report_list) {
        this.guiLayer = guiLayer;
        this.war_report_list = war_report_list;
    };
    __egretProto__.getWarReportAward = function (report_id) {
        Net.getMilitaryAward(report_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetWarReportAward = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "领取军情奖励失败，错误码: " + result);
            return;
        }
        var money = data[0];
        Logic.money = money;
        var current_layer = G.main_director.current_layer;
        if (current_layer.top_info_bar != null) {
            current_layer.top_info_bar.refreshMoneyText();
        }
        var report_id = data[1];
        Logic.refreshKnightsTeam(data[2]);
        if (current_layer.bottom_info_bar != null) {
            current_layer.bottom_info_bar.refreshMyKnightTeam();
        }
        var last_war_report = null;
        for (var i = 0; i < this.war_report_list.length; i++) {
            if (this.war_report_list[i].report_id == report_id) {
                last_war_report = this.war_report_list[i];
                this.war_report_list.splice(i, 1);
                break;
            }
        }
        if (this.war_report_list.length <= 0) {
            this.onClose(null);
            var current_layer = G.main_director.current_layer;
            if (current_layer instanceof QuestLayer) {
                if (current_layer.quest_button_view != null) {
                    current_layer.quest_button_view.refreshQuestBtnStatus();
                }
            }
        }
        else {
            this.refreshWarReportList();
        }
        // Show award
        if (last_war_report != null) {
            var area_id = last_war_report.area_id;
            var city_index = last_war_report.city_index;
            var city_status = last_war_report.city_status;
            var area_line = Utils.getLine("area_list", area_id);
            if (area_line == null) {
                return;
            }
            var city_id = area_line[area_list_cities][city_index];
            var current_layer = G.main_director.current_layer;
            if (current_layer instanceof QuestLayer) {
                var anim_layer = new AwardLayer();
                anim_layer.setWarReportAward(city_id, city_status);
                anim_layer.showAwardAnim(current_layer.top_layer);
            }
        }
    };
    __egretProto__.refreshWarReportList = function () {
        this.war_list.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        this.war_list.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        var scroller_group = this.war_list.viewport;
        scroller_group.removeAllElements();
        this.war_report_items = [];
        for (var i = 0; i < this.war_report_list.length; i++) {
            var war_report_item = new UIWarReportItem();
            war_report_item.ui_war_report = this;
            war_report_item.setIndex(this.war_report_list[i], i, this.war_report_list.length);
            scroller_group.addElement(war_report_item);
            this.war_report_items.push(war_report_item);
        }
        if (this.current_report_index >= this.war_report_list.length) {
            this.current_report_index--;
            this.war_list.throwHorizontally(this.current_report_index * 780, 0);
        }
        this.left_arrow.visible = true;
        if (this.current_report_index == 0) {
            this.left_arrow.visible = false;
        }
        this.right_arrow.visible = true;
        if (this.current_report_index == this.war_report_list.length - 1) {
            this.right_arrow.visible = false;
        }
    };
    __egretProto__.onLeftClicked = function () {
        if (this.is_moving_animation) {
            return;
        }
        if (this.current_report_index <= 0) {
            return;
        }
        this.current_report_index--;
        this.startScrollReportAnim();
    };
    __egretProto__.onRightClicked = function () {
        if (this.is_moving_animation) {
            return;
        }
        if (this.current_report_index >= this.war_report_list.length) {
            return;
        }
        this.current_report_index++;
        this.startScrollReportAnim();
    };
    __egretProto__.startScrollReportAnim = function () {
        this.left_arrow.visible = true;
        if (this.current_report_index == 0) {
            this.left_arrow.visible = false;
        }
        this.right_arrow.visible = true;
        if (this.current_report_index == this.war_report_list.length - 1) {
            this.right_arrow.visible = false;
        }
        this.war_list.throwHorizontally(this.current_report_index * 780, 500);
        this.is_moving_animation = true;
        var tw = egret.Tween.get(this);
        tw.wait(500).call(this.endScrollReportAnim, this);
    };
    __egretProto__.endScrollReportAnim = function () {
        this.is_moving_animation = false;
    };
    __egretProto__.refreshReportItem = function () {
        var current_report_item = this.war_report_items[this.current_report_index];
        if (current_report_item == null) {
            return;
        }
        current_report_item.refreshReportStatus();
    };
    __egretProto__.stopAllTimer = function () {
        if (this.refresh_report_timer != null) {
            this.refresh_report_timer.stop();
            this.refresh_report_timer = null;
        }
    };
    __egretProto__.onClose = function (evt) {
        this.left_arrow.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLeftClicked, this);
        this.right_arrow.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRightClicked, this);
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.stopAllTimer();
        this.guiLayer.removeElement(this);
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            current_layer.war_report_view = null;
        }
    };
    return UIWarReport;
})(egret.gui.Panel);
UIWarReport.prototype.__class__ = "UIWarReport";
