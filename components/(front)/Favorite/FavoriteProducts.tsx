import React from "react";
import FavoriteProductItem from "@/components/(front)/Favorite/FavoriteProductItem";
import { productTypes } from "@/types/product/productTypes";
import LoadingData from "@/components/others/LoadingData";

interface IFavoriteProductsProps {
  products: productTypes[] | null;
  isLoading: boolean;
}
function FavoriteProducts({ products, isLoading }: IFavoriteProductsProps) {
  if (products === null) return null;
  return (
    <div className="flex flex-col w-full h-full gap-6">
      {products.map((product, key) => (
        <div
          key={key}
          className="border-b pb-6 last:border-0 dark:border-zinc-800"
        >
          {isLoading ? (
            <LoadingData count={5} />
          ) : (
            <FavoriteProductItem product={product} />
          )}
        </div>
      ))}
    </div>
  );
}

export default FavoriteProducts;
