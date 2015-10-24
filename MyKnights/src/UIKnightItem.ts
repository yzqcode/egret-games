class UIKnightItem extends egret.gui.Panel {
    public icon_body_frame:egret.gui.UIAsset;
    public icon_body:egret.gui.UIAsset;
    public icon_body_mask:egret.gui.UIAsset;

    public icon_name_frame_bg:egret.gui.UIAsset;
    public label_name:egret.gui.Label;

    public label_level:egret.gui.Label;

    public select_frame:egret.gui.UIAsset;
    public pos_mask:egret.gui.UIAsset;

    public self_knights_dlg:UISelfKnightsDialog;
    public index:number;
    public knight_info:Knight_Position_Info;

    public is_selected:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIKnightItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.x = this.width * this.index;

        this.pos_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight, this);

        this.refreshInfo();
    }

    public setIndex(self_knights_dlg:UISelfKnightsDialog, index:number, knight_info:Knight_Position_Info) {
        this.self_knights_dlg = self_knights_dlg;
        this.index = index;
        this.knight_info = knight_info;
    }

    public deselect() {
        this.is_selected = false;
        if (this.pos_mask == null) {
            return;
        }

        this.pos_mask.visible = true;
        this.select_frame.visible = false;
    }

    public select() {
        this.is_selected = true;
        if (this.pos_mask == null) {
            return;
        }

        this.pos_mask.visible = false;
        this.select_frame.visible = true;
    }

    private onSelectKnight(evt) {
        if (this.is_selected) {
            return;
        }
        
        this.self_knights_dlg.selectKnight(this.index);
        this.select();
    }

    public refreshInfo() {
        if (this.label_name == null) {
            return;
        }
        
        var knight_info = this.knight_info;

        this.label_name.text = knight_info.name;
        this.label_level.text = "" + knight_info.level;

        this.icon_body_frame.source = Utils.getKnightBigFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
        this.icon_body.source = Utils.getKnightBigImgName(knight_info.type, knight_info.is_player);
        this.icon_body_mask.source = Utils.getSelfKnightBigImgMaskName(knight_info.type, knight_info.is_player);

        this.icon_name_frame_bg.source = Utils.getKnightFrameImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);

        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    }

}

