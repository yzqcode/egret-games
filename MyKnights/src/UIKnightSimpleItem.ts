class UIKnightSimpleItem extends egret.gui.Panel {
	public icon_name_frame_bg:egret.gui.UIAsset;
	public select_frame:egret.gui.UIAsset;
    public select_mask:egret.gui.UIAsset;
    public label_level:egret.gui.Label;
    public label_name:egret.gui.Label;

    public team_set_view:UIMyKnightTeamSetView;
    public index:number;
    public knight_info:Knight_Position_Info;

    public is_selected:boolean = false;

    public constructor() {
        super();
        this.skinName = "skins.UIKnightSimpleItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private onCreationComplete():void {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        
        this.y = this.height * this.index;

        this.select_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectKnight, this);

        this.refreshInfo();
    }

    public setIndex(view:UIMyKnightTeamSetView, index:number) {
        this.team_set_view = view;
        this.index = index;
    }
    public resetKnightData(knight_info:Knight_Position_Info) {
        this.knight_info = knight_info;
    }

    public deselect() {
        this.is_selected = false;
        if (this.select_mask == null) {
            return;
        }

        this.select_mask.visible = true;
        this.select_frame.visible = false;
    }

    public select() {
        this.is_selected = true;
        if (this.select_mask == null) {
            return;
        }

        this.select_mask.visible = false;
        this.select_frame.visible = true;
    }

    private onSelectKnight(evt) {
        this.team_set_view.showKnightDetail(SHOW_KNIGHT_DETAIL_TYPE.KNIGHT_ON_DESK, this.index);
    }

    public refreshInfo() {
        if (this.knight_info == null) {
            return;
        }

        var frame_img_name = Utils.getKnightFrameImgName(this.knight_info.attack_factor/10000, this.knight_info.defense_factor/10000, this.knight_info.hp_factor/10000);
        this.icon_name_frame_bg.source = frame_img_name;
        this.label_name.text = this.knight_info.name;

        this.label_level.text = "" + this.knight_info.level;

        if (this.is_selected) {
            this.select();
        }
        else {
            this.deselect();
        }
    }

}

