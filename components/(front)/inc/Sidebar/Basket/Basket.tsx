"use client";
import React, { useCallback, useEffect, useState } from "react";
import BasketProducts from "@/components/(front)/Basket/BasketProducts";
import { useGlobalContext } from "@/app/Context/store";
import { IoFileTrayOutline } from "react-icons/io5";
import { basketProductTypes } from "@/types/product/basketProductTypes";
import { basketItemTypes } from "@/types/product/basketItemTypes";
import BasketProperty from "@/components/(front)/inc/Sidebar/Basket/BasketProperty";
import { generalsTypes } from "@/types/generalTypes";
import { useProducts } from "@/hooks/useProduct";

interface IBasketProps {
  isDetail?: boolean;
  generals: generalsTypes;
}

function Basket({ isDetail, generals }: IBasketProps) {
  const { basketItems, setBasketItems } = useGlobalContext();
  const [subTotal, setSubTotal] = useState(0);
  const [initialSubTotal, setInitialSubTotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [basketProducts, setBasketProducts] = useState<
    basketProductTypes[] | null
  >(null);
  const freeShipping: number | null = generals ? generals.free_shipping : 0;

  const { products, isLoading } = useProducts();

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
    if (!isLoading && products && basketItems?.length) {
      const productsInBasket = basketItems
        .map((item) => {
          const product = products.find((p) => p.code === item.product_code);
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
    }
  }, [products, basketItems, isLoading]);

  const calculateSubTotal = useCallback(() => {
    if (!basketProducts || basketProducts.length === 0) {
      return 0;
    }
    return basketProducts.reduce((acc, product) => {
      return acc + (product.price || 0) * (product.quantity || 0);
    }, 0);
  }, [basketProducts]);

  useEffect(() => {
    const subtotal = calculateSubTotal();
    setInitialSubTotal(subtotal);

    let newSubTotal = subtotal;
    if (generals) {
      if (freeShipping !== null && newSubTotal < freeShipping) {
        newSubTotal += generals.shipping_price;
      }
      if (discountApplied) {
        newSubTotal = subtotal - discountAmount;

        if (freeShipping !== null && newSubTotal < freeShipping) {
          newSubTotal += generals.shipping_price;
        }

        setSubTotal(newSubTotal);
      } else {
        setSubTotal(newSubTotal);
      }
    }
  }, [calculateSubTotal, discountApplied, discountAmount]);

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
        setInitialSubTotal(subtotal || 0);
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
      const prevBasketItems = null;
      if (prevBasketItems !== null) {
        localStorage.setItem("basketItems", JSON.stringify(null));
        setBasketItems(null);
      }
    }
  }, [basketProducts, setBasketItems]);

  if (isLoading)
    return (
      <div className="flex flex-col gap-4 w-full h-[calc(100dvh-77px)] justify-center items-center text-gray-500 dark:text-zinc-600">
        <div className="flex flex-col gap-8 justify-center items-center animate-pulse">
          <div className="animate-spin rounded-full m-0.5 lg:size-24 size-16 border-t-4 border-b-4 border-gray-500 dark:border-zinc-600"></div>
          <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
            Ürünler Yükleniyor.
          </span>
        </div>
      </div>
    );

  if (!basketProducts)
    return (
      <div className="flex flex-col gap-4 w-full h-[calc(100dvh-77px)] justify-center items-center text-gray-500 dark:text-zinc-600">
        <div className="flex flex-col gap-4 justify-center items-center animate-pulse">
          <IoFileTrayOutline className="lg:text-7xl text-6xl" />
          <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
            Sepetinizde Ürün Bulunamadı
          </span>
        </div>
      </div>
    );

  return (
    <div className={isDetail ? "flex lg:flex-row flex-col gap-8" : ""}>
      <div
        className={`flex ${
          !isDetail ? "h-[calc(100dvh-77px)]" : "lg:w-3/4 gap-4"
        } flex-col w-full justify-between `}
      >
        {isDetail && (
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-4xl font-gemunu font-semibold tracking-wider">
              Sepet
            </h1>
          </div>
        )}
        <div
          className={`flex flex-col w-full ${
            !isDetail ? "overflow-y-auto lg:px-8 px-4" : ""
          } h-full py-4`}
        >
          <BasketProducts
            isDetail={isDetail}
            products={basketProducts}
            handleUpdateQuantity={(productCode, newQuantity, attributes) =>
              handleUpdateQuantity(productCode, newQuantity, attributes)
            }
            onRemoveItem={(productCode, attributes) =>
              handleRemoveItem(productCode, attributes)
            }
          />
        </div>
        {!isDetail && (
          <BasketProperty
            generals={generals}
            isDetail={isDetail}
            subTotal={subTotal}
            setSubTotal={setSubTotal}
            initialSubTotal={initialSubTotal}
            setBasketProducts={setBasketProducts}
            setBasketItems={setBasketItems}
            discountAmount={discountAmount}
            setDiscountAmount={setDiscountAmount}
            discountApplied={discountApplied}
            setDiscountApplied={setDiscountApplied}
            freeShipping={freeShipping}
          />
        )}
      </div>
      {isDetail && (
        <div className="lg:w-1/4 w-full">
          <BasketProperty
            generals={generals}
            isDetail={isDetail}
            subTotal={subTotal}
            setSubTotal={setSubTotal}
            initialSubTotal={initialSubTotal}
            setBasketProducts={setBasketProducts}
            setBasketItems={setBasketItems}
            discountAmount={discountAmount}
            setDiscountAmount={setDiscountAmount}
            discountApplied={discountApplied}
            setDiscountApplied={setDiscountApplied}
            freeShipping={freeShipping}
          />
        </div>
      )}
    </div>
  );
}

export default Basket;
