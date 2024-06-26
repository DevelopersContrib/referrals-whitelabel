import type { Metadata } from "next";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./globals.scss";
import { Getwlsettings } from "../data/data";
import AuthProvider from "@/app/context/AuthProvider";
import { Poppins } from "next/font/google";

export async function generateMetadata() {
  const c = await Getwlsettings();

  return {
    title: c.data.meta_title,
    description: c.data.meta_desc,
    keywords: c.data.meta_keywords
  };
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  variable: "--font-poppins"
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const c = await Getwlsettings();
  return (
    <html lang="en">
      <head>
        {c.header_script && (
          <script dangerouslySetInnerHTML={{ __html: c.header_script }} />
        )}
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <AuthProvider>
          <header>{c.header_script ? null : c.header_script}</header>
          {children}

          {c.footer_script && c.footer_script !== "" && (
            <script dangerouslySetInnerHTML={{ __html: c.footer_script }} />
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
