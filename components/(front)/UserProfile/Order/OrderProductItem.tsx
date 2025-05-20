"use client";
import ModalProductComment from "@/components/modals/ModalProductComment";
import CustomButton from "@/components/others/CustomButton";
import { siteURL } from "@/constants/(front)";
import { getPrice } from "@/lib/functions/getPrice";
import { orderProductTypes } from "@/types/order/orderTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline, IoOpenOutline } from "react-icons/io5";

interface IOrderProductItemProps {
  item: orderProductTypes;
}
function OrderProductItem({ item }: IOrderProductItemProps) {
  const [sendProductCommentModal, setSendProductCommentModal] = useState(false);

  const handleSendProductCommentModal = async (e: any) => {
    e.preventDefault();
    setSendProductCommentModal(true);
  };

  const categorySlug = item.product.category_slug
    ? `/${item.product.category_slug}`
    : "";
  const subCategorySlug = item.product.subCategory_slug
    ? `/${item.product.subCategory_slug}`
    : "";
  const redirect = `${siteURL}/magaza/${item.product?.mainCategory_slug}${categorySlug}${subCategorySlug}/${item.product.slug}`;

  return (
    <>
      {sendProductCommentModal && (
        <ModalProductComment
          slug={item.product.slug}
          onClose={() => setSendProductCommentModal(false)}
        />
      )}
      <div className="relative flex gap-4 items-center dark:bg-zinc-900 rounded-xl bg-white shadow-lg p-3">
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
              title={`${item.product.brand || ""} ${item.product.title}`}
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
                  title={`${item.product.brand || ""} ${item.product.title}`}
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
                  {item.product.subCategory && ` / ${item.product.subCategory}`}
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
                        <span className="text-site">{attr?.attr_title} :</span>
                        <span>{attr?.attr_options.option_name}</span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className={`flex items-center gap-2 text-sm`}>
                <span
                  className={`font-medium ${
                    item.product.discount > 0 ? "text-green-500 text-base" : ""
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

            <CustomButton
              leftIcon={<IoChatbubbleEllipsesOutline />}
              title={"Ürünü Değerlendir"}
              containerStyles="flex gap-2 items-center justify-center px-2 py-1.5 dark:bg-zinc-800 bg-gray-100 rounded-lg hover:bg-site dark:hover:bg-site hover:text-white transition-all duration-300 text-xs"
              handleClick={(e) => handleSendProductCommentModal(e)}
            />
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
    </>
  );
}

export default OrderProductItem;
