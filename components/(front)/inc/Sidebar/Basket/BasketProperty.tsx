"use client";
import Link from "next/link";
import CustomButton from "@/components/others/CustomButton";
import { basketItemTypes } from "@/types/product/basketItemTypes";
import { basketProductTypes } from "@/types/product/basketProductTypes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getPrice } from "@/lib/functions/getPrice";
import { discountCodes } from "@/constants/(front)";
import { IoChevronForwardOutline, IoCloseOutline } from "react-icons/io5";
import { useGlobalContext } from "@/app/Context/store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { generalsTypes } from "@/types/generalTypes";

interface IBasketPropertyProps {
  generals: generalsTypes;
  isDetail?: boolean;
  subTotal: number;
  setSubTotal: Dispatch<SetStateAction<number>>;
  initialSubTotal: number;
  setBasketProducts: Dispatch<SetStateAction<basketProductTypes[] | null>>;
  setBasketItems: Dispatch<SetStateAction<basketItemTypes[] | null>>;
  discountAmount: number;
  setDiscountAmount: Dispatch<SetStateAction<number>>;
  discountApplied: boolean;
  setDiscountApplied: Dispatch<SetStateAction<boolean>>;
  freeShipping: number | null;
}

function BasketProperty({
  generals,
  isDetail,
  subTotal,
  setSubTotal,
  initialSubTotal,
  setBasketProducts,
  setBasketItems,
  discountAmount,
  setDiscountAmount,
  discountApplied,
  setDiscountApplied,
  freeShipping,
}: IBasketPropertyProps) {
  const [loadingEmptyBasket, setLoadingEmptyBasket] = useState(false);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  const router = useRouter();

  const { setSidebarStatus } = useGlobalContext();

  const handleEmptyBasket = () => {
    if (!loadingEmptyBasket) {
      setLoadingEmptyBasket(true);
      setTimeout(() => {
        if (isDetail) {
          router.push("/");
        }
        localStorage.removeItem("basketItems");
        setBasketProducts(null);
        setBasketItems(null);
        setLoadingEmptyBasket(false);
        setSidebarStatus("");
      }, 1000);
    }
  };

  const calculateShippingProgress = () => {
    if (freeShipping !== null) {
      const progress = (initialSubTotal / freeShipping) * 100;
      return progress >= 100 ? 100 : progress;
    }
    return 0;
  };

  const handleDiscountCode = () => {
    const appliedDiscount = discountCodes.find(
      (code) => code.code === discountCode
    );

    if (appliedDiscount?.isPercentage) {
      setDiscountPercentage(appliedDiscount.discount);
    } else {
      setDiscountPercentage(0);
    }

    if (appliedDiscount) {
      const discountAmount = appliedDiscount.isPercentage
        ? (appliedDiscount.discount / 100) * initialSubTotal
        : appliedDiscount.discount;

      const newSubTotal = initialSubTotal - discountAmount;

      setDiscountAmount(discountAmount);
      setDiscountApplied(true);

      if (freeShipping !== null && newSubTotal < freeShipping && generals) {
        setSubTotal(newSubTotal + generals.shipping_price);
      } else {
        setSubTotal(newSubTotal);
      }
    } else {
      toast.error("Geçersiz İndirim Kodu!");
    }
  };

  // Add this useEffect to update discountAmount whenever subTotal changes
  useEffect(() => {
    if (discountApplied) {
      const appliedDiscount = discountCodes.find(
        (code) => code.code === discountCode
      );

      if (appliedDiscount) {
        const discountAmount = appliedDiscount.isPercentage
          ? (appliedDiscount.discount / 100) * initialSubTotal
          : appliedDiscount.discount;
        setDiscountAmount(discountAmount);
      }
    }
  }, [subTotal]);

  return (
    <div className="flex flex-col lg:gap-2 w-full sticky top-28">
      {isDetail && (
        <label
          htmlFor="discount-code"
          className={`flex justify-between items-center gap-4 px-4 py-3 ${
            discountApplied ? "bg-green-500/10" : "bg-red-500/10"
          }`}
        >
          <span
            className={`font-medium min-w-max ${
              discountApplied ? "text-green-500" : "text-red-500"
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
                discountApplied
                  ? "border-transparent bg-transparent cursor-default text-right text-green-500"
                  : "border-red-500/20 focus:border-red-500/50 bg-white dark:bg-zinc-900"
              }  py-2 px-4 outline-none w-full`}
              placeholder="İndirim kodu giriniz"
              value={discountCode ?? ""}
              onChange={(e) => setDiscountCode(e.target.value)}
              readOnly={discountApplied}
            />
            <CustomButton
              leftIcon={<IoChevronForwardOutline className="text-2xl" />}
              containerStyles={`h-full px-4 disabled:text-gray-400 disabled:border-gray-200 dark:disabled:border-gray-600 disabled:hover:bg-white dark:disabled:hover:bg-zinc-900 disabled:cursor-not-allowed bg-white dark:bg-zinc-900 w-fit py-2 border border-red-500/20 hover:bg-red-500 dark:hover:bg-red-500 text-red-500 hover:text-white transition-all duration-300 ${
                discountApplied ? "hidden" : ""
              }`}
              handleClick={discountCode ? handleDiscountCode : undefined}
              isDisabled={!discountCode || discountApplied}
            />
            {discountApplied && (
              <CustomButton
                leftIcon={
                  <IoCloseOutline className="text-2xl hover:text-red-500 transition-all duration-300" />
                }
                handleClick={() => {
                  setSubTotal(initialSubTotal);
                  setDiscountApplied(false);
                }}
              />
            )}
          </div>
        </label>
      )}
      <div
        className={`flex flex-col gap-3 w-full bg-gray-100 dark:bg-zinc-800 ${
          !isDetail ? "lg:px-8 px-4" : "px-4"
        } py-4`}
      >
        {discountApplied && (
          <>
            <div className="flex justify-between items-center font-medium">
              <span className="text-sm">İndirimsiz Fiyat :</span>
              <span>{getPrice(initialSubTotal)}</span>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span className="text-sm">
                {discountPercentage !== 0 && (
                  <span className="text-green-600">{`%${discountPercentage}`}</span>
                )}{" "}
                İndirim :
              </span>
              <span className="text-green-500">
                - {getPrice(discountAmount)}
              </span>
            </div>
            <hr className="dark:border-zinc-700" />
          </>
        )}
        {freeShipping && initialSubTotal < freeShipping && (
          <>
            <div className="flex justify-between items-center font-medium">
              <span className="text-sm">Kargo Ücreti :</span>
              <span className="text-red-500">
                + {getPrice(generals ? generals.shipping_price : 0)}
              </span>
            </div>
            <hr className="dark:border-zinc-700" />
          </>
        )}
        <div className="flex justify-between font-medium items-center text-green-500 text-lg">
          <span>Net Ücret :</span>
          <span>{getPrice(subTotal)}</span>
        </div>
        {isDetail && <small>Fiyatlarımıza KDV dahildir.</small>}
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
                {calculateShippingProgress() !== 100 ? (
                  <span className="text-sm">
                    Ücretsiz kargodan yararlanmak için{" "}
                    <strong className="text-red-500">
                      {getPrice(freeShipping - initialSubTotal)}
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
                      calculateShippingProgress() !== 100 ? "animate-pulse" : ""
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 h-full ${
                        calculateShippingProgress() !== 100
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
                      calculateShippingProgress() !== 100
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
        <hr className="w-full dark:border-zinc-700" />
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
            containerStyles="py-3 px-4 w-full bg-gray-200 dark:bg-zinc-800 text-gray-600 dark:text-gray-200 rounded-md hover:bg-gray-700 dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-800 transition-all duration-300"
            handleClick={handleEmptyBasket}
          />
        </div>
      </div>
    </div>
  );
}

export default BasketProperty;
