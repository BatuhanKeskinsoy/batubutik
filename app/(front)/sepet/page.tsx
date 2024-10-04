import BasketDetail from "@/components/(front)/Basket/BasketDetail";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getGenerals } from "@/lib/utils/getGenerals";
import { generalsTypes } from "@/types/generalTypes";
import React from "react";

async function page() {
  const generals: generalsTypes = await getGenerals();
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="Sepet" />
      </div>
      <BasketDetail generals={generals} />
    </>
  );
}

export default page;
