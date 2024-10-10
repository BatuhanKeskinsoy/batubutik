"use client";
import { useGlobalContext } from "@/app/Context/store";
import Loading from "@/components/others/Loading";
import { generalsTypes } from "@/types/generalTypes";
import { useRouter } from "next/navigation";
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

  return user ? <>{children}</> : null;
}
