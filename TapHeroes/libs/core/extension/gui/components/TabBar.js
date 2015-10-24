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
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.TabBar
         * @classdesc
         * 选项卡组件
         * @extends egret.gui.ListBase
         */
        var TabBar = (function (_super) {
            __extends(TabBar, _super);
            /**
             * 构造函数
             * @method egret.gui.TabBar#constructor
             */
            function TabBar() {
                _super.call(this);
                /**
                 * 是否捕获ItemRenderer以便在MouseUp时抛出ItemClick事件
                 */
                this._captureItemRenderer = true;
                this.requireSelection = true;
            }
            Object.defineProperty(TabBar.prototype, "requireSelection", {
                /**
                 * @method egret.gui.TabBar#c
                 * @param value {boolean}
                 */
                set: function (value) {
                    if (value == this._requireSelection)
                        return;
                    _super.prototype._setRequireSelection.call(this, value);
                    this.requireSelectionChanged_tabBar = true;
                    this.invalidateProperties();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @inheritDoc
             */
            TabBar.prototype._setDataProvider = function (value) {
                if (this.dataProvider instanceof gui.ViewStack) {
                    this.dataProvider.removeEventListener("IndexChanged", this.onViewStackIndexChange, this);
                    this.removeEventListener(gui.IndexChangeEvent.CHANGE, this.onIndexChanged, this);
                }
                if (value instanceof gui.ViewStack) {
                    value.addEventListener("IndexChanged", this.onViewStackIndexChange, this);
                    this.addEventListener(gui.IndexChangeEvent.CHANGE, this.onIndexChanged, this);
                }
                _super.prototype._setDataProvider.call(this, value);
            };
            /**
             * 鼠标点击的选中项改变
             */
            TabBar.prototype.onIndexChanged = function (event) {
                (this.dataProvider)._setSelectedIndex(event.newIndex, false);
            };
            /**
             * ViewStack选中项发生改变
             */
            TabBar.prototype.onViewStackIndexChange = function (event) {
                this._setSelectedIndex((this.dataProvider).selectedIndex, false);
            };
            TabBar.prototype.commitProperties = function () {
                _super.prototype.commitProperties.call(this);
                if (this.requireSelectionChanged_tabBar && this.dataGroup) {
                    this.requireSelectionChanged_tabBar = false;
                    var n = this.dataGroup.numElements;
                    for (var i = 0; i < n; i++) {
                        var renderer = (this.dataGroup.getElementAt(i));
                        if (renderer)
                            renderer.allowDeselection = !this.requireSelection;
                    }
                }
            };
            TabBar.prototype.dataGroup_rendererAddHandler = function (event) {
                _super.prototype.dataGroup_rendererAddHandler.call(this, event);
                var renderer = event.renderer;
                if (!renderer)
                    return;
                renderer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.item_touchBeginHandler, this);
                renderer.addEventListener(egret.TouchEvent.TOUCH_END, this.item_touchEndHandler, this);
                if (renderer instanceof gui.TabBarButton)
                    renderer.allowDeselection = !this.requireSelection;
            };
            TabBar.prototype.dataGroup_rendererRemoveHandler = function (event) {
                _super.prototype.dataGroup_rendererRemoveHandler.call(this, event);
                var renderer = event.renderer;
                if (!renderer)
                    return;
                renderer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.item_touchBeginHandler, this);
                renderer.removeEventListener(egret.TouchEvent.TOUCH_END, this.item_touchEndHandler, this);
            };
            /**
             * 鼠标在条目上按下
             */
            TabBar.prototype.item_touchBeginHandler = function (event) {
                if (event._isDefaultPrevented)
                    return;
                var itemRenderer = (event.currentTarget);
                this._touchBeginItem = itemRenderer;
                gui.UIGlobals.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.stage_touchEndHandler, this);
                gui.UIGlobals.stage.addEventListener(egret.Event.LEAVE_STAGE, this.stage_touchEndHandler, this);
            };
            /**
             * 鼠标在项呈示器上弹起，抛出ItemClick事件。
             */
            TabBar.prototype.item_touchEndHandler = function (event) {
                var itemRenderer = (event.currentTarget);
                if (itemRenderer != this._touchBeginItem)
                    return;
                var newIndex;
                if (itemRenderer)
                    newIndex = itemRenderer.itemIndex;
                else
                    newIndex = this.dataGroup.getElementIndex((event.currentTarget));
                if (newIndex == this.selectedIndex) {
                    if (!this.requireSelection)
                        this._setSelectedIndex(gui.ListBase.NO_SELECTION, true);
                }
                else
                    this._setSelectedIndex(newIndex, true);
                if (!this._captureItemRenderer)
                    return;
                this._dispatchListEvent(event, gui.ListEvent.ITEM_CLICK, itemRenderer);
            };
            /**
             * 鼠标在舞台上弹起
             */
            TabBar.prototype.stage_touchEndHandler = function (event) {
                gui.UIGlobals.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.stage_touchEndHandler, this);
                gui.UIGlobals.stage.removeEventListener(egret.Event.LEAVE_STAGE, this.stage_touchEndHandler, this);
                this._touchBeginItem = null;
            };
            return TabBar;
        })(gui.ListBase);
        gui.TabBar = TabBar;
        TabBar.prototype.__class__ = "egret.gui.TabBar";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
