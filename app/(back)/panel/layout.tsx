
import PanelMain from "@/components/(back)/inc/PanelMain";
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
      <PanelMain children={children} generals={generals} />
    </div>
  );
}
