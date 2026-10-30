"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

const links=[
  {href:"/",label:"Overview"},
  {href:"/requests",label:"Requests"},
  {href:"/orders",label:"Orders"},
  {href:"/cases",label:"Cases"}
];

export default function Sidebar(){
  const path=usePathname();
  return (
    <nav className="flex gap-1 overflow-x-auto border-b border-slate-200 bg-white p-2 md:h-screen md:w-56 md:flex-col md:border-b-0 md:border-r md:p-4">
      <div className="hidden px-3 pb-4 text-lg font-semibold md:block">Ghold</div>
      {links.map(l=>(
        <Link
          key={l.href}
          href={l.href}
          className={`rounded-md px-3 py-2 text-sm ${path===l.href?"bg-slate-900 text-white":"text-slate-700 hover:bg-slate-100"}`}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
