class Hero extends GameObject {
    public static key:string = "hero";

    private _isMoving:boolean = false;
    private _operateQue:Array<number> = [];
    private _linkView:MazeView;
    private _linkMaze:Maze;
    private _autoPath:Array<egret.Point> = [];

    public constructor() {
        super();
    }

    public getHeroPos():egret.Point {
        if (this.view == null) {
            return null;
        }

        return new egret.Point(this.view.x, this.view.y);
    }

    public setLinkAstarMap(astarmap:Maze, astarview:MazeView) {
        this._linkMaze = astarmap;
        this._linkView = astarview;

        var nsize:number = this._linkView._gridSize;

        if (this.view == null) {
            this.view = new egret.Sprite();
            this.view.width = nsize;
            this.view.height = nsize;

            var szcolor:Array<number> = [0x22ff00,0x22aaff,0xff5522,0x3455ff,0xff7437];
            (<egret.Sprite>this.view).graphics.beginFill(szcolor[Math.floor(Math.random()*szcolor.length)], 1);
            (<egret.Sprite>this.view).graphics.drawRect(0, 0, nsize, nsize);
            (<egret.Sprite>this.view).graphics.endFill();
        }
    }

    public addOperationNoti(obj:egret.EventDispatcher) {
        obj.addEventListener(GameEvent.KEY_TAP, this.notiPlayerOperate, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }

    private notiPlayerOperate(evt:egret.Event) {
        if (!evt.data.hasOwnProperty("dir") 
            || !evt.data.hasOwnProperty("state")) {
            return;
        }

        this._autoPath = [];

        if (this._operateQue.length >= 2) {
            this._operateQue.shift();
        }
        this._operateQue.push(evt.data.dir);
    }

    //鼠标点击
    public onTouchTap(evt:egret.TouchEvent) {
        var touchpos:egret.Point = this._linkView.getIndexByPointXY(evt.stageX, evt.stageY);
        var startpos:egret.Point;

        //console.log("x: " + touchpos.x + " y:" + touchpos.y);

        startpos = this._linkView.getIndexByPointXY(this.view.x, this.view.y);

        this._autoPath = this._linkMaze.findPath(startpos.x, startpos.y, touchpos.x, touchpos.y);
        if (this._autoPath.length > 0) {
            this._operateQue = [];
        }
    }

    public onEnterFrame(advancedTime:number) {
        if (this._linkMaze == null) {
            return;
        }

        if (this._isMoving) {
            return;
        }
        if (this._operateQue.length < 1 
            && this._autoPath.length < 1) {
            return;
        }

        var nextpos:egret.Point;
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
                    this._operateQue.splice(0, i+1);
                }
                break;
            }
        }
    }

    private onMoveTo(mx:number, my:number) {
        this._isMoving = true;
        var tw = egret.Tween.get(this.view);

        tw.to({x:mx, y:my}, 30).call(this.onMoveOver, this);
        //tw.to({x:mx, y:my}, 1000).call(this.onMoveOver, this);
    }

    private onMoveOver() {
        this._isMoving = false;
    }
}


