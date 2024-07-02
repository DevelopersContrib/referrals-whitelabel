import { widgetDetails } from "@/types/widgetDetails";
import { SocialClicks } from "@/types/socialClicks";
export type userCampaign = {
    id: number;
    campaign_id: number;
    campaign_name: string;
    participants_rewarded: number;
    socialClicks: SocialClicks;
    test: number;
    email: number;
    facebook: number;
    gplus: number;
    linkedin: number;
    twitter: number;
    pinterest: number;
    messenger: number;
    //widget_details: widgetDetails;
  }