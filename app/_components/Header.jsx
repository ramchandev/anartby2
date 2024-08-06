"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react"
import { Button } from '@/components/ui/button'
import Link from "next/link"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between align-middle'>
    <div className='flex items-center gap-8'>
        <Link className='hover:cursor-pointer' href={'/'}><Image  src='/Anartby-logo.svg' alt='anartby' width={84} height={84} /></Link>
        <div className='md:flex items-center gap-6 hidden'>
            <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-pointer'>Home</Link>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Products</h2>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</h2>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Contact Us</h2>
        </div>
    </div>
    <div>
      
<div className='pt-6'>
      <SignedOut>
              <SignInButton type="button" className='text-white bg-primary hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-orange-500 focus:outline-none dark:focus:ring-orange-400 '>Login / Sign Up</SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            </div>
            
            
        </div>
    </div>
  )
}

export default Header