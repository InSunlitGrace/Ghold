"use client";
import {useState,useTransition} from "react";
import {draftCaseAction} from "@/app/actions";

export default function CaseDraft({caseId,confidence,draft}:{caseId:string,confidence:number,draft:string}){
  const [text,setText]=useState(draft);
  const [note,setNote]=useState<string|null>(null);
  const [copied,setCopied]=useState(false);
  const [pending,start]=useTransition();

  function redraft(){
    start(async()=>{
      const res=await draftCaseAction(caseId);
      setText(res.draft);
      setNote(res.source==="ai"?"Drafted by AI. Please review before sending.":"AI unavailable, showing the built-in draft.");
    });
  }
  async function copy(){
    try{
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(()=>setCopied(false),1500);
    }catch{}
  }

  return (
    <section className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Drafted request</h2>
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
          Evidence strength {confidence}%
        </span>
      </div>
      <textarea
        value={pending?"Drafting from the evidence…":text}
        onChange={e=>setText(e.target.value)}
        disabled={pending}
        className="mt-4 h-64 w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 disabled:opacity-60"
      />
      {note&&!pending&&<p className="mt-2 text-xs text-slate-400">{note}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={copy} className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-500/30 transition hover:brightness-110 active:scale-[.98]">{copied?"Copied":"Copy"}</button>
        <button onClick={redraft} disabled={pending} className="rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100 disabled:opacity-50">{pending?"Drafting…":"Redraft with AI"}</button>
        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[.98]">Mark as filed</button>
      </div>
    </section>
  );
}
