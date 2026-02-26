import "@/styles/global.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/lib/components/Navbar";
import Footer from "@/lib/components/Footer";

export const metadata: Metadata = {
  title: "Shiri Karni - Portfolio",
  description:
    "A website dedicated to present my past projects"};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        {/* Browser Favicon */}
        <link rel="icon" href="/icons/Shiri.png" />
        {/* Apple Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/Shiri.png"
        />
        {/* Android Icon */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/Shiri.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <script src="https://accounts.google.com/gsi/client" async></script>
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
