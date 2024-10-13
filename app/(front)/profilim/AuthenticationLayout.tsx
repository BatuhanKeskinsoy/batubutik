"use client";
import { useGlobalContext } from "@/app/Context/store";
import Breadcrumb from "@/components/others/Breadcrumb";
import Loading from "@/components/others/Loading";
import { navLinksAuthUser } from "@/constants/(front)";
import { generalsTypes } from "@/types/generalTypes";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthenticatedLayout({
  children,
  generals,
}: {
  children: React.ReactNode;
  generals: generalsTypes;
}) {
  const { user } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const path = usePathname();

  const currentNavLink = navLinksAuthUser.find(
    (navlink) => navlink.url === path
  );

  const Title = currentNavLink ? currentNavLink.title : "Profilim";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (!user && !loading) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loading generals={generals} />;
  }

  return user ? (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        {Title === "Profilim" ? (
          <Breadcrumb title={Title} />
        ) : (
          <Breadcrumb title="Profilim" slug="/profilim" title2={Title} />
        )}
      </div>
      {children}
    </>
  ) : null;
}
