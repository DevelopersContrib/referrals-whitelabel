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
import { FaCheck, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaPinterestSquare,
  FaShareAlt,
  FaTwitterSquare
} from "react-icons/fa";
import Image from "next/image";
import WaysToShareComponent from "./WaysToShareComponent";
import InviteListComponent from "./InviteListComponent";
import { campaign } from "@/types/campaign";

interface props {
  detail: campaign;
}

const CampaignDetails = ({ detail }: props) => {
  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 main-campaign-details-page">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl capitalize">
             { /* E.g Social Reward Game */}
             {detail.name }
          </h1>
        </div>
        <div className="flex flex-col w-full">
          <Card className="flex flex-col">
            <CardHeader className="px-7">
              <CardTitle>{detail.widget_details.header_title}</CardTitle>
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
                              src={detail.widget_details.background_image}
                              width={0}
                              height={0}
                              alt=""
                              sizes="100vw"
                              className="img-fluid w-full h-auto object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="mb-8">
                            <h2 className="text-xl mb-4">
                            {detail.widget_details.header_title}
                            </h2>
                            <p className="text-sm mb-4">
                            {detail.widget_details.description}
                            </p>
                          </div>
                          <div className="w-full flex items-center">
                            <div className="flex mr-2">
                              <Image
                                src={`https://www.referrals.com/assets/uploads/2a72c1044d2e219c8a937a86a27229e0.png`}
                                width={0}
                                height={0}
                                alt=""
                                sizes="100vw"
                                className="img-fluid w-full h-auto object-contain"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-grow">
                              <p className="text-sm">
                              {detail.widget_details.body_text}
                              </p>
                              <br />
                              <p className="text-sm">
                                <strong>GET 50 CTB TOKENS</strong> just for
                                sharing <strong>Contrib</strong> to your
                                followers!
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Campaign Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-8">
                            <h3 className="uppercase text-xl mb-1">REWARD:</h3>
                            <div className="mb-4 flex items-center text-sm">
                              <FaCheck className="h-4 w-4 mr-2" />
                              <span className="font-light">TOKENS</span>
                            </div>
                          </div>
                          <div className="mb-8">
                            <h3 className="uppercase text-xl mb-1">INFO:</h3>
                            <div className="mb-4 flex items-top text-sm">
                              <FaCheck className="h-4 w-4 mr-2" />
                              <span className="font-light">
                                YOU WILL BE SENT A REWARD NOTIFICATION VIA EMAIL
                                AND YOU CAN CHECK YOUR REWARDS HERE [{" "}
                                <a href="#" className="text-blue-600">
                                  LINK REWARD PAGE
                                </a>{" "}
                                ]
                              </span>
                            </div>
                          </div>
                          <div className="mb-8">
                            <h3 className="uppercase text-xl mb-1">
                              HOW TO GET REWARD:
                            </h3>
                            <div className="mb-4 flex items-center text-sm">
                              <FaCheck className="h-4 w-4 mr-2" />
                              <span className="font-light">
                                REFER TO [{" "}
                                <a href="#" className="uppercase text-blue-600">
                                  CONTRIB.COM
                                </a>{" "}
                                ]
                              </span>
                            </div>
                          </div>
                          <div className="mb-8">
                            <h3 className="uppercase text-xl mb-4 flex items-center">
                              <span className="inline-flex mr-1">
                                <FaShareAlt />
                              </span>
                              WAYS TO SHARE TO YOUR FRIENDS:
                            </h3>
                            <div className="mb-4 w-full">
                              <WaysToShareComponent />
                            </div>
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
                              <TableHead>Contests</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                <a
                                  href="#"
                                  className="text-sm text-blue-600 inline-block"
                                >
                                  Top sharer
                                </a>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <a
                                  href="#"
                                  className="text-sm text-blue-600 inline-block"
                                >
                                  Top sharer
                                </a>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="inviteList">
                    <InviteListComponent />
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
