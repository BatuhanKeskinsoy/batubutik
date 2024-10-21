import CustomButton from "@/components/others/CustomButton";
import { convertDate } from "@/lib/functions/convertDate";
import { getPrice } from "@/lib/functions/getPrice";
import { orderTypes } from "@/types/order/orderTypes";
import Link from "next/link";
import React from "react";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { LiaShippingFastSolid } from "react-icons/lia";
import OrderProductItem from "./OrderProductItem";

interface IProfileOrderItemProps {
  order: orderTypes;
}

function OrderItem({ order }: IProfileOrderItemProps) {
  return (
    <div className="relative w-full pl-6 py-4 first:pt-0 last:pb-0">
      <div className="border-l-2 border-gray-200 dark:border-zinc-800 absolute h-full left-2 top-0 first:mt-4"></div>
      <div className="relative flex justify-between mb-2 dark:bg-green-900 bg-green-500 rounded-lg">
        <span className="absolute w-4 h-4 dark:bg-green-900 bg-green-500 rounded-full left-[-23px] top-1/2 transform -translate-y-1/2"></span>
        <div className="flex w-full items-center justify-between lg:px-4 px-2 font-gemunu font-light tracking-wider lg:text-base text-sm text-white py-2">
          <span>{convertDate(order.created_at)}</span>
          <div className="flex items-center gap-1">
            <span className="hidden lg:block">Sipariş No :</span>
            <span className="block lg:hidden">S. No :</span>
            <span className="font-system lg:text-sm text-xs lg:-mb-0.5">
              {order.order_no}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-zinc-800 p-4 pt-6 flex flex-col gap-4 rounded-lg">
        <div className="w-full h-full gap-4 grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
          {order.products.map((item, key) => {
            return <OrderProductItem key={key} item={item} />;
          })}
        </div>
        <hr className="border-gray-200 dark:border-zinc-700" />
        <div className="flex max-lg:flex-col justify-between items-center gap-4">
          <div className="flex lg:flex-col justify-between lg:items-start items-center gap-1 max-lg:w-full">
            <span className="dark:text-gray-400 text-gray-500 text-lg font-gemunu tracking-wide">
              Sipariş Tutarı
            </span>
            <div className="flex items-center max-lg:justify-center gap-2 leading-6">
              <span
                className={`font-medium text-lg ${
                  order.discount > 0 ? "text-green-500" : ""
                }`}
              >
                {getPrice(order.price)}
              </span>
              {order.discount > 0 && (
                <span className="line-through dark:text-gray-200 opacity-50 text-sm -mb-0.5">
                  {getPrice((order.discount * order.price) / 100 + order.price)}{" "}
                </span>
              )}
            </div>
          </div>
          <div className="flex max-lg:flex-col gap-3 items-center max-lg:w-full">
            <Link
              href={"/profilim/kargo-takibi/999999999"}
              className="flex justify-between items-center gap-2 dark:bg-zinc-900 max-lg:w-full bg-white shadow-md py-2 px-4 rounded-md font-gemunu text-lg tracking-wider hover:bg-site dark:hover:bg-site hover:text-white transition-all duration-300"
            >
              <LiaShippingFastSolid />
              Kargo Takibi
            </Link>
            <CustomButton
              title="İade Et"
              containerStyles="flex justify-between items-center gap-2 dark:bg-zinc-900 max-lg:w-full bg-white shadow-md py-2 px-4 rounded-md font-gemunu text-lg tracking-wider hover:bg-site dark:hover:bg-site hover:text-white transition-all duration-300"
              leftIcon={<HiArrowUturnLeft />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
