'use client';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
  } from "@/components/ui/table";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
  } from "@/components/ui/card";

  import { userCampaign } from "@/types/userCampaign";

interface props {
  domain: string;
}
const CampaignTable = ({ domain }: props) => {
    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState<userCampaign[]>();
  useEffect(() => {    
    const getUserCampaigns = async () => {
        setLoading(true);
        const res = await fetch('/api/campaigns/get', {
          method: 'POST',
          body: JSON.stringify({ domain: domain})
        });
        const ret = await res.json()
        if(ret.success){
            const campaigns = ret.data as userCampaign[];
            setTableData(campaigns);
        }
      
      setLoading(false);
    };
    getUserCampaigns();
    // eslint-disable-next-line
  },[]);

  return (
    <>
      <div>
            <Card className="flex flex-col">
              <CardHeader className="px-7">
                <CardTitle>Referral Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead className="table-cell">
                        Email <br /> Clicks
                      </TableHead>
                      <TableHead className="table-cell">
                        FB <br />
                        Clicks
                      </TableHead>
                      <TableHead className="table-cell">
                        Google <br />
                        Clicks
                      </TableHead>
                      <TableHead className="table-cell">
                        Linkedin <br />
                        Clicks
                      </TableHead>
                      <TableHead className="table-cell">
                        Twitter <br />
                        Clicks
                      </TableHead>
                      <TableHead className="table-cell">
                        Pinterest <br />
                        Clicks
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                  {loading ? (
                    <>
                      <ReloadIcon className="h-4 w-4 mr-1 animate-spin" />
                    </>
                  ) : (
                    tableData&& Array.isArray(tableData) &&
                    tableData?.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Link className="text-sm text-blue-600 inline-block" href={"/campaigns/details/"+item.campaign_id}>{item.campaign_name}</Link>
                        </TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                        <TableCell>0</TableCell>
                      </TableRow>
                    ))
                  )}
                  
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
    </>
  );
};

export default CampaignTable;
