"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function Header() {
  return (
    <div>
      <div className="mx-6 md:mx-16 lg:mx-auto container p-3  flex justify-between align-middle">
        <div className="flex items-center gap-8">
          <Link className="hover:cursor-pointer" href={"/"}>
            <Image
              src="/Anartby-logo.svg"
              alt="anartby"
              width={84}
              height={84}
            />
          </Link>
          <div className="md:flex items-center gap-6 hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-100/50 to-orange-100 p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <ImageIcon className="h-6 w-6" />

                            <div className="mb-2 mt-4 text-lg font-medium">
                              Our Products
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautiful paintings, Photographs printed perfectly
                              for you. Browse through our range of products.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ul>
                        <li className="text-sm leading-normal">
                          <Link href={"/"}>Van Goah</Link>
                        </li>

                        <li className="text-sm leading-normal">
                          <Link href={"/"}>Van Goah</Link>
                        </li>
                        <li className="text-sm leading-normal">
                          <Link href={"/"}>Van Goah</Link>
                        </li>
                        <li className="text-sm leading-normal">
                          <Link href={"/"}>Van Goah</Link>
                        </li>
                      </ul>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-pointer'>Home</Link>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Products</h2>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</h2>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Contact Us</h2> */}
          </div>
        </div>
        <div>
          <div className="pt-6">
            <SignedOut>
              <SignInButton
                type="button"
                className="text-white bg-primary hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-orange-500 focus:outline-none dark:focus:ring-orange-400 "
              >
                Login / Sign Up
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
