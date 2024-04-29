import NavbarMenu from "@/app/(layout)/(admin)/_components/NavbarMenu";
import { Getwlsettings } from "@/data/data";

const Header = async () => {
  const c = await Getwlsettings();

  return (
    <>
      <NavbarMenu logo={c.data.logo} />
    </>
  );
};

export default Header;
