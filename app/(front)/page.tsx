import React from "react";
import FeaturedProducts from "@/components/(front)/Product/FilteredProducts/FeaturedProducts";
import Banner from "@/components/(front)/Home/Banner";
import Categories from "@/components/(front)/Home/Categories";
import NewProducts from "@/components/(front)/Product/FilteredProducts/NewProducts";
import BestSellingProducts from "@/components/(front)/Product/FilteredProducts/BestSellingProducts";
import Contact from "@/components/(front)/Contact/Contact";
import { generals, instantProducts } from "@/constants/(front)";
import About from "@/components/(front)/About/About";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  return (
    <main className="flex flex-col w-full gap-12">
      <section>
        <Banner />
      </section>

      <section className="container mx-auto px-4 lg:-mt-28">
        <Categories />
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
          <h3 className="text-4xl font-gemunu font-semibold tracking-wider">
            Öne Çıkan Ürünler
          </h3>
          <p className="text-gray-500">
            {generals.site_name} koleksiyonu içerisinde öne çıkan ürünler
          </p>
        </div>
        <FeaturedProducts products={instantProducts} />
      </section>

      <section className="bg-gray-100 dark:bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
            <h3 className="text-4xl font-gemunu font-semibold tracking-wider">
              Yeni Ürünler
            </h3>
            <p className="text-gray-500">
              {generals.site_name} koleksiyonuna eklenen en yeni ürünler
            </p>
          </div>
          <NewProducts products={instantProducts} />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
          <h3 className="text-4xl font-gemunu font-semibold tracking-wider">
            En Çok Satılan Ürünler
          </h3>
          <p className="text-gray-500">
            {generals.site_name} koleksiyonu içerisinde en çok talep edilen ve
            en çok satılan ürünler
          </p>
        </div>
        <BestSellingProducts products={instantProducts} />
      </section>

      <section className="bg-gray-100 dark:bg-zinc-800 py-12">
        <About />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  );
}

export default Home;
