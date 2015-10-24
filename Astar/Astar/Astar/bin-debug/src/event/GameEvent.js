var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, bubbles, cancelable) {
        if (typeof bubbles === "undefined") { bubbles = false; }
        if (typeof cancelable === "undefined") { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
    }
    GameEvent.START_GAME = "start_game";
    GameEvent.GAME_OVER = "game_over";
    GameEvent.KEY_TAP = "key_tap";
    GameEvent.TOUCH_TAP = "touch_tap";
    return GameEvent;
})(egret.Event);
//# sourceMappingURL=GameEvent.js.map
