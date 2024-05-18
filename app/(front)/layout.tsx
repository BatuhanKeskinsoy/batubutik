import Footer from "@/components/(front)/inc/Footer/Footer";
import Header from "@/components/(front)/inc/Header/Header";
import "@/public/styles/style.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col w-full lg:gap-12 gap-6">{children}</main>
      <Footer />
    </React.Fragment>
  );
}
