import CampaignDefault from "./components/CampaignDefault";
import CampaignPollVoteComponent from "./components/CampaignPollVoteComponent";
import CampaignVoteComponent from "./components/CampaignVoteComponent";
import { GetcampaignsAll } from "@/data/data";

export default async function Page() {
  
  return (
    <>
      {/* Start:: Condition base on user campaign created */}

      <CampaignDefault />
      {/* <CampaignVoteComponent /> */}
      {/* <CampaignPollVoteComponent /> */}
    </>
  );
}
