import React from "react";

function toggleToFavorite(
  code: string,
  favoriteItems: string[] | null,
  setFavoriteItems: React.Dispatch<React.SetStateAction<string[] | null>>
) {
  if (!favoriteItems) {
    const updatedfavoriteItems = [code];
    localStorage.setItem("favoriteItems", JSON.stringify(updatedfavoriteItems));
    setFavoriteItems(updatedfavoriteItems);
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
    } else {
      const updatedfavoriteItems = [...favoriteItems, code];
      localStorage.setItem(
        "favoriteItems",
        JSON.stringify(updatedfavoriteItems)
      );
      setFavoriteItems(updatedfavoriteItems);
    }
  }
}

export default toggleToFavorite;
