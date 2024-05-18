import React from "react";
import { toast } from "react-toastify";

function addToBasket(
  code: string | string[] | null,
  setBasketItems: React.Dispatch<React.SetStateAction<string[] | null>>
) {
  const localStorageBasket = localStorage.getItem("basketItems");
  let basketItems: string[] | null = null;
  if (localStorageBasket) {
    basketItems = JSON.parse(localStorageBasket);
  }
  const updatedBasketItems = basketItems
    ? Array.isArray(code)
      ? code.filter((item) => item !== null)
      : code !== null
      ? [...basketItems, code]
      : [...basketItems]
    : Array.isArray(code)
    ? code.filter((item) => item !== null)
    : code !== null
    ? [code]
    : [];
    
  localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));
  setBasketItems(updatedBasketItems);
  toast.success("Sepetinize Eklendi");
}

export default addToBasket;
