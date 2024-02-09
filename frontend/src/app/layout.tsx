import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './global.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todolist",
  description: "Crie sua lista de tarefas hoje mesmo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
