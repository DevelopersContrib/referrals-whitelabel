import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public.scss";
import Header from "../(layout)/(public)/Header";
import Footer from "../(layout)/(public)/Footer";

export const metadata: Metadata = {
  title: "Referral Framework",
  description: "Powered by Referrals.com"
};

const AdminLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default AdminLayout;
