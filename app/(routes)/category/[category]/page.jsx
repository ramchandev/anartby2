"use client"
import ProductList from '@/app/_components/ProductList';
import GlobalApi from '@/app/_services/GlobalApi';
import React from 'react'
import { useEffect, useState } from "react";
 
function paintingByCategory({params}) {
  const [productList,setProductList]=useState([]);
  useEffect(()=>{
    console.log(params)
params&&getPaitnings()
  },[params])

  const getPaitnings=()=>{
    GlobalApi.getPaintingByartist(params.category).then(resp=>{
      setProductList(resp?.products);
    }
      
    )
  }
  return (
    <div>
      <ProductList title={params.category}
      productList={productList} />
    </div>
  )
}

export default paintingByCategory 