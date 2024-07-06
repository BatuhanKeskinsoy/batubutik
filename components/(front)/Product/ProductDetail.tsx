"use client";
import React, { useState } from "react";
import ProductArea from "@/components/(front)/Product/ProductArea";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import CustomButton from "@/components/others/CustomButton";

interface IProductDetailProps {
  product: productDetailTypes;
}

function ProductDetail({ product }: IProductDetailProps) {
  const [activeTab, setActiveTab] = useState("info");
  return (
    <main>
      <div className="flex flex-col w-full lg:gap-8 gap-4">
        <ProductArea product={product} isDetail />
        <hr />
        <div className="flex flex-col w-full gap-4">
          <div className="flex gap-2 overflow-x-auto lg:w-fit max-lg:pb-2">
            <CustomButton
              title="Ürün Bilgileri"
              containerStyles={`flex items-center justify-center text-center gap-4 py-3 px-6 w-fit border max-lg:w-full transition-all duration-300 max-lg:min-w-max font-gemunu text-xl tracking-wider ${
                activeTab === "info"
                  ? "border-transparent bg-site text-white"
                  : "bg-white/20 hover:border-transparent hover:bg-site/10 hover:text-site border-gray-200"
              }`}
              handleClick={() => setActiveTab("info")}
            />
            <CustomButton
              title="Ürün Değerlendirmeleri"
              containerStyles={`flex items-center justify-center text-center gap-4 py-3 px-6 w-fit border max-lg:w-full transition-all duration-300 max-lg:min-w-max font-gemunu text-xl tracking-wider ${
                activeTab === "comments"
                  ? "border-transparent bg-site text-white"
                  : "bg-white/20 hover:border-transparent hover:bg-site/10 hover:text-site border-gray-200"
              }`}
              handleClick={() => setActiveTab("comments")}
            />
            <CustomButton
              title="Taksit Seçenekleri"
              containerStyles={`flex items-center justify-center text-center gap-4 py-3 px-6 w-fit border max-lg:w-full transition-all duration-300 max-lg:min-w-max font-gemunu text-xl tracking-wider ${
                activeTab === "purchase"
                  ? "border-transparent bg-site text-white"
                  : "bg-white/20 hover:border-transparent hover:bg-site/10 hover:text-site border-gray-200"
              }`}
              handleClick={() => setActiveTab("purchase")}
            />
            <CustomButton
              title="İptal ve İade Koşulları"
              containerStyles={`flex items-center justify-center text-center gap-4 py-3 px-6 w-fit border max-lg:w-full transition-all duration-300 max-lg:min-w-max font-gemunu text-xl tracking-wider ${
                activeTab === "return"
                  ? "border-transparent bg-site text-white"
                  : "bg-white/20 hover:border-transparent hover:bg-site/10 hover:text-site border-gray-200"
              }`}
              handleClick={() => setActiveTab("return")}
            />
          </div>
          <div className="lg:bg-gray-100 lg:p-4">
            {activeTab === "info" ? (
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto reiciendis nisi ab vero ipsam dolore adipisci provident autem aliquid! Architecto voluptatem quisquam consequuntur minus dolore explicabo ut repudiandae assumenda minima.</div>
            ) : activeTab === "comments" ? (
              <div>Yorumlar</div>
            ) : activeTab === "purchase" ? (
              <div>Taksit Seçenekleri</div>
            ) : activeTab === "return" ? (
              <div>İade Falan Edemezsiniz</div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
