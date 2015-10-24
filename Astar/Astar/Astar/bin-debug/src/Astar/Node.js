var Astar;
(function (Astar) {
    (function (listMode) {
        listMode[listMode["list_None"] = 0] = "list_None";
        listMode[listMode["list_Open"] = 1] = "list_Open";
        listMode[listMode["list_Close"] = 2] = "list_Close";
    })(Astar.listMode || (Astar.listMode = {}));
    var listMode = Astar.listMode;
    ;
    var ANode = (function () {
        function ANode(x, y, value) {
            this.x = 0;
            this.y = 0;
            this._g = 0;
            this._h = 0;
            this._f = 0;
            this.value = 0;
            this.version = 0;
            this.listMode = 0 /* list_None */;
            this.x = x;
            this.y = y;
            this.value = value;
        }
        ANode.prototype.getG = function (version) {
            return this._g;
        };
        ANode.prototype.getH = function (version) {
            return this._h;
        };
        ANode.prototype.getF = function (version) {
            return this._f;
        };
        ANode.prototype.getParentNode = function (version) {
            if (version != this.version)
                return null;
            return this.parentNode;
        };
        ANode.prototype.onClearCal = function (version) {
            if (typeof version === "undefined") { version = 0; }
            this.version = version;
            this.parentNode = null;
            this._g = 0;
            this._h = 0;
            this._f = 0;
        };
        ANode.prototype.checkIsNeedChgParent = function (version, checkparent) {
            if (version != this.version)
                return;
            var ng = (Math.abs(this.x - checkparent.x) + Math.abs(this.y - checkparent.y)) == 2 ? Astar.Maze.STEP : Astar.Maze.OBLIQUE;
            var newg = ng + checkparent.getG(version);
            if (newg > this._g)
                return;
            this._g = newg;
            this._f = this._g + this._h;
            this.parentNode = checkparent;
        };

        //dispersion随机离散度
        ANode.prototype.onCalculate = function (version, prenode, endx, endy, dispersion) {
            if (typeof dispersion === "undefined") { dispersion = 0; }
            if (prenode == this)
                return;
            this.version = version;
            this.parentNode = prenode;
            var ng = (Math.abs(this.x - prenode.x) + Math.abs(this.y - prenode.y)) == 2 ? Astar.Maze.OBLIQUE : Astar.Maze.STEP;
            var parentG = this.parentNode != null ? this.parentNode.getG(version) : 0;
            this._g = ng + parentG;
            this._h = (Math.abs(this.x - endx) + Math.abs(this.y - endy)) * Astar.Maze.STEP;
            this._f = this._g + this._h;
            if (dispersion > 0) {
                this._f += Math.floor(Math.random() * dispersion);
            }
        };
        ANode.prototype.setListMode = function (version, mode) {
            this.version = version;
            this.listMode = mode;
        };
        ANode.prototype.isInOpenList = function (version) {
            if (this.version != version)
                return false;
            return this.listMode == 1 /* list_Open */;
        };
        ANode.prototype.isInCloseList = function (version) {
            if (this.version != version)
                return false;
            return this.listMode == 2 /* list_Close */;
        };
        return ANode;
    })();
    Astar.ANode = ANode;
})(Astar || (Astar = {}));
//# sourceMappingURL=Node.js.map
