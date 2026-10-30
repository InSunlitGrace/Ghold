import {money,orders} from "@/lib/data";

const badge:Record<string,string>={
  Paid:"bg-slate-100 text-slate-700",
  Shipped:"bg-blue-100 text-blue-800",
  Delivered:"bg-emerald-100 text-emerald-800",
  Problem:"bg-red-100 text-red-800"
};

export default function Orders(){
  return (
    <div className="mx-auto max-w-5xl space-y-4">
      <h1 className="text-2xl font-semibold">Orders</h1>
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">Order</th>
              <th className="px-4 py-3 font-medium">Vendor</th>
              <th className="px-4 py-3 font-medium">Item</th>
              <th className="px-4 py-3 text-right font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Delivery by</th>
              <th className="px-4 py-3 font-medium">Dispute by</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o=>(
              <tr key={o.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3">{o.id}</td>
                <td className="px-4 py-3">{o.vendor}</td>
                <td className="px-4 py-3">{o.item}</td>
                <td className="px-4 py-3 text-right tabular-nums">{money(o.amount)}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge[o.status]}`}>{o.status}</span>
                </td>
                <td className="px-4 py-3">{o.deliveryBy}</td>
                <td className="px-4 py-3">{o.disputeBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
