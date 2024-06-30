import React from "react";
import SliderOne from "@/components/(front)/Sliders/SliderOne";
import { instantProducts } from "@/constants/(front)";

function FeaturedProducts() {
  return <SliderOne perView={5} products={instantProducts} />;
}

export default FeaturedProducts;
