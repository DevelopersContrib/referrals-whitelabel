import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CampaignPictureDetails from "../details/[details]/components/(campaignPicture)/CampaignPictureDetails";
import InviteListComponent from "../details/[details]/components/(campaignPicture)/InviteListComponent";

const CampaignVoteComponent = () => {
  return (
    <>
      <main className="lex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 main-campaign-votes-details-page">
        <div className="flex items-center mb-4">
          <h1 className="text-lg font-semibold md:text-2xl capitalize">
            Campaign #21 Voting Campaign
          </h1>
        </div>
        <Tabs defaultValue="invite">
          <div className="inline-flex">
            <TabsList className="inline-flex w-full">
              <TabsTrigger value="invite">Invite</TabsTrigger>
              <TabsTrigger value="inviteList">Invite List</TabsTrigger>
            </TabsList>
          </div>
          <div className="w-full">
            <TabsContent value="invite">
              {/* <CampaignPictureDetails /> */}
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

export default CampaignVoteComponent;
