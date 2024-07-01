"use client";
import { mainCategories } from "@/constants/(front)";
import Link from "next/link";
import React, { useState } from "react";

interface IStoreAsideProps {
  mainCategory?: string;
}

function Aside({ mainCategory }: IStoreAsideProps) {
  const [search, setSearch] = useState("");
  return (
    <aside className="lg:w-[320px] w-full h-full rounded-sm ">
      <div className="flex flex-col gap-3 w-full text-sm text-gray-600">
        <div className="pb-0 p-4">
          <label htmlFor="search" className="flex flex-col gap-2 w-full">
            <span className="font-medium tracking-wide">
              Ürün Adı veya Ürün Kodu Arayın
            </span>
            <input
              type="text"
              id="search"
              required
              className="bg-white border border-gray-200 focus:border-site/50 py-3 px-4 outline-none w-full transition-all duration-300"
              placeholder="En az 3 harf giriniz"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
        <hr className="-mb-3" />
        {!mainCategory && (
          <div className="flex flex-col py-2 gap-2 px-4">
            <span className="font-medium tracking-wide">
              Ana Kategori Seçiniz
            </span>
            <div className="grid grid-cols-2 w-full gap-2">
              {mainCategories.map((category, key) => (
                <Link
                  key={key}
                  href={`/magaza/${category.url}`}
                  title={category.name}
                  className="flex bg-white py-2 px-4 border border-gray-200"
                >
                  <span className="line-clamp-1">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Aside;
