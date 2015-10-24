//
//  ViewController.h
//  
//  Copyright (c) 2014-2015 egret. All rights reserved.
//

#import <UIKit/UIKit.h>

#import <StoreKit/StoreKit.h>
enum{
    IAP0p99=10,
    IAP1p99,
    IAP4p99,
    IAP9p99,
    IAP24p99,
}buyCoinsTag;

@interface HelloWorldLayer : CCLayer<SKProductsRequestDelegate,SKPaymentTransactionObserver>
{
    int buyType;
}

+(CCScene *) scene;
-(bool)CanMakePay;


- (void) requestProUpgradeProductData;
-(void) PurchasedTransaction: (SKPaymentTransaction *)transaction;




-(void)buy:(int)type;
-(void)RequestProductData;
- (void)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transactions;
-(void) paymentQueueRestoreCompletedTransactionsFinished: (SKPaymentTransaction *)transaction;
-(void) paymentQueue:(SKPaymentQueue *) paymentQueue restoreCompletedTransactionsFailedWithError:(NSError *)error;

- (void) restoreTransaction: (SKPaymentTransaction *)transaction;
- (void) completeTransaction: (SKPaymentTransaction *)transaction;
- (void) failedTransaction: (SKPaymentTransaction *)transaction;
-(void)recordTransaction:(NSString *)product;
-(void)provideContent:(NSString *)product;











@end
