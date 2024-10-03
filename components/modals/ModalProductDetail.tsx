"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CustomButton from "@/components/others/CustomButton";
import ProductArea from "@/components/(front)/Product/ProductArea";
import { IoCloseOutline } from "react-icons/io5";
import { productDetailTypes } from "@/types/product/productDetailTypes";

interface ModalProps {
  productDetail: productDetailTypes | undefined;
  onClose: () => void;
}

const ModalProductDetail: React.FC<ModalProps> = ({
  productDetail,
  onClose,
}) => {
  useEffect(() => {
    document.body.classList.add("noScroll");
    return () => {
      document.body.classList.remove("noScroll");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed w-screen h-screen top-0 left-0 flex lg:items-center items-start lg:justify-center justify-start z-20">
      <div
        className="bg-gray-900/70 w-screen h-screen fixed left-0 top-0 transition-all duration-300 animate-sidebarBgSmooth z-10"
        onClick={onClose}
      ></div>
      <div className="relative bg-white dark:bg-zinc-900 rounded-sm 2xl:w-[calc(100vw-34%)] xl:w-[calc(100vw-250px)] lg:w-[calc(100vw-250px)] lg:h-[calc(100dvh-18%)] w-screen h-[100dvh] shadow-lg shadow-gray-600 dark:shadow-gray-800 transition-all duration-300 animate-modalContentSmooth z-20">
        <CustomButton
          containerStyles="absolute lg:-right-4 lg:-top-4 right-6 top-6 text-gray-600 dark:text-gray-200 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all duration-300 z-10 bg-white dark:bg-zinc-800 rounded-full"
          leftIcon={<IoCloseOutline className="text-4xl" />}
          handleClick={onClose}
        />

        <div className="w-full h-full lg:overflow-hidden overflow-y-auto">
          <ProductArea product={productDetail} onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalProductDetail;
