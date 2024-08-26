import React from "react";
import { useGlobalContext } from "@/app/Context/store";
import Login from "@/components/(front)/inc/Sidebar/Auth/Login";
import Profile from "@/components/(front)/inc/Sidebar/Auth/Profile";

function Auth() {
  const { user, setUser, setSidebarStatus } = useGlobalContext();
  return (
    <div className="flex flex-col gap-4 w-full h-[calc(100dvh-77px)] justify-center items-center lg:p-8 p-4">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Profile user={user} setUser={setUser} setSidebarStatus={setSidebarStatus} />
      )}
    </div>
  );
}

export default Auth;
