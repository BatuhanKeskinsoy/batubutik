import Header from "@/components/(back)/inc/Header/Header";
import Sidebar from "@/components/(back)/inc/Sidebar/Sidebar";
import { siteName } from "@/constants/(front)";
import { getGenerals } from "@/lib/utils/General/getGenerals";
import { generalsTypes } from "@/types/generalTypes";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Yönetim Paneli | ${siteName}`,
  description: `Yönetim Paneli | ${siteName}`,
  robots: "noindex, nofollow",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const generals: generalsTypes = await getGenerals();
  return (
    <div className="relative flex items-start">
      <Sidebar generals={generals} />
      <div className="relative flex flex-col w-full">
        <Header />
        <main className="p-4 dark:bg-zinc-800 bg-gray-100 min-h-[calc(100vh-56px)]">{children}</main>
      </div>
    </div>
  );
}
