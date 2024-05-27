"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

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
interface props {
  domain: string;
  campaign_id: number;
}

const InviteListComponent = ({ domain,campaign_id }: props) => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState<inviteList[]>();
  useEffect(() => {    
  const getInviteList = async () => {
      setLoading(true);
      const res = await fetch('/api/invite/list', {
        method: 'POST',
        body: JSON.stringify({ domain: domain,campaign_id:campaign_id})
      });
      const ret = await res.json()
      if(ret.success){
          const campaigns = ret.data as inviteList[];
          setTableData(campaigns);
      }
    
    setLoading(false);
  };
  getInviteList();
  // eslint-disable-next-line
},[]);
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
                      <TableHead className="table-cell">Name...</TableHead>
                      <TableHead className="table-cell">Email</TableHead>
                      <TableHead className="table-cell">Date Invited</TableHead>
                      <TableHead className="table-cell">Action</TableHead>
                      <TableHead className="table-cell">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData&& Array.isArray(tableData) &&
                      tableData?.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            {item.name}
                          </TableCell>
                          <TableCell>{item.email}</TableCell>
                          <TableCell>{item.date_sent}</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      ))
                    }
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
                    <TableRow>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
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
