"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import CustomButton from "@/components/others/CustomButton";
import { IoChevronForwardOutline } from "react-icons/io5";

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
          className="relative !flex items-end justify-center cursor-pointer group bg-white"
        >
          <div className="container mx-auto px-4 lg:pb-32 grid grid-cols-1 h-[calc(100vh-144px)] lg:h-[800px]">
            <div className="relative flex items-center text-left h-full w-full">
              <div className="max-lg:text-center flex flex-col max-lg:items-center max-lg:justify-between py-12 w-full max-lg:h-full gap-8 lg:p-4">
                <span className="font-gemunu tracking-widest font-semibold lg:text-4xl text-2xl text-white/80">
                  2024 Batubutik Koleksiyonu
                </span>
                <div className="flex flex-col justify-center py-8 w-full h-full gap-8">
                  <span className="font-semibold lg:text-7xl text-5xl text-site font-gemunu tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,1)]">
                    Zarafetin Özgürlüğü
                  </span>
                  <p className="lg:text-2xl text-xl tracking-wide font-light text-white/70">
                    Ayrıcalıklı Batubutik koleksiyonunu keşfedin!
                  </p>
                </div>
                <CustomButton
                  title="KOLEKSİYONU KEŞFET"
                  rightIcon={<IoChevronForwardOutline className="text-2xl -mr-2" />}
                  containerStyles="flex items-center justify-center text-center gap-4 py-3 px-6 w-fit bg-white/20 text-white max-lg:w-full rounded-lg font-gemunu tracking-widest text-xl shadow-[0_-5px_30px_0_rgba(0,0,0,0.15)] hover:bg-site/20 hover:text-site transition-all duration-300"
                  textStyles="uppercase font-medium"
                />
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
