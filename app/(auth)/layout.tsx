import type { Metadata } from "next";
import "../globals.scss";
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
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
};
export default AdminLayout;
