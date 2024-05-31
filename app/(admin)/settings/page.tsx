'use client'; // This directive makes the component a client component

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSession } from "next-auth/react";
import Account from "@/app/(admin)/settings/components/Account";
import Password from "@/app/(admin)/settings/components/Password";
import Wallet from "@/app/(admin)/settings/components/Wallet";
import Deleteaccount from "@/app/(admin)/settings/components/Deleteaccount";


const Settings = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const get = await fetch("/api/user/get", {
          method: "POST",
          body: JSON.stringify({
            id: session?.id
          })
        });
        const result = await get.json();
        //console.log(result);
        setUserData(result.data);
      } else {
        console.log("Session is not available");
      }
    };

    fetchData();
  }, [session]);
  console.log(userData);
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
              <Wallet userData={userData}/>
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
