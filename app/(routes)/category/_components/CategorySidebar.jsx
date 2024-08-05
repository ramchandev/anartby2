"use client"
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";

function CategorySidebar() {

/* Function to get the category from the GlobalApi*/

const [categoryList,setCategoryList]=useState([]);
const [selectedCategory,setselectedCategory]=useState([]);
const params=usePathname();
//const category=params.split('/')[2];
useEffect(()=>{
  getcatsList(); //Usage
},[])

useEffect(()=>{
  params&&setselectedCategory(params.split('/')[2])
},[params])
/*
* To get all Categories
*/
const getcatsList=()=>{
  GlobalApi.getCategory().then(resp=>{
    setCategoryList(resp.categories);
    console.log(resp.categories);
  })
}

  return (
    <div>
        <h2 className='font-bold mb-3 text-lg text-primary mt-8'>Categories</h2>
        <div >
{categoryList.map((category,index)=>(
    <Link href={'/category/'+category.slug} key={index} className={`flex gap-2 p-3 border rounded mb-3 mr-10 cursor-pointer hover:bg-orange-50 hover:text-primary hover:shadow-sm items-center
      ${selectedCategory==category.slug&&'border-x-primary text-primary shadow-md bg-orange-50'}
      `

    }>
        <Image src={category.catImage.url} alt={category.name} width={42} height={42}/>
<h2>{category.name}</h2>
        </Link>

))}
        </div>
        </div>
  )
}

export default CategorySidebar