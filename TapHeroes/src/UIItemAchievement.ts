class AchieveButton extends egret.gui.Button {
    public btnachieve_diamond:egret.gui.Label;
    public btnachieve_label:egret.gui.Label;
    
    public constructor(){
        super();
        this.skinName = "skins.base.BtnAchieveSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public onCreationComplete( evt ) {
    }
}

class ItemAchievement extends egret.gui.Panel{
    
    public achieve_id = 0;
    public index = 0;
    public ui_achievement:PanelAchievement;

    public achieveitem_icon:egret.gui.UIAsset;
    public achieveitem_title:egret.gui.Label;
    public achieveitem_stars = []
    public achieveitem_star1:egret.gui.UIAsset;
    public achieveitem_star2:egret.gui.UIAsset;
    public achieveitem_star3:egret.gui.UIAsset;
    public achieveitem_star4:egret.gui.UIAsset;
    public achieveitem_star5:egret.gui.UIAsset;
    public label_progress:egret.gui.Label;
    public btn_receive:AchieveButton;

    public constructor(){
        super();
        this.skinName = "skins.base.AchieveItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public refresh() {
        var line = Utils.getLine( "trophies_list", this.achieve_id )
        var type = this.achieve_id - 1

        var cur = Stat.cur_achieve[ type ]
        for ( var i=0; i<cur; ++i ) {
            this.achieveitem_stars[i].source = "金星"
        }
        if ( Utils.v_in(type, Stat.new_achieve) ) {
            this.btn_receive.enabled = true
        }
        else {
            this.btn_receive.enabled = false
        }
        this.btn_receive.btnachieve_diamond.text = Utils.bigNumber( AchivementDiamonds[cur] )

        var s = line[trophies_list_info].replace( "%", Utils.bigNumber(Stat.achieve[type][cur]) )
        this.achieveitem_title.text = s

        console.log( Utils.bigNumber(Stat.getData( type ), true), Utils.bigNumber( Stat.achieve[type][cur], true ) )
        this.label_progress.text = Utils.bigNumber(Stat.getData( type ), true) + "/" + Utils.bigNumber( Stat.achieve[type][cur], true )

        this.achieveitem_icon.source = "chengjiu" + Utils.formatNumber( this.achieve_id, 3, "0" )
    }

    public setParent( p ) {
        this.ui_achievement = p
    }

    public onCreationComplete( evt ) {
        if ( this.achieve_id == 0 ) {
            return
        }
        this.achieveitem_stars = [ this.achieveitem_star1, this.achieveitem_star2, this.achieveitem_star3, this.achieveitem_star4, this.achieveitem_star5 ]
        this.y = ( this.height + 4 ) * this.index
        this.refresh()
        this.btn_receive.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onTapReceive, this );
    }

    public onTapReceive( evt ) {
        var type = this.achieve_id - 1
        var l = Stat.receiveAchieve( type )
        if ( l[0] ) {
            this.refresh()
            this.ui_achievement.refreshSelf()
            GameView.instance().refreshAllAboutDiamond()
        }
    }

}

