import { ProductShares } from "@/components/others/Shares";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import Link from "next/link";
import React from "react";

interface IProductSidebarProps {
  product: productDetailTypes;
}

function ProductSidebar({product} : IProductSidebarProps) {
  return (
    <aside className="max-w-full w-[440px]">
      <div className="sticky top-24 h-fit flex flex-col gap-6 w-full">
        <div className="flex flex-col w-full gap-4">
          <span className="font-gemunu text-2xl">Paylaş</span>
          <ProductShares
            title={product.meta_title}
            description={product.meta_description}
            tags={product.tags}
          />
        </div>
        <hr />
        <div className="flex flex-col w-full gap-4">
          <span className="font-gemunu text-2xl">Etiketler</span>
          <ul className="tags flex flex-wrap gap-3">
            <li className="flex gap-x-1.5 items-center">
              <span className="text-site text-xl">#</span>
              <Link
                href=""
                title="İç Giyim"
                className="text-base text-gray-600 hover:text-site transition-all duration-300"
              >
                Amor Bralet
              </Link>
            </li>
            <li className="flex gap-x-1.5 items-center">
              <span className="text-site text-xl">#</span>
              <Link
                href=""
                title="İç Giyim"
                className="text-base text-gray-600 hover:text-site transition-all duration-300"
              >
                İç Giyim
              </Link>
            </li>
            <li className="flex gap-x-1.5 items-center">
              <span className="text-site text-xl">#</span>
              <Link
                href=""
                title="İç Giyim"
                className="text-base text-gray-600 hover:text-site transition-all duration-300"
              >
                Jartiyer Takımı
              </Link>
            </li>
            <li className="flex gap-x-1.5 items-center">
              <span className="text-site text-xl">#</span>
              <Link
                href=""
                title="İç Giyim"
                className="text-base text-gray-600 hover:text-site transition-all duration-300"
              >
                İç Çamaşır
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default ProductSidebar;
