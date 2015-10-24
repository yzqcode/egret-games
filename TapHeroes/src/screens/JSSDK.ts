/**
 * Created by d8q8 on 2015/1/19.
 * @class JSSDK
 * @constructor
 **/

interface SignPackage {
    appId:string;
    nonceStr:string;
    timestamp:number;
    signature:string;
    url:string;
}

class JSSDK extends BaseScreen {
    public CLASS_NAME:string = "JSSDK";
    private signPackage:SignPackage;
    private url:string;

    /**
     * 初始化
     **/
    public init() {
        //定义皮肤

        //你的后端数据JSON入口
        this.url = "http://api.woolagame.com/weixingongzhong/jssdk/php/json.php";

        //获取签名
        this.getSignPackage();
    }

    /**
     * 获取签名分享
     */
    private getSignPackage() {
        var urlloader = new egret.URLLoader();
        var req = new egret.URLRequest(this.url);
        urlloader.load(req);
        req.method = egret.URLRequestMethod.GET;
        urlloader.addEventListener(egret.Event.COMPLETE, (e)=> {
            this.signPackage = <SignPackage>JSON.parse(e.target.data);
            //........................................................
            //基本配置
            this.getWeiXinConfig();
            //下面可以加更多接口,可自行扩展
            //this.getWeiXinShareTimeline();//分享朋友圈
            //this.getWeiXinShareAppMessage();//分享朋友
            //this.getWeiXinShareQQ();//分享QQ
            //this.getWeiXinShareWeiBo();//分享到腾讯微博
            //........................................................
        }, this);
    }

    /**
     * 获取微信配置
     */
    private getWeiXinConfig() {
        /*
         * 注意：
         * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
         * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
         * 3. 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
         *
         * 如有问题请通过以下渠道反馈：
         * 邮箱地址：weixin-open@qq.com
         * 邮件主题：【微信JS-SDK反馈】具体问题
         * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
         */
        //配置参数
        var bodyConfig = new BodyConfig();
        bodyConfig.debug = true;// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        bodyConfig.appId = this.signPackage.appId;// 必填，公众号的唯一标识
        bodyConfig.timestamp = this.signPackage.timestamp;// 必填，生成签名的时间戳
        bodyConfig.nonceStr = this.signPackage.nonceStr;// 必填，生成签名的随机串
        bodyConfig.signature = this.signPackage.signature;// 必填，签名，见附录1
        bodyConfig.jsApiList = [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            // 所有要调用的 API 都要加到这个列表中
            'checkJsApi',//判断当前客户端是否支持指定JS接口
            'onMenuShareTimeline',//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
            'onMenuShareAppMessage',//获取“分享给朋友”按钮点击状态及自定义分享内容接口
            'onMenuShareQQ',//获取“分享到QQ”按钮点击状态及自定义分享内容接口
            'onMenuShareWeibo',//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
            'hideMenuItems',//批量隐藏功能按钮接口
            'showMenuItems',//批量显示功能按钮接口
            'hideAllNonBaseMenuItem',//隐藏所有非基础按钮接口
            'showAllNonBaseMenuItem',//显示所有功能按钮接口
            'translateVoice',//识别音频并返回识别结果接口
            'startRecord',//开始录音接口
            'stopRecord',//停止录音接口
            'playVoice',//播放语音接口
            'pauseVoice',//暂停播放接口
            'stopVoice',//停止播放接口
            'uploadVoice',//上传语音接口
            'downloadVoice',//下载语音接口
            'chooseImage',//拍照或从手机相册中选图接口
            'previewImage',//预览图片接口
            'uploadImage',//上传图片接口
            'downloadImage',//下载图片接口
            'getNetworkType',//获取网络状态接口
            'openLocation',//使用微信内置地图查看位置接口
            'getLocation',//获取地理位置接口
            'hideOptionMenu',//隐藏右上角菜单接口
            'showOptionMenu',//显示右上角菜单接口
            'closeWindow',//关闭当前网页窗口接口
            'scanQRCode',//调起微信扫一扫接口
            'chooseWXPay',//发起一个微信支付请求
            'openProductSpecificView',//跳转微信商品页接口
            'addCard',//批量添加卡券接口
            'chooseCard',//调起适用于门店的卡券列表并获取用户选择列表
            'openCard'//查看微信卡包中的卡券接口
        ];
        wx.config(bodyConfig);
        wx.ready((e)=> {
            var bodyMenuShareTimeline = new BodyMenuShareTimeline();
            bodyMenuShareTimeline.title = "1859 this.title.text";
            bodyMenuShareTimeline.link = "this.link.text";
            bodyMenuShareTimeline.imgUrl = "this.imgUrl.text";
            bodyMenuShareTimeline.trigger = ()=> {
            //alert('1859 用户点击分享到朋友圈');
            };
            bodyMenuShareTimeline.success = ()=> {
            //alert('1859 已分享');
            };
            bodyMenuShareTimeline.cancel = ()=> {
            //alert('1859 已取消');
            };
            bodyMenuShareTimeline.fail = (res)=> {
            //alert(JSON.stringify(res));
            };
            wx.onMenuShareTimeline(bodyMenuShareTimeline);
            // alert('已注册获取“分享到朋友圈”状态事件');
        });
    }

    // /**
    //  * 获取微信分享到朋友圈
    //  */
    // private getWeiXinShareTimeline() {
    //     this.btn_sharetimeline.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
    //         var bodyMenuShareTimeline = new BodyMenuShareTimeline();
    //         bodyMenuShareTimeline.title = "this.title.text";
    //         bodyMenuShareTimeline.link = this.link.text;
    //         bodyMenuShareTimeline.imgUrl = this.imgUrl.text;
    //         bodyMenuShareTimeline.trigger = ()=> {
    //             alert('用户点击分享到朋友圈');
    //         };
    //         bodyMenuShareTimeline.success = ()=> {
    //             alert('已分享');
    //         };
    //         bodyMenuShareTimeline.cancel = ()=> {
    //             alert('已取消');
    //         };
    //         bodyMenuShareTimeline.fail = (res)=> {
    //             alert(JSON.stringify(res));
    //         };
    //         wx.onMenuShareTimeline(bodyMenuShareTimeline);
    //         alert('已注册获取“分享到朋友圈”状态事件');
    //     }, this);
    // }

    // /**
    //  * 获取微信分享到朋友
    //  */
    // private getWeiXinShareAppMessage(){
    //     this.addEventListener(egret.Event.ADDED_TO_STAGE, (e)=> {
    //         var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
    //         bodyMenuShareAppMessage.title = "this.title.text";
    //         bodyMenuShareAppMessage.desc = "this.desc.text";
    //         bodyMenuShareAppMessage.link = "this.link.text";
    //         bodyMenuShareAppMessage.imgUrl = "this.imgUrl.text";
    //         bodyMenuShareAppMessage.trigger = ()=> {
    //             alert('用户点击发送给朋友');
    //         };
    //         bodyMenuShareAppMessage.success = ()=> {
    //             alert('已分享');
    //         };
    //         bodyMenuShareAppMessage.cancel = ()=> {
    //             alert('已取消');
    //         };
    //         bodyMenuShareAppMessage.fail = (res)=> {
    //             alert(JSON.stringify(res));
    //         };
    //         wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
    //         alert('已注册获取“发送给朋友”状态事件');
    //     }, this);
    // }

    // /**
    //  * 获取微信分享到QQ
    //  */
    // private getWeiXinShareQQ(){
    //     this.btn_shareqq.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
    //         var bodyMenuShareQQ = new BodyMenuShareQQ();
    //         bodyMenuShareQQ.title = "shareQQthis.title.text";
    //         bodyMenuShareQQ.desc = this.desc.text;
    //         bodyMenuShareQQ.link = this.link.text;
    //         bodyMenuShareQQ.imgUrl = this.imgUrl.text;
    //         bodyMenuShareQQ.trigger = ()=> {
    //             alert('用户点击分享到QQ');
    //         };
    //         bodyMenuShareQQ.complete = (res)=> {
    //             alert(JSON.stringify(res));
    //         };
    //         bodyMenuShareQQ.success = ()=> {
    //             alert('已分享');
    //         };
    //         bodyMenuShareQQ.cancel = ()=> {
    //             alert('已取消');
    //         };
    //         bodyMenuShareQQ.fail = (res)=> {
    //             alert(JSON.stringify(res));
    //         };
    //         wx.onMenuShareQQ(bodyMenuShareQQ);
    //         alert('已注册获取“分享到QQ”状态事件');
    //     }, this);
    // }

    // /**
    //  * 获取微信分享到腾讯微博
    //  */
    // private getWeiXinShareWeiBo(){
    //     this.btn_shareweibo.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
    //         var bodyMenuShareWeibo = new BodyMenuShareWeibo();
    //         bodyMenuShareWeibo.title = "shareweibo this.title.text";
    //         bodyMenuShareWeibo.desc = this.desc.text;
    //         bodyMenuShareWeibo.link = this.link.text;
    //         bodyMenuShareWeibo.imgUrl = this.imgUrl.text;
    //         bodyMenuShareWeibo.trigger = ()=> {
    //             alert('用户点击分享到微博');
    //         };
    //         bodyMenuShareWeibo.complete = (res)=> {
    //             alert(JSON.stringify(res));
    //         };
    //         bodyMenuShareWeibo.success = ()=> {
    //             alert('已分享');
    //         };
    //         bodyMenuShareWeibo.cancel = ()=> {
    //             alert('已取消');
    //         };
    //         bodyMenuShareWeibo.fail = (res)=> {
    //             alert(JSON.stringify(res));
    //         };
    //         wx.onMenuShareWeibo(bodyMenuShareWeibo);
    //         alert('已注册获取“分享到微博”状态事件');
    //     }, this);
    // }
}
