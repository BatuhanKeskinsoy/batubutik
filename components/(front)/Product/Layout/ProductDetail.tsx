"use client";
import React, { useState, useRef } from "react";
import ProductArea from "@/components/(front)/Product/Layout/Content/ProductArea";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import CustomButton from "@/components/others/CustomButton";
import Comments from "@/components/(front)/Comments/Comments";
import { generalsTypes } from "@/types/generalTypes";
import { ProductCommentTypes } from "@/types/product/comments/productCommentTypes";
import ProductDetailSidebar from "@/components/(front)/Product/Layout/ProductDetailSidebar";
import SliderOne from "@/components/(front)/Sliders/SliderOne";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IProductDetailProps {
  product: productDetailTypes;
  comments: ProductCommentTypes[];
  generals: generalsTypes;
}

function ProductDetail({ product, comments, generals }: IProductDetailProps) {
  const [activeTab, setActiveTab] = useState("info");
  const tabMenuRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex max-lg:flex-col lg:gap-8 gap-4 container px-0">
        <div className="flex flex-col w-full lg:gap-8 gap-4">
          <ProductArea
            product={product}
            setActiveTab={setActiveTab}
            tabMenuRef={tabMenuRef}
            isDetail
          />
          <div className="container mx-auto px-4 flex lg:flex-row flex-col lg:gap-8 gap-4">
            <div className="flex flex-col w-full gap-4">
              <div className="flex gap-2 overflow-x-auto lg:w-fit max-lg:pb-2">
                <CustomButton
                  title="Ürün Bilgileri"
                  containerStyles={`flex items-center justify-center text-center gap-4 py-3 px-6 w-fit border max-lg:w-full transition-all duration-300 max-lg:min-w-max font-gemunu text-xl tracking-wider ${
                    activeTab === "info"
                      ? "border-transparent bg-site text-white"
                      : "bg-white/20 dark:bg-zinc-900 hover:border-transparent dark:hover:border-transparent hover:bg-site/10 dark:hover:bg-site/10 hover:text-site dark:hover:text-site border-gray-200 dark:border-zinc-800"
                  }`}
                  handleClick={() => setActiveTab("info")}
                />
                <CustomButton
                  title="Ürün Değerlendirmeleri"
                  containerStyles={`flex items-center justify-center text-center gap-4 py-3 px-6 w-fit border max-lg:w-full transition-all duration-300 max-lg:min-w-max font-gemunu text-xl tracking-wider ${
                    activeTab === "comments"
                      ? "border-transparent bg-site text-white"
                      : "bg-white/20 dark:bg-zinc-900 hover:border-transparent dark:hover:border-transparent hover:bg-site/10 dark:hover:bg-site/10 hover:text-site dark:hover:text-site border-gray-200 dark:border-zinc-800"
                  }`}
                  handleClick={() => setActiveTab("comments")}
                />
                {generals.return_conditions && (
                  <CustomButton
                    title="İptal ve İade Koşulları"
                    containerStyles={`flex items-center justify-center text-center gap-4 py-3 px-6 w-fit border max-lg:w-full transition-all duration-300 max-lg:min-w-max font-gemunu text-xl tracking-wider ${
                      activeTab === "return"
                        ? "border-transparent bg-site text-white"
                        : "bg-white/20 dark:bg-zinc-900 hover:border-transparent dark:hover:border-transparent hover:bg-site/10 dark:hover:bg-site/10 hover:text-site dark:hover:text-site border-gray-200 dark:border-zinc-800"
                    }`}
                    handleClick={() => setActiveTab("return")}
                  />
                )}
              </div>
              <hr className="dark:border-zinc-800" />
              <div ref={tabMenuRef}>
                {activeTab === "info" ? (
                  <div
                    className="dangeriousContent lg:leading-8 leading-7"
                    dangerouslySetInnerHTML={{ __html: product.content }}
                  />
                ) : activeTab === "comments" ? (
                  <Comments generals={generals} comments={comments} />
                ) : activeTab === "return" ? (
                  generals && generals.return_conditions ? (
                    <div
                      className="dangeriousContent lg:leading-8 leading-7"
                      dangerouslySetInnerHTML={{
                        __html: generals.return_conditions,
                      }}
                    />
                  ) : null
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <hr className="lg:hidden dark:border-zinc-800" />
        <ProductDetailSidebar
          title={product.title}
          description={
            product.meta_description
              ? product.meta_description
              : product.short_text
          }
          tags={product.tags}
        />
      </div>
      <hr className="dark:border-zinc-800" />
      <section className="container mx-auto px-4 flex flex-col gap-8">
        <span className="font-gemunu lg:text-4xl text-3xl tracking-wider font-medium">
          Sizin İçin Seçtiklerimiz
        </span>
        <SliderOne perView={5} products={product.other_products} />
      </section>
    </div>
  );
}

export default ProductDetail;
