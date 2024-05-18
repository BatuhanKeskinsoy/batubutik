import React from "react";
import BasketProductItem from "@/components/(front)/Basket/BasketProductItem";
import { basketProductTypes } from "@/types/product/basketProductTypes";

interface IBasketProductsProps {
  products: basketProductTypes[] | null;
  handleUpdateQuantity: (productCode: string, newQuantity: number) => void;
}
function BasketProducts({ products, handleUpdateQuantity }: IBasketProductsProps) {
  if (products === null) return null;
  return (
    <div className="flex flex-col w-full h-full gap-6">
      {products.map((product, key) => (
        <div key={key} className="border-b pb-6 last:border-0">
          <BasketProductItem
            product={product}
            onUpdateQuantity={(newQuantity) =>
              handleUpdateQuantity(product.code, newQuantity)
            }
          />
        </div>
      ))}
    </div>
  );
}

export default BasketProducts;
