"use client";
import { getPrice } from "@/components/functions/getPrice";
import CustomButton from "@/components/others/CustomButton";
import { basketProductTypes } from "@/types/product/basketProductTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoAdd, IoBagRemoveOutline, IoRemove } from "react-icons/io5";

interface IBasketProductItemProps {
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
      <div className="flex flex-col justify-around h-full items-start gap-2 w-full">
        <div className="flex flex-col gap-2 w-full h-full justify-around">
          <div className="flex flex-col w-full gap-1">
            <Link
              href={"/"}
              title={product.title}
              className="font-medium line-clamp-1 transition-all duration-300 hover:text-site text-lg"
            >
              {product.title}
            </Link>
            <span className="text-sm text-gray-600">{product.category}</span>
            <div className="flex text-xs flex-wrap gap-x-2 gap-y-1 line-clamp-2 max-w-full">
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
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between gap-3 bg-gray-100 border border-gray-200 rounded-lg p-1">
            <CustomButton
              handleClick={
                product.stock > 0 && productQuantity > 1
                  ? decreaseQuantity
                  : handleRemoveItem
              }
              containerStyles={`bg-white p-1 border border-gray-200 rounded-lg transition-all duration-300 hover:text-white hover:bg-site group`}
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
            <span className="select-none">{productQuantity}</span>
            <CustomButton
              handleClick={
                product.stock > productQuantity ? increaseQuantity : undefined
              }
              containerStyles={`bg-white p-1 border border-gray-200 rounded-lg transition-all duration-300 group ${
                product.stock > productQuantity
                  ? "hover:text-white hover:bg-site"
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
