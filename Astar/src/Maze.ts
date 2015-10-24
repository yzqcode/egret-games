class Maze {
    public static OBLIQUE:number = 14;
    public static STEP:number = 10;

    //当前寻路计算序号
    private _version:number = 0;
    //离散随机度 (越大两个相同起止点路径越不同) ---注：如果大于零，则不保证选取最小路径
    //private _dispersion:number = 200;
    // TODO:
    private _dispersion:number = 200;
    //行列数
    private _row:number = 0;
    private _colum:number = 0;
    //地图数据
    private _szMapData:Array<Array<ANode>>;
    //是否允许对角线寻路 
    private _isIgnoreCorner:boolean = false;
    //开启/关闭列表
    private _openList:Array<ANode> = [];
    private _closeList:Array<ANode> = [];

    //初始化二维地图数据
    public initMaze(szmaze:Array<any>,  IsIgnoreCorner:boolean = false) {
        this._szMapData = [];

        for (var i = 0; i < szmaze.length; i++) {
            this._szMapData[i] = [];
            for (var j = 0; j < szmaze[i].length; j++) {
                var node = new ANode(j, i, szmaze[i][j]);
                this._szMapData[i].push(node);

                //console.log("-------");
                //console.log("x " + node.x);
                //console.log("y " + node.y);
                //console.log("value " + node.value);
            }
        }

        this._isIgnoreCorner = IsIgnoreCorner;

        if (szmaze.length < 1) {
            this._row = 0;
            this._colum = 0;
        }
        else {
            this._colum = szmaze.length;
            if (szmaze[0].length < 1) {
                this._row = 0;
            }
            else {
                this._row = szmaze[0].length;
            }
        }
    }

    public getTileStateByIndex(x, y) {
        if (x < 0 || x >= this._row || y < 0 || y >= this._colum) {
            return null;
        }

        return this._szMapData[y][x].value;
    }

    //寻路，起止点(地图序号，不是坐标)，迭代次数(0为找到终点为止)
    public findPath(startx, starty, endx, endy, iteration = 0): Array<egret.Point> {
        if (this._szMapData.length < 1) {
            return;
        }
        if (this._szMapData[0].length < 1) {
            return;
        }
        if (startx < 0 || startx >= this._row
            || starty < 0 || starty >= this._colum) {
            return;
        }
        if (endx < 0 || endx >= this._row
            || endy < 0 || endy >= this._colum) {
            return;
        }

        this._version++;

        //一定次数清理地图
        if (this._version > 10000000) {
            this._version = 1;
            this.clearMapGrid();
        }

        this._szMapData[starty][startx].onClearCal(this._version);
        this._openList = [this._szMapData[starty][startx]];
        this._closeList = [];

        var end_node:ANode;
        var count:number = 0;

        while (this._openList.length > 0) {
            //获取开启列表里F值最小的点
            var minF:ANode = this.getOpenListMinFNode();
            this._openList.shift(); //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
            minF.setListMode(this._version, listMode.list_Close);
            this._closeList.push(minF);
            if ((minF.x == endx && minF.y == endy) 
                || (iteration > 0 && count >= iteration)) {
                end_node = minF;
                break;
            }

            //console.log("x: " + minF.x + " y: " + minF.y);

            this.checkRoundValidGrid(minF, minF.x, minF.y, endx, endy);
            count++;
        }

        if (end_node == null) return [];

        var szpath: Array<egret.Point> = [];
        while (end_node != null) {
            if (end_node.x == startx && end_node.y == starty) {
                break;
            }

            // unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
            var current_node = new egret.Point(end_node.x, end_node.y);
            szpath.unshift(current_node);

            end_node = end_node.getParentNode(this._version);
        }

        return szpath;
    }

    //清理地图数据
    private clearMapGrid() {
        for (var i = 0; i < this._szMapData.length; i++) {
            for (var j = 0; j < this._szMapData[i].length; j++) {
                this._szMapData[i][j].onClearCal();
            }
        }
    }

    //获取开启列表中F值最小的点
    private getOpenListMinFNode():ANode {
        this._openList.sort((a, b) => (a.getF(this._version) > b.getF(this._version) ? 1 : -1));
        return this._openList[0];
    }

    //获取周围可行点,并计算G/H/F值
    private checkRoundValidGrid(np:ANode, startx:number, starty:number, endx:number, endy:number) {
        for (var i = np.x-1; i <= np.x+1; i++) {
            for (var j = np.y-1; j <= np.y+1; j++) {
                if (i == np.x && j == np.y) {
                    continue;
                }
                if (i < 0 || i >= this._row) {
                    continue;
                }
                if (j < 0 || j >= this._colum) {
                    continue;
                }
                if (this._szMapData[j][i].value > 0) {
                    continue;
                }

                //判断是否为对角线点
                if ((i-np.x) * (j-np.y) != 0) {
                    if (this._isIgnoreCorner) {
                        continue;
                    }
                    //相邻两个正交点不可行，则说被蹩脚了
                    if (this._szMapData[j][np.x].value > 0
                        || this._szMapData[np.y][i].value > 0) {
                        continue;
                    }
                }

                if (this._szMapData[j][i].isInCloseList(this._version)) {
                    continue;
                }

                if (this._szMapData[j][i].isInOpenList(this._version)) {
                    if (this._dispersion == 0) {
                        this._szMapData[j][i].checkIsNeedChgParent(this._version, np);
                    }
                }
                else {
                    this._szMapData[j][i].onCalculate(this._version, np, endx, endy, this._dispersion);
                    this._szMapData[j][i].setListMode(this._version, listMode.list_Open);
                    this._openList.push(this._szMapData[j][i]);
                }
            }
        }
    }
}


