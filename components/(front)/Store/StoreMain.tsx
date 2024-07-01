"use client";
import React, { useEffect, useState } from "react";
import Aside from "@/components/(front)/Store/Aside";
import { instantProducts } from "@/constants/(front)";
import ProductItem from "@/components/(front)/Product/ProductItem";
import { IoFileTrayFullOutline, IoFileTrayOutline } from "react-icons/io5";
import { productTypes } from "@/types/product/productTypes";
import { usePathname } from "next/navigation";

interface IStoreMainProps {
  mainCategoryParam?: string;
  categoryParam?: string;
}

function StoreMain({ mainCategoryParam, categoryParam }: IStoreMainProps) {
  const [search, setSearch] = useState("");
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<
    productTypes[] | null
  >(null);

  const pathname = usePathname();

  const filterProducts = (
    searchTerm: string,
    mainCategory?: string,
    category?: string
  ) => {
    const searchLower = searchTerm.toLowerCase();
    return instantProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchLower) ||
        product.code.toLowerCase().includes(searchLower);
      const matchesMainCategory = mainCategory
        ? product.mainCategory_slug === mainCategory
        : true;
      const matchesCategory = category
        ? product.category_slug === category
        : true;
      return matchesSearch && matchesMainCategory && matchesCategory;
    });
  };

  useEffect(() => {
    setLoadingProducts(true);
    const timeoutId = setTimeout(() => {
      setFilteredProducts(
        filterProducts(search, mainCategoryParam, categoryParam)
      );
      setLoadingProducts(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);

  useEffect(() => {
    setLoadingProducts(true);
    const timeoutId = setTimeout(() => {
      setFilteredProducts(
        filterProducts(search, mainCategoryParam, categoryParam)
      );
      setLoadingProducts(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [pathname, mainCategoryParam, categoryParam]);

  return (
    <div className="container mx-auto px-4 w-full max-lg:pt-6">
      <div className="flex lg:flex-row flex-col gap-6 w-full h-full">
        <Aside
          mainCategoryParam={mainCategoryParam}
          categoryParam={categoryParam}
          search={search}
          setSearch={setSearch}
        />
        <main className="w-full">
          {loadingProducts ? (
            <div className="flex flex-col gap-4 h-[500px] justify-center items-center text-gray-300">
              <IoFileTrayFullOutline className="lg:text-7xl text-6xl" />
              <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
                Ürün aranıyor...
              </span>
            </div>
          ) : (
            <>
              {filteredProducts && filteredProducts.length === 0 ? (
                <div className="flex flex-col gap-4 h-[500px] justify-center items-center animate-pulse text-gray-600">
                  <IoFileTrayOutline className="lg:text-7xl text-6xl" />
                  <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
                    Aradığınız Ürün Bulunamadı
                  </span>
                </div>
              ) : (
                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:gap-6 gap-3 w-full">
                  {filteredProducts &&
                    filteredProducts.map((product) => (
                      <ProductItem
                        key={product.id}
                        product={product}
                        height={395}
                        mobileHeight={335}
                      />
                    ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default StoreMain;
