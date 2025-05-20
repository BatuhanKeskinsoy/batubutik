"use client";
import Sidebar from "@/components/(back)/inc/Sidebar/Sidebar";
import Footer from "@/components/(back)/inc/Footer/Footer";
import Header from "@/components/(back)/inc/Header/Header";
import { generalsTypes } from "@/types/generalTypes";
import React, { useEffect, useState } from "react";

interface IPanelMainProps {
  children: React.ReactNode;
  generals: generalsTypes;
}

function PanelMain({ children, generals }: IPanelMainProps) {
  const [sidebarShow, setSidebarShow] = useState(false);
  
  return (
    <>
      <Sidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} generals={generals} />
      <div className="relative flex flex-col w-full">
        <Header setSidebarShow={setSidebarShow} />
        <main className="p-4 dark:bg-zinc-800 bg-gray-100 md:min-h-[calc(100vh-88px)] min-h-[calc(100vh-120px)]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default PanelMain;
