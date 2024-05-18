import React from "react";
import SliderOne from "@/components/(front)/Sliders/SliderOne";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FeaturedProducts from "@/components/(front)/Product/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <>
      <SliderOne />
      <div className="container mx-auto px-4 flex flex-col gap-6">
        <h1 className="text-4xl font-semibold font-gemunu">Öne Çıkan Ürünler</h1>
        <FeaturedProducts />
      </div>
    </>
  );
}

export default Home;
