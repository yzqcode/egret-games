enum listMode
{
    list_None,
    list_Open,
    list_Close,
}

class ANode {
    public x:number = 0;
    public y:number = 0;
    public value:number = 0;

    public parentNode:ANode;
    public version:number = 0;

    private _g:number = 0;
    private _h:number = 0;
    private _f:number = 0;

    public listMode:listMode = listMode.list_None;

    public constructor(x:number, y:number, value:number) {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    public getG(version:number):number {
        return this._g;
    }
    public getH(version:number):number {
        return this._h;
    }
    public getF(version:number):number {
        return this._f;
    }

    public getParentNode(version:number) {
        if (version != this.version) {
            return null;
        }

        return this.parentNode;
    }

    public onClearCal(version:number = 0) {
        this.version = version;
        this.parentNode = null;
        this._g = 0;
        this._h = 0;
        this._f = 0;
    }

    public checkIsNeedChgParent(version:number, checkParent:ANode) {
        if (version != this.version) {
            return;
        }

        var ng:number = (Math.abs(this.x - checkParent.x) + Math.abs(this.y - checkParent.y)) == 2 ? Maze.OBLIQUE : Maze.STEP;
        var newg = ng + checkParent.getG(version);
        if (newg > this._g) {
            return;
        }

        this._g = newg;
        this._f = this._g + this._h;
        this.parentNode = checkParent;
    }

    //dispersion随机离散度
    public onCalculate(version:number, prenode:ANode, endx:number, endy:number, dispersion=0) {
        if (prenode == this) {
            return;
        }

        this.version = version;
        this.parentNode = prenode;
        var ng:number = (Math.abs(this.x-prenode.x) + Math.abs(this.y-prenode.y)) == 2 ? Maze.OBLIQUE : Maze.STEP;
        var parentG:number = this.parentNode != null ? this.parentNode.getG(version) : 0;
        this._g = ng + parentG;
        this._h = (Math.abs(this.x-endx) + Math.abs(this.y-endy)) * Maze.STEP;
        this._f = this._g + this._h;

        if (dispersion > 0) {
            this._f += Math.floor(Math.random() * dispersion);
        }
    }

    public setListMode(version:number, mode:listMode) {
        this.version = version;
        this.listMode = mode;
    }

    public isInOpenList(version:number):boolean {
        if (version != this.version) {
            return false;
        }

        return this.listMode == listMode.list_Open;
    }
    public isInCloseList(version:number):boolean {
        if (version != this.version) {
            return false;
        }

        return this.listMode == listMode.list_Close;
    }
}


