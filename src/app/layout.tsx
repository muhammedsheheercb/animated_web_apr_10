import localFont from "next/font/local";
import { Metadata } from "next";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./app.css";
import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Rusty Ladle — Chef's Table, Delivered",
  description:
    "5 signature dishes. Real ingredients. Zero compromises. Fresh food made with care.",
  openGraph: {
    title: "The Rusty Ladle — Chef's Table, Delivered",
    description:
      "5 signature dishes. Real ingredients. Zero compromises. Fresh food made with care.",
  },
};

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-slate-950 text-slate-100">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
