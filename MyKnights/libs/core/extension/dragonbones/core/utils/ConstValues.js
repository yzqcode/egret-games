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
    /**
     * @class dragonBones.ConstValues
     * @classdesc
     *定义了常用的常量
     */
    var ConstValues = (function () {
        function ConstValues() {
        }
        var __egretProto__ = ConstValues.prototype;
        /**
         * 角度转换为弧度
         */
        ConstValues.ANGLE_TO_RADIAN = Math.PI / 180;
        /**
         * 弧度转换为角度
         */
        ConstValues.RADIAN_TO_ANGLE = 180 / Math.PI;
        /**
         *龙骨
         */
        ConstValues.DRAGON_BONES = "dragonBones";
        /**
         * 骨架
         */
        ConstValues.ARMATURE = "armature";
        /**
         *皮肤
         */
        ConstValues.SKIN = "skin";
        /**
         * 骨骼
         */
        ConstValues.BONE = "bone";
        /**
         * 插槽
         */
        ConstValues.SLOT = "slot";
        /**
         * 显示对象
         */
        ConstValues.DISPLAY = "display";
        /**
         * 动画
         */
        ConstValues.ANIMATION = "animation";
        /**
         * 时间轴
         */
        ConstValues.TIMELINE = "timeline";
        /**
         * 帧
         */
        ConstValues.FRAME = "frame";
        /**
         * 变换
         */
        ConstValues.TRANSFORM = "transform";
        /**
         * 颜色变换
         */
        ConstValues.COLOR_TRANSFORM = "colorTransform";
        /**
         * 矩形
         */
        ConstValues.RECTANGLE = "rectangle";
        /**
         * 椭圆
         */
        ConstValues.ELLIPSE = "ellipse";
        /**
         * 纹理集
         */
        ConstValues.TEXTURE_ATLAS = "TextureAtlas";
        /**
         * 子纹理
         */
        ConstValues.SUB_TEXTURE = "SubTexture";
        /**
         * 旋转
         */
        ConstValues.A_ROTATED = "rotated";
        /**
         * 帧的x坐标
         */
        ConstValues.A_FRAME_X = "frameX";
        /**
         * 帧的y坐标
         */
        ConstValues.A_FRAME_Y = "frameY";
        /**
         * 帧的宽度
         */
        ConstValues.A_FRAME_WIDTH = "frameWidth";
        /**
         * 帧的高度
         */
        ConstValues.A_FRAME_HEIGHT = "frameHeight";
        /**
         * 版本
         */
        ConstValues.A_VERSION = "version";
        /**
         * 图片路径
         */
        ConstValues.A_IMAGE_PATH = "imagePath";
        /**
         * 帧速率
         */
        ConstValues.A_FRAME_RATE = "frameRate";
        /**
         * 名字
         */
        ConstValues.A_NAME = "name";
        /**
         * 是否是全局
         */
        ConstValues.A_IS_GLOBAL = "isGlobal";
        /**
         * 父亲
         */
        ConstValues.A_PARENT = "parent";
        /**
         * 长度
         */
        ConstValues.A_LENGTH = "length";
        /**
         * 类型
         */
        ConstValues.A_TYPE = "type";
        /**
         * 缓入事件
         */
        ConstValues.A_FADE_IN_TIME = "fadeInTime";
        /**
         * 持续时长
         */
        ConstValues.A_DURATION = "duration";
        /**
         * 缩放
         */
        ConstValues.A_SCALE = "scale";
        /**
         * 偏移
         */
        ConstValues.A_OFFSET = "offset";
        /**
         * 循环
         */
        ConstValues.A_LOOP = "loop";
        /**
         * 事件
         */
        ConstValues.A_EVENT = "event";
        /**
         * 事件参数
         */
        ConstValues.A_EVENT_PARAMETERS = "eventParameters";
        /**
         * 声音
         */
        ConstValues.A_SOUND = "sound";
        /**
         * 动作
         */
        ConstValues.A_ACTION = "action";
        /**
         * 隐藏
         */
        ConstValues.A_HIDE = "hide";
        /**
         * 自动补间
         */
        ConstValues.A_AUTO_TWEEN = "autoTween";
        /**
         * 补间缓动
         */
        ConstValues.A_TWEEN_EASING = "tweenEasing";
        /**
         * 补间旋转
         */
        ConstValues.A_TWEEN_ROTATE = "tweenRotate";
        /**
         * 补间缩放
         */
        ConstValues.A_TWEEN_SCALE = "tweenScale";
        /**
         * 显示对象序号
         */
        ConstValues.A_DISPLAY_INDEX = "displayIndex";
        /**
         * z轴
         */
        ConstValues.A_Z_ORDER = "z";
        /**
         * 混合模式
         */
        ConstValues.A_BLENDMODE = "blendMode";
        /**
         * 宽度
         */
        ConstValues.A_WIDTH = "width";
        /**
         * 高度
         */
        ConstValues.A_HEIGHT = "height";
        /**
         * 继承缩放
         */
        ConstValues.A_INHERIT_SCALE = "inheritScale";
        /**
         * 继承旋转
         */
        ConstValues.A_INHERIT_ROTATION = "inheritRotation";
        /**
         * x轴
         */
        ConstValues.A_X = "x";
        /**
         * y轴
         */
        ConstValues.A_Y = "y";
        /**
         * x方向斜切
         */
        ConstValues.A_SKEW_X = "skX";
        /**
         * y方向斜切
         */
        ConstValues.A_SKEW_Y = "skY";
        /**
         * x方向缩放
         */
        ConstValues.A_SCALE_X = "scX";
        /**
         * y方向缩放
         */
        ConstValues.A_SCALE_Y = "scY";
        /**
         * 轴点的x坐标
         */
        ConstValues.A_PIVOT_X = "pX";
        /**
         * 轴点的y坐标
         */
        ConstValues.A_PIVOT_Y = "pY";
        /**
         * 透明度的偏移
         */
        ConstValues.A_ALPHA_OFFSET = "aO";
        /**
         * 红色的偏移
         */
        ConstValues.A_RED_OFFSET = "rO";
        /**
         * 绿色的偏移
         */
        ConstValues.A_GREEN_OFFSET = "gO";
        /**
         * 蓝色的偏移
         */
        ConstValues.A_BLUE_OFFSET = "bO";
        /**
         * 透明度的倍数
         */
        ConstValues.A_ALPHA_MULTIPLIER = "aM";
        /**
         * 红色的倍数
         */
        ConstValues.A_RED_MULTIPLIER = "rM";
        /**
         * 绿色的倍数
         */
        ConstValues.A_GREEN_MULTIPLIER = "gM";
        /**
         * 蓝色的倍数
         */
        ConstValues.A_BLUE_MULTIPLIER = "bM";
        /**
         * x方向缩放的偏移
         */
        ConstValues.A_SCALE_X_OFFSET = "scXOffset";
        /**
         * y方向的偏移
         */
        ConstValues.A_SCALE_Y_OFFSET = "scYOffset";
        /**
         * 缩放模式
         */
        ConstValues.A_SCALE_MODE = "scaleMode";
        /**
         * 旋转修正
         */
        ConstValues.A_FIXED_ROTATION = "fixedRotation";
        return ConstValues;
    })();
    dragonBones.ConstValues = ConstValues;
    ConstValues.prototype.__class__ = "dragonBones.ConstValues";
})(dragonBones || (dragonBones = {}));
