import StoreMain from "@/components/(front)/Store/StoreMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import { categories } from "@/constants/(front)";
import React from "react";

async function page({ params }: { params: { main_category: string } }) {
  const mainCategorySlug = params.main_category;
  const mainCategory = categories.find(
    (category) => category.slug === mainCategorySlug
  );

  const breadcrumbTitle = mainCategory
    ? mainCategory.name
    : "Kategori Bulunamadı";
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="Mağaza" slug="/magaza" title2={breadcrumbTitle} />
      </div>
      <StoreMain mainCategorySlug={mainCategorySlug} breadcrumbTitle={breadcrumbTitle} />
    </>
  );
}

export default page;
