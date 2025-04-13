import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NavbarProvider } from '@/context/NavbarContext';

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedYour",
  description: "MedYour Healthcare Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        // className={geistSans.className}
        // style={{
        //   backgroundImage: `url('/images/backgroundImg.png')`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'top',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundAttachment: 'fixed'
        // }}
      >
        <NavbarProvider>
          <Navbar />
          <main className="pt-[85px]">
            {children}
          </main>
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}