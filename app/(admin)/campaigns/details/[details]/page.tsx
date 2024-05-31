import React from "react";
import CampaignDetails from "./components/(campaignDefault)/CampaignDetails";
import CampaignPictureDetails from "./components/(campaignPicture)/CampaignPictureDetails";
import {
  Getcampaigns,
  GetSocialClick,
  GetRewardText,
  Getsocialurls
} from "@/lib/data";
import { campaign } from "@/types/campaign";
import { SocialClicks } from "@/types/socialClicks";
import { socialUrls } from "@/types/socialUrls";
import { SOCIAL_TYPES,WIDGET_TEMPLATE,CAMPAIGN_TYPE } from "@/lib/constants";
import { getDomain } from "@/data/data";

const CampaignDetailsPage = async ({
  params
}: {
  params: { details: string };
}) => {
  const domain = getDomain();
  const id = params.details;

  const urls = await Getsocialurls(id);
  const result = await Getcampaigns(id);
  const campaignData = result.data[0];

  const emailData = await GetSocialClick(SOCIAL_TYPES.EMAIL, id);
  const fbData = await GetSocialClick(SOCIAL_TYPES.FACEBOOK, id);
  const gplusData = await GetSocialClick(SOCIAL_TYPES.GPLUS, id);
  const linkedinData = await GetSocialClick(SOCIAL_TYPES.LINKEDIN, id);
  const twitterData = await GetSocialClick(SOCIAL_TYPES.TWITTER, id);
  const pinterestData = await GetSocialClick(SOCIAL_TYPES.PINTEREST, id);
  const messengerData = await GetSocialClick(SOCIAL_TYPES.MESSENGER, id);

  const socialClicks: SocialClicks = {
    email: emailData.data.clicks,
    facebook: fbData.data.clicks,
    gplus: gplusData.data.clicks,
    linkedin: linkedinData.data.clicks,
    twitter: twitterData.data.clicks,
    pinterest: pinterestData.data.clicks,
    messenger: messengerData.data.clicks
  };

  const sUrl = urls.data.social_media_urls;
  const socialUrl = sUrl as socialUrls;
  const campaignDetails = campaignData as campaign;
  const rewardText = await GetRewardText(parseInt(id));
  const reward = rewardText.data as { reward: string };

  if(parseInt(campaignDetails.type_id.toString())===CAMPAIGN_TYPE.VOTING && 
  parseInt(campaignDetails.widget_details.template_id.toString())===WIDGET_TEMPLATE.PHOTO_VOTING){
    return (
      <CampaignPictureDetails
        domain={domain}
       detail={campaignDetails}
      />
    );
    
  }else if(parseInt(campaignDetails.type_id.toString())===CAMPAIGN_TYPE.SOCIAL_REWARDS){
    return (
      <CampaignDetails
        socialUrls={socialUrl}
        domain={domain}
        reward={reward.reward}
        socialClicks={socialClicks}
        detail={campaignDetails}
      />
    );
  }else{
    return null;
  }
};

export default CampaignDetailsPage;
