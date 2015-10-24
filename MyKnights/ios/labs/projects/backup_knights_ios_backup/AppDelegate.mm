//
//  AppDelegate.m
//
//  Copyright (c) 2014-2015 egret. All rights reserved.
//

#import "AppDelegate.h"
#import "EgretRuntime.h"
#import "ExternalInterface.h"


//TODO: egret publish之后，修改以下常量为生成的game_code名
#define EGRET_PUBLISH_ZIP "game_code_xxxx.zip"

class ExternalInterfaceProcess :public IExternalInterface{
    
public:
    AppDelegate *main_delegate;
    
    void call(const std::string& value){
        NSString *strDiamondInfo = [NSString stringWithUTF8String:value.c_str()];
        
        NSLog(@"%@", strDiamondInfo);
        
        [main_delegate buyDiamond:strDiamondInfo];
    }
};


@interface AppDelegate () {
    EgretRuntime *runtime;
}

@end

@implementation AppDelegate

- (void)initUIWindow {
    // Use RootViewController manage EAGLView
    viewController = [[ViewController alloc] initWithNibName:nil bundle:nil];
    viewController.landscape = [self isLandscape];
    viewController.buyDelegate = self;
    viewController.navigationBarHidden = YES;
    
    [[SKPaymentQueue defaultQueue] addTransactionObserver:viewController];
    
    runtime = [EgretRuntime getInstance];
    [runtime initWithRect:[self.window bounds] inViewController:viewController];
    
    // Set RootViewController to window
    [self.window addSubview:viewController.view];
    self.window.rootViewController = viewController;
    [self.window makeKeyAndVisible];
}

- (BOOL)isLandscape {
    // 横屏 return YES; 竖屏 return NO;
    return NO;
}

- (void) buyDiamond:(NSString *)strDiamondInfo {
    //buydiamond$http://42.62.77.137:8101/$53d97748247611e5b0a9525400a6591b$knights_diamond_100
    
    NSArray *arr = [strDiamondInfo componentsSeparatedByString:@"$"];
    
    NSString *strServerUrl = arr[1];
//    NSLog(@"strServerUrl %@", strServerUrl);
    
    NSString *strUUID = arr[2];
//    NSLog(@"strUuid %@", strUUID);
    
    NSString *productID = arr[3];
//    NSLog(@"productID %@", productID);
    
    [viewController buy:strServerUrl uuid:strUUID productId:productID];
}

- (void) buyDiamondOk {
    ExternalInterface::call("buy_diamond_callback", "OK");
}

- (void) buyDiamondFailed {
    ExternalInterface::call("buy_diamond_callback", "FAIL");
}

- (void)runGame {
    NSMutableDictionary *options = [NSMutableDictionary dictionaryWithCapacity:5];

    NSString *egretRoot = [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0];
    options[@OPTION_EGRET_ROOT] = egretRoot;
    options[@OPTION_GAME_ID] = @"local";
    options[@OPTION_PASSWORD] = @"";

#define LOAD_MODE 0
#if LOAD_MODE == 0
    // 接入模式0：调试模式，直接使用本地游戏
    options[@OPTION_LOADER_URL] = @"";
    options[@OPTION_UPDATE_URL] = @"";

#elif LOAD_MODE == 1
    // 接入模式1：发布模式，使用本地zip发布，推荐
    options[@OPTION_LOADER_URL] = @EGRET_PUBLISH_ZIP;

#elif LOAD_MODE == 2
    // 接入模式2：发布模式，使用指定URL的zip
    options[@OPTION_LOADER_URL] = @"http://www.yourhost.com/game_code.zip";
    options[@OPTION_UPDATE_URL] = @"http://www.yourhost.com/update_url/";

#elif LOAD_MODE == 3
    // 接入 模式3: 发布模式，使用指定的服务器脚本，返回的json参见项目中的egret.json
    options[@OPTION_LOADER_URL] = @"http://www.yourhost.com/egret.json";

#endif

    [runtime setOptions:options];
    [runtime run];
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    
    [self initUIWindow];
    [self runGame];
    
    ExternalInterfaceProcess *tsCallInterface = new ExternalInterfaceProcess();
    tsCallInterface->main_delegate = self;
    
    ExternalInterface::run();
    ExternalInterface::addCallback("Shop_buy", tsCallInterface);
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
    [runtime onPause];
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    [runtime onPause];
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
    [runtime onResume];
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    [runtime onResume];
}

- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
    [runtime onPause];
}

@end
