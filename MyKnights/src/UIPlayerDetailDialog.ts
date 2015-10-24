//removeEventListener
class UIPlayerKnightOnPosition {
    public icon_head:egret.gui.UIAsset = null;
    public label_level:egret.gui.Label = null;
    public left_color_icon:egret.gui.UIAsset = null;
    public right_color_icon:egret.gui.UIAsset = null;
    public select_frame:egret.gui.UIAsset = null;
    public pos_mask:egret.gui.UIAsset = null;

    public pos_index:number = -1;

    public deselect() {
        this.pos_mask.visible = true;
        this.select_frame.visible = false;
    }

    public select() {
        this.pos_mask.visible = false;
        this.select_frame.visible = true;
    }

    public resetKnightInfo() {
        var knight_info = UIPlayerDetailDialog.getKnightOnPosition(this.pos_index);
        if (knight_info != null) {
            this.icon_head.visible = true;
            this.left_color_icon.visible = true;
            this.right_color_icon.visible = true;
            this.label_level.visible = true;
            this.pos_mask.visible = true;

            this.icon_head.source = Utils.getKnightHeadNorName(knight_info.type, knight_info.is_player);

            var point_img_name = Utils.getKnightPointImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.left_color_icon.source = point_img_name;
            this.right_color_icon.source = point_img_name;

            this.label_level.text = "Lv." + knight_info.level;
        }
        else {
            this.icon_head.visible = false;
            this.left_color_icon.visible = false;
            this.right_color_icon.visible = false;
            this.label_level.visible = false;
            this.pos_mask.visible = false;
        }

        this.select_frame.visible = false;
    }
}

class UIPlayerDetailDialog extends egret.gui.Panel {
    public close_icon:egret.gui.UIAsset;

    public ui_parent = null;
    public guiLayer:egret.gui.UIStage;
    public ui_wait:UIWaitView;

    public player_id:number = 0;
    public static knights_team = [null, null, null, null, null];

    // Left position list area
    public icon_head_pos_0:egret.gui.UIAsset;
    public label_level_pos_0:egret.gui.Label;
    public left_color_icon_pos_0:egret.gui.UIAsset;
    public right_color_icon_pos_0:egret.gui.UIAsset;
    public select_frame_0:egret.gui.UIAsset;
    public pos_mask_0:egret.gui.UIAsset;

    public icon_head_pos_1:egret.gui.UIAsset;
    public label_level_pos_1:egret.gui.Label;
    public left_color_icon_pos_1:egret.gui.UIAsset;
    public right_color_icon_pos_1:egret.gui.UIAsset;
    public select_frame_1:egret.gui.UIAsset;
    public pos_mask_1:egret.gui.UIAsset;

    public icon_head_pos_2:egret.gui.UIAsset;
    public label_level_pos_2:egret.gui.Label;
    public left_color_icon_pos_2:egret.gui.UIAsset;
    public right_color_icon_pos_2:egret.gui.UIAsset;
    public select_frame_2:egret.gui.UIAsset;
    public pos_mask_2:egret.gui.UIAsset;

    public icon_head_pos_3:egret.gui.UIAsset;
    public label_level_pos_3:egret.gui.Label;
    public left_color_icon_pos_3:egret.gui.UIAsset;
    public right_color_icon_pos_3:egret.gui.UIAsset;
    public select_frame_3:egret.gui.UIAsset;
    public pos_mask_3:egret.gui.UIAsset;

    public icon_head_pos_4:egret.gui.UIAsset;
    public label_level_pos_4:egret.gui.Label;
    public left_color_icon_pos_4:egret.gui.UIAsset;
    public right_color_icon_pos_4:egret.gui.UIAsset;
    public select_frame_4:egret.gui.UIAsset;
    public pos_mask_4:egret.gui.UIAsset;

    public left_knights_list = [];

    // Overview area
    public icon_name_frame_bg:egret.gui.UIAsset;
    public label_name:egret.gui.Label;
    public icon_body_frame_bg:egret.gui.UIAsset;
    public icon_body:egret.gui.UIAsset;
    public icon_body_mask:egret.gui.UIAsset;
    public label_level:egret.gui.Label;

    // Base info area
    public icon_atk_frame_bg:egret.gui.UIAsset;
    public label_atk_num:egret.gui.Label;
    public icon_def_frame_bg:egret.gui.UIAsset;
    public label_def_num:egret.gui.Label;
    public icon_hp_frame_bg:egret.gui.UIAsset;
    public label_hp_num:egret.gui.Label;
    public icon_exp_bar:egret.gui.UIAsset;
    public label_exp_percent:egret.gui.Label;

    public btn_dismiss:egret.gui.Button;
    public btn_exit_team:egret.gui.Button;
    public btn_enter_team:egret.gui.Button;

    // Skill area
    public skill_list:egret.gui.Scroller;

    private show_knight_type:number = 0;
    private show_knight_index:number = 0;

    public constructor(){
        super();
        this.skinName = "skins.UIPlayerDetailDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);

        this.width = G.win_width;
        this.height = G.win_height;

        if (this.player_id >= 0) {
            this.getPlayerKnightsList();
        }
        else {
            this.refreshKnightsDetail();
        }

        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);

        this.pos_mask_0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
    }

    public setEnemyDetailInfo(guiLayer:egret.gui.UIStage) {
        var current_layer = G.main_director.current_layer;
        var deal_data = current_layer instanceof BattleLayer;
        if (deal_data == false) {
            return;
        }

        this.ui_parent = null;
        this.guiLayer = guiLayer;

        this.player_id = -1;

        UIPlayerDetailDialog.knights_team = [null, null, null, null, null];

        for (var i = 0; i < BattleLayer.knights_baseinfo_list.length; i++) {
            var knight_base_info = BattleLayer.knights_baseinfo_list[i];

            if (knight_base_info.move_direction == BattleLayer.self_knight_direction) {
                // Is self knight
                continue;
            }

            var knight_info = new Knight_Position_Info();
            knight_info.knight_id = 0;
            knight_info.type = knight_base_info.type;
            knight_info.name = knight_base_info.name;
            knight_info.level = knight_base_info.level;
            knight_info.attack_factor = knight_base_info.attack_factor * 10000;
            knight_info.defense_factor = knight_base_info.defense_factor * 10000;
            knight_info.hp_factor = knight_base_info.hp_factor * 10000;
            knight_info.position = knight_base_info.pos_offset;
            knight_info.is_player = knight_base_info.isPlayer;
            knight_info.exp = 100;
            knight_info.exp_max = 100;

            if (knight_info.position >= 0 && knight_info.position < 5) {
               UIPlayerDetailDialog.knights_team[knight_info.position] = knight_info; 
            }
        }
    }
    public refreshKnightsDetail() {
        this.initLeftKnightList();
        this.refreshLeftKnightList();
        this.selectPlayerKnight();
    }

    public setPlayerId(parent, guiLayer:egret.gui.UIStage, player_id:number) {
        this.ui_parent = parent;
        this.guiLayer = guiLayer;

        this.player_id = player_id;
    }

    public getPlayerKnightsList() {
        Net.getPlayerKnightsList(this.player_id);
        Utils.showWaitAnim(this);
    }
    public finishGetPlayerKnightsList(result, datas) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }

        if (result != 0) {
            var strErrorMsg = "查看玩家信息失败，错误码: " + result;
            Utils.showToastInfo(this.guiLayer, strErrorMsg);
            return;
        }

        UIPlayerDetailDialog.knights_team = [null, null, null, null, null];
        for (var i = 0; i < datas.length; i++) {
            var knight_info = new Knight_Position_Info();
            knight_info.knight_id = datas[i][0];
            knight_info.type = datas[i][1];
            knight_info.name = datas[i][2];
            knight_info.level = datas[i][3];
            knight_info.attack_factor = datas[i][4];
            knight_info.defense_factor = datas[i][5];
            knight_info.hp_factor = datas[i][6];
            knight_info.position = datas[i][7];
            knight_info.is_player = datas[i][8];
            knight_info.exp = datas[i][9];
            knight_info.exp_max = datas[i][10];

            if (knight_info.position >= 0 && knight_info.position < 5) {
               UIPlayerDetailDialog.knights_team[knight_info.position] = knight_info; 
            }
        }

        this.initLeftKnightList();
        this.refreshLeftKnightList();
        this.selectPlayerKnight();
    }

    public static getKnightOnPosition(index:number) {
        if (index < 0 || index > 4) {
            return null;
        }

        return UIPlayerDetailDialog.knights_team[index];
    }

    private initLeftKnightList() {
        this.left_knights_list = [];

        var knight = new UIPlayerKnightOnPosition();
        knight.icon_head = this.icon_head_pos_0;
        knight.label_level = this.label_level_pos_0;
        knight.left_color_icon = this.left_color_icon_pos_0;
        knight.right_color_icon = this.right_color_icon_pos_0;
        knight.select_frame = this.select_frame_0;
        knight.pos_mask = this.pos_mask_0;

        knight.pos_index = 0;
        this.left_knights_list.push(knight);

        knight = new UIPlayerKnightOnPosition();
        knight.icon_head = this.icon_head_pos_1;
        knight.label_level = this.label_level_pos_1;
        knight.left_color_icon = this.left_color_icon_pos_1;
        knight.right_color_icon = this.right_color_icon_pos_1;
        knight.select_frame = this.select_frame_1;
        knight.pos_mask = this.pos_mask_1;

        knight.pos_index = 1;
        this.left_knights_list.push(knight);

        knight = new UIPlayerKnightOnPosition();
        knight.icon_head = this.icon_head_pos_2;
        knight.label_level = this.label_level_pos_2;
        knight.left_color_icon = this.left_color_icon_pos_2;
        knight.right_color_icon = this.right_color_icon_pos_2;
        knight.select_frame = this.select_frame_2;
        knight.pos_mask = this.pos_mask_2;

        knight.pos_index = 2;
        this.left_knights_list.push(knight);

        knight = new UIPlayerKnightOnPosition();
        knight.icon_head = this.icon_head_pos_3;
        knight.label_level = this.label_level_pos_3;
        knight.left_color_icon = this.left_color_icon_pos_3;
        knight.right_color_icon = this.right_color_icon_pos_3;
        knight.select_frame = this.select_frame_3;
        knight.pos_mask = this.pos_mask_3;

        knight.pos_index = 3;
        this.left_knights_list.push(knight);

        knight = new UIPlayerKnightOnPosition();
        knight.icon_head = this.icon_head_pos_4;
        knight.label_level = this.label_level_pos_4;
        knight.left_color_icon = this.left_color_icon_pos_4;
        knight.right_color_icon = this.right_color_icon_pos_4;
        knight.select_frame = this.select_frame_4;
        knight.pos_mask = this.pos_mask_4;

        knight.pos_index = 4;
        this.left_knights_list.push(knight);
    }

    private onClose(evt) {
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.pos_mask_0.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_2.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_3.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);
        this.pos_mask_4.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnightPos, this);

        if (this.guiLayer != null) {
            this.guiLayer.removeElement(this);
        }

        if ( this.ui_parent != null ) {
            this.ui_parent.player_datail_dlg = null;
            this.ui_parent = null;
        }
    }

    private onSelectKnightPos(evt) {
        var select_index = -1;
        for (var i = 0; i < this.left_knights_list.length; i++) {
            if (evt.target == this.left_knights_list[i].pos_mask) {
                select_index = i;
                break;
            }
        }

        if (this.show_knight_type == SHOW_KNIGHT_DETAIL_TYPE.KNIGHT_ON_POSITION 
                && this.show_knight_index == select_index) {
            return;
        }
        if (select_index >= 0 && select_index < 5) {
            this.showKnightDetail(SHOW_KNIGHT_DETAIL_TYPE.KNIGHT_ON_POSITION, select_index);
        }
    }

     public showKnightDetail(type:number, index:number) {
        if (this.show_knight_type == SHOW_KNIGHT_DETAIL_TYPE.KNIGHT_ON_POSITION) {
            if (this.left_knights_list[this.show_knight_index] != null) {
                this.left_knights_list[this.show_knight_index].deselect();
            }
        }

        this.show_knight_type = type;
        this.show_knight_index = index;

        var knight_info = null;
        if (this.show_knight_type == SHOW_KNIGHT_DETAIL_TYPE.KNIGHT_ON_POSITION) {
        	if (this.left_knights_list[this.show_knight_index] != null){
        		this.left_knights_list[this.show_knight_index].select();
        	}
            knight_info = UIPlayerDetailDialog.knights_team[this.show_knight_index]; //Logic.getKnightOnPosition(this.show_knight_index);
        }

        if (knight_info == null) {
            return;
        }

        var frame_img_name = Utils.getKnightFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
        this.icon_name_frame_bg.source = frame_img_name;
        this.label_name.text = knight_info.name;

        this.icon_body_frame_bg.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
        this.icon_body.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
        this.icon_body_mask.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);

        this.label_level.text = "" + knight_info.level;

        this.icon_name_frame_bg.source = frame_img_name;
        this.label_name.text = knight_info.name;

        this.icon_atk_frame_bg.source = Utils.getValuePanelImgName(knight_info.attack_factor/10000);
        this.label_atk_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, KNIGHT_DATA_TYPE.ATK, knight_info.attack_factor/10000);
        if (knight_info.attack_factor >= 10000) {
            this.label_atk_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_atk_num.textColor = 0x000000;
        }

        this.icon_def_frame_bg.source = Utils.getValuePanelImgName(knight_info.defense_factor/10000);
        this.label_def_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, KNIGHT_DATA_TYPE.DEF, knight_info.defense_factor/10000);
        if (knight_info.defense_factor >= 10000) {
            this.label_def_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_def_num.textColor = 0x000000;
        }

        this.icon_hp_frame_bg.source = Utils.getValuePanelImgName(knight_info.hp_factor/10000);
        this.label_hp_num.text = "" + Logic.getKnightSpecialData(knight_info.type, knight_info.level, KNIGHT_DATA_TYPE.HP, knight_info.hp_factor/10000);
        if (knight_info.hp_factor >= 10000) {
            this.label_hp_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_hp_num.textColor = 0x000000;
        }
        
        this.icon_exp_bar.mask = new egret.Rectangle(0, 0, knight_info.exp/knight_info.exp_max*100, 15);

        var exp_percent = Math.floor(knight_info.exp/knight_info.exp_max*100);
        var exp_percent_left = Math.floor(knight_info.exp/knight_info.exp_max*1000) % 10;
        this.label_exp_percent.text = "" + exp_percent + "." + exp_percent_left + "%";
        // TODO:
        // this.skill_list:egret.gui.Scroller;
        var scroller_group = <egret.gui.Group>this.skill_list.viewport;
        scroller_group.removeAllElements();

        var knight_line = Utils.getLine("knights_list", knight_info.type);
        if (knight_line != null) {
            var skills_len = knight_line[knights_list_skill_list].length;
            for (var i = 0; i < skills_len; i++) {
                var skill_item = new UIKnightSkillItem();
                skill_item.setIndex(knight_line[knights_list_skill_list][i], i);

                scroller_group.addElement(skill_item);
            }
        }
    }

    private selectPlayerKnight() {
        var select_index = -1;
        for (var i = 0; i < 5; i++) {
            if (UIPlayerDetailDialog.knights_team[i] != null) {
                select_index = i;
                break;
            }
        }

        this.showKnightDetail(SHOW_KNIGHT_DETAIL_TYPE.KNIGHT_ON_POSITION, select_index);
    }

    public refreshLeftKnightList() {
        var len = this.left_knights_list.length;
        for (var i = 0; i < len; i++) {
            this.left_knights_list[i].resetKnightInfo();
        }

        if (this.show_knight_type == SHOW_KNIGHT_DETAIL_TYPE.KNIGHT_ON_POSITION) {
            this.selectPlayerKnight();
        }
    }

}