import React from "react";
import SliderOne from "@/components/(front)/Sliders/SliderOne";
import { instantProducts } from "@/constants/(front)";

function BestSellingProducts() {
  return <SliderOne perView={5} products={instantProducts} />;
}

export default BestSellingProducts;
