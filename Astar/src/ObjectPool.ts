//对象池
class ObjectPool {
	private _isPause:boolean = false;
	private _pool = {};
	private _list:Array<any> = [];
	public static _objectPool:ObjectPool;

    public constructor() {
        egret.Ticker.getInstance().register(this.onEnterFrame, this);
    }

    public static instance():ObjectPool {
    	if (ObjectPool._objectPool == null) {
    		ObjectPool._objectPool = new ObjectPool();
    	}

    	return ObjectPool._objectPool;
    }

    private onEnterFrame(advancedTime:number):void {
    	if (this._isPause) {
    		return;
    	}

    	// Just for copy
    	var list = this._list.concat();
    	var len = list.length;
    	for (var i = 0; i < len; i++) {
    		var obj:GameObject = list[i];
    		obj.onEnterFrame(advancedTime);
    	}
    }

    public pauseEnterFrame():void {
    	this._isPause = true;
    }
    public resumeEnterFrame():void {
    	this._isPause = false;
    }

    public createObject(gameObj:any):GameObject {
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
    }

    public destroyObject(obj:GameObject) {
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
    }
    public destroyObjectByKey(key:string) {
    	for (var i = 0; i < this._list.length; i++) {
    		if (this._list[i].key == key) {
    			this._list[i].onDestroy();
    			this._list.splice(i, 1);
    			i--;
    		}
    	}
    }
    public destroyObjectExceptKey(key:string) {
    	for (var i = 0; i < this._list.length; i++) {
    		if (this._list[i].key != key) {
    			this._list[i].onDestroy();
    			this._list.splice(i, 1);
    			i--;
    		}
    	}
    }
    public destroyAllObject() {
    	while (this._list.length) {
    		this.destroyObject(this._list[0]);
    	}
    }
}


