import type { Metadata } from "next";
import { GlobalContextProvider } from "@/app/Context/store";
import MetaFavicon from "@/meta/Favicon";

export const metadata: Metadata = {
  title: "Batubutik",
  description: "Batubutik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MetaFavicon />
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </html>
  );
}
