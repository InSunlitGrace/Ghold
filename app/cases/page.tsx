import {cases,orders} from "@/lib/data";
import PageHeader from "@/components/PageHeader";

export default function Cases(){
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <PageHeader title="Cases" subtitle="Disputes with evidence and a drafted request"/>
      {cases.map(c=>{
        const order=orders.find(o=>o.id===c.orderId);
        return (
          <div key={c.id} className="grid gap-5 lg:grid-cols-2">
            <section className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
              <div className="text-xs font-medium uppercase tracking-wide text-indigo-600">{c.id} · {c.orderId} · {order?.vendor}</div>
              <h2 className="mt-2 text-lg font-semibold leading-snug">{c.issue}</h2>
              <h3 className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-400">Evidence</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {c.evidence.map(e=>(
                  <li key={e} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3 text-slate-700">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500"/>
                    {e}
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold">Drafted request</h2>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                  Evidence strength {c.confidence}%
                </span>
              </div>
              <textarea
                defaultValue={c.draft}
                className="mt-4 h-64 w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-500/30 transition hover:brightness-110 active:scale-[.98]">Copy</button>
                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[.98]">Mark as filed</button>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
