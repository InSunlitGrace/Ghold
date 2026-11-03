import {money,orders} from "@/lib/data";
import PageHeader from "@/components/PageHeader";

const badge:Record<string,string>={
  Paid:"bg-slate-50 text-slate-700 ring-slate-500/20",
  Shipped:"bg-blue-50 text-blue-700 ring-blue-600/20",
  Delivered:"bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Problem:"bg-red-50 text-red-700 ring-red-600/20"
};
const dot:Record<string,string>={
  Paid:"bg-slate-400",
  Shipped:"bg-blue-500",
  Delivered:"bg-emerald-500",
  Problem:"bg-red-500"
};

export default function Orders(){
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title="Orders" subtitle="Track deliveries and dispute deadlines"/>
      <div className="overflow-x-auto rounded-2xl bg-white/80 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50/80 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3.5 font-semibold">Order</th>
              <th className="px-5 py-3.5 font-semibold">Vendor</th>
              <th className="px-5 py-3.5 font-semibold">Item</th>
              <th className="px-5 py-3.5 text-right font-semibold">Amount</th>
              <th className="px-5 py-3.5 font-semibold">Status</th>
              <th className="px-5 py-3.5 font-semibold">Delivery by</th>
              <th className="px-5 py-3.5 font-semibold">Dispute by</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o=>(
              <tr key={o.id} className={`border-t border-slate-100 transition hover:bg-indigo-50/40 ${o.status==="Problem"?"bg-red-50/30":""}`}>
                <td className="px-5 py-4 font-mono text-xs text-slate-500">{o.id}</td>
                <td className="px-5 py-4 font-medium">{o.vendor}</td>
                <td className="px-5 py-4 text-slate-600">{o.item}</td>
                <td className="px-5 py-4 text-right font-semibold tabular-nums">{money(o.amount)}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${badge[o.status]}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${dot[o.status]}`}/>
                    {o.status}
                  </span>
                </td>
                <td className="px-5 py-4 tabular-nums text-slate-600">{o.deliveryBy}</td>
                <td className="px-5 py-4 tabular-nums text-slate-600">{o.disputeBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
