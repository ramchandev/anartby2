import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function ProductList({ productList, title }) {
  return (
    <div className="mt-5 ">
      <div className="">
        <h2 className="font-bold text-[22px]">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {productList.length > 0
            ? productList.map((products, index) => (
                <Link
                  key={index}
                  href={
                    "/products/" +
                    products.categories[0].slug +
                    "/" +
                    products.slug
                  }
                >
                  <div className="shadow-md rounded-lg hover:shadow-lg hover:shadow-orange-300 cursor-pointer hover:scale-105 transition-all ease-in-out">
                    <Image
                      className="ht-[216px] md:h-[270px] object-cover rounded-sm"
                      src={products?.images[0].url}
                      width={360}
                      height={360}
                      alt={products.name}
                    />
                    <div className="flex flex-col items-baseline p-3 gap-2">
                      <h2 className="p-1 bg-orange-100 text-primary rounded-full text-[12px]">
                        {" "}
                        {products.sku}
                      </h2>
                      <h2 className="font-bold text-lg pt-1">
                        {products.name}
                      </h2>
                      <h2 className="font-thin">
                        {products.categories[0].name}
                      </h2>
                      <div className="flex">
                      <div className=" text-gray-400 pt-1 line-through pr-2">
                        ₹{products.price}
                      </div>
                      <h2 className="font-bold text-primary pt-1">
                        ₹{products.salePrice}
                      </h2>
                      </div>

                      
                      <Button className="m-2">View Details</Button>
                    </div>
                  </div>
                </Link>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="h-[270px] w-full bg-slate-200 animate-pulse rounded-lg"
                >
                  {" "}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
