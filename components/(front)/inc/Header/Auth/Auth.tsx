import { useGlobalContext } from "@/app/Context/store";
import CustomButton from "@/components/others/CustomButton";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";

function Auth() {
  const { setSidebarStatus } = useGlobalContext();
  return (
    <div
      className="relative flex items-center rounded-full lg:hover:scale-110 transition-all duration-300 h-full cursor-pointer"
      onClick={() => setSidebarStatus("Auth")}
    >
      <CustomButton
        leftIcon={<IoPersonOutline className="text-xl" />}
        containerStyles={`p-2 border transition-all duration-300 border-gray-200 rounded-full`}
      />
    </div>
  );
}

export default Auth;
