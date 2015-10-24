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
     * @class dragonBones.EventDispatcher
     * @classdesc
     * 事件派发者
     */
    var EventDispatcher = (function () {
        function EventDispatcher() {
        }
        var __egretProto__ = EventDispatcher.prototype;
        /**
         *是否有指定类型的事件侦听函数
         * @param type 事件类型
         * @returns {boolean}
         */
        __egretProto__.hasEventListener = function (type) {
            if (this._listenersMap && this._listenersMap[type]) {
                return true;
            }
            return false;
        };
        /**
         *添加一个针对指定类型的事件侦听函数
         * @param type 事件类型
         * @param listener 事件侦听函数
         */
        __egretProto__.addEventListener = function (type, listener) {
            if (type && listener) {
                if (!this._listenersMap) {
                    this._listenersMap = {};
                }
                var listeners = this._listenersMap[type];
                if (listeners) {
                    this.removeEventListener(type, listener);
                }
                if (listeners) {
                    listeners.push(listener);
                }
                else {
                    this._listenersMap[type] = [listener];
                }
            }
        };
        /**
         *移除一个指定类型的事件侦听函数
         * @param type 事件类型
         * @param listener 需要移除的事件侦听函数
         */
        __egretProto__.removeEventListener = function (type, listener) {
            if (!this._listenersMap || !type || !listener) {
                return;
            }
            var listeners = this._listenersMap[type];
            if (listeners) {
                var length = listeners.length;
                for (var i = 0; i < length; i++) {
                    if (listeners[i] == listener) {
                        if (length == 1) {
                            listeners.length = 0;
                            delete this._listenersMap[type];
                        }
                        else {
                            listeners.splice(i, 1);
                        }
                    }
                }
            }
        };
        /**
         *移除指定类型的所有的事件侦听函数
         * @param type 事件类型
         */
        __egretProto__.removeAllEventListeners = function (type) {
            if (type) {
                delete this._listenersMap[type];
            }
            else {
                this._listenersMap = null;
            }
        };
        /**
         * 派发事件
         * @param event 被派发的事件
         */
        __egretProto__.dispatchEvent = function (event) {
            if (event) {
                var listeners = this._listenersMap[event.type];
                if (listeners) {
                    event.target = this;
                    var listenersCopy = listeners.concat();
                    var length = listeners.length;
                    for (var i = 0; i < length; i++) {
                        listenersCopy[i](event);
                    }
                }
            }
        };
        return EventDispatcher;
    })();
    dragonBones.EventDispatcher = EventDispatcher;
    EventDispatcher.prototype.__class__ = "dragonBones.EventDispatcher";
})(dragonBones || (dragonBones = {}));
