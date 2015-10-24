var Astar;
(function (Astar) {
    var Maze = (function () {
        function Maze() {
            //当前寻路计算序号
            this._version = 0;
            //离散随机度 (越大两个相同起止点路径越不同) ---注：如果大于零，则不保证选取最小路径
            this._dispersion = 200;
            //行列数
            this._row = 0;
            this._colum = 0;
            //是否允许对角线寻路
            this._isIgnoreCorner = false;
            //开启/关闭列表
            this._openList = [];
            this._closeList = [];
        }
        //初始化二维地图数据
        Maze.prototype.initMaze = function (szmaze, IsIgnoreCorner) {
            if (typeof IsIgnoreCorner === "undefined") { IsIgnoreCorner = false; }
            this._szMapData = [];
            for (var i = 0; i < szmaze.length; i++) {
                this._szMapData[i] = [];
                for (var j = 0; j < szmaze[i].length; j++) {
                    this._szMapData[i].push(new Astar.ANode(j, i, szmaze[i][j]));
                }
            }
            this._isIgnoreCorner = IsIgnoreCorner;
            if (szmaze.length < 1) {
                this._row = 0;
                this._colum = 0;
            } else {
                this._colum = szmaze.length;
                if (szmaze[0].length < 1) {
                    this._row = 0;
                } else {
                    this._row = szmaze[0].length;
                }
            }
        };
        Maze.prototype.getTileStateByIndex = function (x, y) {
            if (x < 0 || x >= this._row || y < 0 || y >= this._colum)
                return null;
            return this._szMapData[y][x].value;
        };

        //寻路，起止点(地图序号，不是坐标)，迭代次数(0为找到终点为止)
        Maze.prototype.findPath = function (startx, starty, endx, endy, iteration) {
            if (typeof iteration === "undefined") { iteration = 0; }
            if (this._szMapData.length < 1)
                return [];
            if (this._szMapData[0].length < 1)
                return [];
            if (startx < 0 || startx >= this._row || starty < 0 || starty >= this._colum)
                return [];
            if (endx < 0 || endx >= this._row || endy < 0 || endy >= this._colum)
                return [];

            //一定次数清理地图
            this._version++;
            if (this._version > 10000000) {
                this._version = 1;
                this.clearMapGrid();
            }
            this._szMapData[starty][startx].onClearCal(this._version);
            this._openList = [this._szMapData[starty][startx]];
            this._closeList = [];
            var pend;
            var count = 0;
            while (this._openList.length > 0) {
                //获取开启列表里F值最小的点
                var minF = this.getOpenListMinFNode();
                this._openList.shift();
                minF.setListMode(this._version, 2 /* list_Close */);
                this._closeList.push(minF);
                if ((minF.x == endx && minF.y == endy) || (iteration > 0 && count >= iteration)) {
                    pend = minF;
                    break;
                }
                this.checkRoundValidGrid(minF, minF.x, minF.y, endx, endy);
                count++;
            }
            if (pend == null)
                return [];
            var szpath = [];
            while (pend != null) {
                if (pend.x == startx && pend.y == starty)
                    break;
                szpath.unshift(new egret.Point(pend.x, pend.y));
                pend = pend.getParentNode(this._version);
            }
            return szpath;
        };

        //清理地图数据
        Maze.prototype.clearMapGrid = function () {
            for (var i = 0; i < this._szMapData.length; i++) {
                for (var j = 0; j < this._szMapData[i].length; j++) {
                    this._szMapData[i][j].onClearCal();
                }
            }
        };

        //获取开启列表中F值最小的点
        Maze.prototype.getOpenListMinFNode = function () {
            var _this = this;
            this._openList.sort(function (a, b) {
                return (a.getF(_this._version) > b.getF(_this._version) ? 1 : -1);
            });
            return this._openList[0];
        };

        //获取周围可行点,并计算G/H/F值
        Maze.prototype.checkRoundValidGrid = function (np, starx, starty, endx, endy) {
            for (var i = np.x - 1; i <= np.x + 1; i++) {
                for (var j = np.y - 1; j <= np.y + 1; j++) {
                    if (i == np.x && j == np.y)
                        continue;
                    if (i < 0 || i >= this._row || j < 0 || j >= this._colum)
                        continue;
                    if (this._szMapData[j][i].value > 0)
                        continue;

                    //判断是否为对角线点
                    if ((i - np.x) * (j - np.y) != 0) {
                        if (this._isIgnoreCorner)
                            continue;

                        //相邻两个正交点不可行，则说被蹩脚了
                        if (this._szMapData[j][np.x].value && this._szMapData[np.y][i].value > 0)
                            continue;
                    }
                    if (this._szMapData[j][i].isInCloseList(this._version))
                        continue;
                    if (this._szMapData[j][i].isInOpenList(this._version)) {
                        if (!this._dispersion) {
                            this._szMapData[j][i].checkIsNeedChgParent(this._version, np);
                        }
                    } else {
                        this._szMapData[j][i].onCalculate(this._version, np, endx, endy, this._dispersion);
                        this._szMapData[j][i].setListMode(this._version, 1 /* list_Open */);
                        this._openList.push(this._szMapData[j][i]);
                    }
                }
            }
        };
        Maze.OBLIQUE = 14;
        Maze.STEP = 10;
        return Maze;
    })();
    Astar.Maze = Maze;
})(Astar || (Astar = {}));
//# sourceMappingURL=Maze.js.map
