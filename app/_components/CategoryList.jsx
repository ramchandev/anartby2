import React from 'react'
import Image from "next/image";

function CategoryList({categoryList}) {
  return (
    <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-2 gap-4'>
        {
            categoryList.length>0?categoryList.map((category,index)=>(
                <div key={index} className='flex flex-col items-center justify-center gap-2 p5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out'>
                    
                    <Image className='m-2 rounded-md' src={category.catImage.url} alt={category.name} width={84} height={84}/>
                    <div className='text-sm text-primary'>{category.name}</div>
                    </div>
            )):
            
                [1,2,3,4,5,6].map((item,index)=>(
                    <div key={index} className='h-[120px] w-full bg-slate-200 animate-pulse rounded-lg'> </div>
                ))
               
        }
    </div>
    
  )
}

export default CategoryList