class DifficultiesListDlg extends egret.gui.Panel{
    private gameView:GameView;

    private scroller_view:egret.gui.Scroller;
    private scroller_back:egret.gui.UIAsset;
    private close_area:egret.gui.UIAsset;

    private refresh_timer:egret.Timer;

    private all_list_item = [];
    
    private first_difficulty_item = null;
    private last_difficulty_item = null;

    private list_item_number = 0;
    private init_difficulty_id = 0;

    private begin_difficulty_id = 0;
    private end_difficulty_id = 0;

    public constructor() {
        super();
        this.skinName = "skins.DifficultiesListSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }

    private appendDifficultyItem(difficulty_id:number) {
        var difficulty_item = new ItemDifficulty();
        difficulty_item.setDifficultyIndex(difficulty_id, difficulty_id-this.init_difficulty_id);

        var main_scroller_group = <egret.gui.Group>this.scroller_view.viewport;
        main_scroller_group.addElement( difficulty_item )

        this.list_item_number++;
        this.all_list_item.push(difficulty_item);

        if (difficulty_id == this.begin_difficulty_id) {
            this.first_difficulty_item = difficulty_item;
        }
        else if (difficulty_id == this.end_difficulty_id) {
            this.last_difficulty_item = difficulty_item;
        }
    }

    public initDifficultiesList() {
        var next_id = Logic.getNextDifficultyId();
        this.init_difficulty_id = next_id - 3;
        if (this.init_difficulty_id < 1) {
            this.init_difficulty_id = 1;
        }
        else if (this.init_difficulty_id > 74)
        {
            this.init_difficulty_id = 74;
        }
        
        var iLoadLen = 8;

        this.end_difficulty_id = this.init_difficulty_id + 7;
        this.begin_difficulty_id = this.init_difficulty_id;

        for (var i = 0; i < iLoadLen; i++) {
            this.appendDifficultyItem(this.init_difficulty_id+i);
        }

        this.scroller_back.height = 112 * this.list_item_number + 10
    }

    public appendToListBack() {
        if (this.end_difficulty_id >= 81) {
            return;
        }

        var start_id = this.end_difficulty_id + 1;
        var end_id = this.end_difficulty_id + 2;
        if (end_id > 81)
        {
            end_id = 81;
        }
        
        var iLoadLen = end_id - start_id + 1;
        this.end_difficulty_id = end_id;

        for (var i = 0; i < iLoadLen; i++) {
            this.appendDifficultyItem(start_id+i);
        }

        this.scroller_back.height = 112 * this.list_item_number + 10
    }
    public insertToListFront() {
        if (this.begin_difficulty_id <= 1) {
            return;
        }

        var start_id = this.begin_difficulty_id - 2;
        var end_id = this.begin_difficulty_id - 1;
        if (start_id < 1)
        {
            start_id = 1;
        }
        
        var iLoadLen = end_id - start_id + 1;
        this.begin_difficulty_id = start_id;

        for (var i = 0; i < iLoadLen; i++) {
            this.appendDifficultyItem(start_id+i);
        }

        this.scroller_back.height = 112 * this.list_item_number + 10

        this.resetAllItemListPosY();
    }
    private resetAllItemListPosY() {
        this.init_difficulty_id = this.begin_difficulty_id;

        var iListLen = this.all_list_item.length;
        for (var i = 0; i < iListLen; i++) {
            var difficulty_item = this.all_list_item[i];
            difficulty_item.resetPosY(difficulty_item.m_iDifficultyId-this.init_difficulty_id);
        }
    }

    public onCreationComplete( evt ) {
        // Init the instance of GameView
        this.gameView = GameView.instance();

        this.scroller_view.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scroller_view.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.close_area.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClose, this );

        this.initDifficultiesList();
        this.scroller_back.touchEnabled = true;

        this.refresh_timer = new egret.Timer(500, -1)
        this.refresh_timer.addEventListener(egret.TimerEvent.TIMER, this.onRefreshTimer, this);
        this.refresh_timer.start();
    }

    public onRefreshTimer( event ) {
        if (this.end_difficulty_id >= 81 && this.begin_difficulty_id <= 1) {
            this.refresh_timer.stop();
            this.refresh_timer = null;
            return;
        }

        // Refresh rank list when the last item is visible
        var viewport = <egret.gui.IViewport>this.scroller_view.viewport;
        var group = <egret.gui.Group>this.scroller_view.viewport;

        var top = viewport.verticalScrollPosition
        var bottom = top + this.scroller_view.height

        if ( this.last_difficulty_item.y < bottom ) {
            this.appendToListBack();
        }
        if ( this.first_difficulty_item.y > top ) {
            this.insertToListFront();
        }
    } 

    public onClose( evt ) {
        if (this.refresh_timer != null) {
            this.refresh_timer.stop();
            this.refresh_timer = null;
        }

        this.gameView.difficulties_list_dlg = null;
        this.gameView.guiLayer.removeElement(this);
    }
}

