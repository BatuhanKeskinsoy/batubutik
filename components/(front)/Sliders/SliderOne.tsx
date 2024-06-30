"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductItem from "@/components/(front)/Product/ProductItem";
import { productTypes } from "@/types/product/productTypes";

// https://razziwp.com/fashion/

interface ISliderOneProps {
  products: productTypes[];
  perView: number;
}

function createBreakpoints(perView: number) {
  const breakpoints: { [key: number]: { slidesPerView: number } } = {};

  breakpoints[0] = { slidesPerView: 2 };
  if (perView >= 2) {
    breakpoints[768] = { slidesPerView: 2 };
  }
  if (perView >= 3) {
    breakpoints[1024] = { slidesPerView: 3 };
  }
  if (perView >= 4) {
    breakpoints[1360] = { slidesPerView: 4 };
  }
  if (perView >= 5) {
    breakpoints[1780] = { slidesPerView: 5 };
  }

  return breakpoints;
}

function SliderOne({ products, perView }: ISliderOneProps) {
  const breakpoints = createBreakpoints(perView);

  return (
    <Swiper
      spaceBetween={24}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="w-full"
      loop={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      breakpoints={breakpoints}
    >
      {products.map((product, key) => (
        <SwiperSlide
          key={key}
          className="relative !flex items-end justify-center cursor-pointer group"
        >
          <ProductItem product={product} height={450} mobileHeight={290} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderOne;
