/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var dragonBones;
(function (dragonBones) {
    /**
     * @class dragonBones.AnimationEvent
     * @extends dragonBones.Event
     * @classdesc
     * 动画事件
     */
    var AnimationEvent = (function (_super) {
        __extends(AnimationEvent, _super);
        /**
         * 创建一个新的 AnimationEvent 的实例
         * @param type 事件的类型
         * @param cancelable
         */
        function AnimationEvent(type, cancelable) {
            if (cancelable === void 0) { cancelable = false; }
            _super.call(this, type);
        }
        var __egretProto__ = AnimationEvent.prototype;
        Object.defineProperty(AnimationEvent, "MOVEMENT_CHANGE", {
            /**
             * 不推荐使用.
             */
            get: function () {
                return AnimationEvent.FADE_IN;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "movementID", {
            /**
             * 不推荐的API.
             * @member {string} dragonBones.AnimationEvent#movementID
             */
            get: function () {
                return this.animationName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "armature", {
            /**
             * 配发出事件的骨架
             * @member {dragonBones.Armature} dragonBones.AnimationEvent#armature
             */
            get: function () {
                return (this.target);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "animationName", {
            /**
             * 获取动画的名字
             * @returns {string}
             * @member {string} dragonBones.AnimationEvent#animationName
             */
            get: function () {
                return this.animationState.name;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 当动画缓入的时候派发
         */
        AnimationEvent.FADE_IN = "fadeIn";
        /**
         * 当动画缓出的时候派发
         */
        AnimationEvent.FADE_OUT = "fadeOut";
        /**
         * 当动画开始播放时派发
         */
        AnimationEvent.START = "start";
        /**
         * 当动画停止时派发
         */
        AnimationEvent.COMPLETE = "complete";
        /**
         * 当动画播放完一轮后派发
         */
        AnimationEvent.LOOP_COMPLETE = "loopComplete";
        /**
         * 当动画缓入完成时派发
         */
        AnimationEvent.FADE_IN_COMPLETE = "fadeInComplete";
        /**
         * 当动画缓出结束后派发
         */
        AnimationEvent.FADE_OUT_COMPLETE = "fadeOutComplete";
        return AnimationEvent;
    })(dragonBones.Event);
    dragonBones.AnimationEvent = AnimationEvent;
    AnimationEvent.prototype.__class__ = "dragonBones.AnimationEvent";
})(dragonBones || (dragonBones = {}));
