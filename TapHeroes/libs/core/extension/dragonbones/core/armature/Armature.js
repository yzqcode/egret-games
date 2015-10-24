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
    var Armature = (function (_super) {
        __extends(Armature, _super);
        /**
         * Creates a Armature blank instance.
         * @param Instance type of this object varies from flash.display.DisplayObject to startling.display.DisplayObject and subclasses.
         * @see #display
         */
        function Armature(display) {
            _super.call(this);
            this._display = display;
            this._animation = new dragonBones.Animation(this);
            this._slotsZOrderChanged = false;
            this._slotList = [];
            this._boneList = [];
            this._eventList = [];
            this._delayDispose = false;
            this._lockDispose = false;
            this._armatureData = null;
        }
        Object.defineProperty(Armature.prototype, "armatureData", {
            /**
             * ArmatureData.
             * @see dragonBones.objects.ArmatureData.
             */
            get: function () {
                return this._armatureData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Armature.prototype, "display", {
            /**
             * Armature's display object. It's instance type depends on render engine. For example "flash.display.DisplayObject" or "startling.display.DisplayObject"
             */
            get: function () {
                return this._display;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Unrecommended API. Please use .display instead.
         * @returns {any}
         */
        Armature.prototype.getDisplay = function () {
            return this._display;
        };
        Object.defineProperty(Armature.prototype, "animation", {
            /**
             * An Animation instance
             * @see dragonBones.animation.Animation
             */
            get: function () {
                return this._animation;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Cleans up any resources used by this instance.
         */
        Armature.prototype.dispose = function () {
            this._delayDispose = true;
            if (!this._animation || this._lockDispose) {
                return;
            }
            this.userData = null;
            this._animation.dispose();
            var i = this._slotList.length;
            while (i--) {
                this._slotList[i].dispose();
            }
            i = this._boneList.length;
            while (i--) {
                this._boneList[i].dispose();
            }
            this._armatureData = null;
            this._animation = null;
            this._slotList = null;
            this._boneList = null;
            this._eventList = null;
            //_display = null;
        };
        /**
         * Force update bones and slots. (When bone's animation play complete, it will not update)
         */
        Armature.prototype.invalidUpdate = function (boneName) {
            if (boneName === void 0) { boneName = null; }
            if (boneName) {
                var bone = this.getBone(boneName);
                if (bone) {
                    bone.invalidUpdate();
                }
            }
            else {
                var i = this._boneList.length;
                while (i--) {
                    this._boneList[i].invalidUpdate();
                }
            }
        };
        /**
         * Update the animation using this method typically in an ENTERFRAME Event or with a Timer.
         * @param The amount of second to move the playhead ahead.
         */
        Armature.prototype.advanceTime = function (passedTime) {
            this._lockDispose = true;
            this._animation._advanceTime(passedTime);
            passedTime *= this._animation.timeScale; //_animation's time scale will impact childArmature
            var isFading = this._animation._isFading;
            var i = this._boneList.length;
            while (i--) {
                var bone = this._boneList[i];
                bone._update(isFading);
            }
            i = this._slotList.length;
            while (i--) {
                var slot = this._slotList[i];
                slot._update();
                if (slot._isShowDisplay) {
                    var childArmature = slot.childArmature;
                    if (childArmature) {
                        childArmature.advanceTime(passedTime);
                    }
                }
            }
            if (this._slotsZOrderChanged) {
                this.updateSlotsZOrder();
                if (this.hasEventListener(dragonBones.ArmatureEvent.Z_ORDER_UPDATED)) {
                    this.dispatchEvent(new dragonBones.ArmatureEvent(dragonBones.ArmatureEvent.Z_ORDER_UPDATED));
                }
            }
            if (this._eventList.length > 0) {
                for (var key in this._eventList) {
                    var event = this._eventList[key];
                    this.dispatchEvent(event);
                }
                this._eventList.length = 0;
            }
            this._lockDispose = false;
            if (this._delayDispose) {
                this.dispose();
            }
        };
        /**
         * Get all Slot instance associated with this armature.
         * @param if return Vector copy
         * @return A Vector.&lt;Slot&gt; instance.
         * @see dragonBones.Slot
         */
        Armature.prototype.getSlots = function (returnCopy) {
            if (returnCopy === void 0) { returnCopy = true; }
            return returnCopy ? this._slotList.concat() : this._slotList;
        };
        /**
         * Retrieves a Slot by name
         * @param The name of the Bone to retrieve.
         * @return A Slot instance or null if no Slot with that name exist.
         * @see dragonBones.Slot
         */
        Armature.prototype.getSlot = function (slotName) {
            var length = this._slotList.length;
            for (var i = 0; i < length; i++) {
                var slot = this._slotList[i];
                if (slot.name == slotName) {
                    return slot;
                }
            }
            return null;
        };
        /**
         * Gets the Slot associated with this DisplayObject.
         * @param Instance type of this object varies from flash.display.DisplayObject to startling.display.DisplayObject and subclasses.
         * @return A Slot instance or null if no Slot with that DisplayObject exist.
         * @see dragonBones.Slot
         */
        Armature.prototype.getSlotByDisplay = function (displayObj) {
            if (displayObj) {
                var length = this._slotList.length;
                for (var i = 0; i < length; i++) {
                    var slot = this._slotList[i];
                    if (slot.display == displayObj) {
                        return slot;
                    }
                }
            }
            return null;
        };
        /**
         * Add a slot to a bone as child.
         * @param slot A Slot instance
         * @param boneName bone name
         * @see dragonBones.core.DBObject
         */
        Armature.prototype.addSlot = function (slot, boneName) {
            var bone = this.getBone(boneName);
            if (bone) {
                bone.addSlot(slot);
            }
            else {
                throw new Error();
            }
        };
        /**
         * Remove a Slot instance from this Armature instance.
         * @param The Slot instance to remove.
         * @see dragonBones.Slot
         */
        Armature.prototype.removeSlot = function (slot) {
            if (!slot || slot.armature != this) {
                throw new Error();
            }
            slot.parent.removeSlot(slot);
        };
        /**
         * Remove a Slot instance from this Armature instance.
         * @param The name of the Slot instance to remove.
         * @see dragonBones.Slot
         */
        Armature.prototype.removeSlotByName = function (slotName) {
            var slot = this.getSlot(slotName);
            if (slot) {
                this.removeSlot(slot);
            }
            return slot;
        };
        /**
         * Get all Bone instance associated with this armature.
         * @param if return Vector copy
         * @return A Vector.&lt;Bone&gt; instance.
         * @see dragonBones.Bone
         */
        Armature.prototype.getBones = function (returnCopy) {
            if (returnCopy === void 0) { returnCopy = true; }
            return returnCopy ? this._boneList.concat() : this._boneList;
        };
        /**
         * Retrieves a Bone by name
         * @param The name of the Bone to retrieve.
         * @return A Bone instance or null if no Bone with that name exist.
         * @see dragonBones.Bone
         */
        Armature.prototype.getBone = function (boneName) {
            var length = this._boneList.length;
            for (var i = 0; i < length; i++) {
                var bone = this._boneList[i];
                if (bone.name == boneName) {
                    return bone;
                }
            }
            return null;
        };
        /**
         * Gets the Bone associated with this DisplayObject.
         * @param Instance type of this object varies from flash.display.DisplayObject to startling.display.DisplayObject and subclasses.
         * @return A Bone instance or null if no Bone with that DisplayObject exist..
         * @see dragonBones.Bone
         */
        Armature.prototype.getBoneByDisplay = function (display) {
            var slot = this.getSlotByDisplay(display);
            return slot ? slot.parent : null;
        };
        /**
         * Add a Bone instance to this Armature instance.
         * @param A Bone instance.
         * @param (optional) The parent's name of this Bone instance.
         * @see dragonBones.Bone
         */
        Armature.prototype.addBone = function (bone, parentName, updateLater) {
            if (parentName === void 0) { parentName = null; }
            if (updateLater === void 0) { updateLater = false; }
            var parentBone;
            if (parentName) {
                parentBone = this.getBone(parentName);
                if (!parentBone) {
                    throw new Error();
                }
            }
            if (parentBone) {
                parentBone.addChildBone(bone, updateLater);
            }
            else {
                if (bone.parent) {
                    bone.parent.removeChildBone(bone, updateLater);
                }
                bone._setArmature(this);
                if (!updateLater) {
                    this._updateAnimationAfterBoneListChanged();
                }
            }
        };
        /**
         * Remove a Bone instance from this Armature instance.
         * @param The Bone instance to remove.
         * @see	dragonBones.Bone
         */
        Armature.prototype.removeBone = function (bone, updateLater) {
            if (updateLater === void 0) { updateLater = false; }
            if (!bone || bone.armature != this) {
                throw new Error();
            }
            if (bone.parent) {
                bone.parent.removeChildBone(bone, updateLater);
            }
            else {
                bone._setArmature(null);
                if (!updateLater) {
                    this._updateAnimationAfterBoneListChanged(false);
                }
            }
        };
        /**
         * Remove a Bone instance from this Armature instance.
         * @param The name of the Bone instance to remove.
         * @see dragonBones.Bone
         */
        Armature.prototype.removeBoneByName = function (boneName) {
            var bone = this.getBone(boneName);
            if (bone) {
                this.removeBone(bone);
            }
            return bone;
        };
        /** @private */
        Armature.prototype._addBoneToBoneList = function (bone) {
            if (this._boneList.indexOf(bone) < 0) {
                this._boneList[this._boneList.length] = bone;
            }
        };
        /** @private */
        Armature.prototype._removeBoneFromBoneList = function (bone) {
            var index = this._boneList.indexOf(bone);
            if (index >= 0) {
                this._boneList.splice(index, 1);
            }
        };
        /** @private */
        Armature.prototype._addSlotToSlotList = function (slot) {
            if (this._slotList.indexOf(slot) < 0) {
                this._slotList[this._slotList.length] = slot;
            }
        };
        /** @private */
        Armature.prototype._removeSlotFromSlotList = function (slot) {
            var index = this._slotList.indexOf(slot);
            if (index >= 0) {
                this._slotList.splice(index, 1);
            }
        };
        /**
         * Sort all slots based on zOrder
         */
        Armature.prototype.updateSlotsZOrder = function () {
            this._slotList.sort(this.sortSlot);
            var i = this._slotList.length;
            while (i--) {
                var slot = this._slotList[i];
                if (slot._isShowDisplay) {
                    //_display 实际上是container, 这个方法就是把原来的显示对象放到container中的第一个
                    slot._addDisplayToContainer(this._display);
                }
            }
            this._slotsZOrderChanged = false;
        };
        Armature.prototype._updateAnimationAfterBoneListChanged = function (ifNeedSortBoneList) {
            if (ifNeedSortBoneList === void 0) { ifNeedSortBoneList = true; }
            if (ifNeedSortBoneList) {
                this.sortBoneList();
            }
            this._animation._updateAnimationStates();
        };
        Armature.prototype.sortBoneList = function () {
            var i = this._boneList.length;
            if (i == 0) {
                return;
            }
            var helpArray = [];
            while (i--) {
                var level = 0;
                var bone = this._boneList[i];
                var boneParent = bone;
                while (boneParent) {
                    level++;
                    boneParent = boneParent.parent;
                }
                helpArray[i] = [level, bone];
            }
            helpArray.sort(dragonBones.ArmatureData.sortBoneDataHelpArrayDescending);
            i = helpArray.length;
            while (i--) {
                this._boneList[i] = helpArray[i][1];
            }
            helpArray.length = 0;
        };
        /** @private When AnimationState enter a key frame, call this func*/
        Armature.prototype._arriveAtFrame = function (frame, timelineState, animationState, isCross) {
            if (frame.event && this.hasEventListener(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT)) {
                var frameEvent = new dragonBones.FrameEvent(dragonBones.FrameEvent.ANIMATION_FRAME_EVENT);
                frameEvent.animationState = animationState;
                frameEvent.frameLabel = frame.event;
                this._eventList.push(frameEvent);
            }
            /*
            if(frame.sound && _soundManager.hasEventListener(SoundEvent.SOUND))
            {
                var soundEvent:SoundEvent = new SoundEvent(SoundEvent.SOUND);
                soundEvent.armature = this;
                soundEvent.animationState = animationState;
                soundEvent.sound = frame.sound;
                _soundManager.dispatchEvent(soundEvent);
            }
            */
            //[TODO]currently there is only gotoAndPlay belongs to frame action. In future, there will be more.  
            //后续会扩展更多的action，目前只有gotoAndPlay的含义
            if (frame.action) {
                if (animationState.displayControl) {
                    this.animation.gotoAndPlay(frame.action);
                }
            }
        };
        Armature.prototype.sortSlot = function (slot1, slot2) {
            return slot1.zOrder < slot2.zOrder ? 1 : -1;
        };
        return Armature;
    })(dragonBones.EventDispatcher);
    dragonBones.Armature = Armature;
    Armature.prototype.__class__ = "dragonBones.Armature";
})(dragonBones || (dragonBones = {}));
