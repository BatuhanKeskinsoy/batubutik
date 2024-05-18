"use client";
import { useGlobalContext } from "@/app/Context/store";
import { getPrice } from "@/components/functions/getPrice";
import CustomButton from "@/components/others/CustomButton";
import { basketProductTypes } from "@/types/product/basketProductTypes";
import { productTypes } from "@/types/product/productTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

interface IBasketProductItemProps {
  product: basketProductTypes;
  onUpdateQuantity: (newQuantity: number) => void;
}

function BasketProductItem({
  product,
  onUpdateQuantity,
}: IBasketProductItemProps) {
  const [loadingQuantity, setLoadingQuantity] = useState(false);
  const { setBasketItems } = useGlobalContext();

  const decreaseQuantity = () => {
    if (!loadingQuantity) {
      setLoadingQuantity(true);
      setTimeout(() => {
        const newQuantity = Math.max(1, product.quantity - 1);
        onUpdateQuantity(newQuantity);
        setBasketItems((prevItems) => {
          if (!prevItems) return null;
          const index = prevItems.lastIndexOf(product.code);
          if (index !== -1) {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            localStorage.setItem("basketItems", JSON.stringify(newItems));
            return newItems;
          }
          return prevItems;
        });
        setLoadingQuantity(false);
      }, 500);
    }
  };

  const increaseQuantity = () => {
    if (!loadingQuantity) {
      setLoadingQuantity(true);
      setTimeout(() => {
        const newQuantity = product.quantity + 1;
        onUpdateQuantity(newQuantity);
        setBasketItems((prevItems) => {
          if (!prevItems) return [product.code];
          const newItems = [...prevItems, product.code];
          localStorage.setItem("basketItems", JSON.stringify(newItems));
          return newItems;
        });
        setLoadingQuantity(false);
      }, 500);
    }
  };

  return (
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
          <div className="flex flex-col w-full gap-0.5">
            <Link
              href={"/"}
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
        <div className="flex items-center justify-between gap-3 bg-gray-100 border border-gray-200 rounded-lg p-1">
          <CustomButton
            handleClick={decreaseQuantity}
            containerStyles="p-1 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:text-white hover:bg-site group"
            leftIcon={
              !loadingQuantity ? (
                <IoRemove className="text-lg" />
              ) : (
                <div className="animate-spin rounded-full m-0.5 h-[14px] w-[14px] border-t-2 border-b-2 border-gray-500 group-hover:border-white"></div>
              )
            }
          />
          <span className="select-none">{product.quantity}</span>
          <CustomButton
            handleClick={product.stock > 0 ? increaseQuantity : undefined}
            containerStyles={`bg-white p-1 border border-gray-200 rounded-lg transition-all duration-300 group ${
              product.stock > 0
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
  );
}

export default BasketProductItem;
