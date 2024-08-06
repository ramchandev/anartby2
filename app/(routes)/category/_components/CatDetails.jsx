"use client"
import React from 'react'
import GlobalApi from '@/app/_services/GlobalApi';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
            <div key={index} className=''>
                <h2 className='font-bold text-[22px]'>{catdata[0].name}</h2>
                <div className='text-sm'>{catdata[0].description}</div>
                <h2 className='font-bold pt-3'>Here are some of {catdata[0].name} curated paintings:</h2>
            </div>
        ))
        }</div>
  )
}
 
export default CatDetails