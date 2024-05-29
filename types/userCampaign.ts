import { widgetDetails } from "@/types/widgetDetails";
import { SocialClicks } from "@/types/socialClicks";
export type userCampaign = {
    id: number;
    campaign_id: number;
    campaign_name: string;
    participants_rewarded: number;
    socialClicks: SocialClicks;
    test: number;
    //widget_details: widgetDetails;
  }