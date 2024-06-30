import React from "react";
import ProductItem from "@/components/(front)/Product/ProductItem";
import { instantProducts } from "@/constants/(front)";

function Products() {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-6 gap-3">
      {instantProducts.map((product, key) => (
        <ProductItem
          key={key}
          product={product}
          height={450}
          mobileHeight={290}
        />
      ))}
    </div>
  );
}

export default Products;
