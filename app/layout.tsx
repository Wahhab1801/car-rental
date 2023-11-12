import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Explore and rent cars from the best brands in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
