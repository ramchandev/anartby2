"use client";
import ProductList from "@/app/_components/ProductList";
import GlobalApi from "@/app/_services/GlobalApi";
import React from "react";
import { useEffect, useState } from "react";
import CatDetails from "../_components/CatDetails";

function paintingByCategory({ params }) {
  const catName = params.category;
  const fullCat = catName.replace(/-/g, " ");
  const titlecat = fullCat
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase());

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    params && getPaitnings();
  }, [params]);

  const getPaitnings = () => {
    GlobalApi.getPaintingByartist(params.category).then((resp) => {
      setProductList(resp?.products);
    });
  };

  return (
    <div>
      <CatDetails />
      <ProductList title={''} productList={productList} />
    </div>
  );
}

export default paintingByCategory;
