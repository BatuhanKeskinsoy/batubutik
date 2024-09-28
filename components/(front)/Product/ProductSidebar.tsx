import { ProductShares } from "@/components/others/Shares";
import { productDetailTypes } from "@/types/product/productDetailTypes";
import Link from "next/link";
import React from "react";

interface IProductSidebarProps {
  product: productDetailTypes;
}

function ProductSidebar({ product }: IProductSidebarProps) {
  return (
    <aside className="container mx-auto px-4 flex lg:flex-row flex-col lg:gap-8 gap-4">
      <div className="max-w-full lg:min-w-[270px] max-lg:w-full">
        <div className="sticky top-24 h-fit flex flex-col lg:gap-12 gap-6 w-full">
          <div className="flex flex-col w-full gap-4">
            <span className="font-gemunu text-2xl">Paylaş</span>
            <ProductShares
              title={product.meta_title}
              description={product.meta_description}
              tags={product.tags}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <span className="font-gemunu text-2xl">Etiketler</span>
            <ul className="tags flex flex-wrap gap-3">
              <li className="flex gap-x-1.5 items-center">
                <span className="text-site text-xl">#</span>
                <Link
                  href=""
                  title="İç Giyim"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-site dark:hover:text-site transition-all duration-300"
                >
                  Amor Bralet
                </Link>
              </li>
              <li className="flex gap-x-1.5 items-center">
                <span className="text-site text-xl">#</span>
                <Link
                  href=""
                  title="İç Giyim"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-site dark:hover:text-site transition-all duration-300"
                >
                  İç Giyim
                </Link>
              </li>
              <li className="flex gap-x-1.5 items-center">
                <span className="text-site text-xl">#</span>
                <Link
                  href=""
                  title="İç Giyim"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-site dark:hover:text-site transition-all duration-300"
                >
                  Jartiyer Takımı
                </Link>
              </li>
              <li className="flex gap-x-1.5 items-center">
                <span className="text-site text-xl">#</span>
                <Link
                  href=""
                  title="İç Giyim"
                  className="text-base text-gray-600 dark:text-gray-400 hover:text-site dark:hover:text-site transition-all duration-300"
                >
                  İç Çamaşır
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ProductSidebar;
