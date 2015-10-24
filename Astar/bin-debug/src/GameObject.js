var GameObject = (function (_super) {
    __extends(GameObject, _super);
    function GameObject() {
        _super.call(this);
    }
    var __egretProto__ = GameObject.prototype;
    __egretProto__.isRigidBody = function () {
        return false;
    };
    __egretProto__.getMass = function () {
        return 0;
    };
    __egretProto__.onCreate = function () {
    };
    __egretProto__.onDestroy = function () {
        if (this.view && this.view.parent) {
            this.view.parent.removeChild(this.view);
        }
    };
    __egretProto__.onEnterFrame = function (advancedTime) {
    };
    return GameObject;
})(egret.EventDispatcher);
GameObject.prototype.__class__ = "GameObject";
