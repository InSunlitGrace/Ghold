"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Icon from "@/components/Icon";

const links=[
  {href:"/",label:"Overview",icon:"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"},
  {href:"/requests",label:"Requests",icon:"M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},
  {href:"/orders",label:"Orders",icon:"M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"},
  {href:"/cases",label:"Cases",icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}
];

export default function Sidebar(){
  const path=usePathname();
  return (
    <nav className="flex items-center gap-1 overflow-x-auto bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 p-3 text-slate-300 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:flex-col md:items-stretch md:p-5">
      <div className="flex shrink-0 items-center gap-3 px-2 md:pb-8 md:pt-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400 to-fuchsia-500 text-base font-bold text-white shadow-lg shadow-indigo-500/40">G</div>
        <div className="hidden md:block">
          <div className="text-lg font-semibold leading-tight text-white">Ghold</div>
          <div className="text-xs text-slate-400">Budgets &amp; disputes</div>
        </div>
      </div>
      {links.map(l=>{
        const active=path===l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active?"bg-white/10 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-white/10":"hover:bg-white/5 hover:text-white"}`}
          >
            <Icon d={l.icon} className={`h-4 w-4 ${active?"text-indigo-300":"text-slate-400"}`}/>
            {l.label}
          </Link>
        );
      })}
      <div className="mt-auto hidden items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs text-slate-400 ring-1 ring-white/5 md:flex">
        <span className="h-2 w-2 rounded-full bg-emerald-400"/>
        Sandbox mode
      </div>
    </nav>
  );
}
