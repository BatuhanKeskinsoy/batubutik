"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import CustomButton from "@/components/others/CustomButton";
import { IoChevronForwardOutline } from "react-icons/io5";
import { homeFullViewSliderTypes } from "@/types/pages/homeTypes";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/Context/store";

interface ISliderOneProps {
  perView: number;
  data: homeFullViewSliderTypes[];
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

function SliderFullWidth({ perView, data }: ISliderOneProps) {
  const { isMobile } = useGlobalContext();
  const breakpoints = createBreakpoints(perView);
  const router = useRouter();

  return (
    <Swiper
      spaceBetween={0}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="relative lg:bg-black-900/30 bg-black-900/50 !z-0"
      breakpoints={breakpoints}
    >
      {data.map((slide, key) => (
        <SwiperSlide
          key={key}
          className="relative !flex items-end justify-center group bg-white"
        >
          <div className="container mx-auto px-4 grid grid-cols-1 lg:h-[800px] h-[400px] z-30">
            <div className="relative flex items-center text-left h-full w-full">
              <div className="flex flex-col w-full h-full justify-center lg:gap-24">
                <div className="max-lg:text-center flex flex-col max-lg:items-center max-lg:justify-center w-full max-lg:h-full max-lg:gap-8 gap-12">
                  <span className="font-semibold lg:text-3xl text-xl text-white/80">
                    {slide.text_1}
                  </span>
                  <span className="font-semibold lg:text-6xl text-5xl !leading-[6rem] max-lg:!leading-[3.5rem] text-white">
                    {slide.text_2}
                  </span>
                  <p className="lg:text-2xl text-base tracking-wide font-light text-white/70">
                    {slide.text_3}
                  </p>
                </div>
                <CustomButton
                  title={slide.button_text}
                  handleClick={() => router.push(slide.button_redirect)}
                  rightIcon={
                    <IoChevronForwardOutline className="text-2xl -mr-2" />
                  }
                  containerStyles="flex items-center justify-center text-center gap-4 mb-12 py-3 px-6 w-fit bg-white/20 text-white max-lg:w-full rounded-lg shadow-[0_-5px_30px_0_rgba(0,0,0,0.15)] hover:bg-site/20 hover:text-site transition-all duration-300"
                  textStyles="uppercase font-medium text-xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full bg-site/10 z-20"></div>
          <div className="absolute w-full h-full bg-black-900/50 z-10"></div>
          <Image
            src={isMobile ? slide.image.thumbnail : slide.image.original}
            alt={slide.text_1}
            title={slide.text_1}
            fill
            sizes="100vw"
            className="object-cover"
            quality={isMobile ? 50 : 90}
            priority={key === 0}
            decoding={key === 0 ? "async" : "auto"}
            fetchPriority={key === 0 ? "high" : "low"}
            loading={key !== 0 ? "lazy" : "eager"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderFullWidth;
