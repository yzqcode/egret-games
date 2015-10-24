var NoticeLayer = (function (_super) {
    __extends(NoticeLayer, _super);
    function NoticeLayer() {
        _super.call(this);
        this.parent_layer = null;
        this.notice_text = "";
    }
    var __egretProto__ = NoticeLayer.prototype;
    __egretProto__.showNoticeLayer = function (notice_text, parent) {
        if (notice_text.length <= 0) {
            return;
        }
        this.notice_text = notice_text;
        this.parent_layer = parent;
        this.parent_layer.addChild(this);
        this.notice_bg = new egret.Bitmap();
        this.notice_bg.texture = RES.getRes("black_round_square_png");
        this.notice_bg.scale9Grid = new egret.Rectangle(14, 13, 21, 21);
        this.notice_bg.width = G.win_width + 40;
        this.notice_bg.height = 40;
        this.notice_bg.x = -20;
        this.notice_bg.y = 150;
        this.addChild(this.notice_bg);
        this.notice_bg_mask = new egret.Rectangle(0, this.notice_bg.height / 2, G.win_width + 40, 0);
        this.notice_bg.mask = this.notice_bg_mask;
        this.notice_label = new egret.TextField();
        this.notice_label.width = G.win_width * 2;
        this.notice_label.height = 30;
        this.notice_label.x = G.win_width;
        this.notice_label.y = this.notice_bg.y + 5;
        this.notice_label.bold = false;
        this.notice_label.multiline = false;
        this.notice_label.textColor = 0xF7EDBC;
        this.notice_label.size = 25;
        this.notice_label.fontFamily = "Arial";
        //this.notice_label.textAlign = egret.HorizontalAlign.CENTER;
        this.notice_label.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.notice_label.text = this.notice_text;
        this.addChild(this.notice_label);
        this.showNoticeAnim();
    };
    __egretProto__.hideText = function () {
        this.notice_label.visible = false;
    };
    __egretProto__.showNoticeAnim = function () {
        var wait_time = 20000;
        if (this.notice_text.length <= 40) {
            wait_time = 10000;
        }
        var tw = egret.Tween.get(this.notice_bg_mask);
        tw.to({ y: 0, height: this.notice_bg.height }, 200).wait(wait_time).call(this.hideText, this).to({ y: this.notice_bg.height / 2, height: 0 }, 200).call(this.closeLayer, this);
        var tw2 = egret.Tween.get(this.notice_label);
        tw2.wait(200).to({ x: -G.win_width }, 20000);
    };
    __egretProto__.closeLayer = function () {
        this.parent_layer.removeChild(this);
    };
    return NoticeLayer;
})(egret.DisplayObjectContainer);
NoticeLayer.prototype.__class__ = "NoticeLayer";
