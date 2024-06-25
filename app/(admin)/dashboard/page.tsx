import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import dynamic from "next/dynamic";
import { getDomain } from "@/data/data";
import { GetUserRewards } from "@/lib/data";
import CampaignTable from "./components/CampainTable";
import { IoIosNotifications } from "react-icons/io";
const DynamicContent = dynamic(() => import("@/components/DynamicContent"), {
  ssr: false
});

const Dashboard = async () => {
  const domain = getDomain();
  const rewards = await GetUserRewards();
  const items: any[] = rewards.data as any[];
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl capitalize">
            Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-4 lg:gap-4">
          <CampaignTable domain={domain} />
          <div>
            <Card className="flex flex-col">
              <CardHeader className="px-7">
                <CardTitle>Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="min-h-[25vh] flex items-center justify-center">
                  {items.length > 0 ? (
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
                    <div>No Reward History To Display Yet </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
