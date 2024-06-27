import React from "react";
import Image from "next/image";
import { GiTrophy } from "react-icons/gi";
import { GetcampaignsAll } from "@/data/data";
import { imageLoader } from "@/helpers/image-helper";
import ImageCampaignBg from "./ImageCampaignBg";
import { campaign } from "@/types/campaign";

const CampaignDefault = async () => {
  const campaign = await GetcampaignsAll();
  const campaignData = campaign.data as campaign[];
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 main-campaigns">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl capitalize">
            Campaigns
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:lg:grid-cols-3 2xl:grid-cols-4 gap-y-4 lg:gap-4">
          {Array.isArray(campaignData) && campaignData.length > 0 ? (
            campaignData.map((campaign) => (
              <div className="flex flex-col w-full h-full" key={campaign.id}>
                <a
                  href={`/campaigns/details/${campaign.id}`}
                  className="flex flex-col border border-solid border-[hsl(0_0%_0%/0.05)!important] rounded-lg bg-white h-full transition-all hover:scale-[1.02] hover:duration-300 hover:shadow-[rgba(149,157,165,0.2)_0px_8px_24px] overflow-hidden"
                >
                  <span className="px-4 pt-4 pb-3 flex flex-col text-center h-full">
                    <span className="capitalize mb-2 h-full">
                      {campaign.name}
                    </span>
                    <div className="w-full mb-4 space-y-2 flex flex-col">
                      <span className="bg-[#bdcf09] text-black rounded-sm py-2 px-4 mt-auto">
                        <strong>{campaign.participants_rewarded}</strong>{" "}
                        participants rewarded
                      </span>

                      <span className="bg-[#bdcf09] text-black rounded-sm py-2 px-4 mt-auto">
                        <strong>{campaign.underuser}</strong> Referrals Joined
                      </span>
                    </div>
                  </span>
                  <span className="relative min-h-[220px]">
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/60 z-[1] flex items-center justify-center flex-col">
                      <div className="text-center inline-flex items-center justify-center text-white bg-[#d7d1d1d9] px-3 py-2 mb-1">
                        <div className="mr-2">
                          <GiTrophy className="w-8 h-8" />
                        </div>
                        <div className="inline-flex flex-col">
                          <div className="">{campaign.reward_type_name}</div>
                        </div>
                      </div>

                      {campaign.userjoined ? null : (
                        <>
                          {" "}
                          <div className="text-center inline-flex items-center justify-center text-white bg-[#5867dd] px-3 py-2 capitalize">
                            Joined Campaign
                          </div>
                          <div className="triangle-unlock">
                            <div className="rotate-label">Unlock Reward</div>
                          </div>
                        </>
                      )}
                    </div>
                    {campaign.widget_details.background_image && (
                      <ImageCampaignBg
                        img={campaign.widget_details.background_image}
                      />
                    )}
                  </span>
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-4 w-full flex items-center justify-center min-h-[30vh]">
              <div className="text-3xl text-black/30">
                No campaigns available
              </div>
            </div> // Provide a fallback if campaignData is empty or not an array
          )}
        </div>
      </main>
    </>
  );
};

export default CampaignDefault;
