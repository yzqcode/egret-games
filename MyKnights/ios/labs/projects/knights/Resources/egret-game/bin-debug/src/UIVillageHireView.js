var UIVillageHireView = (function (_super) {
    __extends(UIVillageHireView, _super);
    function UIVillageHireView() {
        _super.call(this);
        this.knight_select_index = 0;
        this.hired_knights_list = [];
        this.skinName = "skins.UIVillageHireViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIVillageHireView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.btn_select_0.visible = true;
        this.btn_select_1.visible = true;
        this.btn_select_2.visible = true;
        this.showKnightsList();
        this.btn_select_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight0, this);
        this.btn_select_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight1, this);
        this.btn_select_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight2, this);
    };
    __egretProto__.setDatas = function (parent, guiLayer, datas_list) {
        this.ui_parent = parent;
        this.guiLayer = guiLayer;
        this.hired_knights_list = [];
        for (var i = 0; i < datas_list.length; i++) {
            var knight_data = new Knight_Hire_Data();
            knight_data.hire_id = datas_list[i][0];
            knight_data.type = datas_list[i][1];
            knight_data.level = datas_list[i][2];
            knight_data.name = datas_list[i][3];
            knight_data.attack_factor = datas_list[i][4];
            knight_data.defense_factor = datas_list[i][5];
            knight_data.hp_factor = datas_list[i][6];
            knight_data.hire_money = datas_list[i][7];
            knight_data.has_hired = false;
            this.hired_knights_list.push(knight_data);
        }
    };
    __egretProto__.showKnightsList = function () {
        this.label_name_0.text = this.hired_knights_list[0].name;
        this.label_name_1.text = this.hired_knights_list[1].name;
        this.label_name_2.text = this.hired_knights_list[2].name;
        this.label_gold_0.text = this.hired_knights_list[0].hire_money;
        this.label_gold_1.text = this.hired_knights_list[1].hire_money;
        this.label_gold_2.text = this.hired_knights_list[2].hire_money;
        this.body_frame_0.source = Utils.getKnightBigFrameImgName(this.hired_knights_list[0].attack_factor / 10000, this.hired_knights_list[0].defense_factor / 10000, this.hired_knights_list[0].hp_factor / 10000);
        this.icon_body_0.source = Utils.getKnightBigImgName(this.hired_knights_list[0].type);
        this.name_frame_0.source = Utils.getKnightFrameImgName(this.hired_knights_list[0].attack_factor / 10000, this.hired_knights_list[0].defense_factor / 10000, this.hired_knights_list[0].hp_factor / 10000);
        this.gold_frame_0.source = Utils.getKnightFrameImgName(this.hired_knights_list[0].attack_factor / 10000, this.hired_knights_list[0].defense_factor / 10000, this.hired_knights_list[0].hp_factor / 10000);
        this.corner_0_left.source = Utils.getKnightSpecialImgName(this.hired_knights_list[0].attack_factor / 10000, this.hired_knights_list[0].defense_factor / 10000, this.hired_knights_list[0].hp_factor / 10000);
        this.corner_0_right.source = Utils.getKnightSpecialImgName(this.hired_knights_list[0].attack_factor / 10000, this.hired_knights_list[0].defense_factor / 10000, this.hired_knights_list[0].hp_factor / 10000);
        this.circle_0_attack.source = Utils.getOnePointImgName(this.hired_knights_list[0].attack_factor / 10000);
        this.circle_0_defense.source = Utils.getOnePointImgName(this.hired_knights_list[0].defense_factor / 10000);
        this.circle_0_blood.source = Utils.getOnePointImgName(this.hired_knights_list[0].hp_factor / 10000);
        this.body_frame_1.source = Utils.getKnightBigFrameImgName(this.hired_knights_list[1].attack_factor / 10000, this.hired_knights_list[1].defense_factor / 10000, this.hired_knights_list[1].hp_factor / 10000);
        this.icon_body_1.source = Utils.getKnightBigImgName(this.hired_knights_list[1].type);
        this.name_frame_1.source = Utils.getKnightFrameImgName(this.hired_knights_list[1].attack_factor / 10000, this.hired_knights_list[1].defense_factor / 10000, this.hired_knights_list[1].hp_factor / 10000);
        this.gold_frame_1.source = Utils.getKnightFrameImgName(this.hired_knights_list[1].attack_factor / 10000, this.hired_knights_list[1].defense_factor / 10000, this.hired_knights_list[1].hp_factor / 10000);
        this.corner_1_left.source = Utils.getKnightSpecialImgName(this.hired_knights_list[1].attack_factor / 10000, this.hired_knights_list[1].defense_factor / 10000, this.hired_knights_list[1].hp_factor / 10000);
        this.corner_1_right.source = Utils.getKnightSpecialImgName(this.hired_knights_list[1].attack_factor / 10000, this.hired_knights_list[1].defense_factor / 10000, this.hired_knights_list[1].hp_factor / 10000);
        this.circle_1_attack.source = Utils.getOnePointImgName(this.hired_knights_list[1].attack_factor / 10000);
        this.circle_1_defense.source = Utils.getOnePointImgName(this.hired_knights_list[1].defense_factor / 10000);
        this.circle_1_blood.source = Utils.getOnePointImgName(this.hired_knights_list[1].hp_factor / 10000);
        this.body_frame_2.source = Utils.getKnightBigFrameImgName(this.hired_knights_list[2].attack_factor / 10000, this.hired_knights_list[2].defense_factor / 10000, this.hired_knights_list[2].hp_factor / 10000);
        this.icon_body_2.source = Utils.getKnightBigImgName(this.hired_knights_list[2].type);
        this.name_frame_2.source = Utils.getKnightFrameImgName(this.hired_knights_list[2].attack_factor / 10000, this.hired_knights_list[2].defense_factor / 10000, this.hired_knights_list[2].hp_factor / 10000);
        this.gold_frame_2.source = Utils.getKnightFrameImgName(this.hired_knights_list[2].attack_factor / 10000, this.hired_knights_list[2].defense_factor / 10000, this.hired_knights_list[2].hp_factor / 10000);
        this.corner_2_left.source = Utils.getKnightSpecialImgName(this.hired_knights_list[2].attack_factor / 10000, this.hired_knights_list[2].defense_factor / 10000, this.hired_knights_list[2].hp_factor / 10000);
        this.corner_2_right.source = Utils.getKnightSpecialImgName(this.hired_knights_list[2].attack_factor / 10000, this.hired_knights_list[2].defense_factor / 10000, this.hired_knights_list[2].hp_factor / 10000);
        this.circle_2_attack.source = Utils.getOnePointImgName(this.hired_knights_list[2].attack_factor / 10000);
        this.circle_2_defense.source = Utils.getOnePointImgName(this.hired_knights_list[2].defense_factor / 10000);
        this.circle_2_blood.source = Utils.getOnePointImgName(this.hired_knights_list[2].hp_factor / 10000);
    };
    __egretProto__.onSelectKnight0 = function () {
        this.knight_select_index = 0;
        this.selectKnightInfo(this.knight_select_index);
    };
    __egretProto__.onSelectKnight1 = function () {
        this.knight_select_index = 1;
        this.selectKnightInfo(this.knight_select_index);
    };
    __egretProto__.onSelectKnight2 = function () {
        this.knight_select_index = 2;
        this.selectKnightInfo(this.knight_select_index);
    };
    __egretProto__.selectKnightInfo = function (index) {
        var info = new UIVillageHireKnightInfoView();
        info.setData(this.hired_knights_list[index], this, this.onVillageHire);
        this.guiLayer.addElement(info);
        this.hire_detail_info = info;
    };
    __egretProto__.onVillageHire = function () {
        var knight_data = this.hired_knights_list[this.knight_select_index];
        if (knight_data.has_hired) {
            return;
        }
        Net.hireVillageKnight(knight_data.hire_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.onIncreaseConfirmCallback = function () {
        Net.increaseKnightsPosition();
        Utils.showWaitAnim(this.ui_parent);
    };
    __egretProto__.finishVillageHire = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var error_hint = "乡村招募失败." + result;
            if (result == -2) {
                error_hint = "队伍已满!";
                var dlg = new UIHintView();
                dlg.setHint(this.guiLayer, "确认购买", "您的招募位不足！是否购买招募位？", 2 /* OK_CANCEL */, this, this.onIncreaseConfirmCallback);
                this.guiLayer.addElement(dlg);
            }
            if (result == -4) {
                error_hint = "金币不足";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 0 /* TAB_MONEY */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, error_hint);
            return;
        }
        var knight_data = this.hired_knights_list[this.knight_select_index];
        knight_data.has_hired = true;
        if (this.knight_select_index == 0) {
            this.btn_select_0.visible = false;
            this.label_name_0.visible = false;
            this.label_gold_0.visible = false;
            this.body_frame_0.visible = false;
            this.icon_body_0.visible = false;
            this.name_frame_0.visible = false;
            this.gold_frame_0.visible = false;
            this.corner_0_left.visible = false;
            this.corner_0_right.visible = false;
            this.circle_0_attack.visible = false;
            this.circle_0_defense.visible = false;
            this.circle_0_blood.visible = false;
            this.icon_gold_0.visible = false;
        }
        if (this.knight_select_index == 1) {
            this.btn_select_1.visible = false;
            this.label_name_1.visible = false;
            this.label_gold_1.visible = false;
            this.body_frame_1.visible = false;
            this.icon_body_1.visible = false;
            this.name_frame_1.visible = false;
            this.gold_frame_1.visible = false;
            this.corner_1_left.visible = false;
            this.corner_1_right.visible = false;
            this.circle_1_attack.visible = false;
            this.circle_1_defense.visible = false;
            this.circle_1_blood.visible = false;
            this.icon_gold_1.visible = false;
        }
        if (this.knight_select_index == 2) {
            this.btn_select_2.visible = false;
            this.label_name_2.visible = false;
            this.label_gold_2.visible = false;
            this.body_frame_2.visible = false;
            this.icon_body_2.visible = false;
            this.name_frame_2.visible = false;
            this.gold_frame_2.visible = false;
            this.corner_2_left.visible = false;
            this.corner_2_right.visible = false;
            this.circle_2_attack.visible = false;
            this.circle_2_defense.visible = false;
            this.circle_2_blood.visible = false;
            this.icon_gold_2.visible = false;
        }
    };
    return UIVillageHireView;
})(egret.gui.Panel);
UIVillageHireView.prototype.__class__ = "UIVillageHireView";
