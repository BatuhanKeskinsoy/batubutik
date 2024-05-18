"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// https://razziwp.com/fashion/

const sliderPictures = [
  "/assets/slider/slider.webp",
  "/assets/slider/slider2.webp",
  "/assets/slider/slider3.webp",
  "/assets/slider/slider4.webp",
  "/assets/slider/slider5.webp",
  "/assets/slider/slider6.webp",
];

function SliderOne() {
  return (
    <Swiper
      spaceBetween={0}
      modules={[Autoplay]}
      className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full h-[calc(100vh-200px)]"
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1360: {
          slidesPerView: 4,
        },
      }}
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
            <p className="text-center text-lg text-gray-200">Zarafetin Özgürlüğü..</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderOne;
