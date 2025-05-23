import ProductDetail from "@/components/(front)/Product/Layout/ProductDetail";
import StoreMain from "@/components/(front)/Store/StoreMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getCategories } from "@/lib/utils/General/getCategories";
import { mainCategoryTypes } from "@/types/categoryTypes";
import { getProductShow } from "@/lib/utils/Product/getProductShow";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import { getGenerals } from "@/lib/utils/General/getGenerals";
import React from "react";
import { redirect } from "next/navigation";
import { getProductComments } from "@/lib/utils/Product/Comment/getProductComments";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}): Promise<Metadata> {
  const categorySlugs = params.slug || [];
  const productSlug = categorySlugs[categorySlugs.length - 1];

  // Ürün detayını getirmeyi dene
  const product: productDetailTypes | null = await getProductShow(productSlug);

  if (product) {
    // Eğer ürün varsa, ürün detay bilgilerini döndür
    return {
      title: product.meta_title ? product.meta_title : product.title,
      description: product.meta_description
        ? product.meta_description
        : product.short_text,
    };
  } else {
    // Ürün yoksa, kategorilere göre genel başlık bilgileri döndür
    const categories: mainCategoryTypes[] = await getCategories();
    const mainCategorySlug = categorySlugs[0];
    const category = categories.find((cat) => cat.slug === mainCategorySlug);

    return {
      title: category ? `${category.name} Ürünleri` : "Mağaza",
      description: category
        ? `${category.name} kategorisindeki ürünleri keşfedin.`
        : "Mağazamızdaki ürünleri inceleyin.",
    };
  }
}

async function page({ params }: { params: { slug?: string[] } }) {
  const categories: mainCategoryTypes[] = await getCategories();
  const categorySlugs = params.slug || [];

  const mainCategorySlug = categorySlugs[0];
  const categorySlug = categorySlugs[1];
  const subCategorySlug = categorySlugs[2];

  const productSlug = categorySlugs[categorySlugs.length - 1];

  const mainCategory = categories.find(
    (category) => category.slug === mainCategorySlug
  );

  const category = categorySlug
    ? mainCategory?.categories?.find((cat) => cat.slug === categorySlug)
    : null;

  const subCategory = subCategorySlug
    ? category?.sub_categories?.find((sub) => sub.slug === subCategorySlug)
    : null;

  const pageTitle = `${mainCategory?.name || ""} ${category?.name || ""} ${
    subCategory?.name || ""
  }`;

  const generals = await getGenerals();

  const product: productDetailTypes | null = await getProductShow(productSlug);

  if (
    mainCategory === undefined ||
    (product === undefined &&
      (category === undefined || subCategory === undefined))
  ) {
    return redirect("/404");
  }

  if (product) {
    const comments = await getProductComments(product.code);
    return (
      <>
        <div className="container mx-auto px-4 lg:flex hidden">
          <Breadcrumb
            title="Mağaza"
            slug="/magaza"
            title2={mainCategory?.name || "Kategori Bulunamadı"}
            slug2={`/magaza/${mainCategorySlug}`}
            title3={category?.name || ""}
            slug3={
              category ? `/magaza/${mainCategorySlug}/${categorySlug}` : ""
            }
            title4={subCategory?.name || ""}
            slug4={
              subCategory
                ? `/magaza/${mainCategorySlug}/${categorySlug}/${subCategorySlug}`
                : ""
            }
            title5={product.title}
          />
        </div>
        <ProductDetail
          product={product}
          generals={generals}
          comments={comments}
        />
      </>
    );
  } else {
    return (
      <>
        <div className="container mx-auto px-4 lg:flex hidden">
          <Breadcrumb
            title="Mağaza"
            slug="/magaza"
            title2={mainCategory?.name || "Kategori Bulunamadı"}
            slug2={`/magaza/${mainCategorySlug}`}
            title3={category?.name || ""}
            slug3={
              category ? `/magaza/${mainCategorySlug}/${categorySlug}` : ""
            }
            title4={subCategory?.name || ""}
            slug4={
              subCategory
                ? `/magaza/${mainCategorySlug}/${categorySlug}/${subCategorySlug}`
                : ""
            }
          />
        </div>
        <StoreMain
          mainCategorySlug={mainCategorySlug}
          categorySlug={categorySlug}
          subCategorySlug={subCategorySlug}
          pageTitle={pageTitle}
          categories={categories}
        />
      </>
    );
  }
}

export default page;
