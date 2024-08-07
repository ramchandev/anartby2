"use client";
import React from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProductDetails() {
  const params = usePathname();
  const productSlug = params.split("/")[3];
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
      {productData.map((item, index) => (
        <div key={index}>
          <div className="grid grid-cols-8 gap-4 mt-8">
            <div className="col-span-3 pl-4">
              <Carousel>
                <CarouselContent>
                  {productData[0].images.map((productImg, index3) => (
                    <CarouselItem>
                      <Image
                        key={index3}
                        src={productImg.url}
                        width={540}
                        height={540}
                        alt={productData[0].name}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="col-span-5 pl-10">
              <h2 className="text-[26px]">{productData[0].name}</h2>
              <div className="flex gap-1 pb-2">
                {productData[0].tag.map((productData2, index2) => (
                  <div key={index2}>
                    <span class="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400">
                      {productData2.tagName}
                    </span>
                  </div>
                ))}
              </div>

              <p className="whitespace-pre-wrap pb-8">
                {productData[0].description}
              </p>
              <div classname="">
                <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductDetails;
