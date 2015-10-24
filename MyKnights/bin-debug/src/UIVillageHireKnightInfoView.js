//removeEventListener
var UIVillageHireKnightInfoView = (function (_super) {
    __extends(UIVillageHireKnightInfoView, _super);
    function UIVillageHireKnightInfoView() {
        _super.call(this);
        this.skinName = "skins.UIHireKnightInformationSkin"; //自己通过egretwing拼的皮肤
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIVillageHireKnightInfoView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.initInfo();
        this.hire_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.hireCallback, this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_END, this.closeCallback, this);
    };
    __egretProto__.setData = function (data, parent, callBack) {
        if (parent === void 0) { parent = null; }
        if (callBack === void 0) { callBack = null; }
        this.knight_data = data;
        this.ui_parent = parent;
        this.callBack = callBack;
    };
    __egretProto__.initInfo = function () {
        this.cost_label.text = this.knight_data.hire_money;
        this.icon_name_frame_bg.source = Utils.getKnightFrameImgName(this.knight_data.attack_factor / 10000, this.knight_data.defense_factor / 10000, this.knight_data.hp_factor / 10000);
        this.label_name.text = this.knight_data.name;
        this.icon_body_frame_bg.source = Utils.getKnightBigFrameImgName(this.knight_data.attack_factor / 10000, this.knight_data.defense_factor / 10000, this.knight_data.hp_factor / 10000);
        this.icon_body.source = Utils.getKnightBigImgName(this.knight_data.type);
        this.icon_atk_frame_bg.source = Utils.getValuePanelImgName(this.knight_data.attack_factor / 10000);
        this.label_level.text = this.knight_data.level;
        this.label_atk_num.text = "" + Logic.getKnightSpecialData(this.knight_data.type, this.knight_data.level, 1 /* ATK */, this.knight_data.attack_factor / 10000);
        if (this.knight_data.attack_factor == 10000) {
            this.label_atk_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_atk_num.textColor = 0x000000;
        }
        this.icon_def_frame_bg.source = Utils.getValuePanelImgName(this.knight_data.defense_factor / 10000);
        this.label_def_num.text = "" + Logic.getKnightSpecialData(this.knight_data.type, this.knight_data.level, 2 /* DEF */, this.knight_data.defense_factor / 10000);
        if (this.knight_data.defense_factor == 10000) {
            this.label_def_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_def_num.textColor = 0x000000;
        }
        this.icon_hp_frame_bg.source = Utils.getValuePanelImgName(this.knight_data.hp_factor / 10000);
        this.label_hp_num.text = "" + Logic.getKnightSpecialData(this.knight_data.type, this.knight_data.level, 3 /* HP */, this.knight_data.hp_factor / 10000);
        if (this.knight_data.hp_factor == 10000) {
            this.label_hp_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_hp_num.textColor = 0x000000;
        }
        this.icon_exp_bar.mask = new egret.Rectangle(0, 0, 0 / 100, 15);
        var exp_percent = Math.floor(0 / 100);
        var exp_percent_left = Math.floor(0 / 1000) % 10;
        this.label_exp_percent.text = "" + exp_percent + "." + exp_percent_left + "%";
        var scroller_group = this.skill_list.viewport;
        scroller_group.removeAllElements();
        var knight_line = Utils.getLine("knights_list", this.knight_data.type);
        if (knight_line != null) {
            var skills_len = knight_line[knights_list_skill_list].length;
            for (var i = 0; i < skills_len; i++) {
                var skill_item = new UIKnightSkillItem();
                skill_item.setIndex(knight_line[knights_list_skill_list][i], i);
                scroller_group.addElement(skill_item);
            }
        }
    };
    __egretProto__.hireCallback = function () {
        var fee_type = 1 /* MONEY */;
        var hint = new UIPurchaseConfirmView();
        hint.setPurchaseInfo(this.ui_parent.guiLayer, this.knight_data.hire_money, "雇佣", "你确定雇佣这个士兵为你战斗吗？", this, this.okCallBack, null, fee_type);
        this.ui_parent.guiLayer.addElement(hint);
        this.hire_confirm_dlg = hint;
    };
    __egretProto__.okCallBack = function () {
        if (this.ui_parent != null && this.callBack != null) {
            this.callBack.call(this.ui_parent);
        }
        this.closeCallback();
    };
    __egretProto__.closeCallback = function () {
        if (this.ui_parent != null) {
            this.hire_btn.removeEventListener(egret.TouchEvent.TOUCH_END, this.hireCallback, this);
            this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_END, this.closeCallback, this);
            this.ui_parent.guiLayer.removeElement(this);
        }
    };
    return UIVillageHireKnightInfoView;
})(egret.gui.Panel);
UIVillageHireKnightInfoView.prototype.__class__ = "UIVillageHireKnightInfoView";
