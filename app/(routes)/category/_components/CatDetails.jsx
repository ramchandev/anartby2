"use client"
import React from 'react'
import GlobalApi from '@/app/_services/GlobalApi';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
function CatDetails() {
    const params=usePathname();
    const catSlug=params.split('/')[2];
    //console.log(catSlug);
    const [catdata, setcatdata] = useState([]);
    useEffect(() => {
        params && getCatData();
      }, [params]);

      const getCatData = () => {
        GlobalApi.querySingleCat(catSlug).then((resp) => {
          setcatdata(resp?.categories);
          //console.log(resp);
        });
      };


  return (

    <div>{
        catdata.map((item,index)=>(
      
            <div key={index} className='pb-10'>

<div className='grid grid-cols-4 mt-8'>
        <div className='col-span-1'>
        <Image className='rounded' src={catdata[0].catImage.url} alt={catdata[0].name} width={216} height={216}/>

        </div>
    <div className='col-span-3'>
    <h2 className='font-bold text-[22px]'>{catdata[0].name}</h2>
                <div className='text-sm'>{catdata[0].description}</div>
                <h2 className='font-bold pt-3'>Here are some of {catdata[0].name} curated paintings:</h2>
       </div>
    </div>


               
                
            </div>
        ))
        }</div>
  )
}
 
export default CatDetails