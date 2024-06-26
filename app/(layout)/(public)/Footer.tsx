import { getDomain } from "@/data/data";
import FooterContent from "./_components/FooterContent";

const Footer = async () => {
  const domain = getDomain();
  return (
    <>
      <FooterContent domain={domain} />
    </>
  );
};

export default Footer;
