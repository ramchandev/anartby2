"use client"
import CategorySidebar from './_components/CategorySidebar'
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { Toaster } from '@/components/ui/sonner';
 


function layout({children}) {

 
     

  return (
    <div className='mx-6 md:mx-16 lg:mx-auto container'>
    <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
        <div className='hidden md:block col-span-1'>
            <CategorySidebar />
        </div>
    <div className='md:col-span-3'>
      
      {children}
      <Toaster/>
      </div>
    </div>
    </div>

    
  )
}

export default layout