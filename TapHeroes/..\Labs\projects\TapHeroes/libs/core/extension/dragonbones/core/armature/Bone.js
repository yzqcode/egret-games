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
    var Bone = (function (_super) {
        __extends(Bone, _super);
        function Bone() {
            _super.call(this);
            /** @private */
            this._needUpdate = 0;
            this._tween = new dragonBones.DBTransform();
            this._tweenPivot = new dragonBones.Point();
            this._tween.scaleX = this._tween.scaleY = 0;
            this._boneList = [];
            this._slotList = [];
            this._timelineStateList = [];
            this._needUpdate = 2;
            this._isColorChanged = false;
            this.inheritRotation = true;
            this.inheritScale = false;
        }
        Bone.initWithBoneData = function (boneData) {
            var outputBone = new Bone();
            outputBone.name = boneData.name;
            outputBone.inheritRotation = boneData.inheritRotation;
            outputBone.inheritScale = boneData.inheritScale;
            outputBone.origin.copy(boneData.transform);
            return outputBone;
        };
        /**
         * @inheritDoc
         */
        Bone.prototype.dispose = function () {
            if (!this._boneList) {
                return;
            }
            _super.prototype.dispose.call(this);
            var i = this._boneList.length;
            while (i--) {
                this._boneList[i].dispose();
            }
            i = this._slotList.length;
            while (i--) {
                this._slotList[i].dispose();
            }
            this._tween = null;
            this._tweenPivot = null;
            this._boneList = null;
            this._slotList = null;
            this._timelineStateList = null;
        };
        //骨架装配
        /**
         * If contains some bone or slot
         * @param Slot or Bone instance
         * @return Boolean
         * @see dragonBones.core.DBObject
         */
        Bone.prototype.contains = function (child) {
            if (!child) {
                throw new Error();
            }
            if (child == this) {
                return false;
            }
            var ancestor = child;
            while (!(ancestor == this || ancestor == null)) {
                ancestor = ancestor.parent;
            }
            return ancestor == this;
        };
        Bone.prototype.addChildBone = function (childBone, updateLater) {
            if (updateLater === void 0) { updateLater = false; }
            if (!childBone) {
                throw new Error();
            }
            if (childBone == this || childBone.contains(this)) {
                throw new Error("An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)");
            }
            if (childBone.parent == this) {
                return;
            }
            if (childBone.parent) {
                childBone.parent.removeChildBone(childBone, updateLater);
            }
            this._boneList[this._boneList.length] = childBone;
            childBone._setParent(this);
            childBone._setArmature(this._armature);
            if (this._armature && !updateLater) {
                this._armature._updateAnimationAfterBoneListChanged();
            }
        };
        Bone.prototype.removeChildBone = function (childBone, updateLater) {
            if (updateLater === void 0) { updateLater = false; }
            if (!childBone) {
                throw new Error();
            }
            var index = this._boneList.indexOf(childBone);
            if (index < 0) {
                throw new Error();
            }
            this._boneList.splice(index, 1);
            childBone._setParent(null);
            childBone._setArmature(null);
            if (this._armature && !updateLater) {
                this._armature._updateAnimationAfterBoneListChanged(false);
            }
        };
        Bone.prototype.addSlot = function (childSlot) {
            if (!childSlot) {
                throw new Error();
            }
            if (childSlot.parent) {
                childSlot.parent.removeSlot(childSlot);
            }
            this._slotList[this._slotList.length] = childSlot;
            childSlot._setParent(this);
            childSlot.setArmature(this._armature);
        };
        Bone.prototype.removeSlot = function (childSlot) {
            if (!childSlot) {
                throw new Error();
            }
            var index = this._slotList.indexOf(childSlot);
            if (index < 0) {
                throw new Error();
            }
            this._slotList.splice(index, 1);
            childSlot._setParent(null);
            childSlot.setArmature(null);
        };
        /** @private */
        Bone.prototype._setArmature = function (value) {
            if (this._armature == value) {
                return;
            }
            if (this._armature) {
                this._armature._removeBoneFromBoneList(this);
                this._armature._updateAnimationAfterBoneListChanged(false);
            }
            this._armature = value;
            if (this._armature) {
                this._armature._addBoneToBoneList(this);
            }
            var i = this._boneList.length;
            while (i--) {
                this._boneList[i]._setArmature(this._armature);
            }
            i = this._slotList.length;
            while (i--) {
                this._slotList[i].setArmature(this._armature);
            }
        };
        /**
         * Get all Bone instance associated with this bone.
         * @return A Vector.&lt;Slot&gt; instance.
         * @see dragonBones.Slot
         */
        Bone.prototype.getBones = function (returnCopy) {
            if (returnCopy === void 0) { returnCopy = true; }
            return returnCopy ? this._boneList.concat() : this._boneList;
        };
        /**
         * Get all Slot instance associated with this bone.
         * @return A Vector.&lt;Slot&gt; instance.
         * @see dragonBones.Slot
         */
        Bone.prototype.getSlots = function (returnCopy) {
            if (returnCopy === void 0) { returnCopy = true; }
            return returnCopy ? this._slotList.concat() : this._slotList;
        };
        //动画
        /**
         * Force update the bone in next frame even if the bone is not moving.
         */
        Bone.prototype.invalidUpdate = function () {
            this._needUpdate = 2;
        };
        /** @private */
        Bone.prototype._update = function (needUpdate) {
            if (needUpdate === void 0) { needUpdate = false; }
            this._needUpdate--;
            if (needUpdate || this._needUpdate > 0 || (this._parent && this._parent._needUpdate > 0)) {
                this._needUpdate = 1;
            }
            else {
                return;
            }
            this.blendingTimeline();
            this._global.scaleX = (this._origin.scaleX + this._tween.scaleX) * this._offset.scaleX;
            this._global.scaleY = (this._origin.scaleY + this._tween.scaleY) * this._offset.scaleY;
            if (this._parent) {
                var x = this._origin.x + this._offset.x + this._tween.x;
                var y = this._origin.y + this._offset.y + this._tween.y;
                var parentMatrix = this._parent._globalTransformMatrix;
                this._globalTransformMatrix.tx = this._global.x = parentMatrix.a * x + parentMatrix.c * y + parentMatrix.tx;
                this._globalTransformMatrix.ty = this._global.y = parentMatrix.d * y + parentMatrix.b * x + parentMatrix.ty;
                if (this.inheritRotation) {
                    this._global.skewX = this._origin.skewX + this._offset.skewX + this._tween.skewX + this._parent._global.skewX;
                    this._global.skewY = this._origin.skewY + this._offset.skewY + this._tween.skewY + this._parent._global.skewY;
                }
                else {
                    this._global.skewX = this._origin.skewX + this._offset.skewX + this._tween.skewX;
                    this._global.skewY = this._origin.skewY + this._offset.skewY + this._tween.skewY;
                }
                if (this.inheritScale) {
                    this._global.scaleX *= this._parent._global.scaleX;
                    this._global.scaleY *= this._parent._global.scaleY;
                }
            }
            else {
                this._globalTransformMatrix.tx = this._global.x = this._origin.x + this._offset.x + this._tween.x;
                this._globalTransformMatrix.ty = this._global.y = this._origin.y + this._offset.y + this._tween.y;
                this._global.skewX = this._origin.skewX + this._offset.skewX + this._tween.skewX;
                this._global.skewY = this._origin.skewY + this._offset.skewY + this._tween.skewY;
            }
            this._globalTransformMatrix.a = this._global.scaleX * Math.cos(this._global.skewY);
            this._globalTransformMatrix.b = this._global.scaleX * Math.sin(this._global.skewY);
            this._globalTransformMatrix.c = -this._global.scaleY * Math.sin(this._global.skewX);
            this._globalTransformMatrix.d = this._global.scaleY * Math.cos(this._global.skewX);
        };
        /** @private */
        Bone.prototype._updateColor = function (aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier, colorChanged) {
            var length = this._slotList.length;
            for (var i = 0; i < length; i++) {
                var childSlot = this._slotList[i];
                childSlot._updateDisplayColor(aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier);
            }
            this._isColorChanged = colorChanged;
        };
        /** @private */
        Bone.prototype._hideSlots = function () {
            var length = this._slotList.length;
            for (var i = 0; i < length; i++) {
                var childSlot = this._slotList[i];
                childSlot._changeDisplay(-1);
            }
        };
        /** @private When bone timeline enter a key frame, call this func*/
        Bone.prototype._arriveAtFrame = function (frame, timelineState, animationState, isCross) {
            var displayControl = animationState.displayControl && (!this.displayController || this.displayController == animationState.name) && animationState.containsBoneMask(this.name);
            if (displayControl) {
                var tansformFrame = frame;
                var displayIndex = tansformFrame.displayIndex;
                var childSlot;
                var length = this._slotList.length;
                for (var i = 0; i < length; i++) {
                    childSlot = this._slotList[i];
                    childSlot._changeDisplay(displayIndex);
                    childSlot._updateDisplayVisible(tansformFrame.visible);
                    if (displayIndex >= 0) {
                        if (!isNaN(tansformFrame.zOrder) && tansformFrame.zOrder != childSlot._tweenZOrder) {
                            childSlot._tweenZOrder = tansformFrame.zOrder;
                            this._armature._slotsZOrderChanged = true;
                        }
                    }
                }
                if (frame.event && this._armature.hasEventListener(dragonBones.FrameEvent.BONE_FRAME_EVENT)) {
                    var frameEvent = new dragonBones.FrameEvent(dragonBones.FrameEvent.BONE_FRAME_EVENT);
                    frameEvent.bone = this;
                    frameEvent.animationState = animationState;
                    frameEvent.frameLabel = frame.event;
                    this._armature._eventList.push(frameEvent);
                }
                /*
                if(frame.sound && _soundManager.hasEventListener(SoundEvent.SOUND))
                {
                    var soundEvent:SoundEvent = new SoundEvent(SoundEvent.SOUND);
                    soundEvent.armature = this._armature;
                    soundEvent.animationState = animationState;
                    soundEvent.sound = frame.sound;
                    _soundManager.dispatchEvent(soundEvent);
                }
                */
                //[TODO]currently there is only gotoAndPlay belongs to frame action. In future, there will be more.  
                //后续会扩展更多的action，目前只有gotoAndPlay的含义
                if (frame.action) {
                    var length1 = this._slotList.length;
                    for (var i1 = 0; i1 < length1; i1++) {
                        childSlot = this._slotList[i1];
                        var childArmature = childSlot.childArmature;
                        if (childArmature) {
                            childArmature.animation.gotoAndPlay(frame.action);
                        }
                    }
                }
            }
        };
        /** @private */
        Bone.prototype._addState = function (timelineState) {
            if (this._timelineStateList.indexOf(timelineState) < 0) {
                this._timelineStateList.push(timelineState);
                this._timelineStateList.sort(this.sortState);
            }
        };
        /** @private */
        Bone.prototype._removeState = function (timelineState) {
            var index = this._timelineStateList.indexOf(timelineState);
            if (index >= 0) {
                this._timelineStateList.splice(index, 1);
            }
        };
        Bone.prototype.blendingTimeline = function () {
            var timelineState;
            var transform;
            var pivot;
            var weight;
            var i = this._timelineStateList.length;
            if (i == 1) {
                timelineState = this._timelineStateList[0];
                weight = timelineState._animationState.weight * timelineState._animationState.fadeWeight;
                timelineState._weight = weight;
                transform = timelineState._transform;
                pivot = timelineState._pivot;
                this._tween.x = transform.x * weight;
                this._tween.y = transform.y * weight;
                this._tween.skewX = transform.skewX * weight;
                this._tween.skewY = transform.skewY * weight;
                this._tween.scaleX = transform.scaleX * weight;
                this._tween.scaleY = transform.scaleY * weight;
                this._tweenPivot.x = pivot.x * weight;
                this._tweenPivot.y = pivot.y * weight;
            }
            else if (i > 1) {
                var x = 0;
                var y = 0;
                var skewX = 0;
                var skewY = 0;
                var scaleX = 0;
                var scaleY = 0;
                var pivotX = 0;
                var pivotY = 0;
                var weigthLeft = 1;
                var layerTotalWeight = 0;
                var prevLayer = this._timelineStateList[i - 1]._animationState.layer;
                var currentLayer = 0;
                while (i--) {
                    timelineState = this._timelineStateList[i];
                    currentLayer = timelineState._animationState.layer;
                    if (prevLayer != currentLayer) {
                        if (layerTotalWeight >= weigthLeft) {
                            timelineState._weight = 0;
                            break;
                        }
                        else {
                            weigthLeft -= layerTotalWeight;
                        }
                    }
                    prevLayer = currentLayer;
                    weight = timelineState._animationState.weight * timelineState._animationState.fadeWeight * weigthLeft;
                    timelineState._weight = weight;
                    if (weight && timelineState._blendEnabled) {
                        transform = timelineState._transform;
                        pivot = timelineState._pivot;
                        x += transform.x * weight;
                        y += transform.y * weight;
                        skewX += transform.skewX * weight;
                        skewY += transform.skewY * weight;
                        scaleX += transform.scaleX * weight;
                        scaleY += transform.scaleY * weight;
                        pivotX += pivot.x * weight;
                        pivotY += pivot.y * weight;
                        layerTotalWeight += weight;
                    }
                }
                this._tween.x = x;
                this._tween.y = y;
                this._tween.skewX = skewX;
                this._tween.skewY = skewY;
                this._tween.scaleX = scaleX;
                this._tween.scaleY = scaleY;
                this._tweenPivot.x = pivotX;
                this._tweenPivot.y = pivotY;
            }
        };
        Bone.prototype.sortState = function (state1, state2) {
            return state1._animationState.layer < state2._animationState.layer ? -1 : 1;
        };
        Object.defineProperty(Bone.prototype, "childArmature", {
            /**
             * Unrecommended API. Recommend use slot.childArmature.
             */
            get: function () {
                if (this.slot) {
                    return this.slot.childArmature;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bone.prototype, "display", {
            /**
             * Unrecommended API. Recommend use slot.display.
             */
            get: function () {
                if (this.slot) {
                    return this.slot.display;
                }
                return null;
            },
            set: function (value) {
                if (this.slot) {
                    this.slot.display = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bone.prototype, "node", {
            /**
             * Unrecommended API. Recommend use offset.
             */
            get: function () {
                return this._offset;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bone.prototype, "visible", {
            /** @private */
            set: function (value) {
                if (this._visible != value) {
                    this._visible = value;
                    var length = this._slotList.length;
                    for (var i = 0; i < length; i++) {
                        var childSlot = this._slotList[i];
                        childSlot._updateDisplayVisible(this._visible);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bone.prototype, "slot", {
            get: function () {
                return this._slotList.length > 0 ? this._slotList[0] : null;
            },
            enumerable: true,
            configurable: true
        });
        return Bone;
    })(dragonBones.DBObject);
    dragonBones.Bone = Bone;
    Bone.prototype.__class__ = "dragonBones.Bone";
})(dragonBones || (dragonBones = {}));
