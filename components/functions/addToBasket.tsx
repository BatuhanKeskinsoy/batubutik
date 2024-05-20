import { basketItemTypes } from "@/types/product/basketItemTypes";
import React from "react";
import { toast } from "react-toastify";

function addToBasket(
  product: basketItemTypes,
  setBasketItems: React.Dispatch<React.SetStateAction<basketItemTypes[] | null>>
) {
  const localStorageBasket = localStorage.getItem("basketItems");
  let basketItems: basketItemTypes[] | null = null;

  if (localStorageBasket) {
    basketItems = JSON.parse(localStorageBasket);
  }

  const newBasketItem: basketItemTypes = {
    product_code: product.product_code,
    quantity: product.quantity,
    attributes: product.attributes,
  };

  const updatedBasketItems: basketItemTypes[] = basketItems
    ? [...basketItems, newBasketItem]
    : [newBasketItem];

  setBasketItems(updatedBasketItems);

  localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));
  toast.success("Sepetinize Eklendi");
}

export default addToBasket;
