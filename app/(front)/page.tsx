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
import { getProducts } from "@/lib/utils/Product/getProducts";
import { getGenerals } from "@/lib/utils/getGenerals";
import { generalsTypes } from "@/types/generalTypes";
import { productTypes } from "@/types/product/productTypes";
import { mainCategoryTypes } from "@/types/categoryTypes";
import { getCategories } from "@/lib/utils/getCategories";

async function page() {
  const products: productTypes[] = await getProducts();
  const generals: generalsTypes = await getGenerals();
  const categories: mainCategoryTypes[] = await getCategories();
  return (
    <main className="flex flex-col w-full gap-12">
      <section>
        <Banner generals={generals} />
      </section>

      <section className="container mx-auto px-4 lg:-mt-28">
        <Categories categories={categories} />
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
          <h1 className="text-4xl font-gemunu font-semibold tracking-wider">
            <span className="text-site">{generals.site_name}</span> Öne Çıkan
            Ürünler
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {generals.site_name} koleksiyonu içerisinde öne çıkan ürünler
          </p>
        </div>
        <FeaturedProducts products={products} />
      </section>

      <section className="bg-gray-100 dark:bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
            <h2 className="text-4xl font-gemunu font-semibold tracking-wider">
              <span className="text-site">{generals.site_name}</span> Yeni
              Ürünler
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              {generals.site_name} koleksiyonuna eklenen en yeni ürünler
            </p>
          </div>
          <NewProducts products={products} />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
          <h2 className="text-4xl font-gemunu font-semibold tracking-wider">
            <span className="text-site">{generals.site_name}</span> En Çok
            Satılan Ürünler
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {generals.site_name} koleksiyonu içerisinde en çok talep edilen ve
            en çok satılan ürünler
          </p>
        </div>
        <BestSellingProducts products={products} />
      </section>

      <section className="bg-gray-100 dark:bg-zinc-800 py-12">
        <About generals={generals} />
      </section>
      <section>
        <Contact generals={generals} />
      </section>
    </main>
  );
}

export default page;
