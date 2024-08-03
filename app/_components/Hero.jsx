
import { Button } from "@/components/ui/button"
 import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

import React from 'react'

function Hero() {
  return (
    <div className='flex gap-3 items-center flex-col justify-center pt-14 pb-7'>
        <h2 className='font-bold text-[46px] text-center'>Find your <span className='text-primary'>canvas</span> painting <br/> of your <span className='text-primary'>choice</span>.</h2>
        <h2 className='text-xl text-gray-400'>Explore paintings from famous artist.</h2>
        <div className="mt-4 flex gap-4 items-center">
        {<Input className='rounded-full md:w-[350px]' placeholder="Search artist..."/> }
            {<Button className="rounded-full h-[46px]"><Search className="h-4 w-4"/></Button> }
        </div>
        

    </div>
  )
}

export default Hero