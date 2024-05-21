"use client";
import { useGlobalContext } from "@/app/Context/store";
import addToBasket from "@/components/functions/addToBasket";
import toggleToFavorite from "@/components/functions/toggleToFavorite";
import { getPrice } from "@/components/functions/getPrice";
import { getStar } from "@/components/functions/getStar";
import CustomButton from "@/components/others/CustomButton";
import { productTypes } from "@/types/product/productTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  IoBagAddOutline,
  IoCloseOutline,
  IoExpand,
  IoHeart,
  IoHeartOutline,
} from "react-icons/io5";
import ProductArea from "@/components/(front)/Product/ProductArea";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import { instantProductDetail } from "@/constants/(front)";
import { basketItemTypes } from "@/types/product/basketItemTypes";

interface IProductItemProps {
  product: productTypes;
  height: number;
  mobileHeight: number;
}

function ProductItem({ product, height, mobileHeight }: IProductItemProps) {
  const [productDetail, setProductDetail] = useState<
    productDetailTypes | undefined
  >();
  const [loadingAddToBasket, setLoadingAddToBasket] = useState(false);
  const [loadingAddToFavorite, setLoadingAddToFavorite] = useState(false);
  const { isMobile, favoriteItems, setBasketItems, setFavoriteItems } =
    useGlobalContext();
  const [isHovered, setIsHovered] = useState(false);
  const [productImage, setProductImage] = useState(
    product.images ? product.images[0] : null
  );
  const [FavoriteIcon, setFavoriteIcon] = useState(
    <IoHeartOutline className="text-xl" />
  );
  const [showProductArea, setShowProductArea] = useState(false);

  const productRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [position, setPosition] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  });

  const handleMouseEnter = (index: number) => {
    if (product.images) {
      setProductImage(product.images[index]);
    }
  };

  const handleMouseLeave = () => {
    if (product.images) {
      setProductImage(product.images[0]);
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

      if (product.choise_required || !loadingAddToBasket) {
        setLoadingAddToBasket(true);

        const productElement = productRef.current;
        const basketElement = document.getElementById("basket-icon");

        if (productElement && basketElement) {
          const productRect = productElement.getBoundingClientRect();
          const basketRect = basketElement.getBoundingClientRect();

          const startX = productRect.left;
          const startY = productRect.top;
          const endX = basketRect.left + basketRect.width / 2;
          const endY = basketRect.top + basketRect.height / 2;

          if (!product.choise_required) {
            setPosition({ startX, startY, endX, endY });
            setAnimate(true);
          }

          if (!product.choise_required) {
            setTimeout(() => {
              addToBasket(item, setBasketItems);
              setAnimate(false);
              setPosition({
                startX: 0,
                startY: 0,
                endX: 0,
                endY: 0,
              });
              setLoadingAddToBasket(false);
            }, 1000);
          } else {
            handleShowProductArea(e);
          }
        } else {
          console.error("Product or Basket element not found");
          setLoadingAddToBasket(false);
        }
      }
    }
  };

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

  useEffect(() => {
    setFavoriteIcon(
      favoriteItems?.includes(product.code) ? (
        <IoHeart className="text-xl text-red-500 group-hover/favorite:text-white" />
      ) : (
        <IoHeartOutline className="text-xl text-gray-600 group-hover/favorite:text-white" />
      )
    );
  }, [favoriteItems]);

  const handleShowProductArea = (e: any) => {
    e.preventDefault();
    setShowProductArea(true);
    setProductDetail(instantProductDetail);
  };

  useEffect(() => {
    showProductArea
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [showProductArea]);

  return (
    <>
      {showProductArea && (
        <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-10">
          <div
            className={`bg-gray-900/60 w-screen h-screen fixed left-0 top-0 transition-all duration-300 animate-sidebarBgSmooth z-10`}
            onClick={() => setShowProductArea(false)}
          ></div>
          <div
            className={`relative bg-white rounded-sm 2xl:w-[calc(100vw-34%)] xl:w-[calc(100vw-250px)] lg:w-[calc(100vw-250px)] lg:h-[calc(100dvh-18%)] w-screen h-screen shadow-lg shadow-gray-600 transition-all duration-300 animate-modalContentSmooth z-20`}
          >
            <CustomButton
              containerStyles="absolute lg:-right-4 lg:-top-4 right-6 top-6 text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300 z-10 bg-white rounded-full "
              leftIcon={<IoCloseOutline className="text-4xl" />}
              handleClick={() => setShowProductArea(false)}
            />
            <div className=" w-full h-full lg:overflow-hidden overflow-y-auto">
              <ProductArea product={productDetail} />
            </div>
          </div>
        </div>
      )}
      <div className="relative flex flex-col w-full">
        <Link
          href="/magaza/kategori/urun"
          className="flex flex-col gap-3 w-full group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative flex flex-col justify-center items-center w-full">
            <div
              ref={productRef}
              className={`absolute bg-red-500 z-10 rounded-xl w-[0%] h-[0%] overflow-hidden`}
              style={{
                transform: `translate(${position.endX - position.startX}px, ${
                  position.endY - position.startY
                }px) scale(${!animate ? 1 : 0})`,
                visibility: animate ? "visible" : "hidden",
                scale: animate ? "1" : "1.05",
                transition:
                  "transform 0.7s 0.3s ease-in-out, filter 0.3s ease-in-out, scale 0.3s ease-in-out",
                width: animate ? "100%" : "0%",
                height: animate ? "100%" : "0%",
              }}
            >
              {animate && (
                <div className="relative w-full h-full">
                  <Image
                    src={product.images ? product.images[0] : ""}
                    alt="add to cart product"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            <div
              className={`relative w-full rounded-lg overflow-hidden`}
              style={{ height: `${!isMobile ? height : mobileHeight}px` }}
            >
              {product.images && product.images.length > 0 && (
                <Image
                  src={productImage ? productImage : product.images[0]}
                  fill
                  sizes="(max-width: 768px) 100%, 25%"
                  alt={product.title}
                  title={product.title}
                  className={`object-cover object-center transition-all duration-300`}
                />
              )}

              {product.stock < 1 && (
                <div className="absolute flex items-center justify-center w-full h-full overflow-hidden bg-black-900/70 animate-pulse">
                  <span className="text-white font-gemunu lg:text-5xl text-2xl text-center font-medium tracking-wider -rotate-[35deg]">
                    Stokta Yok
                  </span>
                </div>
              )}

              {!isMobile && product.images && product.images.length > 1 && (
                <div className="absolute bottom-0 flex items-end w-full h-full overflow-hidden">
                  {product.images.map((__, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex items-end pb-2 group/images"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="flex w-full h-1 bg-gray-200 rounded-full shadow-md shadow-gray-200 group-hover/images:bg-site transition-all mx-1 group-first/images:ml-2 group-last/images:mr-2"></span>
                    </div>
                  ))}
                </div>
              )}

              <div
                className={`flex justify-end absolute right-0 top-3`}
                onMouseEnter={() => setIsHovered(true)}
              >
                <div className={`flex flex-col h-fit gap-2`}>
                  <CustomButton
                    containerStyles={`p-1.5 bg-white rounded-md shadow-lg hover:bg-site transition-all duration-300 group/favorite ${
                      !isMobile && isHovered
                        ? "-translate-x-2 opacity-100 hover:scale-110"
                        : !isMobile
                        ? "translate-x-full opacity-0"
                        : "-translate-x-2 opacity-100"
                    }
            `}
                    leftIcon={
                      !loadingAddToFavorite ? (
                        FavoriteIcon
                      ) : (
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-gray-600 group-hover/favorite:border-white"></div>
                      )
                    }
                    handleClick={handleAddToFavorite}
                  />
                  <CustomButton
                    containerStyles={`p-1.5 bg-white rounded-md shadow-lg hover:bg-site hover:text-white transition-all duration-500 ${
                      !isMobile && isHovered
                        ? "-translate-x-2 opacity-100 hover:scale-110"
                        : !isMobile
                        ? "translate-x-full opacity-0"
                        : "-translate-x-2 opacity-100"
                    }
            `}
                    leftIcon={<IoExpand className="text-xl" />}
                    handleClick={handleShowProductArea}
                  />
                </div>
              </div>

              {product.discount > 0 && (
                <div className="flex absolute -left-12 top-4 -rotate-[35deg]">
                  <span className="py-1.5 px-14 bg-green-600 text-white text-sm shadow-lg">
                    %{product.discount} İndirim
                  </span>
                </div>
              )}

              {product.stock > 0 && (
                <div
                  className={`flex justify-center absolute w-full bottom-3`}
                  onMouseEnter={() => setIsHovered(true)}
                >
                  <CustomButton
                    title={
                      product.choise_required || !loadingAddToBasket
                        ? "Sepete Ekle"
                        : "Ekleniyor.."
                    }
                    containerStyles={`flex items-center gap-2 text-sm font-medium tracking-wide px-3 py-2 ${
                      product.choise_required || !loadingAddToBasket
                        ? "bg-white hover:bg-site hover:text-white"
                        : "bg-green-500 text-white !transition-none"
                    } rounded-md shadow-lg transition-all duration-300 ${
                      !isMobile && isHovered
                        ? "lg:-translate-y-4 -translate-y-2 opacity-100"
                        : !isMobile
                        ? "translate-y-full opacity-0"
                        : "lg:-translate-y-4 -translate-y-2 opacity-100"
                    }
            `}
                    textStyles="-mb-0.5"
                    leftIcon={
                      product.choise_required || !loadingAddToBasket ? (
                        <IoBagAddOutline className="text-xl" />
                      ) : (
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                      )
                    }
                    handleClick={handleAddToBasket}
                  />
                </div>
              )}
            </div>
          </div>
          {product.rating && (
            <>
              {(() => {
                const size = 16;
                return (
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 items-center min-w-max">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div
                          key={index}
                          className={`relative min-w-[${size}px] w-[${size}px] h-[${size}px}`}
                        >
                          {getStar(index + 1, product.rating || 0, size)}
                        </div>
                      ))}
                    </div>
                    <p className={`-mb-1`} style={{ fontSize: size - 4 }}>
                      ({product.rating})
                    </p>
                  </div>
                );
              })()}
            </>
          )}
          <div className="flex flex-col w-full gap-1">
            <span className="text-gray-500 text-xs">{product.category}</span>
            <span className="font-medium">{product.title}</span>
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
        </Link>
      </div>
    </>
  );
}

export default ProductItem;
