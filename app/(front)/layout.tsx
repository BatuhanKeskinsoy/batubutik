import Footer from "@/components/(front)/inc/Footer/Footer";
import Header from "@/components/(front)/inc/Header/Header";
import FixedBottomRight from "@/components/others/FixedBottomRight/FixedBottomRight";
import "@/public/styles/globals.css";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <FixedBottomRight />
      <Footer />
    </React.Fragment>
  );
}
