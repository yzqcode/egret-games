class PanelAchievement extends egret.gui.Panel{
    public touch_close_area:egret.gui.Rect;
    public btn_close:egret.gui.UIAsset;
    public total_diamond:egret.gui.Label;
    public scroller:egret.gui.Scroller;
    public scroller_group:egret.gui.Group;
    public scroller_back:egret.gui.UIAsset;

    public constructor(){
        super();
        this.skinName = "skins.AchievementSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    public initScroller() {
        var t = mb.data["trophies_list"]
        for ( var i=0; i<t.length; ++i ) {
            var it = new ItemAchievement()
            it.achieve_id = <number>(t[i][ trophies_list_id ])
            it.index = i
            this.scroller_group.addElement( it )
            it.setParent( this )
        }
        this.scroller_back.height = t.length * (107 + 4 ) + 10
    }

    public onCreationComplete( evt ) {
        this.scroller_group = <egret.gui.Group>this.scroller.viewport;
        this.scroller.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scroller.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.initScroller()
        this.scroller_back.touchEnabled = true
        this.refreshSelf()

        this.touch_close_area.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClose, this );
    }

    public onClose( evt ) {
        this.visible = false
        GameView.instance().ui_main.refreshAchieveNew()
    }


    public refresh() {
        this.total_diamond.text = Utils.bigNumber( Logic.diamond )
        for ( var i=0; i<this.scroller_group.numElements; ++i ) {
            var it = <ItemAchievement>this.scroller_group.getElementAt( i )
            if ( it.refresh ) {
                it.refresh()
            }
        }
    }

    public refreshSelf() {
        this.total_diamond.text = Utils.bigNumber( Logic.diamond )
    }

}

