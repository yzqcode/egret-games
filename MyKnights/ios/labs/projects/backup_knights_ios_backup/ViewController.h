//
//  ViewController.h
//  
//  Copyright (c) 2014-2015 egret. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <StoreKit/StoreKit.h>
enum {
    IAP_TYPE_1 = 10,
    IAP_TYPE_2,
    IAP_TYPE_3,
    IAP_TYPE_4,
    IAP_TYPE_5,
} buy_diamond_type;

@protocol GameShopBuyDelegate <NSObject>

@required

- (void) buyDiamondOk;
- (void) buyDiamondFailed;

@end

@interface ViewController : UINavigationController<SKProductsRequestDelegate,
    SKPaymentTransactionObserver> {
        
}

@property (nonatomic, weak) id<GameShopBuyDelegate> buyDelegate;
@property (nonatomic, strong) NSString *strServerUrl;
@property (nonatomic, strong) NSString *strUUID;
@property (nonatomic, strong) NSString *strLastProductId;
@property (nonatomic) BOOL landscape;

-(void) buy:(NSString *)serverUrl uuid:(NSString *)uuid productId:(NSString *)productId;
-(void) RequestProductData;
-(void) productsRequest:(SKProductsRequest *)request didReceiveResponse:(SKProductsResponse *)response;

-(void) paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transactions;

-(void) restoreTransaction: (SKPaymentTransaction *)transaction;
-(void) failedTransaction: (SKPaymentTransaction *)transaction;
-(void) completeTransaction: (SKPaymentTransaction *)transaction;
-(void) recordTransaction:(NSString *)product;

@end

