"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react"
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between'>
    <div className='flex items-center gap-8 '>
        <Image src='/Anartby-logo.svg' alt='anartby' width={84} height={84} />
        <div className='md:flex items-center gap-6 hidden'>
            <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Home</h2>
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