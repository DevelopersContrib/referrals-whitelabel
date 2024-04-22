import Homepage from "@/components/Homepage/Homepage";
import { getDomain, Getwlsettings, Getcampaigns } from "../data/data";

export default async function Home() {
  // Assuming getDomain() returns a string
  const domain = getDomain();
  const c = await Getwlsettings();
  const campaign = await Getcampaigns();
  return (
    <Homepage logo={c.data.logo} domain={domain} banner={c.data.banner_image} campaignData={campaign.data}/>
  );
}
