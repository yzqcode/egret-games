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

class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){
        //egret.Profiler.getInstance().run();
        
        this.initGame();

        //注入自定义的素材解析器
        egret.Injector.mapClass("egret.gui.IAssetAdapter",AssetAdapter);

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete,this);
        RES.loadConfig(resource_root + "resource.json", resource_root);

        
    }

    private initGame() {
        egret.ExternalInterface.addCallback("buy_diamond_callback", UIShopDialog.finishBuyShopDiamond);
        
        Utils.registerDragonBonesTimer();

        G.main_director = this;

        G.win_width = this.stage.stageWidth
        G.win_height = this.stage.stageHeight
    }

    /**
     * 配置文件加载完成,开始预加载base资源组。
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onBaseResourceLoadComplete,this);

        RES.loadGroup("base");
    }

    public gateAnimLayer:ChangeTweenLayer = null;

    public current_layer = null;
    public loadingView:UIBaseLoadingView = null;

    private onResourceProgress(event:RES.ResourceEvent):void {
        this.loadingView.setProgress(event.groupName, event.itemsLoaded, event.itemsTotal);
    }

    private onBaseResourceLoadComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onBaseResourceLoadComplete,this);

        this.loadingView = new UIBaseLoadingView();
        this.current_layer = this.loadingView;
        this.current_layer.showOnMainLayer(this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onLoginGroupLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);

        RES.loadGroup("login");
    }

    private res_groups = ["partical", "main", "cha", "sound", "battle", "home", "quest"]
    private onLoginGroupLoadComplete(event:RES.ResourceEvent):void {
        // 登录资源载入完毕
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onLoginGroupLoadComplete,this);

        this.loadingView.onLoadingLoginResEnd();

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onOtherResourceLoadComplete,this);

        for ( var i=0; i<this.res_groups.length; ++i ) {
            RES.loadGroup( this.res_groups[i] );
        }
    }

    private loaded_group_sum:number = 0;
    private onOtherResourceLoadComplete(event:RES.ResourceEvent):void {
        this.loaded_group_sum += 1

        if (this.loaded_group_sum == this.res_groups.length) {
            // 所有资源载入完毕
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onOtherResourceLoadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);

            this.loadingView.onLoadingResourcesEnd();
        }
    }

    public removeCurrentLayer() {
        if (this.current_layer != null) {
            this.current_layer.removeFromMainLayer();
            this.current_layer = null;
        }
    }

    public showGateAnimLayer(name:string) {
        if (this.gateAnimLayer != null) {
            return;
        }

        this.gateAnimLayer = new ChangeTweenLayer();
        this.gateAnimLayer.next_view_name = name;
        this.gateAnimLayer.showOnMainLayer(this);
    }
    public closeGateAnimLayer() {
        if (this.gateAnimLayer == null) {
            return;
        }

        this.gateAnimLayer.removeFromMainLayer();
        this.gateAnimLayer = null;
    }

    public enterBattleView() {
        this.showGateAnimLayer(ChangeTweenLayer.BATTLE_VIEW);
    }

    public enterBaseLoadingView() {
        this.showGateAnimLayer(ChangeTweenLayer.BASE_LODING_VIEW);
    }

    public enterSelectKnightView() {
        this.showGateAnimLayer(ChangeTweenLayer.SELECT_KNIGHT_VIEW);
    }

    public enterCreateKnightView() {
        this.showGateAnimLayer(ChangeTweenLayer.CREATE_KNIGHT_VIEW);
    }

    public enterHomeView() {
        this.showGateAnimLayer(ChangeTweenLayer.HOME_VIEW);
    }

    public enterQuestView() {
        this.showGateAnimLayer(ChangeTweenLayer.QUEST_VIEW);
    }

    public enterHireView() {
        this.showGateAnimLayer(ChangeTweenLayer.HIRE_VIEW);
    }

    public enterMyTeamSetView() {
        this.showGateAnimLayer(ChangeTweenLayer.KNIGHT_TEAM_SET_VIEW);
    }

    public enterArenaView() {
        this.showGateAnimLayer(ChangeTweenLayer.ARENA_VIEW);
    }

    public enterGuildView() {
        this.showGateAnimLayer(ChangeTweenLayer.GUILD_VIEW);
    }

    public enterJobView() {
        this.showGateAnimLayer(ChangeTweenLayer.JOB_VIEW);
    }
}


