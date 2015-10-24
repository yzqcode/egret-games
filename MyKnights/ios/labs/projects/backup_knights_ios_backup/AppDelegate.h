//
//  AppDelegate.h
//  
//  Copyright (c) 2014-2015 egret. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ViewController.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate, UITextFieldDelegate, GameShopBuyDelegate> {
    ViewController *viewController;
}

@property (strong, nonatomic) UIWindow *window;

- (void) buyDiamond:(NSString *)strDiamondInfo;

- (void) buyDiamondOk;
- (void) buyDiamondFailed;

@end

