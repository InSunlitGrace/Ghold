import PayPalCheckout from "@/components/PayPalCheckout";
import {money,requests} from "@/lib/data";

export default function Checkout(){
  const r=requests[0];
  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Pay for a request</h1>
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="font-medium">{r.title}</div>
        <div className="text-sm text-slate-500">{r.id} · {r.requester}</div>
        <div className="mt-2 text-xl font-semibold tabular-nums">{money(r.amount)}</div>
      </div>
      <PayPalCheckout requestId={r.id}/>
    </div>
  );
}
