import type { Metadata } from "next";
import AuthenticatedLayout from "@/app/(front)/profilim/AuthenticationLayout";
import { generalsTypes } from "@/types/generalTypes";
import { getGenerals } from "@/lib/utils/General/getGenerals";
import ProfileSidebar from "@/components/(front)/UserProfile/inc/ProfileSidebar";

export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const generals: generalsTypes = await getGenerals();
  return (
    <AuthenticatedLayout generals={generals}>
      <main className="container mx-auto px-4 w-full max-lg:pt-6 flex max-lg:flex-col lg:gap-8 gap-4 lg:min-h-[calc(100vh-710px)]">
        <div className="w-full lg:max-w-[260px]">
          <ProfileSidebar />
        </div>
        <hr className="lg:hidden block dark:border-zinc-800 border-gray-200" />
        {children}
      </main>
    </AuthenticatedLayout>
  );
}