"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BasketProducts from "@/components/(front)/Basket/BasketProducts";
import { useGlobalContext } from "@/app/Context/store";
import { instantProducts, generals } from "@/constants/(front)";
import { IoFileTrayOutline } from "react-icons/io5";
import { basketProductTypes } from "@/types/product/basketProductTypes";
import { basketItemTypes } from "@/types/product/basketItemTypes";
import BasketProperty from "@/components/(front)/inc/Sidebar/Basket/BasketProperty";

interface IBasketProps {
  isDetail?: boolean;
}

function Basket({ isDetail }: IBasketProps) {
  const { basketItems, setBasketItems } = useGlobalContext();
  const [subTotal, setSubTotal] = useState(0);
  const [initialSubTotal, setInitialSubTotal] = useState(0);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [shippingPriceApplied, setShippingPriceApplied] = useState(false);
  const [basketProducts, setBasketProducts] = useState<
    basketProductTypes[] | null
  >(null);
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
        .filter(Boolean) as unknown as basketProductTypes[];

      const mergedProducts = mergeSameProducts(productsInBasket);

      setBasketProducts(mergedProducts);
    } else {
      setBasketProducts(null);
    }
  }, [basketItems]);

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

    // If no discount applied, check if free shipping is applicable
    let newSubTotal = subtotal;
    if (freeShipping !== null && newSubTotal < freeShipping) {
      newSubTotal += generals.shipping_price;
      setShippingPriceApplied(true);
    }
    // Check if discount is applied
    if (discountApplied) {
      // If discount is applied, use the discounted subtotal
      newSubTotal = subtotal - discountAmount;

      // Check if free shipping threshold is applicable after discount
      if (freeShipping !== null && newSubTotal < freeShipping) {
        newSubTotal += generals.shipping_price;
        setShippingPriceApplied(true);
      }

      // Update the subtotal
      setSubTotal(newSubTotal);
    } else {
      // Update the subtotal
      setSubTotal(newSubTotal);
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
            shippingPriceApplied={shippingPriceApplied}
            setShippingPriceApplied={setShippingPriceApplied}
            freeShipping={freeShipping}
          />
        )}
      </div>
      {isDetail && (
        <div className="lg:w-1/4 w-full">
          <BasketProperty
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
            shippingPriceApplied={shippingPriceApplied}
            setShippingPriceApplied={setShippingPriceApplied}
            freeShipping={freeShipping}
          />
        </div>
      )}
    </div>
  );
}

export default Basket;
