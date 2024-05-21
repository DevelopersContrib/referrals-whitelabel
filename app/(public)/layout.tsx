import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public.scss";
import Header from "../(layout)/(public)/Header";
import Footer from "../(layout)/(public)/Footer";
import { Getwlsettings } from "../../data/data";

export async function generateMetadata() {
  const c = await Getwlsettings();
  //console.log(c.data)
  return {
    title: c.data.meta_title,
    description: c.data.meta_desc,
    keywords: c.data.meta_keywords
  };
}

export default function PublicLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
}
