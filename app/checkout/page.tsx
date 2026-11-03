import PayPalCheckout from "@/components/PayPalCheckout";
import PageHeader from "@/components/PageHeader";
import {money,requests} from "@/lib/data";

export default function Checkout(){
  const r=requests[0];
  return (
    <div className="mx-auto max-w-md space-y-6">
      <PageHeader title="Pay for a request" subtitle="Secure checkout via PayPal"/>
      <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
        <div className="font-semibold">{r.title}</div>
        <div className="text-sm text-slate-500">{r.id} · {r.requester}</div>
        <div className="mt-4 border-t border-slate-100 pt-4 text-3xl font-bold tabular-nums">{money(r.amount)}</div>
      </div>
      <PayPalCheckout requestId={r.id}/>
    </div>
  );
}
