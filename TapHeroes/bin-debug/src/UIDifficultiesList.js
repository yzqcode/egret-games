var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DifficultiesListDlg = (function (_super) {
    __extends(DifficultiesListDlg, _super);
    function DifficultiesListDlg() {
        _super.call(this);
        this.all_list_item = [];
        this.first_difficulty_item = null;
        this.last_difficulty_item = null;
        this.list_item_number = 0;
        this.init_difficulty_id = 0;
        this.begin_difficulty_id = 0;
        this.end_difficulty_id = 0;
        this.skinName = "skins.DifficultiesListSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    DifficultiesListDlg.prototype.appendDifficultyItem = function (difficulty_id) {
        var difficulty_item = new ItemDifficulty();
        difficulty_item.setDifficultyIndex(difficulty_id, difficulty_id - this.init_difficulty_id);
        var main_scroller_group = this.scroller_view.viewport;
        main_scroller_group.addElement(difficulty_item);
        this.list_item_number++;
        this.all_list_item.push(difficulty_item);
        if (difficulty_id == this.begin_difficulty_id) {
            this.first_difficulty_item = difficulty_item;
        }
        else if (difficulty_id == this.end_difficulty_id) {
            this.last_difficulty_item = difficulty_item;
        }
    };
    DifficultiesListDlg.prototype.initDifficultiesList = function () {
        var next_id = Logic.getNextDifficultyId();
        this.init_difficulty_id = next_id - 3;
        if (this.init_difficulty_id < 1) {
            this.init_difficulty_id = 1;
        }
        else if (this.init_difficulty_id > 74) {
            this.init_difficulty_id = 74;
        }
        var iLoadLen = 8;
        this.end_difficulty_id = this.init_difficulty_id + 7;
        this.begin_difficulty_id = this.init_difficulty_id;
        for (var i = 0; i < iLoadLen; i++) {
            this.appendDifficultyItem(this.init_difficulty_id + i);
        }
        this.scroller_back.height = 112 * this.list_item_number + 10;
    };
    DifficultiesListDlg.prototype.appendToListBack = function () {
        if (this.end_difficulty_id >= 81) {
            return;
        }
        var start_id = this.end_difficulty_id + 1;
        var end_id = this.end_difficulty_id + 2;
        if (end_id > 81) {
            end_id = 81;
        }
        var iLoadLen = end_id - start_id + 1;
        this.end_difficulty_id = end_id;
        for (var i = 0; i < iLoadLen; i++) {
            this.appendDifficultyItem(start_id + i);
        }
        this.scroller_back.height = 112 * this.list_item_number + 10;
    };
    DifficultiesListDlg.prototype.insertToListFront = function () {
        if (this.begin_difficulty_id <= 1) {
            return;
        }
        var start_id = this.begin_difficulty_id - 2;
        var end_id = this.begin_difficulty_id - 1;
        if (start_id < 1) {
            start_id = 1;
        }
        var iLoadLen = end_id - start_id + 1;
        this.begin_difficulty_id = start_id;
        for (var i = 0; i < iLoadLen; i++) {
            this.appendDifficultyItem(start_id + i);
        }
        this.scroller_back.height = 112 * this.list_item_number + 10;
        this.resetAllItemListPosY();
    };
    DifficultiesListDlg.prototype.resetAllItemListPosY = function () {
        this.init_difficulty_id = this.begin_difficulty_id;
        var iListLen = this.all_list_item.length;
        for (var i = 0; i < iListLen; i++) {
            var difficulty_item = this.all_list_item[i];
            difficulty_item.resetPosY(difficulty_item.m_iDifficultyId - this.init_difficulty_id);
        }
    };
    DifficultiesListDlg.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.scroller_view.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scroller_view.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.initDifficultiesList();
        this.scroller_back.touchEnabled = true;
        this.refresh_timer = new egret.Timer(500, -1);
        this.refresh_timer.addEventListener(egret.TimerEvent.TIMER, this.onRefreshTimer, this);
        this.refresh_timer.start();
    };
    DifficultiesListDlg.prototype.onRefreshTimer = function (event) {
        if (this.end_difficulty_id >= 81 && this.begin_difficulty_id <= 1) {
            this.refresh_timer.stop();
            this.refresh_timer = null;
            return;
        }
        // Refresh rank list when the last item is visible
        var viewport = this.scroller_view.viewport;
        var group = this.scroller_view.viewport;
        var top = viewport.verticalScrollPosition;
        var bottom = top + this.scroller_view.height;
        if (this.last_difficulty_item.y < bottom) {
            this.appendToListBack();
        }
        if (this.first_difficulty_item.y > top) {
            this.insertToListFront();
        }
    };
    DifficultiesListDlg.prototype.onClose = function (evt) {
        if (this.refresh_timer != null) {
            this.refresh_timer.stop();
            this.refresh_timer = null;
        }
        this.gameView.difficulties_list_dlg = null;
        this.gameView.guiLayer.removeElement(this);
    };
    return DifficultiesListDlg;
})(egret.gui.Panel);
DifficultiesListDlg.prototype.__class__ = "DifficultiesListDlg";
