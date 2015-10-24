class Hero extends GameObject {
    public static key: string = "hero";
    private _isMoving:boolean=false;
    private _operateQue: Array<number> = [];
    private _linkView:MazeView;
    private _linkMaze: Astar.Maze;
    private _waitPos: egret.Point;
    private _autoPath:Array<egret.Point>=[];
    public constructor() {
        super();
    }
    public getHeroPos(): egret.Point {
        if (this.view == null) return null;
        return new egret.Point(this.view.x, this.view.y);
    }
    public setLinkAstarMap(astarmap: Astar.Maze, astarview:MazeView) {
        this._linkMaze = astarmap;
        this._linkView = astarview;
        var nsize: number = 20;
        if (this.view==null) {
            this.view = new egret.Sprite();
            this.view.width = nsize;
            this.view.height = nsize;
            var szcolor:Array<number> = [0x22ff00,0x22aaff,0xff5522,0x3455ff,0xff7437];
            (<egret.Sprite>this.view).graphics.beginFill(szcolor[Math.floor(Math.random()*szcolor.length)], 1);
            (<egret.Sprite>this.view).graphics.drawRect(0, 0, nsize, nsize);
            (<egret.Sprite>this.view).graphics.endFill();
        }
    }
    public addOperationNoti(obj: egret.EventDispatcher) {
        obj.addEventListener(GameEvent.KEY_TAP, this.notiPlayerOperate, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
    }
    private notiPlayerOperate(evt: egret.Event) {
        if (!evt.data.hasOwnProperty("dir") || !evt.data.hasOwnProperty("state")) return;
        this._autoPath = [];
        if (this._waitPos != null) {
            var nextpos: egret.Point = this._linkView.getNextMovePos(this.view.x, this.view.y, evt.data.dir);
            if (nextpos != null) {
                this._operateQue = [evt.data.dir];
            }
        } else {
            if (this._operateQue.length >= 2) {
                this._operateQue.shift();
            }
            this._operateQue.push(evt.data.dir);
        }
    }
    //鼠标点击
    public onTouchTap(evt: egret.TouchEvent) {
        var touchpos: egret.Point = this._linkView.getIndexByPointXY(evt.stageX, evt.stageY);
        var startpos: egret.Point;
        if (this._waitPos == null) {
            startpos = this._linkView.getIndexByPointXY(this.view.x, this.view.y);
        } else {
            startpos = this._waitPos;
        }
        this._autoPath = this._linkMaze.findPath(startpos.x, startpos.y, touchpos.x, touchpos.y);
        if (this._autoPath.length > 0) {
            this._operateQue = [];
        }
    }
    public onEnterFrame(advancedTime: number): void {
        if (this._isMoving) return;
        if (this._operateQue.length < 1 && this._autoPath.length < 1) return;
        if (this._linkMaze == null) return;
        var i: number = 0;
        var nextpos: egret.Point;
        if (this._autoPath.length > 0) {
            nextpos = this._linkView.getPointXYByIndex(this._autoPath[0].x, this._autoPath[0].y);
            this._autoPath.shift();
            this.onMoveTo(nextpos.x, nextpos.y);
            return;
        }
        for (i = this._operateQue.length-1;i>=0;i--) {
            nextpos = this._linkView.getNextMovePos(this.view.x, this.view.y, this._operateQue[i]);
            if (nextpos != null) {
                this.onMoveTo(nextpos.x, nextpos.y);
                if (i>0) {
                    this._operateQue.splice(0, i);
                }
                break;
            }
        }
    }
    private onMoveTo(mx:number,my:number) {
        this._isMoving = true;
        egret.Tween.get(this.view).to({ x: mx, y: my }, 30).call(this.onMoveOver, this);
    }
    private onMoveOver() {
        this._isMoving = false;
    }
} 