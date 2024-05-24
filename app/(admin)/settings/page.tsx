import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Account from "@/app/(admin)/settings/components/Account";
import Password from "@/app/(admin)/settings/components/Password";
import Wallet from "@/app/(admin)/settings/components/Wallet";
import Deleteaccount from "@/app/(admin)/settings/components/Deleteaccount";

const Settings = async () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="">
        <Tabs defaultValue="account">
          <div className="inline-flex">
            <TabsList className="inline-flex w-full">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="walletAddress">Wallet Address</TabsTrigger>
              <TabsTrigger value="deleteAccount">Delete Account</TabsTrigger>
            </TabsList>
          </div>
          <div className="w-full lg:w-1/2">
            <TabsContent value="account">
              <Account />
            </TabsContent>
            <TabsContent value="password">
              <Password />
            </TabsContent>
            <TabsContent value="walletAddress">
              <Wallet />
            </TabsContent>
            <TabsContent value="deleteAccount">
              <Deleteaccount />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
};

export default Settings;
