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



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const c = await Getwlsettings();
  return (
    <html lang="en">
      <head>
        {c.header_script && (
          <script dangerouslySetInnerHTML={{ __html: c.header_script }} />
        )}
      </head>
      <body className={inter.className}>
        <header>
          {c.header_script ? null : c.header_script}
        </header>
        {children}
       
          {c.footer_script && c.footer_script !== '' && (
            <script dangerouslySetInnerHTML={{ __html: c.footer_script }} />
          )}
      
      </body>
    </html>
  );
}



