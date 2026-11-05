"use client";
import {useState,useTransition} from "react";
import {reviewRequestAction} from "@/app/actions";
import {money} from "@/lib/data";
import type {RequestItem} from "@/lib/data";

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

export default function RequestCard({r}:{r:RequestItem}){
  const [verdict,setVerdict]=useState<string>(r.verdict);
  const [reason,setReason]=useState(r.reason);
  const [note,setNote]=useState<string|null>(null);
  const [pending,start]=useTransition();

  function recheck(){
    start(async()=>{
      const res=await reviewRequestAction(r.id);
      setVerdict(res.verdict);
      setReason(res.reason);
      setNote(res.source==="ai"?"Reviewed by AI":"AI unavailable, showing the built-in analysis");
    });
  }

  return (
    <div className={`rounded-2xl border-l-4 bg-white/80 p-6 shadow-sm ring-1 ring-slate-900/5 backdrop-blur transition hover:shadow-lg ${edge[verdict]}`}>
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
          <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ring-inset ${badge[verdict]}`}>
            Agent suggests: {verdict}
          </span>
        </div>
      </div>
      <p className={`mt-4 text-sm leading-relaxed text-slate-600 ${pending?"opacity-50":""}`}>{pending?"Checking budget and history…":reason}</p>
      {note&&!pending&&<p className="mt-1 text-xs text-slate-400">{note}</p>}
      <div className="mt-5 flex flex-wrap gap-2">
        <button className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-500/30 transition hover:brightness-110 active:scale-[.98]">Approve</button>
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 active:scale-[.98]">Reject</button>
        <button onClick={recheck} disabled={pending} className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100 disabled:opacity-50">{pending?"Checking…":"Ask AI to re-check"}</button>
      </div>
    </div>
  );
}
