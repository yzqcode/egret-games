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
    var DBObject = (function () {
        function DBObject() {
            this._globalTransformMatrix = new dragonBones.Matrix();
            this._global = new dragonBones.DBTransform();
            this._origin = new dragonBones.DBTransform();
            this._offset = new dragonBones.DBTransform();
            this._offset.scaleX = this._offset.scaleY = 1;
            this._visible = true;
            this._armature = null;
            this._parent = null;
            this.userData = null;
        }
        Object.defineProperty(DBObject.prototype, "global", {
            /**
             * This DBObject instance global transform instance.
             * @see dragonBones.objects.DBTransform
             */
            get: function () {
                return this._global;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DBObject.prototype, "origin", {
            /**
             * This DBObject instance related to parent transform instance.
             * @see dragonBones.objects.DBTransform
             */
            get: function () {
                return this._origin;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DBObject.prototype, "offset", {
            /**
             * This DBObject instance offset transform instance (For manually control).
             * @see dragonBones.objects.DBTransform
             */
            get: function () {
                return this._offset;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DBObject.prototype, "armature", {
            /**
             * The armature this DBObject instance belongs to.
             */
            get: function () {
                return this._armature;
            },
            enumerable: true,
            configurable: true
        });
        /** @private */
        DBObject.prototype._setArmature = function (value) {
            this._armature = value;
        };
        Object.defineProperty(DBObject.prototype, "parent", {
            /**
             * Indicates the Bone instance that directly contains this DBObject instance if any.
             */
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        /** @private */
        DBObject.prototype._setParent = function (value) {
            this._parent = value;
        };
        /**
         * Cleans up any resources used by this DBObject instance.
         */
        DBObject.prototype.dispose = function () {
            this.userData = null;
            this._globalTransformMatrix = null;
            this._global = null;
            this._origin = null;
            this._offset = null;
            this._armature = null;
            this._parent = null;
        };
        return DBObject;
    })();
    dragonBones.DBObject = DBObject;
    DBObject.prototype.__class__ = "dragonBones.DBObject";
})(dragonBones || (dragonBones = {}));
