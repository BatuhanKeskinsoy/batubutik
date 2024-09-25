"use client";
import { useGlobalContext } from "@/app/Context/store";
import CustomButton from "@/components/others/CustomButton";
import React, { useEffect, useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

function Favorite() {
  const { setSidebarStatus, favoriteItems } = useGlobalContext();
  const [favoriteItemCount, setFavoriteItemCount] = useState<number>(0);
  const [FavoriteIcon, setFavoriteIcon] = useState(
    <IoHeartOutline className="text-xl max-lg:text-2xl dark:text-gray-200" />
  );
  const [pingAnimation, setPingAnimation] = useState(false);

  useEffect(() => {
    setFavoriteItemCount(favoriteItems ? favoriteItems.length : 0);
  }, [favoriteItems]);

  useEffect(() => {
    if (favoriteItemCount > 0) {
      setFavoriteIcon(<IoHeart className="text-xl max-lg:text-2xl dark:text-gray-200" />);
    } else {
      setFavoriteIcon(<IoHeartOutline className="text-xl max-lg:text-2xl dark:text-gray-200" />);
    }
  }, [favoriteItemCount]);

  useEffect(() => {
    if (favoriteItemCount > 0) {
      setPingAnimation(true);
      const timeout = setTimeout(() => setPingAnimation(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [favoriteItemCount]);
  return (
    <div
      className={`relative flex items-center rounded-full lg:hover:scale-110 transition-all duration-200 h-full cursor-pointer ${
        pingAnimation ? "scale-125" : ""
      }`}
      onClick={() => setSidebarStatus("Favorite")}
    >
      <CustomButton
        leftIcon={FavoriteIcon}
        containerStyles={`p-2 border transition-all duration-300 ${
          favoriteItemCount > 0
            ? "text-site border-site/30 rounded-full"
            : " border-gray-200 dark:border-zinc-800 rounded-full"
        }`}
      />
      {favoriteItemCount > 0 && (
        <div className="flex items-center justify-center rounded-full min-w-4 absolute -right-1 -top-0.5 text-[10px] bg-site text-white">
          {favoriteItemCount}
        </div>
      )}
    </div>
  );
}

export default Favorite;
