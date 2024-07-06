"use client";
import { act, useEffect, useState } from "react";
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
import { basketItemTypes } from "@/types/product/basketItemTypes";

interface IProductAreaProps {
  product: productDetailTypes | undefined;
  isDetail?: boolean;
  onClose?: () => void;
}

function ProductArea({ product, isDetail, onClose }: IProductAreaProps) {
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

  return (
    <div
      className={`lg:grid lg:grid-cols-2 lg:gap-8 gap-4 max-lg:flex max-lg:flex-col h-full ${
        isDetail ? "lg:min-h-[780px]" : ""
      } w-full`}
    >
      <div className="flex lg:flex-row flex-col h-full">
        {product?.images && product.images?.length > 1 && (
          <div
            className={`flex lg:flex-col gap-1 max-h-full min-h-[164px] overflow-y-auto lg:overflow-x-hidden scrollbar-thick lg:order-1 order-2 ${
              isDetail ? "pr-6 max-lg:pt-1" : "p-1"
            }`}
          >
            {product.images?.map((image, key) => (
              <div
                key={key}
                className="relative min-w-[100.6px] lg:min-h-[calc(21%-3px)] lg:h-[calc(21%-3px)] cursor-pointer"
                onClick={() => handleChangeCurrentImage(image)}
              >
                <Image
                  src={image}
                  fill
                  sizes="(max-width: 768px) 100%, 25%"
                  alt={`${product.brand && product.brand} ${product.title}`}
                  title={`${product.brand && product.brand} ${product.title}`}
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
            className={`relative w-full max-w-full h-full min-h-[600px] overflow-hidden cursor-crosshair lg:order-2 order-1 ${
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
        className={`${
          !isDetail ? "lg:px-6 px-4 py-6" : ""
        } w-full lg:overflow-y-auto`}
      >
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-2 w-full">
              <span className="textbase text-gray-600">
                {product?.mainCategory}
                {product?.category && ` / ${product.category}`}
              </span>
              {isDetail ? (
                <span className="font-medium text-2xl">{product?.title}</span>
              ) : (
                <Link
                  href={"/"}
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
          {!isDetail && (
            <div className="flex flex-col gap-4 w-full">
              <span>Ürün Özellikleri :</span>
              <div className="flex text-sm flex-col gap-2 text-gray-600">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Numquam ipsa.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-6 w-full">
            {product?.product_group && (
              <div className="flex flex-col gap-2">
                <span>{product.product_group.group_name} :</span>
                <div className="flex flex-wrap gap-2 items-center">
                  {product.product_group.products.map((item, key) => (
                    <ProductGroupItem
                      key={key}
                      item={item}
                      product={product}
                      index={key}
                    />
                  ))}
                </div>
              </div>
            )}
            {product?.attributes && product.attributes.length > 0 && (
              <div className="flex flex-col gap-4">
                {product.attributes.map((attr, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center flex-wrap gap-1 text-sm font-medium text-gray-600">
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
          <div className="flex lg:flex-row flex-col items-center w-full lg:gap-2 gap-4">
            <div className={`flex items-center w-full gap-2 h-[50px]`}>
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
                    product && product.stock > productQuantity
                      ? increaseQuantity
                      : undefined
                  }
                  containerStyles={`bg-white h-full px-2 border border-gray-200 rounded-lg transition-all duration-300 group ${
                    product && product.stock > productQuantity
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
                containerStyles={`flex items-center w-full gap-2 justify-center h-full lg:px-12 px-2 ${
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
            : "border-gray-200 cursor-pointer hover:border-site/30 hover:bg-site/10"
          : "bg-gray-200 border-transparent line-through opacity-50 cursor-not-allowed"
      } transition-all duration-300 text-sm`}
      handleClick={() => !noStock && onSelect(attrTitle, option_name)}
    />
  );
}

function ProductGroupItem({
  item,
  product,
  index,
}: {
  item: { choise_name: string; code: string };
  product: productDetailTypes;
  index: number;
}) {
  const [activeGroupItem, setActiveGroupItem] = useState(true);
  return (
    <div
      className={`p-2 bg-gray-200 overflow-hidden rounded-md cursor-pointer hover:bg-site/20 transition-all duration-300 group ${
        activeGroupItem ? "first:bg-site/20 first:text-site" : ""
      }`}
    >
      <div className="flex flex-col text-center gap-2 w-full">
        {product.images && (
          <div className="relative w-20 h-28 overflow-hidden rounded-md">
            <Image
              src={product.images[index]}
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
  );
}

export default ProductArea;
