"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// https://razziwp.com/fashion/

const sliderPictures = [
  "/assets/banner/banner.jpg",
  "/assets/banner/banner2.jpg",
  "/assets/banner/banner3.jpg",
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

function SliderFullWidth({ perView }: ISliderOneProps) {
  const breakpoints = createBreakpoints(perView);

  return (
    <Swiper
      spaceBetween={0}
      modules={[Autoplay]}
      className="relative lg:bg-black-900/30 bg-black-900/50 !z-0"
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
            <div className="container mx-auto px-4 lg:pb-32 grid grid-cols-1 h-[70vh] lg:h-[800px]">
              <div className="relative flex justify-between items-center text-left h-full w-full">
                <div className="max-lg:text-center flex flex-col gap-8 p-4">
                  <span className="font-gemunu tracking-widest font-semibold lg:text-4xl text-2xl text-white/80">
                    2024 Batubutik Koleksiyonu
                  </span>
                  <span className="font-semibold lg:text-7xl text-4xl text-white">
                    Zarafetin Özgürlüğü
                  </span>
                  <p className="lg:text-2xl text-xl tracking-wide font-light text-white/70">
                    1.000,00 ₺ ve üzeri alışverişlerinizde Kargo Ücretsiz!
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={picture}
              alt="banner"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover -z-10"
            />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderFullWidth;
