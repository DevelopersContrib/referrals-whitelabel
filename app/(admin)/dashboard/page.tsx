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

import { getDomain } from "@/data/data";
import CampaignTable from "./components/CampainTable";

const Dashboard = async () => {
  const domain = getDomain();

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl capitalize">
            Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4">
          <CampaignTable domain={domain} />
          <div>
            <Card className="flex flex-col">
              <CardHeader className="px-7">
                <CardTitle>Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-500/50 min-h-[25vh] flex items-center justify-center">
                  No Reward History To Display Yet
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
