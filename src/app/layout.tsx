import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Edmund Tang",
  description: "Web Development Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        
        style={{
          background:
            "linear-gradient(90deg, rgba(4, 54, 74) 24%,  rgb(23, 107, 135) 100%)",
        }}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
