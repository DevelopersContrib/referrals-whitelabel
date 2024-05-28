import CampaignDefault from "./components/CampaignDefault";
import CampaignPollVoteComponent from "./components/CampaignPollVoteComponent";
import CampaignVoteComponent from "./components/CampaignVoteComponent";

export default function Page() {
  return (
    <>
      {/* Start:: Condition base on user campaign created */}

      <CampaignDefault />
      {/* <CampaignVoteComponent /> */}
      {/* <CampaignPollVoteComponent /> */}
    </>
  );
}
