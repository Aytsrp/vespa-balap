import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vespa Balap Indonesia",
  description: "Komunitas Penggemar Modifikasi Vespa di Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
