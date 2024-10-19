import CustomButton from "@/components/others/CustomButton";
import { siteURL } from "@/constants/(front)";
import { convertDate } from "@/lib/functions/convertDate";
import { getPrice } from "@/lib/functions/getPrice";
import { orderTypes } from "@/types/order/orderTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowUturnLeft } from "react-icons/hi2";
import {
  IoChatbubbleEllipsesOutline,
  IoDocumentTextOutline,
  IoOpenOutline,
} from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";

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
            const categorySlug = item.product.category_slug
              ? `/${item.product.category_slug}`
              : "";
            const subCategorySlug = item.product.subCategory_slug
              ? `/${item.product.subCategory_slug}`
              : "";
            const redirect = `${siteURL}/magaza/${item.product?.mainCategory_slug}${categorySlug}${subCategorySlug}/${item.product.slug}`;
            return (
              <div
                key={key}
                className="relative flex gap-4 items-center dark:bg-zinc-900 rounded-xl bg-white shadow-lg p-3"
              >
                {item.product.images && (
                  <Link
                    href={redirect}
                    title={`${item.product.brand || ""} ${item.product.title}`}
                    className={`relative rounded-lg shadow-md shadow-gray-400 dark:shadow-gray-800 overflow-hidden transition-all duration-300 lg:min-w-[100px] lg:w-[100px] lg:h-[156px] min-w-24 w-24 h-40`}
                  >
                    <Image
                      src={item.product.images[0].thumbnail}
                      fill
                      sizes="(max-width: 768px) 100%, 25%"
                      alt={`${item.product.brand || ""} ${item.product.title}`}
                      title={`${item.product.brand || ""} ${
                        item.product.title
                      }`}
                      className="object-cover hover:scale-105 transition-all duration-300"
                    />
                  </Link>
                )}
                <div
                  className={`flex flex-col justify-around h-full items-start w-full gap-2`}
                >
                  <div className="flex flex-col gap-2 w-full h-full justify-around">
                    <div className="h-full flex flex-col gap-2 w-full justify-around">
                      <div className={`flex flex-col w-full gap-1`}>
                        <Link
                          href={redirect}
                          title={`${item.product.brand || ""} ${
                            item.product.title
                          }`}
                          className={`font-medium line-clamp-1 transition-all duration-300 hover:text-site w-fit text-base`}
                        >
                          <span className="font-bold tracking-wide text-site">
                            {item.product.brand || ""}
                          </span>{" "}
                          {item.product.title}
                        </Link>
                        <span className={`text-gray-500 text-xs`}>
                          {item.product.mainCategory}
                          {item.product.category &&
                            ` / ${item.product.category}`}
                          {item.product.subCategory &&
                            ` / ${item.product.subCategory}`}
                        </span>
                      </div>
                      <div
                        className={`flex flex-wrap gap-x-2 gap-y-1 line-clamp-2 max-w-full text-xs`}
                      >
                        {item.product.attributes &&
                          item.attributes?.map((attr, key) => (
                            <div
                              key={key}
                              className="flex after:content-[','] last:after:content-none max-w-full"
                            >
                              <div className="flex items-center gap-1 min-w-max">
                                <span className="text-site">
                                  {attr?.attr_title} :
                                </span>
                                <span>{attr?.attr_options.option_name}</span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className={`flex items-center gap-2 text-sm`}>
                        <span
                          className={`font-medium ${
                            item.product.discount > 0
                              ? "text-green-500 text-base"
                              : ""
                          }`}
                        >
                          {getPrice(item.product.price)}
                        </span>
                        {item.product.discount > 0 && (
                          <span className="line-through text-gray-500">
                            {getPrice(
                              (item.product.discount * item.product.price) /
                                100 +
                                item.product.price
                            )}{" "}
                          </span>
                        )}
                      </div>
                    </div>

                    <Link
                      href={redirect}
                      title={"Ürünü Değerlendir"}
                      className="flex gap-2 items-center justify-center px-2 py-1 dark:bg-zinc-800 bg-gray-100 rounded-lg hover:bg-site dark:hover:bg-site hover:text-white transition-all duration-300 text-sm font-gemunu tracking-wider"
                    >
                      <IoChatbubbleEllipsesOutline />
                      Ürünü Değerlendir
                    </Link>
                  </div>
                </div>
                <Link
                  href={redirect}
                  title={"Yeni Sekmede Aç"}
                  target="_blank"
                  className="absolute -top-3 -right-3 flex gap-2 items-center p-1.5 dark:bg-zinc-900 bg-white rounded-full hover:bg-site dark:hover:bg-site hover:text-white transition-all duration-300 border-4 dark:border-zinc-800 border-gray-100"
                >
                  <IoOpenOutline className="text-sm" />
                </Link>
              </div>
            );
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
              href={"/"}
              className="flex justify-between items-center gap-2 dark:bg-zinc-900 max-lg:w-full bg-white shadow-md py-2 px-4 rounded-md font-gemunu text-lg tracking-wider hover:bg-site dark:hover:bg-site transition-all duration-300"
            >
              <IoDocumentTextOutline />
              Faturayı İndir
            </Link>
            <Link
              href={"/profilim/kargo-takibi/999999999"}
              className="flex justify-between items-center gap-2 dark:bg-zinc-900 max-lg:w-full bg-white shadow-md py-2 px-4 rounded-md font-gemunu text-lg tracking-wider hover:bg-site dark:hover:bg-site transition-all duration-300"
            >
              <LiaShippingFastSolid />
              Kargo Takibi
            </Link>
            <CustomButton
              title="İade Et"
              containerStyles="flex justify-between items-center gap-2 dark:bg-zinc-900 max-lg:w-full bg-white shadow-md py-2 px-4 rounded-md font-gemunu text-lg tracking-wider hover:bg-site dark:hover:bg-site transition-all duration-300"
              leftIcon={<HiArrowUturnLeft />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
