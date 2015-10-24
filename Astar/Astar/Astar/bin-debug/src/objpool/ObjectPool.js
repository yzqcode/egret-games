//�����
var ObjectPool = (function () {
    function ObjectPool() {
        this._isPause = false;
        this._pool = {};
        this._list = [];
        egret.Ticker.getInstance().register(this.onEnterFrame, this);
    }
    ObjectPool.instance = function () {
        if (ObjectPool._objectPool == null) {
            ObjectPool._objectPool = new ObjectPool();
        }
        return ObjectPool._objectPool;
    };

    ObjectPool.prototype.onEnterFrame = function (advancedTime) {
        if (this._isPause)
            return;
        var list = this._list.concat();
        for (var i = 0, length = list.length; i < length; i++) {
            var obj = list[i];
            obj.onEnterFrame(advancedTime);
        }
    };

    ObjectPool.prototype.pauseEnterFrame = function () {
        this._isPause = true;
    };
    ObjectPool.prototype.resumeEnterFrame = function () {
        this._isPause = false;
    };

    ObjectPool.prototype.createObject = function (gameObj) {
        var result;
        var key = gameObj.key;
        var arr = this._pool[key];
        if (arr != null && arr.length) {
            result = arr.shift();
        } else {
            result = new gameObj();
            result.key = key;
        }
        result.onCreate();
        this._list.push(result);
        return result;
    };
    ObjectPool.prototype.destroyObject = function (obj) {
        var key = obj.key;
        if (this._pool[key] == null) {
            this._pool[key] = [];
        }
        if (this._pool[key].indexOf(obj) == -1) {
            this._pool[key].push(obj);
        }
        obj.onDestroy();
        var index = this._list.indexOf(obj);
        if (index != -1) {
            this._list.splice(index, 1);
        }
    };

    ObjectPool.prototype.destroyObjectByKey = function (key) {
        for (var i = 0; i < this._list.length; i++) {
            if (this._list[i].key == key) {
                this._list[i].onDestroy();
                this._list.splice(i, 1);
                i--;
            }
        }
    };
    ObjectPool.prototype.destroyObjectExceptKey = function (key) {
        for (var i = 0; i < this._list.length; i++) {
            if (this._list[i].key != key) {
                this._list[i].onDestroy();
                this._list.splice(i, 1);
                i--;
            }
        }
    };
    ObjectPool.prototype.destroyAllObject = function () {
        while (this._list.length) {
            this.destroyObject(this._list[0]);
        }
    };
    return ObjectPool;
})();
//# sourceMappingURL=ObjectPool.js.map
