/**
 * Created by d8q8 on 2014/12/23.
 * @class BaseScreen
 * @constructor
 **/
class BaseScreen extends egret.gui.SkinnableComponent {
    public CLASS_NAME:string = "BaseScreen";

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    protected onAddToStage(e:egret.Event){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
        //初始化
        this.init();
    }

    /**
     * 初始化
     **/
    public init() {
        //todo code

    }

    /**
     * 转字符
     * @returns {string}
     */
    public toString():string {
        //console.log("ClassName",this.CLASS_NAME);
        return this.CLASS_NAME;
    }
}