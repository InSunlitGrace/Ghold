"use server";

import {capturePayPalOrder,createPayPalOrder} from "@/lib/paypal";
import {requests} from "@/lib/data";

export async function createOrder(requestId:string):Promise<{id:string}>{
  const r=requests.find(x=>x.id===requestId);
  if(!r) throw new Error("Unknown request");
  const id=await createPayPalOrder(r.amount.toFixed(2));
  return {id};
}

export async function captureOrder(orderId:string):Promise<{id:string,status:string}>{
  const result=await capturePayPalOrder(orderId);
  return {id:result.id??orderId,status:String(result.status)};
}
