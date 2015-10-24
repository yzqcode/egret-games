//对象池
var ObjectPool = (function () {
    function ObjectPool() {
        this._isPause = false;
        this._pool = {};
        this._list = [];
        egret.Ticker.getInstance().register(this.onEnterFrame, this);
    }
    var __egretProto__ = ObjectPool.prototype;
    ObjectPool.instance = function () {
        if (ObjectPool._objectPool == null) {
            ObjectPool._objectPool = new ObjectPool();
        }
        return ObjectPool._objectPool;
    };
    __egretProto__.onEnterFrame = function (advancedTime) {
        if (this._isPause) {
            return;
        }
        // Just for copy
        var list = this._list.concat();
        var len = list.length;
        for (var i = 0; i < len; i++) {
            var obj = list[i];
            obj.onEnterFrame(advancedTime);
        }
    };
    __egretProto__.pauseEnterFrame = function () {
        this._isPause = true;
    };
    __egretProto__.resumeEnterFrame = function () {
        this._isPause = false;
    };
    __egretProto__.createObject = function (gameObj) {
        var result;
        var key = gameObj.key;
        var arr = this._pool[key];
        if (arr != null && arr.length > 0) {
            result = arr.shift();
        }
        else {
            result = new gameObj();
            result.key = key;
        }
        result.onCreate();
        this._list.push(result);
        return result;
    };
    __egretProto__.destroyObject = function (obj) {
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
    __egretProto__.destroyObjectByKey = function (key) {
        for (var i = 0; i < this._list.length; i++) {
            if (this._list[i].key == key) {
                this._list[i].onDestroy();
                this._list.splice(i, 1);
                i--;
            }
        }
    };
    __egretProto__.destroyObjectExceptKey = function (key) {
        for (var i = 0; i < this._list.length; i++) {
            if (this._list[i].key != key) {
                this._list[i].onDestroy();
                this._list.splice(i, 1);
                i--;
            }
        }
    };
    __egretProto__.destroyAllObject = function () {
        while (this._list.length) {
            this.destroyObject(this._list[0]);
        }
    };
    return ObjectPool;
})();
ObjectPool.prototype.__class__ = "ObjectPool";
