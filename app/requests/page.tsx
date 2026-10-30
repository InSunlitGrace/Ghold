import {money,requests} from "@/lib/data";

const badge:Record<string,string>={
  approve:"bg-emerald-100 text-emerald-800",
  review:"bg-amber-100 text-amber-800",
  reject:"bg-red-100 text-red-800"
};

export default function Requests(){
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <h1 className="text-2xl font-semibold">Requests</h1>
      {requests.map(r=>(
        <div key={r.id} className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <div className="font-medium">{r.title}</div>
              <div className="text-sm text-slate-500">{r.id} · {r.requester} · {r.category}</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold tabular-nums">{money(r.amount)}</div>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge[r.verdict]}`}>
                Agent suggests: {r.verdict}
              </span>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600">{r.reason}</p>
          <div className="mt-4 flex gap-2">
            <button className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white">Approve</button>
            <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}
