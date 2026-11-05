import {requests} from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import RequestCard from "@/components/RequestCard";

export default function Requests(){
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title="Requests" subtitle="Spending requests waiting on you"/>
      {requests.map(r=><RequestCard key={r.id} r={r}/>)}
    </div>
  );
}
