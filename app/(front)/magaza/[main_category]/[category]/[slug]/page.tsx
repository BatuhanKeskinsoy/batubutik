import React from "react";
import Breadcrumb from "@/components/others/Breadcrumb";
import { categories, generals } from "@/constants/(front)";
import ProductDetail from "@/components/(front)/Product/ProductDetail";
import ProductSidebar from "@/components/(front)/Product/ProductSidebar";
import FeaturedProducts from "@/components/(front)/Product/FilteredProducts/FeaturedProducts";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { productTypes } from "@/types/product/productTypes";
import { getProducts } from "@/lib/utils/Product/getProducts";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import { getProductShow } from "@/lib/utils/Product/getProductShow";

async function page({
  params,
}: {
  params: { main_category: string; category: string; slug: string };
}) {
  const mainCategorySlug = params.main_category;
  const categorySlug = params.category;
  const productSlug = params.slug;

  const products: productTypes[] = await getProducts();
  const product: productDetailTypes = await getProductShow(productSlug);

  const mainCategory = categories.find(
    (category) => category.slug === mainCategorySlug
  );

  const subCategory = mainCategory?.sub_categories?.find(
    (sub) => sub.slug === categorySlug
  );

  const breadcrumbTitle = subCategory
    ? subCategory.name
    : "Kategori Bulunamadı";

  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb
          title="Mağaza"
          slug="/magaza"
          title2={mainCategory?.name || "Kategori Bulunamadı"}
          slug2={`/magaza/${mainCategorySlug}`}
          title3={breadcrumbTitle}
          slug3={`/magaza/${mainCategorySlug}/${categorySlug}`}
          title4={product.title}
        />
      </div>
      <ProductDetail product={product} />
      <ProductSidebar product={product} />
      <hr className="lg:my-12 my-6 dark:border-zinc-800" />
      <section className="relative container mx-auto px-4">
        <div className="flex flex-col gap-2 w-full mb-8 max-lg:text-center">
          <h3 className="text-4xl font-gemunu font-semibold tracking-wider">
            Öne Çıkan Ürünler
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {generals.site_name} koleksiyonu içerisinde öne çıkan ürünler
          </p>
        </div>
        <FeaturedProducts products={products} />
      </section>
    </>
  );
}

export default page;
