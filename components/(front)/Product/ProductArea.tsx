"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getStar } from "@/components/functions/getStar";
import { getPrice } from "@/components/functions/getPrice";
import Link from "next/link";
import CustomButton from "@/components/others/CustomButton";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import {
  IoAdd,
  IoBagAddOutline,
  IoBagCheck,
  IoBanOutline,
  IoHeart,
  IoHeartOutline,
  IoRemove,
} from "react-icons/io5";
import addToBasket from "@/components/functions/addToBasket";
import { useGlobalContext } from "@/app/Context/store";
import toggleToFavorite from "@/components/functions/toggleToFavorite";

interface IProductAreaProps {
  product: productDetailTypes | undefined;
}

function ProductArea({ product }: IProductAreaProps) {
  const { setBasketItems, favoriteItems, setFavoriteItems } =
    useGlobalContext();
  const [loadingQuantity, setLoadingQuantity] = useState(false);
  const [loadingAddToBasket, setLoadingAddToBasket] = useState(false);
  const [loadingAddToFavorite, setLoadingAddToFavorite] = useState(false);

  const [FavoriteIcon, setFavoriteIcon] = useState(
    <IoHeartOutline className="text-3xl" />
  );
  const [currentProductImage, setCurrentProductImage] = useState<string | null>(
    product && product.images ? product.images[0] : null
  );
  const [productQuantity, setProductQuantity] = useState(1);

  const handleChangeCurrentImage = (image: string) => {
    setCurrentProductImage(image);
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsHovered(true);
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const decreaseQuantity = () => {
    if (!loadingQuantity && product) {
      setLoadingQuantity(true);
      setTimeout(() => {
        const newQuantity = Math.max(1, productQuantity - 1);
        setProductQuantity(newQuantity);
        /* setBasketItems((prevItems) => {
          if (!prevItems) return null;
          const index = prevItems.lastIndexOf(product.code);
          if (index !== -1) {
            const newItems = [...prevItems];
            newItems.splice(index, 1);
            localStorage.setItem("basketItems", JSON.stringify(newItems));
            return newItems;
          }
          return prevItems;
        }); */
        setLoadingQuantity(false);
      }, 500);
    }
  };

  const increaseQuantity = () => {
    if (!loadingQuantity && product) {
      setLoadingQuantity(true);
      setTimeout(() => {
        const newQuantity = productQuantity + 1;
        setProductQuantity(newQuantity);
        /* setBasketItems((prevItems) => {
          if (!prevItems) return [product.code];
          const newItems = [...prevItems, product.code];
          localStorage.setItem("basketItems", JSON.stringify(newItems));
          return newItems;
        }); */
        setLoadingQuantity(false);
      }, 500);
    }
  };

  const handleAddToBasket = (e: any) => {
    e.preventDefault();
    if (!loadingAddToBasket && product) {
      setLoadingAddToBasket(true);
      setTimeout(() => {
        for (let i = 0; i < productQuantity; i++) {
          addToBasket(product.code, setBasketItems);
        }
        setProductQuantity(1);
        setLoadingAddToBasket(false);
      }, 1000);
    }
  };

  const handleAddToFavorite = (e: any) => {
    e.preventDefault();
    if (!loadingAddToBasket && product) {
      setLoadingAddToFavorite(true);
      setTimeout(() => {
        toggleToFavorite(
          product.title,
          product.code,
          favoriteItems,
          setFavoriteItems
        );
        setLoadingAddToFavorite(false);
      }, 1000);
    }
  };

  useEffect(() => {
    setFavoriteIcon(
      product && favoriteItems?.includes(product.code) ? (
        <IoHeart className="text-3xl text-red-500 group-hover/favorite:text-white" />
      ) : (
        <IoHeartOutline className="text-3xl text-gray-600 group-hover/favorite:text-white" />
      )
    );
  }, [favoriteItems]);

  return (
    <div className="flex lg:flex-row flex-col h-full w-full">
      <div className="flex lg:flex-row flex-col h-full min-h-[calc(100vh-22%)]">
        {product?.images && product.images?.length > 1 && (
          <div className="flex lg:flex-col gap-1 p-1 max-h-full min-h-[164px] overflow-auto scrollbar-thick lg:order-1 order-2">
            {product.images?.map((image, key) => (
              <div
                key={key}
                className="relative min-w-[100.6px] min-h-[calc(25%-3px)] h-[calc(25%-3px)] max-lg:h-full cursor-pointer"
                onClick={() => handleChangeCurrentImage(image)}
              >
                <Image
                  src={image}
                  fill
                  sizes="(max-width: 768px) 100%, 25%"
                  alt={product.title}
                  title={product.title}
                  className={`object-cover object-center transition-all duration-300 ${
                    currentProductImage !== image
                      ? "brightness-50 hover:brightness-100"
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        {currentProductImage && (
          <div
            className={`relative w-[500px] max-w-full h-full overflow-hidden cursor-crosshair lg:order-2 order-1 ${
              product?.images && product.images?.length > 4 ? "lg:ml-1" : ""
            }`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={currentProductImage}
                fill
                sizes="(max-width: 768px) 100%, 50%"
                alt={product ? product.title : "Ürün Başlığı"}
                title={product ? product.title : "Ürün Başlığı"}
                className={`object-cover origin-top-left`}
                style={{
                  top: isHovered ? `-${(mousePosition.y / 200) * 200}px` : 0,
                  left: isHovered ? `-${(mousePosition.x / 200) * 200}px` : 0,
                  transform: isHovered ? `scale(2)` : `scale(1)`,
                }}
              />
            </div>

            {product && product.stock < 1 && (
              <div className="absolute flex items-center justify-center w-full h-full overflow-hidden bg-black-900/70 animate-pulse">
                <span className="text-white font-gemunu lg:text-5xl text-2xl font-medium tracking-wider -rotate-[35deg]">
                  Stokta Yok
                </span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="lg:px-6 px-4 py-6 w-full lg:overflow-y-auto">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2 w-full">
              <span className="textbase text-gray-600">
                {product?.category}
              </span>
              <Link
                href={"/"}
                title={product?.title}
                className="font-medium text-2xl transition-all duration-300 hover:text-site"
              >
                {product?.title}
              </Link>
            </div>
            {product?.rating && (
              <>
                {(() => {
                  const size = 20;
                  return (
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1 items-center min-w-max">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div
                            key={index}
                            className={`relative min-w-[${size}px] w-[${size}px] h-[${size}px]`}
                          >
                            {getStar(index + 1, product.rating || 0, size)}
                          </div>
                        ))}
                      </div>
                      <p className={`-mb-1`} style={{ fontSize: size - 4 }}>
                        ({product.rating})
                      </p>
                      <CustomButton
                        title={`${product.total_comment} Değerlendirme`}
                        containerStyles="flex -mb-1 font-medium transition-all duration-300 hover:text-site"
                      />
                    </div>
                  );
                })()}
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3">
              <span
                className={`font-medium text-2xl ${
                  product && product.discount > 0 ? "text-green-500" : ""
                }`}
              >
                {getPrice(product ? product.amount : 0)}
              </span>
              {product && product.discount > 0 && (
                <>
                  <span className="line-through font-light text-lg text-gray-400">
                    {getPrice(
                      (product.discount * product.amount) / 100 + product.amount
                    )}{" "}
                  </span>
                  <span className="flex px-4 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                    %{product.discount} İndirim
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            {product?.product_group && (
              <div className="flex flex-col gap-2">
                <span>{product.product_group.group_name} :</span>
                <div className="flex flex-wrap gap-2 items-center">
                  {product.product_group.products.map((item, key) => (
                    <div
                      key={key}
                      className="p-2 bg-gray-200 overflow-hidden rounded-md cursor-pointer hover:bg-site/20 transition-all duration-300 group"
                    >
                      <div className="flex flex-col text-center gap-2 w-full">
                        {product.images && (
                          <div className="relative w-20 h-28 overflow-hidden rounded-md">
                            <Image
                              src={product.images[key]}
                              alt="Grup Ürünü"
                              fill
                              sizes="64px"
                              title="Grup Ürünü"
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="text-xs group-hover:text-site transition-all duration-300 line-clamp-1">
                          {item.choise_name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {product?.attributes &&
              product.attributes.map((attribute, key) => (
                <div key={key} className="flex flex-col gap-2">
                  <span>{attribute.attr_title} : </span>
                  <div className="flex gap-2 flex-wrap">
                    {attribute.attr_options?.map((attr, key) => (
                      <AttrOptions
                        key={key}
                        option_name={attr.option_name}
                        option_stock={attr.option_stock}
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex lg:flex-row flex-col items-center w-full lg:gap-2 gap-4">
            <div className="flex items-center w-full gap-2 h-[50px]">
              <div className="flex items-center justify-between gap-3 bg-gray-100 border border-gray-200 rounded-lg p-1 h-full">
                <CustomButton
                  handleClick={
                    product && product.stock > 0 && productQuantity > 1
                      ? decreaseQuantity
                      : undefined
                  }
                  containerStyles={`bg-white h-full px-2 border border-gray-200 rounded-lg transition-all duration-300 group ${
                    product && product.stock > 0 && productQuantity > 1
                      ? "hover:text-white hover:bg-site"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  leftIcon={
                    !loadingQuantity ? (
                      <IoRemove className="text-xl" />
                    ) : (
                      <div className="animate-spin rounded-full m-0.5 h-[16px] w-[16px] border-t-2 border-b-2 border-gray-500 group-hover:border-white"></div>
                    )
                  }
                />
                <span className="select-none">{productQuantity}</span>
                <CustomButton
                  handleClick={
                    product && product.stock > 0 ? increaseQuantity : undefined
                  }
                  containerStyles={`bg-white h-full px-2 border border-gray-200 rounded-lg transition-all duration-300 group ${
                    product && product.stock > 0
                      ? "hover:text-white hover:bg-site"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  leftIcon={
                    !loadingQuantity ? (
                      <IoAdd className="text-xl" />
                    ) : (
                      <div className="animate-spin rounded-full m-0.5 h-[16px] w-[16px] border-t-2 border-b-2 border-gray-500 group-hover:border-white"></div>
                    )
                  }
                />
              </div>
              <CustomButton
                title={
                  product && product.stock > 0
                    ? !loadingAddToBasket
                      ? "Sepete Ekle"
                      : "Sepete Eklendi"
                    : "Stokta Yok"
                }
                leftIcon={
                  product && product.stock > 0 ? (
                    !loadingAddToBasket ? (
                      <IoBagAddOutline className="text-xl" />
                    ) : (
                      <IoBagCheck className="text-xl" />
                    )
                  ) : (
                    <IoBanOutline className="text-xl" />
                  )
                }
                textStyles="-mb-0.5"
                containerStyles={`flex items-center w-full gap-2 justify-center h-full px-2 ${
                  product && product.stock > 0
                    ? loadingAddToBasket
                      ? "bg-green-500 text-white"
                      : "bg-site/80 hover:bg-site text-white"
                    : "bg-gray-200 text-gray-600 opacity-50 cursor-not-allowed"
                } rounded-md transition-all duration-300`}
                handleClick={
                  product && product.stock > 0 ? handleAddToBasket : undefined
                }
              />
            </div>
            <CustomButton
              title="Favorilere Ekle"
              textStyles="lg:hidden"
              containerStyles="flex items-center justify-center gap-2 max-lg:w-full px-4 bg-gray-100 border border-gray-200 text-gray-600 rounded-md h-[50px] transition-all duration-300 hover:bg-site hover:border-site hover:text-white h-[50px] group/favorite"
              leftIcon={
                !loadingAddToFavorite ? (
                  FavoriteIcon
                ) : (
                  <div className="animate-spin rounded-full h-[30px] w-[30px] border-t-2 border-b-2 border-gray-600 group-hover/favorite:border-white"></div>
                )
              }
              handleClick={handleAddToFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AttrOptions({
  option_name,
  option_stock,
}: {
  option_name: string;
  option_stock: number;
}) {
  const noStock = option_stock === 0;
  return (
    <CustomButton
      title={option_name}
      containerStyles={`flex py-2 px-4 rounded-md border border-gray-200 ${
        !noStock
          ? "cursor-pointer hover:bg-site/10 hover:text-site hover:border-site/30"
          : "bg-gray-200 border-transparent line-through opacity-50 cursor-not-allowed"
      }  transition-all duration-300 text-sm`}
    />
  );
}

export default ProductArea;
