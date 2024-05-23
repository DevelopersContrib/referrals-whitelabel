import Homepage from "@/app/(public)/_homepage/Homepage";
import { getDomain, Getwlsettings, Getcampaigns, GetFeaturedCampaign } from "../data/data";

export default async function Home() {
  // Assuming getDomain() returns a string
  const domain = getDomain();
  const c = await Getwlsettings();
  const campaign = await Getcampaigns();
  const featured_campaign_data = await GetFeaturedCampaign(c.data.featured_campaign);
  const campaign_id = featured_campaign_data.data[0].id;
  console.log(campaign_id); // Output: '86'
  
  return (
    <Homepage
      logo={c.data.logo}
      domain={domain}
      banner={c.data.banner_image}
      brand = {c.data.brand_name}
      description = {c.data.description}
      campaignData={campaign.data}
      featCampaignName = {featured_campaign_data.data[0].name}
      featCampaigDescription = {featured_campaign_data.data[0].widget_details.description}
      featCampaigImage = {featured_campaign_data.data[0].widget_details.background_image}
      featCampaignId = {c.data.featured_campaign}
    />
  );
}
