var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ItemArtifact = (function (_super) {
    __extends(ItemArtifact, _super);
    function ItemArtifact() {
        _super.call(this);
        this.skinName = "skins.base.ArtifactItemSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    ItemArtifact.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.gameView = GameView.instance();
        this.refreshArtifactInfo();
        this.refreshLockStatus();
        // Add touch event listener.
        this.rectDetailArea.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnDetailClicked, this);
        this.btnLevelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnLevelUpClicked, this);
    };
    ItemArtifact.prototype.refreshLockStatus = function () {
        if (this.btnLevelUp == null) {
            return;
        }
        if (Logic.peach >= this.m_iLevelupFee && this.m_iArtifactLevel < this.m_iArtifactLevelMax) {
            this.btnLevelUp.enabled = true;
        }
        else {
            this.btnLevelUp.enabled = false;
        }
    };
    ItemArtifact.prototype.refreshArtifactInfo = function () {
        this.m_iArtifactLevel = Logic.artifacts[this.m_iArtifactIndex].level;
        this.m_iLevelupFee = Logic.artifacts[this.m_iArtifactIndex].levelup_peach;
        var iCurrentBufIndex = Logic.artifacts[this.m_iArtifactIndex].effect_type1;
        var iCurrentBufData = Utils.percentNumber(Logic.artifacts[this.m_iArtifactIndex].effect_data1);
        this.m_strArtifactBuf1 = EF_TEXT[iCurrentBufIndex] + EF_PLUS[iCurrentBufIndex] + iCurrentBufData;
        iCurrentBufIndex = Logic.artifacts[this.m_iArtifactIndex].effect_type2;
        iCurrentBufData = Utils.percentNumber(Logic.artifacts[this.m_iArtifactIndex].effect_data2);
        this.m_strArtifactBuf2 = EF_TEXT[iCurrentBufIndex] + EF_PLUS[iCurrentBufIndex] + iCurrentBufData;
        this.iconArtifactPic.source = RES.getRes(this.m_strArtifactPic);
        this.labelArtifactName.text = this.m_strArtifactName;
        this.labelArtifactLevel.text = "" + this.m_iArtifactLevel;
        this.labelArtifactBuf1.text = this.m_strArtifactBuf1;
        this.labelArtifactBuf2.text = this.m_strArtifactBuf2;
        this.labelArtifactFee.text = U.bigNumber(this.m_iLevelupFee);
    };
    ItemArtifact.prototype.setArtifactIndex = function (index) {
        this.m_iArtifactIndex = index;
        this.m_iArtifactId = Logic.artifacts[index].artifact_id;
        this.m_strArtifactPic = "法宝_" + this.m_iArtifactId;
        this.m_strArtifactName = Logic.artifacts[index].name;
        this.m_iArtifactLevelMax = Logic.artifacts[this.m_iArtifactIndex].max_level;
    };
    ItemArtifact.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ItemArtifact.prototype.btnLevelUpClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            var bLevelUpRes = Logic.levelupArtifact(this.m_iArtifactId);
            if (bLevelUpRes == false) {
                console.log("========= Artifact level up failed!!!");
                return;
            }
            this.refreshArtifactInfo();
            this.refreshLockStatus();
            var viewport = this.gameView.ui_main.main_scroller3.viewport;
            var group = this.gameView.ui_main.main_scroller3.viewport;
            var top = viewport.verticalScrollPosition;
            var child = group.getElementAt(this.m_iArtifactIndex + 1);
            var posX = this.iconArtifactPic.x + this.iconArtifactPic.width / 2 + 5;
            var posY = this.gameView.ui_main.main_scroller3.y + child.y + top + this.iconArtifactPic.y + this.iconArtifactPic.height;
            this.gameView.showLevelUpAnim(posX, posY);
            this.gameView.ui_main.refreshPeach();
            this.gameView.ui_main.refreshDamageInfo();
        }
    };
    ItemArtifact.prototype.btnDetailClicked = function (e) {
        if (e.type == egret.TouchEvent.TOUCH_TAP) {
            if (this.gameView.background.touchEnabled == false) {
                return;
            }
            this.gameView.showArtifactDetailDlg(this.m_iArtifactIndex);
        }
    };
    return ItemArtifact;
})(egret.gui.Panel);
ItemArtifact.prototype.__class__ = "ItemArtifact";
