"use client";
import Link from "next/link";
import CustomButton from "@/components/others/CustomButton";
import { basketItemTypes } from "@/types/product/basketItemTypes";
import { basketProductTypes } from "@/types/product/basketProductTypes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getPrice } from "@/components/functions/getPrice";
import { discountCodes, generals } from "@/constants/(front)";
import { IoChevronForwardOutline, IoCloseOutline } from "react-icons/io5";
import { useGlobalContext } from "@/app/Context/store";

interface IBasketPropertyProps {
  isDetail?: boolean;
  subTotal: number;
  basketProducts: basketProductTypes[] | null;
  setBasketProducts: Dispatch<SetStateAction<basketProductTypes[] | null>>;
  setBasketItems: Dispatch<SetStateAction<basketItemTypes[] | null>>;
  setSubTotal: Dispatch<SetStateAction<number>>;
  discountApplied: {
    status: boolean;
    prevPrice: number;
    discount: number;
    isPercentage: boolean;
  };
  setDiscountApplied: Dispatch<
    SetStateAction<{
      status: boolean;
      prevPrice: number;
      discount: number;
      isPercentage: boolean;
    }>
  >;
  shippingPriceApplied: boolean;
  freeShipping: number | null;
}

function BasketProperty({
  isDetail,
  subTotal,
  basketProducts,
  setBasketProducts,
  setBasketItems,
  setSubTotal,
  discountApplied,
  setDiscountApplied,
  shippingPriceApplied,
  freeShipping,
}: IBasketPropertyProps) {
  const [loadingEmptyBasket, setLoadingEmptyBasket] = useState(false);
  const [discountCode, setDiscountCode] = useState<string | null>(null);

  const { setSidebarStatus } = useGlobalContext();

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
      const subtotalNonShipping = subTotal - generals.shipping_price;

      const progress =
        ((shippingPriceApplied ? subtotalNonShipping : subTotal) /
          freeShipping) *
        100;
      return progress >= 100 ? 100 : progress;
    }
    return 0;
  };

  const handleDiscountCode = () => {
    const discount = discountCodes.find((code) => code.code === discountCode);

    if (discount) {
      const discountAmount = discount.isPercentage
        ? (subTotal * discount.discount) / 100
        : discount.discount;

      let newSubTotal = subTotal - discountAmount;

      setDiscountApplied({
        status: true,
        prevPrice: subTotal,
        discount: discount.discount,
        isPercentage: discount.isPercentage,
      });

      setSubTotal(newSubTotal);
    } else {
      console.log("Geçersiz İndirim Kodu!");
    }
  };

  useEffect(() => {
    if (discountApplied.status) {
      const nonDiscountSubTotal = subTotal + discountApplied.discount;
      setDiscountApplied((prev) => ({
        ...prev,
        prevPrice: nonDiscountSubTotal,
      }));
    }
  }, [subTotal, discountApplied.status]);

  return (
    <div className="flex flex-col lg:gap-2 w-full sticky top-28">
      <label
        htmlFor="discount-code"
        className={`flex justify-between items-center gap-4 px-4 py-3 ${
          discountApplied.status ? "bg-green-500/10" : "bg-red-500/10"
        }`}
      >
        <span
          className={`font-medium min-w-max ${
            discountApplied.status ? "text-green-500" : "text-red-500"
          }`}
        >
          İndirim Kodu
        </span>
        <div className={`flex items-center gap-2 w-fit`}>
          <input
            type="text"
            id="discount-code"
            required
            className={`border ${
              discountApplied.status
                ? "border-transparent bg-transparent cursor-default text-right text-green-500"
                : "border-red-500/20 focus:border-red-500/50 bg-white"
            }  py-2 px-4 outline-none w-full`}
            placeholder="İndirim kodu giriniz"
            value={discountCode ?? ""}
            onChange={(e) => setDiscountCode(e.target.value)}
            readOnly={discountApplied.status}
          />
          <CustomButton
            leftIcon={<IoChevronForwardOutline className="text-2xl" />}
            containerStyles={`h-full px-4 disabled:text-gray-400 disabled:border-gray-200 disabled:hover:bg-white disabled:cursor-not-allowed bg-white w-fit py-2 border border-red-500/20 hover:bg-red-500 text-red-500 hover:text-white transition-all duration-300 ${
              discountApplied.status ? "hidden" : ""
            }`}
            handleClick={discountCode ? handleDiscountCode : undefined}
            isDisabled={!discountCode || discountApplied.status}
          />
          {discountApplied.status && (
            <CustomButton
              leftIcon={
                <IoCloseOutline className="text-2xl hover:text-red-500 transition-all duration-300" />
              }
              handleClick={() => {
                setSubTotal(discountApplied.prevPrice);
                setDiscountApplied({
                  status: false,
                  prevPrice: 0,
                  discount: 0,
                  isPercentage: false,
                });
              }}
            />
          )}
        </div>
      </label>
      <div className="flex flex-col gap-4 w-full bg-gray-100 px-4 py-4">
        {discountApplied.status && (
          <>
            <div className="flex justify-between items-center font-medium">
              <span className="text-sm">İndirimsiz Fiyat :</span>
              <span>
                {freeShipping && subTotal < freeShipping
                  ? getPrice(
                      discountApplied.prevPrice - generals.shipping_price
                    )
                  : getPrice(discountApplied.prevPrice)}
              </span>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span className="text-sm">
                {discountApplied.isPercentage && (
                  <span className="text-green-600">
                    %{discountApplied.discount}
                  </span>
                )}{" "}
                İndirim :
              </span>
              <span className="text-green-500">
                -{" "}
                {getPrice(
                  discountApplied.isPercentage
                    ? (subTotal * discountApplied.discount) / 100
                    : discountApplied.discount
                )}
              </span>
            </div>
          </>
        )}
        {freeShipping &&
          (shippingPriceApplied
            ? subTotal - generals.shipping_price
            : subTotal) < freeShipping && (
            <div className="flex justify-between items-center font-medium">
              <span className="text-sm">Kargo Ücreti :</span>
              <span className="text-red-500">
                + {getPrice(generals.shipping_price)}
              </span>
            </div>
          )}
        <hr />
        <div className="flex justify-between font-medium items-center text-green-500 text-lg">
          <span>Net Ücret :</span>
          <span>{getPrice(subTotal)}</span>
        </div>
        <small>Fiyatlarımıza KDV dahildir.</small>
      </div>
      <div
        className={`flex flex-col w-full ${
          !isDetail ? "lg:px-8" : ""
        } px-4 py-4 items-center text-center gap-4`}
      >
        {freeShipping !== null && (
          <>
            {freeShipping > 0 ? (
              <div className="flex flex-col gap-2 w-full">
                {(shippingPriceApplied
                  ? subTotal - generals.shipping_price
                  : subTotal) < freeShipping ? (
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
                      freeShipping >
                      (shippingPriceApplied
                        ? subTotal - generals.shipping_price
                        : subTotal)
                        ? "animate-pulse"
                        : ""
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 h-full ${
                        freeShipping >
                        (shippingPriceApplied
                          ? subTotal - generals.shipping_price
                          : subTotal)
                          ? "bg-site"
                          : "bg-green-500"
                      }  w-[0%] transition-all duration-300 bg-[length:15px_15px]`}
                      style={{
                        width: `${calculateShippingProgress()}%`,
                        backgroundImage: `linear-gradient(135deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)`,
                      }}
                    ></div>
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      freeShipping >
                      (shippingPriceApplied
                        ? subTotal - generals.shipping_price
                        : subTotal)
                        ? "text-site"
                        : "text-green-500"
                    }`}
                  >
                    {`${calculateShippingProgress().toFixed(0)}%`}
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
          {isDetail ? (
            <Link
              href={"/sepet"}
              className="py-3 px-4 w-full bg-site/80 text-white rounded-md hover:bg-site transition-all duration-300"
            >
              Ödemeye Geç
            </Link>
          ) : (
            <Link
              href={"/sepet"}
              className="py-3 px-4 w-full bg-site/80 text-white rounded-md hover:bg-site transition-all duration-300"
              onClick={() => setSidebarStatus("")}
            >
              Sepete Git
            </Link>
          )}
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

export default BasketProperty;
