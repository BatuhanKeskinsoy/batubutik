import React from "react";
import Basket from "@/components/(front)/inc/Sidebar/Basket/Basket";

function BasketDetail() {
  return (
    <main>
      <div className="container mx-auto px-4 flex flex-col gap-4 max-lg:pt-4">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-4xl font-gemunu font-semibold tracking-wider">
            Sepet
          </h1>
          <Basket isDetail />
        </div>
      </div>
    </main>
  );
}

export default BasketDetail;
