import type { Metadata } from "next";
import { GlobalContextProvider } from "@/app/Context/store";
import MetaFavicon from "@/meta/Favicon";
import Providers from "./providers";
import "@/public/styles/globals.css";

export const metadata: Metadata = {
  title: "Batubutik",
  description: "Batubutik",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <MetaFavicon />
      <GlobalContextProvider>
        <Providers>{children}</Providers>
      </GlobalContextProvider>
    </html>
  );
}
