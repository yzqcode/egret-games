var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        _super.call(this);
        this._isMoving = false;
        this._operateQue = [];
        this._autoPath = [];
    }
    var __egretProto__ = Hero.prototype;
    __egretProto__.getHeroPos = function () {
        if (this.view == null) {
            return null;
        }
        return new egret.Point(this.view.x, this.view.y);
    };
    __egretProto__.setLinkAstarMap = function (astarmap, astarview) {
        this._linkMaze = astarmap;
        this._linkView = astarview;
        var nsize = this._linkView._gridSize;
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
    __egretProto__.addOperationNoti = function (obj) {
        obj.addEventListener(GameEvent.KEY_TAP, this.notiPlayerOperate, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    };
    __egretProto__.notiPlayerOperate = function (evt) {
        if (!evt.data.hasOwnProperty("dir") || !evt.data.hasOwnProperty("state")) {
            return;
        }
        this._autoPath = [];
        if (this._operateQue.length >= 2) {
            this._operateQue.shift();
        }
        this._operateQue.push(evt.data.dir);
    };
    //鼠标点击
    __egretProto__.onTouchTap = function (evt) {
        var touchpos = this._linkView.getIndexByPointXY(evt.stageX, evt.stageY);
        var startpos;
        //console.log("x: " + touchpos.x + " y:" + touchpos.y);
        startpos = this._linkView.getIndexByPointXY(this.view.x, this.view.y);
        this._autoPath = this._linkMaze.findPath(startpos.x, startpos.y, touchpos.x, touchpos.y);
        if (this._autoPath.length > 0) {
            this._operateQue = [];
        }
    };
    __egretProto__.onEnterFrame = function (advancedTime) {
        if (this._linkMaze == null) {
            return;
        }
        if (this._isMoving) {
            return;
        }
        if (this._operateQue.length < 1 && this._autoPath.length < 1) {
            return;
        }
        var nextpos;
        if (this._autoPath.length > 0) {
            nextpos = this._linkView.getPointXYByIndex(this._autoPath[0].x, this._autoPath[0].y);
            this._autoPath.shift();
            this.onMoveTo(nextpos.x, nextpos.y);
            return;
        }
        for (var i = 0; i < this._operateQue.length; i++) {
            nextpos = this._linkView.getNextMovePos(this.view.x, this.view.y, this._operateQue[i]);
            if (nextpos != null) {
                this.onMoveTo(nextpos.x, nextpos.y);
                if (i >= 0) {
                    this._operateQue.splice(0, i + 1);
                }
                break;
            }
        }
    };
    __egretProto__.onMoveTo = function (mx, my) {
        this._isMoving = true;
        var tw = egret.Tween.get(this.view);
        tw.to({ x: mx, y: my }, 30).call(this.onMoveOver, this);
        //tw.to({x:mx, y:my}, 1000).call(this.onMoveOver, this);
    };
    __egretProto__.onMoveOver = function () {
        this._isMoving = false;
    };
    Hero.key = "hero";
    return Hero;
})(GameObject);
Hero.prototype.__class__ = "Hero";
