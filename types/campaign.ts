import { widgetDetails } from "@/types/widgetDetails";
export type campaign = {
    id: number;
    name: string;
    type_id: number;
    reward_type_name:string;
    how_to_get_reward: string;
    widget_details: widgetDetails;
    userjoined:number;
    underuser:number;
    participants_rewarded:number;
  }