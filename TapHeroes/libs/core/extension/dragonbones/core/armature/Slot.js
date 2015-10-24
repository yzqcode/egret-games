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
    var Slot = (function (_super) {
        __extends(Slot, _super);
        function Slot(self) {
            _super.call(this);
            this._currentDisplayIndex = 0;
            if (self != this) {
                throw new Error("Abstract class can not be instantiated!");
            }
            this._displayList = [];
            this._currentDisplayIndex = -1;
            this._originZOrder = 0;
            this._tweenZOrder = 0;
            this._offsetZOrder = 0;
            this._isShowDisplay = false;
            this._colorTransform = new dragonBones.ColorTransform();
            this._displayDataList = null;
            //_childArmature = null;
            this._currentDisplay = null;
            this.inheritRotation = true;
            this.inheritScale = true;
        }
        Slot.prototype.initWithSlotData = function (slotData) {
            this.name = slotData.name;
            this.blendMode = slotData.blendMode;
            this._originZOrder = slotData.zOrder;
            this._displayDataList = slotData.displayDataList;
        };
        /**
         * @inheritDoc
         */
        Slot.prototype.dispose = function () {
            if (!this._displayList) {
                return;
            }
            _super.prototype.dispose.call(this);
            this._displayList.length = 0;
            this._displayDataList = null;
            this._displayList = null;
            this._currentDisplay = null;
            //_childArmature = null;
        };
        //骨架装配
        /** @private */
        Slot.prototype.setArmature = function (value) {
            if (this._armature == value) {
                return;
            }
            if (this._armature) {
                this._armature._removeSlotFromSlotList(this);
            }
            this._armature = value;
            if (this._armature) {
                this._armature._addSlotToSlotList(this);
                this._armature._slotsZOrderChanged = true;
                this._addDisplayToContainer(this._armature.display);
            }
            else {
                this._removeDisplayFromContainer();
            }
        };
        //动画
        /** @private */
        Slot.prototype._update = function () {
            if (this._parent._needUpdate <= 0) {
                return;
            }
            var x = this._origin.x + this._offset.x + this._parent._tweenPivot.x;
            var y = this._origin.y + this._offset.y + this._parent._tweenPivot.y;
            var parentMatrix = this._parent._globalTransformMatrix;
            this._globalTransformMatrix.tx = this._global.x = parentMatrix.a * x + parentMatrix.c * y + parentMatrix.tx;
            this._globalTransformMatrix.ty = this._global.y = parentMatrix.d * y + parentMatrix.b * x + parentMatrix.ty;
            if (this.inheritRotation) {
                this._global.skewX = this._origin.skewX + this._offset.skewX + this._parent._global.skewX;
                this._global.skewY = this._origin.skewY + this._offset.skewY + this._parent._global.skewY;
            }
            else {
                this._global.skewX = this._origin.skewX + this._offset.skewX;
                this._global.skewY = this._origin.skewY + this._offset.skewY;
            }
            if (this.inheritScale) {
                this._global.scaleX = this._origin.scaleX * this._offset.scaleX * this._parent._global.scaleX;
                this._global.scaleY = this._origin.scaleY * this._offset.scaleY * this._parent._global.scaleY;
            }
            else {
                this._global.scaleX = this._origin.scaleX * this._offset.scaleX;
                this._global.scaleY = this._origin.scaleY * this._offset.scaleY;
            }
            this._globalTransformMatrix.a = this._global.scaleX * Math.cos(this._global.skewY);
            this._globalTransformMatrix.b = this._global.scaleX * Math.sin(this._global.skewY);
            this._globalTransformMatrix.c = -this._global.scaleY * Math.sin(this._global.skewX);
            this._globalTransformMatrix.d = this._global.scaleY * Math.cos(this._global.skewX);
            this._updateTransform();
        };
        Slot.prototype.updateChildArmatureAnimation = function () {
            if (this.childArmature) {
                if (this._isShowDisplay) {
                    if (this._armature && this._armature.animation.lastAnimationState && this.childArmature.animation.hasAnimation(this._armature.animation.lastAnimationState.name)) {
                        this.childArmature.animation.gotoAndPlay(this._armature.animation.lastAnimationState.name);
                    }
                    else {
                        this.childArmature.animation.play();
                    }
                }
                else {
                    this.childArmature.animation.stop();
                    this.childArmature.animation._lastAnimationState = null;
                }
            }
        };
        /** @private */
        Slot.prototype._changeDisplay = function (displayIndex) {
            if (displayIndex === void 0) { displayIndex = 0; }
            if (displayIndex < 0) {
                if (this._isShowDisplay) {
                    this._isShowDisplay = false;
                    this._removeDisplayFromContainer();
                    this.updateChildArmatureAnimation();
                }
            }
            else if (this._displayList.length > 0) {
                var length = this._displayList.length;
                if (displayIndex >= length) {
                    displayIndex = length - 1;
                }
                if (this._currentDisplayIndex != displayIndex) {
                    this._isShowDisplay = true;
                    this._currentDisplayIndex = displayIndex;
                    this._updateSlotDisplay();
                    this.updateChildArmatureAnimation();
                    if (this._displayDataList && this._displayDataList.length > 0 && this._currentDisplayIndex < this._displayDataList.length) {
                        this._origin.copy(this._displayDataList[this._currentDisplayIndex].transform);
                    }
                }
                else if (!this._isShowDisplay) {
                    this._isShowDisplay = true;
                    if (this._armature) {
                        this._armature._slotsZOrderChanged = true;
                        this._addDisplayToContainer(this._armature.display);
                    }
                    this.updateChildArmatureAnimation();
                }
            }
        };
        /** @private
         * Updates the display of the slot.
         */
        Slot.prototype._updateSlotDisplay = function () {
            var currentDisplayIndex = -1;
            if (this._currentDisplay) {
                currentDisplayIndex = this._getDisplayIndex();
                this._removeDisplayFromContainer();
            }
            var displayObj = this._displayList[this._currentDisplayIndex];
            if (displayObj) {
                if (displayObj instanceof dragonBones.Armature) {
                    //_childArmature = display as Armature;
                    this._currentDisplay = displayObj.display;
                }
                else {
                    //_childArmature = null;
                    this._currentDisplay = displayObj;
                }
            }
            else {
                this._currentDisplay = null;
            }
            this._updateDisplay(this._currentDisplay);
            if (this._currentDisplay) {
                if (this._armature && this._isShowDisplay) {
                    if (currentDisplayIndex < 0) {
                        this._armature._slotsZOrderChanged = true;
                        this._addDisplayToContainer(this._armature.display);
                    }
                    else {
                        this._addDisplayToContainer(this._armature.display, currentDisplayIndex);
                    }
                }
                this._updateDisplayBlendMode(this._blendMode);
                this._updateDisplayColor(this._colorTransform.alphaOffset, this._colorTransform.redOffset, this._colorTransform.greenOffset, this._colorTransform.blueOffset, this._colorTransform.alphaMultiplier, this._colorTransform.redMultiplier, this._colorTransform.greenMultiplier, this._colorTransform.blueMultiplier);
                this._updateDisplayVisible(this._visible);
            }
        };
        Object.defineProperty(Slot.prototype, "visible", {
            /** @private */
            set: function (value) {
                if (this._visible != value) {
                    this._visible = value;
                    this._updateDisplayVisible(this._visible);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slot.prototype, "displayList", {
            /**
             * The DisplayObject list belonging to this Slot instance (display or armature). Replace it to implement switch texture.
             */
            get: function () {
                return this._displayList;
            },
            set: function (value) {
                if (!value) {
                    throw new Error();
                }
                //为什么要修改_currentDisplayIndex?
                if (this._currentDisplayIndex < 0) {
                    this._currentDisplayIndex = 0;
                }
                var i = this._displayList.length = value.length;
                while (i--) {
                    this._displayList[i] = value[i];
                }
                //在index不改变的情况下强制刷新 TO DO需要修改
                var displayIndexBackup = this._currentDisplayIndex;
                this._currentDisplayIndex = -1;
                this._changeDisplay(displayIndexBackup);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slot.prototype, "display", {
            /**
             * The DisplayObject belonging to this Slot instance. Instance type of this object varies from flash.display.DisplayObject to startling.display.DisplayObject and subclasses.
             */
            get: function () {
                return this._currentDisplay;
            },
            set: function (value) {
                if (this._currentDisplayIndex < 0) {
                    this._currentDisplayIndex = 0;
                }
                if (this._displayList[this._currentDisplayIndex] == value) {
                    return;
                }
                this._displayList[this._currentDisplayIndex] = value;
                this._updateSlotDisplay();
                this.updateChildArmatureAnimation();
                this._updateTransform(); //是否可以延迟更新？
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Unrecommended API. Please use .display instead.
         * @returns {any}
         */
        Slot.prototype.getDisplay = function () {
            return this.display;
        };
        /**
         * Unrecommended API. Please use .display = instead.
         * @returns {any}
         */
        Slot.prototype.setDisplay = function (value) {
            this.display = value;
        };
        Object.defineProperty(Slot.prototype, "childArmature", {
            /**
             * The sub-armature of this Slot instance.
             */
            get: function () {
                if (this._displayList[this._currentDisplayIndex] instanceof dragonBones.Armature) {
                    return (this._displayList[this._currentDisplayIndex]);
                }
                return null;
            },
            set: function (value) {
                //设计的不好，要修改
                this.display = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slot.prototype, "zOrder", {
            /**
             * zOrder. Support decimal for ensure dynamically added slot work toghther with animation controled slot.
             * @return zOrder.
             */
            get: function () {
                return this._originZOrder + this._tweenZOrder + this._offsetZOrder;
            },
            set: function (value) {
                if (this.zOrder != value) {
                    this._offsetZOrder = value - this._originZOrder - this._tweenZOrder;
                    if (this._armature) {
                        this._armature._slotsZOrderChanged = true;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slot.prototype, "blendMode", {
            /**
             * blendMode
             * @return blendMode.
             */
            get: function () {
                return this._blendMode;
            },
            set: function (value) {
                if (this._blendMode != value) {
                    this._blendMode = value;
                    this._updateDisplayBlendMode(this._blendMode);
                }
            },
            enumerable: true,
            configurable: true
        });
        //Abstract method
        /**
         * @private
         */
        Slot.prototype._updateDisplay = function (value) {
            throw new Error("Abstract method needs to be implemented in subclass!");
        };
        /**
         * @private
         */
        Slot.prototype._getDisplayIndex = function () {
            throw new Error("Abstract method needs to be implemented in subclass!");
        };
        /**
         * @private
         * Adds the original display object to another display object.
         * @param container
         * @param index
         */
        Slot.prototype._addDisplayToContainer = function (container, index) {
            if (index === void 0) { index = -1; }
            throw new Error("Abstract method needs to be implemented in subclass!");
        };
        /**
         * @private
         * remove the original display object from its parent.
         */
        Slot.prototype._removeDisplayFromContainer = function () {
            throw new Error("Abstract method needs to be implemented in subclass!");
        };
        /**
         * @private
         * Updates the transform of the slot.
         */
        Slot.prototype._updateTransform = function () {
            throw new Error("Abstract method needs to be implemented in subclass!");
        };
        /**
         * @private
         */
        Slot.prototype._updateDisplayVisible = function (value) {
            throw new Error("Abstract method needs to be implemented in subclass!");
        };
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
        Slot.prototype._updateDisplayColor = function (aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier) {
            this._colorTransform.alphaOffset = aOffset;
            this._colorTransform.redOffset = rOffset;
            this._colorTransform.greenOffset = gOffset;
            this._colorTransform.blueOffset = bOffset;
            this._colorTransform.alphaMultiplier = aMultiplier;
            this._colorTransform.redMultiplier = rMultiplier;
            this._colorTransform.greenMultiplier = gMultiplier;
            this._colorTransform.blueMultiplier = bMultiplier;
        };
        /**
         * @private
         * Update the blend mode of the display object.
         * @param value The blend mode to use.
         */
        Slot.prototype._updateDisplayBlendMode = function (value) {
            throw new Error("Abstract method needs to be implemented in subclass!");
        };
        return Slot;
    })(dragonBones.DBObject);
    dragonBones.Slot = Slot;
    Slot.prototype.__class__ = "dragonBones.Slot";
})(dragonBones || (dragonBones = {}));
