var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var RebornDetailDlg = (function (_super) {
    __extends(RebornDetailDlg, _super);
    function RebornDetailDlg() {
        _super.call(this);
        this.skinName = "skins.RebornDetailSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    RebornDetailDlg.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refreshRebornInfo();
        // Add touch event listener.
        this.iconClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnCloseClicked, this);
        this.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnConfirmClicked, this);
    };
    RebornDetailDlg.prototype.refreshRebornInfo = function () {
        var arrayPeachFee = Logic.getResetPeach();
        this.m_iLevelPeachNum = arrayPeachFee[0];
        this.m_iStagePeachNum = arrayPeachFee[1];
        this.m_iHeroPeachNum = 0;
        if (arrayPeachFee[2] == 1) {
            this.m_iHeroPeachNum = arrayPeachFee[0] + arrayPeachFee[1];
        }
        this.m_iTotalPeachNum = this.m_iLevelPeachNum + this.m_iStagePeachNum + this.m_iHeroPeachNum;
        this.labelLevelPeach.text = "" + this.m_iLevelPeachNum;
        this.labelStagePeach.text = "" + this.m_iStagePeachNum;
        this.labelHeroPeach.text = "" + this.m_iHeroPeachNum;
        this.labelTotalPeach.text = "" + this.m_iTotalPeachNum;
        this.labelRebornDesc.lineSpacing = 8;
        this.btnConfirm.enabled = true;
        //this.btnConfirm.enabled = false;
    };
    RebornDetailDlg.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RebornDetailDlg.prototype.btnConfirmClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            var arrayResList = Logic.triggerSkill(7);
            var bRebornRes = arrayResList[0];
            if (bRebornRes == false) {
                console.log("========= Reborn failed!!!");
                return;
            }
            this.gameView.guiLayer.removeElement(this);
            this.gameView.showRebornAnim();
        }
    };
    RebornDetailDlg.prototype.btnCloseClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            this.gameView.guiLayer.removeElement(this);
        }
    };
    return RebornDetailDlg;
})(egret.gui.Panel);
RebornDetailDlg.prototype.__class__ = "RebornDetailDlg";
