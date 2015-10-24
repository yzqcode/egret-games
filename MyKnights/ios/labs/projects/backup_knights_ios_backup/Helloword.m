#import "HelloWorldLayer.h"
#define ProductID_IAP0p99 @"com.buytest.one"//$0.99
#define ProductID_IAP1p99 @"com.buytest.two" //$1.99
#define ProductID_IAP4p99 @"com.buytest.three" //$4.99
#define ProductID_IAP9p99 @"com.buytest.four" //$19.99
#define ProductID_IAP24p99 @"com.buytest.five" //$24.99

@implementation HelloWorldLayer
+(CCScene *) scene
{
    CCScene *scene = [CCScene node];
    HelloWorldLayer *layer = [HelloWorldLayer node];
    [scene addChild: layer];
    return scene;
}
-(id)init
{
    if ((self = [super init])) {
        CGSize size = [[CCDirector sharedDirector] winSize];
        CCSprite *iap_bg  = [CCSprite spriteWithFile:@"Icon.png"];
        [iap_bg setPosition:ccp(size.width/2,size.height/2)];
        [self addChild:iap_bg z:0];
        //---------------------
        //----监听购买结果
        [[SKPaymentQueue defaultQueue] addTransactionObserver:self];
        //申请购买
        /*
         enum{
         IAP0p99=10,
         IAP1p99,
         IAP4p99,
         IAP9p99,
         IAP24p99,
         }buyCoinsTag;
         */
        [self buy:IAP24p99];
    }
    return self;
}

-(void)buy:(int)type
{
    buyType = type;
    if ([SKPaymentQueue canMakePayments]) {
        //[[SKPaymentQueue defaultQueue] restoreCompletedTransactions];
        [self RequestProductData];
        CCLOG(@"允许程序内付费购买");
    }
    else
    {
        CCLOG(@"不允许程序内付费购买");
        UIAlertView *alerView =  [[UIAlertView alloc] initWithTitle:@"Alert"
                                                            message:@"You can‘t purchase in app store（Himi说你没允许应用程序内购买）"
                                                           delegate:nil cancelButtonTitle:NSLocalizedString(@"Close（关闭）",nil) otherButtonTitles:nil];
        
        [alerView show];
        [alerView release];
        
    }
}

-(bool)CanMakePay
{
    return [SKPaymentQueue canMakePayments];
}

-(void)RequestProductData
{
    CCLOG(@"---------请求对应的产品信息------------");
    NSArray *product = nil;
    switch (buyType) {
        case IAP0p99:
            product=[[NSArray alloc] initWithObjects:ProductID_IAP0p99,nil];
            break;
        case IAP1p99:
            product=[[NSArray alloc] initWithObjects:ProductID_IAP1p99,nil];
            break;
        case IAP4p99:
            product=[[NSArray alloc] initWithObjects:ProductID_IAP4p99,nil];
            break;
        case IAP9p99:
            product=[[NSArray alloc] initWithObjects:ProductID_IAP9p99,nil];
            break;
        case IAP24p99:
            product=[[NSArray alloc] initWithObjects:ProductID_IAP24p99,nil];
            break;
            
        default:
            break;
    }
    NSSet *nsset = [NSSet setWithArray:product];
    SKProductsRequest *request=[[SKProductsRequest alloc] initWithProductIdentifiers: nsset];
    request.delegate=self;
    [request start];
    [product release];
}
//<SKProductsRequestDelegate> 请求协议
//收到的产品信息
- (void)productsRequest:(SKProductsRequest *)request didReceiveResponse:(SKProductsResponse *)response{
    
    NSLog(@"-----------收到产品反馈信息--------------");
    NSArray *myProduct = response.products;
    NSLog(@"产品Product ID:%@",response.invalidProductIdentifiers);
    NSLog(@"产品付费数量: %d", [myProduct count]);
    // populate UI
    for(SKProduct *product in myProduct){
        NSLog(@"product info");
        NSLog(@"SKProduct 描述信息%@", [product description]);
        NSLog(@"产品标题 %@" , product.localizedTitle);
        NSLog(@"产品描述信息: %@" , product.localizedDescription);
        NSLog(@"价格: %@" , product.price);
        NSLog(@"Product id: %@" , product.productIdentifier);
    }
    SKPayment *payment = nil;
    switch (buyType) {
        case IAP0p99:
            payment  = [SKPayment paymentWithProductIdentifier:ProductID_IAP0p99];    //支付$0.99
            break;
        case IAP1p99:
            payment  = [SKPayment paymentWithProductIdentifier:ProductID_IAP1p99];    //支付$1.99
            break;
        case IAP4p99:
            payment  = [SKPayment paymentWithProductIdentifier:ProductID_IAP4p99];    //支付$9.99
            break;
        case IAP9p99:
            payment  = [SKPayment paymentWithProductIdentifier:ProductID_IAP9p99];    //支付$19.99
            break;
        case IAP24p99:
            payment  = [SKPayment paymentWithProductIdentifier:ProductID_IAP24p99];    //支付$29.99
            break;
        default:
            break;
    }
    CCLOG(@"---------发送购买请求------------");
    [[SKPaymentQueue defaultQueue] addPayment:payment];
    [request autorelease];
    
}
- (void)requestProUpgradeProductData
{
    CCLOG(@"------请求升级数据---------");
    NSSet *productIdentifiers = [NSSet setWithObject:@"com.productid"];
    SKProductsRequest* productsRequest = [[SKProductsRequest alloc] initWithProductIdentifiers:productIdentifiers];
    productsRequest.delegate = self;
    [productsRequest start];
    
}
//弹出错误信息
- (void)request:(SKRequest *)request didFailWithError:(NSError *)error{
    CCLOG(@"-------弹出错误信息----------");
    UIAlertView *alerView =  [[UIAlertView alloc] initWithTitle:NSLocalizedString(@"Alert",NULL) message:[error localizedDescription]
                                                       delegate:nil cancelButtonTitle:NSLocalizedString(@"Close",nil) otherButtonTitles:nil];
    [alerView show];
    [alerView release];
}

-(void) requestDidFinish:(SKRequest *)request
{
    NSLog(@"----------反馈信息结束--------------");
    
}

-(void) PurchasedTransaction: (SKPaymentTransaction *)transaction{
    CCLOG(@"-----PurchasedTransaction----");
    NSArray *transactions =[[NSArray alloc] initWithObjects:transaction, nil];
    [self paymentQueue:[SKPaymentQueue defaultQueue] updatedTransactions:transactions];
    [transactions release];
}

//<SKPaymentTransactionObserver> 千万不要忘记绑定，代码如下：
//----监听购买结果
//[[SKPaymentQueue defaultQueue] addTransactionObserver:self];

- (void)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transactions//交易结果
{
    CCLOG(@"-----paymentQueue--------");
    for (SKPaymentTransaction *transaction in transactions)
    {
        switch (transaction.transactionState)
        {
            case SKPaymentTransactionStatePurchased://交易完成
                [self completeTransaction:transaction];
                CCLOG(@"-----交易完成 --------");
                CCLOG(@"不允许程序内付费购买");
                UIAlertView *alerView =  [[UIAlertView alloc] initWithTitle:@"Alert"
                                                                    message:@"Himi说你购买成功啦～娃哈哈"
                                                                   delegate:nil cancelButtonTitle:NSLocalizedString(@"Close（关闭）",nil) otherButtonTitles:nil];
                
                [alerView show];
                [alerView release];
                break;
            case SKPaymentTransactionStateFailed://交易失败
                [self failedTransaction:transaction];
                CCLOG(@"-----交易失败 --------");
                UIAlertView *alerView2 =  [[UIAlertView alloc] initWithTitle:@"Alert"
                                                                     message:@"Himi说你购买失败，请重新尝试购买～"
                                                                    delegate:nil cancelButtonTitle:NSLocalizedString(@"Close（关闭）",nil) otherButtonTitles:nil];
                
                [alerView2 show];
                [alerView2 release];
                break;
            case SKPaymentTransactionStateRestored://已经购买过该商品
                [self restoreTransaction:transaction];
                CCLOG(@"-----已经购买过该商品 --------");
            case SKPaymentTransactionStatePurchasing:      //商品添加进列表
                CCLOG(@"-----商品添加进列表 --------");
                break;
            default:
                break;
        }
    }
}
- (void) completeTransaction: (SKPaymentTransaction *)transaction

{
    CCLOG(@"-----completeTransaction--------");
    // Your application should implement these two methods.
    NSString *product = transaction.payment.productIdentifier;
    if ([product length] > 0) {
        
        NSArray *tt = [product componentsSeparatedByString:@"."];
        NSString *bookid = [tt lastObject];
        if ([bookid length] > 0) {
            [self recordTransaction:bookid];
            [self provideContent:bookid];
        }
    }
    
    // Remove the transaction from the payment queue.
    
    [[SKPaymentQueue defaultQueue] finishTransaction: transaction];
    
}

//记录交易
-(void)recordTransaction:(NSString *)product{
    CCLOG(@"-----记录交易--------");
}

//处理下载内容
-(void)provideContent:(NSString *)product{
    CCLOG(@"-----下载--------");
}

- (void) failedTransaction: (SKPaymentTransaction *)transaction{
    NSLog(@"失败");
    if (transaction.error.code != SKErrorPaymentCancelled)
    {
    }
    [[SKPaymentQueue defaultQueue] finishTransaction: transaction];
    
}
-(void) paymentQueueRestoreCompletedTransactionsFinished: (SKPaymentTransaction *)transaction{
    
}

- (void) restoreTransaction: (SKPaymentTransaction *)transaction

{
    NSLog(@" 交易恢复处理");
    
}

-(void) paymentQueue:(SKPaymentQueue *) paymentQueue restoreCompletedTransactionsFailedWithError:(NSError *)error{
    CCLOG(@"-------paymentQueue----");
}

#pragma mark connection delegate
- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data
{
    NSLog(@"%@",  [[[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding] autorelease]);
}
- (void)connectionDidFinishLoading:(NSURLConnection *)connection{
    
}

- (void)connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response{
    switch([(NSHTTPURLResponse *)response statusCode]) {
        case 200:
        case 206:
            break;
        case 304:
            break;
        case 400:
            break;
        case 404:
            break;
        case 416:
            break;
        case 403:
            break;
        case 401:
        case 500:
            break;
        default:
            break;
    }
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
    NSLog(@"test");
}


-(BOOL)putStringToItunes:(NSData*)iapData{//用户购成功transactionReceipt
    
    NSString*encodingStr = [iapData base64EncodedString];
    
    
    
    NSString *URL=@"https://sandbox.itunes.apple.com/verifyReceipt";
    
    //https://buy.itunes.apple.com/verifyReceipt
    
    NSMutableURLRequest
    *request = [[NSMutableURLRequest alloc] init];//
    autorelease];
    
    [request
     setURL:[NSURL URLWithString:URL]];
    
    [request
     setHTTPMethod:@"POST"];
    
    //设置contentType
    
    [request
     addValue:@"application/json"
     
     forHTTPHeaderField:@"Content-Type"];
    
    //设置Content-Length
    
    [request
     setValue:[NSString stringWithFormat:@"%d",
               [encodingStr length]] forHTTPHeaderField:@"Content-Length"];
    
    
    
    NSDictionary*
    body = [NSDictionary dictionaryWithObjectsAndKeys:encodingStr, @"receipt-data",
            nil];
    
    SBJsonWriter
    *writer = [SBJsonWriter new];
    
    [request
     setHTTPBody:[[writer stringWithObject:body] dataUsingEncoding:NSASCIIStringEncoding allowLossyConversion:YES]];
    
    NSHTTPURLResponse
    *urlResponse=nil;
    
    NSError
    *errorr=nil;
    
    NSData
    *receivedData = [NSURLConnection sendSynchronousRequest:request
                     
                                          returningResponse:&urlResponse
                     
                                                      error:&errorr];
    
    
    
    //解析
    
    NSString
    *results=[[NSString alloc]initWithBytes:[receivedData bytes] length:[receivedData length] encoding:NSUTF8StringEncoding];
    
    CCLOG(@"-Himi- 
          %@",results);
          
          NSDictionary*dic
          = [results JSONValue];
          
          if([[dic
               objectForKey:@"status"]
              intValue]==0){//注意，status=@"0"
        是验证收据成功
        
        return
        
        true;
        
    }
          
          return
          
          false;
          
          }

-(void)dealloc
{
    [[SKPaymentQueue defaultQueue] removeTransactionObserver:self];//解除监听
    [super dealloc];
}
@end