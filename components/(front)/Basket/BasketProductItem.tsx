"use client";
import { getPrice } from "@/lib/functions/getPrice";
import CustomButton from "@/components/others/CustomButton";
import { basketProductTypes } from "@/types/product/basketProductTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoAdd, IoBagRemoveOutline, IoRemove } from "react-icons/io5";

interface IBasketProductItemProps {
  isDetail?: boolean;
  product: basketProductTypes;
  onUpdateQuantity: (
    newQuantity: number,
    attributes?: { attr_title: string; attr_option: string }[] | null
  ) => void;
  onRemoveItem: (
    productCode: string,
    attributes?: { attr_title: string; attr_option: string }[] | null
  ) => void;
}

function BasketProductItem({
  isDetail,
  product,
  onUpdateQuantity,
  onRemoveItem,
}: IBasketProductItemProps) {
  const [loadingQuantity, setLoadingQuantity] = useState(false);
  const [productQuantity, setProductQuantity] = useState(product.quantity);

  const decreaseQuantity = () => {
    if (!loadingQuantity && productQuantity > 1) {
      setLoadingQuantity(true);
      setTimeout(() => {
        const newQuantity = Math.max(1, productQuantity - 1);
        onUpdateQuantity(newQuantity, product.attributes || null);
        setProductQuantity(newQuantity);
        setLoadingQuantity(false);
      }, 500);
    }
  };

  const increaseQuantity = () => {
    if (!loadingQuantity && product.stock > productQuantity) {
      setLoadingQuantity(true);
      setTimeout(() => {
        const newQuantity = productQuantity + 1;
        onUpdateQuantity(newQuantity, product.attributes || null);
        setProductQuantity(newQuantity);
        setLoadingQuantity(false);
      }, 500);
    }
  };

  const handleRemoveItem = () => {
    if (!loadingQuantity) {
      setLoadingQuantity(true);
      setTimeout(() => {
        onRemoveItem(product.code, product.attributes || null);
        setProductQuantity(1);
        setLoadingQuantity(false);
      }, 500);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {product.images && (
        <Link
          href={`/magaza/${product.mainCategory_slug}/${product.category_slug}/${product.slug}`}
          title={`${product.brand || ""} ${product.title}`}
          className={`relative  rounded-2xl shadow-lg shadow-gray-400 dark:shadow-gray-800 overflow-hidden transition-all duration-300 hover:scale-95 ${
            !isDetail
              ? "lg:min-w-[100px] lg:w-[100px] lg:h-[156px] min-w-24 w-24 h-40"
              : "lg:min-w-[150px] lg:w-[150px] lg:h-[234px] min-w-28 w-28 h-44"
          }`}
        >
          <Image
            src={product.images[0]}
            fill
            sizes="(max-width: 768px) 100%, 25%"
            alt={`${product.brand || ""} ${product.title}`}
            title={`${product.brand || ""} ${product.title}`}
            className="object-cover"
          />
          {product && product.stock < 1 && (
            <div className="absolute flex items-center justify-center w-full h-full overflow-hidden bg-black-900/70 animate-pulse">
              <div className="absolute w-full h-full left-0 -z-10 bg-site/30"></div>
              <span className="text-white font-gemunu lg:text-xl text-center text-xl font-medium tracking-wider -rotate-[35deg]">
                Stokta Yok
              </span>
            </div>
          )}
        </Link>
      )}
      <div className={`flex flex-col justify-around h-full items-start  w-full ${!isDetail ? "gap-2" : "lg:gap-8 gap-4"}`}>
        <div className="flex flex-col gap-2 w-full h-full justify-around">
          <div className={`flex flex-col w-full ${!isDetail ? "gap-1" : "lg:gap-2 gap-1"}`}>
            <Link
              href={`/magaza/${product.mainCategory_slug}/${product.category_slug}/${product.slug}`}
              title={`${product.brand || ""} ${product.title}`}
              className={`font-medium line-clamp-1 transition-all duration-300 hover:text-site w-fit ${
                !isDetail ? "text-base" : "lg:text-2xl text-xl"
              }`}
            >
              <span className="font-bold tracking-wide">
                {product.brand || ""}
              </span>{" "}
              {product.title}
            </Link>
            <span
              className={`text-gray-500 ${!isDetail ? "text-xs" : "text-base"}`}
            >
              {product.mainCategory}
              {product.category && ` / ${product.category}`}
            </span>
            <div
              className={`flex  flex-wrap gap-x-2 gap-y-1 line-clamp-2 max-w-full ${
                !isDetail ? "text-xs" : "text-base"
              }`}
            >
              {product.attributes &&
                product.attributes?.map((attr, key) => (
                  <div
                    key={key}
                    className="flex after:content-[','] last:after:content-none max-w-full"
                  >
                    <div className="flex items-center gap-1 min-w-max">
                      <span>{attr?.attr_title} :</span>
                      <span>{attr?.attr_option}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div
            className={`flex items-center  gap-2 ${
              !isDetail ? "text-sm" : "lg:text-lg text-base"
            }`}
          >
            <span
              className={`font-medium ${
                product.discount > 0 ? "text-green-500 text-base" : ""
              } ${!isDetail ? "" : "lg:!text-2xl !text-xl"}`}
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
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between gap-3 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-1">
            <CustomButton
              handleClick={
                product.stock > 0 && productQuantity > 1
                  ? decreaseQuantity
                  : handleRemoveItem
              }
              containerStyles="bg-white dark:bg-zinc-800 p-2 border border-gray-200 dark:border-zinc-800 rounded-lg transition-all duration-300 group hover:text-white hover:bg-site dark:hover:bg-site"
              leftIcon={
                !loadingQuantity ? (
                  productQuantity > 1 ? (
                    <IoRemove className="text-lg" />
                  ) : (
                    <IoBagRemoveOutline className="text-lg" />
                  )
                ) : (
                  <div className="animate-spin rounded-full m-0.5 h-[14px] w-[14px] border-t-2 border-b-2 border-gray-500 group-hover:border-white"></div>
                )
              }
            />
            <span className={`select-none ${!isDetail ? "text-base" : "lg:text-xl text-base"}`}>{productQuantity}</span>
            <CustomButton
              handleClick={
                product.stock > productQuantity ? increaseQuantity : undefined
              }
              containerStyles={`bg-white dark:bg-zinc-800 p-2 border border-gray-200 dark:border-zinc-800 rounded-lg transition-all duration-300 group ${
                product.stock > productQuantity
                  ? "hover:text-white hover:bg-site dark:hover:bg-site"
                  : "opacity-50 cursor-not-allowed"
              }`}
              leftIcon={
                !loadingQuantity ? (
                  <IoAdd className="text-lg" />
                ) : (
                  <div className="animate-spin rounded-full m-0.5 h-[14px] w-[14px] border-t-2 border-b-2 border-gray-500 group-hover:border-white"></div>
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketProductItem;
