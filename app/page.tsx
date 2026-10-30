import {budgets,cases,money,requests} from "@/lib/data";

export default function Overview(){
  const spent=budgets.reduce((s,b)=>s+b.spent,0);
  const limit=budgets.reduce((s,b)=>s+b.limit,0);
  const stats=[
    {label:"Spent this month",value:money(spent),note:`of ${money(limit)}`},
    {label:"Pending approvals",value:String(requests.length),note:"awaiting a decision"},
    {label:"Open cases",value:String(cases.length),note:"need attention"},
    {label:"Recovered",value:money(0),note:"from resolved cases"}
  ];
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(s=>(
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-sm text-slate-500">{s.label}</div>
            <div className="mt-1 text-2xl font-semibold tabular-nums">{s.value}</div>
            <div className="text-xs text-slate-500">{s.note}</div>
          </div>
        ))}
      </div>
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 font-medium">Budget by category</h2>
        <div className="space-y-4">
          {budgets.map(b=>{
            const pct=Math.min(100,Math.round(b.spent/b.limit*100));
            const color=pct>=95?"bg-red-500":pct>=75?"bg-amber-500":"bg-emerald-500";
            return (
              <div key={b.category}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{b.category}</span>
                  <span className="tabular-nums text-slate-500">{money(b.spent)} / {money(b.limit)}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className={`h-2 rounded-full ${color}`} style={{width:`${pct}%`}}/>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
