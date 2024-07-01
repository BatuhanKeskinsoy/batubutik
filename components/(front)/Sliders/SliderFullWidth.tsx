"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import CustomButton from "@/components/others/CustomButton";
import { IoChevronForwardOutline } from "react-icons/io5";
import { generals } from "@/constants/(front)";

// https://razziwp.com/fashion/

const sliderPictures = [
  "/assets/banner/banner.webp",
  "/assets/banner/banner2.webp",
  "/assets/banner/banner3.webp",
];

interface ISliderOneProps {
  perView: number;
}

function createBreakpoints(perView: number) {
  const breakpoints: { [key: number]: { slidesPerView: number } } = {};

  breakpoints[0] = { slidesPerView: 1 };
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
          className="relative !flex items-end justify-center group bg-white"
        >
          <div className="container mx-auto px-4 grid grid-cols-1 lg:h-[800px] z-30">
            <div className="relative flex items-center text-left h-full w-full">
              <div className="flex flex-col w-full lg:h-full justify-center max-lg:gap-12 gap-28 py-12">
                <div className="max-lg:text-center flex flex-col max-lg:items-center max-lg:justify-betweenw-full max-lg:h-full max-lg:gap-4 gap-12">
                  <span className="font-gemunu tracking-widest font-semibold lg:text-4xl text-xl text-white/80">
                    2024 {generals.site_name} Koleksiyonu
                  </span>
                  <h1 className="font-semibold lg:text-7xl text-5xl text-white font-gemunu tracking-wide">
                    Zarafetin Özgürlüğü
                  </h1>
                  <p className="lg:text-2xl text-base tracking-wide font-light text-white/70">
                    Ayrıcalıklı {generals.site_name} koleksiyonunu keşfedin!
                  </p>
                </div>
                <CustomButton
                  title="KOLEKSİYONU KEŞFET"
                  rightIcon={
                    <IoChevronForwardOutline className="text-2xl -mr-2" />
                  }
                  containerStyles="flex items-center justify-center text-center gap-4 py-3 px-6 w-fit bg-white/20 text-white max-lg:w-full rounded-lg font-gemunu tracking-widest shadow-[0_-5px_30px_0_rgba(0,0,0,0.15)] hover:bg-site/20 hover:text-site transition-all duration-300"
                  textStyles="uppercase font-medium lg:text-2xl text-xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full bg-site/10 z-20"></div>
          <div className="absolute w-full h-full bg-black-900/50 z-10"></div>
          <Image
            src={picture}
            alt="banner"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover"
            priority
            quality={100}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderFullWidth;
