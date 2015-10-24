class UITestBattleSetView extends egret.gui.Panel {
    public gui_parent_layer:egret.gui.UIStage;

    public job_edit:egret.gui.EditableText;
    public name_edit:egret.gui.EditableText;
    public lv_edit:egret.gui.EditableText;
    public atk_edit:egret.gui.EditableText;
    public def_edit:egret.gui.EditableText;
    public hp_edit:egret.gui.EditableText;
    public direction_edit:egret.gui.EditableText;
    public offset_edit:egret.gui.EditableText;

    public quick_battle_edit:egret.gui.EditableText;

    public add_btn:egret.gui.Button;
    public fight_btn:egret.gui.Button;

    public constructor(){
        super();
        this.skinName = "skins.UITestBattleSetViewSkin";
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    private onCreationComplete():void {
        this.removeEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );

        this.add_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAddKnight, this);

        this.fight_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterBattle, this);
    }

    public show(guiLayer:egret.gui.UIStage) {
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.x = G.win_width/2;
        this.y = G.win_height/2;

        this.gui_parent_layer = guiLayer;
        this.gui_parent_layer.addElement(this);
    }

    public onAddKnight() {
        var type:number = parseInt(this.job_edit.text);
        var name:string = this.name_edit.text;
        var lv:number = parseInt(this.lv_edit.text);
        var atk_factor:number = parseFloat(this.atk_edit.text);
        var def_factor:number = parseFloat(this.def_edit.text);
        var hp_factor:number = parseFloat(this.hp_edit.text);
        var direction:number = parseInt(this.direction_edit.text);
        var offset:number = parseFloat(this.offset_edit.text);

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
    }

    public onEnterBattle() {
        if (this.quick_battle_edit.text.length > 0) {
            console.log("------------ knight type list:", this.quick_battle_edit.text);

            BattleLayer.ClearAllBattleBaseInfo();
            BattleLayer.battle_type = BATTLE_TYPE.TEST_BATTLE;

            var s = this.quick_battle_edit.text;
            if (s.length != 11) {
                Utils.showToastInfo(this.gui_parent_layer, "xxxxx-xxxxx");
                return;
            }
            for (var i=0; i<5; ++i) {
                this.AddOneKnightBaseInfo(s[i], i);
            }
            for (var i=6; i<11; ++i) {
                this.AddOneKnightBaseInfo(s[i], i-6, false);
            }
        }

        G.main_director.enterBattleView();
    }

    private AddOneKnightBaseInfo(s, offset = 0, left = true) {
        var type = KNIGHT_TYPE.KNIGHT_SOLDIER;
        var str_type = "战士";
        if (s == "1") {
            type = KNIGHT_TYPE.KNIGHT_SOLDIER;
        }
        else if (s == "2") {
            type = KNIGHT_TYPE.KNIGHT_BOWMAN;
            str_type = "弓箭手";
        }
        else if (s == "3") {
            type = KNIGHT_TYPE.KNIGHT_ENCHANTER;
            str_type = "法师";
        }
        else if (s == "4") {
            type = KNIGHT_TYPE.KNIGHT_CHEVALIER;
            str_type = "骑士";
        }
        else if (s == "5") {
            type = KNIGHT_TYPE.KNIGHT_FIGHTER;
            str_type = "斗士";
        }
        else if (s == "6") {
            type = KNIGHT_TYPE.KNIGHT_ASSASSINATOR;
            str_type = "刺客";
        }
        else if (s == "7") {
            type = KNIGHT_TYPE.KNIGHT_LONG_BOWMAN;
            str_type = "长弓";
        }
        else if (s == "8") {
            type = KNIGHT_TYPE.KNIGHT_CROSS_BOWMAN;
            str_type = "弩手";
        }
        else if (s == "9") {
            type = KNIGHT_TYPE.KNIGHT_FIRE_ENCHANTER;
            str_type = "火法";
        }
        else if (s == "a") {
            type = KNIGHT_TYPE.KNIGHT_ICE_ENCHANTER;
            str_type = "冰法";
        }
        else if (s == "b") {
            type = KNIGHT_TYPE.KNIGHT_MINISTER;
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

        var str_direction = "左边"
        if (left) {
            knight_base_info.move_direction = 1;
        }
        else {
            knight_base_info.move_direction = -1;
            str_direction = "右边"
        }
        knight_base_info.pos_offset = offset;

        knight_base_info.name = str_direction + "_" + str_type + "_" + offset;

        BattleLayer.KnightGoToBattle(knight_base_info);
    }
}

