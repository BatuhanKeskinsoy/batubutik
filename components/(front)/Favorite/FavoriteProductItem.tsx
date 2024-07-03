"use client";
import { useGlobalContext } from "@/app/Context/store";
import addToBasket from "@/components/functions/addToBasket";
import { getPrice } from "@/components/functions/getPrice";
import CustomButton from "@/components/others/CustomButton";
import { instantProductDetail } from "@/constants/(front)";
import { productTypes } from "@/types/product/productTypes";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IoBagAddOutline,
  IoBagCheck,
  IoBanOutline,
  IoCloseOutline,
  IoHeartDislikeOutline,
} from "react-icons/io5";
import ProductArea from "@/components/(front)/Product/ProductArea";
import { basketItemTypes } from "@/types/product/basketItemTypes";
import ModalProductDetail from "@/components/modals/ModalProductDetail";

interface IFavoriteProductItemProps {
  product: productTypes;
}

function FavoriteProductItem({ product }: IFavoriteProductItemProps) {
  const [loadingRemoveFavorite, setLoadingRemoveFavorite] = useState(false);
  const [loadingAddToBasket, setLoadingAddToBasket] = useState(false);
  const [showProductArea, setShowProductArea] = useState(false);
  const [productDetail, setProductDetail] = useState<
    productDetailTypes | undefined
  >();
  const { setFavoriteItems, setBasketItems } = useGlobalContext();

  const removeFavorite = () => {
    if (!loadingRemoveFavorite) {
      setLoadingRemoveFavorite(true);
      setTimeout(() => {
        setFavoriteItems((prevItems) => {
          if (!prevItems) return null;
          const updatedItems = prevItems.filter(
            (item) => item !== product.code
          );
          localStorage.setItem("favoriteItems", JSON.stringify(updatedItems));
          return updatedItems;
        });
        setLoadingRemoveFavorite(false);
      }, 500);
    }
  };

  const handleAddToBasket = (e: any) => {
    e.preventDefault();

    if (product) {
      const item: basketItemTypes = {
        product_code: product.code,
        quantity: 1,
        attributes: null,
      };

      if (!loadingAddToBasket) {
        setLoadingAddToBasket(true);
        setTimeout(() => {
          if (!product.choise_required) {
            addToBasket(item, setBasketItems);
          } else {
            handleShowProductArea(e);
          }
          setLoadingAddToBasket(false);
        }, 1000);
      }
    }
  };

  const handleShowProductArea = (e: any) => {
    e.preventDefault();
    setShowProductArea(true);
    setProductDetail(instantProductDetail);
  };

  return (
    <>
      {showProductArea && (
        <ModalProductDetail
          productDetail={productDetail}
          onClose={() => setShowProductArea(false)}
        />
      )}
      <div className="flex gap-4 items-center lg:h-[156px] h-40">
        {product.images && (
          <Link
            href={"/"}
            title={`${product.brand && product.brand} ${product.title}`}
            className="relative lg:min-w-[100px] lg:w-[100px] lg:h-[156px] min-w-24 w-24 h-40 rounded-2xl shadow-lg shadow-gray-400 overflow-hidden transition-all duration-300 hover:scale-95"
          >
            <Image
              src={product.images[0]}
              fill
              sizes="(max-width: 768px) 100%, 25%"
              alt={`${product.brand && product.brand} ${product.title}`}
              title={`${product.brand && product.brand} ${product.title}`}
              className="object-cover"
            />
          </Link>
        )}
        <div className="flex flex-col justify-around h-full items-start gap-2 w-full">
          <div className="flex flex-col gap-2 w-full h-full justify-around">
            <div className="flex flex-col w-full gap-1">
              <Link
                href={"/magaza"}
                title={`${product.brand && product.brand} ${product.title}`}
                className="font-medium line-clamp-1 transition-all duration-300 hover:text-site text-lg"
              >
                <span className="font-extrabold">
                  {product.brand && product.brand}
                </span>{" "}
                {product.title}
              </Link>
              <span className="text-gray-500 text-xs">
                {product.mainCategory}
                {product.category && ` / ${product.category}`}
              </span>
              <div className="text-sm tracking-wide">
                {product.stock > 0 ? (
                  <span className="text-green-500">Stokta Var</span>
                ) : (
                  <span className="text-red-600">Tükendi</span>
                )}
              </div>
            </div>
            <div className="flex items-center text-sm gap-2">
              <span
                className={`font-medium ${
                  product.discount > 0 ? "text-green-500 text-base" : ""
                }`}
              >
                {getPrice(product.price)}
              </span>
              {product.discount > 0 && (
                <span className="line-through text-gray-500">
                  {getPrice(
                    (product.discount * product.price) / 100 + product.price
                  )}{" "}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 w-full">
            <CustomButton
              title={
                product.stock > 0
                  ? !loadingAddToBasket
                    ? "Sepete Ekle"
                    : "Sepete Ekleniyor.."
                  : "Stokta Yok"
              }
              leftIcon={
                product.stock > 0 ? (
                  !loadingAddToBasket ? (
                    <IoBagAddOutline className="text-xl max-lg:text-base" />
                  ) : (
                    <IoBagCheck className="text-xl max-lg:text-base" />
                  )
                ) : (
                  <IoBanOutline className="text-xl max-lg:text-base" />
                )
              }
              textStyles="-mb-0.5"
              containerStyles={`flex items-center w-full gap-2 justify-center py-2 px-2 ${
                product.stock > 0
                  ? "bg-site/80 hover:bg-site text-white"
                  : "bg-gray-200 text-gray-600 opacity-50 cursor-not-allowed"
              } max-lg:text-sm rounded-md transition-all duration-300`}
              handleClick={product.stock > 0 ? handleAddToBasket : undefined}
            />
            <CustomButton
              title={!loadingRemoveFavorite ? "Kaldır" : "Kaldırılıyor.."}
              leftIcon={
                !loadingRemoveFavorite ? (
                  <IoHeartDislikeOutline className="text-xl" />
                ) : (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                )
              }
              textStyles="max-lg:hidden -mb-0.5"
              containerStyles="flex items-center gap-2 justify-center py-2 px-4 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-700 hover:text-white transition-all duration-300"
              handleClick={removeFavorite}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoriteProductItem;
