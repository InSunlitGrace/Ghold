import {cases,orders} from "@/lib/data";

export default function Cases(){
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-2xl font-semibold">Cases</h1>
      {cases.map(c=>{
        const order=orders.find(o=>o.id===c.orderId);
        return (
          <div key={c.id} className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm text-slate-500">{c.id} · {c.orderId} · {order?.vendor}</div>
              <h2 className="mt-1 font-medium">{c.issue}</h2>
              <h3 className="mt-4 text-sm font-medium text-slate-500">Evidence</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {c.evidence.map(e=>(
                  <li key={e} className="rounded-md bg-slate-50 px-3 py-2">{e}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Drafted request</h2>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800">
                  Evidence strength {c.confidence}%
                </span>
              </div>
              <textarea
                defaultValue={c.draft}
                className="mt-3 h-64 w-full rounded-md border border-slate-300 p-3 text-sm"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white">Copy</button>
                <button className="rounded-md border border-slate-300 px-3 py-1.5 text-sm">Mark as filed</button>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
