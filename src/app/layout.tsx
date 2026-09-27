import type { Metadata } from "next";
import { DM_Sans, Koulen } from "next/font/google";
import "swiper/swiper-bundle.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive-fixes.css";
import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/custom-layout/CustomLayout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-koulen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buildix - ეზოს ჭიშკარი, კარი, მოაჯირები და შემოღობვა",
  description: "Buildix.ge — ეზოს ჭიშკრების, სახლის კარების, აივნისა და კიბის მოაჯირების დამზადება და მონტაჟი, ეზოს შემოღობვა.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${koulen.variable} font-dm-sans`}>
        <ContextProvider>
          <CustomLayout>{children}</CustomLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
