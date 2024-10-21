import React from "react";
import FavoriteProductItem from "@/components/(front)/Favorite/FavoriteProductItem";
import { productTypes } from "@/types/product/productTypes";
import LoadingData from "@/components/others/LoadingData";

interface IProfileFavoriteProductsProps {
  products: productTypes[];
  isLoading: boolean;
}
function ProfileFavoriteProducts({
  products,
  isLoading,
}: IProfileFavoriteProductsProps) {
  if (products?.length === 0) return null;
  return (
    <div className={`w-full h-full gap-4 grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2`}>
      {products && products.map((product, key) => (
        <div
          key={key}
          className="max-lg:border-b max-lg:pb-6 max-lg:last:border-0 max-lg:dark:border-zinc-800 border-2 dark:border-zinc-800 p-3 rounded-2xl"
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

export default ProfileFavoriteProducts;
