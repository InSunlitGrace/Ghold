import {budgets,cases,money,requests} from "@/lib/data";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";

export default function Overview(){
  const spent=budgets.reduce((s,b)=>s+b.spent,0);
  const limit=budgets.reduce((s,b)=>s+b.limit,0);
  const stats=[
    {label:"Spent this month",value:money(spent),note:`of ${money(limit)}`,accent:"from-indigo-500 to-violet-500",icon:"M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"},
    {label:"Pending approvals",value:String(requests.length),note:"awaiting a decision",accent:"from-amber-400 to-orange-500",icon:"M12 6v6l4 2M22 12a10 10 0 11-20 0 10 10 0 0120 0z"},
    {label:"Open cases",value:String(cases.length),note:"need attention",accent:"from-rose-500 to-pink-500",icon:"M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"},
    {label:"Recovered",value:money(0),note:"from resolved cases",accent:"from-emerald-400 to-teal-500",icon:"M22 11.1V12a10 10 0 11-5.9-9.1M22 4L12 14l-3-3"}
  ];
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <PageHeader title="Overview" subtitle="Where your team's money stands this month"/>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(s=>(
          <div key={s.label} className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-900/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md ${s.accent}`}>
              <Icon d={s.icon} className="h-5 w-5"/>
            </div>
            <div className="mt-4 text-sm text-slate-500">{s.label}</div>
            <div className="mt-1 text-3xl font-bold tabular-nums tracking-tight">{s.value}</div>
            <div className="text-xs text-slate-400">{s.note}</div>
          </div>
        ))}
      </div>
      <section className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
        <h2 className="mb-5 text-lg font-semibold">Budget by category</h2>
        <div className="space-y-5">
          {budgets.map(b=>{
            const pct=Math.min(100,Math.round(b.spent/b.limit*100));
            const color=pct>=95?"from-rose-500 to-red-500":pct>=75?"from-amber-400 to-orange-500":"from-emerald-400 to-teal-500";
            return (
              <div key={b.category}>
                <div className="mb-1.5 flex items-baseline justify-between text-sm">
                  <span className="font-medium">{b.category}</span>
                  <span className="tabular-nums text-slate-500">{money(b.spent)} / {money(b.limit)} <span className="ml-1 font-semibold text-slate-700">{pct}%</span></span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{width:`${pct}%`}}/>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
