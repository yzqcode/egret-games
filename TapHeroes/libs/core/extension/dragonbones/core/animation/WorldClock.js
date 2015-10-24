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
    var WorldClock = (function () {
        /**
         * Creates a new WorldClock instance. (use the static var WorldClock.clock instead).
         */
        function WorldClock(time, timeScale) {
            if (time === void 0) { time = -1; }
            if (timeScale === void 0) { timeScale = 1; }
            this._time = time >= 0 ? time : new Date().getTime() * 0.001;
            this._timeScale = isNaN(timeScale) ? 1 : timeScale;
            this._animatableList = [];
        }
        Object.defineProperty(WorldClock.prototype, "time", {
            get: function () {
                return this._time;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WorldClock.prototype, "timeScale", {
            /**
             * The time scale to apply to the number of second passed to the advanceTime() method.
             * @param A Number to use as a time scale.
             */
            get: function () {
                return this._timeScale;
            },
            set: function (value) {
                if (isNaN(value) || value < 0) {
                    value = 1;
                }
                this._timeScale = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns true if the IAnimatable instance is contained by WorldClock instance.
         * @param An IAnimatable instance (Armature or custom)
         * @return true if the IAnimatable instance is contained by WorldClock instance.
         */
        WorldClock.prototype.contains = function (animatable) {
            return this._animatableList.indexOf(animatable) >= 0;
        };
        /**
         * Add a IAnimatable instance (Armature or custom) to this WorldClock instance.
         * @param An IAnimatable instance (Armature, WorldClock or custom)
         */
        WorldClock.prototype.add = function (animatable) {
            if (animatable && this._animatableList.indexOf(animatable) == -1) {
                this._animatableList.push(animatable);
            }
        };
        /**
         * Remove a IAnimatable instance (Armature or custom) from this WorldClock instance.
         * @param An IAnimatable instance (Armature or custom)
         */
        WorldClock.prototype.remove = function (animatable) {
            var index = this._animatableList.indexOf(animatable);
            if (index >= 0) {
                this._animatableList[index] = null;
            }
        };
        /**
         * Remove all IAnimatable instance (Armature or custom) from this WorldClock instance.
         */
        WorldClock.prototype.clear = function () {
            this._animatableList.length = 0;
        };
        /**
         * Update all registered IAnimatable instance animations using this method typically in an ENTERFRAME Event or with a Timer.
         * @param The amount of second to move the playhead ahead.
         */
        WorldClock.prototype.advanceTime = function (passedTime) {
            if (passedTime === void 0) { passedTime = -1; }
            if (passedTime < 0) {
                passedTime = new Date().getTime() - this._time;
            }
            passedTime *= this._timeScale;
            this._time += passedTime;
            var length = this._animatableList.length;
            if (length == 0) {
                return;
            }
            var currentIndex = 0;
            for (var i = 0; i < length; i++) {
                var animatable = this._animatableList[i];
                if (animatable) {
                    if (currentIndex != i) {
                        this._animatableList[currentIndex] = animatable;
                        this._animatableList[i] = null;
                    }
                    animatable.advanceTime(passedTime);
                    currentIndex++;
                }
            }
            if (currentIndex != i) {
                length = this._animatableList.length;
                while (i < length) {
                    this._animatableList[currentIndex++] = this._animatableList[i++];
                }
                this._animatableList.length = currentIndex;
            }
        };
        /**
         * A global static WorldClock instance ready to use.
         */
        WorldClock.clock = new WorldClock();
        return WorldClock;
    })();
    dragonBones.WorldClock = WorldClock;
    WorldClock.prototype.__class__ = "dragonBones.WorldClock";
})(dragonBones || (dragonBones = {}));
