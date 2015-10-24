//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var dragonBones;
(function (dragonBones) {
    /**
     * @class dragonbones.AnimationData
     * @extends dragonbones.Timeline
     * @classdesc
     * 保存动画数据
     */
    var AnimationData = (function (_super) {
        __extends(AnimationData, _super);
        /**
         * 创建一个AnimationData实例
         */
        function AnimationData() {
            _super.call(this);
            /**
             * 动画的帧率，表示每一秒钟播放多少帧
             * @member {number} dragonBones.AnimationData#frameRate
             */
            this.frameRate = 0;
            /**
             * 	播放次数 0为一直播放，默认为0
             * @member {number} dragonBones.AnimationData#playTimes
             */
            this.playTimes = 0;
            /**
             * 最后一帧持续的帧数
             * @member {number} dragonBones.AnimationData#lastFrameDuration
             */
            this.lastFrameDuration = 0;
            this.fadeTime = 0;
            this.playTimes = 0;
            this.autoTween = true;
            this.tweenEasing = NaN;
            this.hideTimelineNameMap = [];
            this._timelineList = [];
            this._slotTimelineList = [];
        }
        var __egretProto__ = AnimationData.prototype;
        Object.defineProperty(__egretProto__, "timelineList", {
            /**
             * 时间轴列表
             * @returns {Array<TransformTimeline>}
             */
            get: function () {
                return this._timelineList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "slotTimelineList", {
            get: function () {
                return this._slotTimelineList;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 释放资源
         */
        __egretProto__.dispose = function () {
            _super.prototype.dispose.call(this);
            this.hideTimelineNameMap = null;
            var i = 0;
            var len = 0;
            for (i = 0, len = this._timelineList.length; i < len; i++) {
                var timeline = this._timelineList[i];
                timeline.dispose();
            }
            this._timelineList = null;
            for (i = 0, len = this._slotTimelineList.length; i < len; i++) {
                var slotTimeline = this._slotTimelineList[i];
                slotTimeline.dispose();
            }
            this._slotTimelineList = null;
        };
        /**
         * 根据时间轴的名字获取时间轴数据
         * @param timelineName 时间轴的名字
         * @returns {*} 时间轴数据
         */
        __egretProto__.getTimeline = function (timelineName) {
            var i = this._timelineList.length;
            while (i--) {
                if (this._timelineList[i].name == timelineName) {
                    return this._timelineList[i];
                }
            }
            return null;
        };
        /**
         * 添加一个时间轴数据
         * @param timeline 需要被添加的时间轴数据
         */
        __egretProto__.addTimeline = function (timeline) {
            if (!timeline) {
                throw new Error();
            }
            if (this._timelineList.indexOf(timeline) < 0) {
                this._timelineList[this._timelineList.length] = timeline;
            }
        };
        __egretProto__.getSlotTimeline = function (timelineName) {
            var i = this._slotTimelineList.length;
            while (i--) {
                if (this._slotTimelineList[i].name == timelineName) {
                    return this._slotTimelineList[i];
                }
            }
            return null;
        };
        __egretProto__.addSlotTimeline = function (timeline) {
            if (!timeline) {
                throw new Error();
            }
            if (this._slotTimelineList.indexOf(timeline) < 0) {
                this._slotTimelineList[this._slotTimelineList.length] = timeline;
            }
        };
        return AnimationData;
    })(dragonBones.Timeline);
    dragonBones.AnimationData = AnimationData;
    AnimationData.prototype.__class__ = "dragonBones.AnimationData";
})(dragonBones || (dragonBones = {}));
