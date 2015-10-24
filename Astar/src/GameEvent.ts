class GameEvent extends egret.Event {
	public static START_GAME:string = "start_game";
	public static GAME_OVER:string = "game_over";
	public static KEY_TAP:string = "key_tap";
	public static TOUCH_TAP:string = "touch_tap";

    public constructor(type:string, bubbles:boolean=false, cancelable:boolean = false) {
        super(type, bubbles, cancelable);
    }
}


