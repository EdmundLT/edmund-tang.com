import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

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
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-047V7E0L6Q" />
        <Script id="google-analytics">
          {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'G-047V7E0L6Q');
          `}
        </Script>
      </head>
      <body
        style={{
          background:
            "linear-gradient(90deg, rgba(17, 37, 57) 24%,  rgb(23, 107, 135) 100%)",
        }}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
