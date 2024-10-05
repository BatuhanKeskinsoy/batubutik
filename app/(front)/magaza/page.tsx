import StoreMain from "@/components/(front)/Store/StoreMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getCategories } from "@/lib/utils/getCategories";
import { mainCategoryTypes } from "@/types/categoryTypes";
import React from "react";

async function page() {
  const categories: mainCategoryTypes[] = await getCategories();
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="Mağaza" />
      </div>
      <StoreMain pageTitle="Mağaza" categories={categories} />
    </>
  );
}

export default page;
