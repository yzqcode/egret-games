class MazeView extends egret.Sprite {
	private _row:number = 0;
    private _colum:number = 0;
    public _gridSize:number = 0;
    private _linkMaze:Maze;

    public constructor(x:number, y:number, width:number, height:number, linkmaze:Maze) {
    	super();

    	this.x = x;
    	this.y = y;
    	this.width = width;
    	this.height = height;
    	this._linkMaze = linkmaze;

    	this.regTouchTapEvent();
    	this.regKeyBoardEvent();
    }

    public initMaze(mapdata:Array<any>) {
        if (mapdata.length < 1) {
            return;
        }
        if (mapdata[0].length < 1) {
            return;
        }

        this._row = mapdata[0].length;
        this._colum = mapdata.length;
        this._gridSize = Math.floor(Math.min(this.width / this._row, this.height / this._colum));
        this.drawMaze(mapdata);
    }

    private drawMaze(mapdata:Array<any>) {
        this.graphics.clear();
        
        for (var i = 0; i < mapdata.length; i++) {
            for (var j = 0; j < mapdata[i].length; j++) {
                if (mapdata[i][j] != 0) {
                    continue;
                }
                else {
                    this.graphics.beginFill(0x0000ff, 1);
                    this.graphics.drawRect(j * this._gridSize, i * this._gridSize, this._gridSize, this._gridSize);
                }
            }
        }

        this.graphics.endFill();
        this.graphics.lineStyle(2, 0xffffff);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(this._gridSize * this._row, 0);
        this.graphics.lineTo(this._gridSize * this._row, this._gridSize * this._colum);
        this.graphics.lineTo(0, this._gridSize * this._colum);
        this.graphics.lineTo(0, 0);
    }

    //======================================utils===========================================
    public getPointXYByIndex(i, j) {
        var point:egret.Point = new egret.Point();
        point.x = i * this._gridSize;
        point.y = j * this._gridSize;
        point.x += this.x;
        point.y += this.y;
        return point;
    }
    public getIndexByPointXY(x, y) {
        if (this._gridSize < 1) {
            return new egret.Point(0, 0);
        }
        var point:egret.Point = new egret.Point();
        x -= this.x;
        y -= this.y;
        point.x = Math.floor(x / this._gridSize);
        point.y = Math.floor(y / this._gridSize);
        return point;
    }
    public getNextMovePos(x, y, dir) {
        var index = this.getIndexByPointXY(x, y);
        switch (dir) {
            case 0:
                index.x--;
                break;
            case 1:
                index.y--;
                break;
            case 2:
                index.x++;
                break;
            default:
                index.y++;
                break;
        }

        var state = this._linkMaze.getTileStateByIndex(index.x, index.y);
        if (state == null) {
            return null;
        }
        if (state != 0) {
            return null;
        }

        return this.getPointXYByIndex(index.x, index.y);
    }
    //======================================player==========================================
    public addHero() {
        var hero:Hero = <Hero>ObjectPool.instance().createObject(Hero);
        hero.setLinkAstarMap(this._linkMaze, this);
        hero.addOperationNoti(this);

        var randpos: egret.Point = this.getPointXYByIndex(Math.floor(Math.random() * this._row), Math.floor(Math.random() * this._colum)); 
        hero.view.x = randpos.x;
        hero.view.y = randpos.y;
        this.addChild(hero.view);
    }

    //======================================keyboardcontrol=================================
    private OnPlayerMoveDir(dir:number, onoff:boolean) {
    	if (!onoff) {
    		return;
    	}

    	this.dispatchEventWith(GameEvent.KEY_TAP, false, { "dir": dir, "state": onoff });
    }

    // 注册键盘事件
    private regKeyBoardEvent() {
    	var thisRef = this;
    	document.onkeydown = function (evt) {
    		if (evt.keyCode == 65 || evt.keyCode == 37 || evt.keyCode == 100) {
                //左
                thisRef.OnPlayerMoveDir(0, true);
            } else if (evt.keyCode == 87 || evt.keyCode == 38 || evt.keyCode == 104) {
                //上
                thisRef.OnPlayerMoveDir(1, true);
            } else if (evt.keyCode == 68 || evt.keyCode == 39 || evt.keyCode == 102) {
                //右
                thisRef.OnPlayerMoveDir(2, true);
            } else if (evt.keyCode == 83 || evt.keyCode == 40 || evt.keyCode == 98) {
                //下
                thisRef.OnPlayerMoveDir(3, true);
            }
    	};
    	document.onkeyup = function (evt) {
            if (evt.keyCode == 65 || evt.keyCode == 37 || evt.keyCode == 100) {
                //左
                thisRef.OnPlayerMoveDir(0, false);
            } else if (evt.keyCode == 87 || evt.keyCode == 38 || evt.keyCode == 104) {
                //上
                thisRef.OnPlayerMoveDir(1, false);
            } else if (evt.keyCode == 68 || evt.keyCode == 39 || evt.keyCode == 102) {
                //右
                thisRef.OnPlayerMoveDir(2, false);
            } else if (evt.keyCode == 83 || evt.keyCode == 40 || evt.keyCode == 98) {
                //下
                thisRef.OnPlayerMoveDir(3, false);
            }
        };
    }

    //======================================touchcontrol=================================
    private regTouchTapEvent() {
    	egret.MainContext.instance.stage.touchEnabled = true;
    }
}


