"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "@/components/others/CustomButton";
import { useGlobalContext } from "@/app/Context/store";
import { instantProducts } from "@/constants/(front)";
import { IoFileTrayOutline } from "react-icons/io5";
import FavoriteProducts from "@/components/(front)/Favorite/FavoriteProducts";
import { productTypes } from "@/types/product/productTypes";

function Favorite() {
  const { favoriteItems, setFavoriteItems } =
    useGlobalContext();
  const [loadingEmptyFavorite, setLoadingEmptyFavorite] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState<
    productTypes[] | null
  >(null);

  useEffect(() => {
    if (favoriteItems && favoriteItems.length > 0) {
      const groupedProducts = favoriteItems.reduce((acc, code) => {
        acc[code] = acc[code] ? acc[code] + 1 : 1;
        return acc;
      }, {} as Record<string, number>);

      const productsInFavorite = Object.keys(groupedProducts)
        .map((code) => {
          const product = instantProducts.find((p) => p.code === code);
          if (product) {
            return {
              ...product,
              quantity: groupedProducts[code],
            };
          }
        })
        .filter(Boolean) as productTypes[];

      setFavoriteProducts(productsInFavorite);
    } else {
      setFavoriteProducts(null);
    }
  }, [favoriteItems]);


  const handleEmptyFavorite = () => {
    if (!loadingEmptyFavorite) {
      setLoadingEmptyFavorite(true);
      setTimeout(() => {
        localStorage.setItem("favoriteItems", JSON.stringify(null));
        setFavoriteProducts(null);
        setFavoriteItems(null);
        setLoadingEmptyFavorite(false);
      }, 1000);
    }
  };

  if (!favoriteProducts)
    return (
      <div className="flex flex-col gap-4 w-full h-[calc(100dvh-77px)] justify-center items-center text-gray-300">
        <div className="flex flex-col gap-4 justify-center items-center animate-pulse">
          <IoFileTrayOutline className="lg:text-7xl text-6xl" />
          <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
            Favori Ürününüz Yok
          </span>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col w-full h-[calc(100dvh-77px)] justify-between">
      <div className="flex flex-col w-full overflow-y-auto h-full lg:px-8 px-4 py-4">
        <FavoriteProducts products={favoriteProducts} />
      </div>
      <div className="flex flex-col w-full lg:px-8 px-4 py-4 items-center text-center gap-4">
        <hr className="w-full" />
        <div className="flex lg:flex-row flex-col items-center gap-2 w-full">

          <CustomButton
            title={
              !loadingEmptyFavorite
                ? "Favorileri Temizle"
                : "Favoriler Temizleniyor.."
            }
            containerStyles="py-3 px-4 w-full bg-gray-200 text-gray-600 rounded-md hover:bg-gray-700 hover:text-white transition-all duration-300"
            handleClick={handleEmptyFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default Favorite;
