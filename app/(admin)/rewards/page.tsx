import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import dynamic from "next/dynamic";
import { IoIosNotifications } from "react-icons/io";
import { GetUserRewards,GetPendingRewards } from "@/lib/data";
const DynamicContent = dynamic(() => import("@/components/DynamicContent"), {
  ssr: false
});
const Rewards = async () => {
  const rewards = await GetUserRewards();
  const items: any[] = rewards.data as any[];

  const pendingRewards = await GetPendingRewards();
  const pendingItems: any[] = pendingRewards.data as any[];
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-y-4">
          <div>
            <Card className="flex flex-col">
              <CardHeader className="px-7">
                <CardTitle>Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                
                <div className="min-h-[25vh] flex items-center justify-center">
                  {items?.length > 0 ? (
                    <ul className="flex flex-col gap-y-3 max-h-[500px] overflow-y-auto pr-4 w-full">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="text-black/70 text-sm flex items-center border-b border-gray-300 border-dashed py-2"
                        >
                          <IoIosNotifications className="h-8 w-8 mr-2 text-red-400" />
                          <DynamicContent html={item} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-gray-500/50 min-h-[25vh] flex items-center justify-center">
                      No Reward History To Display Yet
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="flex flex-col">
              <CardHeader className="px-7">
                <CardTitle>Pending Rewards</CardTitle>
              </CardHeader>
              <CardContent>
              {pendingItems?.length > 0 ? (
                    <ul className="flex flex-col gap-y-3 max-h-[500px] overflow-y-auto pr-4 w-full">
                      {pendingItems.map((item) => (
                        <li
                          key={item}
                          className="text-black/70 text-sm flex items-center border-b border-gray-300 border-dashed py-2"
                        >
                          <IoIosNotifications className="h-8 w-8 mr-2 text-red-400" />
                          <DynamicContent html={item} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-gray-500/50 min-h-[25vh] flex items-center justify-center">
                    No Reward History To Display Yet
                  </div>
                  )}
                
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Rewards;
