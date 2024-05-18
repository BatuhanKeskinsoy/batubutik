import type { Metadata } from "next";
import { GlobalContextProvider } from "@/app/Context/store";
import MetaFavicon from "@/meta/Favicon";

export const metadata: Metadata = {
  title: "E-Commerce Template",
  description: "E-Commerce Template",
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
