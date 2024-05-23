import React from "react";
import SearchProductItem from "@/components/(front)/Search/SearchProductsItem";
import { productTypes } from "@/types/product/productTypes";

interface IFavoriteProductsProps {
  products: productTypes[] | null;
}
function SearchProducts({ products }: IFavoriteProductsProps) {
  if (products === null) return null;
  return (
    <div className="flex flex-col w-full h-full gap-6">
      {products.map((product, key) => (
        <div key={key} className="border-b pb-6 last:border-0">
          <SearchProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default SearchProducts;
