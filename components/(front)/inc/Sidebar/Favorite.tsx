"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "@/components/others/CustomButton";
import { useGlobalContext } from "@/app/Context/store";
import { IoFileTrayOutline } from "react-icons/io5";
import FavoriteProducts from "@/components/(front)/Favorite/FavoriteProducts";
import { productTypes } from "@/types/product/productTypes";
import { useProducts } from "@/hooks/useProduct";
import ProfileFavoriteProducts from "@/components/(front)/UserProfile/Favorite/ProfileFavoriteProducts";

interface IFavoriteProps {
  profile?: boolean;
}

function Favorite({ profile }: IFavoriteProps) {
  const { favoriteItems, setFavoriteItems } = useGlobalContext();
  const [loadingEmptyFavorite, setLoadingEmptyFavorite] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState<
    productTypes[] | null
  >(null);

  const { products, isLoading } = useProducts();

  useEffect(() => {
    if (favoriteItems && favoriteItems.length > 0 && products) {
      const groupedProducts = favoriteItems.reduce((acc, code) => {
        acc[code] = acc[code] ? acc[code] + 1 : 1;
        return acc;
      }, {} as Record<string, number>);

      const productsInFavorite = Object.keys(groupedProducts)
        .map((code) => {
          const product = products.find((p: productTypes) => p.code === code);
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
  }, [favoriteItems, products]);

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
      <div
        className={`flex flex-col gap-4 w-full ${
          !profile ? "h-[calc(100dvh-77px)]" : "py-8"
        }  justify-center items-center text-gray-500 dark:text-zinc-600`}
      >
        <div
          className={`flex  gap-4 justify-center items-center animate-pulse ${
            !profile ? "flex-col" : ""
          }`}
        >
          <IoFileTrayOutline
            className={`text-6xl ${!profile ? "lg:text-7xl" : ""}`}
          />
          <span className="text-xl">
            Favori Ürününüz Yok
          </span>
        </div>
      </div>
    );
  return (
    <div
      className={`flex flex-col w-full ${
        !profile ? "h-[calc(100dvh-77px)]" : ""
      } justify-between`}
    >
      <div
        className={`w-full h-full flex flex-col ${
          !profile ? "lg:px-8 px-4 py-4 overflow-y-auto" : ""
        } `}
      >
        {!profile ? (
          <FavoriteProducts products={favoriteProducts} isLoading={isLoading} />
        ) : (
          <ProfileFavoriteProducts
            products={favoriteProducts}
            isLoading={isLoading}
          />
        )}
      </div>
      <div
        className={`flex flex-col w-full ${
          !profile ? "lg:px-8 px-4 gap-4 py-4" : "gap-6 py-6"
        } items-center text-center`}
      >
        <hr className="w-full dark:border-zinc-800" />
        <div className="flex lg:flex-row flex-col items-center gap-2 w-full">
          <CustomButton
            title={
              !loadingEmptyFavorite
                ? "Favorileri Temizle"
                : "Favoriler Temizleniyor.."
            }
            containerStyles={`py-3 px-4 ${
              !profile ? "w-full" : "max-lg:w-full ml-auto"
            } bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-700 transition-all duration-300`}
            handleClick={handleEmptyFavorite}
          />
        </div>
      </div>
    </div>
  );
}

export default Favorite;
