import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Luiz Felipe Santos | Portfólio",
  description:
    "Portfólio de Luiz Felipe Santos com foco em CRM, automação, sistemas web e produtos orientados a operação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
