"use client";

import {AgStudio,AgStudioProvider} from "ag-studio-react";
import {budgets,orders,requests} from "@/lib/data";

const data={
  sources:[
    {id:"budgets",data:budgets},
    {id:"orders",data:orders},
    {id:"requests",data:requests}
  ]
};

export default function StudioDashboard(){
  return (
    <AgStudioProvider licenseKey={process.env.NEXT_PUBLIC_AG_STUDIO_LICENSE}>
      <div style={{height:"80vh",width:"100%"}}>
        <AgStudio data={data} mode="edit"/>
      </div>
    </AgStudioProvider>
  );
}
