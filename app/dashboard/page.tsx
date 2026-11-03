import DashboardLoader from "@/components/DashboardLoader";

export default function Dashboard(){
  return (
    <div className="mx-auto max-w-6xl space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <DashboardLoader/>
    </div>
  );
}
