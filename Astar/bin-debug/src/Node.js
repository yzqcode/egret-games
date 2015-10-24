var listMode;
(function (listMode) {
    listMode[listMode["list_None"] = 0] = "list_None";
    listMode[listMode["list_Open"] = 1] = "list_Open";
    listMode[listMode["list_Close"] = 2] = "list_Close";
})(listMode || (listMode = {}));
var ANode = (function () {
    function ANode(x, y, value) {
        this.x = 0;
        this.y = 0;
        this.value = 0;
        this.version = 0;
        this._g = 0;
        this._h = 0;
        this._f = 0;
        this.listMode = 0 /* list_None */;
        this.x = x;
        this.y = y;
        this.value = value;
    }
    var __egretProto__ = ANode.prototype;
    __egretProto__.getG = function (version) {
        return this._g;
    };
    __egretProto__.getH = function (version) {
        return this._h;
    };
    __egretProto__.getF = function (version) {
        return this._f;
    };
    __egretProto__.getParentNode = function (version) {
        if (version != this.version) {
            return null;
        }
        return this.parentNode;
    };
    __egretProto__.onClearCal = function (version) {
        if (version === void 0) { version = 0; }
        this.version = version;
        this.parentNode = null;
        this._g = 0;
        this._h = 0;
        this._f = 0;
    };
    __egretProto__.checkIsNeedChgParent = function (version, checkParent) {
        if (version != this.version) {
            return;
        }
        var ng = (Math.abs(this.x - checkParent.x) + Math.abs(this.y - checkParent.y)) == 2 ? Maze.OBLIQUE : Maze.STEP;
        var newg = ng + checkParent.getG(version);
        if (newg > this._g) {
            return;
        }
        this._g = newg;
        this._f = this._g + this._h;
        this.parentNode = checkParent;
    };
    //dispersion随机离散度
    __egretProto__.onCalculate = function (version, prenode, endx, endy, dispersion) {
        if (dispersion === void 0) { dispersion = 0; }
        if (prenode == this) {
            return;
        }
        this.version = version;
        this.parentNode = prenode;
        var ng = (Math.abs(this.x - prenode.x) + Math.abs(this.y - prenode.y)) == 2 ? Maze.OBLIQUE : Maze.STEP;
        var parentG = this.parentNode != null ? this.parentNode.getG(version) : 0;
        this._g = ng + parentG;
        this._h = (Math.abs(this.x - endx) + Math.abs(this.y - endy)) * Maze.STEP;
        this._f = this._g + this._h;
        if (dispersion > 0) {
            this._f += Math.floor(Math.random() * dispersion);
        }
    };
    __egretProto__.setListMode = function (version, mode) {
        this.version = version;
        this.listMode = mode;
    };
    __egretProto__.isInOpenList = function (version) {
        if (version != this.version) {
            return false;
        }
        return this.listMode == 1 /* list_Open */;
    };
    __egretProto__.isInCloseList = function (version) {
        if (version != this.version) {
            return false;
        }
        return this.listMode == 2 /* list_Close */;
    };
    return ANode;
})();
ANode.prototype.__class__ = "ANode";
