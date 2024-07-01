import React from "react";
import Aside from "@/components/(front)/Store/Aside";

interface IStoreMainProps {
    mainCategory?: string;
}

function StoreMain({mainCategory} : IStoreMainProps) {
  return (
    <div className="container mx-auto px-4 w-full h-[600px] max-lg:pt-6">
      <div className="flex lg:flex-row flex-col gap-4 w-full h-full">
        <Aside mainCategory={mainCategory} />
        <main>Ürünler</main>
      </div>
    </div>
  );
}

export default StoreMain;
