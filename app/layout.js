import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
const inter = Outfit({ subsets: ["latin"] });
import NextAuthSessionProvider from './provider'

export const metadata = {
  title: "Anartby",
  description: "Shop Canvas Painting Collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthSessionProvider>
        <div className="mx-6 md:mx-16">
          <Header/>
        {children}
        </div>
   </NextAuthSessionProvider>
        </body>
    </html>
  );
}
