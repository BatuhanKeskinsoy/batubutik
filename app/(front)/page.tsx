import React from "react";
import FeaturedProducts from "@/components/(front)/Product/FilteredProducts/FeaturedProducts";
import Banner from "@/components/(front)/Home/Banner";
import Categories from "@/components/(front)/Home/Categories";
import NewProducts from "@/components/(front)/Product/FilteredProducts/NewProducts";
import BestSellingProducts from "@/components/(front)/Product/FilteredProducts/BestSellingProducts";
import Contact from "@/components/(front)/Contact/Contact";
import About from "@/components/(front)/About/About";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { homeTypes } from "@/types/pages/homeTypes";
import { getHome } from "@/lib/utils/Pages/getHome";

async function page() {
  const home: homeTypes = await getHome();
  return (
    <main className="flex flex-col w-full gap-12">
      <section>
        <Banner data={home.fullViewSlider} />
      </section>

      <section className="container mx-auto px-4 lg:-mt-28">
        <Categories categories={home.categories} />
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
          <h1 className="text-4xl font-gemunu font-semibold tracking-wider">
            {home.featuredProducts.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {home.featuredProducts.description}
          </p>
        </div>
        <FeaturedProducts products={home.featuredProducts.products} />
      </section>

      <section className="bg-gray-100 dark:bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
            <h2 className="text-4xl font-gemunu font-semibold tracking-wider">
              {home.newProducts.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {home.newProducts.description}
            </p>
          </div>
          <NewProducts products={home.newProducts.products} />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
          <h2 className="text-4xl font-gemunu font-semibold tracking-wider">
            {home.bestSellingProducts.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {home.bestSellingProducts.description}
          </p>
        </div>
        <BestSellingProducts products={home.bestSellingProducts.products} />
      </section>

      <section className="bg-gray-100 dark:bg-zinc-800 py-12">
        <About about={home.about} />
      </section>
      <section>
        <Contact generals={home.generals} />
      </section>
    </main>
  );
}

export default page;
