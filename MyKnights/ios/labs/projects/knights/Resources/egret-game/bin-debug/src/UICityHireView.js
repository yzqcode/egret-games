var UICityHireView = (function (_super) {
    __extends(UICityHireView, _super);
    function UICityHireView() {
        _super.call(this);
        this.knight_select_index = 0;
        this.hired_knights_list = [];
        this.skinName = "skins.UICityHireViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UICityHireView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.btn_select_0.visible = true;
        this.btn_select_1.visible = true;
        this.btn_select_2.visible = true;
        this.btn_select_3.visible = true;
        this.btn_select_4.visible = true;
        this.showKnightsList();
        this.btn_select_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight0, this);
        this.btn_select_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight1, this);
        this.btn_select_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight2, this);
        this.btn_select_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight3, this);
        this.btn_select_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight4, this);
        this.refresh_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRefreshClicked, this);
    };
    __egretProto__.setDatas = function (parent, guiLayer) {
        this.ui_parent = parent;
        this.guiLayer = guiLayer;
    };
    __egretProto__.resetCityHireInfo = function (datas_list) {
        this.hired_knights_list = [];
        //console.log(datas_list);
        this.diamond_fee = datas_list[0];
        this.current_color = datas_list[1];
        this.next_color = datas_list[2];
        this.exp = datas_list[3];
        var knights_list = datas_list[4];
        for (var i = 0; i < knights_list.length; i++) {
            var knight_data = new Knight_Hire_Data();
            knight_data.hire_id = knights_list[i][0];
            knight_data.type = knights_list[i][1];
            knight_data.level = knights_list[i][2];
            knight_data.name = knights_list[i][3];
            knight_data.attack_factor = knights_list[i][4];
            knight_data.defense_factor = knights_list[i][5];
            knight_data.hp_factor = knights_list[i][6];
            knight_data.hire_money = knights_list[i][7];
            knight_data.has_hired = false;
            this.hired_knights_list.push(knight_data);
        }
    };
    __egretProto__.showKnightsList = function () {
        this.btn_select_0.visible = true;
        this.label_name_0.visible = true;
        this.label_gold_0.visible = true;
        this.body_frame_0.visible = true;
        this.icon_body_0.visible = true;
        this.name_frame_0.visible = true;
        this.gold_frame_0.visible = true;
        this.corner_0_left.visible = true;
        this.corner_0_right.visible = true;
        this.circle_0_attack.visible = true;
        this.circle_0_defense.visible = true;
        this.circle_0_blood.visible = true;
        this.icon_gold_0.visible = true;
        this.btn_select_1.visible = true;
        this.label_name_1.visible = true;
        this.label_gold_1.visible = true;
        this.body_frame_1.visible = true;
        this.icon_body_1.visible = true;
        this.name_frame_1.visible = true;
        this.gold_frame_1.visible = true;
        this.corner_1_left.visible = true;
        this.corner_1_right.visible = true;
        this.circle_1_attack.visible = true;
        this.circle_1_defense.visible = true;
        this.circle_1_blood.visible = true;
        this.icon_gold_1.visible = true;
        this.btn_select_2.visible = true;
        this.label_name_2.visible = true;
        this.label_gold_2.visible = true;
        this.body_frame_2.visible = true;
        this.icon_body_2.visible = true;
        this.name_frame_2.visible = true;
        this.gold_frame_2.visible = true;
        this.corner_2_left.visible = true;
        this.corner_2_right.visible = true;
        this.circle_2_attack.visible = true;
        this.circle_2_defense.visible = true;
        this.circle_2_blood.visible = true;
        this.icon_gold_2.visible = true;
        this.btn_select_3.visible = true;
        this.label_name_3.visible = true;
        this.label_gold_3.visible = true;
        this.body_frame_3.visible = true;
        this.icon_body_3.visible = true;
        this.name_frame_3.visible = true;
        this.gold_frame_3.visible = true;
        this.corner_3_left.visible = true;
        this.corner_3_right.visible = true;
        this.circle_3_attack.visible = true;
        this.circle_3_defense.visible = true;
        this.circle_3_blood.visible = true;
        this.icon_gold_3.visible = true;
        this.btn_select_4.visible = true;
        this.label_name_4.visible = true;
        this.label_gold_4.visible = true;
        this.body_frame_4.visible = true;
        this.icon_body_4.visible = true;
        this.name_frame_4.visible = true;
        this.gold_frame_4.visible = true;
        this.corner_4_left.visible = true;
        this.corner_4_right.visible = true;
        this.circle_4_attack.visible = true;
        this.circle_4_defense.visible = true;
        this.circle_4_blood.visible = true;
        this.icon_gold_4.visible = true;
        this.label_name_0.text = this.hired_knights_list[0].name;
        this.label_name_1.text = this.hired_knights_list[1].name;
        this.label_name_2.text = this.hired_knights_list[2].name;
        this.label_name_3.text = this.hired_knights_list[3].name;
        this.label_name_4.text = this.hired_knights_list[4].name;
        this.label_gold_0.text = this.hired_knights_list[0].hire_money;
        this.label_gold_1.text = this.hired_knights_list[1].hire_money;
        this.label_gold_2.text = this.hired_knights_list[2].hire_money;
        this.label_gold_3.text = this.hired_knights_list[3].hire_money;
        this.label_gold_4.text = this.hired_knights_list[4].hire_money;
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
        this.body_frame_3.source = Utils.getKnightBigFrameImgName(this.hired_knights_list[3].attack_factor / 10000, this.hired_knights_list[3].defense_factor / 10000, this.hired_knights_list[3].hp_factor / 10000);
        this.icon_body_3.source = Utils.getKnightBigImgName(this.hired_knights_list[3].type);
        this.name_frame_3.source = Utils.getKnightFrameImgName(this.hired_knights_list[3].attack_factor / 10000, this.hired_knights_list[3].defense_factor / 10000, this.hired_knights_list[3].hp_factor / 10000);
        this.gold_frame_3.source = Utils.getKnightFrameImgName(this.hired_knights_list[3].attack_factor / 10000, this.hired_knights_list[3].defense_factor / 10000, this.hired_knights_list[3].hp_factor / 10000);
        this.corner_3_left.source = Utils.getKnightSpecialImgName(this.hired_knights_list[3].attack_factor / 10000, this.hired_knights_list[3].defense_factor / 10000, this.hired_knights_list[3].hp_factor / 10000);
        this.corner_3_right.source = Utils.getKnightSpecialImgName(this.hired_knights_list[3].attack_factor / 10000, this.hired_knights_list[3].defense_factor / 10000, this.hired_knights_list[3].hp_factor / 10000);
        this.circle_3_attack.source = Utils.getOnePointImgName(this.hired_knights_list[3].attack_factor / 10000);
        this.circle_3_defense.source = Utils.getOnePointImgName(this.hired_knights_list[3].defense_factor / 10000);
        this.circle_3_blood.source = Utils.getOnePointImgName(this.hired_knights_list[3].hp_factor / 10000);
        this.body_frame_4.source = Utils.getKnightBigFrameImgName(this.hired_knights_list[4].attack_factor / 10000, this.hired_knights_list[4].defense_factor / 10000, this.hired_knights_list[4].hp_factor / 10000);
        this.icon_body_4.source = Utils.getKnightBigImgName(this.hired_knights_list[4].type);
        this.name_frame_4.source = Utils.getKnightFrameImgName(this.hired_knights_list[4].attack_factor / 10000, this.hired_knights_list[4].defense_factor / 10000, this.hired_knights_list[4].hp_factor / 10000);
        this.gold_frame_4.source = Utils.getKnightFrameImgName(this.hired_knights_list[4].attack_factor / 10000, this.hired_knights_list[4].defense_factor / 10000, this.hired_knights_list[4].hp_factor / 10000);
        this.corner_4_left.source = Utils.getKnightSpecialImgName(this.hired_knights_list[4].attack_factor / 10000, this.hired_knights_list[4].defense_factor / 10000, this.hired_knights_list[4].hp_factor / 10000);
        this.corner_4_right.source = Utils.getKnightSpecialImgName(this.hired_knights_list[4].attack_factor / 10000, this.hired_knights_list[4].defense_factor / 10000, this.hired_knights_list[4].hp_factor / 10000);
        this.circle_4_attack.source = Utils.getOnePointImgName(this.hired_knights_list[4].attack_factor / 10000);
        this.circle_4_defense.source = Utils.getOnePointImgName(this.hired_knights_list[4].defense_factor / 10000);
        this.circle_4_blood.source = Utils.getOnePointImgName(this.hired_knights_list[4].hp_factor / 10000);
        if (this.diamond_fee == 0) {
            this.refresh_cost.text = "免费";
        }
        else {
            this.refresh_cost.text = "" + this.diamond_fee;
        }
        this.quality_label.visible = true;
        if (this.current_color == this.next_color) {
            this.level_up_label.text = "已到达最高品质";
            this.quality_label.visible = false;
        }
        this.quality_before.source = Utils.getOnePointImgNameByIndex(this.current_color);
        this.quality_later.source = Utils.getOnePointImgNameByIndex(this.next_color);
        this.refresh_bar.mask = new egret.Rectangle(0, 0, this.exp / 100 * this.refresh_bar.width, 30);
        this.quality_label.text = Utils.getColorLabel(this.next_color - 1);
        this.quality_label.textColor = Utils.getColor(this.next_color - 1);
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
    __egretProto__.onSelectKnight3 = function () {
        this.knight_select_index = 3;
        this.selectKnightInfo(this.knight_select_index);
    };
    __egretProto__.onSelectKnight4 = function () {
        this.knight_select_index = 4;
        this.selectKnightInfo(this.knight_select_index);
    };
    __egretProto__.selectKnightInfo = function (index) {
        var info = new UIVillageHireKnightInfoView();
        info.setData(this.hired_knights_list[index], this, this.onCityHire);
        this.guiLayer.addElement(info);
    };
    __egretProto__.onCityHire = function () {
        var knight_data = this.hired_knights_list[this.knight_select_index];
        if (knight_data.has_hired) {
            return;
        }
        Net.hireCityKnight(knight_data.hire_id);
        Utils.showWaitAnim(this);
    };
    __egretProto__.onIncreaseConfirmCallback = function () {
        Net.increaseKnightsPosition();
        Utils.showWaitAnim(this.ui_parent);
    };
    __egretProto__.finishCityHire = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var error_hint = "城市招募失败." + result;
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
        if (this.knight_select_index == 3) {
            this.btn_select_3.visible = false;
            this.label_name_3.visible = false;
            this.label_gold_3.visible = false;
            this.body_frame_3.visible = false;
            this.icon_body_3.visible = false;
            this.name_frame_3.visible = false;
            this.gold_frame_3.visible = false;
            this.corner_3_left.visible = false;
            this.corner_3_right.visible = false;
            this.circle_3_attack.visible = false;
            this.circle_3_defense.visible = false;
            this.circle_3_blood.visible = false;
            this.icon_gold_3.visible = false;
        }
        if (this.knight_select_index == 4) {
            this.btn_select_4.visible = false;
            this.label_name_4.visible = false;
            this.label_gold_4.visible = false;
            this.body_frame_4.visible = false;
            this.icon_body_4.visible = false;
            this.name_frame_4.visible = false;
            this.gold_frame_4.visible = false;
            this.corner_4_left.visible = false;
            this.corner_4_right.visible = false;
            this.circle_4_attack.visible = false;
            this.circle_4_defense.visible = false;
            this.circle_4_blood.visible = false;
            this.icon_gold_4.visible = false;
        }
    };
    __egretProto__.onRefreshClicked = function () {
        Net.refreshCityRecruitByDiamond();
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishRefreshCityHireByDiamond = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            var strErrorMsg = "城市招募钻石刷新失败，错误码: " + result;
            if (result == -4) {
                strErrorMsg = "钻石不足~";
                var shop = new UIShopDialog();
                shop.setData(this.guiLayer, 1 /* TAB_DIAMOND */);
                this.guiLayer.addElement(shop);
            }
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }
        this.resetCityHireInfo(data);
        this.showKnightsList();
    };
    return UICityHireView;
})(egret.gui.Panel);
UICityHireView.prototype.__class__ = "UICityHireView";
