import type {Metadata} from "next";
import "./globals.css";

export const metadata:Metadata={
  title:"Ghold",
  description:"Team budget manager and dispute resolver"
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
