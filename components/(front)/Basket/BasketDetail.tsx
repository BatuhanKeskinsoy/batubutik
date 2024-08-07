import React from "react";
import Basket from "@/components/(front)/inc/Sidebar/Basket/Basket";

function BasketDetail() {
  return (
    <main>
      <div className="container mx-auto px-4 flex flex-col gap-4 max-lg:pt-4">
        <Basket isDetail />
      </div>
    </main>
  );
}

export default BasketDetail;
