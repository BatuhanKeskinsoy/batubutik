"use client";
import CustomButton from "@/components/others/CustomButton";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

interface IShippingTrackingProps {
  code?: string;
}

function ShippingTracking({ code }: IShippingTrackingProps) {
  const [shippingCode, setShippingCode] = useState<string>(code || "");
  const [initialShippingCode, setInitialShippingCode] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (shippingCode) {
      setInitialShippingCode(shippingCode);
    }
  }, [initialShippingCode]);

  const handleShippingCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Yalnızca alfanümerik karakterlere izin ver
    const sanitizedValue = value.replace(/[^a-zA-Z0-9]/g, '');
    setShippingCode(sanitizedValue);
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center">
        <div className="relative flex gap-2 lg:px-6 px-4 !pr-0 bg-gray-100 dark:bg-zinc-800 items-center w-full rounded-lg shadow-md overflow-hidden">
          <label className="relative w-full flex rounded-sm py-2">
            <input
              type="text"
              className="w-full outline-none is-dirty pt-4 peer bg-transparent"
              value={shippingCode}
              onChange={handleShippingCodeChange}
            />
            <span
              className={`absolute top-1/2  font-[400] -translate-y-1/2 pointer-events-none cursor-text text-gray-600 dark:text-gray-200 opacity-50 transition-all 
      peer-focus:text-[10px] peer-focus:top-3.5 peer-focus:opacity-100 
      ${shippingCode ? "peer-valid:text-[10px] peer-valid:top-3.5" : ""} `}
            >
              Kargo Kodunuzu Giriniz
            </span>
          </label>
          <CustomButton
            title="Kargo Ara"
            handleClick={() =>
              router.push(`/profilim/kargo-takibi/${shippingCode}`)
            }
            containerStyles={`min-w-max px-6 py-3.5 font-gemunu text-lg tracking-wider dark:bg-zinc-700 bg-gray-200 border-l-2 dark:border-zinc-900 border-white flex items-center justify-center h-full transition-all duration-300 enabled:hover:bg-site enabled:dark:hover:bg-site enabled:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed`}
            isDisabled={!(shippingCode.length > 0)}
          />
        </div>
      </div>
      {initialShippingCode ? (
        <div className="flex flex-col gap-4">
          <hr className="dark:border-zinc-800 border-gray-200" />
          <span>Henüz kargo takip sistemi hazır değil!</span>
        </div>
      ) : (
        <div
          className={`flex flex-col gap-4 w-full py-8 justify-center items-center text-gray-500 dark:text-zinc-600`}
        >
          <div
            className={`flex  gap-4 justify-center items-center animate-pulse`}
          >
            <LiaShippingFastSolid className={`text-6xl lg:text-7xl`} />
            <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
              Henüz Kargo Kodu Girilmedi
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShippingTracking;
