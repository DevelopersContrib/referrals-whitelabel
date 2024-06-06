import { optionVote } from "@/types/optionVote";
export type voteOption = {
    id: number;
    campaign_id: number;
    option_name: string;
    option_photo:string;
    arrangement: string;
    option_description: string;
    option_votes: optionVote[];
    voted: boolean;
  }
