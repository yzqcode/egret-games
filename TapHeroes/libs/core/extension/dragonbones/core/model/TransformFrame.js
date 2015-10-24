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
    var TransformFrame = (function (_super) {
        __extends(TransformFrame, _super);
        function TransformFrame() {
            _super.call(this);
            //旋转几圈
            this.tweenRotate = 0;
            this.displayIndex = 0;
            this.tweenEasing = 10;
            this.tweenRotate = 0;
            this.tweenScale = true;
            this.displayIndex = 0;
            this.visible = true;
            this.zOrder = NaN;
            this.global = new dragonBones.DBTransform();
            this.transform = new dragonBones.DBTransform();
            this.pivot = new dragonBones.Point();
            this.scaleOffset = new dragonBones.Point();
        }
        TransformFrame.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.global = null;
            this.transform = null;
            this.pivot = null;
            this.scaleOffset = null;
            this.color = null;
        };
        return TransformFrame;
    })(dragonBones.Frame);
    dragonBones.TransformFrame = TransformFrame;
    TransformFrame.prototype.__class__ = "dragonBones.TransformFrame";
})(dragonBones || (dragonBones = {}));
