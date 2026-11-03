import {money,requests} from "@/lib/data";
import PageHeader from "@/components/PageHeader";

const badge:Record<string,string>={
  approve:"bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  review:"bg-amber-50 text-amber-700 ring-amber-600/20",
  reject:"bg-red-50 text-red-700 ring-red-600/20"
};
const edge:Record<string,string>={
  approve:"border-l-emerald-400",
  review:"border-l-amber-400",
  reject:"border-l-red-400"
};

export default function Requests(){
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Requests" subtitle="Spending requests waiting on you"/>
      {requests.map(r=>(
        <div key={r.id} className={`rounded-2xl border-l-4 bg-white/80 p-6 shadow-sm ring-1 ring-slate-900/5 backdrop-blur transition hover:shadow-lg ${edge[r.verdict]}`}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 font-semibold text-white">{r.requester[0]}</div>
              <div>
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm text-slate-500">{r.id} · {r.requester} · {r.category}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold tabular-nums">{money(r.amount)}</div>
              <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ring-inset ${badge[r.verdict]}`}>
                Agent suggests: {r.verdict}
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">{r.reason}</p>
          <div className="mt-5 flex gap-2">
            <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-500/30 transition hover:brightness-110 active:scale-[.98]">Approve</button>
            <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 active:scale-[.98]">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}
