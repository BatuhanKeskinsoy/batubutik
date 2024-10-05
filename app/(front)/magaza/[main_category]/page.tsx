import StoreMain from "@/components/(front)/Store/StoreMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getCategories } from "@/lib/utils/getCategories";
import { mainCategoryTypes } from "@/types/categoryTypes";
import React from "react";

async function page({ params }: { params: { main_category: string } }) {
  const categories: mainCategoryTypes[] = await getCategories();
  const mainCategorySlug = params.main_category;
  const mainCategory = categories.find(
    (mainCategory) => mainCategory.slug === mainCategorySlug
  );

  const breadcrumbTitle = mainCategory
    ? mainCategory.name
    : "Kategori Bulunamadı";
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="Mağaza" slug="/magaza" title2={breadcrumbTitle} />
      </div>
      <StoreMain
        mainCategorySlug={mainCategorySlug}
        breadcrumbTitle={breadcrumbTitle}
        categories={categories}
      />
    </>
  );
}

export default page;
