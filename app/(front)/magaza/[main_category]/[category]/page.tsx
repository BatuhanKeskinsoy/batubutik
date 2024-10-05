import StoreMain from "@/components/(front)/Store/StoreMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getCategories } from "@/lib/utils/getCategories";
import { categoryTypes, mainCategoryTypes } from "@/types/categoryTypes";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

async function page({
  params,
}: {
  params: { main_category: string; category: string };
}) {
  const categories: mainCategoryTypes[] = await getCategories();
  const mainCategorySlug = params.main_category;
  const categorySlug = params.category;

  // Find the main category
  const mainCategory = categories.find(
    (mainCategory) => mainCategory.slug === mainCategorySlug
  );

  // Find the category within the main category
  const category: categoryTypes | null =
    mainCategory?.categories?.find(
      (category) => category.slug === categorySlug
    ) || null;

  const breadcrumbTitle = category ? category.name : "Kategori Bulunamadı";

  const combinedBreadcrumbTitle = (
    <>
      {mainCategory?.name}
      <div className="relative w-5 h-5 text-black opacity-70 inline-block mx-1">
        <IoChevronForwardOutline size={20} />
      </div>
      {breadcrumbTitle}
    </>
  );

  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb
          title="Mağaza"
          slug="/magaza"
          title2={mainCategory?.name || "Kategori Bulunamadı"}
          slug2={`/magaza/${mainCategorySlug}`}
          title3={breadcrumbTitle}
        />
      </div>
      <StoreMain
        mainCategorySlug={mainCategorySlug}
        categorySlug={categorySlug}
        breadcrumbTitle={combinedBreadcrumbTitle}
        categories={categories}
      />
    </>
  );
}

export default page;
