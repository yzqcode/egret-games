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
    var ConstValues = (function () {
        function ConstValues() {
        }
        ConstValues.ANGLE_TO_RADIAN = Math.PI / 180;
        ConstValues.DRAGON_BONES = "dragonBones";
        ConstValues.ARMATURE = "armature";
        ConstValues.SKIN = "skin";
        ConstValues.BONE = "bone";
        ConstValues.SLOT = "slot";
        ConstValues.DISPLAY = "display";
        ConstValues.ANIMATION = "animation";
        ConstValues.TIMELINE = "timeline";
        ConstValues.FRAME = "frame";
        ConstValues.TRANSFORM = "transform";
        ConstValues.COLOR_TRANSFORM = "colorTransform";
        ConstValues.RECTANGLE = "rectangle";
        ConstValues.ELLIPSE = "ellipse";
        ConstValues.TEXTURE_ATLAS = "TextureAtlas";
        ConstValues.SUB_TEXTURE = "SubTexture";
        ConstValues.A_ROTATED = "rotated";
        ConstValues.A_FRAME_X = "frameX";
        ConstValues.A_FRAME_Y = "frameY";
        ConstValues.A_FRAME_WIDTH = "frameWidth";
        ConstValues.A_FRAME_HEIGHT = "frameHeight";
        ConstValues.A_VERSION = "version";
        ConstValues.A_IMAGE_PATH = "imagePath";
        ConstValues.A_FRAME_RATE = "frameRate";
        ConstValues.A_NAME = "name";
        ConstValues.A_PARENT = "parent";
        ConstValues.A_LENGTH = "length";
        ConstValues.A_TYPE = "type";
        ConstValues.A_FADE_IN_TIME = "fadeInTime";
        ConstValues.A_DURATION = "duration";
        ConstValues.A_SCALE = "scale";
        ConstValues.A_OFFSET = "offset";
        ConstValues.A_LOOP = "loop";
        ConstValues.A_EVENT = "event";
        ConstValues.A_EVENT_PARAMETERS = "eventParameters";
        ConstValues.A_SOUND = "sound";
        ConstValues.A_ACTION = "action";
        ConstValues.A_HIDE = "hide";
        ConstValues.A_AUTO_TWEEN = "autoTween";
        ConstValues.A_TWEEN_EASING = "tweenEasing";
        ConstValues.A_TWEEN_ROTATE = "tweenRotate";
        ConstValues.A_TWEEN_SCALE = "tweenScale";
        ConstValues.A_DISPLAY_INDEX = "displayIndex";
        ConstValues.A_Z_ORDER = "z";
        ConstValues.A_BLENDMODE = "blendMode";
        ConstValues.A_WIDTH = "width";
        ConstValues.A_HEIGHT = "height";
        ConstValues.A_INHERIT_SCALE = "inheritScale";
        ConstValues.A_INHERIT_ROTATION = "inheritRotation";
        ConstValues.A_X = "x";
        ConstValues.A_Y = "y";
        ConstValues.A_SKEW_X = "skX";
        ConstValues.A_SKEW_Y = "skY";
        ConstValues.A_SCALE_X = "scX";
        ConstValues.A_SCALE_Y = "scY";
        ConstValues.A_PIVOT_X = "pX";
        ConstValues.A_PIVOT_Y = "pY";
        ConstValues.A_ALPHA_OFFSET = "aO";
        ConstValues.A_RED_OFFSET = "rO";
        ConstValues.A_GREEN_OFFSET = "gO";
        ConstValues.A_BLUE_OFFSET = "bO";
        ConstValues.A_ALPHA_MULTIPLIER = "aM";
        ConstValues.A_RED_MULTIPLIER = "rM";
        ConstValues.A_GREEN_MULTIPLIER = "gM";
        ConstValues.A_BLUE_MULTIPLIER = "bM";
        ConstValues.A_SCALE_X_OFFSET = "scXOffset";
        ConstValues.A_SCALE_Y_OFFSET = "scYOffset";
        ConstValues.A_SCALE_MODE = "scaleMode";
        ConstValues.A_FIXED_ROTATION = "fixedRotation";
        return ConstValues;
    })();
    dragonBones.ConstValues = ConstValues;
    ConstValues.prototype.__class__ = "dragonBones.ConstValues";
})(dragonBones || (dragonBones = {}));
