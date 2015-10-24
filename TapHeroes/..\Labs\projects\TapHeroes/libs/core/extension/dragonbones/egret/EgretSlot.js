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
    var EgretSlot = (function (_super) {
        __extends(EgretSlot, _super);
        function EgretSlot() {
            _super.call(this, this);
            this._egretDisplay = null;
        }
        EgretSlot.prototype.dispose = function () {
            var length = this._displayList.length;
            for (var i = 0; i < length; i++) {
                var content = this._displayList[i];
                if (content instanceof dragonBones.Armature) {
                    content.dispose();
                }
            }
            _super.prototype.dispose.call(this);
            this._egretDisplay = null;
        };
        /** @private */
        EgretSlot.prototype._updateDisplay = function (value) {
            this._egretDisplay = value;
        };
        //Abstract method
        /** @private */
        EgretSlot.prototype._getDisplayIndex = function () {
            if (this._egretDisplay && this._egretDisplay.parent) {
                return this._egretDisplay.parent.getChildIndex(this._egretDisplay);
            }
            return -1;
        };
        /** @private */
        EgretSlot.prototype._addDisplayToContainer = function (container, index) {
            if (index === void 0) { index = -1; }
            var egretContainer = container;
            if (this._egretDisplay && egretContainer) {
                if (index < 0) {
                    egretContainer.addChild(this._egretDisplay);
                }
                else {
                    egretContainer.addChildAt(this._egretDisplay, Math.min(index, egretContainer.numChildren));
                }
            }
        };
        /** @private */
        EgretSlot.prototype._removeDisplayFromContainer = function () {
            if (this._egretDisplay && this._egretDisplay.parent) {
                this._egretDisplay.parent.removeChild(this._egretDisplay);
            }
        };
        /** @private */
        EgretSlot.prototype._updateTransform = function () {
            if (this._egretDisplay) {
                this._egretDisplay.__hack_local_matrix = this._globalTransformMatrix;
            }
        };
        /** @private */
        EgretSlot.prototype._updateDisplayVisible = function (value) {
            if (this._egretDisplay && this._parent) {
                this._egretDisplay.visible = this._parent._visible && this._visible && value;
            }
        };
        /** @private */
        EgretSlot.prototype._updateDisplayColor = function (aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier) {
            _super.prototype._updateDisplayColor.call(this, aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier);
            if (this._egretDisplay) {
                this._egretDisplay.alpha = aMultiplier;
            }
        };
        /** @private */
        EgretSlot.prototype._updateDisplayBlendMode = function (value) {
            if (this._egretDisplay && value) {
                this._egretDisplay.blendMode = value;
            }
        };
        return EgretSlot;
    })(dragonBones.Slot);
    dragonBones.EgretSlot = EgretSlot;
    EgretSlot.prototype.__class__ = "dragonBones.EgretSlot";
})(dragonBones || (dragonBones = {}));
