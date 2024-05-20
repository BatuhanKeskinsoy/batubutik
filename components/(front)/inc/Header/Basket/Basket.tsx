"use client";
import { useGlobalContext } from "@/app/Context/store";
import { getPrice } from "@/components/functions/getPrice";
import CustomButton from "@/components/others/CustomButton";
import { instantProducts } from "@/constants/(front)";
import React, { useEffect, useState } from "react";
import { IoBagHandleOutline, IoBagHandle } from "react-icons/io5";

function Basket() {
  const { setSidebarStatus, basketItems } = useGlobalContext();
  const [basketItemCount, setBasketItemCount] = useState<number>(0);
  const [BasketIcon, setBasketIcon] = useState(
    <IoBagHandleOutline className="text-xl" />
  );
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);

  useEffect(() => {
    if (basketItems && basketItems.length > 0) {
      const totalPrice = basketItems.reduce((total, basketItem) => {
        const matchedProduct = instantProducts.find(
          (product) => product.code === basketItem.product_code
        );

        if (matchedProduct) {
          return total + matchedProduct.amount * basketItem.quantity;
        }
        return total;
      }, 0);

      const totalQuantity = basketItems.reduce((total, basketItem) => {
        return total + basketItem.quantity;
      }, 0);

      setBasketItemCount(totalQuantity);
      setBasketTotalPrice(totalPrice);
    } else {
      setBasketTotalPrice(0);
      setBasketItemCount(0);
    }
  }, [basketItems]);

  useEffect(() => {
    if (basketItemCount > 0) {
      setBasketIcon(<IoBagHandle className="text-xl" />);
    } else {
      setBasketIcon(<IoBagHandleOutline className="text-xl" />);
    }
  }, [basketItemCount]);


  useEffect(() => {
    console.log("basketItems", basketItems);
  }, [basketItems]);
  return (
    <div
      className="relative flex items-center rounded-full lg:hover:scale-110 transition-all duration-300 h-full cursor-pointer"
      onClick={() => setSidebarStatus("Basket")}
    >
      {basketItemCount > 0 && (
        <div className="max-lg:hidden flex flex-col text-sm border border-site/30 rounded-l-xl border-r-0 h-full justify-center pl-4 select-none">
          <span className="-mb-1 font-medium text-site">
            {getPrice(basketTotalPrice)}
          </span>
        </div>
      )}
      <CustomButton
        leftIcon={BasketIcon}
        containerStyles={`p-2 border transition-all duration-300 ${
          basketItemCount > 0
            ? "text-site border-site/30 max-lg:rounded-full lg:rounded-xl lg:rounded-tl-none lg:rounded-bl-none lg:border-l-0"
            : " border-gray-200 rounded-full"
        }`}
      />
      {basketItemCount > 0 && (
        <div className="flex items-center justify-center rounded-full min-w-4 absolute -right-1 -top-0.5 text-[10px] bg-site text-white">
          {basketItemCount}
        </div>
      )}
    </div>
  );
}

export default Basket;
