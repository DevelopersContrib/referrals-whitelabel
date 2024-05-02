import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import { Getwlsettings} from "../data/data";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const c = await Getwlsettings();
  console.log(c.data)
  return {
		title: c.data.meta_title,
		description: c.data.meta_desc,
    keywords: c.data.meta_keywords,
   
	}
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


