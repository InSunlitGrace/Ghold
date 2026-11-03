import type {Metadata} from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata:Metadata={
  title:"Ghold",
  description:"Team budget manager and dispute resolver"
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body className="text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col md:flex-row">
          <Sidebar/>
          <main className="flex-1 p-4 md:p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
