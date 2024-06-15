"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// https://razziwp.com/fashion/

const sliderPictures = [
  "/assets/slider/slider_one/slider.webp",
  "/assets/slider/slider_one/slider2.webp",
  "/assets/slider/slider_one/slider3.webp",
  "/assets/slider/slider_one/slider4.webp",
  "/assets/slider/slider_one/slider5.webp",
  "/assets/slider/slider_one/slider6.webp",
];

interface ISliderOneProps {
  perView: number;
}

function createBreakpoints(perView: number) {
  const breakpoints: { [key: number]: { slidesPerView: number } } = {};

  breakpoints[480] = { slidesPerView: 1 };
  if (perView >= 2) {
    breakpoints[768] = { slidesPerView: 2 };
  }
  if (perView >= 3) {
    breakpoints[1024] = { slidesPerView: 3 };
  }
  if (perView >= 4) {
    breakpoints[1360] = { slidesPerView: 4 };
  }

  return breakpoints;
}

function SliderOne({ perView }: ISliderOneProps) {
  const breakpoints = createBreakpoints(perView);

  return (
    <Swiper
      spaceBetween={0}
      modules={[Autoplay]}
      className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full h-[calc(100dvh-200px)]"
      loop={true}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
      }}
      breakpoints={breakpoints}
    >
      {sliderPictures.map((picture, key) => (
        <SwiperSlide
          key={key}
          className="relative !flex items-end justify-center cursor-pointer group"
        >
          <Image
            fill
            src={picture}
            sizes="(max-width: 768px) 100%, 25%"
            alt="Örnek Slider"
            className="object-cover brightness-75 lg:group-hover:brightness-100 transition-all duration-300"
          />
          <div className="absolute w-full from-transparent h-[50%] lg:group-hover:from-black/70 bg-gradient-to-t transition-all duration-300 translate-y-full lg:group-hover:translate-y-0"></div>
          <div className="flex flex-col gap-3 z-10 p-12 justify-end items-center h-[50%] w-full">
            <span className="font-semibold text-3xl text-white">
              Bralet Takım
            </span>
            <p className="text-center text-lg text-gray-200">
              Zarafetin Özgürlüğü..
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderOne;
