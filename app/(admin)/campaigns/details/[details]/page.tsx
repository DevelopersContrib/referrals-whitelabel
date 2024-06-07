import React from "react";
import CampaignDetails from "./components/(campaignDefault)/CampaignDetails";
import CampaignPictureDetails from "./components/(campaignPicture)/CampaignPictureDetails";
import {
  Getcampaigns,
  GetSocialClick,
  GetRewardText,
  Getsocialurls,
  GetVoteOptions,
  GetUserCampartId
} from "@/lib/data";
import { campaign } from "@/types/campaign";
import { voteOption } from "@/types/voteOption";
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

  const campaignDetails = campaignData as campaign;
  
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
  const rewardText = await GetRewardText(parseInt(id));
  const reward = rewardText.data as { reward: string };
  
  if(parseInt(campaignDetails.type_id.toString())===CAMPAIGN_TYPE.VOTING && 
    parseInt(campaignDetails.widget_details.template_id.toString())===WIDGET_TEMPLATE.PHOTO_VOTING){
      const res = await GetUserCampartId(id); 
      const campart_id = res.data.campart_id;

    const voteOptions = await GetVoteOptions(id);
    const voteOptionsData = voteOptions.data as voteOption[];
    let voted = 0;
    if(voteOptionsData){
      for(var x=0;x<voteOptionsData.length;x++){
        voteOptionsData[x].voted = false;
        if(voteOptionsData[x].option_votes){
          for(var i=0;i<voteOptionsData[x].option_votes.length;i++){
            voteOptionsData[x].voted = false;
            if(voteOptionsData[x].option_votes[i].participant_id===campart_id){
              voteOptionsData[x].voted = true;
              voted = voteOptionsData[x].option_votes[i].option_id;
             
            }
          }
        }
      }
    }
    
    return (
      <CampaignPictureDetails
      voted={voted}
        campart_id={campart_id}
        voteOptionsData={voteOptionsData}
        socialUrls={socialUrl}
        domain={domain}
        reward={reward.reward}
        socialClicks={socialClicks}
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
