import { GetcampaignsAll } from "../../../data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiTrophy } from "react-icons/gi";

export default async function Page() {
  const campaign = await GetcampaignsAll();
  const campaignData = campaign.data;
  // console.log(campaignData.length);
  // console.log(campaignData);
  // console.log(campaignData.widget_details);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 main-campaigns">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl capitalize">
          Campaigns
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:lg:grid-cols-3 2xl:grid-cols-4 gap-y-4 lg:gap-4">
        {Array.isArray(campaignData) && campaignData.length > 0 ? (
          campaignData.map((campaign) => (
            <div className="flex flex-col w-full" key={campaign.id}>
              <a
                href={`/campaigns/details/${campaign.id}`}
                className="flex flex-col shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] bg-white"
              >
                <span className="px-4 pt-4 pb-3 flex flex-col text-center">
                  <span className="capitalize mb-2">{campaign.name}</span>
                  <span className="bg-[#bdcf09] text-black rounded-sm py-2 px-4">
                    <strong>{campaign.participants_rewarded}</strong>{" "}
                    participants rewarded
                  </span>
                </span>
                <span className="relative min-h-[220px]">
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/60 z-[1] flex items-center justify-center flex-col">
                    <div className="text-center inline-flex items-center justify-center text-white bg-[#d7d1d1d9] px-3 py-2 mb-1">
                      <div className="mr-2">
                        <GiTrophy className="w-8 h-8" />
                      </div>
                      <div className="inline-flex flex-col">
                        <div className="">Token</div>
                        <div className="">Campaign Reward</div>
                      </div>
                    </div>
                    <div className="text-center inline-flex items-center justify-center text-white bg-[#5867dd] px-3 py-2 capitalize">
                      Join Campaign
                    </div>
                    <div className="triangle-unlock">
                      <div className="rotate-label">Unlock Reward</div>
                    </div>
                  </div>
                  <Image
                    alt=""
                    src={campaign.widget_details.background_image}
                    loading="lazy"
                    fill
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-w-full h-full object-fill"
                  />
                </span>
              </a>
            </div>
          ))
        ) : (
          <div className="col-span-4 w-full flex items-center justify-center min-h-[30vh]">
            <div className="text-3xl text-black/30">No campaigns available</div>
          </div> // Provide a fallback if campaignData is empty or not an array
        )}
      </div>
    </main>
  );
}
