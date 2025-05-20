import CustomButton from "@/components/others/CustomButton";
import React, { Dispatch, SetStateAction } from "react";
import { IoMenuOutline } from "react-icons/io5";

interface IHeaderProps {
  setSidebarShow: Dispatch<SetStateAction<boolean>>;
}

function Header({ setSidebarShow }: IHeaderProps) {
  return (
    <header className="dark:bg-zinc-900 bg-white px-4 h-14 flex items-center w-full border-b dark:border-zinc-800 border-gray-200">
      <div className="flex justify-between items-center gap-2">
        <CustomButton
          containerStyles="text-2xl text-gray-700 dark:text-gray-300 transition-all duration-300 group sm:hidden"
          leftIcon={
            <IoMenuOutline className="group-hover:text-site transition-all duration-300" />
          }
          handleClick={() => setSidebarShow((prev) => !prev)}
        />
      </div>
    </header>
  );
}

export default Header;
