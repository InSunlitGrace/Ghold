import {cases,orders} from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import CaseDraft from "@/components/CaseDraft";

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
            <CaseDraft caseId={c.id} confidence={c.confidence} draft={c.draft}/>
          </div>
        );
      })}
    </div>
  );
}
