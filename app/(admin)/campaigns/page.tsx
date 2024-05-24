import CampaignDefault from "./components/CampaignDefault";
import CampaignVoteComponent from "./components/CampaignVoteComponent";

export default function Page() {
  return (
    <>
      {/* Start:: Condition base on user campaign created */}

      {/* <CampaignDefault /> */}
      <CampaignVoteComponent />
    </>
  );
}
