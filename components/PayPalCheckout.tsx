"use client";

import {useState} from "react";
import {
  PayPalProvider,
  PayPalOneTimePaymentButton,
  OnApproveDataOneTimePayments
} from "@paypal/react-paypal-js/sdk-v6";
import {captureOrder,createOrder} from "@/app/actions";

export default function PayPalCheckout({requestId}:{requestId:string}){
  const [status,setStatus]=useState<string|null>(null);

  if(status){
    return (
      <div role="status" className="rounded-2xl bg-emerald-50 px-5 py-4 font-medium text-emerald-800 ring-1 ring-inset ring-emerald-600/30">
        Payment complete for {requestId} (PayPal status: {status}).
      </div>
    );
  }

  return (
    <PayPalProvider
      clientId={process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!}
      environment="sandbox"
      components={["paypal-payments"]}
      pageType="checkout"
    >
      <PayPalOneTimePaymentButton
        createOrder={async()=>{
          const {id}=await createOrder(requestId);
          return {orderId:id};
        }}
        onApprove={async({orderId}:OnApproveDataOneTimePayments)=>{
          const result=await captureOrder(orderId);
          setStatus(result.status);
        }}
        presentationMode="auto"
      />
    </PayPalProvider>
  );
}
