import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FeaturedProducts from "@/components/(front)/Product/FeaturedProducts/FeaturedProducts";
import Banner from "@/components/(front)/Home/Banner";
import SliderOne from "@/components/(front)/Sliders/SliderOne";
import Categories from "@/components/(front)/Home/Categories";

function Home() {
  return (
    <>
      <section>
        <Banner />
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-3 w-full mb-8 max-lg:text-center">
          <h2 className="text-4xl font-gemunu font-semibold tracking-wider">
            Kategoriler
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quisquam
          </p>
        </div>
        <Categories />
      </section>
      
      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-3 w-full mb-8 max-lg:text-center">
          <h2 className="text-4xl font-gemunu font-semibold tracking-wider">
            Öne Çıkan Ürünler
          </h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quisquam
          </p>
        </div>
        <FeaturedProducts />
      </section>
      
      <section>
        <SliderOne perView={4} />
      </section>
    </>
  );
}

export default Home;
