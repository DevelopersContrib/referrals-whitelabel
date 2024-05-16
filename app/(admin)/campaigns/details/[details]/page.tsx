import React from "react";
import CampaignDetails from "./components/CampaignDetails";
import { Getcampaigns } from "../../../../../lib/data";
import { campaign } from "@/types/campaign";



const CampaignDetailsPage = async () => {
  const result = await Getcampaigns('545');
  const campaignData = result.data[0];
  const campaignDetails = campaignData as campaign;
  return (
    <>
      <CampaignDetails detail={campaignDetails} />
    </>
  );
};

export default CampaignDetailsPage;
