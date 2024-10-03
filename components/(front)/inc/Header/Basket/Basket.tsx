"use client";
import { useGlobalContext } from "@/app/Context/store";
import { getPrice } from "@/lib/functions/getPrice";
import CustomButton from "@/components/others/CustomButton";
import React, { useEffect, useState } from "react";
import { IoBagHandleOutline, IoBagHandle } from "react-icons/io5";
import { productTypes } from "@/types/product/productTypes";
import { getProducts } from "@/lib/utils/Product/getProducts";

function Basket() {
  const { setSidebarStatus, basketItems } = useGlobalContext();
  const [basketItemCount, setBasketItemCount] = useState<number>(0);
  const [BasketIcon, setBasketIcon] = useState(
    <IoBagHandleOutline className="text-xl max-lg:text-2xl" />
  );
  const [basketTotalPrice, setBasketTotalPrice] = useState(0);
  const [pingAnimation, setPingAnimation] = useState(false);
  const [products, setProducts] = useState<productTypes[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (basketItems && basketItems.length > 0) {
      const totalPrice = basketItems.reduce((total, basketItem) => {
        const matchedProduct = products.find(
          (product) => product.code === basketItem.product_code
        );

        if (matchedProduct) {
          return total + matchedProduct.price * basketItem.quantity;
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
  }, [basketItems, products]);

  useEffect(() => {
    if (basketItemCount > 0) {
      setBasketIcon(<IoBagHandle className="text-xl max-lg:text-2xl" />);
    } else {
      setBasketIcon(<IoBagHandleOutline className="text-xl max-lg:text-2xl" />);
    }
  }, [basketItemCount]);

  useEffect(() => {
    if (basketItemCount > 0) {
      setPingAnimation(true);
      const timeout = setTimeout(() => setPingAnimation(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [basketItemCount]);

  return (
    <div
      className={`relative flex items-center rounded-full lg:hover:scale-110 transition-all duration-200 h-full cursor-pointer ${
        pingAnimation ? "scale-125" : ""
      }`}
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
        id="basket-icon"
        leftIcon={BasketIcon}
        containerStyles={`p-2 border transition-all duration-300 ${
          basketItemCount > 0
            ? "text-site border-site/30 max-lg:rounded-full lg:rounded-xl lg:rounded-tl-none lg:rounded-bl-none lg:border-l-0"
            : "border-gray-200 dark:border-zinc-700 dark:text-gray-200 rounded-full"
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
