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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dragonBones;
(function (dragonBones) {
    var FrameEvent = (function (_super) {
        __extends(FrameEvent, _super);
        /**
         * Creates a new FrameEvent instance.
         * @param type
         * @param cancelable
         */
        function FrameEvent(type, cancelable) {
            if (cancelable === void 0) { cancelable = false; }
            _super.call(this, type);
        }
        Object.defineProperty(FrameEvent, "MOVEMENT_FRAME_EVENT", {
            get: function () {
                return FrameEvent.ANIMATION_FRAME_EVENT;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FrameEvent.prototype, "armature", {
            /**
             * The armature that is the target of this event.
             */
            get: function () {
                return (this.target);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Dispatched when the animation of the armatrue enter a frame.
         */
        FrameEvent.ANIMATION_FRAME_EVENT = "animationFrameEvent";
        /**
         *
         */
        FrameEvent.BONE_FRAME_EVENT = "boneFrameEvent";
        return FrameEvent;
    })(dragonBones.Event);
    dragonBones.FrameEvent = FrameEvent;
    FrameEvent.prototype.__class__ = "dragonBones.FrameEvent";
})(dragonBones || (dragonBones = {}));
