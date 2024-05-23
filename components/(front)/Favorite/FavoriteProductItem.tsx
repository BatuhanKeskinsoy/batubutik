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
        <div className="fixed w-screen h-screen top-0 left-0 flex lg:items-center items-start lg:justify-center justify-start z-20">
          <div
            className={`bg-gray-900/60 w-screen h-screen fixed left-0 top-0 transition-all duration-300 animate-sidebarBgSmooth z-10`}
            onClick={() => setShowProductArea(false)}
          ></div>
          <div
            className={`relative bg-white rounded-sm 2xl:w-[calc(100vw-34%)] xl:w-[calc(100vw-250px)] lg:w-[calc(100vw-250px)] lg:h-[calc(100dvh-18%)] w-screen h-[100dvh] shadow-lg shadow-gray-600 transition-all duration-300 animate-modalContentSmooth z-20`}
          >
            <CustomButton
              containerStyles="absolute lg:-right-4 lg:-top-4 right-6 top-6 text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300 z-10 bg-white rounded-full "
              leftIcon={<IoCloseOutline className="text-4xl" />}
              handleClick={() => setShowProductArea(false)}
            />
            <div className=" w-full h-full lg:overflow-hidden overflow-y-auto">
              <ProductArea product={productDetail} />
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-4 items-center lg:h-[156px] h-40">
        {product.images && (
          <Link
            href={"/"}
            title={product.title}
            className="relative lg:min-w-[100px] lg:w-[100px] lg:h-[156px] min-w-24 w-24 h-40 rounded-2xl shadow-lg shadow-gray-400 overflow-hidden transition-all duration-300 hover:scale-95"
          >
            <Image
              src={product.images[0]}
              fill
              sizes="(max-width: 768px) 100%, 25%"
              alt={product.title}
              title={product.title}
              className="object-cover"
            />
          </Link>
        )}
        <div className="flex flex-col justify-around h-full items-start gap-2 w-full">
          <div className="flex flex-col gap-2 w-full h-full justify-around">
            <div className="flex flex-col w-full gap-1">
              <Link
                href={"/magaza"}
                title={product.title}
                className="font-medium line-clamp-1 transition-all duration-300 hover:text-site text-lg"
              >
                {product.title}
              </Link>
              <span className="text-sm text-gray-600">{product.category}</span>
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
                {getPrice(product.amount)}
              </span>
              {product.discount > 0 && (
                <span className="line-through text-gray-500">
                  {getPrice(
                    (product.discount * product.amount) / 100 + product.amount
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
