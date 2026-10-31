import {
  CheckoutPaymentIntent,
  Client,
  Environment,
  LogLevel,
  OrdersController,
  TransactionSearchController
} from "@paypal/paypal-server-sdk";

let client:Client|undefined;

export function paypalClient():Client{
  if(client) return client;
  const id=process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const secret=process.env.PAYPAL_CLIENT_SECRET;
  if(!id||!secret) throw new Error("NEXT_PUBLIC_PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET must be set");
  client=new Client({
    clientCredentialsAuthCredentials:{
      oAuthClientId:id,
      oAuthClientSecret:secret
    },
    timeout:0,
    environment:Environment.Sandbox,
    logging:{logLevel:LogLevel.Info}
  });
  return client;
}

export const orders=()=>new OrdersController(paypalClient());
export const transactions=()=>new TransactionSearchController(paypalClient());

export async function createPayPalOrder(amount:string):Promise<string>{
  const {result}=await orders().createOrder({
    body:{
      intent:CheckoutPaymentIntent.Capture,
      purchaseUnits:[{amount:{currencyCode:"USD",value:amount}}]
    }
  });
  if(!result.id) throw new Error("PayPal order creation failed: missing order ID");
  return result.id;
}

export async function capturePayPalOrder(orderId:string){
  const {result}=await orders().captureOrder({id:orderId});
  return result;
}
