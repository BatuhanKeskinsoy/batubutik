"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CustomButton from "@/components/others/CustomButton";
import { IoCloseOutline } from "react-icons/io5";
import { useProductDetail } from "@/hooks/useProduct";
import Image from "next/image";
import { getPrice } from "@/lib/functions/getPrice";
import { getStar } from "@/lib/functions/getStar";

interface ModalProps {
  slug: string;
  onClose: () => void;
}

const ModalProductComment: React.FC<ModalProps> = ({ slug, onClose }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    document.body.classList.add("noScroll");
    return () => {
      document.body.classList.remove("noScroll");
    };
  }, []);

  const { productDetail, isLoading } = useProductDetail(slug);

  return ReactDOM.createPortal(
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-20">
      <div
        className="bg-gray-900/80 w-screen h-screen fixed left-0 top-0 transition-all duration-300 animate-sidebarBgSmooth z-10"
        onClick={onClose}
      ></div>
      {!isLoading ? (
        <>
          {productDetail && (
            <div className="relative bg-white dark:bg-zinc-900 rounded-lg 2xl:w-[calc(100vw-55%)] xl:w-[calc(100vw-50%)] lg:w-[calc(100vw-40%)] lg:h-[calc(100dvh-54%)] md:h-[calc(100dvh-54%)] w-[90vw] h-[95dvh] shadow-lg shadow-gray-600 dark:shadow-gray-800 transition-all duration-300 animate-modalContentSmooth z-20">
              <CustomButton
                containerStyles="absolute lg:-right-4 lg:-top-4 -right-4 -top-4 text-gray-600 dark:text-gray-200 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all duration-300 z-10 bg-white dark:bg-zinc-800 rounded-full"
                leftIcon={<IoCloseOutline className="text-4xl" />}
                handleClick={onClose}
              />
              <div className="flex flex-col w-full h-full gap-4">
                <div className="relative flex w-full h-full">
                  <div className="flex max-lg:flex-col gap-3 w-full h-full group">
                    <div className="lg:w-1/2 w-full h-full">
                      {productDetail.images && (
                        <div className="relative w-full h-full">
                          <Image
                            src={productDetail.images[0].thumbnail}
                            alt="add to cart product"
                            fill
                            sizes="(max-width: 768px) 50%, 20%"
                            className="object-cover lg:rounded-l-xl max-lg:rounded-t-xl"
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-full gap-2.5 lg:p-6 p-4 pt-0 lg:!pl-2 h-full overflow-y-auto">
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-gray-500 text-xs dark:text-gray-400 line-clamp-1">
                          {productDetail.mainCategory}
                          {productDetail.category &&
                            ` / ${productDetail.category}`}
                          {productDetail.subCategory &&
                            ` / ${productDetail.subCategory}`}
                        </span>
                        <span className="text-gray-500 text-xs dark:text-gray-400 min-w-max">
                          #{productDetail.code}
                        </span>
                      </div>
                      {productDetail.rating && (
                        <>
                          {(() => {
                            const size = 16;
                            return (
                              <div className="flex gap-2 items-center">
                                <div className="flex gap-0.5 items-center min-w-max">
                                  {Array.from({ length: 5 }).map((_, index) => (
                                    <div
                                      key={index}
                                      className={`relative min-w-[${size}px] w-[${size}px] h-[${size}px}`}
                                    >
                                      {getStar(
                                        index + 1,
                                        productDetail.rating || 0,
                                        size
                                      )}
                                    </div>
                                  ))}
                                </div>
                                <p
                                  className={`-mb-1`}
                                  style={{ fontSize: size - 4 }}
                                >
                                  ({productDetail.rating})
                                </p>
                              </div>
                            );
                          })()}
                        </>
                      )}
                      <div className="flex flex-col w-full gap-1">
                        <span className="font-medium line-clamp-1 group-hover:text-site transition-all duration-300 lg:text-lg text-base">
                          {productDetail.brand && (
                            <>
                              <span className="font-bold tracking-wide text-site">
                                {productDetail.brand}
                              </span>{" "}
                            </>
                          )}
                          {productDetail.title}
                        </span>
                        <p className="line-clamp-2 text-gray-600 dark:text-gray-400 text-sm">
                          {productDetail.short_text}
                        </p>
                      </div>
                      <hr className="dark:border-zinc-800" />
                      <div className="flex flex-col gap-2">
                        <span className="text-base">
                          Yorum Yapın
                        </span>
                        <label
                          htmlFor="comment"
                          className="flex flex-col gap-4 w-full"
                        >
                          <textarea
                            cols={6}
                            rows={3}
                            required
                            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 focus:border-site/50 dark:focus:border-site/50 rounded-lg py-3 px-4 outline-none w-full text-sm"
                            placeholder="Yorumunuzu giriniz"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="flex max-lg:flex-col justify-between items-center mt-2 gap-2">
                        <div className="flex lg:flex-col max-lg:justify-between max-lg:w-full gap-2">
                          <span className="text-base">
                            Puan Verin
                          </span>
                          {(() => {
                            const size = 20;
                            return (
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1 items-center min-w-max">
                                  {Array.from({ length: 5 }).map((_, index) => (
                                    <div
                                      key={index}
                                      className={`relative cursor-pointer min-w-[${size}px] w-[${size}px] h-[${size}px]`}
                                      onClick={() => setRate(index + 1)}
                                    >
                                      {getStar(index + 1, rate || 0, size)}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                        <CustomButton
                          title="Değerlendirmeyi Onayla"
                          containerStyles="mt-1.5 flex lg:justify-end justify-center text-base dark:bg-zinc-800 bg-gray-200 hover:bg-site dark:hover:bg-site hover:text-white w-full lg:w-fit py-2 px-4 rounded-md transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="animate-modalContentSmooth z-10">
          <div className="animate-spin rounded-full m-0.5 lg:size-24 size-16 border-t-4 border-b-4 border-gray-200 group-hover:border-white"></div>
        </div>
      )}
    </div>,
    document.body
  );
};

export default ModalProductComment;
