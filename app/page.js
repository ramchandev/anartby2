"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import { useEffect, useState } from "react";
import GlobalApi from "./_services/GlobalApi";
import ProductList from "./_components/ProductList";


export default function Home() {
/* Function to get the category from the GlobalApi*/

  const [categoryList,setCategoryList]=useState([]);
  const [productList,setProductList]=useState([]);
  const [productFeList,setFeProductList]=useState([]);

  useEffect(()=>{
    getcatsList(); //Usage
    getFeaturedProducts(); //Usage of the function
    getFeaturedPro();
  },[])

  const getFeaturedPro=()=>{
    GlobalApi.getFeaturedPro().then(resp=>{
      console.log(resp);
      setFeProductList(resp.products);
    })
  }

  /*
  * To get all Categories
  */
  const getcatsList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }
  /*
  * To get all Products
  */
  const getFeaturedProducts=()=>{
  GlobalApi.getFeaturedProducts().then(resp=>{
  //console.log(resp.products);
  setProductList(resp.products);

})
  }
  return (
  
       <div>
        
     <Hero/>
     <CategoryList categoryList={categoryList}/>
    
     <ProductList productList={productFeList} title={'Featured Products'} />
       </div>
  
  );
}
