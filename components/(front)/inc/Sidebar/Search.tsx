"use client";
import React, { useState } from "react";
import { useGlobalContext } from "@/app/Context/store";
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const { setSidebarStatus } = useGlobalContext();
  const router = useRouter();

  const handleNavLink = (link: string) => {
    setSidebarStatus("");
    router.push(link);
  };
  return (
    <div className="flex flex-col w-full h-[calc(100dvh-69px)] justify-between">
      <div className="flex flex-col w-full">
        <div className="py-0">
          <div className="flex gap-2 py-2 px-[14px] bg-gray-100 items-center w-full">
            <label className="relative w-full flex rounded-sm">
              <input
                type="text"
                className="w-full outline-none is-dirty pt-[10px] peer bg-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span
                className={`absolute top-1/2  font-[400] -translate-y-1/2 pointer-events-none cursor-text text-gray-600 opacity-50 transition-all 
          peer-focus:text-[10px] peer-focus:top-0.5 peer-focus:opacity-100 
          ${search ? "peer-valid:text-[10px] peer-valid:top-0.5" : ""} `}
              >
                Ürün Adı/Kodu Yazınız
              </span>
            </label>
          </div>
        </div>
        <hr />
        <div className="flex flex-col w-full p-4">Selam</div>
      </div>
    </div>
  );
}

export default Search;
