
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProviders from "./redux-arch/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg  `}>
        <ReduxProviders>
          <div className="bg-[#FFF] w-[100%] h-[100vh]  md:border-2 md:shadow-2xl  relative  md:border-[#000] md:rounded-[20px]  md:h-[98vh] md:max-w-[400px] m-auto md:mt-2">
            {children}
            
          </div>
        </ReduxProviders>
      </body>
    </html>
  );
}
