//removeEventListener
var UISelfKnightsDialog = (function (_super) {
    __extends(UISelfKnightsDialog, _super);
    function UISelfKnightsDialog() {
        _super.call(this);
        this.has_knights_left = true;
        this.all_knights_list = [];
        this.knights_items_list = [];
        this.current_select_index = -1;
        this.skinName = "skins.UISelfKnightsDialogSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UISelfKnightsDialog.prototype;
    __egretProto__.onCreationComplete = function () {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.getMyKnightsList(0);
        this.btn_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirmClicked, this);
        this.close_icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.knights_list.addEventListener(egret.Event.COMPLETE, this.refreshKnightsList, this);
    };
    __egretProto__.setDatas = function (ui_parent, guiLayer) {
        this.ui_parent = ui_parent;
        this.guiLayer = guiLayer;
    };
    __egretProto__.getMyKnightsList = function (start_index) {
        Net.getMyKnightsListForJob(start_index);
        Utils.showWaitAnim(this);
    };
    __egretProto__.finishGetMyKnightsList = function (result, data) {
        if (this.ui_wait != null) {
            this.ui_wait.close();
        }
        if (result != 0) {
            Utils.showToastInfo(this.guiLayer, "获取骑士列表失败，错误码: " + result);
            return;
        }
        if (data.length < 10) {
            this.has_knights_left = false;
        }
        else {
            this.has_knights_left = true;
        }
        var scroller_group = this.knights_list.viewport;
        for (var i = 0; i < data.length; i++) {
            var knight_info = new Knight_Position_Info();
            knight_info.knight_id = data[i][0];
            knight_info.type = data[i][1];
            knight_info.name = data[i][2];
            knight_info.level = data[i][3];
            knight_info.attack_factor = data[i][4];
            knight_info.defense_factor = data[i][5];
            knight_info.hp_factor = data[i][6];
            knight_info.position = data[i][7];
            knight_info.is_player = data[i][8];
            knight_info.exp = data[i][9];
            knight_info.exp_max = data[i][10];
            this.all_knights_list.push(knight_info);
            var knight_item = new UIKnightItem();
            knight_item.setIndex(this, this.knights_items_list.length, knight_info);
            scroller_group.addElement(knight_item);
            this.knights_items_list.push(knight_item);
        }
    };
    __egretProto__.refreshKnightsList = function () {
        if (this.has_knights_left == false) {
            this.knights_list.removeEventListener(egret.Event.COMPLETE, this.refreshKnightsList, this);
            return;
        }
        var top = this.knights_list.viewport.horizontalScrollPosition;
        var bottom = top + this.knights_list.width;
        if (this.knights_items_list[this.knights_items_list.length - 1].x < bottom) {
            this.getMyKnightsList(this.all_knights_list.length);
        }
    };
    __egretProto__.selectKnight = function (index) {
        if (index < 0 || index >= this.knights_items_list.length) {
            return;
        }
        var last_knight_item = this.knights_items_list[this.current_select_index];
        if (last_knight_item != null) {
            last_knight_item.deselect();
        }
        this.current_select_index = index;
        this.knights_items_list[this.current_select_index].select();
    };
    __egretProto__.onConfirmClicked = function () {
        if (this.current_select_index < 0 || this.current_select_index >= this.all_knights_list.length) {
            Utils.showToastInfo(this.guiLayer, "请选择一位骑士~");
            return;
        }
        this.ui_parent.setKnightToDoJob(this.all_knights_list[this.current_select_index]);
        this.onClose();
    };
    __egretProto__.onClose = function () {
        this.btn_confirm.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirmClicked, this);
        this.close_icon.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
        this.knights_list.removeEventListener(egret.Event.COMPLETE, this.refreshKnightsList, this);
        this.guiLayer.removeElement(this);
        var current_layer = G.main_director.current_layer;
        if (current_layer instanceof UIJobHomeView) {
            current_layer.self_knights_dlg = null;
        }
    };
    return UISelfKnightsDialog;
})(egret.gui.Panel);
UISelfKnightsDialog.prototype.__class__ = "UISelfKnightsDialog";
