"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { getStar } from "@/lib/functions/getStar";
import { getPrice } from "@/lib/functions/getPrice";
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
import addToBasket from "@/lib/functions/addToBasket";
import { useGlobalContext } from "@/app/Context/store";
import toggleToFavorite from "@/lib/functions/toggleToFavorite";
import { basketItemTypes } from "@/types/product/basketItemTypes";
import { siteURL } from "@/constants/(front)";

interface IProductAreaProps {
  product: productDetailTypes | undefined;
  setActiveTab?: Dispatch<SetStateAction<string>>;
  tabMenuRef?: React.RefObject<HTMLDivElement>;
  isDetail?: boolean;
  onClose?: () => void;
}

function ProductArea({
  product,
  setActiveTab,
  tabMenuRef,
  isDetail,
  onClose,
}: IProductAreaProps) {
  const { setBasketItems, favoriteItems, setFavoriteItems, isMobile } =
    useGlobalContext();
  const [loadingQuantity, setLoadingQuantity] = useState(false);
  const [loadingAddToBasket, setLoadingAddToBasket] = useState(false);
  const [loadingAddToFavorite, setLoadingAddToFavorite] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(true);

  const [FavoriteIcon, setFavoriteIcon] = useState(
    <IoHeartOutline className="text-3xl" />
  );
  const [currentProductImage, setCurrentProductImage] = useState<string | null>(
    null
  );
  useEffect(() => {
    setTimeout(() => {
      setLoadingProduct(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setCurrentProductImage(product.images[0]);
    } else {
      setCurrentProductImage(null);
    }
  }, [product]);

  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedAttributes, setSelectedAttributes] = useState<{
    [key: string]: string;
  }>({});

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
        setLoadingQuantity(false);
      }, 500);
    }
  };

  const handleAddToBasket = (e: any) => {
    e.preventDefault();
    if (product) {
      const item: basketItemTypes = {
        product_code: product.code,
        quantity: productQuantity,
        attributes: Object.keys(selectedAttributes).map((attrTitle) => ({
          attr_title: attrTitle,
          attr_option: selectedAttributes[attrTitle],
        })),
      };

      if (!loadingAddToBasket && product) {
        setLoadingAddToBasket(true);
        setTimeout(() => {
          addToBasket(item, setBasketItems);
          setSelectedAttributes({});
          setProductQuantity(1);
          setLoadingAddToBasket(false);
          if (!isDetail && onClose) {
            onClose();
          }
        }, 1000);
      }
    }
  };

  const handleAddToFavorite = (e: any) => {
    e.preventDefault();
    if (!loadingAddToBasket && product) {
      setLoadingAddToFavorite(true);
      setTimeout(() => {
        toggleToFavorite(product.code, favoriteItems, setFavoriteItems);
        setLoadingAddToFavorite(false);
      }, 1500);
    }
  };

  useEffect(() => {
    setFavoriteIcon(
      product && favoriteItems?.includes(product.code) ? (
        <IoHeart className="text-3xl text-red-500 group-hover/favorite:text-white" />
      ) : (
        <IoHeartOutline className="text-3xl text-gray-600 dark:text-gray-200 group-hover/favorite:text-white" />
      )
    );
  }, [favoriteItems]);

  const handleSelectAttribute = (attrTitle: string, optionName: string) => {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attrTitle]: optionName,
    }));
  };

  const allRequiredAttributesSelected = () => {
    if (!product || !product.attributes) return true;
    return product.attributes.every((attr) =>
      attr.required ? selectedAttributes[attr.attr_title] : true
    );
  };

  const handleComments = () => {
    if (setActiveTab) {
      setActiveTab("comments");
    }
    if (tabMenuRef && tabMenuRef.current) {
      window.scrollTo({
        top: tabMenuRef.current.offsetTop - 185,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`flex max-lg:flex-col h-full w-full  ${
        isDetail ? (!isMobile ? "container gap-4" : "container px-0 gap-4") : ""
      }`}
    >
      <div
        className={`relative flex h-full ${isDetail ? "lg:w-2/5" : "lg:w-1/2"}`}
      >
        {loadingProduct && (
          <div className="absolute w-full h-full backdrop-blur-sm z-10 bg-site/10 flex items-center justify-center">
            <div className="animate-spin rounded-full m-0.5 lg:size-32 size-16 border-t-4 border-b-4 border-gray-200 group-hover:border-white"></div>
          </div>
        )}
        {product?.images && product.images?.length > 1 && (
          <div
            className={`flex flex-col gap-1 max-h-full min-w-max pr-1 max-lg:pl-1 overflow-y-auto overflow-x-hidden scrollbar-thick ${
              isDetail ? " max-lg:pt-1" : "p-1"
            }`}
          >
            {product.images?.map((image, key) => (
              <div
                key={key}
                className="relative lg:min-w-[105px] min-w-[80px] lg:min-h-[calc(21%-3px)] lg:h-[calc(21%-3px)] min-h-[calc(25%-3px)] h-[calc(25%-3px)] cursor-pointer"
                onClick={() => handleChangeCurrentImage(image)}
              >
                <Image
                  src={image}
                  fill
                  quality={50}
                  sizes="(max-width: 768px) 30%, 20%"
                  alt={`${product.brand || ""} ${product.title}`}
                  title={`${product.brand || ""} ${product.title}`}
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
            className={`relative w-full max-w-full h-full lg:min-h-[790px] min-h-[510px] overflow-hidden cursor-crosshair ${
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
                quality={100}
                priority
              />
            </div>

            {product && product.stock < 1 && (
              <div className="absolute flex items-center justify-center w-full h-full overflow-hidden bg-black-900/70 animate-pulse">
                <div className="absolute w-full h-full left-0 -z-10 bg-site/30"></div>
                <span className="text-white font-gemunu lg:text-5xl text-2xl text-center font-medium tracking-wider -rotate-[35deg]">
                  Stokta Yok
                </span>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={` w-full lg:overflow-y-auto container mx-auto px-4 ${
          !isDetail ? "lg:px-6 px-4 py-6 lg:w-1/2" : "lg:w-3/5"
        }`}
      >
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2 w-full">
              <span className="textbase text-gray-600 dark:text-gray-500">
                {product?.mainCategory}
                {product?.category && ` / ${product.category}`}
              </span>
              {isDetail ? (
                <span className="font-medium text-2xl">{product?.title}</span>
              ) : (
                <Link
                  href={`/magaza/${product?.mainCategory_slug}/${product?.category_slug}/${product?.slug}`}
                  title={product?.title}
                  className="font-medium text-2xl transition-all duration-300 hover:text-site"
                >
                  {product?.title}
                </Link>
              )}
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
                      {isDetail ? (
                        <CustomButton
                          title={`${product.total_comment} Değerlendirme`}
                          containerStyles="flex -mb-1 font-medium transition-all duration-300 hover:text-site"
                          handleClick={
                            setActiveTab ? handleComments : undefined
                          }
                        />
                      ) : (
                        <span className="flex -mb-1 font-medium">{`${product.total_comment} Değerlendirme`}</span>
                      )}
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
                {getPrice(product ? product.price : 0)}
              </span>
              {product && product.discount > 0 && (
                <>
                  <span className="line-through font-light text-lg text-gray-400">
                    {getPrice(
                      (product.discount * product.price) / 100 + product.price
                    )}{" "}
                  </span>
                  <span className="flex px-4 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                    %{product.discount} İndirim
                  </span>
                </>
              )}
            </div>
          </div>
          {product?.short_content && (
            <div className="flex flex-col gap-4 w-full">
              <span>Ürün Hakkında :</span>
              <div className="flex lg:text-base text-sm flex-col gap-2 text-gray-600 dark:text-gray-400">
                {product?.short_content}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-6 w-full">
            {product?.product_group && (
              <div className="flex flex-col gap-2">
                <span>{product.product_group.group_name} :</span>
                <div className="flex lg:flex-wrap gap-2 items-center overflow-x-auto max-w-full pb-2">
                  {product.product_group.products.map((item, key) => {
                    const categorySlug = item.product.category_slug
                      ? `/${item.product.category_slug}`
                      : "";
                    const subCategorySlug = item.product.subCategory_slug
                      ? `/${item.product.subCategory_slug}`
                      : "";

                    const redirect = `${siteURL}/magaza/${item.product.mainCategory_slug}${categorySlug}${subCategorySlug}/${item.product.slug}`;

                    return (
                      <Link
                        href={redirect}
                        key={key}
                        className={`p-2 bg-gray-200 min-w-24 dark:bg-zinc-800 overflow-hidden rounded-md cursor-pointer hover:bg-site/10 dark:hover:bg-site/10 transition-all duration-300 group first:bg-site/30 dark:first:bg-site/30 first:hover:bg-site/30 dark:first:hover:bg-site/30 first:text-site`}
                        title={item.product.title}
                      >
                        <div className="flex flex-col text-center gap-2 w-full">
                          {item.product.images && (
                            <div className="relative w-full h-28 overflow-hidden rounded-md">
                              <Image
                                src={item.product.images[0]}
                                alt={item.product.title}
                                title={item.product.title}
                                fill
                                quality={100}
                                sizes="80px"
                                className="object-cover"
                              />
                            </div>
                          )}
                          <span className="text-xs group-hover:text-site font-medium transition-all duration-300 line-clamp-1 tracking-wide">
                            {item.choise_name}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            {product?.attributes && product.attributes.length > 0 && (
              <div className="flex flex-col gap-4">
                {product.attributes.map((attr, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center flex-wrap gap-1 text-sm font-medium text-gray-600 dark:text-gray-200">
                      {attr.attr_title}
                      {" : "}
                      {selectedAttributes[attr.attr_title] ? (
                        <span className="text-green-500">
                          {selectedAttributes[attr.attr_title]}
                        </span>
                      ) : (
                        attr.required && (
                          <small className="text-red-500">
                            ( {attr.attr_title} seçimi zorunludur )
                          </small>
                        )
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {attr.attr_options.map((option, optIndex) => (
                        <AttrOptions
                          key={optIndex}
                          option_name={option.option_name}
                          option_stock={option.option_stock}
                          isSelected={
                            selectedAttributes[attr.attr_title] ===
                            option.option_name
                          }
                          onSelect={handleSelectAttribute}
                          attrTitle={attr.attr_title}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex lg:flex-row flex-col items-center max-lg:w-full lg:gap-2 gap-4">
            <div className={`flex items-center max-lg:w-full gap-2 h-[50px]`}>
              <div className="flex items-center justify-between gap-3 bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-1 h-full">
                <CustomButton
                  handleClick={
                    product && product.stock > 0 && productQuantity > 1
                      ? decreaseQuantity
                      : undefined
                  }
                  containerStyles={`bg-white dark:bg-zinc-800 h-full px-2 border border-gray-200 dark:border-zinc-800 rounded-lg transition-all duration-300 group ${
                    product && product.stock > 0 && productQuantity > 1
                      ? "hover:text-white hover:bg-site dark:hover:bg-site"
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
                    product && product.stock > productQuantity
                      ? increaseQuantity
                      : undefined
                  }
                  containerStyles={`bg-white dark:bg-zinc-800 h-full px-2 border border-gray-200 dark:border-zinc-800 rounded-lg transition-all duration-300 group ${
                    product && product.stock > productQuantity
                      ? "hover:text-white hover:bg-site dark:hover:bg-site"
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
                containerStyles={`flex items-center max-lg:w-full gap-2 justify-center h-full lg:px-20 px-2 ${
                  product && product.stock > 0
                    ? loadingAddToBasket
                      ? "bg-green-500 text-white"
                      : "bg-site/80 enabled:hover:bg-site text-white"
                    : "bg-gray-200 text-gray-600 opacity-50 cursor-not-allowed"
                } rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                handleClick={
                  product && product.stock > 0 ? handleAddToBasket : undefined
                }
                isDisabled={
                  loadingAddToBasket || !allRequiredAttributesSelected()
                }
              />
            </div>
            <CustomButton
              title={
                product && favoriteItems?.includes(product.code)
                  ? "Bu Ürün Favori Listenizde"
                  : "Favorilere Ekle"
              }
              textStyles="lg:hidden"
              containerStyles="flex items-center justify-center gap-2 max-lg:w-full px-4 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-500 rounded-md h-[50px] transition-all duration-300 hover:bg-site dark:hover:bg-site hover:border-site dark:hover:border-site hover:text-white h-[50px] group/favorite"
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
  isSelected,
  onSelect,
  attrTitle,
}: {
  option_name: string;
  option_stock: number;
  isSelected: boolean;
  onSelect: (attrTitle: string, optionName: string) => void;
  attrTitle: string;
}) {
  const noStock = option_stock === 0;
  return (
    <CustomButton
      title={option_name}
      containerStyles={`flex py-2 px-4 rounded-md border  ${
        !noStock
          ? isSelected
            ? "bg-site text-white"
            : "border-gray-200 dark:border-zinc-800 cursor-pointer hover:border-site/30 dark:hover:border-site/30 hover:bg-site/10"
          : "bg-gray-200 dark:bg-zinc-800 border-transparent line-through opacity-50 cursor-not-allowed"
      } transition-all duration-300 text-sm`}
      handleClick={() => !noStock && onSelect(attrTitle, option_name)}
    />
  );
}

export default ProductArea;
