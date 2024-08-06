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
        <div className="mx-6 md:mx-16">
          <Header/>
        {children}
        </div>
   
        </body>
    </html>
    </ClerkProvider>
  );
}
