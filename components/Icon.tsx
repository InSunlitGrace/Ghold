export default function Icon({d,className="h-4 w-4"}:{d:string,className?:string}){
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d}/>
    </svg>
  );
}
