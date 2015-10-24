var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
    }
    var __egretProto__ = GameEvent.prototype;
    GameEvent.START_GAME = "start_game";
    GameEvent.GAME_OVER = "game_over";
    GameEvent.KEY_TAP = "key_tap";
    GameEvent.TOUCH_TAP = "touch_tap";
    return GameEvent;
})(egret.Event);
GameEvent.prototype.__class__ = "GameEvent";
