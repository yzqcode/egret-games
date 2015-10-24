//
//  ViewController.m
//  
//  Copyright (c) 2014-2015 egret. All rights reserved.
//

#import "ViewController.h"

#define ProductID_1 @"knights_diamond_100"
#define ProductID_2 @"knights_diamond_500"
#define ProductID_3 @"knights_diamond_1000"
#define ProductID_4 @"knights_diamond_5000"
#define ProductID_5 @"knights_diamond_10000"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)dealloc
{
    [[SKPaymentQueue defaultQueue] removeTransactionObserver:self];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (NSUInteger)supportedInterfaceOrientations {
    return UIInterfaceOrientationMaskLandscape;
}

- (BOOL)shouldAutorotate {
    return YES;
}

// Override to allow orientations other than the default portrait orientation.
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIDeviceOrientationLandscapeLeft
            || interfaceOrientation == UIDeviceOrientationLandscapeRight);
}

-(void) buy:(NSString *)serverUrl uuid:(NSString *)uuid productId:(NSString *)productId
{
    self.strServerUrl = serverUrl;
    self.strUUID = uuid;
    self.strLastProductId = productId;
    
    if ([SKPaymentQueue canMakePayments] == NO) {
        NSLog(@"不允许程序内付费购买");
        
        UIAlertView *alerView =  [[UIAlertView alloc] initWithTitle:@"Alert"
                                                            message:@"禁止应用程序内购买"
                                                           delegate:nil cancelButtonTitle:NSLocalizedString(@"关闭",nil) otherButtonTitles:nil];
        
        [alerView show];
    }
    else {
        [self RequestProductData];
    }
}

-(void) RequestProductData
{
    NSLog(@"---------请求对应的产品信息------------");
    
    NSArray *product = [[NSArray alloc] initWithObjects:self.strLastProductId, nil];

    NSSet *nsset = [NSSet setWithArray:product];
    SKProductsRequest *request=[[SKProductsRequest alloc] initWithProductIdentifiers: nsset];
    request.delegate = self;
    [request start];
}

//<SKProductsRequestDelegate> 请求协议 收到的产品信息
-(void) productsRequest:(SKProductsRequest *)request didReceiveResponse:(SKProductsResponse *)response
{
    NSLog(@"-----------收到产品反馈信息--------------");
    
    NSArray *myProduct = response.products;
    
    NSLog(@"产品Product ID:%@",response.invalidProductIdentifiers);
    NSLog(@"产品付费数量: %d", [myProduct count]);
    
    // populate UI
    SKPayment *payment = nil;
    for(SKProduct *product in myProduct){
        NSLog(@"product info");
        NSLog(@"SKProduct 描述信息%@", [product description]);
        NSLog(@"产品标题 %@" , product.localizedTitle);
        NSLog(@"产品描述信息: %@" , product.localizedDescription);
        NSLog(@"价格: %@" , product.price);
        NSLog(@"Product id: %@" , product.productIdentifier);
        
        if ([product.productIdentifier isEqual:self.strLastProductId]) {
            payment  = [SKPayment paymentWithProduct:product];
        }
    }
    
    NSLog(@"---------发送购买请求------------");
    [[SKPaymentQueue defaultQueue] addPayment:payment];
}

//----监听购买结果
//<SKPaymentTransactionObserver> 千万不要忘记绑定，代码如下：[[SKPaymentQueue defaultQueue] addTransactionObserver:self];
-(void) paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transactions
{
    NSLog(@"-----paymentQueue--------");
    
    for (SKPaymentTransaction *transaction in transactions)
    {
        switch (transaction.transactionState)
        {
            case SKPaymentTransactionStatePurchased://交易完成
            {
                NSLog(@"----- 交易完成 --------");
                
                [self completeTransaction:transaction];
                break;
            }
                
            case SKPaymentTransactionStateFailed://交易失败
            {
                NSLog(@"-----交易失败 --------");
                
                [self failedTransaction:transaction];
                
                UIAlertView *alerView2 =  [[UIAlertView alloc] initWithTitle:@"Alert"
                                                                     message:@"购买失败，请重新尝试购买～"
                                                                    delegate:nil cancelButtonTitle:NSLocalizedString(@"关闭",nil) otherButtonTitles:nil];
                [alerView2 show];
                break;
            }
                
            case SKPaymentTransactionStateRestored://已经购买过该商品
            {
                NSLog(@"-----已经购买过该商品 --------");
                [self restoreTransaction:transaction];
                break;
            }
                
            case SKPaymentTransactionStatePurchasing:      //商品添加进列表
                NSLog(@"-----商品添加进列表 --------");
                break;
                
            default:
                break;
        }
    }
}

-(void) completeTransaction: (SKPaymentTransaction *)transaction
{
    NSLog(@"-----completeTransaction--------");
    // Your application should implement these two methods.
    NSString *productId = transaction.payment.productIdentifier;
    
//    [self checkReceipt];
    [self recordTransaction:productId];
    
    // Remove the transaction from the payment queue.
    [[SKPaymentQueue defaultQueue] finishTransaction: transaction];
}

-(void) checkReceipt
{
    NSLog(@"-----check交易---------");
    
    NSURL *receiptURL = [[NSBundle mainBundle] appStoreReceiptURL];
    
    // Sent to the server by the device
    NSData *receipt = [NSData dataWithContentsOfURL:receiptURL];
    
    // Create the JSON object that describes the request
    NSDictionary *requestContents = @{
                                      @"receipt-data": [receipt base64EncodedStringWithOptions:0]
                                      };
    
    NSError *error;
    NSData *requestData = [NSJSONSerialization dataWithJSONObject:requestContents
                                                          options:0
                                                            error:&error];
    
    NSLog(@"==== check json: %@", [[NSString alloc] initWithData:requestData encoding:NSUTF8StringEncoding]);
    
    NSURL *storeURL=[NSURL URLWithString:@"https://sandbox.itunes.apple.com/verifyReceipt"];
//    NSURL *storeURL = [NSURL URLWithString:@"https://buy.itunes.apple.com/verifyReceipt"];
    
    NSMutableURLRequest *storeRequest = [NSMutableURLRequest requestWithURL:storeURL];
    [storeRequest setHTTPMethod:@"POST"];
    [storeRequest setHTTPBody:requestData];
    
    // Make a connection to the iTunes Store on a background queue.
    
    NSOperationQueue *queue = [[NSOperationQueue alloc] init];
    
    [NSURLConnection sendAsynchronousRequest:storeRequest queue:queue
     
                           completionHandler:^(NSURLResponse *response, NSData *data, NSError *connectionError) {
                               
                               if (connectionError) {
                                   /* ... Handle error ... */
                               } else {
                                   NSError *error;
                                   NSDictionary *jsonResponse = [NSJSONSerialization JSONObjectWithData:data options:0 error:&error];
                                   
                                   if (!jsonResponse) { /* ... Handle error ...*/ }
                                   
                                   NSString *code = [jsonResponse objectForKey:@"status"];
                                   NSLog(@"jsonResponse return: %@", code);
                               }
                           }];
}

-(void) recordTransaction:(NSString *)productId
{
    NSLog(@"-----记录交易: %@", productId);
    
    NSURL *receiptURL = [[NSBundle mainBundle] appStoreReceiptURL];
    
    // Sent to the server by the device
    NSData *receipt = [NSData dataWithContentsOfURL:receiptURL];
    
    // Create the JSON object that describes the request
    NSMutableDictionary *content = [[NSMutableDictionary alloc] initWithObjectsAndKeys:nil];
    [content setObject:[receipt base64EncodedStringWithOptions:0] forKey:@"ReceiptData"];
    [content setObject:productId forKey:@"ProductID"];
    [content setObject:self.strUUID forKey:@"uuid"];
    [content setObject:@"DIAMOND_CHARGE" forKey:@"command"];
    
    NSError *error;
    NSData *requestData = [NSJSONSerialization dataWithJSONObject:content
                                                          options:0
                                                            error:&error];
    
    NSString *dataStr = [NSString stringWithFormat:@"data=%@", [[NSString alloc] initWithData:requestData encoding:NSUTF8StringEncoding]];
    requestData = [dataStr dataUsingEncoding:NSUTF8StringEncoding];
    
    // Create a POST request with the receipt data.
    NSURL *storeURL=[NSURL URLWithString:self.strServerUrl];
    
    NSMutableURLRequest *storeRequest = [NSMutableURLRequest requestWithURL:storeURL];
    [storeRequest setHTTPMethod:@"POST"];
    [storeRequest setHTTPBody:requestData];
    
    // Make a connection to the iTunes Store on a background queue.
    [NSURLConnection connectionWithRequest:storeRequest delegate:self];
}

#pragma mark connection delegate
- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data
{
}
- (void)connectionDidFinishLoading:(NSURLConnection *)connection
{
}

- (void)connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response
{
    NSLog(@"NSURLConnection return: %d", [(NSHTTPURLResponse *)response statusCode]);
    
    [self.buyDelegate buyDiamondOk];
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error
{
}

-(void) failedTransaction: (SKPaymentTransaction *)transaction
{
    // TODO:
    NSLog(@"失败");
    if (transaction.error.code != SKErrorPaymentCancelled)
    {
    }
    [[SKPaymentQueue defaultQueue] finishTransaction: transaction];
    
    [self.buyDelegate buyDiamondFailed];
}

-(void) restoreTransaction: (SKPaymentTransaction *)transaction
{
    NSLog(@" 交易恢复处理");
}

@end
