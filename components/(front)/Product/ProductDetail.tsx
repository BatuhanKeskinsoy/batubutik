import React from "react";
import ProductArea from "@/components/(front)/Product/ProductArea";
import { productDetailTypes } from "@/types/product/productDetailTypes";

interface IProductDetailProps {
  product: productDetailTypes;
}

function ProductDetail({ product }: IProductDetailProps) {
  return (
    <main>
      <ProductArea product={product} isDetail />
    </main>
  );
}

export default ProductDetail;
