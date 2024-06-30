import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FeaturedProducts from "@/components/(front)/Product/FilteredProducts/FeaturedProducts";
import Banner from "@/components/(front)/Home/Banner";
import Categories from "@/components/(front)/Home/Categories";
import NewProducts from "@/components/(front)/Product/FilteredProducts/NewProducts";
import BestSellingProducts from "@/components/(front)/Product/FilteredProducts/BestSellingProducts";
import Subscribe from "@/components/(front)/inc/Subscribe";

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
          <h3 className="text-4xl font-gemunu font-semibold tracking-wider">
            Öne Çıkan Ürünler
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quisquam
          </p>
        </div>
        <FeaturedProducts />
      </section>
      
      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-3 w-full mb-8 max-lg:text-center">
          <h3 className="text-4xl font-gemunu font-semibold tracking-wider">
            Yeni Ürünler
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quisquam
          </p>
        </div>
        <NewProducts />
      </section>
      
      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-3 w-full mb-8 max-lg:text-center">
          <h3 className="text-4xl font-gemunu font-semibold tracking-wider">
            En Çok Satılan Ürünler
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quisquam
          </p>
        </div>
        <BestSellingProducts />
      </section>

      <section>
        <Subscribe />
      </section>
    </>
  );
}

export default Home;
