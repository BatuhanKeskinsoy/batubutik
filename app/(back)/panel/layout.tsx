import type { Metadata } from "next";
import { GlobalContextProvider } from "@/app/Context/store";
import "@/public/styles/globals.css";

export const metadata: Metadata = {
  title: "Yönetim Paneli | Batubutik",
  description: "Yönetim Paneli | Batubutik",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <GlobalContextProvider>
        {children}
      </GlobalContextProvider>
  );
}