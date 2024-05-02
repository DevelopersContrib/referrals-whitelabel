import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Rewards = () => {
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
                <div className="text-gray-500/50 min-h-[25vh] flex items-center justify-center">
                  No Reward History To Display Yet
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

export default Rewards;
