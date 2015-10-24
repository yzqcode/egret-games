var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        _super.call(this);
        this._isMoving = false;
        this._operateQue = [];
        this._autoPath = [];
    }
    Hero.prototype.getHeroPos = function () {
        if (this.view == null)
            return null;
        return new egret.Point(this.view.x, this.view.y);
    };
    Hero.prototype.setLinkAstarMap = function (astarmap, astarview) {
        this._linkMaze = astarmap;
        this._linkView = astarview;
        var nsize = 20;
        if (this.view == null) {
            this.view = new egret.Sprite();
            this.view.width = nsize;
            this.view.height = nsize;
            var szcolor = [0x22ff00, 0x22aaff, 0xff5522, 0x3455ff, 0xff7437];
            this.view.graphics.beginFill(szcolor[Math.floor(Math.random() * szcolor.length)], 1);
            this.view.graphics.drawRect(0, 0, nsize, nsize);
            this.view.graphics.endFill();
        }
    };
    Hero.prototype.addOperationNoti = function (obj) {
        obj.addEventListener(GameEvent.KEY_TAP, this.notiPlayerOperate, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    Hero.prototype.notiPlayerOperate = function (evt) {
        if (!evt.data.hasOwnProperty("dir") || !evt.data.hasOwnProperty("state"))
            return;
        this._autoPath = [];
        if (this._waitPos != null) {
            var nextpos = this._linkView.getNextMovePos(this.view.x, this.view.y, evt.data.dir);
            if (nextpos != null) {
                this._operateQue = [evt.data.dir];
            }
        } else {
            if (this._operateQue.length >= 2) {
                this._operateQue.shift();
            }
            this._operateQue.push(evt.data.dir);
        }
    };

    //鼠标点击
    Hero.prototype.onTouchTap = function (evt) {
        var touchpos = this._linkView.getIndexByPointXY(evt.stageX, evt.stageY);
        var startpos;
        if (this._waitPos == null) {
            startpos = this._linkView.getIndexByPointXY(this.view.x, this.view.y);
        } else {
            startpos = this._waitPos;
        }
        this._autoPath = this._linkMaze.findPath(startpos.x, startpos.y, touchpos.x, touchpos.y);
        if (this._autoPath.length > 0) {
            this._operateQue = [];
        }
    };
    Hero.prototype.onEnterFrame = function (advancedTime) {
        if (this._isMoving)
            return;
        if (this._operateQue.length < 1 && this._autoPath.length < 1)
            return;
        if (this._linkMaze == null)
            return;
        var i = 0;
        var nextpos;
        if (this._autoPath.length > 0) {
            nextpos = this._linkView.getPointXYByIndex(this._autoPath[0].x, this._autoPath[0].y);
            this._autoPath.shift();
            this.onMoveTo(nextpos.x, nextpos.y);
            return;
        }
        for (i = this._operateQue.length - 1; i >= 0; i--) {
            nextpos = this._linkView.getNextMovePos(this.view.x, this.view.y, this._operateQue[i]);
            if (nextpos != null) {
                this.onMoveTo(nextpos.x, nextpos.y);
                if (i > 0) {
                    this._operateQue.splice(0, i);
                }
                break;
            }
        }
    };
    Hero.prototype.onMoveTo = function (mx, my) {
        this._isMoving = true;
        egret.Tween.get(this.view).to({ x: mx, y: my }, 30).call(this.onMoveOver, this);
    };
    Hero.prototype.onMoveOver = function () {
        this._isMoving = false;
    };
    Hero.key = "hero";
    return Hero;
})(GameObject);
//# sourceMappingURL=Hero.js.map
