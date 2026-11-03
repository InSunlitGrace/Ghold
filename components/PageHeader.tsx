export default function PageHeader({title,subtitle}:{title:string,subtitle?:string}){
  return (
    <header className="space-y-1">
      <h1 className="bg-gradient-to-r from-slate-900 via-indigo-800 to-violet-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent">{title}</h1>
      {subtitle&&<p className="text-sm text-slate-500">{subtitle}</p>}
    </header>
  );
}
