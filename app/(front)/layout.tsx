import Footer from "@/components/(front)/inc/Footer/Footer";
import Header from "@/components/(front)/inc/Header/Header";
import FixedBottomRight from "@/components/others/FixedBottomRight/FixedBottomRight";
import "@/public/styles/globals.css";
import React from "react";
import { ThemeProvider } from "@/app/Context/themeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <FixedBottomRight />
      <Footer />
    </ThemeProvider>
  );
}
