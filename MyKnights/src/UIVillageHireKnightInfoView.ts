//removeEventListener
class UIVillageHireKnightInfoView extends egret.gui.Panel{
    public constructor(){
        super();
        this.skinName = "skins.UIHireKnightInformationSkin";//自己通过egretwing拼的皮肤
        this.addEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );
    }

    public icon_name_frame_bg:egret.gui.UIAsset;
    public label_name:egret.gui.Label;
    public icon_body_frame_bg:egret.gui.UIAsset;
    public icon_body:egret.gui.UIAsset;
    public icon_atk_frame_bg:egret.gui.UIAsset;
    public label_atk_num:egret.gui.Label;
    public icon_def_frame_bg:egret.gui.UIAsset;
    public label_def_num:egret.gui.Label;
    public icon_hp_frame_bg:egret.gui.UIAsset;
    public label_hp_num:egret.gui.Label;
    public label_exp_percent:egret.gui.Label;
    public icon_exp_bar:egret.gui.UIAsset;
    public skill_list:egret.gui.Scroller;
    public label_level:egret.gui.Label;
    public close_icon:egret.gui.UIAsset;
    public hire_btn:egret.gui.Button;
    public cost_label:egret.gui.Label;

    public ui_parent;
    public callBack;

    public knight_data;

    private onCreationComplete():void{
        this.removeEventListener( egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this );

        this.width = G.win_width;
        this.height = G.win_height;
        this.initInfo();

        this.hire_btn.addEventListener(egret.TouchEvent.TOUCH_END,this.hireCallback,this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_END,this.closeCallback,this);
    }
    public setData(data, parent = null, callBack = null) {
        this.knight_data = data;
        this.ui_parent = parent;
        this.callBack = callBack;
    }

    public initInfo() {
        this.cost_label.text = this.knight_data.hire_money;
        this.icon_name_frame_bg.source = Utils.getKnightFrameImgName(this.knight_data.attack_factor/10000, this.knight_data.defense_factor/10000, this.knight_data.hp_factor/10000);
        this.label_name.text = this.knight_data.name;
        this.icon_body_frame_bg.source = Utils.getKnightBigFrameImgName(this.knight_data.attack_factor/10000, this.knight_data.defense_factor/10000, this.knight_data.hp_factor/10000);
        this.icon_body.source = Utils.getKnightBigImgName(this.knight_data.type);
        this.icon_atk_frame_bg.source = Utils.getValuePanelImgName(this.knight_data.attack_factor/10000);
        this.label_level.text = this.knight_data.level;

        this.label_atk_num.text = "" + Logic.getKnightSpecialData(this.knight_data.type, this.knight_data.level, KNIGHT_DATA_TYPE.ATK, this.knight_data.attack_factor/10000);
        if (this.knight_data.attack_factor == 10000) {
            this.label_atk_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_atk_num.textColor = 0x000000;
        }

        this.icon_def_frame_bg.source = Utils.getValuePanelImgName(this.knight_data.defense_factor/10000);
        this.label_def_num.text = "" + Logic.getKnightSpecialData(this.knight_data.type, this.knight_data.level, KNIGHT_DATA_TYPE.DEF, this.knight_data.defense_factor/10000);
        if (this.knight_data.defense_factor == 10000) {
            this.label_def_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_def_num.textColor = 0x000000;
        }

        this.icon_hp_frame_bg.source = Utils.getValuePanelImgName(this.knight_data.hp_factor/10000);
        this.label_hp_num.text = "" + Logic.getKnightSpecialData(this.knight_data.type, this.knight_data.level, KNIGHT_DATA_TYPE.HP, this.knight_data.hp_factor/10000);
        if (this.knight_data.hp_factor == 10000) {
            this.label_hp_num.textColor = 0xFFFFFF;
        }
        else {
            this.label_hp_num.textColor = 0x000000;
        }

        this.icon_exp_bar.mask = new egret.Rectangle(0, 0, 0/100, 15);
        var exp_percent = Math.floor(0/100);
        var exp_percent_left = Math.floor(0/1000) % 10;
        this.label_exp_percent.text = "" + exp_percent + "." + exp_percent_left + "%";

        var scroller_group = <egret.gui.Group>this.skill_list.viewport;
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

    }

    public hire_confirm_dlg:UIPurchaseConfirmView;

    public hireCallback() {
        var fee_type = FEE_TYPE.MONEY;

        var hint = new UIPurchaseConfirmView();
        hint.setPurchaseInfo(this.ui_parent.guiLayer, this.knight_data.hire_money, "雇佣", "你确定雇佣这个士兵为你战斗吗？", this,  this.okCallBack, null, fee_type);
        this.ui_parent.guiLayer.addElement(hint);

        this.hire_confirm_dlg = hint;
    }

    public okCallBack() {
        if(this.ui_parent!=null && this.callBack != null){
            this.callBack.call(this.ui_parent);
        }

        this.closeCallback();
    }

    private closeCallback():void{
        if(this.ui_parent != null){
            this.hire_btn.removeEventListener(egret.TouchEvent.TOUCH_END,this.hireCallback,this);
            this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_END,this.closeCallback,this);

            this.ui_parent.guiLayer.removeElement(this);
        }
    }
}