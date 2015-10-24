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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.gateAnimLayer = null;
        this.current_layer = null;
        this.loadingView = null;
        this.res_groups = ["partical", "main", "cha", "sound", "battle", "home", "quest"];
        this.loaded_group_sum = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = Main.prototype;
    __egretProto__.onAddToStage = function (event) {
        //egret.Profiler.getInstance().run();
        this.initGame();
        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig(resource_root + "resource.json", resource_root);
    };
    __egretProto__.initGame = function () {
        egret.ExternalInterface.addCallback("buy_diamond_callback", UIShopDialog.finishBuyShopDiamond);
        Utils.registerDragonBonesTimer();
        G.main_director = this;
        G.win_width = this.stage.stageWidth;
        G.win_height = this.stage.stageHeight;
    };
    /**
     * 配置文件加载完成,开始预加载base资源组。
     */
    __egretProto__.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onBaseResourceLoadComplete, this);
        RES.loadGroup("base");
    };
    __egretProto__.onResourceProgress = function (event) {
        this.loadingView.setProgress(event.groupName, event.itemsLoaded, event.itemsTotal);
    };
    __egretProto__.onBaseResourceLoadComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onBaseResourceLoadComplete, this);
        this.loadingView = new UIBaseLoadingView();
        this.current_layer = this.loadingView;
        this.current_layer.showOnMainLayer(this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoginGroupLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("login");
    };
    __egretProto__.onLoginGroupLoadComplete = function (event) {
        // 登录资源载入完毕
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onLoginGroupLoadComplete, this);
        this.loadingView.onLoadingLoginResEnd();
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onOtherResourceLoadComplete, this);
        for (var i = 0; i < this.res_groups.length; ++i) {
            RES.loadGroup(this.res_groups[i]);
        }
    };
    __egretProto__.onOtherResourceLoadComplete = function (event) {
        this.loaded_group_sum += 1;
        if (this.loaded_group_sum == this.res_groups.length) {
            // 所有资源载入完毕
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onOtherResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.loadingView.onLoadingResourcesEnd();
        }
    };
    __egretProto__.removeCurrentLayer = function () {
        if (this.current_layer != null) {
            this.current_layer.removeFromMainLayer();
            this.current_layer = null;
        }
    };
    __egretProto__.showGateAnimLayer = function (name) {
        if (this.gateAnimLayer != null) {
            return;
        }
        this.gateAnimLayer = new ChangeTweenLayer();
        this.gateAnimLayer.next_view_name = name;
        this.gateAnimLayer.showOnMainLayer(this);
    };
    __egretProto__.closeGateAnimLayer = function () {
        if (this.gateAnimLayer == null) {
            return;
        }
        this.gateAnimLayer.removeFromMainLayer();
        this.gateAnimLayer = null;
    };
    __egretProto__.enterBattleView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.BATTLE_VIEW);
    };
    __egretProto__.enterBaseLoadingView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.BASE_LODING_VIEW);
    };
    __egretProto__.enterSelectKnightView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.SELECT_KNIGHT_VIEW);
    };
    __egretProto__.enterCreateKnightView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.CREATE_KNIGHT_VIEW);
    };
    __egretProto__.enterHomeView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.HOME_VIEW);
    };
    __egretProto__.enterQuestView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.QUEST_VIEW);
    };
    __egretProto__.enterHireView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.HIRE_VIEW);
    };
    __egretProto__.enterMyTeamSetView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.KNIGHT_TEAM_SET_VIEW);
    };
    __egretProto__.enterArenaView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.ARENA_VIEW);
    };
    __egretProto__.enterGuildView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.GUILD_VIEW);
    };
    __egretProto__.enterJobView = function () {
        this.showGateAnimLayer(ChangeTweenLayer.JOB_VIEW);
    };
    return Main;
})(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
