import BasketDetail from "@/components/(front)/Basket/BasketDetail";
import Breadcrumb from "@/components/others/Breadcrumb";
import React from "react";

function page() {
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="Sepet" />
      </div>
      <BasketDetail />
    </>
  );
}

export default page;
