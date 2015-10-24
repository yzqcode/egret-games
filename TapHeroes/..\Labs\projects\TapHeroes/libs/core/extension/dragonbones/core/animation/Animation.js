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
    var Animation = (function () {
        /**
         * Creates a new Animation instance and attaches it to the passed Armature.
         * @param armature An Armature to attach this Animation instance to.
         */
        function Animation(armature) {
            /** @private */
            this._animationStateCount = 0;
            this._armature = armature;
            this._animationList = [];
            this._animationStateList = [];
            this._timeScale = 1;
            this._isPlaying = false;
            this.tweenEnabled = true;
        }
        /**
         * Qualifies all resources used by this Animation instance for garbage collection.
         */
        Animation.prototype.dispose = function () {
            if (!this._armature) {
                return;
            }
            var i = this._animationStateList.length;
            while (i--) {
                dragonBones.AnimationState._returnObject(this._animationStateList[i]);
            }
            this._animationList.length = 0;
            this._animationStateList.length = 0;
            this._armature = null;
            this._animationDataList = null;
            this._animationList = null;
            this._animationStateList = null;
        };
        /**
         * Fades the animation with name animation in over a period of time seconds and fades other animations out.
         * @param animationName The name of the AnimationData to play.
         * @param fadeInTime A fade time to apply (>= 0), -1 means use xml data's fadeInTime.
         * @param duration The duration of that Animation. -1 means use xml data's duration.
         * @param playTimes Play times(0:loop forever, >=1:play times, -1~-∞:will fade animation after play complete), 默认使用AnimationData.loop.
         * @param layer The layer of the animation.
         * @param group The group of the animation.
         * @param fadeOutMode Fade out mode (none, sameLayer, sameGroup, sameLayerAndGroup, all).
         * @param pauseFadeOut Pause other animation playing.
         * @param pauseFadeIn Pause this animation playing before fade in complete.
         * @return AnimationState.
         * @see dragonBones.objects.AnimationData.
         * @see dragonBones.animation.AnimationState.
         */
        Animation.prototype.gotoAndPlay = function (animationName, fadeInTime, duration, playTimes, layer, group, fadeOutMode, pauseFadeOut, pauseFadeIn) {
            if (fadeInTime === void 0) { fadeInTime = -1; }
            if (duration === void 0) { duration = -1; }
            if (playTimes === void 0) { playTimes = NaN; }
            if (layer === void 0) { layer = 0; }
            if (group === void 0) { group = null; }
            if (fadeOutMode === void 0) { fadeOutMode = Animation.SAME_LAYER_AND_GROUP; }
            if (pauseFadeOut === void 0) { pauseFadeOut = true; }
            if (pauseFadeIn === void 0) { pauseFadeIn = true; }
            if (!this._animationDataList) {
                return null;
            }
            var i = this._animationDataList.length;
            var animationData;
            while (i--) {
                if (this._animationDataList[i].name == animationName) {
                    animationData = this._animationDataList[i];
                    break;
                }
            }
            if (!animationData) {
                return null;
            }
            this._isPlaying = true;
            this._isFading = true;
            //
            fadeInTime = fadeInTime < 0 ? (animationData.fadeTime < 0 ? 0.3 : animationData.fadeTime) : fadeInTime;
            var durationScale;
            if (duration < 0) {
                durationScale = animationData.scale < 0 ? 1 : animationData.scale;
            }
            else {
                durationScale = duration * 1000 / animationData.duration;
            }
            playTimes = isNaN(playTimes) ? animationData.playTimes : playTimes;
            //根据fadeOutMode,选择正确的animationState执行fadeOut
            var animationState;
            switch (fadeOutMode) {
                case Animation.NONE:
                    break;
                case Animation.SAME_LAYER:
                    i = this._animationStateList.length;
                    while (i--) {
                        animationState = this._animationStateList[i];
                        if (animationState.layer == layer) {
                            animationState.fadeOut(fadeInTime, pauseFadeOut);
                        }
                    }
                    break;
                case Animation.SAME_GROUP:
                    i = this._animationStateList.length;
                    while (i--) {
                        animationState = this._animationStateList[i];
                        if (animationState.group == group) {
                            animationState.fadeOut(fadeInTime, pauseFadeOut);
                        }
                    }
                    break;
                case Animation.ALL:
                    i = this._animationStateList.length;
                    while (i--) {
                        animationState = this._animationStateList[i];
                        animationState.fadeOut(fadeInTime, pauseFadeOut);
                    }
                    break;
                case Animation.SAME_LAYER_AND_GROUP:
                default:
                    i = this._animationStateList.length;
                    while (i--) {
                        animationState = this._animationStateList[i];
                        if (animationState.layer == layer && animationState.group == group) {
                            animationState.fadeOut(fadeInTime, pauseFadeOut);
                        }
                    }
                    break;
            }
            this._lastAnimationState = dragonBones.AnimationState._borrowObject();
            this._lastAnimationState._layer = layer;
            this._lastAnimationState._group = group;
            this._lastAnimationState.autoTween = this.tweenEnabled;
            this._lastAnimationState._fadeIn(this._armature, animationData, fadeInTime, 1 / durationScale, playTimes, pauseFadeIn);
            this.addState(this._lastAnimationState);
            //控制子骨架播放同名动画
            var slotList = this._armature.getSlots(false);
            i = slotList.length;
            while (i--) {
                var slot = slotList[i];
                if (slot.childArmature) {
                    slot.childArmature.animation.gotoAndPlay(animationName, fadeInTime);
                }
            }
            return this._lastAnimationState;
        };
        /**
         * Control the animation to stop with a specified time. If related animationState haven't been created, then create a new animationState.
         * @param animationName The name of the animationState.
         * @param time
         * @param normalizedTime
         * @param fadeInTime A fade time to apply (>= 0), -1 means use xml data's fadeInTime.
         * @param duration The duration of that Animation. -1 means use xml data's duration.
         * @param layer The layer of the animation.
         * @param group The group of the animation.
         * @param fadeOutMode Fade out mode (none, sameLayer, sameGroup, sameLayerAndGroup, all).
         * @return AnimationState.
         * @see dragonBones.objects.AnimationData.
         * @see dragonBones.animation.AnimationState.
         */
        Animation.prototype.gotoAndStop = function (animationName, time, normalizedTime, fadeInTime, duration, layer, group, fadeOutMode) {
            if (normalizedTime === void 0) { normalizedTime = -1; }
            if (fadeInTime === void 0) { fadeInTime = 0; }
            if (duration === void 0) { duration = -1; }
            if (layer === void 0) { layer = 0; }
            if (group === void 0) { group = null; }
            if (fadeOutMode === void 0) { fadeOutMode = Animation.ALL; }
            var animationState = this.getState(animationName, layer);
            if (!animationState) {
                animationState = this.gotoAndPlay(animationName, fadeInTime, duration, NaN, layer, group, fadeOutMode);
            }
            if (normalizedTime >= 0) {
                animationState.setCurrentTime(animationState.totalTime * normalizedTime);
            }
            else {
                animationState.setCurrentTime(time);
            }
            animationState.stop();
            return animationState;
        };
        /**
         * Play the animation from the current position.
         */
        Animation.prototype.play = function () {
            if (!this._animationDataList || this._animationDataList.length == 0) {
                return;
            }
            if (!this._lastAnimationState) {
                this.gotoAndPlay(this._animationDataList[0].name);
            }
            else if (!this._isPlaying) {
                this._isPlaying = true;
            }
            else {
                this.gotoAndPlay(this._lastAnimationState.name);
            }
        };
        Animation.prototype.stop = function () {
            this._isPlaying = false;
        };
        /**
         * Returns the AnimationState named name.
         * @return A AnimationState instance.
         * @see dragonBones.animation.AnimationState.
         */
        Animation.prototype.getState = function (name, layer) {
            if (layer === void 0) { layer = 0; }
            var i = this._animationStateList.length;
            while (i--) {
                var animationState = this._animationStateList[i];
                if (animationState.name == name && animationState.layer == layer) {
                    return animationState;
                }
            }
            return null;
        };
        /**
         * check if contains a AnimationData by name.
         * @return Boolean.
         * @see dragonBones.animation.AnimationData.
         */
        Animation.prototype.hasAnimation = function (animationName) {
            var i = this._animationDataList.length;
            while (i--) {
                if (this._animationDataList[i].name == animationName) {
                    return true;
                }
            }
            return false;
        };
        /** @private */
        Animation.prototype._advanceTime = function (passedTime) {
            if (!this._isPlaying) {
                return;
            }
            var isFading = false;
            passedTime *= this._timeScale;
            var i = this._animationStateList.length;
            while (i--) {
                var animationState = this._animationStateList[i];
                if (animationState._advanceTime(passedTime)) {
                    this.removeState(animationState);
                }
                else if (animationState.fadeState != 1) {
                    isFading = true;
                }
            }
            this._isFading = isFading;
        };
        /** @private */
        //当动画播放过程中Bonelist改变时触发
        Animation.prototype._updateAnimationStates = function () {
            var i = this._animationStateList.length;
            while (i--) {
                this._animationStateList[i]._updateTimelineStates();
            }
        };
        Animation.prototype.addState = function (animationState) {
            if (this._animationStateList.indexOf(animationState) < 0) {
                this._animationStateList.unshift(animationState);
                this._animationStateCount = this._animationStateList.length;
            }
        };
        Animation.prototype.removeState = function (animationState) {
            var index = this._animationStateList.indexOf(animationState);
            if (index >= 0) {
                this._animationStateList.splice(index, 1);
                dragonBones.AnimationState._returnObject(animationState);
                if (this._lastAnimationState == animationState) {
                    if (this._animationStateList.length > 0) {
                        this._lastAnimationState = this._animationStateList[0];
                    }
                    else {
                        this._lastAnimationState = null;
                    }
                }
                this._animationStateCount = this._animationStateList.length;
            }
        };
        Object.defineProperty(Animation.prototype, "movementList", {
            /**
            * Unrecommended API. Recommend use animationList.
            */
            get: function () {
                return this._animationList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation.prototype, "movementID", {
            /**
            * Unrecommended API. Recommend use lastAnimationName.
            */
            get: function () {
                return this.lastAnimationName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation.prototype, "lastAnimationState", {
            /**
             * The last AnimationState this Animation played.
             * @see dragonBones.objects.AnimationData.
             */
            get: function () {
                return this._lastAnimationState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation.prototype, "lastAnimationName", {
            /**
             * The name of the last AnimationData played.
             * @see dragonBones.objects.AnimationData.
             */
            get: function () {
                return this._lastAnimationState ? this._lastAnimationState.name : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation.prototype, "animationList", {
            /**
             * An vector containing all AnimationData names the Animation can play.
             * @see dragonBones.objects.AnimationData.
             */
            get: function () {
                return this._animationList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation.prototype, "isPlaying", {
            /**
             * Is the animation playing.
             * @see dragonBones.animation.AnimationState.
             */
            get: function () {
                return this._isPlaying && !this.isComplete;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation.prototype, "isComplete", {
            /**
             * Is animation complete.
             * @see dragonBones.animation.AnimationState.
             */
            get: function () {
                if (this._lastAnimationState) {
                    if (!this._lastAnimationState.isComplete) {
                        return false;
                    }
                    var i = this._animationStateList.length;
                    while (i--) {
                        if (!this._animationStateList[i].isComplete) {
                            return false;
                        }
                    }
                    return true;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation.prototype, "timeScale", {
            /**
             * The amount by which passed time should be scaled. Used to slow down or speed up animations. Defaults to 1.
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
        Object.defineProperty(Animation.prototype, "animationDataList", {
            /**
             * The AnimationData list associated with this Animation instance.
             * @see dragonBones.objects.AnimationData.
             */
            get: function () {
                return this._animationDataList;
            },
            set: function (value) {
                this._animationDataList = value;
                this._animationList.length = 0;
                for (var key in this._animationDataList) {
                    var animationData = this._animationDataList[key];
                    this._animationList[this._animationList.length] = animationData.name;
                }
            },
            enumerable: true,
            configurable: true
        });
        Animation.NONE = "none";
        Animation.SAME_LAYER = "sameLayer";
        Animation.SAME_GROUP = "sameGroup";
        Animation.SAME_LAYER_AND_GROUP = "sameLayerAndGroup";
        Animation.ALL = "all";
        return Animation;
    })();
    dragonBones.Animation = Animation;
    Animation.prototype.__class__ = "dragonBones.Animation";
})(dragonBones || (dragonBones = {}));
