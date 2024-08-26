import React from "react";
import { useGlobalContext } from "@/app/Context/store";
import Login from "@/components/(front)/inc/Sidebar/Auth/Login";

function Auth() {
  const { user } = useGlobalContext();
  return (
    <div className="flex flex-col gap-4 w-full h-[calc(100dvh-77px)] justify-center items-center lg:p-8 p-4">
      {!user ? (
        <Login />
      ) : (
        <div>Giriş Yapıldı</div>
      )}
    </div>
  );
}

export default Auth;
