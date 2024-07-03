import StoreMain from "@/components/(front)/Store/StoreMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import { categories } from "@/constants/(front)";
import React from "react";

async function page({ params }: { params: { main_category: string; category: string } }) {
  const mainCategorySlug = params.main_category;
  const categorySlug = params.category;

  // Find the main category
  const mainCategory = categories.find(category => category.slug === mainCategorySlug);
  
  // Find the subcategory within the main category
  const subCategory = mainCategory?.sub_categories?.find(sub => sub.slug === categorySlug);

  const breadcrumbTitle = subCategory ? subCategory.name : "Kategori Bulunamadı";

  
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
      <StoreMain mainCategorySlug={mainCategorySlug} categorySlug={categorySlug} />
    </>
  );
}

export default page;
