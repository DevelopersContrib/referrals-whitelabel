import NavbarMenu from "./_components/NavbarMenu";
import { Getwlsettings, getDomain } from "@/data/data";

const Header = async () => {
  const c = await Getwlsettings();
  const domain = getDomain();

  return (
    <>
      <NavbarMenu 
      logo={c.data.logo} 
      domain={domain}
      /> 
    </>
  );
};

export default Header;
