import StoreMain from "@/components/(front)/Store/StoreMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import React from "react";

async function page({ params }: { params: { main_category: string } }) {
  const mainCategory = params.main_category;
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb
          title="Mağaza"
          slug="/magaza" title2={mainCategory ? mainCategory : "Kategori Bulunamadı"}
        />
      </div>
      <StoreMain mainCategory={mainCategory} />
    </>
  );
}

export default page;
