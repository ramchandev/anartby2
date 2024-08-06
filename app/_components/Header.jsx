"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react"
import { Button } from '@/components/ui/button'
import Link from "next/link"

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between'>
    <div className='flex items-center gap-8 '>
        <Link className='hover:cursor-pointer' href={'/'}><Image  src='/Anartby-logo.svg' alt='anartby' width={84} height={84} /></Link>
        <div className='md:flex items-center gap-6 hidden'>
            <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-pointer'>Home</Link>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Products</h2>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</h2>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Contact Us</h2>
        </div>
    </div>
    <div>
            <Button>Login / Sign Up</Button>
        </div>
    </div>
  )
}

export default Header