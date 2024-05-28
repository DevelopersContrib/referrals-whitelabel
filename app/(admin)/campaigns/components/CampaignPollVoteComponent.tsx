import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InviteListComponent from "../details/[details]/components/(campaignPoll)/InviteListComponent";
import CampaignPollDetails from "../details/[details]/components/(campaignPoll)/CampaignPollDetails";

const CampaignPollVoteComponent = () => {
  return (
    <>
      <main className="lex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 main-campaign-poll-details-page">
        <div className="flex items-center mb-4">
          <h1 className="text-lg font-semibold md:text-2xl capitalize">
            Best Friend Gender
          </h1>
        </div>
        <Tabs defaultValue="pollVote">
          <div className="inline-flex">
            <TabsList className="inline-flex w-full">
              <TabsTrigger value="pollVote">Poll Vote</TabsTrigger>
              <TabsTrigger value="inviteList">Invite List</TabsTrigger>
            </TabsList>
          </div>
          <div className="w-full">
            <TabsContent value="pollVote">
              <CampaignPollDetails />
            </TabsContent>
            <TabsContent value="inviteList">
              <InviteListComponent />
            </TabsContent>
          </div>
        </Tabs>
      </main>
    </>
  );
};

export default CampaignPollVoteComponent;
