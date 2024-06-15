import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FeaturedProducts from "@/components/(front)/Product/FeaturedProducts/FeaturedProducts";
import Banner from "@/components/(front)/Home/Banner";
import SliderOne from "@/components/(front)/Sliders/SliderOne";

function Home() {
  return (
    <>
      <Banner />
      <SliderOne perView={4} />
      <div className="container mx-auto px-4 flex flex-col gap-6">
        <h1 className="text-4xl font-semibold font-gemunu">
          Öne Çıkan Ürünler
        </h1>
        <FeaturedProducts />
      </div>
    </>
  );
}

export default Home;
