//removeEventListener
var UIToastView = (function (_super) {
    __extends(UIToastView, _super);
    function UIToastView() {
        _super.call(this);
        this.m_last_time = 800;
        this.skinName = "skins.UIToastViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIToastView.prototype;
    __egretProto__.onCreationComplete = function (evt) {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        // Init the instance of GameView
        this.labelToast.text = this.m_strToastInfo;
        this.labelToast.lineSpacing = 4;
        // TODO: Modify font size
        if (this.m_strToastInfo.length <= 8) {
            this.labelToast.size = 20;
        }
        if (this.m_strToastInfo.length > 8 && this.m_strToastInfo.length <= 12) {
            this.labelToast.size = 16;
        }
        if (this.m_strToastInfo.length > 12 && this.m_strToastInfo.length <= 16) {
            this.labelToast.size = 14;
        }
        if (this.m_strToastInfo.length > 16 && this.m_strToastInfo.length <= 20) {
            this.labelToast.size = 12;
        }
        if (this.m_strToastInfo.length > 20) {
            this.labelToast.size = 10;
        }
        this.x = G.win_width / 2 - this.width / 2;
        this.y = G.win_height - 150;
        var close = function () {
            if (this.ui_parent != null) {
                this.ui_parent.removeElement(this);
            }
        };
        var posY = this.y - 50;
        var tw = egret.Tween.get(this);
        tw.wait(this.m_last_time).to({ y: posY, alpha: 0 }, 400).call(close, this);
    };
    return UIToastView;
})(egret.gui.Panel);
UIToastView.prototype.__class__ = "UIToastView";
