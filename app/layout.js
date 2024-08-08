import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Footer from "./_components/Footer";
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Anartby",
  description: "Shop Canvas Painting Collections",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>


    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Header/>
        {children}
        <Footer/>
        </div>
   
        </body>
    </html>
    </ClerkProvider>
  );
}
