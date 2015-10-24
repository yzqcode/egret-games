var UITestBattleSetView = (function (_super) {
    __extends(UITestBattleSetView, _super);
    function UITestBattleSetView() {
        _super.call(this);
        this.skinName = "skins.UITestBattleSetViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UITestBattleSetView.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.add_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddKnight, this);
        this.fight_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterBattle, this);
    };
    __egretProto__.show = function (guiLayer) {
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.x = G.win_width / 2;
        this.y = G.win_height / 2;
        this.gui_parent_layer = guiLayer;
        this.gui_parent_layer.addElement(this);
    };
    __egretProto__.onAddKnight = function () {
        var type = parseInt(this.job_edit.text);
        var name = this.name_edit.text;
        var lv = parseInt(this.lv_edit.text);
        var atk_factor = parseFloat(this.atk_edit.text);
        var def_factor = parseFloat(this.def_edit.text);
        var hp_factor = parseFloat(this.hp_edit.text);
        var direction = parseInt(this.direction_edit.text);
        var offset = parseFloat(this.offset_edit.text);
        var knight_base_info = new Knight_BaseInfo();
        knight_base_info.type = type;
        knight_base_info.name = name;
        knight_base_info.level = lv;
        knight_base_info.attack_factor = atk_factor;
        knight_base_info.defense_factor = def_factor;
        knight_base_info.hp_factor = hp_factor;
        if (direction == 1) {
            knight_base_info.move_direction = 1;
        }
        else {
            knight_base_info.move_direction = -1;
        }
        knight_base_info.pos_offset = offset;
        console.log("~~~~~~ 添加了一个骑士: ", knight_base_info);
        BattleLayer.KnightGoToBattle(knight_base_info);
    };
    __egretProto__.onEnterBattle = function () {
        if (this.quick_battle_edit.text.length > 0) {
            console.log("------------ knight type list:", this.quick_battle_edit.text);
            BattleLayer.ClearAllBattleBaseInfo();
            BattleLayer.battle_type = 1 /* TEST_BATTLE */;
            var s = this.quick_battle_edit.text;
            if (s.length != 11) {
                Utils.showToastInfo(this.gui_parent_layer, "xxxxx-xxxxx");
                return;
            }
            for (var i = 0; i < 5; ++i) {
                this.AddOneKnightBaseInfo(s[i], i);
            }
            for (var i = 6; i < 11; ++i) {
                this.AddOneKnightBaseInfo(s[i], i - 6, false);
            }
        }
        G.main_director.enterBattleView();
    };
    __egretProto__.AddOneKnightBaseInfo = function (s, offset, left) {
        if (offset === void 0) { offset = 0; }
        if (left === void 0) { left = true; }
        var type = 1 /* KNIGHT_SOLDIER */;
        var str_type = "战士";
        if (s == "1") {
            type = 1 /* KNIGHT_SOLDIER */;
        }
        else if (s == "2") {
            type = 2 /* KNIGHT_BOWMAN */;
            str_type = "弓箭手";
        }
        else if (s == "3") {
            type = 3 /* KNIGHT_ENCHANTER */;
            str_type = "法师";
        }
        else if (s == "4") {
            type = 4 /* KNIGHT_CHEVALIER */;
            str_type = "骑士";
        }
        else if (s == "5") {
            type = 5 /* KNIGHT_FIGHTER */;
            str_type = "斗士";
        }
        else if (s == "6") {
            type = 6 /* KNIGHT_ASSASSINATOR */;
            str_type = "刺客";
        }
        else if (s == "7") {
            type = 7 /* KNIGHT_LONG_BOWMAN */;
            str_type = "长弓";
        }
        else if (s == "8") {
            type = 8 /* KNIGHT_CROSS_BOWMAN */;
            str_type = "弩手";
        }
        else if (s == "9") {
            type = 9 /* KNIGHT_FIRE_ENCHANTER */;
            str_type = "火法";
        }
        else if (s == "a") {
            type = 10 /* KNIGHT_ICE_ENCHANTER */;
            str_type = "冰法";
        }
        else if (s == "b") {
            type = 11 /* KNIGHT_MINISTER */;
            str_type = "牧师";
        }
        else {
            return;
        }
        var knight_base_info = new Knight_BaseInfo();
        knight_base_info.type = type;
        knight_base_info.level = 30;
        knight_base_info.attack_factor = 1;
        knight_base_info.defense_factor = 1;
        knight_base_info.hp_factor = 1;
        var str_direction = "左边";
        if (left) {
            knight_base_info.move_direction = 1;
        }
        else {
            knight_base_info.move_direction = -1;
            str_direction = "右边";
        }
        knight_base_info.pos_offset = offset;
        knight_base_info.name = str_direction + "_" + str_type + "_" + offset;
        BattleLayer.KnightGoToBattle(knight_base_info);
    };
    return UITestBattleSetView;
})(egret.gui.Panel);
UITestBattleSetView.prototype.__class__ = "UITestBattleSetView";
