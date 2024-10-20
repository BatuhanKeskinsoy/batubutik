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
  const pathParts = path.split("/").filter(Boolean); // Filter out empty parts

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (!user && !loading) {
      router.push("/");
    }

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [user, loading, router]);

  if (loading) {
    return <Loading generals={generals} />;
  }

  const getTitle = (part: string) => {
    const link = navLinksAuthUser.find((item) => item.url.includes(part));
    return link ? link.title : part;
  };

  const titles = pathParts.map(getTitle);
  const breadcrumbs = titles.map((title, index) => ({
    title,
    slug: `/${pathParts.slice(0, index + 1).join("/")}`, // Constructing slug based on index
  }));

  return user ? (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        {breadcrumbs.length === 1 && (
          <Breadcrumb title={breadcrumbs[0].title} />
        )}
        {breadcrumbs.length > 1 && (
          <Breadcrumb
            title={breadcrumbs[0].title}
            slug={breadcrumbs[0].slug}
            title2={breadcrumbs[1].title}
          />
        )}
      </div>
      {children}
    </>
  ) : null;
}
