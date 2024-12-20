import React from "react";

interface ILoadingDataProps {
  count?: number;
}

function LoadingData({ count }: ILoadingDataProps) {
  const elementsToRender = count ? Math.min(count, 5) : 1;
  return (
    <div className="flex flex-col gap-4 justify-between w-full h-full max-h-full overflow-hidden">
      {[...Array(elementsToRender)].map((_, index) => {
        const widths = ["100%", "60%", "80%", "40%", "50%"];
        return (
          <div
            key={index}
            className={`relative rounded-full h-5 dark:bg-zinc-800 bg-gray-200 overflow-hidden animate-pulse`}
            style={{ width: widths[index] }}
          >
            <div className="absolute inset-0 bg-gradient-to-r dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 from-gray-200 via-gray-300 to-gray-200 opacity-50 animate-[shine_1.5s_0s_infinite]"></div>
          </div>
        );
      })}
    </div>
  );
}

export default LoadingData;
