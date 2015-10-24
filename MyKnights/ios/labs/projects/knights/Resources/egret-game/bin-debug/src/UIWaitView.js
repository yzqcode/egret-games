//removeEventListener
var UIWaitView = (function (_super) {
    __extends(UIWaitView, _super);
    function UIWaitView() {
        _super.call(this);
        this.ui_parent = null;
        this.timeout_callback = null;
        this.time_out = 20000;
        this.time = 0;
        this.anim_time = 500;
        this.current_rotation = 0;
        this.has_closed = false;
        this.skinName = "skins.UIWaitViewSkin";
        this.addEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
    }
    var __egretProto__ = UIWaitView.prototype;
    __egretProto__.onCreationComplete = function (evt) {
        this.removeEventListener(egret.gui.UIEvent.CREATION_COMPLETE, this.onCreationComplete, this);
        this.width = G.win_width;
        this.height = G.win_height;
        this.wait_icon.rotation = 0;
        this.wait_icon.anchorX = 0.5;
        this.wait_icon.anchorY = 0.5;
        this.time = -this.anim_time;
        this.rotateWaitIcon();
    };
    __egretProto__.rotateWaitIcon = function () {
        if (this.has_closed) {
            return;
        }
        this.current_rotation += 180;
        this.time += this.anim_time;
        if (this.time >= this.time_out) {
            Utils.showToastInfo(this.ui_parent.guiLayer, "连接服务器失败，请稍候重试!");
            if (this.ui_parent != null && this.timeout_callback != null) {
                this.timeout_callback.call(this.ui_parent);
            }
            this.close();
            return;
        }
        var tw = egret.Tween.get(this.wait_icon);
        tw.to({ "rotation": this.current_rotation }, this.anim_time).call(this.rotateWaitIcon, this);
    };
    __egretProto__.close = function () {
        this.has_closed = true;
        if (this.ui_parent != null) {
            this.ui_parent.guiLayer.removeElement(this);
            this.ui_parent.ui_wait = null;
            this.ui_parent = null;
        }
    };
    return UIWaitView;
})(egret.gui.Panel);
UIWaitView.prototype.__class__ = "UIWaitView";
