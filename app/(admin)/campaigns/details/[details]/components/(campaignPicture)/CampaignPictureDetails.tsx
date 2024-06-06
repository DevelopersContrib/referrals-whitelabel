"use client";
import Image from "next/image";
import CarImage from "@/public/img/car.jpg";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaEnvelope, FaLinkedin, FaUsers } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaPinterestSquare,
  FaTwitterSquare
} from "react-icons/fa";

import { campaign } from "@/types/campaign";
import { useEffect } from "react";
import { voteOption } from "@/types/voteOption";
import { socialUrls } from "@/types/socialUrls";
import { SocialClicks } from "@/types/socialClicks";
import InviteFriends from "./../InviteFriends";

interface props {
  detail: campaign;
  domain: string;
  voteOptionsData: voteOption[];
  campart_id: string
  socialClicks: SocialClicks;
  socialUrls:socialUrls,
  reward:string,
}

const CampaignPictureDetails = ({ socialUrls, detail, socialClicks,reward, domain, voteOptionsData}: props) => {
  return (
    <section
      className="bg-[#fafafa] p-4 w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${detail.widget_details.background_image ? detail.widget_details.background_image : ""})`
      }}
    >
      <h3 className="font-semibold text-xl 2xl:text-2xl text-center">
        {detail.widget_details.header_title}
      </h3>
      <p className="text-center mb-4">{detail.widget_details.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:lg:grid-cols-4 2xl:grid-cols-5 gap-y-4 lg:gap-4 mb-8">
        {/* Start:: Loop here */}
        {

          voteOptionsData && Array.isArray(voteOptionsData) &&
          voteOptionsData?.map((item) => (
            <div key={item.id} className="flex flex-col w-full h-full p-1 rounded bg-white shadow transition-all hover:scale-[1.02] hover:duration-300">
              <div className="mb-4">
                <Image
                  src={CarImage}
                  width={0}
                  height={0}
                  alt=""
                  className="w-full h-[230px] max-w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-1">
                  <h4 className="font-semibold text-xl capitalize mb-0">{item.option_name}</h4>
                </div>
                <div className="mb-4">
                  Votes: <span className="font-bold">{item.option_votes.length}</span>
                </div>
                  {!item.voted?(
                    <div className="w-full flex-col">
                      <Button className="w-full">Vote</Button>
                    </div>
                  ):null}
              </div>
            </div>
          ))
        }

        
        {/* End:: Loop here */}
      </div>

      {/* Start:: Success  */}
      <div className="bg-[#dfdfdf] w-full p-4 shadow rounded-sm">
        {/* <div className="bg-white shadow rounded p-4 text-center mb-14">
          Thank you for joining our sample photo voting campaign. But wait, to
          receive more entries, you need to invite 1 friend and he/she needs to
          vote too!
        </div> */}
        <div className="mb-4">
          <h3 className="font-semibold text-xl 2xl:text-2xl text-center pb-4 border-b border-[#ddd]">
            {`Hello and welcome to ${domain}'s referral program! we are so excited
          to have you onboard!`}
          </h3>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-4 w-1/2 mx-auto">
          <InviteFriends detail={detail} domain={domain} />
        </div>

        <div className="mb-4 w-full justify-center items-center text-center">
          <ul className="list-none p-0 m-0 space-x-2">
            <li className="list-none inline-flex">
              <a
                target="_blank"
                href={socialUrls.google_plus}
                className={buttonVariants({ variant: "outline" })}
              >
                <span className="mr-2">
                  <FaGooglePlusSquare />
                </span>
                Sign in with Google
              </a>
            </li>
            <li className="list-none inline-flex">
              <a
                target="_blank"
                href={socialUrls.facebook}
                className={buttonVariants({ variant: "outline" })}
              >
                <span className="mr-2">
                  <FaFacebookSquare />
                </span>
                Facebook
              </a>
            </li>
            <li className="list-none inline-flex">
              <a
                target="_blank"
                href={socialUrls.linkedin}
                className={buttonVariants({ variant: "outline" })}
              >
                <span className="mr-2">
                  <FaLinkedin />
                </span>
                Linkedin
              </a>
            </li>
            <li className="list-none inline-flex">
              <a
                target="_blank"
                href={socialUrls.twitter}
                className={buttonVariants({ variant: "outline" })}
              >
                <span className="mr-2">
                  <FaTwitterSquare />
                </span>
                Twitter
              </a>
            </li>
            <li className="list-none inline-flex">
              <a
                target="_blank"
                href={socialUrls.pinterest}
                className={buttonVariants({ variant: "outline" })}
              >
                <span className="mr-2">
                  <FaPinterestSquare />
                </span>
                Pinterest
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4 mt-8 pt-4 border-t border-[#ddd] border-dashed grid grid-cols-1 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-0 gap-y-4">
          <div className="flex flex-col w-full items-center text-center justify-center">
            <div className="mb-1">
              <FaEnvelope className="h-8 w-8" />
            </div>
            <div className="font-bold text-2xl">{socialClicks.email}</div>
          </div>
          <div className="flex flex-col w-full items-center text-center justify-center">
            <div className="mb-1">
              <FaFacebookSquare className="h-8 w-8" />
            </div>
            <div className="font-bold text-2xl">{socialClicks.facebook}</div>
          </div>
          <div className="flex flex-col w-full items-center text-center justify-center">
            <div className="mb-1">
              <FaLinkedin className="h-8 w-8" />
            </div>
            <div className="font-bold text-2xl">{socialClicks.linkedin}</div>
          </div>
          <div className="flex flex-col w-full items-center text-center justify-center">
            <div className="mb-1">
              <FaTwitterSquare className="h-8 w-8" />
            </div>
            <div className="font-bold text-2xl">{socialClicks.twitter}</div>
          </div>
          <div className="flex flex-col w-full items-center text-center justify-center">
            <div className="mb-1">
              <FaPinterestSquare className="h-8 w-8" />
            </div>
            <div className="font-bold text-2xl">{socialClicks.pinterest}</div>
          </div>
          <div className="flex flex-col w-full items-center text-center justify-center">
            <div className="mb-1 text-base font-semibold">
              Rewarded Participants/Value
            </div>
            <div className="font-bold text-5xl">{reward}</div>
          </div>
        </div>
      </div>
      {/* End:: Success  */}
    </section>
  );
};

export default CampaignPictureDetails;
