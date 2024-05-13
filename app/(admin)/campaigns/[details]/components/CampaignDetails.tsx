import React from "react";
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaTwitterSquare
} from "react-icons/fa";
import Image from "next/image";

const CampaignDetails = () => {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 main-campaign-details-page">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl capitalize">
            Campaigns Title {/* E.g Social Reward Game */}
          </h1>
        </div>
        <div className="flex flex-col w-full">
          <Card className="flex flex-col">
            <CardHeader className="px-7">
              <CardTitle>WANNA BE PART OF OUR GROWING TEAM?</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="invite">
                <div className="inline-flex">
                  <TabsList className="inline-flex w-full">
                    <TabsTrigger value="invite">Invite</TabsTrigger>
                    <TabsTrigger value="inviteList">Invite List</TabsTrigger>
                  </TabsList>
                </div>
                <div className="w-full">
                  <TabsContent value="invite">
                    <div className="grid w-full grid-cols-1 gap-y-4 lg:gap-x-4 lg:grid-cols-6 my-8">
                      <div className="flex flex-col w-full items-center text-center justify-center">
                        <div className="mb-1">
                          <FaEnvelope className="h-8 w-8" />
                        </div>
                        <div className="font-bold text-2xl">0</div>
                      </div>
                      <div className="flex flex-col w-full items-center text-center justify-center">
                        <div className="mb-1">
                          <FaFacebookSquare className="h-8 w-8" />
                        </div>
                        <div className="font-bold text-2xl">0</div>
                      </div>
                      <div className="flex flex-col w-full items-center text-center justify-center">
                        <div className="mb-1">
                          <FaLinkedin className="h-8 w-8" />
                        </div>
                        <div className="font-bold text-2xl">0</div>
                      </div>
                      <div className="flex flex-col w-full items-center text-center justify-center">
                        <div className="mb-1">
                          <FaTwitterSquare className="h-8 w-8" />
                        </div>
                        <div className="font-bold text-2xl">0</div>
                      </div>
                      <div className="flex flex-col w-full items-center text-center justify-center">
                        <div className="mb-1">
                          <FaPinterestSquare className="h-8 w-8" />
                        </div>
                        <div className="font-bold text-2xl">0</div>
                      </div>
                      <div className="flex flex-col w-full items-center text-center justify-center">
                        <div className="mb-1 text-base font-semibold">
                          Rewarded Participants/Value
                        </div>
                        <div className="font-bold text-5xl">40 for $195</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4 w-full mb-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>Campaign Description</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4">
                            <Image
                              src={`https://www.referrals.com/assets/uploads/widget/1571967803.jpg`}
                              width={0}
                              height={0}
                              alt=""
                              sizes="100vw"
                              className="img-fluid w-full h-auto object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="mb-4">
                            WANNA BE PART OF OUR GROWING TEAM?
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Contest</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
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
                            <TableRow>
                              <TableCell>
                                <a
                                  href="#"
                                  className="text-sm text-blue-600 inline-block"
                                >
                                  Contrib Partner Blog Banner
                                </a>
                              </TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <a
                                  href="#"
                                  className="text-sm text-blue-600 inline-block"
                                >
                                  Contrib Partner Blog Banner
                                </a>
                              </TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                              <TableCell>0</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="inviteList">
                    <Card>
                      <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                          Change your password here. After saving, you&apos;ll
                          be logged out.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        content here 2
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default CampaignDetails;
