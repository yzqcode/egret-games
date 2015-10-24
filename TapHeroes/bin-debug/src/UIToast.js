var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        _super.call(this);
        this.skinName = "skins.ToastSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    Toast.prototype.onCreationComplete = function (evt) {
        // Init the instance of GameView
        this.labelToast.text = this.m_strToastInfo;
        var close = function () {
            if (this.ui_parent != null) {
                this.ui_parent.removeElement(this);
            }
        };
        var posY = this.y - 50;
        var tw = egret.Tween.get(this);
        tw.wait(800).to({ y: posY, alpha: 0 }, 400).call(close, this);
    };
    return Toast;
})(egret.gui.Panel);
Toast.prototype.__class__ = "Toast";
