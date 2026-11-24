import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luiz Felipe dos Santos | Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor Full-Stack focado em Go, GraphQL, RabbitMQ, Next.js e PostgreSQL. Uberlândia, MG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
