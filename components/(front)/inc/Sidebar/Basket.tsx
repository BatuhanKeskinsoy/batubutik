"use client";
import React, { useCallback, useEffect, useState } from "react";
import BasketProducts from "@/components/(front)/Basket/BasketProducts";
import { getPrice } from "@/components/functions/getPrice";
import Link from "next/link";
import CustomButton from "@/components/others/CustomButton";
import { useGlobalContext } from "@/app/Context/store";
import { instantProducts, generals } from "@/constants/(front)";
import { IoFileTrayOutline } from "react-icons/io5";
import { basketProductTypes } from "@/types/product/basketProductTypes";
import { basketItemTypes } from "@/types/product/basketItemTypes";

function Basket() {
  const { basketItems, setBasketItems } = useGlobalContext();
  const [loadingEmptyBasket, setLoadingEmptyBasket] = useState(false);
  const [basketProducts, setBasketProducts] = useState<
    basketProductTypes[] | null
  >(null);
  const [subTotal, setSubTotal] = useState(0);

  const freeShipping: number | null = generals.free_shipping;

  const mergeSameProducts = (products: basketProductTypes[]) => {
    const mergedProducts: Record<string, basketProductTypes> = {};

    products.forEach((product) => {
      const key = product.attributes
        ? `${product.code}-${JSON.stringify(product.attributes)}`
        : product.code;
      if (mergedProducts[key]) {
        mergedProducts[key].quantity += product.quantity;
      } else {
        mergedProducts[key] = { ...product };
      }
    });

    return Object.values(mergedProducts);
  };

  useEffect(() => {
    if (basketItems && basketItems.length > 0) {
      const productsInBasket = basketItems
        .map((item) => {
          const product = instantProducts.find(
            (p) => p.code === item.product_code
          );
          if (product) {
            return {
              ...product,
              quantity: item.quantity,
              attributes: item.attributes,
            };
          }
          return null;
        })
        .filter(Boolean) as basketProductTypes[];

      const mergedProducts = mergeSameProducts(productsInBasket);

      setBasketProducts(mergedProducts);
    } else {
      setBasketProducts(null);
    }
  }, [basketItems]);

  const calculateSubTotal = useCallback(() => {
    return (
      basketProducts &&
      basketProducts.reduce((acc, product) => {
        return acc + (product.price || 0) * (product.quantity || 0);
      }, 0)
    );
  }, [basketProducts]);

  useEffect(() => {
    const subtotal = calculateSubTotal();
    subtotal && setSubTotal(subtotal);
  }, [calculateSubTotal]);

  const handleUpdateQuantity = useCallback(
    (
      productCode: string,
      newQuantity: number,
      attributes?: { attr_title: string; attr_option: string }[] | null
    ) => {
      setBasketProducts((prevProducts) => {
        if (!prevProducts) return null;
        return prevProducts.map((product) => {
          const attributesMatch =
            (product.attributes &&
              attributes &&
              JSON.stringify(product.attributes) ===
                JSON.stringify(attributes)) ||
            (!product.attributes && !attributes);
          if (product.code === productCode && attributesMatch) {
            return { ...product, quantity: newQuantity };
          }
          return product;
        });
      });
    },
    []
  );

  const handleRemoveItem = useCallback(
    (
      productCode: string,
      attributes?: { attr_title: string; attr_option: string }[] | null
    ) => {
      if (basketProducts) {
        const updatedBasketProducts = basketProducts.filter((product) => {
          if (
            product.code === productCode &&
            (!attributes ||
              (product.attributes &&
                JSON.stringify(product.attributes) ===
                  JSON.stringify(attributes)))
          ) {
            return false;
          }
          return true;
        });

        setBasketProducts(updatedBasketProducts);

        const updatedBasketItems = updatedBasketProducts.map((product) => ({
          product_code: product.code,
          quantity: product.quantity,
          attributes: product.attributes || null,
        }));

        localStorage.setItem("basketItems", JSON.stringify(updatedBasketItems));

        setBasketItems(updatedBasketItems);

        const subtotal = calculateSubTotal();
        setSubTotal(subtotal || 0);
      }
    },
    [basketProducts, calculateSubTotal, setBasketItems]
  );

  useEffect(() => {
    if (basketProducts) {
      const updatedBasketItems: basketItemTypes[] = basketProducts.map(
        (product) => ({
          product_code: product.code,
          quantity: product.quantity,
          attributes: product.attributes || null,
        })
      );

      const prevBasketItemsString = localStorage.getItem("basketItems");
      const prevBasketItems = prevBasketItemsString
        ? JSON.parse(prevBasketItemsString)
        : null;

      const updatedBasketItemsString = JSON.stringify(updatedBasketItems);
      if (updatedBasketItemsString !== JSON.stringify(prevBasketItems)) {
        localStorage.setItem("basketItems", updatedBasketItemsString);
        setBasketItems(updatedBasketItems);
      }
    } else {
      // If basketProducts is null, set prevBasketItems to null
      const prevBasketItems = null;
      // Check if prevBasketItems is different from null
      if (prevBasketItems !== null) {
        localStorage.setItem("basketItems", JSON.stringify(null));
        setBasketItems(null);
      }
    }
  }, [basketProducts, setBasketItems]);

  const handleEmptyBasket = () => {
    if (!loadingEmptyBasket) {
      setLoadingEmptyBasket(true);
      setTimeout(() => {
        localStorage.removeItem("basketItems");
        setBasketProducts(null);
        setBasketItems(null);
        setLoadingEmptyBasket(false);
      }, 1000);
    }
  };

  const calculateShippingProgress = () => {
    if (freeShipping !== null) {
      const progress = (subTotal / freeShipping) * 100;
      return progress >= 100 ? 100 : progress;
    }
    return 0;
  };

  if (!basketProducts)
    return (
      <div className="flex flex-col gap-4 w-full h-[calc(100dvh-77px)] justify-center items-center text-gray-300">
        <div className="flex flex-col gap-4 justify-center items-center animate-pulse">
          <IoFileTrayOutline className="lg:text-7xl text-6xl" />
          <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
            Sepetinizde Ürün Bulunamadı
          </span>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col w-full h-[calc(100dvh-77px)] justify-between">
      <div className="flex flex-col w-full overflow-y-auto h-full lg:px-8 px-4 py-4">
        <BasketProducts
          products={basketProducts}
          handleUpdateQuantity={(productCode, newQuantity, attributes) =>
            handleUpdateQuantity(productCode, newQuantity, attributes)
          }
          onRemoveItem={(productCode, attributes) =>
            handleRemoveItem(productCode, attributes)
          }
        />
      </div>
      <div className="flex items-center justify-between w-full bg-gray-200 lg:px-8 px-4 py-4 font-semibold">
        <span>Ara Toplam :</span>
        <span>{getPrice(subTotal)}</span>
      </div>
      <div className="flex flex-col w-full lg:px-8 px-4 py-4 items-center text-center gap-4">
        {freeShipping !== null && (
          <>
            {freeShipping > 0 ? (
              <div className="flex flex-col gap-2 w-full">
                {subTotal < freeShipping ? (
                  <span className="text-sm">
                    Ücretsiz kargodan yararlanmak için{" "}
                    <strong className="text-red-500">
                      {getPrice(freeShipping - subTotal)}
                    </strong>{" "}
                    değerinde ürün ekleyiniz.
                  </span>
                ) : (
                  <span className="text-sm">
                    Tebrikler! Bu Siparişinizde{" "}
                    <strong className="text-green-500">KARGO ÜCRETSİZ</strong>
                  </span>
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`relative w-full h-3 rounded-full overflow-hidden bg-gray-200  ${
                      freeShipping > subTotal ? "animate-pulse" : ""
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 h-full ${
                        freeShipping > subTotal ? "bg-site" : "bg-green-500"
                      }  w-[0%] transition-all duration-300 bg-[length:15px_15px]`}
                      style={{
                        width: `${calculateShippingProgress()}%`,
                        backgroundImage: `linear-gradient(135deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)`,
                      }}
                    ></div>
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      freeShipping > subTotal ? "text-site" : "text-green-500"
                    }`}
                  >
                    {`${calculateShippingProgress()}%`}
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-sm">
                <strong className="text-green-500">KARGO ÜCRETSİZ</strong>
              </span>
            )}
          </>
        )}
        <hr className="w-full" />
        <div className="flex lg:flex-row flex-col items-center gap-2 w-full">
          <Link
            href={"/sepet"}
            className="py-3 px-4 w-full bg-site/80 text-white rounded-md hover:bg-site transition-all duration-300"
          >
            Sepete Git
          </Link>
          <CustomButton
            title={
              !loadingEmptyBasket ? "Sepeti Boşalt" : "Sepet Boşaltılıyor.."
            }
            containerStyles="py-3 px-4 w-full bg-gray-200 text-gray-600 rounded-md hover:bg-gray-700 hover:text-white transition-all duration-300"
            handleClick={handleEmptyBasket}
          />
        </div>
      </div>
    </div>
  );
}

export default Basket;
