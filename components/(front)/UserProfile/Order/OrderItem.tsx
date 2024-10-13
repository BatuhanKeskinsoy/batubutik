import { siteURL } from "@/constants/(front)";
import { convertDate } from "@/lib/functions/convertDate";
import { getPrice } from "@/lib/functions/getPrice";
import { orderTypes } from "@/types/order/orderTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProfileOrderItemProps {
  order: orderTypes;
}

function OrderItem({ order }: IProfileOrderItemProps) {
  return (
    <div className="relative w-full pl-6 py-4 first:pt-0 last:pb-0">
      <div className="border-l-2 border-gray-200 dark:border-zinc-800 absolute h-full left-2 top-0 first:mt-4"></div>
      <div className="relative mb-2">
        <span className="absolute w-4 h-4 bg-gray-600 dark:bg-zinc-500 rounded-full left-[-23px] top-1/2 transform -translate-y-1/2"></span>
        <div className="flex items-center justify-between pl-1 font-gemunu lg:tracking-wider tracking-wide lg:text-lg text-base text-gray-600 dark:text-gray-400">
          <span>{convertDate(order.created_at)}</span>
          <div className="flex items-center gap-1">
            <span className="hidden lg:block">Sipariş No :</span>
            <span className="block lg:hidden">S. No :</span>
            <span className="font-system lg:text-base text-sm -mb-0.5">
              {order.order_no}
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-zinc-800 p-4 flex flex-col gap-4">
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
                className="flex gap-4 items-center dark:bg-zinc-900 rounded-xl bg-white shadow-lg p-3 pr-2"
              >
                {item.product.images && (
                  <Link
                    href={redirect}
                    title={`${item.product.brand || ""} ${item.product.title}`}
                    className={`relative rounded-lg shadow-lg shadow-gray-400 dark:shadow-gray-800 overflow-hidden transition-all duration-300 lg:min-w-[100px] lg:w-[100px] lg:h-[156px] min-w-24 w-24 h-40`}
                  >
                    <Image
                      src={item.product.images[0].thumbnail}
                      fill
                      sizes="(max-width: 768px) 100%, 25%"
                      alt={`${item.product.brand || ""} ${item.product.title}`}
                      title={`${item.product.brand || ""} ${
                        item.product.title
                      }`}
                      className="object-cover"
                    />
                  </Link>
                )}
                <div
                  className={`flex flex-col justify-around h-full items-start w-full gap-2`}
                >
                  <div className="flex flex-col gap-2 w-full h-full justify-around">
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
                        {item.product.category && ` / ${item.product.category}`}
                        {item.product.subCategory &&
                          ` / ${item.product.subCategory}`}
                      </span>
                    </div>
                    <div
                      className={`flex  flex-wrap gap-x-2 gap-y-1 line-clamp-2 max-w-full text-xs`}
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
                            (item.product.discount * item.product.price) / 100 +
                              item.product.price
                          )}{" "}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="border-gray-200 dark:border-zinc-700" />
        Ödenen Tutar: {getPrice(order.price)}
        {/* Ürünü değerlendir, Tekrar satın al, Kargo takibi, Faturayı Görüntüle, Ürün iadesi */}
      </div>
    </div>
  );
}

export default OrderItem;
