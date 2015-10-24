class GameObject extends egret.EventDispatcher {
	
	public view:egret.DisplayObject;
	public key;

    public constructor() {
        super();
    }

    public isRigidBody():boolean {
    	return false;
    }

    public getMass():number {
    	return 0;
    }

    public onCreate():void {

    }

    public onDestroy():void {
    	if (this.view && this.view.parent) {
    		this.view.parent.removeChild(this.view);
    	}
    }

    public onEnterFrame(advancedTime:number):void {

    }
}


