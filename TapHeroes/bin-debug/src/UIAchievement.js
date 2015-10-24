var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PanelAchievement = (function (_super) {
    __extends(PanelAchievement, _super);
    function PanelAchievement() {
        _super.call(this);
        this.skinName = "skins.AchievementSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    PanelAchievement.prototype.initScroller = function () {
        var t = mb.data["trophies_list"];
        for (var i = 0; i < t.length; ++i) {
            var it = new ItemAchievement();
            it.achieve_id = (t[i][trophies_list_id]);
            it.index = i;
            this.scroller_group.addElement(it);
            it.setParent(this);
        }
        this.scroller_back.height = t.length * (107 + 4) + 10;
    };
    PanelAchievement.prototype.onCreationComplete = function (evt) {
        this.scroller_group = this.scroller.viewport;
        this.scroller.horizontalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        //this.scroller.verticalScrollPolicy = egret.gui.ScrollPolicy.ON;
        this.initScroller();
        this.scroller_back.touchEnabled = true;
        this.refreshSelf();
        this.touch_close_area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
    };
    PanelAchievement.prototype.onClose = function (evt) {
        this.visible = false;
        GameView.instance().ui_main.refreshAchieveNew();
    };
    PanelAchievement.prototype.refresh = function () {
        this.total_diamond.text = Utils.bigNumber(Logic.diamond);
        for (var i = 0; i < this.scroller_group.numElements; ++i) {
            var it = this.scroller_group.getElementAt(i);
            if (it.refresh) {
                it.refresh();
            }
        }
    };
    PanelAchievement.prototype.refreshSelf = function () {
        this.total_diamond.text = Utils.bigNumber(Logic.diamond);
    };
    return PanelAchievement;
})(egret.gui.Panel);
PanelAchievement.prototype.__class__ = "PanelAchievement";
