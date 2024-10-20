import React from "react";
import Basket from "@/components/(front)/inc/Sidebar/Basket/Basket";
import { generalsTypes } from "@/types/generalTypes";

interface IBasketDetailProps {
  generals: generalsTypes;
}

function BasketDetail({ generals }: IBasketDetailProps) {
  return (
    <div className="container mx-auto px-4 flex flex-col gap-4 max-lg:pt-4">
      <Basket isDetail generals={generals} />
    </div>
  );
}

export default BasketDetail;
