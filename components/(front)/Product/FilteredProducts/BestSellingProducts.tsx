import React from "react";
import SliderOne from "@/components/(front)/Sliders/SliderOne";
import { productTypes } from "@/types/product/productTypes";

interface IFeaturedProductsProps {
  products: productTypes[];
}
function BestSellingProducts({ products }: IFeaturedProductsProps) {
  return <SliderOne perView={5} products={products} />;
}

export default BestSellingProducts;
