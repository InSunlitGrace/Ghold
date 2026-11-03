"use client";

import dynamic from "next/dynamic";

const StudioDashboard=dynamic(()=>import("./StudioDashboard"),{ssr:false});

export default function DashboardLoader(){
  return <StudioDashboard/>;
}
