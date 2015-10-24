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
declare module dragonBones {
    class DragonBones {
        static DATA_VERSION: string;
        static VERSION: string;
        constructor();
    }
}
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
declare module dragonBones {
    class Point {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        toString(): string;
    }
}
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
declare module dragonBones {
    class Rectangle {
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(x?: number, y?: number, width?: number, height?: number);
    }
}
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
declare module dragonBones {
    class Matrix {
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
        constructor();
        invert(): void;
    }
}
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
declare module dragonBones {
    class EventDispatcher {
        private _listenersMap;
        constructor();
        hasEventListener(type: string): boolean;
        addEventListener(type: string, listener: Function): void;
        removeEventListener(type: string, listener: Function): void;
        removeAllEventListeners(type: string): void;
        dispatchEvent(event: Event): void;
    }
}
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
declare module dragonBones {
    class Event {
        type: string;
        target: EventDispatcher;
        constructor(type: string);
    }
}
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
declare module dragonBones {
    class AnimationEvent extends Event {
        /**
         * 不推荐使用.
         */
        static MOVEMENT_CHANGE: string;
        /**
         * Dispatched when the playback of an animation fade in.
         */
        static FADE_IN: string;
        /**
         * Dispatched when the playback of an animation fade out.
         */
        static FADE_OUT: string;
        /**
         * Dispatched when the playback of an animation starts.
         */
        static START: string;
        /**
         * Dispatched when the playback of a animation stops.
         */
        static COMPLETE: string;
        /**
         * Dispatched when the playback of a animation completes a loop.
         */
        static LOOP_COMPLETE: string;
        /**
         * Dispatched when the playback of an animation fade in complete.
         */
        static FADE_IN_COMPLETE: string;
        /**
         * Dispatched when the playback of an animation fade out complete.
         */
        static FADE_OUT_COMPLETE: string;
        /**
         * 不推荐的API.
         */
        movementID: string;
        /**
         * The animationState instance.
         */
        animationState: AnimationState;
        /**
         * The armature that is the taget of this event.
         */
        armature: Armature;
        animationName: string;
        /**
         * Creates a new AnimationEvent instance.
         * @param type
         * @param cancelable
         */
        constructor(type: string, cancelable?: boolean);
    }
}
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
declare module dragonBones {
    class ArmatureEvent extends Event {
        /**
         * Dispatched after a successful z order update.
         */
        static Z_ORDER_UPDATED: string;
        constructor(type: string);
    }
}
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
declare module dragonBones {
    class FrameEvent extends Event {
        static MOVEMENT_FRAME_EVENT: string;
        /**
         * Dispatched when the animation of the armatrue enter a frame.
         */
        static ANIMATION_FRAME_EVENT: string;
        /**
         *
         */
        static BONE_FRAME_EVENT: string;
        /**
         * The entered frame label.
         */
        frameLabel: string;
        bone: Bone;
        /**
         * The armature that is the target of this event.
         */
        armature: Armature;
        /**
         * The animationState instance.
         */
        animationState: AnimationState;
        /**
         * Creates a new FrameEvent instance.
         * @param type
         * @param cancelable
         */
        constructor(type: string, cancelable?: boolean);
    }
}
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
declare module dragonBones {
    interface IAnimatable {
        /**
         * Update the animation using this method typically in an ENTERFRAME Event or with a Timer.
         * @param The amount of second to move the playhead ahead.
         */
        advanceTime(passedTime: number): void;
    }
}
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
declare module dragonBones {
    class WorldClock implements IAnimatable {
        /**
         * A global static WorldClock instance ready to use.
         */
        static clock: WorldClock;
        private _animatableList;
        private _time;
        time: number;
        private _timeScale;
        /**
         * The time scale to apply to the number of second passed to the advanceTime() method.
         * @param A Number to use as a time scale.
         */
        timeScale: number;
        /**
         * Creates a new WorldClock instance. (use the static var WorldClock.clock instead).
         */
        constructor(time?: number, timeScale?: number);
        /**
         * Returns true if the IAnimatable instance is contained by WorldClock instance.
         * @param An IAnimatable instance (Armature or custom)
         * @return true if the IAnimatable instance is contained by WorldClock instance.
         */
        contains(animatable: IAnimatable): boolean;
        /**
         * Add a IAnimatable instance (Armature or custom) to this WorldClock instance.
         * @param An IAnimatable instance (Armature, WorldClock or custom)
         */
        add(animatable: IAnimatable): void;
        /**
         * Remove a IAnimatable instance (Armature or custom) from this WorldClock instance.
         * @param An IAnimatable instance (Armature or custom)
         */
        remove(animatable: IAnimatable): void;
        /**
         * Remove all IAnimatable instance (Armature or custom) from this WorldClock instance.
         */
        clear(): void;
        /**
         * Update all registered IAnimatable instance animations using this method typically in an ENTERFRAME Event or with a Timer.
         * @param The amount of second to move the playhead ahead.
         */
        advanceTime(passedTime?: number): void;
    }
}
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
declare module dragonBones {
    class TimelineState {
        private static HALF_PI;
        private static DOUBLE_PI;
        private static _pool;
        /** @private */
        static _borrowObject(): TimelineState;
        /** @private */
        static _returnObject(timeline: TimelineState): void;
        /** @private */
        static _clear(): void;
        name: string;
        /** @private */
        _weight: number;
        /** @private */
        _transform: DBTransform;
        /** @private */
        _pivot: Point;
        /** @private */
        _blendEnabled: boolean;
        /** @private */
        _isComplete: boolean;
        /** @private */
        _animationState: AnimationState;
        private _totalTime;
        private _currentTime;
        private _currentFrameIndex;
        private _currentFramePosition;
        private _currentFrameDuration;
        private _tweenEasing;
        private _tweenTransform;
        private _tweenScale;
        private _tweenColor;
        private _rawAnimationScale;
        private _updateMode;
        private _armature;
        private _animation;
        private _bone;
        private _timelineData;
        private _originTransform;
        private _originPivot;
        private _durationTransform;
        private _durationPivot;
        private _durationColor;
        constructor();
        private clear();
        /** @private */
        _fadeIn(bone: Bone, animationState: AnimationState, timelineData: TransformTimeline): void;
        /** @private */
        _fadeOut(): void;
        /** @private */
        _update(progress: number): void;
        private updateMultipleFrame(progress);
        private updateToNextFrame(currentPlayTimes?);
        private updateTween();
        private updateSingleFrame();
    }
}
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
declare module dragonBones {
    class AnimationState {
        private static _pool;
        /** @private */
        static _borrowObject(): AnimationState;
        /** @private */
        static _returnObject(animationState: AnimationState): void;
        /** @private */
        static _clear(): void;
        /**
         * Sometimes, we want slots controlled by a spedific animation state when animation is doing mix or addition.
         * It determine if animation's color change, displayIndex change, visible change can apply to its display
         */
        displayControl: boolean;
        /**
         * If animation mixing use additive blending.
         */
        additiveBlending: boolean;
        /**
         * If animation auto fade out after play complete.
         */
        autoFadeOut: boolean;
        /**
         * Duration of fade out. By default, it equals to fade in time.
         */
        fadeOutTime: number;
        /**
         * The weight of animation.
         */
        weight: number;
        /**
         * If auto genterate tween between keyframes.
         */
        autoTween: boolean;
        /**
         * If generate tween between the lastFrame to the first frame for loop animation.
         */
        lastFrameAutoTween: boolean;
        /** @private */
        _layer: number;
        /** @private */
        _group: string;
        private _armature;
        private _timelineStateList;
        private _boneMasks;
        private _isPlaying;
        private _time;
        private _currentFrameIndex;
        private _currentFramePosition;
        private _currentFrameDuration;
        private _pausePlayheadInFade;
        private _isFadeOut;
        private _fadeTotalWeight;
        private _fadeWeight;
        private _fadeCurrentTime;
        private _fadeBeginTime;
        private _name;
        private _clip;
        private _isComplete;
        private _currentPlayTimes;
        private _totalTime;
        private _currentTime;
        private _fadeState;
        private _fadeTotalTime;
        private _timeScale;
        private _playTimes;
        constructor();
        private clear();
        containsBoneMask(boneName: string): boolean;
        /**
         * Adds a bone which should be animated. This allows you to reduce the number of animations you have to create.
         * @param boneName Bone's name.
         * @param ifInvolveChildBones if involve child bone's animation.
         */
        addBoneMask(boneName: string, ifInvolveChildBones?: boolean): AnimationState;
        /**
         * Removes a bone which was supposed be animated.
         * @param boneName Bone's timeline name.
         * @param ifInvolveChildBones If involved child bone's timeline.
         */
        removeBoneMask(boneName: string, ifInvolveChildBones?: boolean): AnimationState;
        removeAllMixingTransform(): AnimationState;
        private addBoneToBoneMask(boneName);
        private removeBoneFromBoneMask(boneName);
        /**
         * @private
         * Update timeline state based on mixing transforms and clip.
         */
        _updateTimelineStates(): void;
        private addTimelineState(timelineName);
        private removeTimelineState(timelineState);
        /**
         * Play the current animation. 如果动画已经播放完毕, 将不会继续播放.
         */
        play(): AnimationState;
        /**
         * Stop playing current animation.
         */
        stop(): AnimationState;
        /** @private */
        _fadeIn(armature: Armature, clip: AnimationData, fadeTotalTime: number, timeScale: number, playTimes: number, pausePlayhead: boolean): AnimationState;
        /**
         * Fade out the animation state
         * @param fadeTotalTime fadeOutTime
         * @param pausePlayhead pauseBeforeFadeOutComplete pause the animation before fade out complete
         */
        fadeOut(fadeTotalTime: number, pausePlayhead: boolean): AnimationState;
        /** @private */
        _advanceTime(passedTime: number): boolean;
        private advanceFadeTime(passedTime);
        private advanceTimelinesTime(passedTime);
        private updateMainTimeline(isThisComplete);
        private hideBones();
        setAdditiveBlending(value: boolean): AnimationState;
        setAutoFadeOut(value: boolean, fadeOutTime?: number): AnimationState;
        setWeight(value: number): AnimationState;
        setFrameTween(autoTween: boolean, lastFrameAutoTween: boolean): AnimationState;
        setCurrentTime(value: number): AnimationState;
        setTimeScale(value: number): AnimationState;
        setPlayTimes(value?: number): AnimationState;
        /**
         * The name of the animation state.
         */
        name: string;
        /**
         * The layer of the animation. When calculating the final blend weights, animations in higher layers will get their weights.
         */
        layer: number;
        /**
         * The group of the animation.
         */
        group: string;
        /**
         * The clip that is being played by this animation state.
         * @see dragonBones.objects.AnimationData.
         */
        clip: AnimationData;
        /**
         * Is animation complete.
         */
        isComplete: boolean;
        /**
         * Is animation playing.
         */
        isPlaying: boolean;
        /**
         * Current animation played times
         */
        currentPlayTimes: number;
        /**
         * The length of the animation clip in seconds.
         */
        totalTime: number;
        /**
         * The current time of the animation.
         */
        currentTime: number;
        fadeWeight: number;
        fadeState: number;
        fadeTotalTime: number;
        /**
         * The amount by which passed time should be scaled. Used to slow down or speed up the animation. Defaults to 1.
         */
        timeScale: number;
        /**
         * playTimes Play times(0:loop forever, 1~+∞:play times, -1~-∞:will fade animation after play complete).
         */
        playTimes: number;
    }
}
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
declare module dragonBones {
    class Animation {
        static NONE: string;
        static SAME_LAYER: string;
        static SAME_GROUP: string;
        static SAME_LAYER_AND_GROUP: string;
        static ALL: string;
        /**
         * Whether animation tweening is enabled or not.
         */
        tweenEnabled: boolean;
        private _armature;
        private _animationStateList;
        private _animationDataList;
        private _animationList;
        private _isPlaying;
        private _timeScale;
        /** @private */
        _lastAnimationState: AnimationState;
        /** @private */
        _isFading: boolean;
        /** @private */
        _animationStateCount: number;
        /**
         * Creates a new Animation instance and attaches it to the passed Armature.
         * @param armature An Armature to attach this Animation instance to.
         */
        constructor(armature: Armature);
        /**
         * Qualifies all resources used by this Animation instance for garbage collection.
         */
        dispose(): void;
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
        gotoAndPlay(animationName: string, fadeInTime?: number, duration?: number, playTimes?: number, layer?: number, group?: string, fadeOutMode?: string, pauseFadeOut?: boolean, pauseFadeIn?: boolean): AnimationState;
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
        gotoAndStop(animationName: string, time: number, normalizedTime?: number, fadeInTime?: number, duration?: number, layer?: number, group?: string, fadeOutMode?: string): AnimationState;
        /**
         * Play the animation from the current position.
         */
        play(): void;
        stop(): void;
        /**
         * Returns the AnimationState named name.
         * @return A AnimationState instance.
         * @see dragonBones.animation.AnimationState.
         */
        getState(name: string, layer?: number): AnimationState;
        /**
         * check if contains a AnimationData by name.
         * @return Boolean.
         * @see dragonBones.animation.AnimationData.
         */
        hasAnimation(animationName: string): boolean;
        /** @private */
        _advanceTime(passedTime: number): void;
        /** @private */
        _updateAnimationStates(): void;
        private addState(animationState);
        private removeState(animationState);
        /**
        * Unrecommended API. Recommend use animationList.
        */
        movementList: string[];
        /**
        * Unrecommended API. Recommend use lastAnimationName.
        */
        movementID: string;
        /**
         * The last AnimationState this Animation played.
         * @see dragonBones.objects.AnimationData.
         */
        lastAnimationState: AnimationState;
        /**
         * The name of the last AnimationData played.
         * @see dragonBones.objects.AnimationData.
         */
        lastAnimationName: string;
        /**
         * An vector containing all AnimationData names the Animation can play.
         * @see dragonBones.objects.AnimationData.
         */
        animationList: string[];
        /**
         * Is the animation playing.
         * @see dragonBones.animation.AnimationState.
         */
        isPlaying: boolean;
        /**
         * Is animation complete.
         * @see dragonBones.animation.AnimationState.
         */
        isComplete: boolean;
        /**
         * The amount by which passed time should be scaled. Used to slow down or speed up animations. Defaults to 1.
         */
        timeScale: number;
        /**
         * The AnimationData list associated with this Animation instance.
         * @see dragonBones.objects.AnimationData.
         */
        animationDataList: AnimationData[];
    }
}
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
declare module dragonBones {
    class ColorTransform {
        alphaMultiplier: number;
        alphaOffset: number;
        blueMultiplier: number;
        blueOffset: number;
        greenMultiplier: number;
        greenOffset: number;
        redMultiplier: number;
        redOffset: number;
        constructor();
    }
}
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
declare module dragonBones {
    class DBTransform {
        /**
         * Position on the x axis.
         */
        x: number;
        /**
         * Position on the y axis.
         */
        y: number;
        /**
         * Skew on the x axis.
         */
        skewX: number;
        /**
         * skew on the y axis.
         */
        skewY: number;
        /**
         * Scale on the x axis.
         */
        scaleX: number;
        /**
         * Scale on the y axis.
         */
        scaleY: number;
        /**
         * The rotation of that DBTransform instance.
         */
        rotation: number;
        /**
         * Creat a new DBTransform instance.
         */
        constructor();
        /**
         * Copy all properties from this DBTransform instance to the passed DBTransform instance.
         * @param node
         */
        copy(transform: DBTransform): void;
        /**
         * Get a string representing all DBTransform property values.
         * @return String All property values in a formatted string.
         */
        toString(): string;
    }
}
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
declare module dragonBones {
    class Frame {
        position: number;
        duration: number;
        action: string;
        event: string;
        sound: string;
        constructor();
        dispose(): void;
    }
}
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
declare module dragonBones {
    class TransformFrame extends Frame {
        tweenEasing: number;
        tweenRotate: number;
        tweenScale: boolean;
        displayIndex: number;
        visible: boolean;
        zOrder: number;
        global: DBTransform;
        transform: DBTransform;
        pivot: Point;
        color: ColorTransform;
        scaleOffset: Point;
        constructor();
        dispose(): void;
    }
}
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
declare module dragonBones {
    class Timeline {
        duration: number;
        scale: number;
        private _frameList;
        constructor();
        dispose(): void;
        addFrame(frame: Frame): void;
        frameList: Frame[];
    }
}
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
declare module dragonBones {
    class TransformTimeline extends Timeline {
        name: string;
        transformed: boolean;
        originTransform: DBTransform;
        originPivot: Point;
        offset: number;
        constructor();
        dispose(): void;
    }
}
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
declare module dragonBones {
    class AnimationData extends Timeline {
        name: string;
        frameRate: number;
        fadeTime: number;
        playTimes: number;
        tweenEasing: number;
        autoTween: boolean;
        lastFrameDuration: number;
        hideTimelineNameMap: string[];
        private _timelineList;
        timelineList: TransformTimeline[];
        constructor();
        dispose(): void;
        getTimeline(timelineName: string): TransformTimeline;
        addTimeline(timeline: TransformTimeline): void;
    }
}
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
declare module dragonBones {
    class DisplayData {
        static ARMATURE: string;
        static IMAGE: string;
        name: string;
        type: string;
        transform: DBTransform;
        pivot: Point;
        constructor();
        dispose(): void;
    }
}
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
declare module dragonBones {
    class SlotData {
        name: string;
        parent: string;
        zOrder: number;
        blendMode: string;
        private _displayDataList;
        constructor();
        dispose(): void;
        addDisplayData(displayData: DisplayData): void;
        getDisplayData(displayName: string): DisplayData;
        displayDataList: DisplayData[];
    }
}
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
declare module dragonBones {
    class BoneData {
        name: string;
        parent: string;
        length: number;
        global: DBTransform;
        transform: DBTransform;
        inheritScale: boolean;
        inheritRotation: boolean;
        constructor();
        dispose(): void;
    }
}
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
declare module dragonBones {
    class SkinData {
        name: string;
        private _slotDataList;
        constructor();
        dispose(): void;
        getSlotData(slotName: string): SlotData;
        addSlotData(slotData: SlotData): void;
        slotDataList: SlotData[];
    }
}
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
declare module dragonBones {
    class ArmatureData {
        name: string;
        private _boneDataList;
        private _skinDataList;
        private _animationDataList;
        static sortBoneDataHelpArray(object1: any, object2: any): number;
        static sortBoneDataHelpArrayDescending(object1: any, object2: any): number;
        constructor();
        dispose(): void;
        getBoneData(boneName: string): BoneData;
        getSkinData(skinName: string): SkinData;
        getAnimationData(animationName: string): AnimationData;
        addBoneData(boneData: BoneData): void;
        addSkinData(skinData: SkinData): void;
        addAnimationData(animationData: AnimationData): void;
        sortBoneDataList(): void;
        boneDataList: BoneData[];
        skinDataList: SkinData[];
        animationDataList: AnimationData[];
    }
}
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
declare module dragonBones {
    class DragonBonesData {
        name: string;
        private _armatureDataList;
        private _displayDataDictionary;
        constructor();
        dispose(): void;
        armatureDataList: ArmatureData[];
        getArmatureDataByName(armatureName: string): ArmatureData;
        addArmatureData(armatureData: ArmatureData): void;
        removeArmatureData(armatureData: ArmatureData): void;
        removeArmatureDataByName(armatureName: string): void;
        getDisplayDataByName(name: string): DisplayData;
        addDisplayData(displayData: DisplayData): void;
        removeDisplayDataByName(name: string): void;
        removeAllDisplayData(): void;
    }
}
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
declare module dragonBones {
    class DataParser {
        private static tempDragonBonesData;
        static parseTextureAtlasData(rawData: any, scale?: number): any;
        static parseDragonBonesData(rawDataToParse: any): DragonBonesData;
        private static parseArmatureData(armatureDataToParse, frameRate?);
        private static parseBoneData(boneObject);
        private static parseSkinData(skinObject);
        private static parseSlotData(slotObject);
        private static parseDisplayData(displayObject);
        /** @private */
        private static parseAnimationData(animationObject, frameRate?);
        private static parseTransformTimeline(timelineObject, duration, frameRate?);
        private static parseTransformFrame(frameObject, frameRate?);
        private static parseTimeline(timelineObject, outputTimeline);
        private static parseFrame(frameObject, outputFrame, frameRate?);
        private static parseTransform(transformObject, transform, pivot?);
        private static parseColorTransform(colorTransformObject, colorTransform);
        private static getBoolean(data, key, defaultValue);
        private static getNumber(data, key, defaultValue);
    }
}
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
declare module dragonBones {
    interface ITextureAtlas {
        /**
         * The name of this ITextureAtlas.
         */
        name: string;
        /**
         * Clean up resources.
         */
        dispose(): void;
        /**
         * Get the specific region of the TextureAtlas occupied by assets defined by that name.
         * @param name The name of the assets represented by that name.
         * @return Rectangle The rectangle area occupied by those assets.
         */
        getRegion(name: string): Rectangle;
    }
}
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
declare module dragonBones {
    class TextureData {
        region: Rectangle;
        frame: Rectangle;
        rotated: boolean;
        constructor(region: Rectangle, frame: Rectangle, rotated: boolean);
    }
}
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
declare module dragonBones {
    class BaseFactory extends EventDispatcher {
        static _helpMatrix: Matrix;
        /** @private */
        dragonBonesDataDic: any;
        /** @private */
        textureAtlasDic: any;
        constructor(self: BaseFactory);
        /**
         * Cleans up resources used by this BaseFactory instance.
         * @param (optional) Destroy all internal references.
         */
        dispose(disposeData?: boolean): void;
        /**
         * Returns a DragonBonesData instance.
         * @param The name of an existing DragonBonesData instance.
         * @return A DragonBonesData instance with given name (if exist).
         */
        getDragonBonesData(name: string): DragonBonesData;
        /**
         * Recommend using getDragonBonesData API instead.
         */
        getSkeletonData(name: string): DragonBonesData;
        /**
         * Add a DragonBonesData instance to this BaseFactory instance.
         * @param A DragonBonesData instance.
         * @param (optional) A name for this DragonBonesData instance.
         */
        addDragonBonesData(data: DragonBonesData, name?: string): void;
        /**
         * Recommend using addDragonBonesData API instead.
         */
        addSkeletonData(data: DragonBonesData, name?: string): void;
        /**
         * Remove a DragonBonesData instance from this BaseFactory instance.
         * @param The name for the DragonBonesData instance to remove.
         */
        removeDragonBonesData(name: string): void;
        /**
         * Recommend using removeDragonBonesData API instead.
         */
        removeSkeletonData(name: string): void;
        /**
         * Return the TextureAtlas by name.
         * @param The name of the TextureAtlas to return.
         * @return A textureAtlas.
         */
        getTextureAtlas(name: string): any;
        /**
         * Add a textureAtlas to this BaseFactory instance.
         * @param A textureAtlas to add to this BaseFactory instance.
         * @param (optional) A name for this TextureAtlas.
         */
        addTextureAtlas(textureAtlas: any, name?: string): void;
        /**
         * Remove a textureAtlas from this baseFactory instance.
         * @param The name of the TextureAtlas to remove.
         */
        removeTextureAtlas(name: string): void;
        /**
         * Return the TextureDisplay.
         * @param The name of this Texture.
         * @param The name of the TextureAtlas.
         * @param The registration pivotX position.
         * @param The registration pivotY position.
         * @return An Object.
         */
        getTextureDisplay(textureName: string, textureAtlasName?: string, pivotX?: number, pivotY?: number): any;
        buildArmature(armatureName: string, fromDragonBonesDataName?: string, fromTextureAtlasName?: string, skinName?: string): Armature;
        buildArmatureUsingArmatureDataFromTextureAtlas(dragonBonesData: DragonBonesData, armatureData: ArmatureData, textureAtlas: any, skinName?: string): Armature;
        copyAnimationsToArmature(toArmature: Armature, fromArmatreName: string, fromDragonBonesDataName?: string, ifRemoveOriginalAnimationList?: boolean): boolean;
        private fillBuildArmatureDataPackageArmatureInfo(armatureName, dragonBonesDataName, outputBuildArmatureDataPackage);
        private fillBuildArmatureDataPackageTextureInfo(fromTextureAtlasName, outputBuildArmatureDataPackage);
        private findFirstDragonBonesData();
        private findFirstTextureAtlas();
        _buildBones(armature: Armature): void;
        _buildSlots(armature: Armature, skinName: string, textureAtlas: any): void;
        /**
         * @private
         * Generates an Armature instance.
         * @return Armature An Armature instance.
         */
        _generateArmature(): Armature;
        /**
         * @private
         * Generates an Slot instance.
         * @return Slot An Slot instance.
         */
        _generateSlot(): Slot;
        /**
         * @private
         * Generates a DisplayObject
         * @param textureAtlas The TextureAtlas.
         * @param fullName A qualified name.
         * @param pivotX A pivot x based value.
         * @param pivotY A pivot y based value.
         * @return
         */
        _generateDisplay(textureAtlas: any, fullName: string, pivotX: number, pivotY: number): any;
    }
}
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
declare module dragonBones {
    class ConstValues {
        static ANGLE_TO_RADIAN: number;
        static DRAGON_BONES: string;
        static ARMATURE: string;
        static SKIN: string;
        static BONE: string;
        static SLOT: string;
        static DISPLAY: string;
        static ANIMATION: string;
        static TIMELINE: string;
        static FRAME: string;
        static TRANSFORM: string;
        static COLOR_TRANSFORM: string;
        static RECTANGLE: string;
        static ELLIPSE: string;
        static TEXTURE_ATLAS: string;
        static SUB_TEXTURE: string;
        static A_ROTATED: string;
        static A_FRAME_X: string;
        static A_FRAME_Y: string;
        static A_FRAME_WIDTH: string;
        static A_FRAME_HEIGHT: string;
        static A_VERSION: string;
        static A_IMAGE_PATH: string;
        static A_FRAME_RATE: string;
        static A_NAME: string;
        static A_PARENT: string;
        static A_LENGTH: string;
        static A_TYPE: string;
        static A_FADE_IN_TIME: string;
        static A_DURATION: string;
        static A_SCALE: string;
        static A_OFFSET: string;
        static A_LOOP: string;
        static A_EVENT: string;
        static A_EVENT_PARAMETERS: string;
        static A_SOUND: string;
        static A_ACTION: string;
        static A_HIDE: string;
        static A_AUTO_TWEEN: string;
        static A_TWEEN_EASING: string;
        static A_TWEEN_ROTATE: string;
        static A_TWEEN_SCALE: string;
        static A_DISPLAY_INDEX: string;
        static A_Z_ORDER: string;
        static A_BLENDMODE: string;
        static A_WIDTH: string;
        static A_HEIGHT: string;
        static A_INHERIT_SCALE: string;
        static A_INHERIT_ROTATION: string;
        static A_X: string;
        static A_Y: string;
        static A_SKEW_X: string;
        static A_SKEW_Y: string;
        static A_SCALE_X: string;
        static A_SCALE_Y: string;
        static A_PIVOT_X: string;
        static A_PIVOT_Y: string;
        static A_ALPHA_OFFSET: string;
        static A_RED_OFFSET: string;
        static A_GREEN_OFFSET: string;
        static A_BLUE_OFFSET: string;
        static A_ALPHA_MULTIPLIER: string;
        static A_RED_MULTIPLIER: string;
        static A_GREEN_MULTIPLIER: string;
        static A_BLUE_MULTIPLIER: string;
        static A_SCALE_X_OFFSET: string;
        static A_SCALE_Y_OFFSET: string;
        static A_SCALE_MODE: string;
        static A_FIXED_ROTATION: string;
    }
}
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
declare module dragonBones {
    class TransformUtil {
        private static HALF_PI;
        private static DOUBLE_PI;
        private static _helpMatrix;
        static transformPointWithParent(transform: DBTransform, parent: DBTransform): void;
        static transformToMatrix(transform: DBTransform, matrix: Matrix, keepScale?: boolean): void;
        static formatRadian(radian: number): number;
    }
}
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
declare module dragonBones {
    class DBDataUtil {
        static transformArmatureData(armatureData: ArmatureData): void;
        static transformArmatureDataAnimations(armatureData: ArmatureData): void;
        static transformAnimationData(animationData: AnimationData, armatureData: ArmatureData): void;
        private static setFrameTransform(animationData, armatureData, boneData, frame);
        private static getTimelineTransform(timeline, position, retult, isGlobal);
        static addHideTimeline(animationData: AnimationData, armatureData: ArmatureData): void;
    }
}
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
declare module dragonBones {
    class MathUtil {
        /** @private */
        static getEaseValue(value: number, easing: number): number;
    }
}
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
declare module dragonBones {
    class DBObject {
        name: string;
        /**
         * An object that can contain any user extra data.
         */
        userData: any;
        /**
         *
         */
        inheritRotation: boolean;
        /**
         *
         */
        inheritScale: boolean;
        /** @private */
        _globalTransformMatrix: Matrix;
        /** @private */
        _global: DBTransform;
        /**
         * This DBObject instance global transform instance.
         * @see dragonBones.objects.DBTransform
         */
        global: DBTransform;
        /** @private */
        _origin: DBTransform;
        /**
         * This DBObject instance related to parent transform instance.
         * @see dragonBones.objects.DBTransform
         */
        origin: DBTransform;
        /** @private */
        _offset: DBTransform;
        /**
         * This DBObject instance offset transform instance (For manually control).
         * @see dragonBones.objects.DBTransform
         */
        offset: DBTransform;
        /** @private */
        _visible: boolean;
        /** @private */
        _armature: Armature;
        /**
         * The armature this DBObject instance belongs to.
         */
        armature: Armature;
        /** @private */
        _setArmature(value: Armature): void;
        /** @private */
        _parent: Bone;
        /**
         * Indicates the Bone instance that directly contains this DBObject instance if any.
         */
        parent: Bone;
        /** @private */
        _setParent(value: Bone): void;
        constructor();
        /**
         * Cleans up any resources used by this DBObject instance.
         */
        dispose(): void;
    }
}
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
declare module dragonBones {
    class Slot extends DBObject {
        /** @private Need to keep the reference of DisplayData. When slot switch displayObject, it need to restore the display obect's origional pivot. */
        _displayDataList: DisplayData[];
        /** @private */
        _originZOrder: number;
        /** @private */
        _tweenZOrder: number;
        /** @private */
        _offsetZOrder: number;
        _displayList: any[];
        _currentDisplayIndex: number;
        _colorTransform: ColorTransform;
        _currentDisplay: any;
        _isShowDisplay: boolean;
        _blendMode: string;
        constructor(self: Slot);
        initWithSlotData(slotData: SlotData): void;
        /**
         * @inheritDoc
         */
        dispose(): void;
        /** @private */
        setArmature(value: Armature): void;
        /** @private */
        _update(): void;
        private updateChildArmatureAnimation();
        /** @private */
        _changeDisplay(displayIndex?: number): void;
        /** @private
         * Updates the display of the slot.
         */
        _updateSlotDisplay(): void;
        /** @private */
        visible: boolean;
        /**
         * The DisplayObject list belonging to this Slot instance (display or armature). Replace it to implement switch texture.
         */
        displayList: any[];
        /**
         * The DisplayObject belonging to this Slot instance. Instance type of this object varies from flash.display.DisplayObject to startling.display.DisplayObject and subclasses.
         */
        display: any;
        /**
         * Unrecommended API. Please use .display instead.
         * @returns {any}
         */
        getDisplay(): any;
        /**
         * Unrecommended API. Please use .display = instead.
         * @returns {any}
         */
        setDisplay(value: any): void;
        /**
         * The sub-armature of this Slot instance.
         */
        childArmature: Armature;
        /**
         * zOrder. Support decimal for ensure dynamically added slot work toghther with animation controled slot.
         * @return zOrder.
         */
        zOrder: number;
        /**
         * blendMode
         * @return blendMode.
         */
        blendMode: string;
        /**
         * @private
         */
        _updateDisplay(value: any): void;
        /**
         * @private
         */
        _getDisplayIndex(): number;
        /**
         * @private
         * Adds the original display object to another display object.
         * @param container
         * @param index
         */
        _addDisplayToContainer(container: any, index?: number): void;
        /**
         * @private
         * remove the original display object from its parent.
         */
        _removeDisplayFromContainer(): void;
        /**
         * @private
         * Updates the transform of the slot.
         */
        _updateTransform(): void;
        /**
         * @private
         */
        _updateDisplayVisible(value: boolean): void;
        /**
         * @private
         * Updates the color of the display object.
         * @param a
         * @param r
         * @param g
         * @param b
         * @param aM
         * @param rM
         * @param gM
         * @param bM
         */
        _updateDisplayColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number): void;
        /**
         * @private
         * Update the blend mode of the display object.
         * @param value The blend mode to use.
         */
        _updateDisplayBlendMode(value: string): void;
    }
}
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
declare module dragonBones {
    class Bone extends DBObject {
        static initWithBoneData(boneData: BoneData): Bone;
        /**
         * AnimationState that slots belong to the bone will be controlled by.
         * Sometimes, we want slots controlled by a spedific animation state when animation is doing mix or addition.
         */
        displayController: string;
        /** @private */
        _boneList: Bone[];
        /** @private */
        _slotList: Slot[];
        /** @private */
        _timelineStateList: TimelineState[];
        /**
         * AnimationState that slots belong to the bone will be controlled by.
         * Sometimes, we want slots controlled by a spedific animation state when animation is doing mix or addition.
         */
        /** @private */
        _tween: DBTransform;
        /** @private */
        _tweenPivot: Point;
        /** @private */
        _needUpdate: number;
        /** @private */
        _isColorChanged: boolean;
        constructor();
        /**
         * @inheritDoc
         */
        dispose(): void;
        /**
         * If contains some bone or slot
         * @param Slot or Bone instance
         * @return Boolean
         * @see dragonBones.core.DBObject
         */
        contains(child: DBObject): boolean;
        addChildBone(childBone: Bone, updateLater?: boolean): void;
        removeChildBone(childBone: Bone, updateLater?: boolean): void;
        addSlot(childSlot: Slot): void;
        removeSlot(childSlot: Slot): void;
        /** @private */
        _setArmature(value: Armature): void;
        /**
         * Get all Bone instance associated with this bone.
         * @return A Vector.&lt;Slot&gt; instance.
         * @see dragonBones.Slot
         */
        getBones(returnCopy?: boolean): Bone[];
        /**
         * Get all Slot instance associated with this bone.
         * @return A Vector.&lt;Slot&gt; instance.
         * @see dragonBones.Slot
         */
        getSlots(returnCopy?: boolean): Slot[];
        /**
         * Force update the bone in next frame even if the bone is not moving.
         */
        invalidUpdate(): void;
        /** @private */
        _update(needUpdate?: boolean): void;
        /** @private */
        _updateColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number, colorChanged: boolean): void;
        /** @private */
        _hideSlots(): void;
        /** @private When bone timeline enter a key frame, call this func*/
        _arriveAtFrame(frame: Frame, timelineState: TimelineState, animationState: AnimationState, isCross: boolean): void;
        /** @private */
        _addState(timelineState: TimelineState): void;
        /** @private */
        _removeState(timelineState: TimelineState): void;
        private blendingTimeline();
        private sortState(state1, state2);
        /**
         * Unrecommended API. Recommend use slot.childArmature.
         */
        childArmature: Armature;
        /**
         * Unrecommended API. Recommend use slot.display.
         */
        display: any;
        /**
         * Unrecommended API. Recommend use offset.
         */
        node: DBTransform;
        /** @private */
        visible: boolean;
        slot: Slot;
    }
}
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
declare module dragonBones {
    class Armature extends EventDispatcher implements IAnimatable {
        __dragonBonesData: DragonBonesData;
        /**
         * The instance dispatch sound event.
         */
        /**
         * The name should be same with ArmatureData's name
         */
        name: string;
        /**
         * An object that can contain any user extra data.
         */
        userData: any;
        /** @private Set it to true when slot's zorder changed*/
        _slotsZOrderChanged: boolean;
        /** @private Store event needed to dispatch in current frame. When advanceTime execute complete, dispath them.*/
        _eventList: Event[];
        /** @private Store slots based on slots' zOrder*/
        _slotList: Slot[];
        /** @private Store bones based on bones' hierarchy (From root to leaf)*/
        _boneList: Bone[];
        private _delayDispose;
        private _lockDispose;
        /** @private */
        _armatureData: ArmatureData;
        /**
         * ArmatureData.
         * @see dragonBones.objects.ArmatureData.
         */
        armatureData: ArmatureData;
        /** @private */
        _display: any;
        /**
         * Armature's display object. It's instance type depends on render engine. For example "flash.display.DisplayObject" or "startling.display.DisplayObject"
         */
        display: any;
        /**
         * Unrecommended API. Please use .display instead.
         * @returns {any}
         */
        getDisplay(): any;
        /** @private */
        _animation: Animation;
        /**
         * An Animation instance
         * @see dragonBones.animation.Animation
         */
        animation: Animation;
        /**
         * Creates a Armature blank instance.
         * @param Instance type of this object varies from flash.display.DisplayObject to startling.display.DisplayObject and subclasses.
         * @see #display
         */
        constructor(display: any);
        /**
         * Cleans up any resources used by this instance.
         */
        dispose(): void;
        /**
         * Force update bones and slots. (When bone's animation play complete, it will not update)
         */
        invalidUpdate(boneName?: string): void;
        /**
         * Update the animation using this method typically in an ENTERFRAME Event or with a Timer.
         * @param The amount of second to move the playhead ahead.
         */
        advanceTime(passedTime: number): void;
        /**
         * Get all Slot instance associated with this armature.
         * @param if return Vector copy
         * @return A Vector.&lt;Slot&gt; instance.
         * @see dragonBones.Slot
         */
        getSlots(returnCopy?: boolean): Slot[];
        /**
         * Retrieves a Slot by name
         * @param The name of the Bone to retrieve.
         * @return A Slot instance or null if no Slot with that name exist.
         * @see dragonBones.Slot
         */
        getSlot(slotName: string): Slot;
        /**
         * Gets the Slot associated with this DisplayObject.
         * @param Instance type of this object varies from flash.display.DisplayObject to startling.display.DisplayObject and subclasses.
         * @return A Slot instance or null if no Slot with that DisplayObject exist.
         * @see dragonBones.Slot
         */
        getSlotByDisplay(displayObj: any): Slot;
        /**
         * Add a slot to a bone as child.
         * @param slot A Slot instance
         * @param boneName bone name
         * @see dragonBones.core.DBObject
         */
        addSlot(slot: Slot, boneName: string): void;
        /**
         * Remove a Slot instance from this Armature instance.
         * @param The Slot instance to remove.
         * @see dragonBones.Slot
         */
        removeSlot(slot: Slot): void;
        /**
         * Remove a Slot instance from this Armature instance.
         * @param The name of the Slot instance to remove.
         * @see dragonBones.Slot
         */
        removeSlotByName(slotName: string): Slot;
        /**
         * Get all Bone instance associated with this armature.
         * @param if return Vector copy
         * @return A Vector.&lt;Bone&gt; instance.
         * @see dragonBones.Bone
         */
        getBones(returnCopy?: boolean): Bone[];
        /**
         * Retrieves a Bone by name
         * @param The name of the Bone to retrieve.
         * @return A Bone instance or null if no Bone with that name exist.
         * @see dragonBones.Bone
         */
        getBone(boneName: string): Bone;
        /**
         * Gets the Bone associated with this DisplayObject.
         * @param Instance type of this object varies from flash.display.DisplayObject to startling.display.DisplayObject and subclasses.
         * @return A Bone instance or null if no Bone with that DisplayObject exist..
         * @see dragonBones.Bone
         */
        getBoneByDisplay(display: any): Bone;
        /**
         * Add a Bone instance to this Armature instance.
         * @param A Bone instance.
         * @param (optional) The parent's name of this Bone instance.
         * @see dragonBones.Bone
         */
        addBone(bone: Bone, parentName?: string, updateLater?: boolean): void;
        /**
         * Remove a Bone instance from this Armature instance.
         * @param The Bone instance to remove.
         * @see	dragonBones.Bone
         */
        removeBone(bone: Bone, updateLater?: boolean): void;
        /**
         * Remove a Bone instance from this Armature instance.
         * @param The name of the Bone instance to remove.
         * @see dragonBones.Bone
         */
        removeBoneByName(boneName: string): Bone;
        /** @private */
        _addBoneToBoneList(bone: Bone): void;
        /** @private */
        _removeBoneFromBoneList(bone: Bone): void;
        /** @private */
        _addSlotToSlotList(slot: Slot): void;
        /** @private */
        _removeSlotFromSlotList(slot: Slot): void;
        /**
         * Sort all slots based on zOrder
         */
        updateSlotsZOrder(): void;
        _updateAnimationAfterBoneListChanged(ifNeedSortBoneList?: boolean): void;
        private sortBoneList();
        /** @private When AnimationState enter a key frame, call this func*/
        _arriveAtFrame(frame: Frame, timelineState: TimelineState, animationState: AnimationState, isCross: boolean): void;
        private sortSlot(slot1, slot2);
    }
}
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
declare module dragonBones {
    class EgretFactory extends BaseFactory {
        constructor();
        /** @private */
        _generateArmature(): Armature;
        /** @private */
        _generateSlot(): Slot;
        /** @private */
        _generateDisplay(textureAtlas: EgretTextureAtlas, fullName: string, pivotX: number, pivotY: number): any;
    }
}
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
declare module dragonBones {
    class EgretSlot extends Slot {
        private _egretDisplay;
        constructor();
        dispose(): void;
        /** @private */
        _updateDisplay(value: any): void;
        /** @private */
        _getDisplayIndex(): number;
        /** @private */
        _addDisplayToContainer(container: any, index?: number): void;
        /** @private */
        _removeDisplayFromContainer(): void;
        /** @private */
        _updateTransform(): void;
        /** @private */
        _updateDisplayVisible(value: boolean): void;
        /** @private */
        _updateDisplayColor(aOffset: number, rOffset: number, gOffset: number, bOffset: number, aMultiplier: number, rMultiplier: number, gMultiplier: number, bMultiplier: number): void;
        /** @private */
        _updateDisplayBlendMode(value: string): void;
    }
}
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
declare module dragonBones {
    class EgretTextureAtlas implements ITextureAtlas {
        texture: egret.Texture;
        private textureAtlasRawData;
        name: string;
        scale: number;
        spriteSheet: egret.SpriteSheet;
        private _textureDatas;
        constructor(texture: egret.Texture, textureAtlasRawData: any, scale?: number);
        getTexture(fullName: string): egret.Texture;
        dispose(): void;
        getRegion(subTextureName: string): Rectangle;
        private parseData(textureAtlasRawData);
    }
}
