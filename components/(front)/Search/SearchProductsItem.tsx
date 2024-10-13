"use client";
import { useGlobalContext } from "@/app/Context/store";
import addToBasket from "@/lib/functions/addToBasket";
import { getPrice } from "@/lib/functions/getPrice";
import CustomButton from "@/components/others/CustomButton";
import { productTypes } from "@/types/product/productTypes";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IoBagAddOutline,
  IoBagCheck,
  IoBanOutline,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";
import { basketItemTypes } from "@/types/product/basketItemTypes";
import toggleToFavorite from "@/lib/functions/toggleToFavorite";
import ModalProductDetail from "@/components/modals/ModalProductDetail";
import { getProductShow } from "@/lib/utils/Product/getProductShow";
import { siteURL } from "@/constants/(front)";

interface IFavoriteProductItemProps {
  product: productTypes;
}

function SearchProductItem({ product }: IFavoriteProductItemProps) {
  const [loadingAddToFavorite, setLoadingAddToFavorite] = useState(false);
  const [loadingAddToBasket, setLoadingAddToBasket] = useState(false);
  const [showProductArea, setShowProductArea] = useState(false);
  const [productDetail, setProductDetail] = useState<
    productDetailTypes | undefined
  >();
  const {
    favoriteItems,
    setFavoriteItems,
    setBasketItems,
    isMobile,
    setSidebarStatus,
  } = useGlobalContext();

  const [FavoriteIcon, setFavoriteIcon] = useState(
    <IoHeartOutline className="text-xl group-hover/favorite:text-white dark:text-gray-200" />
  );

  const handleAddToFavorite = (e: any) => {
    e.preventDefault();
    if (!loadingAddToFavorite) {
      setLoadingAddToFavorite(true);
      setTimeout(() => {
        toggleToFavorite(product.code, favoriteItems, setFavoriteItems);
        setLoadingAddToFavorite(false);
      }, 1000);
    }
  };

  const handleAddToBasket = (e: any) => {
    e.preventDefault();

    if (product) {
      const item: basketItemTypes = {
        product_code: product.code,
        quantity: 1,
        attributes: null,
      };

      if (!loadingAddToBasket) {
        setLoadingAddToBasket(true);
        setTimeout(() => {
          if (!product.choise_required) {
            addToBasket(item, setBasketItems);
          } else {
            handleShowProductArea(e);
          }
          setLoadingAddToBasket(false);
        }, 1000);
      }
    }
  };

  const handleShowProductArea = async (e: any) => {
    e.preventDefault();
    setShowProductArea(true);
    try {
      const fetchedProductDetail = await getProductShow(product.slug);
      setProductDetail(fetchedProductDetail);
    } catch (error) {
      console.error("Failed to fetch product details", error);
    }
  };

  useEffect(() => {
    setFavoriteIcon(
      product && favoriteItems?.includes(product.code) ? (
        <IoHeart className="text-xl text-red-500 group-hover/favorite:text-white" />
      ) : (
        <IoHeartOutline className="text-xl text-gray-600 dark:text-gray-200 group-hover/favorite:text-white" />
      )
    );
  }, [favoriteItems]);

  const categorySlug = product.category_slug ? `/${product.category_slug}` : "";
  const subCategorySlug = product.subCategory_slug
    ? `/${product.subCategory_slug}`
    : "";
  const redirect = `${siteURL}/magaza/${product?.mainCategory_slug}${categorySlug}${subCategorySlug}/${product.slug}`;

  return (
    <>
      {showProductArea && (
        <ModalProductDetail
          productDetail={productDetail}
          onClose={() => setShowProductArea(false)}
        />
      )}
      <div className="flex gap-4 items-center lg:h-[156px] h-40">
        {product.images && (
          <Link
            href={redirect}
            title={`${product.brand || ""} ${product.title}`}
            className="relative lg:min-w-[100px] lg:w-[100px] lg:h-[156px] min-w-24 w-24 h-40 rounded-2xl shadow-lg shadow-gray-400 dark:shadow-gray-800 overflow-hidden transition-all duration-300 hover:scale-95"
            onClick={() => setSidebarStatus("")}
          >
            <Image
              src={
                isMobile
                  ? product.images[0].thumbnail
                  : product.images[0].original
              }
              fill
              sizes="(max-width: 768px) 100%, 25%"
              alt={`${product.brand || ""} ${product.title}`}
              title={`${product.brand || ""} ${product.title}`}
              className="object-cover"
            />
          </Link>
        )}
        <div className="flex flex-col justify-around h-full items-start gap-2 w-full">
          <div className="flex flex-col gap-2 w-full h-full justify-around">
            <div className="flex flex-col w-full gap-1">
              <Link
                href={redirect}
                title={`${product.brand || ""} ${product.title}`}
                className="font-medium line-clamp-1 transition-all duration-300 hover:text-site text-base w-fit"
                onClick={() => setSidebarStatus("")}
              >
                <span className="font-bold tracking-wide text-site">
                  {product.brand || ""}
                </span>{" "}
                {product.title}
              </Link>
              <span className="text-xs text-gray-600 dark:text-gray-500 font-medium">
                # {product.code}
              </span>
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
          <div className="flex items-center gap-2 w-full">
            <CustomButton
              title={
                product.stock > 0
                  ? !loadingAddToBasket
                    ? "Sepete Ekle"
                    : "Sepete Ekleniyor.."
                  : "Stokta Yok"
              }
              leftIcon={
                product.stock > 0 ? (
                  !loadingAddToBasket ? (
                    <IoBagAddOutline className="text-xl max-lg:text-base" />
                  ) : (
                    <IoBagCheck className="text-xl max-lg:text-base" />
                  )
                ) : (
                  <IoBanOutline className="text-xl max-lg:text-base" />
                )
              }
              textStyles="-mb-0.5"
              containerStyles={`flex items-center w-full gap-2 justify-center py-2 px-2  ${
                product.stock > 0
                  ? "bg-site/80 hover:bg-site text-white"
                  : "bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 opacity-50 cursor-not-allowed"
              } max-lg:text-sm rounded-md transition-all duration-300`}
              handleClick={product.stock > 0 ? handleAddToBasket : undefined}
            />
            <CustomButton
              leftIcon={
                !loadingAddToFavorite ? (
                  FavoriteIcon
                ) : (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-600 group-hover/favorite:border-white"></div>
                )
              }
              textStyles="hidden"
              containerStyles="flex items-center gap-2 justify-center py-2 px-4 bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-200 rounded-md hover:bg-site dark:hover:bg-site hover:text-white transition-all duration-300 group/favorite"
              handleClick={handleAddToFavorite}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchProductItem;
