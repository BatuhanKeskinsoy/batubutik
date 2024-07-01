import StoreMain from "@/components/(front)/Store/StoreMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import React from "react";

function page() {
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb
          title="Mağaza"
        />
      </div>
      <StoreMain />
    </>
  );
}

export default page;
