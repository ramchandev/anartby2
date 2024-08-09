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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

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
                    <CarouselItem className="flex aspect-square items-center justify-center">
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
              <h2 className="text-[32px]">{productData[0].name}</h2>
              <div className="flex">
           
              </div>
              <div className="flex gap-1 pb-2">
                {productData[0].tag.map((productData2, index2) => (
                  <div key={index2}>
                    <span class="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400">
                      {productData2.tagName}
                    </span>
                  </div>
                ))}
              </div>

              <p className="whitespace-pre-wrap pb-4">
                {productData[0].shotDesc}
              </p>
              <div>
                <div className="flex">
              <div className=" text-gray-400 pt-1 line-through pr-2">
                        ₹{productData[0].price}
                      
                      </div>
                      <h2 className="text-[22px] pb-4 text-primary font-semibold">₹{productData[0].salePrice} 
               <span className="text-sm text-black"> per unit</span>
                </h2> 
                      </div>
                 
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="number" min="1" max="50" step="1"/>
                    <Sheet>
                      <SheetTrigger>
                        <Button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
                          Add to Cart
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Cart</SheetTitle>
                          <SheetDescription>
                            Products will come here.
                          </SheetDescription>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                  </div>
              
              </div>
            </div>
          </div>

          <p className="whitespace-pre-wrap pb-8 pt-8">
                {productData[0].description}
              </p>

          <div className="grid grid-cols-8 gap-4 mt-8">
            <div className="col-span-4 pl-4">
              <h2 className="text-[22px]">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible>
                {productData[0].faq.map((faqData, index4) => (
                  <AccordionItem key={index4} value={`item-${index4}`}>
                    <AccordionTrigger>{faqData.question}</AccordionTrigger>
                    <AccordionContent>{faqData.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="col-span-4 pl-10">
              <h2 className="text-[22px]">Product Specification</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Name</TableHead>
                    <TableHead className="">Spec Value</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {productData[0].specs.map((specData, index3) => (
                    <TableRow key={index3}>
                      <TableCell>{specData.name}: </TableCell>
                      <TableCell className="font-medium">
                        {specData.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductDetails;
