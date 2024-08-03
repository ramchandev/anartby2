import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Anartby",
  description: "Shop Canvas Painting Collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
        <div className="mx-6 md:mx-16">
          <Header/>
        {children}
        </div>
   
        </body>
    </html>
  );
}
