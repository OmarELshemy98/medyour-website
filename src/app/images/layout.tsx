import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
      <body className={geistSans.className}>
        <NavbarProvider>
          <main>
            <Navbar />
            {children}
          </main>
        </NavbarProvider>
      </body>
    </html>
  );
}
