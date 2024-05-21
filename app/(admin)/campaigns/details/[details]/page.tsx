import React from "react";
import CampaignDetails from "./components/CampaignDetails";
import { Getcampaigns, GetSocialClick, GetRewardText } from "../../../../../lib/data";
import { campaign } from "@/types/campaign";
import { SocialClicks } from "@/types/socialClicks";
import { SOCIAL_TYPES } from "../../../../../lib/constants";


const CampaignDetailsPage = async({ params }: { params: { details: string} }) => {
  const id = params.details

  const result = await Getcampaigns(id);
  const campaignData = result.data[0];

  const emailData = await GetSocialClick(SOCIAL_TYPES.EMAIL,id);
  const fbData = await GetSocialClick(SOCIAL_TYPES.FACEBOOK,id);
  const gplusData = await GetSocialClick(SOCIAL_TYPES.GPLUS,id);
  const linkedinData = await GetSocialClick(SOCIAL_TYPES.LINKEDIN,id);
  const twitterData = await GetSocialClick(SOCIAL_TYPES.TWITTER,id);
  const pinterestData = await GetSocialClick(SOCIAL_TYPES.PINTEREST,id);
  const messengerData = await GetSocialClick(SOCIAL_TYPES.MESSENGER,id);

  const socialClicks: SocialClicks = {
    email: emailData.data.clicks,
    facebook:fbData.data.clicks,
    gplus: gplusData.data.clicks,
    linkedin: linkedinData.data.clicks,
    twitter: twitterData.data.clicks,
    pinterest: pinterestData.data.clicks,
    messenger: messengerData.data.clicks,
};

  const campaignDetails = campaignData as campaign;
  const rewardText = await GetRewardText(parseInt(id));
  const reward = rewardText.data as {reward:string}

  return (
    <>
      <CampaignDetails reward={reward.reward} socialClicks={socialClicks} detail={campaignDetails} />
    </>
  );
};

export default CampaignDetailsPage;
