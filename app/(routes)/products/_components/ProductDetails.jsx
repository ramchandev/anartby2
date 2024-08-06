"use client"
import React from 'react'
import GlobalApi from '@/app/_services/GlobalApi';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from '@/components/ui/button';

function ProductDetails() {
    const params=usePathname();
    const productSlug=params.split('/')[3];
    //console.log(catSlug);
    const [productData, setproductData] = useState([]);
    useEffect(() => {
        params && getProductData();
      }, [params]);

      const getProductData = () => {
        GlobalApi.querySingleproduct(productSlug).then((resp) => {
          setproductData(resp?.products);
          console.log(resp?.products);
        });
      };



  return (
    <div>
        {
        productData.map((item,index)=>(
            <div key={index}>
                <div className='flex flex-row gap-8'>
                    <div className='basis-1/10'><Image src={productData[0].images[0].url} width={360} height={360} alt={productData[0].name}/></div>
                    <div className='basis-1/2'>
                    
                    <h2 className='text-[26px]'>{productData[0].name}</h2>
                    <div className='flex gap-1 pb-2'>
                    {productData[0].tag.map((productData2,index2)=>(
                        <div key={index2} >
                            <span class="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400">{productData2.tagName}</span>

                        </div>
                    ))}
                    </div>

                    <p className='whitespace-pre-wrap pb-8'>{productData[0].description}</p>
                    <div classname=""><button className='bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded'>Add to Cart</button></div>
                    </div>
                </div>
                
            </div>
        ))
    }
    </div>
  )
}
export default ProductDetails