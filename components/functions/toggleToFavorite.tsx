import React from "react";
import { toast } from "react-toastify";

function toggleToFavorite(
  title: string,
  code: string,
  favoriteItems: string[] | null,
  setFavoriteItems: React.Dispatch<React.SetStateAction<string[] | null>>
) {
  if (!favoriteItems) {
    const updatedfavoriteItems = [code];
    localStorage.setItem("favoriteItems", JSON.stringify(updatedfavoriteItems));
    setFavoriteItems(updatedfavoriteItems);
    toast.success(`${title} favori listenize eklendi.`)
  } else {
    const isAlreadyFavorite = favoriteItems.includes(code);
    if (isAlreadyFavorite) {
      const updatedfavoriteItems = favoriteItems.filter(
        (item) => item !== code
      );
      localStorage.setItem(
        "favoriteItems",
        JSON.stringify(updatedfavoriteItems)
      );
      setFavoriteItems(updatedfavoriteItems);
      toast.warning(`${title} favori listenizden çıkarıldı.`)
    } else {
      const updatedfavoriteItems = [...favoriteItems, code];
      localStorage.setItem(
        "favoriteItems",
        JSON.stringify(updatedfavoriteItems)
      );
      setFavoriteItems(updatedfavoriteItems);
      toast.success(`${title} favori listenize eklendi.`)
    }
  }
}

export default toggleToFavorite;
