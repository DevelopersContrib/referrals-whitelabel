import React from "react";
import CampaignDetails from "./components/CampaignDetails";
import { Getcampaigns, GetSocialClick, GetRewardText } from "../../../../../lib/data";
import { campaign } from "@/types/campaign";
import { SocialClicks } from "@/types/socialClicks";


const CampaignDetailsPage = async({ params }: { params: { details: string} }) => {
  const id = params.details

  const result = await Getcampaigns(id);
  const campaignData = result.data[0];

  const emailData = await GetSocialClick(1,id);
  const fbData = await GetSocialClick(2,id);
  const gplusData = await GetSocialClick(3,id);
  const linkedinData = await GetSocialClick(4,id);
  const twitterData = await GetSocialClick(5,id);
  const pinterestData = await GetSocialClick(6,id);
  const messengerData = await GetSocialClick(7,id);

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
