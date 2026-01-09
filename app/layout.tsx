import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamran Portfolio & Blog",
  description:
    "Personal portfolio and blog showcasing projects, thoughts, and experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta
        name="abbox-claim"
        content="abbox-3f7881d9bbf2934d3d3ec97bebc54a8f"
      />
      <body
        className={`${inter.className} bg-white dark:bg-dark-900 text-gray-900 dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <script src="https://widget.abbox.com/widget.js"></script>
      </body>
    </html>
  );
}
