"use client";
import React, { useEffect, useState } from "react";
import SearchProducts from "@/components/(front)/Search/SearchProducts";
import { productTypes } from "@/types/product/productTypes";
import { IoFileTrayFullOutline, IoFileTrayOutline } from "react-icons/io5";
import { getProducts } from "@/lib/utils/Product/getProducts";

function Search() {
  const [search, setSearch] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searchProducts, setSearchProducts] = useState<productTypes[] | null>(
    null
  );
  const [products, setProducts] = useState<productTypes[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (search && search.length >= 3) {
      setLoadingSearch(true);
      setTimeout(() => {
        const searchLower = search.toLowerCase();
        const productsInSearch = products.filter(
          (product) =>
            product.title.toLowerCase().includes(searchLower) ||
            product.code.toLowerCase().includes(searchLower)
        );

        setSearchProducts(productsInSearch);
        setLoadingSearch(false);
      }, 500);
    } else {
      setSearchProducts(null);
    }
  }, [search, products]);

  return (
    <div className="flex flex-col w-full h-[calc(100dvh-77px)] justify-between">
      <div className="flex flex-col w-full h-full">
        <div className="flex gap-2 py-2 lg:px-8 px-4 bg-gray-100 dark:bg-zinc-800 items-center w-full">
          <label className="relative w-full flex rounded-sm">
            <input
              type="text"
              className="w-full outline-none is-dirty pt-[10px] peer bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              className={`absolute top-1/2  font-[400] -translate-y-1/2 pointer-events-none cursor-text text-gray-600 dark:text-gray-200 opacity-50 transition-all 
          peer-focus:text-[10px] peer-focus:top-0.5 peer-focus:opacity-100 
          ${search ? "peer-valid:text-[10px] peer-valid:top-0.5" : ""} `}
            >
              Ürün Adı/Kodu Yazınız
            </span>
          </label>
        </div>
        <hr className="dark:border-zinc-800" />
        {loadingSearch ? (
          <div className="flex flex-col gap-4 h-[calc(100dvh-136px)] justify-center items-center text-gray-300">
            <IoFileTrayFullOutline className="lg:text-7xl text-6xl" />
            <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
              Ürün aranıyor...
            </span>
          </div>
        ) : (
          <>
            {!searchProducts ? (
              <div className="flex flex-col gap-4 h-[calc(100dvh-136px)] justify-center items-center animate-pulse text-gray-500">
                <IoFileTrayOutline className="lg:text-7xl text-6xl" />
                <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
                  Lütfen en az 3 karakter giriniz.
                </span>
              </div>
            ) : searchProducts.length === 0 ? (
              <div className="flex flex-col gap-4 h-[calc(100dvh-136px)] justify-center items-center animate-pulse text-gray-300">
                <IoFileTrayOutline className="lg:text-7xl text-6xl" />
                <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
                  Aradığınız Ürün Bulunamadı
                </span>
              </div>
            ) : (
              <div className="flex flex-col w-full overflow-y-auto h-[calc(100dvh-136px)] lg:px-8 px-4 py-4">
                <SearchProducts products={searchProducts} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
