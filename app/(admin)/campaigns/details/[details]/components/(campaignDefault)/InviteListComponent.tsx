"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { useState, useEffect } from "react";
import { inviteList } from "@/types/inviteList";
import { socialHistory } from "@/types/socialHistory";
import { ReloadIcon } from "@radix-ui/react-icons";

interface props {
  domain: string;
  campaign_id: number;
}

const InviteListComponent = ({ domain,campaign_id }: props) => {
  const [loadingInvites, setLoadingInvites] = useState(false);
  const [loadingSocial, setLoadingSocial] = useState(false);
  const [inviteData, setInviteData] = useState<inviteList[]>();
  const [socialData, setSocialData] = useState<socialHistory[]>();
  
  useEffect(() => {
  const getInviteList = async () => {
    setLoadingInvites(true);
      const res = await fetch('/api/invite/list', {
        method: 'POST',
        body: JSON.stringify({ domain: domain,campaign_id:campaign_id})
      });
      const ret = await res.json()
      if(ret.success){
          const campaigns = ret.data as inviteList[];
          setInviteData(campaigns);
      }
    
      setLoadingInvites(false);
  };
  getInviteList();

  const getSocialHistory = async () => {
      setLoadingSocial(true);
      const res = await fetch('/api/invite/social/history', {
        method: 'POST',
        body: JSON.stringify({ domain: domain,campaign_id:campaign_id})
      });
      const ret = await res.json()
      if(ret.success){
          const social = ret.data as socialHistory[];
          setSocialData(social);
      }
    setLoadingSocial(false);
  };
  getSocialHistory();
  // eslint-disable-next-line
},[]);

const reSend = async (id: number) => {
  const res = await fetch('/api/invite/resend', {
    method: 'POST',
    body: JSON.stringify({id:id, domain: domain,campaign_id:campaign_id})
  });
  const ret = await res.json()
  if(ret.success){
  }
};

  return (
    <>
      <Card className="my-4">
        <CardContent className="pt-4">
          <Tabs defaultValue="emailInvites">
            <div className="inline-flex">
              <TabsList className="inline-flex w-full">
                <TabsTrigger value="emailInvites">Email Invites</TabsTrigger>
                <TabsTrigger value="socialShareHistory">
                  Social Share History
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="w-full">
              <TabsContent value="emailInvites">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="table-cell">Name</TableHead>
                      <TableHead className="table-cell">Email</TableHead>
                      <TableHead className="table-cell">Date Invited</TableHead>
                      <TableHead className="table-cell">Action</TableHead>
                      <TableHead className="table-cell">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                  {loadingInvites ? (
                    <>
                      <ReloadIcon className="h-4 w-4 mr-1 animate-spin" />
                    </>
                  ) : (
                    inviteData && Array.isArray(inviteData) &&
                    inviteData?.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            {item.name}
                          </TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.date_sent}</TableCell>
                          <TableCell></TableCell>
                          <TableCell>
                            <Button onClick={() => reSend(item.id)} variant={"outline"}>
                              Resend
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                  )}
                    
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="socialShareHistory">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>History</TableHead>
                      <TableHead className="table-cell">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loadingSocial ? (
                      <>
                        <ReloadIcon className="h-4 w-4 mr-1 animate-spin" />
                      </>
                    ) : (
                      socialData && Array.isArray(socialData) &&
                      socialData?.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              {item.name}
                            </TableCell>
                            <TableCell>
                            </TableCell>
                          </TableRow>
                        ))
                    )}
                  </TableBody>
                </Table>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default InviteListComponent;
