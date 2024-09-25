import { useGlobalContext } from "@/app/Context/store";
import CustomButton from "@/components/others/CustomButton";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  const { setSidebarStatus } = useGlobalContext();
  return (
    <div
      className="relative flex items-center rounded-full lg:hover:scale-110 transition-all duration-300 h-full cursor-pointer"
      onClick={() => setSidebarStatus("Search")}
    >
      <CustomButton
        leftIcon={<IoSearchOutline className="text-xl max-lg:text-2xl dark:text-gray-200" />}
        containerStyles={`p-2 border transition-all duration-300 border-gray-200 dark:border-zinc-800 rounded-full`}
      />
    </div>
  );
}

export default Search;
