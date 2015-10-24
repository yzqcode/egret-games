var MazeView = (function (_super) {
    __extends(MazeView, _super);
    function MazeView(x, y, width, height, linkmaze) {
        _super.call(this);
        this._row = 0;
        this._colum = 0;
        this._gridSize = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this._linkMaze = linkmaze;
        this.regTouchTapEvent();
        this.regKeyBoardEvent();
    }
    var __egretProto__ = MazeView.prototype;
    __egretProto__.initMaze = function (mapdata) {
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
    };
    __egretProto__.drawMaze = function (mapdata) {
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
    };
    //======================================utils===========================================
    __egretProto__.getPointXYByIndex = function (i, j) {
        var point = new egret.Point();
        point.x = i * this._gridSize;
        point.y = j * this._gridSize;
        point.x += this.x;
        point.y += this.y;
        return point;
    };
    __egretProto__.getIndexByPointXY = function (x, y) {
        if (this._gridSize < 1) {
            return new egret.Point(0, 0);
        }
        var point = new egret.Point();
        x -= this.x;
        y -= this.y;
        point.x = Math.floor(x / this._gridSize);
        point.y = Math.floor(y / this._gridSize);
        return point;
    };
    __egretProto__.getNextMovePos = function (x, y, dir) {
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
    };
    //======================================player==========================================
    __egretProto__.addHero = function () {
        var hero = ObjectPool.instance().createObject(Hero);
        hero.setLinkAstarMap(this._linkMaze, this);
        hero.addOperationNoti(this);
        var randpos = this.getPointXYByIndex(Math.floor(Math.random() * this._row), Math.floor(Math.random() * this._colum));
        hero.view.x = randpos.x;
        hero.view.y = randpos.y;
        this.addChild(hero.view);
    };
    //======================================keyboardcontrol=================================
    __egretProto__.OnPlayerMoveDir = function (dir, onoff) {
        if (!onoff) {
            return;
        }
        this.dispatchEventWith(GameEvent.KEY_TAP, false, { "dir": dir, "state": onoff });
    };
    // 注册键盘事件
    __egretProto__.regKeyBoardEvent = function () {
        var thisRef = this;
        document.onkeydown = function (evt) {
            if (evt.keyCode == 65 || evt.keyCode == 37 || evt.keyCode == 100) {
                //左
                thisRef.OnPlayerMoveDir(0, true);
            }
            else if (evt.keyCode == 87 || evt.keyCode == 38 || evt.keyCode == 104) {
                //上
                thisRef.OnPlayerMoveDir(1, true);
            }
            else if (evt.keyCode == 68 || evt.keyCode == 39 || evt.keyCode == 102) {
                //右
                thisRef.OnPlayerMoveDir(2, true);
            }
            else if (evt.keyCode == 83 || evt.keyCode == 40 || evt.keyCode == 98) {
                //下
                thisRef.OnPlayerMoveDir(3, true);
            }
        };
        document.onkeyup = function (evt) {
            if (evt.keyCode == 65 || evt.keyCode == 37 || evt.keyCode == 100) {
                //左
                thisRef.OnPlayerMoveDir(0, false);
            }
            else if (evt.keyCode == 87 || evt.keyCode == 38 || evt.keyCode == 104) {
                //上
                thisRef.OnPlayerMoveDir(1, false);
            }
            else if (evt.keyCode == 68 || evt.keyCode == 39 || evt.keyCode == 102) {
                //右
                thisRef.OnPlayerMoveDir(2, false);
            }
            else if (evt.keyCode == 83 || evt.keyCode == 40 || evt.keyCode == 98) {
                //下
                thisRef.OnPlayerMoveDir(3, false);
            }
        };
    };
    //======================================touchcontrol=================================
    __egretProto__.regTouchTapEvent = function () {
        egret.MainContext.instance.stage.touchEnabled = true;
    };
    return MazeView;
})(egret.Sprite);
MazeView.prototype.__class__ = "MazeView";
