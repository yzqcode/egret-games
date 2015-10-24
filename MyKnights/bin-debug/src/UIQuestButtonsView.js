var UIQuestButtonsView = (function (_super) {
    __extends(UIQuestButtonsView, _super);
    function UIQuestButtonsView() {
        _super.call(this);
        this.skinName = "skins.UIQuestButtonsViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIQuestButtonsView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.btn_hire.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHireClicked, this);
        this.btn_report.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWarReportClicked, this);
        this.icon_hire_flag.anchorX = 0.5;
        this.icon_hire_flag.anchorY = 0.5;
        this.icon_report_flag.anchorX = 0.5;
        this.icon_report_flag.anchorY = 0.5;
        this.refreshQuestBtnStatus();
    };
    __egretProto__.refreshQuestBtnStatus = function () {
        if (Logic.money > 10000) {
            this.btn_hire.visible = true;
            this.icon_hire_flag.visible = true;
            var tw = egret.Tween.get(this.icon_hire_flag, { loop: true });
            tw.to({ rotation: 10 }, 100).to({ rotation: -10 }, 100).wait(500);
        }
        else {
            this.btn_hire.visible = false;
            this.icon_hire_flag.visible = false;
        }
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            if (current_layer.war_report_list.length > 0) {
                this.btn_report.visible = true;
                this.icon_report_flag.visible = true;
                var tw = egret.Tween.get(this.icon_report_flag, { loop: true });
                tw.to({ rotation: 10 }, 100).to({ rotation: -10 }, 100).wait(500);
            }
            else {
                this.btn_report.visible = false;
                this.icon_report_flag.visible = false;
            }
        }
    };
    __egretProto__.onHireClicked = function () {
        G.main_director.enterHireView();
    };
    __egretProto__.onWarReportClicked = function () {
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof QuestLayer) {
            var war_report_view = new UIWarReport();
            war_report_view.setWarReportDatas(this.guiLayer, current_layer.war_report_list);
            this.guiLayer.addElement(war_report_view);
            current_layer.war_report_view = war_report_view;
        }
    };
    __egretProto__.onClose = function (evt) {
        this.btn_hire.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onHireClicked, this);
        this.btn_report.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onWarReportClicked, this);
        this.guiLayer.removeElement(this);
    };
    return UIQuestButtonsView;
})(egret.gui.Panel);
UIQuestButtonsView.prototype.__class__ = "UIQuestButtonsView";
