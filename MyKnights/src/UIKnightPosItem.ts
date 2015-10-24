class UIKnightPosItem extends egret.gui.Panel {
	public head_bg_icon:egret.gui.UIAsset;
	public knight_head_icon:egret.gui.UIAsset;
    public left_color_icon:egret.gui.UIAsset;
    public right_color_icon:egret.gui.UIAsset;

    public label_level:egret.gui.Label;

    private is_loading_finish:boolean = false;
    public knight_position_index:number = 0;

    public constructor() {
        super();
        this.skinName = "skins.UIKnightPosItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.is_loading_finish = true;
        this.knight_head_icon.visible = false;

        this.refreshInfo();
    }

    private FIRST_KNIGHT_START_POS_X:number = 0;
    private FIRST_KNIGHT_START_POS_Y:number = 0;
    private KNIGHT_POS_SPAN:number = 156;

    public refreshInfo() {
        if (this.is_loading_finish == false) {
            return;
        }

        this.x = this.FIRST_KNIGHT_START_POS_X + this.KNIGHT_POS_SPAN*this.knight_position_index;
        this.y = this.FIRST_KNIGHT_START_POS_Y;

        var knight_info = Logic.getKnightOnPosition(this.knight_position_index);
        if (knight_info != null) {
            this.knight_head_icon.visible = true;
            this.left_color_icon.visible = true;
            this.right_color_icon.visible = true;
            this.label_level.visible = true;

            this.knight_head_icon.source = Utils.getKnightHeadNorName(knight_info.type, knight_info.is_player);

            var point_img_name = Utils.getKnightPointImgName(knight_info.attack_factor/10000, knight_info.defense_factor/10000, knight_info.hp_factor/10000);
            this.left_color_icon.source = point_img_name;
            this.right_color_icon.source = point_img_name;

            this.label_level.text = "Lv." + knight_info.level;
        }
        else {
            this.knight_head_icon.visible = false;
            this.left_color_icon.visible = false;
            this.right_color_icon.visible = false;
            this.label_level.visible = false;
        }
    }

}

